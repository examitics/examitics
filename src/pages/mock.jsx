import React from "react";

import { Helmet } from "react-helmet-async";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import PMAMockSection from "../components/mock/pmamocksection";
import PAFMockSection from "../components/mock/pafmocksection";


import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

// import SidebarAd160x300 from "../components/SidebarAd160x300";
// import Adsterra728x90 from "../components/Adsterra728x90";
import "../styles/mock.css";

const MOCK = () => {
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
        <link rel="canonical" href="https://www.examitics.com/mock" />

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

        <meta property="og:url" content="https://www.examitics.com/mock" />

        <meta
          property="og:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

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
            {/* HERO */}
            <section className="mock-hero">
              <div className="mock-badge exa-badge">EXAMITICS MOCK CENTER</div>

              <h1>Practice Like The Real Exam</h1>

              <p>
                Attempt exam style mock tests designed to improve your speed,
                intelligence solving ability, and academic performance under
                real exam conditions.
              </p>
            </section>

            {/* PMA LC SECTION */}
            <PMAMockSection title="PMA LONG COURSE" examCode="pma-lc" />
<div style={{margin: "20px"}}></div>
            {/* PAF SECTION */}
            <PAFMockSection title="PAF INITIAL TEST" examCode="paf-initial"/>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MOCK;
