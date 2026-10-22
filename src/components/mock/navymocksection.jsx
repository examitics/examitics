import React from "react";
import NavyMockTable from "./navymocktable";
import "../../styles/mock.css";

const NavyMockSection = ({ title = "PAKISTAN NAVY" }) => {
  return (
    <section
      className="mock-section exa-card"
      aria-labelledby="navy-mock-heading"
    >
      <div className="mock-section-header">
        <div>
          <span className="mock-section-tag">MOCK TEST SERIES</span>

          <h2 id="navy-mock-heading">{title}</h2>
        </div>
      </div>

      <p className="navy-mock-description">
        <strong>Important Notice:</strong> These are practice mock tests for Pakistan Navy
        initial-test preparation, not the actual official initial test. The
        official Pakistan Navy test pattern may differ. The questions are
        compiled from candidates’ experiences and reports from previous courses
        to help you practise and prepare effectively.
      </p>

      <NavyMockTable />
    </section>
  );
};

export default NavyMockSection;
