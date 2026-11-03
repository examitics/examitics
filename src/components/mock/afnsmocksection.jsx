
import React, { useState } from "react";
import {
  FiBookOpen,
  FiX,
  FiCheckCircle
} from "react-icons/fi";

import MockTable from "./afnsmocktable";
import "../../styles/mock.css";

const AFNSMockSEO = () => {
  const faqs = [
    {
      question: "What is the AFNS initial test?",
      answer:
        "The Armed Forces Nursing Service (AFNS) initial selection process includes an initial assessment for eligible candidates. Candidates should consult the latest official Pakistan Army recruitment advertisement for the applicable test requirements and selection instructions."
    },
    {
      question: "Which subjects are covered in the EXAMITICS AFNS academic mock tests?",
      answer:
        "The EXAMITICS AFNS academic preparation section includes practice in Physics, Biology, Chemistry, and English. These subjects are organized to help candidates practise relevant academic questions."
    },
    {
      question: "Does EXAMITICS provide verbal and non-verbal AFNS mock tests?",
      answer:
        "Yes. The AFNS Mock Center includes Verbal and Non-Verbal intelligence practice categories, along with a separate Academic category."
    },
    {
      question: "How can I prepare for the AFNS initial test?",
      answer:
        "Build a consistent preparation routine. Practise verbal and non-verbal reasoning questions, revise the relevant academic subjects, attempt mock tests under timed conditions, and review your mistakes to identify areas that need more attention."
    },
    {
      question: "Are AFNS mock tests on EXAMITICS free?",
      answer:
        "The AFNS Mock Center provides an initial mock test in each category. Additional tests are marked as premium where applicable. Access to premium tests requires an eligible EXAMITICS Premium subscription."
    },
    {
      question: "Are EXAMITICS AFNS mock tests official Pakistan Army tests?",
      answer:
        "No. EXAMITICS is an independent exam-preparation platform. Its AFNS mock tests are practice resources and are not official examinations issued by the Pakistan Army."
    },
    {
      question: "Do AFNS mock tests guarantee selection?",
      answer:
        "No. Mock tests are intended to support preparation and self-assessment. They cannot guarantee selection or success in the actual recruitment process."
    }
  ];

  const preparationSteps = [
    "Start with verbal intelligence practice.",
    "Practise non-verbal reasoning questions.",
    "Revise Physics, Biology, Chemistry, and English.",
    "Attempt academic mock tests under timed conditions.",
    "Review mistakes and revise difficult topics."
  ];

  return (
    <div className="mock-seo-content">

      {/* INTRODUCTION */}
      <div className="mock-seo-intro">
        <span className="mock-seo-label">
          AFNS INITIAL TEST PREPARATION
        </span>

        <h2>
          AFNS Initial Test Preparation – Online Mock Tests
        </h2>

        <p>
          Preparing for the Armed Forces Nursing Service (AFNS) initial
          test requires a balanced approach to intelligence practice
          and academic revision. Candidates should develop familiarity
          with different question types while strengthening their
          understanding of relevant academic subjects.
        </p>

        <p>
          The EXAMITICS AFNS Mock Center provides online practice tests
          in Verbal, Non-Verbal, and Academic categories. Candidates
          can use these tests to practise questions, assess their
          preparation, and identify topics that require further study.
        </p>
      </div>

      {/* TEST CATEGORIES */}
      <div className="mock-seo-block">
        <h3>What Is Included in the AFNS Mock Test Series?</h3>

        <p>
          The AFNS mock-test section is organized into three main
          categories to support different areas of initial test
          preparation.
        </p>

        <div className="mock-seo-category-grid">

          <article className="mock-seo-category">
            <span className="mock-seo-category-number">01</span>

            <h4>Verbal Intelligence</h4>

            <p>
              Practise language-based reasoning questions, identify
              relationships between words and concepts, and improve
              your ability to solve verbal problems accurately.
            </p>
          </article>

          <article className="mock-seo-category">
            <span className="mock-seo-category-number">02</span>

            <h4>Non-Verbal Intelligence</h4>

            <p>
              Work on visual reasoning questions involving figures,
              shapes, patterns, sequences, and logical relationships.
              Regular practice can help improve familiarity with
              visual problem-solving tasks.
            </p>
          </article>

          <article className="mock-seo-category">
            <span className="mock-seo-category-number">03</span>

            <h4>Academic Preparation</h4>

            <p>
              Practise academic questions in Physics, Biology,
              Chemistry, and English. Use these tests to review
              concepts and identify subjects that need additional
              revision.
            </p>
          </article>

        </div>
      </div>

      {/* ACADEMIC SUBJECTS */}
      <div className="mock-seo-block">
        <h3>AFNS Academic Test Preparation Subjects</h3>

        <p>
          Academic preparation is an important part of your study
          routine. The EXAMITICS AFNS academic mock-test category
          provides practice across the following subjects:
        </p>

        <ul className="mock-seo-tips">
          <li>
            <strong>Physics:</strong> Revise important concepts,
            formulas, basic principles, and numerical problem-solving.
          </li>

          <li>
            <strong>Biology:</strong> Review biological concepts,
            terminology, human biology, and other relevant topics
            from your academic studies.
          </li>

          <li>
            <strong>Chemistry:</strong> Practise fundamental concepts,
            chemical terminology, equations, and subject-related
            questions.
          </li>

          <li>
            <strong>English:</strong> Improve grammar, vocabulary,
            sentence structure, and comprehension through regular
            practice.
          </li>
        </ul>

        <p>
          Use your mock-test performance to decide which subjects
          require more revision. For the latest official syllabus
          and test requirements, always consult the relevant
          recruitment advertisement and instructions.
        </p>
      </div>

      {/* HOW TO USE */}
      <div className="mock-seo-block">
        <h3>How to Use EXAMITICS AFNS Mock Tests</h3>

        <p>
          Follow a structured approach when attempting the AFNS
          practice tests. Instead of focusing only on completing
          questions, use each attempt to understand your preparation
          level.
        </p>

        <ol className="mock-seo-steps">
          {preparationSteps.map((step, index) => (
            <li key={index}>
              <span className="mock-seo-step-icon">
                <FiCheckCircle />
              </span>

              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* PREPARATION TIPS */}
      <div className="mock-seo-block">
        <h3>Preparation Tips for AFNS Candidates</h3>

        <ul className="mock-seo-tips">
          <li>
            <strong>Balance your preparation:</strong> Give attention
            to intelligence practice and academic revision rather
            than focusing on only one category.
          </li>

          <li>
            <strong>Revise science subjects:</strong> Regularly review
            Physics, Biology, and Chemistry concepts from your
            academic studies.
          </li>

          <li>
            <strong>Improve English:</strong> Practise grammar,
            vocabulary, and comprehension consistently.
          </li>

          <li>
            <strong>Practise reasoning:</strong> Attempt both verbal
            and non-verbal questions to become familiar with different
            reasoning formats.
          </li>

          <li>
            <strong>Review your performance:</strong> Identify
            incorrect answers and revise the concepts behind them.
          </li>

          <li>
            <strong>Follow official instructions:</strong> Check
            the latest recruitment advertisement for eligibility,
            syllabus, and selection requirements.
          </li>
        </ul>
      </div>

      {/* TARGET AUDIENCE */}
      <div className="mock-seo-block">
        <h3>Who Should Attempt These AFNS Mock Tests?</h3>

        <p>
          These mock tests are intended for candidates preparing
          for AFNS recruitment who want to practise intelligence
          questions and review academic subjects through online
          assessments.
        </p>

        <p>
          Candidates beginning their preparation can use the tests
          to become familiar with different question formats.
          Candidates who have already studied the relevant subjects
          can use them to assess their progress and identify areas
          that need additional practice.
        </p>
      </div>

      {/* FAQ */}
      <div className="mock-seo-faq">
        <h3>Frequently Asked Questions – AFNS Mock Tests</h3>

        {faqs.map((faq, index) => (
          <details className="mock-seo-faq-item" key={index}>
            <summary>{faq.question}</summary>

            <p>{faq.answer}</p>
          </details>
        ))}
      </div>

      {/* CONCLUSION */}
      <div className="mock-seo-conclusion">
        <h3>Prepare for AFNS with Consistent Practice</h3>

        <p>
          Start practising with the available AFNS mock tests.
          Work on verbal and non-verbal reasoning, revise your
          academic subjects, and use your results to guide your
          preparation. A consistent study routine can help you
          approach your preparation in a more organized way.
        </p>
      </div>

    </div>
  );
};

const MockSection = ({ title, examCode }) => {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <section className="mock-section exa-card">

      {/* HEADER */}
      <div className="mock-section-header">
        <div>
          <span className="mock-section-tag">
            MOCK TEST SERIES
          </span>

          <h2>{title}</h2>
        </div>

        <button
          type="button"
          className="afns-syllabus-trigger"
          onClick={() => setShowSyllabus(true)}
          aria-label="View AFNS initial test syllabus"
        >
          <FiBookOpen />
          <span>AFNS Initial Test Syllabus</span>
        </button>
      </div>

      {/* AFNS SYLLABUS IMAGE */}
      {showSyllabus && (
        <div
          className="afns-syllabus-image-overlay"
          onClick={() => setShowSyllabus(false)}
        >
          <div
            className="afns-syllabus-image-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="afns-syllabus-image-close"
              onClick={() => setShowSyllabus(false)}
              aria-label="Close AFNS syllabus"
            >
              <FiX />
            </button>

            <img
              src="/images/afns-syllabus.webp"
              alt="AFNS Initial Test Syllabus"
              className="afns-syllabus-image"
            />
          </div>
        </div>
      )}

      <div style={{ marginBottom: "20px" }} />

      {/* AFNS MOCK TEST TABLE */}
      <MockTable examCode={examCode} />

      {/* AFNS AEO / GEO CONTENT */}
      <AFNSMockSEO />

    </section>
  );
};

export default MockSection;
