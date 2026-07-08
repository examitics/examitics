import { useEffect, useState } from "react";

import {
  FiBook,
  FiDroplet,
  FiGrid,
  FiMap,
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
    id: "formation",
    title: "Formation",
    icon: FiDroplet,
  },
  {
    id: "classification",
    title: "Classification",
    icon: FiGrid,
  },
  {
    id: "major-lakes",
    title: "Major Lakes",
    icon: FiMap,
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

const LakesOfPakistan = () => {
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
            name: "Lakes of Pakistan",
            url: "https://www.examitics.com/knowledge/general-knowledge/lakes-of-pakistan",
          },
        ]}
      />
      <Navbar />
      <main className="motorways-page">
        {/* HERO */}

        <section className="motorways-hero">
          <div className="container-custom">
            <span className="hero-badge">General Knowledge</span>

            <h1>Lakes of Pakistan</h1>

            <p>
              Explore the natural and artificial lakes of Pakistan, their
              locations, provinces, origins, ecological importance, tourism
              value and examination facts. This guide is designed for PMA, ISSB,
              CSS, PMS, FPSC, PPSC, ASF, FIA and other competitive exams.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>100+</strong>

                <span>Lakes</span>
              </div>

              <div className="hero-stat">
                <strong>4</strong>

                <span>Provinces</span>
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
              Pakistan possesses a diverse collection of lakes ranging from
              high-altitude glacial lakes in the Himalayas, Karakoram and Hindu
              Kush to freshwater reservoirs and saline lakes in the plains and
              deserts. These lakes are important sources of drinking water,
              irrigation, fisheries, tourism and biodiversity.
            </p>

            <p>
              Several lakes, including Haleji Lake and Keenjhar Lake, are
              internationally recognized wetlands under the Ramsar Convention
              because of their ecological significance and migratory bird
              populations.
            </p>

            <p>
              Pakistan's lakes contribute significantly to environmental
              sustainability by supporting aquatic ecosystems, groundwater
              recharge and wildlife conservation.
            </p>
          </section>

          {/* FORMATION */}

          <section id="formation" className="motorways-section exa-card">
            <h2>Formation of Lakes</h2>

            <p>
              Lakes in Pakistan have formed through different natural processes
              and human activities. Their formation depends on geological
              conditions, glaciers, rivers and dam construction.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Natural Formation</h3>

                <ul>
                  <li>Glacial activity.</li>

                  <li>Tectonic movements.</li>

                  <li>River erosion.</li>

                  <li>Landslides.</li>

                  <li>Natural depressions.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Artificial Formation</h3>

                <ul>
                  <li>Dam reservoirs.</li>

                  <li>Irrigation storage.</li>

                  <li>Flood management.</li>

                  <li>Urban water supply.</li>

                  <li>Hydroelectric projects.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CLASSIFICATION */}

          <section id="classification" className="motorways-section exa-card">
            <h2>Classification of Lakes</h2>

            <p>
              Lakes can be classified based on their origin, water type and
              location.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>By Origin</h3>

                <ul>
                  <li>Natural Lakes</li>

                  <li>Artificial Lakes</li>

                  <li>Glacial Lakes</li>

                  <li>Tectonic Lakes</li>

                  <li>Landslide Lakes</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>By Water Type</h3>

                <ul>
                  <li>Freshwater Lakes</li>

                  <li>Saltwater Lakes</li>

                  <li>Seasonal Lakes</li>

                  <li>Permanent Lakes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* MAJOR LAKES */}

          <section id="major-lakes" className="motorways-section exa-card">
            <h2>Major Lakes of Pakistan</h2>

            <p>
              The following lakes are among the most important and frequently
              asked in competitive examinations.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Lake</th>

                    <th>Province / Region</th>

                    <th>Type</th>

                    <th>Water</th>

                    <th>Famous For</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Manchar Lake</td>

                    <td>Sindh</td>

                    <td>Natural</td>

                    <td>Freshwater</td>

                    <td>Largest Natural Lake</td>
                  </tr>

                  <tr>
                    <td>Keenjhar (Kalri) Lake</td>

                    <td>Sindh</td>

                    <td>Freshwater</td>

                    <td>Freshwater</td>

                    <td>Karachi Water Supply</td>
                  </tr>

                  <tr>
                    <td>Haleji Lake</td>

                    <td>Sindh</td>

                    <td>Artificial</td>

                    <td>Freshwater</td>

                    <td>Ramsar Wetland</td>
                  </tr>

                  <tr>
                    <td>Saif-ul-Malook</td>

                    <td>Khyber Pakhtunkhwa</td>

                    <td>Glacial</td>

                    <td>Freshwater</td>

                    <td>Tourism</td>
                  </tr>

                  <tr>
                    <td>Attabad Lake</td>

                    <td>Gilgit-Baltistan</td>

                    <td>Landslide</td>

                    <td>Freshwater</td>

                    <td>Formed in 2010</td>
                  </tr>

                  <tr>
                    <td>Sheosar Lake</td>

                    <td>Gilgit-Baltistan</td>

                    <td>Alpine</td>

                    <td>Freshwater</td>

                    <td>Deosai National Park</td>
                  </tr>

                  <tr>
                    <td>Mahodand Lake</td>

                    <td>Khyber Pakhtunkhwa</td>

                    <td>Glacial</td>

                    <td>Freshwater</td>

                    <td>Swat Valley</td>
                  </tr>

                  <tr>
                    <td>Rush Lake</td>

                    <td>Gilgit-Baltistan</td>

                    <td>Glacial</td>

                    <td>Freshwater</td>

                    <td>High Altitude</td>
                  </tr>

                  <tr>
                    <td>Karambar Lake</td>

                    <td>Gilgit-Baltistan</td>

                    <td>Glacial</td>

                    <td>Freshwater</td>

                    <td>One of the Highest Lakes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* MANCHAR LAKE */}

          <section className="motorways-section exa-card">
            <h2>Manchar Lake</h2>

            <p>
              Manchar Lake is the largest natural freshwater lake in Pakistan.
              It is located in Jamshoro and Dadu districts of Sindh and is
              connected with the Indus River through the Aral Wah Canal.
            </p>

            <p>
              The lake supports thousands of local fishermen and provides an
              important habitat for migratory birds, fish and other aquatic
              wildlife. Seasonal inflow from the Indus River helps maintain its
              water level, although pollution and salinity remain major
              environmental challenges.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>Province: Sindh</li>

                  <li>Type: Natural Lake</li>

                  <li>Water: Freshwater</li>

                  <li>Districts: Jamshoro & Dadu</li>

                  <li>Connected to the Indus River</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Largest natural freshwater lake.</li>

                  <li>Supports fisheries.</li>

                  <li>Provides livelihoods.</li>

                  <li>Habitat for migratory birds.</li>

                  <li>Important wetland ecosystem.</li>
                </ul>
              </div>
            </div>

            <div className="important-grid">
              <div className="important-item">
                ✓ Largest natural freshwater lake in Pakistan.
              </div>

              <div className="important-item">✓ Located in Sindh.</div>

              <div className="important-item">
                ✓ Connected with the Indus River.
              </div>

              <div className="important-item">
                ✓ Important fishing resource.
              </div>
            </div>
          </section>

          {/* KEENJHAR LAKE */}

          <section className="motorways-section exa-card">
            <h2>Keenjhar (Kalri) Lake</h2>

            <p>
              Keenjhar Lake, also known as Kalri Lake, is one of Pakistan's
              largest freshwater lakes. It is situated in Thatta District,
              Sindh, and serves as a major source of drinking water for Karachi
              and nearby cities.
            </p>

            <p>
              The lake is also recognized as a Ramsar Wetland due to its
              ecological significance and the large number of migratory birds
              that visit every year.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>Province: Sindh</li>

                  <li>District: Thatta</li>

                  <li>Type: Freshwater Lake</li>

                  <li>Also called Kalri Lake</li>

                  <li>Ramsar Wetland</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Supplies water to Karachi.</li>

                  <li>Supports fisheries.</li>

                  <li>Popular tourist destination.</li>

                  <li>Important bird habitat.</li>

                  <li>Protected wetland.</li>
                </ul>
              </div>
            </div>

            <div className="important-grid">
              <div className="important-item">
                ✓ Largest freshwater lake in Sindh.
              </div>

              <div className="important-item">
                ✓ Main water source for Karachi.
              </div>

              <div className="important-item">✓ Ramsar Convention site.</div>

              <div className="important-item">
                ✓ Located in Thatta District.
              </div>
            </div>
          </section>

          {/* HALEJI LAKE */}

          <section className="motorways-section exa-card">
            <h2>Haleji Lake</h2>

            <p>
              Haleji Lake is one of Asia's most important wetlands for migratory
              birds. It is located in Thatta District, Sindh, and was originally
              developed as a reservoir to improve Karachi's water supply.
            </p>

            <p>
              Today, the lake is internationally recognized under the Ramsar
              Convention because of its rich biodiversity and seasonal bird
              population.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>Province: Sindh</li>

                  <li>District: Thatta</li>

                  <li>Type: Artificial Lake</li>

                  <li>Freshwater</li>

                  <li>Ramsar Wetland</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>International bird sanctuary.</li>

                  <li>Supports biodiversity.</li>

                  <li>Tourism attraction.</li>

                  <li>Important wetland ecosystem.</li>

                  <li>Environmental conservation.</li>
                </ul>
              </div>
            </div>

            <div className="important-grid">
              <div className="important-item">
                ✓ Famous for migratory birds.
              </div>

              <div className="important-item">✓ Ramsar Wetland Site.</div>

              <div className="important-item">✓ Located in Sindh.</div>

              <div className="important-item">
                ✓ One of Pakistan's best-known wetlands.
              </div>
            </div>
          </section>

          {/* HANNA LAKE */}

          <section className="motorways-section exa-card">
            <h2>Hanna Lake</h2>

            <p>
              Hanna Lake is a picturesque reservoir located near Quetta in
              Balochistan. Surrounded by rugged hills, it is one of the
              province's most popular tourist attractions.
            </p>

            <p>
              The lake stores rainwater and runoff from nearby streams,
              providing water for local communities while supporting tourism and
              recreation.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>Province: Balochistan</li>

                  <li>Near Quetta</li>

                  <li>Artificial Reservoir</li>

                  <li>Freshwater</li>

                  <li>Tourist Attraction</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Beautiful landscape.</li>

                  <li>Popular picnic spot.</li>

                  <li>Supports tourism.</li>

                  <li>Water storage.</li>

                  <li>Important local landmark.</li>
                </ul>
              </div>
            </div>

            <div className="important-grid">
              <div className="important-item">✓ Located near Quetta.</div>

              <div className="important-item">
                ✓ One of Balochistan's most famous lakes.
              </div>

              <div className="important-item">✓ Artificial reservoir.</div>

              <div className="important-item">✓ Major tourist destination.</div>
            </div>
          </section>
          {/* SAIF-UL-MALOOK */}

          <section className="motorways-section exa-card">
            <h2>Saif-ul-Malook Lake</h2>

            <p>
              Saif-ul-Malook is one of Pakistan's most famous alpine lakes. It
              is located near Naran in the Kaghan Valley of Khyber Pakhtunkhwa
              and is surrounded by snow-covered mountains, including Malika
              Parbat.
            </p>

            <p>
              The lake attracts thousands of tourists every year because of its
              crystal-clear water, scenic beauty and the famous folklore of
              Prince Saif-ul-Malook and the Fairy Princess.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>Province: Khyber Pakhtunkhwa</li>

                  <li>Location: Kaghan Valley</li>

                  <li>Type: Glacial Lake</li>

                  <li>Freshwater</li>

                  <li>Near Naran</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Major tourist destination.</li>

                  <li>High-altitude glacial lake.</li>

                  <li>Beautiful alpine scenery.</li>

                  <li>Rich local folklore.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ATTABAD LAKE */}

          <section className="motorways-section exa-card">
            <h2>Attabad Lake</h2>

            <p>
              Attabad Lake was formed in January 2010 after a massive landslide
              blocked the Hunza River in Gilgit-Baltistan. The natural dam
              created a deep lake that has since become one of Pakistan's most
              visited tourist destinations.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Basic Information</h3>

                <ul>
                  <li>Region: Gilgit-Baltistan</li>

                  <li>Hunza Valley</li>

                  <li>Type: Landslide Lake</li>

                  <li>Formed: 2010</li>

                  <li>Freshwater</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Created by natural disaster.</li>

                  <li>Major tourist attraction.</li>

                  <li>Supports local economy.</li>

                  <li>Popular for boating.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SHEOSAR LAKE */}

          <section className="motorways-section exa-card">
            <h2>Sheosar Lake</h2>

            <p>
              Sheosar Lake is situated in Deosai National Park,
              Gilgit-Baltistan. It is among Pakistan's highest alpine lakes and
              is famous for its breathtaking scenery and unique wildlife.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Gilgit-Baltistan</li>

                  <li>Deosai National Park</li>

                  <li>Freshwater</li>

                  <li>Alpine Lake</li>

                  <li>Tourist attraction</li>
                </ul>
              </div>
            </div>
          </section>

          {/* MAHODAND LAKE */}

          <section className="motorways-section exa-card">
            <h2>Mahodand Lake</h2>

            <p>
              Mahodand Lake is located in the upper Usho Valley of Swat
              District. The lake is surrounded by forests, glaciers and
              mountains, making it one of the most beautiful natural lakes in
              Pakistan.
            </p>

            <div className="important-grid">
              <div className="important-item">✓ Located in Swat Valley.</div>

              <div className="important-item">✓ Glacial freshwater lake.</div>

              <div className="important-item">
                ✓ Popular for boating and fishing.
              </div>

              <div className="important-item">✓ Tourism hotspot.</div>
            </div>
          </section>

          {/* RUSH LAKE */}

          <section className="motorways-section exa-card">
            <h2>Rush Lake</h2>

            <p>
              Rush Lake is one of the world's highest alpine lakes. It is
              located in Nagar Valley, Gilgit-Baltistan and is popular among
              trekkers because of its spectacular mountain views.
            </p>

            <div className="important-grid">
              <div className="important-item">✓ Gilgit-Baltistan.</div>

              <div className="important-item">
                ✓ One of the world's highest alpine lakes.
              </div>

              <div className="important-item">✓ Trekking destination.</div>

              <div className="important-item">✓ Freshwater lake.</div>
            </div>
          </section>

          {/* KARAMBAR LAKE */}

          <section className="motorways-section exa-card">
            <h2>Karambar Lake</h2>

            <p>
              Karambar Lake lies in the Hindu Kush region near the boundary of
              Gilgit-Baltistan and Khyber Pakhtunkhwa. It is recognized as one
              of the world's highest biologically active lakes.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>High-altitude freshwater lake.</li>

                  <li>Unique ecosystem.</li>

                  <li>Excellent trekking destination.</li>

                  <li>Rich biodiversity.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* IMPORTANCE */}

          <section id="importance" className="motorways-section exa-card">
            <h2>Importance of Lakes</h2>

            <p>
              Pakistan's lakes play an essential role in water conservation,
              fisheries, biodiversity, groundwater recharge, tourism and climate
              regulation. Many lakes also provide habitats for migratory birds
              and endangered wildlife.
            </p>

            <div className="important-grid">
              <div className="important-item">✓ Drinking water supply.</div>

              <div className="important-item">✓ Fisheries and livelihoods.</div>

              <div className="important-item">✓ Tourism development.</div>

              <div className="important-item">✓ Wildlife conservation.</div>

              <div className="important-item">✓ Flood moderation.</div>

              <div className="important-item">✓ Wetland ecosystems.</div>
            </div>
          </section>

          {/* FAQ */}

          <section id="faq" className="motorways-section exa-card">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-list">
              <details className="faq-item" open>
                <summary>
                  Which is the largest natural freshwater lake in Pakistan?
                </summary>

                <p>
                  Manchar Lake in Sindh is the largest natural freshwater lake
                  in Pakistan.
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  Which lake supplies drinking water to Karachi?
                </summary>

                <p>
                  Keenjhar (Kalri) Lake is one of the major sources of drinking
                  water for Karachi.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which lake was formed after a landslide?</summary>

                <p>
                  Attabad Lake was formed in 2010 after a massive landslide
                  blocked the Hunza River.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which lake is famous for its fairy tale?</summary>

                <p>
                  Saif-ul-Malook Lake is famous for the legend of Prince
                  Saif-ul-Malook and the Fairy Princess.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which lakes are Ramsar Wetlands?</summary>

                <p>
                  Haleji Lake and Keenjhar (Kalri) Lake are among Pakistan's
                  internationally recognized Ramsar Wetland Sites.
                </p>
              </details>
            </div>
          </section>

          {/* PRACTICE MCQS */}

          <section className="motorways-section exa-card">
            <h2>Practice MCQs</h2>

            <MCQCard
              question="Which is the largest natural freshwater lake in Pakistan?"
              options={[
                "Saif-ul-Malook",
                "Manchar Lake",
                "Hanna Lake",
                "Attabad Lake",
              ]}
              correct={1}
              explanation="Manchar Lake is Pakistan's largest natural freshwater lake."
            />

            <MCQCard
              question="Attabad Lake is located in:"
              options={["Sindh", "Punjab", "Gilgit-Baltistan", "Balochistan"]}
              correct={2}
              explanation="Attabad Lake is located in Hunza, Gilgit-Baltistan."
            />

            <MCQCard
              question="Which lake supplies drinking water to Karachi?"
              options={[
                "Haleji Lake",
                "Keenjhar (Kalri) Lake",
                "Hanna Lake",
                "Rush Lake",
              ]}
              correct={1}
              explanation="Keenjhar Lake is an important source of Karachi's drinking water."
            />

            <MCQCard
              question="Saif-ul-Malook Lake is situated in:"
              options={["Swat", "Kaghan Valley", "Hunza", "Skardu"]}
              correct={1}
              explanation="Saif-ul-Malook Lake is located near Naran in Kaghan Valley."
            />

            <MCQCard
              question="Which lake was formed by a landslide in 2010?"
              options={["Manchar", "Rush", "Attabad", "Mahodand"]}
              correct={2}
              explanation="Attabad Lake was created after the 2010 Hunza landslide."
            />

            <MCQCard
              question="Haleji Lake is famous for:"
              options={[
                "Salt production",
                "Migratory birds",
                "Hydroelectric power",
                "Glaciers",
              ]}
              correct={1}
              explanation="Haleji Lake is internationally famous for migratory birds."
            />
          </section>

          {/* QUICK REVISION */}

          <section className="motorways-section revision-box">
            <h2>Quick Revision</h2>

            <div className="revision-grid">
              <div>
                <strong>Largest Natural Lake</strong>

                <span>Manchar</span>
              </div>

              <div>
                <strong>Karachi Water Supply</strong>

                <span>Keenjhar</span>
              </div>

              <div>
                <strong>Landslide Lake</strong>

                <span>Attabad</span>
              </div>

              <div>
                <strong>Fairy Tale Lake</strong>

                <span>Saif-ul-Malook</span>
              </div>

              <div>
                <strong>Ramsar Wetland</strong>

                <span>Haleji</span>
              </div>

              <div>
                <strong>Deosai National Park</strong>

                <span>Sheosar</span>
              </div>
            </div>
          </section>

          {/* DID YOU KNOW */}

          <section className="motorways-section exa-card">
            <h2>Did You Know?</h2>

            <div className="important-grid">
              <div className="important-item">
                💧 Pakistan has more than 100 natural and artificial lakes.
              </div>

              <div className="important-item">
                🏔️ Rush Lake is among the world's highest alpine lakes.
              </div>

              <div className="important-item">
                🌊 Attabad Lake did not exist before 2010.
              </div>

              <div className="important-item">
                🦆 Haleji Lake hosts thousands of migratory birds every winter.
              </div>

              <div className="important-item">
                🚰 Keenjhar Lake is a major freshwater source for Karachi.
              </div>

              <div className="important-item">
                🏞️ Sheosar Lake is located inside Deosai National Park.
              </div>
            </div>
          </section>

          {/* EXAM TIPS */}

          <section className="motorways-section exa-card">
            <h2>PMA / ISSB Exam Tips</h2>

            <p>
              Questions about Pakistan's lakes frequently appear in PMA Long
              Course, ISSB, ASF, FIA, Police, FPSC, CSS, PMS and PPSC
              examinations. Focus on remembering each lake's province or region,
              type, unique feature and any international recognition such as
              Ramsar Wetland status.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Must Remember</h3>

                <ul>
                  <li>Manchar → Largest natural freshwater lake.</li>

                  <li>Keenjhar → Karachi water supply.</li>

                  <li>Haleji → Ramsar Wetland.</li>

                  <li>Attabad → Formed in 2010.</li>

                  <li>Saif-ul-Malook → Kaghan Valley.</li>

                  <li>Sheosar → Deosai National Park.</li>

                  <li>Rush → High-altitude alpine lake.</li>

                  <li>Karambar → High-altitude biologically active lake.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Preparation Strategy</h3>

                <ul>
                  <li>Learn every lake with its province.</li>

                  <li>Remember natural vs artificial lakes.</li>

                  <li>Practice MCQs regularly.</li>

                  <li>Revise Ramsar Wetland sites.</li>

                  <li>Remember tourism-related lakes.</li>
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

export default LakesOfPakistan;
