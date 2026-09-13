import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
  FiArrowLeft,
  FiInfo,
  FiTarget,
  FiAward,
  FiImage,
} from "react-icons/fi";

import "../../styles/notes/notesPages.css";

/* =========================================================
   SERIES QUESTIONS
========================================================= */

const mcqs = [
  {
    question: "Which figure should replace the question mark?",
    image: "/images/nonverbal-set1-pic/q3.PNG",
    options: ["A", "B", "C"],
    correct: 1,
    explanation:
      "The number of divisions changes systematically. The first row contains figures divided into 2, 3 and 4 sections. The second row follows the same progression horizontally. In the final position, the figure should have no internal dividing line, making option A the best match.",
  },

  {
    question: "Which figure should replace the question mark?",
    image: "/images/nonverbal-set1-pic/q1.PNG",
    options: ["A", "B", "C"],
    correct: 1,
    explanation:
      "The shaded portion progresses in quarter-circle steps. The first row shows one-quarter, one-half and three-quarters. The pattern continues by cycling through the fractions, so the missing figure is three-quarters of the circle. Therefore, option B is correct.",
  },

  {
    question: "Study the figure carefully and select the figure that continues the series.",
    image: "/images/nonverbal-set1-pic/q4.PNG",
    options: ["A", "B", "C"],
    correct: 2,
    explanation:
      "Observe the movement and arrangement of the elements from one figure to the next. The correct option is the one that continues the same transformation.",
  },

  {
    question: "Which figure comes next in the series?",
    image: "/images/nonverbal-set1-pic/q5.PNG",
    options: ["A", "B", "C"],
    correct: 0,
    explanation:
      "Compare the position, direction and number of elements in each figure. The pattern follows a regular transformation, making option A the correct continuation.",
  },

  {
    question: "Select the figure that logically completes the series.",
    image: "/images/nonverbal-set1-pic/q6.PNG",
    options: ["A", "B", "C"],
    correct: 0,
    explanation:
      "The figures follow a consistent visual sequence. Track the changing position and orientation of the components to identify the next figure. Option A follows the established pattern.",
  },

  {
    question: "Which figure should come next?",
    image: "/images/nonverbal-set1-pic/q7.PNG",
    options: ["A", "B", "C"],
    correct: 2,
    explanation:
      "Look for the repeated movement or rotation of the figure. The correct answer is the option that continues the same sequence without breaking the established rule.",
  },

  {
    question: "Find the missing figure in the series.",
    image: "/images/nonverbal-set1-pic/q8.PNG",
    options: ["A", "B", "C"],
    correct: 1,
    explanation:
      "The arrangement of the shapes changes according to a fixed rule. Following the sequence carefully leads to option B.",
  },

  {
    question: "Which option completes the figure series?",
    image: "/images/nonverbal-set1-pic/q9.PNG",
    options: ["A", "B", "C"],
    correct: 2,
    explanation:
      "Identify what changes between consecutive figures, such as rotation, position, shading or number of elements. Option C continues the same pattern.",
  },

  {
    question: "What should replace the question mark?",
    image: "/images/nonverbal-set1-pic/q10.PNG",
    options: ["A", "B", "C"],
    correct: 0,
    explanation:
      "The sequence follows a regular visual transformation. By applying the same transformation to the final position, option A is obtained.",
  },

  {
    question: "Which figure comes next?",
    image: "/images/nonverbal-set1-pic/q11.PNG",
    options: ["A", "B", "C"],
    correct: 0,
    explanation:
      "Examine the direction, orientation and arrangement of the components. The next figure must preserve the same relationship. Therefore, option A is correct.",
  },

  {
    question: "Select the correct continuation of the series.",
    image: "/images/nonverbal-set1-pic/q12.PNG",
    options: ["A", "B", "C"],
    correct: 0,
    explanation:
      "The series uses a repeated transformation. Track each change carefully and apply the same rule to the missing position. Option A follows the pattern.",
  },

  {
    question: "Which figure completes the sequence?",
    image: "/images/nonverbal-set1-pic/q13.PNG",
    options: ["A", "B", "C", "D"],
    correct: 1,
    explanation:
      "The elements change in a predictable order. The correct figure is the one that continues the same movement and arrangement. Option B is correct.",
  },
];

/* =========================================================
   QUICK PRACTICE
========================================================= */

const quickQuestions = [
  {
    question: "What should you observe first?",
    answer: "The pattern between consecutive figures",
    explanation:
      "Always compare neighboring figures and identify what changes from one figure to the next.",
  },
  {
    question: "Which elements can change in a series?",
    answer: "Position, direction, shape, number or shading",
    explanation:
      "Non-verbal series may use rotation, movement, addition, subtraction, shading or changes in the number of elements.",
  },
  {
    question: "What is the best strategy?",
    answer: "Find the simplest repeating rule",
    explanation:
      "Avoid overcomplicating the question. First check for simple movement, rotation, addition, subtraction or alternation.",
  },
];

/* =========================================================
   HELPER
========================================================= */

const getOptionLetter = (index) => String.fromCharCode(65 + index);

/* =========================================================
   COMPONENT
========================================================= */

const Series = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const question = mcqs[currentQuestion];

  const answered = selectedAnswer !== null;
  const isLastQuestion = currentQuestion === mcqs.length - 1;

  const handleAnswer = (index) => {
    if (answered) return;

    setSelectedAnswer(index);

    if (index === question.correct) {
      setScore((previous) => previous + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) return;

    setCurrentQuestion((previous) => previous + 1);
    setSelectedAnswer(null);
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((previous) => previous - 1);
    setSelectedAnswer(null);
  };

  const restartPractice = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
  };

  const practiceFinished = isLastQuestion && selectedAnswer !== null;

  return (
    <main className="synonyms-page">
      <div className="synonyms-container">

        {/* =================================================
            BREADCRUMB
        ================================================= */}

        <nav className="synonyms-breadcrumb">
          <Link to="/notes">Notes Hub</Link>

          <FiArrowRight />

          <Link to="/notes">Non-Verbal Intelligence</Link>

          <FiArrowRight />

          <strong >Series</strong>
        </nav>

        {/* =================================================
            HERO
        ================================================= */}

        <section className="synonyms-hero">
          <div className="synonyms-hero-icon">
            <FiImage />
          </div>

          <div className="synonyms-hero-content">
            <span className="synonyms-eyebrow">
              NON-VERBAL INTELLIGENCE
            </span>

            <h1>Series</h1>

            <p>
              Learn how to identify patterns and relationships between
              figures in non-verbal intelligence tests. Series questions
              test your ability to observe changes in shape, position,
              direction, shading, size and arrangement.
            </p>
          </div>
        </section>

        {/* =================================================
            INTRODUCTION
        ================================================= */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>What Is a Non-Verbal Series?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              A <strong>non-verbal series</strong> is a sequence of
              figures arranged according to a specific logical pattern.
              One figure may be missing, or you may be asked to select
              the figure that comes next.
            </p>

            <p>
              Your task is to observe the changes between the figures,
              identify the rule and apply that rule to determine the
              correct answer.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Simple Example</strong>

                <p>
                  Figure 1 → Figure 2 → Figure 3 → ?
                </p>

                <span>
                  Look for changes in rotation, position, number of
                  elements, shading or shape.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            CONCEPT
        ================================================= */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">02</span>

            <div>
              <span className="section-label">CONCEPT</span>
              <h2>How to Solve Series Questions</h2>
            </div>
          </div>

          <div className="content-card">

            <div className="concept-list">

              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Observe Consecutive Figures</h3>

                  <p>
                    Compare the first figure with the second, then the
                    second with the third. Focus on what has changed.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Check Rotation and Direction</h3>

                  <p>
                    Determine whether an object is rotating clockwise,
                    anticlockwise or changing its direction.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Count the Elements</h3>

                  <p>
                    Count lines, dots, shapes, sections or shaded areas.
                    Some series increase or decrease these elements.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Check Shading and Position</h3>

                  <p>
                    Observe whether shaded areas move, alternate or
                    increase and decrease in size.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>05</span>

                <div>
                  <h3>Find the Simplest Rule</h3>

                  <p>
                    Prefer a simple repeated transformation over a
                    complicated explanation. Intelligence-test series
                    normally follow a consistent rule.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            COMMON PATTERNS
        ================================================= */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">03</span>

            <div>
              <span className="section-label">PATTERN TYPES</span>
              <h2>Common Series Patterns</h2>
            </div>
          </div>

          <div className="quick-question-grid">

            <div className="quick-question-card">
              <span>PATTERN 01</span>

              <h3>Rotation</h3>

              <div className="quick-answer">
                <FiCheckCircle />
                <strong>Figure rotates</strong>
              </div>

              <p>
                A figure may rotate by a fixed angle in every step,
                such as 90°, 180° or 45°.
              </p>
            </div>

            <div className="quick-question-card">
              <span>PATTERN 02</span>

              <h3>Movement</h3>

              <div className="quick-answer">
                <FiCheckCircle />
                <strong>Position changes</strong>
              </div>

              <p>
                An object may move clockwise, anticlockwise, left,
                right, up, down or diagonally.
              </p>
            </div>

            <div className="quick-question-card">
              <span>PATTERN 03</span>

              <h3>Counting</h3>

              <div className="quick-answer">
                <FiCheckCircle />
                <strong>Elements change</strong>
              </div>

              <p>
                The number of lines, dots, sections or shapes may
                increase or decrease regularly.
              </p>
            </div>

          </div>
        </section>

        {/* =================================================
            EXAMPLE IMAGES
        ================================================= */}

        <section className="notes-section">

          <div className="section-heading">
            <span className="section-number">04</span>

            <div>
              <span className="section-label">VISUAL EXAMPLES</span>
              <h2>Understand Series Through Figures</h2>
            </div>
          </div>

          <div className="series-example-grid">

            <div className="series-example-card">

              <div className="series-example-header">
                <span>EXAMPLE 01</span>
                <FiImage />
              </div>

              <h3>Division Pattern</h3>

              <img
                src="/images/nonverbal-set1-pic/q3.PNG"
                alt="Non-verbal series division pattern example"
                className="series-example-image"
              />

              <div className="series-example-answer">
                <FiCheckCircle />

                <div>
                  <strong>Answer: B</strong>

                  <p>
                    The number of internal divisions changes in a
                    systematic order. The missing figure continues
                    that pattern.
                  </p>
                </div>
              </div>

            </div>

            <div className="series-example-card">

              <div className="series-example-header">
                <span>EXAMPLE 02</span>
                <FiImage />
              </div>

              <h3>Shading Pattern</h3>

              <img
                src="/images/nonverbal-set1-pic/q1.PNG"
                alt="Non-verbal series shading pattern example"
                className="series-example-image"
              />

              <div className="series-example-answer">
                <FiCheckCircle />

                <div>
                  <strong>Answer: B</strong>

                  <p>
                    The shaded portion progresses in quarter-circle
                    steps. The missing figure therefore represents
                    three-quarters of the circle.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            EXAM STRATEGY
        ================================================= */}

        <section className="notes-section">

          <div className="section-heading">
            <span className="section-number">05</span>

            <div>
              <span className="section-label">EXAM STRATEGY</span>
              <h2>Tips for Solving Non-Verbal Series</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Compare Step by Step</strong>

                <p>
                  Compare consecutive figures instead of trying to
                  understand the entire series at once.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiBookOpen />

              <div>
                <strong>Check Rotation First</strong>

                <p>
                  Rotation and movement are among the most common
                  patterns in non-verbal intelligence tests.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>Count Everything</strong>

                <p>
                  Count lines, dots, shaded sections and shapes when
                  the pattern is not immediately obvious.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =================================================
            READING QUESTIONS
        ================================================= */}

        <section className="notes-section">

          <div className="section-heading">
            <span className="section-number">06</span>

            <div>
              <span className="section-label">
                READING QUESTIONS
              </span>

              <h2>Non-Verbal Series Practice Questions</h2>
            </div>
          </div>

          <div className="content-card">

            <p>
              Study each figure carefully before checking the answer.
              Focus on rotation, movement, shading, number of elements
              and other visual changes.
            </p>

          </div>

          <div className="reading-questions">

            {mcqs.map((item, questionIndex) => (

              <article
                className="reading-question"
                key={questionIndex}
              >

                <div className="reading-question-header">

                  <span className="reading-question-number">
                    Q{questionIndex + 1}
                  </span>

                  <h3>{item.question}</h3>

                </div>

                {/* QUESTION IMAGE */}

                <div className="reading-image-wrapper">

                  <img
                    src={item.image}
                    alt={`Non-verbal series question ${
                      questionIndex + 1
                    }`}
                    className="reading-question-image"
                  />

                </div>

                {/* OPTIONS */}

                <div className="reading-options">

                  {item.options.map((option, optionIndex) => {

                    const isCorrect =
                      optionIndex === item.correct;

                    return (

                      <div
                        className={`reading-option ${
                          isCorrect ? "correct" : ""
                        }`}
                        key={optionIndex}
                      >

                        <span className="option-label">
                          {getOptionLetter(optionIndex)}
                        </span>

                        <span className="option-text">
                          {option}
                        </span>

                        {isCorrect && (
                          <FiCheckCircle className="correct-icon" />
                        )}

                      </div>

                    );
                  })}

                </div>

                {/* ANSWER */}

                <div className="reading-answer">

                  <div className="answer-title">

                    <FiCheckCircle />

                    <strong>Correct Answer</strong>

                  </div>

                  <p>
                    {getOptionLetter(item.correct)}.{" "}
                    {item.options[item.correct]}
                  </p>

                </div>

                {/* EXPLANATION */}

                <div className="reading-explanation">

                  <div className="explanation-title">

                    <FiInfo />

                    <strong>Explanation</strong>

                  </div>

                  <p>{item.explanation}</p>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =================================================
            INTERACTIVE PRACTICE
        ================================================= */}

        <section className="practice-section">

          <div className="practice-header">

            <div>

              <span className="section-label">
                INTERACTIVE PRACTICE
              </span>

              <h2>Test Your Series Skills</h2>

              <p>
                Study the figure, select your answer and receive
                immediate feedback.
              </p>

            </div>

            <div className="practice-progress">

              <strong>
                {currentQuestion + 1}
              </strong>

              <span>
                / {mcqs.length}
              </span>

            </div>

          </div>

          {!practiceFinished ? (

            <div className="mcq-card">

              <div className="mcq-top">

                <span>
                  QUESTION {currentQuestion + 1}
                </span>

                <span>
                  Score: {score}
                </span>

              </div>

              <h3>
                {question.question}
              </h3>

              {/* INTERACTIVE IMAGE */}

              <div className="mcq-image-wrapper">

                <img
                  src={question.image}
                  alt={`Series question ${
                    currentQuestion + 1
                  }`}
                  className="mcq-question-image"
                />

              </div>

              {/* OPTIONS */}

              <div className="mcq-options">

                {question.options.map((option, index) => {

                  const isSelected =
                    selectedAnswer === index;

                  const isCorrect =
                    index === question.correct;

                  const isWrong =
                    answered &&
                    isSelected &&
                    !isCorrect;

                  return (

                    <button
                      type="button"
                      key={index}
                      className={`mcq-option ${
                        isCorrect && answered
                          ? "correct"
                          : ""
                      } ${
                        isWrong
                          ? "wrong"
                          : ""
                      }`}
                      onClick={() => handleAnswer(index)}
                      disabled={answered}
                    >

                      <span className="option-letter">
                        {getOptionLetter(index)}
                      </span>

                      <span className="option-text">
                        {option}
                      </span>

                      {answered &&
                        isCorrect && (
                          <FiCheckCircle className="answer-icon" />
                        )}

                      {isWrong && (
                        <FiXCircle className="answer-icon" />
                      )}

                    </button>

                  );
                })}

              </div>

              {/* FEEDBACK */}

              {answered && (

                <div
                  className={`answer-feedback ${
                    selectedAnswer === question.correct
                      ? "feedback-correct"
                      : "feedback-wrong"
                  }`}
                >

                  <div className="feedback-title">

                    {selectedAnswer === question.correct ? (
                      <>
                        <FiCheckCircle />
                        Correct Answer
                      </>
                    ) : (
                      <>
                        <FiXCircle />
                        Incorrect Answer
                      </>
                    )}

                  </div>

                  <p>
                    Correct answer:{" "}

                    <strong>
                      {getOptionLetter(question.correct)}.{" "}
                      {question.options[question.correct]}
                    </strong>
                  </p>

                  <div className="explanation">

                    <strong>
                      Explanation
                    </strong>

                    <p>
                      {question.explanation}
                    </p>

                  </div>

                </div>

              )}

              {/* NAVIGATION */}

              <div className="mcq-navigation">

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  <FiArrowLeft />
                  Previous
                </button>

                <button
                  type="button"
                  className="primary-btn"
                  onClick={handleNext}
                  disabled={!answered}
                >
                  {isLastQuestion
                    ? "Finish"
                    : "Next"}

                  <FiArrowRight />
                </button>

              </div>

            </div>

          ) : (

            <div className="practice-result">

              <div className="result-icon">
                <FiAward />
              </div>

              <span className="section-label">
                PRACTICE COMPLETE
              </span>

              <h2>
                Series Practice Result
              </h2>

              <div className="result-score">

                <strong>
                  {score}
                </strong>

                <span>
                  {" "}
                  / {mcqs.length}
                </span>

              </div>

              <p>
                You completed all {mcqs.length} series
                questions. Review the explanations and
                practice again to improve your accuracy
                and speed.
              </p>

              <button
                type="button"
                className="primary-btn"
                onClick={restartPractice}
              >
                <FiArrowLeft />
                Practice Again
              </button>

            </div>

          )}

        </section>

        {/* =================================================
            RELATED TOPICS
        ================================================= */}

        <section className="related-section">

          <span className="section-label">
            CONTINUE LEARNING
          </span>

          <h2>
            Related Non-Verbal Topics
          </h2>

          <div className="related-links">

            <Link to="/notes/nonverbal/analogy">
              Non-Verbal Analogy
              <FiArrowRight />
            </Link>

            <Link to="/notes/nonverbal/coding-decoding">
              Coding & Decoding
              <FiArrowRight />
            </Link>

            <Link to="/notes/nonverbal/odd-one-out">
              Odd One Out
              <FiArrowRight />
            </Link>

            <Link to="/notes/nonverbal/matrices">
              Matrices
              <FiArrowRight />
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
};

export default Series;