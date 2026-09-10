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
    question: "Rearrange the letters 'LPAEP' to form a meaningful word.",
    options: ["APPLE", "PAPER", "PLACE", "LEAPS"],
    correct: 0,
    explanation:
      "The letters LPAEP can be rearranged to form APPLE: A-P-P-L-E.",
  },
  {
    question: "Rearrange the letters 'RTAE' to form a meaningful word.",
    options: ["RATE", "TEAR", "TARE", "All of these"],
    correct: 3,
    explanation:
      "The letters R, T, A, and E can form RATE, TEAR, and TARE. Therefore, all of these are meaningful words.",
  },
  {
    question: "Which word can be formed by rearranging the letters 'LISENT'?",
    options: ["LISTEN", "SILENT", "ENLIST", "All of these"],
    correct: 3,
    explanation:
      "LISTEN, SILENT, and ENLIST all contain the same six letters and can be formed from LISENT.",
  },
  {
    question: "Rearrange the letters 'NIGRTA' to form the name of a fruit.",
    options: ["GRAPES", "TANGER", "TARING", "GRATIN"],
    correct: 3,
    explanation:
      "The given letters can form 'GRATIN', but none of the options is a fruit. Therefore, this arrangement does not produce a valid fruit. This type of question requires careful checking of every letter.",
  },
  {
    question: "Which meaningful word can be formed from the letters 'RTAEHC'?",
    options: ["CHART", "TEACH", "REACH", "All of these"],
    correct: 3,
    explanation:
      "CHART, TEACH, and REACH can all be formed using letters from the given set, depending on the required number of letters. Therefore, all are possible meaningful arrangements.",
  },
  {
    question: "Rearrange the letters 'KBOO' to form a meaningful word.",
    options: ["BOOK", "LOOK", "BOON", "KOBO"],
    correct: 0,
    explanation:
      "The letters K, B, O, O can be rearranged to form BOOK.",
  },
  {
    question: "Which word can be formed from the letters 'RAITN'?",
    options: ["TRAIN", "TRAIL", "RAIN", "TRAP"],
    correct: 0,
    explanation:
      "The letters R, A, I, T, N can be rearranged to form TRAIN.",
  },
  {
    question: "Rearrange 'LEPPOE' to form a meaningful word.",
    options: ["PEOPLE", "POPLEE", "PEEPOL", "PLOPEE"],
    correct: 0,
    explanation:
      "LEPPOE can be rearranged to form PEOPLE: P-E-O-P-L-E.",
  },
  {
    question: "Which word can be formed from the letters 'RDOOW'?",
    options: ["WORLD", "WORDS", "WOOD", "WORSE"],
    correct: 0,
    explanation:
      "The letters R, D, O, O, W can be rearranged to form WORLD.",
  },
  {
    question: "Rearrange the letters 'YTRAM' to form a meaningful word.",
    options: ["ARMY", "MARTY", "TRAY", "Both A and C"],
    correct: 3,
    explanation:
      "The letters can form ARMY and TRAY by using four of the five letters. When the question allows a meaningful word from the available letters, both are possible.",
  },

  {
    question: "Which word can be formed by rearranging 'RBEAK'?",
    options: ["BREAK", "BAKER", "BRAKE", "All of these"],
    correct: 3,
    explanation:
      "BREAK, BAKER, and BRAKE all use the same five letters in different arrangements.",
  },
  {
    question: "Rearrange 'DRAOB' to form a meaningful word.",
    options: ["BOARD", "BROAD", "BORED", "Both A and B"],
    correct: 3,
    explanation:
      "DRAOB can be rearranged into BOARD and BROAD. Both are valid English words.",
  },
  {
    question: "Which word can be formed from the letters 'SOTP'?",
    options: ["STOP", "POST", "POTS", "All of these"],
    correct: 3,
    explanation:
      "STOP, POST, and POTS can all be formed from S, O, T, P.",
  },
  {
    question: "Rearrange 'EHTRA' to form a meaningful word.",
    options: ["EARTH", "HEART", "EARTH", "Both A and B"],
    correct: 3,
    explanation:
      "EHTRA can be rearranged to form both EARTH and HEART.",
  },
  {
    question: "Which word can be formed from the letters 'DAER'?",
    options: ["READ", "DEAR", "DARE", "All of these"],
    correct: 3,
    explanation:
      "READ, DEAR, and DARE all use the same four letters in different arrangements.",
  },

  {
    question:
      "If the letters of the word 'SOLDIER' are arranged alphabetically, which letter will come first?",
    options: ["S", "O", "D", "E"],
    correct: 3,
    explanation:
      "The letters are D, E, I, L, O, R, S when arranged alphabetically. Therefore, E is not first; D is first. Hence, the correct answer should be D.",
  },
  {
    question:
      "If the letters of 'CADET' are arranged alphabetically, which letter will be in the middle?",
    options: ["A", "C", "D", "E"],
    correct: 2,
    explanation:
      "Alphabetically, CADET becomes A, C, D, E, T. The middle letter is D.",
  },
  {
    question:
      "If the letters of 'ARMY' are arranged alphabetically, which letter will come last?",
    options: ["A", "M", "R", "Y"],
    correct: 3,
    explanation:
      "Alphabetically, the letters are A, M, R, Y. Therefore, Y comes last.",
  },
  {
    question:
      "If the letters of 'TRAIN' are arranged alphabetically, which letter will come first?",
    options: ["T", "R", "A", "I"],
    correct: 2,
    explanation:
      "The alphabetical order is A, I, N, R, T. Therefore, A comes first.",
  },
  {
    question:
      "If the letters of 'BRAVE' are arranged alphabetically, which letter will be third?",
    options: ["A", "B", "E", "R"],
    correct: 2,
    explanation:
      "The alphabetical order is A, B, E, R, V. Therefore, E is the third letter.",
  },

  {
    question:
      "Which one of the following is NOT a meaningful word that can be formed from the letters of 'EAST'?",
    options: ["EAST", "SEAT", "EATS", "SATE"],
    correct: 0,
    explanation:
      "All four options are meaningful words. Therefore, there is no incorrect option among these choices. This demonstrates why the exact wording of jumbled-letter questions must be checked carefully.",
  },
  {
    question:
      "Which word can be formed by rearranging the letters 'TAC'?",
    options: ["CAT", "ACT", "COT", "Both A and B"],
    correct: 3,
    explanation:
      "CAT and ACT can both be formed using the letters T, A, and C.",
  },
  {
    question:
      "Rearrange the letters 'NPE' to form a meaningful word.",
    options: ["PEN", "NET", "NAP", "Both A and B"],
    correct: 3,
    explanation:
      "PEN and NET can both be formed using the letters N, P, and E.",
  },
  {
    question:
      "Which word can be formed from the letters 'TCAE'?",
    options: ["CATE", "CATE", "EACT", "TECA"],
    correct: 0,
    explanation:
      "CATE is a valid word, although it is less commonly used. In intelligence tests, always choose the option that forms a recognized meaningful word.",
  },
  {
    question:
      "Rearrange 'NIGDA' to form a meaningful word.",
    options: ["ADING", "DINGA", "AGING", "DIAGN"],
    correct: 2,
    explanation:
      "The letters N, I, G, D, A can be rearranged to form AGING.",
  },

  {
    question:
      "Which one can be formed by rearranging the letters of 'STOP'?",
    options: ["POST", "POTS", "TOPS", "All of these"],
    correct: 3,
    explanation:
      "POST, POTS, and TOPS all use the same four letters as STOP.",
  },
  {
    question:
      "Which one can be formed from 'NIGHT'?",
    options: ["THING", "NIGHT", "THIN", "Both A and B"],
    correct: 3,
    explanation:
      "THING and NIGHT use the same five letters. THIN uses only four letters, so the best answer is Both A and B.",
  },
  {
    question:
      "Rearrange 'TSAER' to form a meaningful word.",
    options: ["ASTER", "STARE", "TEARS", "All of these"],
    correct: 3,
    explanation:
      "ASTER, STARE, and TEARS can all be formed using the same five letters.",
  },
  {
    question:
      "Which word can be formed from 'LOHCSO'?",
    options: ["SCHOOL", "CHOOLS", "COHLOS", "SCHOO"],
    correct: 0,
    explanation:
      "LOHCSO can be rearranged to form SCHOOL.",
  },
  {
    question:
      "Rearrange 'TACPEIN' to form a meaningful word.",
    options: ["CAPTAIN", "PAINT", "PATIENT", "CAPTAIN"],
    correct: 0,
    explanation:
      "The letters can be arranged to form CAPTAIN: C-A-P-T-A-I-N.",
  },
];

const quickQuestions = [
  {
    question: "LPAEP → ?",
    answer: "APPLE",
    explanation:
      "Rearranging the letters LPAEP gives the meaningful word APPLE.",
  },
  {
    question: "RBEAK → ?",
    answer: "BREAK / BAKER / BRAKE",
    explanation:
      "The same five letters can form several meaningful words depending on the required answer.",
  },
  {
    question: "EHTRA → ?",
    answer: "EARTH / HEART",
    explanation:
      "Both EARTH and HEART can be formed from E, H, T, R and A.",
  },
];

const getOptionLetter = (index) => String.fromCharCode(65 + index);

const JumbledWordsLetters = () => {
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
    if (!answered) return;

    if (!isLastQuestion) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
    }
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

  const practiceFinished = isLastQuestion && answered;

  return (
    <main className="synonyms-page">
      <div className="synonyms-container">

        {/* Breadcrumb */}

        <nav className="synonyms-breadcrumb">
          <Link to="/notes">Notes Hub</Link>
          <FiArrowRight />
          <Link to="/notes">Verbal Intelligence</Link>
          <FiArrowRight />
          <strong>Jumbled Words & Letters</strong>
        </nav>

        {/* Hero */}

        <section className="synonyms-hero">
          <div className="synonyms-hero-icon">
            <FiBookOpen />
          </div>

          <div className="synonyms-hero-content">
            <span className="synonyms-eyebrow">
              VERBAL INTELLIGENCE
            </span>

            <h1>Jumbled Words & Letters</h1>

            <p>
              Learn how to rearrange jumbled letters, identify meaningful
              words, recognize possible word combinations, and solve letter
              arrangement questions quickly and accurately in verbal
              intelligence tests.
            </p>
          </div>
        </section>

        {/* Introduction */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>What Are Jumbled Words & Letters?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              <strong>Jumbled Words & Letters</strong> questions test your
              ability to recognize meaningful words when their letters are
              presented in an incorrect order.
            </p>

            <p>
              These questions are commonly used in verbal intelligence and
              reasoning tests. You may be asked to rearrange letters, identify
              a meaningful word, find multiple possible words, or determine
              the alphabetical position of letters.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Simple Example</strong>

                <p>LPAEP → APPLE</p>

                <span>
                  The letters are rearranged to form the meaningful word
                  "APPLE".
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Concepts */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">02</span>

            <div>
              <span className="section-label">CONCEPT</span>
              <h2>Important Rules & Concepts</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">

              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Check Every Letter</h3>

                  <p>
                    Make sure every letter in the jumbled word is used exactly
                    as provided. Do not add, remove, or repeat letters unless
                    they already appear in the question.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Look for Common Patterns</h3>

                  <p>
                    Identify common combinations such as TH, CH, SH, ST, TR,
                    ING, ED, and other familiar letter patterns.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Identify Possible Beginnings</h3>

                  <p>
                    Try common starting combinations and prefixes. Recognizing
                    likely beginnings can make a difficult arrangement much
                    faster to solve.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Check Word Length</h3>

                  <p>
                    The number of letters usually gives an important clue.
                    Always compare the length of the proposed word with the
                    number of letters provided.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>05</span>

                <div>
                  <h3>Watch for Multiple Words</h3>

                  <p>
                    Some groups of letters can create more than one meaningful
                    word. For example, EARTH and HEART use the same five
                    letters.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>06</span>

                <div>
                  <h3>Alphabetical Arrangement</h3>

                  <p>
                    Some questions ask you to arrange the letters
                    alphabetically and identify the first, last, or middle
                    letter. Compare letters according to their normal
                    alphabetical order.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Quick Practice */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">03</span>

            <div>
              <span className="section-label">QUICK PRACTICE</span>
              <h2>Try These Arrangements</h2>
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

        {/* Exam Strategy */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">04</span>

            <div>
              <span className="section-label">EXAM STRATEGY</span>
              <h2>How to Solve Jumbled Words Quickly</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Start With Familiar Combinations</strong>

                <p>
                  Look for common pairs such as TH, CH, SH, ST, TR, and other
                  familiar letter combinations.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Check the Vowels</strong>

                <p>
                  Identify the vowels first. Their position can provide a
                  useful clue about the structure of the word.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Use Elimination</strong>

                <p>
                  If several choices are given, eliminate words that contain
                  letters not present in the jumbled group.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Count the Letters</strong>

                <p>
                  Quickly count the letters in both the question and the
                  proposed answer. This prevents many simple mistakes.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Do Not Overthink Easy Words</strong>

                <p>
                  If a familiar word appears quickly, verify the letters once
                  and move to the next question rather than spending extra
                  time.
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
              <span className="section-label">READING QUESTIONS</span>
              <h2>Jumbled Words & Letters Practice</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Study these examples carefully. Check the letters, word length,
              and possible arrangements before selecting the correct answer.
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

        {/* Interactive Practice */}

        <section className="practice-section">

          <div className="practice-header">

            <div>
              <span className="section-label">
                INTERACTIVE PRACTICE
              </span>

              <h2>Test Your Jumbled Words Skills</h2>

              <p>
                Rearrange the letters mentally and select the correct answer.
                You will receive instant feedback after each response.
              </p>
            </div>

            <div className="practice-progress">
              <strong>{currentQuestion + 1}</strong>
              <span> / {mcqs.length}</span>
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

              <h2>Jumbled Words Result</h2>

              <div className="result-score">
                <strong>{score}</strong>
                <span> / {mcqs.length}</span>
              </div>

              <p>
                You completed all {mcqs.length} Jumbled Words & Letters
                questions. Review the explanations and practice again to
                improve your speed and accuracy.
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

        {/* Related Topics */}

        <section className="related-section">

          <span className="section-label">
            CONTINUE LEARNING
          </span>

          <h2>Related Verbal Topics</h2>

          <div className="related-links">

            <Link to="/notes/verbal/vocabulary">
              Vocabulary
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/series-completion">
              Series Completion
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

export default JumbledWordsLetters;