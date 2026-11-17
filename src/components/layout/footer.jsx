
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiMessageCircle,
  FiArrowUpRight,
  FiBookOpen,
  FiTarget,
  FiGrid,
  FiShield,
  FiStar,
  FiSend,
  FiChevronDown,
  FiCheckCircle,
} from "react-icons/fi";

import logo from "../../assets/logos/examitics-logo.png";
import "../../styles/footer.css";

const FEEDBACK_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyZLhwG2Ezp2ZrfJIErZG-6teJg8rLYRUUiTdy7lWyYl5CG1S_Bkp9B_PD7aYpqDPEXtg/exec";

const WHATSAPP_URL = "https://wa.me/923014709158";

const Footer = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const currentYear = new Date().getFullYear();

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();

    if (!rating) {
      setMessageType("error");
      setMessage("Please select a rating before submitting.");
      return;
    }

    if (!feedback.trim()) {
      setMessageType("error");
      setMessage("Please write a short feedback message.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setMessageType("");

      await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: name.trim() || "Anonymous",
          email: email.trim() || "Not provided",
          rating,
          feedback: feedback.trim(),
          source: "Website Footer",
          submittedAt: new Date().toISOString(),
        }),
      });

      // no-cors responses are opaque, so the browser cannot verify
      // whether the Google Apps Script processed the submission.
      setMessageType("success");
      setMessage(
        "Thank you for sharing your feedback with EXAMITICS."
      );

      setRating(0);
      setFeedback("");
      setName("");
      setEmail("");
    } catch (error) {
      setMessageType("error");
      setMessage(
        "We couldn't submit your feedback. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const exploreLinks = [
    { label: "Home", to: "/" },
    { label: "Explore All Exams", to: "/exams" },
    { label: "Mock Test Center", to: "/mock" },
    { label: "Knowledge Hub", to: "/knowledgehub" },
    { label: "Notes Hub", to: "/notes" },
    { label: "More Tools", to: "/more" },
  ];

  const preparationLinks = [
    { label: "PMA Long Course", to: "/mock/pma-lc" },
    { label: "PAF Initial Test", to: "/mock/paf" },
    { label: "Pakistan Navy", to: "/mock/navy" },
    { label: "AFNS Preparation", to: "/mock/afns" },
    { label: "ISSB Preparation", to: "/issb-1" },
    { label: "ISSB Comprehensive Guide", to: "/issbguide" },
  ];

  const resourceLinks = [
    { label: "OPI Practice", to: "/opi" },
    { label: "WAT Practice", to: "/wat" },
    { label: "TAT Practice", to: "/tat" },
    { label: "SCT Practice", to: "/sct" },
    { label: "SRT Practice", to: "/srt" },
    { label: "Premium Plans", to: "/premium/plans" },
  ];

  const toolLinks = [
    { label: "Age Calculator", to: "/more/age-calculator" },
    { label: "BMI Calculator", to: "/more/bmi-calculator" },
    { label: "Unit Converter", to: "/more/unit-converter" },
    { label: "GPA Calculator", to: "/more/gpa-calculator" },
    { label: "Percentage Calculator", to: "/more/percentage-calculator" },
    { label: "Quick Math", to: "/quick-math/setup" },
  ];

  const renderLinks = (links) =>
    links.map((item) => (
      <Link key={item.label} to={item.to}>
        {item.label}
        <FiArrowUpRight className="exa-footer-link-icon" />
      </Link>
    ));

  return (
    <footer className="exa-footer">
      <div className="exa-footer-container">

        {/* TOP BRAND SECTION */}
        <div className="exa-footer-top">

          <div className="exa-footer-brand">

            <Link to="/" className="exa-footer-logo">
              <img src={logo} alt="EXAMITICS - Armed Forces Preparation Platform" />
            </Link>

            <div className="exa-footer-brand-name">
              <h2>EXAMITICS</h2>
              <span>Preparation. Practice. Performance.</span>
            </div>

            <p className="exa-footer-description">
              A comprehensive preparation platform for Pakistan Armed
              Forces aspirants. Prepare for initial tests, practice
              psychological assessments, strengthen your knowledge and
              develop the confidence to move forward.
            </p>

            <div className="exa-footer-socials">
              <a
                href="https://www.facebook.com/profile.php?id=61593908024099"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EXAMITICS on Facebook"
              >
                <FiFacebook />
              </a>

              <a
                href="https://www.instagram.com/examitics/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EXAMITICS on Instagram"
              >
                <FiInstagram />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact EXAMITICS on WhatsApp"
              >
                <FiMessageCircle />
              </a>
            </div>

          </div>

          {/* NAVIGATION COLUMNS */}
          <div className="exa-footer-navigation">

            <div className="exa-footer-column">
              <div className="exa-footer-column-heading">
                <FiGrid />
                <h3>Explore</h3>
              </div>

              {renderLinks(exploreLinks)}
            </div>

            <div className="exa-footer-column">
              <div className="exa-footer-column-heading">
                <FiShield />
                <h3>Preparation</h3>
              </div>

              {renderLinks(preparationLinks)}
            </div>

            <div className="exa-footer-column">
              <div className="exa-footer-column-heading">
                <FiBookOpen />
                <h3>Resources</h3>
              </div>

              {renderLinks(resourceLinks)}
            </div>

            <div className="exa-footer-column">
              <div className="exa-footer-column-heading">
                <FiTarget />
                <h3>Tools</h3>
              </div>

              {renderLinks(toolLinks)}
            </div>

          </div>
        </div>

        {/* SUPPORT CTA */}
        <div className="exa-footer-support">

          <div className="exa-footer-support-content">
            <span className="exa-footer-eyebrow">
              NEED ASSISTANCE?
            </span>

            <h3>We're here to help you prepare.</h3>

            <p>
              Have a question about preparation, mock tests or Premium
              access? Get in touch with the EXAMITICS team.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="exa-footer-support-button"
          >
            <FiMessageCircle />
            Contact on WhatsApp
            <FiArrowUpRight />
          </a>

        </div>

        {/* FEEDBACK SECTION */}
        <details className="exa-footer-feedback">

          <summary>
            <span className="exa-footer-feedback-title">
              <FiStar />
              Share your experience with EXAMITICS
            </span>

            <span className="exa-footer-feedback-toggle">
              Share Feedback
              <FiChevronDown />
            </span>
          </summary>

          <div className="exa-footer-feedback-content feedback-section"  >

            <div className="exa-footer-feedback-intro">
              <h3>Your feedback helps us improve.</h3>
              <p>
                Tell us about your experience and suggest what we
                should improve next.
              </p>
            </div>

            <form
              className="exa-footer-feedback-form"
              onSubmit={handleFeedbackSubmit}
            >

              <div className="exa-footer-feedback-fields">

                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  autoComplete="name"
                />

                <input
                  type="email"
                  placeholder="Your email (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={150}
                  autoComplete="email"
                />

              </div>

              <div className="exa-footer-rating">

                <span>How would you rate EXAMITICS?</span>

                <div className="exa-footer-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={
                        star <= rating
                          ? "exa-footer-star active"
                          : "exa-footer-star"
                      }
                      onClick={() => setRating(star)}
                      aria-label={`Rate ${star} out of 5`}
                      aria-pressed={rating === star}
                    >
                      <FiStar />
                    </button>
                  ))}
                </div>

              </div>

              <textarea
                placeholder="Share your suggestions or experience..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                maxLength={2000}
                required
              />

              <div className="exa-footer-feedback-submit">

                <span className="exa-footer-feedback-note">
                  Your feedback helps us build a better platform.
                </span>

                <button type="submit" disabled={loading}>
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      Send Feedback
                      <FiSend />
                    </>
                  )}
                </button>

              </div>

              {message && (
                <p
                  className={`exa-footer-feedback-message ${messageType}`}
                  role="status"
                  aria-live="polite"
                >
                  {messageType === "success" && <FiCheckCircle />}
                  {message}
                </p>
              )}

            </form>
          </div>

        </details>

        {/* FOOTER BOTTOM */}
        <div className="exa-footer-bottom">

          <div className="exa-footer-copyright">
            <span>
              © {currentYear} EXAMITICS. All rights reserved.
            </span>

            <span className="exa-footer-tagline">
              Built for aspirants. Focused on progress.
            </span>
          </div>

          <div className="exa-footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/premium/plans">Premium Plans</Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
