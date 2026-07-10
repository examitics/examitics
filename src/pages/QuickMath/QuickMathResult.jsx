import "./QuickMathResult.css";

import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

import { useLocation, useNavigate } from "react-router-dom";

import {
  FiAward,
  FiCheckCircle,
  FiXCircle,
  FiClock,
  FiRefreshCw,
  FiSettings,
  FiArrowLeft,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

export default function QuickMathResult() {
  const navigate = useNavigate();

  const { state } = useLocation();

  if (!state) {
    navigate("/quick-math/setup");
    return null;
  }

  const {
    total = 0,
    correct = 0,
    wrong = 0,
    missed = 0,
    category = "Mixed Practice",
    difficulty = "Easy",
    timer = "10 Seconds",
  } = state;

  const accuracy =
    total === 0
      ? 0
      : Math.round((correct / total) * 100);

  function getGrade() {
    if (accuracy >= 95) return "A+";
    if (accuracy >= 90) return "A";
    if (accuracy >= 80) return "B";
    if (accuracy >= 70) return "C";
    if (accuracy >= 60) return "D";
    return "F";
  }

  function getMessage() {
    if (accuracy >= 95)
      return "Outstanding Performance";

    if (accuracy >= 90)
      return "Excellent Speed & Accuracy";

    if (accuracy >= 80)
      return "Very Good Performance";

    if (accuracy >= 70)
      return "Good Work, Keep Practicing";

    if (accuracy >= 60)
      return "Needs More Practice";

    return "Practice More & Try Again";
  }

  function practiceAgain() {
    navigate("/quick-math/practice", {
      state: {
        category,
        difficulty,
        questions: total,
        timer,
      },
    });
  }

  function changeSettings() {
    navigate("/quick-math/setup");
  }

  function backToISSB() {
    navigate("/issb-1");
  }

  return (
    <>
    <Navbar />
    <main className="qm-result-page section-padding">

      <div className="container-custom">

        <div className="qm-result-card exa-card">

          <div className="result-hero">

            <div className="result-icon">
              <FiAward />
            </div>

            <h1>Practice Completed</h1>

            <p>
              Congratulations! You have completed your
              Quick Math Practice session.
            </p>

          </div>

          <div className="score-section">

            <div className="score-circle">

              <span>{accuracy}%</span>

            </div>

            <h2>

              {correct} / {total}

            </h2>

            <p>Correct Answers</p>

          </div>

          <div className="grade-card">

            <h3>Your Grade</h3>

            <div className="grade">

              {getGrade()}

            </div>

            <p>

              {getMessage()}

            </p>

          </div>

          <div className="result-grid">

            <div className="result-item">

              <FiCheckCircle />

              <div>

                <span>Correct</span>

                <strong>{correct}</strong>

              </div>

            </div>

            <div className="result-item">

              <FiXCircle />

              <div>

                <span>Wrong</span>

                <strong>{wrong}</strong>

              </div>

            </div>

            <div className="result-item">

              <FiClock />

              <div>

                <span>Missed</span>

                <strong>{missed}</strong>

              </div>

            </div>

            <div className="result-item">

              <FiTarget />

              <div>

                <span>Accuracy</span>

                <strong>{accuracy}%</strong>

              </div>

            </div>

            <div className="result-item">

              <FiTrendingUp />

              <div>

                <span>Difficulty</span>

                <strong>{difficulty}</strong>

              </div>

            </div>

            <div className="result-item">

              <FiClock />

              <div>

                <span>Per Question Time</span>

                <strong>{timer}</strong>

              </div>

            </div>

            <div className="result-item">

              <FiAward />

              <div>

                <span>Category</span>

                <strong>{category}</strong>

              </div>

            </div>

            <div className="result-item">

              <FiTarget />

              <div>

                <span>Total Questions</span>

                <strong>{total}</strong>

              </div>

            </div>

          </div>

          <div className="result-actions">

            <button
              className="exa-btn exa-btn-primary"
              onClick={practiceAgain}
            >
              <FiRefreshCw />

              Practice Again
            </button>

            <button
              className="exa-btn exa-btn-outline"
              onClick={changeSettings}
            >
              <FiSettings />

              Change Settings
            </button>

            <button
              className="exa-btn exa-btn-outline"
              onClick={backToISSB}
            >
              <FiArrowLeft />

              Back to ISSB
            </button>

          </div>

        </div>

      </div>

    </main>
    <Footer />
    </>
  );
}