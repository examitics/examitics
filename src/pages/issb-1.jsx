import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

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
} from "react-icons/fi";

import "../styles/issb-1.css";

const ISSB = () => {
  const navigate = useNavigate();

  const psychTests = [
    {
      title: "WAT",
      subtitle: "Word Association Test",
      description:
        "Develop quick positive thinking and officer-like responses under time pressure.",
      image: watImg,
      action: "wat",
      buttonText: "Start WAT Practice",
    },
    {
      title: "TAT",
      subtitle: "Thematic Apperception Test",
      description:
        "Practice story writing, imagination, leadership thinking, and decision making.",
      image: tatImg,
      action: "tat",
      buttonText: "Start Picture Story Practice",
    },
    {
      title: "SCT",
      subtitle: "Sentence Completion Test",
      description:
        "Improve personality reflection and positive sentence completion skills.",
      image: sctImg,
      action: "sct",
      buttonText: "Start Sentence Completion Test Practice",
    },
    {
      title: "OPI",
      subtitle: "Personality Reflection",
      description:
        "Understand confidence, strengths, weaknesses, and self-analysis techniques.",
      image: opiImg,
      action: "opi",
      buttonText: "Start OPI Practice",
    },
    {
      title: "SRT",
      subtitle: "Situation Reaction Test",
      description:
        "Practise responding to real-life situations with practical thinking, responsibility, and sound judgment under time pressure.",
      image: srtImg,
      action: "srt",
      buttonText: "Start SRT Practice",
    },
    {
      title: "MAT",
      subtitle: "Mechanical Aptitude Test",
      description:
        "Assess your understanding of mechanical principles and problem-solving abilities.",
      image: matImg,
      action: "mat",
      buttonText: "Start MAT Practice",
    },
    {
      title: "Quick Math Practice",
      subtitle: "ISSB & PMA Mental Math Trainer",
      description:
        "Improve your calculation speed for ISSB military planning and PMA initial tests.",
      image: quickmath,
      action: "quick-math",
      buttonText: "Start Quick Math Practice",
    },
  ];

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

  const handlePractice = (action) => {
    const routes = {
      wat: "/wat",
      tat: "/tat",
      sct: "/sct",
      opi: "/opi",
      srt: "/srt",
      mat: "/mat",
      "quick-math": "/quick-math",
    };

    const route = routes[action];

    if (route) {
      navigate(route);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          ISSB Preparation | Free MAT, WAT, TAT, SCT & OPI Practice Tests |
          EXAMITICS
        </title>

        <meta
          name="description"
          content="Practice free ISSB mock tests including Verbal Intelligence, Non-Verbal Intelligence, Mechanical Aptitude Test (MAT), WAT, TAT, SCT, OPI and psychological tests. Prepare online for ISSB selection with EXAMITICS."
        />

        <meta
          name="keywords"
          content="ISSB Mock Test, ISSB Preparation, ISSB Online Practice, MAT Test, Mechanical Aptitude Test, WAT Practice, TAT Practice, SCT Practice, OPI Practice, Verbal Intelligence Test, Non-Verbal Intelligence Test, ISSB Psychology Tests, Pakistan Army ISSB, Pakistan Navy ISSB, Pakistan Air Force ISSB, Officer Like Qualities, EXAMITICS"
        />

        <meta name="author" content="EXAMITICS" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        <link rel="canonical" href="https://www.examitics.com/issb-1" />

        <meta
          property="og:title"
          content="ISSB Preparation | Free MAT, WAT, TAT, SCT & OPI Practice Tests | EXAMITICS"
        />
        <meta
          property="og:description"
          content="Practice free ISSB mock tests including MAT, WAT, TAT, SCT, OPI and intelligence tests. Improve your ISSB preparation with realistic online practice."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />
        <meta property="og:url" content="https://www.examitics.com/issb-1" />
        <meta
          property="og:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ISSB Preparation | Free MAT, WAT, TAT, SCT & OPI Practice Tests | EXAMITICS"
        />
        <meta
          name="twitter:description"
          content="Practice ISSB intelligence and psychology tests online with free MAT, WAT, TAT, SCT and OPI mock tests on EXAMITICS."
        />
        <meta
          name="twitter:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />
      </Helmet>

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.examitics.com/",
          },
          {
            name: "ISSB Mock Tests",
            url: "https://www.examitics.com/issb-1",
          },
        ]}
      />

      <Navbar />

      <main className="issb-page section-padding">
        <div className="container-custom">
          {/* HERO */}
          <section className="issb-hero">
            <div className="issb-hero-content">
              <div className="issb-badge exa-badge">
                <FiShield aria-hidden="true" />
                <span>ISSB PREPARATION SYSTEM</span>
              </div>

              <h1>Prepare For ISSB With Structured Officer-Level Guidance</h1>

              <p>
                Prepare for psychological assessments, GTO tasks, interviews,
                conference, and officer-like personality evaluation through the
                EXAMITICS ISSB preparation system.
              </p>

              <div className="issb-hero-buttons">
                <a href="#psych-tests" className="exa-btn exa-btn-primary">
                  Start Preparation
                </a>

                <a href="/issbguide" className="exa-btn exa-btn-outline">
                  Explore ISSB Process
                  <FiArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="issb-hero-image-wrapper exa-card">
              <img
                src="https://static.wixstatic.com/media/0b1f9a_f1b84cd52132448b804dbb46ab3160e2~mv2.jpg/v1/fill/w_873,h_491,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/32cc86e6-da34-432c-bf89-2a02d44d8e34.jpg"
                alt="ISSB preparation"
                className="issb-hero-image"
                fetchPriority="high"
              />
            </div>
          </section>

          {/* AUDIO ANNOUNCEMENT */}
          <ISSBCommunityAudio />

          {/* FREE WHATSAPP COMMUNITY */}
          <section
            className="issb-community-section"
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

                <span className="issb-community-free-badge">FREE</span>
              </div>

              <div className="issb-community-body">
                <p className="issb-community-intro">
                  Join fellow ISSB candidates on WhatsApp for free lecturette,
                  public speaking, and Group Discussion (GD) practice. Improve
                  your communication skills, exchange ideas, and build
                  confidence in a supportive learning environment.
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
                        Practise speaking on different topics, organizing your
                        thoughts, and expressing ideas clearly.
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
                        Discuss important topics, listen to different
                        perspectives, and develop teamwork and communication.
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
                      <h3>Small Batches & Leadership</h3>
                      <p>
                        Practise in groups of around 10 candidates. Candidates
                        get rotating opportunities to coordinate discussions,
                        lead Group Discussions, and conduct lecturette sessions.
                      </p>
                    </div>
                  </article>
                </div>

                <div className="issb-community-cta">
                  <div className="issb-community-cta-text">
                    <h3>Prepare Together, Grow Together</h3>
                    <p>
                      Connect with other candidates and take the first step
                      toward more confident communication.
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
                    <FiArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* PSYCHOLOGICAL TESTS */}
          <section className="issb-section" id="psych-tests">
            <div className="section-heading">
              <span className="section-tag">PSYCHOLOGICAL TESTS</span>

              <h2>Officer Personality Assessment</h2>

              <p>
                ISSB psychological tests evaluate confidence, imagination,
                positive thinking, maturity, leadership potential, and emotional
                stability.
              </p>
            </div>

            <div className="psych-grid">
              {psychTests.map((test) => (
                <article className="psych-card exa-card" key={test.action}>
                  {test.image ? (
                    <img
                      src={test.image}
                      alt={`${test.title} practice`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="psych-card-icon" aria-hidden="true">
                      <FiClock />
                    </div>
                  )}

                  <div className="psych-content">
                    <span>{test.subtitle}</span>
                    <h3>{test.title}</h3>
                    <p>{test.description}</p>

                    <button
                      type="button"
                      className="exa-btn exa-btn-primary"
                      onClick={() => handlePractice(test.action)}
                    >
                      {test.buttonText}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* INDIVIDUAL OBSTACLES */}
          <section className="obstacles-section exa-card">
            <div className="obstacles-left">
              <span className="section-tag">INDIVIDUAL OBSTACLES</span>

              <h2>Physical Obstacle Preparation</h2>

              <p>
                ISSB individual obstacles assess courage, physical confidence,
                stamina, balance, agility, and determination under pressure.
              </p>

              <div className="obstacle-list">
                {obstacles.map((item) => (
                  <div className="obstacle-item" key={item}>
                    <FiCheckCircle aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="obstacles-image">
              <img
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974"
                alt="Physical obstacle and team training"
                loading="lazy"
              />
            </div>
          </section>

          {/* INTERVIEW PREPARATION */}
          <section className="issb-section">
            <div className="section-heading">
              <span className="section-tag">INTERVIEW PREPARATION</span>
              <h2>Deputy President & Psychologist Interviews</h2>
            </div>

            <div className="interview-grid">
              <article className="interview-card exa-card">
                <div className="interview-icon" aria-hidden="true">
                  <FiMessageSquare />
                </div>

                <h3>Deputy President Interview</h3>

                <ul>
                  <li>Academic Background</li>
                  <li>Family Introduction</li>
                  <li>General Knowledge</li>
                  <li>Confidence & Maturity</li>
                  <li>Quick Math Questions</li>
                  <li>Current Affairs</li>
                </ul>
              </article>

              <article className="interview-card exa-card">
                <div className="interview-icon" aria-hidden="true">
                  <FiActivity />
                </div>

                <h3>Psychologist Interview</h3>

                <ul>
                  <li>Personality Analysis</li>
                  <li>Positive Thinking</li>
                  <li>Emotional Stability</li>
                  <li>Behavior Observation</li>
                  <li>Confidence Checking</li>
                  <li>Officer-Like Qualities</li>
                </ul>
              </article>
            </div>
          </section>

          {/* SUCCESS QUALITIES */}
          <section className="tips-section">
            <div className="section-heading center-heading">
              <span className="section-tag">SUCCESS QUALITIES</span>
              <h2>Important Officer-Like Qualities</h2>
            </div>

            <div className="tips-grid">
              <div className="tip-box">Leadership</div>
              <div className="tip-box">Confidence</div>
              <div className="tip-box">Discipline</div>
              <div className="tip-box">Communication</div>
              <div className="tip-box">Teamwork</div>
              <div className="tip-box">Positive Thinking</div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="issb-cta">
            <h2>Ready To Begin Your ISSB Preparation?</h2>

            <p>
              Train with structured ISSB preparation, psychological
              assessments, interview guidance, and GTO preparation modules on
              EXAMITICS.
            </p>

            <a
              href="#psych-tests"
              className="exa-btn exa-btn-primary issb-cta-button"
            >
              Start ISSB Journey
              <FiArrowRight aria-hidden="true" />
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ISSB;