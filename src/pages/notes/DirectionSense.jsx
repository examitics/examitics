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
    question:
      "Ali walks 5 km towards North and then turns right and walks 3 km. In which direction is he from his starting point?",
    options: ["North-West", "North-East", "South-East", "South-West"],
    correct: 1,
    explanation:
      "He moves North first and then East after turning right. Therefore, his final position is North-East of the starting point.",
  },
  {
    question:
      "A person walks 4 km towards East and then 4 km towards North. In which direction is he from the starting point?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    correct: 0,
    explanation:
      "Moving East and then North places the person to the North-East of the starting point.",
  },
  {
    question:
      "A man walks 6 km towards South and then turns left and walks 4 km. Which direction is he facing after the turn?",
    options: ["East", "West", "North", "South"],
    correct: 0,
    explanation: "When facing South, a left turn points towards East.",
  },
  {
    question:
      "A person is facing North. He turns right, then right again. Which direction is he facing now?",
    options: ["East", "West", "South", "North"],
    correct: 2,
    explanation: "North → right = East. Another right turn = South.",
  },
  {
    question:
      "A person is facing East. He turns left. Which direction is he facing?",
    options: ["North", "South", "West", "East"],
    correct: 0,
    explanation: "When facing East, turning left means turning towards North.",
  },
  {
    question:
      "A person is facing West. He turns right. Which direction is he facing?",
    options: ["South", "North", "East", "West"],
    correct: 1,
    explanation: "When facing West, a right turn points towards North.",
  },
  {
    question:
      "A boy walks 10 m North, then 10 m East, and then 10 m South. In which direction is he from his starting point?",
    options: ["North", "South", "East", "West"],
    correct: 2,
    explanation:
      "The North and South movements cancel each other. He remains 10 m East of his starting point.",
  },
  {
    question:
      "A man walks 8 m East and then 6 m West. How far and in which direction is he from his starting point?",
    options: ["2 m East", "2 m West", "14 m East", "14 m West"],
    correct: 0,
    explanation: "8 m East − 6 m West = 2 m East.",
  },
  {
    question:
      "A person walks 7 m North and then 3 m South. How far is he from his starting point?",
    options: ["4 m North", "4 m South", "10 m North", "10 m South"],
    correct: 0,
    explanation: "7 m North − 3 m South = 4 m North.",
  },
  {
    question:
      "A person walks 5 km West and then 5 km South. In which direction is he from the starting point?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    correct: 3,
    explanation:
      "Moving West and South places him South-West of the starting point.",
  },
  {
    question:
      "A man walks 3 km East and then 4 km North. What is the shortest distance from his starting point?",
    options: ["5 km", "6 km", "7 km", "8 km"],
    correct: 0,
    explanation:
      "The movements form a 3-4-5 right triangle. The shortest distance is 5 km.",
  },
  {
    question:
      "A person walks 6 km North and then 8 km East. What is the shortest distance from his starting point?",
    options: ["10 km", "12 km", "14 km", "8 km"],
    correct: 0,
    explanation: "Using the Pythagorean theorem: √(6² + 8²) = √100 = 10 km.",
  },
  {
    question:
      "If you are facing South and turn left, which direction will you face?",
    options: ["East", "West", "North", "South"],
    correct: 0,
    explanation: "When facing South, a left turn points towards East.",
  },
  {
    question:
      "If you are facing North and turn left twice, which direction will you face?",
    options: ["East", "West", "South", "North"],
    correct: 2,
    explanation: "North → left = West → left = South.",
  },
  {
    question:
      "If you are facing East and turn right twice, which direction will you face?",
    options: ["North", "South", "West", "East"],
    correct: 2,
    explanation: "East → right = South → right = West.",
  },
  {
    question:
      "A person walks 4 m North, turns right and walks 4 m, then turns right and walks 4 m. In which direction is he from the starting point?",
    options: ["North", "South", "East", "West"],
    correct: 2,
    explanation:
      "He moves North, then East, then South. The North and South movements cancel, leaving him 4 m East.",
  },
  {
    question:
      "A person walks 5 m South, turns left and walks 5 m, then turns left again and walks 5 m. In which direction is he from the starting point?",
    options: ["North", "South", "East", "West"],
    correct: 3,
    explanation:
      "South → left = East → left = North. The South and North movements cancel, leaving him 5 m East.",
  },
  {
    question:
      "A man walks 10 m East, turns left and walks 5 m, then turns left and walks 10 m. Where is he relative to his starting point?",
    options: ["5 m North", "5 m South", "10 m East", "10 m West"],
    correct: 0,
    explanation:
      "East → left = North. He then turns left from North and moves West, cancelling the original 10 m East. He remains 5 m North.",
  },
  {
    question:
      "A person walks 12 m West and then turns right and walks 5 m. In which direction is he from the starting point?",
    options: ["North-West", "South-West", "North-East", "South-East"],
    correct: 0,
    explanation:
      "Facing West, a right turn points North. Therefore, his final position is North-West.",
  },
  {
    question:
      "A person walks 12 m East and then turns left and walks 5 m. In which direction is he from the starting point?",
    options: ["North-East", "South-East", "North-West", "South-West"],
    correct: 0,
    explanation:
      "Facing East, a left turn points North. Therefore, he is North-East of the starting point.",
  },
  {
    question:
      "Rahim walks 10 m North, turns right and walks 10 m, then turns left and walks 5 m. In which direction is he from the starting point?",
    options: ["North-East", "North-West", "South-East", "South-West"],
    correct: 0,
    explanation:
      "He moves North, then East, then North again. Therefore, he is North-East of the starting point.",
  },
  {
    question:
      "A person walks 8 m South, turns right and walks 6 m. In which direction is he from the starting point?",
    options: ["South-East", "South-West", "North-East", "North-West"],
    correct: 1,
    explanation:
      "Facing South, a right turn points West. Therefore, the final position is South-West.",
  },
  {
    question:
      "A man is facing North. He turns 90° clockwise. Which direction does he face?",
    options: ["West", "East", "South", "North"],
    correct: 1,
    explanation: "A 90° clockwise turn from North points East.",
  },
  {
    question:
      "A man is facing North. He turns 180°. Which direction does he face?",
    options: ["East", "West", "South", "North"],
    correct: 2,
    explanation: "A 180° turn reverses the direction. North becomes South.",
  },
  {
    question:
      "A person is facing East. He turns 270° clockwise. Which direction does he face?",
    options: ["North", "South", "West", "East"],
    correct: 0,
    explanation:
      "From East, 270° clockwise is equivalent to 90° counterclockwise, which points North.",
  },
  {
    question:
      "A person walks 9 m North, then 12 m East. What is the shortest distance from the starting point?",
    options: ["15 m", "18 m", "21 m", "12 m"],
    correct: 0,
    explanation: "Using √(9² + 12²) = √225 = 15 m.",
  },
  {
    question:
      "A person walks 15 m South and then 8 m West. What is the shortest distance from the starting point?",
    options: ["17 m", "19 m", "23 m", "7 m"],
    correct: 0,
    explanation: "Using √(15² + 8²) = √289 = 17 m.",
  },
  {
    question:
      "A person walks 10 m North, 10 m East, 10 m South and 10 m West. Where is he now?",
    options: [
      "10 m North of starting point",
      "10 m East of starting point",
      "At the starting point",
      "10 m South of starting point",
    ],
    correct: 2,
    explanation:
      "The North and South movements cancel, and the East and West movements also cancel. He returns to the starting point.",
  },
  {
    question:
      "A person walks 20 m East, then 15 m North, then 20 m West. How far is he from his starting point?",
    options: ["5 m North", "5 m South", "15 m East", "20 m North"],
    correct: 0,
    explanation:
      "The 20 m East and 20 m West movements cancel. He remains 15 m North.",
  },
  {
    question:
      "A person walks 25 m North, then 10 m East, then 25 m South. In which direction is he from his starting point?",
    options: ["North", "South", "East", "West"],
    correct: 2,
    explanation:
      "The 25 m North and 25 m South movements cancel. He remains 10 m East.",
  },
];

const getOptionLetter = (index) => String.fromCharCode(65 + index);

const DirectionSense = () => {
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
          <strong>Direction Sense</strong>
        </nav>

        {/* Hero */}
        <section className="synonyms-hero">
          <div className="hero-icon">
            <FiBookOpen />
          </div>

          <div>
            <h1>Direction Sense</h1>
            <p>
              Learn how to solve direction, turning, distance, and
              position-based reasoning questions quickly and accurately.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>What Is Direction Sense?</h2>
            </div>{" "}
          </div>

          <div className="content-card">
            <p>
              Direction Sense questions test your ability to understand
              movement, turns, relative positions, and distances between
              different locations.
            </p>

            <p>
              These questions are common in intelligence and reasoning tests.
              The fastest method is to establish a fixed direction and track
              every movement carefully.
            </p>

            <div className="info-box">
              <FiInfo />
              <div>
                <strong>Basic Directions:</strong>
                <p>
                  North, South, East and West are the four main directions.
                  North-East, North-West, South-East and South-West are
                  intermediate directions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Concepts */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div>
              <span className="section-label">Concepts</span>
              <h2>Important Direction Sense Skills</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">
              <div className="concept-item">
                <h3>1. Learn the Four Main Directions</h3>
                <p>
                  North is opposite South, while East is opposite West.
                  Establish these four directions before solving a problem.
                </p>
              </div>

              <div className="concept-item">
                <h3>2. Left and Right Turns</h3>
                <p>
                  A left or right turn depends on the direction in which the
                  person is currently facing. Always determine the current
                  facing direction before applying the turn.
                </p>
              </div>

              <div className="concept-item">
                <h3>3. Opposite Directions</h3>
                <p>
                  North and South are opposites. East and West are opposites. A
                  180° turn always changes a direction to its opposite.
                </p>
              </div>

              <div className="concept-item">
                <h3>4. Diagonal Directions</h3>
                <p>
                  A combination of North and East gives North-East. North and
                  West gives North-West. South and East gives South-East, while
                  South and West gives South-West.
                </p>
              </div>

              <div className="concept-item">
                <h3>5. Cancel Opposite Movements</h3>
                <p>
                  Equal movements in opposite directions cancel each other. For
                  example, 10 m North followed by 10 m South returns to the same
                  vertical position.
                </p>
              </div>

              <div className="concept-item">
                <h3>6. Shortest Distance</h3>
                <p>
                  When horizontal and vertical movements form a right triangle,
                  use the Pythagorean theorem:
                  <strong> √(horizontal² + vertical²)</strong>.
                </p>
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
              <h2>Learn From Examples</h2>
            </div>
          </div>

          <div className="quick-question-grid">
            <div className="quick-question-card">
              <h3>Question 1</h3>
              <p>
                A person walks North and then turns right. Which direction does
                he move?
              </p>

              <div className="quick-answer">
                <FiCheckCircle />
                <span>East</span>
              </div>
            </div>

            <div className="quick-question-card">
              <h3>Question 2</h3>
              <p>
                A person walks 3 km East and 4 km North. What is the shortest
                distance from the starting point?
              </p>

              <div className="quick-answer">
                <FiCheckCircle />
                <span>5 km</span>
              </div>
            </div>

            <div className="quick-question-card">
              <h3>Question 3</h3>
              <p>
                A person walks North, then East, then South by equal distances.
                Where is he from the starting point?
              </p>

              <div className="quick-answer">
                <FiCheckCircle />
                <span>East</span>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Strategy */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">04</span>
            <div>
              <span className="section-label">EXAM STRATEGY</span>
              <h2>How to Improve Direction Sense Accuracy</h2>
            </div>
          </div>

          <div className="tips-card">
            <div className="tip">
              <FiTarget />
              <div>
                <h3>Establish the Starting Point</h3>
                <p>
                  Treat the starting position as a fixed point and mentally draw
                  the movement from there.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Track Every Turn</h3>
                <p>
                  Do not assume that left always means West or right always
                  means East. It depends on the current facing direction.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Cancel Opposite Movements</h3>
                <p>
                  Equal North/South or East/West movements can be cancelled
                  immediately to save time.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Use the 3-4-5 Rule</h3>
                <p>
                  Common distance questions use 3-4-5, 6-8-10, 9-12-15 and
                  similar right triangles.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Draw a Small Diagram</h3>
                <p>
                  If the movement sequence becomes complicated, make a quick
                  four-direction sketch instead of trying to memorize it.
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
              <h2>Direction Sense Practice Questions</h2>
            </div>
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

        {/* Interactive Practice */}
        <section className="practice-section">
          <div className="practice-header">
            <div>
              <div className="section-heading">
                <span className="section-number">06</span>
                <span className="section-label">Interactive MCQ Practice</span>
              </div>

              <h2>Test Your Direction Sense Skills</h2>

              <p>
                Answer each question to receive instant feedback and improve
                your speed and accuracy.
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
                      <p>Excellent. You selected the correct answer.</p>
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
                You completed all {readingQuestions.length} Direction Sense
                questions.
              </p>

              <div className="result-score">
                {score} / {readingQuestions.length}
              </div>

              <p>
                {score >= 25
                  ? "Excellent! Your direction and spatial reasoning skills are strong."
                  : score >= 18
                    ? "Good work! Keep practicing to improve your speed and accuracy."
                    : "Keep practicing. Focus on turns, opposite directions, and distance calculations."}
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

        {/* Related Topics */}
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

            <Link to="/notes/verbal/days-and-dates">
              <FiArrowRight />
              Days & Dates
            </Link>

            <Link to="/notes/verbal/analogies">
              <FiArrowRight />
              Analogies
            </Link>

            <Link to="/notes/verbal/coding-decoding">
              <FiArrowRight />
              Coding & Decoding
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DirectionSense;
