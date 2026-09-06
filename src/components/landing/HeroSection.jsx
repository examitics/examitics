import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiTrendingUp,
  FiBookOpen,
  FiAward,
  FiBarChart2,
  FiTarget,
  FiClock,
} from "react-icons/fi";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <header className="hero">
      {/* Background */}
      <div className="hero-bg-circle hero-circle-1"></div>
      <div className="hero-bg-circle hero-circle-2"></div>

      <div className="container-custom">
        <div className="hero-grid">
          {/* ==========================
                LEFT SIDE
          ========================== */}

          <div className="hero-left">
            <div className="hero-badge">
              🇵🇰 Pakistan Armed Forces Preparation Platform
            </div>

            <h1>
              Free <span>ISSB, PMA Long Course, PAF & Navy</span> Preparation
              Platform
            </h1>

            <p className="hero-description">
              EXAMITICS helps candidates prepare for Pakistan Army, Pakistan Air
              Force and Pakistan Navy selection through mock tests,
              intelligence practice, psychology tests (WAT, TAT, SCT),
              interview preparation, study guides and performance analytics.
            </p>

            {/* Features */}

            <div className="hero-features">
              <div>
                <FiCheckCircle />
                <span>Free Resources</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Real Exam Pattern</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Performance Analytics</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Mobile Friendly</span>
              </div>
            </div>

            {/* Buttons */}

            <div className="hero-buttons">
              <Link to="/exams" className="exa-btn exa-btn-primary">
                Start Free Preparation
                <FiArrowRight />
              </Link>

              <a href="#guides" className="exa-btn exa-btn-outline">
                <FiBookOpen />
                Study Guides
              </a>
            </div>

            {/* Statistics */}

            {/* <div className="hero-stats">
              <div className="hero-stat-card">
                <h3>120+</h3>
                <p>Practice Tests</p>
              </div>

              <div className="hero-stat-card">
                <h3>15+</h3>
                <p>Preparation Guides</p>
              </div>

              <div className="hero-stat-card">
                <h3>8</h3>
                <p>Exam Categories</p>
              </div>

              <div className="hero-stat-card">
                <h3>100%</h3>
                <p>Free Access</p>
              </div>
            </div> */}
          </div>

          {/* ==========================
                RIGHT SIDE
          ========================== */}

          <div className="hero-right">
            <div className="hero-dashboard">
              {/* Header */}

              <div className="dashboard-header">
                <div className="dashboard-title">
                  <FiBarChart2 />
                  <span>Your Progress</span>
                </div>

                <span className="dashboard-badge">Live</span>
              </div>

              {/* Progress */}

              <div className="dashboard-progress">
                <div className="progress-item">
                  <div className="progress-top">
                    <span>ISSB Preparation</span>
                    <span>85%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div className="progress-item">
                  <div className="progress-top">
                    <span>Intelligence Tests</span>
                    <span>92%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                <div className="progress-item">
                  <div className="progress-top">
                    <span>Psychology Tests</span>
                    <span>74%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "74%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cards */}

              <div className="dashboard-cards">
                <div className="dashboard-card">
                  <FiTrendingUp />

                  <div>
                    <h4>82%</h4>
                    <p>Average Score</p>
                  </div>
                </div>

                <div className="dashboard-card">
                  <FiTarget />

                  <div>
                    <h4>40+</h4>
                    <p>Mock Tests</p>
                  </div>
                </div>

                <div className="dashboard-card">
                  <FiAward />

                  <div>
                    <h4>12</h4>
                    <p>Achievements</p>
                  </div>
                </div>

                <div className="dashboard-card">
                  <FiClock />

                  <div>
                    <h4>48h</h4>
                    <p>Study Time</p>
                  </div>
                </div>
              </div>

              {/* Bottom */}

              <div className="dashboard-footer">
                Keep practicing consistently to improve your performance and
                increase your confidence for the selection process.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;