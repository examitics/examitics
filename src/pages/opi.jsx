import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaClipboardList } from "react-icons/fa";

import Navbar from "../components/layout/navbar";

import opiQuestions from "../data/opi/opiquestions";

import "../styles/opi.css";

const OPI = () => {
  const navigate = useNavigate();
  const paletteRef = useRef(null);
  const [isChanging, setIsChanging] = useState(false);

  const [timeLeft, setTimeLeft] = useState(35 * 60);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = opiQuestions[currentQuestion];

  const totalQuestions = opiQuestions.length;

  const answeredCount = Object.keys(answers).length;

  const progress = (answeredCount / totalQuestions) * 100;

  // =====================
  // TRACKER
  // =====================

  const getVisibleQuestions = () => {
    const visible = [];

    for (let i = currentQuestion - 2; i <= currentQuestion + 2; i++) {
      if (i >= 0 && i < totalQuestions) {
        visible.push(i);
      }
    }

    return visible;
  };

  // =====================
  // SUBMIT TEST
  // =====================

  const handleSubmit = () => {
    navigate("/opi-result", {
      state: {
        answers,
        questions: opiQuestions,
      },
    });
  };

  // =====================
  // TIMER
  // =====================

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          handleSubmit();

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // =====================
  // FORMAT TIME
  // =====================

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // =====================
  // ANSWER
  // =====================

  // const handleAnswer = (value) => {
  //   setAnswers((prev) => ({
  //     ...prev,
  //     [question.id]: value,
  //   }));

  //   if (currentQuestion < totalQuestions - 1) {
  //     setTimeout(() => {
  //       setCurrentQuestion((prev) => prev + 1);
  //     }, 150);
  //   }
  // };
  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: value,
    }));
  };

  // =====================
  // NEXT
  // =====================

  // const handleNext = () => {
  //   if (currentQuestion < totalQuestions - 1) {
  //     setCurrentQuestion((prev) => prev + 1);
  //   }
  // };
  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setIsChanging(true);

      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);

        setTimeout(() => {
          setIsChanging(false);
        }, 50);
      }, 150);
    }
  };

  // =====================
  // PREVIOUS
  // =====================

  // const handlePrevious = () => {
  //   if (currentQuestion > 0) {
  //     setCurrentQuestion((prev) => prev - 1);
  //   }
  // };
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setIsChanging(true);

      setTimeout(() => {
        setCurrentQuestion((prev) => prev - 1);

        setTimeout(() => {
          setIsChanging(false);
        }, 50);
      }, 150);
    }
  };

  // =====================
  // SCROLL TO CURRENT QUESTION IN PALETTE
  // =====================
  useEffect(() => {
    const palette = paletteRef.current;

    if (!palette) return;

    const activeBtn = palette.children[currentQuestion];

    if (!activeBtn) return;

    activeBtn.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [currentQuestion]);

  // =====================
  // STANDARD OPI OPTIONS
  // =====================

  const options = [
    {
      value: 1,
      label: "Strongly Agree",
    },
    {
      value: 2,
      label: "Agree",
    },
    {
      value: 3,
      label: "Slightly Agree",
    },
    {
      value: 4,
      label: "Neutral",
    },
    {
      value: 5,
      label: "Slightly Disagree",
    },
    {
      value: 6,
      label: "Disagree",
    },
    {
      value: 7,
      label: "Strongly Disagree",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="opi-page">
        {/* HEADER */}

        <div className="opi-header-card">
          <div className="opi-header-left">
            <div className="opi-test-info">
              <div className="opi-test-icon">
                <FaClipboardList />
              </div>

              <div>
                <h4>OPI TEST</h4>
                <p>Officer Potential Inventory</p>
              </div>
            </div>

            <div className="opi-progress-wrapper">
              <div className="opi-progress-top">
                <span>
                  Answered <strong>{answeredCount}</strong> / {totalQuestions}
                </span>

                <span>{Math.round(progress)}%</span>
              </div>

              <div className="opi-progress">
                <div
                  className="opi-progress-fill"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="opi-timer">
            <FiClock />

            <div>
              <h2>{formatTime(timeLeft)}</h2>

              <span>TIME LEFT</span>
            </div>
          </div>
        </div>

        {/* QUESTION */}

        <div className="opi-content">
          {/* <div className="opi-question-card"> */}
          {/* <div key={question.id} className="opi-question-card"> */}
          <div
            className={`opi-question-card ${
              isChanging ? "question-changing" : ""
            }`}
          >
            <p className="question-tag">QUESTION</p>

            <h2 className="question-text">
              <span>{String(currentQuestion + 1).padStart(2, "0")}.</span>{" "}
              {question.statement}
            </h2>

            {question.type === "situational" && (
              <div className="situational-badge">Situational Question</div>
            )}

            {/* OPTIONS */}

            <div className="opi-options">
              {question.type === "situational"
                ? question.options.map((option, index) => (
                    <div
                      key={index}
                      className={`opi-option-card ${
                        answers[question.id] === index + 1 ? "selected" : ""
                      }`}
                      onClick={() => handleAnswer(index + 1)}
                    >
                      <div className="option-circle" />

                      <div className="option-label">{option}</div>
                    </div>
                  ))
                : options.map((option) => (
                    <div
                      key={option.value}
                      className={`opi-option-card ${
                        answers[question.id] === option.value ? "selected" : ""
                      }`}
                      onClick={() => handleAnswer(option.value)}
                    >
                      <div className="option-circle" />

                      <div className="option-number">{option.value}</div>

                      <div className="option-label">{option.label}</div>
                    </div>
                  ))}
            </div>

            {/* ========================================== */}
            <div className="opi-navigation">
              <button
                className="opi-nav-btn secondary"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <FiChevronLeft />
                Previous
              </button>

              <button className="opi-nav-btn submit-btn" onClick={handleSubmit}>
                Submit Test
              </button>

              <button
                className="opi-nav-btn primary"
                onClick={handleNext}
                disabled={currentQuestion === totalQuestions - 1}
              >
                Next
                <FiChevronRight />
              </button>
            </div>
            {/* ============================== */}
            <div className="opi-palette" ref={paletteRef}>
              {" "}
              {opiQuestions.map((q, index) => (
                <button
                  key={q.id}
                  className={`palette-btn
                ${currentQuestion === index ? "active" : ""}
                ${answers[q.id] ? "answered" : ""}`}
                  onClick={() => setCurrentQuestion(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* TRACKER */}

          <div className="opi-tracker-container">
            <div className="opi-tracker-header">Questions</div>

            <div className="opi-tracker">
              {getVisibleQuestions().map((index) => {
                const questionId = opiQuestions[index]?.id;

                const isAnswered = answers[questionId] !== undefined;

                const isCurrent = index === currentQuestion;

                const isUpcoming = index > currentQuestion;

                return (
                  <div
                    key={index}
                    className={`
                        tracker-item
                        ${isCurrent ? "current" : ""}
                        ${isAnswered ? "answered" : ""}
                        ${isUpcoming ? "upcoming" : ""}
                      `}
                  >
                    <span className="tracker-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {isAnswered && !isCurrent && (
                      <span className="tracker-check">✓</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* NAVIGATION */}
        </div>

        {/* PALETTE */}
      </div>
    </>
  );
};

export default OPI;
