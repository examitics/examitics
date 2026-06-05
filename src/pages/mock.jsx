import React from "react";

import { Helmet } from "react-helmet-async";

import Navbar from "../components/layout/navbar";
import MockSection from "../components/mock/mocksection";

import "../styles/mock.css";

const MOCK = () => {
  return (
    <>
      <Helmet>
        <title>ISSB Mock Tests Online | EXAMITICS</title>

        <meta
          name="description"
          content="Take full-length mock tests for ISSB and PMA preparation. Analyze performance, identify weaknesses and improve your score."
        />

        <meta
          name="keywords"
          content="ISSB mock tests, PMA mock tests, online intelligence tests, practice tests, exam preparation Pakistan"
        />

        <link rel="canonical" href="https://examitics.vercel.app/mock" />
      </Helmet>
      <Navbar />
      <main className="mock-page section-padding">
        <div className="container-custom">
          {/* HERO */}
          <section className="mock-hero">
            <div className="mock-badge exa-badge">EXAMITICS MOCK CENTER</div>

            <h1>Practice Like The Real Exam</h1>

            <p>
              Attempt PMA-style mock tests designed to improve your speed,
              intelligence solving ability, and academic performance under real
              exam conditions.
            </p>
          </section>

          {/* PMA LC SECTION */}
          <MockSection title="PMA LONG COURSE" examCode="pma-lc" />
        </div>
      </main>
    </>
  );
};

export default MOCK;
