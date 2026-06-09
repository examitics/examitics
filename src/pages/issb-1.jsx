// import React from "react";

import { Helmet } from "react-helmet-async";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import WATS from "../components/issb/wats";
import TAT from "../components/issb/tat";
import SCT from "../components/issb/sct";

import OPI from "../pages/opi";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

import armyLogo from "../assets/logos/forces-logo/PAK-ARMY-logo.png";
import navyLogo from "../assets/logos/forces-logo/PAK-NAVY-logo.png";
import pafLogo from "../assets/logos/forces-logo/PAK-AIR-FORCE-logo.png";

import watImg from "../assets/images/wat-img.png";
import tatImg from "../assets/images/tat-img.png";
import sctImg from "../assets/images/sct-img.png";
import opiImg from "../assets/images/opi-img.png";
import matImg from "../assets/images/mat-img.png";

import Adsterra728x90 from "../components/Adsterra728x90";

import {
  FiShield,
  FiTarget,
  FiUsers,
  FiMessageSquare,
  FiActivity,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

import "../styles/issb-1.css";

const ISSB = () => {
  const [activeTest, setActiveTest] = useState(null);
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
      title: "MAT",
      subtitle: "Mechanical Aptitude Test",
      description:
        "Assess your understanding of mechanical principles and problem-solving abilities.",
      image: matImg,
      action: "mat",
      buttonText: "Coming Soon",
    },
  ];

  const gtoTasks = [
    {
      title: "Group Discussion",
      detail:
        "Leadership, confidence, communication, and group coordination are assessed.",
    },

    {
      title: "Progressive Group Task",
      detail:
        "Candidates solve outdoor group obstacles with planning and teamwork.",
    },

    {
      title: "Command Task",
      detail:
        "Tests leadership, command ability, confidence, and decision making.",
    },

    {
      title: "Lecturette",
      detail:
        "Candidates speak confidently on assigned topics before the group.",
    },

    {
      title: "Individual Obstacles",
      detail:
        "Physical obstacles including monkey bridge, rope climbing, zig-zag, and ditch crossing.",
    },

    {
      title: "Mutual Assessment",
      detail:
        "Candidates evaluate fellow group members honestly and professionally.",
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

  return (
    <>
      <Helmet>
        <title>ISSB Preparation Guide | EXAMITICS</title>

        <meta
          name="description"
          content="Comprehensive ISSB preparation guide covering psychology tests, WAT, TAT, SCT, GTO tasks, interviews, and officer-like qualities."
        />

        <meta
          name="keywords"
          content="ISSB preparation, ISSB guide, ISSB psychology tests, GTO tasks, WAT, TAT, SCT, officer like qualities"
        />

        <link rel="canonical" href="https://examitics.vercel.app/issb-1" />
      </Helmet>
      <Navbar />
      <main className="issb-page section-padding">
        <div className="container-custom">
          {/* HERO */}
          <section className="issb-hero">
            <div className="issb-hero-content">
              <div className="issb-badge exa-badge">
                <FiShield />
                ISSB PREPARATION SYSTEM
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

                <a href="#gto" className="exa-btn exa-btn-outline">
                  Explore ISSB Process
                  <FiArrowRight />
                </a>
              </div>
            </div>

            <div className="issb-hero-image-wrapper exa-card">
              <img
                //   src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                src="https://static.wixstatic.com/media/0b1f9a_f1b84cd52132448b804dbb46ab3160e2~mv2.jpg/v1/fill/w_873,h_491,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/32cc86e6-da34-432c-bf89-2a02d44d8e34.jpg"
                alt="ISSB preparation"
                className="issb-hero-image"
              />
            </div>
          </section>

          {/* FORCES */}
          <section className="forces-section">
            <div className="section-heading center-heading">
              <span className="section-tag">ARMED FORCES</span>

              <h2>Prepare For All Services</h2>
            </div>

            <div className="forces-grid">
              <div className="force-card exa-card">
                <img src={armyLogo} alt="Pakistan Army" />

                <h3>Pakistan Army</h3>
              </div>

              <div className="force-card exa-card">
                <img src={navyLogo} alt="Pakistan Navy" />

                <h3>Pakistan Navy</h3>
              </div>

              <div className="force-card exa-card">
                <img src={pafLogo} alt="Pakistan Air Force" />

                <h3>Pakistan Air Force</h3>
              </div>
            </div>
          </section>
<Adsterra728x90 />
          {/* PROCESS */}
          <section className="issb-process-section">
            <div className="section-heading center-heading">
              <span className="section-tag">ISSB PROCESS</span>

              <h2>Complete ISSB Selection Journey</h2>
            </div>

            <div className="process-timeline">
              <div className="process-card exa-card">
                <span>01</span>
                <h3>Screening</h3>
                <p>
                  Initial intelligence screening and personality observation.
                </p>
              </div>

              <div className="process-card exa-card">
                <span>02</span>
                <h3>Psych Tests</h3>
                <p>WAT, TAT, SCT, and self-description evaluations.</p>
              </div>

              <div className="process-card exa-card">
                <span>03</span>
                <h3>GTO Tasks</h3>
                <p>Outdoor leadership, planning, and obstacle-based tasks.</p>
              </div>

              <div className="process-card exa-card">
                <span>04</span>
                <h3>Interview</h3>
                <p>Deputy President and Psychologist personality interviews.</p>
              </div>

              <div className="process-card exa-card">
                <span>05</span>
                <h3>Conference</h3>
                <p>Final assessment and recommendation decision.</p>
              </div>
            </div>
          </section>

          {/* PSYCH TESTS */}
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
              {psychTests.map((test, index) => (
                <div className="psych-card exa-card" key={index}>
                  <img src={test.image} alt={test.title} />

                  <div className="psych-content">
                    <span>{test.subtitle}</span>

                    <h3>{test.title}</h3>

                    <p>{test.description}</p>

                    {/* <button
                      className="exa-btn exa-btn-primary"
                      onClick={() => setShowWAT(true)}
                    >
                      Start WAT Practice
                    </button>

                    <button onClick={() => setShowTAT(true)}>
                      Start Picture Story Practice
                    </button> */}

                    <button
                      className="exa-btn exa-btn-primary"
                      // disabled={test.action === "sct"}
                      onClick={() => {
                        if (test.action === "wat") {
                          setActiveTest("wat");
                        }

                        if (test.action === "tat") {
                          setActiveTest("tat");
                        }

                        if (test.action === "sct") {
                          setActiveTest("sct");
                        }

                        // if (test.action === "opi") {
                        //   setActiveTest("opi");
                        // }

                        if (test.action === "opi") {
                          navigate("/opi");
                        }
                      }}
                    >
                      {test.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GTO */}
          <section className="issb-section" id="gto">
            <div className="section-heading">
              <span className="section-tag">GTO TASKS</span>

              <h2>Group Testing Officer Activities</h2>

              <p>
                GTO tasks are designed to assess leadership, courage, planning,
                teamwork, communication, physical fitness, and command ability.
              </p>
            </div>

            <div className="gto-grid">
              {gtoTasks.map((task, index) => (
                <div className="gto-card exa-card" key={index}>
                  <div className="gto-icon">
                    <FiUsers />
                  </div>

                  <h3>{task.title}</h3>

                  <p>{task.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* OBSTACLES */}
          <section className="obstacles-section exa-card">
            <div className="obstacles-left">
              <span className="section-tag">INDIVIDUAL OBSTACLES</span>

              <h2>Physical Obstacle Preparation</h2>

              <p>
                ISSB individual obstacles assess courage, physical confidence,
                stamina, balance, agility, and determination under pressure.
              </p>

              <div className="obstacle-list">
                {obstacles.map((item, index) => (
                  <div className="obstacle-item" key={index}>
                    <FiCheckCircle />

                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="obstacles-image">
              <img
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974"
                alt="Obstacle training"
              />
            </div>
          </section>

          {/* INTERVIEW */}
          <section className="issb-section">
            <div className="section-heading">
              <span className="section-tag">INTERVIEW PREPARATION</span>

              <h2>Deputy President & Psychologist Interviews</h2>
            </div>

            <div className="interview-grid">
              <div className="interview-card exa-card">
                <div className="interview-icon">
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
              </div>

              <div className="interview-card exa-card">
                <div className="interview-icon">
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
              </div>
            </div>
          </section>

          {/* TIPS */}
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

          {/* CTA */}
          <section className="issb-cta">
            <h2>Ready To Begin Your ISSB Preparation?</h2>

            <p>
              Train with structured ISSB preparation, psychological assessments,
              interview guidance, and GTO preparation modules on EXAMITICS.
            </p>

            <button className="exa-btn exa-btn-primary">
              Start ISSB Journey
            </button>
          </section>
        </div>
        <Adsterra728x90 />
      </main>
      <Footer />
      {/* {showWAT && <WATS closeWAT={() => setShowWAT(false)} />}
      {showTAT && <TAT closeTAT={() => setShowTAT(false)} />} */}
      {activeTest === "wat" && <WATS closeWAT={() => setActiveTest(null)} />}

      {activeTest === "tat" && <TAT closeTAT={() => setActiveTest(null)} />}

      {activeTest === "sct" && <SCT closeSCT={() => setActiveTest(null)} />}

      {activeTest === "opi" && <OPI />}
    </>
  );
};

export default ISSB;
