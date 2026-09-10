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
    question: "Bird : Fly :: Fish : ?",
    options: ["Run", "Swim", "Jump", "Crawl"],
    correct: 1,
    explanation:
      "A bird moves through the air by flying. Similarly, a fish moves through water by swimming.",
  },
  {
    question: "Pen : Write :: Knife : ?",
    options: ["Cut", "Draw", "Read", "Open"],
    correct: 0,
    explanation:
      "A pen is used for writing. Similarly, a knife is used for cutting.",
  },
  {
    question: "Teacher : School :: Doctor : ?",
    options: ["Market", "Hospital", "Factory", "Court"],
    correct: 1,
    explanation:
      "A teacher generally works in a school. Similarly, a doctor generally works in a hospital.",
  },
  {
    question: "Finger : Hand :: Toe : ?",
    options: ["Leg", "Foot", "Arm", "Head"],
    correct: 1,
    explanation:
      "A finger is a part of a hand. Similarly, a toe is a part of a foot.",
  },
  {
    question: "Dog : Puppy :: Cat : ?",
    options: ["Calf", "Cub", "Kitten", "Foal"],
    correct: 2,
    explanation:
      "A young dog is called a puppy. A young cat is called a kitten.",
  },
  {
    question: "Gold : Ring :: Cotton : ?",
    options: ["Shirt", "Spoon", "Bottle", "Glass"],
    correct: 0,
    explanation:
      "Gold is commonly used to make rings. Cotton is commonly used to make shirts.",
  },
  {
    question: "Book : Read :: Food : ?",
    options: ["Cook", "Eat", "Buy", "Sell"],
    correct: 1,
    explanation:
      "A book is read. Food is eaten.",
  },
  {
    question: "Eye : See :: Ear : ?",
    options: ["Touch", "Hear", "Smell", "Taste"],
    correct: 1,
    explanation:
      "The eye is used for seeing. The ear is used for hearing.",
  },
  {
    question: "Knife : Cut :: Needle : ?",
    options: ["Sew", "Write", "Paint", "Dig"],
    correct: 0,
    explanation:
      "A knife is a tool used for cutting. A needle is a tool used for sewing.",
  },
  {
    question: "Lion : Den :: Bird : ?",
    options: ["Nest", "Cage", "Stable", "Burrow"],
    correct: 0,
    explanation:
      "A den is the natural home or shelter of a lion. A nest is the home or shelter of a bird.",
  },
  {
    question: "Hot : Cold :: Day : ?",
    options: ["Light", "Night", "Morning", "Sun"],
    correct: 1,
    explanation:
      "Hot and cold are opposites. Similarly, day and night are opposites.",
  },
  {
    question: "Happy : Sad :: Victory : ?",
    options: ["Success", "Defeat", "Prize", "Honor"],
    correct: 1,
    explanation:
      "Happy and sad are opposite states. Victory and defeat are also opposites.",
  },
  {
    question: "Huge : Large :: Tiny : ?",
    options: ["Small", "Wide", "Tall", "Heavy"],
    correct: 0,
    explanation:
      "Huge and large have similar meanings. Tiny and small also have similar meanings.",
  },
  {
    question: "Begin : Start :: End : ?",
    options: ["Open", "Finish", "Continue", "Move"],
    correct: 1,
    explanation:
      "Begin and start are synonyms. End and finish are also synonyms.",
  },
  {
    question: "Teacher : Teach :: Farmer : ?",
    options: ["Drive", "Farm", "Build", "Sing"],
    correct: 1,
    explanation:
      "The main activity of a teacher is to teach. The main activity of a farmer is to farm or cultivate land.",
  },
  {
    question: "Soldier : Army :: Sailor : ?",
    options: ["Air Force", "Navy", "Police", "Court"],
    correct: 1,
    explanation:
      "A soldier serves in the army. A sailor serves in the navy.",
  },
  {
    question: "Car : Road :: Ship : ?",
    options: ["Sky", "Railway", "Sea", "Garage"],
    correct: 2,
    explanation:
      "A car normally travels on a road. A ship normally travels on the sea.",
  },
  {
    question: "Aeroplane : Airport :: Train : ?",
    options: ["Station", "Harbor", "Garage", "Market"],
    correct: 0,
    explanation:
      "Aeroplanes arrive at and depart from airports. Trains arrive at and depart from stations.",
  },
  {
    question: "Cow : Calf :: Horse : ?",
    options: ["Puppy", "Foal", "Kitten", "Lamb"],
    correct: 1,
    explanation:
      "A young cow is called a calf. A young horse is called a foal.",
  },
  {
    question: "Wood : Furniture :: Clay : ?",
    options: ["Pottery", "Paper", "Cloth", "Glass"],
    correct: 0,
    explanation:
      "Wood is a material used to make furniture. Clay is a material used to make pottery.",
  },
  {
    question: "Doctor : Patient :: Teacher : ?",
    options: ["Student", "Farmer", "Driver", "Soldier"],
    correct: 0,
    explanation:
      "A doctor provides professional care to a patient. A teacher provides education to a student.",
  },
  {
    question: "Seed : Plant :: Egg : ?",
    options: ["Tree", "Bird", "Fruit", "Leaf"],
    correct: 1,
    explanation:
      "A seed can develop into a plant. An egg can develop into a bird.",
  },
  {
    question: "Fish : Water :: Bird : ?",
    options: ["Ground", "Air", "Tree", "Cave"],
    correct: 1,
    explanation:
      "Fish live and move in water. Birds live and move primarily through the air.",
  },
  {
    question: "Clock : Time :: Thermometer : ?",
    options: ["Distance", "Temperature", "Weight", "Speed"],
    correct: 1,
    explanation:
      "A clock measures time. A thermometer measures temperature.",
  },
  {
    question: "Scale : Weight :: Ruler : ?",
    options: ["Length", "Temperature", "Speed", "Time"],
    correct: 0,
    explanation:
      "A scale is used to measure weight. A ruler is used to measure length.",
  },
  {
    question: "Water : Thirst :: Food : ?",
    options: ["Sleep", "Hunger", "Heat", "Cold"],
    correct: 1,
    explanation:
      "Water satisfies thirst. Food satisfies hunger.",
  },
  {
    question: "Fire : Heat :: Ice : ?",
    options: ["Cold", "Smoke", "Light", "Water"],
    correct: 0,
    explanation:
      "Fire is associated with heat. Ice is associated with cold.",
  },
  {
    question: "Army : Soldier :: Team : ?",
    options: ["Player", "Coach", "Referee", "Captain"],
    correct: 0,
    explanation:
      "A soldier is a member of an army. A player is a member of a team.",
  },
  {
    question: "Pakistan : Islamabad :: Turkey : ?",
    options: ["Istanbul", "Ankara", "Izmir", "Bursa"],
    correct: 1,
    explanation:
      "Islamabad is the capital of Pakistan. Ankara is the capital of Turkey.",
  },
  {
    question: "2 : 4 :: 5 : ?",
    options: ["7", "8", "10", "12"],
    correct: 2,
    explanation:
      "The relationship is multiplication by 2: 2 × 2 = 4. Therefore, 5 × 2 = 10.",
  },
];

const quickQuestions = [
  {
    question: "Bird : Fly :: Fish : ?",
    answer: "Swim",
    explanation: "A bird flies, while a fish swims.",
  },
  {
    question: "Eye : See :: Ear : ?",
    answer: "Hear",
    explanation: "The eye is used for seeing and the ear is used for hearing.",
  },
  {
    question: "Teacher : School :: Doctor : ?",
    answer: "Hospital",
    explanation:
      "A teacher is associated with a school, while a doctor is associated with a hospital.",
  },
];

const getOptionLetter = (index) => String.fromCharCode(65 + index);

const Analogies = () => {
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

        {/* =========================
            BREADCRUMB
        ========================= */}

        <nav className="synonyms-breadcrumb">
          <Link to="/notes">Notes Hub</Link>
          <FiArrowRight />
          <Link to="/notes">Verbal Intelligence</Link>
          <FiArrowRight />
          <strong>Analogies</strong>
        </nav>

        {/* =========================
            HERO
        ========================= */}

        <section className="synonyms-hero">
          <div className="synonyms-hero-icon">
            <FiBookOpen />
          </div>

          <div className="synonyms-hero-content">
            <span className="synonyms-eyebrow">
              VERBAL INTELLIGENCE
            </span>

            <h1>Analogies</h1>

            <p>
              Learn how to identify relationships between words and apply
              the same relationship to another pair. This topic develops
              logical thinking, vocabulary, and verbal reasoning skills
              useful for competitive intelligence-test preparation.
            </p>
          </div>
        </section>

        {/* =========================
            INTRODUCTION
        ========================= */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>What Is an Analogy?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              An <strong>analogy</strong> is a comparison between two pairs
              of words that have the same type of relationship.
            </p>

            <p>
              In verbal intelligence questions, you are usually given a
              pair of related words followed by another word. Your task is
              to identify the relationship in the first pair and find the
              option that creates the same relationship in the second pair.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Simple Example</strong>
                <p>Bird : Fly :: Fish : Swim</p>
                <span>
                  A bird flies, just as a fish swims.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            CONCEPT
        ========================= */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">02</span>

            <div>
              <span className="section-label">CONCEPT</span>
              <h2>How to Solve Analogy Questions</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">

              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Identify the First Relationship</h3>
                  <p>
                    Look carefully at the first pair and determine exactly
                    how the two words are connected.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Express the Relationship</h3>
                  <p>
                    Try to describe the relationship in a short sentence.
                    For example, "A pen is used to write."
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Apply the Same Relationship</h3>
                  <p>
                    Use the same relationship with the second word and
                    compare it against all available options.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Choose the Best Match</h3>
                  <p>
                    Select the option that creates the closest and most
                    logical relationship with the given word.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================
            QUICK PRACTICE
        ========================= */}

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

        {/* =========================
            EXAM STRATEGY
        ========================= */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">04</span>

            <div>
              <span className="section-label">EXAM STRATEGY</span>
              <h2>Tips for Solving Analogies</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Find the Exact Relationship</strong>

                <p>
                  Do not choose an option simply because the words seem
                  related. Identify the precise relationship first.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiBookOpen />

              <div>
                <strong>Use a Short Sentence</strong>

                <p>
                  Turn the first pair into a simple sentence. Then test
                  the same sentence against the answer choices.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>Eliminate Weak Options</strong>

                <p>
                  Remove choices that have a different relationship and
                  compare the remaining options carefully.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================
            READING QUESTIONS
        ========================= */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">05</span>

            <div>
              <span className="section-label">READING QUESTIONS</span>
              <h2>Analogy Practice Questions</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Study the following analogy questions carefully. The correct
              answer and explanation are shown after each question so you
              can understand the relationship being tested.
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

        {/* =========================
            INTERACTIVE PRACTICE
        ========================= */}

        <section className="practice-section">
          <div className="practice-header">
            <div>
              <span className="section-label">
                INTERACTIVE PRACTICE
              </span>

              <h2>Test Your Analogy Skills</h2>

              <p>
                Answer each question to receive immediate feedback.
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

              <h2>Analogy Practice Result</h2>

              <div className="result-score">
                <strong>{score}</strong>
                <span> / {mcqs.length}</span>
              </div>

              <p>
                You completed all {mcqs.length} analogy questions.
                Review the explanations and practice again to improve
                your accuracy and speed.
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

        {/* =========================
            RELATED TOPICS
        ========================= */}

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
};

export default Analogies;

