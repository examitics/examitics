
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

import issbwat from "../assets/issb-page-img/issb-wat.png";
import issbmat from "../assets/issb-page-img/issb-mat.png";
import issbsct from "../assets/issb-page-img/issb-sct.png";
import issbsrt from "../assets/issb-page-img/issb-srt.png";
import issbopi from "../assets/issb-page-img/issb-opi.png";
import issbtat from "../assets/issb-page-img/issb-tat.png";
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
  FiChevronDown,
  FiPlayCircle,
  FiExternalLink,
  FiPause,
  FiPlay,
} from "react-icons/fi";

import "../styles/issb-1.css";

// ======================================================
// PAGE CONFIGURATION
// ======================================================

const SITE_URL = "https://www.examitics.com";
const PAGE_URL = `${SITE_URL}/issb-1`;
const OG_IMAGE = `${SITE_URL}/images/examitics-banner.png`;

const OFFICIAL_ISSB_GUIDELINES =
  "https://issb.gov.pk/guidelines";

const OFFICIAL_ISSB_SELECTION_SYSTEM =
  "https://issb.gov.pk/selection-system";

// ======================================================
// HERO CAROUSEL
// Local images are used instead of third-party thumbnails.
// ======================================================

const heroSlides = [
  {
    image: issbwat,
    alt: "Word Association Test practice for ISSB preparation",
    title: "Develop clear and constructive thinking",
    caption: "Word Association Test preparation",
  },
  {
    image: issbtat,
    alt: "Picture story writing practice for ISSB candidates",
    title: "Improve observation and story writing",
    caption: "Picture Story and TAT preparation",
  },
  {
    image: issbsct,
    alt: "Sentence Completion Test preparation",
    title: "Practise natural and clear expression",
    caption: "Sentence Completion Test preparation",
  },
  {
    image: issbopi,
    alt: "Officer Potential Inventory practice resources",
    title: "Understand personality-related questions",
    caption: "OPI practice resources",
  },
  {
    image: issbmat,
    alt: "Mechanical Aptitude Test practice",
    title: "Strengthen mechanical reasoning",
    caption: "Mechanical Aptitude Test preparation",
  },
  {
    image: issbsrt,
    alt: "Situation Reaction Test preparation",
    title: "Develop practical decision-making",
    caption: "Situation Reaction Test preparation",
  },
];

// ======================================================
// PSYCHOLOGICAL TESTS
// Each card has separate learning and practice links.
// ======================================================

const psychTests = [
  {
    title: "WAT",
    subtitle: "Word Association Test",
    description:
      "Learn how word association exercises work and practise forming clear, relevant and constructive responses within a limited time.",
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
      "Explore picture-based story writing. Practise observation, logical sequencing, realistic situations and meaningful conclusions.",
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
      "Understand sentence completion exercises and practise expressing your thoughts naturally, clearly and consistently.",
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
      "Explore OPI-style questions involving personal habits, attitudes, preferences and self-reflection. Practise reading questions carefully and responding honestly.",
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
      "Practise responding to everyday situations with practical judgment, responsibility, initiative and sensible decision-making.",
    image: srtImg,
    exploreUrl: "/issbguide",
    practiceUrl: "/srt",
    exploreText: "Read ISSB Guide",
    practiceText: "Start SRT Practice",
  },
  {
    title: "MAT",
    subtitle: "Mechanical Aptitude Test",
    description:
      "Understand mechanical reasoning involving gears, levers, pulleys, motion, force and everyday mechanical principles.",
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
      "Improve calculation speed, numerical confidence and mental arithmetic through focused practice exercises.",
    image: quickmath,
    exploreUrl: "/quick-math",
    practiceUrl: "/quick-math/practice",
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
      "Learn about the selection system, assessment activities and the purpose of different preparation areas.",
    icon: FiBookOpen,
  },
  {
    number: "02",
    title: "Practise Psychological Tests",
    description:
      "Become familiar with WAT, TAT, SCT, OPI, SRT and mechanical aptitude practice.",
    icon: FiTarget,
  },
  {
    number: "03",
    title: "Develop Communication Skills",
    description:
      "Practise group discussions, lecturettes, active listening and clear expression in English and Urdu.",
    icon: FiMessageSquare,
  },
  {
    number: "04",
    title: "Prepare for GTO Activities",
    description:
      "Understand group tasks, planning, cooperation, initiative and responsible leadership.",
    icon: FiUsers,
  },
  {
    number: "05",
    title: "Improve Physical Fitness",
    description:
      "Develop suitable stamina, mobility, balance and physical confidence through gradual training.",
    icon: FiActivity,
  },
  {
    number: "06",
    title: "Prepare for Interviews",
    description:
      "Reflect on your education, interests, experiences, personal background, goals and general awareness.",
    icon: FiAward,
  },
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
      "Practise presenting relevant ideas, listening to others, discussing different viewpoints and contributing constructively to a group.",
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
      "Understand teamwork, communication, coordination and problem-solving while approaching group challenges.",
  },
  {
    title: "Half Group Task",
    short: "HGT",
    icon: FiUsers,
    description:
      "Learn how smaller teams coordinate responsibilities, exchange ideas and work toward a shared objective.",
  },
  {
    title: "Command Task",
    short: "CT",
    icon: FiFlag,
    description:
      "Explore leadership, decision-making, communication and responsibility while managing a task with a team.",
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
// These answers are also used in the visible FAQ schema.
// ======================================================

const faqs = [
  {
    question: "What is ISSB in Pakistan?",
    answer:
      "ISSB stands for Inter Services Selection Board. It is the selection organization responsible for assessing candidates for officer-level entry into the Pakistan Army, Pakistan Navy and Pakistan Air Force. Its assessment system considers different aspects of a candidate's personality, abilities and potential.",
  },
  {
    question: "How can I prepare for ISSB in Pakistan?",
    answer:
      "Start by understanding the official selection system. Develop communication skills, practise educational psychological exercises, participate in group activities, maintain physical fitness and improve general awareness. Use practice resources to become familiar with exercise formats rather than memorizing artificial responses.",
  },
  {
    question: "Which psychological tests can I practise on EXAMITICS?",
    answer:
      "EXAMITICS provides independent educational practice resources for Word Association Test (WAT), Thematic Apperception Test (TAT), Sentence Completion Test (SCT), Officer Potential Inventory (OPI), Situation Reaction Test (SRT) and Mechanical Aptitude Test (MAT). These resources are not official ISSB assessments.",
  },
  {
    question: "What is the OPI test in ISSB?",
    answer:
      "OPI refers to Officer Potential Inventory. OPI-related practice may include questions about personal habits, preferences, attitudes and self-reflection. Candidates should understand the questions and respond honestly. EXAMITICS provides independent OPI practice resources to help candidates become familiar with this type of exercise.",
  },
  {
    question: "How can I practise the OPI test online?",
    answer:
      "You can use the EXAMITICS OPI information page to understand the practice format and then open the online OPI practice module. Use practice to become familiar with question presentation and timing, not to memorize supposedly perfect personality answers.",
  },
  {
    question: "What is the MAT test in ISSB?",
    answer:
      "MAT means Mechanical Aptitude Test. Mechanical aptitude practice commonly covers basic mechanical principles such as gears, levers, pulleys, force, motion and simple machines. Candidates can use these exercises to strengthen mechanical reasoning and understand how different mechanisms work.",
  },
  {
    question: "How can I practise the Mechanical Aptitude Test online?",
    answer:
      "Start with the EXAMITICS MAT guide to understand basic mechanical concepts, then attempt the available MAT practice questions. Review mistakes and learn why the correct option works instead of relying only on memorized answers.",
  },
  {
    question: "What are GTO tasks in ISSB preparation?",
    answer:
      "GTO preparation commonly discusses group activities such as Group Discussion, Group Planning Exercise, Progressive Group Task, Half Group Task, Command Task, Lecturette, Individual Obstacles and Final Group Task. The official ISSB selection system may adjust activities according to its requirements.",
  },
  {
    question: "How can I improve my Group Discussion skills?",
    answer:
      "Practise organizing your ideas, speaking clearly, listening carefully, respecting different opinions and contributing relevant points. Regular group discussions can help develop communication and collaborative problem-solving skills.",
  },
  {
    question: "How can I prepare for the ISSB interview?",
    answer:
      "Reflect honestly on your educational background, family, interests, hobbies, experiences, goals and general awareness. Practise explaining your thoughts clearly and naturally instead of memorizing scripted answers.",
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
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Respect the visitor's operating-system motion preference.
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener?.("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener?.("change", updatePreference);
    };
  }, []);

  // Automatically rotate slides only when motion is allowed.
  useEffect(() => {
    if (prefersReducedMotion || carouselPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion, carouselPaused]);

  // ====================================================
  // STRUCTURED DATA: WEBPAGE
  // ====================================================

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    name: "ISSB Preparation in Pakistan | Online Practice Hub",
    url: PAGE_URL,
    description:
      "Explore independent ISSB preparation resources with WAT, TAT, SCT, OPI, SRT and MAT practice, GTO preparation, interview guidance and physical fitness advice.",
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
      {
        "@type": "Thing",
        name: "ISSB online practice",
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
  // Matches the questions and answers visible on the page.
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
    name: "ISSB Online Practice Resources",
    description:
      "Independent educational practice resources for candidates preparing for ISSB in Pakistan.",
    itemListElement: psychTests.map((test, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${test.title} - ${test.subtitle}`,
      url: `${SITE_URL}${test.practiceUrl}`,
    })),
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <>
      <Helmet>
        {/* PRIMARY SEO */}

        <title>
          ISSB Preparation in Pakistan | Online Practice Tests | EXAMITICS
        </title>

        <meta
          name="description"
          content="Prepare for ISSB in Pakistan with WAT, TAT, SCT, OPI, SRT and MAT practice, plus GTO, interview, communication and fitness guidance. Explore independent learning resources by EXAMITICS."
        />

        <meta name="author" content="EXAMITICS" />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <meta name="content-language" content="en-PK" />

        <link rel="canonical" href={PAGE_URL} />

        {/* OPEN GRAPH */}

        <meta
          property="og:title"
          content="ISSB Preparation in Pakistan | Online Practice | EXAMITICS"
        />

        <meta
          property="og:description"
          content="Explore ISSB psychological test practice, GTO preparation, interview guidance and candidate learning resources with EXAMITICS."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        <meta
          property="og:image:alt"
          content="EXAMITICS ISSB online preparation and practice resources"
        />

        {/* TWITTER / X */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="ISSB Preparation in Pakistan | EXAMITICS"
        />

        <meta
          name="twitter:description"
          content="Explore WAT, TAT, SCT, OPI, SRT and MAT practice, GTO preparation and interview guidance."
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

          <section
            className="issb-hero"
            aria-labelledby="issb-main-title"
          >
            <div className="issb-hero-content">

              <div className="issb-badge exa-badge">
                <FiShield aria-hidden="true" />
                <span>EXAMITICS ISSB PREPARATION HUB</span>
              </div>

              <h1 id="issb-main-title">
                ISSB Preparation in Pakistan: Online Practice Tests,
                GTO and Interview Guidance
              </h1>

              <p>
                Prepare for the Inter Services Selection Board (ISSB)
                with independent educational resources. Explore
                psychological test practice, GTO activities, interview
                preparation, physical fitness guidance and communication
                development for aspiring armed-forces officers in Pakistan.
              </p>

              <div className="issb-hero-buttons">

                <a
                  href="#psych-tests"
                  className="exa-btn exa-btn-primary"
                >
                  Start Practice
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
                  Free Candidate Community
                </span>

              </div>

            </div>

            {/* LOCAL IMAGE CAROUSEL */}

            <div
              className="issb-hero-image-wrapper exa-card issb-hero-carousel"
              aria-label="ISSB preparation image slideshow"
            >

              <div className="issb-carousel-images">

                {heroSlides.map((slide, index) => (
                  <img
                    key={slide.title}
                    src={slide.image}
                    alt={slide.alt}
                    className={`issb-hero-image issb-carousel-image ${
                      activeSlide === index ? "active" : ""
                    }`}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    aria-hidden={activeSlide !== index}
                  />
                ))}

              </div>

              <div className="issb-carousel-overlay">

                <span>EXAMITICS · ISSB PREPARATION</span>

                <h2>{currentSlide.title}</h2>

                <p>{currentSlide.caption}</p>

              </div>

              <div
                className="issb-carousel-controls"
                role="group"
                aria-label="Slideshow controls"
              >

                <button
                  type="button"
                  className="issb-carousel-play"
                  onClick={() => setCarouselPaused((previous) => !previous)}
                  aria-label={
                    carouselPaused
                      ? "Resume automatic slideshow"
                      : "Pause automatic slideshow"
                  }
                  aria-pressed={carouselPaused}
                >
                  {carouselPaused ? <FiPlay /> : <FiPause />}
                </button>

                <div className="issb-carousel-dots">

                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.title}
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
                What Is ISSB Preparation?
              </h2>

              <p>
                ISSB preparation means developing the knowledge, skills
                and personal readiness needed for the Inter Services
                Selection Board assessment. It may include becoming
                familiar with psychological exercises, improving
                communication, participating in group activities,
                developing physical fitness and learning to express
                your experiences honestly. The official ISSB selection
                system evaluates candidates through different assessment
                activities; online practice is only a supplementary
                learning resource.
              </p>

              <Link
                to="/issbguide"
                className="issb-inline-link"
              >
                Understand the Complete ISSB Selection Process
                <FiArrowRight aria-hidden="true" />
              </Link>

            </div>

          </section>

          {/* OFFICIAL GUIDANCE / TRUST */}

          <aside
            className="issb-official-guidance"
            aria-label="Official ISSB guidance"
          >

            <div className="issb-official-guidance-icon">
              <FiShield aria-hidden="true" />
            </div>

            <div className="issb-official-guidance-content">

              <h2>Use Practice Resources Responsibly</h2>

              <p>
                The official ISSB guidelines emphasize honesty,
                natural behaviour, clear thinking, communication and
                participation. They caution candidates against artificial
                behaviour and superficial preparation. Use online
                exercises to understand formats and improve skills,
                not to memorize supposedly perfect answers.
              </p>

              <div className="issb-official-guidance-links">

                <a
                  href={OFFICIAL_ISSB_GUIDELINES}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official ISSB Guidelines
                  <FiExternalLink aria-hidden="true" />
                </a>

                <a
                  href={OFFICIAL_ISSB_SELECTION_SYSTEM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Selection System
                  <FiExternalLink aria-hidden="true" />
                </a>

              </div>

            </div>

          </aside>

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
            <a href="#officer-qualities">Qualities</a>
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
                A balanced approach to ISSB preparation combines
                psychological practice, communication, teamwork,
                physical readiness and personal reflection.
                Use this roadmap to organize your preparation.
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
                Explore the psychological practice resources available
                on EXAMITICS. Each test card provides two separate options:
                learn about the test through its informational page or
                open the corresponding practice experience.
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
                      decoding="async"
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
                  Develop numerical confidence and calculation speed
                  with additional EXAMITICS practice tools.
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
                      decoding="async"
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
                leadership. Explore the commonly discussed activities
                below as part of your learning.
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
                ISSB states that the design and structure of selection
                activities may be adjusted according to its requirements.
                Always consult official instructions for authoritative
                information about the current selection process.
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
                Train progressively, use appropriate supervision and
                avoid attempting hazardous obstacles without suitable
                facilities and safety measures.
              </p>

            </div>

            <div className="obstacles-image">

              <img
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974"
                alt="Outdoor physical training and team fitness preparation"
                loading="lazy"
                decoding="async"
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
                awareness. Focus on self-understanding instead of
                memorizing artificial answers.
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
                  experiences, decisions, behaviour and personal
                  development.
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
                Build habits that support responsible behaviour,
                teamwork, effective communication and personal growth.
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
                  discussions, learning resources, lecturette, public
                  speaking and Group Discussion (GD) practice. Share
                  ideas, improve communication and learn together in
                  a supportive environment.
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

            {/* EXISTING COMMUNITY AUDIO PLAYER */}

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
                Consistent preparation, self-awareness and practical
                learning are more useful than relying on memorized
                answers or shortcuts.
              </p>

            </div>

            <div className="issb-advice-grid">

              <article className="issb-advice-card">

                <FiClock aria-hidden="true" />

                <h3>Follow a Consistent Routine</h3>

                <p>
                  Set aside regular time for psychological practice,
                  reading, physical activity and communication development.
                </p>

              </article>

              <article className="issb-advice-card">

                <FiMessageSquare aria-hidden="true" />

                <h3>Practise Communication</h3>

                <p>
                  Participate in discussions, listen carefully and
                  practise explaining your thoughts in clear and
                  natural language.
                </p>

              </article>

              <article className="issb-advice-card">

                <FiHeart aria-hidden="true" />

                <h3>Develop Self-Awareness</h3>

                <p>
                  Reflect on your strengths, weaknesses, habits,
                  decisions and experiences. Focus on genuine
                  personal improvement.
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
                OPI, MAT, psychological practice, GTO activities,
                interviews and EXAMITICS learning resources.
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
              Explore psychological practice tests, understand GTO
              activities, prepare for interviews and connect with
              fellow candidates. Build your preparation step by
              step with EXAMITICS.
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
                Read Complete ISSB Guide
                <FiBookOpen aria-hidden="true" />
              </Link>

            </div>

            <p className="issb-disclaimer">
              EXAMITICS is an independent educational platform and is
              not affiliated with or endorsed by the Inter Services
              Selection Board or Pakistan's armed forces. Practice
              resources do not represent official assessments and
              cannot guarantee selection.
            </p>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ISSB;
