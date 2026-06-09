import React from "react";

import "../../styles/footer.css";
import logo from "../../assets/logos/examitics-logo.png";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";

const Footer = () => {

  return (

    <footer className="footer">

      <div className="container-custom">

        {/* =====================================
            TOP
        ===================================== */}

        <div className="footer-top">

          {/* BRAND */}

          <div className="footer-brand">

            <div className="footer-logo">

              <span><img src={logo} alt="Examitics Logo" /></span>

            </div>

            <h3>Examitics</h3>

            <p>

              Examitics is a modern MCQ-based preparation platform
              designed for disciplined learning, competitive exams,
              and intelligent performance tracking.

            </p>

            {/* SOCIALS */}

            <div className="footer-socials">

              <a href="#">

                <FiFacebook />

              </a>

              <a href="#">

                <FiInstagram />

              </a>

              <a href="#">

                <FiTwitter />

              </a>

              <a href="#">

                <FiLinkedin />

              </a>

            </div>

          </div>

          {/* LINKS */}

          <div className="footer-links-wrapper">

            {/* QUICK LINKS */}

            <div className="footer-links">

              <h4>Quick Links</h4>

              <a href="/">Home</a>
              <a href="/exams">Exams</a>
              <a href="#features">Features</a>
              <a href="/mock">Mock Tests</a>

            </div>

            {/* EXAMS */}

            <div className="footer-links">

              <h4>Exam Categories</h4>

              <a href="/pma-lc">PMA Long Course</a>
              <a href="/issb-1">ISSB Preparation</a>
              <a href="/paf">PAF Initial Test</a>
              <a href="/navy">Navy Initial Test</a>


            </div>

            {/* PLATFORM */}

            <div className="footer-links">

              <h4>Platform</h4>

              <a href="/leaderboard">Leaderboard</a>
              <a href="#analytics">Performance Tracking</a>
              <a href="/mock">Practice MCQs</a>
              <a href="/opi">OPI Test</a>

            </div>

          </div>

        </div>

        {/* =====================================
            NEWSLETTER
        ===================================== */}

        <div className="footer-newsletter">

          <div>

            <h3>

              Stay Updated with Examitics

            </h3>

            <p>

              Receive platform updates, new exam categories,
              and preparation resources directly.

            </p>

          </div>

          <form className="footer-form">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button type="submit">

              Subscribe

              <FiArrowUpRight />

            </button>

          </form>

        </div>

        {/* =====================================
            BOTTOM
        ===================================== */}

        <div className="footer-bottom">

          <p>

            © 2026 Examitics. All rights reserved.

          </p>

          <div className="footer-bottom-links">

            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-conditions">Terms & Conditions</a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;