import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
  FiArrowLeft,
  FiInfo,
  FiTarget,
  FiAward,
} from "react-icons/fi";

import "../../styles/notes/notesPages.css";

const mcqs = [
  {
    question: "Who is the current President of Pakistan as of September 2026?",
    options: [
      "Arif Alvi",
      "Asif Ali Zardari",
      "Mamnoon Hussain",
      "Sadiq Sanjrani",
    ],
    correct: 1,
    explanation:
      "Asif Ali Zardari is the current President of Pakistan. He took oath as the 14th President on 10 March 2024.",
  },
  {
    question: "Who is the current Prime Minister of Pakistan?",
    options: [
      "Imran Khan",
      "Nawaz Sharif",
      "Shehbaz Sharif",
      "Yousaf Raza Gilani",
    ],
    correct: 2,
    explanation:
      "Muhammad Shehbaz Sharif is the current Prime Minister of Pakistan.",
  },
  {
    question:
      "Who currently serves as Chief of Army Staff and concurrently as Chief of Defence Forces of Pakistan?",
    options: [
      "General Syed Asim Munir",
      "General Qamar Javed Bajwa",
      "General Raheel Sharif",
      "General Sahir Shamshad Mirza",
    ],
    correct: 0,
    explanation:
      "Field Marshal Syed Asim Munir serves as Chief of Army Staff and concurrently as Chief of Defence Forces. His CDF appointment was approved in December 2025 for five years.",
  },
  {
    question: "Who is the current Chief of Air Staff of Pakistan?",
    options: [
      "Air Chief Marshal Mujahid Anwar Khan",
      "Air Chief Marshal Sohail Aman",
      "Air Chief Marshal Zaheer Ahmed Baber Sidhu",
      "Air Chief Marshal Tahir Rafique Butt",
    ],
    correct: 2,
    explanation:
      "Air Chief Marshal Zaheer Ahmed Baber Sidhu is the current Chief of Air Staff. His service was extended for two years from the completion of his original tenure in March 2026.",
  },
  {
    question: "Who is the current Governor of Sindh?",
    options: [
      "Kamran Khan Tessori",
      "Imran Ismail",
      "Nehal Hashmi",
      "Ishrat-ul-Ibad",
    ],
    correct: 2,
    explanation:
      "Nehal Hashmi is the current Governor of Sindh. President Asif Ali Zardari approved his appointment in March 2026.",
  },
  {
    question: "Who is the current Chief Minister of Khyber Pakhtunkhwa?",
    options: [
      "Ali Amin Gandapur",
      "Mahmood Khan",
      "Muhammad Sohail Afridi",
      "Pervez Khattak",
    ],
    correct: 2,
    explanation:
      "Muhammad Sohail Afridi became Chief Minister of Khyber Pakhtunkhwa on 14 October 2025 and remains in office as of September 2026.",
  },
  {
    question: "Who is the current Chief Minister of Gilgit-Baltistan?",
    options: [
      "Haji Gulbar Khan",
      "Khalid Khurshid",
      "Yar Muhammad",
      "Amjad Hussain Azar",
    ],
    correct: 3,
    explanation:
      "Amjad Hussain Azar became Chief Minister of Gilgit-Baltistan in July 2026 after succeeding caretaker Chief Minister Yar Muhammad.",
  },
  {
    question: "Who is the current Prime Minister of Azad Jammu and Kashmir?",
    options: [
      "Faisal Mumtaz Rathore",
      "Chaudhry Anwar-ul-Haq",
      "Iftikhar Ali Gillani",
      "Raja Farooq Haider",
    ],
    correct: 2,
    explanation:
      "Barrister Syed Iftikhar Ali Gillani was sworn in as Prime Minister of AJK on 28 August 2026.",
  },
  {
    question: "Who is the current Acting President of Azad Jammu and Kashmir?",
    options: [
      "Chaudhry Latif Akbar",
      "Chaudhry Tariq Farooq",
      "Faisal Mumtaz Rathore",
      "Sultan Mahmood Chaudhry",
    ],
    correct: 1,
    explanation:
      "Chaudhry Tariq Farooq is serving as Acting President of AJK as of September 2026. He administered the oath to the new AJK Prime Minister and later to the cabinet.",
  },
  {
    question: "Operation Azm-e-Istehkam was approved in which year?",
    options: ["2022", "2023", "2024", "2025"],
    correct: 2,
    explanation:
      "Operation Azm-e-Istehkam was approved by Prime Minister Shehbaz Sharif on 22 June 2024 as a renewed national counter-terrorism campaign.",
  },
  {
    question: "Operation Ghazab lil-Haq began in which year?",
    options: ["2024", "2025", "2026", "2023"],
    correct: 2,
    explanation:
      "Operation Ghazab lil-Haq began in February 2026 in response to Afghan Taliban aggression. Pakistan described it as an immediate response to the attacks.",
  },
  {
    question: "The Army Public School Peshawar attack occurred on:",
    options: [
      "16 December 2014",
      "16 November 2014",
      "12 January 2015",
      "9 October 2014",
    ],
    correct: 0,
    explanation:
      "The APS Peshawar terrorist attack occurred on 16 December 2014. Current Pakistani commemorative sources commonly cite around 149 people killed, including 132 schoolchildren.",
  },
  {
    question: "How many schoolchildren were killed in the APS Peshawar attack?",
    options: ["112", "120", "132", "134"],
    correct: 2,
    explanation:
      "Current Pakistani official commemorative sources cite 132 schoolchildren among approximately 149 people killed in the APS tragedy.",
  },
  {
    question: "Who is the current President of Iran?",
    options: [
      "Ebrahim Raisi",
      "Mohammad Mokhber",
      "Masoud Pezeshkian",
      "Saeed Jalili",
    ],
    correct: 2,
    explanation:
      "Masoud Pezeshkian became President of Iran in July 2024 following the death of Ebrahim Raisi.",
  },
  {
    question: "Who is the current Supreme Leader of Iran as of September 2026?",
    options: [
      "Ali Khamenei",
      "Mojtaba Khamenei",
      "Ebrahim Raisi",
      "Mohammad Khatami",
    ],
    correct: 1,
    explanation:
      "Mojtaba Khamenei became Iran's Supreme Leader in March 2026 after the death of his father, Ali Khamenei.",
  },
  {
    question:
      "On which date did the United States and Israel launch their major 2026 military campaign against Iran?",
    options: [
      "28 February 2026",
      "15 January 2026",
      "10 March 2026",
      "1 April 2026",
    ],
    correct: 0,
    explanation:
      "The major US-Israeli military campaign against Iran began on 28 February 2026. The US operation was named Operation Epic Fury.",
  },
  {
    question: "Iran became a full member of the Shanghai Cooperation Organisation in:",
    options: ["2021", "2022", "2023", "2024"],
    correct: 2,
    explanation:
      "Iran became a full member of the Shanghai Cooperation Organisation in 2023.",
  },
  {
    question: "Iran became a full member of BRICS in:",
    options: ["2022", "2023", "2024", "2025"],
    correct: 2,
    explanation:
      "Iran joined BRICS as a full member in 2024 as part of the group's major expansion.",
  },
  {
    question: "The Strait of Hormuz connects the:",
    options: [
      "Red Sea and Arabian Sea",
      "Persian Gulf and Gulf of Oman",
      "Caspian Sea and Arabian Sea",
      "Mediterranean Sea and Red Sea",
    ],
    correct: 1,
    explanation:
      "The Strait of Hormuz connects the Persian Gulf with the Gulf of Oman and provides access toward the Arabian Sea.",
  },
  {
    question:
      "Approximately what share of global petroleum liquids consumption passed through the Strait of Hormuz in 2024?",
    options: ["5%", "10%", "20%", "40%"],
    correct: 2,
    explanation:
      "EIA data show that around 20% of global petroleum liquids consumption passed through the Strait of Hormuz in 2024.",
  },
  {
    question:
      "According to EIA data, approximately how much oil flowed through the Strait of Hormuz in Q2 2026?",
    options: [
      "4.9 million barrels per day",
      "10 million barrels per day",
      "20.9 million barrels per day",
      "30 million barrels per day",
    ],
    correct: 0,
    explanation:
      "EIA's August 2026 data show Strait of Hormuz oil flows at approximately 4.9 million barrels per day in Q2 2026, a major decline from the levels recorded before the conflict.",
  },
  {
    question:
      "Which two permanent members voted against the UN Security Council draft resolution on Strait of Hormuz maritime security in April 2026?",
    options: [
      "France and Russia",
      "China and Russia",
      "United States and China",
      "United Kingdom and Russia",
    ],
    correct: 1,
    explanation:
      "The draft resolution S/2026/273 was not adopted. China and Russia voted against it; France voted in favour.",
  },
  {
    question: "Who is the current Prime Minister of the United Kingdom?",
    options: [
      "Keir Starmer",
      "Rishi Sunak",
      "Boris Johnson",
      "Andy Burnham",
    ],
    correct: 3,
    explanation:
      "Andy Burnham became Prime Minister of the United Kingdom on 20 July 2026.",
  },
  {
    question: "Who is the current Prime Minister of India?",
    options: [
      "Rahul Gandhi",
      "Narendra Modi",
      "Amit Shah",
      "Manmohan Singh",
    ],
    correct: 1,
    explanation:
      "Narendra Modi is the current Prime Minister of India and began his third consecutive term in June 2024.",
  },
  {
    question: "Who is the current President of the United States?",
    options: [
      "Joe Biden",
      "Donald Trump",
      "Kamala Harris",
      "Mike Pence",
    ],
    correct: 1,
    explanation:
      "Donald Trump is the current President of the United States and the 47th President.",
  },
  {
    question: "Pakistan's nuclear tests were conducted in:",
    options: [
      "May 1997",
      "May 1998",
      "June 1998",
      "August 1998",
    ],
    correct: 1,
    explanation:
      "Pakistan conducted its nuclear tests in May 1998. Five tests were conducted on 28 May and another test followed on 30 May.",
  },
  {
    question: "Pakistan's nuclear doctrine is commonly described as:",
    options: [
      "No First Use",
      "Credible Minimum Deterrence",
      "Maximum Deterrence",
      "Pre-emptive Nuclear Strike",
    ],
    correct: 1,
    explanation:
      "Pakistan officially describes its nuclear posture in terms of credible minimum deterrence.",
  },
  {
    question: "The Constitution of Pakistan was passed by the National Assembly in:",
    options: ["1956", "1962", "1973", "1985"],
    correct: 2,
    explanation:
      "The 1973 Constitution was passed by the National Assembly on 10 April 1973, assented to on 12 April, and promulgated on 14 August 1973.",
  },
  {
    question: "The 18th Constitutional Amendment of Pakistan was passed in:",
    options: ["2008", "2009", "2010", "2012"],
    correct: 2,
    explanation:
      "The 18th Constitutional Amendment became part of the Constitution in April 2010. It abolished the Concurrent Legislative List and devolved its 47 subjects to the provinces.",
  },
  {
    question:
      "Who proclaimed martial law in Pakistan on 7 October 1958?",
    options: [
      "General Ayub Khan",
      "General Yahya Khan",
      "President Iskander Mirza",
      "General Zia-ul-Haq",
    ],
    correct: 2,
    explanation:
      "President Iskander Mirza abrogated the 1956 Constitution and proclaimed martial law on 7 October 1958, appointing General Ayub Khan as Chief Martial Law Administrator. Ayub Khan then removed Mirza on 27 October 1958.",
  },
  {
    question:
      "Pakistan's first Prime Minister Liaquat Ali Khan was assassinated in:",
    options: ["Karachi", "Lahore", "Rawalpindi", "Peshawar"],
    correct: 2,
    explanation:
      "Liaquat Ali Khan was assassinated on 16 October 1951 at Company Bagh in Rawalpindi, now known as Liaquat Bagh.",
  },
  {
    question:
      "Article 58(2)(b), which gave the President power to dissolve the National Assembly, was inserted by the:",
    options: [
      "8th Amendment",
      "13th Amendment",
      "17th Amendment",
      "18th Amendment",
    ],
    correct: 0,
    explanation:
      "The 8th Amendment inserted Article 58(2)(b). The provision was later removed by the 13th Amendment in 1997.",
  },
];

const quickQuestions = [
  {
    question: "Current PM of Pakistan → ?",
    answer: "Shehbaz Sharif",
    explanation:
      "Muhammad Shehbaz Sharif is the current Prime Minister of Pakistan.",
  },
  {
    question: "Current Supreme Leader of Iran → ?",
    answer: "Mojtaba Khamenei",
    explanation:
      "Mojtaba Khamenei became Supreme Leader in March 2026 after the death of Ali Khamenei.",
  },
  {
    question: "Hormuz connects → ?",
    answer: "Persian Gulf + Gulf of Oman",
    explanation:
      "The Strait of Hormuz is the strategic maritime chokepoint connecting the Persian Gulf with the Gulf of Oman.",
  },
];

const getOptionLetter = (index) =>
  String.fromCharCode(65 + index);

const CurrentAffairs = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const question = mcqs[currentQuestion];
  const answered = selectedAnswer !== null;
  const isLastQuestion =
    currentQuestion === mcqs.length - 1;

  const handleAnswer = (index) => {
    if (answered) return;

    setSelectedAnswer(index);

    if (index === question.correct) {
      setScore((previous) => previous + 1);
    }
  };

  const handleNext = () => {
    if (!answered) return;

    if (!isLastQuestion) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((previous) => previous - 1);
    setSelectedAnswer(null);
  };

  const restartPractice = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
  };

  const practiceFinished =
    isLastQuestion && answered;

  return (
    <main className="synonyms-page">
      <div className="synonyms-container">

        {/* Breadcrumb */}

        <nav className="synonyms-breadcrumb">
          <Link to="/notes">Notes Hub</Link>
          <FiArrowRight />
          <Link to="/notes">Current Affairs</Link>
          <FiArrowRight />
          <strong>Pakistan &amp; International Affairs</strong>
        </nav>

        {/* Hero */}

        <section className="synonyms-hero">
          <div className="synonyms-hero-icon">
            <FiBookOpen />
          </div>

          <div className="synonyms-hero-content">
            <span className="synonyms-eyebrow">
              CURRENT AFFAIRS &amp; PAKISTAN STUDIES
            </span>

            <h1>Pakistan &amp; International Affairs</h1>

            <p>
              Study important current affairs, Pakistan leadership,
              national security developments, Iran, the Strait of
              Hormuz, international leaders, nuclear affairs, and
              constitutional facts for competitive and armed-forces
              examinations.
            </p>
          </div>
        </section>

        {/* Verification Notice */}

        <section className="notes-section">
          <div className="content-card">
            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Current Affairs Update</strong>

                <p>
                  This page is verified for
                  <strong> 15 September 2026</strong>.
                </p>

                <span>
                  Current officeholders and fast-changing international
                  developments should always be checked against the latest
                  official information before an examination.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">
                INTRODUCTION
              </span>

              <h2>What Should You Know?</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              <strong>Current Affairs</strong> questions test your
              awareness of important political, military, economic,
              diplomatic and international developments.
            </p>

            <p>
              For armed-forces and competitive examinations, special
              attention should be given to current officeholders,
              major operations, international conflicts, strategic
              locations, organizations, important dates and Pakistan's
              constitutional history.
            </p>

            <div className="info-box">
              <FiTarget />

              <div>
                <strong>Exam Rule</strong>

                <p>
                  Memorize names together with their office and
                  relevant date.
                </p>

                <span>
                  For example: Muhammad Sohail Afridi → CM KP →
                  14 October 2025.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Current Leadership */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">02</span>

            <div>
              <span className="section-label">
                CURRENT LEADERSHIP
              </span>

              <h2>Important Officeholders</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="facts-table-wrapper">
              <table className="facts-table">
                <thead>
                  <tr>
                    <th>Office</th>
                    <th>Current Holder</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>President of Pakistan</td>
                    <td>Asif Ali Zardari</td>
                  </tr>

                  <tr>
                    <td>Prime Minister of Pakistan</td>
                    <td>Shehbaz Sharif</td>
                  </tr>

                  <tr>
                    <td>COAS / Chief of Defence Forces</td>
                    <td>Field Marshal Syed Asim Munir</td>
                  </tr>

                  <tr>
                    <td>Chief of Air Staff</td>
                    <td>Air Chief Marshal Zaheer Ahmed Baber Sidhu</td>
                  </tr>

                  <tr>
                    <td>Governor Punjab</td>
                    <td>Sardar Saleem Haider Khan</td>
                  </tr>

                  <tr>
                    <td>Governor Sindh</td>
                    <td>Nehal Hashmi</td>
                  </tr>

                  <tr>
                    <td>Governor KP</td>
                    <td>Faisal Karim Kundi</td>
                  </tr>

                  <tr>
                    <td>Governor Balochistan</td>
                    <td>Jaffar Khan Mandokhail</td>
                  </tr>

                  <tr>
                    <td>Governor Gilgit-Baltistan</td>
                    <td>Syed Mehdi Shah</td>
                  </tr>

                  <tr>
                    <td>CM Punjab</td>
                    <td>Maryam Nawaz Sharif</td>
                  </tr>

                  <tr>
                    <td>CM Sindh</td>
                    <td>Murad Ali Shah</td>
                  </tr>

                  <tr>
                    <td>CM Khyber Pakhtunkhwa</td>
                    <td>Muhammad Sohail Afridi</td>
                  </tr>

                  <tr>
                    <td>CM Balochistan</td>
                    <td>Sarfraz Ahmed Bugti</td>
                  </tr>

                  <tr>
                    <td>CM Gilgit-Baltistan</td>
                    <td>Amjad Hussain Azar</td>
                  </tr>

                  <tr>
                    <td>AJK Prime Minister</td>
                    <td>Iftikhar Ali Gillani</td>
                  </tr>

                  <tr>
                    <td>AJK Acting President</td>
                    <td>Chaudhry Tariq Farooq</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Important Concepts */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">03</span>

            <div>
              <span className="section-label">
                IMPORTANT TOPICS
              </span>

              <h2>High-Yield Current Affairs Areas</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">

              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Pakistan Leadership</h3>

                  <p>
                    Learn the current President, Prime Minister,
                    military chiefs, provincial governors and chief
                    ministers. These names can change, so always
                    attach the date of verification.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Counter-Terrorism Operations</h3>

                  <p>
                    Know the difference between Operation
                    Azm-e-Istehkam in 2024 and Operation Ghazab
                    lil-Haq in 2026. Do not mix their dates or
                    objectives.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Iran Developments</h3>

                  <p>
                    Remember the deaths of Ebrahim Raisi and
                    Hossein Amir-Abdollahian in 2024, Masoud
                    Pezeshkian's presidency, and the change of
                    Supreme Leader from Ali Khamenei to Mojtaba
                    Khamenei in 2026.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Strait of Hormuz</h3>

                  <p>
                    Understand its location, strategic importance,
                    oil and LNG flows, Asian dependence and its
                    role in the 2026 regional crisis.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>05</span>

                <div>
                  <h3>International Organizations</h3>

                  <p>
                    Know Iran's full membership in the SCO from
                    2023 and BRICS from 2024, as well as important
                    United Nations developments connected with
                    regional security.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>06</span>

                <div>
                  <h3>Pakistan Nuclear Affairs</h3>

                  <p>
                    Remember the 1998 nuclear tests, Chagai/Ras
                    Koh, Youm-e-Takbeer and Pakistan's stated
                    principle of credible minimum deterrence.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Quick Practice */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">04</span>

            <div>
              <span className="section-label">
                QUICK PRACTICE
              </span>

              <h2>Remember These Facts</h2>
            </div>
          </div>

          <div className="quick-question-grid">
            {quickQuestions.map((item, index) => (
              <div
                className="quick-question-card"
                key={index}
              >
                <span>
                  QUICK FACT {index + 1}
                </span>

                <h3>{item.question}</h3>

                <div className="quick-answer">
                  <FiCheckCircle />
                  <strong>{item.answer}</strong>
                </div>

                <p>{item.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pakistan Security */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">05</span>

            <div>
              <span className="section-label">
                PAKISTAN SECURITY
              </span>

              <h2>Important Operations &amp; Events</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">

              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Operation Azm-e-Istehkam — 2024</h3>

                  <p>
                    Approved in June 2024 as a renewed,
                    multi-domain national counter-terrorism
                    campaign. The government described it as a
                    whole-of-system effort rather than simply
                    another large-scale population-displacement
                    operation.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Operation Ghazab lil-Haq — 2026</h3>

                  <p>
                    Began in February 2026 during a serious
                    confrontation involving Afghanistan. Pakistan
                    described its military response as being
                    directed against Afghan Taliban aggression and
                    also reported strikes against militant
                    infrastructure.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>APS Peshawar Attack — 16 December 2014</h3>

                  <p>
                    The TTP attack on Army Public School Peshawar
                    became one of Pakistan's defining national
                    tragedies. Current Pakistani commemorative
                    sources commonly cite approximately 149 deaths,
                    including 132 schoolchildren.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Iran */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">06</span>

            <div>
              <span className="section-label">
                IRAN 2024–2026
              </span>

              <h2>Major Developments</h2>
            </div>
          </div>

          <div className="content-card">

            <div className="concept-list">

              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Ebrahim Raisi</h3>

                  <p>
                    Iranian President Ebrahim Raisi died in a
                    helicopter crash on 19 May 2024.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Masoud Pezeshkian</h3>

                  <p>
                    Masoud Pezeshkian became President of Iran in
                    July 2024 following the presidential election
                    held after Raisi's death.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Mojtaba Khamenei</h3>

                  <p>
                    Mojtaba Khamenei became Iran's Supreme Leader
                    in March 2026 after the death of Ali Khamenei.
                    This is an important current-affairs update
                    because older preparation material may still
                    list Ali Khamenei.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Operation Epic Fury</h3>

                  <p>
                    The United States named its 2026 military
                    operation against Iran Operation Epic Fury.
                    The major campaign began on 28 February 2026.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>05</span>

                <div>
                  <h3>SCO and BRICS</h3>

                  <p>
                    Iran became a full SCO member in 2023 and
                    joined BRICS as a full member in 2024.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Hormuz */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">07</span>

            <div>
              <span className="section-label">
                STRAIT OF HORMUZ
              </span>

              <h2>Why Is Hormuz Important?</h2>
            </div>
          </div>

          <div className="content-card">

            <p>
              The <strong>Strait of Hormuz</strong> is a strategic
              maritime chokepoint between Iran and Oman. It connects
              the Persian Gulf with the Gulf of Oman and therefore
              provides access to the Arabian Sea and wider Indian
              Ocean.
            </p>

            <div className="facts-table-wrapper">
              <table className="facts-table">
                <thead>
                  <tr>
                    <th>Fact</th>
                    <th>Key Point</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Location</td>
                    <td>Between Iran and Oman</td>
                  </tr>

                  <tr>
                    <td>Connects</td>
                    <td>Persian Gulf → Gulf of Oman</td>
                  </tr>

                  <tr>
                    <td>2024 oil flow</td>
                    <td>About 20 million barrels/day</td>
                  </tr>

                  <tr>
                    <td>1H 2025 oil flow</td>
                    <td>About 20.9 million barrels/day</td>
                  </tr>

                  <tr>
                    <td>Q2 2026 oil flow</td>
                    <td>About 4.9 million barrels/day</td>
                  </tr>

                  <tr>
                    <td>Global importance</td>
                    <td>
                      Around one-fifth of global petroleum liquids
                      consumption and a major share of global
                      maritime oil and LNG trade
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Exam Tip</strong>

                <p>
                  Do not memorize only "20–25%".
                </p>

                <span>
                  Remember the distinction: about 20% of global
                  petroleum liquids consumption and about one-quarter
                  of global maritime oil trade passed through Hormuz
                  in the relevant pre-conflict data.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* International Leaders */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">08</span>

            <div>
              <span className="section-label">
                WORLD LEADERS
              </span>

              <h2>Important Current Leaders</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="facts-table-wrapper">
              <table className="facts-table">
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Current Leader</th>
                    <th>Position</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>United States</td>
                    <td>Donald Trump</td>
                    <td>President</td>
                  </tr>

                  <tr>
                    <td>United Kingdom</td>
                    <td>Andy Burnham</td>
                    <td>Prime Minister</td>
                  </tr>

                  <tr>
                    <td>India</td>
                    <td>Narendra Modi</td>
                    <td>Prime Minister</td>
                  </tr>

                  <tr>
                    <td>Russia</td>
                    <td>Vladimir Putin</td>
                    <td>President</td>
                  </tr>

                  <tr>
                    <td>Iran</td>
                    <td>Masoud Pezeshkian</td>
                    <td>President</td>
                  </tr>

                  <tr>
                    <td>Iran</td>
                    <td>Mojtaba Khamenei</td>
                    <td>Supreme Leader</td>
                  </tr>

                  <tr>
                    <td>China</td>
                    <td>Xi Jinping</td>
                    <td>President</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="info-box">
              <FiTarget />

              <div>
                <strong>Important Update</strong>

                <p>
                  Older current-affairs books may contain previous
                  officeholders.
                </p>

                <span>
                  Always revise leadership questions close to the
                  examination date.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Nuclear & Constitution */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">09</span>

            <div>
              <span className="section-label">
                PAKISTAN HISTORY &amp; CONSTITUTION
              </span>

              <h2>Must-Know Facts</h2>
            </div>
          </div>

          <div className="content-card">

            <div className="concept-list">

              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Pakistan Nuclear Tests</h3>

                  <p>
                    Pakistan conducted five nuclear tests on
                    28 May 1998 and another on 30 May 1998.
                    The first series took place at Ras Koh Hills
                    in the Chagai district of Balochistan.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Youm-e-Takbeer</h3>

                  <p>
                    28 May is observed as Youm-e-Takbeer in
                    remembrance of Pakistan's 1998 nuclear tests.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Credible Minimum Deterrence</h3>

                  <p>
                    Pakistan's official statements describe its
                    nuclear posture using the principle of
                    credible minimum deterrence.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>1973 Constitution</h3>

                  <p>
                    The Constitution was passed by the National
                    Assembly on 10 April 1973, assented to on
                    12 April and promulgated on 14 August 1973.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>05</span>

                <div>
                  <h3>18th Constitutional Amendment</h3>

                  <p>
                    The 18th Amendment became part of the
                    Constitution in 2010 and abolished the
                    Concurrent Legislative List, devolving its
                    47 subjects to the provinces.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>06</span>

                <div>
                  <h3>1958 Martial Law</h3>

                  <p>
                    Iskander Mirza proclaimed martial law on
                    7 October 1958 and appointed Ayub Khan as
                    Chief Martial Law Administrator. Ayub Khan
                    subsequently removed Mirza on 27 October.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>07</span>

                <div>
                  <h3>Liaquat Ali Khan</h3>

                  <p>
                    Pakistan's first Prime Minister was
                    assassinated on 16 October 1951 at Company
                    Bagh in Rawalpindi, later renamed Liaquat Bagh.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>08</span>

                <div>
                  <h3>8th Constitutional Amendment</h3>

                  <p>
                    The 8th Amendment inserted Article 58(2)(b),
                    giving the President the power to dissolve
                    the National Assembly under specified
                    constitutional circumstances. It was removed
                    by the 13th Amendment in 1997.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Exam Strategy */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">10</span>

            <div>
              <span className="section-label">
                EXAM STRATEGY
              </span>

              <h2>How to Prepare Current Affairs</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Memorize Current Names</strong>

                <p>
                  Focus on President, PM, military chiefs,
                  governors and chief ministers.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Remember Dates</strong>

                <p>
                  Link every major event with its exact year or
                  date instead of memorizing the event alone.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Study Strategic Locations</strong>

                <p>
                  Learn places such as Chagai, Hormuz, Bab
                  el-Mandeb and important regional locations.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Separate Similar Events</strong>

                <p>
                  Do not confuse Azm-e-Istehkam 2024 with
                  Ghazab lil-Haq 2026.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Update Old Notes</strong>

                <p>
                  Current-affairs material becomes outdated when
                  governments or officeholders change.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Practice MCQs</strong>

                <p>
                  After studying the facts, solve MCQs without
                  looking at the answers.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Reading Questions */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">11</span>

            <div>
              <span className="section-label">
                READING QUESTIONS
              </span>

              <h2>Current Affairs Practice</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Study the questions carefully. The correct option is
              highlighted so that you can review the important facts
              before attempting the interactive practice below.
            </p>
          </div>

          <div className="reading-questions">

            {mcqs.map((item, questionIndex) => (
              <article
                className="reading-question"
                key={questionIndex}
              >
                <div className="reading-question-header">
                  <span className="reading-question-number">
                    Q{questionIndex + 1}
                  </span>

                  <h3>{item.question}</h3>
                </div>

                <div className="reading-options">

                  {item.options.map((option, optionIndex) => {
                    const isCorrect =
                      optionIndex === item.correct;

                    return (
                      <div
                        className={`reading-option ${
                          isCorrect ? "correct" : ""
                        }`}
                        key={optionIndex}
                      >
                        <span className="option-label">
                          {getOptionLetter(optionIndex)}
                        </span>

                        <span className="option-text">
                          {option}
                        </span>

                        {isCorrect && (
                          <FiCheckCircle className="correct-icon" />
                        )}
                      </div>
                    );
                  })}

                </div>

                <div className="reading-answer">

                  <div className="answer-title">
                    <FiCheckCircle />
                    <strong>Correct Answer</strong>
                  </div>

                  <p>
                    {getOptionLetter(item.correct)}.{" "}
                    {item.options[item.correct]}
                  </p>

                </div>

                <div className="reading-explanation">

                  <div className="explanation-title">
                    <FiInfo />
                    <strong>Explanation</strong>
                  </div>

                  <p>{item.explanation}</p>

                </div>
              </article>
            ))}

          </div>
        </section>

        {/* Interactive Practice */}

        <section className="practice-section">

          <div className="practice-header">

            <div>
              <span className="section-label">
                INTERACTIVE PRACTICE
              </span>

              <h2>Test Your Current Affairs</h2>

              <p>
                Answer each question without checking your notes.
                You will receive instant feedback after every answer.
              </p>
            </div>

            <div className="practice-progress">
              <strong>{currentQuestion + 1}</strong>
              <span> / {mcqs.length}</span>
            </div>

          </div>

          {!practiceFinished ? (
            <div className="mcq-card">

              <div className="mcq-top">
                <span>
                  QUESTION {currentQuestion + 1}
                </span>

                <span>
                  Score: {score}
                </span>
              </div>

              <h3>{question.question}</h3>

              <div className="mcq-options">

                {question.options.map((option, index) => {

                  const isSelected =
                    selectedAnswer === index;

                  const isCorrect =
                    index === question.correct;

                  const isWrong =
                    answered &&
                    isSelected &&
                    !isCorrect;

                  return (
                    <button
                      type="button"
                      key={index}
                      className={`mcq-option ${
                        isCorrect && answered
                          ? "correct"
                          : ""
                      } ${isWrong ? "wrong" : ""}`}
                      onClick={() => handleAnswer(index)}
                      disabled={answered}
                    >
                      <span className="option-letter">
                        {getOptionLetter(index)}
                      </span>

                      <span className="option-text">
                        {option}
                      </span>

                      {answered && isCorrect && (
                        <FiCheckCircle className="answer-icon" />
                      )}

                      {isWrong && (
                        <FiXCircle className="answer-icon" />
                      )}
                    </button>
                  );
                })}

              </div>

              {answered && (
                <div
                  className={`answer-feedback ${
                    selectedAnswer === question.correct
                      ? "feedback-correct"
                      : "feedback-wrong"
                  }`}
                >
                  <div className="feedback-title">

                    {selectedAnswer === question.correct ? (
                      <>
                        <FiCheckCircle />
                        Correct Answer
                      </>
                    ) : (
                      <>
                        <FiXCircle />
                        Incorrect Answer
                      </>
                    )}

                  </div>

                  <p>
                    Correct answer:{" "}
                    <strong>
                      {getOptionLetter(question.correct)}.{" "}
                      {question.options[question.correct]}
                    </strong>
                  </p>

                  <div className="explanation">
                    <strong>Explanation</strong>

                    <p>
                      {question.explanation}
                    </p>
                  </div>

                </div>
              )}

              <div className="mcq-navigation">

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  <FiArrowLeft />
                  Previous
                </button>

                <button
                  type="button"
                  className="primary-btn"
                  onClick={handleNext}
                  disabled={!answered}
                >
                  {isLastQuestion
                    ? "Finish"
                    : "Next"}

                  <FiArrowRight />
                </button>

              </div>

            </div>
          ) : (
            <div className="practice-result">

              <div className="result-icon">
                <FiAward />
              </div>

              <span className="section-label">
                PRACTICE COMPLETE
              </span>

              <h2>Current Affairs Result</h2>

              <div className="result-score">
                <strong>{score}</strong>
                <span> / {mcqs.length}</span>
              </div>

              <p>
                You completed all {mcqs.length} current-affairs
                questions. Review the explanations and repeat the
                practice until you can answer the questions quickly.
              </p>

              <button
                type="button"
                className="primary-btn"
                onClick={restartPractice}
              >
                <FiArrowLeft />
                Practice Again
              </button>

            </div>
          )}

        </section>

        {/* Related Topics */}

        <section className="related-section">

          <span className="section-label">
            CONTINUE LEARNING
          </span>

          <h2>Related Notes</h2>

          <div className="related-links">

            <Link to="/notes/verbal/jumbled-words">
              Jumbled Words
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/analogies">
              Analogies
              <FiArrowRight />
            </Link>

            <Link to="/notes/verbal/coding-decoding">
              Coding &amp; Decoding
              <FiArrowRight />
            </Link>

            <Link to="/notes">
              Notes Hub
              <FiArrowRight />
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
};

export default CurrentAffairs;