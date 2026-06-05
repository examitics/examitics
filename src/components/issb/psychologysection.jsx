import React from "react";

import {
  FiActivity,
  FiEdit3,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";

const tests = [
  {
    title: "WAT",
    desc: "Word Association Test practice and analysis.",
    icon: <FiActivity />,
  },

  {
    title: "TAT",
    desc: "Story writing and picture perception practice.",
    icon: <FiEdit3 />,
  },

  {
    title: "SCT",
    desc: "Sentence Completion Test preparation.",
    icon: <FiMessageSquare />,
  },

  {
    title: "Self Description",
    desc: "Improve personality reflection and confidence.",
    icon: <FiUser />,
  },
];

const PsychologySection = () => {

  return (

    <section
      className="issb-section"
      id="psychology"
    >

      <div className="section-heading">

        <span className="section-tag">
          PSYCHOLOGY TESTS
        </span>

        <h2>
          Psychological Assessment Preparation
        </h2>

      </div>

      <div className="issb-grid">

        {tests.map((test, index) => (

          <div
            className="issb-card exa-card"
            key={index}
          >

            <div className="issb-icon">
              {test.icon}
            </div>

            <h3>
              {test.title}
            </h3>

            <p>
              {test.desc}
            </p>

            <button className="exa-btn exa-btn-primary">
              Explore
            </button>

          </div>

        ))}

      </div>

    </section>

  );

};

export default PsychologySection;