
import React, { useState } from "react";
import { FiBookOpen, FiX, FiCheckCircle } from "react-icons/fi";

import MockTable from "./pmamocktable";
import "../../styles/mock.css";

const PMAMockSEO = () => {
  const faqs = [
    {
      question: "What are PMA Long Course mock tests?",
      answer:
        "PMA Long Course mock tests are practice assessments designed to help candidates prepare for the initial academic and intelligence tests. They provide an opportunity to practise questions, evaluate preparation, and identify areas that need improvement."
    },
    {
      question: "Which categories of PMA mock tests are available on EXAMITICS?",
      answer:
        "The EXAMITICS PMA Mock Center organizes practice tests into three categories: Verbal, Non-Verbal, and Academics. Candidates can select a category and attempt the available mock tests."
    },
    {
      question: "Are PMA mock tests available for free?",
      answer:
        "The PMA Mock Center includes an accessible first mock test in each category. Additional mock tests are marked as premium where applicable. Access to premium tests requires an eligible Premium subscription."
    },
    {
      question: "How should I use PMA mock tests for preparation?",
      answer:
        "Attempt a mock test under timed conditions, review your result, identify questions or topics that caused difficulty, and practise those areas before attempting another test. Consistent practice can help improve familiarity with question formats and time management."
    },
    {
      question: "Do EXAMITICS mock tests guarantee success in the PMA initial test?",
      answer:
        "No. Mock tests are preparation resources and do not guarantee selection or success. Your performance in the actual recruitment process depends on your preparation and performance in the relevant selection stages."
    },
    {
      question: "Are EXAMITICS mock tests official Pakistan Army tests?",
      answer:
        "No. EXAMITICS is an independent exam-preparation platform. Its mock tests are practice resources and are not official tests issued by the Pakistan Army."
    }
  ];

  const preparationSteps = [
    "Choose a mock-test category.",
    "Attempt questions independently.",
    "Follow the test time limit.",
    "Review your performance.",
    "Practise your weaker areas."
  ];

  return (
    <div className="mock-seo-content">
      <div className="mock-seo-intro">
        <span className="mock-seo-label">PMA LONG COURSE PREPARATION</span>

        <h2>
          PMA Long Course Initial Test Preparation – Online Mock Tests
        </h2>

        <p>
          Preparing for the Pakistan Military Academy (PMA) Long Course
          initial test requires regular practice, familiarity with different
          question formats, and effective time management. The EXAMITICS PMA
          Mock Center provides online practice tests in Verbal, Non-Verbal,
          and Academic categories to help candidates assess their preparation.
        </p>

        <p>
          Candidates can use these mock tests to practise questions, become
          more familiar with online test-taking, and identify areas that
          require further attention before their actual initial test.
        </p>
      </div>

      <div className="mock-seo-block">
        <h3>What Is Included in the PMA Mock Test Series?</h3>

        <p>
          The PMA Long Course mock-test section on EXAMITICS is divided into
          three practice categories. Each category focuses on a different
          area of preparation.
        </p>

        <div className="mock-seo-category-grid">
          <article className="mock-seo-category">
            <span className="mock-seo-category-number">01</span>
            <h4>Verbal Intelligence</h4>
            <p>
              Practise verbal reasoning questions and develop your ability
              to understand information, recognize relationships, and solve
              language-based problems.
            </p>
          </article>

          <article className="mock-seo-category">
            <span className="mock-seo-category-number">02</span>
            <h4>Non-Verbal Intelligence</h4>
            <p>
              Practise visual reasoning questions involving patterns,
              figures, shapes, sequences, and relationships between images.
            </p>
          </article>

          <article className="mock-seo-category">
            <span className="mock-seo-category-number">03</span>
            <h4>Academic Tests</h4>
            <p>
              Use academic mock tests to practise subject-related questions
              and assess your academic preparation for the initial test.
            </p>
          </article>
        </div>
      </div>

      <div className="mock-seo-block">
        <h3>How to Use EXAMITICS PMA Mock Tests</h3>

        <p>
          A mock test is most useful when you attempt it seriously rather
          than selecting answers randomly. Follow a consistent practice
          routine to make your preparation more effective.
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

      <div className="mock-seo-block">
        <h3>Preparation Tips for PMA Long Course Candidates</h3>

        <ul className="mock-seo-tips">
          <li>
            <strong>Practise regularly:</strong> Make mock-test practice
            part of your daily preparation routine.
          </li>
          <li>
            <strong>Manage your time:</strong> Avoid spending too long on
            one question. Practise answering questions within a reasonable
            time.
          </li>
          <li>
            <strong>Identify weak areas:</strong> Review questions you
            answered incorrectly and revise the relevant concepts.
          </li>
          <li>
            <strong>Practise different categories:</strong> Give attention
            to verbal, non-verbal, and academic preparation instead of
            focusing on only one area.
          </li>
          <li>
            <strong>Stay consistent:</strong> Repeated practice and
            revision can help build confidence and improve familiarity
            with different question types.
          </li>
        </ul>
      </div>

      <div className="mock-seo-block">
        <h3>Who Should Attempt These PMA Mock Tests?</h3>

        <p>
          These practice tests are intended for candidates preparing for
          the PMA Long Course initial selection test, including candidates
          who are beginning their preparation and those who want to assess
          their progress through additional practice.
        </p>

        <p>
          Whether you are practising intelligence questions or reviewing
          academic subjects, use the available mock tests as part of a
          broader preparation plan that also includes revision and
          independent study.
        </p>
      </div>

      <div className="mock-seo-faq">
        <h3>Frequently Asked Questions – PMA Mock Tests</h3>

        {faqs.map((faq, index) => (
          <details className="mock-seo-faq-item" key={index}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>

      <div className="mock-seo-conclusion">
        <h3>Prepare Smart. Practise Consistently.</h3>
        <p>
          Start with the available PMA mock tests, practise each category,
          and use your performance to guide your next steps. Consistent
          preparation is an important part of getting ready for the PMA
          Long Course initial test.
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
          aria-label="View PMA Long Course initial test syllabus"
        >
          <FiBookOpen />
          <span>PMA LC Initial Test Syllabus</span>
        </button>
      </div>

      {/* SYLLABUS IMAGE */}
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
              aria-label="Close PMA syllabus"
            >
              <FiX />
            </button>

            <img
              src="/images/pma-syllabus.webp"
              alt="PMA Long Course Initial Test Syllabus"
              className="afns-syllabus-image"
            />
          </div>
        </div>
      )}

      <div style={{ marginBottom: "20px" }} />

      {/* PMA MOCK TEST TABLE */}
      <MockTable examCode={examCode} />

      {/* PMA AEO / GEO CONTENT */}
      <PMAMockSEO />

    </section>
  );
};

export default MockSection;
