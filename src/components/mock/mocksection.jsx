import React from "react";

import { FiClock, FiMonitor, FiCheckCircle } from "react-icons/fi";

import MockTable from "./mocktable";

const MockSection = ({ title, examCode }) => {
  return (
    <section className="mock-section exa-card">

      {/* HEADER */}
      <div className="mock-section-header">

        <div>
          <span className="mock-section-tag">
            MOCK TEST SERIES
          </span>

          <h2>{title}</h2>
        </div>

      </div>

      {/* RULES */}
      <div className="mock-rules-grid">

        <div className="mock-rule-card">

          <FiClock className="mock-rule-icon" />

          <div>
            <h4>Timed Tests</h4>

            <p>
              Each mock follows real exam timing.
            </p>
          </div>

        </div>

        <div className="mock-rule-card">

          <FiMonitor className="mock-rule-icon" />

          <div>
            <h4>No Refresh</h4>

            <p>
              Avoid refreshing during attempts.
            </p>
          </div>

        </div>

        <div className="mock-rule-card">

          <FiCheckCircle className="mock-rule-icon" />

          <div>
            <h4>Instant Result</h4>

            <p>
              Get score immediately after submission.
            </p>
          </div>

        </div>

      </div>

      {/* TABLE */}
      <MockTable examCode={examCode} />

      {/* FULL MOCK */}
      <div className="full-mock-box">

        <div>

          <span className="mock-section-tag">
            COMPLETE TEST
          </span>

          <h3>
            Full Combined Mock Test
          </h3>

          <p>
            Attempt a complete PMA-style mock test including
            Verbal, Non-Verbal, and Academic sections together.
          </p>

        </div>

        <a
          href="/mock/full-test"
          className="exa-btn exa-btn-primary"
        >
          Start Full Mock
        </a>

      </div>

    </section>
  );
};

export default MockSection;