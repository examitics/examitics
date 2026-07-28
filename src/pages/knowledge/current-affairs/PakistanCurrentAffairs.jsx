import { useEffect, useState } from "react";

import {
  FiBook,
  FiClock,
  FiGlobe,
  FiTrendingUp,
  FiShield,
  FiUsers,
  FiFlag,
  FiAward,
  FiHelpCircle,
  FiCheckCircle,
  FiBriefcase,
  FiActivity,
  FiBarChart2,
  FiTarget,
} from "react-icons/fi";

import Navbar from "../../../components/layout/navbar";
import Footer from "../../../components/layout/footer";
import BreadcrumbSchema from "../../../components/seo/BreadcrumbSchema";
import MCQCard from "../../../components/knowledge/MCQCard";

// import "../../MotorwaysOfPakistan.css";
import '../general-knowledge/MotorwaysOfPakistan.css'

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: FiBook,
  },
  {
    id: "importance",
    title: "Importance",
    icon: FiCheckCircle,
  },
  {
    id: "timeline",
    title: "Timeline",
    icon: FiClock,
  },
  {
    id: "government",
    title: "Government",
    icon: FiUsers,
  },
  {
    id: "economy",
    title: "Economy",
    icon: FiTrendingUp,
  },
  {
    id: "foreign-relations",
    title: "Foreign Relations",
    icon: FiGlobe,
  },
  {
    id: "defence",
    title: "Defence",
    icon: FiShield,
  },
  {
    id: "science",
    title: "Science",
    icon: FiActivity,
  },
  {
    id: "environment",
    title: "Environment",
    icon: FiFlag,
  },
  {
    id: "sports",
    title: "Sports",
    icon: FiAward,
  },
  {
    id: "organizations",
    title: "Organizations",
    icon: FiBriefcase,
  },
  {
    id: "projects",
    title: "National Projects",
    icon: FiTarget,
  },
  {
    id: "facts",
    title: "Important Facts",
    icon: FiCheckCircle,
  },
  {
    id: "latest",
    title: "Latest Updates",
    icon: FiBarChart2,
  },
  {
    id: "faq",
    title: "FAQs",
    icon: FiHelpCircle,
  },
  {
    id: "practicemcq",
    title: "Practice MCQs",
    icon: FiHelpCircle,
  },
];

const PakistanCurrentAffairs = () => {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "-140px 0px -60% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.examitics.com/",
          },
          {
            name: "Knowledge Hub",
            url: "https://www.examitics.com/knowledgehub",
          },
          {
            name: "Pakistan Current Affairs",
            url: "https://www.examitics.com/knowledge/current-affairs/pakistan-current-affairs",
          },
        ]}
      />

      <Navbar />

      <main className="motorways-page">
        {/* HERO */}

        <section className="motorways-hero">
          <div className="container-custom">

            <span className="hero-badge">
              Pakistan Current Affairs • Updated Regularly
            </span>

            <h1>Pakistan Current Affairs 2026</h1>

            <p>
              Stay updated with the latest developments in Pakistan including
              government, politics, economy, foreign relations, defence,
              science & technology, climate, sports and major national
              projects. This comprehensive guide is specially designed for
              PMA Long Course, ISSB, CSS, PMS, FPSC, PPSC, ASF, FIA, Police,
              NTS and all competitive examinations where Pakistan Current
              Affairs play a vital role.
            </p>

            <div className="hero-stats">

              <div className="hero-stat">
                <strong>2026</strong>
                <span>Latest Coverage</span>
              </div>

              <div className="hero-stat">
                <strong>15+</strong>
                <span>Major Topics</span>
              </div>

              <div className="hero-stat">
                <strong>60+</strong>
                <span>Practice MCQs</span>
              </div>

              <div className="hero-stat">
                <strong>Monthly</strong>
                <span>Updated</span>
              </div>

            </div>

          </div>
        </section>

        {/* STICKY NAVIGATION */}

        <div className="motorways-sticky">
          <div className="container-custom">

            <div className="motorways-nav">

              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={active === section.id ? "active" : ""}
                  >
                    <Icon />
                    {section.title}
                  </button>
                );
              })}

            </div>

          </div>
        </div>

        <div className="container-custom">

                  {/* OVERVIEW */}

          <section id="overview" className="motorways-section exa-card">
            <h2>Overview</h2>

            <p>
              Pakistan Current Affairs is one of the most important subjects in
              competitive examinations and interviews. It covers recent national
              developments in politics, economy, governance, foreign policy,
              defence, science & technology, climate change, sports and major
              national projects. Candidates are expected to possess both
              historical understanding and awareness of recent developments.
            </p>

            <p>
              Questions from current affairs frequently appear in PMA Long
              Course, ISSB, CSS, PMS, FPSC, PPSC, ASF, FIA, Police, MOD, NAB,
              Banking and many university entrance examinations. Interview
              panels also evaluate a candidate's awareness of national and
              international events affecting Pakistan.
            </p>

            <p>
              This page provides authentic, exam-oriented information covering
              important developments, national institutions, government
              structure, economic indicators, international organizations,
              strategic projects and frequently asked facts. It is updated
              regularly to help candidates stay prepared.
            </p>
          </section>

          {/* WHY CURRENT AFFAIRS MATTER */}

          <section id="importance" className="motorways-section exa-card">
            <h2>Why Current Affairs Matter</h2>

            <p>
              Strong knowledge of current affairs demonstrates awareness,
              analytical thinking and leadership qualities. Defence forces and
              competitive examination boards expect candidates to understand the
              country's present challenges, achievements and strategic
              priorities.
            </p>

            <div className="motorway-cards">

              <div className="motorway-card">
                <h3>PMA & ISSB</h3>

                <ul>
                  <li>Interview discussions</li>
                  <li>General knowledge questions</li>
                  <li>Group discussions</li>
                  <li>Leadership assessment</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>CSS / PMS</h3>

                <ul>
                  <li>Current Affairs paper</li>
                  <li>Pakistan Affairs</li>
                  <li>Essay writing</li>
                  <li>Interview preparation</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>FPSC / PPSC</h3>

                <ul>
                  <li>General Knowledge</li>
                  <li>MCQ papers</li>
                  <li>Screening tests</li>
                  <li>Viva voce</li>
                </ul>
              </div>

            </div>

            <div className="important-grid">

              <div className="important-item">
                ✓ Improves interview confidence.
              </div>

              <div className="important-item">
                ✓ Enhances decision-making ability.
              </div>

              <div className="important-item">
                ✓ Builds awareness of national issues.
              </div>

              <div className="important-item">
                ✓ Essential for competitive examinations.
              </div>

              <div className="important-item">
                ✓ Helps in group discussions and debates.
              </div>

              <div className="important-item">
                ✓ Strengthens analytical thinking skills.
              </div>

            </div>
          </section>

          {/* CURRENT AFFAIRS TIMELINE */}

          <section id="timeline" className="motorways-section exa-card">
            <h2>Pakistan Current Affairs Timeline</h2>

            <p>
              The following timeline highlights major national developments that
              are commonly discussed in competitive examinations and interviews.
              Candidates should revise these events along with the latest
              updates announced by the Government of Pakistan.
            </p>

            <div className="motorway-table-wrapper">

              <table className="motorway-table">

                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Major Development</th>
                    <th>Exam Importance</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>2022</td>
                    <td>
                      Political transition, economic challenges, devastating
                      floods and international humanitarian assistance.
                    </td>
                    <td>
                      Politics, Economy, Climate Change
                    </td>
                  </tr>

                  <tr>
                    <td>2023</td>
                    <td>
                      IMF negotiations, inflation control measures, digital
                      initiatives and preparations for general elections.
                    </td>
                    <td>
                      Economy & Governance
                    </td>
                  </tr>

                  <tr>
                    <td>2024</td>
                    <td>
                      General Elections, formation of the federal government,
                      continued economic reforms and investment initiatives.
                    </td>
                    <td>
                      Politics & Constitution
                    </td>
                  </tr>

                  <tr>
                    <td>2025</td>
                    <td>
                      Focus on economic stability, export growth, energy sector
                      reforms, CPEC cooperation and infrastructure development.
                    </td>
                    <td>
                      Economy & Development
                    </td>
                  </tr>

                  <tr>
                    <td>2026</td>
                    <td>
                      Continued emphasis on investment, digital transformation,
                      water security, renewable energy, regional cooperation and
                      sustainable economic growth.
                    </td>
                    <td>
                      Most Important
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>
          </section>

          {/* GOVERNMENT & POLITICS */}

          <section id="government" className="motorways-section exa-card">

            <h2>Government & Political Structure</h2>

            <p>
              Pakistan follows a federal parliamentary democratic system under
              the Constitution of 1973. The executive, legislature and judiciary
              together ensure constitutional governance while independent
              constitutional institutions supervise elections, accountability
              and financial management.
            </p>

            <div className="motorway-cards">

              <div className="motorway-card">
                <h3>Executive</h3>

                <ul>
                  <li>President</li>
                  <li>Prime Minister</li>
                  <li>Federal Cabinet</li>
                  <li>Provincial Governments</li>
                  <li>Civil Services</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Legislature</h3>

                <ul>
                  <li>National Assembly</li>
                  <li>Senate</li>
                  <li>Provincial Assemblies</li>
                  <li>Standing Committees</li>
                  <li>Parliament House</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Judiciary</h3>

                <ul>
                  <li>Supreme Court</li>
                  <li>High Courts</li>
                  <li>Federal Shariat Court</li>
                  <li>District Judiciary</li>
                  <li>Constitutional Review</li>
                </ul>
              </div>

            </div>

            <p>
              <strong>Exam Tip:</strong> Instead of memorizing only the names of
              current office holders, focus on understanding the constitutional
              roles of major institutions. Office holders may change, but the
              structure and powers of these institutions remain frequent exam
              topics.
            </p>

          </section>

                    {/* CURRENT OFFICE HOLDERS */}

          <section className="motorways-section exa-card">
            <h2>Key Constitutional Office Holders</h2>

            <p>
              The following constitutional offices are among the most frequently
              asked topics in PMA, ISSB, CSS, PMS, FPSC and interview
              examinations. Candidates should regularly verify these positions
              because appointments may change over time.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Office</th>
                    <th>Current Holder</th>
                    <th>Importance</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>President</td>
                    <td>Asif Ali Zardari</td>
                    <td>Head of State</td>
                  </tr>

                  <tr>
                    <td>Prime Minister</td>
                    <td>Shehbaz Sharif</td>
                    <td>Head of Government</td>
                  </tr>

                  <tr>
                    <td>Chairman Senate</td>
                    <td>Yousaf Raza Gillani</td>
                    <td>Upper House</td>
                  </tr>

                  <tr>
                    <td>Speaker National Assembly</td>
                    <td>Sardar Ayaz Sadiq</td>
                    <td>Lower House</td>
                  </tr>

                  <tr>
                    <td>Chief Justice of Pakistan</td>
                    <td>Justice Yahya Afridi</td>
                    <td>Head of Judiciary</td>
                  </tr>

                  <tr>
                    <td>Chief Election Commissioner</td>
                    <td>Sikandar Sultan Raja</td>
                    <td>Election Commission</td>
                  </tr>

                  <tr>
                    <td>Chief of Army Staff</td>
                    <td>Field Marshal Syed Asim Munir</td>
                    <td>Pakistan Army</td>
                  </tr>

                </tbody>

              </table>
            </div>

            <p>
              These constitutional offices are frequently tested in competitive
              examinations alongside their constitutional powers and
              responsibilities.
               {/* :contentReference[oaicite:0]{index=0} */}
            </p>
          </section>

          {/* ECONOMY */}

          <section id="economy" className="motorways-section exa-card">

            <h2>Pakistan Economy</h2>

            <p>
              Pakistan has a mixed developing economy based on agriculture,
              manufacturing and services. In recent years the government has
              focused on fiscal reforms, export promotion, digital
              transformation, foreign investment and macroeconomic stability.
              Economic topics remain among the most frequently asked questions
              in competitive examinations.
            </p>

            <div className="motorway-cards">

              <div className="motorway-card">

                <h3>Major Sectors</h3>

                <ul>
                  <li>Agriculture</li>
                  <li>Manufacturing</li>
                  <li>Services</li>
                  <li>Information Technology</li>
                  <li>Construction</li>
                </ul>

              </div>

              <div className="motorway-card">

                <h3>Main Exports</h3>

                <ul>
                  <li>Textiles</li>
                  <li>Rice</li>
                  <li>Surgical Instruments</li>
                  <li>Sports Goods</li>
                  <li>Leather Products</li>
                </ul>

              </div>

              <div className="motorway-card">

                <h3>Major Imports</h3>

                <ul>
                  <li>Petroleum</li>
                  <li>Machinery</li>
                  <li>Chemicals</li>
                  <li>Palm Oil</li>
                  <li>Industrial Equipment</li>
                </ul>

              </div>

            </div>

            <div className="motorway-table-wrapper">

              <table className="motorway-table">

                <thead>

                  <tr>
                    <th>Indicator</th>
                    <th>Summary</th>
                    <th>Exam Focus</th>
                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td>Currency</td>
                    <td>Pakistani Rupee (PKR)</td>
                    <td>Very Important</td>
                  </tr>

                  <tr>
                    <td>Central Bank</td>
                    <td>State Bank of Pakistan</td>
                    <td>Frequently Asked</td>
                  </tr>

                  <tr>
                    <td>Tax Authority</td>
                    <td>Federal Board of Revenue (FBR)</td>
                    <td>Important</td>
                  </tr>

                  <tr>
                    <td>Development Partner</td>
                    <td>World Bank & Asian Development Bank</td>
                    <td>Important</td>
                  </tr>

                  <tr>
                    <td>International Program</td>
                    <td>IMF Economic Reform Program</td>
                    <td>Very Important</td>
                  </tr>

                </tbody>

              </table>

            </div>

            <h3>Major Economic Priorities</h3>

            <div className="important-grid">

              <div className="important-item">
                ✓ Fiscal discipline and economic reforms
              </div>

              <div className="important-item">
                ✓ Increasing exports
              </div>

              <div className="important-item">
                ✓ Foreign direct investment
              </div>

              <div className="important-item">
                ✓ Industrial development
              </div>

              <div className="important-item">
                ✓ Digital economy
              </div>

              <div className="important-item">
                ✓ Energy sector reforms
              </div>

              <div className="important-item">
                ✓ Employment generation
              </div>

              <div className="important-item">
                ✓ Inflation management
              </div>

            </div>

            <section className="motorway-cards">

              <div className="motorway-card">

                <h3>Important Organizations</h3>

                <ul>
                  <li>State Bank of Pakistan</li>
                  <li>FBR</li>
                  <li>SECP</li>
                  <li>Planning Commission</li>
                  <li>Ministry of Finance</li>
                </ul>

              </div>

              <div className="motorway-card">

                <h3>Major Economic Projects</h3>

                <ul>
                  <li>CPEC</li>
                  <li>Special Economic Zones</li>
                  <li>Gwadar Development</li>
                  <li>ML-1 Railway Project</li>
                  <li>Digital Pakistan</li>
                </ul>

              </div>

            </section>

            <p>
              Pakistan continues implementing economic reforms, budgetary
              measures and IMF-supported stabilization efforts while seeking
              higher exports, increased investment and sustainable economic
              growth. Recent developments also include a sovereign credit-rating
              upgrade linked to reform progress.
               {/* :contentReference[oaicite:1]{index=1} */}
            </p>

          </section>

                    {/* FOREIGN RELATIONS */}

          <section
            id="foreign-relations"
            className="motorways-section exa-card"
          >
            <h2>Pakistan's Foreign Relations</h2>

            <p>
              Pakistan maintains diplomatic relations with countries across the
              world and actively participates in regional and international
              organizations. Foreign policy focuses on regional peace, economic
              cooperation, trade, national security, investment and sustainable
              development.
            </p>

            <div className="motorway-cards">

              <div className="motorway-card">
                <h3>🇨🇳 China</h3>

                <ul>
                  <li>Pakistan's closest strategic partner.</li>
                  <li>China-Pakistan Economic Corridor (CPEC).</li>
                  <li>Infrastructure & energy investment.</li>
                  <li>Defense cooperation.</li>
                  <li>Trade & technology collaboration.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>🇸🇦 Saudi Arabia</h3>

                <ul>
                  <li>Long-standing friendly relations.</li>
                  <li>Energy cooperation.</li>
                  <li>Investment initiatives.</li>
                  <li>Religious cooperation.</li>
                  <li>Pakistani workforce abroad.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>🇹🇷 Türkiye</h3>

                <ul>
                  <li>Strong diplomatic ties.</li>
                  <li>Defense cooperation.</li>
                  <li>Joint military exercises.</li>
                  <li>Trade expansion.</li>
                  <li>Cultural cooperation.</li>
                </ul>
              </div>

            </div>

            <div className="motorway-cards">

              <div className="motorway-card">
                <h3>🇺🇸 United States</h3>

                <ul>
                  <li>Trade relations.</li>
                  <li>Education cooperation.</li>
                  <li>Counter-terrorism partnership.</li>
                  <li>Investment opportunities.</li>
                  <li>Regional stability.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>🇦🇪 United Arab Emirates</h3>

                <ul>
                  <li>Major investment partner.</li>
                  <li>Large Pakistani community.</li>
                  <li>Economic cooperation.</li>
                  <li>Infrastructure investment.</li>
                  <li>Trade & aviation.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>🇮🇷 Iran & Afghanistan</h3>

                <ul>
                  <li>Border security.</li>
                  <li>Regional peace.</li>
                  <li>Trade routes.</li>
                  <li>Energy cooperation.</li>
                  <li>Transit connectivity.</li>
                </ul>
              </div>

            </div>

            <h3>Major International Organizations</h3>

            <div className="important-grid">

              <div className="important-item">
                ✓ United Nations (UN)
              </div>

              <div className="important-item">
                ✓ Organization of Islamic Cooperation (OIC)
              </div>

              <div className="important-item">
                ✓ Shanghai Cooperation Organization (SCO)
              </div>

              <div className="important-item">
                ✓ South Asian Association for Regional Cooperation (SAARC)
              </div>

              <div className="important-item">
                ✓ Economic Cooperation Organization (ECO)
              </div>

              <div className="important-item">
                ✓ Commonwealth of Nations
              </div>

              <div className="important-item">
                ✓ Asian Development Bank (ADB)
              </div>

              <div className="important-item">
                ✓ World Bank
              </div>

            </div>

          </section>

          {/* DEFENCE */}

          <section id="defence" className="motorways-section exa-card">

            <h2>Pakistan Defence</h2>

            <p>
              Pakistan possesses one of the world's most capable professional
              armed forces. The Pakistan Army, Pakistan Navy and Pakistan Air
              Force jointly safeguard the country's territorial integrity,
              maritime interests and airspace while contributing to disaster
              relief, peacekeeping operations and regional stability.
            </p>

            <div className="motorway-cards">

              <div className="motorway-card">

                <h3>Pakistan Army</h3>

                <ul>
                  <li>Largest service branch.</li>
                  <li>Land defence.</li>
                  <li>Counter-terrorism operations.</li>
                  <li>Border security.</li>
                  <li>UN Peacekeeping missions.</li>
                </ul>

              </div>

              <div className="motorway-card">

                <h3>Pakistan Navy</h3>

                <ul>
                  <li>Maritime defence.</li>
                  <li>Arabian Sea security.</li>
                  <li>Gwadar protection.</li>
                  <li>Naval exercises.</li>
                  <li>Maritime trade routes.</li>
                </ul>

              </div>

              <div className="motorway-card">

                <h3>Pakistan Air Force</h3>

                <ul>
                  <li>Air defence.</li>
                  <li>JF-17 Thunder.</li>
                  <li>Air surveillance.</li>
                  <li>Combat readiness.</li>
                  <li>Joint operations.</li>
                </ul>

              </div>

            </div>

            <div className="motorway-table-wrapper">

              <table className="motorway-table">

                <thead>

                  <tr>
                    <th>Force</th>
                    <th>Primary Responsibility</th>
                    <th>Headquarters</th>
                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td>Pakistan Army</td>
                    <td>Land Warfare</td>
                    <td>Rawalpindi</td>
                  </tr>

                  <tr>
                    <td>Pakistan Navy</td>
                    <td>Maritime Security</td>
                    <td>Islamabad</td>
                  </tr>

                  <tr>
                    <td>Pakistan Air Force</td>
                    <td>Air Defence</td>
                    <td>Islamabad</td>
                  </tr>

                </tbody>

              </table>

            </div>

            <h3>Major Defence Capabilities</h3>

            <div className="important-grid">

              <div className="important-item">
                ✓ Nuclear deterrence.
              </div>

              <div className="important-item">
                ✓ Indigenous defence production.
              </div>

              <div className="important-item">
                ✓ JF-17 Thunder programme.
              </div>

              <div className="important-item">
                ✓ Al-Khalid Main Battle Tank.
              </div>

              <div className="important-item">
                ✓ Babur Cruise Missile.
              </div>

              <div className="important-item">
                ✓ Shaheen Missile Series.
              </div>

              <div className="important-item">
                ✓ International Peacekeeping Missions.
              </div>

              <div className="important-item">
                ✓ Joint military exercises.
              </div>

            </div>

            <h3>Frequently Asked Defence Topics</h3>

            <div className="motorway-cards">

              <div className="motorway-card">

                <h3>Examinations</h3>

                <ul>
                  <li>PMA Long Course</li>
                  <li>ISSB Interviews</li>
                  <li>Pakistan Navy</li>
                  <li>Pakistan Air Force</li>
                  <li>ASF & MOD</li>
                </ul>

              </div>

              <div className="motorway-card">

                <h3>Most Asked Questions</h3>

                <ul>
                  <li>Military exercises.</li>
                  <li>Strategic projects.</li>
                  <li>Missile systems.</li>
                  <li>Peacekeeping missions.</li>
                  <li>Indigenous weapons.</li>
                </ul>

              </div>

            </div>

          </section>

                    {/* SCIENCE & TECHNOLOGY */}

          <section id="science" className="motorways-section exa-card">
            <h2>Science & Technology</h2>

            <p>
              Science, technology and innovation have become major drivers of
              Pakistan's economic development. Government institutions, private
              technology companies, universities and startups are contributing
              towards digital transformation, software exports, artificial
              intelligence, cybersecurity, fintech and space technology.
            </p>

            <p>
              Pakistan's Information Technology sector has experienced
              significant growth during recent years. The country recorded its
              highest-ever ICT export earnings during FY2025-26, highlighting
              the increasing contribution of software houses, freelancers,
              business process outsourcing (BPO) and technology startups to the
              national economy.
            </p>

            <div className="motorway-cards">

              <div className="motorway-card">
                <h3>Information Technology</h3>

                <ul>
                  <li>Software Development</li>
                  <li>Artificial Intelligence</li>
                  <li>Cyber Security</li>
                  <li>Cloud Computing</li>
                  <li>Freelancing</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Government Initiatives</h3>

                <ul>
                  <li>Digital Pakistan</li>
                  <li>E-Governance</li>
                  <li>Special Technology Zones</li>
                  <li>IT Export Promotion</li>
                  <li>Startup Ecosystem</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Research Institutions</h3>

                <ul>
                  <li>SUPARCO</li>
                  <li>PCSIR</li>
                  <li>PAEC</li>
                  <li>HEC</li>
                  <li>NUST Research Centers</li>
                </ul>
              </div>

            </div>

            <div className="motorway-table-wrapper">

              <table className="motorway-table">

                <thead>
                  <tr>
                    <th>Sector</th>
                    <th>Importance</th>
                    <th>Exam Focus</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>IT Exports</td>
                    <td>Fastest Growing Service Export</td>
                    <td>Very High</td>
                  </tr>

                  <tr>
                    <td>SUPARCO</td>
                    <td>National Space Agency</td>
                    <td>Frequently Asked</td>
                  </tr>

                  <tr>
                    <td>PAEC</td>
                    <td>Nuclear Technology</td>
                    <td>Very Important</td>
                  </tr>

                  <tr>
                    <td>STZA</td>
                    <td>Technology Investment</td>
                    <td>Important</td>
                  </tr>

                  <tr>
                    <td>Freelancing</td>
                    <td>Foreign Exchange Earnings</td>
                    <td>Important</td>
                  </tr>

                </tbody>

              </table>

            </div>

            <h3>Major Achievements</h3>

            <div className="important-grid">

              <div className="important-item">
                ✓ Record ICT exports during FY2025-26.
              </div>

              <div className="important-item">
                ✓ Growing AI and software industry.
              </div>

              <div className="important-item">
                ✓ Expanding startup ecosystem.
              </div>

              <div className="important-item">
                ✓ Increasing international technology partnerships.
              </div>

              <div className="important-item">
                ✓ Strong freelancing community.
              </div>

              <div className="important-item">
                ✓ Digital government initiatives.
              </div>

              <div className="important-item">
                ✓ Growth in software exports.
              </div>

              <div className="important-item">
                ✓ Expansion into Asia-Pacific technology markets.
              </div>

            </div>

          </section>

          {/* CLIMATE & ENVIRONMENT */}

          <section id="environment" className="motorways-section exa-card">

            <h2>Climate Change & Environment</h2>

            <p>
              Pakistan is among the countries most vulnerable to climate
              change. Floods, droughts, glacier melting, water shortages and
              rising temperatures have increased the importance of sustainable
              development, environmental protection and climate resilience.
            </p>

            <div className="motorway-cards">

              <div className="motorway-card">

                <h3>Major Challenges</h3>

                <ul>
                  <li>Climate Change</li>
                  <li>Floods</li>
                  <li>Drought</li>
                  <li>Water Scarcity</li>
                  <li>Air Pollution</li>
                </ul>

              </div>

              <div className="motorway-card">

                <h3>Government Priorities</h3>

                <ul>
                  <li>Water Conservation</li>
                  <li>Renewable Energy</li>
                  <li>Forest Protection</li>
                  <li>Disaster Management</li>
                  <li>Climate Adaptation</li>
                </ul>

              </div>

              <div className="motorway-card">

                <h3>Important Projects</h3>

                <ul>
                  <li>Diamer-Bhasha Dam</li>
                  <li>Mohmand Dam</li>
                  <li>Recharge Pakistan</li>
                  <li>Solar Energy Projects</li>
                  <li>Green Pakistan</li>
                </ul>

              </div>

            </div>

            <div className="important-grid">

              <div className="important-item">
                ✓ Pakistan depends on the Indus River System.
              </div>

              <div className="important-item">
                ✓ Glacier melting directly affects water resources.
              </div>

              <div className="important-item">
                ✓ Water security is a national priority.
              </div>

              <div className="important-item">
                ✓ Renewable energy is rapidly expanding.
              </div>

              <div className="important-item">
                ✓ Flood management remains a major challenge.
              </div>

              <div className="important-item">
                ✓ Environmental questions frequently appear in CSS and PMS.
              </div>

            </div>

          </section>

          {/* SPORTS */}

          <section id="sports" className="motorways-section exa-card">

            <h2>Sports in Pakistan</h2>

            <p>
              Sports remain an important part of Pakistan's national identity.
              Cricket continues to be the country's most popular sport, while
              hockey, squash, athletics, football and kabaddi also contribute
              significantly to Pakistan's sporting history.
            </p>

            <div className="motorway-cards">

              <div className="motorway-card">

                <h3>Popular Sports</h3>

                <ul>
                  <li>Cricket</li>
                  <li>Hockey</li>
                  <li>Squash</li>
                  <li>Football</li>
                  <li>Kabaddi</li>
                </ul>

              </div>

              <div className="motorway-card">

                <h3>Major Events</h3>

                <ul>
                  <li>Pakistan Super League (PSL)</li>
                  <li>National Games</li>
                  <li>Asian Games</li>
                  <li>Olympics</li>
                  <li>ICC Events</li>
                </ul>

              </div>

              <div className="motorway-card">

                <h3>Frequently Asked</h3>

                <ul>
                  <li>Olympic Medalists</li>
                  <li>PSL Champions</li>
                  <li>World Cup Records</li>
                  <li>National Sports</li>
                  <li>Historic Achievements</li>
                </ul>

              </div>

            </div>

            <div className="motorway-table-wrapper">

              <table className="motorway-table">

                <thead>

                  <tr>
                    <th>Sport</th>
                    <th>National Importance</th>
                    <th>Exam Frequency</th>
                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td>Cricket</td>
                    <td>Most Popular Sport</td>
                    <td>Very High</td>
                  </tr>

                  <tr>
                    <td>Hockey</td>
                    <td>National Game</td>
                    <td>Very High</td>
                  </tr>

                  <tr>
                    <td>Squash</td>
                    <td>Historic World Champions</td>
                    <td>High</td>
                  </tr>

                  <tr>
                    <td>Athletics</td>
                    <td>International Competitions</td>
                    <td>Medium</td>
                  </tr>

                  <tr>
                    <td>Football</td>
                    <td>Growing Popularity</td>
                    <td>Medium</td>
                  </tr>

                </tbody>

              </table>

            </div>

            <div className="important-grid">

              <div className="important-item">
                ✓ Hockey is the National Game of Pakistan.
              </div>

              <div className="important-item">
                ✓ Pakistan won the Cricket World Cup in 1992.
              </div>

              <div className="important-item">
                ✓ PSL is Pakistan's premier T20 league.
              </div>

              <div className="important-item">
                ✓ Jahangir Khan is regarded as one of the greatest squash
                players in history.
              </div>

              <div className="important-item">
                ✓ International sporting events are regularly asked in Current
                Affairs papers.
              </div>

              <div className="important-item">
                ✓ Candidates should also prepare recent international
                achievements of Pakistani athletes.
              </div>

            </div>

          </section>

                    {/* INTERNATIONAL ORGANIZATIONS */}

          <section
            id="organizations"
            className="motorways-section exa-card"
          >
            <h2>Pakistan in International Organizations</h2>

            <p>
              Pakistan actively participates in numerous international and
              regional organizations to promote peace, economic cooperation,
              trade, security and sustainable development. Membership in these
              organizations is frequently tested in competitive examinations.
            </p>

            <div className="motorway-table-wrapper">

              <table className="motorway-table">

                <thead>
                  <tr>
                    <th>Organization</th>
                    <th>Founded</th>
                    <th>Pakistan's Status</th>
                    <th>Headquarters</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>United Nations (UN)</td>
                    <td>1945</td>
                    <td>Member since 1947</td>
                    <td>New York, USA</td>
                  </tr>

                  <tr>
                    <td>Organization of Islamic Cooperation (OIC)</td>
                    <td>1969</td>
                    <td>Founding Member</td>
                    <td>Jeddah, Saudi Arabia</td>
                  </tr>

                  <tr>
                    <td>Shanghai Cooperation Organization (SCO)</td>
                    <td>2001</td>
                    <td>Full Member (2017)</td>
                    <td>Beijing, China</td>
                  </tr>

                  <tr>
                    <td>SAARC</td>
                    <td>1985</td>
                    <td>Founding Member</td>
                    <td>Kathmandu, Nepal</td>
                  </tr>

                  <tr>
                    <td>Economic Cooperation Organization (ECO)</td>
                    <td>1985</td>
                    <td>Member</td>
                    <td>Tehran, Iran</td>
                  </tr>

                  <tr>
                    <td>Commonwealth</td>
                    <td>1949</td>
                    <td>Member</td>
                    <td>London, United Kingdom</td>
                  </tr>

                  <tr>
                    <td>Asian Development Bank (ADB)</td>
                    <td>1966</td>
                    <td>Member</td>
                    <td>Manila, Philippines</td>
                  </tr>

                  <tr>
                    <td>World Bank Group</td>
                    <td>1944</td>
                    <td>Member</td>
                    <td>Washington D.C.</td>
                  </tr>

                  <tr>
                    <td>International Monetary Fund (IMF)</td>
                    <td>1944</td>
                    <td>Member</td>
                    <td>Washington D.C.</td>
                  </tr>

                </tbody>

              </table>

            </div>

            <h3>Frequently Asked Facts</h3>

            <div className="important-grid">

              <div className="important-item">
                ✓ Pakistan joined the United Nations in 1947.
              </div>

              <div className="important-item">
                ✓ Pakistan became a full SCO member in 2017.
              </div>

              <div className="important-item">
                ✓ Pakistan is a founding member of OIC.
              </div>

              <div className="important-item">
                ✓ Pakistan is a founding member of SAARC.
              </div>

              <div className="important-item">
                ✓ Pakistan regularly contributes to UN Peacekeeping Missions.
              </div>

              <div className="important-item">
                ✓ IMF and World Bank support economic reforms.
              </div>

            </div>

          </section>

          {/* NATIONAL PROJECTS */}

          <section id="projects" className="motorways-section exa-card">

            <h2>Major National Development Projects</h2>

            <p>
              Pakistan has launched numerous strategic infrastructure,
              transportation, energy and water projects to improve economic
              growth, regional connectivity and national development.
            </p>

            <div className="motorway-cards">

              <div className="motorway-card">

                <h3>CPEC</h3>

                <ul>
                  <li>Flagship Belt & Road Initiative project.</li>
                  <li>China-Pakistan partnership.</li>
                  <li>Energy projects.</li>
                  <li>Motorways.</li>
                  <li>Special Economic Zones.</li>

                </ul>

              </div>

              <div className="motorway-card">

                <h3>Gwadar Port</h3>

                <ul>

                  <li>Deep Sea Port.</li>
                  <li>Balochistan.</li>
                  <li>Regional Trade Hub.</li>
                  <li>Strategic Importance.</li>
                  <li>Economic Gateway.</li>

                </ul>

              </div>

              <div className="motorway-card">

                <h3>ML-1 Railway</h3>

                <ul>

                  <li>Main railway modernization.</li>
                  <li>Karachi to Peshawar.</li>
                  <li>Speed improvement.</li>
                  <li>Freight enhancement.</li>
                  <li>Economic connectivity.</li>

                </ul>

              </div>

            </div>

            <div className="motorway-cards">

              <div className="motorway-card">

                <h3>Water Projects</h3>

                <ul>

                  <li>Diamer-Bhasha Dam.</li>
                  <li>Mohmand Dam.</li>
                  <li>Dasu Hydropower.</li>
                  <li>Water Storage.</li>
                  <li>Hydroelectric Power.</li>

                </ul>

              </div>

              <div className="motorway-card">

                <h3>Energy Projects</h3>

                <ul>

                  <li>Solar Parks.</li>
                  <li>Wind Farms.</li>
                  <li>Hydropower Stations.</li>
                  <li>Transmission Network.</li>
                  <li>Renewable Energy.</li>

                </ul>

              </div>

              <div className="motorway-card">

                <h3>Industrial Development</h3>

                <ul>

                  <li>Special Economic Zones.</li>
                  <li>Industrial Parks.</li>
                  <li>IT Parks.</li>
                  <li>Technology Zones.</li>
                  <li>Export Industries.</li>

                </ul>

              </div>

            </div>

            <div className="motorway-table-wrapper">

              <table className="motorway-table">

                <thead>

                  <tr>
                    <th>Project</th>
                    <th>Province / Region</th>
                    <th>Purpose</th>
                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td>CPEC</td>
                    <td>Nationwide</td>
                    <td>Economic Development</td>
                  </tr>

                  <tr>
                    <td>Gwadar Port</td>
                    <td>Balochistan</td>
                    <td>International Trade</td>
                  </tr>

                  <tr>
                    <td>Diamer-Bhasha Dam</td>
                    <td>Gilgit Baltistan</td>
                    <td>Water & Electricity</td>
                  </tr>

                  <tr>
                    <td>Mohmand Dam</td>
                    <td>Khyber Pakhtunkhwa</td>
                    <td>Water Storage</td>
                  </tr>

                  <tr>
                    <td>ML-1 Railway</td>
                    <td>Punjab - Sindh - KP</td>
                    <td>Railway Modernization</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </section>

          {/* IMPORTANT NATIONAL INSTITUTIONS */}

          <section className="motorways-section exa-card">

            <h2>Important National Institutions</h2>

            <p>
              Questions regarding constitutional bodies, regulatory authorities
              and national institutions appear frequently in written tests and
              interviews.
            </p>

            <div className="motorway-table-wrapper">

              <table className="motorway-table">

                <thead>

                  <tr>

                    <th>Institution</th>

                    <th>Main Responsibility</th>

                  </tr>

                </thead>

                <tbody>

                  <tr>

                    <td>Election Commission of Pakistan (ECP)</td>

                    <td>Conducts Elections</td>

                  </tr>

                  <tr>

                    <td>State Bank of Pakistan (SBP)</td>

                    <td>Central Bank</td>

                  </tr>

                  <tr>

                    <td>Federal Board of Revenue (FBR)</td>

                    <td>Tax Collection</td>

                  </tr>

                  <tr>

                    <td>National Accountability Bureau (NAB)</td>

                    <td>Anti-Corruption</td>

                  </tr>

                  <tr>

                    <td>National Disaster Management Authority (NDMA)</td>

                    <td>Disaster Response</td>

                  </tr>

                  <tr>

                    <td>Pakistan Bureau of Statistics (PBS)</td>

                    <td>National Statistics</td>

                  </tr>

                  <tr>

                    <td>Higher Education Commission (HEC)</td>

                    <td>Higher Education</td>

                  </tr>

                  <tr>

                    <td>Pakistan Telecommunication Authority (PTA)</td>

                    <td>Telecommunication Regulation</td>

                  </tr>

                </tbody>

              </table>

            </div>

          </section>

                    {/* IMPORTANT FACTS */}

          <section id="facts" className="motorways-section exa-card">

            <h2>Pakistan Current Affairs & Important Facts</h2>

            <p>
              The following facts are among the most frequently asked in
              competitive examinations. Candidates should memorize these facts
              for quick revision before written tests and interviews.
            </p>

            <div className="important-grid">

              <div className="important-item">
                🇵🇰 Capital of Pakistan → Islamabad
              </div>

              <div className="important-item">
                🏛 Constitution enforced → 14 August 1973
              </div>

              <div className="important-item">
                🗳 Parliament → Senate + National Assembly
              </div>

              <div className="important-item">
                💰 Currency → Pakistani Rupee (PKR)
              </div>

              <div className="important-item">
                🌐 UN Membership → 30 September 1947
              </div>

              <div className="important-item">
                ☪ OIC → Founding Member
              </div>

              <div className="important-item">
                🌏 SCO Full Membership → 2017
              </div>

              <div className="important-item">
                🛣 CPEC Announced → 2015
              </div>

              <div className="important-item">
                ⚓ Gwadar Port → Balochistan
              </div>

              <div className="important-item">
                🏦 State Bank of Pakistan → 1948
              </div>

              <div className="important-item">
                ⚖ Supreme Court → Islamabad
              </div>

              <div className="important-item">
                🚩 National Flag Adopted → 11 August 1947
              </div>

              <div className="important-item">
                📜 Independence → 14 August 1947
              </div>

              <div className="important-item">
                🌊 Longest River → Indus River
              </div>

              <div className="important-item">
                🏔 Highest Peak → K2 (8611 m)
              </div>

              <div className="important-item">
                🏞 Largest Province → Balochistan
              </div>

              <div className="important-item">
                👥 Largest Population → Punjab
              </div>

              <div className="important-item">
                🕌 National Mosque → Faisal Mosque
              </div>

              <div className="important-item">
                🦌 National Animal → Markhor
              </div>

              <div className="important-item">
                🐦 National Bird → Chukar
              </div>

              <div className="important-item">
                🌳 National Tree → Deodar Cedar
              </div>

              <div className="important-item">
                🌸 National Flower → Jasmine
              </div>

              <div className="important-item">
                🍋 National Fruit → Mango
              </div>

              <div className="important-item">
                ⚽ National Game → Hockey
              </div>

              <div className="important-item">
                ☢ Nuclear Tests → Chagai (1998)
              </div>

              <div className="important-item">
                🛰 National Space Agency → SUPARCO
              </div>

              <div className="important-item">
                ⚛ Atomic Energy → PAEC
              </div>

              <div className="important-item">
                🚆 Longest Motorway → M-5
              </div>

              <div className="important-item">
                🚢 Largest Seaport → Karachi Port
              </div>

              <div className="important-item">
                ✈ Largest Airport → Jinnah International Airport
              </div>

              <div className="important-item">
                🌉 Largest Dam → Tarbela Dam
              </div>

              <div className="important-item">
                💧 Largest Reservoir → Tarbela Lake
              </div>

              <div className="important-item">
                ⚡ Largest Hydropower Station → Tarbela
              </div>

            </div>

          </section>

          {/* LATEST CURRENT AFFAIRS */}

          <section id="latest" className="motorways-section exa-card">

            <h2>Major Current Affairs Topics (2025–2026)</h2>

            <p>
              The following national issues are repeatedly discussed in PMA,
              ISSB, CSS, PMS, FPSC and interview examinations. Candidates should
              prepare these topics with updated information.
            </p>

            <div className="motorway-table-wrapper">

              <table className="motorway-table">

                <thead>

                  <tr>

                    <th>Topic</th>

                    <th>Why Important</th>

                    <th>Exam Priority</th>

                  </tr>

                </thead>

                <tbody>

                  <tr>

                    <td>Economic Reforms</td>

                    <td>Budget, taxation, IMF programme</td>

                    <td>★★★★★</td>

                  </tr>

                  <tr>

                    <td>Inflation</td>

                    <td>Macroeconomic stability</td>

                    <td>★★★★★</td>

                  </tr>

                  <tr>

                    <td>CPEC Phase-II</td>

                    <td>Industrial cooperation</td>

                    <td>★★★★★</td>

                  </tr>

                  <tr>

                    <td>Gwadar Development</td>

                    <td>Regional connectivity</td>

                    <td>★★★★★</td>

                  </tr>

                  <tr>

                    <td>Water Security</td>

                    <td>Climate & dams</td>

                    <td>★★★★★</td>

                  </tr>

                  <tr>

                    <td>Renewable Energy</td>

                    <td>Solar & wind projects</td>

                    <td>★★★★☆</td>

                  </tr>

                  <tr>

                    <td>Digital Pakistan</td>

                    <td>Technology transformation</td>

                    <td>★★★★☆</td>

                  </tr>

                  <tr>

                    <td>Artificial Intelligence</td>

                    <td>Emerging technology</td>

                    <td>★★★★☆</td>

                  </tr>

                  <tr>

                    <td>IT Exports</td>

                    <td>Foreign exchange earnings</td>

                    <td>★★★★☆</td>

                  </tr>

                  <tr>

                    <td>Climate Change</td>

                    <td>Floods & glaciers</td>

                    <td>★★★★★</td>

                  </tr>

                  <tr>

                    <td>Pakistan-China Relations</td>

                    <td>Strategic partnership</td>

                    <td>★★★★★</td>

                  </tr>

                  <tr>

                    <td>Middle East Relations</td>

                    <td>Trade & investment</td>

                    <td>★★★★☆</td>

                  </tr>

                  <tr>

                    <td>Regional Security</td>

                    <td>National defence</td>

                    <td>★★★★★</td>

                  </tr>

                </tbody>

              </table>

            </div>

            <div className="exa-alert exa-alert-info">

              <strong>Exam Tip:</strong>

              Rather than memorizing isolated facts, understand the background,
              causes, objectives, impacts and future challenges of each current
              affairs topic. This approach is especially useful for ISSB
              discussions, PMA interviews, CSS essays and FPSC viva voce.

            </div>

          </section>

                  {/* FAQ */}

        <section id="faq" className="motorways-section exa-card">

          <h2>Frequently Asked Questions</h2>

            <div className="faq-list">
          
              <details className="faq-item" open>

            <summary>What is Pakistan Current Affairs?</summary>
            <p>
              Pakistan Current Affairs covers important political, economic,
              defence, environmental, technological and international
              developments taking place in Pakistan. It is an essential subject
              for PMA, ISSB, CSS, PMS, FPSC and other competitive examinations.
            </p></details>
          

              <details className="faq-item" open>
            <summary>Which newspaper is best for Current Affairs?</summary>
            <p>
              Dawn, Business Recorder, Express Tribune and official government
              press releases are considered reliable sources for Pakistan
              Current Affairs preparation.
            </p>
          </details>

              <details className="faq-item" open>
            <summary>How often should Current Affairs be revised?</summary>
            <p>
              Candidates should revise Current Affairs daily and prepare monthly
              summaries before appearing in any competitive examination.
            </p>
          </details>

              <details className="faq-item" open>
            <summary>Is Current Affairs important for PMA & ISSB?</summary>
            <p>
              Yes. Interviewers frequently ask questions regarding Pakistan's
              economy, politics, foreign policy, defence, sports and important
              national developments.
            </p>
          </details>

              <details className="faq-item" open>
            <summary>Which topics are asked most frequently?</summary>

            <p>

              Economy, CPEC, Constitution, Foreign Relations, Climate Change,
              Defence, National Projects, International Organizations and
              Government Institutions.

            </p>

          </details>
</div>
        </section>



        {/* PRACTICE MCQs */}

        <section id="practicemcq" className="motorways-section exa-card">

          <h2>Pakistan Current Affairs Practice MCQs</h2>

          <p>

            Test your preparation with these exam-level multiple choice
            questions. These questions are designed according to PMA, ISSB,
            CSS, PMS, FPSC and PPSC examination patterns.

          </p>



          <MCQCard
            question="1. What is the capital city of Pakistan?"
            options={[
              "Lahore",
              "Karachi",
              "Islamabad",
              "Peshawar",
            ]}
            correct={2}
            explanation="Islamabad became the capital of Pakistan in 1967."
          />



          <MCQCard
            question="2. Pakistan became a full member of the Shanghai Cooperation Organization (SCO) in?"
            options={[
              "2013",
              "2015",
              "2017",
              "2020",
            ]}
            correct={2}
            explanation="Pakistan officially became a full SCO member in June 2017."
          />



          <MCQCard
            question="3. Which organization is responsible for conducting elections in Pakistan?"
            options={[
              "NAB",
              "State Bank",
              "Election Commission of Pakistan",
              "Supreme Court",
            ]}
            correct={2}
            explanation="The Election Commission of Pakistan (ECP) conducts national and provincial elections."
          />



          <MCQCard
            question="4. CPEC primarily connects Gwadar Port with which country?"
            options={[
              "Iran",
              "India",
              "China",
              "Russia",
            ]}
            correct={2}
            explanation="The China-Pakistan Economic Corridor connects Gwadar with China's Xinjiang region."
          />



          <MCQCard
            question="5. Which is Pakistan's central bank?"
            options={[
              "National Bank of Pakistan",
              "State Bank of Pakistan",
              "Pakistan Banking Council",
              "Finance Division",
            ]}
            correct={1}
            explanation="The State Bank of Pakistan is the country's central bank."
          />



          <MCQCard
            question="6. Which river is the longest in Pakistan?"
            options={[
              "Jhelum",
              "Chenab",
              "Indus",
              "Ravi",
            ]}
            correct={2}
            explanation="The Indus River is the longest river of Pakistan."
          />



          <MCQCard
            question="7. Which city hosts Pakistan's largest seaport?"
            options={[
              "Gwadar",
              "Karachi",
              "Ormara",
              "Pasni",
            ]}
            correct={1}
            explanation="Karachi Port is Pakistan's busiest and largest seaport."
          />



          <MCQCard
            question="8. Pakistan is a founding member of?"
            options={[
              "SCO",
              "OIC",
              "ASEAN",
              "European Union",
            ]}
            correct={1}
            explanation="Pakistan is among the founding members of the Organization of Islamic Cooperation."
          />



          <MCQCard
            question="9. Which project is considered the flagship of the Belt and Road Initiative in Pakistan?"
            options={[
              "ML-1",
              "CPEC",
              "Diamer-Bhasha Dam",
              "Gwadar Airport",
            ]}
            correct={1}
            explanation="CPEC is the flagship project of China's Belt and Road Initiative."
          />



          <MCQCard
            question="10. Pakistan conducted its nuclear tests in?"
            options={[
              "1996",
              "1997",
              "1998",
              "1999",
            ]}
            correct={2}
            explanation="Pakistan conducted nuclear tests at Chagai on 28 & 30 May 1998."
          />



          <MCQCard
            question="11. Pakistan's National Assembly is the?"
            options={[
              "Upper House",
              "Lower House",
              "Judicial House",
              "Executive House",
            ]}
            correct={1}
            explanation="The National Assembly is the lower house of Parliament."
          />



          <MCQCard
            question="12. Which province has the largest area?"
            options={[
              "Punjab",
              "Sindh",
              "Balochistan",
              "KPK",
            ]}
            correct={2}
            explanation="Balochistan is Pakistan's largest province by area."
          />



          <MCQCard
            question="13. The headquarters of the State Bank of Pakistan is located in?"
            options={[
              "Islamabad",
              "Karachi",
              "Lahore",
              "Peshawar",
            ]}
            correct={1}
            explanation="The headquarters of the State Bank of Pakistan is in Karachi."
          />



          <MCQCard
            question="14. Which Pakistani city is known as the City of Lights?"
            options={[
              "Lahore",
              "Islamabad",
              "Karachi",
              "Quetta",
            ]}
            correct={2}
            explanation="Karachi is popularly known as the City of Lights."
          />



          <MCQCard
            question="15. Pakistan joined the United Nations in?"
            options={[
              "1947",
              "1948",
              "1950",
              "1952",
            ]}
            correct={0}
            explanation="Pakistan became a UN member on 30 September 1947."
          />
                    <MCQCard
            question="16. Which constitutional body is responsible for interpreting the Constitution of Pakistan?"
            options={[
              "Election Commission",
              "Supreme Court",
              "National Assembly",
              "Senate",
            ]}
            correct={1}
            explanation="The Supreme Court is the highest judicial authority and interprets the Constitution."
          />

          <MCQCard
            question="17. Which province shares the longest border with Afghanistan?"
            options={[
              "Punjab",
              "Sindh",
              "Khyber Pakhtunkhwa",
              "Balochistan",
            ]}
            correct={3}
            explanation="Balochistan has Pakistan's longest border with Afghanistan."
          />

          <MCQCard
            question="18. Pakistan became the seventh nuclear power in which year?"
            options={[
              "1996",
              "1997",
              "1998",
              "1999",
            ]}
            correct={2}
            explanation="Pakistan successfully conducted nuclear tests on 28 and 30 May 1998."
          />

          <MCQCard
            question="19. Which constitutional amendment restored the parliamentary system in Pakistan?"
            options={[
              "8th Amendment",
              "17th Amendment",
              "18th Amendment",
              "21st Amendment",
            ]}
            correct={2}
            explanation="The 18th Constitutional Amendment significantly strengthened Pakistan's parliamentary democracy."
          />

          <MCQCard
            question="20. Pakistan's largest export industry is?"
            options={[
              "Information Technology",
              "Sports Goods",
              "Textile",
              "Automobile",
            ]}
            correct={2}
            explanation="Textiles and textile products account for the largest share of Pakistan's exports."
          />

          <MCQCard
            question="21. Which river is known as the lifeline of Pakistan?"
            options={[
              "Jhelum",
              "Chenab",
              "Indus",
              "Ravi",
            ]}
            correct={2}
            explanation="The Indus River supports Pakistan's agriculture, irrigation and hydropower."
          />

          <MCQCard
            question="22. Which organization regulates telecommunications in Pakistan?"
            options={[
              "PEMRA",
              "PTA",
              "NADRA",
              "SBP",
            ]}
            correct={1}
            explanation="Pakistan Telecommunication Authority regulates telecom services."
          />

          <MCQCard
            question="23. Gwadar Port is located in which province?"
            options={[
              "Sindh",
              "Punjab",
              "Balochistan",
              "Khyber Pakhtunkhwa",
            ]}
            correct={2}
            explanation="Gwadar Port is situated on the Makran Coast of Balochistan."
          />

          <MCQCard
            question="24. Which Pakistani scientist received the Nobel Prize in Physics?"
            options={[
              "Dr. Abdul Qadeer Khan",
              "Dr. Samar Mubarakmand",
              "Dr. Abdus Salam",
              "Dr. Atta-ur-Rahman",
            ]}
            correct={2}
            explanation="Dr. Abdus Salam received the Nobel Prize in Physics in 1979."
          />

          <MCQCard
            question="25. Pakistan is divided into how many provinces?"
            options={[
              "4",
              "5",
              "6",
              "7",
            ]}
            correct={0}
            explanation="Pakistan consists of Punjab, Sindh, Khyber Pakhtunkhwa and Balochistan with Gilgit-Baltistan and Azad Jammu and Kashmir as autonomous regions."
          />

          <MCQCard
            question="26. Which city is called the Heart of Pakistan?"
            options={[
              "Islamabad",
              "Lahore",
              "Karachi",
              "Peshawar",
            ]}
            correct={1}
            explanation="Lahore is widely known as the Heart of Pakistan."
          />

          <MCQCard
            question="27. Pakistan's national language is?"
            options={[
              "Punjabi",
              "English",
              "Urdu",
              "Sindhi",
            ]}
            correct={2}
            explanation="Urdu is the national language, while English is an official language."
          />

          <MCQCard
            question="28. The headquarters of the Pakistan Army is located in?"
            options={[
              "Islamabad",
              "Rawalpindi",
              "Karachi",
              "Lahore",
            ]}
            correct={1}
            explanation="General Headquarters (GHQ) is located in Rawalpindi."
          />

          <MCQCard
            question="29. Pakistan shares the longest international border with?"
            options={[
              "India",
              "Afghanistan",
              "China",
              "Iran",
            ]}
            correct={0}
            explanation="The Pakistan–India border is the country's longest international border Approximately 3,190 km to 3,323 km."
          />

          <MCQCard
            question="30. Which organization issues Pakistan's population census?"
            options={[
              "Election Commission",
              "Pakistan Bureau of Statistics",
              "NADRA",
              "FBR",
            ]}
            correct={1}
            explanation="PBS conducts the national population and housing census."
          />

          <MCQCard
            question="31. Which Pakistani city is known as the City of Gardens?"
            options={[
              "Karachi",
              "Lahore",
              "Quetta",
              "Multan",
            ]}
            correct={1}
            explanation="Lahore is historically known as the City of Gardens."
          />

          <MCQCard
            question="32. Which pass connects Pakistan with China?"
            options={[
              "Bolan Pass",
              "Lowari Pass",
              "Khunjerab Pass",
              "Khyber Pass",
            ]}
            correct={2}
            explanation="Khunjerab Pass is the highest paved international border crossing between Pakistan and China."
          />

          <MCQCard
            question="33. Pakistan's first satellite was?"
            options={[
              "PAKSAT-1R",
              "Badr-I",
              "PRSS-1",
              "EO-1",
            ]}
            correct={1}
            explanation="Badr-I, launched in 1990, was Pakistan's first satellite."
          />

          <MCQCard
            question="34. The largest desert in Pakistan is?"
            options={[
              "Kharan Desert",
              "Thal Desert",
              "Thar Desert",
              "Cholistan Desert",
            ]}
            correct={2}
            explanation="The Thar Desert is Pakistan's largest desert by area."
          />

          <MCQCard
            question="35. Which institution is responsible for issuing Pakistani passports?"
            options={[
              "NADRA",
              "Ministry of Interior",
              "Directorate General of Immigration & Passports",
              "Foreign Office",
            ]}
            correct={2}
            explanation="DGIP issues passports to Pakistani citizens."
          />

                    <MCQCard
            question="36. Which constitutional institution conducts elections in Pakistan?"
            options={[
              "Supreme Court",
              "Election Commission of Pakistan",
              "National Assembly",
              "Ministry of Interior",
            ]}
            correct={1}
            explanation="The Election Commission of Pakistan (ECP) is responsible for conducting free and fair elections under the Constitution."
          />

          <MCQCard
            question="37. Pakistan became a member of the United Nations in?"
            options={[
              "14 August 1947",
              "30 September 1947",
              "23 March 1956",
              "16 December 1971",
            ]}
            correct={1}
            explanation="Pakistan was admitted as a member of the United Nations on 30 September 1947."
          />

          <MCQCard
            question="38. Which is the highest civil award of Pakistan?"
            options={[
              "Hilal-e-Imtiaz",
              "Sitara-e-Imtiaz",
              "Nishan-e-Pakistan",
              "Tamgha-e-Imtiaz",
            ]}
            correct={2}
            explanation="Nishan-e-Pakistan is the highest civilian award of Pakistan."
          />

          <MCQCard
            question="39. Which article of the Constitution declares Islam as the State religion?"
            options={[
              "Article 1",
              "Article 2",
              "Article 8",
              "Article 25",
            ]}
            correct={1}
            explanation="Article 2 of the Constitution declares Islam as the State religion of Pakistan."
          />

          <MCQCard
            question="40. Which city is known as the 'Manchester of Pakistan'?"
            options={[
              "Lahore",
              "Karachi",
              "Faisalabad",
              "Multan",
            ]}
            correct={2}
            explanation="Faisalabad is called the Manchester of Pakistan because of its textile industry."
          />

          <MCQCard
            question="41. Pakistan's first Constitution was enforced in?"
            options={[
              "1949",
              "1956",
              "1962",
              "1973",
            ]}
            correct={1}
            explanation="Pakistan's first Constitution came into force on 23 March 1956."
          />

          <MCQCard
            question="42. Which Pakistani port is the deepest warm-water seaport?"
            options={[
              "Karachi Port",
              "Port Qasim",
              "Gwadar Port",
              "Ormara Port",
            ]}
            correct={2}
            explanation="Gwadar is a deep-water seaport with major strategic importance."
          />

          <MCQCard
            question="43. Which institution issues Pakistan's currency notes?"
            options={[
              "National Bank of Pakistan",
              "Ministry of Finance",
              "State Bank of Pakistan",
              "Pakistan Mint",
            ]}
            correct={2}
            explanation="Only the State Bank of Pakistan is authorized to issue currency notes."
          />

          <MCQCard
            question="44. Which is Pakistan's largest hydropower project currently in operation?"
            options={[
              "Mangla Dam",
              "Warsak Dam",
              "Tarbela Dam",
              "Diamer-Bhasha Dam",
            ]}
            correct={2}
            explanation="Tarbela Dam is Pakistan's largest operational hydropower project."
          />

          <MCQCard
            question="45. Pakistan is located in which region of Asia?"
            options={[
              "Central Asia",
              "South Asia",
              "West Asia",
              "East Asia",
            ]}
            correct={1}
            explanation="Pakistan is geographically part of South Asia."
          />

          <MCQCard
            question="46. Which Pakistani city is famous as the 'City of Saints'?"
            options={[
              "Multan",
              "Lahore",
              "Hyderabad",
              "Sukkur",
            ]}
            correct={0}
            explanation="Multan is widely known as the City of Saints due to its numerous Sufi shrines."
          />

          <MCQCard
            question="47. Which institution prepares the Federal Budget of Pakistan?"
            options={[
              "Planning Commission",
              "Ministry of Finance",
              "State Bank of Pakistan",
              "FBR",
            ]}
            correct={1}
            explanation="The Federal Budget is prepared and presented by the Ministry of Finance."
          />

          <MCQCard
            question="48. Pakistan shares borders with how many countries?"
            options={[
              "3",
              "4",
              "5",
              "6",
            ]}
            correct={1}
            explanation="Pakistan shares land borders with China, India, Afghanistan and Iran."
          />

          <MCQCard
            question="49. Which is Pakistan's largest freshwater lake?"
            options={[
              "Manchar Lake",
              "Keenjhar Lake",
              "Rawal Lake",
              "Saif-ul-Malook",
            ]}
            correct={0}
            explanation="Manchar Lake in Sindh is the largest natural freshwater lake in Pakistan."
          />

          <MCQCard
            question="50. Which organization regulates higher education in Pakistan?"
            options={[
              "HEC",
              "PEC",
              "PTA",
              "NADRA",
            ]}
            correct={0}
            explanation="The Higher Education Commission (HEC) regulates higher education institutions in Pakistan."
          />

                    <MCQCard
            question="51. Which constitutional amendment introduced local government as a provincial subject?"
            options={[
              "17th Amendment",
              "18th Amendment",
              "20th Amendment",
              "25th Amendment",
            ]}
            correct={1}
            explanation="The 18th Constitutional Amendment devolved many powers, including local government, to the provinces."
          />

          <MCQCard
            question="52. Pakistan's largest international airport by passenger traffic is?"
            options={[
              "Allama Iqbal International Airport",
              "Islamabad International Airport",
              "Jinnah International Airport",
              "Bacha Khan International Airport",
            ]}
            correct={2}
            explanation="Jinnah International Airport in Karachi is Pakistan's busiest airport."
          />

          <MCQCard
            question="53. Which Pakistani organization is responsible for issuing Computerized National Identity Cards (CNICs)?"
            options={[
              "FIA",
              "NADRA",
              "PTA",
              "ECP",
            ]}
            correct={1}
            explanation="The National Database and Registration Authority (NADRA) issues CNICs and maintains the national citizen database."
          />

          <MCQCard
            question="54. Which is the highest mountain peak in Pakistan?"
            options={[
              "Nanga Parbat",
              "Broad Peak",
              "K2",
              "Gasherbrum-I",
            ]}
            correct={2}
            explanation="K2, at 8,611 meters, is Pakistan's highest mountain and the world's second-highest peak."
          />

          <MCQCard
            question="55. Which constitutional office acts as the Head of State in Pakistan?"
            options={[
              "Prime Minister",
              "President",
              "Chief Justice",
              "Chairman Senate",
            ]}
            correct={1}
            explanation="Under the Constitution, the President is the ceremonial Head of State, while the Prime Minister is the Head of Government."
          />

          <MCQCard
            question="56. Which institution prepares Pakistan's official population census?"
            options={[
              "Election Commission",
              "NADRA",
              "Pakistan Bureau of Statistics",
              "Planning Commission",
            ]}
            correct={2}
            explanation="The Pakistan Bureau of Statistics (PBS) conducts the Population and Housing Census."
          />

          <MCQCard
            question="57. Pakistan's National Assembly can serve for a maximum constitutional term of?"
            options={[
              "3 Years",
              "4 Years",
              "5 Years",
              "6 Years",
            ]}
            correct={2}
            explanation="Article 52 of the Constitution provides a five-year term for the National Assembly unless dissolved earlier."
          />

          <MCQCard
            question="58. Which pass is known as the historic gateway between Pakistan and Afghanistan?"
            options={[
              "Khunjerab Pass",
              "Lowari Pass",
              "Bolan Pass",
              "Khyber Pass",
            ]}
            correct={3}
            explanation="Khyber Pass has historically served as the main route connecting South Asia with Central Asia."
          />

          <MCQCard
            question="59. Which Pakistani city is known as the 'Fruit Garden of Pakistan'?"
            options={[
              "Multan",
              "Quetta",
              "Gilgit",
              "Sukkur",
            ]}
            correct={1}
            explanation="Quetta is famous for its orchards and is commonly called the Fruit Garden of Pakistan."
          />

          <MCQCard
            question="60. Which document is regarded as the supreme law of Pakistan?"
            options={[
              "Objectives Resolution",
              "Pakistan Penal Code",
              "Constitution of Pakistan 1973",
              "Civil Procedure Code",
            ]}
            correct={2}
            explanation="The Constitution of 1973 is the supreme law of Pakistan and defines the structure and powers of the state."
          />

        </section>

        {/* QUICK REVISION */}

        <section className="motorways-section exa-card">

          <h2>Quick Revision Sheet</h2>

          <p>
            Revise these important facts before appearing in PMA, ISSB, CSS,
            PMS, FPSC, PPSC, FIA, ASF, MOD and other competitive examinations.
          </p>

          <div className="important-grid">

            <div className="important-item">
              📍 Capital → Islamabad
            </div>

            <div className="important-item">
              🇵🇰 Independence → 14 August 1947
            </div>

            <div className="important-item">
              📜 Constitution → 1973
            </div>

            <div className="important-item">
              🏛 Parliament → Senate & National Assembly
            </div>

            <div className="important-item">
              💰 Currency → Pakistani Rupee (PKR)
            </div>

            <div className="important-item">
              🌍 UN Member → 30 September 1947
            </div>

            <div className="important-item">
              🏔 Highest Peak → K2
            </div>

            <div className="important-item">
              🌊 Longest River → Indus
            </div>

            <div className="important-item">
              🦌 National Animal → Markhor
            </div>

            <div className="important-item">
              🌸 National Flower → Jasmine
            </div>

            <div className="important-item">
              🌳 National Tree → Deodar Cedar
            </div>

            <div className="important-item">
              ⚽ National Game → Hockey
            </div>

          </div>

        </section>

        {/* EXAM PREPARATION TIPS */}

        <section className="motorways-section exa-card">

          <h2>Preparation Tips</h2>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>Daily Reading</h3>

              <p>
                Read reliable newspapers and official government press releases
                every day to stay updated with national and international
                developments.
              </p>

            </div>

            <div className="motorway-card">

              <h3>Weekly Revision</h3>

              <p>
                Prepare weekly notes covering politics, economy, defence,
                science, sports and international affairs.
              </p>

            </div>

            <div className="motorway-card">

              <h3>Practice MCQs</h3>

              <p>
                Solve Current Affairs MCQs regularly to improve speed and
                identify weak areas before the examination.
              </p>

            </div>

          </div>

        </section>

        {/* CONCLUSION */}

        <section className="motorways-section exa-card">

          <h2>Conclusion</h2>

          <p>
            Pakistan Current Affairs is one of the highest-scoring subjects in
            competitive examinations when studied consistently from authentic
            sources. Understanding national institutions, constitutional
            developments, economic reforms, foreign relations, defence,
            technology and environmental issues helps candidates perform better
            in written examinations, interviews and group discussions.
          </p>

          <p>
            Continue following EXAMITICS for regularly updated Current Affairs,
            practice MCQs, interview preparation, quizzes and comprehensive
            study material designed for PMA Long Course, ISSB, CSS, PMS, FPSC,
            PPSC, FIA, ASF, MOD, Pakistan Navy and Pakistan Air Force
            examinations.
          </p>

        </section>
</div>
      </main>

      <Footer />

    </>
  );
};

export default PakistanCurrentAffairs;