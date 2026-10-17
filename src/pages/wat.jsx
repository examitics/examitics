
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
  FiEdit3,
  FiHelpCircle,
  FiMessageCircle,
  FiShield,
  FiTarget,
  FiZap,
} from "react-icons/fi";

import "../styles/wat-landing.css";

const faqs = [
  {
    question: "What is the WAT test in ISSB?",
    answer:
      "WAT stands for Word Association Test. In ISSB preparation, candidates can practise responding to stimulus words by writing short, meaningful responses within a limited time. EXAMITICS provides an independent practice simulation to help candidates develop familiarity with this exercise. It is not an official ISSB test.",
  },
  {
    question: "What does WAT stand for?",
    answer:
      "WAT stands for Word Association Test. The general format presents a word and asks the participant to respond with an associated thought, sentence, or reaction. Exact procedures may vary between assessments.",
  },
  {
    question: "How do I practise the WAT test online?",
    answer:
      "Open the EXAMITICS WAT practice module, select one of the available practice sets, read the instructions, and begin when ready. In the current EXAMITICS simulation, words are displayed one at a time with a countdown and audio cues.",
  },
  {
    question: "How much time is given for each word in EXAMITICS WAT practice?",
    answer:
      "The current EXAMITICS WAT practice instructions specify 10 seconds per word. This describes our practice simulation and should not be interpreted as confirmation of the timing used in every official assessment.",
  },
  {
    question: "How many WAT practice sets are available?",
    answer:
      "The current EXAMITICS practice interface provides five selectable sets. Each set uses its own word list. Check the instructions shown in the practice module before starting.",
  },
  {
    question: "How should I write a WAT response?",
    answer:
      "Read the stimulus word, identify a meaningful association, and write a short, clear response that reflects a realistic thought or action. Practise expressing yourself naturally and promptly rather than memorising supposedly perfect responses.",
  },
  {
    question: "Are there correct or incorrect answers in a word association test?",
    answer:
      "Word association exercises do not always work like conventional multiple-choice questions with one correct answer. The relevance and interpretation of a response depend on the assessment and its evaluation method. EXAMITICS practice should not be treated as an official psychological evaluation.",
  },
  {
    question: "Can WAT practice guarantee ISSB selection?",
    answer:
      "No. Online practice cannot guarantee selection or predict an official ISSB decision. Use practice exercises to build familiarity and communication skills alongside broader preparation and official recruitment guidance.",
  },
  {
    question: "Is the EXAMITICS WAT test an official ISSB test?",
    answer:
      "No. EXAMITICS is an independent educational platform. Its WAT simulation and practice words are not an official ISSB assessment and should not be taken as an authoritative description of current recruitment procedures.",
  },
  {
    question: "Can word association practice help with general vocabulary and thinking?",
    answer:
      "Word association activities can provide opportunities to practise vocabulary, quick idea generation, concise writing, and making meaningful connections between concepts. Results depend on the individual and the practice activity.",
  },
];

const practiceSteps = [
  {
    number: "01",
    title: "Read the stimulus word",
    text:
      "Focus on the word shown on screen and identify its meaning before forming your response.",
  },
  {
    number: "02",
    title: "Make a meaningful association",
    text:
      "Think of a realistic idea, action, or observation that relates directly to the word.",
  },
  {
    number: "03",
    title: "Respond clearly and promptly",
    text:
      "Practise expressing one understandable thought rather than trying to create an unnecessarily complicated sentence.",
  },
  {
    number: "04",
    title: "Review your practice",
    text:
      "After completing a set, reflect on clarity, relevance, natural expression, and how effectively you managed the time available.",
  },
];

const responsePrinciples = [
  {
    title: "Relevance",
    text:
      "Keep the response connected to the stimulus word instead of writing something unrelated.",
  },
  {
    title: "Clarity",
    text:
      "Use simple, understandable language to communicate one complete idea.",
  },
  {
    title: "Natural expression",
    text:
      "Practise responses that reflect genuine thoughts instead of relying on memorised templates.",
  },
  {
    title: "Time management",
    text:
      "Become familiar with responding promptly while keeping your writing legible and meaningful.",
  },
];

const WAT = () => {
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

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "WAT Test for ISSB | Online Word Association Practice",
    url: "https://www.examitics.com/wat",
    description:
      "Learn how word association practice works, explore response-writing tips, and practise the WAT simulation online with EXAMITICS.",
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

  return (
    <>
      <Helmet>
        <title>
          WAT Test for ISSB | Free Online Word Association Practice - EXAMITICS
        </title>

        <meta
          name="description"
          content="Practise the WAT test for ISSB online with EXAMITICS. Learn word association techniques, explore response-writing tips, understand the practice format, and try five WAT practice sets."
        />

        <meta
          name="keywords"
          content="WAT test for ISSB, ISSB WAT practice, Word Association Test, online WAT test, free WAT practice, word association exercises, word association test online, psychological test preparation, quick thinking exercises, EXAMITICS"
        />

        <meta name="author" content="EXAMITICS" />
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.examitics.com/wat"
        />

        <meta
          property="og:title"
          content="WAT Test for ISSB | Online Word Association Practice - EXAMITICS"
        />
        <meta
          property="og:description"
          content="Learn about the Word Association Test, practise concise responses, and try the EXAMITICS WAT simulation online."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />
        <meta
          property="og:url"
          content="https://www.examitics.com/wat"
        />
        <meta
          property="og:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="WAT Test for ISSB | EXAMITICS"
        />
        <meta
          name="twitter:description"
          content="Explore word association practice, response-writing tips, and online WAT practice for ISSB preparation and general learning."
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
            name: "WAT Test",
            url: "https://www.examitics.com/wat",
          },
        ]}
      />

      <Navbar />

      <main className="wat-landing">
        {/* HERO */}
        <section className="wat-hero">
          <div className="wat-hero-content">
            <span className="wat-eyebrow">
              EXAMITICS · WORD ASSOCIATION PRACTICE
            </span>

            <h1>
              WAT Test for ISSB: Free Online Word Association Practice
            </h1>

            <p className="wat-hero-description">
              Learn how word association exercises work, practise turning
              stimulus words into clear and meaningful responses, and build
              familiarity with timed practice. Designed for ISSB candidates
              and anyone interested in word association activities.
            </p>

            <div className="wat-hero-actions">
              <Link to="/wat-test" className="wat-btn wat-btn-primary">
                Start WAT Practice <FiArrowRight />
              </Link>

              <a href="#wat-basics" className="wat-btn wat-btn-secondary">
                Learn the Basics
              </a>
            </div>

            <div className="wat-hero-points">
              <span>
                <FiCheckCircle /> Five practice sets
              </span>
              <span>
                <FiClock /> Timed word presentation
              </span>
              <span>
                <FiEdit3 /> Response-writing practice
              </span>
            </div>
          </div>

          <div className="wat-hero-visual">
            <div className="wat-visual-top">
              <div className="wat-visual-icon">
                <FiMessageCircle />
              </div>

              <div>
                <span className="wat-visual-kicker">PRACTICE MODULE</span>
                <h2>Word Association Test</h2>
              </div>
            </div>

            <div className="wat-visual-divider" />

            <div className="wat-visual-row">
              <span>Practice sets</span>
              <strong>1–5</strong>
            </div>

            <div className="wat-visual-row">
              <span>Word display time</span>
              <strong>10 seconds</strong>
            </div>

            <div className="wat-visual-row">
              <span>Response format</span>
              <strong>Short written response</strong>
            </div>

            <div className="wat-visual-note">
              <FiShield />
              <p>
                These details describe the EXAMITICS practice tool,
                not a guarantee of the format used by an official assessment.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK ANSWER */}
        <section className="wat-quick-answer" id="wat-basics">
          <div className="wat-section-icon">
            <FiCompass />
          </div>

          <div>
            <span className="wat-section-label">QUICK ANSWER</span>
            <h2>What is the WAT test?</h2>

            <p>
              WAT means Word Association Test. In a typical word association
              exercise, a participant sees a stimulus word and responds with
              a related thought or sentence. The exercise can be used to
              practise vocabulary, quick idea generation, and concise
              expression. EXAMITICS offers a timed practice simulation for
              educational preparation, not an official psychological
              evaluation.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="wat-section">
          <div className="wat-section-heading">
            <span className="wat-section-label">UNDERSTAND THE FORMAT</span>
            <h2>How does a word association exercise work?</h2>
            <p>
              A stimulus word gives you a starting point. Your task in a
              practice exercise is to make a meaningful association and
              express it clearly within the available time.
            </p>
          </div>

          <div className="wat-process-grid">
            <article className="wat-process-card">
              <div className="wat-card-icon">
                <FiBookOpen />
              </div>
              <span className="wat-card-step">STEP 01</span>
              <h3>See a word</h3>
              <p>
                A single stimulus word appears on the screen. Read it
                carefully and focus on its meaning.
              </p>
            </article>

            <article className="wat-process-card">
              <div className="wat-card-icon">
                <FiCompass />
              </div>
              <span className="wat-card-step">STEP 02</span>
              <h3>Form an association</h3>
              <p>
                Think of a relevant idea, observation, or action that
                naturally relates to the word.
              </p>
            </article>

            <article className="wat-process-card">
              <div className="wat-card-icon">
                <FiEdit3 />
              </div>
              <span className="wat-card-step">STEP 03</span>
              <h3>Write your response</h3>
              <p>
                Express the thought in a short, clear sentence during
                your practice session.
              </p>
            </article>
          </div>
        </section>

        {/* EXAMPLE */}
        <section className="wat-example-section">
          <div className="wat-example-content">
            <span className="wat-section-label">LEARN WITH AN EXAMPLE</span>
            <h2>How to respond to a stimulus word</h2>

            <p>
              Suppose the stimulus word is <strong>“Teamwork.”</strong>
              A useful practice response might be:
            </p>

            <blockquote className="wat-example-quote">
              Effective teamwork helps people achieve shared goals.
            </blockquote>

            <p>
              This example demonstrates a clear connection to the stimulus
              word. It is an illustration of response writing, not an
              officially prescribed or guaranteed correct answer.
            </p>
          </div>

          <div className="wat-example-visual">
            <div className="wat-example-word">TEAMWORK</div>
            <FiArrowRight className="wat-example-arrow" />
            <div className="wat-example-response">
              A clear, relevant thought
            </div>
            <div className="wat-example-caption">
              <FiCheckCircle />
              Connect the word to one meaningful idea
            </div>
          </div>
        </section>

        {/* RESPONSE PRINCIPLES */}
        <section className="wat-section">
          <div className="wat-section-heading">
            <span className="wat-section-label">PRACTICAL GUIDANCE</span>
            <h2>Principles for effective WAT practice</h2>
            <p>
              Use these principles to improve the clarity and consistency
              of your responses. Avoid relying on memorised sentences.
            </p>
          </div>

          <div className="wat-principles-grid">
            {responsePrinciples.map((item) => (
              <article className="wat-principle-card" key={item.title}>
                <FiCheckCircle />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PREPARATION STEPS */}
        <section className="wat-section">
          <div className="wat-section-heading">
            <span className="wat-section-label">PREPARATION STRATEGY</span>
            <h2>How to prepare for the WAT test</h2>
            <p>
              Build familiarity through regular practice and thoughtful
              review instead of trying to memorise a perfect response
              for every possible word.
            </p>
          </div>

          <div className="wat-steps">
            {practiceSteps.map((step) => (
              <article className="wat-step" key={step.number}>
                <span className="wat-step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PRACTICE CTA */}
        <section className="wat-practice-cta">
          <div className="wat-cta-icon">
            <FiTarget />
          </div>

          <div className="wat-cta-content">
            <span className="wat-section-label">READY TO PRACTISE?</span>
            <h2>Try the EXAMITICS timed WAT simulation</h2>
            <p>
              Choose a practice set, follow the on-screen instructions,
              and work through the stimulus words at the configured pace.
            </p>
          </div>

          <Link to="/wat-test" className="wat-btn wat-btn-light">
            Start WAT Practice <FiArrowRight />
          </Link>
        </section>

        {/* FAQ */}
        <section className="wat-section wat-faq-section">
          <div className="wat-section-heading">
            <span className="wat-section-label">COMMON QUESTIONS</span>
            <h2>WAT test for ISSB: Frequently asked questions</h2>
            <p>
              Answers about word association practice, preparation,
              timing, and the EXAMITICS practice module.
            </p>
          </div>

          <div className="wat-faq-list">
            {faqs.map((faq) => (
              <details className="wat-faq-item" key={faq.question}>
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
        <section className="wat-disclaimer">
          <FiShield />

          <div>
            <h2>Important information</h2>
            <p>
              EXAMITICS is an independent educational platform. This WAT
              practice simulation is not published by ISSB or an armed-forces
              recruitment authority. Practice examples and timing are not
              official test specifications, psychological diagnoses, or
              guarantees of selection. Consult official recruitment guidance
              for authoritative information.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="wat-final-cta">
          <span className="wat-section-label">YOUR NEXT STEP</span>

          <h2>
            Practise word association. Improve clarity. Build consistency.
          </h2>

          <p>
            Continue your preparation with the EXAMITICS WAT practice sets.
          </p>

          <Link to="/wat-test" className="wat-btn wat-btn-primary">
            Start WAT Practice <FiArrowRight />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WAT;
