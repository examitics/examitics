import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import { FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaClipboardList } from "react-icons/fa";

import Navbar from "../components/layout/navbar";

import Adsterra728x90 from "../components/Adsterra728x90";

import opiQuestions from "../data/opi/opiquestions";

import "../styles/opi.css";

import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

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
      <Helmet>
        {/* Primary SEO */}
        <title>
          Free OPI Personality Test | Officer Like Qualities Assessment |
          EXAMITICS
        </title>

        <meta
          name="description"
          content="Take the free OPI Personality Test and receive an instant personality analysis with Officer Like Qualities (OLQs), leadership traits, behavioral strengths and detailed performance insights. Ideal for ISSB, PMA Long Course, Pakistan Army, Navy and Air Force candidates."
        />

        <meta
          name="keywords"
          content="OPI Test, OPI Personality Test, Officer Like Qualities, OLQ Test, Personality Assessment, ISSB Personality Test, ISSB Psychology Test, Leadership Assessment, Personality Analysis, Pakistan Army ISSB, PMA Long Course Preparation, Pakistan Navy ISSB, Pakistan Air Force ISSB, Free Personality Test, EXAMITICS"
        />

        <meta name="author" content="EXAMITICS" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.examitics.com/opi" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Free OPI Personality Test | Officer Like Qualities Assessment"
        />

        <meta
          property="og:description"
          content="Discover your personality traits, leadership potential and Officer Like Qualities with a free OPI Personality Test and instant analysis on EXAMITICS."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />

        <meta property="og:url" content="https://www.examitics.com/opi" />

        <meta
          property="og:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Free OPI Personality Test | Officer Like Qualities Assessment"
        />

        <meta
          name="twitter:description"
          content="Take the free OPI Personality Test and receive instant personality insights, Officer Like Qualities evaluation and leadership analysis for ISSB preparation."
        />

        <meta
          name="twitter:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />
      </Helmet>
      <BreadcrumbSchema
  items={[
    {
      name: "Home",
      url: "https://www.examitics.com/",
    },
    {
      name: "OPI Personality Test",
      url: "https://www.examitics.com/opi",
    },
  ]}
/>
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
              {/* <button
  className="opi-nav-btn submit-btn"
  onClick={() => {
    window.open(
      "https://www.effectivecpmnetwork.com/iiikcn40sy?key=62694b4e41a1a3c22f1b3bbb5189f72d",
      "_blank"
    );

    handleSubmit();
  }}
>
  Submit Test
</button> */}

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
        </div>
      </div>
      <div className="desktop-ad">
        <Adsterra728x90 />
      </div>{" "}
    </>
  );
};

export default OPI;
