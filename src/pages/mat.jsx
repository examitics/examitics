
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiCompass,
  FiHelpCircle,
  FiRefreshCw,
  FiShield,
  FiTarget,
  FiTool,
  FiZap,
} from "react-icons/fi";

import "../styles/mat-landing.css";

const faqs = [
  {
    question: "What is the MAT test for ISSB?",
    answer:
      "MAT stands for Mechanical Aptitude Test. In ISSB preparation, candidates may use mechanical aptitude practice to develop familiarity with basic mechanical concepts and practical reasoning. This EXAMITICS page provides educational practice and is not an official ISSB test or a statement of its current assessment format.",
  },
  {
    question: "What does MAT stand for?",
    answer:
      "MAT commonly stands for Mechanical Aptitude Test in this preparation context. It generally refers to questions involving mechanical principles, physical relationships, and practical problem-solving.",
  },
  {
    question: "What topics should I study for mechanical aptitude?",
    answer:
      "Useful practice topics include gears, pulleys, levers, force, motion, balance, gravity, simple machines, and cause-and-effect relationships. The topics covered by any official assessment may differ, so consult the relevant official recruitment guidance.",
  },
  {
    question: "How can I prepare for the ISSB MAT test?",
    answer:
      "Start by understanding simple machines and everyday mechanical principles. Practise interpreting diagrams, predicting movement, comparing forces, and explaining why an object behaves in a particular way. Review mistakes and repeat similar questions to strengthen your reasoning.",
  },
  {
    question: "Can I practise MAT questions online?",
    answer:
      "Yes. You can use the EXAMITICS online MAT practice module to work through the questions available in the tool. Begin from this page using the Start MAT Practice button.",
  },
  {
    question: "Does the EXAMITICS MAT test guarantee ISSB selection?",
    answer:
      "No. A practice test cannot guarantee selection or predict an official ISSB result. It is an educational resource to help you practise mechanical reasoning as part of broader preparation.",
  },
  {
    question: "Is the EXAMITICS MAT practice test an official ISSB test?",
    answer:
      "No. EXAMITICS is an independent exam-preparation resource. This practice page and its questions are not an official ISSB assessment, and the practice format should not be treated as an authoritative description of the current selection procedure.",
  },
  {
    question: "What should I do if I get a mechanical aptitude question wrong?",
    answer:
      "Review the principle behind the question rather than memorising only the answer. Draw the arrangement, identify the moving parts, and trace how a change in one part affects the others. Then practise a similar problem.",
  },
];

const topics = [
  {
    title: "Gears and rotation",
    text: "Understand how connected gears turn and how their sizes affect rotational direction and speed.",
    icon: FiRefreshCw,
  },
  {
    title: "Levers and balance",
    text: "Explore pivots, applied force, load position, and how simple levers help move objects.",
    icon: FiTool,
  },
  {
    title: "Pulleys and lifting",
    text: "Practise reasoning about ropes, pulleys, lifting effort, and the direction of movement.",
    icon: FiTarget,
  },
  {
    title: "Force and motion",
    text: "Think through how pushes, pulls, friction, and movement affect everyday objects.",
    icon: FiZap,
  },
  {
    title: "Balance and stability",
    text: "Consider weight distribution, support points, and why an object may tip or remain stable.",
    icon: FiCompass,
  },
  {
    title: "Mechanical cause and effect",
    text: "Trace a system step by step and predict what happens when one part changes.",
    icon: FiCheckCircle,
  },
];

const preparationSteps = [
  {
    number: "01",
    title: "Learn the basic principle",
    text: "Understand how a mechanism works before attempting timed questions. Start with simple examples from everyday life.",
  },
  {
    number: "02",
    title: "Study the diagram carefully",
    text: "Identify gears, pivots, ropes, loads, and contact points. Do not assume that two nearby parts are connected unless the diagram shows it.",
  },
  {
    number: "03",
    title: "Trace the movement",
    text: "Follow each connected part in order. For gears, check the contact and rotation direction; for levers, identify the pivot and the applied forces.",
  },
  {
    number: "04",
    title: "Practise and review",
    text: "Attempt practice questions, examine incorrect answers, and revisit the underlying principle before trying again.",
  },
];

const MAT = () => {
  const startTest = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MAT Test for ISSB: Mechanical Aptitude Practice",
    url: "https://www.examitics.com/mat",
    description:
      "Learn about mechanical aptitude practice for ISSB preparation, explore key mechanical reasoning topics, and start an online MAT practice test with EXAMITICS.",
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
  };

  const faqSchema = {
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
  };

  return (
    <>
      <Helmet>
        <title>
          MAT Test for ISSB | Mechanical Aptitude Practice - EXAMITICS
        </title>

        <meta
          name="description"
          content="Prepare for the ISSB MAT test with EXAMITICS. Learn mechanical aptitude concepts including gears, pulleys, levers, force and motion, read preparation tips, and start online MAT practice."
        />

        <meta
          name="keywords"
          content="MAT test for ISSB, ISSB MAT test, Mechanical Aptitude Test, mechanical aptitude practice, ISSB preparation, mechanical reasoning questions, gears and pulleys test, lever questions, online MAT practice, EXAMITICS"
        />

        <meta name="author" content="EXAMITICS" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.examitics.com/mat"
        />

        <meta
          property="og:title"
          content="MAT Test for ISSB | Mechanical Aptitude Practice - EXAMITICS"
        />
        <meta
          property="og:description"
          content="Explore mechanical aptitude concepts and preparation tips, then practise mechanical reasoning online with EXAMITICS."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />
        <meta
          property="og:url"
          content="https://www.examitics.com/mat"
        />
        <meta
          property="og:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MAT Test for ISSB | EXAMITICS"
        />
        <meta
          name="twitter:description"
          content="Prepare for mechanical aptitude questions with topic explanations, practical tips, and online MAT practice."
        />
        <meta
          name="twitter:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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
            name: "MAT Test",
            url: "https://www.examitics.com/mat",
          },
        ]}
      />

      <Navbar />

      <main className="mat-landing">
        {/* HERO */}
        <section className="mat-hero">
          <div className="mat-hero-content">
            <span className="mat-eyebrow">
              EXAMITICS · ISSB PREPARATION
            </span>

            <h1>
              MAT Test for ISSB: Mechanical Aptitude Practice
            </h1>

            <p className="mat-hero-description">
              Learn the fundamentals of mechanical reasoning, explore
              common concepts such as gears, levers and pulleys, and
              practise applying logical thinking to mechanical problems.
              Use this guide as part of your wider ISSB preparation.
            </p>

            <div className="mat-hero-actions">
              <Link
                to="/mock/mat/set1"
                className="mat-btn mat-btn-primary"
                onClick={startTest}
              >
                Start MAT Practice
                <FiArrowRight />
              </Link>

              <a href="#mat-basics" className="mat-btn mat-btn-secondary">
                Learn the Basics
              </a>
            </div>

            <div className="mat-hero-points">
              <span>
                <FiCheckCircle /> Mechanical reasoning
              </span>
              <span>
                <FiBookOpen /> Preparation guide
              </span>
              <span>
                <FiTarget /> Online practice
              </span>
            </div>
          </div>

          <div className="mat-hero-visual">
            <div className="mat-visual-top">
              <div className="mat-visual-icon">
                <FiTool />
              </div>
              <div>
                <span className="mat-visual-kicker">
                  PRACTICE MODULE
                </span>
                <h2>Mechanical Aptitude</h2>
              </div>
            </div>

            <div className="mat-visual-divider" />

            <div className="mat-visual-row">
              <span>Core skill</span>
              <strong>Practical reasoning</strong>
            </div>
            <div className="mat-visual-row">
              <span>Concepts</span>
              <strong>Machines and motion</strong>
            </div>
            <div className="mat-visual-row">
              <span>Next step</span>
              <strong>Practise questions</strong>
            </div>

            <div className="mat-visual-note">
              <FiShield />
              <p>
                An independent educational resource. Not an official
                ISSB assessment or a guarantee of selection.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK ANSWER */}
        <section className="mat-quick-answer" id="mat-basics">
          <div className="mat-section-icon">
            <FiCompass />
          </div>
          <div>
            <span className="mat-section-label">QUICK ANSWER</span>
            <h2>What is the MAT test?</h2>
            <p>
              MAT stands for Mechanical Aptitude Test in this preparation
              context. Mechanical aptitude practice focuses on understanding
              how simple mechanisms work and using that understanding to
              solve practical problems. This EXAMITICS guide is designed to
              help candidates practise relevant reasoning skills; it does
              not define or replace the official ISSB assessment process.
            </p>
          </div>
        </section>

        {/* TOPICS */}
        <section className="mat-section">
          <div className="mat-section-heading">
            <span className="mat-section-label">KEY CONCEPTS</span>
            <h2>Mechanical aptitude topics to practise</h2>
            <p>
              Build your understanding of simple mechanical systems.
              These are useful learning areas for mechanical reasoning
              practice, not a confirmed official syllabus.
            </p>
          </div>

          <div className="mat-topic-grid">
            {topics.map((topic) => {
              const TopicIcon = topic.icon;

              return (
                <article className="mat-topic-card" key={topic.title}>
                  <div className="mat-card-icon">
                    <TopicIcon />
                  </div>
                  <h3>{topic.title}</h3>
                  <p>{topic.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* EXAMPLE */}
        <section className="mat-example-section">
          <div className="mat-example-content">
            <span className="mat-section-label">THINK IT THROUGH</span>
            <h2>How to approach a mechanical reasoning question</h2>
            <p>
              Imagine two simple gears whose teeth are directly engaged.
              When one gear turns, the gear touching it turns in the
              opposite direction. If several gears connect in a chain,
              trace each contact one by one rather than guessing the
              final direction.
            </p>
            <p>
              The general method is to identify the parts, establish how
              they connect, follow the cause-and-effect relationship, and
              then check that your conclusion matches the diagram.
            </p>
            <Link
              to="/mock/mat/set1"
              className="mat-inline-link"
              onClick={startTest}
            >
              Try the MAT practice questions <FiArrowRight />
            </Link>
          </div>

          <div className="mat-example-visual">
            <div className="mat-gear gear-one">A</div>
            <div className="mat-gear-link" />
            <div className="mat-gear gear-two">B</div>
            <div className="mat-example-caption">
              <FiCheckCircle />
              Trace each connection step by step
            </div>
          </div>
        </section>

        {/* PREPARATION */}
        <section className="mat-section">
          <div className="mat-section-heading">
            <span className="mat-section-label">PREPARATION STRATEGY</span>
            <h2>How to prepare for mechanical aptitude practice</h2>
            <p>
              Use a repeatable method to understand each question and
              learn from mistakes instead of relying only on memorisation.
            </p>
          </div>

          <div className="mat-steps">
            {preparationSteps.map((step) => (
              <article className="mat-step" key={step.number}>
                <span className="mat-step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PRACTICE CTA */}
        <section className="mat-practice-cta">
          <div className="mat-cta-icon">
            <FiTarget />
          </div>
          <div className="mat-cta-content">
            <span className="mat-section-label">READY TO PRACTISE?</span>
            <h2>Put your mechanical reasoning into practice</h2>
            <p>
              Move from reading to solving. Open the EXAMITICS MAT
              practice module and work through the available questions.
            </p>
          </div>
          <Link
            to="/mock/mat/set1"
            className="mat-btn mat-btn-light"
            onClick={startTest}
          >
            Start MAT Practice <FiArrowRight />
          </Link>
        </section>

        {/* FAQ */}
        <section className="mat-section mat-faq-section">
          <div className="mat-section-heading">
            <span className="mat-section-label">COMMON QUESTIONS</span>
            <h2>MAT test for ISSB: FAQs</h2>
            <p>
              Straightforward answers to common questions about
              mechanical aptitude practice and preparation.
            </p>
          </div>

          <div className="mat-faq-list">
            {faqs.map((faq) => (
              <details className="mat-faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <FiHelpCircle />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="mat-disclaimer">
          <FiShield />
          <div>
            <h2>Important information</h2>
            <p>
              EXAMITICS provides independent educational practice
              resources. This page is not published by ISSB or an
              armed-forces recruitment authority. Practice topics and
              scores should not be treated as official test specifications,
              selection criteria, or a guarantee of success. Check current
              official recruitment guidance for authoritative information.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mat-final-cta">
          <span className="mat-section-label">YOUR NEXT STEP</span>
          <h2>Learn the concepts. Practise the questions. Review your mistakes.</h2>
          <p>
            Continue your ISSB preparation with the EXAMITICS mechanical
            aptitude practice module.
          </p>
          <Link
            to="/mock/mat/set1"
            className="mat-btn mat-btn-primary"
            onClick={startTest}
          >
            Start MAT Practice <FiArrowRight />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MAT;
