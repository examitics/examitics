
import React from "react";
import { Link } from "react-router-dom";

import {
  FiSearch,
  FiEdit3,
  FiBarChart2,
  FiAward,
  FiArrowRight,
} from "react-icons/fi";

import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: <FiSearch />,
    title: "Choose Your Preparation",
    description:
      "Select your preparation pathway, including PMA Long Course, AFNS, PAF, Pakistan Navy or ISSB. Explore the resources relevant to your goals.",
  },
  {
    number: "02",
    icon: <FiEdit3 />,
    title: "Learn and Practise",
    description:
      "Study preparation guides, revise important concepts and attempt available intelligence, academic and psychology practice tests.",
  },
  {
    number: "03",
    icon: <FiBarChart2 />,
    title: "Review Your Performance",
    description:
      "Check your test results, review correct answers and identify topics that require additional attention wherever result analysis is available.",
  },
  {
    number: "04",
    icon: <FiAward />,
    title: "Continue Improving",
    description:
      "Build a consistent preparation routine through regular practice, structured learning and revision before your selection examinations.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works section-padding">
      <div className="container-custom">

        {/* HEADER */}

        <div className="how-header">
          <span className="how-badge">
            How EXAMITICS Works
          </span>

          <h2>
            A Structured Approach to
            <span> Your Preparation Journey</span>
          </h2>

          <p>
            EXAMITICS brings together online mock tests,
            psychology practice, educational resources and
            preparation guides to help candidates organize
            their Pakistan Armed Forces selection preparation.
          </p>
        </div>

        {/* PREPARATION TIMELINE */}

        <div className="timeline">
          {steps.map((step) => (
            <div className="timeline-item" key={step.number}>

              <div className="timeline-number">
                {step.number}
              </div>

              <div className="timeline-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="prep-footer">
          <h3>
            Ready to Begin Your Preparation?
          </h3>

          <p>
            Find the right mock tests, explore learning resources
            and start working towards your Armed Forces selection goals.
          </p>

          <Link
            to="/mock"
            className="exa-btn exa-btn-primary"
          >
            Start Practising
            <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
