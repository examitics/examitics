import { useEffect, useState } from "react";
import {
  FiBook,
  FiDroplet,
  FiMap,
  FiInfo,
  FiCheckCircle,
  FiHelpCircle,
} from "react-icons/fi";

import Navbar from "../../../components/layout/navbar";
import Footer from "../../../components/layout/footer";

import MCQCard from "../../../components/knowledge/MCQCard";
import "./MotorwaysOfPakistan.css";

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: FiBook,
  },
  {
    id: "river-system",
    title: "River System",
    icon: FiDroplet,
  },
  {
    id: "major-rivers",
    title: "Major Rivers",
    icon: FiMap,
  },
  {
    id: "importance",
    title: "Importance",
    icon: FiCheckCircle,
  },
  {
    id: "important",
    title: "Important Facts",
    icon: FiInfo,
  },
  {
    id: "practicemcq",
    title: "Practice MCQs",
    icon: FiHelpCircle,
  },
  {
    id: "faq",
    title: "FAQs",
    icon: FiHelpCircle,
  },
];

const RiversOfPakistan = () => {
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
      <main className="motorways-page">
        <Navbar />
        {/* HERO */}

        <section className="motorways-hero">
          <div className="container-custom">
            <span className="hero-badge">General Knowledge</span>

            <h1>Rivers of Pakistan</h1>

            <p>
              Learn about the rivers of Pakistan, the Indus River System, major
              tributaries, eastern and western rivers, their geographical
              importance, irrigation system and frequently asked questions for
              PMA, ISSB, CSS, PMS, FPSC and other competitive examinations.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>6</strong>
                <span>Major Rivers</span>
              </div>

              <div className="hero-stat">
                <strong>Indus</strong>
                <span>Main River</span>
              </div>

              <div className="hero-stat">
                <strong>Updated</strong>
                <span>2026</span>
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
              Pakistan possesses one of the world's largest integrated river
              systems. The country's agriculture, drinking water supply,
              hydroelectric power generation, fisheries and economy depend
              heavily on its rivers.
            </p>

            <p>
              Most rivers in Pakistan belong to the Indus River System.
              Originating in the Tibetan Plateau, the Indus River enters
              Pakistan through Gilgit-Baltistan and flows southwards before
              emptying into the Arabian Sea near Karachi.
            </p>

            <p>
              Pakistan's rivers support one of the largest irrigation networks
              in the world and are considered the backbone of the country's
              agricultural sector.
            </p>
          </section>

          {/* INDUS RIVER SYSTEM */}

          <section id="river-system" className="motorways-section exa-card">
            <h2>Indus River System</h2>

            <p>
              The Indus River System consists of the Indus River and its major
              tributaries. It supplies water to almost all irrigated lands in
              Pakistan and supports millions of people through agriculture,
              industry and domestic use.
            </p>

            <p>
              {/* The six principal rivers associated with the Indus
            Basin are: */}
              The six major rivers commonly taught in Pakistan's geography are
              the Indus, Jhelum, Chenab, Ravi, Sutlej and Beas. Within Pakistan
              today, the most significant flowing rivers also include the Kabul
              River, which is a major western tributary of the Indus
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Western Rivers</h3>

                <ul>
                  <li>Indus River</li>

                  <li>Jhelum River</li>

                  <li>Chenab River</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Eastern Rivers</h3>

                <ul>
                  <li>Ravi River</li>

                  <li>Sutlej River</li>

                  <li>Beas River</li>
                </ul>
              </div>
            </div>

            <p>
              Under the Indus Waters Treaty (1960), the western rivers (Indus,
              Jhelum and Chenab) were allocated primarily to Pakistan, while the
              eastern rivers (Ravi, Sutlej and Beas) were allocated primarily to
              India, subject to the treaty's provisions.
            </p>
          </section>

          {/* MAJOR RIVERS */}

          <section id="major-rivers" className="motorways-section exa-card">
            <h2>Major Rivers of Pakistan</h2>

            <p>
              Pakistan's river network is dominated by the Indus River and its
              tributaries. These rivers are essential for irrigation,
              hydroelectric power generation, drinking water, agriculture and
              economic development.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>River</th>

                    <th>Origin</th>

                    <th>Flows Through</th>

                    <th>Joins</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Indus</td>

                    <td>Tibetan Plateau (China)</td>

                    <td>Gilgit-Baltistan, KPK, Punjab, Sindh</td>

                    <td>Arabian Sea</td>
                  </tr>

                  <tr>
                    <td>Jhelum</td>

                    <td>Verinag Spring (Kashmir)</td>

                    <td>Azad Kashmir, Punjab</td>

                    <td>Chenab River</td>
                  </tr>

                  <tr>
                    <td>Chenab</td>

                    <td>Himachal Pradesh (India)</td>

                    <td>Punjab</td>

                    <td>Indus River (via Panjnad)</td>
                  </tr>

                  <tr>
                    <td>Ravi</td>

                    <td>Himachal Pradesh (India)</td>

                    <td>Punjab</td>

                    <td>Chenab River</td>
                  </tr>

                  <tr>
                    <td>Sutlej</td>

                    <td>Tibet</td>

                    <td>Punjab</td>

                    <td>Chenab River (via Panjnad)</td>
                  </tr>

                  <tr>
                    <td>Kabul</td>

                    <td>Hindu Kush (Afghanistan)</td>

                    <td>Khyber Pakhtunkhwa</td>

                    <td>Indus River at Attock</td>
                  </tr>

                  <tr>
                    <td>Swat</td>

                    <td>Hindu Kush Mountains</td>

                    <td>Swat Valley</td>

                    <td>Kabul River</td>
                  </tr>

                  <tr>
                    <td>Gilgit</td>

                    <td>Shandur Region</td>

                    <td>Gilgit-Baltistan</td>

                    <td>Indus River</td>
                  </tr>

                  <tr>
                    <td>Hunza</td>

                    <td>Khunjerab Region</td>

                    <td>Hunza Valley</td>

                    <td>Gilgit River</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* RIVER PROFILES */}

          <section className="motorways-section exa-card">
            <h2>Important Rivers</h2>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Indus River</h3>

                <ul>
                  <li>Longest river of Pakistan.</li>

                  <li>Length approximately 3,180 km.</li>

                  <li>Originates in Tibet.</li>

                  <li>Flows from north to south.</li>

                  <li>Empties into the Arabian Sea.</li>

                  <li>Supports Pakistan's irrigation system.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Jhelum River</h3>

                <ul>
                  <li>Originates from Verinag Spring.</li>

                  <li>Flows through Kashmir.</li>

                  <li>Mangla Dam is built on it.</li>

                  <li>Major western river.</li>

                  <li>Joins the Chenab River.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Chenab River</h3>

                <ul>
                  <li>Largest tributary of the Indus System.</li>

                  <li>Flows through Punjab.</li>

                  <li>Important for irrigation.</li>

                  <li>Receives Jhelum and Ravi waters.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Ravi River</h3>

                <ul>
                  <li>Flows near Lahore.</li>

                  <li>One of the eastern rivers.</li>

                  <li>
                    Allocated primarily to India under the Indus Waters Treaty.
                  </li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Sutlej River</h3>

                <ul>
                  <li>Originates in Tibet.</li>

                  <li>Longest eastern river.</li>

                  <li>Joins the Chenab through Panjnad.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Kabul River</h3>

                <ul>
                  <li>Originates in Afghanistan.</li>

                  <li>Flows into Pakistan at Khyber Pakhtunkhwa.</li>

                  <li>Meets the Indus River at Attock.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* IMPORTANCE */}

          <section id="importance" className="motorways-section exa-card">
            <h2>Importance of Rivers in Pakistan</h2>

            <p>
              Rivers are the lifeline of Pakistan. They support agriculture,
              hydroelectric power generation, drinking water supply, fisheries,
              transportation and industrial development.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Agriculture</h3>

                <ul>
                  <li>Largest irrigation system in the world.</li>

                  <li>Supports wheat, rice, sugarcane and cotton.</li>

                  <li>Provides water for millions of farmers.</li>

                  <li>Feeds Pakistan's agricultural economy.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Economy & Energy</h3>

                <ul>
                  <li>Hydroelectric power generation.</li>

                  <li>Industrial water supply.</li>

                  <li>Domestic water supply.</li>

                  <li>Supports fisheries and tourism.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* IMPORTANT FACTS */}

          <section id="important" className="motorways-section exa-card">
            <h2>PMA / ISSB Important Facts</h2>

            <div className="important-grid">
              <div className="important-item">
                ✓ Indus is Pakistan's longest river.
              </div>

              <div className="important-item">
                ✓ Mangla Dam is built on the Jhelum River.
              </div>

              <div className="important-item">
                ✓ Tarbela Dam is built on the Indus River.
              </div>

              <div className="important-item">
                ✓ Kabul River joins the Indus at Attock.
              </div>

              <div className="important-item">✓ Ravi flows near Lahore.</div>

              <div className="important-item">
                ✓ Sutlej originates in Tibet.
              </div>

              <div className="important-item">
                ✓ Chenab is one of Pakistan's major western rivers.
              </div>

              <div className="important-item">
                ✓ The Indus River empties into the Arabian Sea.
              </div>
            </div>
          </section>

          {/* FAQ */}

          <section id="faq" className="motorways-section exa-card">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-list">
              <details className="faq-item" open>
                <summary>Which is the longest river of Pakistan?</summary>

                <p>
                  The Indus River is the longest and most important river of
                  Pakistan. It originates in Tibet and flows south through the
                  country before emptying into the Arabian Sea.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which dam is built on the Indus River?</summary>

                <p>
                  Tarbela Dam, one of the world's largest earth-filled dams, is
                  constructed on the Indus River.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which river flows near Lahore?</summary>

                <p>
                  The Ravi River flows near Lahore and has great historical and
                  geographical importance.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which river joins the Indus at Attock?</summary>

                <p>
                  The Kabul River joins the Indus River near Attock in Punjab.
                </p>
              </details>

              <details className="faq-item">
                <summary>Why are Pakistan's rivers important?</summary>

                <p>
                  Pakistan's rivers provide irrigation, drinking water,
                  hydroelectric power, fisheries and support the country's
                  agricultural and industrial economy.
                </p>
              </details>
            </div>
          </section>

          {/* PRACTICE MCQS */}

          <section className="motorways-section exa-card">
            <h2>Practice MCQs</h2>

            <MCQCard
              question="Which is the longest river of Pakistan?"
              options={["Chenab", "Jhelum", "Indus", "Ravi"]}
              correct={2}
              explanation="The Indus River is Pakistan's longest river and forms the backbone of the country's river system."
            />

            <MCQCard
              question="Tarbela Dam is constructed on which river?"
              options={["Jhelum", "Chenab", "Indus", "Ravi"]}
              correct={2}
              explanation="Tarbela Dam is built on the Indus River in Khyber Pakhtunkhwa."
            />

            <MCQCard
              question="Mangla Dam is built on:"
              options={[
                "Jhelum River",
                "Chenab River",
                "Indus River",
                "Ravi River",
              ]}
              correct={0}
              explanation="Mangla Dam is built on the Jhelum River in Mirpur, Azad Jammu & Kashmir."
            />

            <MCQCard
              question="The Kabul River joins the Indus River at:"
              options={["Multan", "Attock", "Sukkur", "Hyderabad"]}
              correct={1}
              explanation="The Kabul River joins the Indus River at Attock."
            />

            <MCQCard
              question="Which river flows near Lahore?"
              options={["Sutlej", "Chenab", "Ravi", "Swat"]}
              correct={2}
              explanation="The Ravi River flows near Lahore and is one of the eastern rivers."
            />

            <MCQCard
              question="The Indus River finally empties into the:"
              options={[
                "Bay of Bengal",
                "Arabian Sea",
                "Persian Gulf",
                "Indian Ocean",
              ]}
              correct={1}
              explanation="The Indus River flows into the Arabian Sea near Karachi."
            />
          </section>

          {/* QUICK REVISION */}

          <section className="motorways-section revision-box">
            <h2>Quick Revision</h2>

            <div className="revision-grid">
              <div>
                <strong>Longest River</strong>

                <span>Indus</span>
              </div>

              <div>
                <strong>Tarbela Dam</strong>

                <span>Indus</span>
              </div>

              <div>
                <strong>Mangla Dam</strong>

                <span>Jhelum</span>
              </div>

              <div>
                <strong>Meets Indus</strong>

                <span>Kabul @ Attock</span>
              </div>
            </div>
          </section>

          {/* DID YOU KNOW */}

          <section className="motorways-section exa-card">
            <h2>Did You Know?</h2>

            <div className="important-grid">
              <div className="important-item">
                🌊 The Indus River is among the longest rivers in Asia.
              </div>

              <div className="important-item">
                🚜 Pakistan's Indus Basin Irrigation System is one of the
                largest contiguous irrigation systems in the world.
              </div>

              <div className="important-item">
                ⚡ Tarbela Dam generates a significant share of Pakistan's
                hydroelectric power.
              </div>

              <div className="important-item">
                🏔️ Many northern rivers originate from glaciers in the Himalaya,
                Karakoram and Hindu Kush mountain ranges.
              </div>
            </div>
          </section>

          {/* PMA / ISSB EXAM TIPS */}

          <section className="motorways-section exa-card">
            <h2>PMA / ISSB Exam Tips</h2>

            <p>
              Rivers of Pakistan are frequently tested in PMA Long Course, ISSB,
              ASF, Police, FPSC, PPSC, CSS, PMS and other competitive
              examinations. Focus on remembering the major rivers, important
              dams, tributaries and the Indus River System.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Must Remember</h3>

                <ul>
                  <li>Indus → Longest river of Pakistan.</li>

                  <li>Tarbela Dam → Indus River.</li>

                  <li>Mangla Dam → Jhelum River.</li>

                  <li>Kabul River joins the Indus at Attock.</li>

                  <li>Ravi River flows near Lahore.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Revision Strategy</h3>

                <ul>
                  <li>Learn the major rivers in sequence.</li>

                  <li>Memorize important dams and their rivers.</li>

                  <li>Practice map-based questions.</li>

                  <li>Revise tributaries of the Indus River.</li>

                  <li>Solve MCQs regularly.</li>
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

export default RiversOfPakistan;
