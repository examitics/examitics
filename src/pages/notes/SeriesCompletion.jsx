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
} from "react-icons/fi";

import "../../styles/notes/notesPages.css";

const mcqs = [
  // =========================
  // NUMBER SERIES
  // =========================

  {
    question: "Find the missing number: 2, 6, 14, 30, 62, ?",
    options: ["124", "126", "128", "130"],
    correct: 1,
    explanation:
      "Each number is multiplied by 2 and then 2 is added: 2 × 2 + 2 = 6, 6 × 2 + 2 = 14, and so on. Therefore, 62 × 2 + 2 = 126.",
  },
  {
    question: "Find the missing number: 3, 6, 12, 24, ?",
    options: ["36", "42", "48", "54"],
    correct: 2,
    explanation:
      "Each number is multiplied by 2. Therefore, 24 × 2 = 48.",
  },
  {
    question: "Find the missing number: 5, 10, 20, 40, ?",
    options: ["60", "70", "80", "90"],
    correct: 2,
    explanation:
      "Each term is doubled: 5 × 2 = 10, 10 × 2 = 20, 20 × 2 = 40. Therefore, the next number is 80.",
  },
  {
    question: "Find the missing number: 81, 27, 9, 3, ?",
    options: ["0", "1", "2", "6"],
    correct: 1,
    explanation:
      "Each number is divided by 3: 81 ÷ 3 = 27, 27 ÷ 3 = 9, 9 ÷ 3 = 3. Therefore, 3 ÷ 3 = 1.",
  },
  {
    question: "Find the missing number: 4, 9, 14, 19, ?",
    options: ["22", "23", "24", "25"],
    correct: 2,
    explanation:
      "The difference between consecutive numbers is +5. Therefore, 19 + 5 = 24.",
  },
  {
    question: "Find the missing number: 7, 14, 21, 28, ?",
    options: ["32", "35", "36", "42"],
    correct: 1,
    explanation:
      "Each term increases by 7. Therefore, 28 + 7 = 35.",
  },
  {
    question: "Find the missing number: 1, 4, 9, 16, ?",
    options: ["20", "24", "25", "27"],
    correct: 2,
    explanation:
      "These are consecutive square numbers: 1², 2², 3², 4². The next is 5² = 25.",
  },
  {
    question: "Find the missing number: 2, 5, 10, 17, 26, ?",
    options: ["35", "36", "37", "38"],
    correct: 2,
    explanation:
      "The differences are +3, +5, +7, +9. The next difference is +11. Therefore, 26 + 11 = 37.",
  },
  {
    question: "Find the missing number: 100, 90, 81, 73, ?",
    options: ["64", "66", "67", "68"],
    correct: 2,
    explanation:
      "The differences are -10, -9, -8. The next difference is -7. Therefore, 73 - 7 = 66.",
  },
  {
    question: "Find the missing number: 6, 12, 24, 48, ?",
    options: ["72", "84", "96", "108"],
    correct: 2,
    explanation:
      "Each number is multiplied by 2. Therefore, 48 × 2 = 96.",
  },
  {
    question: "Find the missing number: 10, 13, 18, 25, 34, ?",
    options: ["43", "45", "46", "48"],
    correct: 1,
    explanation:
      "The differences are +3, +5, +7, +9. The next difference is +11. Therefore, 34 + 11 = 45.",
  },
  {
    question: "Find the missing number: 1, 2, 6, 24, 120, ?",
    options: ["240", "360", "600", "720"],
    correct: 3,
    explanation:
      "Each term is multiplied by the next integer: 1 × 2 = 2, 2 × 3 = 6, 6 × 4 = 24, 24 × 5 = 120. Therefore, 120 × 6 = 720.",
  },
  {
    question: "Find the missing number: 50, 45, 35, 20, ?",
    options: ["5", "0", "-5", "10"],
    correct: 1,
    explanation:
      "The differences are -5, -10, -15. The next difference is -20. Therefore, 20 - 20 = 0.",
  },
  {
    question: "Find the missing number: 3, 9, 27, 81, ?",
    options: ["162", "216", "243", "324"],
    correct: 2,
    explanation:
      "Each term is multiplied by 3. Therefore, 81 × 3 = 243.",
  },
  {
    question: "Find the missing number: 8, 16, 32, 64, ?",
    options: ["96", "112", "128", "132"],
    correct: 2,
    explanation:
      "Each number is doubled. Therefore, 64 × 2 = 128.",
  },

  // =========================
  // LETTER SERIES
  // =========================

  {
    question: "Find the missing letter: A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    correct: 1,
    explanation:
      "The series skips one letter each time: A, C, E, G. Therefore, the next letter is I.",
  },
  {
    question: "Find the missing letter: B, D, F, H, ?",
    options: ["I", "J", "K", "L"],
    correct: 1,
    explanation:
      "Every second letter is used: B, D, F, H. Therefore, the next letter is J.",
  },
  {
    question: "Find the missing letter: Z, X, V, T, ?",
    options: ["R", "S", "Q", "P"],
    correct: 0,
    explanation:
      "The series moves backward by 2 letters: Z, X, V, T. Therefore, the next letter is R.",
  },
  {
    question: "Find the missing letter: A, D, G, J, ?",
    options: ["K", "L", "M", "N"],
    correct: 2,
    explanation:
      "The series moves forward by 3 positions: A → D → G → J. Therefore, J + 3 = M.",
  },
  {
    question: "Find the missing letter: C, F, I, L, ?",
    options: ["N", "O", "P", "Q"],
    correct: 1,
    explanation:
      "Each letter is 3 positions ahead of the previous one: C, F, I, L. Therefore, the next letter is O.",
  },
  {
    question: "Find the missing letter: Y, V, S, P, ?",
    options: ["M", "N", "O", "L"],
    correct: 0,
    explanation:
      "The series moves backward by 3 positions: Y → V → S → P. Therefore, the next letter is M.",
  },
  {
    question: "Find the missing letter: A, B, D, G, K, ?",
    options: ["N", "O", "P", "Q"],
    correct: 2,
    explanation:
      "The forward gaps are +1, +2, +3, +4. The next gap is +5. K + 5 = P.",
  },
  {
    question: "Find the missing letter: Z, Y, W, T, P, ?",
    options: ["K", "L", "M", "N"],
    correct: 0,
    explanation:
      "The backward gaps are -1, -2, -3, -4. The next gap is -5. Therefore, P - 5 = K.",
  },
  {
    question: "Find the missing letter: B, E, H, K, ?",
    options: ["M", "N", "O", "P"],
    correct: 1,
    explanation:
      "Each letter is 3 positions ahead: B → E → H → K. Therefore, the next letter is N.",
  },
  {
    question: "Find the missing letter: D, H, L, P, ?",
    options: ["R", "S", "T", "U"],
    correct: 2,
    explanation:
      "Each letter moves forward by 4 positions: D → H → L → P. Therefore, P + 4 = T.",
  },
  {
    question: "Find the missing letter: A, C, F, J, ?",
    options: ["N", "O", "P", "Q"],
    correct: 1,
    explanation:
      "The gaps are +2, +3, +4. The next gap is +5. Therefore, J + 5 = O.",
  },
  {
    question: "Find the missing letter: M, K, I, G, ?",
    options: ["D", "E", "F", "H"],
    correct: 2,
    explanation:
      "The series moves backward by 2 positions: M → K → I → G. Therefore, the next letter is E.",
  },
  {
    question: "Find the missing letter: C, E, H, L, ?",
    options: ["P", "Q", "R", "S"],
    correct: 1,
    explanation:
      "The gaps are +2, +3, +4. The next gap is +5. Therefore, L + 5 = Q.",
  },
  {
    question: "Find the missing letter: F, J, N, R, ?",
    options: ["T", "U", "V", "W"],
    correct: 2,
    explanation:
      "Each letter moves forward by 4 positions: F → J → N → R. Therefore, the next letter is V.",
  },
  {
    question: "Find the missing letter: W, T, Q, N, ?",
    options: ["K", "L", "M", "J"],
    correct: 0,
    explanation:
      "The series moves backward by 3 positions: W → T → Q → N. Therefore, the next letter is K.",
  },
];

const quickQuestions = [
  {
    question: "2, 6, 14, 30, 62, ?",
    answer: "126",
    explanation:
      "Multiply each term by 2 and add 2: 62 × 2 + 2 = 126.",
  },
  {
    question: "1, 4, 9, 16, ?",
    answer: "25",
    explanation:
      "These are square numbers: 1², 2², 3², 4², 5². Therefore, the answer is 25.",
  },
  {
    question: "A, C, E, G, ?",
    answer: "I",
    explanation:
      "The series skips one letter each time. Therefore, G is followed by I.",
  },
];

const getOptionLetter = (index) => String.fromCharCode(65 + index);

const SeriesCompletion = () => {
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

        {/* BREADCRUMB */}

        <nav className="synonyms-breadcrumb">
          <Link to="/notes">Notes Hub</Link>
          <FiArrowRight />
          <Link to="/notes">Verbal Intelligence</Link>
          <FiArrowRight />
          <strong>Series Completion</strong>
        </nav>

        {/* HERO */}

        <section className="synonyms-hero">
          <div className="synonyms-hero-icon">
            <FiBookOpen />
          </div>

          <div className="synonyms-hero-content">
            <span className="synonyms-eyebrow">
              VERBAL INTELLIGENCE
            </span>

            <h1>Series Completion</h1>

            <p>
              Develop your ability to identify patterns and complete
              number and letter sequences. Learn how to recognize
              arithmetic patterns, multiplication and division rules,
              increasing differences, alphabetical positions, and
              changing gaps to solve series questions quickly and
              accurately.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>What Is Series Completion?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              <strong>Series Completion</strong> questions present a
              sequence of numbers or letters with one or more missing
              terms. Your task is to identify the pattern and determine
              the term that should come next.
            </p>

            <p>
              In intelligence and verbal reasoning tests, series
              questions measure your ability to recognize patterns,
              understand relationships, and make logical predictions
              under time pressure.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Simple Examples</strong>

                <p>Number Series: 2, 4, 6, 8, ? → 10</p>

                <p>Letter Series: A, C, E, G, ? → I</p>

                <span>
                  The first series increases by 2, while the second
                  series moves forward by two alphabet positions.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CONCEPT */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">02</span>

            <div>
              <span className="section-label">CONCEPT</span>
              <h2>Types of Series Patterns</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">

              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Simple Addition or Subtraction</h3>

                  <p>
                    The same number is repeatedly added or subtracted.
                    For example, 5, 10, 15, 20, ? follows a +5 pattern,
                    so the next number is 25.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Multiplication or Division</h3>

                  <p>
                    Each term may be multiplied or divided by a fixed
                    number. For example, 3, 6, 12, 24, ? follows a ×2
                    pattern.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Increasing Differences</h3>

                  <p>
                    The difference between terms changes gradually.
                    For example, 2, 5, 10, 17, 26 follows differences
                    of +3, +5, +7, +9.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Square and Special Number Patterns</h3>

                  <p>
                    Some sequences use square numbers, cubes, factorials,
                    multiples, or other recognizable mathematical
                    relationships.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>05</span>

                <div>
                  <h3>Letter Position Patterns</h3>

                  <p>
                    Convert letters into their alphabet positions when
                    necessary. For example, A=1, B=2, C=3 and so on.
                    This helps identify forward and backward patterns.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>06</span>

                <div>
                  <h3>Changing Alphabetical Gaps</h3>

                  <p>
                    Some letter series use increasing or decreasing gaps.
                    For example, A, C, F, J, ? uses gaps of +2, +3, +4,
                    so the next gap is +5.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* QUICK PRACTICE */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">03</span>

            <div>
              <span className="section-label">QUICK PRACTICE</span>
              <h2>Identify the Pattern</h2>
            </div>
          </div>

          <div className="quick-question-grid">
            {quickQuestions.map((item, index) => (
              <div className="quick-question-card" key={index}>
                <span>EXAMPLE {index + 1}</span>

                <h3>{item.question}</h3>

                <div className="quick-answer">
                  <FiCheckCircle />
                  <strong>{item.answer}</strong>
                </div>

                <p>{item.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXAM STRATEGY */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">04</span>

            <div>
              <span className="section-label">EXAM STRATEGY</span>
              <h2>How to Solve Series Questions Quickly</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Check the Difference First</strong>

                <p>
                  For number series, first subtract consecutive terms.
                  If the difference is constant or follows a clear
                  pattern, the answer can often be found immediately.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiBookOpen />

              <div>
                <strong>Check Multiplication and Division</strong>

                <p>
                  If the differences do not reveal a pattern, check
                  whether the numbers are being multiplied or divided
                  by a fixed or changing value.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>Use Alphabet Positions</strong>

                <p>
                  For letter series, convert letters into positions:
                  A=1, B=2, C=3 and so on. This makes difficult
                  alphabetical patterns easier to recognize.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* READING QUESTIONS */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">05</span>

            <div>
              <span className="section-label">READING QUESTIONS</span>
              <h2>Series Completion Practice Questions</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Study the following questions carefully. The correct answer
              and explanation are shown after each question so you can
              understand the pattern before attempting the interactive
              practice.
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

                <div className="reading-options">
                  {item.options.map((option, optionIndex) => {
                    const isCorrect = optionIndex === item.correct;

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

        {/* INTERACTIVE PRACTICE */}

        <section className="practice-section">
          <div className="practice-header">
            <div>
              <span className="section-label">
                INTERACTIVE PRACTICE
              </span>

              <h2>Test Your Series Completion Skills</h2>

              <p>
                Answer each question and receive immediate feedback.
              </p>
            </div>

            <div className="practice-progress">
              <strong>{currentQuestion + 1}</strong>
              <span>/ {mcqs.length}</span>
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

              <h3>{question.question}</h3>

              <div className="mcq-options">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.correct;
                  const isWrong =
                    answered && isSelected && !isCorrect;

                  return (
                    <button
                      type="button"
                      key={index}
                      className={`mcq-option ${
                        isCorrect && answered ? "correct" : ""
                      } ${isWrong ? "wrong" : ""}`}
                      onClick={() => handleAnswer(index)}
                      disabled={answered}
                    >
                      <span className="option-letter">
                        {getOptionLetter(index)}
                      </span>

                      <span className="option-text">
                        {option}
                      </span>

                      {answered && isCorrect && (
                        <FiCheckCircle className="answer-icon" />
                      )}

                      {isWrong && (
                        <FiXCircle className="answer-icon" />
                      )}
                    </button>
                  );
                })}
              </div>

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
                    <strong>Explanation</strong>
                    <p>{question.explanation}</p>
                  </div>
                </div>
              )}

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
                  {isLastQuestion ? "Finish" : "Next"}
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

              <h2>Series Completion Result</h2>

              <div className="result-score">
                <strong>{score}</strong>
                <span> / {mcqs.length}</span>
              </div>

              <p>
                You completed all {mcqs.length} series completion
                questions. Review the explanations and practice again
                to improve your pattern recognition, speed, and accuracy.
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

        {/* RELATED TOPICS */}

        <section className="related-section">
          <span className="section-label">CONTINUE LEARNING</span>

          <h2>Related Verbal Topics</h2>

          <div className="related-links">

            <Link to="/notes/verbal/analogies">
              Analogies
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/coding-decoding">
              Coding &amp; Decoding
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/vocabulary">
              Vocabulary
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/synonyms">
              Synonyms
              <FiArrowRight />
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
};

export default SeriesCompletion;
