import React, { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import "./FAQ.css";

// const faqs = [
//   {
//     question: "Is EXAMITICS completely free?",
//     answer:
//       "Yes. EXAMITICS provides free mock tests, preparation guides, performance analytics, intelligence tests, psychology practice and study resources for Pakistan Armed Forces candidates.",
//   },
//   {
//     question: "How can I prepare for the PMA Long Course Initial Test?",
//     answer:
//       "Start with the PMA Initial Test Guide, then practice Verbal Intelligence, Non-Verbal Intelligence, Academic Tests, Initial Interview material and mock tests available on EXAMITICS.",
//   },
//   {
//     question: "Does EXAMITICS provide ISSB preparation?",
//     answer:
//       "Yes. We provide ISSB preparation including WAT, TAT, SCT, GTO tasks, Command Task guidance, Interview preparation, Officer Like Qualities (OLQs) and complete ISSB guides.",
//   },
//   {
//     question: "Can I prepare for Pakistan Air Force and Pakistan Navy?",
//     answer:
//       "Yes. EXAMITICS offers preparation material and mock tests for Pakistan Air Force (PAF), Pakistan Navy and other Pakistan Armed Forces entry tests.",
//   },
// //   {
// //     question: "Does EXAMITICS track my performance?",
// //     answer:
// //       "Yes. After attempting mock tests, your dashboard provides analytics, scores and performance insights to help you identify strengths and improve weaker areas.",
// //   },
//   {
//     question: "Do I need to register before practicing?",
//     answer:
//       "Most preparation material is available immediately. Creating an account enables progress tracking, performance analytics and a personalized preparation experience.",
//   },
//   {
//     question: "Are the mock tests similar to the actual exams?",
//     answer:
//       "Our mock tests are designed to closely resemble the format and difficulty of actual PMA, ISSB, PAF and Pakistan Navy selection tests, helping candidates build confidence before the real examination.",
//   },
//   {
//     question: "How often is new content added?",
//     answer:
//       "We regularly publish new preparation guides, mock tests, interview material and updated practice resources to keep candidates prepared with the latest content.",
//   },
// ];

const faqs = [
  {
    question: "Is EXAMITICS completely free to use?",
    answer: (
      <>
        Yes. EXAMITICS is <strong>free</strong>. You can{" "}
        <a href="#guides" style={{ color: "var(--color-text)" }}>
          <u>access preparation guides</u>
        </a>
        , practice tests,{" "}
        <a href="/issb-1" style={{ color: "var(--color-text)" }}>
          <u>psychology tests</u>
        </a>
        ,{" "}
        <a href="/mock" style={{ color: "var(--color-text)" }}>
          <u> mock exams</u>
        </a>
        , performance analytics, and study material without paying any fee or
        creating an account.
      </>
    ),
  },

  {
    question: "Do I need to register before I start preparing?",
    answer: (
      <>
        No. Registration is <strong>not required</strong> to start learning. You
        can immediately access our <a href="/mock">mock tests</a>,{" "}
        <a href="/issbguide">ISSB Guide</a>, and{" "}
        <a href="/pma-lc-initial-procedure">PMA Initial Test Procedure</a>{" "}
        completely free.
      </>
    ),
  },

  {
    question: "How can I prepare for the PMA Long Course Initial Test?",
    answer: (
      <>
        We provide a complete{" "}
        <a href="/pma-lc-initial-procedure">
          PMA Long Course Initial Test Guide
        </a>{" "}
        covering the entire selection process, along with Verbal Intelligence,
        Non-Verbal Intelligence, Academic Tests, interview preparation, and
        realistic mock tests to help you prepare with confidence.
      </>
    ),
  },

  {
    question: "Does EXAMITICS provide a complete ISSB preparation guide?",
    answer: (
      <>
        Yes. Our <a href="/issbguide">Complete ISSB Guide</a> explains every
        stage of ISSB including Psychology Tests, WAT, TAT, SCT, GTO Tasks,
        Command Task, Interview, Conference, Officer Like Qualities (OLQs), and
        preparation tips.
      </>
    ),
  },

  {
    question: "Which psychology tests can I practice on EXAMITICS?",
    answer: (
      <>
        EXAMITICS provides a realistic psychology test environment including{" "}
        <a href="/issb-1">Word Association Test (WAT)</a>,{" "}
        <a href="/issb-1">Mechanical Aptitude Test (MAT)</a>,{" "}
        <a href="/opi">Officer Personality Inventory (OPI)</a>, Situation
        Completion Test (SCT), Picture Story Writing, Pointer Story Writing, and
        free personality trait analysis.
      </>
    ),
  },

  {
    question: "Will I see my result immediately after completing a mock test?",
    answer: (
      <>
        Yes. Your result is generated instantly after completing a mock test.
        You can review your score, correct answers, performance analysis, and
        identify areas that need improvement.
      </>
    ),
  },

  {
    question: "Are the mock tests similar to the actual PMA and ISSB tests?",
    answer: (
      <>
        Yes. Our mock tests are designed to closely match the format, timing,
        and difficulty level of actual PMA Long Course and ISSB selection tests,
        helping you practice in a realistic exam environment.
      </>
    ),
  },

  {
    question: "Does EXAMITICS provide Verbal, Non-Verbal and Academic Tests?",
    answer: (
      <>
        Absolutely. You can practice <a href="/mock">Verbal Intelligence</a>,{" "}
        <a href="/mock">Non-Verbal Intelligence</a>, and{" "}
        <a href="/mock"> Academic Tests</a> with multiple practice sets and
        instant result analysis.
      </>
    ),
  },

  {
    question:
      "Is preparation material for Pakistan Air Force and Pakistan Navy available?",
    answer: (
      <>
        PMA and ISSB preparation is currently our primary focus. Pakistan Air
        Force (PAF) and Pakistan Navy preparation material, mock tests, and
        guides are actively being developed and will be added very soon as free
        updates.
      </>
    ),
  },

  {
    question: "How often is EXAMITICS updated?",
    answer: (
      <>
        We regularly add new mock tests, psychology tests, interview material,
        preparation guides, and performance improvements to ensure candidates
        always have access to the latest preparation resources.
      </>
    ),
  },

  {
    question: "How can I receive notifications about new tests and updates?",
    answer: (
      <>
        Simply allow browser notifications when visiting EXAMITICS. We'll notify
        you whenever new mock tests, preparation guides, psychology tests, or
        important updates are published.
      </>
    ),
  },

  {
    question: "Why should I prepare with EXAMITICS?",
    answer: (
      <>
        EXAMITICS combines complete preparation guides, realistic mock tests,
        psychology practice, instant result analysis, free personality insights,
        and regular content updates on one platform—making it easier to prepare
        for PMA Long Course, ISSB, and upcoming Pakistan Air Force and Pakistan
        Navy selection tests.
      </>
    ),
  },
];
const FAQ = () => {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container-custom">
        <div className="faq-header">
          <span className="faq-badge">Frequently Asked Questions</span>

          <h2>
            Have Questions?
            <span> We Have Answers</span>
          </h2>

          <p>
            Find answers to the most common questions about PMA, ISSB, Pakistan
            Air Force, Pakistan Navy preparation and using EXAMITICS.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${active === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                <div className="faq-left">
                  <FiHelpCircle />

                  <span>{faq.question}</span>
                </div>

                <FiChevronDown className="faq-icon" />
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
