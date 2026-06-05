import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cta-section.css";

import { FiArrowRight, FiShield } from "react-icons/fi";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container-custom">
        <div className="cta-container">
          {/* =====================================
              BACKGROUND EFFECTS
          ===================================== */}

          <div className="cta-glow cta-glow-1"></div>
          <div className="cta-glow cta-glow-2"></div>

          {/* =====================================
              CONTENT
          ===================================== */}

          <div className="cta-content">
            <div className="cta-badge">
              <FiShield />

              <span>Mission-Oriented Preparation</span>
            </div>

            <h2>
              Start Preparing Like a<span> Professional Candidate</span>
            </h2>

            <p>
              Join Examatics and access structured preparation systems,
              intelligent analytics, and performance-focused exam practice built
              for serious aspirants.
            </p>
          </div>

          {/* =====================================
              ACTIONS
          ===================================== */}

          <div className="cta-actions">
            
            <Link to="/exams" className="cta-primary-btn">
              Get Started
              <FiArrowRight />
            </Link>

            <button className="cta-secondary-btn">Explore Exams</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
