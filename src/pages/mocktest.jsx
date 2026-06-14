import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { FiX, FiClock } from "react-icons/fi";

import verbalSet1 from "../data/mcqs/verbal/set1";
import academicSet1 from "../data/mcqs/academic/set1";
import academicSet2 from "../data/mcqs/academic/set2";
import academicSet3 from "../data/mcqs/academic/set3";

import nonVerbalSet1 from "../data/mcqs/nonverbal/set1";
import MAT from "../data/mcqs/mat/set1";

import "../styles/mocktest.css";

// ==========================================
// SHUFFLE FUNCTION
// ==========================================

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

// ==========================================
// QUESTION BANK
// ==========================================

const questionBank = {
  verbal: {
    set1: verbalSet1,
  },

  academic: {
    set1: academicSet1,
    set2: academicSet2,
    set3: academicSet3,
  },

  nonverbal: {
    set1: nonVerbalSet1,
  },

  mat: {
    set1: MAT,
  },
};

// ==========================================
// COMPONENT
// ==========================================

const MockTest = () => {
 const handleExit = () => {
  const confirmed = window.confirm(
    "Are you sure you want to exit? Your progress will be lost."
  );

  if (confirmed) {
    navigate(-1);
  }
};
  const navigate = useNavigate();

  const { category, setId } = useParams();

  // ==========================================
  // GET QUESTIONS
  // ==========================================

  const selectedQuestions = questionBank[category]?.[setId] || [];

  // ==========================================
  // RANDOMIZE QUESTIONS
  // ==========================================

  const randomizedQuestions = shuffleArray(selectedQuestions).map((q) => ({
    ...q,

    options: shuffleArray(q.options),
  }));
  const [questions] = useState(randomizedQuestions);

  // ==========================================
  // STATES
  // ==========================================

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState({});

  const [timeLeft, setTimeLeft] = useState(1800);

  const [skippedQuestions, setSkippedQuestions] = useState([]);

  // ==========================================
  // INVALID ROUTE PROTECTION
  // ==========================================

  if (questions.length === 0) {
    return (
      <main className="mock-test-page">
        <div className="question-card">
          <h2>No Questions Found</h2>

          <p>Please check your URL or add questions in data file.</p>
        </div>
      </main>
    );
  }

  // ==========================================
  // TIMER
  // ==========================================

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();

      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // ==========================================
  // FORMAT TIMER
  // ==========================================

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // ==========================================
  // OPTION SELECT
  // ==========================================

  const handleOptionClick = (option) => {
    const currentQ = questions[currentQuestion];

    setAnswers({
      ...answers,

      [currentQ.id]: option,
    });

    setSkippedQuestions((prev) => prev.filter((id) => id !== currentQ.id));
  };

  // ==========================================
  // NEXT QUESTION
  // ==========================================

  const nextQuestion = () => {
    const currentQ = questions[currentQuestion];

    const alreadyAnswered = answers[currentQ.id];

    const alreadySkipped = skippedQuestions.includes(currentQ.id);

    if (!alreadyAnswered && !alreadySkipped) {
      setSkippedQuestions((prev) => [...prev, currentQ.id]);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // ==========================================
  // SKIP QUESTION
  // ==========================================

  const skipQuestion = () => {
    const currentQ = questions[currentQuestion];

    const alreadyAnswered = answers[currentQ.id];

    const alreadySkipped = skippedQuestions.includes(currentQ.id);

    if (!alreadyAnswered && !alreadySkipped) {
      setSkippedQuestions((prev) => [...prev, currentQ.id]);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // ==========================================
  // PREVIOUS QUESTION
  // ==========================================

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // ==========================================
  // SUBMIT TEST
  // ==========================================

  const handleSubmit = () => {
    navigate("/result", {
      state: {
        questions,

        answers,

        timeLeft,

        category,

        setId,
      },
    });
  };

  // ==========================================
  // NOT ATTEMPTED
  // ==========================================

  const unanswered = questions.filter((q) => !answers[q.id]);

  // =============================================
  // Progress bar 
  // =============================================
  const progress =
  (Object.keys(answers).length / questions.length) * 100;

  // ==========================================
  // UI
  // ==========================================

  return (
    <main className="mock-test-page">
      <div className="mock-topbar">

  <div className="topbar-left">
    <h2>
      PMA {category.toUpperCase()} Mock Test
    </h2>

    <div className="progress-wrapper">
      <div className="progress-info">
        <span>
          {Object.keys(answers).length} / {questions.length} Attempted
        </span>

        <span>
          {Math.round(progress)}%
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  </div>

  <div className="timer">
    {formatTime()}
  </div>

</div>

      <div className="mock-layout">
        {/* QUESTION SECTION */}

        <div className="question-section">
          <div className="question-card">
            <span className="question-number">
              Question {currentQuestion + 1} / {questions.length}
            </span>

            <h3>{questions[currentQuestion].question}</h3>

            {/* NON VERBAL IMAGE */}

            {questions[currentQuestion].image && (
              <img
                src={questions[currentQuestion].image}
                alt="Question"
                className="question-image"
              />
            )}

            {/* OPTIONS */}

            <div className="options-grid">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={
                    answers[questions[currentQuestion].id] === option
                      ? "option-btn active"
                      : "option-btn"
                  }
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* NAVIGATION */}

            <div className="navigation-buttons">
              <button onClick={prevQuestion}>Previous</button>

              <button className="skip-btn" onClick={skipQuestion}>
                Skip
              </button>

              <button onClick={nextQuestion}>Next</button>
            </div>
          </div>
        </div>

        {/* PALETTE */}

        <div className="palette-section">
          <h3>Skipped Questions</h3>

          <div className="palette-grid">
            {skippedQuestions.map((id) => {
              const questionIndex = questions.findIndex((q) => q.id === id);

              return (
                <button
                  key={id}
                  className="palette-btn skipped"
                  onClick={() => setCurrentQuestion(questionIndex)}
                >
                  {questionIndex + 1}
                </button>
              );
            })}
          </div>

          {skippedQuestions.length === 0 && (
            <p className="all-attempted">No skipped questions</p>
          )}

          <div className="unanswered-box">
            <h4>Not Attempted: {unanswered.length}</h4>
          </div>

          <button className="submit-btn" onClick={handleSubmit}>
            Submit Test
          </button>
        </div>
        <button className="exit-btn" onClick={handleExit} title="Exit Test">
          <FiX />
        </button>
      </div>
    </main>
  );
};

export default MockTest;
