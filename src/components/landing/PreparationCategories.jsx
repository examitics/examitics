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
} from "react-icons/fi";

import "./PreparationCategories.css";

const categories = [
  {
    icon: <FiCpu />,
    title: "Intelligence Tests",
    description:
      "Practice verbal intelligence, non-verbal intelligence, logical reasoning and analytical questions based on PMA and ISSB patterns.",
    stats: "250+ Questions",
    link: "/mock",
  },
  {
    icon: <FiBookOpen />,
    title: "Psychology Tests",
    description:
      "Prepare WAT, TAT, SCT, Self Description and psychology exercises with explanations and practice material.",
    stats: "150+ Questions",
    link: "/issb-1",
  },
  {
    icon: <FiShield />,
    title: "PMA Long Course",
    description:
      "Complete preparation for PMA Initial Test, academics, interview, medical and physical selection process.",
    stats: "20+ Mock Tests",
    link: "/pma-lc-initial-procedure",
  },
  {
    icon: <FiUsers />,
    title: "ISSB Preparation",
    description:
      "Practice psychology, group tasks, command tasks, interview preparation and conference guidance.",
    stats: "Complete Guide",
    link: "/issbguide",
  },
  {
    icon: <FiTarget />,
    title: "Pakistan Air Force",
    description:
      "Prepare intelligence tests, academics, interview and initial selection for Pakistan Air Force.",
    stats: "PAF Practice",
    link: "/paf-initial-test-procedure",
  },
  {
    icon: <FiAward />, 
    title: "Pakistan Navy", 
    description:
      "Mock tests, intelligence practice, interview preparation and complete Pakistan Navy guidance.",
    stats: "Comming Soon",
    link: "/",
  },
]; 

// const searches = [
//   "PMA Initial Test",
//   "ISSB Guide",
//   "Verbal Intelligence",
//   "Non-Verbal Intelligence",
//   "Mechanical Aptitude",
//   "Academic Tests",
//   "Initial Interview",
//   "WAT Practice",
//   "TAT Practice",
//   "SCT Practice",
//   "Officer Like Qualities",
// ];

const searches = [
  {
    title: "PMA Initial Test",
    link: "/pma-lc-initial-procedure",
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
    title: "Mechanical Aptitude",
    link: "/issb-1",
  },
  {
    title: "Academic Tests",
    link: "/mock",
  },
  {
    title: "Initial Interview",
    link: "/pma-lc-initial-procedure#interview",
  },
  {
    title: "WAT Practice",
    link: "/issb-1",
  },
  {
    title: "TAT Practice",
    link: "/issb-1",
  },
  {
    title: "SCT Practice",
    link: "/issb-1",
  },
  {
    title: "Officer Personality Inventory (OPI)",
    link: "/opi",
  },
  {
    title: "Picture Story Writing",
    link: "/issb-1",
  },
  {
    title: "Pointer Story Writing",
    link: "/issb-1",
  },
  {
    title: "PAF Initial Test",
    link: "/paf-initial-test-procedure",
  },
  
];

const PreparationCategories = () => {
  return (
    <section className="prep-categories section-padding">

      <div className="container-custom">

        {/* Header */}

        <div className="prep-header">

          <span className="prep-badge">
            Popular Preparation Categories
          </span>

          <h2>
            Everything You Need for
            <span> Pakistan Armed Forces Preparation</span>
          </h2>

          <p>
            Explore free preparation material for PMA Long Course,
            ISSB, Pakistan Army, Pakistan Air Force and Pakistan Navy.
            Practice intelligence tests, psychology tests,
            interviews and complete selection procedures.
          </p>

        </div>

        {/* Cards */}

        <div className="prep-grid">

          {categories.map((item, index) => (

            <Link
              to={item.link}
              key={index}
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

                  Start Practice

                  <FiArrowRight />

                </span>

              </div>

            </Link>

          ))}

        </div>

        {/* Popular Searches */}

        {/* <div className="popular-searches">

          <h3>Popular Preparation Topics</h3>

          <div className="search-tags">

            {searches.map((item, index) => (

              <Link
                key={index}
                to="/exams"
                className="search-tag"
              >
                {item}
              </Link>

            ))}

          </div>

        </div> */}

        <div className="popular-searches">
  <h3>Popular Preparation Topics</h3>

  <div className="search-tags">
    {searches.map((item, index) => (
      <Link
        key={index}
        to={item.link}
        className="search-tag"
      >
        {item.title}
      </Link>
    ))}
  </div>
</div>

        {/* Bottom CTA */}

        <div className="prep-footer">

          <h3>
            Start Preparing Today
          </h3>

          <p>
            Join thousands of candidates preparing for
            Pakistan Army, PMA Long Course,
            ISSB, Pakistan Air Force
            and Pakistan Navy selection.
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