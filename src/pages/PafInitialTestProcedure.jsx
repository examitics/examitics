// src/pages/PafInitialTestProcedure.jsx

import { useState } from "react";

import "../styles/PmaInitialTestProcedure.css";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

import { Helmet } from "react-helmet-async";

import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

const PafInitialTestProcedure = () => {
  const [showAdModal, setShowAdModal] = useState(false);

  return (
    <>
      <Helmet>
        {/* ================= PRIMARY SEO ================= */}

        <title>
          PAF Initial Test Procedure & Complete Preparation Guide | EXAMITICS
        </title>

        <meta
          name="description"
          content="Complete PAF Initial Test Procedure guide covering registration, intelligence test, academic test, physical test, initial medical, interview, PAF commission categories, ISSB selection and GD(P) flying aptitude test."
        />

        <meta
          name="keywords"
          content="PAF Initial Test, PAF Initial Test Procedure, PAF Test Preparation, PAF Intelligence Test, PAF Verbal Intelligence Test, PAF Non Verbal Intelligence Test, PAF Academic Test, PAF Physical Test, PAF Initial Medical, PAF Interview, PAF Commission, Permanent Commission PAF, PAF SSC, PAF SPSSC, GD Pilot PAF, PAF Aeronautical Engineering, PAF Air Defence, PAF Admin and Special Duties, PAF Logistics, PAF ISSB, PAF Flying Aptitude Test, Join PAF, Pakistan Air Force Test, PAF Preparation, PAF Mock Test, EXAMITICS"
        />

        <meta name="author" content="EXAMITICS" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* ================= CANONICAL ================= */}

        <link
          rel="canonical"
          href="https://www.examitics.com/paf-initial-test-procedure"
        />

        {/* ================= OPEN GRAPH ================= */}

        <meta
          property="og:title"
          content="PAF Initial Test Procedure & Complete Preparation Guide"
        />

        <meta
          property="og:description"
          content="Learn the PAF Initial Test Procedure including intelligence testing, academic testing, physical assessment, initial medical, interview, commission categories and the selection process."
        />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />

        <meta
          property="og:url"
          content="https://www.examitics.com/paf-initial-test-procedure"
        />

        <meta
          property="og:image"
          content="https://www.examitics.com/images/paf-guide.png"
        />

        {/* ================= TWITTER ================= */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="PAF Initial Test Procedure & Complete Preparation Guide"
        />

        <meta
          name="twitter:description"
          content="Complete PAF Initial Test preparation guide covering intelligence, academic, physical, medical, interview and commission-specific selection stages."
        />

        <meta
          name="twitter:image"
          content="https://www.examitics.com/images/paf-guide.png"
        />
      </Helmet>

      {/* ================= BREADCRUMB SCHEMA ================= */}

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.examitics.com/",
          },
          {
            name: "PAF Initial Test Procedure",
            url: "https://www.examitics.com/paf-initial-test-procedure",
          },
        ]}
      />

      <Navbar />

      <main className="pma-blog-page">

        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <section className="pma-hero">
          <div className="pma-hero-content">

            <span className="pma-breadcrumb">
              Home / Blogs / PAF
            </span>

            <h1>PAF Initial Test Procedure</h1>

            <p>
              A complete guide covering PAF registration, computerized
              intelligence and academic tests, physical assessment, initial
              medical examination, interview and the selection process for
              commissioned officer candidates.
            </p>

            <div className="pma-meta">
              <span>Updated 2026</span>
              <span>12 min read</span>
            </div>

          </div>
        </section>

        {/* =====================================================
            QUICK OVERVIEW
        ===================================================== */}

        <section className="overview-section">
          <div className="overview-card">

            <h2>Quick Overview</h2>

            <div className="overview-grid">

              <div>✓ Online Registration</div>

              <div>✓ Intelligence Test</div>

              <div>✓ Academic Test</div>

              <div>✓ Initial Medical</div>

              <div>✓ Physical Test</div>

              <div>✓ Initial Interview</div>

              <div>✓ ISSB Shortlisting</div>

              <div>✓ Course-Specific Selection</div>

            </div>

          </div>
        </section>

        {/* =====================================================
            BLOG CONTENT
        ===================================================== */}

        <section className="blog-content">

          {/* ===================================================
              TABLE OF CONTENTS
          =================================================== */}

          <aside className="table-of-contents">

            <h3>Contents</h3>

            <ul>

              <li>
                <a href="#introduction">
                  Introduction
                </a>
              </li>

              <li>
                <a href="#commission-categories">
                  PAF Commission Categories
                </a>
              </li>

              <li>
                <a href="#registration">
                  Registration Process
                </a>
              </li>

              <li>
                <a href="#computerized-test">
                  Computerized Initial Test
                </a>
              </li>

              <li>
                <a href="#intelligence-test">
                  Intelligence Test
                </a>
              </li>

              <li>
                <a href="#academic-test">
                  Academic Test
                </a>
              </li>

              <li>
                <a href="#physical-test">
                  Physical Test
                </a>
              </li>

              <li>
                <a href="#medical">
                  Initial Medical Examination
                </a>
              </li>

              <li>
                <a href="#interview">
                  Initial Interview
                </a>
              </li>

              <li>
                <a href="#issb">
                  ISSB Introduction
                </a>
              </li>

              <li>
                <a href="#flying-aptitude">
                  Flying Aptitude Test
                </a>
              </li>

              <li>
                <a href="#final-selection">
                  Final Selection
                </a>
              </li>

              <li>
                <a href="#preparation">
                  Preparation Strategy
                </a>
              </li>

            </ul>

          </aside>

          {/* ===================================================
              ARTICLE
          =================================================== */}

          <div className="article-content">

            {/* =================================================
                INTRODUCTION
            ================================================= */}

            <section
              id="introduction"
              className="article-card"
            >

              <h2>Introduction</h2>

              <p>
                The Pakistan Air Force (PAF) offers several commissioned
                officer entry routes for candidates who aspire to serve in
                the Pakistan Air Force. These entries include Permanent
                Commission as well as Short Service Commission and Special
                Purpose Short Service Commission categories.
              </p>

              <p>
                Before a candidate can proceed to the later stages of the
                selection process, they must successfully complete the
                prescribed initial selection stages. These stages generally
                include online registration, computerized intelligence and
                academic testing, initial medical examination, physical
                assessment and interview.
              </p>

              <p>
                The exact requirements can vary according to the entry,
                branch, educational background and recruitment cycle.
                Therefore, candidates should always compare their application
                with the latest PAF recruitment advertisement before applying.
              </p>

              <div className="warning-box">

                <strong>Important:</strong>{" "}
                PAF selection requirements are entry-specific. Question
                counts, subjects, physical standards and other requirements
                should not be assumed to be identical for every PAF course.

              </div>

            </section>

            {/* =================================================
                COMMISSION CATEGORIES
            ================================================= */}

            <section
              id="commission-categories"
              className="article-card content-section"
            >

              <h2>PAF Commission Categories</h2>

              <p>
                PAF commissioned officer recruitment is conducted through
                different commission categories. The courses and branches
                offered can change according to each recruitment cycle.
                Candidates should therefore check the current recruitment
                advertisement for the exact courses available when applying.
              </p>

              <div className="info-grid">

                <div>
                  ✓ Permanent Commission (PC)
                </div>

                <div>
                  ✓ Short Service Commission (SSC)
                </div>

                <div>
                  ✓ Special Purpose Short Service Commission (SPSSC)
                </div>

                <div>
                  ✓ Course-Specific Eligibility
                </div>

              </div>

              {/* ================= PERMANENT COMMISSION ================= */}

              <h3>Permanent Commission (PC)</h3>

              <p>
                Permanent Commission entries are designed for candidates
                applying for specific long-term commissioned officer
                career tracks in the Pakistan Air Force.
              </p>

              <div className="medical-standards">

                <div className="standard-item">

                  <strong>General Duty Pilot (GD(P))</strong>

                  <span>
                    Pilot branch for candidates meeting the applicable
                    educational, age, medical and physical requirements.
                  </span>

                </div>

                <div className="standard-item">

                  <strong>Aeronautical Engineering</strong>

                  <span>
                    Engineering-oriented commissioned officer entry.
                  </span>

                </div>

                <div className="standard-item">

                  <strong>Air Defence</strong>

                  <span>
                    Commissioned officer entry related to air defence
                    operations.
                  </span>

                </div>

                <div className="standard-item">

                  <strong>Admin & Special Duties</strong>

                  <span>
                    Commissioned officer entry for administrative and
                    special-duty responsibilities.
                  </span>

                </div>

                <div className="standard-item">

                  <strong>Logistics</strong>

                  <span>
                    Commissioned officer entry related to logistics
                    functions within the PAF.
                  </span>

                </div>

              </div>

              {/* ================= SSC / SPSSC ================= */}

              <h3>Short Service Commission (SSC / SPSSC)</h3>

              <p>
                Short Service Commission and Special Purpose Short Service
                Commission entries are generally intended for candidates
                with specific professional or academic qualifications.
                Available branches can change between recruitment
                advertisements.
              </p>

              <div className="info-grid">

                <div>
                  ✓ Engineering
                </div>

                <div>
                  ✓ Education
                </div>

                <div>
                  ✓ Accounts
                </div>

                <div>
                  ✓ Information Technology
                </div>

              </div>

              <div className="warning-box">

                <strong>Note:</strong>{" "}
                The list of courses and branches is not permanently fixed.
                Always verify the latest PAF recruitment advertisement for
                the intake in which you intend to apply.

              </div>

            </section>

            {/* =================================================
                REGISTRATION
            ================================================= */}

            <section
              id="registration"
              className="article-card content-section"
            >

              <h2>PAF Registration Process</h2>

              <p>
                Candidates applying for a PAF commissioned officer entry
                normally begin the selection process through online
                registration during the announced recruitment period.
              </p>

              <p>
                During registration, candidates should carefully select
                the applicable course or branch and provide accurate
                personal, educational and other required information.
              </p>

              <div className="info-grid">

                <div>
                  ✓ Online Registration
                </div>

                <div>
                  ✓ Course Selection
                </div>

                <div>
                  ✓ Candidate Information
                </div>

                <div>
                  ✓ E-Test / Registration Instructions
                </div>

              </div>

              <h3>Official PAF Recruitment Portal</h3>

              <p>
                Candidates should use the official Pakistan Air Force
                recruitment portal for registration and recruitment
                instructions:
              </p>

              <p>
                <a
                  href="https://joinpaf.gov.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-primary)" }}
                >
                  <strong>joinpaf.gov.pk →</strong>
                </a>
              </p>

              <h3>Registration Information</h3>

              <p>
                Before submitting the application, candidates should
                carefully verify their date of birth, educational
                qualification, marks, domicile, CNIC/B-Form information
                and selected course against the current eligibility
                requirements.
              </p>

              <h3>After Registration</h3>

              <p>
                After successful registration, candidates should follow the
                instructions provided by PAF regarding their test schedule,
                reporting requirements and computerized testing.
              </p>

              <div className="warning-box">

                <strong>Important:</strong>{" "}
                Do not rely on an old registration schedule, fee, age limit
                or eligibility criterion. These details can change with a
                new PAF recruitment advertisement.

              </div>

            </section>

            {/* =================================================
                COMPUTERIZED TEST INTRODUCTION
            ================================================= */}

            <section
              id="computerized-test"
              className="article-card content-section"
            >

              <h2>PAF Computerized Initial Test</h2>

              <p>
                The computerized initial test is one of the major screening
                stages for PAF commissioned officer candidates. The initial
                e-testing process evaluates candidates through intelligence
                and academic assessment.
              </p>

              <p>
                Candidates should be prepared for both logical reasoning
                questions and academic questions relevant to their entry
                and educational background.
              </p>

              <div className="info-grid">

                <div>
                  ✓ Intelligence Test
                </div>

                <div>
                  ✓ Verbal Intelligence
                </div>

                <div>
                  ✓ Non-Verbal Intelligence
                </div>

                <div>
                  ✓ Academic Test
                </div>

              </div>

              <div className="warning-box">

                <strong>Important:</strong>{" "}
                The exact question count and time allocation should not be
                treated as universal PAF standards. The testing structure
                can vary according to the entry and recruitment cycle.
                Candidates should follow the instructions displayed during
                their actual e-testing session.

              </div>

            </section>

            {/* =================================================
                INTELLIGENCE TEST
            ================================================= */}

            <section
              id="intelligence-test"
              className="article-card content-section"
            >

              <h2>PAF Intelligence Test</h2>

              <p>
                The intelligence assessment is designed to evaluate mental
                ability, reasoning, problem-solving, pattern recognition and
                the candidate's ability to work accurately under time
                pressure.
              </p>

              <div className="info-grid">

                <div>
                  ✓ Verbal Intelligence
                </div>

                <div>
                  ✓ Non-Verbal Intelligence
                </div>

                <div>
                  ✓ Logical Reasoning
                </div>

                <div>
                  ✓ Pattern Recognition
                </div>

              </div>

              <h3>Verbal Intelligence</h3>

              <p>
                Verbal intelligence questions generally require candidates
                to understand relationships between words, numbers or
                concepts and identify the logical answer within a limited
                amount of time.
              </p>

              <p>
                Preparation should focus on areas such as analogies,
                classification, series, coding and decoding, logical
                relationships, direction-based reasoning and other
                verbal reasoning patterns.
              </p>

              <h3>Non-Verbal Intelligence</h3>

              <p>
                Non-verbal intelligence focuses on visual reasoning rather
                than conventional written language. Candidates may encounter
                figure sequences, pattern completion, classification,
                odd-one-out problems, rotations and other visual reasoning
                questions.
              </p>

              <p>
                Regular timed practice is particularly useful because
                non-verbal questions require candidates to recognize visual
                patterns quickly and make decisions without spending too
                much time on a single question.
              </p>

              <div className="cta-box">

                <h3>Practice PAF Intelligence Questions</h3>

                <p>
                  Build speed and accuracy with timed intelligence practice
                  before attempting the PAF computerized initial test.
                </p>

                <a
                  href="/mock"
                  className="cta-button"
                >
                  Start Intelligence Practice →
                </a>

              </div>

            </section>

                        {/* =================================================
                ACADEMIC TEST
            ================================================= */}

            <section
              id="academic-test"
              className="article-card content-section"
            >

              <h2>PAF Academic Test</h2>

              <p>
                Candidates who successfully complete the intelligence
                assessment proceed to the academic component of the
                computerized initial test. The academic assessment is
                designed according to the candidate's educational background
                and the requirements of the selected PAF entry.
              </p>

              <p>
                Unlike a single universal academic paper, PAF academic
                testing can differ according to the candidate's background
                and applied course. Therefore, candidates should prepare
                the subjects relevant to their own entry instead of relying
                on a generic subject list.
              </p>

              <div className="info-grid">

                <div>
                  ✓ Pre-Medical Background
                </div>

                <div>
                  ✓ Pre-Engineering Background
                </div>

                <div>
                  ✓ ICS / Computer Science Background
                </div>

                <div>
                  ✓ DAE / Relevant Technical Background
                </div>

              </div>

              <h3>Pre-Medical Candidates</h3>

              <p>
                For candidates applying through an entry that accepts a
                Pre-Medical educational background, the academic assessment
                may focus on subjects specified in the relevant recruitment
                advertisement, including English and Physics.
              </p>

              <h3>Pre-Engineering, ICS & DAE Candidates</h3>

              <p>
                Candidates with Pre-Engineering, ICS or an applicable
                technical background should prepare English, Physics and
                Mathematics where these subjects are prescribed for their
                selected entry.
              </p>

              <h3>English</h3>

              <p>
                English preparation should focus on fundamental language
                skills and objective-type questions. Important preparation
                areas include vocabulary, synonyms, antonyms, sentence
                completion, grammar and basic comprehension.
              </p>

              <h3>Physics</h3>

              <p>
                Physics preparation should begin with the fundamental
                concepts covered in the candidate's relevant educational
                syllabus. Candidates should prioritize conceptual
                understanding, formulas, units and numerical problem
                solving.
              </p>

              <h3>Mathematics</h3>

              <p>
                Candidates whose selected entry requires Mathematics should
                revise fundamental mathematical concepts and practice
                solving objective questions quickly. Particular attention
                should be given to algebra, arithmetic, ratios,
                percentages, equations and other topics relevant to the
                prescribed academic background.
              </p>

              <div className="warning-box">

                <strong>Important:</strong>{" "}
                The academic subjects are not necessarily identical for
                every PAF commission or branch. Always match your
                preparation with the eligibility and test requirements
                stated for your specific recruitment intake.

              </div>

              <div className="cta-box">

                <h3>Prepare for the PAF Academic Test</h3>

                <p>
                  Strengthen your academic concepts and improve your speed
                  with exam-style practice questions on EXAMITICS.
                </p>

                <a
                  href="/mock"
                  className="cta-button"
                >
                  Start Academic Practice →
                </a>

              </div>

            </section>


            {/* =================================================
                PHYSICAL TEST
            ================================================= */}

            <section
              id="physical-test"
              className="article-card content-section"
            >

              <h2>PAF Initial Physical Test</h2>

              <p>
                Candidates who successfully clear the applicable initial
                testing stages are required to meet the physical standards
                prescribed for their PAF entry. Physical requirements can
                differ between Permanent Commission and Short Service
                Commission / Special Purpose Short Service Commission
                categories.
              </p>

              <p>
                Candidates should begin physical preparation well before
                reporting for the selection process. Running endurance,
                upper-body strength and core strength should be developed
                through consistent training.
              </p>

              <div className="info-grid">

                <div>
                  ✓ 1 Mile Run
                </div>

                <div>
                  ✓ Push-Ups
                </div>

                <div>
                  ✓ Sit-Ups
                </div>

                <div>
                  ✓ Chin-Ups
                </div>

              </div>

              {/* ================= 1 MILE RUN ================= */}

              <h3>1 Mile Run</h3>

              <p>
                For the current Permanent Commission physical standard,
                candidates are required to complete a <strong>1 mile run
                within 8 minutes</strong>.
              </p>

              <div className="requirement-box">

                <span>Permanent Commission Standard</span>

                <strong>
                  1 Mile Run — 8 Minutes
                </strong>

              </div>

              <p>
                Candidates should not wait until the test date to begin
                running practice. Regular timed runs can help improve
                cardiovascular endurance and pacing.
              </p>

              {/* ================= PUSH UPS ================= */}

              <h3>Push-Ups</h3>

              <p>
                The current Permanent Commission standard requires
                candidates to perform <strong>15 push-ups within 2
                minutes</strong>.
              </p>

              <div className="requirement-box">

                <span>Permanent Commission Standard</span>

                <strong>
                  15 Push-Ups — 2 Minutes
                </strong>

              </div>

              {/* ================= SIT UPS ================= */}

              <h3>Sit-Ups</h3>

              <p>
                Candidates applying through Permanent Commission are
                currently required to perform <strong>20 sit-ups within
                2 minutes</strong>.
              </p>

              <div className="requirement-box">

                <span>Permanent Commission Standard</span>

                <strong>
                  20 Sit-Ups — 2 Minutes
                </strong>

              </div>

              {/* ================= CHIN UPS ================= */}

              <h3>Chin-Ups</h3>

              <p>
                The current Permanent Commission physical standard also
                includes <strong>3 chin-ups within 2 minutes</strong>.
              </p>

              <div className="requirement-box">

                <span>Permanent Commission Standard</span>

                <strong>
                  3 Chin-Ups — 2 Minutes
                </strong>

              </div>

              <h3>Physical Preparation Strategy</h3>

              <ul>

                <li>
                  Start running practice several weeks before the test.
                </li>

                <li>
                  Practice push-ups using the correct technique and full
                  range of movement.
                </li>

                <li>
                  Build core strength through regular sit-up training.
                </li>

                <li>
                  Gradually develop chin-up strength rather than attempting
                  maximum repetitions every day.
                </li>

                <li>
                  Include rest and recovery days in your training routine.
                </li>

              </ul>

              <div className="warning-box">

                <strong>Important:</strong>{" "}
                Physical standards can vary according to the commission,
                course and recruitment advertisement. The figures above
                should be checked against the latest applicable PAF
                advertisement before the candidate's test.

              </div>

            </section>


            {/* =================================================
                INITIAL MEDICAL
            ================================================= */}

            <section
              id="medical"
              className="article-card content-section"
            >

              <h2>PAF Initial Medical Examination</h2>

              <p>
                The initial medical examination is an important screening
                stage in the PAF selection process. Candidates are assessed
                against the medical requirements applicable to their
                selected course or commission.
              </p>

              <p>
                The examination is intended to determine whether a candidate
                meets the required basic medical fitness standards before
                proceeding to later stages of selection.
              </p>

              <div className="info-grid">

                <div>
                  ✓ Height & Weight
                </div>

                <div>
                  ✓ Eyesight
                </div>

                <div>
                  ✓ General Physical Fitness
                </div>

                <div>
                  ✓ Medical Screening
                </div>

              </div>

              <h3>Height & Weight</h3>

              <p>
                Candidates must satisfy the height and weight requirements
                applicable to their particular PAF entry. These requirements
                should be checked against the current course advertisement
                because standards can differ between branches.
              </p>

              <h3>Eyesight</h3>

              <p>
                Visual standards are particularly important for candidates
                applying to aviation-related entries. GD(P) candidates are
                subject to the medical and visual requirements prescribed
                for pilot training.
              </p>

              <h3>General Medical Assessment</h3>

              <p>
                The medical assessment may include general physical
                examination and other checks required by the relevant PAF
                medical authorities.
              </p>

              <div className="warning-box">

                <strong>Important:</strong>{" "}
                Medical fitness is course-specific. Candidates should not
                assume that a medical standard applicable to one PAF branch
                automatically applies to another branch.

              </div>

            </section>


            {/* =================================================
                INITIAL INTERVIEW
            ================================================= */}

            <section
              id="interview"
              className="article-card content-section"
            >

              <h2>PAF Initial Interview</h2>

              <p>
                Candidates who successfully progress through the applicable
                initial testing, physical and medical stages are assessed
                through an initial interview at the relevant PAF Information
                & Selection Centre.
              </p>

              <p>
                The interview provides an opportunity for the selection
                staff to assess the candidate's communication, confidence,
                motivation, general awareness and suitability for the
                selected entry.
              </p>

              <div className="info-grid">

                <div>
                  ✓ Personal Introduction
                </div>

                <div>
                  ✓ Educational Background
                </div>

                <div>
                  ✓ General Awareness
                </div>

                <div>
                  ✓ Motivation & Career Interest
                </div>

              </div>

              <h3>Questions You Should Prepare</h3>

              <ul>

                <li>
                  Tell us about yourself.
                </li>

                <li>
                  Why do you want to join the Pakistan Air Force?
                </li>

                <li>
                  Why did you choose your selected PAF branch?
                </li>

                <li>
                  What do you know about the Pakistan Air Force?
                </li>

                <li>
                  What are your educational strengths?
                </li>

                <li>
                  What are your hobbies and interests?
                </li>

                <li>
                  What are your future career goals?
                </li>

                <li>
                  What do you know about current national and international
                  affairs?
                </li>

              </ul>

              <h3>How to Approach the Interview</h3>

              <p>
                Candidates should answer honestly and confidently rather than
                attempting to memorize artificial responses. Interview
                preparation should focus on understanding your own
                educational background, interests, chosen branch and
                motivation for joining the PAF.
              </p>

              <div className="warning-box">

                <strong>Interview Tip:</strong>{" "}
                Do not try to present a memorized personality. Give clear,
                honest and concise answers and maintain professional
                communication throughout the interview.

              </div>

            </section>


            {/* =================================================
                ISSB INTRODUCTION ONLY
            ================================================= */}

            <section
              id="issb"
              className="article-card content-section"
            >

              <h2>ISSB Selection — What Happens Next?</h2>

              <p>
                Candidates who successfully clear the applicable PAF initial
                selection stages may be shortlisted for the
                <strong> Inter Services Selection Board (ISSB)</strong>.
              </p>

              <p>
                ISSB is a separate and comprehensive officer-selection
                assessment conducted for candidates being considered for
                commissioned officer training in Pakistan's Armed Forces.
                It evaluates areas such as personality, leadership potential,
                psychological suitability, group performance and other
                officer-like qualities.
              </p>

              <p>
                The ISSB assessment is different from the PAF computerized
                initial test. Candidates should therefore prepare for ISSB
                separately after understanding the requirements of their
                respective PAF entry.
              </p>

              <div className="requirement-box">

                <span>Next Major Selection Stage</span>

                <strong>
                  PAF Initial Selection → ISSB
                </strong>

              </div>

              <div className="cta-box">

                <h3>Complete ISSB Preparation Guide</h3>

                <p>
                  Learn about ISSB psychological tests, GTO tasks, group
                  activities, interviews, officer-like qualities and the
                  complete ISSB assessment process in our dedicated guide.
                </p>

                <a
                  href="/issbguide"
                  className="cta-button"
                >
                  Read Complete ISSB Guide →
                </a>

              </div>

            </section>


            {/* =================================================
                FLYING APTITUDE TEST
            ================================================= */}

            <section
              id="flying-aptitude"
              className="article-card content-section"
            >

              <h2>Flying Aptitude Test (FAT)</h2>

              <p>
                The Flying Aptitude Test is a specialized assessment
                associated with the <strong>General Duty Pilot (GD(P))</strong>
                entry.
              </p>

              <p>
                Candidates applying for GD(P) should be aware that the pilot
                selection pathway contains additional aviation-related
                assessment requirements that do not necessarily apply to
                other PAF commissioned branches.
              </p>

              <div className="info-grid">

                <div>
                  ✓ GD(P) Candidates
                </div>

                <div>
                  ✓ Flying Aptitude Assessment
                </div>

                <div>
                  ✓ Additional Pilot Screening
                </div>

                <div>
                  ✓ Course-Specific Requirement
                </div>

              </div>

              <p>
                Candidates should carefully follow the instructions provided
                by PAF regarding the timing, venue and eligibility for the
                Flying Aptitude Test.
              </p>

              <div className="warning-box">

                <strong>Important:</strong>{" "}
                The Flying Aptitude Test should not be treated as a
                compulsory stage for every PAF commissioned officer branch.
                It is specifically associated with the GD(P) selection
                pathway.

              </div>

            </section>


            {/* =================================================
                FINAL SELECTION
            ================================================= */}

            <section
              id="final-selection"
              className="article-card content-section"
            >

              <h2>Final Medical & Selection</h2>

              <p>
                After the relevant initial and subsequent selection stages,
                shortlisted candidates proceed through the remaining
                selection requirements applicable to their course.
              </p>

              <p>
                For Permanent Commission candidates, the later selection
                process includes the relevant ISSB assessment, final medical
                examination and, where applicable, additional
                course-specific assessments such as the Flying Aptitude
                Test for GD(P) candidates.
              </p>

              <div className="info-grid">

                <div>
                  ✓ ISSB Shortlisting
                </div>

                <div>
                  ✓ Final Medical
                </div>

                <div>
                  ✓ Course-Specific Assessment
                </div>

                <div>
                  ✓ Final Merit
                </div>

              </div>

              <h3>Final Merit</h3>

              <p>
                Clearing an individual test does not by itself guarantee
                final selection. Candidates must successfully complete the
                applicable stages and remain competitive in the final merit
                and selection process.
              </p>

              <div className="warning-box">

                <strong>Remember:</strong>{" "}
                Passing an initial test means that you have progressed to
                another stage of selection. Final joining depends on
                successful completion of all applicable assessments and the
                final selection process.

              </div>

            </section>


            {/* =================================================
                PREPARATION STRATEGY
            ================================================= */}

            <section
              id="preparation"
              className="article-card content-section"
            >

              <h2>PAF Initial Test Preparation Strategy</h2>

              <p>
                Successful PAF preparation requires a combination of
                intelligence-test practice, academic revision, physical
                training and interview preparation. Candidates should not
                focus exclusively on one component.
              </p>

              <h3>1. Practice Intelligence Tests</h3>

              <p>
                Intelligence questions are strongly time-dependent.
                Candidates should practice verbal and non-verbal reasoning
                regularly and gradually reduce the time required to solve
                familiar question patterns.
              </p>

              <h3>2. Strengthen Academic Concepts</h3>

              <p>
                Revise the subjects applicable to your educational
                background and selected PAF entry. Focus on concepts first,
                then move toward timed objective-question practice.
              </p>

              <h3>3. Improve Physical Fitness</h3>

              <p>
                Start running and strength training well before the physical
                assessment. Do not wait until the registration period has
                ended to begin physical preparation.
              </p>

              <h3>4. Prepare for the Interview</h3>

              <p>
                Learn about the PAF, your selected branch, your educational
                background and current affairs. Practice speaking clearly
                without memorizing artificial answers.
              </p>

              <h3>5. Practice Under Time Pressure</h3>

              <ul>

                <li>
                  Take timed intelligence tests regularly.
                </li>

                <li>
                  Practice academic MCQs under realistic time limits.
                </li>

                <li>
                  Review incorrect answers after every practice session.
                </li>

                <li>
                  Track your accuracy as well as your speed.
                </li>

                <li>
                  Practice difficult question types repeatedly until their
                  patterns become familiar.
                </li>

              </ul>

              <div className="cta-box">

                <h3>Start Your PAF Preparation</h3>

                <p>
                  Practice intelligence and academic MCQs on EXAMITICS to
                  improve your speed, accuracy and confidence before the PAF
                  computerized initial test.
                </p>

                <a
                  href="/mock"
                  className="cta-button"
                >
                  Start Mock Tests →
                </a>

              </div>

            </section>

                        {/* =================================================
                FREQUENTLY ASKED QUESTIONS
            ================================================= */}

            <section
              id="faq"
              className="article-card content-section"
            >

              <h2>Frequently Asked Questions</h2>

              <div className="faq-item">

                <h3>
                  What is the PAF Initial Test?
                </h3>

                <p>
                  The PAF Initial Test is the initial computerized screening
                  stage for eligible candidates applying for applicable
                  Pakistan Air Force entries. Depending on the entry, it
                  includes intelligence and academic assessment followed
                  by the applicable physical, medical and interview stages.
                </p>

              </div>

              <div className="faq-item">

                <h3>
                  What subjects are included in the PAF Initial Test?
                </h3>

                <p>
                  The academic subjects depend on the candidate's educational
                  background and selected PAF entry. For relevant Permanent
                  Commission entries, candidates may be assessed in English
                  and Physics, while candidates from Pre-Engineering, ICS or
                  applicable technical backgrounds may also require
                  Mathematics.
                </p>

              </div>

              <div className="faq-item">

                <h3>
                  Does every PAF candidate take the same academic test?
                </h3>

                <p>
                  No. The academic assessment can vary according to the
                  candidate's qualification and selected course. Candidates
                  should always follow the requirements stated in the
                  recruitment advertisement for their particular intake.
                </p>

              </div>

              <div className="faq-item">

                <h3>
                  What types of intelligence questions should I prepare?
                </h3>

                <p>
                  Candidates should prepare both verbal and non-verbal
                  reasoning. Useful areas include analogies, classification,
                  series, coding and decoding, logical relationships,
                  pattern recognition and figure-based reasoning.
                </p>

              </div>

              <div className="faq-item">

                <h3>
                  What is the PAF physical test?
                </h3>

                <p>
                  The physical assessment consists of fitness activities
                  prescribed for the relevant PAF entry. The current
                  Permanent Commission standards include a 1 mile run,
                  push-ups, sit-ups and chin-ups.
                </p>

              </div>

              <div className="faq-item">

                <h3>
                  What is the current Permanent Commission running
                  requirement?
                </h3>

                <p>
                  The current Permanent Commission requirement is a
                  1 mile run completed within 8 minutes. Candidates should
                  verify the latest recruitment advertisement because
                  requirements can change between recruitment cycles.
                </p>

              </div>

              <div className="faq-item">

                <h3>
                  Is ISSB part of the PAF Initial Test?
                </h3>

                <p>
                  ISSB is a later selection stage rather than a component of
                  the computerized PAF Initial Test. Candidates who are
                  shortlisted after the applicable initial selection stages
                  may proceed to ISSB.
                </p>

              </div>

              <div className="faq-item">

                <h3>
                  Is the Flying Aptitude Test required for every PAF
                  candidate?
                </h3>

                <p>
                  No. The Flying Aptitude Test is associated with the
                  General Duty Pilot (GD(P)) selection pathway and should not
                  be treated as a universal requirement for every PAF
                  commissioned branch.
                </p>

              </div>

              <div className="faq-item">

                <h3>
                  Can I prepare for the PAF Initial Test online?
                </h3>

                <p>
                  Yes. Candidates can use timed intelligence and academic
                  MCQ practice to improve their speed, accuracy and
                  familiarity with objective-type questions. However, online
                  practice should be combined with syllabus revision and
                  physical preparation.
                </p>

              </div>

              <div className="faq-item">

                <h3>
                  Does passing the PAF Initial Test guarantee final
                  selection?
                </h3>

                <p>
                  No. Passing the initial test only allows a candidate to
                  progress to subsequent selection stages. Final selection
                  depends on successfully completing all applicable
                  assessments and the final merit process.
                </p>

              </div>

            </section>


            {/* =================================================
                IMPORTANT 2026 UPDATE
            ================================================= */}

            <section
              className="article-card content-section"
            >

              <h2>Important 2026 Update</h2>

              <p>
                PAF recruitment is conducted through individual recruitment
                advertisements, and the courses, eligibility requirements,
                physical standards and selection arrangements can change
                between intakes.
              </p>

              <p>
                This guide is intended to explain the overall PAF
                commissioned-officer initial selection process. It should
                not replace the official recruitment advertisement for the
                intake in which you are applying.
              </p>

              <div className="warning-box">

                <strong>Always verify before applying:</strong>

                <ul>

                  <li>
                    Course and branch availability
                  </li>

                  <li>
                    Age and educational requirements
                  </li>

                  <li>
                    Physical standards
                  </li>

                  <li>
                    Medical requirements
                  </li>

                  <li>
                    Registration dates
                  </li>

                  <li>
                    Test and reporting instructions
                  </li>

                </ul>

              </div>

              <p>
                For the latest recruitment information, candidates should
                consult the official Pakistan Air Force recruitment portal.
              </p>

              <p>

                <a
                  href="https://joinpaf.gov.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-primary)" }}
                >
                  <strong>
                    Visit Official PAF Recruitment Portal →
                  </strong>
                </a>

              </p>

            </section>


            {/* =================================================
                RELATED PREPARATION
            ================================================= */}

            <section
              className="article-card content-section"
            >

              <h2>Prepare With EXAMITICS</h2>

              <p>
                Understanding the selection procedure is only the first
                step. Regular practice is essential for improving
                performance in the computerized intelligence and academic
                assessments.
              </p>

              <div className="info-grid">

                <div>
                  ✓ Verbal Intelligence Practice
                </div>

                <div>
                  ✓ Non-Verbal Intelligence Practice
                </div>

                <div>
                  ✓ Academic MCQs
                </div>

                <div>
                  ✓ Timed Mock Tests
                </div>

              </div>

              <div className="cta-box">

                <h3>
                  Start Your PAF Preparation Today
                </h3>

                <p>
                  Practice exam-style questions, improve your response speed
                  and identify weak areas before appearing in the PAF
                  computerized initial test.
                </p>

                <a
                  href="/mock"
                  className="cta-button"
                >
                  Explore Mock Tests →
                </a>

              </div>

            </section>


            {/* =================================================
                FINAL CTA
            ================================================= */}

            <section className="pma-final-cta">

              <div className="pma-final-cta-content">

                <h2>
                  Ready to Prepare for the PAF Initial Test?
                </h2>

                <p>
                  Build your intelligence, academic and test-taking skills
                  with structured practice designed for competitive
                  examination preparation.
                </p>

                <div className="pma-cta-buttons">

                  <a
                    href="/mock"
                    className="pma-primary-btn"
                  >
                    Start Practice Tests →
                  </a>

                  <a
                    href="/issbguide"
                    className="pma-secondary-btn"
                  >
                    Explore ISSB Guide →
                  </a>

                </div>

              </div>

            </section>

          </div>
        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

      {/* =====================================================
          OPTIONAL AD MODAL
      ===================================================== */}

      {showAdModal && (
        <div className="ad-modal-overlay">

          <div className="ad-modal">

            <button
              className="ad-modal-close"
              onClick={() => setShowAdModal(false)}
              aria-label="Close advertisement"
            >
              ×
            </button>

            <div className="ad-modal-content">

              <p>
                Advertisement
              </p>

            </div>

          </div>

        </div>
      )}

    </>
  );
};

export default PafInitialTestProcedure;