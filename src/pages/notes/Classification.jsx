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
    question: "Find the odd one out: Apple, Mango, Banana, Car",
    options: ["Apple", "Mango", "Banana", "Car"],
    correct: 3,
    explanation:
      "Apple, mango and banana are fruits. Car is not a fruit.",
  },
  {
    question: "Find the odd one out: Dog, Cat, Cow, Sparrow",
    options: ["Dog", "Cat", "Cow", "Sparrow"],
    correct: 3,
    explanation:
      "Dog, cat and cow are mammals. Sparrow is a bird.",
  },
  {
    question: "Find the odd one out: Rose, Lily, Tulip, Wheat",
    options: ["Rose", "Lily", "Tulip", "Wheat"],
    correct: 3,
    explanation:
      "Rose, lily and tulip are commonly classified as flowering ornamental plants. Wheat is a cereal crop.",
  },
  {
    question: "Find the odd one out: Lion, Tiger, Leopard, Goat",
    options: ["Lion", "Tiger", "Leopard", "Goat"],
    correct: 3,
    explanation:
      "Lion, tiger and leopard are large wild cats. Goat is a domesticated herbivorous animal.",
  },
  {
    question: "Find the odd one out: Chair, Table, Sofa, Bicycle",
    options: ["Chair", "Table", "Sofa", "Bicycle"],
    correct: 3,
    explanation:
      "Chair, table and sofa are furniture items. Bicycle is a vehicle.",
  },
  {
    question: "Find the odd one out: Red, Blue, Green, Circle",
    options: ["Red", "Blue", "Green", "Circle"],
    correct: 3,
    explanation:
      "Red, blue and green are colors. Circle is a geometric shape.",
  },
  {
    question: "Find the odd one out: January, March, May, Tuesday",
    options: ["January", "March", "May", "Tuesday"],
    correct: 3,
    explanation:
      "January, March and May are months. Tuesday is a day of the week.",
  },
  {
    question: "Find the odd one out: Islamabad, Lahore, Karachi, Pakistan",
    options: ["Islamabad", "Lahore", "Karachi", "Pakistan"],
    correct: 3,
    explanation:
      "Islamabad, Lahore and Karachi are cities. Pakistan is a country.",
  },
  {
    question: "Find the odd one out: 2, 4, 6, 9",
    options: ["2", "4", "6", "9"],
    correct: 3,
    explanation:
      "2, 4 and 6 are even numbers. 9 is an odd number.",
  },
  {
    question: "Find the odd one out: 3, 5, 7, 10",
    options: ["3", "5", "7", "10"],
    correct: 3,
    explanation:
      "3, 5 and 7 are prime numbers. 10 is not prime.",
  },
  {
    question: "Find the odd one out: 9, 16, 25, 30",
    options: ["9", "16", "25", "30"],
    correct: 3,
    explanation:
      "9, 16 and 25 are perfect squares. 30 is not a perfect square.",
  },
  {
    question: "Find the odd one out: 8, 27, 64, 100",
    options: ["8", "27", "64", "100"],
    correct: 3,
    explanation:
      "8 = 2³, 27 = 3³ and 64 = 4³. 100 is not a perfect cube.",
  },
  {
    question: "Find the odd one out: 12, 18, 24, 31",
    options: ["12", "18", "24", "31"],
    correct: 3,
    explanation:
      "12, 18 and 24 are divisible by 6. 31 is not divisible by 6.",
  },
  {
    question: "Find the odd one out: 15, 21, 27, 34",
    options: ["15", "21", "27", "34"],
    correct: 3,
    explanation:
      "15, 21 and 27 are multiples of 3. 34 is not a multiple of 3.",
  },
  {
    question: "Find the odd one out: 4, 8, 12, 17",
    options: ["4", "8", "12", "17"],
    correct: 3,
    explanation:
      "4, 8 and 12 are even numbers. 17 is odd.",
  },
  {
    question: "Find the odd one out: A, E, I, B",
    options: ["A", "E", "I", "B"],
    correct: 3,
    explanation:
      "A, E and I are vowels. B is a consonant.",
  },
  {
    question: "Find the odd one out: B, D, F, G",
    options: ["B", "D", "F", "G"],
    correct: 3,
    explanation:
      "B, D and F occupy even positions in the alphabet. G occupies position 7.",
  },
  {
    question: "Find the odd one out: A, C, E, H",
    options: ["A", "C", "E", "H"],
    correct: 3,
    explanation:
      "A, C and E occupy odd alphabet positions. H occupies position 8.",
  },
  {
    question: "Find the odd one out: AB, CD, EF, GI",
    options: ["AB", "CD", "EF", "GI"],
    correct: 3,
    explanation:
      "AB, CD and EF consist of consecutive letters. G and I are not consecutive.",
  },
  {
    question: "Find the odd one out: LM, NO, PQ, RT",
    options: ["LM", "NO", "PQ", "RT"],
    correct: 3,
    explanation:
      "LM, NO and PQ contain consecutive letters. R and T are separated by one letter.",
  },
  {
    question:
      "Find the odd one out: Teacher, Doctor, Engineer, Hospital",
    options: ["Teacher", "Doctor", "Engineer", "Hospital"],
    correct: 3,
    explanation:
      "Teacher, doctor and engineer are professions. Hospital is a place.",
  },
  {
    question:
      "Find the odd one out: Army, Navy, Air Force, University",
    options: ["Army", "Navy", "Air Force", "University"],
    correct: 3,
    explanation:
      "Army, Navy and Air Force are military services. University is an educational institution.",
  },
  {
    question:
      "Find the odd one out: Pen, Pencil, Marker, Notebook",
    options: ["Pen", "Pencil", "Marker", "Notebook"],
    correct: 3,
    explanation:
      "Pen, pencil and marker are writing instruments. Notebook is used for writing but is not a writing instrument.",
  },
  {
    question:
      "Find the odd one out: Kilometer, Meter, Centimeter, Kilogram",
    options: ["Kilometer", "Meter", "Centimeter", "Kilogram"],
    correct: 3,
    explanation:
      "Kilometer, meter and centimeter measure length. Kilogram measures mass.",
  },
  {
    question:
      "Find the odd one out: Second, Minute, Hour, Kilometer",
    options: ["Second", "Minute", "Hour", "Kilometer"],
    correct: 3,
    explanation:
      "Second, minute and hour are units of time. Kilometer is a unit of distance.",
  },
  {
    question:
      "Find the odd one out: Triangle, Square, Rectangle, Sphere",
    options: ["Triangle", "Square", "Rectangle", "Sphere"],
    correct: 3,
    explanation:
      "Triangle, square and rectangle are two-dimensional shapes. Sphere is a three-dimensional solid.",
  },
  {
    question:
      "Find the odd one out: Cricket, Football, Hockey, Chess",
    options: ["Cricket", "Football", "Hockey", "Chess"],
    correct: 3,
    explanation:
      "Cricket, football and hockey are physical field sports. Chess is a board game.",
  },
  {
    question:
      "Find the odd one out: January, February, April, Monday",
    options: ["January", "February", "April", "Monday"],
    correct: 3,
    explanation:
      "January, February and April are months. Monday is a weekday.",
  },
  {
    question:
      "Find the odd one out: Mercury, Venus, Earth, Moon",
    options: ["Mercury", "Venus", "Earth", "Moon"],
    correct: 3,
    explanation:
      "Mercury, Venus and Earth are planets. The Moon is Earth's natural satellite.",
  },
  {
    question:
      "Find the odd one out: Copper, Iron, Silver, Plastic",
    options: ["Copper", "Iron", "Silver", "Plastic"],
    correct: 3,
    explanation:
      "Copper, iron and silver are metals. Plastic is not a metal.",
  },
  {
    question:
      "Find the odd one out: Bus, Train, Car, Bridge",
    options: ["Bus", "Train", "Car", "Bridge"],
    correct: 3,
    explanation:
      "Bus, train and car are modes of transportation. A bridge is a structure used to cross an obstacle.",
  },
];

const getOptionLetter = (index) => String.fromCharCode(65 + index);

const Classification = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const question = readingQuestions[currentQuestion];
  const isAnswered = selectedAnswer !== null;
  const isLastQuestion =
    currentQuestion === readingQuestions.length - 1;

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
                  <strong>Classification / Odd One Out</strong>
                </nav>

        {/* Hero */}
        <section className="synonyms-hero">
          <div className="hero-icon">
            <FiBookOpen />
          </div>

          <div>
            <h1>Classification / Odd One Out</h1>
            <p>
              Learn how to identify the item that does not belong to a
              particular group using words, numbers, letters, objects,
              categories, and logical relationships.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>
             <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>What Is Classification?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Classification questions present a group of items where most
              follow the same rule or belong to the same category. Your task
              is to identify the item that does not fit.
            </p>

            <p>
              These questions measure observation, logical classification,
              vocabulary, numerical reasoning, and the ability to recognize
              relationships between different objects.
            </p>

            <div className="info-box">
              <FiInfo />
              <div>
                <strong>Key idea:</strong>
                <p>
                  Do not choose an answer simply because it looks different.
                  First identify the common relationship shared by the other
                  three items.
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
              <span className="section-label">CONCEPT</span>
              <h2>Types of Classification</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">

              <div className="concept-item">
                <h3>1. Word Classification</h3>
                <p>
                  Identify the word that belongs to a different category.
                  Example: Apple, Mango, Banana, Car → Car.
                </p>
              </div>

              <div className="concept-item">
                <h3>2. Number Classification</h3>
                <p>
                  Look for properties such as even/odd numbers, prime numbers,
                  squares, cubes, multiples, or divisibility.
                </p>
              </div>

              <div className="concept-item">
                <h3>3. Letter Classification</h3>
                <p>
                  Check alphabet positions, vowels and consonants, consecutive
                  letters, or common positional patterns.
                </p>
              </div>

              <div className="concept-item">
                <h3>4. Object Classification</h3>
                <p>
                  Determine whether objects belong to the same functional or
                  physical category.
                </p>
              </div>

              <div className="concept-item">
                <h3>5. Profession & Place</h3>
                <p>
                  Some questions mix professions, workplaces, institutions,
                  tools, or locations. Identify whether one item belongs to a
                  different category.
                </p>
              </div>

              <div className="concept-item">
                <h3>6. Logical Classification</h3>
                <p>
                  Some questions require a broader relationship, such as
                  planets versus satellites, units of measurement, or types of
                  sports.
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
              <h2>Practice Examples</h2>
            </div>
          </div>

          <div className="quick-question-grid">

            <div className="quick-question-card">
              <h3>Question 1</h3>
              <p>
                Apple, Mango, Banana, Car — which is the odd one out?
              </p>

              <div className="quick-answer">
                <FiCheckCircle />
                <span>Car</span>
              </div>
            </div>

            <div className="quick-question-card">
              <h3>Question 2</h3>
              <p>
                2, 4, 6, 9 — which is the odd one out?
              </p>

              <div className="quick-answer">
                <FiCheckCircle />
                <span>9</span>
              </div>
            </div>

            <div className="quick-question-card">
              <h3>Question 3</h3>
              <p>
                A, E, I, B — which is the odd one out?
              </p>

              <div className="quick-answer">
                <FiCheckCircle />
                <span>B</span>
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
              <h2>How to Improve Classification Accuracy</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Find the Common Rule</h3>
                <p>
                  Look for the property shared by three items before selecting
                  the odd one.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Check Categories First</h3>
                <p>
                  For word questions, quickly check whether the items are
                  animals, fruits, places, professions, objects, or units.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Check Numerical Properties</h3>
                <p>
                  For numbers, test even/odd, prime, square, cube, multiples,
                  and divisibility.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Check Alphabet Positions</h3>
                <p>
                  Convert letters into positions when necessary:
                  A = 1, B = 2, C = 3 and so on.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Do Not Overthink</h3>
                <p>
                  Intelligence-test classification questions usually have a
                  clear common relationship. Prefer the simplest valid rule.
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
              <h2>Classification Practice Questions</h2>
            </div>
          </div>

          <div className="reading-questions">
            {readingQuestions.map((item, index) => (
              <div className="reading-question" key={index}>

                <div className="reading-question-header">
                  <span className="reading-question-number">
                    Q{index + 1}
                  </span>

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

                      <span className="option-text">
                        {option}
                      </span>

                      {optionIndex === item.correct && (
                        <FiCheckCircle />
                      )}
                    </div>
                  ))}
                </div>

                <div className="reading-answer">
                  <strong>Correct Answer:</strong>{" "}
                  {getOptionLetter(item.correct)}.{" "}
                  {item.options[item.correct]}
                </div>

                <div className="reading-explanation">
                  <strong>Explanation:</strong>{" "}
                  {item.explanation}
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
                <span className="section-label">
                  Interactive MCQ Practice
                </span>
              </div>

              <h2>Test Your Classification Skills</h2>

              <p>
                Identify the odd item and receive instant feedback after
                selecting your answer.
              </p>
            </div>

            <div className="practice-progress">
              {currentQuestion + 1} / {readingQuestions.length}
            </div>
          </div>

          <div className="mcq-card">

            <div className="mcq-top">
              <span>
                Question {currentQuestion + 1}
              </span>

              <span>
                Score: {score}
              </span>
            </div>

            <h3>{question.question}</h3>

            <div className="mcq-options">
              {question.options.map((option, index) => {

                const isCorrect = index === question.correct;
                const isSelected = index === selectedAnswer;

                let optionClass = "mcq-option";

                if (isAnswered && isCorrect) {
                  optionClass += " correct";
                } else if (
                  isAnswered &&
                  isSelected &&
                  !isCorrect
                ) {
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

                    <span className="option-text">
                      {option}
                    </span>

                    {isAnswered && isCorrect && (
                      <FiCheckCircle />
                    )}

                    {isAnswered &&
                      isSelected &&
                      !isCorrect && <FiXCircle />}
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
                      <p>
                        Excellent. You identified the odd item correctly.
                      </p>
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
                  <strong>Explanation:</strong>{" "}
                  {question.explanation}
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
                You completed all {readingQuestions.length} Classification
                questions.
              </p>

              <div className="result-score">
                {score} / {readingQuestions.length}
              </div>

              <p>
                {score >= 25
                  ? "Excellent! Your classification and logical reasoning skills are strong."
                  : score >= 18
                  ? "Good work! Keep practicing to improve your speed and accuracy."
                  : "Keep practicing. Focus on identifying the common property shared by three items."}
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

            <Link to="/notes/verbal/direction-sense">
              <FiArrowRight />
              Direction Sense
            </Link>

            <Link to="/notes/verbal/analogies">
              <FiArrowRight />
              Analogies
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
};

export default Classification;
