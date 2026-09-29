import React from "react";

import { Helmet } from "react-helmet-async";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import PMAMockSection from "../components/mock/pmamocksection";
import PAFMockSection from "../components/mock/pafmocksection";
import AFNSMockSection from "../components/mock/afnsmocksection";

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

// import SidebarAd160x300 from "../components/SidebarAd160x300";
// import Adsterra728x90 from "../components/Adsterra728x90";

import "../styles/mock.css";

const WHATSAPP_NUMBER = "923014709158";

const MOCK = () => {
  const { user, isPremium, loading } = useAuth();

  const [showPreparationMessage, setShowPreparationMessage] =
    React.useState(true);

  const whatsappMessage = encodeURIComponent(
    "Assalam o Alaikum, I want to get 1-Month EXAMITICS Premium for PMA 159 LC / AFNS under the limited-time Rs. 500 offer."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  /*
   * Show preparation message only to:
   * 1. Users who are not signed in
   * 2. Signed-in users who are not Premium
   *
   * Hide from Premium users.
   */
  const shouldShowPreparationMessage =
    !loading &&
    (!user || !isPremium) &&
    showPreparationMessage;

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Free ISSB & PMA Mock Tests | Intelligence Test Practice | EXAMITICS
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

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.examitics.com/mock"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Free ISSB & PMA Mock Tests | Intelligence Test Practice"
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

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Free ISSB & PMA Mock Tests | Intelligence Test Practice"
        />

        <meta
          name="twitter:description"
          content="Practice free ISSB and PMA mock tests including Verbal, Non-Verbal, Academic and Mechanical Aptitude Tests with detailed performance analysis."
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

            {/* =====================================================
                HERO
            ===================================================== */}
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

            {/* =====================================================
                PREPARATION MESSAGE
                Visible only to logged-out / free users
            ===================================================== */}
            {shouldShowPreparationMessage && (
              <section className="mock-prep-card">

                {/* Close Button */}
                <button
                  type="button"
                  className="mock-prep-close"
                  onClick={() => setShowPreparationMessage(false)}
                  aria-label="Close preparation message"
                  title="Close"
                >
                  <FiX />
                </button>

                {/* Top Badge */}
                <div className="mock-prep-badge">
                  <FiZap />
                  <span>PREPARE SMART WITH EXAMITICS</span>
                </div>

                {/* Scrollable Content */}
                <div className="mock-prep-scroll">

                  {/* Header */}
                  <div className="mock-prep-header">
                    <div className="mock-prep-icon">
                      <FiTarget />
                    </div>

                    <div>
                      <h3>
                        Be Ready for Your Initial Test 🎯
                      </h3>

                      <p>
                        PMA 159 LC & AFNS candidates — take your
                        preparation seriously.
                      </p>
                    </div>
                  </div>

                  {/* Main Message */}
                  <div className="mock-prep-message">
                    <p>
                      Our mock tests contain{" "}
                      <strong>
                        important and exam-focused questions
                      </strong>{" "}
                      across{" "}
                      <strong>
                        Verbal, Non-Verbal Intelligence & Academics
                      </strong>.
                    </p>

                    <p>
                      Complete all the available mocks, review your
                      mistakes and keep improving your scores. With
                      consistent practice, you can build your{" "}
                      <strong>
                        complete initial-test preparation with EXAMITICS
                      </strong>{" "}
                      without relying on another academy.
                    </p>
                  </div>

                  {/* Preparation Points */}
                  <div className="mock-prep-points">

                    <div>
                      <FiCheck />
                      <span>
                        Important exam-focused questions
                      </span>
                    </div>

                    <div>
                      <FiCheck />
                      <span>
                        Improve speed & accuracy
                      </span>
                    </div>

                    <div>
                      <FiCheck />
                      <span>
                        Practice all major sections
                      </span>
                    </div>

                  </div>

                </div>

                {/* =================================================
                    PREMIUM OFFER
                    Stays visible while message scrolls
                ================================================= */}
                <div className="mock-prep-offer">

                  <div className="mock-prep-offer-content">

                    <span className="mock-prep-offer-label">
                      🔥 LIMITED-TIME OFFER
                    </span>

                    <strong>
                      1-Month Premium — Rs. 500
                    </strong>

                    <small>
                      PMA 159 LC & AFNS • Valid until
                      5 October 2026, 11:59 PM PKT
                    </small>

                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mock-prep-whatsapp"
                  >
                    <FiMessageCircle />

                    <span>
                      Get Premium
                    </span>

                    <FiArrowRight />
                  </a>

                </div>

                {/* Closing */}
                <div className="mock-prep-footer">
                  <span>Practice every mock.</span>

                  <span>Learn from every mistake.</span>

                  <strong>
                    Walk in prepared. 🇵🇰
                  </strong>
                </div>

              </section>
            )}

            {/* =====================================================
                MOCK RULES
            ===================================================== */}
            <div className="mock-rules-grid">

              <div className="mock-rule-card">
                <FiClock className="mock-rule-icon" />

                <div>
                  <h4>Timed Tests</h4>

                  <p>
                    Each mock follows real exam timing.
                  </p>
                </div>
              </div>

              <div className="mock-rule-card">
                <FiMonitor className="mock-rule-icon" />

                <div>
                  <h4>No Refresh</h4>

                  <p>
                    Avoid refreshing during attempts.
                  </p>
                </div>
              </div>

              <div className="mock-rule-card">
                <FiCheckCircle className="mock-rule-icon" />

                <div>
                  <h4>Instant Result</h4>

                  <p>
                    Get score immediately after submission.
                  </p>
                </div>
              </div>

            </div>

            {/* =====================================================
                PMA LONG COURSE
            ===================================================== */}
            <PMAMockSection
              title="PMA LONG COURSE"
              examCode="pma-lc"
            />

            <div style={{ margin: "20px" }}></div>

            {/* =====================================================
                AFNS
            ===================================================== */}
            <AFNSMockSection
              title="AFNS"
              examCode="afns"
            />

            <div style={{ margin: "20px" }}></div>

            {/* =====================================================
                PAF
            ===================================================== */}
            <PAFMockSection
              title="PAF INITIAL TEST"
              examCode="paf-initial"
            />

          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default MOCK;