import React from "react";
import { useLocation } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";

import "../../styles/floatingfeedback.css";

// import { FiArrowUp, FiGraphTrend } from 'react-icons/fi';
const FloatingFeedback = () => {
  const location = useLocation();

  const allowedPages = [
    "/",
    "/exams",
    "/pma-lc",
    "/mock",
    "/ISSB-1",
    "/pma-lc-initial-procedure",
    // "/paf",
    // "/navy",
    "/privacy-policy",
    "/terms-conditions",
    // "/knowledgehub"
  ];

  if (!allowedPages.includes(location.pathname)) {
    return null;
  }
  const scrollToFeedback = () => {
    const feedbackSection = document.getElementById("feedback-section");

    if (feedbackSection) {
      feedbackSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = "/#feedback-section";
    }
  };

  return (
    <button
      className="floating-feedback-btn"
      onClick={scrollToFeedback}
      aria-label="Share Feedback"
    >
      <FiMessageSquare />
      <span className="feedback-text">Feedback</span>
      <span className="feedback-tooltip">
      Share your feedback — it helps us improve EXAMITICS 🚀 

    </span>
    </button>
  );
};

export default FloatingFeedback;
