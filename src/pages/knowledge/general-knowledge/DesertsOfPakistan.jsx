import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import {
  FiBook,
  FiMap,
  FiLayers,
  FiNavigation,
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
    id: "deserts",
    title: "Major Deserts",
    icon: FiLayers,
  },
  {
    id: "wildlife",
    title: "Wildlife",
    icon: FiMap,
  },
  {
    id: "climate",
    title: "Climate",
    icon: FiNavigation,
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
];

const DesertsOfPakistan = () => {
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
        threshold: 0.25,

        rootMargin: "-120px 0px -60% 0px",
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
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
      <Navbar />
      <main className="motorways-page">
        <Helmet>
          <title>
            Deserts of Pakistan | Complete Guide, MCQs & Geography Notes |
            EXAMITICS
          </title>

          <meta
            name="description"
            content="Study the deserts of Pakistan including Thar, Cholistan, Thal, Kharan and Katpana Desert with maps, facts, MCQs and complete geography notes for PMA, ISSB, CSS, FPSC and other competitive exams."
          />

          <meta
            name="keywords"
            content="Deserts of Pakistan, Thar Desert, Cholistan Desert, Thal Desert, Kharan Desert, Katpana Desert, Pakistan Geography, PMA Notes, ISSB Notes, CSS Geography, FPSC GK, EXAMITICS"
          />

          <meta property="og:title" content="Deserts of Pakistan | EXAMITICS" />

          <meta
            property="og:description"
            content="Comprehensive notes on Pakistan's deserts with interactive MCQs, geography facts and exam preparation."
          />

          <meta property="og:type" content="article" />

          <meta
            property="og:url"
            content="https://www.examitics.com/knowledge/general-knowledge/deserts-of-pakistan"
          />

          <link
            rel="canonical"
            href="https://www.examitics.com/knowledge/general-knowledge/deserts-of-pakistan"
          />
        </Helmet>

        {/* HERO */}

        <section className="motorways-hero">
          <div className="container-custom">
            <span className="hero-badge">General Knowledge</span>

            <h1>Deserts of Pakistan</h1>

            <p>
              Pakistan is home to several important hot and cold deserts that
              play a significant role in the country's geography, biodiversity,
              climate, tourism and economy. This guide covers Pakistan's major
              deserts including the Thar, Cholistan, Thal, Kharan and Katpana
              Deserts, along with important facts, wildlife, climate,
              interactive MCQs and exam preparation notes for PMA, ISSB, CSS,
              PMS, FPSC, PPSC, ASF, FIA and other competitive examinations.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>5</strong>

                <span>Major Deserts</span>
              </div>

              <div className="hero-stat">
                <strong>Largest</strong>

                <span>Thar Desert</span>
              </div>

              <div className="hero-stat">
                <strong>Cold Desert</strong>

                <span>Katpana</span>
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
                    className={active === section.id ? "active" : ""}
                    onClick={() => scrollTo(section.id)}
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
              Approximately one-fifth of Pakistan's land area is classified as
              arid or semi-arid. These regions include some of South Asia's most
              important deserts, ranging from the vast hot sand dunes of the
              Thar Desert to the spectacular high-altitude cold desert of
              Katpana in Gilgit-Baltistan.
            </p>

            <p>
              Pakistan's deserts are rich in natural resources, wildlife and
              cultural heritage. They support livestock, agriculture in
              irrigated areas, renewable energy, mineral extraction and tourism
              while providing habitats for many unique plant and animal species.
            </p>
          </section>

          {/* MAJOR DESERTS */}

          <section id="deserts" className="motorways-section exa-card">
            <h2>Major Deserts of Pakistan</h2>

            <p>
              Pakistan has five major deserts. Four are hot deserts, while
              Katpana is a high-altitude cold desert famous for its snow-covered
              sand dunes during winter.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Desert</th>

                    <th>Province / Region</th>

                    <th>Type</th>

                    <th>Known For</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Thar Desert</td>

                    <td>Sindh</td>

                    <td>Hot Desert</td>

                    <td>Largest Desert of Pakistan</td>
                  </tr>

                  <tr>
                    <td>Cholistan Desert</td>

                    <td>Punjab</td>

                    <td>Hot Desert</td>

                    <td>Derawar Fort & Jeep Rally</td>
                  </tr>

                  <tr>
                    <td>Thal Desert</td>

                    <td>Punjab</td>

                    <td>Hot Desert</td>

                    <td>Sand Dunes & Irrigation</td>
                  </tr>

                  <tr>
                    <td>Kharan Desert</td>

                    <td>Balochistan</td>

                    <td>Hot Desert</td>

                    <td>Arid Plateau</td>
                  </tr>

                  <tr>
                    <td>Katpana Desert</td>

                    <td>Gilgit-Baltistan</td>

                    <td>Cold Desert</td>

                    <td>High-Altitude Desert</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* THAR DESERT */}

          <section className="motorways-section exa-card">
            <h2>Thar Desert</h2>

            <p>
              The Thar Desert is the largest desert in Pakistan and forms part
              of the Great Indian (Thar) Desert, which extends into the Indian
              states of Rajasthan and Gujarat. In Pakistan, it is mainly located
              in Tharparkar, Umerkot, Sanghar and Mirpurkhas districts of Sindh.
            </p>

            <p>
              The desert is known for its vast sand dunes, distinctive culture,
              livestock farming and the world-class Thar Coalfield, one of the
              largest lignite coal reserves in the world. Despite the harsh
              climate, millions of people live in the region and depend on
              livestock and rain-fed agriculture.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Province: Sindh</li>

                  <li>Largest desert in Pakistan.</li>

                  <li>Part of the Great Indian Desert.</li>

                  <li>Contains Thar Coalfield.</li>

                  <li>Home to Tharparkar District.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Coal reserves.</li>

                  <li>Livestock farming.</li>

                  <li>Tourism.</li>

                  <li>Renewable energy projects.</li>

                  <li>Rich cultural heritage.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CHOLISTAN DESERT */}

          <section className="motorways-section exa-card">
            <h2>Cholistan Desert</h2>

            <p>
              The Cholistan Desert lies in southern Punjab, primarily in
              Bahawalpur Division. It is a continuation of the Great Thar Desert
              and is famous for Derawar Fort, nomadic communities and the annual
              Cholistan Desert Jeep Rally.
            </p>

            <p>
              Historically, Cholistan was crossed by ancient trade routes and
              once supported settlements along the Hakra River, believed to be
              associated with the ancient Ghaggar-Hakra river system.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Province: Punjab</li>

                  <li>Located near Bahawalpur.</li>

                  <li>Hot desert.</li>

                  <li>Contains Derawar Fort.</li>

                  <li>Hosts Jeep Rally.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Tourism.</li>

                  <li>Cultural festivals.</li>

                  <li>Livestock grazing.</li>

                  <li>Historic forts.</li>

                  <li>Desert conservation.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* THAL DESERT */}

          <section className="motorways-section exa-card">
            <h2>Thal Desert</h2>

            <p>
              The Thal Desert is located in central Punjab between the Indus and
              Jhelum rivers. Unlike many deserts, a significant portion of Thal
              has been reclaimed for agriculture through irrigation projects,
              particularly the Thal Canal.
            </p>

            <p>
              Today, the region produces wheat, cotton, sugarcane and other
              crops while still retaining extensive sand dunes and dry
              landscapes.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Province: Punjab</li>

                  <li>Between Indus & Jhelum Rivers.</li>

                  <li>Hot desert.</li>

                  <li>Thal Canal irrigation.</li>

                  <li>Agricultural development.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Crop cultivation.</li>

                  <li>Livestock.</li>

                  <li>Irrigation projects.</li>

                  <li>Economic development.</li>

                  <li>Food production.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* KHARAN DESERT */}

          <section className="motorways-section exa-card">
            <h2>Kharan Desert</h2>

            <p>
              The Kharan Desert is located in western Balochistan and consists
              mainly of rocky plains, gravel surfaces and sandy areas. It
              receives very little rainfall and is among Pakistan's driest
              regions.
            </p>

            <p>
              The desert is sparsely populated and supports drought-resistant
              vegetation and wildlife adapted to arid conditions. It is also
              important from a geological and environmental perspective.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Province: Balochistan</li>

                  <li>Hot desert.</li>

                  <li>Extremely arid climate.</li>

                  <li>Rocky and sandy terrain.</li>

                  <li>Low population density.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Geological significance.</li>

                  <li>Wildlife habitat.</li>

                  <li>Scientific research.</li>

                  <li>Arid ecosystem.</li>

                  <li>Natural landscape.</li>
                </ul>
              </div>
            </div>
          </section>
          {/* KATPANA COLD DESERT */}

          <section className="motorways-section exa-card">
            <h2>Katpana Cold Desert</h2>

            <p>
              The Katpana Cold Desert is located near Skardu in Gilgit-Baltistan
              and is one of the world's highest cold deserts. Unlike Pakistan's
              hot deserts, Katpana experiences extremely cold winters with
              snowfall, while the sandy landscape remains visible throughout
              much of the year.
            </p>

            <p>
              The desert has become a major tourist attraction due to its unique
              combination of snow-covered sand dunes, surrounding mountains and
              beautiful lakes. It is also an important example of Pakistan's
              geographical diversity.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Region: Gilgit-Baltistan</li>

                  <li>Near Skardu City.</li>

                  <li>Cold desert.</li>

                  <li>High-altitude landscape.</li>

                  <li>Snow-covered sand dunes.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Adventure tourism.</li>

                  <li>Photography destination.</li>

                  <li>Unique ecosystem.</li>

                  <li>Supports local economy.</li>

                  <li>Important geography topic.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* DESERT WILDLIFE */}

          <section id="wildlife" className="motorways-section exa-card">
            <h2>Wildlife of Pakistan's Deserts</h2>

            <p>
              Despite harsh climatic conditions, Pakistan's deserts support a
              surprising variety of wildlife. These species have adapted to
              survive with limited water, extreme temperatures and sparse
              vegetation.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Animal</th>

                    <th>Found In</th>

                    <th>Category</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Chinkara (Indian Gazelle)</td>

                    <td>Thar, Cholistan</td>

                    <td>Mammal</td>
                  </tr>

                  <tr>
                    <td>Desert Fox</td>

                    <td>Thar, Cholistan, Kharan</td>

                    <td>Mammal</td>
                  </tr>

                  <tr>
                    <td>Monitor Lizard</td>

                    <td>Most Hot Deserts</td>

                    <td>Reptile</td>
                  </tr>

                  <tr>
                    <td>Sandgrouse</td>

                    <td>Thal & Cholistan</td>

                    <td>Bird</td>
                  </tr>

                  <tr>
                    <td>Golden Eagle</td>

                    <td>Kharan Region</td>

                    <td>Bird</td>
                  </tr>

                  <tr>
                    <td>Desert Hare</td>

                    <td>Various Deserts</td>

                    <td>Mammal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CLIMATE */}

          <section id="climate" className="motorways-section exa-card">
            <h2>Climate of Pakistan's Deserts</h2>

            <p>
              Pakistan's deserts experience hot summers, low rainfall and high
              evaporation rates. Temperatures in the Thar, Cholistan and Kharan
              deserts often exceed 45°C during summer, while Katpana experiences
              freezing temperatures during winter because of its high elevation.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Main Features</h3>

                <ul>
                  <li>Very low rainfall.</li>

                  <li>High summer temperatures.</li>

                  <li>Large day-night temperature difference.</li>

                  <li>Frequent dust storms.</li>

                  <li>Limited freshwater resources.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Challenges</h3>

                <ul>
                  <li>Drought.</li>

                  <li>Water scarcity.</li>

                  <li>Desertification.</li>

                  <li>Sand movement.</li>

                  <li>Climate change impacts.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* IMPORTANCE */}

          <section id="importance" className="motorways-section exa-card">
            <h2>Importance of Pakistan's Deserts</h2>

            <p>
              Pakistan's deserts contribute significantly to the country's
              economy, biodiversity, culture and tourism. They contain valuable
              mineral resources, renewable energy potential and unique
              ecosystems while preserving centuries-old traditions and heritage.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Economic Importance</h3>

                <ul>
                  <li>Thar Coalfield.</li>

                  <li>Livestock farming.</li>

                  <li>Solar energy potential.</li>

                  <li>Wind energy projects.</li>

                  <li>Mineral resources.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Environmental Importance</h3>

                <ul>
                  <li>Unique ecosystems.</li>

                  <li>Wildlife habitats.</li>

                  <li>Biodiversity conservation.</li>

                  <li>Rare desert plants.</li>

                  <li>Ecological balance.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Tourism & Culture</h3>

                <ul>
                  <li>Derawar Fort.</li>

                  <li>Cholistan Jeep Rally.</li>

                  <li>Katpana Desert.</li>

                  <li>Local traditions.</li>

                  <li>Adventure tourism.</li>
                </ul>
              </div>
            </div>
          </section>
          {/* FAQ */}

          <section id="faq" className="motorways-section exa-card">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-list">
              <details className="faq-item" open>
                <summary>Which is the largest desert of Pakistan?</summary>

                <p>
                  The Thar Desert is the largest desert in Pakistan and extends
                  into India.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which is the only cold desert in Pakistan?</summary>

                <p>
                  Katpana Desert, located near Skardu in Gilgit-Baltistan, is
                  Pakistan's famous cold desert.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which desert is famous for Derawar Fort?</summary>

                <p>
                  Cholistan Desert in southern Punjab is home to the historic
                  Derawar Fort.
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  Which desert contains Pakistan's largest coal reserves?
                </summary>

                <p>
                  The Thar Desert contains the Thar Coalfield, one of the
                  world's largest lignite coal reserves.
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  Which desert lies between the Indus and Jhelum Rivers?
                </summary>

                <p>
                  The Thal Desert is situated between the Indus and Jhelum
                  rivers in Punjab.
                </p>
              </details>
            </div>
          </section>

          {/* PRACTICE MCQS */}

          <section className="motorways-section exa-card">
            <h2>Practice MCQs</h2>

            <MCQCard
              question="Which is the largest desert of Pakistan?"
              options={["Cholistan", "Thar", "Thal", "Kharan"]}
              correct={1}
              explanation="The Thar Desert is the largest desert in Pakistan."
            />

            <MCQCard
              question="Pakistan's famous cold desert is:"
              options={["Katpana", "Thar", "Cholistan", "Thal"]}
              correct={0}
              explanation="Katpana Desert near Skardu is Pakistan's best-known cold desert."
            />

            <MCQCard
              question="The Cholistan Desert is located in:"
              options={["Sindh", "Punjab", "Balochistan", "Gilgit-Baltistan"]}
              correct={1}
              explanation="Cholistan Desert is located in southern Punjab."
            />

            <MCQCard
              question="Derawar Fort is located in:"
              options={[
                "Thar Desert",
                "Kharan Desert",
                "Cholistan Desert",
                "Thal Desert",
              ]}
              correct={2}
              explanation="Derawar Fort is situated in the Cholistan Desert."
            />

            <MCQCard
              question="The Thar Desert is mainly located in:"
              options={["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"]}
              correct={1}
              explanation="Most of Pakistan's Thar Desert lies in Sindh."
            />

            <MCQCard
              question="Which desert lies between the Indus and Jhelum Rivers?"
              options={["Thal", "Kharan", "Thar", "Katpana"]}
              correct={0}
              explanation="The Thal Desert lies between the Indus and Jhelum rivers."
            />

            <MCQCard
              question="Thar Coalfield is located in:"
              options={["Cholistan", "Kharan", "Thar", "Katpana"]}
              correct={2}
              explanation="Pakistan's Thar Coalfield is located in the Thar Desert."
            />

            <MCQCard
              question="The Kharan Desert is located in:"
              options={["Sindh", "Punjab", "Balochistan", "Gilgit-Baltistan"]}
              correct={2}
              explanation="Kharan Desert is situated in Balochistan."
            />

            <MCQCard
              question="Which desert is famous for the Cholistan Jeep Rally?"
              options={["Thar", "Thal", "Cholistan", "Katpana"]}
              correct={2}
              explanation="The Cholistan Desert hosts the annual Jeep Rally."
            />

            <MCQCard
              question="Katpana Desert is located near:"
              options={["Quetta", "Bahawalpur", "Skardu", "Karachi"]}
              correct={2}
              explanation="Katpana Desert is located near Skardu in Gilgit-Baltistan."
            />
          </section>

          {/* QUICK REVISION */}

          <section className="motorways-section revision-box">
            <h2>Quick Revision</h2>

            <div className="revision-grid">
              <div>
                <strong>Largest Desert</strong>
                <span>Thar</span>
              </div>

              <div>
                <strong>Cold Desert</strong>
                <span>Katpana</span>
              </div>

              <div>
                <strong>Punjab Desert</strong>
                <span>Cholistan</span>
              </div>

              <div>
                <strong>Between Indus & Jhelum</strong>
                <span>Thal</span>
              </div>

              <div>
                <strong>Balochistan Desert</strong>
                <span>Kharan</span>
              </div>

              <div>
                <strong>Coal Reserves</strong>
                <span>Thar</span>
              </div>

              <div>
                <strong>Derawar Fort</strong>
                <span>Cholistan</span>
              </div>

              <div>
                <strong>Skardu Desert</strong>
                <span>Katpana</span>
              </div>
            </div>
          </section>

          {/* DID YOU KNOW */}

          <section className="motorways-section exa-card">
            <h2>Did You Know?</h2>

            <div className="important-grid">
              <div className="important-item">
                🏜️ Thar is Pakistan's largest desert.
              </div>

              <div className="important-item">
                ❄️ Katpana is one of the world's highest cold deserts.
              </div>

              <div className="important-item">
                🏰 Derawar Fort stands in the Cholistan Desert.
              </div>

              <div className="important-item">
                ⛏️ Thar Coalfield contains one of the world's largest lignite
                coal reserves.
              </div>

              <div className="important-item">
                🚙 The Cholistan Jeep Rally is one of Pakistan's biggest
                motorsport events.
              </div>

              <div className="important-item">
                🌵 Desert plants have adapted to survive with very little
                rainfall.
              </div>
            </div>
          </section>

          {/* PMA / ISSB */}

          <section className="motorways-section exa-card">
            <h2>PMA / ISSB Exam Tips</h2>

            <p>
              Questions on Pakistan's deserts frequently appear in PMA Long
              Course, ISSB, CSS, PMS, FPSC, PPSC, ASF, FIA and other competitive
              examinations. Focus on desert locations, famous landmarks, natural
              resources and important geographical features.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Must Remember</h3>

                <ul>
                  <li>Largest Desert → Thar</li>

                  <li>Cold Desert → Katpana</li>

                  <li>Punjab Desert → Cholistan</li>

                  <li>Balochistan Desert → Kharan</li>

                  <li>Between Indus & Jhelum → Thal</li>

                  <li>Derawar Fort → Cholistan</li>

                  <li>Coalfield → Thar</li>

                  <li>Skardu → Katpana</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Preparation Strategy</h3>

                <ul>
                  <li>Learn every desert with its province.</li>

                  <li>Remember famous landmarks.</li>

                  <li>Revise important wildlife.</li>

                  <li>Practice location-based MCQs.</li>

                  <li>Memorize the quick revision table before exams.</li>
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

export default DesertsOfPakistan;
