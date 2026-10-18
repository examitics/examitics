
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiCompass,
  FiEdit3,
  FiImage,
  FiShield,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

import "../styles/tat-landing.css";

const faqs = [
  {
    question: "What is the TAT test in ISSB?",
    answer:
      "TAT commonly refers to the Thematic Apperception Test. It is a picture-based story-writing exercise discussed in ISSB preparation. Candidates practise observing a scene and developing a coherent story. EXAMITICS provides an independent educational simulation, not an official ISSB assessment.",
  },
  {
    question: "What does TAT stand for?",
    answer:
      "TAT stands for Thematic Apperception Test. In picture-story practice, a participant observes an image and creates a story related to the scene. Candidates should use official recruitment guidance for authoritative information about current assessment procedures.",
  },
  {
    question: "How does the EXAMITICS TAT practice test work?",
    answer:
      "The current EXAMITICS simulation randomly selects a practice set. Each set contains picture-based prompts and short written pointer prompts. The interface gives you a timed observation phase followed by a story-writing phase, with audio cues to mark transitions.",
  },
  {
    question: "How much observation time is provided?",
    answer:
      "The current EXAMITICS practice configuration provides 30 seconds to observe each prompt. This is the timing used by our practice tool and is not a guarantee of the timing used in an official assessment.",
  },
  {
    question: "How much time is available to write a story?",
    answer:
      "In the current EXAMITICS practice sets, picture prompts have a 210-second writing phase, while pointer prompts have a 180-second writing phase. These settings describe our simulation only and should not be treated as official ISSB rules.",
  },
  {
    question: "How many prompts are in each EXAMITICS TAT set?",
    answer:
      "Each currently enabled EXAMITICS TAT set contains six prompts: four picture-based prompts and two text-based pointer prompts. The available sets and content may change as the practice resource is updated.",
  },
  {
    question: "How should I write a TAT story?",
    answer:
      "Observe the scene carefully, identify a plausible situation, and write a coherent story with a clear beginning, relevant actions, and a realistic outcome. Practise clarity, logical sequencing, and concise expression rather than memorising supposedly perfect stories.",
  },
  {
    question: "Are there model answers for every TAT picture?",
    answer:
      "A picture may support more than one plausible story. The EXAMITICS practice tool is designed to let you practise creating your own response; it does not provide an official scoring decision for your story.",
  },
  {
    question: "Can TAT practice guarantee ISSB selection?",
    answer:
      "No. Online practice cannot guarantee selection or predict an official ISSB decision. Use this exercise to build familiarity with timed observation and story writing as part of broader preparation.",
  },
  {
    question: "Is the EXAMITICS TAT test an official ISSB test?",
    answer:
      "No. EXAMITICS is an independent educational platform. This simulation and its prompts are practice materials, not an official ISSB assessment or an authoritative description of current recruitment procedures.",
  },
];

const practiceSteps = [
  {
    number: "01",
    title: "Observe the prompt",
    text:
      "Study the picture or read the text prompt carefully. Notice the people, setting, visible actions, and relevant details.",
  },
  {
    number: "02",
    title: "Form a logical situation",
    text:
      "Develop a plausible idea about what is happening and what problem, goal, or decision may be involved.",
  },
  {
    number: "03",
    title: "Write a coherent story",
    text:
      "Describe the situation, the main character's relevant actions, and a realistic outcome in clear, connected sentences.",
  },
  {
    number: "04",
    title: "Review your approach",
    text:
      "After practice, reflect on relevance, logical sequence, clarity, and how effectively you used the available time.",
  },
];

const storyPrinciples = [
  {
    title: "Relevance",
    text:
      "Keep your story connected to the visible scene or the supplied pointer. Avoid adding unrelated events.",
    icon: FiTarget,
  },
  {
    title: "Logical sequence",
    text:
      "Make the situation, actions, and outcome follow a sensible order that readers can understand.",
    icon: FiCompass,
  },
  {
    title: "Clear expression",
    text:
      "Use simple, direct language. Focus on communicating a complete story instead of unnecessarily complex wording.",
    icon: FiEdit3,
  },
  {
    title: "Realistic action",
    text:
      "Give the main character a plausible role in the story and describe actions that fit the situation.",
    icon: FiCheckCircle,
  },
];

const TAT = () => {
  const practiceUrl = "https://www.examitics.com/tat-test";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "TAT Test for ISSB | Online Picture Story Practice",
    url: "https://www.examitics.com/tat",
    description:
      "Learn about the TAT picture-story exercise and practise timed story writing with the EXAMITICS online TAT simulation.",
    isPartOf: {
      "@type": "WebSite",
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
          TAT Test for ISSB | Online Picture Story Practice - EXAMITICS
        </title>

        <meta
          name="description"
          content="Learn about the TAT test for ISSB and practise picture-story writing online. Explore the EXAMITICS TAT format, practice timings, story-writing tips, and FAQs."
        />

        <meta
          name="keywords"
          content="TAT test for ISSB, ISSB TAT test, Thematic Apperception Test, TAT practice online, picture story test, ISSB story writing practice, TAT preparation, EXAMITICS"
        />

        <meta name="author" content="EXAMITICS" />
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.examitics.com/tat"
        />

        <meta
          property="og:title"
          content="TAT Test for ISSB | Online Picture Story Practice"
        />
        <meta
          property="og:description"
          content="Understand the TAT picture-story exercise and practise timed story writing with EXAMITICS."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />
        <meta
          property="og:url"
          content="https://www.examitics.com/tat"
        />
        <meta
          property="og:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TAT Test for ISSB | EXAMITICS"
        />
        <meta
          name="twitter:description"
          content="Learn about TAT story-writing practice, preparation principles, and the EXAMITICS online simulation."
        />
        <meta
          name="twitter:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
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
            name: "TAT Test",
            url: "https://www.examitics.com/tat",
          },
        ]}
      />

      <Navbar />

      <main className="tat-landing">
        <section className="tat-hero">
          <div className="tat-hero-content">
            <span className="tat-eyebrow">
              ISSB PREPARATION · TAT PRACTICE
            </span>

            <h1>
              TAT Test for ISSB: Online Picture Story Practice
            </h1>

            <p className="tat-hero-description">
              Learn how a picture-story exercise works, practise
              observing prompts under time limits, and develop clear,
              logical stories with the EXAMITICS TAT practice simulation.
            </p>

            <div className="tat-hero-actions">
              <Link to="/tat-test" className="tat-btn tat-btn-primary">
                Start TAT Practice <FiArrowRight />
              </Link>

              <a href="#tat-guide" className="tat-btn tat-btn-secondary">
                Explore the Guide <FiBookOpen />
              </a>
            </div>

            <div className="tat-hero-points">
              <span>
                <FiClock /> Timed practice
              </span>
              <span>
                <FiImage /> Picture and text prompts
              </span>
              <span>
                <FiCheckCircle /> Practice at your own pace
              </span>
            </div>
          </div>

          <div className="tat-hero-visual">
            <div className="tat-visual-top">
              <div className="tat-visual-icon">
                <FiBookOpen />
              </div>
              <div>
                <span className="tat-visual-kicker">
                  PRACTICE OVERVIEW
                </span>
                <h2>Inside the TAT simulation</h2>
              </div>
            </div>

            <div className="tat-visual-divider" />

            <div className="tat-visual-row">
              <span>Enabled practice sets</span>
              <strong>3</strong>
            </div>
            <div className="tat-visual-row">
              <span>Prompts per set</span>
              <strong>6</strong>
            </div>
            <div className="tat-visual-row">
              <span>Observation phase</span>
              <strong>30 seconds</strong>
            </div>
            <div className="tat-visual-row">
              <span>Picture story writing</span>
              <strong>3 min 30 sec</strong>
            </div>
            <div className="tat-visual-row">
              <span>Pointer writing</span>
              <strong>3 minutes</strong>
            </div>

            <div className="tat-visual-note">
              <FiShield />
              <p>
                These details describe the current EXAMITICS practice
                configuration, not official ISSB timing requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="tat-quick-answer">
          <div className="tat-section-icon">
            <FiCompass />
          </div>
          <div>
            <span className="tat-section-label">QUICK ANSWER</span>
            <h2>What is the TAT test?</h2>
            <p>
              TAT stands for Thematic Apperception Test. In picture-story
              practice, a participant observes a scene and develops a
              related story. EXAMITICS provides a timed educational
              simulation so candidates can practise observation, logical
              story development, and clear writing. It is not an official
              ISSB assessment.
            </p>
          </div>
        </section>

        <section className="tat-section" id="tat-guide">
          <div className="tat-section-heading">
            <span className="tat-section-label">UNDERSTAND THE EXERCISE</span>
            <h2>How does a TAT picture-story exercise work?</h2>
            <p>
              The aim of practice is to turn a prompt into a clear,
              relevant, and logically connected story within the time
              available.
            </p>
          </div>

          <div className="tat-process-grid">
            <article className="tat-process-card">
              <div className="tat-card-icon"><FiImage /></div>
              <span className="tat-card-step">STEP 01</span>
              <h3>Observe the picture</h3>
              <p>
                Look at the setting, people, actions, and details that
                may help you understand the situation.
              </p>
            </article>

            <article className="tat-process-card">
              <div className="tat-card-icon"><FiCompass /></div>
              <span className="tat-card-step">STEP 02</span>
              <h3>Build a plausible story</h3>
              <p>
                Decide what may be happening, what the main character
                does, and how the situation could develop.
              </p>
            </article>

            <article className="tat-process-card">
              <div className="tat-card-icon"><FiEdit3 /></div>
              <span className="tat-card-step">STEP 03</span>
              <h3>Write within the time</h3>
              <p>
                Present the events in a clear sequence and finish with
                a realistic outcome connected to the prompt.
              </p>
            </article>
          </div>
        </section>

        <section className="tat-example-section">
          <div className="tat-example-content">
            <span className="tat-section-label">PRACTICE APPROACH</span>
            <h2>How to approach a story prompt</h2>
            <p>
              Avoid spending the entire observation period trying to
              invent a complicated plot. Identify a plausible situation,
              choose a clear course of action, and organise your ideas
              before writing.
            </p>
            <p>
              For text-based pointer prompts, use the supplied sentence
              as the starting point for a relevant story rather than
              treating it as a picture description.
            </p>
            <Link to="/tat-test" className="tat-btn tat-btn-primary">
              Try TAT Practice <FiArrowRight />
            </Link>
          </div>

          <div className="tat-example-panel">
            <span className="tat-example-label">SIMPLE STORY FRAMEWORK</span>
            <div className="tat-example-step">
              <span>1</span>
              <div>
                <strong>Situation</strong>
                <p>Explain the relevant context.</p>
              </div>
            </div>
            <div className="tat-example-step">
              <span>2</span>
              <div>
                <strong>Action</strong>
                <p>Describe a plausible response or decision.</p>
              </div>
            </div>
            <div className="tat-example-step">
              <span>3</span>
              <div>
                <strong>Outcome</strong>
                <p>Finish with a logical result.</p>
              </div>
            </div>
            <p className="tat-example-disclaimer">
              This is a writing aid, not an official scoring formula or
              a guaranteed model answer.
            </p>
          </div>
        </section>

        <section className="tat-section">
          <div className="tat-section-heading">
            <span className="tat-section-label">STORY-WRITING PRINCIPLES</span>
            <h2>What to focus on during TAT practice</h2>
            <p>
              Use these principles to review your own writing and
              identify areas to improve with repeated practice.
            </p>
          </div>

          <div className="tat-principles-grid">
            {storyPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <article className="tat-principle-card" key={item.title}>
                  <div className="tat-card-icon"><Icon /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="tat-section">
          <div className="tat-section-heading">
            <span className="tat-section-label">PREPARATION GUIDE</span>
            <h2>How to prepare for TAT story-writing practice</h2>
            <p>
              Build a repeatable approach rather than memorising
              prepared stories for every possible picture.
            </p>
          </div>

          <div className="tat-steps-list">
            {practiceSteps.map((step) => (
              <article className="tat-step-row" key={step.number}>
                <span className="tat-step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="tat-practice-cta">
          <div className="tat-cta-icon"><FiTarget /></div>
          <div className="tat-cta-content">
            <span className="tat-section-label">PUT YOUR SKILLS INTO PRACTICE</span>
            <h2>Ready to try the EXAMITICS TAT simulation?</h2>
            <p>
              Start a timed practice set, follow the on-screen phases,
              and work on making your stories clear, relevant, and
              logically structured.
            </p>
          </div>
          <Link to="/tat-test" className="tat-btn tat-btn-primary">
            Start TAT Practice <FiArrowRight />
          </Link>
        </section>

        <section className="tat-section tat-faq-section" id="tat-faq">
          <div className="tat-section-heading">
            <span className="tat-section-label">COMMON QUESTIONS</span>
            <h2>TAT test for ISSB: Frequently asked questions</h2>
          </div>

          <div className="tat-faq-list">
            {faqs.map((faq) => (
              <details className="tat-faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="tat-disclaimer">
          <FiShield />
          <div>
            <h2>Important information</h2>
            <p>
              EXAMITICS is an independent educational platform. This
              page and its practice simulation are not official ISSB
              materials. Practice timings, prompts, and interface
              features describe the current EXAMITICS implementation and
              may differ from any formal assessment. Consult official
              recruitment guidance for authoritative information.
            </p>
          </div>
        </section>

        <section className="tat-final-cta">
          <span className="tat-section-label">EXAMITICS · ISSB PREPARATION</span>
          <h2>Practise observation. Build your story. Improve with consistency.</h2>
          <p>
            Use timed exercises to develop familiarity with picture-story
            writing and review your approach after every practice session.
          </p>
          <Link to="/tat-test" className="tat-btn tat-btn-primary">
            Start TAT Practice <FiArrowRight />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TAT;
