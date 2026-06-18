import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import Navbar from "../components/layout/navbar";
import Features from "../components/landing/features";
import AnalyticsPreview from "../components/landing/analyticspreview";
import ExamCategories from "../components/landing/examcategories";
import Testimonials from "../components/landing/testimonials";
import CTASection from "../components/landing/CTAsection";
import Footer from "../components/layout/footer";
import "../styles/home.css";

import AdsterraNativeBanner from "../components/AdsterraNativeBanner";
import Adsterra300x250 from "../components/Adsterra300x250";
import Adsterra728x90 from "../components/Adsterra728x90";

import {
  FiArrowRight,
  FiBarChart2,
  FiClock,
  FiTarget,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ISSB Preparation Website</title>

        <meta
          name="description"
          content="Prepare for ISSB, PMA Long Course, MAT, WAT, TAT, SCT and OPI tests with EXAMITICS. Practice mock tests, track performance and improve your selection chances."
        />

        <meta
          name="keywords"
          content="ISSB preparation, PMA preparation, MAT test, WAT test, TAT test, OPI interview, Pakistan Army preparation"
        />

        <link rel="canonical" href="https://examitics.vercel.app/" />
      </Helmet>

      <Navbar />

      <main className="home-page">
        {/* =====================================
            HERO SECTION
        ===================================== */}
        <section className="hero-section">
          <div className="hero-overlay"></div>

          <div className="container-custom">
            <div className="hero-content">
              <div className="hero-badge">
                ISSB • PMA • PAF • Navy Preparation
              </div>

              <h1>
                Prepare for
                <span> ISSB, PMA, PAF & Navy </span>
                Selection with Confidence
              </h1>

              <p>
                Practice Intelligence Tests, Psychology Tests, Mock Exams, and
                Interview Preparation on one free platform designed for Pakistan
                Armed Forces candidates.
              </p>

              <div className="hero-buttons">
                <Link to="/exams" className="exa-btn exa-btn-primary">
                  Start Preparation
                  <FiArrowRight />
                </Link>

                <div className="explore-wrapper">
                  <a
                    href="https://www.effectivecpmnetwork.com/iiikcn40sy?key=62694b4e41a1a3c22f1b3bbb5189f72d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exa-btn exa-btn-outline hero-outline-btn"
                  >
                    Explore More
                  </a>

                  <div className="explore-tooltip">
                    Exploring our sponsored resources helps support server and
                    development costs, allowing us to keep PMA and ISSB
                    preparation free for all candidates.
                  </div>
                </div>
                {/* <a
                  href="https://www.effectivecpmnetwork.com/iiikcn40sy?key=62694b4e41a1a3c22f1b3bbb5189f72d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exa-btn exa-btn-outline hero-outline-btn"
                >
                  Explore More{" "}
                </a> */}
              </div>
            </div>
          </div>
        </section>
        {/* AD BANNER */}
        <AdsterraNativeBanner />

        {/* CTA SECTION */}
        <CTASection />
        <div className="desktop-ad">
          <h6 style={{ display: "grid", placeItems: "center" }}>
            Advertisement
          </h6>
          <Adsterra728x90 />
        </div>
        <div className="mobile-ad">
          <h6 style={{ display: "grid", placeItems: "center" }}>
            Advertisement
          </h6>
          <Adsterra300x250 />
        </div>
        {/* Testimonials  */}
        {/* <Testimonials /> */}
        {/* FEATURES */}
        <section id="features">
          <Features id="features" />
        </section>

        {/* ANALYTICS PREVIEW */}
        <section id="analytics">
          <AnalyticsPreview />
        </section>
        {/* EXAM CATEGORIES */}
        <ExamCategories />
        {/* AD BANNER */}
        <div className="desktop-ad">
          <h6 style={{ display: "grid", placeItems: "center" }}>
            Advertisement
          </h6>
          <Adsterra728x90 />
        </div>
        <div className="mobile-ad">
          <h6 style={{ display: "grid", placeItems: "center" }}>
            Advertisement
          </h6>
          <Adsterra300x250 />
        </div>
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
