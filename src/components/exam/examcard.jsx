import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ExamCard = ({ exam }) => {
  const STATUS = {
    ACTIVE: "Continue Preparation",
    SOON: "Comming Soon",
  };

  const isDisabled = exam.status === STATUS.SOON;
  const isActive = exam.status === STATUS.ACTIVE;

  const Icon = exam.icon;

  return (
    <div className={`exam-page-card ${isDisabled ? "card-disabled" : ""}`}>

      {/* TOP */}
      <div className="exam-page-card-top">
        <div className="exam-page-icon">
          <Icon />
        </div>

        <span className="exam-difficulty">
          {exam.difficulty}
        </span>
      </div>

      {/* BODY */}
      <div className="exam-page-body">
        <p className="exam-category">{exam.category}</p>
        <h3>{exam.title}</h3>
        <p className="exam-description">{exam.description}</p>
      </div>

      {/* STATS */}
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

      {/* PROGRESS */}
      <div className="exam-progress-wrapper">
        <div className="exam-progress-info">
          <span>Progress</span>
          <strong>{exam.progress}%</strong>
        </div>

        <div className="exam-progress-bar">
          <span style={{ width: `${exam.progress}%` }} />
        </div>
      </div>

      {/* BUTTON */}
      {isDisabled ? (
        <div className="exam-start-btn disabled">
          Coming Soon <FiArrowRight />
        </div>
      ) : (
        <Link to={exam.route} className="exam-start-btn">
          {isActive && <span className="status-indicator">•</span>}
          Start Preparation <FiArrowRight />
        </Link>
      )}
    </div>
  );
};

export default ExamCard;