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

const bloodRelationQuestions = [
  {
    question:
      "Ali is the son of Ahmed. Ahmed is the brother of Bilal. How is Bilal related to Ali?",
    options: ["Father", "Uncle", "Brother", "Cousin"],
    correct: 1,
    explanation:
      "Ahmed is Ali's father, and Bilal is Ahmed's brother. Therefore, Bilal is Ali's uncle.",
  },
  {
    question:
      "Sara is the daughter of Hamid. Hamid is the son of Rashid. How is Rashid related to Sara?",
    options: ["Father", "Grandfather", "Uncle", "Brother"],
    correct: 1,
    explanation:
      "Hamid is Sara's father and Rashid is Hamid's father. Therefore, Rashid is Sara's grandfather.",
  },
  {
    question:
      "Ayesha is the sister of Bilal. Bilal is the son of Kamran. How is Kamran related to Ayesha?",
    options: ["Father", "Brother", "Uncle", "Grandfather"],
    correct: 0,
    explanation:
      "Bilal and Ayesha are siblings, and Bilal is Kamran's son. Therefore, Kamran is Ayesha's father.",
  },
  {
    question:
      "Usman is the brother of Fatima. Fatima is the mother of Hassan. How is Usman related to Hassan?",
    options: ["Father", "Brother", "Uncle", "Grandfather"],
    correct: 2,
    explanation:
      "Fatima is Hassan's mother and Usman is Fatima's brother. Therefore, Usman is Hassan's maternal uncle.",
  },
  {
    question:
      "Zain is the father of Ahmed. Ahmed is the father of Ali. How is Zain related to Ali?",
    options: ["Father", "Uncle", "Grandfather", "Brother"],
    correct: 2,
    explanation:
      "Zain is Ahmed's father, and Ahmed is Ali's father. Therefore, Zain is Ali's grandfather.",
  },
  {
    question:
      "Hina is the mother of Sana. Sana is the sister of Omar. How is Hina related to Omar?",
    options: ["Aunt", "Mother", "Sister", "Grandmother"],
    correct: 1,
    explanation:
      "Sana and Omar are siblings, and Hina is Sana's mother. Therefore, Hina is also Omar's mother.",
  },
  {
    question:
      "Ahmed is the brother of Sara. Sara is the mother of Hamza. How is Ahmed related to Hamza?",
    options: ["Father", "Uncle", "Brother", "Grandfather"],
    correct: 1,
    explanation:
      "Sara is Hamza's mother and Ahmed is Sara's brother. Therefore, Ahmed is Hamza's maternal uncle.",
  },
  {
    question:
      "Bilal is the son of Nadia. Nadia is the sister of Rehan. How is Rehan related to Bilal?",
    options: ["Father", "Brother", "Uncle", "Grandfather"],
    correct: 2,
    explanation:
      "Nadia is Bilal's mother and Rehan is Nadia's brother. Therefore, Rehan is Bilal's maternal uncle.",
  },
  {
    question:
      "A man says, 'She is the daughter of my father's only son.' Who is the girl to the man?",
    options: ["Sister", "Daughter", "Niece", "Cousin"],
    correct: 1,
    explanation:
      "The father's only son is the man himself. Therefore, the girl is the man's daughter.",
  },
  {
    question:
      "A woman says, 'He is the son of my mother's only daughter.' Who is the boy to the woman?",
    options: ["Brother", "Son", "Nephew", "Cousin"],
    correct: 1,
    explanation:
      "The mother's only daughter is the woman herself. Therefore, the boy is her son.",
  },
  {
    question:
      "A is the brother of B. B is the sister of C. How is A related to C?",
    options: ["Brother", "Father", "Uncle", "Cousin"],
    correct: 0,
    explanation:
      "A and B are siblings, and B and C are siblings. Therefore, A and C are siblings. Since A is male, A is C's brother.",
  },
  {
    question:
      "M is the mother of N. N is the father of P. How is M related to P?",
    options: ["Mother", "Aunt", "Grandmother", "Sister"],
    correct: 2,
    explanation:
      "M is N's mother and N is P's father. Therefore, M is P's grandmother.",
  },
  {
    question:
      "Q is the daughter of R. S is the brother of R. How is S related to Q?",
    options: ["Father", "Brother", "Uncle", "Grandfather"],
    correct: 2,
    explanation:
      "R is Q's parent and S is R's brother. Therefore, S is Q's uncle.",
  },
  {
    question:
      "T is the father of U. V is the sister of U. How is V related to T?",
    options: ["Daughter", "Sister", "Mother", "Aunt"],
    correct: 0,
    explanation:
      "U is T's child and V is U's sister. Therefore, V is also T's daughter.",
  },
  {
    question:
      "W is the brother of X. X is the mother of Y. How is W related to Y?",
    options: ["Father", "Brother", "Uncle", "Grandfather"],
    correct: 2,
    explanation:
      "X is Y's mother and W is X's brother. Therefore, W is Y's maternal uncle.",
  },
  {
    question:
      "A is the father of B. B is the sister of C. How is A related to C?",
    options: ["Father", "Uncle", "Brother", "Grandfather"],
    correct: 0,
    explanation:
      "B and C are siblings, and A is B's father. Therefore, A is also C's father.",
  },
  {
    question:
      "P is the mother of Q. Q is the brother of R. How is P related to R?",
    options: ["Mother", "Aunt", "Sister", "Grandmother"],
    correct: 0,
    explanation:
      "Q and R are siblings, and P is Q's mother. Therefore, P is also R's mother.",
  },
  {
    question:
      "A man points to a woman and says, 'Her mother is the only daughter of my mother.' How is the woman related to the man?",
    options: ["Sister", "Daughter", "Niece", "Cousin"],
    correct: 2,
    explanation:
      "The only daughter of the man's mother is the man's sister. The woman is her daughter, making her the man's niece.",
  },
  {
    question:
      "A woman points to a boy and says, 'He is the son of my only brother.' How is the boy related to the woman?",
    options: ["Son", "Nephew", "Brother", "Cousin"],
    correct: 1,
    explanation:
      "The boy is the son of the woman's brother. Therefore, he is her nephew.",
  },
  {
    question:
      "If A is the father of B and B is the father of C, how many generations are there between A and C?",
    options: ["One", "Two", "Three", "Four"],
    correct: 0,
    explanation:
      "A is C's grandfather. There is one generation between A and C: B.",
  },
  {
    question:
      "If X is the sister of Y and Y is the father of Z, how is X related to Z?",
    options: ["Mother", "Aunt", "Sister", "Grandmother"],
    correct: 1,
    explanation:
      "Y is Z's father and X is Y's sister. Therefore, X is Z's paternal aunt.",
  },
  {
    question:
      "A is the daughter of B. C is the husband of A. How is C related to B?",
    options: ["Son-in-law", "Brother", "Father", "Uncle"],
    correct: 0,
    explanation:
      "A is B's daughter and C is A's husband. Therefore, C is B's son-in-law.",
  },
  {
    question:
      "D is the son of E. F is the wife of D. How is F related to E?",
    options: ["Daughter", "Daughter-in-law", "Sister", "Mother"],
    correct: 1,
    explanation:
      "D is E's son and F is D's wife. Therefore, F is E's daughter-in-law.",
  },
  {
    question:
      "G is the father of H. I is the wife of H. How is I related to G?",
    options: ["Daughter", "Daughter-in-law", "Sister", "Niece"],
    correct: 1,
    explanation:
      "H is G's son and I is H's wife. Therefore, I is G's daughter-in-law.",
  },
  {
    question:
      "J is the mother of K. L is the husband of J. How is L related to K?",
    options: ["Brother", "Father", "Uncle", "Grandfather"],
    correct: 1,
    explanation:
      "J is K's mother and L is J's husband. Therefore, L is K's father.",
  },
  {
    question:
      "M is the sister of N. N is the son of O. How is M related to O?",
    options: ["Daughter", "Sister", "Mother", "Aunt"],
    correct: 0,
    explanation:
      "N is O's son and M is N's sister. Therefore, M is O's daughter.",
  },
  {
    question:
      "P is the brother of Q. R is the daughter of Q. How is P related to R?",
    options: ["Father", "Uncle", "Brother", "Grandfather"],
    correct: 1,
    explanation:
      "Q is R's parent and P is Q's brother. Therefore, P is R's uncle.",
  },
  {
    question:
      "S is the daughter of T. U is the brother of S. How is U related to T?",
    options: ["Son", "Brother", "Father", "Uncle"],
    correct: 0,
    explanation:
      "S is T's daughter and U is S's brother. Therefore, U is T's son.",
  },
  {
    question:
      "V is the father of W. W is the sister of X. How is V related to X?",
    options: ["Father", "Uncle", "Brother", "Grandfather"],
    correct: 0,
    explanation:
      "W and X are siblings, and V is W's father. Therefore, V is also X's father.",
  },
  {
    question:
      "Y is the mother of Z. Z is the husband of A. How is Y related to A?",
    options: ["Mother", "Mother-in-law", "Sister", "Aunt"],
    correct: 1,
    explanation:
      "Z is Y's son and A is Z's wife. Therefore, Y is A's mother-in-law.",
  },
  {
    question:
      "B is the father of C. D is the mother of C. How is B related to D?",
    options: ["Brother", "Husband", "Son", "Father"],
    correct: 1,
    explanation:
      "B is C's father and D is C's mother. In this family relationship, B and D are husband and wife.",
  },
  {
    question:
      "A is the brother of B. B is the father of C. C is the sister of D. How is A related to D?",
    options: ["Father", "Brother", "Uncle", "Grandfather"],
    correct: 2,
    explanation:
      "B is D's father and A is B's brother. Therefore, A is D's paternal uncle.",
  },
];

const getOptionLetter = (index) => String.fromCharCode(65 + index);

const BloodRelations = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const question = bloodRelationQuestions[currentQuestion];
  const isAnswered = selectedAnswer !== null;
  const isLastQuestion =
    currentQuestion === bloodRelationQuestions.length - 1;

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
                  <strong>Blood Relations</strong>
                </nav>

        {/* Hero */}
        <section className="synonyms-hero">
          <div className="synonyms-hero-icon">
            <FiBookOpen />
          </div>

          <div>
            <h1>Blood Relations</h1>
            <p>
              Learn how to identify family relationships, generations,
              indirect relations, and coded family connections quickly and
              accurately.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>What are blood relations questions?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Blood Relation questions test your ability to understand and
              analyze relationships between members of a family.
            </p>

            <p>
              These questions are common in verbal intelligence and reasoning
              tests. The key is to identify the relationship step by step
              instead of trying to solve the entire family tree mentally at
              once.
            </p>

            <div className="info-box">
              <FiInfo />
              <div>
                <strong>Basic Family Relations:</strong>
                <p>
                  Father, mother, son, daughter, brother, sister, uncle, aunt,
                  nephew, niece, grandfather, grandmother, grandson,
                  granddaughter, husband and wife are common relationships
                  tested in intelligence exams.
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
              <h2>Important Rules & Concepts</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">

              <div className="concept-item">
                <h3>1. Identify the Direct Relationship</h3>
                <p>
                  Start with the relationship directly given in the question.
                  For example, if A is the son of B, immediately establish
                  that B is A's parent.
                </p>
              </div>

              <div className="concept-item">
                <h3>2. Move One Relationship at a Time</h3>
                <p>
                  Never jump directly to the final answer. Follow every
                  relationship step by step until you reach the required
                  person.
                </p>
              </div>

              <div className="concept-item">
                <h3>3. Understand Generations</h3>
                <p>
                  Parents are one generation above their children. Grandparents
                  are two generations above. This helps solve multi-level
                  family relationships quickly.
                </p>
              </div>

              <div className="concept-item">
                <h3>4. Sibling Relationships</h3>
                <p>
                  If two people have the same parents, they are siblings.
                  A male sibling is a brother and a female sibling is a sister.
                </p>
              </div>

              <div className="concept-item">
                <h3>5. Uncle and Aunt</h3>
                <p>
                  A parent's brother is an uncle, while a parent's sister is
                  an aunt. Always determine whether the sibling belongs to the
                  father or mother when necessary.
                </p>
              </div>

              <div className="concept-item">
                <h3>6. In-Law Relationships</h3>
                <p>
                  The husband of a daughter is a son-in-law, the wife of a son
                  is a daughter-in-law, and the mother of a spouse is a
                  mother-in-law.
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
                Ahmed is the son of Bilal. How is Bilal related to Ahmed?
              </p>

              <div className="quick-answer">
                <FiCheckCircle />
                <span>Father</span>
              </div>
            </div>

            <div className="quick-question-card">
              <h3>Question 2</h3>
              <p>
                Sara is the daughter of Hamid. Hamid is the son of Rashid.
                How is Rashid related to Sara?
              </p>

              <div className="quick-answer">
                <FiCheckCircle />
                <span>Grandfather</span>
              </div>
            </div>

            <div className="quick-question-card">
              <h3>Question 3</h3>
              <p>
                Ali's mother's brother is related to Ali as his what?
              </p>

              <div className="quick-answer">
                <FiCheckCircle />
                <span>Maternal Uncle</span>
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
              <h2>How to Improve Accuracy</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Start With the Main Person</h3>
                <p>
                  Identify the person whose relationship is being asked and
                  work backward or forward from that person.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Follow Each Link</h3>
                <p>
                  Break long statements into smaller relationships. Solve one
                  relationship at a time.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Track Gender Carefully</h3>
                <p>
                  Words such as son, daughter, brother, sister, husband and
                  wife provide important gender information.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Use a Family Tree</h3>
                <p>
                  For complicated questions, quickly draw a simple family tree
                  instead of keeping every relationship in your memory.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />
              <div>
                <h3>Watch for "Only Son" or "Only Daughter"</h3>
                <p>
                  These words can completely change the relationship. Read
                  statements containing only, sole, or single carefully.
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
              <h2>Blood Relations Practice Questions</h2>
            </div>
          </div>

          <div className="reading-questions">

            {bloodRelationQuestions.map((item, index) => (
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

              <h2>Test Your Blood Relations Skills</h2>

              <p>
                Answer each question to receive instant feedback and improve
                your speed and accuracy.
              </p>
            </div>

            <div className="practice-progress">
              {currentQuestion + 1} / {bloodRelationQuestions.length}
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
                        Excellent. You selected the correct answer.
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
                You completed all {bloodRelationQuestions.length} Blood
                Relations questions.
              </p>

              <div className="result-score">
                {score} / {bloodRelationQuestions.length}
              </div>

              <p>
                {score >= 25
                  ? "Excellent! Your blood relation and family reasoning skills are strong."
                  : score >= 18
                  ? "Good work! Keep practicing to improve your speed and accuracy."
                  : "Keep practicing. Focus on generations, siblings, parents, and indirect relationships."}
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

            <Link to="/notes/verbal/direction-sense">
              <FiArrowRight />
              Direction Sense
            </Link>

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

          </div>
        </section>

      </div>
    </main>
  );
};

export default BloodRelations;