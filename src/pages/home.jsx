import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import Hero from "../components/landing/HeroSection";
import WhyChoose from "../components/landing/WhyChoose";
import PreparationCategories from "../components/landing/PreparationCategories";
import HowItWorks from "../components/landing/HowItWorks";
import FeaturedGuides from "../components/landing/FeaturedGuides";
import FAQ from "../components/landing/FAQ";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
// import "../styles/home.css";

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
        {/* Primary SEO */}
        <title>
          EXAMITICS | Free ISSB, PMA Long Course, PAF & Navy Preparation
          Platform
        </title>

        <meta
          name="description"
          content="Prepare for ISSB, PMA Long Course, Pakistan Air Force and Pakistan Navy selection with free mock tests, intelligence tests, WAT, TAT, SCT, OPI, interview preparation, study guides and performance analytics."
        />

        <meta
          name="keywords"
          content="
      ISSB Preparation,
      PMA Long Course,
      PMA Initial Test,
      Pakistan Army Preparation,
      Pakistan Navy Preparation,
      Pakistan Air Force Preparation,
      ISSB Mock Test,
      Verbal Intelligence Test,
      Non Verbal Intelligence Test,
      Mechanical Aptitude Test,
      Academic Test,
      WAT,
      TAT,
      SCT,
      OPI,
      Initial Interview,
      EXAMITICS
    "
        />

        <meta name="author" content="EXAMITICS" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        <link rel="canonical" href="https://examitics.vercel.app/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="EXAMITICS | Free ISSB, PMA, PAF & Navy Preparation"
        />

        <meta
          property="og:description"
          content="Free online preparation platform for ISSB, PMA Long Course, Pakistan Army, Pakistan Navy and Pakistan Air Force candidates."
        />

        <meta
          property="og:image"
          content="public\images\examitics-banner.png"
        />

        <meta property="og:url" content="https://examitics.vercel.app/" />

        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="EXAMITICS | Free ISSB Preparation Platform"
        />

        <meta
          name="twitter:description"
          content="Practice ISSB, PMA, PAF and Navy tests with free mock exams, psychology tests and interview preparation."
        />

        <meta
          name="twitter:image"
          content="public\images\examitics-banner.png"
        />
      </Helmet>

      <Navbar />

      <main className="home-page">
        {/* =====================================
            HERO SECTION
        ===================================== */}
        {/* <section className="hero-section">
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
               
              </div>
            </div>
          </div>
        </section> */}
        <section id="hero">
          <Hero />
        </section>

        <section id="whyChoose">
          <WhyChoose />
        </section>

        <section id="categories">
          <PreparationCategories />
        </section>

        <section id="HowWorks">
          <HowItWorks />
        </section>

        <section id="guides">
          <FeaturedGuides />
        </section>
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
        <section id="faq">
          <FAQ />
        </section>
        {/* AD BANNER */}
        <AdsterraNativeBanner />

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
