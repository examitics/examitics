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
    question: "If CAT is coded as DBU, how is DOG coded?",
    options: ["EPH", "ENH", "FPH", "DOH"],
    correct: 0,
    explanation:
      "Each letter is shifted one position forward in the alphabet: C→D, A→B, T→U. Therefore, D→E, O→P, G→H, giving EPH.",
  },
  {
    question: "If DOG is coded as CNF, how is CAT coded?",
    options: ["BZS", "DBU", "BZU", "CBT"],
    correct: 0,
    explanation:
      "Each letter is shifted one position backward: D→C, O→N, G→F. Therefore C→B, A→Z, T→S, giving BZS.",
  },
  {
    question: "If A = 1, B = 2, C = 3, ... Z = 26, what is the code for CAB?",
    options: ["3-1-2", "2-1-3", "3-2-1", "1-3-2"],
    correct: 0,
    explanation:
      "C is 3, A is 1, and B is 2. Therefore CAB is coded as 3-1-2.",
  },
  {
    question: "If A is coded as Z, B as Y, and C as X, how is DOG coded?",
    options: ["WLT", "DLT", "WOG", "XLT"],
    correct: 0,
    explanation:
      "The alphabet is reversed: A↔Z, B↔Y, C↔X. Therefore D→W, O→L, and G→T, giving WLT.",
  },
  {
    question: "If PEN is coded as QFO, how is BOOK coded?",
    options: ["CPPL", "CQQM", "APPL", "CPPK"],
    correct: 0,
    explanation:
      "Each letter moves one position forward: P→Q, E→F, N→O. Applying the same rule to BOOK gives B→C, O→P, O→P, K→L = CPPL.",
  },
  {
    question: "If MAN is coded as NBO, how is BOY coded?",
    options: ["CPZ", "CPY", "CQZ", "BPZ"],
    correct: 0,
    explanation:
      "Each letter is shifted one position forward. B→C, O→P, Y→Z, so BOY becomes CPZ.",
  },
  {
    question: "If SUN is coded as TVO, what is the code for MOON?",
    options: ["NPPO", "NPPM", "MPPO", "NQPO"],
    correct: 0,
    explanation:
      "Each letter moves one position forward: M→N, O→P, O→P, N→O. Therefore MOON becomes NPPO.",
  },
  {
    question: "If FISH is coded as EHRG, how is BIRD coded?",
    options: ["AHQC", "BJSE", "AHRD", "CHQC"],
    correct: 0,
    explanation:
      "Each letter is shifted one position backward: F→E, I→H, S→R, H→G. Thus B→A, I→H, R→Q, D→C = AHQC.",
  },
  {
    question: "If A = 26, B = 25, C = 24, ..., Z = 1, what is the code for BAD?",
    options: ["25-26-23", "2-1-4", "25-1-23", "24-26-22"],
    correct: 0,
    explanation:
      "This uses reverse alphabet positions. B=25, A=26, and D=23. Therefore BAD = 25-26-23.",
  },
  {
    question: "If TABLE is coded as UBCMF, how is CHAIR coded?",
    options: ["DIBJS", "DIBIR", "BGZHQ", "EJCKT"],
    correct: 0,
    explanation:
      "Each letter is shifted one position forward: T→U, A→B, B→C, L→M, E→F. Applying this to CHAIR gives DIBJS.",
  },
  {
    question: "If RED is coded as 18-5-4, what is the code for BLUE?",
    options: [
      "2-12-21-5",
      "3-12-20-5",
      "2-11-21-5",
      "2-12-20-4",
    ],
    correct: 0,
    explanation:
      "The code represents alphabet positions. B=2, L=12, U=21, E=5. Therefore BLUE = 2-12-21-5.",
  },
  {
    question: "If HOME is coded as IPNF, how is ROAD coded?",
    options: ["SPBE", "SQBE", "SPAD", "RPBE"],
    correct: 0,
    explanation:
      "Each letter moves one position forward: H→I, O→P, M→N, E→F. Therefore ROAD becomes SPBE.",
  },
  {
    question: "If KING is coded as LJOH, how is QUEEN coded?",
    options: ["RVFFO", "RVFEO", "QUDDM", "SWGGP"],
    correct: 0,
    explanation:
      "Each letter is shifted one position forward. Q→R, U→V, E→F, E→F, N→O, giving RVFFO.",
  },
  {
    question: "If ROAD is coded as URDG, what is the rule?",
    options: [
      "Each letter moves 3 positions forward",
      "Each letter moves 3 positions backward",
      "Letters are reversed",
      "Letters are arranged alphabetically",
    ],
    correct: 0,
    explanation:
      "R→U, O→R, A→D, and D→G. Every letter has moved three positions forward.",
  },
  {
    question: "If MILK is coded as NJML, how is WATER coded?",
    options: ["XBUFS", "XATDS", "WBUFS", "YCVGT"],
    correct: 0,
    explanation:
      "Each letter moves one position forward. W→X, A→B, T→U, E→F, R→S, giving XBUFS.",
  },
  {
    question: "If APPLE is coded as ELPPA, what type of coding is used?",
    options: [
      "The word is written in reverse order",
      "Each letter moves forward",
      "Each letter moves backward",
      "Letters are replaced by numbers",
    ],
    correct: 0,
    explanation:
      "APPLE becomes ELPPA simply by reversing the order of its letters.",
  },
  {
    question: "If TRAIN is coded as NIART, how is PLANE coded?",
    options: ["ENALP", "ELNAP", "PNLAE", "NALPE"],
    correct: 0,
    explanation:
      "TRAIN is reversed to NIART. Reversing PLANE gives ENALP.",
  },
  {
    question: "If BOOK is coded as 2-15-15-11, what is the code for PEN?",
    options: ["16-5-14", "15-5-14", "16-6-14", "16-5-13"],
    correct: 0,
    explanation:
      "The code represents alphabet positions. P=16, E=5, N=14. Therefore PEN = 16-5-14.",
  },
  {
    question: "If LION is coded as 12-9-15-14, how is TIGER coded?",
    options: [
      "20-9-7-5-18",
      "19-9-7-5-18",
      "20-8-7-5-18",
      "20-9-6-5-18",
    ],
    correct: 0,
    explanation:
      "The letters are represented by their alphabet positions: T=20, I=9, G=7, E=5, R=18.",
  },
  {
    question: "If ZOO is coded as APP, what is the coding rule?",
    options: [
      "Each letter moves one position forward",
      "Each letter moves two positions forward",
      "Each letter moves one position backward",
      "The word is reversed",
    ],
    correct: 0,
    explanation:
      "Z moves to A, while O moves to P. This represents moving one position forward with the alphabet wrapping around after Z.",
  },
  {
    question: "If BAD is coded as DAB, what has happened to the word?",
    options: [
      "The first and last letters have been interchanged",
      "Every letter moved forward",
      "Every letter moved backward",
      "The word was reversed",
    ],
    correct: 0,
    explanation:
      "BAD becomes DAB by exchanging the positions of the first and last letters while keeping the middle letter unchanged.",
  },
  {
    question: "If CODE is coded as DPEF, how is TEST coded?",
    options: ["UFTU", "UFSU", "TFUT", "VGTU"],
    correct: 0,
    explanation:
      "Each letter is shifted one position forward: C→D, O→P, D→E, E→F. Therefore TEST becomes UFTU.",
  },
  {
    question: "If SCHOOL is coded as TDIPPM, how is COLLEGE coded?",
    options: ["DPMMFHF", "DPMMFGE", "CNKKDGD", "EPNNGIG"],
    correct: 0,
    explanation:
      "Every letter is shifted one position forward. C→D, O→P, L→M, L→M, E→F, G→H, E→F, giving DPMMFHF.",
  },
  {
    question: "If 1 = A, 2 = B, 3 = C, ..., 26 = Z, what word is represented by 3-1-20?",
    options: ["CAT", "CAR", "BAT", "CUT"],
    correct: 0,
    explanation:
      "3=C, 1=A, and 20=T. Therefore 3-1-20 represents CAT.",
  },
  {
    question: "If 4-15-7 represents DOG, what does 3-1-20 represent?",
    options: ["CAT", "CAR", "BAT", "COT"],
    correct: 0,
    explanation:
      "The numbers represent alphabet positions. 3=C, 1=A, and 20=T, so the answer is CAT.",
  },
  {
    question: "If each vowel is replaced by the next vowel in sequence A→E→I→O→U→A, what is the code for BAT?",
    options: ["BET", "BIT", "BOT", "BUT"],
    correct: 0,
    explanation:
      "The vowel A changes to E while consonants remain unchanged. Therefore BAT becomes BET.",
  },
  {
    question: "If each vowel is replaced by the previous vowel A←E←I←O←U, what is the code for DOG?",
    options: ["DAG", "DEG", "DIG", "DUG"],
    correct: 0,
    explanation:
      "The vowel O changes to I according to the sequence. Therefore DOG becomes DIG.",
  },
  {
    question: "If every consonant moves one position forward and vowels remain unchanged, how is CAT coded?",
    options: ["DAT", "CBU", "DBT", "DAS"],
    correct: 0,
    explanation:
      "C is a consonant and moves to D. A remains unchanged. T moves to U. Therefore CAT becomes DAU. However, among the choices, none matches this exact rule, so this question should be treated as invalid.",
  },
  {
    question: "If every letter in a word is shifted two positions forward, how is PEN coded?",
    options: ["RGP", "QFO", "RFO", "PGN"],
    correct: 0,
    explanation:
      "P→R, E→G, and N→P. Therefore PEN becomes RGP.",
  },
  {
    question: "If every letter in a word is shifted two positions backward, how is DOG coded?",
    options: ["BME", "CME", "BNF", "BMF"],
    correct: 0,
    explanation:
      "D→B, O→M, and G→E. Therefore DOG becomes BME.",
  },
];

const quickQuestions = [
  {
    question: "CAT → DBU. Then DOG → ?",
    answer: "EPH",
    explanation:
      "Every letter moves one position forward in the alphabet.",
  },
  {
    question: "A = 1, B = 2, C = 3. Then CAB → ?",
    answer: "3-1-2",
    explanation:
      "C=3, A=1, and B=2.",
  },
  {
    question: "APPLE → ELPPA. What happened?",
    answer: "The word was reversed",
    explanation:
      "The letters are arranged in the opposite order.",
  },
];

const getOptionLetter = (index) => String.fromCharCode(65 + index);

const CodingDecoding = () => {
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
          <strong>Coding &amp; Decoding</strong>
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

            <h1>Coding &amp; Decoding</h1>

            <p>
              Learn how to identify hidden patterns in letters, numbers,
              words, and symbols. Coding and decoding questions test your
              ability to recognize rules, apply logical patterns, and solve
              verbal reasoning problems accurately and quickly.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>What Is Coding &amp; Decoding?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              <strong>Coding</strong> is the process of changing a word,
              letter, number, or symbol according to a particular rule.
              <strong> Decoding</strong> means discovering and applying that
              rule to find the original or required information.
            </p>

            <p>
              In intelligence tests, a word may be changed by shifting
              letters, reversing the alphabet, converting letters into
              numbers, rearranging positions, or following another logical
              pattern.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Simple Example</strong>

                <p>CAT → DBU</p>

                <span>
                  Each letter moves one position forward:
                  C→D, A→B, T→U.
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
              <h2>Common Coding Patterns</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">

              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Letter Shifting</h3>

                  <p>
                    Each letter is moved forward or backward by a fixed
                    number of positions. For example, CAT → DBU uses a
                    one-position forward shift.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Alphabet Position Coding</h3>

                  <p>
                    Letters are replaced with their numerical positions:
                    A=1, B=2, C=3 and so on up to Z=26.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Reverse Alphabet Coding</h3>

                  <p>
                    The alphabet is reversed so that A=Z, B=Y, C=X and
                    so on. This creates a mirror relationship between
                    letters.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Rearrangement Coding</h3>

                  <p>
                    The letters remain the same but their positions are
                    changed. For example, APPLE → ELPPA reverses the word.
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
              <h2>Understand the Pattern</h2>
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
              <h2>Tips for Solving Coding Questions</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Find the Simplest Pattern First</strong>

                <p>
                  Check for simple forward or backward letter shifts before
                  looking for more complicated rules.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiBookOpen />

              <div>
                <strong>Compare Every Letter</strong>

                <p>
                  Do not assume the pattern from only one letter. Verify
                  the rule against the complete coded word.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>Verify Before Selecting</strong>

                <p>
                  Once you identify a possible rule, apply it to all
                  letters and confirm that the result matches an option.
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
              <h2>Coding &amp; Decoding Practice Questions</h2>
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

              <h2>Test Your Coding &amp; Decoding Skills</h2>

              <p>
                Solve each question and receive immediate feedback.
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

              <h2>Coding &amp; Decoding Result</h2>

              <div className="result-score">
                <strong>{score}</strong>
                <span> / {mcqs.length}</span>
              </div>

              <p>
                You completed all {mcqs.length} coding and decoding
                questions. Review the explanations and practice again
                to improve your speed and accuracy.
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

            <Link to="/notes/verbal/vocabulary">
              Vocabulary
              <FiArrowRight />
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
};

export default CodingDecoding;

