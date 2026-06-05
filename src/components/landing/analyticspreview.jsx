import React from "react";

import "../../styles/analytics-preview.css";

import SectionHeading from "../common/sectionheading";

import {
  FiCheckCircle,
  FiTrendingUp,
  FiClock,
  FiTarget,
} from "react-icons/fi";

const AnalyticsPreview = () => {

  return (

    <section className="analytics-section">

      <div className="container-custom">

        <div className="analytics-grid">

          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <div className="analytics-content">

            <SectionHeading
              badge="Performance Intelligence"
              title="Track Every"
              highlight="Performance Metric"
              text="Examatics provides deep analytical insights to help students improve strategically and prepare with precision."
            />

            {/* FEATURES */}

            <div className="analytics-features">

              <div className="analytics-feature-item">

                <FiCheckCircle />

                <div>

                  <h4>Subject-wise Analysis</h4>

                  <p>
                    Analyze performance across subjects with
                    detailed accuracy breakdowns.
                  </p>

                </div>

              </div>

              <div className="analytics-feature-item">

                <FiTrendingUp />

                <div>

                  <h4>Accuracy Trends</h4>

                  <p>
                    Monitor weekly improvement and identify
                    long-term progress patterns.
                  </p>

                </div>

              </div>

              <div className="analytics-feature-item">

                <FiClock />

                <div>

                  <h4>Time Management Insights</h4>

                  <p>
                    Understand solving speed and optimize
                    exam-time efficiency.
                  </p>

                </div>

              </div>

              <div className="analytics-feature-item">

                <FiTarget />

                <div>

                  <h4>Weak Area Detection</h4>

                  <p>
                    Discover weak topics instantly and focus
                    preparation where it matters most.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================
              RIGHT DASHBOARD
          ===================================== */}

          <div className="analytics-dashboard">

            <div className="analytics-window">

              {/* TOP */}

              <div className="analytics-topbar">

                <h3>Performance Analytics</h3>

                <span>Live Insights</span>

              </div>

              {/* BODY */}

              <div className="analytics-body">

                {/* SCORE OVERVIEW */}

                <div className="analytics-score-card">

                  <div>

                    <p>Overall Accuracy</p>

                    <h2>92%</h2>

                  </div>

                  <div className="circle-progress">

                    <span>92</span>

                  </div>

                </div>

                {/* SUBJECT PERFORMANCE */}

                <div className="subject-performance-card">

                  <div className="subject-row">

                    <div className="subject-info">

                      <span>Biology</span>

                      <strong>94%</strong>

                    </div>

                    <div className="subject-bar">

                      <span style={{ width: "94%" }}></span>

                    </div>

                  </div>

                  <div className="subject-row">

                    <div className="subject-info">

                      <span>Chemistry</span>

                      <strong>87%</strong>

                    </div>

                    <div className="subject-bar">

                      <span style={{ width: "87%" }}></span>

                    </div>

                  </div>

                  <div className="subject-row">

                    <div className="subject-info">

                      <span>Physics</span>

                      <strong>81%</strong>

                    </div>

                    <div className="subject-bar">

                      <span style={{ width: "81%" }}></span>

                    </div>

                  </div>

                </div>

                {/* CHART */}

                <div className="analytics-chart-card">

                  <div className="chart-header">

                    <h4>Weekly Progress</h4>

                    <span>+12%</span>

                  </div>

                  <div className="analytics-chart">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                </div>

                {/* STATS */}

                <div className="analytics-mini-grid">

                  <div className="analytics-mini-card">

                    <h5>Tests Completed</h5>

                    <h3>128</h3>

                  </div>

                  <div className="analytics-mini-card">

                    <h5>National Rank</h5>

                    <h3>#18</h3>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AnalyticsPreview;