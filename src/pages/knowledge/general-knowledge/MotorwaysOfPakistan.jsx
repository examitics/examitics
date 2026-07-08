import Navbar from "../../../components/layout/navbar";
import Footer from "../../../components/layout/footer";

import MCQCard from "../../../components/knowledge/MCQCard";
import BreadcrumbSchema from "../../../components/seo/BreadcrumbSchema";

import { useEffect, useState } from "react";

import {
  FiBook,
  FiMap,
  FiShield,
  FiInfo,
  FiHelpCircle,
  FiCheckCircle,
} from "react-icons/fi";

import "./MotorwaysOfPakistan.css";

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
    id: "network",
    title: "Motorway Network",
    icon: FiMap,
  },
  {
    id: "police",
    title: "Motorway Police",
    icon: FiShield,
  },
  {
    id: "important",
    title: "Important Points",
    icon: FiCheckCircle,
  },
  {
    id: "faq",
    title: "FAQs",
    icon: FiHelpCircle,
  },
];

const MotorwaysOfPakistan = () => {
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
        rootMargin: "-140px 0px -60% 0px",
        threshold: 0.15,
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
    {
      name: "Home",
      url: "https://www.examitics.com/",
    },
    {
      name: "Knowledge Hub",
      url: "https://www.examitics.com/knowledgehub",
    },
    {
      name: "Motorways of Pakistan",
      url: "https://www.examitics.com/knowledge/general-knowledge/motorways-of-pakistan",
    },
  ]}
/>
    <main className="motorways-page">
      <Navbar />
      {/* HERO */}

      <section className="motorways-hero">
        <div className="container-custom">
          <span className="hero-badge">General Knowledge</span>

          <h1>Motorways of Pakistan</h1>

          <p>
            Learn everything about Pakistan's motorway network including routes,
            lengths, history, important facts, Motorway Police and PMA / ISSB
            preparation notes.
          </p>

          {/* <div className="hero-stats">

            <div className="hero-stat">

              <strong>9+</strong>

              <span>Major Motorways</span>

            </div>

            <div className="hero-stat">

              <strong>100+</strong>

              <span>Practice MCQs</span>

            </div>

            <div className="hero-stat">

              <strong>Updated</strong>

              <span>2026</span>

            </div>

          </div> */}
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
            Pakistan possesses one of South Asia's largest controlled-access
            motorway systems. The motorway network connects major metropolitan
            cities, industrial zones and trade corridors, providing faster,
            safer and more efficient transportation.
          </p>

          <p>
            Unlike national highways, motorways are fully access-controlled
            roads. Entry and exit are possible only through designated
            interchanges, allowing uninterrupted traffic flow and enhanced road
            safety.
          </p>

          <p>
            The motorway system forms an important component of the
            China–Pakistan Economic Corridor (CPEC), improving national
            connectivity and supporting economic growth.
          </p>
        </section>

        {/* HISTORY */}

        <section id="history" className="motorways-section exa-card">
          <h2>History of Pakistan Motorways</h2>

          <p>
            The idea of developing a modern motorway network emerged during the
            1990s to improve transportation infrastructure and facilitate
            economic development.
          </p>

          <p>
            The M-2 Motorway, connecting Lahore and Islamabad, became Pakistan's
            first motorway and remains one of the country's most significant
            engineering projects.
          </p>

          <p>
            Since then, the motorway network has expanded considerably through
            projects executed by the National Highway Authority (NHA), with
            several routes developed under the China–Pakistan Economic Corridor
            (CPEC).
          </p>
        </section>

        {/* MOTORWAY NETWORK */}

        <section id="network" className="motorways-section exa-card">
          <h2>Pakistan Motorway Network</h2>

          <p>
            Pakistan's motorway network is operated and maintained by the
            National Highway Authority (NHA). Motorways are identified by the
            prefix <strong>"M"</strong> followed by a number. These roads are
            fully access-controlled, allowing entry and exit only through
            designated interchanges.
          </p>

          <div className="motorway-table-wrapper">
            <table className="motorway-table">
              <thead>
                <tr>
                  <th>Motorway</th>

                  <th>Route</th>

                  <th>Length</th>

                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>M-1</td>

                  <td>Islamabad → Peshawar</td>

                  <td>155 km</td>

                  <td>Operational</td>
                </tr>

                <tr>
                  <td>M-2</td>

                  <td>Lahore → Islamabad</td>

                  <td>367 km </td>

                  <td>Operational</td>
                </tr>

                <tr>
                  <td>M-3</td>

                  <td>Lahore → Abdul Hakeem</td>

                  <td>230 km </td>

                  <td>Operational</td>
                </tr>

                <tr>
                  <td>M-4</td>

                  <td>Pindi Bhattian → Multan</td>

                  <td>309 km </td>

                  <td>Operational</td>
                </tr>

                <tr>
                  <td>M-5</td>

                  <td>Multan → Sukkur</td>

                  <td>392 km </td>

                  <td>Operational</td>
                </tr>

                <tr>
                  <td>M-6</td>

                  <td>Sukkur → Hyderabad</td>

                  <td>306 km (planned) </td>

                  <td>Planned / Under Development</td>
                </tr>

                <tr>
                  <td>M-7</td>

                  <td>Dadu → Hub</td>

                  <td>270 km (planned) </td>

                  <td>Planned / Under Development</td>
                </tr>

                <tr>
                  <td>M-8</td>

                  <td>Ratodero → Gawader</td>

                  <td>893 km </td>

                  <td>Partially operational</td>
                </tr>

                <tr>
                  <td>M-9</td>

                  <td>Karachi → Hyderabad</td>

                  <td>136 km</td>

                  <td>Operational</td>
                </tr>

                <tr>
                  <td>M-10</td>

                  <td>Karachi Northern Bypass</td>

                  <td>57 km</td>

                  <td>Operational</td>
                </tr>

                <tr>
                  <td>M-11</td>

                  <td>Lahore → Sialkot</td>

                  <td>103 km</td>

                  <td>Operational</td>
                </tr>

                <tr>
                  <td>M-12</td>

                  <td>Sialkot → Kharian</td>

                  <td>70 km (Planned)</td>

                  <td>Under Construction</td>
                </tr>

                <tr>
                  <td>M-13</td>

                  <td>Kharian → Rawalpindi</td>

                  <td>117 km</td>

                  <td>Under construction</td>
                </tr>

                <tr>
                  <td>M-14</td>

                  <td>Hakla (Islamabad) → Dera Ismail Khan</td>

                  <td>285 km</td>
                  <td>Operational</td>
                </tr>

                <tr>
                  <td>M-15</td>

                  <td>Hassan Abdal → Thakot</td>

                  <td>180 km</td>

                  <td>Operational</td>
                </tr>

                <tr>
                  <td>M-16</td>

                  <td>Sawabi → Chakdara</td>

                  <td>160 km</td>

                  <td>Operational</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* MOTORWAY POLICE */}

        <section id="police" className="motorways-section exa-card">
          <h2>National Highways & Motorway Police</h2>

          <p>
            The National Highways & Motorway Police (NHMP) is responsible for
            policing Pakistan's motorway and national highway network.
          </p>

          <p>
            NHMP is internationally recognized for its professionalism,
            discipline, courteous behaviour and efficient traffic management.
          </p>

          <div className="motorway-cards">
            <div className="motorway-card">
              <h3>Primary Responsibilities</h3>

              <ul>
                <li>Traffic law enforcement</li>

                <li>Road safety education</li>

                <li>Emergency assistance</li>

                <li>Accident response</li>

                <li>Traffic management</li>

                <li>Vehicle checking</li>
              </ul>
            </div>

            <div className="motorway-card">
              <h3>Interesting Facts</h3>

              <ul>
                <li>Founded in 1997.</li>

                <li>Operates under the Ministry of Communications.</li>

                <li>Known for corruption-free policing.</li>

                <li>Uses modern speed monitoring systems.</li>

                <li>Provides free roadside assistance.</li>

                <li>Emergency Helpline: 130</li>
              </ul>
            </div>
          </div>
        </section>

        {/* IMPORTANT POINTS */}

        <section id="important" className="motorways-section exa-card">
          <h2>PMA / ISSB Important Points</h2>

          <div className="important-grid">
            <div className="important-item">
              ✓ Pakistan's first motorway is M-2.
            </div>

            <div className="important-item">✓ M stands for Motorway.</div>

            <div className="important-item">
              ✓ Motorways are controlled-access roads.
            </div>

            <div className="important-item">
              ✓ NHA manages the motorway network.
            </div>

            <div className="important-item">
              ✓ NHMP enforces motorway traffic laws.
            </div>

            <div className="important-item">
              ✓ Maximum speed for cars is generally 120 km/h.
            </div>

            <div className="important-item">
              ✓ Motorways form an important part of CPEC connectivity.
            </div>

            <div className="important-item">
              ✓ Interchanges are the only entry and exit points.
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section id="faq" className="motorways-section exa-card">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-list">
            <details className="faq-item" open>
              <summary>Which was Pakistan's first motorway?</summary>

              <p>
                The M-2 Motorway connecting Lahore and Islamabad was Pakistan's
                first motorway and remains one of the country's most important
                transport corridors.
              </p>
            </details>

            <details className="faq-item">
              <summary>Who manages Pakistan's motorway network?</summary>

              <p>
                The National Highway Authority (NHA) is responsible for
                planning, construction and maintenance of Pakistan's motorway
                network.
              </p>
            </details>

            <details className="faq-item">
              <summary>Who enforces traffic laws on motorways?</summary>

              <p>
                The National Highways & Motorway Police (NHMP) enforces traffic
                laws, provides road safety, emergency assistance and traffic
                management.
              </p>
            </details>

            <details className="faq-item">
              <summary>Why are motorways safer than ordinary highways?</summary>

              <p>
                Motorways are access-controlled roads with designated entry and
                exit interchanges, divided carriageways, modern signage and
                strict traffic enforcement.
              </p>
            </details>
          </div>
        </section>

        {/* PRACTICE MCQS */}

        {/* <section className="motorways-section exa-card">

          <h2>Practice MCQs</h2>

          <div className="mcq-card">

            <h3>
              1. Which was Pakistan's first motorway?
            </h3>

            <ul>

              <li>A. M-1</li>

              <li>B. M-2 ✅</li>

              <li>C. M-3</li>

              <li>D. M-9</li>

            </ul>

          </div>

          <div className="mcq-card">

            <h3>
              2. Which authority manages Pakistan's motorways?
            </h3>

            <ul>

              <li>A. WAPDA</li>

              <li>B. Pakistan Railways</li>

              <li>C. National Highway Authority (NHA) ✅</li>

              <li>D. FWO</li>

            </ul>

          </div>

          <div className="mcq-card">

            <h3>
              3. Motorways are identified by which prefix?
            </h3>

            <ul>

              <li>A. H</li>

              <li>B. N</li>

              <li>C. M ✅</li>

              <li>D. P</li>

            </ul>

          </div>

        </section> */}
        <section className="motorways-section exa-card">
          <h2>Practice MCQs</h2>

          <MCQCard
            question="Which was Pakistan's first motorway?"
            options={["M-1", "M-2", "M-3", "M-9"]}
            correct={1}
            explanation="M-2 (Lahore–Islamabad Motorway) was Pakistan's first motorway. It was inaugurated in 1997 and marked the beginning of the country's modern motorway network."
          />

          <MCQCard
            question="Which authority manages Pakistan's Motorways?"
            options={[
              "WAPDA",
              "Pakistan Railways",
              "National Highway Authority (NHA)",
              "Frontier Works Organization (FWO)",
            ]}
            correct={2}
            explanation="The National Highway Authority (NHA) is responsible for the planning, development and maintenance of Pakistan's motorway and national highway network."
          />

          <MCQCard
            question="Motorways in Pakistan are identified by which prefix?"
            options={["H", "N", "M", "P"]}
            correct={2}
            explanation="All motorways in Pakistan use the prefix 'M', such as M-1, M-2, M-3 and M-5."
          />

          <MCQCard
            question="Which motorway connects Lahore and Islamabad?"
            options={["M-1", "M-2", "M-4", "M-5"]}
            correct={1}
            explanation="M-2 connects Lahore and Islamabad and was Pakistan's first motorway."
          />

          <MCQCard
            question="Motorways differ from National Highways because they are:"
            options={[
              "Only for trucks",
              "Controlled-access roads",
              "Only inside cities",
              "Not maintained by NHA",
            ]}
            correct={1}
            explanation="Motorways are controlled-access roads with designated interchanges, whereas National Highways are generally open-access roads."
          />
        </section>

        {/* QUICK REVISION */}

        <section className="motorways-section revision-box">
          <h2>Quick Revision</h2>

          <div className="revision-grid">
            <div>
              <strong>First Motorway</strong>

              <span>M-2</span>
            </div>

            <div>
              <strong>Maintained By</strong>

              <span>NHA</span>
            </div>

            <div>
              <strong>Traffic Police</strong>

              <span>NHMP</span>
            </div>

            <div>
              <strong>Road Prefix</strong>

              <span>M</span>
            </div>
          </div>
        </section>
      </div>
      <section style={{ paddingTop: "30px" }}>
        <Footer />
      </section>
    </main>
    </>
  );
};

export default MotorwaysOfPakistan;
