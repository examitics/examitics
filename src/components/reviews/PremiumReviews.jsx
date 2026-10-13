
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMic,
  FiSquare,
  FiTrash2,
  FiPlay,
  FiPause,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/AuthContext";
import "../../styles/PremiumReviews.css";

const BUCKET = "premium-review-audio";
const MAX_RECORDING_MS = 90_000;
const MAX_AUDIO_BYTES = 15 * 1024 * 1024;

/* =========================================================
   Custom audio player
   Replaces native audio controls and the three-dot menu.
========================================================= */

export function ReviewAudioPlayer({ src }) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setHasError(false);

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [src]);

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio || hasError) return;

    if (audio.paused) {
      if (
        Number.isFinite(audio.duration) &&
        audio.currentTime >= audio.duration
      ) {
        audio.currentTime = 0;
      }

      try {
        await audio.play();
      } catch (error) {
        console.error("Review audio playback failed:", error);
        setIsPlaying(false);
      }
    } else {
      audio.pause();
    }
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;

    if (!audio || !Number.isFinite(audio.duration)) return;

    const nextTime = Number(event.target.value);

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const progress =
    duration > 0
      ? Math.min(100, Math.max(0, (currentTime / duration) * 100))
      : 0;

  return (
    <div className="review-audio-player">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={(event) => {
          const loadedDuration = event.currentTarget.duration;

          setDuration(
            Number.isFinite(loadedDuration) ? loadedDuration : 0
          );
        }}
        onDurationChange={(event) => {
          const loadedDuration = event.currentTarget.duration;

          setDuration(
            Number.isFinite(loadedDuration) ? loadedDuration : 0
          );
        }}
        onTimeUpdate={(event) => {
          setCurrentTime(event.currentTarget.currentTime || 0);
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
        onError={() => {
          setHasError(true);
          setIsPlaying(false);
        }}
      />

      {hasError ? (
        <p className="review-audio-error" role="status">
          Audio is currently unavailable.
        </p>
      ) : (
        <>
          <button
            type="button"
            className="review-audio-play-btn"
            onClick={togglePlayback}
            aria-label={
              isPlaying ? "Pause review audio" : "Play review audio"
            }
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>

          <div className="review-audio-track">
            <input
              className="review-audio-range"
              type="range"
              min="0"
              max={duration || 1}
              step="0.1"
              value={Math.min(currentTime, duration || 0)}
              onChange={handleSeek}
              disabled={!duration || hasError}
              aria-label="Seek through review audio"
              aria-valuetext={`${formatTime(currentTime)} of ${formatTime(
                duration
              )}`}
              style={{
                "--audio-progress": `${progress}%`,
              }}
            />

            <div className="review-audio-times">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* =========================================================
   Audio recording helpers
========================================================= */

function getAudioType() {
  if (!window.MediaRecorder) return "";

  return (
    [
      "audio/webm;codecs=opus",
      "audio/webm",
      "audio/mp4",
      "audio/ogg;codecs=opus",
    ].find((type) => MediaRecorder.isTypeSupported(type)) || ""
  );
}

function extensionFor(type) {
  if (type.includes("mp4")) return "mp4";
  if (type.includes("ogg")) return "ogg";
  return "webm";
}

/* =========================================================
   Premium review submission form
========================================================= */

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
  const [toast, setToast] = useState(null);

  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);
  const startedAtRef = useRef(0);
  const stopTimerRef = useRef(null);
  const submittingRef = useRef(false);

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

      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  // Automatically dismiss success and error notifications.
  // Keep the submitting notification visible until the request finishes.
  useEffect(() => {
    if (!toast || toast.type === "loading") return;

    const timeout = setTimeout(() => {
      setToast(null);
    }, 4500);

    return () => clearTimeout(timeout);
  }, [toast]);

  const releaseMic = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  };

  const clearRecording = () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }

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
        if (event.data?.size) {
          chunksRef.current.push(event.data);
        }
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
          setMessage(
            "Recording is too large. Please record a shorter review."
          );
          clearRecording();
          return;
        }

        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        setSeconds(
          Math.ceil((Date.now() - startedAtRef.current) / 1000)
        );
      };

      recorder.start();
      setRecording(true);

      stopTimerRef.current = setTimeout(() => {
        if (recorder.state === "recording") {
          recorder.stop();
        }
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
    if (stopTimerRef.current) {
      clearTimeout(stopTimerRef.current);
      stopTimerRef.current = null;
    }

    if (recorderRef.current?.state === "recording") {
      recorderRef.current.stop();
    }
  };

  const submitReview = async (event) => {
    event.preventDefault();

    // Prevent duplicate requests, including rapid repeated clicks.
    if (submittingRef.current) return;

    setMessage("");
    setToast(null);

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

    submittingRef.current = true;
    setBusy(true);

    setToast({
      type: "loading",
      text: "Submitting your review…",
    });

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
      setMessage("");

      setToast({
        type: "success",
        text: "Review submitted successfully!",
      });
    } catch (error) {
      console.error("Review submission failed:", error);

      // Best-effort cleanup if audio upload succeeded but insertion failed.
      if (uploadedPath) {
        const { error: cleanupError } = await supabase.storage
          .from(BUCKET)
          .remove([uploadedPath]);

        if (cleanupError) {
          console.error("Audio cleanup failed:", cleanupError);
        }
      }

      setMessage("");

      setToast({
        type: "error",
        text: "Unable to submit your review. Please try again.",
      });
    } finally {
      submittingRef.current = false;
      setBusy(false);
    }
  };

  if (loading) {
    return <p>Checking your account…</p>;
  }

  if (!user) {
    return (
      <div className="review-access-note">
        <p>
          Sign in with your EXAMITICS account to share your experience.
        </p>
        <Link to="/login">Sign in</Link>
      </div>
    );
  }

  if (!isPremium) {
    return (
      <div className="review-access-note">
        <p>
          Review submission is available to candidates with active Premium
          access.
        </p>
        <Link to="/premium">Explore Premium</Link>
      </div>
    );
  }

  return (
    <form className="premium-review-form" onSubmit={submitReview}>
      {toast && (
        <div
          className={`review-toast review-toast--${toast.type}`}
          role={toast.type === "error" ? "alert" : "status"}
          aria-live={toast.type === "error" ? "assertive" : "polite"}
        >
          <span className="review-toast-icon" aria-hidden="true">
            {toast.type === "success" && <FiCheckCircle />}
            {toast.type === "error" && <FiAlertCircle />}
            {toast.type === "loading" && (
              <FiLoader className="review-toast-spinner" />
            )}
          </span>

          <span className="review-toast-text">{toast.text}</span>

          {toast.type !== "loading" && (
            <button
              type="button"
              className="review-toast-close"
              onClick={() => setToast(null)}
              aria-label="Dismiss notification"
            >
              ×
            </button>
          )}
        </div>
      )}

      <h2>Share your EXAMITICS experience</h2>

      <p className="review-form-intro">
        Your review will be published immediately and visible to other
        visitors. Do not include your email address, phone number, or other
        private details.
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
          <button
            type="button"
            onClick={startRecording}
            disabled={busy}
          >
            <FiMic />
            {audioBlob ? "Record again" : "Record voice review"}
          </button>
        ) : (
          <button type="button" onClick={stopRecording}>
            <FiSquare />
            Stop recording
          </button>
        )}

        {recording && (
          <span>
            Recording… (maximum 90 seconds)
          </span>
        )}

        {audioBlob && !recording && (
          <div className="review-audio-preview">
            <ReviewAudioPlayer src={audioUrl} />

            <span className="review-recording-duration">
              Recording length: {seconds} seconds
            </span>

            <button
              type="button"
              className="review-remove-audio"
              onClick={clearRecording}
              disabled={busy}
            >
              <FiTrash2 />
              Remove recording
            </button>
          </div>
        )}
      </div>

      {message && (
        <p className="review-form-message" role="status">
          {message}
        </p>
      )}

      <label className="review-consent">
        <input type="checkbox" required />
        <span>
          I agree that my display name, written review and/or voice
          recording may be shown publicly on EXAMITICS.
        </span>
      </label>

      <button
        className="review-submit-btn"
        type="submit"
        disabled={busy || recording}
      >
        {busy ? "Publishing…" : "Publish review"}
      </button>
    </form>
  );
}

/* =========================================================
   Published review carousel
========================================================= */

// export function PremiumReviewCarousel() {
//   const [reviews, setReviews] = useState([]);
//   const [loadingReviews, setLoadingReviews] = useState(true);

//   useEffect(() => {
//     let cancelled = false;

//     async function loadReviews() {
//       setLoadingReviews(true);

//       const { data, error } = await supabase
//         .from("premium_reviews")
//         .select("id, display_name, review_text, audio_path, created_at")
//         .order("created_at", { ascending: false })
//         .limit(30);

//       if (error) {
//         console.error("Could not load reviews:", error);

//         if (!cancelled) {
//           setReviews([]);
//           setLoadingReviews(false);
//         }

//         return;
//       }

//       const withAudio = await Promise.all(
//         (data || []).map(async (review) => {
//           if (!review.audio_path) {
//             return { ...review, audioUrl: "" };
//           }

//           const { data: signed, error: signedError } = await supabase.storage
//             .from(BUCKET)
//             .createSignedUrl(review.audio_path, 60 * 60);

//           if (signedError) {
//             console.error("Could not create audio URL:", signedError);
//           }

//           return {
//             ...review,
//             audioUrl: signed?.signedUrl || "",
//           };
//         })
//       );

//       if (!cancelled) {
//         setReviews(withAudio);
//         setLoadingReviews(false);
//       }
//     }

//     loadReviews();

//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   if (loadingReviews) {
//     return (
//       <section className="reviews-section">
//         <p>Loading candidate reviews…</p>
//       </section>
//     );
//   }

//   if (!reviews.length) return null;

//   return (
//     <section
//       className="reviews-section"
//       aria-label="Candidate reviews"
//     >
//       <div className="reviews-heading">
//         <div>
//           <span className="reviews-eyebrow">
//             CANDIDATE EXPERIENCES
//           </span>

//           <h2>What candidates say about EXAMITICS</h2>

//           <p>
//             Experiences shared by our Premium candidates.
//           </p>
//         </div>

//         <Link to="/review">View all reviews</Link>
//       </div>

//       <div className="reviews-track-window">
//         <div className="reviews-track">
//           {[...reviews, ...reviews].map((review, index) => (
//             <article
//               className="candidate-review-card"
//               key={`${review.id}-${index}`}
//             >
//               <div className="candidate-review-name">
//                 <span className="review-avatar">
//                   {(review.display_name || "C")
//                     .charAt(0)
//                     .toUpperCase()}
//                 </span>

//                 <div>
//                   <strong>{review.display_name}</strong>
//                   <span>EXAMITICS candidate</span>
//                 </div>
//               </div>

//               {review.review_text && (
//                 <p>{review.review_text}</p>
//               )}

//               {review.audioUrl && (
//                 <ReviewAudioPlayer src={review.audioUrl} />
//               )}
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export function PremiumReviewCarousel() {
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const viewportRef = useRef(null);
  const dragRef = useRef(null);

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

        if (!cancelled) {
          setReviews([]);
          setLoadingReviews(false);
        }

        return;
      }

      const withAudio = await Promise.all(
        (data || []).map(async (review) => {
          if (!review.audio_path) {
            return { ...review, audioUrl: "" };
          }

          const { data: signed, error: signedError } =
            await supabase.storage
              .from(BUCKET)
              .createSignedUrl(review.audio_path, 60 * 60);

          if (signedError) {
            console.error(
              "Could not create audio URL:",
              signedError
            );
          }

          return {
            ...review,
            audioUrl: signed?.signedUrl || "",
          };
        })
      );

      if (!cancelled) {
        setReviews(withAudio);
        setLoadingReviews(false);
      }
    }

    loadReviews();

    return () => {
      cancelled = true;
    };
  }, []);

  // Keep the navigation buttons and position indicator in sync.
  const updateNavigation = () => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const maxScroll =
      viewport.scrollWidth - viewport.clientWidth;

    setCanGoPrev(viewport.scrollLeft > 4);
    setCanGoNext(viewport.scrollLeft < maxScroll - 4);

    const firstCard = viewport.querySelector(
      ".candidate-review-card"
    );
    const track = viewport.querySelector(".reviews-track");

    if (firstCard && track && reviews.length) {
      const gap =
        parseFloat(getComputedStyle(track).gap) || 18;

      const step = firstCard.getBoundingClientRect().width + gap;

      setActiveIndex(
        Math.min(
          reviews.length - 1,
          Math.max(0, Math.round(viewport.scrollLeft / step))
        )
      );
    } else {
      setActiveIndex(0);
    }
  };

  useEffect(() => {
    updateNavigation();

    window.addEventListener("resize", updateNavigation);

    return () => {
      window.removeEventListener("resize", updateNavigation);
    };
  }, [reviews.length]);

  // Move approximately one review card per arrow click.
  const moveCarousel = (direction) => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const firstCard = viewport.querySelector(
      ".candidate-review-card"
    );
    const track = viewport.querySelector(".reviews-track");

    if (!firstCard || !track) return;

    const gap = parseFloat(getComputedStyle(track).gap) || 18;
    const step = firstCard.getBoundingClientRect().width + gap;

    viewport.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  };

  // Enable click-and-drag for mouse users.
  // Do not hijack clicks on audio controls or buttons.
  const handlePointerDown = (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    if (
      event.target.closest?.(
        "button, input, audio, a, .review-audio-player"
      )
    ) {
      return;
    }

    const viewport = viewportRef.current;

    if (!viewport) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: viewport.scrollLeft,
      moved: false,
    };

    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    const viewport = viewportRef.current;

    if (
      !drag ||
      !viewport ||
      drag.pointerId !== event.pointerId
    ) {
      return;
    }

    const distance = event.clientX - drag.startX;

    if (Math.abs(distance) > 4) {
      drag.moved = true;
      setIsDragging(true);
    }

    if (drag.moved) {
      viewport.scrollLeft = drag.startScrollLeft - distance;
    }
  };

  const finishDragging = (event) => {
    const drag = dragRef.current;
    const viewport = viewportRef.current;

    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }

    dragRef.current = null;
    setIsDragging(false);

    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
  };

  if (loadingReviews) {
    return (
      <section className="reviews-section">
        <p>Loading candidate reviews…</p>
      </section>
    );
  }

  if (!reviews.length) return null;

  return (
    <section
      className="reviews-section"
      aria-label="Candidate reviews"
    >
      <div className="reviews-heading">
        <div>
          <span className="reviews-eyebrow">
            CANDIDATE EXPERIENCES
          </span>

          <h2>What candidates say about EXAMITICS</h2>

          <p>
            Experiences shared by our Premium candidates.
          </p>
        </div>

        <Link to="/review">View all reviews</Link>
      </div>

      <div className="reviews-carousel-controls">
        <span
          className="reviews-carousel-position"
          aria-live="polite"
        >
          {activeIndex + 1} / {reviews.length}
        </span>

        <button
          type="button"
          className="reviews-carousel-button"
          onClick={() => moveCarousel(-1)}
          disabled={!canGoPrev}
          aria-label="Previous reviews"
          title="Previous reviews"
        >
          <FiChevronLeft />
        </button>

        <button
          type="button"
          className="reviews-carousel-button"
          onClick={() => moveCarousel(1)}
          disabled={!canGoNext}
          aria-label="Next reviews"
          title="Next reviews"
        >
          <FiChevronRight />
        </button>
      </div>

      <div
        ref={viewportRef}
        className={`reviews-track-window ${
          isDragging ? "is-dragging" : ""
        }`}
        role="region"
        aria-label="Scrollable candidate reviews"
        tabIndex={0}
        onScroll={updateNavigation}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDragging}
        onPointerCancel={finishDragging}
        onLostPointerCapture={() => {
          dragRef.current = null;
          setIsDragging(false);
        }}
      >
        <div className="reviews-track">
          {reviews.map((review) => (
            <article
              className="candidate-review-card"
              key={review.id}
            >
              <div className="candidate-review-name">
                <span className="review-avatar">
                  {(review.display_name || "C")
                    .charAt(0)
                    .toUpperCase()}
                </span>

                <div>
                  <strong>{review.display_name}</strong>
                  <span>EXAMITICS candidate</span>
                </div>
              </div>

              {review.review_text && (
                <p>{review.review_text}</p>
              )}

              {review.audioUrl && (
                <ReviewAudioPlayer src={review.audioUrl} />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


export default PremiumReviewCarousel;
