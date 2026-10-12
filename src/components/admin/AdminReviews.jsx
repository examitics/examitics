
import React, { useCallback, useEffect, useState } from "react";
import { FiRefreshCw, FiTrash2 } from "react-icons/fi";

import { supabase } from "../../lib/supabase";
import "../../styles/PremiumReviews.css";

const BUCKET = "premium-review-audio";

function AdminReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState("");
  const [message, setMessage] = useState("");

  const loadReviews = useCallback(async () => {
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase
      .from("premium_reviews")
      .select("id, display_name, review_text, audio_path, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Admin review fetch failed:", error);
      setMessage("Could not load reviews. Check your admin permissions.");
      setReviews([]);
      setLoading(false);
      return;
    }

    const results = await Promise.all(
      (data || []).map(async (review) => {
        if (!review.audio_path) return { ...review, audioUrl: "" };

        const { data: signed, error: signedError } = await supabase.storage
          .from(BUCKET)
          .createSignedUrl(review.audio_path, 3600);

        if (signedError) {
          console.error("Could not sign review audio:", signedError);
        }

        return { ...review, audioUrl: signed?.signedUrl || "" };
      })
    );

    setReviews(results);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  const deleteReview = async (review) => {
    const confirmed = window.confirm(
      "Delete this review and its voice recording, if it has one? This cannot be undone."
    );

    if (!confirmed) return;

    setBusyId(review.id);
    setMessage("");

    try {
      // Remove audio first. Keep the review row if this fails.
      if (review.audio_path) {
        const { error: audioError } = await supabase.storage
          .from(BUCKET)
          .remove([review.audio_path]);

        if (audioError) throw audioError;
      }

      const { data, error: deleteError } = await supabase
        .from("premium_reviews")
        .delete()
        .eq("id", review.id)
        .select("id");

      if (deleteError) throw deleteError;

      if (!data?.length) {
        throw new Error(
          "No review was deleted. Confirm that your admin account has permission."
        );
      }

      setReviews((current) =>
        current.filter((item) => item.id !== review.id)
      );
      setMessage("Review and associated recording deleted.");
    } catch (error) {
      console.error("Review deletion failed:", error);
      setMessage(
        error?.message ||
          "Deletion failed. Check the review and audio storage permissions."
      );
      // Reload to reflect the actual state if deletion partially succeeded.
      await loadReviews();
    } finally {
      setBusyId("");
    }
  };

  return (
    <div className="admin-reviews">
      <div className="admin-reviews-heading">
        <div>
          <h2>Candidate Reviews</h2>
          <p>Manage public written and voice reviews.</p>
        </div>

        <button type="button" onClick={loadReviews} disabled={loading}>
          <FiRefreshCw /> Refresh
        </button>
      </div>

      {message && <p role="status" className="review-form-message">{message}</p>}
      {loading && <p>Loading reviews…</p>}
      {!loading && reviews.length === 0 && !message && (
        <p>No reviews have been submitted yet.</p>
      )}

      <div className="admin-review-list">
        {reviews.map((review) => (
          <article className="admin-review-item" key={review.id}>
            <div className="candidate-review-name">
              <span className="review-avatar">
                {(review.display_name || "C").charAt(0).toUpperCase()}
              </span>
              <div>
                <strong>{review.display_name}</strong>
                <span>{new Date(review.created_at).toLocaleString()}</span>
              </div>
            </div>

            {review.review_text && <p>{review.review_text}</p>}

            {review.audio_path && (
              review.audioUrl ? (
                <audio controls preload="none" src={review.audioUrl}>
                  Your browser does not support audio playback.
                </audio>
              ) : (
                <p>Audio playback is unavailable. Check storage permissions.</p>
              )
            )}

            <button
              type="button"
              className="admin-review-delete"
              onClick={() => deleteReview(review)}
              disabled={busyId === review.id}
            >
              <FiTrash2 />
              {busyId === review.id ? "Deleting…" : "Delete review"}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default AdminReviews;
