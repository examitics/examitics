import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/navbar";
import Features from "../components/landing/features";
import AnalyticsPreview from "../components/landing/analyticspreview";
import ExamCategories from "../components/landing/examcategories";
import Testimonials from "../components/landing/testimonials";
import CTASection from "../components/landing/CTAsection";
import Footer from "../components/layout/footer";
import "../styles/home.css";

import { FiArrowRight, FiBarChart2, FiClock, FiTarget } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="home-page">
        {/* =====================================
            HERO SECTION
        ===================================== */}

        <section className="hero-section">
          <div className="container-custom">
            <div className="hero-grid">
              {/* ================= LEFT CONTENT ================= */}

              <div className="hero-content">
                <div className="hero-badge">
                  <span></span>
                  Smart MCQ Preparation Platform
                </div>

                <h1>
                  Master Competitive Exams
                  <br />
                  with <span>Precision</span>
                </h1>

                <p>
                  Examatics helps students prepare smarter with structured MCQs,
                  performance analytics, timed mock exams, and intelligent
                  progress tracking.
                </p>

                {/* CTA BUTTONS */}

                <div className="hero-buttons">
                  <Link to="/exams" className="cta-primary-btn">
                    Get Started
                    <FiArrowRight />
                  </Link>

                  <button className="btn-secondary-custom">
                    Explore Exams
                  </button>
                </div>

                {/* STATS */}

                <div className="hero-stats">
                  <div className="hero-stat-card">
                    <FiTarget />

                    <div>
                      <h3>50K+</h3>
                      <p>MCQs</p>
                    </div>
                  </div>

                  <div className="hero-stat-card">
                    <FiClock />

                    <div>
                      <h3>100+</h3>
                      <p>Mock Tests</p>
                    </div>
                  </div>

                  <div className="hero-stat-card">
                    <FiBarChart2 />

                    <div>
                      <h3>AI</h3>
                      <p>Analytics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= RIGHT DASHBOARD ================= */}

              <div className="hero-dashboard">
                <div className="dashboard-window">
                  {/* TOP BAR */}

                  <div className="dashboard-topbar">
                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <p>Performance Overview</p>
                  </div>

                  {/* DASHBOARD CONTENT */}

                  <div className="dashboard-content">
                    {/* SCORE CARD */}

                    <div className="dashboard-card score-card">
                      <h4>Overall Accuracy</h4>

                      <h2>92%</h2>

                      <div className="progress-line">
                        <span></span>
                      </div>
                    </div>

                    {/* STATS GRID */}

                    <div className="dashboard-mini-grid">
                      <div className="mini-card">
                        <h5>Weekly Rank</h5>

                        <h3>#18</h3>
                      </div>

                      <div className="mini-card">
                        <h5>Completed</h5>

                        <h3>128</h3>
                      </div>
                    </div>

                    {/* CHART */}

                    <div className="chart-card">
                      <h4>Performance Analytics</h4>

                      <div className="chart-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>

                    {/* RECENT TEST */}

                    <div className="recent-test-card">
                      <div>
                        <h5>MDCAT Biology Mock</h5>

                        <p>Completed 2h ago</p>
                      </div>

                      <span className="score-badge">88%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA SECTION */}
        <CTASection />
        {/* Testimonials  */}
        {/* <Testimonials /> */}
        {/* FEATURES */}
        <Features />
        {/* ANALYTICS PREVIEW */}
        <AnalyticsPreview />
        {/* EXAM CATEGORIES */}
        <ExamCategories />
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
