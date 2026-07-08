import { useEffect, useState } from "react";

import {
  FiBook,
  FiDroplet,
  FiGrid,
  FiInfo,
  FiCheckCircle,
  FiHelpCircle,
} from "react-icons/fi";

import Navbar from "../../../components/layout/navbar";
import Footer from "../../../components/layout/footer";

import MCQCard from "../../../components/knowledge/MCQCard";
import "./MotorwaysOfPakistan.css";
import BreadcrumbSchema from "../../../components/seo/BreadcrumbSchema";

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: FiBook,
  },
  {
    id: "history",
    title: "History",
    icon: FiInfo,
  },
  {
    id: "classification",
    title: "Classification",
    icon: FiGrid,
  },
  {
    id: "major-dams",
    title: "Major Dams",
    icon: FiDroplet,
  },
  {
    id: "importance",
    title: "Importance",
    icon: FiCheckCircle,
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

const DamsOfPakistan = () => {
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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.examitics.com/" },
          {
            name: "Knowledge Hub",
            url: "https://www.examitics.com/knowledgehub",
          },
          {
            name: "Dams of Pakistan",
            url: "https://www.examitics.com/knowledge/general-knowledge/dams-of-pakistan",
          },
        ]}
      />
      <Navbar />
      <main className="motorways-page">
        {/* HERO */}

        <section className="motorways-hero">
          <div className="container-custom">
            <span className="hero-badge">General Knowledge</span>

            <h1>Dams of Pakistan</h1>

            <p>
              Learn about the major dams of Pakistan, their locations, rivers,
              purposes, storage capacities, hydroelectric generation, irrigation
              benefits and important facts frequently asked in PMA, ISSB, CSS,
              PMS, FPSC and other competitive examinations.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>150+</strong>

                <span>Dams & Reservoirs</span>
              </div>

              <div className="hero-stat">
                <strong>10+</strong>

                <span>Major Dams</span>
              </div>

              <div className="hero-stat">
                <strong>Updated</strong>

                <span>2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* STICKY NAV */}

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
              Dams play a vital role in Pakistan's economy by storing water for
              irrigation, generating hydroelectric power, reducing flood risks
              and ensuring a reliable water supply for agriculture, industries
              and households.
            </p>

            <p>
              Pakistan depends heavily on the Indus River System. Major
              reservoirs constructed on the Indus and its tributaries help
              regulate seasonal river flows, particularly during periods of low
              rainfall.
            </p>

            <p>
              Water storage has become increasingly important due to population
              growth, climate variability and the country's agricultural
              dependence on irrigation.
            </p>
          </section>

          {/* HISTORY */}

          <section id="history" className="motorways-section exa-card">
            <h2>History of Dams in Pakistan</h2>

            <p>
              After independence in 1947, Pakistan inherited an extensive
              irrigation network but had limited water storage infrastructure.
              The need for reservoirs became even greater after the Indus Waters
              Treaty of 1960.
            </p>

            <p>
              Major projects such as Mangla Dam and Tarbela Dam were developed
              to improve irrigation, generate electricity and compensate for
              water resources affected by the treaty.
            </p>

            <p>
              In recent years, Pakistan has launched additional projects
              including Diamer-Bhasha Dam and Mohmand Dam to strengthen water
              security and increase hydroelectric generation.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Major Milestones</h3>

                <ul>
                  <li>1947 – Pakistan gains independence.</li>

                  <li>1960 – Indus Waters Treaty signed.</li>

                  <li>1967 – Mangla Dam completed.</li>

                  <li>1976 – Tarbela Dam completed.</li>

                  <li>
                    2020s – Construction of Diamer-Bhasha and Mohmand dams
                    continues.
                  </li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Objectives</h3>

                <ul>
                  <li>Store freshwater.</li>

                  <li>Generate hydroelectric power.</li>

                  <li>Improve irrigation.</li>

                  <li>Reduce floods.</li>

                  <li>Support economic growth.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CLASSIFICATION */}

          <section id="classification" className="motorways-section exa-card">
            <h2>Classification of Dams</h2>

            <p>
              Dams in Pakistan can be classified according to their purpose and
              engineering design.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>By Purpose</h3>

                <ul>
                  <li>Irrigation dams</li>

                  <li>Hydroelectric dams</li>

                  <li>Flood control dams</li>

                  <li>Water supply dams</li>

                  <li>Multi-purpose dams</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>By Structure</h3>

                <ul>
                  <li>Earth-fill dams</li>

                  <li>Rock-fill dams</li>

                  <li>Concrete gravity dams</li>

                  <li>Arch dams</li>

                  <li>Composite dams</li>
                </ul>
              </div>
            </div>

            <p>
              Most of Pakistan's major reservoirs are multi-purpose dams because
              they provide irrigation, hydroelectricity, flood mitigation and
              water conservation simultaneously.
            </p>
          </section>

          {/* MAJOR DAMS */}

          <section id="major-dams" className="motorways-section exa-card">
            <h2>Major Dams of Pakistan</h2>

            <p>
              Pakistan has developed numerous dams for irrigation, hydroelectric
              power generation, flood control and domestic water supply. The
              following table includes the major dams most frequently asked in
              PMA, ISSB, CSS, PMS, FPSC and other competitive examinations.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Dam</th>

                    <th>River</th>

                    <th>Province / Region</th>

                    <th>Completed</th>

                    <th>Main Purpose</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Tarbela</td>

                    <td>Indus River</td>

                    <td>Khyber Pakhtunkhwa</td>

                    <td>1976</td>

                    <td>Hydropower & Irrigation</td>
                  </tr>

                  <tr>
                    <td>Mangla</td>

                    <td>Jhelum River</td>

                    <td>Azad Jammu & Kashmir</td>

                    <td>1967</td>

                    <td>Hydropower & Irrigation</td>
                  </tr>

                  <tr>
                    <td>Diamer-Bhasha</td>

                    <td>Indus River</td>

                    <td>Gilgit-Baltistan</td>

                    <td>Under Construction</td>

                    <td>Storage & Hydropower</td>
                  </tr>

                  <tr>
                    <td>Mohmand</td>

                    <td>Swat River</td>

                    <td>Khyber Pakhtunkhwa</td>

                    <td>Under Construction</td>

                    <td>Hydropower & Flood Control</td>
                  </tr>

                  <tr>
                    <td>Warsak</td>

                    <td>Kabul River</td>

                    <td>Khyber Pakhtunkhwa</td>

                    <td>1960</td>

                    <td>Hydropower</td>
                  </tr>

                  <tr>
                    <td>Hub</td>

                    <td>Hub River</td>

                    <td>Sindh / Balochistan</td>

                    <td>1981</td>

                    <td>Water Supply</td>
                  </tr>

                  <tr>
                    <td>Mirani</td>

                    <td>Dasht River</td>

                    <td>Balochistan</td>

                    <td>2006</td>

                    <td>Irrigation</td>
                  </tr>

                  <tr>
                    <td>Gomal Zam</td>

                    <td>Gomal River</td>

                    <td>Khyber Pakhtunkhwa</td>

                    <td>2013</td>

                    <td>Irrigation & Power</td>
                  </tr>

                  <tr>
                    <td>Khanpur</td>

                    <td>Haro River</td>

                    <td>Khyber Pakhtunkhwa</td>

                    <td>1983</td>

                    <td>Water Supply</td>
                  </tr>

                  <tr>
                    <td>Rawal</td>

                    <td>Korang River</td>

                    <td>Islamabad</td>

                    <td>1962</td>

                    <td>Water Supply</td>
                  </tr>

                  <tr>
                    <td>Satpara</td>

                    <td>Satpara Stream</td>

                    <td>Gilgit-Baltistan</td>

                    <td>2011</td>

                    <td>Irrigation & Hydropower</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* TARBELA DAM */}

          <section className="motorways-section exa-card">
            <h2>Tarbela Dam</h2>

            <p>
              Tarbela Dam is the largest dam in Pakistan and one of the world's
              largest earth-filled dams. It is built on the Indus River near
              Tarbela in Khyber Pakhtunkhwa, approximately 50 kilometres
              northwest of Islamabad.
            </p>

            <p>
              Construction began in 1968 following the Indus Waters Treaty and
              the dam was completed in 1976. It was developed primarily to store
              water for irrigation and generate hydroelectric power.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>River: Indus River</li>

                  <li>Province: Khyber Pakhtunkhwa</li>

                  <li>Completed: 1976</li>

                  <li>Dam Type: Earth & Rock-fill</li>

                  <li>Owner: WAPDA</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Main Purposes</h3>

                <ul>
                  <li>Irrigation water storage</li>

                  <li>Hydroelectric power generation</li>

                  <li>Flood mitigation</li>

                  <li>Water regulation</li>

                  <li>Support agriculture</li>
                </ul>
              </div>
            </div>

            <h3>Importance of Tarbela Dam</h3>

            <p>
              Tarbela Dam is the backbone of Pakistan's irrigation system. Water
              stored in the reservoir is released throughout the year to
              irrigate millions of hectares of farmland in Punjab and Sindh.
            </p>

            <p>
              The dam is also Pakistan's largest source of hydroelectricity and
              contributes a significant portion of the country's renewable
              electricity generation.
            </p>

            <div className="important-grid">
              <div className="important-item">✓ Largest dam in Pakistan.</div>

              <div className="important-item">✓ Built on the Indus River.</div>

              <div className="important-item">
                ✓ One of the world's largest earth-filled dams.
              </div>

              <div className="important-item">✓ Managed by WAPDA.</div>

              <div className="important-item">
                ✓ Major source of hydroelectric power.
              </div>

              <div className="important-item">
                ✓ Essential for Pakistan's irrigation system.
              </div>
            </div>
          </section>

          {/* MANGLA DAM */}

          <section className="motorways-section exa-card">
            <h2>Mangla Dam</h2>

            <p>
              Mangla Dam is one of Pakistan's largest multipurpose dams. It is
              built on the Jhelum River near Mirpur in Azad Jammu & Kashmir.
              Completed in 1967, it was one of the first major projects
              developed after the Indus Waters Treaty.
            </p>

            <p>
              Besides supplying irrigation water, Mangla Dam is a major source
              of hydroelectric power and plays an important role in regulating
              river flows.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>River: Jhelum River</li>

                  <li>Region: Azad Jammu & Kashmir</li>

                  <li>Completed: 1967</li>

                  <li>Owner: WAPDA</li>

                  <li>Type: Earth-fill Dam</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Main Uses</h3>

                <ul>
                  <li>Hydroelectric power generation</li>

                  <li>Irrigation water storage</li>

                  <li>Flood regulation</li>

                  <li>Domestic water supply</li>

                  <li>Water conservation</li>
                </ul>
              </div>
            </div>

            <div className="important-grid">
              <div className="important-item">✓ Built on the Jhelum River.</div>

              <div className="important-item">
                ✓ Second largest reservoir in Pakistan.
              </div>

              <div className="important-item">
                ✓ Major hydroelectric project.
              </div>

              <div className="important-item">✓ Located near Mirpur.</div>
            </div>
          </section>

          {/* DIAMER-BHASHA DAM */}

          <section className="motorways-section exa-card">
            <h2>Diamer-Bhasha Dam</h2>

            <p>
              Diamer-Bhasha Dam is one of Pakistan's most important
              under-construction water projects. It is being built on the Indus
              River between Gilgit-Baltistan and Khyber Pakhtunkhwa.
            </p>

            <p>
              The project aims to increase water storage capacity, improve
              irrigation supplies, reduce flooding and generate large amounts of
              clean hydroelectric power.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>River: Indus River</li>

                  <li>Region: Gilgit-Baltistan</li>

                  <li>Status: Under Construction</li>

                  <li>Owner: WAPDA</li>

                  <li>Type: Roller Compacted Concrete Dam</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Expected Benefits</h3>

                <ul>
                  <li>Increase water storage.</li>

                  <li>Generate renewable electricity.</li>

                  <li>Reduce flood damage.</li>

                  <li>Support agriculture.</li>

                  <li>
                    Extend Tarbela's operational life by trapping sediment
                    upstream.
                  </li>
                </ul>
              </div>
            </div>

            <div className="important-grid">
              <div className="important-item">✓ Built on the Indus River.</div>

              <div className="important-item">
                ✓ One of Pakistan's largest infrastructure projects.
              </div>

              <div className="important-item">
                ✓ Improves long-term water security.
              </div>

              <div className="important-item">
                ✓ Expected to produce significant hydroelectric power.
              </div>
            </div>
          </section>

          {/* MOHMAND DAM */}

          <section className="motorways-section exa-card">
            <h2>Mohmand Dam</h2>

            <p>
              Mohmand Dam is being constructed on the Swat River in Mohmand
              District, Khyber Pakhtunkhwa. It is designed as a multipurpose
              project for flood control, irrigation and hydroelectric power
              generation.
            </p>

            <p>
              The dam is expected to strengthen Pakistan's water storage
              capacity while protecting downstream areas from seasonal flooding.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>River: Swat River</li>

                  <li>Province: Khyber Pakhtunkhwa</li>

                  <li>Status: Under Construction</li>

                  <li>Owner: WAPDA</li>

                  <li>Purpose: Multipurpose</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Main Objectives</h3>

                <ul>
                  <li>Flood control.</li>

                  <li>Hydroelectric power generation.</li>

                  <li>Irrigation support.</li>

                  <li>Drinking water supply.</li>

                  <li>Economic development.</li>
                </ul>
              </div>
            </div>

            <div className="important-grid">
              <div className="important-item">✓ Located on the Swat River.</div>

              <div className="important-item">
                ✓ Major national water project.
              </div>

              <div className="important-item">✓ Helps reduce flood risks.</div>

              <div className="important-item">
                ✓ Supports irrigation and electricity generation.
              </div>
            </div>
          </section>

          {/* WARSAK DAM */}

          <section className="motorways-section exa-card">
            <h2>Warsak Dam</h2>

            <p>
              Warsak Dam is one of Pakistan's earliest hydroelectric projects.
              It is constructed on the Kabul River near Peshawar in Khyber
              Pakhtunkhwa. The project was completed in the early 1960s with
              technical assistance from Canada.
            </p>

            <p>
              Besides generating electricity, the dam also supports irrigation
              and regulates river flow in the surrounding region.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>River: Kabul River</li>

                  <li>Province: Khyber Pakhtunkhwa</li>

                  <li>Completed: 1960</li>

                  <li>Owner: WAPDA</li>

                  <li>Main Purpose: Hydropower</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>One of Pakistan's oldest hydropower dams.</li>

                  <li>Supplies electricity to the national grid.</li>

                  <li>Supports irrigation.</li>

                  <li>Controls seasonal river flow.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* HUB DAM */}

          <section className="motorways-section exa-card">
            <h2>Hub Dam</h2>

            <p>
              Hub Dam is built on the Hub River along the border of Sindh and
              Balochistan. It is one of the principal sources of drinking water
              for Karachi and also provides irrigation water to nearby
              agricultural lands.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>River: Hub River</li>

                  <li>Region: Sindh / Balochistan</li>

                  <li>Completed: 1981</li>

                  <li>Owner: WAPDA</li>

                  <li>Main Purpose: Water Supply</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Major water source for Karachi.</li>

                  <li>Supports irrigation.</li>

                  <li>Stores seasonal rainfall.</li>

                  <li>Reduces water shortages.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* MIRANI DAM */}

          <section className="motorways-section exa-card">
            <h2>Mirani Dam</h2>

            <p>
              Mirani Dam is located on the Dasht River in Balochistan. It was
              constructed to improve irrigation, supply drinking water and
              support agricultural development in the Makran region.
            </p>

            <p>
              The project has significantly improved water availability for
              orchards and farming communities in an otherwise arid region.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>River: Dasht River</li>

                  <li>Province: Balochistan</li>

                  <li>Completed: 2006</li>

                  <li>Owner: WAPDA</li>

                  <li>Main Purpose: Irrigation</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Supports Makran agriculture.</li>

                  <li>Provides drinking water.</li>

                  <li>Improves food production.</li>

                  <li>Stores seasonal floodwater.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* GOMAL ZAM DAM */}

          <section className="motorways-section exa-card">
            <h2>Gomal Zam Dam</h2>

            <p>
              Gomal Zam Dam is constructed on the Gomal River in southern Khyber
              Pakhtunkhwa. It is a multipurpose project designed to provide
              irrigation water and generate hydroelectric power.
            </p>

            <p>
              The project has increased agricultural productivity in Dera Ismail
              Khan and surrounding areas by providing a more reliable supply of
              irrigation water.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>River: Gomal River</li>

                  <li>Province: Khyber Pakhtunkhwa</li>

                  <li>Completed: 2013</li>

                  <li>Owner: WAPDA</li>

                  <li>Main Purpose: Irrigation & Hydropower</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Benefits</h3>

                <ul>
                  <li>Generates renewable electricity.</li>

                  <li>Expands irrigated farmland.</li>

                  <li>Improves water management.</li>

                  <li>Supports local economic development.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* KHANPUR DAM */}

          <section className="motorways-section exa-card">
            <h2>Khanpur Dam</h2>

            <p>
              Khanpur Dam is constructed on the Haro River near Khanpur in
              Khyber Pakhtunkhwa. It is one of the major water reservoirs
              supplying drinking water to Islamabad and Rawalpindi while also
              providing irrigation water to surrounding agricultural areas.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>River: Haro River</li>

                  <li>Province: Khyber Pakhtunkhwa</li>

                  <li>Completed: 1983</li>

                  <li>Owner: WAPDA</li>

                  <li>Main Purpose: Water Supply & Irrigation</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Supplies Islamabad.</li>

                  <li>Supplies Rawalpindi.</li>

                  <li>Supports irrigation.</li>

                  <li>Popular tourism destination.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* RAWAL DAM */}

          <section className="motorways-section exa-card">
            <h2>Rawal Dam</h2>

            <p>
              Rawal Dam is located in Islamabad on the Korang River. It was
              constructed mainly to provide drinking water for Islamabad and
              Rawalpindi.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>River: Korang River</li>

                  <li>Region: Islamabad Capital Territory</li>

                  <li>Completed: 1962</li>

                  <li>Main Purpose: Water Supply</li>

                  <li>Managed by CDA</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Provides drinking water.</li>

                  <li>Controls seasonal runoff.</li>

                  <li>Important recreational area.</li>

                  <li>Supports nearby agriculture.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SATPARA DAM */}

          <section className="motorways-section exa-card">
            <h2>Satpara Dam</h2>

            <p>
              Satpara Dam is situated near Skardu in Gilgit-Baltistan on Satpara
              Stream. It was developed to improve irrigation, generate
              hydroelectric power and provide water for local communities.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>River: Satpara Stream</li>

                  <li>Region: Gilgit-Baltistan</li>

                  <li>Completed: 2011</li>

                  <li>Main Purpose: Irrigation & Hydropower</li>

                  <li>Supports Skardu region.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Benefits</h3>

                <ul>
                  <li>Produces clean electricity.</li>

                  <li>Supports agriculture.</li>

                  <li>Improves water availability.</li>

                  <li>Boosts regional development.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* IMPORTANCE */}

          <section id="importance" className="motorways-section exa-card">
            <h2>Importance of Dams in Pakistan</h2>

            <p>
              Dams are among Pakistan's most valuable national assets. They
              store freshwater during the monsoon, regulate river flow, generate
              hydroelectric power, reduce floods and provide water for
              agriculture, industries and domestic consumption.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Agriculture</h3>

                <ul>
                  <li>Reliable irrigation supply.</li>

                  <li>Supports food security.</li>

                  <li>Improves crop production.</li>

                  <li>Reduces drought impacts.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Energy</h3>

                <ul>
                  <li>Produces renewable electricity.</li>

                  <li>Reduces dependence on fuel imports.</li>

                  <li>Supports industrial growth.</li>

                  <li>Provides clean energy.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Flood Control</h3>

                <ul>
                  <li>Stores floodwater.</li>

                  <li>Protects downstream cities.</li>

                  <li>Reduces economic losses.</li>

                  <li>Improves river management.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PMA / ISSB IMPORTANT FACTS */}

          <section className="motorways-section exa-card">
            <h2>PMA / ISSB Important Facts</h2>

            <div className="important-grid">
              <div className="important-item">
                ✓ Largest dam of Pakistan → Tarbela Dam
              </div>

              <div className="important-item">
                ✓ Tarbela Dam is built on the Indus River.
              </div>

              <div className="important-item">
                ✓ Mangla Dam is built on the Jhelum River.
              </div>

              <div className="important-item">
                ✓ Warsak Dam is on the Kabul River.
              </div>

              <div className="important-item">
                ✓ Mohmand Dam is on the Swat River.
              </div>

              <div className="important-item">
                ✓ Hub Dam supplies water to Karachi.
              </div>

              <div className="important-item">
                ✓ Khanpur Dam supplies Islamabad & Rawalpindi.
              </div>

              <div className="important-item">
                ✓ Rawal Dam is built on the Korang River.
              </div>

              <div className="important-item">
                ✓ Satpara Dam is located in Gilgit-Baltistan.
              </div>

              <div className="important-item">
                ✓ Diamer-Bhasha Dam is under construction on the Indus River.
              </div>

              <div className="important-item">
                ✓ WAPDA manages most of Pakistan's major dams.
              </div>

              <div className="important-item">
                ✓ Major dams provide irrigation, flood control and hydroelectric
                power.
              </div>
            </div>
          </section>

          {/* FAQ */}

          <section id="faq" className="motorways-section exa-card">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-list">
              <details className="faq-item" open>
                <summary>Which is the largest dam in Pakistan?</summary>

                <p>
                  Tarbela Dam, built on the Indus River in Khyber Pakhtunkhwa,
                  is the largest dam in Pakistan and one of the world's largest
                  earth-filled dams.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which river is Mangla Dam built on?</summary>

                <p>
                  Mangla Dam is constructed on the Jhelum River near Mirpur in
                  Azad Jammu & Kashmir.
                </p>
              </details>

              <details className="faq-item">
                <summary>Why are dams important in Pakistan?</summary>

                <p>
                  Dams provide irrigation water, generate hydroelectric power,
                  reduce floods, store freshwater and support agriculture and
                  economic development.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which dam supplies water to Karachi?</summary>

                <p>
                  Hub Dam is one of the principal sources of drinking water for
                  Karachi.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which organization manages most major dams?</summary>

                <p>
                  The Water and Power Development Authority (WAPDA) manages most
                  of Pakistan's major dams and hydropower projects.
                </p>
              </details>
            </div>
          </section>

          {/* PRACTICE MCQS */}

          <section id="practicemcq" className="motorways-section exa-card">
            <h2>Practice MCQs</h2>

            <MCQCard
              question="Which is the largest dam in Pakistan?"
              options={["Mangla Dam", "Warsak Dam", "Tarbela Dam", "Hub Dam"]}
              correct={2}
              explanation="Tarbela Dam is the largest dam in Pakistan."
            />

            <MCQCard
              question="Tarbela Dam is built on which river?"
              options={["Jhelum", "Chenab", "Indus", "Swat"]}
              correct={2}
              explanation="Tarbela Dam is constructed on the Indus River."
            />

            <MCQCard
              question="Mangla Dam is built on:"
              options={[
                "Jhelum River",
                "Indus River",
                "Ravi River",
                "Kabul River",
              ]}
              correct={0}
              explanation="Mangla Dam is built on the Jhelum River."
            />

            <MCQCard
              question="Warsak Dam is located on the:"
              options={[
                "Swat River",
                "Kabul River",
                "Indus River",
                "Haro River",
              ]}
              correct={1}
              explanation="Warsak Dam is constructed on the Kabul River."
            />

            <MCQCard
              question="Hub Dam mainly supplies drinking water to:"
              options={["Lahore", "Islamabad", "Karachi", "Peshawar"]}
              correct={2}
              explanation="Hub Dam is one of the major water sources for Karachi."
            />

            <MCQCard
              question="Which organization manages most major dams in Pakistan?"
              options={["NHA", "WAPDA", "FWO", "CDA"]}
              correct={1}
              explanation="Most major dams are managed by WAPDA."
            />
          </section>

          {/* QUICK REVISION */}

          <section className="motorways-section revision-box">
            <h2>Quick Revision</h2>

            <div className="revision-grid">
              <div>
                <strong>Largest Dam</strong>

                <span>Tarbela</span>
              </div>

              <div>
                <strong>Largest Reservoir</strong>

                <span>Tarbela</span>
              </div>

              <div>
                <strong>Built on Jhelum</strong>

                <span>Mangla</span>
              </div>

              <div>
                <strong>Karachi Water</strong>

                <span>Hub Dam</span>
              </div>
            </div>
          </section>

          {/* DID YOU KNOW */}

          <section className="motorways-section exa-card">
            <h2>Did You Know?</h2>

            <div className="important-grid">
              <div className="important-item">
                💧 Pakistan's agriculture depends heavily on water stored in
                reservoirs.
              </div>

              <div className="important-item">
                ⚡ Hydropower is one of Pakistan's cleanest renewable energy
                sources.
              </div>

              <div className="important-item">
                🌾 Most irrigation canals receive water released from major
                dams.
              </div>

              <div className="important-item">
                🏔️ Tarbela is among the world's largest earth-filled dams.
              </div>

              <div className="important-item">
                🌊 Diamer-Bhasha Dam is expected to significantly increase
                Pakistan's water storage capacity.
              </div>

              <div className="important-item">
                🚰 Khanpur and Rawal dams provide drinking water to Islamabad
                and Rawalpindi.
              </div>
            </div>
          </section>

          {/* EXAM TIPS */}

          <section className="motorways-section exa-card">
            <h2>PMA / ISSB Exam Tips</h2>

            <p>
              Questions about Pakistan's dams frequently appear in PMA Long
              Course, ISSB, ASF, Police, FPSC, CSS, PMS, PPSC and other
              competitive examinations. Focus on remembering each dam's river,
              province or region, primary purpose and any distinctive feature
              such as being the largest, oldest or currently under construction.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Must Remember</h3>

                <ul>
                  <li>Tarbela → Indus River</li>

                  <li>Mangla → Jhelum River</li>

                  <li>Warsak → Kabul River</li>

                  <li>Mohmand → Swat River</li>

                  <li>Hub → Karachi Water Supply</li>

                  <li>Rawal → Korang River</li>

                  <li>Khanpur → Haro River</li>

                  <li>Diamer-Bhasha → Indus River</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Preparation Strategy</h3>

                <ul>
                  <li>Memorize every major dam with its river.</li>

                  <li>Learn the province or region.</li>

                  <li>Practice interactive MCQs daily.</li>

                  <li>Revise hydroelectric projects regularly.</li>

                  <li>Compare dams with Pakistan's rivers.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DamsOfPakistan;
