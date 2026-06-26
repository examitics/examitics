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
      "Select PMA Long Course, ISSB, Pakistan Air Force, Pakistan Navy, Intelligence Tests or Psychology Tests according to your selection journey.",
  },
  {
    number: "02",
    icon: <FiEdit3 />,
    title: "Practice Mock Tests",
    description:
      "Attempt realistic mock tests, intelligence questions, WAT, TAT, SCT, OPI and interview preparation material completely free.",
  },
  {
    number: "03",
    icon: <FiBarChart2 />,
    title: "Analyze Your Performance",
    description:
      "Review your scores, identify weak areas and monitor your improvement through detailed performance analytics.",
  },
  {
    number: "04",
    icon: <FiAward />,
    title: "Improve & Succeed",
    description:
      "Continue practicing until you build confidence for PMA Initial Test, ISSB, PAF and Pakistan Navy selection.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works section-padding">
      <div className="container-custom">

        {/* Header */}

        <div className="how-header">

          <span className="how-badge">
            How EXAMITICS Works
          </span>

          <h2>
            Start Preparing in
            <span> Four Simple Steps</span>
          </h2>

          <p>
            EXAMITICS helps candidates prepare smarter through structured
            mock tests, psychology practice, study guides and performance
            tracking for Pakistan Armed Forces selection.
          </p>

        </div>

        {/* Timeline */}

        <div className="timeline">

          {steps.map((step, index) => (

            <div className="timeline-item" key={index}>

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
            Explore mock tests, psychology practice and complete study
            material designed to help you prepare confidently.
          </p>

          <Link
            to="/exams"
            className="exa-btn exa-btn-primary"
          >
            Start Free Preparation
            <FiArrowRight />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;