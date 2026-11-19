
import React from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiBook,
  FiClock,
  FiLayers,
} from "react-icons/fi";

import "./FeaturedGuides.css";

const guides = [
  {
    title: "PMA Long Course Initial Test Guide",
    badge: "PMA Preparation",
    image: "/images/pma-lc-guide.png",
    description:
      "Understand the PMA Long Course initial selection process, including intelligence tests, academic preparation, medical requirements, physical assessment and initial interview.",
    readTime: "15 min",
    category: "PMA",
    link: "/pma-lc-initial-procedure",
  },
  {
    title: "PAF Initial Test Guide",
    badge: "PAF Preparation",
    image: "/images/paf-guide.png",
    description:
      "Explore the Pakistan Air Force initial selection process, intelligence assessment, academic preparation, medical examination and interview guidance.",
    readTime: "15 min",
    category: "PAF",
    link: "/paf-initial-test-procedure",
  },
  {
    title: "Complete ISSB Preparation Guide",
    badge: "Complete Guide",
    image: "/images/issb-guide.png",
    description:
      "Understand the ISSB selection process, psychological assessment, GTO activities, interviews, conference and important officer-like qualities.",
    readTime: "20 min",
    category: "ISSB",
    link: "/issbguide",
  },
];

const FeaturedGuides = () => {
  return (
    <section className="featured-guides section-padding">
      <div className="container-custom">

        {/* HEADER */}

        <div className="guides-header">
          <span className="guides-badge">
            Featured Preparation Guides
          </span>

          <h2>
            Learn Before You
            <span> Attempt Your Tests</span>
          </h2>

          <p>
            Explore structured preparation guides to understand
            the selection procedures, important examination
            stages and preparation requirements for Pakistan
            Armed Forces candidates.
          </p>
        </div>

        {/* GUIDE CARDS */}

        <div className="guides-grid">
          {guides.map((guide) => (
            <article
              className="guide-card exa-card"
              key={guide.category}
            >
              <div className="guide-image">
                <img
                  src={guide.image}
                  alt={guide.title}
                  loading="lazy"
                />

                <span className="guide-badge">
                  {guide.badge}
                </span>
              </div>

              <div className="guide-content">

                <div className="guide-meta">
                  <span>
                    <FiLayers />
                    {guide.category}
                  </span>

                  <span>
                    <FiClock />
                    {guide.readTime} read
                  </span>
                </div>

                <h3>{guide.title}</h3>

                <p>{guide.description}</p>

                <Link
                  to={guide.link}
                  className="guide-link"
                >
                  Read Complete Guide
                  <FiArrowRight />
                </Link>

              </div>
            </article>
          ))}
        </div>

        {/* ADDITIONAL RESOURCES */}

        <div className="guides-footer">
          <FiBook />

          <h3>
            Explore More Preparation Resources
          </h3>

          <p>
            Continue learning through the EXAMITICS Knowledge Hub,
            explore interactive psychology practice and access
            the complete online mock-test center.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "14px",
              marginTop: "24px",
            }}
          >
            <Link
              to="/knowledgehub"
              className="guide-link"
            >
              Knowledge Hub
              <FiArrowRight />
            </Link>

            <Link
              to="/issb-1"
              className="guide-link"
            >
              ISSB Practice
              <FiArrowRight />
            </Link>

            <Link
              to="/mock"
              className="guide-link"
            >
              Mock Test Center
              <FiArrowRight />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedGuides;
