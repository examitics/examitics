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
import BreadcrumbSchema from "../../../components/seo/BreadcrumbSchema";

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: FiBook,
  },
  {
    id: "ranges",
    title: "Mountain Ranges",
    icon: FiLayers,
  },
  {
    id: "peaks",
    title: "Highest Peaks",
    icon: FiMap,
  },
  {
    id: "passes",
    title: "Mountain Passes",
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

const MountainsOfPakistan = () => {
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
        threshold: 0.2,

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
            Mountains of Pakistan | Highest Peaks, Mountain Ranges & Passes |
            EXAMITICS
          </title>

          <meta
            name="description"
            content="Comprehensive guide to the mountains of Pakistan including K2, Nanga Parbat, Karakoram, Himalayas, Hindu Kush, mountain passes, highest peaks, MCQs and PMA, ISSB, CSS, FPSC preparation."
          />

          <meta
            name="keywords"
            content="Mountains of Pakistan, Pakistan Mountains, K2, Nanga Parbat, Karakoram Range, Himalayas Pakistan, Hindu Kush, Pakistan Geography, PMA Notes, ISSB Notes, CSS Pakistan Geography, FPSC General Knowledge, EXAMITICS"
          />

          <meta
            property="og:title"
            content="Mountains of Pakistan | EXAMITICS"
          />

          <meta
            property="og:description"
            content="Study Pakistan's mountain ranges, famous peaks, mountain passes and geography with interactive MCQs."
          />

          <meta property="og:type" content="article" />

          <meta
            property="og:url"
            content="https://www.examitics.com/knowledge/general-knowledge/mountains-of-pakistan"
          />

          <link
            rel="canonical"
            href="https://www.examitics.com/knowledge/general-knowledge/mountains-of-pakistan"
          />
        </Helmet>
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://www.examitics.com/" },
            {
              name: "Knowledge Hub",
              url: "https://www.examitics.com/knowledgehub",
            },
            {
              name: "Mountains of Pakistan",
              url: "https://www.examitics.com/knowledge/general-knowledge/mountains-of-pakistan",
            },
          ]}
        />

        {/* HERO */}

        <section className="motorways-hero">
          <div className="container-custom">
            <span className="hero-badge">General Knowledge</span>

            <h1>Mountains of Pakistan</h1>

            <p>
              Pakistan is home to some of the world's highest and most
              spectacular mountains, including K2, the second highest peak on
              Earth. This guide covers Pakistan's mountain ranges, famous peaks,
              mountain passes, national parks and important facts for PMA, ISSB,
              CSS, PMS, FPSC, PPSC, ASF and other competitive examinations.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>100+</strong>

                <span>Major Peaks</span>
              </div>

              <div className="hero-stat">
                <strong>7</strong>

                <span>Main Ranges</span>
              </div>

              <div className="hero-stat">
                <strong>8,611 m</strong>

                <span>K2 Height</span>
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
              Pakistan possesses one of the world's most remarkable mountain
              landscapes. Three great mountain systems— the Karakoram, Himalayas
              and Hindu Kush—meet in the northern part of the country, making
              Pakistan one of the most mountainous countries in Asia.
            </p>

            <p>
              These mountains are the source of many glaciers, rivers and
              freshwater resources. They support biodiversity, tourism,
              mountaineering, hydropower generation and agriculture while
              playing a vital role in Pakistan's economy and climate.
            </p>

            <p>
              Pakistan contains five of the world's fourteen mountains higher
              than 8,000 metres, including K2, the second-highest mountain on
              Earth.
            </p>
          </section>

          {/* MOUNTAIN RANGES */}

          <section id="ranges" className="motorways-section exa-card">
            <h2>Major Mountain Ranges of Pakistan</h2>

            <p>
              Pakistan's landscape is dominated by several major mountain ranges
              stretching from the north to the west of the country. Each range
              has unique geological, ecological and strategic importance.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Mountain Range</th>

                    <th>Region</th>

                    <th>Highest Peak</th>

                    <th>Height</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Karakoram</td>

                    <td>Gilgit-Baltistan</td>

                    <td>K2</td>

                    <td>8,611 m</td>
                  </tr>

                  <tr>
                    <td>Himalayas</td>

                    <td>AJK / GB / KP</td>

                    <td>Nanga Parbat</td>

                    <td>8,126 m</td>
                  </tr>

                  <tr>
                    <td>Hindu Kush</td>

                    <td>Chitral</td>

                    <td>Tirich Mir</td>

                    <td>7,708 m</td>
                  </tr>

                  <tr>
                    <td>Sulaiman Range</td>

                    <td>Punjab / Balochistan / KP</td>

                    <td>Takht-e-Sulaiman</td>

                    <td>3,487 m</td>
                  </tr>

                  <tr>
                    <td>Kirthar Range</td>

                    <td>Sindh / Balochistan</td>

                    <td>Zardak Peak</td>

                    <td>≈2,900 m</td>
                  </tr>

                  <tr>
                    <td>Salt Range</td>

                    <td>Punjab</td>

                    <td>Sakesar</td>

                    <td>1,522 m</td>
                  </tr>

                  <tr>
                    <td>Safed Koh</td>

                    <td>KP</td>

                    <td>Sikaram</td>

                    <td>4,761 m</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* HIGHEST PEAKS */}

          <section id="peaks" className="motorways-section exa-card">
            <h2>Highest Peaks of Pakistan</h2>

            <p>
              Pakistan is internationally recognized for its concentration of
              extremely high mountains. Most of these peaks are located in the
              Karakoram Range of Gilgit-Baltistan.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Peak</th>

                    <th>Height</th>

                    <th>Mountain Range</th>

                    <th>Region</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>K2</td>

                    <td>8,611 m</td>

                    <td>Karakoram</td>

                    <td>Gilgit-Baltistan</td>
                  </tr>

                  <tr>
                    <td>Nanga Parbat</td>

                    <td>8,126 m</td>

                    <td>Himalayas</td>

                    <td>Gilgit-Baltistan</td>
                  </tr>

                  <tr>
                    <td>Gasherbrum I</td>

                    <td>8,080 m</td>

                    <td>Karakoram</td>

                    <td>Gilgit-Baltistan</td>
                  </tr>

                  <tr>
                    <td>Broad Peak</td>

                    <td>8,051 m</td>

                    <td>Karakoram</td>

                    <td>Gilgit-Baltistan</td>
                  </tr>

                  <tr>
                    <td>Gasherbrum II</td>

                    <td>8,035 m</td>

                    <td>Karakoram</td>

                    <td>Gilgit-Baltistan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* KARAKORAM RANGE */}

          <section id="karakoram" className="motorways-section exa-card">
            <h2>Karakoram Range</h2>

            <p>
              The Karakoram Range is Pakistan's highest and most famous mountain
              range. It extends across Gilgit-Baltistan into China and India and
              contains some of the world's highest peaks and largest glaciers
              outside the polar regions.
            </p>

            <p>
              The range is internationally renowned for K2, the second-highest
              mountain on Earth, and forms an important part of the Karakoram
              Highway connecting Pakistan with China through Khunjerab Pass.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Region: Gilgit-Baltistan</li>

                  <li>Highest Peak: K2 (8,611 m)</li>

                  <li>World's second-highest mountain.</li>

                  <li>Contains five 8,000 m peaks.</li>

                  <li>Home to Baltoro Glacier.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>International mountaineering destination.</li>

                  <li>Source of major glaciers.</li>

                  <li>Tourism and adventure sports.</li>

                  <li>Strategic border region.</li>

                  <li>Part of the Karakoram Highway.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* HIMALAYAS */}

          <section id="himalayas" className="motorways-section exa-card">
            <h2>Himalayas</h2>

            <p>
              The Himalayas extend into northern Pakistan through
              Gilgit-Baltistan, Azad Jammu & Kashmir and parts of Khyber
              Pakhtunkhwa. They are among the youngest and highest mountain
              systems in the world.
            </p>

            <p>
              Nanga Parbat, known as the "Killer Mountain" because of its
              difficult climbing conditions, is Pakistan's second-highest peak
              and the westernmost peak of the Himalayan mountain system.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Regions: GB, AJK & KP</li>

                  <li>Highest Peak: Nanga Parbat</li>

                  <li>Height: 8,126 metres</li>

                  <li>Western Himalayas</li>

                  <li>Major tourist attraction.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Source of glaciers.</li>

                  <li>Beautiful valleys.</li>

                  <li>Hydropower potential.</li>

                  <li>Tourism and trekking.</li>

                  <li>Supports river systems.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* HINDU KUSH */}

          <section id="hindu-kush" className="motorways-section exa-card">
            <h2>Hindu Kush Range</h2>

            <p>
              The Hindu Kush mountain range lies mainly in the Chitral District
              of Khyber Pakhtunkhwa and extends westward into Afghanistan. It
              forms one of Asia's great mountain systems.
            </p>

            <p>
              Tirich Mir, standing at 7,708 metres, is the highest peak of the
              Hindu Kush and one of Pakistan's tallest mountains.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Province: Khyber Pakhtunkhwa</li>

                  <li>District: Chitral</li>

                  <li>Highest Peak: Tirich Mir</li>

                  <li>Height: 7,708 metres</li>

                  <li>Border mountain system.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Important watershed.</li>

                  <li>Supports glaciers.</li>

                  <li>Adventure tourism.</li>

                  <li>Strategic importance.</li>

                  <li>Rich biodiversity.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SULAIMAN RANGE */}

          <section id="sulaiman" className="motorways-section exa-card">
            <h2>Sulaiman Range</h2>

            <p>
              The Sulaiman Range stretches across western Punjab, northern
              Balochistan and southern Khyber Pakhtunkhwa. It forms a natural
              boundary between the Indus Plain and the Balochistan Plateau.
            </p>

            <p>
              The highest point of the range is Takht-e-Sulaiman, which has
              historical, geographical and cultural significance.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Regions: Punjab, KP & Balochistan</li>

                  <li>Highest Peak: Takht-e-Sulaiman</li>

                  <li>Height: 3,487 metres</li>

                  <li>Western Pakistan.</li>

                  <li>Important geographical barrier.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Natural boundary.</li>

                  <li>Rich wildlife.</li>

                  <li>Mineral resources.</li>

                  <li>Supports local communities.</li>

                  <li>Important for geography exams.</li>
                </ul>
              </div>
            </div>
          </section>
          {/* KIRTHAR RANGE */}

          <section className="motorways-section exa-card">
            <h2>Kirthar Range</h2>

            <p>
              The Kirthar Range forms the natural boundary between Sindh and
              Balochistan. It extends for more than 300 kilometres and consists
              mainly of limestone mountains, deep valleys and dry riverbeds.
            </p>

            <p>
              Kirthar National Park, one of Pakistan's largest national parks,
              is located within this mountain system and protects numerous
              species of wildlife.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Region: Sindh & Balochistan</li>

                  <li>Extends over 300 km</li>

                  <li>Contains Kirthar National Park</li>

                  <li>Mostly limestone mountains</li>

                  <li>Rich wildlife habitat</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Protects endangered wildlife.</li>

                  <li>Supports eco-tourism.</li>

                  <li>Natural provincial boundary.</li>

                  <li>Important geological region.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SALT RANGE */}

          <section className="motorways-section exa-card">
            <h2>Salt Range</h2>

            <p>
              The Salt Range is located in northern Punjab and is famous for its
              vast deposits of rock salt, including the world-famous Khewra Salt
              Mine.
            </p>

            <p>
              The range also contains important fossils, historical sites and
              mineral resources that make it one of Pakistan's most significant
              geological areas.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Province: Punjab</li>

                  <li>Highest Point: Sakesar</li>

                  <li>Height: 1,522 metres</li>

                  <li>Contains Khewra Salt Mine</li>

                  <li>Rich in minerals</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Largest salt deposits.</li>

                  <li>Industrial importance.</li>

                  <li>Historical significance.</li>

                  <li>Popular tourist destination.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SAFED KOH */}

          <section className="motorways-section exa-card">
            <h2>Safed Koh Range</h2>

            <p>
              The Safed Koh Range lies along Pakistan's border with Afghanistan
              in Khyber Pakhtunkhwa. The range is well known because the
              historic Khyber Pass cuts through it.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Province: Khyber Pakhtunkhwa</li>

                  <li>Highest Peak: Sikaram</li>

                  <li>Height: 4,761 metres</li>

                  <li>Near Khyber Pass</li>

                  <li>Border mountain range</li>
                </ul>
              </div>
            </div>
          </section>

          {/* TOBA KAKAR */}

          <section className="motorways-section exa-card">
            <h2>Toba Kakar Range</h2>

            <p>
              The Toba Kakar Range extends across northern Balochistan close to
              the Afghanistan border. The range contains several important
              mountain passes, including Khojak Pass.
            </p>

            <div className="important-grid">
              <div className="important-item">✓ Located in Balochistan.</div>

              <div className="important-item">✓ Close to Afghanistan.</div>

              <div className="important-item">✓ Includes Khojak Pass.</div>

              <div className="important-item">✓ Strategic importance.</div>
            </div>
          </section>

          {/* MOUNTAIN PASSES */}

          <section id="passes" className="motorways-section exa-card">
            <h2>Important Mountain Passes of Pakistan</h2>

            <p>
              Mountain passes connect valleys, countries and trade routes. Many
              have played an important role in Pakistan's history, defence and
              international trade.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Pass</th>

                    <th>Mountain Range</th>

                    <th>Connects</th>

                    <th>Importance</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Khunjerab Pass</td>

                    <td>Karakoram</td>

                    <td>Pakistan – China</td>

                    <td>Karakoram Highway</td>
                  </tr>

                  <tr>
                    <td>Khyber Pass</td>

                    <td>Safed Koh</td>

                    <td>Pakistan – Afghanistan</td>

                    <td>Historic trade route</td>
                  </tr>

                  <tr>
                    <td>Bolan Pass</td>

                    <td>Toba Kakar</td>

                    <td>Punjab – Balochistan</td>

                    <td>Historic transport route</td>
                  </tr>

                  <tr>
                    <td>Khojak Pass</td>

                    <td>Toba Kakar</td>

                    <td>Quetta – Chaman</td>

                    <td>Border connection</td>
                  </tr>

                  <tr>
                    <td>Lowari Pass</td>

                    <td>Hindu Kush</td>

                    <td>Dir – Chitral</td>

                    <td>Regional access</td>
                  </tr>

                  <tr>
                    <td>Babusar Pass</td>

                    <td>Himalayas</td>

                    <td>Kaghan – Chilas</td>

                    <td>Tourism</td>
                  </tr>

                  <tr>
                    <td>Shandur Pass</td>

                    <td>Hindu Kush</td>

                    <td>Chitral – Gilgit</td>

                    <td>Shandur Polo Festival</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* IMPORTANCE */}

          <section id="importance" className="motorways-section exa-card">
            <h2>Importance of Mountains in Pakistan</h2>

            <p>
              Pakistan's mountains are essential to the country's environment,
              economy and national security. They store freshwater in glaciers,
              feed major rivers, support biodiversity, promote tourism and
              provide opportunities for hydropower generation.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Environmental Importance</h3>

                <ul>
                  <li>Source of glaciers.</li>

                  <li>Origin of major rivers.</li>

                  <li>Climate regulation.</li>

                  <li>Wildlife habitats.</li>

                  <li>Forest ecosystems.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Economic Importance</h3>

                <ul>
                  <li>Tourism.</li>

                  <li>Hydroelectric power.</li>

                  <li>Mineral resources.</li>

                  <li>Agriculture support.</li>

                  <li>Employment opportunities.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Strategic Importance</h3>

                <ul>
                  <li>Natural defence barriers.</li>

                  <li>International borders.</li>

                  <li>Trade routes.</li>

                  <li>Military significance.</li>

                  <li>Cross-border connectivity.</li>
                </ul>
              </div>
            </div>
          </section>
          {/* FAQ */}

          <section id="faq" className="motorways-section exa-card">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-list">
              <details className="faq-item" open>
                <summary>Which is the highest mountain in Pakistan?</summary>

                <p>
                  K2 is the highest mountain in Pakistan and the second-highest
                  mountain in the world with an elevation of 8,611 metres.
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  Which mountain is known as the Killer Mountain?
                </summary>

                <p>
                  Nanga Parbat is known as the "Killer Mountain" because of its
                  extremely difficult climbing conditions.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which mountain range contains K2?</summary>

                <p>K2 is located in the Karakoram Range of Gilgit-Baltistan.</p>
              </details>

              <details className="faq-item">
                <summary>Which is the highest peak of the Hindu Kush?</summary>

                <p>
                  Tirich Mir is the highest peak of the Hindu Kush mountain
                  range.
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  Which mountain pass connects Pakistan with China?
                </summary>

                <p>
                  Khunjerab Pass connects Pakistan with China through the
                  Karakoram Highway.
                </p>
              </details>
            </div>
          </section>

          {/* PRACTICE MCQS */}

          <section className="motorways-section exa-card">
            <h2>Practice MCQs</h2>

            <MCQCard
              question="Which is the highest mountain in Pakistan?"
              options={["Nanga Parbat", "K2", "Tirich Mir", "Broad Peak"]}
              correct={1}
              explanation="K2 is Pakistan's highest mountain at 8,611 metres."
            />

            <MCQCard
              question="K2 belongs to which mountain range?"
              options={["Himalayas", "Hindu Kush", "Karakoram", "Salt Range"]}
              correct={2}
              explanation="K2 is located in the Karakoram Range."
            />

            <MCQCard
              question="Nanga Parbat is also known as:"
              options={[
                "Snow Mountain",
                "Killer Mountain",
                "White Peak",
                "Black Mountain",
              ]}
              correct={1}
              explanation='Nanga Parbat is famously known as the "Killer Mountain".'
            />

            <MCQCard
              question="Which is the highest peak of the Hindu Kush?"
              options={[
                "Rakaposhi",
                "Broad Peak",
                "Tirich Mir",
                "Gasherbrum I",
              ]}
              correct={2}
              explanation="Tirich Mir is the highest peak of the Hindu Kush."
            />

            <MCQCard
              question="The Salt Range is located in:"
              options={["Sindh", "Punjab", "Balochistan", "Gilgit-Baltistan"]}
              correct={1}
              explanation="The Salt Range is located in Punjab."
            />

            <MCQCard
              question="Khunjerab Pass connects Pakistan with:"
              options={["India", "Iran", "China", "Afghanistan"]}
              correct={2}
              explanation="Khunjerab Pass is the border crossing between Pakistan and China."
            />

            <MCQCard
              question="Which mountain range contains Tirich Mir?"
              options={["Karakoram", "Himalayas", "Hindu Kush", "Sulaiman"]}
              correct={2}
              explanation="Tirich Mir is located in the Hindu Kush."
            />

            <MCQCard
              question="The famous Khewra Salt Mine lies in:"
              options={[
                "Salt Range",
                "Kirthar Range",
                "Safed Koh",
                "Sulaiman Range",
              ]}
              correct={0}
              explanation="Khewra Salt Mine is located in the Salt Range."
            />

            <MCQCard
              question="Pakistan has how many peaks above 8,000 metres?"
              options={["3", "4", "5", "6"]}
              correct={2}
              explanation="Pakistan is home to five mountains above 8,000 metres."
            />

            <MCQCard
              question="Which mountain is called the second-highest in the world?"
              options={["Everest", "K2", "Nanga Parbat", "Gasherbrum I"]}
              correct={1}
              explanation="K2 is the second-highest mountain on Earth."
            />
          </section>

          {/* QUICK REVISION */}

          <section className="motorways-section revision-box">
            <h2>Quick Revision</h2>

            <div className="revision-grid">
              <div>
                <strong>Highest Peak</strong>
                <span>K2</span>
              </div>

              <div>
                <strong>Height of K2</strong>
                <span>8,611 m</span>
              </div>

              <div>
                <strong>Killer Mountain</strong>
                <span>Nanga Parbat</span>
              </div>

              <div>
                <strong>Highest Hindu Kush Peak</strong>
                <span>Tirich Mir</span>
              </div>

              <div>
                <strong>Punjab Range</strong>
                <span>Salt Range</span>
              </div>

              <div>
                <strong>Pakistan-China Pass</strong>
                <span>Khunjerab</span>
              </div>

              <div>
                <strong>Historic Pass</strong>
                <span>Khyber Pass</span>
              </div>

              <div>
                <strong>Largest Mountain System</strong>
                <span>Karakoram</span>
              </div>
            </div>
          </section>

          {/* DID YOU KNOW */}

          <section className="motorways-section exa-card">
            <h2>Did You Know?</h2>

            <div className="important-grid">
              <div className="important-item">
                🏔️ Pakistan has five of the world's fourteen mountains above
                8,000 metres.
              </div>

              <div className="important-item">
                🌍 K2 is the second-highest mountain on Earth.
              </div>

              <div className="important-item">
                ❄️ Baltoro Glacier is one of the world's largest glaciers
                outside the polar regions.
              </div>

              <div className="important-item">
                🚗 Khunjerab Pass is the highest paved international border
                crossing in the world.
              </div>

              <div className="important-item">
                🧂 The world's second-largest salt mine is located in Pakistan's
                Salt Range.
              </div>

              <div className="important-item">
                🏞️ Three great mountain systems meet in northern Pakistan.
              </div>
            </div>
          </section>

          {/* PMA / ISSB */}

          <section className="motorways-section exa-card">
            <h2>PMA / ISSB Exam Tips</h2>

            <p>
              Questions about Pakistan's mountains are frequently asked in PMA
              Long Course, ISSB, CSS, PMS, FPSC, PPSC, ASF, FIA and Police
              examinations. Focus on the highest peaks, mountain ranges, famous
              passes and their locations.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Must Remember</h3>

                <ul>
                  <li>K2 → 8,611 m → Karakoram</li>

                  <li>Nanga Parbat → Himalayas</li>

                  <li>Tirich Mir → Hindu Kush</li>

                  <li>Khunjerab Pass → China Border</li>

                  <li>Khyber Pass → Afghanistan Border</li>

                  <li>Salt Range → Khewra Salt Mine</li>

                  <li>Sulaiman Range → Takht-e-Sulaiman</li>

                  <li>Killer Mountain → Nanga Parbat</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Preparation Strategy</h3>

                <ul>
                  <li>Memorize all major ranges.</li>

                  <li>Remember the top peaks with heights.</li>

                  <li>Practice mountain pass MCQs.</li>

                  <li>Revise important national parks.</li>

                  <li>Focus on frequently repeated PMA questions.</li>
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

export default MountainsOfPakistan;
