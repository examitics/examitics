import React from "react";
import { Link } from "react-router-dom";
import "../../styles/exam-categories.css";

import SectionHeading from "../common/sectionheading";

import {
  FiShield,
  FiAward,
  FiCompass,
  FiTarget,
} from "react-icons/fi";

const ExamCategories = () => {
  const exams = [
    {
      icon: <FiShield />,
      title: "PMA Long Course",
      subtitle: "Pakistan Army",
      description:
        "Prepare for PMA Long Course initial tests with intelligent MCQs, verbal intelligence, and academic preparation.",
      mcqs: "12K+",
      mocks: "35 Mock Tests",
      level: "Advanced",
      route: "/pma-lc",
    },

    {
      icon: <FiTarget />,
      title: "ISSB Preparation",
      subtitle: "Forces Selection",
      description:
        "Structured preparation for ISSB including intelligence tests, psychology patterns, and screening practice.",
      mcqs: "8K+",
      mocks: "20 Mock Tests",
      level: "Intermediate",
      route: "/issb-1",
    },

    {
      icon: <FiAward />,
      title: "PAF Initial Test",
      subtitle: "Pakistan Air Force",
      description:
        "Comprehensive preparation for PAF initial exams including physics, intelligence, and academic modules.",
      mcqs: "10K+",
      mocks: "28 Mock Tests",
      level: "Comming Soon",
      // route: "/paf-initial-test",
    },

    {
      icon: <FiCompass />,
      title: "Navy Initial Test",
      subtitle: "Pakistan Navy",
      description:
        "Practice Navy initial test patterns with subject-based MCQs and time-based mock exams.",
      mcqs: "9K+",
      mocks: "24 Mock Tests",
      level: "Comming Soon",
      // route: "/navy-initial-test",
    },
  ];

  return (
    <section className="exam-section">
      <div className="container-custom">

        {/* SECTION HEADING */}
        <SectionHeading
          badge="Exam Categories"
          title="Prepare for"
          highlight="Competitive Excellence"
          text="Examitics provides structured preparation systems for military, medical, engineering, and competitive examination pathways."
        />

        {/* GRID */}
        <div className="exam-grid">
          {exams.map((exam, index) => (
            <Link
              to={exam.route}
              className="exam-card-link"
              key={index}
            >
              <div className="exam-card">

                <div className="rotating-glow"></div>
                <div className="card-shine"></div>

                {/* TOP */}
                <div className="exam-card-top">
                  <div className="exam-icon">{exam.icon}</div>
                  <span className="exam-level">{exam.level}</span>
                </div>

                {/* BODY */}
                <div className="exam-body">
                  <p className="exam-subtitle">{exam.subtitle}</p>
                  <h3>{exam.title}</h3>
                  <p className="exam-description">{exam.description}</p>
                </div>

                {/* FOOTER */}
                <div className="exam-footer">
                  <div>
                    <strong>{exam.mcqs}</strong>
                    <span>MCQs</span>
                  </div>

                  <div>
                    <strong>{exam.mocks}</strong>
                    <span>Practice</span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExamCategories;