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
    question: "What is the meaning of the word 'Abundant'?",
    options: ["Scarce", "Plentiful", "Weak", "Hidden"],
    correct: 1,
    explanation:
      "Abundant means available in large quantities or more than enough. Therefore, 'Plentiful' is the correct answer.",
  },
  {
    question: "What is the meaning of the word 'Reluctant'?",
    options: ["Unwilling", "Excited", "Confident", "Prepared"],
    correct: 0,
    explanation:
      "Reluctant means unwilling or hesitant to do something. Therefore, 'Unwilling' is correct.",
  },
  {
    question: "What does 'Diligent' mean?",
    options: ["Careless", "Hardworking", "Angry", "Confused"],
    correct: 1,
    explanation:
      "Diligent describes someone who is hardworking, careful, and persistent in their work.",
  },
  {
    question: "What is the meaning of 'Fragile'?",
    options: ["Strong", "Heavy", "Easily broken", "Expensive"],
    correct: 2,
    explanation:
      "Fragile means easily broken, damaged, or destroyed. Glass is a common example of a fragile material.",
  },
  {
    question: "What does the word 'Benevolent' mean?",
    options: ["Cruel", "Kind and charitable", "Fearful", "Uncertain"],
    correct: 1,
    explanation: "Benevolent means kind, generous, and willing to help others.",
  },
  {
    question: "What is the meaning of 'Precise'?",
    options: ["Exact", "Unclear", "Large", "Difficult"],
    correct: 0,
    explanation: "Precise means exact, accurate, and clearly defined.",
  },
  {
    question: "What does 'Vast' mean?",
    options: ["Very small", "Very large", "Very old", "Very narrow"],
    correct: 1,
    explanation: "Vast means extremely large in area, size, amount, or extent.",
  },
  {
    question: "What is the meaning of 'Obsolete'?",
    options: ["Modern", "No longer in use", "Expensive", "Necessary"],
    correct: 1,
    explanation:
      "Obsolete refers to something that is no longer used because it has been replaced or is outdated.",
  },
  {
    question: "What does 'Cautious' mean?",
    options: ["Careful", "Careless", "Quick", "Aggressive"],
    correct: 0,
    explanation:
      "Cautious means being careful to avoid danger, mistakes, or unnecessary risks.",
  },
  {
    question: "What is the meaning of 'Hostile'?",
    options: ["Friendly", "Unfriendly or aggressive", "Helpful", "Peaceful"],
    correct: 1,
    explanation:
      "Hostile means unfriendly, opposed, or aggressive toward someone or something.",
  },

  {
    question: "Choose the word closest in meaning to 'Rapid'.",
    options: ["Slow", "Quick", "Weak", "Quiet"],
    correct: 1,
    explanation:
      "Rapid means happening very quickly. Therefore, 'Quick' is the closest meaning.",
  },
  {
    question: "Choose the word closest in meaning to 'Assist'.",
    options: ["Hinder", "Ignore", "Help", "Prevent"],
    correct: 2,
    explanation:
      "Assist means to help someone or something. Therefore, 'Help' is correct.",
  },
  {
    question: "Choose the word closest in meaning to 'Commence'.",
    options: ["End", "Begin", "Delay", "Stop"],
    correct: 1,
    explanation: "Commence means to begin or start something.",
  },
  {
    question: "Choose the word closest in meaning to 'Accurate'.",
    options: ["Correct", "Doubtful", "Rough", "False"],
    correct: 0,
    explanation: "Accurate means correct, exact, or free from errors.",
  },
  {
    question: "Choose the word closest in meaning to 'Conceal'.",
    options: ["Reveal", "Hide", "Explain", "Display"],
    correct: 1,
    explanation:
      "Conceal means to hide something or keep it from being seen or known.",
  },

  {
    question: "Choose the word opposite in meaning to 'Ancient'.",
    options: ["Old", "Historic", "Modern", "Traditional"],
    correct: 2,
    explanation:
      "Ancient refers to something belonging to a very old period. Its opposite is 'Modern'.",
  },
  {
    question: "Choose the word opposite in meaning to 'Generous'.",
    options: ["Kind", "Selfish", "Helpful", "Friendly"],
    correct: 1,
    explanation:
      "Generous means willing to give or share freely. Its opposite is 'Selfish'.",
  },
  {
    question: "Choose the word opposite in meaning to 'Permanent'.",
    options: ["Stable", "Fixed", "Temporary", "Regular"],
    correct: 2,
    explanation:
      "Permanent means lasting indefinitely. Its opposite is 'Temporary', which means lasting for a limited period.",
  },
  {
    question: "Choose the word opposite in meaning to 'Expand'.",
    options: ["Increase", "Contract", "Develop", "Extend"],
    correct: 1,
    explanation:
      "Expand means to become larger or wider. Its opposite is 'Contract', meaning to become smaller.",
  },
  {
    question: "Choose the word opposite in meaning to 'Transparent'.",
    options: ["Clear", "Visible", "Opaque", "Bright"],
    correct: 2,
    explanation:
      "Transparent means allowing light to pass through clearly. Opaque materials do not allow light to pass through.",
  },

  {
    question:
      "Choose the word that best completes the sentence: The officer remained _____ during the difficult situation.",
    options: ["calm", "careless", "violent", "confused"],
    correct: 0,
    explanation:
      "The sentence describes someone maintaining control during difficulty. 'Calm' best fits the context.",
  },
  {
    question:
      "Choose the word that best completes the sentence: The candidate was _____ to accept the offer because he wanted more information.",
    options: ["eager", "reluctant", "certain", "proud"],
    correct: 1,
    explanation:
      "Someone who is hesitant or unwilling to accept something is described as reluctant.",
  },
  {
    question:
      "Choose the best meaning of 'brief' in this sentence: The instructor gave a brief explanation.",
    options: [
      "A very detailed explanation",
      "A short explanation",
      "An incorrect explanation",
      "A difficult explanation",
    ],
    correct: 1,
    explanation:
      "In this context, brief means short or lasting only a short time.",
  },
  {
    question:
      "Choose the best meaning of 'observe' in this sentence: The cadet was asked to observe the surroundings carefully.",
    options: ["Ignore", "Watch carefully", "Change", "Leave"],
    correct: 1,
    explanation:
      "In this context, observe means to watch or examine carefully.",
  },
  {
    question:
      "Choose the word that best completes the sentence: The team worked together to _____ the problem.",
    options: ["solve", "create", "hide", "avoid"],
    correct: 0,
    explanation:
      "A team working together to deal with a problem would normally aim to solve it.",
  },

  {
    question:
      "Choose the correct word: The new rule will _____ all candidates equally.",
    options: ["affect", "effect", "affects", "effects"],
    correct: 0,
    explanation:
      "Affect is normally used as a verb meaning 'to influence'. The sentence needs the verb 'affect'.",
  },
  {
    question:
      "Choose the correct word: The medicine had a positive _____ on the patient.",
    options: ["affect", "effect", "affects", "effected"],
    correct: 1,
    explanation:
      "Effect is commonly used as a noun meaning a result or consequence. Therefore, 'effect' is correct.",
  },
  {
    question:
      "Choose the correct word: The teacher gave me some useful _____ about preparation.",
    options: ["advise", "advice", "advises", "advising"],
    correct: 1,
    explanation:
      "Advice is the noun meaning guidance or recommendation. Advise is the verb.",
  },

  {
    question:
      "What does the prefix 'un-' usually indicate in a word such as 'unhappy'?",
    options: ["Again", "Not or opposite", "Before", "Very"],
    correct: 1,
    explanation:
      "The prefix 'un-' commonly gives a word a negative or opposite meaning. Unhappy means not happy.",
  },
  {
    question: "What does the suffix '-less' mean in the word 'careless'?",
    options: ["Full of", "Without", "Able to", "Again"],
    correct: 1,
    explanation:
      "The suffix '-less' means without. Therefore, careless literally describes someone without care.",
  },
];

const quickQuestions = [
  {
    question: "Abundant → ?",
    answer: "Plentiful",
    explanation:
      "Abundant means existing in large quantities or more than enough.",
  },
  {
    question: "Reluctant → ?",
    answer: "Unwilling",
    explanation:
      "Reluctant describes someone who is hesitant or unwilling to do something.",
  },
  {
    question: "Brief explanation → ?",
    answer: "Short explanation",
    explanation:
      "When brief describes something such as an explanation, it means short or concise.",
  },
];

const getOptionLetter = (index) => String.fromCharCode(65 + index);

const Vocabulary = () => {
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
          <strong>Vocabulary</strong>
        </nav>

        {/* HERO */}

        <section className="synonyms-hero">
          <div className="synonyms-hero-icon">
            <FiBookOpen />
          </div>

          <div className="synonyms-hero-content">
            <span className="synonyms-eyebrow">VERBAL INTELLIGENCE</span>

            <h1>Vocabulary</h1>

            <p>
              Build a stronger vocabulary for verbal reasoning and intelligence
              tests. Learn word meanings, contextual usage, synonyms, antonyms,
              commonly confused words, and basic word formation to improve your
              accuracy and speed.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>What Is Vocabulary?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              <strong>Vocabulary</strong> refers to the words a person
              understands and uses in communication. A strong vocabulary helps
              you understand questions quickly, identify the meaning of
              unfamiliar words, and select accurate answers in verbal reasoning
              tests.
            </p>

            <p>
              In intelligence and entry tests, vocabulary questions may ask for
              a word's meaning, synonym, antonym, contextual meaning, correct
              usage, or relationship with another word. Understanding the
              context is often just as important as memorizing definitions.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Simple Example</strong>

                <p>Reluctant → Unwilling</p>

                <span>
                  Reluctant means hesitant or unwilling to do something.
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
              <h2>Important Vocabulary Skills</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">
              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Word Meanings</h3>

                  <p>
                    Learn the basic meanings of commonly tested words. Focus on
                    words that frequently appear in academic, reasoning, and
                    competitive-test questions.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Context Clues</h3>

                  <p>
                    The surrounding words in a sentence can help you determine
                    the meaning of an unfamiliar word without knowing its
                    definition directly.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Synonyms &amp; Antonyms</h3>

                  <p>
                    A strong vocabulary makes it easier to recognize words with
                    similar or opposite meanings.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Prefixes &amp; Suffixes</h3>

                  <p>
                    Common word parts can provide clues about meaning. For
                    example, "un-" often indicates an opposite or negative
                    meaning, while "-less" means without.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>05</span>

                <div>
                  <h3>Commonly Confused Words</h3>

                  <p>
                    Words such as affect/effect and advice/advise have different
                    meanings or grammatical roles. Learning these distinctions
                    helps prevent avoidable mistakes.
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
              <h2>Build Your Vocabulary</h2>
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
              <h2>How to Improve Vocabulary Accuracy</h2>
            </div>
          </div>

          <div className="tips-card">
            <div className="tip">
              <FiTarget />

              <div>
                <strong>Use Context Clues</strong>

                <p>
                  Read the complete sentence before selecting an answer. The
                  surrounding words often reveal the intended meaning.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiBookOpen />

              <div>
                <strong>Learn Words in Context</strong>

                <p>
                  Instead of memorizing isolated definitions, learn how words
                  are normally used in sentences.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>Eliminate Wrong Options</strong>

                <p>
                  If you do not know a word, eliminate options that clearly do
                  not fit the meaning or context before making your final
                  choice.
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
              <h2>Vocabulary Practice Questions</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Study the following questions carefully. The correct answer and
              explanation are shown after each question so you can understand
              the vocabulary before attempting the interactive practice.
            </p>
          </div>

          <div className="reading-questions">
            {mcqs.map((item, questionIndex) => (
              <article className="reading-question" key={questionIndex}>
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

                        <span className="option-text">{option}</span>

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
              <span className="section-label">INTERACTIVE PRACTICE</span>

              <h2>Test Your Vocabulary</h2>

              <p>Answer each question and receive immediate feedback.</p>
            </div>

            <div className="practice-progress">
              <strong>{currentQuestion + 1}</strong>
              <span>/ {mcqs.length}</span>
            </div>
          </div>

          {!practiceFinished ? (
            <div className="mcq-card">
              <div className="mcq-top">
                <span>QUESTION {currentQuestion + 1}</span>

                <span>Score: {score}</span>
              </div>

              <h3>{question.question}</h3>

              <div className="mcq-options">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.correct;
                  const isWrong = answered && isSelected && !isCorrect;

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

                      <span className="option-text">{option}</span>

                      {answered && isCorrect && (
                        <FiCheckCircle className="answer-icon" />
                      )}

                      {isWrong && <FiXCircle className="answer-icon" />}
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

              <span className="section-label">PRACTICE COMPLETE</span>

              <h2>Vocabulary Result</h2>

              <div className="result-score">
                <strong>{score}</strong>
                <span> / {mcqs.length}</span>
              </div>

              <p>
                You completed all {mcqs.length} vocabulary questions. Review the
                explanations and practice again to improve your vocabulary,
                speed, and accuracy.
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
            <Link to="/notes/verbal/synonyms">
              Synonyms
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/antonyms">
              Antonyms
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/analogies">
              Analogies
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/coding-decoding">
              Coding &amp; Decoding
              <FiArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Vocabulary;
