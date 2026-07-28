import { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import Navbar from "../../../components/layout/navbar";
import Footer from "../../../components/layout/footer";
import MCQCard from "../../../components/knowledge/MCQCard";
import { Link } from "react-router-dom";

import "../general-knowledge/MotorwaysOfPakistan.css";
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
  FiCpu,
  FiCloud,
  FiCalendar,
  FiCheckSquare,
} from "react-icons/fi";
const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: FiBook,
  },
  {
    id: "organizations",
    title: "Organizations",
    icon: FiBriefcase,
  },
  {
    id: "leaders",
    title: "World Leaders",
    icon: FiUsers,
  },
  {
    id: "geopolitics",
    title: "Geopolitics",
    icon: FiGlobe,
  },
  {
    id: "economy",
    title: "Global Economy",
    icon: FiTrendingUp,
  },
  {
    id: "science",
    title: "Science & Technology",
    icon: FiCpu,
  },
  {
    id: "climate",
    title: "Climate",
    icon: FiCloud,
  },
  {
    id: "awards",
    title: "International Awards",
    icon: FiAward,
  },
  {
    id: "sports",
    title: "Sports",
    icon: FiActivity,
  },
  {
    id: "facts",
    title: "World Facts",
    icon: FiGlobe,
  },
  {
    id: "days",
    title: "International Days",
    icon: FiCalendar,
  },
  {
    id: "faq",
    title: "FAQs",
    icon: FiHelpCircle,
  },
  {
    id: "practicemcq",
    title: "Practice MCQs",
    icon: FiCheckSquare,
  },
];
const InternationalCurrentAffairs = () => {
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
      },
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
      <Helmet>
        <title>
          International Current Affairs 2026 | World Affairs, Global
          Organizations, World Leaders & MCQs | EXAMITICS
        </title>

        <meta
          name="description"
          content="Study International Current Affairs for PMA, ISSB, CSS, FPSC, PPSC, FIA, ASF, MOD, Pakistan Navy and PAF. Learn about world organizations, geopolitics, global economy, science, climate change, international awards and practice MCQs."
        />

        <meta
          name="keywords"
          content="International Current Affairs, World Current Affairs, Global Affairs, UN, NATO, IMF, WHO, World Bank, G20, G7, BRICS, PMA Current Affairs, ISSB Current Affairs, CSS Current Affairs, FPSC GK, International Organizations, World Leaders"
        />

        <link
          rel="canonical"
          href="https://www.examitics.com/knowledge/current-affairs/international-current-affairs"
        />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="International Current Affairs 2026 | EXAMITICS"
        />

        <meta
          property="og:description"
          content="Comprehensive International Current Affairs notes, world organizations, geopolitics, global economy, science, climate and practice MCQs."
        />

        <meta
          property="og:url"
          content="https://www.examitics.com/knowledge/current-affairs/international-current-affairs"
        />
      </Helmet>

      <Navbar />

      <main className="motorways-page">
        <section className="motorways-hero">
          <div className="container-custom">
            <span className="hero-badge">
              🌍 Updated International Current Affairs
            </span>

            <h1>International Current Affairs 2026</h1>

            <p className="hero-subtitle">
              Master world affairs, international organizations, global economy,
              diplomacy, science, technology, climate change and geopolitics
              with comprehensive study notes designed for PMA Long Course, ISSB,
              Pakistan Navy, Pakistan Air Force, CSS, PMS, FPSC, PPSC, FIA, ASF,
              MOD and other competitive examinations.
            </p>

            <div className="hero-stat">
              <span>🌐 International Organizations</span>

              <span>📰 Updated World Affairs</span>

              <span>🎯 PMA • ISSB • CSS • FPSC</span>

              <span>📝 100 Practice MCQs</span>
            </div>
          </div>
        </section>

        <div className="motorways-container">
          {/* QUICK NAVIGATION */}
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
              <h2>What are International Current Affairs?</h2>

              <p>
                International Current Affairs refer to important political,
                economic, diplomatic, scientific, technological and
                environmental developments taking place across the world. These
                events influence international relations, global security,
                trade, climate policies, public health and technological
                innovation. Understanding these developments helps candidates
                analyze how nations cooperate, compete and respond to global
                challenges.
              </p>

              <p>
                Questions related to International Current Affairs frequently
                appear in PMA Long Course, ISSB, Pakistan Navy, Pakistan Air
                Force, CSS, PMS, FPSC, PPSC, FIA, ASF, MOD and other competitive
                examinations. During interviews and group discussions,
                candidates are often expected to explain recent world events,
                identify major international organizations and discuss the
                foreign policies of leading nations.
              </p>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>🌍 Why Study International Current Affairs?</h3>

                  <ul>
                    <li>Improve analytical thinking.</li>

                    <li>Understand world politics and diplomacy.</li>

                    <li>Prepare for interviews and group discussions.</li>

                    <li>Build awareness of global economic trends.</li>

                    <li>
                      Understand international organizations and treaties.
                    </li>

                    <li>Strengthen General Knowledge for competitive exams.</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🎯 Exams Covering International Current Affairs</h3>

                  <ul>
                    <li>PMA Long Course</li>

                    <li>ISSB</li>

                    <li>Pakistan Navy</li>

                    <li>Pakistan Air Force</li>

                    <li>CSS</li>

                    <li>PMS</li>

                    <li>FPSC</li>

                    <li>PPSC</li>

                    <li>FIA</li>

                    <li>ASF</li>

                    <li>MOD</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>📚 Important Areas to Prepare</h3>

                  <ul>
                    <li>United Nations and its agencies</li>

                    <li>Global conflicts and diplomacy</li>

                    <li>International organizations</li>

                    <li>World economy</li>

                    <li>Science and technology</li>

                    <li>Climate change</li>

                    <li>Major international awards</li>

                    <li>World sports events</li>

                    <li>Space exploration</li>

                    <li>World geography</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* EXAM IMPORTANCE */}

            <section className="motorways-section exa-card">
              <h2>Why International Current Affairs Matter</h2>

              <p>
                Competitive examinations increasingly test a candidate's
                awareness of global affairs rather than simple memorization of
                facts. Understanding why international events occur, their
                consequences and how they affect different countries
                demonstrates critical thinking and maturity.
              </p>

              <div className="motorway-table-wrapper">
                <table className="motorway-table">
                  <thead>
                    <tr>
                      <th>Area</th>

                      <th>Importance</th>

                      <th>Exam Frequency</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>United Nations</td>

                      <td>Peace, security and international cooperation</td>

                      <td>★★★★★</td>
                    </tr>

                    <tr>
                      <td>Global Economy</td>

                      <td>Inflation, trade, IMF, World Bank</td>

                      <td>★★★★★</td>
                    </tr>

                    <tr>
                      <td>World Leaders</td>

                      <td>International diplomacy and foreign policy</td>

                      <td>★★★★★</td>
                    </tr>

                    <tr>
                      <td>Climate Change</td>

                      <td>Environmental policies and global agreements</td>

                      <td>★★★★☆</td>
                    </tr>

                    <tr>
                      <td>Science & Technology</td>

                      <td>
                        Artificial Intelligence, cybersecurity and space
                        missions
                      </td>

                      <td>★★★★☆</td>
                    </tr>

                    <tr>
                      <td>Global Conflicts</td>

                      <td>Regional stability and international relations</td>

                      <td>★★★★★</td>
                    </tr>

                    <tr>
                      <td>International Organizations</td>

                      <td>Global governance and development</td>

                      <td>★★★★★</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="exa-alert exa-alert-info">
                <strong>Exam Tip:</strong>
                Focus on understanding the background, objectives, major
                stakeholders and international impact of important global events
                rather than memorizing isolated facts. This approach is
                especially useful for PMA interviews, ISSB discussions, CSS
                essays and FPSC viva examinations.
              </div>
            </section>
            {/* INTERNATIONAL ORGANIZATIONS */}

            <section id="organizations" className="motorways-section exa-card">
              <h2>Major International Organizations</h2>

              <p>
                International organizations play a vital role in maintaining
                peace, promoting economic development, strengthening global
                cooperation, protecting human rights and addressing worldwide
                challenges. Questions about these organizations are frequently
                asked in competitive examinations and interviews.
              </p>

              <div className="motorway-table-wrapper">
                <table className="motorway-table">
                  <thead>
                    <tr>
                      <th>Organization</th>

                      <th>Headquarters</th>

                      <th>Founded</th>

                      <th>Primary Purpose</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>United Nations (UN)</td>
                      <td>New York, USA</td>
                      <td>1945</td>
                      <td>International peace & security</td>
                    </tr>

                    <tr>
                      <td>World Health Organization (WHO)</td>
                      <td>Geneva, Switzerland</td>
                      <td>1948</td>
                      <td>Global public health</td>
                    </tr>

                    <tr>
                      <td>International Monetary Fund (IMF)</td>
                      <td>Washington, D.C., USA</td>
                      <td>1944</td>
                      <td>Global financial stability</td>
                    </tr>

                    <tr>
                      <td>World Bank</td>
                      <td>Washington, D.C., USA</td>
                      <td>1944</td>
                      <td>Development financing</td>
                    </tr>

                    <tr>
                      <td>World Trade Organization (WTO)</td>
                      <td>Geneva, Switzerland</td>
                      <td>1995</td>
                      <td>International trade rules</td>
                    </tr>

                    <tr>
                      <td>NATO</td>
                      <td>Brussels, Belgium</td>
                      <td>1949</td>
                      <td>Collective defence alliance</td>
                    </tr>

                    <tr>
                      <td>European Union (EU)</td>
                      <td>Brussels, Belgium</td>
                      <td>1993</td>
                      <td>Political & economic union</td>
                    </tr>

                    <tr>
                      <td>Shanghai Cooperation Organization (SCO)</td>
                      <td>Beijing, China</td>
                      <td>2001</td>
                      <td>Regional cooperation & security</td>
                    </tr>

                    <tr>
                      <td>Organization of Islamic Cooperation (OIC)</td>
                      <td>Jeddah, Saudi Arabia</td>
                      <td>1969</td>
                      <td>Cooperation among Muslim countries</td>
                    </tr>

                    <tr>
                      <td>BRICS</td>
                      <td>No Permanent HQ</td>
                      <td>2009</td>
                      <td>Economic cooperation</td>
                    </tr>

                    <tr>
                      <td>G7</td>
                      <td>No Permanent HQ</td>
                      <td>1975</td>
                      <td>Economic coordination</td>
                    </tr>

                    <tr>
                      <td>G20</td>
                      <td>No Permanent HQ</td>
                      <td>1999</td>
                      <td>Global economic cooperation</td>
                    </tr>

                    <tr>
                      <td>ASEAN</td>
                      <td>Jakarta, Indonesia</td>
                      <td>1967</td>
                      <td>Regional cooperation in Southeast Asia</td>
                    </tr>

                    <tr>
                      <td>UNESCO</td>
                      <td>Paris, France</td>
                      <td>1945</td>
                      <td>Education, science & culture</td>
                    </tr>

                    <tr>
                      <td>UNICEF</td>
                      <td>New York, USA</td>
                      <td>1946</td>
                      <td>Children's welfare</td>
                    </tr>

                    <tr>
                      <td>IAEA</td>
                      <td>Vienna, Austria</td>
                      <td>1957</td>
                      <td>Nuclear safety & cooperation</td>
                    </tr>

                    <tr>
                      <td>FAO</td>
                      <td>Rome, Italy</td>
                      <td>1945</td>
                      <td>Food security & agriculture</td>
                    </tr>

                    <tr>
                      <td>Interpol</td>
                      <td>Lyon, France</td>
                      <td>1923</td>
                      <td>International police cooperation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ORGANIZATION DETAILS */}

            <section className="motorways-section exa-card">
              <h2>Important International Organizations Explained</h2>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>🇺🇳 United Nations (UN)</h3>

                  <p>
                    Established on <strong>24 October 1945</strong>, the United
                    Nations is the world's largest international organization.
                    It currently has <strong>193 member states</strong> and
                    works to maintain international peace and security, promote
                    sustainable development, protect human rights, provide
                    humanitarian assistance and uphold international law.
                  </p>

                  <ul>
                    <li>
                      <strong>Headquarters:</strong> New York, USA
                    </li>

                    <li>
                      <strong>Current Secretary-General:</strong> António
                      Guterres
                    </li>

                    <li>
                      <strong>Official Languages:</strong> Arabic, Chinese,
                      English, French, Russian and Spanish
                    </li>

                    <li>
                      <strong>Exam Importance:</strong> ★★★★★
                    </li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🏥 World Health Organization (WHO)</h3>

                  <p>
                    WHO is the specialized agency of the United Nations
                    responsible for international public health. It coordinates
                    disease control, vaccination campaigns, health emergencies
                    and global medical standards.
                  </p>

                  <ul>
                    <li>
                      <strong>Headquarters:</strong> Geneva, Switzerland
                    </li>

                    <li>
                      <strong>Director-General:</strong> Dr. Tedros Adhanom
                      Ghebreyesus
                    </li>

                    <li>
                      <strong>Founded:</strong> 7 April 1948
                    </li>

                    <li>
                      <strong>Exam Importance:</strong> ★★★★★
                    </li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>💰 International Monetary Fund (IMF)</h3>

                  <p>
                    The IMF promotes global monetary cooperation, financial
                    stability, international trade and sustainable economic
                    growth. It provides financial assistance and policy advice
                    to member countries facing balance-of-payments difficulties.
                  </p>

                  <ul>
                    <li>
                      <strong>Headquarters:</strong> Washington, D.C., USA
                    </li>

                    <li>
                      <strong>Managing Director:</strong> Kristalina Georgieva
                    </li>

                    <li>
                      <strong>Founded:</strong> 1944
                    </li>

                    <li>
                      <strong>Exam Importance:</strong> ★★★★★
                    </li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🏦 World Bank</h3>

                  <p>
                    The World Bank finances development projects,
                    infrastructure, education, healthcare and poverty reduction
                    initiatives in developing countries.
                  </p>

                  <ul>
                    <li>
                      <strong>Headquarters:</strong> Washington, D.C., USA
                    </li>

                    <li>
                      <strong>President:</strong> Ajay Banga
                    </li>

                    <li>
                      <strong>Founded:</strong> 1944
                    </li>

                    <li>
                      <strong>Exam Importance:</strong> ★★★★★
                    </li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🛡 NATO</h3>

                  <p>
                    The North Atlantic Treaty Organization is a collective
                    defence alliance whose members agree that an attack against
                    one member is considered an attack against all members under
                    Article 5 of the North Atlantic Treaty.
                  </p>

                  <ul>
                    <li>
                      <strong>Headquarters:</strong> Brussels, Belgium
                    </li>

                    <li>
                      <strong>Secretary General:</strong> Mark Rutte
                    </li>

                    <li>
                      <strong>Founded:</strong> 1949
                    </li>

                    <li>
                      <strong>Exam Importance:</strong> ★★★★★
                    </li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>☪ Organization of Islamic Cooperation (OIC)</h3>

                  <p>
                    The OIC is the second-largest intergovernmental organization
                    after the United Nations. It promotes cooperation among
                    Muslim countries in political, economic, cultural and
                    scientific fields.
                  </p>

                  <ul>
                    <li>
                      <strong>Headquarters:</strong> Jeddah, Saudi Arabia
                    </li>

                    <li>
                      <strong>Members:</strong> 57 States
                    </li>

                    <li>
                      <strong>Secretary-General:</strong> Hissein Brahim Taha
                    </li>

                    <li>
                      <strong>Exam Importance:</strong> ★★★★★
                    </li>
                  </ul>
                </div>
              </div>

              <div className="exa-alert exa-alert-info">
                <strong>Exam Tip:</strong> Always remember the headquarters,
                founding year, primary objective and current head (where
                applicable) of major international organizations. These are
                among the most frequently tested facts in competitive
                examinations and interviews.
              </div>
            </section>

            {/* CURRENT WORLD LEADERS */}

            <section id="leaders" className="motorways-section exa-card">
              <h2>Current World Leaders</h2>

              <p>
                Knowing the heads of state and heads of government of major
                countries is an essential part of competitive examination
                preparation. Questions about world leaders frequently appear in
                PMA, ISSB, CSS, FPSC, PPSC and interview sessions.
              </p>

              <div className="exa-alert exa-alert-warning">
                <strong>Important:</strong> Political offices change over time.
                Always verify the latest office holders before appearing in an
                examination or interview.
              </div>

              <div className="motorway-table-wrapper">
                <table className="motorway-table">
                  <thead>
                    <tr>
                      <th>Country</th>
                      <th>Capital</th>
                      <th>Head of State</th>
                      <th>Head of Government</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>United States</td>
                      <td>Washington, D.C.</td>
                      <td>Donald Trump</td>
                      <td>Donald Trump</td>
                    </tr>

                    <tr>
                      <td>China</td>
                      <td>Beijing</td>
                      <td>Xi Jinping</td>
                      <td>Li Qiang</td>
                    </tr>

                    <tr>
                      <td>Russia</td>
                      <td>Moscow</td>
                      <td>Vladimir Putin</td>
                      <td>Mikhail Mishustin</td>
                    </tr>

                    <tr>
                      <td>India</td>
                      <td>New Delhi</td>
                      <td>Droupadi Murmu</td>
                      <td>Narendra Modi</td>
                    </tr>

                    <tr>
                      <td>United Kingdom</td>
                      <td>London</td>
                      <td>King Charles III</td>
                      <td>Keir Starmer</td>
                    </tr>

                    <tr>
                      <td>France</td>
                      <td>Paris</td>
                      <td>Emmanuel Macron</td>
                      <td>François Bayrou</td>
                    </tr>

                    <tr>
                      <td>Germany</td>
                      <td>Berlin</td>
                      <td>Frank-Walter Steinmeier</td>
                      <td>Friedrich Merz</td>
                    </tr>

                    <tr>
                      <td>Japan</td>
                      <td>Tokyo</td>
                      <td>Emperor Naruhito</td>
                      <td>Shigeru Ishiba</td>
                    </tr>

                    <tr>
                      <td>Canada</td>
                      <td>Ottawa</td>
                      <td>King Charles III</td>
                      <td>Mark Carney</td>
                    </tr>

                    <tr>
                      <td>Australia</td>
                      <td>Canberra</td>
                      <td>King Charles III</td>
                      <td>Anthony Albanese</td>
                    </tr>

                    <tr>
                      <td>Saudi Arabia</td>
                      <td>Riyadh</td>
                      <td>King Salman bin Abdulaziz</td>
                      <td>Crown Prince Mohammed bin Salman</td>
                    </tr>

                    <tr>
                      <td>United Arab Emirates</td>
                      <td>Abu Dhabi</td>
                      <td>Sheikh Mohamed bin Zayed Al Nahyan</td>
                      <td>Sheikh Mohammed bin Rashid Al Maktoum</td>
                    </tr>

                    <tr>
                      <td>Türkiye</td>
                      <td>Ankara</td>
                      <td>Recep Tayyip Erdoğan</td>
                      <td>Recep Tayyip Erdoğan</td>
                    </tr>

                    <tr>
                      <td>Iran</td>
                      <td>Tehran</td>
                      <td>Masoud Pezeshkian</td>
                      <td>Masoud Pezeshkian</td>
                    </tr>

                    <tr>
                      <td>Pakistan</td>
                      <td>Islamabad</td>
                      <td>President of Pakistan</td>
                      <td>Prime Minister of Pakistan</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* WORLD POWER CENTRES */}

            <section className="motorways-section exa-card">
              <h2>Major Global Powers</h2>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>🇺🇸 United States</h3>

                  <p>
                    The United States remains one of the world's leading
                    economic, military and technological powers. It plays a
                    central role in NATO, the United Nations, the G7, the G20
                    and numerous global security and economic initiatives.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🇨🇳 China</h3>

                  <p>
                    China is the world's second-largest economy and a major
                    global manufacturing, technological and trading nation. It
                    is a permanent member of the UN Security Council and plays a
                    leading role in the Belt and Road Initiative and the
                    Shanghai Cooperation Organization.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🇷🇺 Russia</h3>

                  <p>
                    Russia possesses one of the world's largest military
                    capabilities and is a permanent member of the United Nations
                    Security Council. It is an influential actor in Eurasian
                    geopolitics, energy markets and international security.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🇮🇳 India</h3>

                  <p>
                    India is one of the world's fastest-growing major economies,
                    the most populous country and an important regional power in
                    South Asia. It is also a member of the G20, BRICS and the
                    Shanghai Cooperation Organization.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🇪🇺 European Union</h3>

                  <p>
                    The European Union is a political and economic union of
                    European countries with a single market and coordinated
                    policies on trade, climate, research and regional
                    development.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🌏 Indo-Pacific Region</h3>

                  <p>
                    The Indo-Pacific has become one of the world's most
                    important strategic regions because of international trade
                    routes, maritime security, technological competition and
                    geopolitical influence.
                  </p>
                </div>
              </div>
            </section>

            {/* GLOBAL GEOPOLITICS */}

            <section id="geopolitics" className="motorways-section exa-card">
              <h2>Global Geopolitics & Major International Issues</h2>

              <p>
                Geopolitics is the study of how geography, economics, military
                power, natural resources and diplomacy influence relations
                between countries. Modern international affairs are shaped by
                strategic competition, regional conflicts, energy security,
                trade routes, emerging technologies and international alliances.
              </p>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>🇷🇺 Russia–Ukraine Conflict</h3>

                  <p>
                    The Russia–Ukraine conflict remains one of the most
                    significant geopolitical developments of the 21st century.
                    It has affected global food supplies, energy markets,
                    international diplomacy, military cooperation and European
                    security. The conflict has also increased defence spending
                    across many countries and influenced NATO's strategic
                    priorities.
                  </p>

                  <ul>
                    <li>Started in 2014 and expanded significantly in 2022.</li>
                    <li>
                      Major impact on wheat, fertilizer and energy markets.
                    </li>
                    <li>Strengthened NATO cooperation.</li>
                    <li>Frequently discussed in competitive examinations.</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🇮🇱 Middle East Crisis</h3>

                  <p>
                    The Middle East remains one of the world's most
                    strategically important regions because of its energy
                    resources, religious significance and major international
                    shipping routes. Regional conflicts have humanitarian,
                    political and economic impacts far beyond the region itself.
                  </p>

                  <ul>
                    <li>Important for global energy security.</li>
                    <li>Influences international diplomacy.</li>
                    <li>Frequently appears in interviews and discussions.</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🇨🇳 Taiwan Strait</h3>

                  <p>
                    Taiwan is one of the world's leading producers of advanced
                    semiconductor chips. Developments in the Taiwan Strait are
                    closely watched because they affect technology supply
                    chains, maritime security and relations between major global
                    powers.
                  </p>

                  <ul>
                    <li>Strategic location in East Asia.</li>
                    <li>Critical semiconductor manufacturing hub.</li>
                    <li>Major topic in Indo-Pacific security.</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🌊 South China Sea</h3>

                  <p>
                    The South China Sea is among the busiest maritime trade
                    routes in the world. Several countries have overlapping
                    territorial claims, making the region strategically
                    important for global commerce, fisheries and energy
                    resources.
                  </p>

                  <ul>
                    <li>Vital international shipping route.</li>
                    <li>Rich in natural resources.</li>
                    <li>Important for regional security.</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🚢 Red Sea & Suez Route</h3>

                  <p>
                    The Red Sea and Suez Canal connect Europe and Asia through
                    one of the world's most important maritime trade corridors.
                    Disruptions in this region can delay international shipping,
                    increase transportation costs and affect global supply
                    chains.
                  </p>

                  <ul>
                    <li>One of the world's busiest trade routes.</li>
                    <li>Critical for oil and container shipping.</li>
                    <li>Major global economic importance.</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🇦🇫 Afghanistan</h3>

                  <p>
                    Afghanistan remains strategically important because of its
                    location in Central and South Asia. Regional security,
                    humanitarian challenges, border management and economic
                    connectivity make developments in Afghanistan particularly
                    important for neighbouring countries, including Pakistan.
                  </p>

                  <ul>
                    <li>Regional security significance.</li>
                    <li>Cross-border trade and connectivity.</li>
                    <li>Important in Pakistan's foreign policy.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* GLOBAL STRATEGIC ISSUES */}

            <section className="motorways-section exa-card">
              <h2>Major Global Strategic Issues</h2>

              <div className="motorway-table-wrapper">
                <table className="motorway-table">
                  <thead>
                    <tr>
                      <th>Issue</th>
                      <th>Why It Matters</th>
                      <th>Exam Importance</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Artificial Intelligence</td>

                      <td>
                        Economic growth, automation, cybersecurity and military
                        applications.
                      </td>

                      <td>★★★★★</td>
                    </tr>

                    <tr>
                      <td>Cyber Security</td>

                      <td>
                        Protecting governments, businesses and critical
                        infrastructure from cyber threats.
                      </td>

                      <td>★★★★★</td>
                    </tr>

                    <tr>
                      <td>Energy Security</td>

                      <td>
                        Stable supplies of oil, gas and electricity are
                        essential for national economies.
                      </td>

                      <td>★★★★★</td>
                    </tr>

                    <tr>
                      <td>Food Security</td>

                      <td>
                        Population growth, climate change and conflicts affect
                        food availability worldwide.
                      </td>

                      <td>★★★★☆</td>
                    </tr>

                    <tr>
                      <td>Water Security</td>

                      <td>
                        Freshwater scarcity is becoming a major international
                        challenge.
                      </td>

                      <td>★★★★☆</td>
                    </tr>

                    <tr>
                      <td>Migration</td>

                      <td>
                        Wars, climate change and economic conditions continue to
                        increase global migration.
                      </td>

                      <td>★★★★☆</td>
                    </tr>

                    <tr>
                      <td>Climate Change</td>

                      <td>
                        Rising temperatures, floods and extreme weather affect
                        all regions of the world.
                      </td>

                      <td>★★★★★</td>
                    </tr>

                    <tr>
                      <td>Global Inflation</td>

                      <td>
                        Impacts purchasing power, trade and monetary policy
                        across economies.
                      </td>

                      <td>★★★★★</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="revision-box">
                <h3>🌍 Quick Revision</h3>

                <div className="revision-grid">
                  <div>
                    <strong>Largest Geopolitical Conflict</strong>
                    <span>Russia–Ukraine</span>
                  </div>

                  <div>
                    <strong>Major Shipping Route</strong>
                    <span>Suez Canal</span>
                  </div>

                  <div>
                    <strong>Semiconductor Hub</strong>
                    <span>Taiwan</span>
                  </div>

                  <div>
                    <strong>Strategic Maritime Region</strong>
                    <span>South China Sea</span>
                  </div>

                  <div>
                    <strong>Important Energy Region</strong>
                    <span>Middle East</span>
                  </div>

                  <div>
                    <strong>Regional Security Focus</strong>
                    <span>Afghanistan</span>
                  </div>
                </div>
              </div>
            </section>

            {/* GLOBAL ECONOMY */}

            <section id="economy" className="motorways-section exa-card">
              <h2>Global Economy & International Finance</h2>

              <p>
                The global economy is an interconnected system in which
                countries trade goods, services, technology and capital.
                International organizations such as the International Monetary
                Fund (IMF), World Bank and World Trade Organization (WTO)
                promote financial stability, economic development and
                international trade. Understanding global economic trends is
                essential for competitive examinations and interviews.
              </p>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>💰 International Monetary Fund (IMF)</h3>

                  <p>
                    The IMF promotes international monetary cooperation and
                    helps member countries facing balance-of-payments crises by
                    providing financial assistance and economic policy advice.
                  </p>

                  <ul>
                    <li>
                      <strong>Founded:</strong> 1944
                    </li>
                    <li>
                      <strong>Headquarters:</strong> Washington, D.C.
                    </li>
                    <li>
                      <strong>Managing Director:</strong> Kristalina Georgieva
                    </li>
                    <li>
                      <strong>Main Role:</strong> Financial stability
                    </li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🏦 World Bank</h3>

                  <p>
                    The World Bank finances infrastructure, education, health,
                    agriculture and poverty-reduction projects in developing
                    countries through loans, grants and technical assistance.
                  </p>

                  <ul>
                    <li>
                      <strong>Founded:</strong> 1944
                    </li>
                    <li>
                      <strong>President:</strong> Ajay Banga
                    </li>
                    <li>
                      <strong>Main Objective:</strong> Development financing
                    </li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🌍 World Trade Organization (WTO)</h3>

                  <p>
                    The WTO develops and administers international trade rules,
                    resolves trade disputes and encourages free and fair trade
                    among member economies.
                  </p>

                  <ul>
                    <li>
                      <strong>Founded:</strong> 1995
                    </li>
                    <li>
                      <strong>Headquarters:</strong> Geneva
                    </li>
                    <li>
                      <strong>Focus:</strong> International trade
                    </li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🛢 OPEC & OPEC+</h3>

                  <p>
                    OPEC is an alliance of major oil-exporting countries that
                    seeks to coordinate petroleum production policies. OPEC+
                    includes additional partner countries that cooperate on oil
                    output and market stability.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>📈 Inflation</h3>

                  <p>
                    Inflation is the sustained increase in the general level of
                    prices over time. Moderate inflation is common, but high
                    inflation reduces purchasing power and can slow economic
                    growth.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>📉 Global Recession</h3>

                  <p>
                    A recession is a prolonged period of economic slowdown
                    marked by declining production, rising unemployment and
                    reduced consumer spending. International crises can trigger
                    recessions across multiple countries.
                  </p>
                </div>
              </div>
            </section>

            {/* IMPORTANT ECONOMIC TERMS */}

            <section className="motorways-section exa-card">
              <h2>Important Global Economic Concepts</h2>

              <div className="motorway-table-wrapper">
                <table className="motorway-table">
                  <thead>
                    <tr>
                      <th>Term</th>
                      <th>Meaning</th>
                      <th>Exam Importance</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>GDP</td>

                      <td>
                        Total market value of goods and services produced within
                        a country.
                      </td>

                      <td>★★★★★</td>
                    </tr>

                    <tr>
                      <td>GDP Per Capita</td>

                      <td>Average economic output per person.</td>

                      <td>★★★★☆</td>
                    </tr>

                    <tr>
                      <td>Inflation</td>

                      <td>General increase in prices over time.</td>

                      <td>★★★★★</td>
                    </tr>

                    <tr>
                      <td>Deflation</td>

                      <td>Continuous decline in general price levels.</td>

                      <td>★★★☆☆</td>
                    </tr>

                    <tr>
                      <td>Foreign Direct Investment (FDI)</td>

                      <td>
                        Investment made by a foreign company in another
                        country's economy.
                      </td>

                      <td>★★★★★</td>
                    </tr>

                    <tr>
                      <td>Balance of Payments</td>

                      <td>
                        Record of all financial transactions between a country
                        and the rest of the world.
                      </td>

                      <td>★★★★★</td>
                    </tr>

                    <tr>
                      <td>Foreign Exchange Reserves</td>

                      <td>
                        Assets held by a central bank in foreign currencies.
                      </td>

                      <td>★★★★☆</td>
                    </tr>

                    <tr>
                      <td>Tariff</td>

                      <td>Tax imposed on imported goods.</td>

                      <td>★★★★☆</td>
                    </tr>

                    <tr>
                      <td>Free Trade</td>

                      <td>International trade with minimal restrictions.</td>

                      <td>★★★★☆</td>
                    </tr>

                    <tr>
                      <td>Supply Chain</td>

                      <td>
                        Network involved in producing and delivering products.
                      </td>

                      <td>★★★★★</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* WORLD ECONOMIC FACTS */}

            <section className="motorways-section exa-card">
              <h2>Quick World Economy Facts</h2>

              <div className="revision-box">
                <div className="revision-grid">
                  <div>
                    <strong>IMF Headquarters</strong>
                    <span>Washington, D.C.</span>
                  </div>

                  <div>
                    <strong>World Bank HQ</strong>
                    <span>Washington, D.C.</span>
                  </div>

                  <div>
                    <strong>WTO Headquarters</strong>
                    <span>Geneva</span>
                  </div>

                  <div>
                    <strong>OPEC Headquarters</strong>
                    <span>Vienna</span>
                  </div>

                  <div>
                    <strong>Largest Economy</strong>
                    <span>United States (Nominal GDP)</span>
                  </div>

                  <div>
                    <strong>Second Largest Economy</strong>
                    <span>China</span>
                  </div>

                  <div>
                    <strong>Largest Trading Nation</strong>
                    <span>China</span>
                  </div>

                  <div>
                    <strong>Most Widely Held Reserve Currency</strong>
                    <span>US Dollar (USD)</span>
                  </div>

                  <div>
                    <strong>Global Financial Centre</strong>
                    <span>New York & London</span>
                  </div>

                  <div>
                    <strong>Major Development Bank</strong>
                    <span>World Bank</span>
                  </div>

                  <div>
                    <strong>Oil Exporters' Group</strong>
                    <span>OPEC</span>
                  </div>

                  <div>
                    <strong>Trade Rules Organization</strong>
                    <span>WTO</span>
                  </div>
                </div>
              </div>

              <div className="exa-alert exa-alert-success">
                <strong>Exam Tip:</strong> Memorize the headquarters, founding
                years, objectives and current heads of major economic
                organizations. Also understand concepts such as GDP, inflation,
                FDI, tariffs and balance of payments, as they frequently appear
                in PMA, ISSB, CSS, FPSC and other competitive examinations.
              </div>
            </section>

            {/* SCIENCE & TECHNOLOGY */}

            <section id="science" className="motorways-section exa-card">
              <h2>Science, Technology & Space Exploration</h2>

              <p>
                Scientific innovation and technological advancement continue to
                transform economies, healthcare, education, defence,
                communication and space exploration. Understanding emerging
                technologies helps candidates analyze future global trends and
                prepares them for competitive examinations, interviews and group
                discussions.
              </p>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>🤖 Artificial Intelligence (AI)</h3>

                  <p>
                    Artificial Intelligence enables computers and machines to
                    perform tasks that normally require human intelligence,
                    including learning, reasoning, language understanding,
                    decision-making and image recognition. AI is transforming
                    healthcare, banking, transportation, education, defence and
                    scientific research.
                  </p>

                  <ul>
                    <li>Machine Learning</li>
                    <li>Generative AI</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🔐 Cyber Security</h3>

                  <p>
                    Cybersecurity protects computers, networks, governments,
                    businesses and individuals from cyberattacks, ransomware,
                    phishing, hacking and digital espionage. As more services
                    move online, cybersecurity has become a critical component
                    of national security.
                  </p>

                  <ul>
                    <li>Network Security</li>
                    <li>Cloud Security</li>
                    <li>Digital Privacy</li>
                    <li>Ethical Hacking</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>⚛ Quantum Computing</h3>

                  <p>
                    Quantum computers use quantum bits (qubits) to perform
                    complex calculations much faster than many traditional
                    computers for selected problems. They have potential
                    applications in cryptography, medicine, finance and
                    scientific simulations.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🤖 Robotics</h3>

                  <p>
                    Robotics combines engineering, artificial intelligence and
                    automation to design intelligent machines capable of
                    performing repetitive, dangerous or highly precise tasks
                    across many industries.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🌐 Internet of Things (IoT)</h3>

                  <p>
                    The Internet of Things connects physical devices through the
                    internet, enabling them to collect, exchange and analyze
                    data. Smart homes, wearable devices and industrial
                    automation are common IoT applications.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🧬 Biotechnology</h3>

                  <p>
                    Biotechnology applies biological systems and living
                    organisms to develop medicines, improve agriculture, produce
                    vaccines and solve environmental challenges through
                    scientific innovation.
                  </p>
                </div>
              </div>
            </section>

            {/* SPACE EXPLORATION */}

            <section className="motorways-section exa-card">
              <h2>Major Space Agencies</h2>

              <p>
                Space exploration has become one of the fastest-growing fields
                of science and technology. Governments and private companies
                continue to develop satellites, deep-space missions and reusable
                launch systems that improve communication, navigation and
                scientific research.
              </p>

              <div className="motorway-table-wrapper">
                <table className="motorway-table">
                  <thead>
                    <tr>
                      <th>Agency</th>
                      <th>Country / Region</th>
                      <th>Headquarters</th>
                      <th>Major Role</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>NASA</td>
                      <td>United States</td>
                      <td>Washington, D.C.</td>
                      <td>Space exploration & scientific research</td>
                    </tr>

                    <tr>
                      <td>ESA</td>
                      <td>European Union</td>
                      <td>Paris, France</td>
                      <td>European space missions</td>
                    </tr>

                    <tr>
                      <td>ISRO</td>
                      <td>India</td>
                      <td>Bengaluru</td>
                      <td>Satellite & lunar missions</td>
                    </tr>

                    <tr>
                      <td>CNSA</td>
                      <td>China</td>
                      <td>Beijing</td>
                      <td>Chinese space programme</td>
                    </tr>

                    <tr>
                      <td>JAXA</td>
                      <td>Japan</td>
                      <td>Tokyo</td>
                      <td>Space science & exploration</td>
                    </tr>

                    <tr>
                      <td>Roscosmos</td>
                      <td>Russia</td>
                      <td>Moscow</td>
                      <td>Human spaceflight & satellites</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* PRIVATE SPACE COMPANIES */}

            <section className="motorways-section exa-card">
              <h2>Leading Space Companies</h2>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>🚀 SpaceX</h3>

                  <p>
                    Founded by Elon Musk, SpaceX pioneered reusable rocket
                    technology and operates the Falcon rocket family and the
                    Starlink satellite network. The company is also developing
                    the Starship launch system for future Moon and Mars
                    missions.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🛰 Blue Origin</h3>

                  <p>
                    Founded by Jeff Bezos, Blue Origin develops reusable launch
                    vehicles and technologies aimed at expanding access to space
                    through sustainable commercial spaceflight.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🌎 International Space Station (ISS)</h3>

                  <p>
                    The International Space Station is a permanently inhabited
                    research laboratory in low Earth orbit operated through
                    international cooperation. Scientists conduct experiments in
                    medicine, biology, physics and engineering under
                    microgravity conditions.
                  </p>
                </div>
              </div>
            </section>

            {/* TECHNOLOGY REVISION */}

            <section className="motorways-section exa-card">
              <h2>Technology Quick Revision</h2>

              <div className="revision-box">
                <div className="revision-grid">
                  <div>
                    <strong>Largest Space Agency</strong>
                    <span>NASA</span>
                  </div>

                  <div>
                    <strong>European Space Agency</strong>
                    <span>ESA</span>
                  </div>

                  <div>
                    <strong>India's Space Agency</strong>
                    <span>ISRO</span>
                  </div>

                  <div>
                    <strong>China's Space Agency</strong>
                    <span>CNSA</span>
                  </div>

                  <div>
                    <strong>Japan's Space Agency</strong>
                    <span>JAXA</span>
                  </div>

                  <div>
                    <strong>Russian Space Agency</strong>
                    <span>Roscosmos</span>
                  </div>

                  <div>
                    <strong>AI Technology</strong>
                    <span>Machine Learning</span>
                  </div>

                  <div>
                    <strong>Future Computing</strong>
                    <span>Quantum Computing</span>
                  </div>

                  <div>
                    <strong>Internet Security</strong>
                    <span>Cyber Security</span>
                  </div>

                  <div>
                    <strong>Connected Devices</strong>
                    <span>Internet of Things</span>
                  </div>

                  <div>
                    <strong>Commercial Space Leader</strong>
                    <span>SpaceX</span>
                  </div>

                  <div>
                    <strong>Orbiting Research Lab</strong>
                    <span>International Space Station</span>
                  </div>
                </div>
              </div>

              <div className="exa-alert exa-alert-success">
                <strong>Exam Tip:</strong> Focus on the applications of AI,
                cybersecurity, biotechnology, quantum computing and major space
                agencies. These topics increasingly appear in PMA, ISSB, CSS,
                FPSC, PPSC and defence-related interviews as technology becomes
                more important in national development and security.
              </div>
            </section>

            {/* CLIMATE CHANGE */}

            <section id="climate" className="motorways-section exa-card">
              <h2>Climate Change & Global Environment</h2>

              <p>
                Climate change refers to long-term changes in Earth's average
                temperature and weather patterns, primarily caused by increased
                greenhouse gas emissions from human activities. Rising global
                temperatures, melting glaciers, rising sea levels and extreme
                weather events have made climate change one of the world's
                greatest challenges.
              </p>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>🌡 Global Warming</h3>

                  <p>
                    Global warming is the gradual increase in Earth's average
                    surface temperature due to the accumulation of greenhouse
                    gases such as carbon dioxide (CO₂), methane (CH₄) and
                    nitrous oxide (N₂O). Human activities including burning
                    fossil fuels, industrialization and deforestation are major
                    contributors.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🌎 Paris Agreement</h3>

                  <p>
                    The Paris Agreement was adopted in 2015 under the United
                    Nations Framework Convention on Climate Change (UNFCCC). It
                    aims to limit global temperature rise to well below 2°C
                    above pre-industrial levels while pursuing efforts to limit
                    warming to 1.5°C.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🌱 Net Zero Emissions</h3>

                  <p>
                    Net Zero means balancing greenhouse gas emissions with their
                    removal from the atmosphere through forests, carbon capture
                    or other technologies. Many countries have announced
                    long-term Net Zero targets.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>⚡ Renewable Energy</h3>

                  <p>
                    Renewable energy comes from naturally replenished resources
                    including solar, wind, hydroelectric, geothermal and
                    biomass. Increasing renewable energy production reduces
                    dependence on fossil fuels and helps lower greenhouse gas
                    emissions.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>❄ Glacier Melting</h3>

                  <p>
                    Rising temperatures are accelerating glacier melting in
                    regions such as the Himalayas, Alps and Arctic. This
                    contributes to rising sea levels and threatens freshwater
                    supplies for millions of people.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>💧 Water Scarcity</h3>

                  <p>
                    Climate change, population growth and pollution are
                    increasing pressure on freshwater resources. Water security
                    has become an important issue for governments worldwide.
                  </p>
                </div>
              </div>
            </section>

            {/* CLIMATE ORGANIZATIONS */}

            <section className="motorways-section exa-card">
              <h2>Major Environmental Organizations & Agreements</h2>

              <div className="motorway-table-wrapper">
                <table className="motorway-table">
                  <thead>
                    <tr>
                      <th>Organization / Agreement</th>
                      <th>Headquarters</th>
                      <th>Main Objective</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>UN Environment Programme (UNEP)</td>
                      <td>Nairobi, Kenya</td>
                      <td>Global environmental protection</td>
                    </tr>

                    <tr>
                      <td>
                        UN Framework Convention on Climate Change (UNFCCC)
                      </td>
                      <td>Bonn, Germany</td>
                      <td>International climate cooperation</td>
                    </tr>

                    <tr>
                      <td>Paris Agreement</td>
                      <td>Global Treaty</td>
                      <td>Limit global warming</td>
                    </tr>

                    <tr>
                      <td>Intergovernmental Panel on Climate Change (IPCC)</td>
                      <td>Geneva, Switzerland</td>
                      <td>Climate science assessments</td>
                    </tr>

                    <tr>
                      <td>Convention on Biological Diversity (CBD)</td>
                      <td>Montreal, Canada</td>
                      <td>Biodiversity conservation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SUSTAINABLE DEVELOPMENT GOALS */}

            <section className="motorways-section exa-card">
              <h2>United Nations Sustainable Development Goals (SDGs)</h2>

              <p>
                The Sustainable Development Goals (SDGs) are 17 global goals
                adopted by the United Nations in 2015 to promote peace,
                prosperity, environmental sustainability and social development
                by 2030.
              </p>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>🌍 Environmental SDGs</h3>

                  <ul>
                    <li>Clean Water and Sanitation</li>
                    <li>Affordable and Clean Energy</li>
                    <li>Climate Action</li>
                    <li>Life Below Water</li>
                    <li>Life on Land</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>👨‍👩‍👧 Social SDGs</h3>

                  <ul>
                    <li>No Poverty</li>
                    <li>Zero Hunger</li>
                    <li>Good Health and Well-being</li>
                    <li>Quality Education</li>
                    <li>Gender Equality</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>📈 Economic SDGs</h3>

                  <ul>
                    <li>Decent Work</li>
                    <li>Industry & Innovation</li>
                    <li>Reduced Inequalities</li>
                    <li>Sustainable Cities</li>
                    <li>Responsible Consumption</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CLIMATE REVISION */}

            <section className="motorways-section exa-card">
              <h2>Climate Change Quick Revision</h2>

              <div className="revision-box">
                <div className="revision-grid">
                  <div>
                    <strong>Major Climate Treaty</strong>
                    <span>Paris Agreement</span>
                  </div>

                  <div>
                    <strong>Climate Convention</strong>
                    <span>UNFCCC</span>
                  </div>

                  <div>
                    <strong>Environmental Agency</strong>
                    <span>UNEP</span>
                  </div>

                  <div>
                    <strong>Climate Science Body</strong>
                    <span>IPCC</span>
                  </div>

                  <div>
                    <strong>Main Greenhouse Gas</strong>
                    <span>Carbon Dioxide (CO₂)</span>
                  </div>

                  <div>
                    <strong>Clean Energy Sources</strong>
                    <span>Solar, Wind & Hydro</span>
                  </div>

                  <div>
                    <strong>Global Goals</strong>
                    <span>17 SDGs</span>
                  </div>

                  <div>
                    <strong>Target Year</strong>
                    <span>2030</span>
                  </div>

                  <div>
                    <strong>Major Environmental Challenge</strong>
                    <span>Climate Change</span>
                  </div>

                  <div>
                    <strong>Long-Term Goal</strong>
                    <span>Net Zero Emissions</span>
                  </div>
                </div>
              </div>

              <div className="exa-alert exa-alert-warning">
                <strong>Exam Tip:</strong> Remember the Paris Agreement, UNFCCC,
                UNEP, IPCC, Net Zero, renewable energy, greenhouse gases and the
                Sustainable Development Goals. These topics are regularly asked
                in competitive examinations and interview discussions related to
                global affairs.
              </div>
            </section>

            {/* INTERNATIONAL AWARDS & GLOBAL SPORTS */}

            <section id="awards" className="motorways-section exa-card">
              <h2>International Awards & Global Sporting Events</h2>

              <p>
                International awards recognize outstanding achievements in
                science, literature, peace, journalism, cinema and sports.
                Likewise, global sporting events promote international
                cooperation, healthy competition and cultural exchange.
                Questions related to these awards and events are common in
                competitive examinations.
              </p>
            </section>

            {/* IMPORTANT INTERNATIONAL AWARDS */}

            <section className="motorways-section exa-card">
              <h2>Major International Awards</h2>

              <div className="motorway-table-wrapper">
                <table className="motorway-table">
                  <thead>
                    <tr>
                      <th>Award</th>
                      <th>Field</th>
                      <th>Country / Organization</th>
                      <th>Established</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Nobel Prize</td>
                      <td>Science, Literature, Peace & Economics</td>
                      <td>Sweden / Norway</td>
                      <td>1901</td>
                    </tr>

                    <tr>
                      <td>Booker Prize</td>
                      <td>Fiction</td>
                      <td>United Kingdom</td>
                      <td>1969</td>
                    </tr>

                    <tr>
                      <td>Pulitzer Prize</td>
                      <td>Journalism & Literature</td>
                      <td>United States</td>
                      <td>1917</td>
                    </tr>

                    <tr>
                      <td>Academy Awards (Oscars)</td>
                      <td>Film Industry</td>
                      <td>Academy of Motion Picture Arts</td>
                      <td>1929</td>
                    </tr>

                    <tr>
                      <td>Grammy Awards</td>
                      <td>Music</td>
                      <td>Recording Academy</td>
                      <td>1959</td>
                    </tr>

                    <tr>
                      <td>Ballon d'Or</td>
                      <td>Football</td>
                      <td>France Football</td>
                      <td>1956</td>
                    </tr>

                    <tr>
                      <td>Laureus World Sports Awards</td>
                      <td>Sports</td>
                      <td>Laureus Academy</td>
                      <td>2000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* NOBEL PRIZE */}

            <section className="motorways-section exa-card">
              <h2>The Nobel Prize</h2>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>🏅 Overview</h3>

                  <p>
                    The Nobel Prize is one of the world's most prestigious
                    awards. It was established according to the will of Swedish
                    inventor Alfred Nobel and has been awarded annually since
                    1901 to individuals and organizations making exceptional
                    contributions to humanity.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>📚 Nobel Prize Categories</h3>

                  <ul>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Physiology or Medicine</li>
                    <li>Literature</li>
                    <li>Peace</li>
                    <li>Economic Sciences</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>📍 Important Facts</h3>

                  <ul>
                    <li>Founded by Alfred Nobel</li>
                    <li>Started in 1901</li>
                    <li>Peace Prize awarded in Oslo</li>
                    <li>Other prizes awarded in Stockholm</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* GLOBAL SPORTS */}

            <section className="motorways-section exa-card">
              <h2>Major International Sporting Events</h2>

              <div className="motorway-table-wrapper">
                <table className="motorway-table">
                  <thead>
                    <tr>
                      <th>Competition</th>
                      <th>Organizer</th>
                      <th>Frequency</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Olympic Games</td>
                      <td>International Olympic Committee (IOC)</td>
                      <td>Every 4 Years</td>
                    </tr>

                    <tr>
                      <td>FIFA World Cup</td>
                      <td>FIFA</td>
                      <td>Every 4 Years</td>
                    </tr>

                    <tr>
                      <td>ICC Cricket World Cup</td>
                      <td>International Cricket Council</td>
                      <td>Every 4 Years</td>
                    </tr>

                    <tr>
                      <td>ICC Champions Trophy</td>
                      <td>International Cricket Council</td>
                      <td>Periodic</td>
                    </tr>

                    <tr>
                      <td>UEFA European Championship</td>
                      <td>UEFA</td>
                      <td>Every 4 Years</td>
                    </tr>

                    <tr>
                      <td>Asian Games</td>
                      <td>Olympic Council of Asia</td>
                      <td>Every 4 Years</td>
                    </tr>

                    <tr>
                      <td>Commonwealth Games</td>
                      <td>Commonwealth Sport</td>
                      <td>Every 4 Years</td>
                    </tr>

                    <tr>
                      <td>Cricket Asia Cup</td>
                      <td>Asian Cricket Council</td>
                      <td>Usually Every 2–4 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* INTERNATIONAL SPORTS ORGANIZATIONS */}

            <section className="motorways-section exa-card">
              <h2>Major International Sports Organizations</h2>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>⚽ FIFA</h3>

                  <p>
                    Fédération Internationale de Football Association (FIFA) is
                    the governing body of world football. It organizes the FIFA
                    World Cup, Women's World Cup and numerous international
                    football competitions.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🏏 International Cricket Council (ICC)</h3>

                  <p>
                    The ICC is the global governing body for cricket. It
                    organizes the ICC Cricket World Cup, Champions Trophy, T20
                    World Cup and oversees international cricket rankings and
                    playing conditions.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🏅 International Olympic Committee (IOC)</h3>

                  <p>
                    The IOC governs the Olympic Movement and organizes the
                    Summer and Winter Olympic Games, bringing together athletes
                    from around the world in the spirit of excellence,
                    friendship and respect.
                  </p>
                </div>
              </div>
            </section>

            {/* QUICK REVISION */}

            <section className="motorways-section exa-card">
              <h2>Awards & Sports Quick Revision</h2>

              <div className="revision-box">
                <div className="revision-grid">
                  <div>
                    <strong>Highest Peace Award</strong>
                    <span>Nobel Peace Prize</span>
                  </div>

                  <div>
                    <strong>Highest Film Award</strong>
                    <span>Academy Awards (Oscars)</span>
                  </div>

                  <div>
                    <strong>Highest Journalism Award</strong>
                    <span>Pulitzer Prize</span>
                  </div>

                  <div>
                    <strong>Major Literary Award</strong>
                    <span>Booker Prize</span>
                  </div>

                  <div>
                    <strong>Football Governing Body</strong>
                    <span>FIFA</span>
                  </div>

                  <div>
                    <strong>Cricket Governing Body</strong>
                    <span>ICC</span>
                  </div>

                  <div>
                    <strong>Olympics Organizer</strong>
                    <span>IOC</span>
                  </div>

                  <div>
                    <strong>Football's Top Individual Award</strong>
                    <span>Ballon d'Or</span>
                  </div>

                  <div>
                    <strong>Olympics Frequency</strong>
                    <span>Every 4 Years</span>
                  </div>

                  <div>
                    <strong>FIFA World Cup Frequency</strong>
                    <span>Every 4 Years</span>
                  </div>

                  <div>
                    <strong>ICC Cricket World Cup</strong>
                    <span>Every 4 Years</span>
                  </div>

                  <div>
                    <strong>Nobel Prize Started</strong>
                    <span>1901</span>
                  </div>
                </div>
              </div>

              <div className="exa-alert exa-alert-info">
                <strong>Exam Tip:</strong> Focus on the governing bodies, award
                categories, organizing countries, founding years and event
                frequency. These facts are frequently asked in PMA, ISSB, CSS,
                FPSC, ASF, FIA and other competitive examinations.
              </div>
            </section>

            {/* INTERNATIONAL DAYS */}

            <section
              id="international-days"
              className="motorways-section exa-card"
            >
              <h2>Important International Days</h2>

              <p>
                The United Nations and other international organizations observe
                special international days to raise awareness about health,
                education, peace, environment, human rights and sustainable
                development. These dates are commonly asked in competitive
                examinations.
              </p>

              <div className="motorway-table-wrapper">
                <table className="motorway-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>International Day</th>
                      <th>Organized By</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>24 January</td>
                      <td>International Day of Education</td>
                      <td>United Nations</td>
                    </tr>

                    <tr>
                      <td>4 February</td>
                      <td>World Cancer Day</td>
                      <td>WHO / UICC</td>
                    </tr>

                    <tr>
                      <td>8 March</td>
                      <td>International Women's Day</td>
                      <td>United Nations</td>
                    </tr>

                    <tr>
                      <td>22 March</td>
                      <td>World Water Day</td>
                      <td>United Nations</td>
                    </tr>

                    <tr>
                      <td>7 April</td>
                      <td>World Health Day</td>
                      <td>WHO</td>
                    </tr>

                    <tr>
                      <td>22 April</td>
                      <td>International Mother Earth Day</td>
                      <td>United Nations</td>
                    </tr>

                    <tr>
                      <td>3 May</td>
                      <td>World Press Freedom Day</td>
                      <td>UNESCO</td>
                    </tr>

                    <tr>
                      <td>5 June</td>
                      <td>World Environment Day</td>
                      <td>UNEP</td>
                    </tr>

                    <tr>
                      <td>20 June</td>
                      <td>World Refugee Day</td>
                      <td>UNHCR</td>
                    </tr>

                    <tr>
                      <td>11 July</td>
                      <td>World Population Day</td>
                      <td>UNFPA</td>
                    </tr>

                    <tr>
                      <td>12 August</td>
                      <td>International Youth Day</td>
                      <td>United Nations</td>
                    </tr>

                    <tr>
                      <td>8 September</td>
                      <td>International Literacy Day</td>
                      <td>UNESCO</td>
                    </tr>

                    <tr>
                      <td>21 September</td>
                      <td>International Day of Peace</td>
                      <td>United Nations</td>
                    </tr>

                    <tr>
                      <td>5 October</td>
                      <td>World Teachers' Day</td>
                      <td>UNESCO</td>
                    </tr>

                    <tr>
                      <td>16 October</td>
                      <td>World Food Day</td>
                      <td>FAO</td>
                    </tr>

                    <tr>
                      <td>24 October</td>
                      <td>United Nations Day</td>
                      <td>United Nations</td>
                    </tr>

                    <tr>
                      <td>10 December</td>
                      <td>Human Rights Day</td>
                      <td>United Nations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* GLOBAL SUMMITS */}

            <section id="summits" className="motorways-section exa-card">
              <h2>Major International Summits & Forums</h2>

              <p>
                International summits bring together world leaders to discuss
                global economic growth, peace, security, climate change,
                international trade and sustainable development. Understanding
                these forums helps candidates analyze international relations
                and current affairs.
              </p>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>🌍 G20 Summit</h3>

                  <p>
                    The G20 is the premier forum for international economic
                    cooperation, representing major developed and emerging
                    economies. Leaders discuss global finance, trade, climate,
                    digital transformation and sustainable development.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🏛 G7 Summit</h3>

                  <p>
                    The G7 consists of seven advanced industrial democracies.
                    Annual meetings focus on economic policy, security,
                    technology, energy, climate change and geopolitical
                    developments.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🌱 COP Climate Conference</h3>

                  <p>
                    The Conference of the Parties (COP) is held under the
                    UNFCCC. Countries negotiate climate commitments, emissions
                    reductions, climate finance and adaptation measures.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>☪ OIC Summit</h3>

                  <p>
                    The Organization of Islamic Cooperation summit brings
                    together leaders of Muslim-majority countries to discuss
                    political, economic, scientific, humanitarian and cultural
                    cooperation.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🌏 SCO Summit</h3>

                  <p>
                    The Shanghai Cooperation Organization focuses on regional
                    security, economic cooperation, counterterrorism,
                    connectivity and political collaboration across Eurasia.
                  </p>
                </div>

                <div className="motorway-card">
                  <h3>🌐 BRICS Summit</h3>

                  <p>
                    BRICS leaders discuss economic cooperation, development
                    financing, trade, innovation and collaboration among
                    emerging economies.
                  </p>
                </div>
              </div>
            </section>

            {/* IMPORTANT WORLD FACTS */}

            <section className="motorways-section exa-card">
              <h2>Quick International Revision</h2>

              <div className="revision-box">
                <div className="revision-grid">
                  <div>
                    <strong>UN Day</strong>
                    <span>24 October</span>
                  </div>

                  <div>
                    <strong>World Environment Day</strong>
                    <span>5 June</span>
                  </div>

                  <div>
                    <strong>World Health Day</strong>
                    <span>7 April</span>
                  </div>

                  <div>
                    <strong>International Women's Day</strong>
                    <span>8 March</span>
                  </div>

                  <div>
                    <strong>World Water Day</strong>
                    <span>22 March</span>
                  </div>

                  <div>
                    <strong>Human Rights Day</strong>
                    <span>10 December</span>
                  </div>

                  <div>
                    <strong>G20 Focus</strong>
                    <span>Global Economy</span>
                  </div>

                  <div>
                    <strong>G7 Members</strong>
                    <span>7 Developed Economies</span>
                  </div>

                  <div>
                    <strong>COP</strong>
                    <span>Climate Negotiations</span>
                  </div>

                  <div>
                    <strong>OIC</strong>
                    <span>57 Member States</span>
                  </div>

                  <div>
                    <strong>SCO Headquarters</strong>
                    <span>Beijing</span>
                  </div>

                  <div>
                    <strong>UN Headquarters</strong>
                    <span>New York</span>
                  </div>
                </div>
              </div>

              <div className="exa-alert exa-alert-success">
                <strong>Exam Tip:</strong> Dates of international observances,
                headquarters of major organizations, summit objectives and
                annual global forums are among the most frequently tested
                factual topics in PMA, ISSB, CSS, FPSC and other competitive
                examinations.
              </div>
            </section>

            {/* WORLD SUPERLATIVES */}

            <section id="world-facts" className="motorways-section exa-card">
              <h2>World Superlatives & Important International Facts</h2>

              <p>
                Questions about the world's largest, longest, highest, deepest
                and oldest geographical features, economies and landmarks are
                among the most common in competitive examinations. Memorizing
                these facts helps improve performance in General Knowledge,
                Current Affairs and interview discussions.
              </p>
            </section>

            {/* WORLD SUPERLATIVES TABLE */}

            <section className="motorways-section exa-card">
              <h2>Important World Records & Superlatives</h2>

              <div className="motorway-table-wrapper">
                <table className="motorway-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Answer</th>
                      <th>Country / Region</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Largest Continent</td>
                      <td>Asia</td>
                      <td>Asia</td>
                    </tr>

                    <tr>
                      <td>Smallest Continent</td>
                      <td>Australia</td>
                      <td>Oceania</td>
                    </tr>

                    <tr>
                      <td>Largest Ocean</td>
                      <td>Pacific Ocean</td>
                      <td>Pacific</td>
                    </tr>

                    <tr>
                      <td>Deepest Ocean</td>
                      <td>Pacific Ocean</td>
                      <td>Mariana Trench</td>
                    </tr>

                    <tr>
                      <td>Highest Mountain</td>
                      <td>Mount Everest</td>
                      <td>Nepal / China</td>
                    </tr>

                    <tr>
                      <td>Longest River</td>
                      <td>Nile River</td>
                      <td>Africa</td>
                    </tr>

                    <tr>
                      <td>Largest Desert</td>
                      <td>Antarctic Desert</td>
                      <td>Antarctica</td>
                    </tr>

                    <tr>
                      <td>Largest Hot Desert</td>
                      <td>Sahara Desert</td>
                      <td>Africa</td>
                    </tr>

                    <tr>
                      <td>Largest Island</td>
                      <td>Greenland</td>
                      <td>Kingdom of Denmark</td>
                    </tr>

                    <tr>
                      <td>Largest Peninsula</td>
                      <td>Arabian Peninsula</td>
                      <td>Middle East</td>
                    </tr>

                    <tr>
                      <td>Largest Archipelago</td>
                      <td>Malay Archipelago</td>
                      <td>Southeast Asia</td>
                    </tr>

                    <tr>
                      <td>Largest Delta</td>
                      <td>Ganges–Brahmaputra Delta</td>
                      <td>Bangladesh / India</td>
                    </tr>

                    <tr>
                      <td>Largest Lake (Area)</td>
                      <td>Caspian Sea</td>
                      <td>Europe / Asia</td>
                    </tr>

                    <tr>
                      <td>Deepest Lake</td>
                      <td>Lake Baikal</td>
                      <td>Russia</td>
                    </tr>

                    <tr>
                      <td>Largest Freshwater Lake</td>
                      <td>Lake Superior</td>
                      <td>USA / Canada</td>
                    </tr>

                    <tr>
                      <td>Largest Rainforest</td>
                      <td>Amazon Rainforest</td>
                      <td>South America</td>
                    </tr>

                    <tr>
                      <td>Highest Waterfall</td>
                      <td>Angel Falls</td>
                      <td>Venezuela</td>
                    </tr>

                    <tr>
                      <td>Longest Mountain Range</td>
                      <td>Andes Mountains</td>
                      <td>South America</td>
                    </tr>

                    <tr>
                      <td>Largest Coral Reef</td>
                      <td>Great Barrier Reef</td>
                      <td>Australia</td>
                    </tr>

                    <tr>
                      <td>Coldest Continent</td>
                      <td>Antarctica</td>
                      <td>Antarctica</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* WORLD FACTS */}

            <section className="motorways-section exa-card">
              <h2>Most Important World Facts</h2>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>🌍 Geography</h3>

                  <ul>
                    <li>Largest country: Russia</li>
                    <li>Smallest country: Vatican City</li>
                    <li>Most populous country: India</li>
                    <li>Second most populous: China</li>
                    <li>Largest city (population): Tokyo Metropolitan Area</li>
                    <li>Largest continent: Asia</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>💰 Economy</h3>

                  <ul>
                    <li>Largest economy (Nominal GDP): United States</li>
                    <li>Second largest economy: China</li>
                    <li>Largest exporter: China</li>
                    <li>Most traded reserve currency: US Dollar</li>
                    <li>Largest stock exchange: New York Stock Exchange</li>
                    <li>Major financial centers: New York & London</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🏛 Politics</h3>

                  <ul>
                    <li>UN Headquarters: New York</li>
                    <li>EU Headquarters: Brussels</li>
                    <li>WHO Headquarters: Geneva</li>
                    <li>IMF Headquarters: Washington, D.C.</li>
                    <li>OIC Headquarters: Jeddah</li>
                    <li>SCO Headquarters: Beijing</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🚀 Science & Space</h3>

                  <ul>
                    <li>Largest space agency: NASA</li>
                    <li>European space agency: ESA</li>
                    <li>India's space agency: ISRO</li>
                    <li>China's space agency: CNSA</li>
                    <li>International laboratory: ISS</li>
                    <li>Commercial space leader: SpaceX</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>⚽ Sports</h3>

                  <ul>
                    <li>Football governing body: FIFA</li>
                    <li>Cricket governing body: ICC</li>
                    <li>Olympics organizer: IOC</li>
                    <li>Largest sporting event: Olympic Games</li>
                    <li>Largest football event: FIFA World Cup</li>
                    <li>Largest cricket event: ICC Cricket World Cup</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🌱 Environment</h3>

                  <ul>
                    <li>Major climate treaty: Paris Agreement</li>
                    <li>Climate convention: UNFCCC</li>
                    <li>Environmental agency: UNEP</li>
                    <li>Main greenhouse gas: Carbon Dioxide</li>
                    <li>Climate science body: IPCC</li>
                    <li>Global sustainability plan: SDGs</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* QUICK REVISION */}

            <section className="motorways-section exa-card">
              <h2>One-Minute Revision</h2>

              <div className="revision-box">
                <div className="revision-grid">
                  <div>
                    <strong>Largest Country</strong>
                    <span>Russia</span>
                  </div>

                  <div>
                    <strong>Most Populous Country</strong>
                    <span>India</span>
                  </div>

                  <div>
                    <strong>Highest Mountain</strong>
                    <span>Mount Everest</span>
                  </div>

                  <div>
                    <strong>Longest River</strong>
                    <span>Nile River</span>
                  </div>

                  <div>
                    <strong>Largest Ocean</strong>
                    <span>Pacific Ocean</span>
                  </div>

                  <div>
                    <strong>Largest Desert</strong>
                    <span>Antarctic Desert</span>
                  </div>

                  <div>
                    <strong>Largest Rainforest</strong>
                    <span>Amazon Rainforest</span>
                  </div>

                  <div>
                    <strong>Largest Economy</strong>
                    <span>United States</span>
                  </div>

                  <div>
                    <strong>Largest Exporter</strong>
                    <span>China</span>
                  </div>

                  <div>
                    <strong>Reserve Currency</strong>
                    <span>US Dollar</span>
                  </div>

                  <div>
                    <strong>UN Headquarters</strong>
                    <span>New York</span>
                  </div>

                  <div>
                    <strong>WHO Headquarters</strong>
                    <span>Geneva</span>
                  </div>

                  <div>
                    <strong>Largest Space Agency</strong>
                    <span>NASA</span>
                  </div>

                  <div>
                    <strong>Olympics Organizer</strong>
                    <span>IOC</span>
                  </div>

                  <div>
                    <strong>Football Governing Body</strong>
                    <span>FIFA</span>
                  </div>

                  <div>
                    <strong>Cricket Governing Body</strong>
                    <span>ICC</span>
                  </div>
                </div>
              </div>

              <div className="exa-alert exa-alert-success">
                <strong>Exam Tip:</strong> World superlatives and headquarters
                are among the easiest marks in General Knowledge papers. Revise
                these facts regularly, as they are frequently repeated in PMA,
                ISSB, CSS, FPSC, PPSC, FIA, ASF and university admission tests.
              </div>
            </section>
            {/* ======================================================== */}
            <section id="practicemcq" className="motorways-section exa-card">
              <h2>50 Important International Current Affairs MCQs</h2>

              <p>
                Test your preparation with carefully selected international
                current affairs multiple-choice questions covering world
                organizations, international relations, geography, economy,
                science, climate change, global summits, sports, awards and
                diplomacy. These questions follow the latest PMA, ISSB, CSS,
                PMS, FPSC, PPSC, FIA and other competitive examination patterns.
              </p>

              <MCQCard
                question="1. Which organization is primarily responsible for maintaining international peace and security?"
                options={[
                  "NATO",
                  "United Nations",
                  "European Union",
                  "World Bank",
                ]}
                correct={1}
                explanation="The United Nations (UN) is responsible for maintaining international peace and security."
              />

              <MCQCard
                question="2. Where is the headquarters of the United Nations located?"
                options={["Geneva", "Paris", "New York", "Washington D.C."]}
                correct={2}
                explanation="The headquarters of the United Nations is located in New York City, USA."
              />

              <MCQCard
                question="3. The headquarters of the World Health Organization (WHO) is located in?"
                options={["Vienna", "Geneva", "Paris", "Rome"]}
                correct={1}
                explanation="WHO is headquartered in Geneva, Switzerland."
              />

              <MCQCard
                question="4. Which country currently has the world's largest population?"
                options={["China", "India", "United States", "Indonesia"]}
                correct={1}
                explanation="India is currently the world's most populous country."
              />

              <MCQCard
                question="5. Which country has the world's largest nominal GDP?"
                options={["China", "United States", "Germany", "Japan"]}
                correct={1}
                explanation="The United States has the world's largest economy by nominal GDP."
              />

              <MCQCard
                question="6. Which international organization regulates global trade rules?"
                options={["IMF", "World Bank", "WTO", "OECD"]}
                correct={2}
                explanation="The World Trade Organization (WTO) regulates international trade rules and resolves trade disputes."
              />

              <MCQCard
                question="7. The headquarters of the International Monetary Fund (IMF) is located in?"
                options={["New York", "Washington, D.C.", "Geneva", "London"]}
                correct={1}
                explanation="The International Monetary Fund (IMF) is headquartered in Washington, D.C., USA."
              />

              <MCQCard
                question="8. Which country is home to Mount Everest?"
                options={["Pakistan", "Nepal", "India", "Bhutan"]}
                correct={1}
                explanation="Mount Everest lies on the border of Nepal and China's Tibet Autonomous Region."
              />

              <MCQCard
                question="9. Which is the world's largest ocean?"
                options={[
                  "Atlantic Ocean",
                  "Indian Ocean",
                  "Pacific Ocean",
                  "Arctic Ocean",
                ]}
                correct={2}
                explanation="The Pacific Ocean is the largest and deepest ocean on Earth."
              />

              <MCQCard
                question="10. The headquarters of the Organization of Islamic Cooperation (OIC) is located in?"
                options={["Doha", "Jeddah", "Riyadh", "Abu Dhabi"]}
                correct={1}
                explanation="The OIC is headquartered in Jeddah, Saudi Arabia."
              />

              <MCQCard
                question="11. NATO headquarters are located in?"
                options={["Brussels", "Paris", "Berlin", "Rome"]}
                correct={0}
                explanation="NATO's headquarters are located in Brussels, Belgium."
              />

              <MCQCard
                question="12. Which forum represents the world's major developed and emerging economies?"
                options={["G7", "ASEAN", "G20", "OPEC"]}
                correct={2}
                explanation="The G20 is the premier forum for international economic cooperation."
              />

              <MCQCard
                question="13. Which gas contributes the most to human-caused global warming?"
                options={["Hydrogen", "Carbon Dioxide", "Helium", "Nitrogen"]}
                correct={1}
                explanation="Carbon dioxide (CO₂) is the largest contributor to anthropogenic climate change."
              />

              <MCQCard
                question="14. Which international agreement aims to limit global warming?"
                options={[
                  "Geneva Convention",
                  "Paris Agreement",
                  "Kyoto Treaty",
                  "Vienna Convention",
                ]}
                correct={1}
                explanation="The Paris Agreement seeks to limit global temperature rise and strengthen climate action."
              />

              <MCQCard
                question="15. NASA is the national space agency of?"
                options={[
                  "Canada",
                  "United States",
                  "Australia",
                  "United Kingdom",
                ]}
                correct={1}
                explanation="NASA (National Aeronautics and Space Administration) is the civilian space agency of the United States."
              />

              <MCQCard
                question="16. Which country has the largest land area in the world?"
                options={["Canada", "China", "Russia", "United States"]}
                correct={2}
                explanation="Russia is the world's largest country by total land area."
              />

              <MCQCard
                question="17. Which is the world's smallest independent country?"
                options={[
                  "Monaco",
                  "San Marino",
                  "Liechtenstein",
                  "Vatican City",
                ]}
                correct={3}
                explanation="Vatican City is the world's smallest sovereign state."
              />

              <MCQCard
                question="18. The headquarters of UNESCO is located in?"
                options={["Paris", "Geneva", "New York", "Rome"]}
                correct={0}
                explanation="UNESCO is headquartered in Paris, France."
              />

              <MCQCard
                question="19. Which organization is responsible for international civil aviation standards?"
                options={["ICAO", "IMO", "ILO", "WMO"]}
                correct={0}
                explanation="The International Civil Aviation Organization (ICAO) develops global aviation standards."
              />

              <MCQCard
                question="20. Which country hosts the headquarters of the European Union?"
                options={["France", "Belgium", "Germany", "Netherlands"]}
                correct={1}
                explanation="Most principal institutions of the European Union are based in Brussels, Belgium."
              />

              <MCQCard
                question="21. Which UN agency is responsible for children's welfare?"
                options={["UNDP", "UNICEF", "UNESCO", "UNHCR"]}
                correct={1}
                explanation="UNICEF (United Nations Children's Fund) works to protect children's rights and improve their health, education, and well-being."
              />

              <MCQCard
                question="22. Which UN agency is responsible for refugees?"
                options={["UNICEF", "UNESCO", "UNHCR", "UNDP"]}
                correct={2}
                explanation="The United Nations High Commissioner for Refugees (UNHCR) protects and assists refugees worldwide."
              />

              <MCQCard
                question="23. The headquarters of the World Trade Organization (WTO) is located in?"
                options={["Vienna", "Geneva", "Paris", "Brussels"]}
                correct={1}
                explanation="The WTO headquarters are located in Geneva, Switzerland."
              />

              <MCQCard
                question="24. Which currency is officially used by most European Union member states?"
                options={["Pound Sterling", "Euro", "Swiss Franc", "Dollar"]}
                correct={1}
                explanation="The Euro (€) is the official currency of most countries in the Eurozone."
              />

              <MCQCard
                question="25. Which country is known as the 'Land of the Rising Sun'?"
                options={["China", "Japan", "South Korea", "Thailand"]}
                correct={1}
                explanation="Japan is traditionally known as the Land of the Rising Sun."
              />

              <MCQCard
                question="26. Which country has the largest Muslim population in the world?"
                options={["Pakistan", "India", "Indonesia", "Bangladesh"]}
                correct={2}
                explanation="Indonesia has the world's largest Muslim population."
              />

              <MCQCard
                question="27. Which international organization is headquartered in Vienna, Austria?"
                options={["IAEA", "WHO", "UNESCO", "WTO"]}
                correct={0}
                explanation="The International Atomic Energy Agency (IAEA) is headquartered in Vienna."
              />

              <MCQCard
                question="28. Which country is not a permanent member of the UN Security Council?"
                options={["France", "China", "Germany", "Russia"]}
                correct={2}
                explanation="The five permanent members are China, France, Russia, the United Kingdom, and the United States."
              />

              <MCQCard
                question="29. Which country hosts the headquarters of the International Court of Justice (ICJ)?"
                options={["Belgium", "Netherlands", "Switzerland", "France"]}
                correct={1}
                explanation="The International Court of Justice is located in The Hague, Netherlands."
              />

              <MCQCard
                question="30. Which city is known as the headquarters of the International Criminal Court (ICC)?"
                options={["Geneva", "Brussels", "The Hague", "Vienna"]}
                correct={2}
                explanation="The International Criminal Court (ICC) is headquartered in The Hague, Netherlands."
              />

              <MCQCard
                question="31. Which organization publishes the Human Development Index (HDI)?"
                options={["World Bank", "UNDP", "IMF", "UNESCO"]}
                correct={1}
                explanation="The Human Development Index (HDI) is published annually by the United Nations Development Programme (UNDP)."
              />

              <MCQCard
                question="32. Which country is famous for the Great Barrier Reef?"
                options={[
                  "Indonesia",
                  "Australia",
                  "Philippines",
                  "New Zealand",
                ]}
                correct={1}
                explanation="The Great Barrier Reef is located off the northeastern coast of Australia."
              />

              <MCQCard
                question="33. Which country is home to the Amazon Rainforest?"
                options={["Argentina", "Brazil", "Peru", "Colombia"]}
                correct={1}
                explanation="Most of the Amazon Rainforest is located in Brazil."
              />

              <MCQCard
                question="34. Which is the world's largest hot desert?"
                options={[
                  "Arabian Desert",
                  "Kalahari Desert",
                  "Sahara Desert",
                  "Gobi Desert",
                ]}
                correct={2}
                explanation="The Sahara Desert is the world's largest hot desert."
              />

              <MCQCard
                question="35. Which organization organizes the Olympic Games?"
                options={["FIFA", "IOC", "UEFA", "ICC"]}
                correct={1}
                explanation="The International Olympic Committee (IOC) organizes the Olympic Games."
              />

              <MCQCard
                question="36. Which award is regarded as the world's most prestigious peace award?"
                options={[
                  "Pulitzer Prize",
                  "Booker Prize",
                  "Nobel Peace Prize",
                  "Oscar",
                ]}
                correct={2}
                explanation="The Nobel Peace Prize is awarded annually to individuals or organizations making outstanding contributions to peace."
              />

              <MCQCard
                question="37. Which organization conducts the FIFA World Cup?"
                options={["IOC", "UEFA", "FIFA", "CAF"]}
                correct={2}
                explanation="The Fédération Internationale de Football Association (FIFA) organizes the FIFA World Cup."
              />

              <MCQCard
                question="38. Which country has the world's largest foreign exchange reserves?"
                options={["Japan", "China", "Germany", "United States"]}
                correct={1}
                explanation="China consistently maintains the world's largest foreign exchange reserves."
              />

              <MCQCard
                question="39. Which international financial institution provides loans mainly for development projects?"
                options={["IMF", "World Bank", "WTO", "OECD"]}
                correct={1}
                explanation="The World Bank finances long-term development and poverty reduction projects around the world."
              />

              <MCQCard
                question="40. Which international agreement primarily focuses on protecting the ozone layer?"
                options={[
                  "Paris Agreement",
                  "Kyoto Protocol",
                  "Montreal Protocol",
                  "Basel Convention",
                ]}
                correct={2}
                explanation="The Montreal Protocol is an international treaty designed to protect the ozone layer by phasing out ozone-depleting substances."
              />

              <MCQCard
                question="41. Which country is known as the 'Land of a Thousand Lakes'?"
                options={["Norway", "Canada", "Finland", "Sweden"]}
                correct={2}
                explanation="Finland is known as the 'Land of a Thousand Lakes' because it has over 180,000 lakes."
              />

              <MCQCard
                question="42. The headquarters of INTERPOL is located in?"
                options={["Paris", "Lyon", "Geneva", "Brussels"]}
                correct={1}
                explanation="INTERPOL's General Secretariat is located in Lyon, France."
              />

              <MCQCard
                question="43. Which country is the largest producer of coffee in the world?"
                options={["Vietnam", "Brazil", "Colombia", "Indonesia"]}
                correct={1}
                explanation="Brazil has been the world's largest coffee producer for many decades."
              />

              <MCQCard
                question="44. Which canal connects the Mediterranean Sea with the Red Sea?"
                options={[
                  "Panama Canal",
                  "Kiel Canal",
                  "Suez Canal",
                  "Corinth Canal",
                ]}
                correct={2}
                explanation="The Suez Canal in Egypt connects the Mediterranean Sea with the Red Sea."
              />

              <MCQCard
                question="45. Which strait separates Asia from North America?"
                options={[
                  "Strait of Hormuz",
                  "Bering Strait",
                  "Bosporus Strait",
                  "Strait of Malacca",
                ]}
                correct={1}
                explanation="The Bering Strait separates Russia (Asia) from Alaska (North America)."
              />

              <MCQCard
                question="46. Which country has the largest proven oil reserves in the world?"
                options={["Saudi Arabia", "Iran", "Venezuela", "Russia"]}
                correct={2}
                explanation="Venezuela possesses the world's largest proven crude oil reserves."
              />

              <MCQCard
                question="47. Which country is the largest producer of crude oil?"
                options={["Saudi Arabia", "United States", "Russia", "Canada"]}
                correct={1}
                explanation="The United States is currently the world's largest producer of crude oil."
              />

              <MCQCard
                question="48. Which organization publishes the World Economic Outlook (WEO) report?"
                options={["World Bank", "OECD", "IMF", "WTO"]}
                correct={2}
                explanation="The International Monetary Fund (IMF) publishes the World Economic Outlook report."
              />

              <MCQCard
                question="49. Which international organization is responsible for global civil aviation standards?"
                options={["ICAO", "IMO", "IATA", "WMO"]}
                correct={0}
                explanation="ICAO develops international standards and recommended practices for civil aviation."
              />

              <MCQCard
                question="50. Which UN agency is responsible for food and agriculture?"
                options={["WHO", "FAO", "UNESCO", "UNICEF"]}
                correct={1}
                explanation="The Food and Agriculture Organization (FAO) leads international efforts to defeat hunger."
              />

              <MCQCard
                question="51. Which country hosts the headquarters of the Food and Agriculture Organization (FAO)?"
                options={["Switzerland", "Italy", "France", "Austria"]}
                correct={1}
                explanation="The FAO headquarters are located in Rome, Italy."
              />

              <MCQCard
                question="52. Which organization is responsible for international maritime safety?"
                options={["ICAO", "IMO", "ILO", "UNESCO"]}
                correct={1}
                explanation="The International Maritime Organization (IMO) develops regulations for safe and secure shipping."
              />

              <MCQCard
                question="53. Which country is known as the 'Land of the Midnight Sun'?"
                options={["Norway", "Iceland", "Finland", "Sweden"]}
                correct={0}
                explanation="Norway is known as the 'Land of the Midnight Sun' because parts of the country experience continuous daylight during summer."
              />

              <MCQCard
                question="54. Which is the longest mountain range in the world?"
                options={["Rocky Mountains", "Alps", "Andes", "Himalayas"]}
                correct={2}
                explanation="The Andes Mountains in South America are the world's longest continental mountain range."
              />

              <MCQCard
                question="55. Which country is home to the Amazon River?"
                options={["Brazil", "Peru", "Colombia", "All of these"]}
                correct={3}
                explanation="The Amazon River flows through Peru, Colombia and Brazil before emptying into the Atlantic Ocean."
              />

              <MCQCard
                question="56. Which city hosts the headquarters of the European Central Bank (ECB)?"
                options={["Brussels", "Frankfurt", "Paris", "Berlin"]}
                correct={1}
                explanation="The European Central Bank (ECB) is headquartered in Frankfurt, Germany."
              />

              <MCQCard
                question="57. Which international organization awards the Nobel Peace Prize?"
                options={[
                  "United Nations",
                  "Norwegian Nobel Committee",
                  "Swedish Academy",
                  "European Union",
                ]}
                correct={1}
                explanation="The Nobel Peace Prize is awarded by the Norwegian Nobel Committee in Oslo, Norway."
              />

              <MCQCard
                question="58. Which country is the largest exporter of goods in the world?"
                options={["United States", "Germany", "China", "Japan"]}
                correct={2}
                explanation="China is the world's largest exporter of merchandise goods."
              />

              <MCQCard
                question="59. Which organization is responsible for publishing the Global Risks Report each year?"
                options={[
                  "World Bank",
                  "International Monetary Fund",
                  "World Economic Forum",
                  "OECD",
                ]}
                correct={2}
                explanation="The World Economic Forum (WEF) publishes the annual Global Risks Report ahead of its Davos meeting."
              />

              <MCQCard
                question="60. Which city in Switzerland hosts the annual meeting of the World Economic Forum (WEF)?"
                options={["Geneva", "Zurich", "Bern", "Davos"]}
                correct={3}
                explanation="The World Economic Forum's annual meeting is traditionally held in Davos, Switzerland."
              />
              {/* Continue until Question 50 */}
            </section>

            <section id="faq" className="motorways-section exa-card">
              <h2>Frequently Asked Questions</h2>

              <div className="faq-list">
                <details className="faq-item" open>
                  <summary>What is International Current Affairs?</summary>

                  <p>
                    International Current Affairs covers important global
                    events, international organizations, diplomacy, politics,
                    economy, climate change, science, technology, sports, awards
                    and developments that influence relations among countries.
                    It is an important subject for competitive examinations and
                    interviews.
                  </p>
                </details>

                <details className="faq-item">
                  <summary>
                    Why is International Current Affairs important for
                    competitive exams?
                  </summary>

                  <p>
                    Questions from international current affairs frequently
                    appear in PMA, ISSB, CSS, FPSC, PPSC, FIA, ASF, MOD, NTS and
                    other competitive examinations. Candidates are expected to
                    understand important world events, international
                    organizations and global issues.
                  </p>
                </details>

                <details className="faq-item">
                  <summary>
                    Which international organizations are most important for
                    exams?
                  </summary>

                  <p>
                    The United Nations (UN), World Health Organization (WHO),
                    International Monetary Fund (IMF), World Bank, World Trade
                    Organization (WTO), NATO, European Union (EU), Organization
                    of Islamic Cooperation (OIC), G20, BRICS and Shanghai
                    Cooperation Organization (SCO) are among the most frequently
                    asked organizations.
                  </p>
                </details>

                <details className="faq-item">
                  <summary>What is the difference between G7 and G20?</summary>

                  <p>
                    The G7 consists of seven major advanced economies that
                    discuss global economic and political issues. The G20
                    includes both developed and emerging economies, representing
                    a much larger share of the world's population, trade and
                    economic output.
                  </p>
                </details>

                <details className="faq-item">
                  <summary>What is the role of the United Nations?</summary>

                  <p>
                    The United Nations promotes international peace and
                    security, humanitarian assistance, sustainable development,
                    human rights and cooperation among countries through its
                    specialized agencies and member states.
                  </p>
                </details>

                <details className="faq-item">
                  <summary>
                    Which headquarters should every exam candidate memorize?
                  </summary>

                  <p>
                    Candidates should know the headquarters of the UN (New
                    York), WHO (Geneva), IMF (Washington, D.C.), World Bank
                    (Washington, D.C.), WTO (Geneva), UNESCO (Paris), OIC
                    (Jeddah), NATO (Brussels), FAO (Rome) and IAEA (Vienna).
                  </p>
                </details>

                <details className="faq-item">
                  <summary>
                    What are the permanent members of the UN Security Council?
                  </summary>

                  <p>
                    The five permanent members of the United Nations Security
                    Council are China, France, Russia, the United Kingdom and
                    the United States. These countries possess veto power on
                    substantive Security Council resolutions.
                  </p>
                </details>

                <details className="faq-item">
                  <summary>
                    Which international summits are most important?
                  </summary>

                  <p>
                    Major international summits include the G20 Summit, G7
                    Summit, BRICS Summit, SCO Summit, ASEAN Summit, OIC Summit,
                    COP Climate Conferences and the annual United Nations
                    General Assembly (UNGA).
                  </p>
                </details>

                <details className="faq-item">
                  <summary>
                    Why should students study world geography with current
                    affairs?
                  </summary>

                  <p>
                    International current affairs often involve countries,
                    oceans, strategic waterways, borders, international trade
                    routes and natural resources. Understanding world geography
                    helps explain global political and economic developments.
                  </p>
                </details>

                <details className="faq-item">
                  <summary>
                    Which international awards are commonly asked in exams?
                  </summary>

                  <p>
                    Candidates should know the Nobel Prize, Booker Prize,
                    Pulitzer Prize, Academy Awards (Oscars), Ballon d'Or, Grammy
                    Awards and Laureus World Sports Awards, along with their
                    fields and significance.
                  </p>
                </details>

                <details className="faq-item">
                  <summary>
                    What are the most important international days to remember?
                  </summary>

                  <p>
                    Frequently asked international observances include World
                    Health Day, World Environment Day, International Women's
                    Day, United Nations Day, Human Rights Day, World Water Day
                    and International Literacy Day.
                  </p>
                </details>

                <details className="faq-item">
                  <summary>
                    How often should International Current Affairs be updated?
                  </summary>

                  <p>
                    Current affairs should ideally be reviewed every month
                    because world events, leadership positions, international
                    agreements and economic developments change regularly.
                    Stable facts such as headquarters and organizational
                    structures should also be revised periodically.
                  </p>
                </details>

                <details className="faq-item">
                  <summary>
                    Which topics carry the highest weight in interviews?
                  </summary>

                  <p>
                    Interview panels often ask about international
                    organizations, Pakistan's foreign relations, global
                    conflicts, climate change, world economy, science and
                    technology, international sports events and major diplomatic
                    developments.
                  </p>
                </details>

                <details className="faq-item">
                  <summary>
                    How can I improve my International Current Affairs
                    preparation?
                  </summary>

                  <p>
                    Study official reports, revise important organizations and
                    headquarters, practice MCQs regularly, follow major global
                    events and review monthly current affairs to build both
                    factual knowledge and analytical understanding.
                  </p>
                </details>

                <details className="faq-item">
                  <summary>
                    Is this International Current Affairs guide suitable for
                    PMA, ISSB and CSS preparation?
                  </summary>

                  <p>
                    Yes. This guide is designed for PMA Long Course, ISSB, CSS,
                    FPSC, PPSC, FIA, ASF, MOD, NTS and other competitive
                    examinations. It combines conceptual explanations, important
                    facts, revision tables, practice MCQs and FAQs to help
                    candidates prepare effectively.
                  </p>
                </details>
              </div>
            </section>

            {/* REFERENCES & EXAM TIPS */}

            <section id="references" className="motorways-section exa-card">
              <h2>References & Exam Preparation Tips</h2>

              <p>
                The information presented in this International Current Affairs
                guide has been compiled from internationally recognized
                organizations, official government publications and reliable
                educational resources. While every effort has been made to
                ensure accuracy, candidates should verify time-sensitive
                information such as office holders, international rankings,
                summit outcomes and ongoing global events before appearing in
                competitive examinations.
              </p>

              <div className="motorway-cards">
                <div className="motorway-card">
                  <h3>📚 Recommended Official Sources</h3>

                  <ul>
                    <li>United Nations (UN)</li>
                    <li>World Health Organization (WHO)</li>
                    <li>World Bank</li>
                    <li>International Monetary Fund (IMF)</li>
                    <li>World Trade Organization (WTO)</li>
                    <li>UNESCO</li>
                    <li>UNICEF</li>
                    <li>Food and Agriculture Organization (FAO)</li>
                    <li>International Atomic Energy Agency (IAEA)</li>
                    <li>International Olympic Committee (IOC)</li>
                    <li>FIFA</li>
                    <li>International Cricket Council (ICC)</li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🎯 Exam Preparation Strategy</h3>

                  <ul>
                    <li>
                      Revise international organizations and their headquarters.
                    </li>
                    <li>Learn major world leaders, capitals and currencies.</li>
                    <li>Follow important global summits and conferences.</li>
                    <li>
                      Study climate change and sustainable development topics.
                    </li>
                    <li>Practice international current affairs MCQs daily.</li>
                    <li>
                      Read monthly current affairs magazines for recent updates.
                    </li>
                    <li>
                      Revise important international days and world awards.
                    </li>
                  </ul>
                </div>

                <div className="motorway-card">
                  <h3>🏆 Best Exams for This Topic</h3>

                  <ul>
                    <li>PMA Long Course Initial Test</li>
                    <li>ISSB Screening & Interview</li>
                    <li>CSS</li>
                    <li>FPSC Examinations</li>
                    <li>PPSC</li>
                    <li>FIA Recruitment Tests</li>
                    <li>ASF Recruitment Tests</li>
                    <li>MOD Recruitment Tests</li>
                    <li>NTS & University Entry Tests</li>
                  </ul>
                </div>
              </div>

              <div className="exa-alert exa-alert-success">
                <strong>Final Tip:</strong> Success in International Current
                Affairs comes from regular revision rather than memorizing facts
                once. Focus on understanding the role of international
                organizations, major global developments, world geography,
                international economy and diplomacy. Practice MCQs frequently
                and stay updated through authentic official sources.
              </div>
            </section>

            {/* QUICK REVISION CHEAT SHEET */}

            <section id="quick-revision" className="motorways-section exa-card">
              <h2>
                International Current Affairs – Quick Revision Cheat Sheet
              </h2>

              <p>
                Revise these important one-line facts before your PMA, ISSB,
                CSS, FPSC, PPSC, FIA, ASF, MOD or university entry test. These
                are among the most frequently asked international current
                affairs and general knowledge facts.
              </p>

              <div>
                <div className="revision-grid">
                  <div>
                    <strong>United Nations HQ</strong>
                    <span>New York, USA</span>
                  </div>

                  <div>
                    <strong>WHO HQ</strong>
                    <span>Geneva, Switzerland</span>
                  </div>

                  <div>
                    <strong>UNESCO HQ</strong>
                    <span>Paris, France</span>
                  </div>

                  <div>
                    <strong>UNICEF HQ</strong>
                    <span>New York, USA</span>
                  </div>

                  <div>
                    <strong>WTO HQ</strong>
                    <span>Geneva, Switzerland</span>
                  </div>

                  <div>
                    <strong>IMF HQ</strong>
                    <span>Washington, D.C., USA</span>
                  </div>

                  <div>
                    <strong>World Bank HQ</strong>
                    <span>Washington, D.C., USA</span>
                  </div>

                  <div>
                    <strong>OIC HQ</strong>
                    <span>Jeddah, Saudi Arabia</span>
                  </div>

                  <div>
                    <strong>NATO HQ</strong>
                    <span>Brussels, Belgium</span>
                  </div>

                  <div>
                    <strong>IAEA HQ</strong>
                    <span>Vienna, Austria</span>
                  </div>

                  <div>
                    <strong>FAO HQ</strong>
                    <span>Rome, Italy</span>
                  </div>

                  <div>
                    <strong>IOC HQ</strong>
                    <span>Lausanne, Switzerland</span>
                  </div>

                  <div>
                    <strong>FIFA HQ</strong>
                    <span>Zurich, Switzerland</span>
                  </div>

                  <div>
                    <strong>ICC HQ</strong>
                    <span>Dubai, UAE</span>
                  </div>

                  <div>
                    <strong>Largest Continent</strong>
                    <span>Asia</span>
                  </div>

                  <div>
                    <strong>Largest Country</strong>
                    <span>Russia</span>
                  </div>

                  <div>
                    <strong>Most Populous Country</strong>
                    <span>India</span>
                  </div>

                  <div>
                    <strong>Smallest Country</strong>
                    <span>Vatican City</span>
                  </div>

                  <div>
                    <strong>Highest Mountain</strong>
                    <span>Mount Everest</span>
                  </div>

                  <div>
                    <strong>Longest River</strong>
                    <span>Nile River</span>
                  </div>

                  <div>
                    <strong>Largest Ocean</strong>
                    <span>Pacific Ocean</span>
                  </div>

                  <div>
                    <strong>Largest Hot Desert</strong>
                    <span>Sahara Desert</span>
                  </div>

                  <div>
                    <strong>Largest Rainforest</strong>
                    <span>Amazon Rainforest</span>
                  </div>

                  <div>
                    <strong>Largest Coral Reef</strong>
                    <span>Great Barrier Reef</span>
                  </div>

                  <div>
                    <strong>Highest Waterfall</strong>
                    <span>Angel Falls</span>
                  </div>

                  <div>
                    <strong>Largest Economy</strong>
                    <span>United States</span>
                  </div>

                  <div>
                    <strong>Largest Exporter</strong>
                    <span>China</span>
                  </div>

                  <div>
                    <strong>Global Reserve Currency</strong>
                    <span>US Dollar</span>
                  </div>

                  <div>
                    <strong>Olympics</strong>
                    <span>Every 4 Years</span>
                  </div>

                  <div>
                    <strong>FIFA World Cup</strong>
                    <span>Every 4 Years</span>
                  </div>

                  <div>
                    <strong>ICC Cricket World Cup</strong>
                    <span>Every 4 Years</span>
                  </div>

                  <div>
                    <strong>Nobel Prize Started</strong>
                    <span>1901</span>
                  </div>

                  <div>
                    <strong>UN Day</strong>
                    <span>24 October</span>
                  </div>

                  <div>
                    <strong>World Environment Day</strong>
                    <span>5 June</span>
                  </div>

                  <div>
                    <strong>World Health Day</strong>
                    <span>7 April</span>
                  </div>

                  <div>
                    <strong>Human Rights Day</strong>
                    <span>10 December</span>
                  </div>

                  <div>
                    <strong>Paris Agreement</strong>
                    <span>Climate Change Treaty</span>
                  </div>

                  <div>
                    <strong>Montreal Protocol</strong>
                    <span>Protects Ozone Layer</span>
                  </div>

                  <div>
                    <strong>Major Climate Forum</strong>
                    <span>COP Conference</span>
                  </div>

                  <div>
                    <strong>Largest Sporting Event</strong>
                    <span>Olympic Games</span>
                  </div>
                </div>
              </div>

              <div className="exa-alert exa-alert-warning">
                <strong>Last-Minute Revision Tip:</strong> Memorize organization
                headquarters, important international days, world superlatives,
                major awards, international summits, currencies, and capitals.
                These topics are repeatedly tested in PMA, ISSB, CSS, FPSC,
                PPSC, FIA, ASF, MOD, and other competitive examinations.
              </div>
            </section>
            {/* ==========================================
    CONCLUSION
========================================== */}

            <section id="conclusion" className="motorways-section exa-card">
              <h2>Conclusion</h2>

              <p>
                International Current Affairs is one of the most important
                subjects for competitive examinations and interviews. A sound
                understanding of global organizations, international relations,
                world geography, climate change, science & technology,
                economics, diplomacy and international events helps candidates
                perform confidently in written tests as well as interviews.
              </p>

              <p>
                This guide has been designed to provide a comprehensive learning
                resource with authentic information, detailed explanations,
                revision tables, practice MCQs, frequently asked questions and
                quick revision notes. Regular practice and continuous revision
                of current affairs will significantly improve your General
                Knowledge and analytical skills.
              </p>

              <div className="exa-alert exa-alert-success">
                <strong>Success Tip:</strong> Spend 15–20 minutes daily
                reviewing international current affairs, revise important
                organizations and headquarters weekly, and solve MCQs regularly
                to build confidence for PMA, ISSB, CSS, FPSC, PPSC, FIA, ASF,
                MOD and other competitive examinations.
              </div>
            </section>

            {/* ==========================================
    RELATED KNOWLEDGE HUB TOPICS
========================================== */}

            <section className="motorways-section exa-card">
              <h2>Continue Your Preparation</h2>

              <p>
                Strengthen your General Knowledge by exploring other important
                topics available in the EXAMITICS Knowledge Hub.
              </p>

              <div className="topic-grid">
                <Link
                  to="/knowledge/pakistan-current-affairs"
                  className="topic-card"
                >
                  🇵🇰 Pakistan Current Affairs
                </Link>

                <Link
                  to="/knowledge/general-knowledge/countries-capitals-currencies"
                  className="topic-card"
                >
                  🌍 Countries, Capitals & Currencies
                </Link>

                <Link
                  to="/knowledge/general-knowledge/world-organizations"
                  className="topic-card"
                >
                  🏛 International Organizations
                </Link>

                <Link
                  to="/knowledge/general-knowledge/world-geography"
                  className="topic-card"
                >
                  🗺 World Geography
                </Link>

                <Link
                  to="/knowledge/general-knowledge/world-awards"
                  className="topic-card"
                >
                  🏅 International Awards
                </Link>

                <Link
                  to="/knowledge/general-knowledge/climate-change"
                  className="topic-card"
                >
                  🌱 Climate Change
                </Link>
              </div>
            </section>

            {/* ==========================================
    LAST UPDATED
========================================== */}

            <section className="motorways-section exa-card">
              <div>
                <p>
                  <strong>Last Updated:</strong> July 2026
                </p>

                <p>
                  Information on this page has been compiled from official
                  publications and internationally recognized organizations
                  including the United Nations, World Bank, IMF, WHO, WTO,
                  UNESCO, FAO, IAEA, FIFA, ICC and other authentic educational
                  sources. Time-sensitive information should always be verified
                  through official announcements before examinations.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default InternationalCurrentAffairs;
