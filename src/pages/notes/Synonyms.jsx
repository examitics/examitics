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
  {
    question: 'Which word is closest in meaning to "Abundant"?',
    options: ["Rare", "Plentiful", "Weak", "Empty"],
    correct: 1,
    explanation:
      '"Abundant" means available or existing in large quantities. Therefore, "Plentiful" is the correct synonym.',
  },
  {
    question: 'Choose the synonym of "Rapid".',
    options: ["Slow", "Quick", "Late", "Weak"],
    correct: 1,
    explanation:
      '"Rapid" means happening very quickly. Therefore, "Quick" is its closest synonym.',
  },
  {
    question: 'Which word has the same meaning as "Brave"?',
    options: ["Cowardly", "Fearful", "Courageous", "Quiet"],
    correct: 2,
    explanation:
      '"Brave" means having courage and being willing to face danger or difficulty. "Courageous" has the same meaning.',
  },
  {
    question: 'Choose the synonym of "Ancient".',
    options: ["Modern", "Old", "Recent", "Future"],
    correct: 1,
    explanation:
      '"Ancient" refers to something belonging to a very old period. Therefore, "Old" is the correct answer.',
  },
  {
    question: 'Which word is closest in meaning to "Difficult"?',
    options: ["Easy", "Simple", "Hard", "Clear"],
    correct: 2,
    explanation:
      '"Difficult" means not easy to do or understand. "Hard" is its closest synonym.',
  },
  {
    question: 'Choose the synonym of "Begin".',
    options: ["Finish", "Start", "Stop", "End"],
    correct: 1,
    explanation:
      '"Begin" means to start something. Therefore, "Start" is the correct synonym.',
  },
  {
    question: 'Which word is closest in meaning to "Silent"?',
    options: ["Noisy", "Quiet", "Loud", "Active"],
    correct: 1,
    explanation:
      '"Silent" means making little or no sound. Therefore, "Quiet" is the correct answer.',
  },
  {
    question: 'Choose the synonym of "Intelligent".',
    options: ["Clever", "Lazy", "Weak", "Careless"],
    correct: 0,
    explanation:
      '"Intelligent" means having a good ability to learn, understand, and solve problems. "Clever" is its closest synonym.',
  },
];

const quickQuestions = [
  {
    word: "Happy",
    answer: "Joyful",
    explanation:
      "Happy and joyful both describe a feeling of pleasure or happiness.",
  },
  {
    word: "Large",
    answer: "Huge",
    explanation:
      "Large and huge both describe something of considerable size.",
  },
  {
    word: "Fast",
    answer: "Quick",
    explanation:
      "Fast and quick both indicate high speed.",
  },
];

export default function Synonyms() {
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

  const practiceFinished =
    isLastQuestion && selectedAnswer !== null;

  return (
    <main className="synonyms-page">
      <div className="synonyms-container">

        {/* Breadcrumb */}
        <nav className="synonyms-breadcrumb">
          <Link to="/notes">Notes Hub</Link>
          <FiArrowRight />
          <span>Verbal Intelligence</span>
          <FiArrowRight />
          <strong>Synonyms</strong>
        </nav>

        {/* Hero */}
        <header className="synonyms-hero">
          <div className="synonyms-hero-icon">
            <FiBookOpen />
          </div>

          <div className="synonyms-hero-content">
            <span className="synonyms-eyebrow">
              VERBAL INTELLIGENCE
            </span>

            <h1>Synonyms</h1>

            <p>
              Learn how to identify words with similar meanings
              and improve your vocabulary for intelligence and
              academic tests.
            </p>
          </div>
        </header>

        {/* Introduction */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>What are Synonyms?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              A <strong>synonym</strong> is a word that has the same
              or nearly the same meaning as another word.
            </p>

            <p>
              Synonyms are commonly tested in verbal intelligence
              questions. The objective is usually to identify the
              option that has the closest meaning to the given word.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Simple Example</strong>

                <p>
                  <strong>Happy</strong> → Joyful
                </p>

                <span>
                  Both words describe a feeling of pleasure or
                  happiness.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Explanation */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">02</span>

            <div>
              <span className="section-label">CONCEPT</span>
              <h2>How to Solve Synonym Questions</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">

              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Understand the given word</h3>
                  <p>
                    Read the word carefully and determine its
                    general meaning before looking at the options.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Check every option</h3>
                  <p>
                    Do not select the first word that looks familiar.
                    Compare all options with the original word.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Look for the closest meaning</h3>
                  <p>
                    A synonym does not always have to be an exact
                    replacement. Choose the option with the closest
                    meaning.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Use context when necessary</h3>
                  <p>
                    If a word has multiple meanings, consider how
                    the word is normally used.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Quick Questions */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">03</span>

            <div>
              <span className="section-label">QUICK PRACTICE</span>
              <h2>Learn Through Examples</h2>
            </div>
          </div>

          <div className="quick-question-grid">
            {quickQuestions.map((item, index) => (
              <article className="quick-question-card" key={item.word}>
                <span>Example {index + 1}</span>

                <h3>{item.word}</h3>

                <div className="quick-answer">
                  <FiArrowRight />
                  <strong>{item.answer}</strong>
                </div>

                <p>{item.explanation}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Exam Tips */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">04</span>

            <div>
              <span className="section-label">EXAM STRATEGY</span>
              <h2>Important Tips</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Build vocabulary</strong>
                <p>
                  Learn common synonyms and their meanings
                  regularly.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>Eliminate wrong options</strong>
                <p>
                  Remove words that clearly have an opposite or
                  unrelated meaning.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiAward />

              <div>
                <strong>Practice under time pressure</strong>
                <p>
                  Intelligence tests reward both accuracy and
                  speed.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* MCQ Practice */}
        <section className="practice-section">

          <div className="practice-header">
            <div>
              <span className="section-label">INTERACTIVE PRACTICE</span>
              <h2>Test Your Knowledge</h2>

              <p>
                Select the best answer. Your answer will be checked
                immediately.
              </p>
            </div>

            <div className="practice-progress">
              <strong>
                {currentQuestion + 1}
              </strong>
              <span>/ {mcqs.length}</span>
            </div>
          </div>

          {!practiceFinished ? (
            <div className="mcq-card">

              <div className="mcq-top">
                <span>
                  QUESTION {String(currentQuestion + 1).padStart(2, "0")}
                </span>

                <span>
                  Score: {score}/{currentQuestion}
                </span>
              </div>

              <h3>{question.question}</h3>

              <div className="mcq-options">
                {question.options.map((option, index) => {

                  const isCorrect = index === question.correct;
                  const isSelected = index === selectedAnswer;

                  let optionClass = "";

                  if (answered && isCorrect) {
                    optionClass = "correct";
                  } else if (answered && isSelected && !isCorrect) {
                    optionClass = "wrong";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      className={`mcq-option ${optionClass}`}
                      onClick={() => handleAnswer(index)}
                      disabled={answered}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="option-text">
                        {option}
                      </span>

                      {answered && isCorrect && (
                        <FiCheckCircle className="answer-icon" />
                      )}

                      {answered && isSelected && !isCorrect && (
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
                    <strong>
                      Correct answer:
                    </strong>{" "}
                    {question.options[question.correct]}
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
                  {isLastQuestion ? "Finish" : "Next Question"}
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

              <h2>Well Done!</h2>

              <div className="result-score">
                <strong>{score}</strong>
                <span>/ {mcqs.length}</span>
              </div>

              <p>
                You answered {score} out of {mcqs.length} questions
                correctly.
              </p>

              <button
                type="button"
                className="primary-btn"
                onClick={restartPractice}
              >
                Practice Again
                <FiArrowRight />
              </button>

            </div>
          )}
        </section>

        {/* Related Topics */}
        <section className="related-section">
          <span className="section-label">CONTINUE LEARNING</span>

          <h2>Related Verbal Topics</h2>

          <div className="related-links">
            <Link to="/notes/verbal/antonyms">
              Antonyms
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/analogies">
              Analogies
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/coding-decoding">
              Coding & Decoding
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/vocabulary">
              Vocabulary
              <FiArrowRight />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}