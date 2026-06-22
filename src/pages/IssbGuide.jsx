import { Link } from "react-router-dom";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { Helmet } from "react-helmet-async";

import armyLogo from "../assets/logos/forces-logo/PAK-ARMY-logo.png";
import navyLogo from "../assets/logos/forces-logo/PAK-NAVY-logo.png";
import pafLogo from "../assets/logos/forces-logo/PAK-AIR-FORCE-logo.png";

import watImg from "../assets/images/wat-img.png";
import tatImg from "../assets/images/tat-img.png";
import sctImg from "../assets/images/sct-img.png";
import opiImg from "../assets/images/opi-img.png";
import matImg from "../assets/images/mat-img.png";
import Lecture from "../assets/images/lecture.png";

import HangingBridge from "../assets/images/hanging-bridge.png";
import RopeClimbing from "../assets/images/rope-climbing.png";
import TyreCrossing from "../assets/images/tyre-crossing.png";
import HighJump from "../assets/images/high-jump.png";
import MonkeyBridge from "../assets/images/monkey-bridge.png";
import DitchCrossing from "../assets/images/ditch-crossing.png";

import CommandTask from "../assets/images/command-task.png";
import GroupPlanning from "../assets/images/group-planning.png";
import PGT from "../assets/images/pgt.png";
import HalfGroupRace from "../assets/images/half-group-race.png";
import GroupDiscussion from "../assets/images/group-discussion.png";

import PsychInterview from "../assets/images/psych-interview.png";
import DeputyInterview from "../assets/images/deputy.png";

import JoharHall from "../assets/images/johar-hall.png";

import "../styles/PmaInitialTestProcedure.css";
import "../styles/IssbGuide.css";

const IssbGuide = () => {
  return (
    <>
      <Helmet>
        <title>
          ISSB Complete Guide 2026 | ISSB Preparation Pakistan | EXAMITICS
        </title>

        <meta
          name="description"
          content="Complete ISSB Guide covering ISSB procedure, screening tests, psychological tests, GTO tasks, interview, conference and officer like qualities."
        />

        <meta
          name="keywords"
          content="ISSB Guide, ISSB Procedure, ISSB Preparation Pakistan, ISSB Psychological Tests, ISSB GTO Tasks, ISSB Interview"
        />
      </Helmet>

      <Navbar />

      <main className="pma-blog-page">
        {/* HERO */}
        <section className="pma-hero issb-hero">
          <div className="pma-hero-content">
            <span className="pma-breadcrumb">Home / ISSB / Complete Guide</span>

            <h1>ISSB Complete Guide 2026</h1>

            <p>
              Learn the complete ISSB selection process including screening
              tests, psychological tests, GTO tasks, interview, conference and
              officer like qualities required to become a commissioned officer.
            </p>

            <div className="pma-meta">
              <span>4 Days Assessment</span>
              <span>Army • Navy • Air Force</span>
              <span>Updated 2026</span>
            </div>
          </div>
        </section>

        {/* QUICK OVERVIEW */}

        <section className="overview-section">
          <div className="overview-card">
            <h2>ISSB Process Overview</h2>

            <div className="overview-grid">
              <div>✓ Screening Tests</div>
              <div>✓ Psychological Tests</div>
              <div>✓ GTO Tasks</div>
              <div>✓ Personal Interview</div>
              <div>✓ Conference</div>
            </div>
          </div>
        </section>

        {/* CONTENT */}

        <section className="blog-content">
          {/* TOC */}

          <aside className="table-of-contents">
            <h3>Contents</h3>

            <ul>
              <li>
                <a href="#introduction">Introduction</a>
              </li>

              <li>
                <a href="#day0">Day 0</a>
              </li>

              <li>
                <a href="#day1">Day 1</a>
              </li>

              <li>
                <a href="#day2">Day 2</a>
              </li>

              <li>
                <a href="#day3">Day 3</a>
              </li>

              <li>
                <a href="#day4">Day 4</a>
              </li>
              <li>
                <a href="#olqs">Officer Like Qualities</a>
              </li>

              <li>
                <a href="#issb-preparation-strategy">
                  ISSB Preparation Strategy
                </a>
              </li>

              <li>
                <a href="#issb-myths-faqs">ISSB Myths & FAQs</a>
              </li>
            </ul>
          </aside>

          {/* ARTICLE */}

          <div className="article-content">
            {/* INTRODUCTION */}

            <section id="introduction" className="article-card content-section">
              <h2>What is ISSB?</h2>

              <p>
                The <strong>Inter Services Selection Board (ISSB)</strong> is
                Pakistan's premier military officer selection organization
                responsible for identifying future leaders for the Pakistan
                Army, Pakistan Navy, and Pakistan Air Force.
              </p>

              <p>
                For more than seven decades, ISSB has been conducting
                comprehensive personality, leadership, psychological and group
                assessments to identify candidates who possess the qualities
                required to become commissioned officers in the Armed Forces of
                Pakistan.
              </p>

              <p>
                Unlike traditional examinations that focus only on academic
                performance, ISSB evaluates the complete personality of a
                candidate. The objective is to determine whether an individual
                has the leadership potential, character, intelligence,
                confidence, and officer-like qualities required for military
                training and future command responsibilities.
              </p>

              {/* FORCES */}

              <h3>Services Recruited Through ISSB</h3>

              <div className="forces-grid">
                <div className="force-card">
                  <img
                    src={armyLogo}
                    alt="Pakistan Army Logo"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      padding: "5px",
                    }}
                  />
                  <h4>Pakistan Army</h4>
                </div>

                <div className="force-card">
                  <img
                    src={navyLogo}
                    alt="Pakistan Navy Logo"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      padding: "5px",
                    }}
                  />
                  <h4>Pakistan Navy</h4>
                </div>

                <div className="force-card">
                  <img
                    src={pafLogo}
                    alt="Pakistan Air Force Logo"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      padding: "5px",
                    }}
                  />
                  <h4>Pakistan Air Force</h4>
                </div>
              </div>

              <h3>ISSB Centers in Pakistan</h3>

              <p>
                ISSB operates through four major selection centers across
                Pakistan. Candidates are assigned to one of these centers
                according to their entry and schedule.
              </p>

              <div className="issb-centers-grid">
                <div className="issb-center-card">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="ISSB Kohat"
                  />
                  <h4>Kohat</h4>
                  <p>ISSB Kohat</p>
                </div>

                <div className="issb-center-card">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxtQ6gHojyZoBBAHlV1B70-IHdujFDX1FnQ&s"
                    alt="ISSB Gujranwala"
                  />
                  <h4>Gujranwala</h4>
                  <p>ISSB Gujranwala</p>
                </div>

                <div className="issb-center-card">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZlEkfMM7IkKKcr22yaKkzqm0h0Q75MvBHvmTR7ORFWQ&s"
                    alt="ISSB Malir"
                  />
                  <h4>Malir</h4>
                  <p>Karachi</p>
                </div>

                <div className="issb-center-card">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="ISSB Quetta"
                  />
                  <h4>Quetta</h4>
                  <p>ISSB Quetta</p>
                </div>
              </div>

              <h2>Purpose of ISSB</h2>

              <p>
                The primary purpose of ISSB is to evaluate whether a candidate
                possesses the potential to become an effective military leader.
                Every assessment activity is carefully designed to reveal
                leadership capabilities, decision-making ability, personality
                traits, social adaptability, and officer-like qualities.
              </p>

              <p>
                Candidates who demonstrate the required standards are
                recommended for officer training at their respective military
                academies, while others are advised to improve and reappear
                according to eligibility rules.
              </p>

              <div className="info-grid">
                <div>✓ Leadership Potential</div>
                <div>✓ Personality Assessment</div>
                <div>✓ Officer Like Qualities</div>
                <div>✓ Military Leadership Evaluation</div>
              </div>

              <h2>Three-Dimensional Assessment System</h2>

              <p>
                ISSB follows a unique Three-Dimensional Assessment System. Every
                candidate is evaluated independently from three different
                perspectives. This allows selectors to create a complete
                personality profile rather than relying on a single test or
                interview.
              </p>

              <div className="assessment-grid">
                <div className="assessment-card">
                  <h3>1. Psychologist Dimension</h3>

                  <p>
                    The psychologist evaluates the candidate's subconscious
                    personality, emotional stability, confidence, motivation,
                    social adjustment and natural leadership tendencies through
                    specialized psychological tests.
                  </p>

                  <ul>
                    <li>Personality Traits</li>
                    <li>Emotional Stability</li>
                    <li>Motivation</li>
                    <li>Confidence</li>
                    <li>Social Adjustment</li>
                    <li>Leadership Tendencies</li>
                  </ul>
                </div>

                <div className="assessment-card">
                  <h3>2. GTO Dimension</h3>

                  <p>
                    The Group Testing Officer observes candidates in
                    discussions, planning exercises, command tasks and obstacle
                    activities.
                  </p>

                  <ul>
                    <li>Leadership Ability</li>
                    <li>Communication Skills</li>
                    <li>Teamwork</li>
                    <li>Decision Making</li>
                    <li>Initiative</li>
                    <li>Problem Solving</li>
                  </ul>
                </div>

                <div className="assessment-card">
                  <h3>3. Deputy President Dimension</h3>

                  <p>
                    The Deputy President conducts a detailed personal interview
                    to evaluate intellectual capability, social behavior,
                    ambitions, awareness and officer-like qualities.
                  </p>

                  <ul>
                    <li>General Awareness</li>
                    <li>Background Verification</li>
                    <li>Intellectual Capability</li>
                    <li>Personal Motivation</li>
                    <li>Future Goals</li>
                    <li>Officer Potential</li>
                  </ul>
                </div>
              </div>

              <h2>ISSB Four-Day Selection Process</h2>

              <p>
                The ISSB selection process normally spans four days. During this
                period, candidates participate in psychological assessments,
                group tasks, outdoor activities, command exercises and
                interviews.
              </p>

              <div className="issb-glance">
                <div>
                  <strong>Arrival Day</strong>
                  <span>Screening Tests</span>
                </div>

                <div>
                  <strong>Day 1</strong>
                  <span>Psychological Assessment</span>
                </div>

                <div>
                  <strong>Day 2</strong>
                  <span>GTO Tasks & Deputy President</span>
                </div>

                <div>
                  <strong>Day 3</strong>
                  <span>GTO Tasks & Psych Interviews</span>
                </div>

                <div>
                  <strong>Day 4</strong>
                  <span>
                    Departure Day and Re-Activities of some Candidates
                  </span>
                </div>
              </div>

              <h2>Final Recommendation Process</h2>

              <p>
                At the conclusion of the assessment process, observations from
                the Psychologist, Group Testing Officer and Deputy President are
                combined.
              </p>

              <p>
                Based on the collective evaluation, candidates are declared
                either <strong>Recommended</strong> or
                <strong> Not Recommended</strong>. Recommended candidates
                proceed to the next stages of selection and final merit
                determination by their respective service headquarters.
              </p>

              <div className="requirement-box">
                <span>Final Decision</span>

                <strong>
                  Psychologist + GTO + Deputy President → Recommendation
                </strong>
              </div>

              <h2>Qualities ISSB Looks For</h2>

              <p>
                Although ISSB does not publish an official checklist, assessment
                activities are specifically designed to identify candidates who
                demonstrate strong officer-like qualities.
              </p>

              <div className="traits-grid">
                <div className="trait-card">
                  <h4>Leadership Qualities</h4>

                  <ul>
                    <li>Leadership Potential</li>
                    <li>Initiative</li>
                    <li>Responsibility</li>
                    <li>Courage</li>
                    <li>Confidence</li>
                  </ul>
                </div>

                <div className="trait-card">
                  <h4>Personal Qualities</h4>

                  <ul>
                    <li>Integrity</li>
                    <li>Honesty</li>
                    <li>Emotional Stability</li>
                    <li>Adaptability</li>
                    <li>Patriotism</li>
                  </ul>
                </div>

                <div className="trait-card">
                  <h4>Social Qualities</h4>

                  <ul>
                    <li>Team Spirit</li>
                    <li>Communication Skills</li>
                    <li>Cooperation</li>
                    <li>Social Adjustment</li>
                    <li>Respect for Others</li>
                  </ul>
                </div>

                <div className="trait-card">
                  <h4>Mental Qualities</h4>

                  <ul>
                    <li>Intelligence</li>
                    <li>Decision Making</li>
                    <li>Problem Solving</li>
                    <li>Reasoning Ability</li>
                    <li>Situational Awareness</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* issb day-0 / joining day  */}
            <section id="day0" className="article-card content-section">
              <h2>Day 0 – Reporting, Registration & Orientation</h2>

              <p>
                Day 0 is the arrival and orientation day at ISSB. Although no
                major psychological or GTO assessments are conducted on this
                day, it plays an important role in preparing candidates for the
                four-day selection process ahead.
              </p>

              <p>
                Upon arrival at the assigned ISSB center, candidates complete
                document verification, registration formalities, bio-data
                documentation, accommodation allocation and orientation
                briefings. The purpose is to ensure that all administrative
                requirements are completed before formal assessments begin.
              </p>

              <div className="warning-box">
                Day 0 is often underestimated by candidates. However,
                psychologists, staff members and assessors may observe
                candidates throughout their stay. Professional behavior,
                discipline and cooperation should be maintained from the moment
                of arrival.
              </div>

              <div className="physical-image">
                <img src={JoharHall} alt="Johar Hall ISSB Pakistan" />
              </div>

              <h3>Arrival at the ISSB Center</h3>

              <p>
                After reporting at the designated assembly point, candidates are
                transported to the ISSB center where the registration process
                begins.
              </p>

              <p>
                Initial procedures typically include security checks, luggage
                inspection and verification of reporting documents. Candidates
                are also briefed regarding center regulations, accommodation
                facilities and assessment schedules.
              </p>

              <div className="info-grid">
                <div>✓ Security Screening</div>
                <div>✓ Luggage Inspection</div>
                <div>✓ Reporting Verification</div>
                <div>✓ Center Registration</div>
              </div>

              <h3>Accommodation & Hostel Allocation</h3>

              <p>
                Candidates are assigned accommodation in barracks or hostels
                within the ISSB center. Each candidate receives a room
                allocation and is provided time to settle before registration
                activities continue.
              </p>

              <p>
                During the stay, candidates are expected to maintain
                cleanliness, discipline and punctuality. Living in a shared
                environment also allows assessors to observe social adjustment
                and cooperative behavior.
              </p>

              <h3>ISSB Rules & Orientation Briefing</h3>

              <p>
                Before formal assessments begin, staff members conduct a
                detailed orientation session explaining the daily routine,
                center regulations and candidate responsibilities.
              </p>

              <ul>
                <li>Mess timings and attendance procedures.</li>
                <li>Dress code requirements.</li>
                <li>Mosque and dining hall etiquette.</li>
                <li>Restricted and permitted areas.</li>
                <li>Reporting and movement procedures.</li>
                <li>General discipline expectations.</li>
              </ul>

              <p>
                Candidates often hear that instructions at ISSB are very
                difficult to understand. In reality, instructions are usually
                clear and detailed. The key requirement is simply paying
                attention and following directions carefully.
              </p>

              <h3>Johar Hall – The Main Assessment Venue</h3>

              <p>
                Most written assessments, psychological tests and administrative
                activities are conducted in Johar Hall, one of the most
                important facilities within the ISSB center.
              </p>

              <p>
                Johar Hall contains large seating arrangements, computer systems
                and assessment facilities used throughout the ISSB process.
              </p>

              <div className="requirement-box">
                <span>Main Assessment Venue</span>
                <strong>
                  Johar Hall – Registration, Psychological Tests, OPI, Story
                  Writing & Administrative Activities
                </strong>
              </div>

              <h3>Document Verification Process</h3>

              <p>
                Candidates are called individually for educational document
                verification. Original certificates, mark sheets and supporting
                documents are checked and authenticated before being recorded in
                the official ISSB system.
              </p>

              <p>
                After verification, each candidate is assigned a unique chest
                number that serves as their identification throughout the
                selection process.
              </p>

              <div className="info-grid">
                <div>Educational Certificates</div>
                <div>CNIC / B-Form</div>
                <div>Registration Documents</div>
                <div>Chest Number Allocation</div>
              </div>

              <h3>Bio-Data Form Completion</h3>

              <p>
                One of the most important activities on Day 0 is the completion
                of bio-data forms. These forms provide psychologists,
                interviewers and assessors with detailed background information
                about each candidate.
              </p>

              <p>Information collected may include:</p>

              <ul>
                <li>Personal details.</li>
                <li>Educational background.</li>
                <li>Family information.</li>
                <li>Sports participation.</li>
                <li>Hobbies and interests.</li>
                <li>Achievements.</li>
                <li>Social activities.</li>
                <li>Future goals and ambitions.</li>
              </ul>

              <div className="warning-box">
                <strong>Important:</strong> Your ISSB Biodata Form is one of the
                most important documents during the entire selection process.
                Psychologists, GTOs and the Deputy President use this
                information throughout the assessment process. Any incorrect,
                exaggerated or contradictory information may create
                inconsistencies during psychological testing, interviews and
                group assessments.
              </div>

              <h3>Why Biodata Forms Matter</h3>

              <p>
                Many candidates underestimate the importance of the ISSB Biodata
                Form. However, selectors use it as the foundation of your
                overall personality assessment. Information regarding your
                education, family background, hobbies, achievements,
                responsibilities, sports participation and life experiences
                helps assessors understand your personality profile.
              </p>

              <p>
                Candidates are strongly advised to provide accurate and honest
                information. ISSB does not expect a perfect candidate; instead,
                selectors look for consistency, authenticity and self-awareness.
              </p>

              <h3>Online Information Verification</h3>

              <p>
                Candidates may also be asked to review or update information
                previously submitted through online registration portals. Any
                discrepancies should be corrected immediately during this stage.
              </p>

              <h3>Initial Writing Activities</h3>

              <p>
                Depending on the schedule of the center, candidates may also
                complete short written exercises under psychologist supervision.
              </p>

              <p>
                These activities are designed to familiarize candidates with the
                assessment environment and provide assessors with additional
                insights into communication ability and thought processes.
              </p>

              <div className="essay-card">
                <h4>Examples of Possible Writing Activities</h4>

                <ul>
                  <li>Short essay writing.</li>
                  <li>Personal experience descriptions.</li>
                  <li>Recent memorable event.</li>
                  <li>Future aspirations.</li>
                  <li>Opinion-based topics.</li>
                </ul>
              </div>

              <h3>What Assessors Observe on Day 0</h3>

              <p>
                Although formal testing has not yet started, candidates should
                understand that behavior during registration and orientation
                contributes to overall impressions.
              </p>

              <div className="traits-grid">
                <div className="trait-card">
                  <h4>Discipline</h4>
                  <p>
                    Following instructions accurately and maintaining
                    punctuality.
                  </p>
                </div>

                <div className="trait-card">
                  <h4>Cooperation</h4>
                  <p>Working respectfully with fellow candidates and staff.</p>
                </div>

                <div className="trait-card">
                  <h4>Social Adjustment</h4>
                  <p>
                    Ability to adapt to a new environment and group setting.
                  </p>
                </div>

                <div className="trait-card">
                  <h4>Professional Conduct</h4>
                  <p>Maintaining officer-like behavior throughout the day.</p>
                </div>
              </div>

              <h3>Day 0 Preparation Tips</h3>

              <ul>
                <li>Arrive with all required documents organized.</li>

                <li>
                  Listen carefully to every instruction provided by staff.
                </li>

                <li>Complete forms neatly and honestly.</li>

                <li>Remain calm if schedules change during the day.</li>

                <li>Be respectful towards staff and fellow candidates.</li>

                <li>
                  Prepare uniforms and clothing for the next day's psychological
                  assessments.
                </li>

                <li>
                  Get sufficient rest because Day 1 begins early and contains
                  important psychological testing.
                </li>
              </ul>

              <div className="cta-box">
                <h3>Prepare for ISSB Psychological Tests Before Day 1</h3>

                <p>
                  Practice WAT, SCT, OPI, Picture Stories, Pointer Stories and
                  Mechanical Aptitude Tests using EXAMITICS mock tests designed
                  according to the real ISSB assessment environment.
                </p>

                <div className="cta-buttons">
                  <Link to="/issb-1" className="cta-button">
                    Practice Psych Tests
                  </Link>
                </div>
              </div>
            </section>

            {/* day - 1 / psych day  */}
            <section id="day1" className="article-card content-section">
              <h2>Day 1 – Psychological Assessment</h2>

              <p className="section-intro">
                Day 1 of ISSB consists of psychological tests including MAT,
                OPI, SCT, WAT, TAT, Pointer Stories and SRT. These assessments
                help psychologists evaluate personality, leadership potential,
                emotional stability, confidence and officer-like qualities.
              </p>

              <p>
                The first formal assessment day at ISSB is known as the
                Psychological Testing Day. This is one of the most important
                stages of the entire selection process because it helps
                psychologists evaluate a candidate's natural personality,
                thinking patterns, emotional stability, leadership potential and
                officer-like qualities.
              </p>

              <p>
                Unlike academic examinations, psychological tests are not
                designed to measure memorized knowledge. Instead, they are
                intended to reveal how a candidate thinks, reacts, communicates
                and solves problems under time pressure.
              </p>

              <div className="warning-box">
                There are no officially published "correct answers" for
                psychological tests. Assessors are primarily interested in
                consistency, honesty, confidence and natural personality traits.
              </div>

              <div className="physical-image">
                <img src={JoharHall} alt="Psychological Assessment at ISSB" />
              </div>

              <h3>Objectives of Day 1 Assessment</h3>

              <div className="traits-grid">
                <div className="trait-card">
                  <h4>Personality Analysis</h4>
                  <p>Understanding natural behavior patterns and attitudes.</p>
                </div>

                <div className="trait-card">
                  <h4>Leadership Potential</h4>
                  <p>Evaluating officer-like qualities and initiative.</p>
                </div>

                <div className="trait-card">
                  <h4>Emotional Stability</h4>
                  <p>Assessing maturity and stress handling capability.</p>
                </div>

                <div className="trait-card">
                  <h4>Decision Making</h4>
                  <p>Measuring judgment and problem-solving approach.</p>
                </div>
              </div>

              <h3>Sequence of Psychological Tests</h3>

              <p>
                Although schedules may vary slightly between ISSB centers,
                candidates generally attempt the following assessments during
                Day 1:
              </p>

              <div className="info-grid">
                <div>Mechanical Aptitude Test (MAT)</div>
                <div>Officer Personality Inventory (OPI)</div>
                <div>Sentence Completion Test (SCT)</div>
                <div>Word Association Test (WAT)</div>
                <div>Picture Story Writing (TAT)</div>
                <div>Pointer Stories</div>
                <div>Situation Reaction Test (SRT)</div>
              </div>

              <h3>Psychological Assessment Philosophy</h3>

              <p>
                ISSB psychological testing is designed to identify natural
                personality traits rather than memorized responses. The
                objective is to understand how a candidate thinks, reacts,
                communicates and adapts in different situations.
              </p>

              <p>
                The psychologist evaluates a candidate's emotional stability,
                confidence, motivation, social adjustment, leadership
                tendencies, responsibility and overall suitability for officer
                training.
              </p>

              <h3>Mechanical Aptitude Test (MAT)</h3>

              <p>
                The Mechanical Aptitude Test is designed to evaluate a
                candidate's understanding of basic mechanical principles,
                logical reasoning and practical problem-solving ability.
              </p>

              <div className="physical-image">
                <img src={matImg} alt="Mechanical Aptitude Test" />
              </div>

              <h4>Common Areas Covered</h4>

              <ul>
                <li>Gears and gear rotation.</li>
                <li>Pulleys and mechanical advantage.</li>
                <li>Force and motion.</li>
                <li>Direction of movement.</li>
                <li>Basic engineering concepts.</li>
                <li>Mechanical reasoning questions.</li>
              </ul>

              <div className="requirement-box">
                <span>Purpose of MAT</span>
                <strong>
                  Assesss mechanical comprehension, logical reasoning and
                  practical problem-solving ability.
                </strong>
              </div>

              <div className="cta-box">
                <h3>Practice ISSB Mechanical Aptitude Test</h3>

                <p>
                  Improve speed and accuracy through realistic MAT mock tests
                  developed according to the ISSB environment.
                </p>

                <Link to="/issb-1" className="cta-button">
                  Practice MAT
                </Link>
              </div>

              <h3>Officer Personality Inventory (OPI)</h3>

              <p>
                OPI is a computerized personality assessment designed to
                evaluate behavior, attitudes, confidence levels and leadership
                tendencies.
              </p>

              <p>
                Candidates respond to a large number of statements by selecting
                options that best describe their natural behavior.
              </p>

              <div className="physical-image">
                <img src={opiImg} alt="Sentence Completion Test" />
              </div>

              <div className="essay-card">
                <h4>Examples of OPI Statements</h4>

                <ul>
                  <li>I enjoy leading a group.</li>
                  <li>I remain calm during difficult situations.</li>
                  <li>I prefer teamwork over working alone.</li>
                  <li>I accept responsibility for my mistakes.</li>
                </ul>
              </div>

              <div className="requirement-box">
                <span>Purpose of OPI</span>
                <strong>
                  Measures personality traits, social behavior patterns,
                  emotional tendencies and personal preferences.
                </strong>
              </div>

              <div className="warning-box">
                Attempting to create a fake personality profile usually leads to
                contradictions across multiple assessments. Honesty and
                consistency are essential.
              </div>

              <div className="cta-box">
                <h3>Prepare for ISSB OPI Test</h3>

                <p>
                  Practice officer personality assessments and understand how
                  ISSB evaluates leadership and behavioral traits.
                </p>

                <Link to="/opi" className="cta-button">
                  Practice OPI
                </Link>
              </div>

              <h3>Sentence Completion Test (SCT)</h3>

              <p>
                The Sentence Completion Test measures subconscious attitudes,
                aspirations, fears, motivations and social outlook by requiring
                candidates to complete unfinished sentences within a limited
                time.
              </p>

              <div className="physical-image">
                <img src={sctImg} alt="Sentence Completion Test" />
              </div>

              <h4>Example Sentences</h4>

              <div className="essay-grid">
                <div className="essay-card">
                  <h4>Prompt</h4>
                  <p>My greatest strength is...</p>
                </div>

                <div className="essay-card">
                  <h4>Sample Completion</h4>
                  <p>
                    My greatest strength is persistence during difficult
                    situations.
                  </p>
                </div>
              </div>

              <h4>What Psychologists Observe</h4>

              <ul>
                <li>Confidence.</li>
                <li>Responsibility.</li>
                <li>Optimism.</li>
                <li>Future orientation.</li>
                <li>Leadership tendencies.</li>
                <li>Social adjustment.</li>
              </ul>

              <div className="requirement-box">
                <span>Purpose of SCT</span>
                <strong>
                  Reveals natural thinking patterns and subconscious attitudes
                  through spontaneous sentence completions.
                </strong>
              </div>

              <div className="cta-box">
                <h3>Practice ISSB Sentence Completion Test</h3>

                <p>
                  Improve speed, confidence and officer-like responses through
                  realistic SCT practice.
                </p>

                <Link to="/issb-1" className="cta-button">
                  Practice SCT
                </Link>
              </div>

              <h3>Word Association Test (WAT)</h3>

              <p>
                During WAT, candidates are shown individual words for a few
                seconds and must immediately write the first meaningful thought
                that comes to mind.
              </p>

              <div className="physical-image">
                <img src={watImg} alt="Word Association Test" />
              </div>

              <h4>Sample Words & Responses</h4>

              <div className="essay-grid">
                <div className="essay-card">
                  <h4>Word</h4>
                  <p>Leader</p>
                </div>

                <div className="essay-card">
                  <h4>Response</h4>
                  <p>A leader guides the team through example.</p>
                </div>
              </div>

              <div className="requirement-box">
                <span>Purpose of WAT</span>
                <strong>
                  Helps psychologists understand how candidates associate ideas,
                  emotions and reactions with different situations.
                </strong>
              </div>

              <div className="cta-box">
                <h3>Practice 100+ ISSB WAT Words</h3>

                <p>
                  Build speed and positive officer-like thinking with realistic
                  WAT practice sessions.
                </p>

                <Link to="/issb-1" className="cta-button">
                  Practice WAT
                </Link>
              </div>

              <h3>Picture Story Writing Test (TAT)</h3>

              <p>
                Candidates are shown a picture and asked to write a story
                explaining what happened before the scene, what is happening now
                and what is likely to happen next.
              </p>

              <div className="physical-image">
                <img src={tatImg} alt="Picture Story Writing Test" />
              </div>

              <h4>What Makes a Good Story?</h4>

              <ul>
                <li>Positive and realistic theme.</li>
                <li>Clear objective.</li>
                <li>Problem-solving approach.</li>
                <li>Leadership and initiative.</li>
                <li>Logical conclusion.</li>
              </ul>

              <h3>Pointer Stories</h3>

              <p>
                Unlike picture stories, candidates receive only a sentence
                starter and must create a complete story based on the given
                situation.
              </p>

              <div className="essay-card">
                <h4>Example Pointer</h4>

                <p>"All his dreams shattered when he entered the room..."</p>
              </div>

              <div className="warning-box">
                <strong>Common Misconception:</strong> ISSB is not looking for
                "perfect" stories. Selectors are interested in realistic
                thinking, problem-solving ability, optimism, responsibility and
                leadership tendencies reflected in your stories.
              </div>

              <div className="cta-box">
                <h3>Practice Picture Stories & Pointer Stories</h3>

                <p>
                  Learn how to create officer-like stories under actual ISSB
                  time limits.
                </p>

                <Link to="/issb-1" className="cta-button">
                  Practice Stories
                </Link>
              </div>

              <h3>Situation Reaction Test (SRT)</h3>

              <p>
                The Situation Reaction Test presents practical situations that
                require quick decision making. Candidates write how they would
                respond if they were placed in the situation.
              </p>

              <h4>Example Situation</h4>

              <div className="essay-card">
                <p>
                  Your friend is involved in drug abuse and asks for your help.
                </p>
              </div>

              <h4>Sample Response</h4>

              <div className="essay-card">
                <p>
                  I would discourage the behavior, guide him toward professional
                  help and inform responsible authorities if necessary.
                </p>
              </div>

              <div className="requirement-box">
                <span>Purpose of SRT</span>
                <strong>
                  Evaluates practical decision-making, responsibility,
                  initiative and reaction under everyday challenges.
                </strong>
              </div>

              <h3>How to Prepare for Day 1</h3>

              <ul>
                <li>Sleep properly before the assessment.</li>

                <li>Practice writing quickly and clearly.</li>

                <li>Develop positive and realistic thinking.</li>

                <li>Avoid memorized responses.</li>

                <li>Stay calm during timed activities.</li>

                <li>Follow every instruction carefully.</li>
              </ul>

              <div className="warning-box">
                The goal of psychological testing is not perfection. The
                objective is to identify genuine officer-like qualities,
                consistency of personality and leadership potential.
              </div>
            </section>

            {/* day 2 / gto and deputy president  */}
            <section id="day2" className="article-card content-section">
              <h2>Day 2 – GTO Indoor Tasks & Deputy President Assessment</h2>

              <p>
                Day 2 of ISSB focuses on group interaction, leadership
                assessment, communication skills and practical decision-making
                abilities. During this stage, candidates are evaluated by the
                Group Testing Officer (GTO) through indoor and outdoor
                activities while the Deputy President begins assessing
                communication, confidence and officer-like qualities through
                group discussions and personal interviews.
              </p>

              <p>
                Unlike psychological testing, which focuses on the candidate's
                inner personality, Day 2 allows assessors to observe how
                candidates behave in real-life group situations, solve problems,
                influence others and work under pressure.
              </p>

              <div className="warning-box">
                Day 2 is not about speaking the most or dominating the group.
                Assessors look for leadership, teamwork, cooperation, confidence
                and the ability to contribute positively to the group.
              </div>

              <div className="physical-image">
                <img src={GroupPlanning} alt="ISSB GTO Indoor Tasks" />
              </div>

              <h3>Objectives of Day 2 Assessment</h3>

              <div className="traits-grid">
                <div className="trait-card">
                  <h4>Leadership</h4>
                  <p>Ability to guide and influence a group positively.</p>
                </div>

                <div className="trait-card">
                  <h4>Communication</h4>
                  <p>Clarity of speech and confidence in expression.</p>
                </div>

                <div className="trait-card">
                  <h4>Teamwork</h4>
                  <p>Working effectively with other candidates.</p>
                </div>

                <div className="trait-card">
                  <h4>Decision Making</h4>
                  <p>Solving problems logically under time pressure.</p>
                </div>
              </div>

              <h3>Introduction to the GTO Dimension</h3>

              <p>
                On Day 2, candidates are assigned to smaller GTO groups. These
                groups remain together throughout the remaining GTO activities
                and allow assessors to observe each candidate closely.
              </p>

              <p>
                Candidates are taken to dedicated GTO assessment rooms equipped
                with presentation facilities, discussion areas, planning boards
                and observation systems.
              </p>

              <h3>General Introduction & Current Affairs Discussion</h3>

              <p>
                The session often begins with introductions where candidates
                briefly discuss their name, educational background, hobbies and
                ambitions.
              </p>

              <p>
                Candidates may also be asked about current affairs, recent news
                or important national and international developments.
              </p>

              <div className="essay-card">
                <h4>Preparation Tip</h4>

                <p>
                  Read newspapers regularly before ISSB and stay informed about
                  national issues, international relations, economy, sports and
                  major world events.
                </p>
              </div>

              <h3>What the GTO Evaluates</h3>

              <p>
                The Group Testing Officer (GTO) observes candidates in practical
                and group-oriented situations. The focus is not only on
                leadership but also on cooperation, communication, initiative,
                confidence, planning ability and teamwork.
              </p>

              <h3>Lecturette (Public Speaking Exercise)</h3>

              <p>
                One of the most important indoor GTO assessments is the
                Lecturette. Each candidate receives a topic and is required to
                deliver a short speech in front of the group.
              </p>

              <div className="physical-image">
                <img src={Lecture} alt="ISSB Lecturette Test" />
              </div>

              <h4>Common Lecturette Topics</h4>

              <ul>
                <li>Overpopulation in Pakistan.</li>
                <li>Environmental protection.</li>
                <li>Online jobs versus traditional jobs.</li>
                <li>Women's rights in Islam.</li>
                <li>Role of youth in national development.</li>
                <li>Social media advantages and disadvantages.</li>
              </ul>

              <h4>What GTO Observes During Lecturette</h4>

              <ul>
                <li>Confidence.</li>
                <li>Communication skills.</li>
                <li>Knowledge of the topic.</li>
                <li>Body language.</li>
                <li>Voice clarity.</li>
                <li>Logical thinking.</li>
              </ul>

              <div className="warning-box">
                A simple, well-organized speech is always better than memorized
                content. Focus on clarity, confidence and structure rather than
                difficult vocabulary.
              </div>

              <h3>Military Planning Exercise (MPE)</h3>

              <p>
                Military Planning Exercise is one of the most important
                leadership assessments conducted during ISSB. Candidates are
                presented with a practical situation involving multiple
                problems, limited resources and strict time constraints.
              </p>

              <div className="physical-image">
                <img
                  src={GroupPlanning}
                  alt="Military Planning Exercise ISSB"
                />
              </div>

              <p>
                Candidates must analyze the scenario, identify priorities,
                allocate resources and prepare a workable solution.
              </p>

              <h4>Assessment Areas</h4>

              <div className="info-grid">
                <div>Situation Analysis</div>
                <div>Resource Management</div>
                <div>Time Calculation</div>
                <div>Decision Making</div>
                <div>Logical Thinking</div>
                <div>Leadership</div>
              </div>

              <p>
                After preparing an individual solution, candidates discuss the
                problem as a group and produce a collective plan.
              </p>

              <div className="warning-box">
                <strong>Important:</strong> GTO is not searching for the perfect
                plan. Candidates are assessed on logical thinking,
                prioritization, resource utilization, teamwork and time
                management.
              </div>

              <h3>Progressive Group Task (PGT)</h3>

              <p>
                Following indoor assessments, candidates move to the outdoor
                task area for Progressive Group Tasks.
              </p>

              <div className="physical-image">
                <img src={PGT} alt="ISSB Progressive Group Task" />
              </div>

              <p>
                The group is required to cross a series of obstacles using
                planks, ropes and supporting materials while following specific
                rules defined by the GTO.
              </p>

              <p>
                The difficulty level increases progressively from one obstacle
                to another, which is why the activity is known as Progressive
                Group Task.
              </p>

              <h4>Qualities Being Assessed</h4>

              <ul>
                <li>Teamwork.</li>
                <li>Initiative.</li>
                <li>Leadership.</li>
                <li>Problem solving.</li>
                <li>Cooperation.</li>
                <li>Adaptability.</li>
              </ul>

              <h3>Half Group Task (HGT)</h3>

              <p>
                During HGT, the group is divided into two smaller teams.
                Candidates solve obstacle tasks similar to PGT but with fewer
                participants.
              </p>

              <p>
                This allows the GTO to observe each candidate's individual
                contribution more closely.
              </p>

              <div className="physical-image">
                <img src={HalfGroupRace} alt="ISSB Half Group Task" />
              </div>

              <h3>Deputy President Group Discussion</h3>

              <p>
                Later in the day, candidates appear before the Deputy President
                for group discussions. Unlike GTO activities, these discussions
                focus on communication, awareness, reasoning and confidence.
              </p>

              <div className="physical-image">
                <img
                  src={GroupDiscussion}
                  alt="Deputy President Group Discussion"
                />
              </div>

              <p>
                Normally, one discussion is conducted in English and another in
                Urdu.
              </p>

              <h4>Examples of Discussion Topics</h4>

              <div className="essay-grid">
                <div className="essay-card">
                  <h4>English Discussion</h4>
                  <p>Luck versus Hard Work</p>
                </div>

                <div className="essay-card">
                  <h4>Urdu Discussion</h4>
                  <p>Physical Books versus E-Books</p>
                </div>
              </div>

              <h4>What Deputy President Observes</h4>

              <ul>
                <li>Confidence while speaking.</li>
                <li>Listening skills.</li>
                <li>Logical reasoning.</li>
                <li>Respect for others.</li>
                <li>Communication ability.</li>
                <li>Social maturity.</li>
              </ul>

              <h3>Deputy President Interview</h3>

              <p>
                Many candidates also appear for their Deputy President Interview
                on Day 2.
              </p>

              <div className="physical-image">
                <img
                  src={DeputyInterview}
                  alt="ISSB Deputy President Interview"
                />
              </div>

              <p>
                The interview aims to understand the candidate's personality,
                ambitions, educational background, motivation for joining the
                armed forces and overall suitability for officer training.
              </p>

              <h4>Common Areas Discussed</h4>

              <ul>
                <li>Family background.</li>
                <li>Education.</li>
                <li>Hobbies and interests.</li>
                <li>Current affairs.</li>
                <li>Future goals.</li>
                <li>Motivation for joining the forces.</li>
                <li>General intelligence questions.</li>
              </ul>

              <div className="warning-box">
                The interview is not designed to trap candidates. Assessors
                primarily seek honest, confident and consistent answers that
                align with the information provided during registration and
                psychological testing.
              </div>

              <h3>How to Perform Well on Day 2</h3>

              <ul>
                <li>Listen carefully before speaking.</li>

                <li>Contribute positively without dominating discussions.</li>

                <li>Remain calm during disagreements.</li>

                <li>Encourage teamwork during group tasks.</li>

                <li>Support weaker group members when appropriate.</li>

                <li>Speak confidently during lecturette.</li>

                <li>Present logical and practical solutions during MPE.</li>

                <li>Maintain officer-like behavior throughout the day.</li>
              </ul>
            </section>

            {/* day 3 / gto outdoor tasks or psych interviews  */}
            <section id="day3" className="article-card content-section">
              <h2>Day 3 – Outdoor GTO Tasks & Psychologist Interview</h2>

              <p>
                Day 3 of ISSB focuses on practical leadership, command ability,
                confidence under pressure and physical determination. By this
                stage, psychologists, GTOs and interviewers already have
                substantial information about each candidate's personality and
                behavior.
              </p>

              <p>
                The purpose of Day 3 is to observe how candidates perform when
                placed in leadership roles, obstacle situations and physically
                demanding environments. Assessors pay close attention to
                initiative, teamwork, courage and the ability to remain composed
                while facing challenges.
              </p>

              <div className="warning-box">
                Day 3 is not a competition against other candidates. Assessors
                are more interested in leadership, cooperation and
                decision-making than physical strength alone.
              </div>

              {/* <div className="physical-image">
                <img
                  src="/images/issb/outdoor-tasks.webp"
                  alt="ISSB Outdoor GTO Tasks"
                />
              </div> */}

              <h3>Objectives of Day 3 Assessment</h3>

              <div className="traits-grid">
                <div className="trait-card">
                  <h4>Command Ability</h4>
                  <p>Leading a team and making effective decisions.</p>
                </div>

                <div className="trait-card">
                  <h4>Physical Courage</h4>
                  <p>Confidence while facing physical challenges.</p>
                </div>

                <div className="trait-card">
                  <h4>Initiative</h4>
                  <p>Taking responsibility without waiting for instructions.</p>
                </div>

                <div className="trait-card">
                  <h4>Team Acceptance</h4>
                  <p>Building trust and cooperation within the group.</p>
                </div>
              </div>

              <h3>Leadership Assessment Through Practical Tasks</h3>

              <p>
                During the second GTO day, every candidate receives an
                opportunity to act as a commander. These tasks are specifically
                designed to evaluate leadership behavior in real-time rather
                than theoretical discussions.
              </p>

              <h3>Command Task</h3>

              <p>
                One of the most important activities on Day 3 is the Command
                Task. Every candidate is given an opportunity to act as a
                commander and lead selected group members through an obstacle
                problem.
              </p>

              <div className="physical-image">
                <img src={CommandTask} alt="ISSB Command Task" />
              </div>

              <p>
                The candidate must analyze the obstacle, formulate a plan,
                allocate responsibilities and guide team members toward a
                successful solution.
              </p>

              <h4>What the GTO Evaluates</h4>

              <ul>
                <li>Leadership potential.</li>
                <li>Confidence while giving instructions.</li>
                <li>Decision-making ability.</li>
                <li>Initiative and resourcefulness.</li>
                <li>Communication with team members.</li>
                <li>Problem-solving under pressure.</li>
              </ul>

              <div className="essay-card">
                <h4>Important Tip</h4>

                <p>
                  Successful candidates focus on solving the obstacle rather
                  than trying to impress the GTO. Clear instructions, logical
                  thinking and calm leadership create a stronger impression than
                  aggressive behavior.
                </p>
              </div>

              <h3>Individual Obstacles</h3>

              <p>
                Individual Obstacles are one of the most exciting activities
                conducted during Day 3 of ISSB. The purpose of this task is to
                assess a candidate's courage, determination, confidence,
                physical fitness, willpower and ability to perform under time
                pressure.
              </p>

              <p>
                Candidates are required to negotiate a series of physical
                obstacles within a limited time. The task is designed for
                average physically fit candidates and does not require
                professional athletic abilities.
              </p>

              {/* <div className="physical-image">
  <img
    src="/images/issb/individual-obstacles.webp"
    alt="ISSB Individual Obstacles Course"
    loading="lazy"
  />
</div> */}

              <div className="requirement-box">
                <span>
                  <strong>Total Obstacles:</strong> 9
                </span>

                <span>
                  <strong>Total Time:</strong> 2 Minutes
                </span>

                <span>
                  <strong>Total Marks:</strong> 44
                </span>
              </div>

              <p>
                Each obstacle carries different marks according to its
                difficulty. Candidates may attempt obstacles in sequence and can
                repeat obstacles if time remains. Assessors are not only
                interested in the number of obstacles completed but also observe
                confidence, effort, determination, courage and enthusiasm.
              </p>

              <h4>ISSB Individual Obstacles & Marks Distribution</h4>

              <div className="medical-grid">
                <div className="medical-card">
                  <img
                    src={DitchCrossing}
                    alt="ISSB Ditch Crossing"
                    loading="lazy"
                  />

                  <h4>Ditch Crossing</h4>

                  <p>
                    <strong>Marks:</strong> 2
                  </p>

                  <p>Cross a narrow ditch using momentum and balance.</p>

                  <p>
                    <strong>Common Mistake:</strong> Hesitating before the jump.
                  </p>
                </div>

                <div className="medical-card">
                  <img
                    src={TyreCrossing}
                    alt="ISSB Tyre Crossing"
                    loading="lazy"
                  />

                  <h4>Tyre Crossing</h4>

                  <p>
                    <strong>Marks:</strong> 2
                  </p>

                  <p>Pass through tyres quickly while maintaining balance.</p>

                  <p>
                    <strong>Common Mistake:</strong> Losing rhythm and speed.
                  </p>
                </div>

                <div className="medical-card">
                  <img
                    src={HangingBridge}
                    alt="ISSB Hanging Bridge"
                    loading="lazy"
                  />

                  <h4>Hanging Bridge</h4>

                  <p>
                    <strong>Marks:</strong> 3
                  </p>

                  <p>
                    Cross a suspended bridge using hand and foot coordination.
                  </p>

                  <p>
                    <strong>Common Mistake:</strong> Looking down continuously.
                  </p>
                </div>

                <div className="medical-card">
                  <img src="" alt="ISSB Zig Zag" loading="lazy" />

                  <h4>Zig-Zag Balance</h4>

                  <p>
                    <strong>Marks:</strong> 4
                  </p>

                  <p>
                    Move across elevated beams while maintaining body balance.
                  </p>

                  <p>
                    <strong>Common Mistake:</strong> Rushing and losing balance.
                  </p>
                </div>

                <div className="medical-card">
                  <img src={HighJump} alt="ISSB High Jump" loading="lazy" />

                  <h4>High Jump</h4>

                  <p>
                    <strong>Marks:</strong> 4
                  </p>

                  <p>Jump over a raised obstacle confidently.</p>

                  <p>
                    <strong>Common Mistake:</strong> Slowing down before
                    takeoff.
                  </p>
                </div>

                <div className="medical-card">
                  <img src="" alt="ISSB Boxing Ring" loading="lazy" />

                  <h4>Boxing Ring</h4>

                  <p>
                    <strong>Marks:</strong> 5
                  </p>

                  <p>
                    Enter and cross the obstacle using agility and body control.
                  </p>

                  <p>
                    <strong>Common Mistake:</strong> Poor coordination.
                  </p>
                </div>

                <div className="medical-card">
                  <img src="" alt="ISSB Tarzan Swing" loading="lazy" />

                  <h4>Tarzan Swing</h4>

                  <p>
                    <strong>Marks:</strong> 6
                  </p>

                  <p>Use a rope swing to cross the obstacle confidently.</p>

                  <p>
                    <strong>Common Mistake:</strong> Weak grip or fear of
                    height.
                  </p>
                </div>

                <div className="medical-card">
                  <img
                    src={MonkeyBridge}
                    alt="ISSB Monkey Bridge"
                    loading="lazy"
                  />

                  <h4>Monkey Bridge</h4>

                  <p>
                    <strong>Marks:</strong> 7
                  </p>

                  <p>
                    Cross the rope structure using upper body strength and
                    balance.
                  </p>

                  <p>
                    <strong>Common Mistake:</strong> Losing grip midway.
                  </p>
                </div>

                <div className="medical-card">
                  <img
                    src={RopeClimbing}
                    alt="ISSB Rope Climbing"
                    loading="lazy"
                  />

                  <h4>Rope Climbing</h4>

                  <p>
                    <strong>Marks:</strong> 11
                  </p>

                  <p>
                    Climb a vertical rope using proper technique and endurance.
                  </p>

                  <p>
                    <strong>Common Mistake:</strong> Relying only on arm
                    strength.
                  </p>
                </div>
              </div>

              <h4>How Assessors Evaluate Candidates</h4>

              <div className="info-grid">
                <div>Confidence Under Pressure</div>
                <div>Physical Courage</div>
                <div>Determination</div>
                <div>Willpower</div>
                <div>Energy Level</div>
                <div>Enthusiasm</div>
                <div>Risk Taking Ability</div>
                <div>Mental Toughness</div>
              </div>

              <h4>Preparation Tips for Individual Obstacles</h4>

              <ul>
                <li>
                  Develop basic physical fitness through running, push-ups and
                  pull-ups.
                </li>

                <li>Practice rope climbing whenever possible.</li>

                <li>Improve stamina through regular jogging.</li>

                <li>Build confidence in heights and jumping activities.</li>

                <li>
                  Focus on completing obstacles smoothly rather than rushing.
                </li>

                <li>
                  Stay calm if you fail an obstacle and immediately move to the
                  next one.
                </li>
              </ul>

              <div className="warning-box">
                <strong>Important:</strong> According to official ISSB guidance,
                Individual Obstacles are designed for candidates with average
                physical fitness. Assessors do not expect perfection. Courage,
                effort, determination and willingness to attempt difficult
                challenges are often more important than completing every
                obstacle.
              </div>

              <div className="cta-box">
                <h3>Prepare For ISSB Physical & Psychological Tests</h3>

                <p>
                  Along with physical fitness, success at ISSB requires strong
                  performance in WAT, SCT, TAT, OPI, MAT, GTO planning exercises
                  and interviews. Practice in a realistic environment to improve
                  your confidence before reporting to ISSB.
                </p>
              </div>
              <h3>Group Cooperation During Outdoor Tasks</h3>

              <p>
                Throughout the outdoor activities, candidates continue to work
                closely with their groups. The GTO carefully observes how
                individuals interact, support teammates and contribute to
                collective success.
              </p>

              <p>
                Leadership at ISSB is not measured solely by giving commands. It
                is also demonstrated through cooperation, encouragement and
                constructive participation.
              </p>

              <div className="traits-grid">
                <div className="trait-card">
                  <h4>Cooperation</h4>
                  <p>Helping teammates achieve group objectives.</p>
                </div>

                <div className="trait-card">
                  <h4>Initiative</h4>
                  <p>Offering useful solutions when challenges arise.</p>
                </div>

                <div className="trait-card">
                  <h4>Responsibility</h4>
                  <p>Taking ownership of assigned tasks.</p>
                </div>

                <div className="trait-card">
                  <h4>Adaptability</h4>
                  <p>Adjusting quickly to changing situations.</p>
                </div>
              </div>

              <h3>Mutual Assessment</h3>

              <p>
                At the conclusion of major GTO activities, candidates may be
                asked to provide mutual assessments regarding group members.
                This helps assessors understand how individuals are perceived by
                their peers.
              </p>

              <p>
                Candidates who consistently demonstrate leadership, cooperation
                and positive behavior often gain stronger acceptance within the
                group.
              </p>

              <div className="essay-card">
                <h4>Why Mutual Assessment Matters</h4>

                <p>
                  Mutual assessment allows group members to evaluate one another
                  based on their performance during the previous two days. This
                  provides selectors with additional insight into social
                  acceptance, teamwork, cooperation and group influence.
                </p>

                <p>
                  Candidates who consistently help the group, encourage
                  participation and demonstrate positive leadership often leave
                  stronger impressions on their peers.
                </p>
              </div>

              <h3>Psychologist Interview (If Required)</h3>

              <p>
                Some candidates may be called for an additional interview with
                the Psychologist on Day 3. Not every candidate is interviewed,
                and being called does not automatically indicate either success
                or failure.
              </p>

              <div className="physical-image">
                <img src={PsychInterview} alt="ISSB Psychologist Interview" />
              </div>

              <p>
                The purpose of the interview is usually to clarify observations
                from psychological tests, verify information or explore specific
                aspects of a candidate's personality.
              </p>

              <h4>Areas Commonly Discussed</h4>

              <ul>
                <li>Personal background.</li>
                <li>Family environment.</li>
                <li>Educational achievements.</li>
                <li>Leadership experiences.</li>
                <li>Future ambitions.</li>
                <li>Officer-like qualities.</li>
                <li>General knowledge and awareness.</li>
              </ul>

              <p>
                Psychologists may ask follow-up questions related to responses
                provided in WAT, SCT, TAT, SRT or bio-data forms. Consistency
                and honesty remain extremely important.
              </p>

              <div className="warning-box">
                The Psychologist Interview is not an interrogation. Candidates
                should remain calm, maintain eye contact, answer honestly and
                avoid memorized responses.
              </div>

              <h3>How Assessors View Day 3 Performance</h3>

              <p>
                By the end of Day 3, ISSB assessors have collected information
                from psychological tests, interviews, discussions, planning
                exercises and outdoor activities. This allows them to develop a
                comprehensive picture of the candidate's personality and
                leadership potential.
              </p>

              <div className="requirement-box">
                <span>Key Question</span>
                <strong>
                  Does this candidate consistently demonstrate the qualities
                  required of a future officer in Pakistan's Armed Forces?
                </strong>
              </div>

              <h3>Day 3 Preparation Tips</h3>

              <ul>
                <li>Lead naturally rather than trying to dominate others.</li>

                <li>
                  Give clear and concise instructions during Command Task.
                </li>

                <li>Attempt obstacles confidently without fear of failure.</li>

                <li>Encourage teammates during group activities.</li>

                <li>Stay physically active before ISSB to improve stamina.</li>

                <li>
                  Maintain consistency with your psychological test responses
                  and interview answers.
                </li>

                <li>Remain calm if called for a Psychologist Interview.</li>
              </ul>

              <div className="cta-box">
                <h3>Master ISSB Leadership & Psychological Assessments</h3>

                <p>
                  Practice WAT, SCT, OPI, Picture Stories, Pointer Stories and
                  Officer Personality assessments with EXAMITICS to build
                  confidence before your ISSB appearance.
                </p>

                <div className="cta-buttons">
                  <Link to="/iss-1" className="cta-button">
                    Practice Mock Tests
                  </Link>
                </div>
              </div>
            </section>

            {/* day 4 / departure day  */}
            <section id="day4" className="article-card content-section">
              <h2>Day 4 – Conference, Re-Interviews & Final Recommendation</h2>

              <p>
                The final day of ISSB is commonly known as Conference Day. By
                this stage, candidates have completed psychological assessments,
                GTO tasks, interviews and leadership evaluations conducted over
                the previous three days.
              </p>

              <p>
                Day 4 is primarily reserved for the final review process,
                conference discussions among assessors and any additional
                interviews required before recommendations are finalized.
              </p>

              <div className="warning-box">
                Most assessments have already been completed before Day 4.
                Candidates should remain calm, maintain discipline and continue
                displaying officer-like behavior until departure.
              </div>

              {/* <div className="physical-image">
                <img
                  src="/images/issb/conference-day.webp"
                  alt="ISSB Conference Day"
                />
              </div> */}

              <h3>Activities on the Final Day</h3>

              <p>
                Candidates usually complete administrative procedures, collect
                photographs, settle travelling allowance matters and wait for
                any additional instructions from ISSB staff.
              </p>

              <div className="info-grid">
                <div>TADA Documentation</div>
                <div>Photo Collection</div>
                <div>Administrative Clearance</div>
                <div>Conference Review</div>
                <div>Re-Interviews (If Required)</div>
                <div>Departure Briefing</div>
              </div>

              <h3>Conference Process</h3>

              <p>
                One of the most important activities occurring behind the scenes
                on Day 4 is the ISSB Conference. During this stage, all
                assessors combine their observations and discuss each
                candidate's overall suitability for military officer training.
              </p>

              <div className="physical-image">
                <img
                  src="https://thumbs.dreamstime.com/b/businesspeople-sitting-conference-round-table-meeting-business-people-room-81655747.jpg"
                  alt="ISSB Final Conference Process"
                />
              </div>

              <p>
                The conference generally includes assessments provided by three
                major dimensions:
              </p>

              <div className="traits-grid">
                <div className="trait-card">
                  <h4>Psychologist</h4>
                  <p>
                    Personality traits, motivation, emotional stability,
                    leadership tendencies and psychological suitability.
                  </p>
                </div>

                <div className="trait-card">
                  <h4>GTO</h4>
                  <p>
                    Leadership, teamwork, communication, initiative, confidence
                    and practical performance.
                  </p>
                </div>

                <div className="trait-card">
                  <h4>Deputy President</h4>
                  <p>
                    Interview performance, general awareness, communication
                    skills and officer-like qualities.
                  </p>
                </div>
              </div>

              <p>
                These independent evaluations are compared to determine whether
                the candidate consistently demonstrates the qualities expected
                from a future officer.
              </p>

              <h3>Re-Interviews and Re-Assessment</h3>

              <p>
                Some candidates may be called for additional interviews or
                clarification sessions on the final day. This process is often
                referred to as a Re-Interview.
              </p>

              <div className="physical-image">
                <img src={DeputyInterview} alt="ISSB Re Interview" />
              </div>

              <p>
                Re-interviews are conducted when assessors require additional
                information, clarification or verification before making a final
                recommendation.
              </p>

              <h4>Possible Reasons for Re-Interview</h4>

              <ul>
                <li>Clarification regarding psychological observations.</li>

                <li>Verification of personal information.</li>

                <li>Inconsistencies between assessments.</li>

                <li>Additional evaluation of leadership potential.</li>

                <li>Final review of borderline cases.</li>
              </ul>

              <div className="warning-box">
                Being called for a re-interview does not automatically indicate
                recommendation or rejection. It simply means assessors require
                additional clarification.
              </div>

              <h3>How Final Recommendations Are Made</h3>

              <p>
                ISSB does not evaluate candidates based on a single test or
                interview. Recommendations are made after reviewing performance
                across all dimensions.
              </p>

              <div className="requirement-box">
                <span>Assessment Principle</span>
                <strong>
                  Consistency across Psychological Tests, GTO Tasks and
                  Interviews is more important than excelling in only one area.
                </strong>
              </div>

              <h4>Major Factors Considered</h4>

              <ul>
                <li>Leadership potential.</li>

                <li>Officer-like qualities.</li>

                <li>Communication skills.</li>

                <li>Emotional stability.</li>

                <li>Integrity and honesty.</li>

                <li>Decision-making ability.</li>

                <li>Teamwork and cooperation.</li>

                <li>Motivation for military service.</li>

                <li>Intellectual capability.</li>

                <li>Adaptability under pressure.</li>
              </ul>

              <h3>Recommended vs Not Recommended</h3>

              <p>
                At the conclusion of the conference, candidates are generally
                categorized as either Recommended or Not Recommended.
              </p>

              <div className="essay-grid">
                <div className="essay-card">
                  <h4>Recommended</h4>

                  <p>
                    Candidates assessed as suitable for officer training are
                    forwarded to their respective service headquarters for merit
                    processing and further procedures.
                  </p>
                </div>

                <div className="essay-card">
                  <h4>Not Recommended</h4>

                  <p>
                    Candidates who do not meet the required standards may not
                    proceed further in the current selection cycle.
                  </p>
                </div>
              </div>

              <h3>What Happens After ISSB?</h3>

              <p>
                Receiving a recommendation from ISSB is a significant
                achievement, but it does not always mean immediate selection.
              </p>

              <p>
                The final merit list is prepared by the respective armed service
                based on vacancies, medical fitness, merit position and other
                service-specific requirements.
              </p>

              <div className="physical-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8YpMul8g3vz7Jt44WMmYuL2TiCNebcd4_Eo8yz5FxMTWxpGgo3y_QRQx&s=10"
                  alt="Military Academy Training After ISSB"
                />
              </div>

              <h4>Possible Next Steps</h4>

              <ul>
                <li>Final Medical Examination.</li>

                <li>Merit List Preparation.</li>

                <li>Call Letter Issuance.</li>

                <li>Academy Joining Instructions.</li>

                <li>Officer Training Commencement.</li>
              </ul>

              <h3>Important Lessons from Conference Day</h3>

              <p>
                Many successful candidates report that remaining calm,
                disciplined and positive throughout the entire ISSB stay
                contributed significantly to their overall performance.
              </p>

              <p>
                Officer-like behavior is evaluated continuously from arrival
                until departure. Respect for staff, cooperation with fellow
                candidates and adherence to instructions remain important until
                the very last moment.
              </p>

              <div className="warning-box">
                Never assume that assessments end after interviews or GTO tasks.
                Professional conduct and discipline should be maintained
                throughout your stay at ISSB.
              </div>

              <h3>Final Preparation Advice</h3>

              <ul>
                <li>Remain confident but humble.</li>

                <li>Be truthful in every assessment.</li>

                <li>Focus on leadership rather than dominance.</li>

                <li>Support fellow candidates.</li>

                <li>Stay physically and mentally active.</li>

                <li>Maintain consistency across all tests.</li>

                <li>Demonstrate officer-like behavior at all times.</li>
              </ul>

              <div className="cta-box">
                <h3>Prepare for ISSB With Realistic Practice</h3>

                <p>
                  Build confidence through realistic WAT, SCT, TAT, Pointer
                  Stories, OPI and Mock Assessment preparation. Practice in an
                  environment designed specifically for ISSB, PMA Long Course
                  and Armed Forces candidates.
                </p>

                <div className="cta-buttons">
                  <Link to="/issb-1" className="cta-button">
                    Practice Mock Tests
                  </Link>
                </div>
              </div>
            </section>
            {/* OLQ */}

            <section id="olqs" className="article-card">
              <h2>
                Officer Like Qualities (OLQs) – What ISSB Actually Looks For
              </h2>

              <p>
                Every psychological test, group task, interview and outdoor
                activity conducted during ISSB is designed to assess a
                candidate's Officer Like Qualities (OLQs). These qualities help
                selectors determine whether a candidate possesses the potential
                to become an effective military leader in the Pakistan Army,
                Pakistan Navy or Pakistan Air Force.
              </p>

              <p>
                Contrary to common misconceptions, ISSB does not recommend
                candidates simply because they perform well in a single task or
                interview. Recommendations are based on an overall assessment of
                leadership potential, character, intelligence, emotional
                stability and social effectiveness demonstrated throughout the
                four-day selection process.
              </p>

              {/* <div className="physical-image">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/5/55/Pakistan_Army_Soldiers.jpg"
      alt="Officer leadership qualities and military leadership development"
      loading="lazy"
    />
  </div> */}

              <h3>1. Effective Intelligence</h3>

              <p>
                Effective intelligence refers to the ability to solve practical
                problems using available resources. During Military Planning
                Exercises, Command Tasks and Group Tasks, candidates are
                expected to analyze situations quickly and develop workable
                solutions.
              </p>

              <div className="requirement-box">
                <span>Observed During</span>
                <strong>GTO Tasks, Planning Exercises & SRT</strong>
              </div>

              <h3>2. Reasoning Ability</h3>

              <p>
                Reasoning ability helps candidates evaluate situations
                logically, identify causes and consequences, and make sound
                decisions under pressure. This quality is observed in
                interviews, planning exercises, discussions and psychological
                tests.
              </p>

              <h3>3. Organizing Ability</h3>

              <p>
                Future officers must be capable of planning resources, managing
                time, coordinating teams and executing tasks efficiently.
                Organizing ability becomes particularly visible during group
                planning exercises and command tasks.
              </p>

              <h3>4. Power of Expression</h3>

              <p>
                Officers are required to communicate clearly with subordinates,
                seniors and civilians. ISSB evaluates verbal and written
                expression through essays, lecturettes, group discussions and
                interviews.
              </p>

              <div className="info-grid">
                <div>
                  <strong>Essay Writing</strong>
                  <p>Written communication skills.</p>
                </div>

                <div>
                  <strong>Lecturette</strong>
                  <p>Public speaking confidence.</p>
                </div>

                <div>
                  <strong>Interview</strong>
                  <p>Verbal expression and clarity.</p>
                </div>

                <div>
                  <strong>Group Discussion</strong>
                  <p>Logical communication in teams.</p>
                </div>
              </div>

              <h3>5. Social Adaptability</h3>

              <p>
                Military officers work with individuals from different
                backgrounds, cultures and regions. Candidates must demonstrate
                the ability to adjust to new environments and cooperate
                effectively with others.
              </p>

              <h3>6. Cooperation</h3>

              <p>
                ISSB values teamwork more than individual brilliance. Candidates
                who assist others, encourage participation and contribute
                positively to group objectives generally perform better than
                those attempting to dominate every activity.
              </p>

              <h3>7. Sense of Responsibility</h3>

              <p>
                Officers are entrusted with personnel, equipment and operational
                responsibilities. Selectors evaluate whether candidates display
                maturity, accountability and reliability in their actions and
                decisions.
              </p>

              <h3>8. Initiative</h3>

              <p>
                Initiative is the willingness to act without waiting for
                instructions. Candidates who identify opportunities, propose
                solutions and take constructive action often demonstrate strong
                leadership potential.
              </p>

              <div className="requirement-box">
                <span>Observed During</span>
                <strong>PGT, HGT, Command Task & Discussions</strong>
              </div>

              <h3>9. Self-Confidence</h3>

              <p>
                Self-confidence allows candidates to communicate ideas
                effectively, make decisions and perform under pressure. Genuine
                confidence is appreciated, while overconfidence and false
                projection usually create negative impressions.
              </p>

              <div className="warning-box">
                <strong>Important:</strong> ISSB looks for natural confidence,
                not artificial confidence. Candidates should remain authentic
                and avoid pretending to be someone they are not.
              </div>

              <h3>10. Speed of Decision</h3>

              <p>
                Officers frequently face situations requiring quick judgment.
                Psychological tests, planning exercises and obstacle tasks help
                assess a candidate's ability to make timely and practical
                decisions.
              </p>

              <h3>11. Ability to Influence the Group</h3>

              <p>
                Leadership is not about speaking the most. It is about
                positively influencing others, gaining trust and guiding the
                team toward a common objective.
              </p>

              <h3>12. Liveliness</h3>

              <p>
                Liveliness reflects enthusiasm, optimism and positive energy.
                Candidates who remain motivated, active and engaged throughout
                ISSB often create stronger impressions on assessors and fellow
                candidates.
              </p>

              <h3>13. Determination</h3>

              <p>
                Determination is demonstrated when candidates continue working
                despite fatigue, obstacles or setbacks. Outdoor tasks and
                obstacle courses provide opportunities to display perseverance.
              </p>

              <h3>14. Courage</h3>

              <p>
                Courage includes both physical courage and moral courage. It
                involves taking responsibility, making difficult decisions and
                remaining composed under challenging circumstances.
              </p>

              <h3>15. Stamina</h3>

              <p>
                Military leadership demands physical and mental endurance.
                Throughout ISSB, candidates are observed for their ability to
                maintain performance, focus and enthusiasm during a demanding
                assessment schedule.
              </p>

              <h3>How ISSB Evaluates Officer Like Qualities</h3>

              <p>
                No single test can determine whether a candidate possesses
                Officer Like Qualities. Instead, ISSB combines observations from
                the Psychologist, Group Testing Officer (GTO) and Deputy
                President to create a complete personality profile.
              </p>

              <div className="medical-standards">
                <div className="standard-item">
                  <strong>Psychologist</strong>
                  <span>Personality & Mental Traits</span>
                </div>

                <div className="standard-item">
                  <strong>GTO</strong>
                  <span>Leadership & Team Behaviour</span>
                </div>

                <div className="standard-item">
                  <strong>Deputy President</strong>
                  <span>Intellect & Personality Assessment</span>
                </div>
              </div>

              <div className="cta-box">
                <h3>Develop Your Officer Like Qualities with EXAMITICS</h3>

                <p>
                  Practice ISSB psychological tests, improve communication
                  skills, strengthen decision-making abilities and prepare
                  confidently for every stage of the ISSB selection process
                  through realistic practice modules and mock assessments.
                </p>

                <div className="info-grid">
                  <div>
                    <strong>WAT Practice</strong>
                  </div>

                  <div>
                    <strong>SCT Practice</strong>
                  </div>

                  <div>
                    <strong>OPI Preparation</strong>
                  </div>

                  <div>
                    <strong>TAT & Story Writing</strong>
                  </div>

                  <div>
                    <strong>Pointer Stories</strong>
                  </div>

                  <div>
                    <strong>ISSB Mock Tests</strong>
                  </div>
                </div>
              </div>
            </section>

            {/* preparation strategy  */}

            <section id="issb-preparation-strategy" className="article-card">
              <h2>
                ISSB Preparation Strategy – A Complete Roadmap for Success
              </h2>

              <p>
                One of the most common questions candidates ask is:
                <strong> "How should I prepare for ISSB?"</strong>
              </p>

              <p>
                The reality is that ISSB is not an examination that can be
                passed through memorization alone. The selection system is
                designed to assess your personality, leadership potential,
                communication skills, decision-making ability, physical fitness
                and overall suitability for military leadership.
              </p>

              <p>
                Effective ISSB preparation focuses on improving yourself rather
                than trying to impress selectors with rehearsed answers or
                artificial behavior. The best-performing candidates are usually
                those who remain original, confident, disciplined and
                well-informed.
              </p>

              {/* <div className="physical-image">
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
      alt="ISSB preparation strategy leadership and teamwork"
      loading="lazy"
    />
  </div> */}

              <h3>1. Understand the ISSB Selection System</h3>

              <p>
                Before starting preparation, candidates should understand how
                ISSB works. Every activity during the four-day assessment
                contributes to your overall evaluation.
              </p>

              <div className="info-grid">
                <div>
                  <strong>Psychologist</strong>
                  <p>Assesses personality and thinking patterns.</p>
                </div>

                <div>
                  <strong>GTO</strong>
                  <p>Evaluates teamwork, leadership and initiative.</p>
                </div>

                <div>
                  <strong>Deputy President</strong>
                  <p>Assesses intellect, confidence and personality.</p>
                </div>
              </div>

              <h3>2. Prepare for Psychological Tests</h3>

              <p>
                Psychological tests form a major part of ISSB assessment.
                Candidates should become familiar with the structure and timing
                of these tests so that they can respond naturally and
                confidently during the actual examination.
              </p>

              <div className="medical-standards">
                <div className="standard-item">
                  <strong>WAT</strong>
                  <span>Word Association Test</span>
                </div>

                <div className="standard-item">
                  <strong>SCT</strong>
                  <span>Sentence Completion Test</span>
                </div>

                <div className="standard-item">
                  <strong>SRT</strong>
                  <span>Situation Reaction Test</span>
                </div>

                <div className="standard-item">
                  <strong>TAT</strong>
                  <span>Picture & Pointer Stories</span>
                </div>

                <div className="standard-item">
                  <strong>OPI</strong>
                  <span>Officer Personality Inventory</span>
                </div>
              </div>

              <div className="warning-box">
                <strong>Important:</strong> Do not memorize prepared responses.
                Psychologists evaluate consistency, originality and natural
                thinking patterns rather than rehearsed answers.
              </div>

              <h3>3. Improve Communication Skills</h3>

              <p>
                Communication plays a significant role in Lecturette, Group
                Discussion, Interviews and Group Planning Exercises. Candidates
                should develop the ability to express ideas clearly and
                confidently.
              </p>

              <ul>
                <li>Read newspapers daily.</li>
                <li>Practice speaking English regularly.</li>
                <li>Participate in discussions with friends.</li>
                <li>Learn to present ideas logically.</li>
                <li>Improve vocabulary through reading.</li>
              </ul>

              <h3>4. Develop General Knowledge & Current Affairs</h3>

              <p>
                Deputy President interviews and discussions frequently involve
                current affairs, Pakistan affairs, international events and
                general knowledge.
              </p>

              <div className="info-grid">
                <div>
                  <strong>Pakistan Affairs</strong>
                </div>

                <div>
                  <strong>Current Affairs</strong>
                </div>

                <div>
                  <strong>World Events</strong>
                </div>

                <div>
                  <strong>Armed Forces Knowledge</strong>
                </div>

                <div>
                  <strong>Science & Technology</strong>
                </div>

                <div>
                  <strong>Basic Economics</strong>
                </div>
              </div>

              <h3>5. Build Physical Fitness</h3>

              <p>
                Physical endurance is important for GTO outdoor tasks and
                individual obstacles. Candidates do not need extraordinary
                athletic ability, but they should maintain good stamina and
                overall fitness.
              </p>

              <ul>
                <li>Regular running or jogging.</li>
                <li>Push-ups and bodyweight exercises.</li>
                <li>Improve stamina and endurance.</li>
                <li>Maintain healthy sleeping habits.</li>
                <li>Stay physically active.</li>
              </ul>

              <h3>6. Practice Leadership and Teamwork</h3>

              <p>
                ISSB looks for candidates who can work effectively within a team
                while demonstrating leadership when required.
              </p>

              <p>
                Leadership does not mean dominating discussions or giving
                orders. It means guiding the group, helping others and
                contributing positively to collective objectives.
              </p>

              <div className="requirement-box">
                <span>Remember</span>
                <strong>
                  Teamwork is often more valuable than individual brilliance
                  during GTO tasks.
                </strong>
              </div>

              <h3>7. Prepare for Interviews</h3>

              <p>
                Interviews focus heavily on your personal life, education,
                hobbies, achievements, ambitions and opinions. Most interview
                questions are based on information provided in your biodata
                forms.
              </p>

              <ul>
                <li>Know your educational background thoroughly.</li>
                <li>Be clear about your hobbies and interests.</li>
                <li>Understand your achievements and goals.</li>
                <li>Stay updated with current affairs.</li>
                <li>Answer confidently and honestly.</li>
              </ul>

              <h3>8. Avoid Common Mistakes</h3>

              <div className="medical-grid">
                <div className="medical-card">
                  <h4>False Projection</h4>
                  <p>Pretending to be someone you are not.</p>
                </div>

                <div className="medical-card">
                  <h4>Overconfidence</h4>
                  <p>Dominating discussions unnecessarily.</p>
                </div>

                <div className="medical-card">
                  <h4>Lack of Teamwork</h4>
                  <p>Ignoring or discouraging group members.</p>
                </div>

                <div className="medical-card">
                  <h4>Memorized Responses</h4>
                  <p>Using rehearsed answers in psychological tests.</p>
                </div>
              </div>

              <h3>9. A Practical 30-Day ISSB Preparation Plan</h3>

              <div className="info-grid">
                <div>
                  <strong>Week 1</strong>
                  <p>Understand ISSB process and psychological tests.</p>
                </div>

                <div>
                  <strong>Week 2</strong>
                  <p>Practice WAT, SCT, TAT and SRT daily.</p>
                </div>

                <div>
                  <strong>Week 3</strong>
                  <p>Focus on communication and current affairs.</p>
                </div>

                <div>
                  <strong>Week 4</strong>
                  <p>Take full-length mock tests and review performance.</p>
                </div>
              </div>
<a href="/issb-1">
              <div className="cta-box">
                <h3>Prepare for ISSB with EXAMITICS</h3>

                <p>
                  Build confidence through realistic practice. Train under timed
                  conditions and experience psychological tests in an
                  environment similar to actual ISSB assessment.
                </p>

                <div className="info-grid">
                  <div>
                    <strong>WAT Practice</strong>
                  </div>

                  <div>
                    <strong>SCT Practice</strong>
                  </div>

                  <div>
                    <strong>TAT & Pointer Stories</strong>
                  </div>

                  <div>
                    <strong>OPI Practice</strong>
                  </div>

                  <div>
                    <strong>MAT Mock Tests</strong>
                  </div>

                  <div>
                    <strong>Full ISSB Simulation</strong>
                  </div>
                </div>
              </div></a>
            </section>

            {/* issb myths and faq */}
            <section id="issb-myths-faqs" className="article-card">
              <h2>ISSB Myths, Reality & Frequently Asked Questions</h2>

              <p>
                Thousands of ISSB candidates rely on social media posts, academy
                rumors and unofficial advice while preparing for ISSB.
                Unfortunately, many of these claims are inaccurate and create
                unnecessary stress.
              </p>

              <p>
                The ISSB selection system is designed to assess a candidate's
                natural personality, leadership potential, intelligence,
                communication skills and suitability for military leadership.
                Understanding the reality behind common misconceptions can help
                candidates prepare more effectively and approach ISSB with
                confidence.
              </p>

              {/* ========================================= */}
              {/* MYTHS VS REALITY */}
              {/* ========================================= */}

              <h3>Common ISSB Myths vs Reality</h3>

              <div className="medical-grid">
                <div className="medical-card">
                  <h4>❌ Myth #1</h4>
                  <p>Only candidates with fluent English are recommended.</p>

                  <h4>✅ Reality</h4>
                  <p>
                    Communication skills are important, but ISSB primarily
                    evaluates confidence, clarity of thought and the ability to
                    express ideas. Perfect English is not a requirement.
                  </p>
                </div>

                <div className="medical-card">
                  <h4>❌ Myth #2</h4>
                  <p>
                    Psychologists only look for positive answers in WAT and SCT.
                  </p>

                  <h4>✅ Reality</h4>
                  <p>
                    ISSB evaluates originality and consistency. Artificially
                    forcing every response to sound positive often creates
                    contradictions in your personality profile.
                  </p>
                </div>

                <div className="medical-card">
                  <h4>❌ Myth #3</h4>
                  <p>Coaching academies know secret ISSB formulas.</p>

                  <h4>✅ Reality</h4>
                  <p>
                    No academy has access to secret selection criteria.
                    Preparation can improve familiarity with tests, but
                    originality remains the most important factor.
                  </p>
                </div>

                <div className="medical-card">
                  <h4>❌ Myth #4</h4>
                  <p>A long interview means recommendation.</p>

                  <h4>✅ Reality</h4>
                  <p>
                    Interview duration varies from candidate to candidate. A
                    longer interview does not guarantee recommendation, and a
                    short interview does not indicate rejection.
                  </p>
                </div>

                <div className="medical-card">
                  <h4>❌ Myth #5</h4>
                  <p>
                    Candidates must dominate group discussions to impress
                    selectors.
                  </p>

                  <h4>✅ Reality</h4>
                  <p>
                    ISSB values teamwork, cooperation and constructive
                    participation. Interrupting others or trying to control
                    discussions often creates a negative impression.
                  </p>
                </div>

                <div className="medical-card">
                  <h4>❌ Myth #6</h4>
                  <p>Making one mistake in a task leads to rejection.</p>

                  <h4>✅ Reality</h4>
                  <p>
                    Assessment is conducted across multiple activities over four
                    days. Selectors evaluate overall performance rather than a
                    single isolated mistake.
                  </p>
                </div>

                <div className="medical-card">
                  <h4>❌ Myth #7</h4>
                  <p>
                    Only exceptionally intelligent candidates get recommended.
                  </p>

                  <h4>✅ Reality</h4>
                  <p>
                    Intelligence is only one component. Leadership, character,
                    responsibility, emotional stability and teamwork are equally
                    important.
                  </p>
                </div>

                <div className="medical-card">
                  <h4>❌ Myth #8</h4>
                  <p>Not Recommended means failure in life.</p>

                  <h4>✅ Reality</h4>
                  <p>
                    ISSB only determines suitability for military leadership at
                    a particular stage. Many successful individuals pursue
                    excellent careers in other fields.
                  </p>
                </div>
              </div>

              <div className="warning-box">
                <strong>Important:</strong> The official ISSB guidance
                repeatedly emphasizes remaining natural, truthful and original.
                Candidates who attempt false projection or memorized responses
                often create inconsistencies that are easily identified during
                assessment.
              </div>

              {/* ========================================= */}
              {/* FAQ SECTION */}
              {/* ========================================= */}

              <h3>Frequently Asked Questions (FAQs)</h3>

              <div className="qa-card">
                <h4>What is ISSB?</h4>

                <p>
                  ISSB (Inter Services Selection Board) is Pakistan's officer
                  selection organization responsible for assessing candidates
                  for Pakistan Army, Pakistan Navy and Pakistan Air Force
                  officer entry programs.
                </p>
              </div>

              <div className="qa-card">
                <h4>How many days does ISSB last?</h4>

                <p>
                  The ISSB assessment procedure normally lasts four days after
                  arrival. During this period candidates undergo psychological
                  testing, GTO tasks, interviews and final evaluation.
                </p>
              </div>

              <div className="qa-card">
                <h4>What happens on Day 0 at ISSB?</h4>

                <p>
                  Candidates complete document verification, biodata forms,
                  essay writing, initial briefings and accommodation procedures
                  before the formal assessment begins.
                </p>
              </div>

              <div className="qa-card">
                <h4>What tests are conducted on Psychological Day?</h4>

                <p>
                  Psychological assessment generally includes MAT, OPI, SCT,
                  WAT, Story Writing (TAT), Self Description and Situation
                  Reaction Tests (SRT).
                </p>
              </div>

              <div className="qa-card">
                <h4>What is the purpose of GTO tasks?</h4>

                <p>
                  Group Testing Officer tasks evaluate leadership, teamwork,
                  initiative, planning ability, communication skills and
                  practical problem-solving under pressure.
                </p>
              </div>

              <div className="qa-card">
                <h4>What is the Deputy President Interview?</h4>

                <p>
                  The Deputy President conducts a detailed personality interview
                  to evaluate intellect, confidence, motivation, personal
                  background, awareness and officer-like qualities.
                </p>
              </div>

              <div className="qa-card">
                <h4>Can I prepare for ISSB at home?</h4>

                <p>
                  Yes. Candidates can effectively prepare through psychological
                  test practice, improving communication skills, reading current
                  affairs, enhancing physical fitness and participating in mock
                  ISSB activities.
                </p>
              </div>

              <div className="qa-card">
                <h4>Does ISSB require perfect English?</h4>

                <p>
                  No. Clear communication, confidence and logical thinking are
                  more important than speaking perfect English.
                </p>
              </div>

              <div className="qa-card">
                <h4>Can candidates be interviewed by psychologists?</h4>

                <p>
                  Yes. Psychologists may interview selected candidates if
                  additional clarification regarding personality assessment is
                  required. This is a routine part of the process and should not
                  be viewed negatively.
                </p>
              </div>

              <div className="qa-card">
                <h4>How is the final ISSB result decided?</h4>

                <p>
                  At the end of the assessment, the Psychologist, GTO and Deputy
                  President combine their observations and discuss each
                  candidate in a board conference before making the final
                  recommendation decision.
                </p>
              </div>

              <div className="qa-card">
                <h4>What qualities does ISSB look for?</h4>

                <p>
                  ISSB primarily looks for leadership potential, responsibility,
                  integrity, initiative, confidence, teamwork, emotional
                  stability, intelligence, communication skills, courage and
                  adaptability.
                </p>
              </div>

              <div className="qa-card">
                <h4>Can I be recommended even if I make mistakes?</h4>

                <p>
                  Yes. ISSB evaluates your overall personality and performance
                  across multiple tests and activities. Minor mistakes during
                  individual events rarely determine the final outcome.
                </p>
              </div>

              {/* ========================================= */}
              {/* FINAL CTA */}
              {/* ========================================= */}
<a href="/issb-1">
              <div className="cta-box" >
                <h3>Practice Before Your ISSB Call</h3>

                <p>
                  The best preparation is consistent practice under realistic
                  conditions. Familiarity with ISSB tests helps candidates
                  manage time, improve confidence and reduce anxiety during
                  assessment.
                </p>

                <div className="info-grid">
                  <div>
                    <strong>Word Association Test (WAT)</strong>
                  </div>

                  <div>
                    <strong>Sentence Completion Test (SCT)</strong>
                  </div>

                  <div>
                    <strong>Picture & Pointer Stories (TAT)</strong>
                  </div>

                  <div>
                    <strong>Officer Personality Inventory (OPI)</strong>
                  </div>

                  <div>
                    <strong>Mechanical Aptitude Test (MAT)</strong>
                  </div>

                  <div>
                    <strong>Full Mock ISSB Practice</strong>
                  </div>
                </div>

                <p style={{ marginTop: "20px" }}>
                  Prepare smarter with EXAMITICS and experience ISSB-style
                  practice tests designed specifically for Pakistan Army, Navy
                  and Air Force officer candidates.
                </p>
              </div></a>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default IssbGuide;
