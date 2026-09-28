import React, { useState } from "react";
import { FiBookOpen, FiX } from "react-icons/fi";

import MockTable from "./pmamocktable";
import "../../styles/mock.css";

const MockSection = ({ title, examCode }) => {
  const [showSyllabus, setShowSyllabus] = useState(false);

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

        <button
          type="button"
          className="afns-syllabus-trigger"
          onClick={() => setShowSyllabus(true)}
        >
          <FiBookOpen />
          <span>PMA LC Initial Test Syllabus</span>
        </button>
      </div>

      {/* TABLE */}
      {/* <MockTable examCode={examCode} /> */}

      {/* AFNS SYLLABUS IMAGE */}
      {showSyllabus && (
        <div
          className="afns-syllabus-image-overlay"
          onClick={() => setShowSyllabus(false)}
        >
          <div
            className="afns-syllabus-image-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="afns-syllabus-image-close "
              onClick={() => setShowSyllabus(false)}
              aria-label="Close AFNS syllabus"
            >
              <FiX />
            </button>

            <img
              src="/images/pma-syllabus.png"
              alt="AFNS Initial Test Syllabus"
              className="afns-syllabus-image"
            />
          </div>
        </div>
      )}
      <div style={{marginBottom: "20px"}}></div>
       {/* TABLE */}
      <MockTable examCode={examCode} />
    </section>
  );
};

export default MockSection;