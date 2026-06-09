import React from "react";

import { Link } from "react-router-dom";

import { FiArrowRight } from "react-icons/fi";
// import examsData from "../../data/examdata";


const ExamCard = ({ exam }) => {

  const Icon = exam.icon;

  return (

    <div className="exam-page-card">

      {/* =====================================
          TOP
      ===================================== */}

      <div className="exam-page-card-top">

        <div className="exam-page-icon">

          <Icon />

        </div>

        <span className="exam-difficulty">

          {exam.difficulty}

        </span>

      </div>

      {/* =====================================
          BODY
      ===================================== */}

      <div className="exam-page-body">

        <p className="exam-category">

          {exam.category}

        </p>

        <h3>

          {exam.title}

        </h3>

        <p className="exam-description">

          {exam.description}

        </p>

      </div>

      {/* =====================================
          STATS
      ===================================== */}

      <div className="exam-page-stats">

        <div>

          <strong>{exam.mcqs}</strong>

          <span>MCQs</span>

        </div>

        <div>

          <strong>{exam.mocks}</strong>

          <span>Mocks</span>

        </div>

        <div>

          <strong>{exam.accuracy}</strong>

          <span>Target</span>

        </div>

      </div>

      {/* =====================================
          PROGRESS
      ===================================== */}

      <div className="exam-progress-wrapper">

        <div className="exam-progress-info">

          <span>Progress</span>

          <strong>{exam.progress}%</strong>

        </div>

        <div className="exam-progress-bar">

          <span
            style={{
              width: `${exam.progress}%`,
            }}
          ></span>

        </div>

      </div>

      {/* =====================================
          BUTTON
      ===================================== */}

      {/* <Link
        to={exam.route}
        className="exam-start-btn"
      >

        {exam.status === "Continue Preparation" && <span className="status-indicator">•</span>}


        <FiArrowRight />

      </Link> */}
      <Link
  to={isDisabled ? "#" : exam.route}
  className={`exam-start-btn ${isDisabled ? "disabled" : ""}`}
  onClick={(e) => {
    if (isDisabled) {
      e.preventDefault();
    }
  }}
>
  {exam.status === "Continue Preparation" && (
    <span className="status-indicator">•</span>
  )}

  {exam.status === "Coming Soon" ? "Coming Soon" : "Start"}

  <FiArrowRight />
</Link>

    </div>
  );
};

export default ExamCard;