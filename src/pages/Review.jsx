
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { PremiumReviewForm,ReviewAudioPlayer } from "../components/reviews/PremiumReviews";
import { supabase } from "../lib/supabase";
import "../styles/PremiumReviews.css";

const BUCKET = "premium-review-audio";

function Review() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchReviews() {
      setLoading(true);
      setError("");

      const { data, error: fetchError } = await supabase
        .from("premium_reviews")
        .select("id, display_name, review_text, audio_path, created_at")
        .order("created_at", { ascending: false });

      if (fetchError) {
        if (!cancelled) {
          setError("Reviews could not be loaded. Please try again later.");
          setLoading(false);
        }
        return;
      }

      const results = await Promise.all(
        (data || []).map(async (review) => {
          if (!review.audio_path) return { ...review, audioUrl: "" };

          const { data: signed, error: signedError } = await supabase.storage
            .from(BUCKET)
            .createSignedUrl(review.audio_path, 3600);

          if (signedError) {
            console.error("Audio URL error:", signedError);
          }

          return { ...review, audioUrl: signed?.signedUrl || "" };
        })
      );

      if (!cancelled) {
        setReviews(results);
        setLoading(false);
      }
    }

    fetchReviews();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <Helmet>
        <title>Candidate Reviews | EXAMITICS</title>
        <meta
          name="description"
          content="Read experiences shared by EXAMITICS candidates preparing for Pakistan Armed Forces selection tests."
        />
        <link rel="canonical" href="https://www.examitics.com/review" />
      </Helmet>

      <Navbar />

      <main className="review-list-page">
        <header className="reviews-page-header">
          <span className="reviews-eyebrow">REAL CANDIDATE EXPERIENCES</span>
          <h1>EXAMITICS Candidate Reviews</h1>
          <p>
            Read and listen to experiences shared by candidates using EXAMITICS
            for their preparation.
          </p>
        </header>

        <PremiumReviewForm />

        <section aria-labelledby="all-reviews-heading">
          <h2 id="all-reviews-heading">All candidate reviews</h2>

          {loading && <p>Loading reviews…</p>}
          {error && <p role="alert">{error}</p>}
          {!loading && !error && reviews.length === 0 && (
            <p>No reviews have been published yet. You can be the first.</p>
          )}

          {!loading && !error && reviews.length > 0 && (
            <div className="review-list-grid">
              {reviews.map((review) => (
                <article className="candidate-review-card" key={review.id}>
                  <div className="candidate-review-name">
                    <span className="review-avatar">
                      {(review.display_name || "C").charAt(0).toUpperCase()}
                    </span>
                    <div>
                      <strong>{review.display_name}</strong>
                      <span>
                        {new Date(review.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {review.review_text && <p>{review.review_text}</p>}

                  {/* {review.audio_path && (
                    review.audioUrl ? (
                      <audio controls preload="none" src={review.audioUrl}>
                        Your browser does not support audio playback.
                      </audio>
                    ) : (
                      <p>Voice recording is temporarily unavailable.</p>
                    )
                  )} */}
                  {review.audioUrl && (
  <ReviewAudioPlayer src={review.audioUrl} />
)}
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Review;
