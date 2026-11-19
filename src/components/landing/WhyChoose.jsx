
import React from "react";
import { Link } from "react-router-dom";

import {
  FiShield,
  FiBookOpen,
  FiBarChart2,
  FiSmartphone,
  FiRefreshCw,
  FiCheckCircle,
  FiArrowRight,
  FiAward,
} from "react-icons/fi";

import "./WhyChoose.css";

const features = [
  {
    icon: <FiShield />,
    title: "Structured Exam Preparation",
    description:
      "Explore dedicated preparation resources for PMA Long Course, AFNS, Pakistan Air Force and Pakistan Navy initial tests.",
  },
  {
    icon: <FiBookOpen />,
    title: "Learning and Study Resources",
    description:
      "Understand important concepts through preparation guides, Knowledge Hub articles, study notes and subject-based resources.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Test Results and Performance Review",
    description:
      "Review your mock-test results, check correct answers and identify areas that need further practice through available result analysis.",
  },
  {
    icon: <FiAward />,
    title: "ISSB Psychology Preparation",
    description:
      "Explore WAT, TAT, SCT, OPI, SRT, MAT and other psychology preparation resources through dedicated learning and practice pages.",
  },
  {
    icon: <FiSmartphone />,
    title: "Flexible Online Learning",
    description:
      "Access EXAMITICS through your desktop, tablet or mobile browser and prepare at your own pace.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Continuously Improving Resources",
    description:
      "Explore new practice sets, educational material and preparation resources as EXAMITICS continues to develop.",
  },
];

const trustAreas = [
  "PMA Long Course",
  "AFNS",
  "Pakistan Air Force",
  "Pakistan Navy",
  "ISSB Preparation",
  "Verbal Intelligence",
  "Non-Verbal Intelligence",
  "Academic Tests",
  "WAT",
  "TAT",
  "SCT",
  "OPI",
  "SRT",
  "MAT",
  "Initial Interview",
  "GTO Preparation",
];

const WhyChoose = () => {
  return (
    <section className="why-choose section-padding">
      <div className="container-custom">

        {/* HEADER */}

        <div className="why-header">
          <span className="why-badge">
            <FiCheckCircle />
            Why Choose EXAMITICS
          </span>

          <h2>
            Everything You Need to Prepare for{" "}
            <span>Pakistan Armed Forces Selection</span>
          </h2>

          <p>
            EXAMITICS is an online preparation platform designed
            for candidates pursuing opportunities in Pakistan's
            Armed Forces. Explore initial-test mock examinations,
            ISSB psychology practice, preparation guides, study
            resources and performance review tools in one place.
          </p>
        </div>

        {/* FEATURE CARDS */}

        <div className="why-grid">
          {features.map((feature, index) => (
            <article className="why-card exa-card" key={index}>
              <div className="why-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        {/* PREPARATION AREAS */}

        <div className="why-trust">
          <h3>Explore Different Areas of Preparation</h3>

          <div className="trust-tags">
            {trustAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="why-cta">
          <h3>Take the Next Step in Your Preparation</h3>

          <p>
            Choose your examination, practise relevant questions,
            explore preparation material and build a consistent
            study routine with EXAMITICS.
          </p>

          <Link to="/mock" className="exa-btn exa-btn-primary">
            Explore Mock Test Center
            <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
