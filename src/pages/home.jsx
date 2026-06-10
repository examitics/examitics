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
// import Adsterra300x250 from "../components/Adsterra300x250";
import Adsterra728x90 from "../components/Adsterra728x90";

import { FiArrowRight, FiBarChart2, FiClock, FiTarget, FiBookOpen, FiAward } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>EXAMITICS | ISSB & PMA Preparation Platform Pakistan</title>

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
            Practice Intelligence Tests, Psychology Tests,
            Mock Exams, and Interview Preparation on one
            free platform designed for Pakistan Armed
            Forces candidates.
          </p>

          <div className="hero-buttons">
            <Link
              to="/exams"
              className="exa-btn exa-btn-primary"
            >
              Start Preparation
              <FiArrowRight />
            </Link>

            <Link
              to="/issb-1"
              className="exa-btn exa-btn-outline hero-outline-btn"
            >
              Explore Tests
            </Link>
          </div>

          {/* <div className="hero-stats">

            <div className="hero-stat-card">
              <FiBookOpen />

              <div>
                <h3>10K+</h3>
                <p>Practice Questions</p>
              </div>
            </div>

            <div className="hero-stat-card">
              <FiTarget />

              <div>
                <h3>WAT • TAT</h3>
                <p>Psych Tests</p>
              </div>
            </div>

            <div className="hero-stat-card">
              <FiAward />

              <div>
                <h3>100%</h3>
                <p>Free Access</p>
              </div>
            </div>

          </div> */}

        </div>
      </div>
    </section>
        {/* AD BANNER */}
        {/* <AdsterraNativeBanner /> */}
        <Adsterra728x90 />
        {/* CTA SECTION */}
        <CTASection />
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
        <Adsterra728x90 />
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
