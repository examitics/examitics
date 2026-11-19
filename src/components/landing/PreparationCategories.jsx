
import React from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiCpu,
  FiUsers,
  FiShield,
  FiTarget,
  FiBookOpen,
  FiAward,
  FiGlobe,
  FiFileText,
} from "react-icons/fi";

import "./PreparationCategories.css";

const categories = [
  {
    icon: <FiShield />,
    title: "PMA Long Course",
    description:
      "Prepare for Pakistan Army PMA Long Course initial tests through verbal intelligence, non-verbal intelligence and academic mock examinations.",
    stats: "Initial Test Preparation",
    link: "/mock",
  },
  {
    icon: <FiUsers />,
    title: "AFNS Preparation",
    description:
      "Explore Armed Forces Nursing Service preparation with verbal, non-verbal and academic mock tests covering relevant subjects.",
    stats: "AFNS Mock Tests",
    link: "/mock",
  },
  {
    icon: <FiTarget />,
    title: "Pakistan Air Force",
    description:
      "Practise PAF initial-test intelligence questions and academic subjects including English, Mathematics and Physics.",
    stats: "PAF Mock Tests",
    link: "/mock",
  },
  {
    icon: <FiAward />,
    title: "Pakistan Navy",
    description:
      "Prepare for Pakistan Navy entry tests with verbal intelligence, non-verbal reasoning and academic practice for relevant entry categories.",
    stats: "Navy Mock Tests",
    link: "/mock",
  },
  {
    icon: <FiUsers />,
    title: "ISSB Preparation",
    description:
      "Understand the ISSB selection process, psychological assessment, GTO activities, interviews and officer-like qualities.",
    stats: "Complete ISSB Guide",
    link: "/issbguide",
  },
  {
    icon: <FiCpu />,
    title: "Psychology Practice",
    description:
      "Explore WAT, TAT, SCT, OPI, SRT and MAT learning resources and interactive practice exercises for ISSB preparation.",
    stats: "Psychology Tests",
    link: "/issb-1",
  },
  {
    icon: <FiGlobe />,
    title: "Knowledge Hub",
    description:
      "Explore General Knowledge, Pakistan Studies, World Geography, Current Affairs and educational resources for competitive preparation.",
    stats: "Explore Knowledge",
    link: "/knowledgehub",
  },
  {
    icon: <FiFileText />,
    title: "Notes Hub",
    description:
      "Access organized study notes covering verbal intelligence, non-verbal reasoning, academic subjects and ISSB preparation.",
    stats: "Premium Study Resources",
    link: "/notes",
  },
];

const searches = [
  {
    title: "PMA Initial Test",
    link: "/pma-lc-initial-procedure",
  },
  {
    title: "AFNS Mock Tests",
    link: "/mock",
  },
  {
    title: "PAF Initial Test",
    link: "/paf-initial-test-procedure",
  },
  {
    title: "Pakistan Navy Mock Tests",
    link: "/mock",
  },
  {
    title: "ISSB Guide",
    link: "/issbguide",
  },
  {
    title: "Verbal Intelligence",
    link: "/mock",
  },
  {
    title: "Non-Verbal Intelligence",
    link: "/mock",
  },
  {
    title: "Academic Tests",
    link: "/mock",
  },
  {
    title: "WAT Practice",
    link: "/wat",
  },
  {
    title: "TAT Practice",
    link: "/tat",
  },
  {
    title: "SCT Practice",
    link: "/sct",
  },
  {
    title: "OPI Preparation",
    link: "/opi",
  },
  {
    title: "MAT Preparation",
    link: "/mat",
  },
  {
    title: "Knowledge Hub",
    link: "/knowledgehub",
  },
  {
    title: "Notes Hub",
    link: "/notes",
  },
];

const PreparationCategories = () => {
  return (
    <section className="prep-categories section-padding">
      <div className="container-custom">

        {/* HEADER */}

        <div className="prep-header">
          <span className="prep-badge">
            Explore EXAMITICS
          </span>

          <h2>
            Choose Your
            <span> Preparation Pathway</span>
          </h2>

          <p>
            Whether you are preparing for an Armed Forces initial
            test or the ISSB selection process, explore dedicated
            mock examinations, psychology practice, educational
            guides and study resources on EXAMITICS.
          </p>
        </div>

        {/* CATEGORY CARDS */}

        <div className="prep-grid">
          {categories.map((item) => (
            <Link
              to={item.link}
              key={item.title}
              className="prep-card exa-card"
            >
              <div className="prep-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="prep-bottom">
                <span className="prep-stat">
                  {item.stats}
                </span>

                <span className="prep-link">
                  Explore
                  <FiArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* POPULAR TOPICS */}

        <div className="popular-searches">
          <h3>Popular Preparation Topics</h3>

          <div className="search-tags">
            {searches.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="search-tag"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="prep-footer">
          <h3>
            Start Your Preparation Today
          </h3>

          <p>
            Explore the mock-test center to choose PMA, AFNS,
            Pakistan Air Force or Pakistan Navy preparation.
            You can also explore dedicated ISSB learning and
            psychology practice resources.
          </p>

          <Link
            to="/mock"
            className="exa-btn exa-btn-primary"
          >
            Explore All Mock Tests
            <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PreparationCategories;
