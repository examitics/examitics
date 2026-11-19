
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FiChevronDown,
  FiHelpCircle,
} from "react-icons/fi";

import "./FAQ.css";

const faqs = [
  {
    question: "What is EXAMITICS?",
    answer: (
      <>
        EXAMITICS is an online preparation platform designed
        for candidates pursuing Pakistan Armed Forces selection.
        It provides initial-test mock examinations, intelligence
        practice, ISSB psychology resources, preparation guides,
        study material and educational resources.
      </>
    ),
  },

  {
    question: "Is EXAMITICS free to use?",
    answer: (
      <>
        EXAMITICS provides selected free preparation resources,
        practice tests and educational guides. Additional mock-test
        sets and selected study resources are available through
        EXAMITICS Premium. You can explore the{" "}
        <Link to="/mock">Mock Test Center</Link> to see available
        practice tests and their access requirements.
      </>
    ),
  },

  {
    question: "Which Pakistan Armed Forces examinations does EXAMITICS cover?",
    answer: (
      <>
        EXAMITICS provides preparation resources for Pakistan Army
        PMA Long Course, Armed Forces Nursing Service (AFNS),
        Pakistan Air Force (PAF) and Pakistan Navy initial tests.
        It also provides dedicated resources for candidates
        preparing for the ISSB selection process.
      </>
    ),
  },

  {
    question: "How can I prepare for the PMA Long Course Initial Test?",
    answer: (
      <>
        Begin with the{" "}
        <Link to="/pma-lc-initial-procedure">
          PMA Long Course Initial Test Guide
        </Link>
        . Then practise verbal intelligence, non-verbal intelligence
        and academic questions through the{" "}
        <Link to="/mock">Mock Test Center</Link>.
        Review your results and revise topics that require
        additional preparation.
      </>
    ),
  },

  {
    question: "Does EXAMITICS provide AFNS, PAF and Pakistan Navy mock tests?",
    answer: (
      <>
        Yes. The EXAMITICS Mock Test Center includes separate
        preparation sections for AFNS, Pakistan Air Force and
        Pakistan Navy, alongside PMA Long Course. Candidates can
        select their examination category and explore the
        available verbal, non-verbal and academic practice tests.
        Visit the <Link to="/mock">Mock Test Center</Link>.
      </>
    ),
  },

  {
    question: "Does EXAMITICS provide ISSB preparation?",
    answer: (
      <>
        Yes. EXAMITICS provides a{" "}
        <Link to="/issbguide">Complete ISSB Guide</Link> covering
        the selection process, psychological assessment, GTO
        activities, interviews, conference and officer-like
        qualities. Additional learning and practice resources
        are available through the{" "}
        <Link to="/issb-1">ISSB Preparation Center</Link>.
      </>
    ),
  },

  {
    question: "Which psychology tests can I practise on EXAMITICS?",
    answer: (
      <>
        EXAMITICS provides dedicated resources for Word Association
        Test (WAT), Thematic Apperception Test (TAT), Sentence
        Completion Test (SCT), Officer Potential Inventory (OPI),
        Situation Reaction Test (SRT) and Mechanical Aptitude Test
        (MAT). You can explore their learning pages and available
        practice exercises through the{" "}
        <Link to="/issb-1">ISSB Preparation Center</Link>.
      </>
    ),
  },

  {
    question: "Does EXAMITICS provide instant mock-test results?",
    answer: (
      <>
        Available mock tests provide results after completion,
        allowing candidates to review their scores and correct
        answers. The available result details may vary according
        to the test and its features.
      </>
    ),
  },

  {
    question: "What is the difference between free and Premium access?",
    answer: (
      <>
        Free access allows candidates to explore selected
        preparation resources and available practice tests.
        EXAMITICS Premium provides access to additional
        premium mock-test sets, exclusive question banks,
        premium Notes Hub resources and other subscription
        benefits. Visit{" "}
        <Link to="/premium/plans">Premium Plans</Link> for
        current subscription information.
      </>
    ),
  },

  {
    question: "What is the EXAMITICS Notes Hub?",
    answer: (
      <>
        Notes Hub is a dedicated study-resource section covering
        verbal intelligence, non-verbal intelligence, academic
        subjects and ISSB preparation. Its selected study
        resources are provided through Premium access.
        Explore the <Link to="/notes">Notes Hub</Link> to
        learn more.
      </>
    ),
  },

  {
    question: "What can I find in the EXAMITICS Knowledge Hub?",
    answer: (
      <>
        The Knowledge Hub provides educational resources covering
        General Knowledge, Pakistan Studies, World Geography,
        Current Affairs and other useful topics for Armed Forces
        and competitive examination preparation. Visit the{" "}
        <Link to="/knowledgehub">Knowledge Hub</Link> to
        explore its topics.
      </>
    ),
  },

  {
    question: "Are EXAMITICS mock tests official Armed Forces examinations?",
    answer: (
      <>
        No. EXAMITICS is an independent educational and
        examination-preparation platform. Its mock tests,
        practice questions and preparation guides are learning
        resources and are not official examinations issued by
        Pakistan Army, Pakistan Air Force, Pakistan Navy or ISSB.
        Candidates should always consult the relevant official
        recruitment announcements for current eligibility
        requirements and selection instructions.
      </>
    ),
  },

  {
    question: "How often does EXAMITICS add new preparation resources?",
    answer: (
      <>
        EXAMITICS continues to improve its preparation platform
        through additional mock-test sets, educational material,
        psychology practice resources and website improvements.
        Visit the relevant preparation sections to explore
        currently available resources.
      </>
    ),
  },

  {
    question: "How can I get EXAMITICS Premium access?",
    answer: (
      <>
        Visit the{" "}
        <Link to="/premium/plans">EXAMITICS Premium Plans</Link>
        {" "}page to explore available subscriptions and their
        benefits. You can also contact the EXAMITICS team through
        the available support options for subscription assistance.
      </>
    ),
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive((current) => (
      current === index ? -1 : index
    ));
  };

  return (
    <section className="faq-section section-padding">
      <div className="container-custom">

        {/* HEADER */}

        <div className="faq-header">
          <span className="faq-badge">
            Frequently Asked Questions
          </span>

          <h2>
            Everything You Need to Know
            <span> About EXAMITICS</span>
          </h2>

          <p>
            Find answers about Armed Forces initial-test
            preparation, ISSB psychology practice, mock tests,
            study resources and EXAMITICS Premium access.
          </p>
        </div>

        {/* FAQ ACCORDION */}

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={active === index}
              >
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
