
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import PMAMockSection from "../components/mock/pmamocksection";
import PAFMockSection from "../components/mock/pafmocksection";
import AFNSMockSection from "../components/mock/afnsmocksection";
import NavyMockSection from "../components/mock/navymocksection";

import {
  FiClock,
  FiMonitor,
  FiCheckCircle,
  FiTarget,
  FiMessageCircle,
  FiArrowRight,
  FiCheck,
  FiZap,
  FiX,
} from "react-icons/fi";

import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";
import { useAuth } from "../context/AuthContext";
import "../styles/mock.css";

const WHATSAPP_NUMBER = "923014709158";

const MOCK = () => {
  const { user, isPremium, loading } = useAuth();

  const [activeExam, setActiveExam] = React.useState("pma-lc");
  const [showPreparationMessage, setShowPreparationMessage] =
    React.useState(true);

  /*
   * Keep the category bar immediately below the real site navbar.
   * Measure the navbar's viewport bottom so its actual position,
   * height changes, and responsive layout are taken into account.
   */
  React.useEffect(() => {
    const findNavbar = () => {
      const selectors = [
        "#navbar",
        ".navbar",
        ".site-header",
        ".main-header",
        "header",
      ];

      for (const selector of selectors) {
        const element = document.querySelector(selector);

        if (element && !element.closest(".mock-exam-nav")) {
          return element;
        }
      }

      // Fallback: find a navigation element other than the category bar.
      const navElements = document.querySelectorAll("nav");

      for (const element of navElements) {
        if (!element.classList.contains("mock-exam-nav")) {
          return element;
        }
      }

      return null;
    };

    const navbar = findNavbar();

    if (!navbar) {
      console.warn(
        "EXAMITICS mock navigation: navbar element was not found. Check the navbar selector."
      );
      return;
    }

    const updateStickyPosition = () => {
      const navbarRect = navbar.getBoundingClientRect();

      document.documentElement.style.setProperty(
        "--mock-sticky-top",
        `${Math.max(0, navbarRect.bottom)}px`
      );
    };

    updateStickyPosition();

    let observer;

    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(updateStickyPosition);
      observer.observe(navbar);
    }

    window.addEventListener("scroll", updateStickyPosition, {
      passive: true,
    });

    window.addEventListener("resize", updateStickyPosition);

    return () => {
      observer?.disconnect();

      window.removeEventListener("scroll", updateStickyPosition);
      window.removeEventListener("resize", updateStickyPosition);

      document.documentElement.style.removeProperty(
        "--mock-sticky-top"
      );
    };
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Assalam-o-Alaikum EXAMITICS, I want to get the PMA 159 LC offer for 15 days of Premium access for Rs. 650."
  );

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const shouldShowPreparationMessage =
    !loading && (!user || !isPremium) && showPreparationMessage;

  const examCategories = [
    { id: "pma-lc", label: "PMA LC" },
    { id: "afns", label: "AFNS" },
    { id: "navy", label: "Navy" },
    { id: "paf", label: "PAF" },
  ];

  return (
    <>
      <Helmet>
        <title>
          Free ISSB &amp; PMA Mock Tests | Intelligence Test Practice |
          EXAMITICS
        </title>

        <meta
          name="description"
          content="Practice free ISSB and PMA Long Course mock tests including Verbal Intelligence, Non-Verbal Intelligence, Academic Tests, Mechanical Aptitude Test (MAT) and Full-Length Initial Tests. Improve your preparation for Pakistan Army, Pakistan Navy and Pakistan Air Force selection."
        />

        <meta
          name="keywords"
          content="ISSB Mock Test, PMA Mock Test, PMA Long Course Mock Test, Online Intelligence Test, Verbal Intelligence Test, Non-Verbal Intelligence Test, Academic Test, Mechanical Aptitude Test, MAT Test, Pakistan Army Initial Test, Pakistan Navy Test, Pakistan Air Force Test, Free Mock Tests, ISSB Preparation, PMA Preparation, EXAMITICS"
        />

        <meta name="author" content="EXAMITICS" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        <link
          rel="canonical"
          href="https://www.examitics.com/mock"
        />

        <meta
          property="og:title"
          content="Free ISSB &amp; PMA Mock Tests | Intelligence Test Practice"
        />

        <meta
          property="og:description"
          content="Take free online mock tests for ISSB and PMA Long Course. Practice Verbal Intelligence, Non-Verbal Intelligence, Academic Tests, Mechanical Aptitude Test and Full-Length Initial Tests."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />

        <meta
          property="og:url"
          content="https://www.examitics.com/mock"
        />

        <meta
          property="og:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Free ISSB &amp; PMA Mock Tests | Intelligence Test Practice"
        />

        <meta
          name="twitter:description"
          content="Practice ISSB and PMA mock tests including Verbal, Non-Verbal, Academic and Mechanical Aptitude Tests with detailed performance analysis."
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
            name: "Mock Tests",
            url: "https://www.examitics.com/mock",
          },
        ]}
      />

      <Navbar />

      <div className="mock-page-layout">
        <main className="mock-page section-padding">
          <div className="container-custom">
            {/* HERO */}
            <section className="mock-hero">
              <div className="mock-badge exa-badge">
                EXAMITICS MOCK CENTER
              </div>

              <h1>Practice Like The Real Exam</h1>

              <p>
                Attempt exam style mock tests designed to improve your
                speed, intelligence solving ability, and academic
                performance under real exam conditions.
              </p>
            </section>

            {/* PMA 159 SPECIAL OFFER — FREE USERS ONLY */}
            {shouldShowPreparationMessage && (
              <section
                className="mock-prep-card"
                aria-labelledby="mock-prep-title"
              >
                <button
                  type="button"
                  className="mock-prep-close"
                  onClick={() => setShowPreparationMessage(false)}
                  aria-label="Dismiss preparation message"
                >
                  <FiX />
                </button>

                <div className="mock-prep-badge">
                  <FiTarget />
                  PMA 159 LONG COURSE • SPECIAL OFFER
                </div>

                <div className="mock-prep-header">
                  <div className="mock-prep-icon">
                    <FiZap />
                  </div>

                  <div>
                    <h3 id="mock-prep-title">
                      Prepare for PMA 159 with EXAMITICS
                    </h3>

                    <p>
                      Practise smart. Build confidence. Prepare for success.
                    </p>
                  </div>
                </div>

                <div className="mock-prep-message">
                  <p>
                    Dear PMA 159 aspirant, your goal deserves focused
                    preparation. Your initial test is an important step
                    towards joining the Pakistan Army, so make every
                    practice session count.
                  </p>

                  <p>
                    <strong>
                      Attempt all our important Verbal Intelligence,
                      Non-Verbal Intelligence, and Academic mock tests.
                    </strong>{" "}
                    Strengthen your concepts, improve your speed and
                    accuracy, and identify the areas where you need more
                    practice. Stay consistent and work towards achieving
                    a strong initial-test score.
                  </p>
                </div>

                <div className="mock-prep-points">
                  <div>
                    <FiCheck />
                    Verbal Intelligence practice
                  </div>

                  <div>
                    <FiCheck />
                    Non-Verbal Intelligence practice
                  </div>

                  <div>
                    <FiCheck />
                    Academic mock tests
                  </div>
                </div>

                <div className="mock-prep-offer">
                  <div className="mock-prep-offer-content">
                    <span className="mock-prep-offer-label">
                      SPECIAL OFFER FOR PMA 159 CANDIDATES
                    </span>

                    <strong>
                      15 Days Premium Access — Rs. 650 Only
                    </strong>

                    <small>
                      Unlock Premium mock tests, practise important
                      questions, and take your initial-test preparation
                      further.
                    </small>
                  </div>

                  <a
                    className="mock-prep-whatsapp"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiMessageCircle />
                    Get Premium Access
                    <FiArrowRight />
                  </a>
                </div>

                <div className="mock-prep-footer">
                  <span>Want to hear from other candidates?</span>

                  <Link
                    to="/review"
                    className="mock-prep-reviews-link"
                  >
                    <FiCheckCircle />
                    Read Premium Candidates’ Reviews
                    <FiArrowRight />
                  </Link>
                </div>
              </section>
            )}

            {/* MOCK RULES */}
            <div className="mock-rules-grid">
              <div className="mock-rule-card">
                <FiClock className="mock-rule-icon" />

                <div>
                  <h4>Timed Tests</h4>
                  <p>Each mock follows real exam timing.</p>
                </div>
              </div>

              <div className="mock-rule-card">
                <FiMonitor className="mock-rule-icon" />

                <div>
                  <h4>No Refresh</h4>
                  <p>Avoid refreshing during attempts.</p>
                </div>
              </div>

              <div className="mock-rule-card">
                <FiCheckCircle className="mock-rule-icon" />

                <div>
                  <h4>Instant Result</h4>
                  <p>Get score immediately after submission.</p>
                </div>
              </div>
            </div>

            {/* FULL-WIDTH STICKY EXAM CATEGORY NAVIGATION */}
            <nav
              className="mock-exam-nav"
              aria-label="Select mock test category"
            >
              {examCategories.map((exam) => (
                <button
                  key={exam.id}
                  type="button"
                  className={`mock-exam-nav-btn ${
                    activeExam === exam.id ? "active" : ""
                  }`}
                  aria-pressed={activeExam === exam.id}
                  onClick={() => setActiveExam(exam.id)}
                >
                  {exam.label}
                </button>
              ))}
            </nav>

            {/* SELECTED EXAM SECTION */}
            {activeExam === "pma-lc" && (
              <PMAMockSection
                title="PMA LONG COURSE"
                examCode="pma-lc"
              />
            )}

            {activeExam === "afns" && (
              <AFNSMockSection
                title="AFNS"
                examCode="afns"
              />
            )}

            {activeExam === "navy" && (
              <NavyMockSection
                title="PAKISTAN NAVY MOCK TESTS"
              />
            )}

            {activeExam === "paf" && (
              <PAFMockSection
                title="PAF INITIAL TEST"
                examCode="paf-initial"
              />
            )}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default MOCK;
