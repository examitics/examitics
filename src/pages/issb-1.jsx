
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";
import ISSBCommunityAudio from "../components/ISSBCommunityAudio";

import watImg from "../assets/images/wat-img.png";
import tatImg from "../assets/images/tat-img.png";
import sctImg from "../assets/images/sct-img.png";
import opiImg from "../assets/images/opi-img.png";
import matImg from "../assets/images/mat-img.png";
import srtImg from "../assets/images/srt-img.webp";
import quickmath from "../assets/images/quick-math.png";

import {
  FiShield,
  FiTarget,
  FiUsers,
  FiMessageSquare,
  FiActivity,
  FiCheckCircle,
  FiArrowRight,
  FiClock,
  FiBookOpen,
  FiAward,
  FiTrendingUp,
  FiCompass,
  FiMic,
  FiHeart,
  FiFlag,
  FiZap,
  FiChevronDown,
  FiPlayCircle,
  FiExternalLink,
} from "react-icons/fi";

import "../styles/issb-1.css";

// ======================================================
// PAGE CONFIGURATION
// ======================================================

const SITE_URL = "https://www.examitics.com";
const PAGE_URL = `${SITE_URL}/issb-1`;
const OG_IMAGE = `${SITE_URL}/images/examitics-banner.png`;

// ======================================================
// HERO CAROUSEL
// ======================================================

const heroSlides = [
  {
    image:
      "https://www.pakistantoday.com.pk/uploads/thumbs/Parade-cmlgsig9kfq2o58pqxj7ykprj-1200.webp",
    alt: "ISSB candidate preparation and selection environment",
    title: "Prepare with purpose",
  },
  {
    image: "https://brainymedforcesacademy.com/assets/paf-pilots-jf17-CZBO5SKB.jpg",
    alt: "Word Association Test preparation for ISSB candidates",
    title: "Develop positive thinking",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPrS3ZCJPYug2Rvf1nOkd70uOQ0UTmW1X2kFNiRBQnmj9sLWw5pvkrkuF&s=10",
    alt: "Picture story writing practice for ISSB psychological assessment",
    title: "Build your thinking skills",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNDqRpX1wkcmxI-tP_QtlCwBGZiRPVeD0NdHqg-mwFToF2mbn4dCSZw87&s=10",
    alt: "Situation Reaction Test practice for ISSB preparation",
    title: "Improve practical judgment",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRunp5lFMyojkWDUEJwNykOyxxHsvya4TzZQr4-vMhFtw&s=10",
    alt: "Mechanical aptitude practice for ISSB preparation",
    title: "Strengthen your reasoning",
  },
];

// ======================================================
// PSYCHOLOGICAL TESTS
// ======================================================

const psychTests = [
  {
    title: "WAT",
    subtitle: "Word Association Test",
    description:
      "Practise responding to words with clear, relevant and constructive thoughts. Develop quick thinking and concise expression.",
    image: watImg,
    exploreUrl: "/wat",
    practiceUrl: "/wat-test",
    exploreText: "Explore WAT",
    practiceText: "Start WAT Practice",
  },
  {
    title: "TAT",
    subtitle: "Thematic Apperception Test",
    description:
      "Practise picture-based story writing, logical sequencing, observation and realistic problem-solving.",
    image: tatImg,
    exploreUrl: "/tat",
    practiceUrl: "/tat-test",
    exploreText: "Explore TAT",
    practiceText: "Start TAT Practice",
  },
  {
    title: "SCT",
    subtitle: "Sentence Completion Test",
    description:
      "Explore sentence completion exercises and practise expressing thoughts clearly and naturally.",
    image: sctImg,
    exploreUrl: "/sct",
    practiceUrl: "/sct-test",
    exploreText: "Explore SCT",
    practiceText: "Start SCT Practice",
  },
  {
    title: "OPI",
    subtitle: "Officer Potential Inventory",
    description:
      "Explore personality-related self-reflection and practise questions about personal habits, attitudes and behavior.",
    image: opiImg,
    exploreUrl: "/opi",
    practiceUrl: "/opi-test",
    exploreText: "Explore OPI",
    practiceText: "Start OPI Practice",
  },
  {
    title: "SRT",
    subtitle: "Situation Reaction Test",
    description:
      "Practise responding to everyday situations with practical judgment, responsibility and timely decision-making.",
    image: srtImg,
    exploreUrl: "#psych-tests",
    practiceUrl: "/srt",
    exploreText: "ISSB Overview",
    practiceText: "Start SRT Practice",
  },
  {
    title: "MAT",
    subtitle: "Mechanical Aptitude Test",
    description:
      "Understand basic mechanical concepts, gears, levers, pulleys, motion and practical mechanical reasoning.",
    image: matImg,
    exploreUrl: "/mat",
    practiceUrl: "/mock/mat/set1",
    exploreText: "Explore MAT",
    practiceText: "Start MAT Practice",
  },
];

// ======================================================
// ADDITIONAL PRACTICE TOOLS
// ======================================================

const additionalTools = [
  {
    title: "Quick Math",
    subtitle: "Mental Mathematics Practice",
    description:
      "Improve calculation speed, numerical confidence and mental arithmetic for preparation and interviews.",
    image: quickmath,
    exploreUrl: "/quick-math",
    practiceUrl: "/quick-math/practice",
  },
];

// ======================================================
// PHYSICAL OBSTACLES
// ======================================================

const obstacles = [
  "Monkey Bridge",
  "Tarzan Swing",
  "Rope Climbing",
  "Ditch Crossing",
  "High Jump",
  "Zig Zag",
  "Boxing Ring",
  "Tire Crossing",
  "Hanging Log",
];

// ======================================================
// GTO PREPARATION
// ======================================================

const gtoTasks = [
  {
    title: "Group Discussion",
    short: "GD",
    icon: FiUsers,
    description:
      "This test is conducted by Deputy President. Practise presenting ideas, listening to others, discussing different viewpoints and contributing constructively to group discussions.",
  },
  {
    title: "Group Planning Exercise",
    short: "GPE",
    icon: FiCompass,
    description:
      "Develop the ability to understand a situation, identify priorities, organize available resources and communicate a practical plan.",
  },
  {
    title: "Progressive Group Task",
    short: "PGT",
    icon: FiTarget,
    description:
      "Learn about cooperation, communication, problem-solving and coordinated teamwork while approaching group challenges.",
  },
  {
    title: "Half Group Task",
    short: "HGT",
    icon: FiUsers,
    description:
      "Understand how smaller teams coordinate responsibilities, exchange ideas and work toward a shared objective.",
  },
  {
    title: "Command Task",
    short: "CT",
    icon: FiFlag,
    description:
      "Explore decision-making, communication, responsibility and leadership while managing a task with a team.",
  },
  {
    title: "Lecturette",
    short: "LT",
    icon: FiMic,
    description:
      "Improve public speaking, topic organization, confidence and the ability to communicate ideas within a limited time.",
  },
  {
    title: "Individual Obstacles",
    short: "IO",
    icon: FiActivity,
    description:
      "Develop physical confidence, agility, balance, coordination and determination through appropriate physical preparation.",
  },
  {
    title: "Final Group Task",
    short: "FGT",
    icon: FiAward,
    description:
      "Understand the importance of teamwork, communication and collective problem-solving in a group challenge.",
  },
];

// ======================================================
// PREPARATION ROADMAP
// ======================================================

const preparationSteps = [
  {
    number: "01",
    title: "Understand the ISSB Process",
    description:
      "Learn about the selection process, assessment activities and the purpose of different preparation areas.",
    icon: FiBookOpen,
  },
  {
    number: "02",
    title: "Practise Psychological Tests",
    description:
      "Build familiarity with WAT, TAT, SCT, OPI, SRT and mechanical aptitude practice.",
    icon: FiTarget,
  },
  {
    number: "03",
    title: "Develop Communication Skills",
    description:
      "Practise group discussions, lecturettes, listening, clear expression and respectful communication.",
    icon: FiMessageSquare,
  },
  {
    number: "04",
    title: "Prepare for GTO Activities",
    description:
      "Learn about group tasks, planning, cooperation, initiative and responsible leadership.",
    icon: FiUsers,
  },
  {
    number: "05",
    title: "Work on Physical Fitness",
    description:
      "Develop suitable stamina, mobility, balance and physical confidence through safe training.",
    icon: FiActivity,
  },
  {
    number: "06",
    title: "Prepare for Interviews",
    description:
      "Reflect on your education, interests, family background, experiences, goals and general awareness.",
    icon: FiAward,
  },
];

// ======================================================
// INTERVIEW TOPICS
// ======================================================

const interviewTopics = [
  "Personal introduction",
  "Academic background",
  "Family background",
  "Hobbies and interests",
  "Personal strengths and areas for improvement",
  "General knowledge",
  "Pakistan affairs",
  "Current affairs",
  "Educational and career goals",
  "Decision-making and personal experiences",
];

// ======================================================
// OFFICER-LIKE QUALITIES
// ======================================================

const officerQualities = [
  "Leadership",
  "Confidence",
  "Discipline",
  "Communication",
  "Teamwork",
  "Responsibility",
  "Initiative",
  "Courage",
  "Cooperation",
  "Sound Judgment",
  "Integrity",
  "Determination",
];

// ======================================================
// FAQ CONTENT
// Keep answers consistent with visible page content.
// ======================================================

const faqs = [
  {
    question: "What is ISSB in Pakistan?",
    answer:
      "ISSB stands for Inter Services Selection Board. It is associated with the selection and assessment of candidates for officer-level entry into Pakistan's armed forces. Candidates should consult the relevant official armed-forces recruitment channels for current eligibility criteria, schedules and selection instructions.",
  },
  {
    question: "How can I prepare for ISSB in Pakistan?",
    answer:
      "A balanced ISSB preparation plan can include understanding the selection process, practising psychological exercises, improving communication, learning about GTO activities, maintaining physical fitness and preparing to discuss your education, interests and personal experiences.",
  },
  {
    question: "Which psychological tests can I practise on EXAMITICS?",
    answer:
      "EXAMITICS provides educational practice resources for Word Association Test (WAT), Thematic Apperception Test (TAT), Sentence Completion Test (SCT), Officer Potential Inventory (OPI), Situation Reaction Test (SRT) and Mechanical Aptitude Test (MAT). These are independent practice resources, not official ISSB assessments.",
  },
  {
    question: "What are GTO tasks in ISSB preparation?",
    answer:
      "GTO preparation commonly discusses group activities and leadership-related exercises such as Group Discussion, Group Planning Exercise, Progressive Group Task, Half Group Task, Command Task, Lecturette, Individual Obstacles and Final Group Task. Candidates should refer to official guidance for current selection procedures.",
  },
  {
    question: "How can I improve my Group Discussion skills?",
    answer:
      "Practise organizing your ideas, speaking clearly, listening carefully, respecting different opinions and contributing relevant points. Regular group discussions can help develop communication and collaborative problem-solving skills.",
  },
  {
    question: "How can I prepare for the ISSB interview?",
    answer:
      "Reflect honestly on your educational background, family, interests, hobbies, experiences, goals and general awareness. Practise explaining your thoughts clearly and naturally rather than memorizing scripted answers.",
  },
  {
    question: "Can online ISSB practice guarantee selection?",
    answer:
      "No. Online preparation cannot guarantee ISSB selection or predict an official result. EXAMITICS provides independent educational resources to help candidates practise and develop relevant skills.",
  },
  {
    question: "Is EXAMITICS an official ISSB website?",
    answer:
      "No. EXAMITICS is an independent educational and examination-preparation platform. It is not affiliated with or endorsed by the Inter Services Selection Board or Pakistan's armed forces.",
  },
  {
    question: "Can I join an ISSB preparation community on EXAMITICS?",
    answer:
      "Yes. EXAMITICS provides a free WhatsApp community invitation for candidates interested in discussing preparation, sharing learning resources and practising communication, Group Discussion and lecturette activities.",
  },
];

// ======================================================
// PAGE COMPONENT
// ======================================================

const ISSB = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatic hero carousel.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  // ====================================================
  // STRUCTURED DATA: WEBPAGE
  // ====================================================

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    name: "ISSB Preparation in Pakistan | Complete ISSB Preparation Hub",
    url: PAGE_URL,
    description:
      "Explore ISSB preparation in Pakistan with EXAMITICS. Learn about psychological test practice, GTO activities, interviews, physical preparation and candidate community resources.",
    inLanguage: "en-PK",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "EXAMITICS",
      url: `${SITE_URL}/`,
    },
    about: [
      {
        "@type": "Thing",
        name: "Inter Services Selection Board",
        alternateName: "ISSB Pakistan",
      },
      {
        "@type": "Thing",
        name: "ISSB psychological test preparation",
      },
      {
        "@type": "Thing",
        name: "ISSB GTO preparation",
      },
    ],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
    publisher: {
      "@type": "Organization",
      name: "EXAMITICS",
      url: `${SITE_URL}/`,
    },
  };

  // ====================================================
  // STRUCTURED DATA: FAQ
  // ====================================================

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

  // ====================================================
  // STRUCTURED DATA: PRACTICE MODULES
  // ====================================================

  const practiceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ISSB Online Preparation and Practice Resources",
    description:
      "Independent ISSB preparation and practice resources available on EXAMITICS.",
    itemListElement: psychTests.map((test, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${test.title} - ${test.subtitle}`,
      url: `${SITE_URL}${test.practiceUrl}`,
    })),
  };

  return (
    <>
      <Helmet>
        {/* PRIMARY SEO */}

        <title>
          ISSB Preparation in Pakistan | Online Practice & Complete Guide -
          EXAMITICS
        </title>

        <meta
          name="description"
          content="Prepare for ISSB in Pakistan with EXAMITICS. Explore free WAT, TAT, SCT, OPI, SRT and MAT practice, GTO preparation, interviews, physical fitness guidance and ISSB candidate community resources."
        />

        <meta
          name="keywords"
          content="ISSB preparation Pakistan, ISSB preparation online, ISSB mock test, ISSB psychological tests, WAT practice, TAT practice, SCT practice, OPI practice, SRT practice, MAT test, ISSB GTO tasks, ISSB interview preparation, ISSB Group Discussion, ISSB lecturette, Pakistan Army ISSB preparation, Pakistan Navy ISSB preparation, Pakistan Air Force ISSB preparation, EXAMITICS"
        />

        <meta name="author" content="EXAMITICS" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="language" content="English" />
        <meta name="content-language" content="en-PK" />

        <link rel="canonical" href={PAGE_URL} />

        {/* OPEN GRAPH */}

        <meta
          property="og:title"
          content="ISSB Preparation in Pakistan | EXAMITICS"
        />

        <meta
          property="og:description"
          content="Your ISSB preparation hub: psychological test practice, GTO preparation, interview guidance, physical preparation and a free candidate community."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta
          property="og:image:alt"
          content="EXAMITICS ISSB preparation resources"
        />

        {/* TWITTER / X */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="ISSB Preparation in Pakistan | EXAMITICS"
        />

        <meta
          name="twitter:description"
          content="Explore online ISSB practice tests, GTO preparation, interview guidance and candidate learning resources with EXAMITICS."
        />

        <meta name="twitter:image" content={OG_IMAGE} />

        {/* STRUCTURED DATA */}

        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(practiceSchema)}
        </script>
      </Helmet>

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: `${SITE_URL}/`,
          },
          {
            name: "ISSB Preparation",
            url: PAGE_URL,
          },
        ]}
      />

      <Navbar />

      <main className="issb-page section-padding">
        <div className="container-custom">

          {/* ==========================================
              01. HERO SECTION
          ========================================== */}

          <section className="issb-hero" aria-labelledby="issb-main-title">

            <div className="issb-hero-content">

              <div className="issb-badge exa-badge">
                <FiShield aria-hidden="true" />
                <span>EXAMITICS ISSB PREPARATION HUB</span>
              </div>

              <h1 id="issb-main-title">
                ISSB Preparation in Pakistan: Psych Tests, GTO Tasks, Interviews & Complete
                Guidance
              </h1>

              <p>
                Prepare for the Inter Services Selection Board (ISSB) with
                structured educational resources. Explore psychological test
                practice, GTO activities, interview preparation, physical
                fitness guidance and communication development for aspiring
                armed-forces officers in Pakistan.
              </p>

              <div className="issb-hero-buttons">

                <a
                  href="#psych-tests"
                  className="exa-btn exa-btn-primary"
                >
                  Start Preparation
                  <FiArrowRight aria-hidden="true" />
                </a>

                <Link
                  to="/issbguide"
                  className="exa-btn exa-btn-outline"
                >
                  Complete ISSB Guide
                  <FiBookOpen aria-hidden="true" />
                </Link>

              </div>

              <div className="issb-hero-highlights">

                <span>
                  <FiCheckCircle aria-hidden="true" />
                  Online Practice
                </span>

                <span>
                  <FiCheckCircle aria-hidden="true" />
                  Preparation Guidance
                </span>

                <span>
                  <FiCheckCircle aria-hidden="true" />
                  Free Community
                </span>

              </div>

            </div>

            {/* AUTOMATIC IMAGE CAROUSEL */}

            <div
              className="issb-hero-image-wrapper exa-card issb-hero-carousel"
              aria-label="ISSB preparation image slideshow"
            >

              <div className="issb-carousel-images">

                {heroSlides.map((slide, index) => (
                  <img
                    key={slide.image}
                    src={slide.image}
                    alt={slide.alt}
                    className={`issb-hero-image issb-carousel-image ${
                      activeSlide === index ? "active" : ""
                    }`}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    aria-hidden={activeSlide !== index}
                  />
                ))}

              </div>

              <div className="issb-carousel-overlay">
                <span>EXAMITICS · ISSB PREPARATION</span>
                {/* <h2>{heroSlides[activeSlide].title}</h2> */}
              </div>

              <div
                className="issb-carousel-dots"
                role="group"
                aria-label="Choose hero image"
              >

                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    className={`issb-carousel-dot ${
                      activeSlide === index ? "active" : ""
                    }`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show slide ${index + 1}: ${slide.title}`}
                    aria-pressed={activeSlide === index}
                  />
                ))}

              </div>

            </div>

          </section>

          {/* ==========================================
              02. QUICK ANSWER / AEO SECTION
          ========================================== */}

          <section
            className="issb-quick-answer"
            aria-labelledby="issb-quick-answer-title"
          >

            <div className="issb-quick-answer-icon">
              <FiBookOpen aria-hidden="true" />
            </div>

            <div>

              <span className="section-tag">
                UNDERSTANDING ISSB
              </span>

              <h2 id="issb-quick-answer-title">
                What is ISSB in Pakistan?
              </h2>

              <p>
                ISSB stands for Inter Services Selection Board. It is
                associated with the selection and assessment of candidates
                seeking officer-level entry into Pakistan's armed forces.
                Preparation can involve psychological exercises, group
                activities, interviews, communication skills and physical
                readiness. EXAMITICS provides independent educational
                resources to help candidates practise and understand these
                preparation areas.
              </p>

              <Link to="/issbguide" className="issb-inline-link">
                Read the Complete ISSB Selection Guide
                <FiArrowRight aria-hidden="true" />
              </Link>

            </div>

          </section>

          {/* ==========================================
              03. STICKY SECTION NAVIGATION
          ========================================== */}

          <nav
            className="issb-section-navigation"
            aria-label="ISSB preparation sections"
          >

            <a href="#preparation-roadmap">Roadmap</a>
            <a href="#psych-tests">Psychological Tests</a>
            <a href="#gto-preparation">GTO Tasks</a>
            <a href="#physical-preparation">Physical</a>
            <a href="#interview-preparation">Interviews</a>
            <a href="#issb-community">Community</a>
            <a href="#issb-faq">FAQs</a>

          </nav>

          {/* ==========================================
              04. PREPARATION ROADMAP
          ========================================== */}

          <section
            className="issb-section"
            id="preparation-roadmap"
            aria-labelledby="roadmap-title"
          >

            <div className="section-heading">

              <span className="section-tag">
                YOUR PREPARATION JOURNEY
              </span>

              <h2 id="roadmap-title">
                Complete ISSB Preparation Roadmap
              </h2>

              <p>
                A balanced approach to ISSB preparation combines psychological
                practice, communication, teamwork, physical readiness and
                personal reflection. Use this roadmap to organize your
                preparation.
              </p>

            </div>

            <div className="issb-roadmap-grid">

              {preparationSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    className="issb-roadmap-card exa-card"
                    key={step.number}
                  >

                    <div className="issb-roadmap-top">

                      <span className="issb-roadmap-number">
                        {step.number}
                      </span>

                      <div className="issb-roadmap-icon">
                        <Icon aria-hidden="true" />
                      </div>

                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>

                  </article>
                );
              })}

            </div>

          </section>

          {/* ==========================================
              05. PSYCHOLOGICAL TEST PRACTICE
          ========================================== */}

          <section
            className="issb-section"
            id="psych-tests"
            aria-labelledby="psych-tests-title"
          >

            <div className="section-heading">

              <span className="section-tag">
                ONLINE PSYCHOLOGICAL PRACTICE
              </span>

              <h2 id="psych-tests-title">
                ISSB Psychological Test Preparation
              </h2>

              <p>
                Explore the different psychological practice modules available
                on EXAMITICS. Each test card provides two options: learn about
                the test through its informational page or open the interactive
                practice experience.
              </p>

            </div>

            <div className="psych-grid">

              {psychTests.map((test) => (

                <article
                  className="psych-card exa-card"
                  key={test.title}
                >

                  <div className="psych-card-image-wrapper">

                    <img
                      src={test.image}
                      alt={`${test.subtitle} preparation and practice`}
                      loading="lazy"
                    />

                    <span className="psych-card-label">
                      ISSB PRACTICE
                    </span>

                  </div>

                  <div className="psych-content">

                    <span>{test.subtitle}</span>

                    <h3>{test.title}</h3>

                    <p>{test.description}</p>

                    <div className="issb-test-card-actions">

                      <Link
                        to={test.exploreUrl}
                        className="issb-test-explore-button"
                        aria-label={`Explore ${test.title} information`}
                      >
                        <FiBookOpen aria-hidden="true" />
                        {test.exploreText}
                      </Link>

                      <Link
                        to={test.practiceUrl}
                        className="issb-test-practice-button"
                        aria-label={`Start ${test.title} practice`}
                      >
                        <FiPlayCircle aria-hidden="true" />
                        {test.practiceText}
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>

            {/* ADDITIONAL PRACTICE TOOLS */}

            <div className="issb-additional-tools">

              <div className="issb-additional-tools-heading">

                <span className="section-tag">
                  ADDITIONAL PRACTICE
                </span>

                <h3>Improve Your Mental Calculation Skills</h3>

                <p>
                  Develop numerical confidence and calculation speed with
                  additional EXAMITICS practice tools.
                </p>

              </div>

              <div className="issb-tools-grid">

                {additionalTools.map((tool) => (

                  <article
                    className="issb-tool-card exa-card"
                    key={tool.title}
                  >

                    <img
                      src={tool.image}
                      alt="Quick Math mental mathematics practice"
                      loading="lazy"
                    />

                    <div>

                      <span>{tool.subtitle}</span>

                      <h3>{tool.title}</h3>

                      <p>{tool.description}</p>

                      <div className="issb-test-card-actions">

                        <Link
                          to={tool.exploreUrl}
                          className="issb-test-explore-button"
                        >
                          <FiBookOpen aria-hidden="true" />
                          Explore
                        </Link>

                        <Link
                          to={tool.practiceUrl}
                          className="issb-test-practice-button"
                        >
                          <FiPlayCircle aria-hidden="true" />
                          Practise
                        </Link>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            </div>

          </section>

          {/* ==========================================
              06. GTO PREPARATION
          ========================================== */}

          <section
            className="issb-section"
            id="gto-preparation"
            aria-labelledby="gto-title"
          >

            <div className="section-heading">

              <span className="section-tag">
                GROUP TASKS & LEADERSHIP
              </span>

              <h2 id="gto-title">
                ISSB GTO Tasks and Group Activities
              </h2>

              <p>
                GTO preparation focuses on understanding group activities,
                communication, cooperation, planning and responsible
                leadership. Explore the commonly discussed activities below
                as part of your learning.
              </p>

            </div>

            <div className="issb-gto-grid">

              {gtoTasks.map((task) => {
                const Icon = task.icon;

                return (

                  <article
                    className="issb-gto-card exa-card"
                    key={task.short}
                  >

                    <div className="issb-gto-card-top">

                      <div className="issb-gto-icon">
                        <Icon aria-hidden="true" />
                      </div>

                      <span>{task.short}</span>

                    </div>

                    <h3>{task.title}</h3>

                    <p>{task.description}</p>

                  </article>

                );
              })}

            </div>

            <div className="issb-gto-note">

              <FiShield aria-hidden="true" />

              <p>
                These descriptions are educational preparation guidance.
                Always consult relevant official recruitment instructions for
                authoritative information about the current ISSB selection
                process.
              </p>

            </div>

          </section>

          {/* ==========================================
              07. PHYSICAL PREPARATION
          ========================================== */}

          <section
            className="obstacles-section exa-card"
            id="physical-preparation"
            aria-labelledby="physical-title"
          >

            <div className="obstacles-left">

              <span className="section-tag">
                PHYSICAL PREPARATION
              </span>

              <h2 id="physical-title">
                ISSB Individual Obstacles and Physical Fitness
              </h2>

              <p>
                Physical preparation can help candidates develop stamina,
                agility, balance, coordination and confidence. Understand
                commonly discussed obstacle activities and prepare through
                gradual, safe and consistent exercise.
              </p>

              <div className="obstacle-list">

                {obstacles.map((item) => (

                  <div className="obstacle-item" key={item}>

                    <FiCheckCircle aria-hidden="true" />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

              <p className="issb-physical-note">
                Train progressively, use appropriate supervision and avoid
                attempting hazardous obstacles without proper facilities.
              </p>

            </div>

            <div className="obstacles-image">

              <img
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974"
                alt="Outdoor physical training and team fitness preparation"
                loading="lazy"
              />

            </div>

          </section>

          {/* ==========================================
              08. INTERVIEW PREPARATION
          ========================================== */}

          <section
            className="issb-section"
            id="interview-preparation"
            aria-labelledby="interview-title"
          >

            <div className="section-heading">

              <span className="section-tag">
                INTERVIEW PREPARATION
              </span>

              <h2 id="interview-title">
                ISSB Interview Preparation
              </h2>

              <p>
                Prepare to communicate clearly and honestly about your
                background, interests, experiences, goals and general
                awareness. Focus on self-understanding instead of memorizing
                artificial answers.
              </p>

            </div>

            <div className="interview-grid">

              <article className="interview-card exa-card">

                <div className="interview-icon" aria-hidden="true">
                  <FiMessageSquare />
                </div>

                <h3>Deputy President Interview Preparation</h3>

                <p>
                  Organize your thoughts about your personal background,
                  education, interests, knowledge and future goals.
                </p>

                <ul>

                  {interviewTopics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}

                </ul>

              </article>

              <article className="interview-card exa-card">

                <div className="interview-icon" aria-hidden="true">
                  <FiActivity />
                </div>

                <h3>Psychologist Interview Preparation</h3>

                <p>
                  Develop self-awareness and practise explaining your
                  experiences, decisions, behavior and personal development.
                </p>

                <ul>

                  <li>Personality reflection</li>
                  <li>Personal strengths and weaknesses</li>
                  <li>Emotional awareness</li>
                  <li>Decision-making experiences</li>
                  <li>Communication and confidence</li>
                  <li>Personal values and responsibility</li>
                  <li>Realistic future goals</li>
                  <li>Consistency in self-expression</li>

                </ul>

              </article>

            </div>

          </section>

          {/* ==========================================
              09. OFFICER-LIKE QUALITIES
          ========================================== */}

          <section
            className="issb-section tips-section"
            id="officer-qualities"
            aria-labelledby="qualities-title"
          >

            <div className="section-heading center-heading">

              <span className="section-tag">
                PERSONAL DEVELOPMENT
              </span>

              <h2 id="qualities-title">
                Important Officer-Like Qualities
              </h2>

              <p>
                Build habits that support responsible behavior, teamwork,
                effective communication and personal growth.
              </p>

            </div>

            <div className="tips-grid">

              {officerQualities.map((quality) => (

                <div className="tip-box" key={quality}>

                  <FiCheckCircle aria-hidden="true" />

                  <span>{quality}</span>

                </div>

              ))}

            </div>

          </section>

          {/* ==========================================
              10. WHATSAPP COMMUNITY
          ========================================== */}

          <section
            className="issb-community-section"
            id="issb-community"
            aria-labelledby="issb-community-title"
          >

            <div className="issb-community-card">

              <div className="issb-community-header">

                <div className="issb-community-icon" aria-hidden="true">
                  <FiUsers />
                </div>

                <div className="issb-community-heading">

                  <span className="issb-community-label">
                    FREE STUDENT COMMUNITY
                  </span>

                  <h2 id="issb-community-title">
                    EXAMITICS ISSB Practice Community
                  </h2>

                  <p>
                    Speak with confidence. Practise together. Lead with purpose.
                  </p>

                </div>

                <span className="issb-community-free-badge">
                  FREE
                </span>

              </div>

              <div className="issb-community-body">

                <p className="issb-community-intro">
                  Join fellow ISSB candidates on WhatsApp for preparation
                  discussions, learning resources, lecturette, public speaking
                  and Group Discussion (GD) practice. Share ideas, improve
                  communication and learn together in a supportive environment.
                </p>

                <div className="issb-community-features">

                  <article className="issb-community-feature">

                    <div
                      className="issb-community-feature-icon"
                      aria-hidden="true"
                    >
                      <FiMessageSquare />
                    </div>

                    <div className="issb-community-feature-content">

                      <h3>Lecturette & Public Speaking</h3>

                      <p>
                        Practise speaking on different topics, organizing
                        thoughts and expressing ideas clearly.
                      </p>

                    </div>

                  </article>

                  <article className="issb-community-feature">

                    <div
                      className="issb-community-feature-icon"
                      aria-hidden="true"
                    >
                      <FiUsers />
                    </div>

                    <div className="issb-community-feature-content">

                      <h3>Group Discussion Practice</h3>

                      <p>
                        Discuss relevant topics, listen to different
                        perspectives and develop communication and teamwork.
                      </p>

                    </div>

                  </article>

                  <article className="issb-community-feature">

                    <div
                      className="issb-community-feature-icon"
                      aria-hidden="true"
                    >
                      <FiTarget />
                    </div>

                    <div className="issb-community-feature-content">

                      <h3>Small Batches & Rotating Leadership</h3>

                      <p>
                        Practise in groups of approximately 10–15 candidates.
                        Participants can take turns coordinating discussions,
                        leading group activities and conducting lecturette
                        sessions.
                      </p>

                    </div>

                  </article>

                </div>

                <div className="issb-community-cta">

                  <div className="issb-community-cta-text">

                    <h3>Prepare Together, Grow Together</h3>

                    <p>
                      Connect with other candidates and improve your
                      communication and collaborative learning experience.
                    </p>

                  </div>

                  <a
                    href="https://chat.whatsapp.com/FikkQW0qTdmAx8gA9CdWdb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="issb-community-button"
                    aria-label="Join the free EXAMITICS ISSB WhatsApp Community"
                  >

                    <FiMessageSquare aria-hidden="true" />

                    <span>Join Free WhatsApp Community</span>

                    <FiExternalLink aria-hidden="true" />

                  </a>

                </div>

              </div>

            </div>

            {/* COMMUNITY AUDIO */}

            <ISSBCommunityAudio />

          </section>

          {/* ==========================================
              11. PREPARATION ADVICE
          ========================================== */}

          <section
            className="issb-section issb-advice-section"
            id="preparation-advice"
            aria-labelledby="advice-title"
          >

            <div className="section-heading">

              <span className="section-tag">
                SMART PREPARATION
              </span>

              <h2 id="advice-title">
                How to Prepare for ISSB Effectively
              </h2>

              <p>
                Consistent preparation, self-awareness and practical learning
                are more useful than relying on memorized answers or shortcuts.
              </p>

            </div>

            <div className="issb-advice-grid">

              <article className="issb-advice-card">

                <FiClock aria-hidden="true" />

                <h3>Follow a Consistent Routine</h3>

                <p>
                  Set aside regular time for psychological practice, reading,
                  physical activity and communication development.
                </p>

              </article>

              <article className="issb-advice-card">

                <FiMessageSquare aria-hidden="true" />

                <h3>Practise Communication</h3>

                <p>
                  Participate in discussions, listen carefully and practise
                  explaining your thoughts in clear and natural language.
                </p>

              </article>

              <article className="issb-advice-card">

                <FiHeart aria-hidden="true" />

                <h3>Develop Self-Awareness</h3>

                <p>
                  Reflect on your strengths, weaknesses, habits, decisions and
                  experiences. Focus on genuine personal improvement.
                </p>

              </article>

              <article className="issb-advice-card">

                <FiTrendingUp aria-hidden="true" />

                <h3>Review Your Progress</h3>

                <p>
                  Identify areas that need improvement, review practice
                  mistakes and set realistic goals for the next session.
                </p>

              </article>

            </div>

          </section>

          {/* ==========================================
              12. FREQUENTLY ASKED QUESTIONS
          ========================================== */}

          <section
            className="issb-section issb-faq-section"
            id="issb-faq"
            aria-labelledby="issb-faq-title"
          >

            <div className="section-heading">

              <span className="section-tag">
                ISSB PREPARATION FAQS
              </span>

              <h2 id="issb-faq-title">
                Frequently Asked Questions About ISSB in Pakistan
              </h2>

              <p>
                Find answers to common questions about ISSB preparation,
                psychological practice, GTO activities, interviews and
                EXAMITICS learning resources.
              </p>

            </div>

            <div className="issb-faq-list">

              {faqs.map((faq, index) => (

                <details
                  className="issb-faq-item"
                  key={faq.question}
                  open={index === 0}
                >

                  <summary>

                    <span>{faq.question}</span>

                    <FiChevronDown aria-hidden="true" />

                  </summary>

                  <div className="issb-faq-answer">

                    <p>{faq.answer}</p>

                  </div>

                </details>

              ))}

            </div>

          </section>

          {/* ==========================================
              13. FINAL CTA
          ========================================== */}

          <section className="issb-cta">

            <span className="issb-cta-eyebrow">
              YOUR PREPARATION STARTS HERE
            </span>

            <h2>
              Ready to Begin Your ISSB Preparation Journey?
            </h2>

            <p>
              Explore psychological practice tests, understand GTO activities,
              prepare for interviews and connect with fellow candidates.
              Build your preparation step by step with EXAMITICS.
            </p>

            <div className="issb-cta-actions">

              <a
                href="#psych-tests"
                className="exa-btn exa-btn-primary issb-cta-button"
              >
                Explore Practice Tests
                <FiArrowRight aria-hidden="true" />
              </a>

              <Link
                to="/issbguide"
                className="exa-btn exa-btn-outline issb-cta-button"
              >
                Read ISSB Guide
                <FiBookOpen aria-hidden="true" />
              </Link>

            </div>

            <p className="issb-disclaimer">
              EXAMITICS is an independent educational platform and is not
              affiliated with or endorsed by the Inter Services Selection Board
              or Pakistan's armed forces. Practice resources do not guarantee
              selection.
            </p>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ISSB;
