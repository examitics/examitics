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
  FiEdit3,
  FiMessageSquare,
  FiShield,
  FiTarget,
} from "react-icons/fi";

import "../styles/sct-landing.css";

const faqs = [
  {
    question: "What is the SCT test in ISSB?",
    answer:
      "SCT stands for Sentence Completion Test. Sentence-completion exercises ask participants to complete unfinished statements in their own words. EXAMITICS provides an independent practice simulation to help candidates become familiar with completing English and Urdu sentence prompts. This is an educational resource, not an official ISSB assessment.",
  },
  {
    question: "What does SCT stand for?",
    answer:
      "SCT stands for Sentence Completion Test. In a sentence-completion exercise, a participant reads an unfinished sentence and completes it with a meaningful response. Candidates should consult official recruitment guidance for authoritative information about formal assessment procedures.",
  },
  {
    question: "How do I practise the SCT test online?",
    answer:
      "Open the EXAMITICS SCT practice page, select Test 1 or Test 2, read the instructions, and begin when ready. The current simulation displays English prompts first and Urdu prompts second. Keep paper and a pencil ready because the interface does not provide answer fields.",
  },
  {
    question: "How many sentences are in an EXAMITICS SCT practice set?",
    answer:
      "Each currently configured EXAMITICS practice set contains 26 English sentence prompts and 26 Urdu sentence prompts. The available sets and prompts may change as the resource is updated.",
  },
  {
    question: "How much time is given in the EXAMITICS SCT practice test?",
    answer:
      "The current EXAMITICS simulation provides six minutes for the English section and six minutes for the Urdu section. These are the settings of our practice tool and should not be interpreted as confirmation of official ISSB timing.",
  },
  {
    question: "Should I write my SCT answers on paper?",
    answer:
      "Yes. The current EXAMITICS SCT simulation does not have answer-entry fields. Keep a notebook or sheets of paper and a pencil ready, and complete the sentences as they appear in the exercise.",
  },
  {
    question: "How should I complete SCT sentences?",
    answer:
      "Read each sentence starter carefully and complete it with a relevant, clear, and natural thought. Aim to express what you genuinely think rather than forcing a memorised phrase into every prompt. Practise writing legibly and managing your time.",
  },
  {
    question: "Are there fixed correct answers for SCT sentences?",
    answer:
      "Sentence-completion exercises are not necessarily conventional multiple-choice questions with one universal answer. Interpretation depends on the assessment and its evaluation process. EXAMITICS provides practice prompts but does not provide an official psychological evaluation or official answer key.",
  },
  {
    question: "Can SCT practice guarantee ISSB selection?",
    answer:
      "No. Completing online practice exercises cannot guarantee selection or predict an official ISSB decision. Use the exercises to develop familiarity with sentence completion and self-reflection as part of broader preparation.",
  },
  {
    question: "Is the EXAMITICS SCT test an official ISSB test?",
    answer:
      "No. EXAMITICS is an independent educational platform. Its SCT simulation, prompts, timings, and practice sets are not an official ISSB assessment and should not be treated as authoritative recruitment instructions.",
  },
];

const practiceSteps = [
  {
    number: "01",
    title: "Read the sentence starter",
    text:
      "Understand the unfinished sentence before completing it. Pay attention to its meaning and the idea it asks you to express.",
  },
  {
    number: "02",
    title: "Complete the thought naturally",
    text:
      "Write a relevant continuation in your own words. Avoid forcing an unrelated or memorised response into the sentence.",
  },
  {
    number: "03",
    title: "Keep your response clear",
    text:
      "Use understandable language and a logical completion. Practise expressing one coherent thought without unnecessary wording.",
  },
  {
    number: "04",
    title: "Manage your time",
    text:
      "Practise moving steadily through the prompts while keeping your handwriting readable. Review your responses after the timed exercise.",
  },
];

const responsePrinciples = [
  {
    title: "Relevance",
    text:
      "Complete the sentence in a way that connects naturally with its opening words.",
    icon: FiTarget,
  },
  {
    title: "Clarity",
    text:
      "Use direct, understandable language to communicate a complete thought.",
    icon: FiMessageSquare,
  },
  {
    title: "Authenticity",
    text:
      "Practise expressing your own views instead of memorising supposedly perfect answers.",
    icon: FiEdit3,
  },
  {
    title: "Time management",
    text:
      "Build a steady writing pace so you can attempt the prompts within the practice timer.",
    icon: FiClock,
  },
];

const SCTPage = () => {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SCT Test for ISSB | Online Sentence Completion Practice",
    url: "https://www.examitics.com/sct",
    description:
      "Learn about the Sentence Completion Test and practise English and Urdu sentence prompts with the EXAMITICS SCT practice simulation.",
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
          SCT Test for ISSB | Free Sentence Completion Practice - EXAMITICS
        </title>

        <meta
          name="description"
          content="Practise the SCT test for ISSB online with EXAMITICS. Learn Sentence Completion Test techniques, explore English and Urdu sentence prompts, and prepare with timed practice sets."
        />

        <meta
          name="keywords"
          content="SCT test for ISSB, ISSB SCT test, Sentence Completion Test, SCT practice online, ISSB sentence completion practice, English sentence completion, Urdu sentence completion, ISSB psychological test preparation, EXAMITICS"
        />

        <meta name="author" content="EXAMITICS" />
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.examitics.com/sct"
        />

        <meta
          property="og:title"
          content="SCT Test for ISSB | Sentence Completion Practice - EXAMITICS"
        />
        <meta
          property="og:description"
          content="Learn about SCT sentence completion and practise English and Urdu prompts with the EXAMITICS online practice simulation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />
        <meta
          property="og:url"
          content="https://www.examitics.com/sct"
        />
        <meta
          property="og:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SCT Test for ISSB | EXAMITICS"
        />
        <meta
          name="twitter:description"
          content="Explore SCT preparation tips and practise English and Urdu sentence-completion prompts online."
        />
        <meta
          name="twitter:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
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
            name: "SCT Test",
            url: "https://www.examitics.com/sct",
          },
        ]}
      />

      <Navbar />

      <main className="sct-landing">
        <section className="sct-hero">
          <div className="sct-hero-content">
            <span className="sct-eyebrow">
              EXAMITICS · ISSB PREPARATION
            </span>

            <h1>
              SCT Test for ISSB: Online Sentence Completion Practice
            </h1>

            <p className="sct-hero-description">
              Prepare for sentence-completion exercises with English and
              Urdu practice prompts. Learn how to complete sentences
              naturally, express ideas clearly, and manage your time with
              the EXAMITICS SCT practice simulation.
            </p>

            <div className="sct-hero-actions">
              <Link
                to="/sct-test"
                className="sct-btn sct-btn-primary"
              >
                Start SCT Practice
                <FiArrowRight />
              </Link>

              <a
                href="#what-is-sct"
                className="sct-btn sct-btn-secondary"
              >
                Learn About SCT
              </a>
            </div>

            <div className="sct-hero-points">
              <span>
                <FiCheckCircle /> English and Urdu practice
              </span>
              <span>
                <FiClock /> Timed practice sections
              </span>
              <span>
                <FiBookOpen /> Two practice sets
              </span>
            </div>
          </div>

          <div
            className="sct-hero-visual"
            aria-label="SCT practice overview"
          >
            <div className="sct-visual-top">
              <div className="sct-visual-icon">
                <FiEdit3 />
              </div>

              <div>
                <span className="sct-visual-kicker">
                  PRACTICE MODULE
                </span>
                <h2>Sentence Completion</h2>
              </div>
            </div>

            <div className="sct-visual-divider" />

            <div className="sct-visual-row">
              <span>English prompts</span>
              <strong>26 sentences</strong>
            </div>

            <div className="sct-visual-row">
              <span>Urdu prompts</span>
              <strong>26 sentences</strong>
            </div>

            <div className="sct-visual-row">
              <span>Practice sets</span>
              <strong>2 available</strong>
            </div>

            <div className="sct-visual-row">
              <span>Timer per section</span>
              <strong>6 minutes</strong>
            </div>

            <p className="sct-visual-note">
              Timings and counts describe the current EXAMITICS practice
              tool, not official ISSB specifications.
            </p>
          </div>
        </section>

        <section className="sct-trust-strip">
          <div>
            <FiCheckCircle />
            <span>Independent practice resource</span>
          </div>
          <div>
            <FiEdit3 />
            <span>Bring paper and a pencil</span>
          </div>
          <div>
            <FiShield />
            <span>Honest, natural responses</span>
          </div>
        </section>

        <section className="sct-section" id="what-is-sct">
          <div className="sct-section-heading">
            <span className="sct-section-kicker">SCT EXPLAINED</span>
            <h2>What is the Sentence Completion Test?</h2>
            <p>
              The Sentence Completion Test (SCT) is a type of exercise in
              which participants complete unfinished sentences using
              their own words. In preparation contexts, these exercises
              can help candidates practise expressing thoughts clearly
              and reflecting on their attitudes, experiences, and goals.
            </p>
          </div>

          <div className="sct-info-grid">
            <article className="sct-info-card">
              <div className="sct-info-icon">
                <FiBookOpen />
              </div>
              <h3>Understand the sentence</h3>
              <p>
                Read the opening carefully and identify the thought that
                would naturally complete it.
              </p>
            </article>

            <article className="sct-info-card">
              <div className="sct-info-icon">
                <FiMessageSquare />
              </div>
              <h3>Express your ideas</h3>
              <p>
                Practise writing relevant and coherent completions in
                language you understand.
              </p>
            </article>

            <article className="sct-info-card">
              <div className="sct-info-icon">
                <FiClock />
              </div>
              <h3>Work within a time limit</h3>
              <p>
                Build familiarity with completing a series of prompts
                while maintaining clarity and a steady pace.
              </p>
            </article>
          </div>
        </section>

        <section className="sct-section sct-section-soft">
          <div className="sct-section-heading">
            <span className="sct-section-kicker">PRACTICE FORMAT</span>
            <h2>How does EXAMITICS SCT practice work?</h2>
            <p>
              The current practice interface contains two selectable
              sets. Each set includes English and Urdu sentence starters.
              You write your completions on paper while following the
              on-screen timer.
            </p>
          </div>

          <div className="sct-format-grid">
            <div className="sct-format-card">
              <span className="sct-format-label">SECTION 01</span>
              <h3>English sentences</h3>
              <strong>26 prompts</strong>
              <p>Six minutes in the current EXAMITICS simulation.</p>
            </div>

            <div className="sct-format-card">
              <span className="sct-format-label">SECTION 02</span>
              <h3>Urdu sentences</h3>
              <strong>26 prompts</strong>
              <p>Six minutes in the current EXAMITICS simulation.</p>
            </div>

            <div className="sct-format-card">
              <span className="sct-format-label">BEFORE YOU START</span>
              <h3>Prepare your materials</h3>
              <strong>Paper + pencil</strong>
              <p>
                The practice interface does not contain answer-entry
                fields. Record your responses on paper.
              </p>
            </div>
          </div>

          <p className="sct-disclaimer">
            Important: these details describe the current EXAMITICS
            practice implementation. They are not a statement of official
            ISSB test length, format, scoring, or selection criteria.
          </p>
        </section>

        <section className="sct-section">
          <div className="sct-section-heading">
            <span className="sct-section-kicker">PRACTICAL GUIDANCE</span>
            <h2>How to prepare for SCT sentence completion</h2>
            <p>
              Practise responding thoughtfully instead of memorising
              prepared sentences. The objective of this exercise is to
              improve your familiarity with unfinished statements and
              communicate a coherent thought.
            </p>
          </div>

          <div className="sct-steps">
            {practiceSteps.map((step) => (
              <article className="sct-step-card" key={step.number}>
                <span className="sct-step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="sct-section sct-section-soft">
          <div className="sct-section-heading">
            <span className="sct-section-kicker">RESPONSE PRINCIPLES</span>
            <h2>Four useful habits for SCT practice</h2>
            <p>
              Use these principles to review your own practice. They are
              general writing suggestions, not an official ISSB scoring
              rubric or a formula for selection.
            </p>
          </div>

          <div className="sct-principles-grid">
            {responsePrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <article className="sct-principle-card" key={item.title}>
                  <div className="sct-principle-icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="sct-cta-section">
          <div className="sct-cta-content">
            <span className="sct-section-kicker">
              READY TO PRACTISE?
            </span>
            <h2>Build familiarity with SCT, one sentence at a time.</h2>
            <p>
              Select a practice set, keep your paper ready, and work
              through the English and Urdu prompts. Review your responses
              afterwards to improve clarity and consistency.
            </p>

            <Link to="/sct-test" className="sct-btn sct-btn-primary">
              Start SCT Practice Now
              <FiArrowRight />
            </Link>
          </div>
        </section>

        <section className="sct-section sct-faq-section" id="sct-faq">
          <div className="sct-section-heading">
            <span className="sct-section-kicker">COMMON QUESTIONS</span>
            <h2>SCT Test FAQs</h2>
            <p>
              Answers to common questions about sentence-completion
              practice and the EXAMITICS SCT simulation.
            </p>
          </div>

          <div className="sct-faq-list">
            {faqs.map((faq, index) => (
              <details className="sct-faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="sct-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="sct-editorial-note">
          <p>
            <strong>About this resource:</strong> EXAMITICS provides
            independent educational resources for candidates preparing
            for Pakistan Armed Forces selection processes. This SCT
            practice tool is not affiliated with or endorsed by ISSB or
            any armed-forces recruitment authority. For official
            requirements and procedures, consult the relevant official
            sources.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SCTPage;
