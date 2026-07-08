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

import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";
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
        {/* =========================
      Primary SEO
  ========================= */}
        <title>
          EXAMITICS | Free ISSB, PMA Long Course, Pakistan Army, PAF & Navy
          Preparation
        </title>

        <meta
          name="description"
          content="Prepare for ISSB, PMA Long Course, Pakistan Army, Pakistan Air Force and Pakistan Navy with free online mock tests, verbal & non-verbal intelligence tests, MAT, WAT, TAT, SCT, OPI, interview preparation, study guides and performance analytics."
        />

        <meta
          name="keywords"
          content="ISSB Preparation, PMA Long Course, PMA Initial Test, Pakistan Army Preparation, Pakistan Air Force Preparation, Pakistan Navy Preparation, ISSB Mock Test, Verbal Intelligence Test, Non Verbal Intelligence Test, Mechanical Aptitude Test, Academic Test, WAT, TAT, SCT, OPI, Initial Interview, Pakistan Armed Forces, EXAMITICS"
        />

        <meta name="author" content="EXAMITICS Team" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d6efd" />

        {/* =========================
      Canonical
  ========================= */}
        <link rel="canonical" href="https://www.examitics.com/" />

        {/* =========================
      Open Graph (Facebook, LinkedIn, WhatsApp)
  ========================= */}
        <meta
          property="og:title"
          content="EXAMITICS | Free ISSB, PMA Long Course, Pakistan Army, PAF & Navy Preparation"
        />

        <meta
          property="og:description"
          content="Practice ISSB, PMA Long Course, Pakistan Army, Pakistan Air Force and Pakistan Navy tests with free mock tests, intelligence tests, psychology tests, interview preparation and comprehensive study guides."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />
        <meta property="og:url" content="https://www.examitics.com/" />

        <meta
          property="og:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <meta
          property="og:image:secure_url"
          content="https://www.examitics.com/images/examitics-banner.png"
        />
        <meta
          property="og:image:alt"
          content="EXAMITICS - Free ISSB, PMA, PAF and Navy Preparation"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* =========================
      Twitter
  ========================= */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="EXAMITICS | Free ISSB, PMA Long Course, Pakistan Army, PAF & Navy Preparation"
        />

        <meta
          name="twitter:description"
          content="Free preparation platform for ISSB, PMA Long Course, Pakistan Army, Pakistan Air Force and Pakistan Navy with mock tests, intelligence tests, interview preparation and study guides."
        />

        <meta
          name="twitter:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />
        <meta
          name="twitter:image:alt"
          content="EXAMITICS - Free ISSB and PMA Preparation Platform"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "EXAMITICS",
            url: "https://www.examitics.com",
            logo: "https://www.examitics.com/images/examitics-logo.png",
            image: "https://www.examitics.com/images/examitics-banner.png",
            description:
              "Free online platform for ISSB, PMA Long Course, Pakistan Army, Pakistan Navy and Pakistan Air Force preparation.",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "EXAMITICS",
            url: "https://www.examitics.com",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.examitics.com/knowledgehub?search={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "EXAMITICS",
            url: "https://www.examitics.com",
            description:
              "Free preparation platform for ISSB, PMA Long Course, Pakistan Army, Pakistan Navy and Pakistan Air Force.",
            inLanguage: "en-PK",
            isPartOf: {
              "@type": "WebSite",
              name: "EXAMITICS",
              url: "https://www.examitics.com",
            },
          })}
        </script>
      </Helmet>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.examitics.com/",
          },
        ]}
      />
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
