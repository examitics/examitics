
import React from "react";
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

import { PremiumReviewCarousel } from "../components/reviews/PremiumReviews";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* =========================
            PRIMARY SEO
        ========================= */}

        <title>
          EXAMITICS | PMA, AFNS, PAF, Navy & ISSB Preparation in Pakistan
        </title>

        <meta
          name="description"
          content="Prepare for Pakistan Armed Forces selection with PMA Long Course, AFNS, Pakistan Air Force and Pakistan Navy mock tests, ISSB psychology practice, preparation guides, Knowledge Hub and Premium study resources."
        />

        <meta
          name="keywords"
          content="EXAMITICS, PMA Long Course Preparation, PMA Initial Test, AFNS Mock Test, PAF Initial Test Preparation, Pakistan Navy Mock Test, ISSB Preparation Pakistan, ISSB Psychology Tests, WAT Practice, TAT Practice, SCT Practice, OPI, SRT, MAT, Verbal Intelligence Test, Non Verbal Intelligence Test, Armed Forces Preparation Pakistan, Knowledge Hub, Notes Hub"
        />

        <meta name="author" content="EXAMITICS Team" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d6efd" />

        {/* =========================
            CANONICAL
        ========================= */}

        <link
          rel="canonical"
          href="https://www.examitics.com/"
        />

        {/* =========================
            OPEN GRAPH
        ========================= */}

        <meta
          property="og:title"
          content="EXAMITICS | Pakistan Armed Forces and ISSB Preparation"
        />

        <meta
          property="og:description"
          content="Explore PMA, AFNS, PAF and Pakistan Navy mock tests, ISSB psychology practice, preparation guides, educational resources and EXAMITICS Premium."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />
        <meta
          property="og:url"
          content="https://www.examitics.com/"
        />

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
          content="EXAMITICS - Pakistan Armed Forces and ISSB Preparation Platform"
        />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* =========================
            TWITTER
        ========================= */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="EXAMITICS | Pakistan Armed Forces and ISSB Preparation"
        />

        <meta
          name="twitter:description"
          content="Prepare for PMA, AFNS, PAF, Pakistan Navy and ISSB with online mock tests, psychology practice, preparation guides and educational resources."
        />

        <meta
          name="twitter:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <meta
          name="twitter:image:alt"
          content="EXAMITICS - Pakistan Armed Forces and ISSB Preparation Platform"
        />

        {/* =========================
            ORGANIZATION SCHEMA
        ========================= */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "EXAMITICS",
            url: "https://www.examitics.com",
            logo: "https://www.examitics.com/images/examitics-logo.png",
            image: "https://www.examitics.com/images/examitics-banner.png",
            description:
              "EXAMITICS is an online educational platform providing Pakistan Armed Forces initial-test preparation, ISSB psychology practice, mock examinations, study resources and preparation guides.",
          })}
        </script>

        {/* =========================
            WEBSITE SCHEMA
        ========================= */}

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

        {/* =========================
            WEBPAGE SCHEMA
        ========================= */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "EXAMITICS - Pakistan Armed Forces Preparation",
            url: "https://www.examitics.com",
            description:
              "Explore PMA Long Course, AFNS, Pakistan Air Force, Pakistan Navy and ISSB preparation through mock tests, psychology practice, educational guides and study resources on EXAMITICS.",
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
            PRESERVED - NO CHANGES
        ===================================== */}

        <section id="hero">
          <Hero />
        </section>

        {/* =====================================
            WHY CHOOSE EXAMITICS
        ===================================== */}

        <section id="whyChoose">
          <WhyChoose />
        </section>

        {/* =====================================
            PREPARATION CATEGORIES
        ===================================== */}

        <section id="categories">
          <PreparationCategories />
        </section>

        {/* =====================================
            HOW IT WORKS
        ===================================== */}

        <section id="HowWorks">
          <HowItWorks />
        </section>

        {/* =====================================
            FEATURED PREPARATION GUIDES
        ===================================== */}

        <section id="guides">
          <FeaturedGuides />
        </section>

        {/* =====================================
            PREMIUM CANDIDATE REVIEWS
        ===================================== */}

        <section id="candidate-reviews">
          <PremiumReviewCarousel />
        </section>

        {/* =====================================
            FREQUENTLY ASKED QUESTIONS
        ===================================== */}

        <section id="faq">
          <FAQ />
        </section>

        {/* =====================================
            FOOTER
        ===================================== */}

        <Footer />

      </main>
    </>
  );
};

export default Home;
