
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMic, FiSquare, FiTrash2, FiStar } from "react-icons/fi";

import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/AuthContext";
import "../../styles/PremiumReviews.css";

const BUCKET = "premium-review-audio";
const MAX_RECORDING_MS = 90_000;
const MAX_AUDIO_BYTES = 15 * 1024 * 1024;

function getAudioType() {
  if (!window.MediaRecorder) return "";

  return [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4",
    "audio/ogg;codecs=opus",
  ].find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

function extensionFor(type) {
  if (type.includes("mp4")) return "mp4";
  if (type.includes("ogg")) return "ogg";
  return "webm";
}

export function PremiumReviewForm() {
  const { user, profile, isPremium, loading } = useAuth();

  const [reviewText, setReviewText] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);
  const startedAtRef = useRef(0);
  const stopTimerRef = useRef(null);

  useEffect(() => {
    setDisplayName(profile?.full_name || "");
  }, [profile?.full_name]);

  useEffect(() => {
    return () => {
      if (stopTimerRef.current) {
        clearTimeout(stopTimerRef.current);
      }
      if (recorderRef.current?.state === "recording") {
        recorderRef.current.stop();
      }
      streamRef.current?.getTracks().forEach((track) => track.stop());
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  const releaseMic = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  };

  const clearRecording = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl("");
    setAudioBlob(null);
    setSeconds(0);
  };

  const startRecording = async () => {
    setMessage("");

    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      setMessage("Your browser does not support voice recording.");
      return;
    }

    try {
      clearRecording();

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      streamRef.current = stream;
      chunksRef.current = [];

      const mimeType = getAudioType();
      const recorder = new MediaRecorder(
        stream,
        mimeType ? { mimeType } : undefined
      );

      recorderRef.current = recorder;
      startedAtRef.current = Date.now();

      recorder.ondataavailable = (event) => {
        if (event.data?.size) chunksRef.current.push(event.data);
      };

      recorder.onerror = () => {
        setMessage("Recording failed. Please try again.");
        setRecording(false);
        releaseMic();
      };

      recorder.onstop = () => {
        const type = recorder.mimeType || mimeType || "audio/webm";
        const blob = new Blob(chunksRef.current, { type });

        releaseMic();
        setRecording(false);

        if (!blob.size) {
          setMessage("No audio was recorded. Please try again.");
          return;
        }

        if (blob.size > MAX_AUDIO_BYTES) {
          setMessage("Recording is too large. Please record a shorter review.");
          clearRecording();
          return;
        }

        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        setSeconds(Math.ceil((Date.now() - startedAtRef.current) / 1000));
      };

      recorder.start();
      setRecording(true);

      stopTimerRef.current = setTimeout(() => {
        if (recorder.state === "recording") recorder.stop();
      }, MAX_RECORDING_MS);
    } catch (error) {
      releaseMic();
      setMessage(
        error?.name === "NotAllowedError"
          ? "Please allow microphone access to record a review."
          : "Could not start recording. Check your microphone and try again."
      );
    }
  };

  const stopRecording = () => {
    if (stopTimerRef.current) clearTimeout(stopTimerRef.current);

    if (recorderRef.current?.state === "recording") {
      recorderRef.current.stop();
    }
  };

  const submitReview = async (event) => {
    event.preventDefault();
    setMessage("");

    const cleanText = reviewText.trim();
    const cleanName = displayName.trim();

    if (!user) {
      setMessage("Please sign in to submit a review.");
      return;
    }

    if (!isPremium) {
      setMessage("An active Premium subscription is required.");
      return;
    }

    if (!cleanName || cleanName.length > 80) {
      setMessage("Enter a display name of up to 80 characters.");
      return;
    }

    if (!cleanText && !audioBlob) {
      setMessage("Write a review or record a voice review.");
      return;
    }

    if (cleanText.length > 2000) {
      setMessage("Your written review must be 2,000 characters or fewer.");
      return;
    }

    setBusy(true);
    let uploadedPath = null;

    try {
      const reviewId = crypto.randomUUID();

      if (audioBlob) {
        const extension = extensionFor(audioBlob.type);
        uploadedPath = `${user.id}/${reviewId}.${extension}`;

        const { error: uploadError } = await supabase.storage
          .from(BUCKET)
          .upload(uploadedPath, audioBlob, {
            contentType: audioBlob.type,
            upsert: false,
          });

        if (uploadError) throw uploadError;
      }

      const { error: insertError } = await supabase
        .from("premium_reviews")
        .insert({
          id: reviewId,
          user_id: user.id,
          display_name: cleanName,
          review_text: cleanText || null,
          audio_path: uploadedPath,
        });

      if (insertError) throw insertError;

      setReviewText("");
      clearRecording();
      setMessage("Thank you! Your review is now published.");
    } catch (error) {
      console.error("Review submission failed:", error);

      // Best-effort cleanup if upload succeeded but insertion failed.
      if (uploadedPath) {
        const { error: cleanupError } = await supabase.storage
          .from(BUCKET)
          .remove([uploadedPath]);

        if (cleanupError) {
          console.error("Audio cleanup failed:", cleanupError);
        }
      }

      setMessage(
        error?.message ||
          "Could not submit your review. Please try again."
      );
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <p>Checking your account…</p>;

  if (!user) {
    return (
      <div className="review-access-note">
        <p>Sign in with your EXAMITICS account to share your experience.</p>
        <Link to="/login">Sign in</Link>
      </div>
    );
  }

  if (!isPremium) {
    return (
      <div className="review-access-note">
        <p>Review submission is available to candidates with active Premium access.</p>
        <Link to="/premium">Explore Premium</Link>
      </div>
    );
  }

  return (
    <form className="premium-review-form" onSubmit={submitReview}>
      <h2>Share your EXAMITICS experience</h2>
      <p className="review-form-intro">
        Your review will be published immediately and visible to other visitors.
        Do not include your email address, phone number, or other private details.
      </p>

      <label htmlFor="review-display-name">Display name</label>
      <input
        id="review-display-name"
        value={displayName}
        maxLength={80}
        onChange={(event) => setDisplayName(event.target.value)}
        required
      />

      <label htmlFor="review-text">Written review (optional)</label>
      <textarea
        id="review-text"
        value={reviewText}
        maxLength={2000}
        rows={5}
        onChange={(event) => setReviewText(event.target.value)}
        placeholder="Tell other candidates how EXAMITICS helped you prepare…"
      />
      <span className="review-character-count">
        {reviewText.length}/2000
      </span>

      <div className="review-recording-controls">
        {!recording ? (
          <button type="button" onClick={startRecording} disabled={busy}>
            <FiMic /> {audioBlob ? "Record again" : "Record voice review"}
          </button>
        ) : (
          <button type="button" onClick={stopRecording}>
            <FiSquare /> Stop recording
          </button>
        )}

        {recording && <span>Recording… (maximum 90 seconds)</span>}

        {audioBlob && !recording && (
          <div className="review-audio-preview">
            <audio controls src={audioUrl} />
            <button type="button" className="review-remove-audio" onClick={clearRecording}>
              <FiTrash2 /> Remove recording
            </button>
          </div>
        )}
      </div>

      {message && (
        <p className="review-form-message" role="status">{message}</p>
      )}

      <label className="review-consent">
        <input type="checkbox" required />
        <span>
          I agree that my display name, written review and/or voice recording
          may be shown publicly on EXAMITICS.
        </span>
      </label>

      <button className="review-submit-btn" type="submit" disabled={busy || recording}>
        {busy ? "Publishing…" : "Publish review"}
      </button>
    </form>
  );
}

export function PremiumReviewCarousel() {
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadReviews() {
      setLoadingReviews(true);

      const { data, error } = await supabase
        .from("premium_reviews")
        .select("id, display_name, review_text, audio_path, created_at")
        .order("created_at", { ascending: false })
        .limit(30);

      if (error) {
        console.error("Could not load reviews:", error);
        if (!cancelled) setReviews([]);
        if (!cancelled) setLoadingReviews(false);
        return;
      }

      const withAudio = await Promise.all(
        (data || []).map(async (review) => {
          if (!review.audio_path) return { ...review, audioUrl: "" };

          const { data: signed, error: signedError } = await supabase.storage
            .from(BUCKET)
            .createSignedUrl(review.audio_path, 60 * 60);

          if (signedError) {
            console.error("Could not create audio URL:", signedError);
          }

          return { ...review, audioUrl: signed?.signedUrl || "" };
        })
      );

      if (!cancelled) setReviews(withAudio);
      if (!cancelled) setLoadingReviews(false);
    }

    loadReviews();
    return () => { cancelled = true; };
  }, []);

  if (loadingReviews) return <section className="reviews-section"><p>Loading candidate reviews…</p></section>;
  if (!reviews.length) return null;

  return (
    <section className="reviews-section" aria-label="Candidate reviews">
      <div className="reviews-heading">
        <div>
          <span className="reviews-eyebrow">CANDIDATE EXPERIENCES</span>
          <h2>What candidates say about EXAMITICS</h2>
          <p>Experiences shared by our Premium candidates.</p>
        </div>
        <Link to="/review">View all reviews</Link>
      </div>

      <div className="reviews-track-window">
        <div className="reviews-track">
          {[...reviews, ...reviews].map((review, index) => (
            <article className="candidate-review-card" key={`${review.id}-${index}`}>
              <div className="candidate-review-name">
                <span className="review-avatar">
                  {(review.display_name || "C").charAt(0).toUpperCase()}
                </span>
                <div>
                  <strong>{review.display_name}</strong>
                  <span>EXAMITICS candidate</span>
                </div>
              </div>

              {review.review_text && <p>{review.review_text}</p>}

              {review.audioUrl && (
                <audio controls preload="none" src={review.audioUrl}>
                  Your browser does not support audio playback.
                </audio>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PremiumReviewCarousel;
