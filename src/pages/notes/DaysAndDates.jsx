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

const readingQuestions = [
  {
    question: "If today is Monday, what day will it be after 10 days?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    correct: 1,
    explanation: "10 days = 7 + 3 days. Three days after Monday is Thursday.",
  },
  {
    question: "If today is Wednesday, what day will it be after 47 days?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    correct: 1,
    explanation:
      "47 ÷ 7 leaves a remainder of 5. Five days after Wednesday is Monday.",
  },
  {
    question: "If today is Wednesday, what day was it 75 days ago?",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    correct: 1,
    explanation:
      "75 ÷ 7 leaves a remainder of 5. Five days before Wednesday is Friday.",
  },
  {
    question: "If today is Wednesday, what day will it be after 100 days?",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    correct: 1,
    explanation:
      "100 ÷ 7 leaves a remainder of 2. Two days after Wednesday is Friday.",
  },
  {
    question: "Which of the following is a leap year?",
    options: ["2021", "2022", "2023", "2024"],
    correct: 3,
    explanation:
      "2024 is divisible by 4 and is not a century year, so it is a leap year.",
  },
  {
    question: "Which of the following is NOT a leap year?",
    options: ["2000", "2004", "1900", "2024"],
    correct: 2,
    explanation:
      "1900 is divisible by 100 but not by 400, so it is not a leap year.",
  },
  {
    question: "Why is the year 2000 a leap year?",
    options: [
      "It is divisible by 3",
      "It is divisible by 4 only",
      "It is divisible by 100 but not 400",
      "It is divisible by 400",
    ],
    correct: 3,
    explanation:
      "Century years are leap years only when divisible by 400. Therefore, 2000 is a leap year.",
  },
  {
    question: "How many days are there in February during a normal year?",
    options: ["27", "28", "29", "30"],
    correct: 1,
    explanation: "February has 28 days in a normal year.",
  },
  {
    question: "How many days are there in February during a leap year?",
    options: ["28", "29", "30", "31"],
    correct: 1,
    explanation: "February has 29 days in a leap year.",
  },
  {
    question: "How many days are there in April?",
    options: ["28", "29", "30", "31"],
    correct: 2,
    explanation: "April has 30 days.",
  },
  {
    question: "How many odd days are there in a normal year of 365 days?",
    options: ["0", "1", "2", "3"],
    correct: 1,
    explanation:
      "365 = 52 weeks + 1 day. Therefore, a normal year has 1 odd day.",
  },
  {
    question: "How many odd days are there in a leap year of 366 days?",
    options: ["0", "1", "2", "3"],
    correct: 2,
    explanation:
      "366 = 52 weeks + 2 days. Therefore, a leap year has 2 odd days.",
  },
  {
    question:
      "If a day starts on Tuesday, what day will occur after exactly 52 weeks and 1 day?",
    options: ["Tuesday", "Wednesday", "Thursday", "Monday"],
    correct: 1,
    explanation:
      "52 complete weeks return to Tuesday. One additional day makes it Wednesday.",
  },
  {
    question: "If today is Tuesday, what day will it be after 45 days?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    correct: 2,
    explanation:
      "45 ÷ 7 leaves a remainder of 3. Three days after Tuesday is Friday.",
  },
  {
    question: "If today is Monday, what day will it be after 90 days?",
    options: ["Friday", "Saturday", "Sunday", "Monday"],
    correct: 2,
    explanation:
      "90 ÷ 7 leaves a remainder of 6. Six days after Monday is Sunday.",
  },
  {
    question:
      "If today is Thursday, what day will it be after 3 weeks and 4 days?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    correct: 1,
    explanation:
      "Three weeks do not change the weekday. Four days after Thursday is Monday.",
  },
  {
    question:
      "If the 10th day of a month is Monday, what day will the 24th be?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    correct: 1,
    explanation:
      "The difference between the 10th and 24th is 14 days, exactly two weeks. Therefore, it is Monday.",
  },
  {
    question: "If the 5th day of a month is Friday, what day will the 19th be?",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    correct: 1,
    explanation: "The difference is 14 days, so the weekday remains Friday.",
  },
  {
    question:
      "If the 3rd day of a month is Wednesday, what day will the 31st be?",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    correct: 2,
    explanation:
      "The difference is 28 days, exactly four weeks. Therefore, the 31st is also Wednesday.",
  },
  {
    question:
      "How many days are there from Monday to Sunday when both days are included?",
    options: ["5", "6", "7", "8"],
    correct: 2,
    explanation:
      "Counting Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday gives 7 days.",
  },
  {
    question:
      "How many days are there between 10 March and 20 March, excluding the starting date?",
    options: ["9", "10", "11", "12"],
    correct: 1,
    explanation:
      "20 − 10 = 10 days. This is the standard date difference when the starting date is excluded.",
  },
  {
    question: "If 1 January 2025 was Wednesday, what day was 31 January 2025?",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    correct: 1,
    explanation:
      "There are 30 days between 1 January and 31 January. 30 leaves a remainder of 2 when divided by 7. Wednesday + 2 days = Friday.",
  },
  {
    question: "If 1 January 2025 was Wednesday, what day was 1 March 2025?",
    options: ["Friday", "Saturday", "Sunday", "Monday"],
    correct: 1,
    explanation:
      "January has 31 days and February 2025 has 28 days. 31 + 28 = 59 days. 59 leaves a remainder of 3. Wednesday + 3 days = Saturday.",
  },
  {
    question: "If 1 January 2024 was Monday, what day was 1 March 2024?",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    correct: 1,
    explanation:
      "2024 is a leap year. January has 31 days and February has 29 days, giving 60 days. 60 leaves a remainder of 4. Monday + 4 days = Friday.",
  },
  {
    question: "What day of the week was 1 February 2025?",
    options: ["Friday", "Saturday", "Sunday", "Monday"],
    correct: 1,
    explanation:
      "1 January 2025 was Wednesday. January has 31 days, and 31 leaves a remainder of 3. Wednesday + 3 days = Saturday.",
  },
  {
    question: "What day of the week was 29 February 2024?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    correct: 1,
    explanation:
      "1 February 2024 was Thursday. The 29th is 28 days later, exactly four weeks, so it was also Thursday.",
  },
  {
    question:
      "If the 1st day of a month is Sunday, what day will the 13th day be?",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    correct: 1,
    explanation:
      "The 13th is 12 days after the 1st. 12 leaves a remainder of 5. Sunday + 5 days = Friday.",
  },
  {
    question:
      "If the 4th day of a month is Sunday, what day will the 19th day be?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    correct: 1,
    explanation:
      "The difference is 15 days. 15 leaves a remainder of 1. Therefore, Monday.",
  },
  {
    question:
      "If 1 January is Friday, what day will 31 January be in the same year?",
    options: ["Saturday", "Sunday", "Monday", "Tuesday"],
    correct: 1,
    explanation:
      "There are 30 days between the two dates. 30 leaves a remainder of 2. Friday + 2 days = Sunday.",
  },
  {
    question: "If today is Sunday, what day will it be after 100 days?",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    correct: 1,
    explanation:
      "100 ÷ 7 leaves a remainder of 2. Two days after Sunday is Tuesday.",
  },
];

const getOptionLetter = (index) => String.fromCharCode(65 + index);

const DaysAndDates = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const question = readingQuestions[currentQuestion];
  const isAnswered = selectedAnswer !== null;
  const isLastQuestion = currentQuestion === readingQuestions.length - 1;

  const handleAnswer = (index) => {
    if (isAnswered) return;

    setSelectedAnswer(index);

    if (index === question.correct) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNext = () => {
    if (!isAnswered) return;

    if (!isLastQuestion) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((prev) => prev - 1);
    setSelectedAnswer(null);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
  };

  return (
    <main className="synonyms-page">
      <div className="synonyms-container">
        {/* Breadcrumb */}

        <nav className="synonyms-breadcrumb">
          <Link to="/notes">Notes Hub</Link>
          <FiArrowRight />
          <Link to="/notes">Verbal Intelligence</Link>
          <FiArrowRight />
          <strong>Days & Dates</strong>
        </nav>

        {/* Hero */}
        <section className="synonyms-hero">
          <div className="hero-icon">
            <FiBookOpen />
          </div>

          <div>
            <h1>Days & Dates</h1>
            <p>
              Master calendar-based reasoning, weekdays, dates, leap years, odd
              days, and date calculations for intelligence and competitive
              exams.
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>What are Days & Dates Questions?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Days & Dates questions test your ability to calculate weekdays,
              count days between dates, identify leap years, and quickly
              determine future or past days.
            </p>

            <p>
              These questions are common in intelligence and reasoning tests.
              The key is not memorizing calendars but understanding a few simple
              rules and using remainders efficiently.
            </p>

            <div className="info-box">
              <FiInfo />
              <div>
                <strong>Important:</strong>
                <p>
                  Unless stated otherwise, these questions use the standard
                  Gregorian calendar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div>
              <span className="section-label">Important Rules & Concepts</span>
              <h2>Methods to Solve Days & Dates Questions</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">
              <div className="concept-item">
                <h3>1. Seven-Day Cycle</h3>
                <p>
                  Every 7 days, the same weekday returns. Therefore, when
                  solving day questions, divide the number of days by 7 and use
                  only the remainder.
                </p>
              </div>

              <div className="concept-item">
                <h3>2. Odd Days</h3>
                <p>
                  Odd days are the number of days left after removing complete
                  weeks. For example, 365 days = 52 weeks + 1 day, so a normal
                  year has 1 odd day.
                </p>
              </div>

              <div className="concept-item">
                <h3>3. Leap Year Rule</h3>
                <p>
                  A year is normally a leap year if it is divisible by 4.
                  However, century years must also be divisible by 400.
                </p>
              </div>

              <div className="concept-item">
                <h3>4. Days in Months</h3>
                <p>
                  January, March, May, July, August, October and December have
                  31 days. April, June, September and November have 30 days.
                  February has 28 days normally and 29 days in a leap year.
                </p>
              </div>

              <div className="concept-item">
                <h3>5. Moving Forward</h3>
                <p>
                  To find a future weekday, add the number of days and reduce it
                  modulo 7. For example, 10 days means only 3 effective days
                  because 10 − 7 = 3.
                </p>
              </div>

              <div className="concept-item">
                <h3>6. Moving Backward</h3>
                <p>
                  For past dates, subtract the remainder from the current
                  weekday. Remember that moving backward by 1 day means moving
                  to the previous weekday.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">03</span>
            <span className="section-label">Quick Practice</span>
            <div>
              <span className="section-label">QUICK PRACTICE</span>
              <h2>Practice Real Examples</h2>
            </div>
          </div>

          <div className="quick-question-grid">
            <div className="quick-question-card">
              <h3>Question 1</h3>
              <p>If today is Monday, what day will it be after 10 days?</p>
              <div className="quick-answer">
                <FiCheckCircle />
                <span>Thursday</span>
              </div>
            </div>

            <div className="quick-question-card">
              <h3>Question 2</h3>
              <p>How many odd days are there in 365 days?</p>
              <div className="quick-answer">
                <FiCheckCircle />
                <span>1 odd day</span>
              </div>
            </div>

            <div className="quick-question-card">
              <h3>Question 3</h3>
              <p>If the 4th day of a month is Sunday, what day is the 19th?</p>
              <div className="quick-answer">
                <FiCheckCircle />
                <span>Monday</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">04</span>
            <div>
              <span className="section-label">EXAM STRATEGY</span>
              <h2>How to Improve Accuracy</h2>
            </div>
          </div>

          <div className="tips-card">
            <div className="tip">
              <FiTarget />
              <div>
                <h3>Use Remainders</h3>
                <p>
                  Divide the number of days by 7 and work with the remainder
                  instead of counting every day.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Remember Leap Years</h3>
                <p>
                  Check divisibility by 4, but remember the special rule for
                  century years.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Memorize Month Lengths</h3>
                <p>
                  Knowing which months have 30 or 31 days saves valuable time
                  during the test.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Watch the Direction</h3>
                <p>
                  For future dates add days; for past dates subtract days.
                  Carefully read whether the question asks before or after.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Look for Complete Weeks</h3>
                <p>7, 14, 21, 28, 35 and 42 days do not change the weekday.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">05</span>
            <div>
              <span className="section-label">READING QUESTIONS</span>
              <h2>Days & Dates Practice Questions</h2>
            </div>{" "}
          </div>

          <div className="reading-questions">
            {readingQuestions.map((item, index) => (
              <div className="reading-question" key={index}>
                <div className="reading-question-header">
                  <span className="reading-question-number">Q{index + 1}</span>

                  <span>{item.question}</span>
                </div>

                <div className="reading-options">
                  {item.options.map((option, optionIndex) => (
                    <div
                      className={`reading-option ${
                        optionIndex === item.correct ? "correct" : ""
                      }`}
                      key={optionIndex}
                    >
                      <span className="option-letter">
                        {getOptionLetter(optionIndex)}
                      </span>

                      <span className="option-text">{option}</span>

                      {optionIndex === item.correct && <FiCheckCircle />}
                    </div>
                  ))}
                </div>

                <div className="reading-answer">
                  <strong>Correct Answer:</strong>{" "}
                  {getOptionLetter(item.correct)}. {item.options[item.correct]}
                </div>

                <div className="reading-explanation">
                  <strong>Explanation:</strong> {item.explanation}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 */}
        <section className="practice-section">
          <div className="practice-header">
            <div>
              <div className="section-heading">
                <span className="section-number">06</span>
                <span className="section-label">Interactive MCQ Practice</span>
              </div>

              <h2>Test Your Days & Dates Skills</h2>

              <p>
                Answer each question to receive instant feedback. Your score
                will be calculated automatically.
              </p>
            </div>

            <div className="practice-progress">
              {currentQuestion + 1} / {readingQuestions.length}
            </div>
          </div>

          <div className="mcq-card">
            <div className="mcq-top">
              <span>Question {currentQuestion + 1}</span>

              <span>Score: {score}</span>
            </div>

            <h3>{question.question}</h3>

            <div className="mcq-options">
              {question.options.map((option, index) => {
                const isCorrect = index === question.correct;
                const isSelected = index === selectedAnswer;

                let optionClass = "mcq-option";

                if (isAnswered && isCorrect) {
                  optionClass += " correct";
                } else if (isAnswered && isSelected && !isCorrect) {
                  optionClass += " wrong";
                }

                return (
                  <button
                    type="button"
                    className={optionClass}
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={isAnswered}
                  >
                    <span className="option-letter">
                      {getOptionLetter(index)}
                    </span>

                    <span className="option-text">{option}</span>

                    {isAnswered && isCorrect && <FiCheckCircle />}

                    {isAnswered && isSelected && !isCorrect && <FiXCircle />}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div
                className={`answer-feedback ${
                  selectedAnswer === question.correct
                    ? "feedback-correct"
                    : "feedback-wrong"
                }`}
              >
                {selectedAnswer === question.correct ? (
                  <>
                    <div className="feedback-icon">
                      <FiCheckCircle />
                    </div>

                    <div>
                      <h4>Correct!</h4>

                      <p>Well done. You selected the correct answer.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="feedback-icon">
                      <FiXCircle />
                    </div>

                    <div>
                      <h4>Incorrect</h4>

                      <p>
                        Correct answer:{" "}
                        <strong>
                          {getOptionLetter(question.correct)}.{" "}
                          {question.options[question.correct]}
                        </strong>
                      </p>
                    </div>
                  </>
                )}

                <div className="explanation">
                  <strong>Explanation:</strong> {question.explanation}
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

              {!isLastQuestion ? (
                <button
                  type="button"
                  className="primary-btn"
                  onClick={handleNext}
                  disabled={!isAnswered}
                >
                  Next
                  <FiArrowRight />
                </button>
              ) : (
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() => {
                    const resultSection =
                      document.querySelector(".practice-result");

                    if (resultSection) {
                      resultSection.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                  disabled={!isAnswered}
                >
                  View Result
                  <FiAward />
                </button>
              )}
            </div>
          </div>

          {isLastQuestion && isAnswered && (
            <div className="practice-result">
              <div className="result-icon">
                <FiAward />
              </div>

              <h2>Practice Complete!</h2>

              <p>
                You completed all {readingQuestions.length} Days & Dates
                questions.
              </p>

              <div className="result-score">
                {score} / {readingQuestions.length}
              </div>

              <p>
                {score >= 25
                  ? "Excellent! Your Days & Dates reasoning skills are strong."
                  : score >= 18
                    ? "Good work! Keep practicing to improve your speed and accuracy."
                    : "Keep practicing. Focus on remainders, leap years, and date calculations."}
              </p>

              <button
                type="button"
                className="primary-btn"
                onClick={handleRetry}
              >
                Practice Again
                <FiArrowRight />
              </button>
            </div>
          )}
        </section>

        {/* Section 7 */}
        <section className="related-section">
          <div className="section-heading">
            <span className="section-number">07</span>
            <span className="section-label">Related Topics</span>
          </div>

          <div className="related-links">
            <Link to="/notes/verbal/series-completion">
              <FiArrowRight />
              Series Completion
            </Link>

            <Link to="/notes/verbal/analogies">
              <FiArrowRight />
              Analogies
            </Link>

            <Link to="/notes/verbal/coding-decoding">
              <FiArrowRight />
              Coding & Decoding
            </Link>

            <Link to="/notes/verbal/vocabulary">
              <FiArrowRight />
              Vocabulary
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DaysAndDates;
