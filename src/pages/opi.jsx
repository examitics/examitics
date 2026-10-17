import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiCompass,
  FiFileText,
  FiShield,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

import "../styles/opi-landing.css";

const faqs = [
  {
    question: "What is the OPI test for ISSB?",
    answer:
      "OPI is commonly expanded as Officer Potential Inventory in the context of this EXAMITICS practice resource. This page introduces a practice assessment designed to help candidates reflect on personality-related responses during ISSB preparation. It is not an official ISSB assessment.",
  },
  {
    question: "What does OPI stand for?",
    answer:
      "EXAMITICS uses OPI to mean Officer Potential Inventory for this practice tool. Candidates should consult official ISSB or relevant armed-forces recruitment guidance for authoritative information about any formal assessment and its terminology.",
  },
  {
    question: "How long does the EXAMITICS OPI practice test take?",
    answer:
      "The current EXAMITICS practice assessment is configured with a 35-minute timer. This is the duration of our online practice tool, not a claim about the duration of an official ISSB assessment.",
  },
  {
    question: "Is the OPI practice test free?",
    answer:
      "You can open the OPI practice assessment on EXAMITICS and review the questions available in the tool. The assessment is an educational practice resource and should not be confused with an official recruitment test.",
  },
  {
    question: "What personality traits can I explore?",
    answer:
      "The practice report summarizes selected response patterns using the traits implemented in the EXAMITICS scoring system. These results are intended for reflection and personal development, not clinical diagnosis or an official judgment of officer potential.",
  },
  {
    question: "Can this test predict whether I will pass ISSB?",
    answer:
      "No. A practice score cannot reliably predict ISSB selection. Official selection involves a broader assessment process, and EXAMITICS results are not official ISSB scores or selection decisions.",
  },
  {
    question: "How should I answer personality assessment questions?",
    answer:
      "Read each statement carefully and respond thoughtfully according to your actual behavior. Use the exercise to reflect on your habits, decisions, teamwork, and areas for development rather than trying to guess a supposedly perfect answer.",
  },
  {
    question: "Can I use a personality test for personal development?",
    answer:
      "A structured self-reflection exercise can help you think about your habits, communication, decision-making, and personal strengths. The EXAMITICS practice report is educational and is not a clinically validated psychological evaluation.",
  },
];

const OPI = () => {
  const startTest = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>
          OPI Test for ISSB | Free Personality Practice Test - EXAMITICS
        </title>

        <meta
          name="description"
          content="Learn about the OPI test for ISSB and take a free online OPI personality practice assessment. Explore the format, preparation tips, personality-related traits, and educational results with EXAMITICS."
        />

        <meta
          name="keywords"
          content="OPI test for ISSB, ISSB OPI test, OPI personality test, Officer Potential Inventory, ISSB personality test practice, free OPI test, personality traits test, self-awareness assessment, EXAMITICS"
        />

        <meta name="author" content="EXAMITICS" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.examitics.com/opi"
        />

        <meta
          property="og:title"
          content="OPI Test for ISSB | Free Personality Practice Test"
        />
        <meta
          property="og:description"
          content="Understand the OPI practice test, explore personality-related traits, and prepare for ISSB with the EXAMITICS online assessment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />
        <meta
          property="og:url"
          content="https://www.examitics.com/opi"
        />
        <meta
          property="og:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="OPI Test for ISSB | EXAMITICS"
        />
        <meta
          name="twitter:description"
          content="Learn about the OPI practice assessment and try an online personality-related test for ISSB preparation and personal reflection."
        />
        <meta
          name="twitter:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "OPI Test for ISSB",
            url: "https://www.examitics.com/opi",
            description:
              "An educational guide to the EXAMITICS OPI practice assessment, its format, preparation advice, and personality-related self-reflection.",
            isPartOf: {
              "@type": "WebSite",
              name: "EXAMITICS",
              url: "https://www.examitics.com/",
            },
            publisher: {
              "@type": "Organization",
              name: "EXAMITICS",
              url: "https://www.examitics.com/",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.examitics.com/",
          },
          {
            name: "ISSB Preparation",
            url: "https://www.examitics.com/issb-1",
          },
          {
            name: "OPI Test",
            url: "https://www.examitics.com/opi",
          },
        ]}
      />

      <Navbar />

      <main className="opi-landing">
        {/* HERO */}
        <section className="opi-hero">
          <div className="opi-hero-content">
            <span className="opi-eyebrow">
              EXAMITICS · ISSB PREPARATION
            </span>

            <h1>
              OPI Test for ISSB: Free Online Personality Practice Test
            </h1>

            <p className="opi-hero-description">
              Learn what the OPI practice test is, understand its format,
              and explore your responses through an educational
              personality-related assessment. Designed for ISSB candidates
              and anyone interested in structured self-reflection.
            </p>

            <div className="opi-hero-actions">
              <Link
                to="/opi-test"
                className="opi-btn opi-btn-primary"
                onClick={startTest}
              >
                Start Free OPI Practice
                <FiArrowRight />
              </Link>

              <a href="#what-is-opi" className="opi-btn opi-btn-secondary">
                Learn About OPI
              </a>
            </div>

            <div className="opi-hero-points">
              <span>
                <FiCheckCircle /> Online practice
              </span>
              <span>
                <FiClock /> 35-minute practice timer
              </span>
              <span>
                <FiFileText /> Educational results
              </span>
            </div>
          </div>

          <div className="opi-hero-visual" aria-label="OPI practice overview">
            <div className="opi-visual-top">
              <div className="opi-visual-icon">
                <FiTarget />
              </div>
              <div>
                <span className="opi-visual-kicker">PRACTICE MODULE</span>
                <h2>OPI Personality Practice</h2>
              </div>
            </div>

            <div className="opi-visual-divider" />

            <div className="opi-visual-row">
              <span>Assessment format</span>
              <strong>Self-reflection</strong>
            </div>
            <div className="opi-visual-row">
              <span>Time configured</span>
              <strong>35 minutes</strong>
            </div>
            <div className="opi-visual-row">
              <span>Result type</span>
              <strong>Practice report</strong>
            </div>

            <div className="opi-visual-note">
              <FiShield />
              <p>
                For learning and self-reflection. Not an official ISSB result
                or a clinical psychological evaluation.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK ANSWER */}
        <section className="opi-quick-answer" id="what-is-opi">
          <div className="opi-section-icon">
            <FiCompass />
          </div>
          <div>
            <span className="opi-section-label">QUICK ANSWER</span>
            <h2>What is the OPI test?</h2>
            <p>
              OPI is used here to mean Officer Potential Inventory. On
              EXAMITICS, it refers to an online practice assessment that
              encourages candidates to reflect on personality-related
              statements and review their response patterns. It is intended
              to support preparation and self-awareness, not reproduce or
              replace an official ISSB assessment.
            </p>
          </div>
        </section>

        {/* PURPOSE */}
        <section className="opi-section">
          <div className="opi-section-heading">
            <span className="opi-section-label">UNDERSTAND THE ASSESSMENT</span>
            <h2>Why practise an OPI-style assessment?</h2>
            <p>
              Structured self-reflection can help you become more aware of
              how you respond to common situations, work with other people,
              and approach decisions.
            </p>
          </div>

          <div className="opi-info-grid">
            <article className="opi-info-card">
              <div className="opi-card-icon">
                <FiUsers />
              </div>
              <h3>ISSB candidates</h3>
              <p>
                Become familiar with a structured practice exercise as part
                of your wider ISSB preparation. Use it alongside reliable
                guidance about the official selection process.
              </p>
            </article>

            <article className="opi-info-card">
              <div className="opi-card-icon">
                <FiTarget />
              </div>
              <h3>Self-awareness</h3>
              <p>
                Reflect on your everyday preferences, reactions, habits, and
                approaches to challenges instead of treating a single score
                as a complete picture of your personality.
              </p>
            </article>

            <article className="opi-info-card">
              <div className="opi-card-icon">
                <FiCompass />
              </div>
              <h3>Personal development</h3>
              <p>
                Identify topics worth reflecting on further, such as
                communication, teamwork, responsibility, and decision-making.
              </p>
            </article>
          </div>
        </section>

        {/* TRAITS */}
        <section className="opi-section opi-traits-section">
          <div className="opi-section-heading">
            <span className="opi-section-label">PERSONALITY & BEHAVIOUR</span>
            <h2>Personality traits you can reflect on</h2>
            <p>
              Personality is complex. These are useful areas for personal
              reflection, not a claim that this practice tool clinically
              measures every trait or establishes official officer potential.
            </p>
          </div>

          <div className="opi-traits-grid">
            {[
              {
                title: "Confidence",
                text: "How comfortable you feel expressing ideas and facing challenges.",
              },
              {
                title: "Responsibility",
                text: "How you approach commitments, duties, and accountability.",
              },
              {
                title: "Teamwork",
                text: "How you cooperate, listen, and contribute in group settings.",
              },
              {
                title: "Decision-making",
                text: "How you consider options and respond when choices are difficult.",
              },
              {
                title: "Self-control",
                text: "How you reflect on reactions and manage impulses under pressure.",
              },
              {
                title: "Initiative",
                text: "How willing you are to take constructive action when appropriate.",
              },
              {
                title: "Communication",
                text: "How you share information, listen, and respond to other people.",
              },
              {
                title: "Adaptability",
                text: "How you approach changes, setbacks, and unfamiliar situations.",
              },
            ].map((trait) => (
              <article className="opi-trait-item" key={trait.title}>
                <FiCheckCircle />
                <div>
                  <h3>{trait.title}</h3>
                  <p>{trait.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="opi-section">
          <div className="opi-section-heading">
            <span className="opi-section-label">HOW IT WORKS</span>
            <h2>How to take the EXAMITICS OPI practice test</h2>
            <p>
              Follow these steps to complete the practice assessment and
              review the educational report.
            </p>
          </div>

          <div className="opi-steps">
            <article className="opi-step">
              <span>01</span>
              <h3>Read each statement</h3>
              <p>
                Consider what each statement means in the context of your
                actual behaviour and experience.
              </p>
            </article>

            <article className="opi-step">
              <span>02</span>
              <h3>Select a response</h3>
              <p>
                Use the available agreement scale or response options to
                record your answer.
              </p>
            </article>

            <article className="opi-step">
              <span>03</span>
              <h3>Complete the assessment</h3>
              <p>
                Work through the questions at a thoughtful pace and keep an
                eye on the practice timer.
              </p>
            </article>

            <article className="opi-step">
              <span>04</span>
              <h3>Review your report</h3>
              <p>
                Use the report as a starting point for reflection, not as a
                definitive label or prediction of selection.
              </p>
            </article>
          </div>

          <div className="opi-inline-cta">
            <div>
              <h3>Ready to begin your OPI practice?</h3>
              <p>
                Start the online assessment and explore your response
                patterns.
              </p>
            </div>
            <Link to="/opi-test" className="opi-btn opi-btn-primary">
              Start OPI Test <FiArrowRight />
            </Link>
          </div>
        </section>

        {/* PREPARATION */}
        <section className="opi-section opi-preparation">
          <div className="opi-section-heading">
            <span className="opi-section-label">PREPARATION GUIDANCE</span>
            <h2>How to prepare for personality assessments</h2>
            <p>
              Good preparation is about understanding yourself and developing
              sound habits, not memorising answers that appear ideal.
            </p>
          </div>

          <div className="opi-preparation-list">
            <div>
              <span>01</span>
              <section>
                <h3>Answer honestly</h3>
                <p>
                  Think about how you usually act, not how you think you are
                  expected to act in every situation.
                </p>
              </section>
            </div>

            <div>
              <span>02</span>
              <section>
                <h3>Reflect on real experiences</h3>
                <p>
                  Consider examples from study, family responsibilities,
                  teamwork, leadership opportunities, and everyday decisions.
                </p>
              </section>
            </div>

            <div>
              <span>03</span>
              <section>
                <h3>Recognise development areas</h3>
                <p>
                  Treat areas for improvement as opportunities to build
                  practical habits, communication, and self-management.
                </p>
              </section>
            </div>

            <div>
              <span>04</span>
              <section>
                <h3>Use official guidance for official requirements</h3>
                <p>
                  For recruitment procedures and formal assessment
                  requirements, consult official ISSB and relevant armed
                  forces recruitment sources.
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="opi-section opi-faq-section" id="opi-faq">
          <div className="opi-section-heading">
            <span className="opi-section-label">OPI TEST FAQS</span>
            <h2>Frequently asked questions about the OPI test</h2>
            <p>
              Quick answers about the practice assessment, its duration,
              preparation, and how to interpret the results.
            </p>
          </div>

          <div className="opi-faq-list">
            {faqs.map((faq) => (
              <details className="opi-faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="opi-disclaimer">
          <FiShield />
          <div>
            <h2>Important note about this practice test</h2>
            <p>
              EXAMITICS provides an educational practice resource. This
              assessment is not an official ISSB test, does not establish
              clinical personality characteristics, and cannot guarantee or
              predict selection. Follow official recruitment guidance for
              authoritative requirements.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="opi-final-cta">
          <span className="opi-section-label">PRACTISE WITH EXAMITICS</span>
          <h2>Start your OPI personality practice today</h2>
          <p>
            Explore the assessment, reflect on your responses, and continue
            preparing with the EXAMITICS ISSB learning resources.
          </p>
          <Link to="/opi-test" className="opi-btn opi-btn-primary">
            Start Free OPI Practice <FiArrowRight />
          </Link>
          <Link to="/issb-1" className="opi-back-link">
            Explore more ISSB practice tests
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OPI;