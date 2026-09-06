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
    title: "Free Resources",
    description:
      "Practice mock tests, psychology tests and study guides without subscriptions or hidden charges.",
  },
  {
    icon: <FiBookOpen />,
    title: "Real Exam Pattern",
    description:
      "Prepare with mock tests based on the latest PMA Long Course, ISSB, PAF and Pakistan Navy selection procedures.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Performance Analytics",
    description:
      "Track your scores, identify weak areas and monitor your preparation progress after every test.",
  },
  {
    icon: <FiAward />,
    title: "Complete Preparation",
    description:
      "Access Verbal Intelligence, Non-Verbal Intelligence, WAT, TAT, SCT, OPI, Mechanical Aptitude and Interview preparation.",
  },
  {
    icon: <FiSmartphone />,
    title: "Study Anywhere",
    description:
      "Prepare anytime using your desktop, tablet or mobile without compromising your learning experience.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Regular Updates",
    description:
      "New mock tests, guides and preparation material are added regularly to keep content up to date.",
  },
];

const stats = [
  {
    number: "120+",
    label: "Mock Tests",
  },
  {
    number: "15+",
    label: "Preparation Guides",
  },
  {
    number: "8",
    label: "Exam Categories",
  },
  {
    number: "70%",
    label: "Free Platform",
  },
];

const WhyChoose = () => {
  return (
    <section className="why-choose section-padding">
      <div className="container-custom">
        {/* ===========================
            HEADER
        ============================ */}

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
            EXAMITICS is a free online preparation platform that helps
            candidates prepare for Pakistan Army, PMA Long Course, ISSB,
            Pakistan Air Force and Pakistan Navy recruitment through mock tests,
            psychology practice, study guides and performance analytics.
          </p>
        </div>

        {/* ===========================
            FEATURE CARDS
        ============================ */}

        <div className="why-grid">
          {features.map((feature, index) => (
            <article className="why-card exa-card" key={index}>
              <div className="why-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              {/* <div className="why-card-footer">
                <span>Learn More</span>

                <FiArrowRight />
              </div> */}
            </article>
          ))}
        </div>

        {/* ===========================
            TRUST SECTION
        ============================ */}

        <div className="why-trust">
          <h3>Prepare for Every Stage of Selection</h3>

          <div className="trust-tags">
            <span>PMA Long Course</span>
            <span>ISSB</span>
            <span>Pakistan Army</span>
            <span>Pakistan Air Force</span>
            <span>Pakistan Navy</span>
            <span>Verbal Intelligence</span>
            <span>Non-Verbal Intelligence</span>
            <span>Mechanical Aptitude</span>
            <span>Academic Tests</span>
            <span>WAT</span>
            <span>TAT</span>
            <span>SCT</span>
            <span>OPI</span>
            <span>Initial Interview</span>
          </div>
        </div>

        {/* ===========================
            STATS
        ============================ */}

        <div className="why-stats">
          {stats.map((item, index) => (
            <div className="why-stat exa-card" key={index}>
              <h3>{item.number}</h3>

              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* ===========================
            CTA
        ============================ */}

        <div className="why-cta">
          <h3>Start Your Preparation Today</h3>

          <p>
            Practice with free mock tests, improve your performance and prepare
            confidently for PMA, ISSB, Pakistan Air Force and Pakistan Navy
            selection.
          </p>

          <Link to="/exams" className="exa-btn exa-btn-primary">
            Start Free Preparation
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
