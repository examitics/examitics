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
    badge: "Most Popular",
    image: "/images/pma-lc-guide.png",

    description:
      "Complete PMA Initial Test preparation including verbal intelligence, non-verbal intelligence, academic tests, medical examination, physical tests and initial interview.",

    readTime: "15 min",

    category: "PMA",

    link: "/pma-lc-initial-procedure",
  },

  {
    title: "Complete ISSB Preparation Guide",

    badge: "Complete Guide",

    image: "/images/issb-guide.png",

    description:
      "Learn the complete ISSB selection procedure including psychology tests, group tasks, command task, interview, conference and officer-like qualities.",

    readTime: "20 min",

    category: "ISSB",

    link: "/issbguide",
  },
];

const FeaturedGuides = () => {
  return (
    <section className="featured-guides section-padding">
      <div className="container-custom">
        {/* Header */}

        <div className="guides-header">
          <span className="guides-badge">
            Featured Preparation Guides
          </span>

          <h2>
            Start With Our
            <span> Complete Preparation Guides</span>
          </h2>

          <p>
            Read step-by-step guides covering the complete Pakistan Army
            selection process, PMA Long Course Initial Test and ISSB
            preparation before attempting mock tests.
          </p>
        </div>

        {/* Cards */}

        <div className="guides-grid">
          {guides.map((guide, index) => (
            <article
              className="guide-card exa-card"
              key={index}
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

                    {guide.readTime}

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

        {/* Bottom CTA */}

        <div className="guides-footer">
          <FiBook />

          <h3>
            More Preparation Guides Coming Soon
          </h3>

          <p>
            We regularly publish new preparation guides covering PMA,
            ISSB, Pakistan Air Force, Pakistan Navy and intelligence
            test preparation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;