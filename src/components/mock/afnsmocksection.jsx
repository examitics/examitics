import React from "react";
import { FiClock, FiMonitor, FiCheckCircle } from "react-icons/fi";

import Adsterra728x90 from "../Adsterra728x90";
import Adsterra300x250 from "../Adsterra300x250";
import MockTable from "./afnsmocktable";

const MockSection = ({ title, examCode }) => {
  return (
    <section className="mock-section exa-card">
      {/* HEADER */}
      <div className="mock-section-header">
        <div>
          <span className="mock-section-tag">MOCK TEST SERIES</span>

          <h2>{title}</h2>
        </div>
      </div>
      {/* TABLE */}
      <MockTable examCode={examCode} />
    </section>
  );
};

export default MockSection;
