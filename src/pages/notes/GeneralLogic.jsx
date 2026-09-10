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
    question:
      "A person is standing in heavy rain without an umbrella. What is the most practical action?",
    options: [
      "Stand in the rain longer",
      "Move to a sheltered place",
      "Run into traffic",
      "Ignore the rain completely",
    ],
    correct: 1,
    explanation:
      "Moving to a sheltered place is the safest and most practical response to heavy rain.",
  },
  {
    question:
      "If a glass is placed near the edge of a table, what is most likely to happen if it is pushed?",
    options: [
      "It may fall and break",
      "It will become heavier",
      "It will move upward",
      "Nothing can happen",
    ],
    correct: 0,
    explanation:
      "A push can move the glass beyond the edge of the table, causing it to fall and possibly break.",
  },
  {
    question:
      "Ali has an exam tomorrow but has not studied yet. What is the most sensible action?",
    options: [
      "Waste the remaining time",
      "Start studying important topics",
      "Ignore the exam",
      "Sleep for the entire day",
    ],
    correct: 1,
    explanation:
      "Using the remaining time to study important topics is the most practical response.",
  },
  {
    question:
      "If a road is completely blocked, what should a driver normally do?",
    options: [
      "Continue driving through the blockage",
      "Find a safe alternative route",
      "Stop in the middle of the road",
      "Drive on the wrong side at high speed",
    ],
    correct: 1,
    explanation:
      "Finding a safe alternative route is the logical and responsible action.",
  },
  {
    question:
      "A person feels thirsty after exercising in hot weather. What should they normally do?",
    options: [
      "Drink water",
      "Avoid all fluids",
      "Wear heavier clothes",
      "Continue exercising without a break",
    ],
    correct: 0,
    explanation:
      "Drinking water helps replace fluids lost during exercise and is the sensible response to thirst.",
  },
  {
    question:
      "If you see smoke coming from a room and smell something burning, what should you do first?",
    options: [
      "Ignore it",
      "Investigate safely and alert others",
      "Lock everyone inside",
      "Turn off all communication",
    ],
    correct: 1,
    explanation:
      "Possible fire should be treated seriously. Alerting others and responding safely is the sensible action.",
  },
  {
    question:
      "If one shirt costs Rs. 1,000 and you buy two shirts at the same price, how much do you pay?",
    options: ["Rs. 500", "Rs. 1,000", "Rs. 2,000", "Rs. 3,000"],
    correct: 2,
    explanation:
      "Two shirts at Rs. 1,000 each cost 2 × 1,000 = Rs. 2,000.",
  },
  {
    question:
      "A clock shows 8:00 AM. If one hour passes, what time will it show?",
    options: ["7:00 AM", "8:30 AM", "9:00 AM", "10:00 AM"],
    correct: 2,
    explanation:
      "Adding one hour to 8:00 AM gives 9:00 AM.",
  },
  {
    question:
      "If today is Monday, what day will it be after two days?",
    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    correct: 1,
    explanation:
      "One day after Monday is Tuesday, and two days after Monday is Wednesday.",
  },
  {
    question:
      "Which item does not belong with the others?",
    options: ["Apple", "Mango", "Banana", "Carrot"],
    correct: 3,
    explanation:
      "Apple, mango, and banana are fruits, while carrot is a vegetable.",
  },

  {
    question:
      "Which number should come next in the sequence: 2, 4, 6, 8, ?",
    options: ["9", "10", "11", "12"],
    correct: 1,
    explanation:
      "The sequence increases by 2 each time. Therefore, the next number is 10.",
  },
  {
    question:
      "Which number should come next: 5, 10, 15, 20, ?",
    options: ["21", "24", "25", "30"],
    correct: 2,
    explanation:
      "Each number increases by 5. Therefore, the next number is 25.",
  },
  {
    question:
      "Which number is different from the others?",
    options: ["12", "18", "24", "25"],
    correct: 3,
    explanation:
      "12, 18, and 24 are even numbers, while 25 is an odd number.",
  },
  {
    question:
      "If 3 workers complete a task in 6 days at the same rate, what is the simplest conclusion about the task?",
    options: [
      "It requires some amount of work over time",
      "It can never be completed",
      "Workers do not affect the task",
      "The task completes instantly",
    ],
    correct: 0,
    explanation:
      "The statement establishes that the workers require time to complete the task, so the task involves a measurable amount of work.",
  },
  {
    question:
      "A shopkeeper gives you Rs. 100 when you expected Rs. 50 in change. What should you do?",
    options: [
      "Keep the extra money silently",
      "Return the extra money",
      "Spend it immediately",
      "Ask for even more money",
    ],
    correct: 1,
    explanation:
      "Returning money that was given by mistake is the honest and sensible action.",
  },

  {
    question:
      "A student forgets his pen before an examination. What is the most practical solution?",
    options: [
      "Leave the examination immediately",
      "Ask for a spare pen if permitted",
      "Refuse to answer anything",
      "Wait until the examination ends",
    ],
    correct: 1,
    explanation:
      "If permitted by the examination rules, asking for a spare pen is a practical solution.",
  },
  {
    question:
      "If all doors are locked and you need to enter a building, what should you do?",
    options: [
      "Break a window without reason",
      "Look for an authorized entrance or contact someone responsible",
      "Climb through the roof",
      "Give up immediately",
    ],
    correct: 1,
    explanation:
      "Using an authorized entrance or contacting the responsible person is the safest and most logical approach.",
  },
  {
    question:
      "A friend gives you incorrect information about an important meeting time. What should you do?",
    options: [
      "Verify the information",
      "Immediately blame your friend",
      "Ignore the meeting",
      "Change the meeting yourself",
    ],
    correct: 0,
    explanation:
      "Important information should be verified before acting on it.",
  },
  {
    question:
      "If a person is late because of unexpected traffic, what is the most reasonable conclusion?",
    options: [
      "The person necessarily wanted to be late",
      "Traffic may have caused the delay",
      "The person forgot everything",
      "The meeting was cancelled",
    ],
    correct: 1,
    explanation:
      "Unexpected traffic can reasonably cause a delay. It does not automatically mean the person intentionally arrived late.",
  },
  {
    question:
      "A bottle contains water. If half of the water is removed, what remains?",
    options: [
      "No water",
      "Half of the original amount",
      "Twice the original amount",
      "The same amount as before",
    ],
    correct: 1,
    explanation:
      "Removing half of the water leaves half of the original amount.",
  },

  {
    question:
      "Which conclusion is logically supported? All soldiers in the group are trained. Ahmed is a soldier in the group.",
    options: [
      "Ahmed is trained",
      "Ahmed is not trained",
      "Ahmed is a civilian",
      "Nothing can be concluded",
    ],
    correct: 0,
    explanation:
      "If all soldiers in the group are trained and Ahmed is one of those soldiers, Ahmed must be trained.",
  },
  {
    question:
      "All apples in the basket are ripe. This fruit is an apple from the basket. What can you conclude?",
    options: [
      "The apple is ripe",
      "The apple is rotten",
      "The basket is empty",
      "The fruit is not an apple",
    ],
    correct: 0,
    explanation:
      "The statement says all apples in the basket are ripe, so this apple must be ripe.",
  },
  {
    question:
      "If a person studies regularly, they are more likely to improve their performance. Hamza studies regularly. What is a reasonable conclusion?",
    options: [
      "Hamza is likely to improve",
      "Hamza can never improve",
      "Hamza will stop studying",
      "Hamza has already failed",
    ],
    correct: 0,
    explanation:
      "Regular study increases the likelihood of improvement, so Hamza is likely to improve.",
  },
  {
    question:
      "A team has 10 members. If 3 members leave, how many members remain?",
    options: ["6", "7", "8", "13"],
    correct: 1,
    explanation:
      "10 − 3 = 7, so 7 members remain.",
  },
  {
    question:
      "A bus leaves at 9:00 AM and reaches its destination at 11:00 AM. How long was the journey?",
    options: ["1 hour", "2 hours", "3 hours", "4 hours"],
    correct: 1,
    explanation:
      "From 9:00 AM to 11:00 AM is two hours.",
  },

  {
    question:
      "Which action shows good judgment when receiving an unknown message containing a suspicious link?",
    options: [
      "Open it immediately",
      "Share it with everyone",
      "Avoid opening it and verify the source",
      "Reply with personal information",
    ],
    correct: 2,
    explanation:
      "Suspicious links should not be opened without verification. Checking the source is the safer choice.",
  },
  {
    question:
      "If two roads lead to the same destination and one is known to be closed, which road should you take?",
    options: [
      "The closed road",
      "The available road",
      "Neither road",
      "Drive between both roads",
    ],
    correct: 1,
    explanation:
      "The available road is the logical choice because the other road is closed.",
  },
  {
    question:
      "A person has 4 books and gives 1 book to a friend. How many books does the person have left?",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation:
      "4 − 1 = 3, so the person has three books left.",
  },
  {
    question:
      "If the battery of a phone is completely dead, what is the most obvious solution?",
    options: [
      "Charge the phone",
      "Increase the screen brightness",
      "Turn on the flashlight",
      "Remove the wallpaper",
    ],
    correct: 0,
    explanation:
      "A completely discharged phone battery needs to be charged before the phone can normally be used.",
  },
  {
    question:
      "A person sees that the floor is wet near an entrance. What is the most sensible action?",
    options: [
      "Run across it",
      "Ignore the danger",
      "Walk carefully and warn others if necessary",
      "Pour more water on it",
    ],
    correct: 2,
    explanation:
      "A wet floor can be slippery. Walking carefully and warning others helps prevent accidents.",
  },
];

const quickQuestions = [
  {
    question: "Heavy rain → ?",
    answer: "Move to a sheltered place",
    explanation:
      "Moving to shelter is a practical response that reduces exposure to heavy rain.",
  },
  {
    question: "Extra change received → ?",
    answer: "Return the extra money",
    explanation:
      "Returning money given by mistake demonstrates honesty and good judgment.",
  },
  {
    question: "Wet floor → ?",
    answer: "Walk carefully",
    explanation:
      "A wet floor may be slippery, so walking carefully reduces the risk of falling.",
  },
];

const getOptionLetter = (index) => String.fromCharCode(65 + index);

const CommonSenseGeneralLogic = () => {
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
          <strong>Common Sense &amp; General Logic</strong>
        </nav>

        {/* HERO */}

        <section className="synonyms-hero">
          <div className="synonyms-hero-icon">
            <FiBookOpen />
          </div>

          <div className="synonyms-hero-content">
            <span className="synonyms-eyebrow">VERBAL INTELLIGENCE</span>

            <h1>Common Sense &amp; General Logic</h1>

            <p>
              Develop practical reasoning and logical thinking for intelligence
              and competitive tests. Learn how to analyze everyday situations,
              identify reasonable conclusions, recognize simple patterns, and
              make sensible decisions quickly and accurately.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>What Are Common Sense &amp; General Logic Questions?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              <strong>Common sense</strong> is the ability to understand
              ordinary situations and choose a practical, reasonable response.
              <strong> General logic</strong> is the ability to use facts,
              relationships, patterns, and conditions to reach a sensible
              conclusion.
            </p>

            <p>
              In intelligence and entry tests, these questions may involve
              everyday situations, simple calculations, sequences,
              classifications, cause-and-effect relationships, comparisons,
              and conclusions based on given information. The key is to avoid
              unnecessary assumptions and select the answer directly supported
              by the information provided.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Simple Example</strong>

                <p>Wet floor → Walk carefully</p>

                <span>
                  A wet floor may be slippery, so walking carefully is the
                  practical response.
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
              <h2>Important Common Sense &amp; Logic Skills</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">
              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Practical Judgment</h3>

                  <p>
                    Identify the safest and most reasonable action in an
                    everyday situation. Prefer practical solutions over
                    unnecessary or extreme actions.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Logical Conclusions</h3>

                  <p>
                    Use only the information provided to reach a conclusion.
                    Avoid adding assumptions that are not supported by the
                    question.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Patterns &amp; Sequences</h3>

                  <p>
                    Look for simple relationships between numbers, objects,
                    words, or events. Identify the rule and use it to determine
                    what comes next.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Classification</h3>

                  <p>
                    Compare items and identify the one that does not belong to
                    the same group based on a clear and logical characteristic.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>05</span>

                <div>
                  <h3>Cause &amp; Effect</h3>

                  <p>
                    Understand how one event can lead to another. Focus on the
                    relationship given in the question instead of making
                    unrelated assumptions.
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
              <h2>Apply Common Sense</h2>
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
              <h2>How to Improve Logical Accuracy</h2>
            </div>
          </div>

          <div className="tips-card">
            <div className="tip">
              <FiTarget />

              <div>
                <strong>Read the Situation Carefully</strong>

                <p>
                  Identify exactly what the question tells you before choosing
                  an answer. Small details can change the correct conclusion.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiBookOpen />

              <div>
                <strong>Avoid Unnecessary Assumptions</strong>

                <p>
                  Use the facts given in the question. Do not introduce
                  information that has not been stated.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>Choose the Most Practical Answer</strong>

                <p>
                  When a question describes an everyday situation, prefer the
                  answer that is safe, reasonable, and directly solves the
                  problem.
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
              <h2>Common Sense &amp; General Logic Questions</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Study the following questions carefully. The correct answer and
              explanation are shown after each question so you can understand
              the reasoning before attempting the interactive practice.
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

              <h2>Test Your Common Sense &amp; Logic</h2>

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

              <h2>Common Sense &amp; General Logic Result</h2>

              <div className="result-score">
                <strong>{score}</strong>
                <span> / {mcqs.length}</span>
              </div>

              <p>
                You completed all {mcqs.length} common sense and general logic
                questions. Review the explanations and practice again to
                improve your reasoning, judgment, speed, and accuracy.
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

            <Link to="/notes/verbal/series-completion">
              Series Completion
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/coding-decoding">
              Coding &amp; Decoding
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/jumbled-words-letters">
              Jumbled Words &amp; Letters
              <FiArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CommonSenseGeneralLogic;