import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { FiX, FiClock } from "react-icons/fi";

import { supabase } from "../lib/supabase";

import verbalSet1 from "../data/mcqs/verbal/set1";

import academicSet1 from "../data/mcqs/academic/set1";

import nonVerbalSet1 from "../data/mcqs/nonverbal/set1";
import MAT from "../data/mcqs/mat/set1";

import "../styles/mocktest.css";

import intelligenceSet1 from "../data/paf-mcqs/intelligence/intelligence-set1";

import pafEnglishSet1 from "../data/paf-mcqs/english/pafEnglish-Set1";

import pafMathSet1 from "../data/paf-mcqs/math/pafMath-Set1";

import pafPhysicsSet1 from "../data/paf-mcqs/physics/pafPhysics-Set1";

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
//
// Academic Set 2 is intentionally NOT here.
// It is loaded securely from Supabase.
//

const questionBank = {
  verbal: {
    set1: verbalSet1,
  },

  academic: {
    set1: academicSet1,
  },

  nonverbal: {
    set1: nonVerbalSet1,
  },

  mat: {
    set1: MAT,
  },

  intelligence: {
    "intelligence-set1": intelligenceSet1,
  },

  english: {
    "english-set1": pafEnglishSet1,
  },

  math: {
    "math-set1": pafMathSet1,
  },

  physics: {
    "physics-set1": pafPhysicsSet1,
  },
};

// ==========================================
// COMPONENT
// ==========================================

// const MockTest = ({ category: categoryProp, setId: setIdProp }) => {
const MockTest = ({
  category: categoryProp,
  setId: setIdProp,
  exam: examProp,
}) => {
  const navigate = useNavigate();
  const params = useParams();

  const exam = examProp ?? params.exam;
  const category = categoryProp ?? params.category;
  const setId = setIdProp ?? params.setId;

  // ==========================================
  // QUESTION STATES
  // ==========================================

  const [questions, setQuestions] = useState([]);

  const [questionsLoading, setQuestionsLoading] = useState(false);

  const [questionsError, setQuestionsError] = useState("");

  // ==========================================
  // TEST STATES
  // ==========================================

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState({});

  const [skippedQuestions, setSkippedQuestions] = useState([]);

  const [submitting, setSubmitting] = useState(false);
const [submitError, setSubmitError] = useState("");

  // ==========================================
  // TEST TIME LIMIT
  // ==========================================
  //
  // Intelligence = 40 minutes
  // Everything else = 30 minutes
  //

  const testDuration = category === "intelligence" ? 40 * 60 : 30 * 60;

  const [timeLeft, setTimeLeft] = useState(testDuration);

  // ==========================================
  // LOAD QUESTIONS
  // ==========================================

  useEffect(() => {
    let cancelled = false;

    const loadQuestions = async () => {
      // ==========================================
      // RESET LOADING STATE
      // ==========================================

      setQuestionsLoading(true);
      setQuestionsError("");

      // ==========================================
      // PREMIUM PAF ENGLISH SETS 2 & 3
      // ==========================================
      //
      // These questions are stored securely in Supabase.
      //
      // PAF English Set 2 -> Supabase
      // PAF English Set 3 -> Supabase
      //
      // PremiumRoute protects the page.
      // Supabase RLS also protects the database.
      //

      if (
        exam === "paf" &&
        category === "english" &&
        ["set2", "set3"].includes(setId)
      ) {
        const { data, error } = await supabase
          .from("mock_questions")
          .select(
            "id, question_number, question, options, correct_answer, image",
          )
          .eq("exam", "paf")
          .eq("category", "english")
          .eq("set_id", setId)
          .eq("is_premium", true)
          .order("question_number", {
            ascending: true,
          });

        if (cancelled) {
          return;
        }

        if (error) {
          console.error("Supabase PAF English question loading error:", error);

          setQuestions([]);

          setQuestionsError("Unable to load the mock test. Please try again.");

          setQuestionsLoading(false);

          return;
        }

        if (!data || data.length === 0) {
          console.warn(`No premium PAF English questions found for ${setId}.`);

          setQuestions([]);

          setQuestionsError(
            "No questions are available for this mock test yet.",
          );

          setQuestionsLoading(false);

          return;
        }

        // const formattedQuestions = data.map((q) => ({
        //   id: q.id,

        //   questionNumber: q.question_number,

        //   question: q.question,

        //   options: Array.isArray(q.options) ? shuffleArray(q.options) : [],

        //   correctAnswer: q.correct_answer,

        //   image: q.image || null,
        // }));

        const formattedQuestions = data.map((q) => {
          let options = [];

          if (Array.isArray(q.options)) {
            options = q.options;
          } else if (q.options && typeof q.options === "object") {
            options = ["A", "B", "C", "D"]
              .map((key) => q.options[key])
              .filter(Boolean);
          }

          return {
            id: q.id,

            questionNumber: q.question_number,

            question: q.question,

            // Randomize options after converting
            // Supabase A/B/C/D object into an array.
            options: shuffleArray(options),

            correctAnswer: q.correct_answer,

            image: q.image || null,
          };
        });

        const randomizedQuestions = shuffleArray(formattedQuestions);

        setQuestions(randomizedQuestions);

        setQuestionsLoading(false);

        return;
      }
      // ==========================================
      // PREMIUM ACADEMIC SET 2
      // ==========================================
      //
      // These questions are stored in Supabase.
      //
      // RLS allows:
      //
      // Free user  -> blocked
      // Premium    -> allowed
      //
      // PremiumRoute already protects the page,
      // but RLS also protects the actual database.
      //

      // if (category === "academic" && setId === "set2") {
      // ==========================================
      // PREMIUM SUPABASE MOCK TESTS
      // ==========================================
      //
      // PMA:
      //   Academic Set 2
      //   Academic Set 3
      //   Verbal Set 2
      //
      // PAF:
      //   English Set 2
      //   English Set 3
      //
      // These questions are stored in Supabase.
      //

      // const premiumMock =
      //   (exam === "pma-lc" &&
      //     category === "academic" &&
      //     ["set2", "set3"].includes(setId)) ||
      //   (exam === "pma-lc" && category === "verbal" && setId === "set2") ||
      //   (exam === "paf" &&
      //     category === "english" &&
      //     ["set2", "set3"].includes(setId));
      const premiumMock =
  // ==========================================
  // PMA PREMIUM MOCK TESTS
  // ==========================================

  // Academic Set 2 & 3
  (exam === "pma-lc" &&
    category === "academic" &&
    ["set2", "set3", "set4"].includes(setId)) ||

  // Verbal Set 2
  (exam === "pma-lc" &&
    category === "verbal" &&
    setId === "set2") ||

  // ==========================================
  // PAF PREMIUM MOCK TESTS
  // ==========================================

  // English Set 2 & 3
  (exam === "paf" &&
    category === "english" &&
    ["set2", "set3"].includes(setId)) ||

  // Math Set 2 & 3
  (exam === "paf" &&
    category === "math" &&
    ["set2", "set3"].includes(setId)) ||

  // Physics Set 2 & 3
  (exam === "paf" &&
    category === "physics" &&
    ["set2", "set3"].includes(setId));

      if (premiumMock) {
        const { data, error } = await supabase
          .from("mock_questions")
          .select(
            "id, question_number, question, options, correct_answer, image",
          )
          // .eq("exam", "pma-lc")
          // .eq("category", "academic")
          // .eq("set_id", "set2")
          .eq("exam", exam)
          .eq("category", category)
          .eq("set_id", setId)
          .eq("is_premium", true)
          .order("question_number", {
            ascending: true,
          });

        //           console.log("Premium academic set2 data:", data);
        // console.log("Premium academic set2 error:", error);
        // console.log("Premium academic set2 count:", data?.length);

        // ==========================================
        // COMPONENT WAS UNMOUNTED
        // ==========================================

        if (cancelled) {
          return;
        }

        // ==========================================
        // SUPABASE ERROR
        // ==========================================

        if (error) {
          console.error("Supabase question loading error:", error);

          setQuestions([]);

          setQuestionsError("Unable to load the mock test. Please try again.");

          setQuestionsLoading(false);

          return;
        }

        // ==========================================
        // NO QUESTIONS
        // ==========================================

        if (!data || data.length === 0) {
          console.warn("No premium questions found for Academic Set 2.");

          setQuestions([]);

          setQuestionsError(
            "No questions are available for this mock test yet.",
          );

          setQuestionsLoading(false);

          return;
        }

        // ==========================================
        // FORMAT SUPABASE DATA
        // ==========================================

        const formattedQuestions = data.map((q) => ({
          id: q.id,

          // Keep original question number.
          questionNumber: q.question_number,

          question: q.question,

          // Randomize options.
          options: Array.isArray(q.options) ? shuffleArray(q.options) : [],

          // Used by result page.
          correctAnswer: q.correct_answer,

          image: q.image || null,
        }));

        // ==========================================
        // RANDOMIZE QUESTION ORDER
        // ==========================================

        const randomizedQuestions = shuffleArray(formattedQuestions);

        setQuestions(randomizedQuestions);

        setQuestionsLoading(false);

        return;
      }

      // ==========================================
      // NORMAL LOCAL MOCK TESTS
      // ==========================================

      const selectedQuestions = questionBank[category]?.[setId] || [];

      const randomizedQuestions = shuffleArray(selectedQuestions).map((q) => ({
        ...q,

        options: shuffleArray(q.options),
      }));

      if (!cancelled) {
        setQuestions(randomizedQuestions);

        setQuestionsLoading(false);

        setQuestionsError("");
      }
    };

    loadQuestions();

    // ==========================================
    // CLEANUP
    // ==========================================

    return () => {
      cancelled = true;
    };
  }, [exam, category, setId]);

  // ==========================================
  // RESET TEST WHEN ROUTE CHANGES
  // ==========================================

  useEffect(() => {
    console.log("MockTest params:", {
      category,
      setId,
    });

    setCurrentQuestion(0);

    setAnswers({});

    setSkippedQuestions([]);

    const duration = category === "intelligence" ? 40 * 60 : 30 * 60;

    setTimeLeft(duration);
  }, [category, setId]);

  // ==========================================
  // TIMER
  // ==========================================

  useEffect(() => {
    // Don't start timer until questions
    // have been loaded.

    if (questions.length === 0) {
      return;
    }

    // Time finished.

    if (timeLeft <= 0) {
      handleSubmit();

      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, questions.length]);

  // ==========================================
  // EXIT TEST
  // ==========================================

  const handleExit = () => {
    const confirmed = window.confirm(
      "Are you sure you want to exit? Your progress will be lost.",
    );

    if (confirmed) {
      navigate(-1);
    }
  };

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

    if (!currentQ) {
      return;
    }

    setAnswers((prev) => ({
      ...prev,

      [currentQ.id]: option,
    }));

    // Remove question from skipped list.

    setSkippedQuestions((prev) => prev.filter((id) => id !== currentQ.id));
  };

  // ==========================================
  // NEXT QUESTION
  // ==========================================

  const nextQuestion = () => {
    const currentQ = questions[currentQuestion];

    if (!currentQ) {
      return;
    }

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

    if (!currentQ) {
      return;
    }

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

  // const handleSubmit = () => {
  //   navigate("/result", {
  //     state: {
  //       questions,

  //       answers,

  //       timeLeft,

  //       category,

  //       setId,
  //     },
  //   });
  // };
  // ==========================================
// SUBMIT TEST
// ==========================================

// ==========================================
// SUBMIT TEST
// ==========================================

const handleSubmit = async () => {
  // Prevent multiple submissions.
  if (submitting) {
    return;
  }

  if (!questions || questions.length === 0) {
    return;
  }

  setSubmitting(true);
  setSubmitError("");

  try {
    // ==========================================
    // CALCULATE TIME USED
    // ==========================================

    const testDuration =
      category === "intelligence"
        ? 40 * 60
        : 30 * 60;

    const timeTakenSeconds = Math.max(
      0,
      testDuration - timeLeft
    );

    // ==========================================
    // DETERMINE PREMIUM TEST
    // ==========================================

    const isPremiumTest =
      // PMA Academic
      (
        exam === "pma-lc" &&
        category === "academic" &&
        ["set2", "set3", "set4"].includes(setId)
      ) ||

      // PMA Verbal
      (
        exam === "pma-lc" &&
        category === "verbal" &&
        setId === "set2"
      ) ||

      // PAF English
      (
        exam === "paf" &&
        category === "english" &&
        ["set2", "set3"].includes(setId)
      ) ||

      // PAF Math
      (
        exam === "paf" &&
        category === "math" &&
        ["set2", "set3"].includes(setId)
      ) ||

      // PAF Physics
      (
        exam === "paf" &&
        category === "physics" &&
        ["set2", "set3"].includes(setId)
      );

    // ==========================================
    // FREE TEST
    // ==========================================

    if (!isPremiumTest) {
      console.log(
        "Free mock test submitted locally."
      );

      navigate("/result", {
        state: {
          questions,
          answers,
          timeLeft,
          category,
          setId,
          exam,
        },
      });

      return;
    }

    // ==========================================
    // PREMIUM TEST
    // ==========================================

    const questionIds = questions.map(
      (question) => question.id
    );

    const userAnswers = {
      ...answers,
    };

    // ==========================================
    // SECURE SUPABASE SUBMISSION
    // ==========================================

    const { data, error } = await supabase.rpc(
      "submit_mock_test",
      {
        question_ids: questionIds,

        user_answers: userAnswers,

        test_exam: exam,

        test_category: category,

        test_set_id: setId,

        time_taken_seconds: timeTakenSeconds,
      }
    );

    // ==========================================
    // SUPABASE ERROR
    // ==========================================

    if (error) {
      console.error(
        "Mock test submission error:",
        error
      );

      setSubmitError(
        error.message ||
          "Unable to submit your test. Please try again."
      );

      setSubmitting(false);

      return;
    }

    // ==========================================
    // PREMIUM SUCCESS
    // ==========================================

    console.log(
      "Premium mock test submitted:",
      data
    );

    navigate("/result", {
      state: {
        questions,
        answers,
        timeLeft,
        category,
        setId,
        exam,

        // Secure result from Supabase.
        result: data,

        // Saved progress record.
        attemptId: data?.attempt_id,
      },
    });

  } catch (error) {

    console.error(
      "Unexpected mock test submission error:",
      error
    );

    setSubmitError(
      "Something went wrong while submitting your test. Please try again."
    );

    setSubmitting(false);
  }
};

  // ==========================================
  // QUESTIONS LOADING
  // ==========================================

  if (questionsLoading) {
    return (
      <main className="mock-test-page">
        <div className="question-card">
          <h2>Loading Mock Test...</h2>

          <p>Please wait while we prepare your questions.</p>
        </div>
      </main>
    );
  }

  // ==========================================
  // QUESTION ERROR
  // ==========================================

  if (questionsError) {
    return (
      <main className="mock-test-page">
        <div className="question-card">
          <h2>Unable to Load Test</h2>

          <p>{questionsError}</p>

          <button
            className="submit-btn"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  // ==========================================
  // NO QUESTIONS
  // ==========================================

  if (questions.length === 0) {
    return (
      <main className="mock-test-page">
        <div className="question-card">
          <h2>No Questions Found</h2>

          <p>Please check your URL or add questions to the question bank.</p>
        </div>
      </main>
    );
  }

  // ==========================================
  // CURRENT QUESTION SAFETY CHECK
  // ==========================================

  const currentQ = questions[currentQuestion];

  if (!currentQ) {
    return (
      <main className="mock-test-page">
        <div className="question-card">
          <h2>Question Not Found</h2>

          <p>Something went wrong while loading this mock test.</p>
        </div>
      </main>
    );
  }

  // ==========================================
  // NOT ATTEMPTED
  // ==========================================

  const unanswered = questions.filter((q) => !answers[q.id]);

  // ==========================================
  // PROGRESS
  // ==========================================

  const progress =
    questions.length > 0
      ? (Object.keys(answers).length / questions.length) * 100
      : 0;

  // ==========================================
  // UI
  // ==========================================

  return (
    <main className="mock-test-page">
      {/* ======================================
          TOP BAR
      ====================================== */}

      <div className="mock-topbar">
        <div className="topbar-left">
          {/* <h2>
            PMA {category.toUpperCase()} Mock Test
          </h2> */}
          {/* <h2>
            {exam === "paf"
              ? "PAF ENGLISH Mock Test"
              : `PMA ${category.toUpperCase()} Mock Test`}
          </h2> */}
          <h2>
  {exam === "paf"
    ? `PAF ${category.toUpperCase()} Mock Test`
    : `PMA ${category.toUpperCase()} Mock Test`}
</h2>

          {/* ==================================
              PROGRESS
          ================================== */}

          <div className="progress-wrapper">
            <div className="progress-info">
              <span>
                {Object.keys(answers).length} / {questions.length} Attempted
              </span>

              <span>{Math.round(progress)}%</span>
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

        {/* ======================================
            TIMER
        ====================================== */}

        <div className="timer">
          <FiClock />

          {formatTime()}
        </div>
      </div>

      {/* ======================================
          MAIN LAYOUT
      ====================================== */}

      <div className="mock-layout">
        {/* ====================================
            QUESTION SECTION
        ==================================== */}

        <div className="question-section">
          <div className="question-card">
            {/* ==================================
                QUESTION NUMBER
            ================================== */}

            <span className="question-number">
              Question {currentQuestion + 1} / {questions.length}
            </span>

            {/* ==================================
                QUESTION
            ================================== */}

            <h3>{currentQ.question}</h3>

            {/* ==================================
                QUESTION IMAGE
            ================================== */}

            {currentQ.image && (
              <img
                src={currentQ.image}
                alt="Question"
                className="question-image"
              />
            )}

            {/* ==================================
                OPTIONS
            ================================== */}

            <div className="options-grid">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  className={
                    answers[currentQ.id] === option
                      ? "option-btn active"
                      : "option-btn"
                  }
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* ==================================
                NAVIGATION
            ================================== */}

            <div className="navigation-buttons">
              <button onClick={prevQuestion} disabled={currentQuestion === 0}>
                Previous
              </button>

              <button className="skip-btn" onClick={skipQuestion}>
                Skip
              </button>

              <button
                onClick={nextQuestion}
                disabled={currentQuestion === questions.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* ====================================
            PALETTE SECTION
        ==================================== */}

        <div className="palette-section">
          <h3>Skipped Questions</h3>

          {/* ==================================
              SKIPPED QUESTIONS
          ================================== */}

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

          {/* ==================================
              NO SKIPPED QUESTIONS
          ================================== */}

          {skippedQuestions.length === 0 && (
            <p className="all-attempted">No skipped questions</p>
          )}

          {/* ==================================
              UNANSWERED
          ================================== */}

          <div className="unanswered-box">
            <h4>Not Attempted: {unanswered.length}</h4>
          </div>

          {/* ==================================
              SUBMIT
          ================================== */}

          {/* <button className="submit-btn" onClick={handleSubmit}>
            Submit Test
          </button> */}

          {submitError && (
  <p className="submit-error">
    {submitError}
  </p>
)}

          <button
  className="submit-btn"
  onClick={handleSubmit}
  disabled={submitting}
>
  {submitting ? "Submitting..." : "Submit Test"}
</button>
        </div>

        {/* ====================================
            EXIT BUTTON
        ==================================== */}

        <button className="exit-btn" onClick={handleExit} title="Exit Test">
          <FiX />
        </button>
      </div>
    </main>
  );
};

export default MockTest;
