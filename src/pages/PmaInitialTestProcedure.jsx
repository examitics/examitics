import "../styles/PmaInitialTestProcedure.css";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

import { Helmet } from "react-helmet-async";

import AdsterraNativeBanner from "../components/AdsterraNativeBanner";
import Adsterra300x250 from "../components/Adsterra300x250";
import Adsterra728x90 from "../components/Adsterra728x90";

const PmaInitialTestProcedure = () => {
  return (
    <>
      {" "}
      <Helmet>
        {" "}
        <title>PMA Long Course Initial Test Procedure | EXAMITICS </title>
        <meta
          name="description"
          content="Learn the complete PMA Long Course Initial Test Procedure including registration, written test, intelligence test, physical test, medical examination, and interview process."
        />
        <meta
          name="keywords"
          content="PMA Long Course, PMA Initial Test, PMA Registration, PMA Physical Test, PMA Interview, Pakistan Army"
        />
      </Helmet>
      <Navbar />
      <main className="pma-blog-page">
        {/* HERO SECTION */}
        <section className="pma-hero">
          <div className="pma-hero-content">
            <span className="pma-breadcrumb">
              Home / Blogs / PMA Long Course
            </span>

            <h1>PMA Long Course Initial Test Procedure</h1>

            <p>
              A complete guide covering registration, written & intelligence
              tests, physical standards, medical examination and interview
              process for PMA Long Course candidates.
            </p>

            <div className="pma-meta">
              <span>Updated 2026</span>

              <span>10 min read</span>
            </div>
          </div>
        </section>

        {/* QUICK OVERVIEW */}
        <section className="overview-section">
          <div className="overview-card">
            <h2>Quick Overview</h2>

            <div className="overview-grid">
              <div>✓ Registration</div>
              <div>✓ Written Test / Intelligence Test</div>
              <div>✓ Medical Examination</div>
              <div>✓ Physical Test</div>
              <div>✓ Interview</div>
            </div>
          </div>
        </section>

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
        {/* BLOG CONTENT */}
        <section className="blog-content">
          {/* TABLE OF CONTENTS */}

          <aside className="table-of-contents">
            <h3>Contents</h3>

            <ul>
              <li>
                <a href="#introduction">Introduction</a>
              </li>

              <li>
                <a href="#registration">Registration</a>
              </li>

              <li>
                <a href="#computerized-test">Computerized Test</a>
              </li>

              <li>
                <a href="#medical">Medical Examination</a>
              </li>

              <li>
                <a href="#physical-test">Physical Test</a>
              </li>
              <li>
                <a href="#interview">Interview</a>
              </li>

              <li>
                <a href="#issb">ISSB Selection</a>
              </li>
            </ul>
            <div className="toc-ad">
              <ul>
                <li style={{ display: "grid", placeItems: "center" }}>
                  Advertisement
                </li>
                <li style={{ display: "grid", placeItems: "center" }}>
                  <Adsterra300x250 />
                </li>
              </ul>
            </div>
          </aside>

          {/* ARTICLE */}

          <div className="article-content">
            <section id="introduction" className="article-card">
              <h2>Introduction</h2>

              <p>
                The Pakistan Military Academy (PMA) Long Course is one of the
                most sought- after entry routes for candidates who aspire to
                become commissioned officers in the Pakistan Army.
              </p>

              <p>
                Before reaching ISSB, every candidate must successfully clear a
                series of initial selection stages including registration,
                written and intelligence testing, physical assessment, medical
                examination and interview.
              </p>

              <p>
                This guide explains each stage of the PMA Long Course Initial
                Test Procedure in a simple and structured manner.
              </p>
            </section>
            {/* registration section  */}
            <section id="registration" className="article-card content-section">
              <h2>Registration Process</h2>

              <p>
                Candidates can register for the PMA Long Course through the
                official Pakistan Army recruitment portal. The entire
                registration process is conducted online, and applicants must
                ensure that all details are entered accurately before
                submission.
              </p>

              <div className="info-grid">
                <div>✓ Online Registration</div>
                <div>✓ Exam Slip Generation</div>
                <div>✓ Computer-Based Testing</div>
                <div>✓ Fixed Test Schedule</div>
              </div>

              <h3>Official Registration Website</h3>
              <p>
                Candidates must apply through the official portal:{" "}
                <a
                  href="https://joinpakarmy.gov.pk/"
                  target="blank"
                  style={{ color: "var(--color-primary)" }}
                >
                  www.joinpakarmy.gov.pk{" "}
                </a>
              </p>
              {/* https://joinpakarmy.gov.pk/examfeedback */}
              <h3>Exam Slip & Reporting Instructions</h3>
              <p>
                After successful registration, candidates must visit the same
                website to download their{" "}
                <a
                  href="https://joinpakarmy.gov.pk/examfeedback "
                  target="blank"
                  style={{ color: "var(--color-primary)" }}
                >
                  exam slip
                </a>{" "}
                & exam fee slip. The exam slip is usually generated within{" "}
                <strong>5 to 7 working days</strong>. Candidates must report
                exactly on the date and time mentioned on the computerized roll
                number slip.
              </p>

              <p>
                The assigned test date is final and cannot be changed under any
                circumstances.
              </p>

              <h3>Required Documents on Test Day</h3>
              <ul>
                <li>Original CNIC / B-Form</li>
                <li>Educational certificates (Matric / Intermediate)</li>
                <li>Recent passport-size photographs</li>
                <li>Domicile</li>
                <li>Not Recommendation letter (for repeaters only)</li>
                <li>Registration slip</li>
                <li>Registration fee deposit slip</li>
              </ul>

              <h3>Registration Fee Details</h3>
              <p>
                Candidates are required to deposit the registration fee in any
                <strong> NBP Branch </strong>
              </p>

              {/* <p>
                <strong>IBAN:</strong> PK46NBPA0330004256466227 <br />
                <strong>Title:</strong> Registration and Examination Fee –
                Personnel Administration Directorate
              </p> */}

              <h3>Computer Knowledge Requirement</h3>
              <p>
                Candidates must have basic working knowledge of computers, as
                both registration and testing are conducted on computer-based
                systems.
              </p>

              <h3>Important Notes</h3>
              <ul>
                <li>
                  TCC candidates applying for PMA Long Course will also be
                  treated as repeater candidates.
                </li>
                <li>
                  Candidates applying for the first time will be considered
                  fresh candidates, even if they have appeared in ISSB for
                  Pakistan Navy or Pakistan Air Force.
                </li>
                {/* <li>
                  Repeater candidates must report to concerned Army Selection &
                  Recruitment Centres (AS&RCs) from{" "}
                  <strong>20 April 2026 to 1 May 2026</strong> for the
                  preliminary test.
                </li> */}
              </ul>
              <div className="horizontal-ad">
                <Adsterra728x90 />
              </div>
            </section>

            <section
              id="computerized-test"
              className="article-card content-section"
            >
              <h2>Computerized Initial Test Procedure</h2>

              <p>
                The PMA Long Course initial computerized test is the first major
                screening stage conducted at the Army Selection and Recruitment
                Centre (AS&RC). It evaluates both mental aptitude and academic
                knowledge through a structured computer-based system.
              </p>

              <p>
                The test is divided into three main parts: Verbal Intelligence,
                Non-Verbal Intelligence, and Academic Test. Candidates must
                clear each stage to qualify for the next phase.
              </p>

              {/* ================= INTELLIGENCE TEST ================= */}
              <h3>1. Intelligence Tests</h3>

              <p>
                These sections are designed to assess your speed, logical
                thinking, and problem-solving ability rather than textbook
                memorization.
              </p>

              <div className="info-grid">
                <div>✓ Verbal Intelligence</div>
                <div>✓ Non-Verbal Intelligence</div>
                <div>✓ Time-Based MCQs</div>
                <div>✓ Pattern Recognition</div>
              </div>

              <h3>Verbal Intelligence Test</h3>
              <p>
                This section includes English-based logical questions such as
                coding/decoding, sentence completion, time and distance
                problems, jumbled words, and direction sense.
              </p>

              <p>
                Candidates are given approximately <strong>30 minutes</strong>{" "}
                to solve around
                <strong>84 questions</strong>.For practice mock test{" "}
                <a href="/mock" style={{ color: "var(--color-primary)" }}>
                  <b>click here →</b>
                </a>
              </p>

              <h3>Non-Verbal Intelligence Test</h3>
              <p>
                This section focuses on visual and diagram-based problem
                solving. You may encounter pattern sequences, figure rotation,
                odd-one-out questions, and image-based logic puzzles.
              </p>

              <p>
                The duration is approximately <strong>30 minutes</strong> with
                <strong>64 questions</strong>.For practice mock test{" "}
                <a href="/mock" style={{ color: "var(--color-primary)" }}>
                  <b>click here →</b>
                </a>
              </p>

              {/* ================= ACADEMIC TEST ================= */}
              <h3>2. Academic Test</h3>

              <p>
                After successfully clearing intelligence sections, candidates
                proceed to the academic test. This stage evaluates basic
                educational knowledge across multiple subjects.
              </p>

              <div className="info-grid">
                <div>✓ 50 MCQs</div>
                <div>✓ 30 Minutes Duration</div>
                <div>✓ 50% Passing Marks</div>
                <div>✓ Multi-Subject Paper</div>
              </div>

              <p>
                For practice mock test{" "}
                <a href="/mock" style={{ color: "var(--color-primary)" }}>
                  <b>click here →</b>
                </a>
              </p>

              <h3>Subjects Covered</h3>
              <ul>
                <li>
                  <strong>Islamiat:</strong> Basic Islamic history, beliefs, and
                  Quran knowledge
                </li>
                <li>
                  <strong>Pakistan Studies:</strong> Important events,
                  geography, and history
                </li>
                <li>
                  <strong>English:</strong> Synonyms, antonyms, grammar, and
                  sentence completion
                </li>
                <li>
                  <strong>General Knowledge & Science:</strong> Basic physics,
                  chemistry, biology, world organizations
                </li>
                <li>
                  <strong>Mathematics:</strong> Percentages, ratios, algebra,
                  and basic arithmetic
                </li>
                <li>
                  <strong>Current Affairs:</strong> National and international
                  events, politics, economy, sports, defense, awards, important
                  appointments, and recent developments
                </li>
              </ul>

              {/* ================= STRATEGY ================= */}
              <h3>3. Preparation Strategy</h3>

              <p>
                Effective preparation requires both speed and accuracy. Since
                time is limited, candidates must focus on solving questions
                quickly while maintaining accuracy.
              </p>

              <ul>
                <li>Practice timed MCQ tests daily to improve speed</li>
                <li>Skip difficult questions and return if time allows</li>
                <li>Focus on repeated patterns in intelligence tests</li>
                <li>Strengthen basic concepts in English, Maths, and GK</li>
              </ul>

              {/* ================= CTA BUTTON ================= */}
              <div className="cta-box">
                <h3>Start Your Online Practice</h3>
                <p>
                  Practice real exam-style MCQs and intelligence tests on
                  EXAMITICS to improve your speed and accuracy before attempting
                  the PMA computerized test.
                </p>

                <a href="/mock" className="cta-button">
                  Start Mock Tests →
                </a>
              </div>
              {/* <Adsterra728x90 /> */}
            </section>
            {/* medical examination  */}

            <section id="medical" className="article-card content-section">
              <h2>Initial Medical Examination</h2>

              <p>
                The Initial Medical Examination is conducted at the Army
                Selection and Recruitment Centre (AS&RC) after the computerized
                test. Candidates who complete their computerized test early,
                usually before 12:00 PM to 1:00 PM, may undergo medical
                screening on the same day. Remaining candidates are generally
                examined on the following day.
              </p>

              <p>
                This examination is a preliminary screening designed to assess
                whether a candidate meets the basic medical standards required
                for the PMA Long Course before proceeding to the interview
                stage.
              </p>

              <div className="info-grid">
                <div>✓ Height & Weight Check</div>
                <div>✓ Eyesight Examination</div>
                <div>✓ ENT Assessment</div>
                <div>✓ Physical Deformity Check</div>
              </div>

              <h3>Medical Standards</h3>

              <div className="medical-standards">
                <div className="standard-item">
                  <strong>Height</strong>
                  <span>Male: 5'4" (162.5 cm)</span>
                  <span>Female: 5'2" (157 cm)</span>
                </div>

                <div className="standard-item">
                  <strong>Weight</strong>
                  <span>According to BMI standards</span>
                </div>

                <div className="standard-item">
                  <strong>Chest</strong>
                  <span>31 inches minimum</span>
                  <span>2 inches expansion</span>
                </div>

                <div className="standard-item">
                  <strong>Eyesight</strong>
                  <span>6/6 with or without glasses</span>
                </div>
              </div>

              <h3>Common Physical Conditions Checked</h3>

              <p>
                Medical officers carefully inspect candidates for common
                physical deformities that may affect military training and
                operational performance.
              </p>

              <div className="medical-grid">
                <div className="medical-card">
                  <img
                    src="/images/medical-images/knockknees.png"
                    alt="Knock Knees"
                  />
                  <h4>Knock Knees</h4>
                  <p>
                    Knees touch each other while standing straight, causing
                    inward leg alignment.
                  </p>
                </div>

                <div className="medical-card">
                  <img
                    src="/images/medical-images/bowlegs.png"
                    alt="Bow Legs"
                  />
                  <h4>Bow Legs</h4>
                  <p>
                    Legs curve outward, creating a gap between the knees when
                    standing.
                  </p>
                </div>

                <div className="medical-card">
                  <img
                    src="/images/medical-images/flatfeet.png"
                    alt="Flat Feet"
                  />
                  <h4>Flat Feet</h4>
                  <p>
                    Reduced foot arch which may affect running, balance, and
                    endurance.
                  </p>
                </div>

                <div className="medical-card">
                  <img
                    src="/images/medical-images/deformation-chest.png"
                    alt="Fit Physical Condition"
                  />
                  <h4>chest deformities</h4>
                  <p>
                    Chest wall deformities are structural abnormalities of the
                    ribs, cartilage, and breastbone (sternum)
                  </p>
                </div>
              </div>

              <h3>ENT Examination</h3>

              <p>
                The Ear, Nose, and Throat (ENT) examination checks for
                infections, hearing issues, throat problems, and Deviated Nasal
                Septum (DNS). Candidates must have normal ENT health to meet
                military standards.
              </p>

              <h3>Surgical & General Physical Assessment</h3>

              <p>
                Medical officers also perform a general physical examination to
                identify conditions such as hernia, hydrocele, abnormal posture,
                or other issues that may affect military service.
              </p>

              <p>
                Blood pressure and general body condition are also evaluated
                during the screening process.
              </p>

              <div className="warning-box">
                <strong>Important:</strong> Candidates declared temporarily
                unfit may be referred to a Military Hospital (MH) for further
                review and specialist assessment before a final decision is
                made.
              </div>

              {/* <div className="cta-box">
                <h3>Check Your PMA Eligibility</h3>

                <p>
                  Understanding medical requirements before applying can help
                  you identify potential issues early and prepare confidently
                  for the PMA Long Course selection process.
                </p>

                <a href="/pma-test-preparation" className="cta-button">
                  View Complete PMA Preparation Guide →
                </a>
              </div> */}
              <div className="horizontal-ad">
                <Adsterra728x90 />
              </div>
            </section>

            {/* physical test  */}

            <section
              id="physical-test"
              className="article-card content-section"
            >
              <h2>Physical Test</h2>

              <p>
                Candidates who successfully clear the computerized test must
                appear in the Physical Test. The physical assessment is designed
                to evaluate a candidate's basic fitness, endurance, and ability
                to meet Pakistan Army standards.
              </p>

              <p>
                Passing all physical events is mandatory. Failure in any single
                event will result in Physical Test (PT) failure, and the
                candidate will not be issued an ISSB form.
              </p>

              <div className="info-grid">
                <div>✓ 1 KM Run</div>
                <div>✓ 15 Push-Ups</div>
                <div>✓ 15 Sit-Ups</div>
                <div>✓ All Events Mandatory</div>
              </div>

              <h3>1 KM Run</h3>

              <div className="physical-image">
                <img
                  src="/images/physical-test-images/running (1).png"
                  alt="PMA Long Course Running Test"
                />
              </div>

              <p>
                Candidates must complete a{" "}
                <strong>1 Kilometer Run within 8 minutes</strong>. This event
                measures cardiovascular endurance, stamina, and overall fitness.
              </p>

              <div className="requirement-box">
                <span>Required Standard</span>
                <strong>1 KM Run — 8 Minutes</strong>
              </div>

              <h3>Push-Ups</h3>

              <div className="physical-image">
                <img
                  src="/images/physical-test-images/pushups (1).png"
                  alt="PMA Long Course Push Ups Test"
                />
              </div>

              <p>
                Candidates are required to perform
                <strong> 15 Push-Ups within 2 minutes</strong>. This exercise
                evaluates upper body strength, endurance, and physical
                discipline.
              </p>

              <div className="requirement-box">
                <span>Required Standard</span>
                <strong>15 Push-Ups in 2 Minutes</strong>
              </div>

              <h3>Sit-Ups</h3>

              <div className="physical-image">
                <img
                  src="/images/physical-test-images/situps (1).png"
                  alt="PMA Long Course Sit Ups Test"
                />
              </div>

              <p>
                Candidates must perform
                <strong> 15 Sit-Ups within 2 minutes</strong>. This activity
                assesses abdominal strength, core stability, and endurance.
              </p>

              <div className="requirement-box">
                <span>Required Standard</span>
                <strong>15 Sit-Ups in 2 Minutes</strong>
              </div>

              <h3>Important Rule</h3>

              <p>
                Every physical event is compulsory. A candidate who fails even
                one event will be declared unsuccessful in the Physical Test and
                will not be issued an ISSB recommendation form.
              </p>

              <div className="warning-box">
                <strong>Important:</strong> Passing all physical standards is
                mandatory. There is no compensation between events. Failure in
                any single test results in Physical Test failure.
              </div>

              {/* <div className="cta-box">
                <h3>Prepare Before Your Physical Test</h3>

                <p>
                  Along with academic preparation, candidates should begin
                  physical training several weeks before the test. Consistent
                  running, push-up practice, and core strengthening exercises
                  can significantly improve performance.
                </p>

                <a href="/mock-tests" className="cta-button">
                  Practice PMA Mock Tests →
                </a>
              </div> */}
            </section>

            {/* initial interview  */}

            <section id="interview" className="article-card content-section">
              <h2>Initial Interview Process</h2>

              <p>
                Candidates who successfully clear the Computerized Test,
                Physical Test, and Medical Examination are called for the
                Initial Interview at the Army Selection and Recruitment Centre
                (AS&RC).
              </p>

              <p>
                The interview is conducted by the Selection & Recruitment
                Officer (S&RO) and a Psychologist. The purpose of this stage is
                to evaluate a candidate's confidence, personality, communication
                skills, awareness, and officer-like qualities before ISSB
                recommendation.
              </p>

              <div className="info-grid">
                <div>✓ Essay Writing</div>
                <div>✓ Personal Interview</div>
                <div>✓ Psychologist Assessment</div>
                <div>✓ Minimum 12/20 Marks Required</div>
              </div>

              <h3>Interview Day Flow</h3>

              <ol className="process-list">
                <li>
                  Candidates report to the AS&RC in proper interview dress and
                  with a neat, professional haircut.
                </li>

                <li>
                  Candidates are seated in a hall and provided forms to complete
                  personal, educational, family, and social information.
                </li>

                <li>Plain sheets are issued for English and Urdu essays.</li>

                <li>Essay topics are displayed on the board.</li>

                <li>
                  Candidates are usually given approximately 6 minutes for each
                  essay.
                </li>

                <li>
                  After essay completion, candidates wait for their interview
                  turn.
                </li>

                <li>
                  The S&RO and Psychologist conduct the interview and record
                  observations.
                </li>

                <li>
                  Candidates scoring below 12 marks out of 20 are declared
                  unsuccessful and are not issued ISSB forms.
                </li>
              </ol>

              <h3>Recommended Interview Dress</h3>

              <div className="requirement-box">
                <span>Best Interview Appearance</span>
                <strong>
                  Light-Colored Dress Shirt + Dark Pant + Formal Shoes + Proper
                  Haircut
                </strong>
              </div>

              <p>
                Candidates should maintain a clean appearance, polished shoes,
                trimmed nails, and professional grooming. Avoid flashy clothing,
                excessive accessories, or casual attire.
              </p>

              <h3>Essay Writing Test</h3>

              <p>
                Before the interview, every candidate writes one English essay
                and one Urdu essay. The objective is to evaluate expression,
                clarity of thought, vocabulary, and writing skills.
              </p>

              <div className="essay-grid">
                <div className="essay-card">
                  <h4>Sample English Topic</h4>
                  <p>
                    <strong>Role of Youth in National Development</strong>
                  </p>

                  <h5>Example Essay</h5>

                  <p>
                    Youth are the future of every nation. They possess energy,
                    creativity, and determination. The development of Pakistan
                    depends greatly on its young generation. Educated and
                    responsible youth can contribute through innovation,
                    leadership, and community service. They can strengthen the
                    economy and help solve national challenges. By focusing on
                    education and positive activities, young people can play a
                    vital role in building a stronger Pakistan.
                  </p>
                </div>

                <div className="essay-card">
                  <h4>نمونہ اردو موضوع</h4>

                  <p>
                    <strong>پاکستان کی ترقی میں نوجوانوں کا کردار</strong>
                  </p>

                  <h5>مثالی مضمون</h5>

                  <p>
                    نوجوان کسی بھی قوم کا قیمتی سرمایہ ہوتے ہیں۔ پاکستان کی ترقی
                    کا انحصار بھی نوجوان نسل پر ہے۔ تعلیم یافتہ اور ذمہ دار
                    نوجوان ملک کو ترقی کی راہ پر گامزن کر سکتے ہیں۔ وہ سائنس،
                    ٹیکنالوجی، تعلیم اور دفاع کے شعبوں میں اہم کردار ادا کرتے
                    ہیں۔ اگر نوجوان اپنی صلاحیتوں کو مثبت سمت میں استعمال کریں
                    تو پاکستان ایک مضبوط اور ترقی یافتہ ملک بن سکتا ہے۔
                  </p>
                </div>
              </div>

              <div className="warning-box">
                <strong>Important:</strong> These essays are only examples to
                help candidates understand structure and writing style. Do not
                memorize or copy them. Write your own ideas in the examination
                hall.
              </div>

              <h3>Interview Assessment Criteria</h3>

              <ul>
                <li>Expression and confidence in English and Urdu</li>
                <li>Knowledge of current affairs</li>
                <li>Knowledge of Pakistan Studies and Geography</li>
                <li>Personality and overall outlook</li>
                <li>Sports participation and extracurricular activities</li>
                <li>Hobbies and personal interests</li>
                <li>General attitude and officer-like qualities</li>
              </ul>

              <h3>Sample Interview Questions</h3>

              <div className="qa-card">
                <h4>Why do you want to join Pakistan Army?</h4>

                <p>
                  <strong>Example Answer:</strong> I want to join Pakistan Army
                  because I wish to serve my country, develop leadership
                  qualities, and contribute to national security while pursuing
                  a disciplined and meaningful career.
                </p>
              </div>

              <div className="qa-card">
                <h4>Tell us about yourself.</h4>

                <p>
                  <strong>Example Answer:</strong> I am a motivated student with
                  a strong interest in leadership, sports, and personal
                  development. I enjoy taking responsibility and working with
                  teams to achieve common goals.
                </p>
              </div>

              <div className="qa-card">
                <h4>What are your strengths?</h4>

                <p>
                  <strong>Example Answer:</strong> I am disciplined,
                  hardworking, and able to remain calm under pressure. I enjoy
                  learning new skills and adapting to challenges.
                </p>
              </div>

              <div className="qa-card">
                <h4>What is your weakness?</h4>

                <p>
                  <strong>Example Answer:</strong> I sometimes spend extra time
                  ensuring tasks are completed perfectly, but I am continuously
                  improving my time management skills.
                </p>
              </div>

              <div className="warning-box">
                <strong>Note:</strong> These answers are examples only.
                Interviewers value honesty and originality. Avoid memorized
                responses and answer according to your own experiences.
              </div>

              <h3>Social Merits & Demerits</h3>

              <p>
                Candidates are often required to mention positive and negative
                personal traits in their forms. Be honest and realistic.
              </p>

              <div className="traits-grid">
                <div className="trait-card">
                  <h4>Common Social Merits</h4>

                  <ul>
                    <li>Honest</li>
                    <li>Punctual</li>
                    <li>Responsible</li>
                    <li>Cooperative</li>
                    <li>Helpful</li>
                    <li>Disciplined</li>
                    <li>Confident</li>
                  </ul>
                </div>

                <div className="trait-card">
                  <h4>Common Social Demerits</h4>

                  <ul>
                    <li>Impatient</li>
                    <li>Overthinking</li>
                    <li>Shy in new environments</li>
                    <li>Perfectionist</li>
                    <li>Occasionally emotional</li>
                    <li>Sometimes hesitant in decision-making</li>
                  </ul>
                </div>
              </div>
<a
  href="/pdfs/pma-initial-interview-prep.pdf"
  download
  className="pdf-download-btn"
>
  📥 Download PDF Prepration Material
</a>
              {/* <div className="cta-box">
                <h3>Prepare for Your PMA Interview</h3>

                <p>
                  Practice interview questions, improve current affairs
                  knowledge, and strengthen your communication skills through
                  regular preparation.
                </p>

                <a href="/opi-preparation" className="cta-button">
                  Start OPI & Interview Preparation →
                </a>
              </div> */}
              <div className="horizontal-ad">
                <Adsterra728x90 />
              </div>
            </section>

            {/* issb introduction  */}
            <section id="issb" className="article-card content-section">
              <h2>ISSB Recommendation & Call Letter</h2>

              <p>
                After successfully clearing the Computerized Test, Medical
                Examination, Physical Test, and Initial Interview, candidates
                become eligible for ISSB recommendation.
              </p>

              <p>
                Candidates are required to complete and submit their ISSB forms
                and other required documents at the Army Selection and
                Recruitment Centre (AS&RC). Once the documentation process is
                completed, candidates must wait for their ISSB call letter.
              </p>

              <p>
                The ISSB call letter contains important details regarding the
                reporting date, center location, and instructions for the
                five-day assessment process. Call letters are issued according
                to the candidate's allocated ISSB center and schedule.
              </p>

              <h3>What is ISSB?</h3>

              <p>
                The Inter Services Selection Board (ISSB) is Pakistan's premier
                officer selection organization responsible for assessing the
                leadership potential, personality traits, and officer-like
                qualities of candidates applying for the Armed Forces of
                Pakistan.
              </p>

              <p>
                During ISSB, candidates undergo a comprehensive evaluation
                conducted by psychologists, group testing officers, and
                interviewing officers. The assessment is designed to determine
                whether a candidate possesses the qualities required to become a
                future military officer.
              </p>

              <div className="info-grid">
                <div>✓ Leadership Assessment</div>
                <div>✓ Psychological Evaluation</div>
                <div>✓ Group Tasks</div>
                <div>✓ Officer-Like Qualities</div>
              </div>

              <h3>ISSB Centers in Pakistan</h3>

              <p>
                Candidates may be called to one of the following ISSB centers
                depending on their allocated schedule:
              </p>

              <div className="issb-centers-grid">
                <div className="issb-center-card">
                  <h4>Gujranwala</h4>
                  <p>ISSB Gujranwala</p>
                </div>

                <div className="issb-center-card">
                  <h4>Malir, Karachi</h4>
                  <p>ISSB Karachi</p>
                </div>

                <div className="issb-center-card">
                  <h4>Kohat</h4>
                  <p>ISSB Kohat</p>
                </div>

                <div className="issb-center-card">
                  <h4>Quetta</h4>
                  <p>ISSB Quetta</p>
                </div>
              </div>

              <div className="requirement-box">
                <span>Next Stage</span>
                <strong>
                  Receive ISSB Call Letter → Report to ISSB Center → Five-Day
                  Assessment
                </strong>
              </div>

              <div className="cta-box">
                <h3>Prepare for ISSB with Confidence</h3>

                <p>
                  ISSB is completely different from the PMA Initial Test
                  process. Learn about Psychological Tests, GTO Tasks, Command
                  Tasks, Personal Interviews, Obstacles, Officer-Like Qualities
                  (OLQs), and expert preparation strategies in our detailed ISSB
                  guide.
                </p>

                <a href="/ISSB-1" className="cta-button">
                  Read Complete ISSB Guide →
                </a>
              </div>
            </section>
          </div>
        </section>
        <AdsterraNativeBanner />
      </main>
      <Footer />
    </>
  );
};

export default PmaInitialTestProcedure;
