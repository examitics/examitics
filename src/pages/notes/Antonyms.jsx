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
    question: 'Which word is opposite in meaning to "Abundant"?',
    options: ["Plentiful", "Limited", "Sufficient", "Enough"],
    correct: 1,
    explanation:
      '"Abundant" means available in large quantities. Therefore, "Limited" is the closest antonym.',
  },
  {
    question: 'Choose the antonym of "Rapid".',
    options: ["Quick", "Fast", "Slow", "Swift"],
    correct: 2,
    explanation:
      '"Rapid" means very fast or quick. Therefore, "Slow" is its opposite.',
  },
  {
    question: 'Which word is opposite in meaning to "Brave"?',
    options: ["Bold", "Courageous", "Fearful", "Strong"],
    correct: 2,
    explanation:
      '"Brave" means courageous and willing to face danger. "Fearful" describes someone who is afraid and is therefore its opposite.',
  },
  {
    question: 'Choose the antonym of "Ancient".',
    options: ["Old", "Historic", "Modern", "Past"],
    correct: 2,
    explanation:
      '"Ancient" refers to something very old. Therefore, "Modern" is its opposite.',
  },
  {
    question: 'Which word is opposite in meaning to "Difficult"?',
    options: ["Hard", "Complex", "Easy", "Tough"],
    correct: 2,
    explanation:
      '"Difficult" means not easy. Therefore, "Easy" is the correct antonym.',
  },
  {
    question: 'Choose the antonym of "Begin".',
    options: ["Start", "Open", "Continue", "End"],
    correct: 3,
    explanation:
      '"Begin" means to start something. Therefore, "End" is its opposite.',
  },
  {
    question: 'Which word is opposite in meaning to "Silent"?',
    options: ["Quiet", "Noisy", "Calm", "Still"],
    correct: 1,
    explanation:
      '"Silent" means making little or no sound. "Noisy" means producing a lot of sound and is therefore the antonym.',
  },
  {
    question: 'Choose the antonym of "Intelligent".',
    options: ["Clever", "Wise", "Brilliant", "Foolish"],
    correct: 3,
    explanation:
      '"Intelligent" means having good understanding or mental ability. "Foolish" is the closest opposite among the given options.',
  },
  {
    question: 'Which word is opposite in meaning to "Honest"?',
    options: ["Truthful", "Sincere", "Dishonest", "Reliable"],
    correct: 2,
    explanation:
      '"Honest" means truthful and sincere. Therefore, "Dishonest" is its direct antonym.',
  },
  {
    question: 'Choose the antonym of "Huge".',
    options: ["Large", "Enormous", "Massive", "Tiny"],
    correct: 3,
    explanation:
      '"Huge" means extremely large. Therefore, "Tiny", meaning extremely small, is its opposite.',
  },
  {
    question: 'Which word is opposite in meaning to "Assist"?',
    options: ["Help", "Support", "Aid", "Hinder"],
    correct: 3,
    explanation:
      '"Assist" means to help or support. "Hinder" means to obstruct or make something difficult, making it the opposite.',
  },
  {
    question: 'Choose the antonym of "Purchase".',
    options: ["Buy", "Acquire", "Sell", "Obtain"],
    correct: 2,
    explanation:
      '"Purchase" means to buy something. Therefore, "Sell" is its opposite.',
  },
  {
    question: 'Which word is opposite in meaning to "Diligent"?',
    options: ["Hardworking", "Active", "Lazy", "Careful"],
    correct: 2,
    explanation:
      '"Diligent" means hardworking and careful. "Lazy" describes someone unwilling to work and is its opposite.',
  },
  {
    question: 'Choose the antonym of "Vacant".',
    options: ["Empty", "Available", "Occupied", "Unused"],
    correct: 2,
    explanation:
      '"Vacant" means empty or not occupied. Therefore, "Occupied" is the correct antonym.',
  },
  {
    question: 'Which word is opposite in meaning to "Famous"?',
    options: ["Popular", "Renowned", "Unknown", "Celebrated"],
    correct: 2,
    explanation:
      '"Famous" means widely known. Therefore, "Unknown" is its opposite.',
  },
  {
    question: 'Choose the antonym of "Permit".',
    options: ["Allow", "Approve", "Authorize", "Forbid"],
    correct: 3,
    explanation:
      '"Permit" means to allow something. "Forbid" means to prohibit or not allow something, making it the antonym.',
  },
  {
    question: 'Which word is opposite in meaning to "Accurate"?',
    options: ["Correct", "Precise", "Exact", "Incorrect"],
    correct: 3,
    explanation:
      '"Accurate" means correct and free from errors. Therefore, "Incorrect" is its opposite.',
  },
  {
    question: 'Choose the antonym of "Liberty".',
    options: ["Freedom", "Independence", "Restriction", "Choice"],
    correct: 2,
    explanation:
      '"Liberty" means freedom. "Restriction" means a limitation on freedom and is therefore its opposite.',
  },
  {
    question: 'Which word is opposite in meaning to "Select"?',
    options: ["Choose", "Pick", "Reject", "Prefer"],
    correct: 2,
    explanation:
      '"Select" means to choose something. "Reject" means to refuse or not accept something and is its opposite in this context.',
  },
  {
    question: 'Choose the antonym of "Dangerous".',
    options: ["Risky", "Unsafe", "Harmful", "Safe"],
    correct: 3,
    explanation:
      '"Dangerous" means likely to cause harm. Therefore, "Safe" is its opposite.',
  },
  {
    question: 'Which word is opposite in meaning to "Diminish"?',
    options: ["Reduce", "Decrease", "Increase", "Lower"],
    correct: 2,
    explanation:
      '"Diminish" means to become smaller or less. Therefore, "Increase" is its opposite.',
  },
  {
    question: 'Choose the antonym of "Obtain".',
    options: ["Acquire", "Get", "Receive", "Lose"],
    correct: 3,
    explanation:
      '"Obtain" means to get or acquire something. Therefore, "Lose" is its opposite.',
  },
  {
    question: 'Which word is opposite in meaning to "Precise"?',
    options: ["Exact", "Accurate", "Vague", "Correct"],
    correct: 2,
    explanation:
      '"Precise" means exact and clearly defined. "Vague" means unclear or not exact and is therefore its opposite.',
  },
  {
    question: 'Choose the antonym of "Generous".',
    options: ["Kind", "Giving", "Selfish", "Helpful"],
    correct: 2,
    explanation:
      '"Generous" means willing to give or share freely. "Selfish" means concerned mainly with oneself and unwilling to give, making it the opposite.',
  },
  {
    question: 'Which word is opposite in meaning to "Fragile"?',
    options: ["Delicate", "Weak", "Breakable", "Strong"],
    correct: 3,
    explanation:
      '"Fragile" means easily broken or damaged. Therefore, "Strong" is its closest antonym.',
  },
  {
    question: 'Choose the antonym of "Benevolent".',
    options: ["Kind", "Helpful", "Cruel", "Generous"],
    correct: 2,
    explanation:
      '"Benevolent" means kind and well-meaning. "Cruel" means causing pain or showing no kindness and is its opposite.',
  },
  {
    question: 'Which word is opposite in meaning to "Essential"?',
    options: ["Necessary", "Important", "Required", "Unnecessary"],
    correct: 3,
    explanation:
      '"Essential" means absolutely necessary. Therefore, "Unnecessary" is its direct antonym.',
  },
  {
    question: 'Choose the antonym of "Expand".',
    options: ["Increase", "Extend", "Contract", "Enlarge"],
    correct: 2,
    explanation:
      '"Expand" means to become larger or more extensive. "Contract" means to become smaller and is its opposite.',
  },
  {
    question: 'Which word is opposite in meaning to "Victory"?',
    options: ["Success", "Triumph", "Defeat", "Achievement"],
    correct: 2,
    explanation:
      '"Victory" means success in a competition or conflict. Therefore, "Defeat" is its opposite.',
  },
  {
    question: 'Choose the antonym of "Permanent".',
    options: ["Lasting", "Temporary", "Stable", "Fixed"],
    correct: 1,
    explanation:
      '"Permanent" means lasting for a long time or indefinitely. "Temporary" means lasting only for a limited period.',
  },
];

const quickQuestions = [
  {
    word: "Happy",
    answer: "Sad",
    explanation:
      "Happy describes a feeling of pleasure or joy, while sad describes a feeling of unhappiness.",
  },
  {
    word: "Large",
    answer: "Small",
    explanation:
      "Large describes considerable size, while small describes something of limited size.",
  },
  {
    word: "Fast",
    answer: "Slow",
    explanation:
      "Fast indicates high speed, while slow indicates low speed.",
  },
];

export default function Antonyms() {
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
          <strong>Antonyms</strong>
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

            <h1>Antonyms</h1>

            <p>
              Learn how to identify words with opposite meanings
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
              <h2>What are Antonyms?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              An <strong>antonym</strong> is a word that has the
              opposite or nearly opposite meaning of another word.
            </p>

            <p>
              Antonyms are commonly tested in verbal intelligence
              questions. The objective is usually to identify the
              option that has the opposite meaning to the given word.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Simple Example</strong>

                <p>
                  <strong>Happy</strong> → Sad
                </p>

                <span>
                  Happy describes a feeling of pleasure, while sad
                  describes a feeling of unhappiness.
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
              <h2>How to Solve Antonym Questions</h2>
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
                    meaning before looking at the options.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Think of its opposite</h3>

                  <p>
                    Try to recall a word with the opposite meaning
                    before checking the available options.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Compare all options</h3>

                  <p>
                    Check every option carefully and eliminate words
                    that have similar or unrelated meanings.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Choose the strongest opposite</h3>

                  <p>
                    Some words have several possible opposites.
                    Select the option that provides the clearest
                    opposite meaning in the given context.
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
              <article
                className="quick-question-card"
                key={item.word}
              >
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
                <strong>Build opposite-word pairs</strong>

                <p>
                  Learn common words together with their antonyms
                  to improve recall speed.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>Eliminate similar meanings</strong>

                <p>
                  Remove options that have the same or related
                  meanings instead of opposite meanings.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiAward />

              <div>
                <strong>Focus on speed and accuracy</strong>

                <p>
                  Practice regularly so you can identify common
                  antonyms quickly during intelligence tests.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Reading Questions */}
        <section className="notes-section">

          <div className="section-heading">
            <span className="section-number">05</span>

            <div>
              <span className="section-label">
                QUESTIONS & PRACTICE
              </span>

              <h2>Antonym Questions</h2>
            </div>
          </div>

          <div className="reading-questions">

            {mcqs.map((question, questionIndex) => (
              <article
                className="reading-question"
                key={questionIndex}
              >

                <div className="reading-question-header">

                  <span className="reading-question-number">
                    Q{questionIndex + 1}
                  </span>

                  <h3>{question.question}</h3>

                </div>

                <div className="reading-options">

                  {question.options.map(
                    (option, optionIndex) => {

                      const isCorrect =
                        optionIndex === question.correct;

                      return (
                        <div
                          className={`reading-option ${
                            isCorrect ? "correct" : ""
                          }`}
                          key={optionIndex}
                        >

                          <span className="option-label">
                            {String.fromCharCode(
                              65 + optionIndex
                            )}
                          </span>

                          <span className="option-text">
                            {option}
                          </span>

                          {isCorrect && (
                            <FiCheckCircle className="correct-icon" />
                          )}

                        </div>
                      );
                    }
                  )}

                </div>

                <div className="reading-answer">

                  <div className="answer-title">
                    <FiCheckCircle />
                    <strong>Correct Answer</strong>
                  </div>

                  <p>
                    <strong>
                      {String.fromCharCode(
                        65 + question.correct
                      )}
                      . {question.options[question.correct]}
                    </strong>
                  </p>

                </div>

                <div className="reading-explanation">

                  <div className="explanation-title">
                    <FiInfo />
                    <strong>Explanation</strong>
                  </div>

                  <p>{question.explanation}</p>

                </div>

              </article>
            ))}

          </div>
        </section>

        {/* Interactive MCQ Practice */}
        <section className="practice-section">

          <div className="practice-header">

            <div>
              <span className="section-label">
                INTERACTIVE PRACTICE
              </span>

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
                  QUESTION{" "}
                  {String(currentQuestion + 1).padStart(2, "0")}
                </span>

                <span>
                  Score: {score}
                </span>

              </div>

              <h3>{question.question}</h3>

              <div className="mcq-options">

                {question.options.map((option, index) => {

                  const isCorrect =
                    index === question.correct;

                  const isSelected =
                    index === selectedAnswer;

                  let optionClass = "";

                  if (answered && isCorrect) {
                    optionClass = "correct";
                  } else if (
                    answered &&
                    isSelected &&
                    !isCorrect
                  ) {
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

                      {answered &&
                        isSelected &&
                        !isCorrect && (
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

                    <p>
                      {question.explanation}
                    </p>

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
                  {isLastQuestion
                    ? "Finish"
                    : "Next Question"}

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

                <span>
                  / {mcqs.length}
                </span>

              </div>

              <p>
                You answered {score} out of{" "}
                {mcqs.length} questions correctly.
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

          <span className="section-label">
            CONTINUE LEARNING
          </span>

          <h2>Related Verbal Topics</h2>

          <div className="related-links">

            <Link to="/notes/verbal/synonyms">
              Synonyms
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