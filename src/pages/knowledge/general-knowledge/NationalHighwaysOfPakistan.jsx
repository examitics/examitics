import { useEffect, useState } from "react";

import {
  FiBook,
  FiMap,
  FiTruck,
  FiInfo,
  FiHelpCircle,
  FiCheckCircle,
} from "react-icons/fi";
import MCQCard from "../../../components/knowledge/MCQCard";
import "./MotorwaysOfPakistan.css";


import Navbar from "../../../components/layout/navbar";
import Footer from "../../../components/layout/footer";

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
    title: "Highway Network",
    icon: FiMap,
  },
  {
    id: "importance",
    title: "Importance",
    icon: FiTruck,
  },
  {
    id: "important",
    title: "Important Points",
    icon: FiCheckCircle,
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

const NationalHighwaysOfPakistan = () => {
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
    <main className="motorways-page">
        <Navbar />

      {/* HERO */}

      <section className="motorways-hero">

        <div className="container-custom">

          <span className="hero-badge">
            General Knowledge
          </span>

          <h1>
            National Highways of Pakistan
          </h1>

          <p>
            Learn about Pakistan's National Highway network,
            important highways, trade corridors, strategic
            routes, National Highway Authority (NHA), and
            important facts frequently asked in PMA, ISSB,
            CSS, PMS and other competitive examinations.
          </p>

          <div className="hero-stats">

            <div className="hero-stat">

              <strong>50+</strong>

              <span>National Highways</span>

            </div>

            <div className="hero-stat">

              <strong>NHA</strong>

              <span>Managed Network</span>

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
                  className={
                    active === section.id
                      ? "active"
                      : ""
                  }
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

        <section
          id="overview"
          className="motorways-section exa-card"
        >

          <h2>
            Overview
          </h2>

          <p>

            National Highways are the primary road arteries of
            Pakistan. They connect provinces, major cities,
            industrial centres, border crossings and seaports,
            enabling the movement of passengers and goods across
            the country.

          </p>

          <p>

            Unlike motorways, National Highways are generally
            open-access roads. Vehicles can enter and exit at
            numerous locations, and highways pass through cities,
            towns and rural areas.

          </p>

          <p>

            The National Highway Authority (NHA) is responsible
            for planning, construction, rehabilitation and
            maintenance of Pakistan's National Highway network.
            Many highways also form important sections of the
            China–Pakistan Economic Corridor (CPEC) and regional
            trade routes.

          </p>

        </section>

        {/* HISTORY */}

        <section
          id="history"
          className="motorways-section exa-card"
        >

          <h2>
            History of National Highways
          </h2>

          <p>

            Pakistan inherited a limited road network at the
            time of independence in 1947. Over the following
            decades, the highway system expanded significantly
            to connect all provinces and support economic
            development.

          </p>

          <p>

            The National Highway Authority (NHA) was established
            in 1991 to develop, improve and maintain the national
            road infrastructure. Since then, hundreds of bridges,
            highways and expressways have been constructed or
            upgraded throughout Pakistan.

          </p>

          <p>

            Today, the National Highway network forms the backbone
            of Pakistan's transport system and plays a vital role
            in domestic commerce, international trade, tourism,
            defence logistics and regional connectivity.

          </p>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>
                National Highway Authority (NHA)
              </h3>

              <ul>

                <li>Established in 1991</li>

                <li>Operates under the Ministry of Communications</li>

                <li>Maintains National Highways and Motorways</li>

                <li>Develops strategic road infrastructure</li>

                <li>Supports CPEC road projects</li>

              </ul>

            </div>

            <div className="motorway-card">

              <h3>
                Key Objectives
              </h3>

              <ul>

                <li>Improve road safety</li>

                <li>Facilitate trade and commerce</li>

                <li>Enhance national connectivity</li>

                <li>Support economic growth</li>

                <li>Reduce travel time</li>

              </ul>

            </div>

          </div>

        </section>

                {/* NATIONAL HIGHWAY NETWORK */}

        <section
          id="network"
          className="motorways-section exa-card"
        >

          <h2>
            Major National Highways of Pakistan
          </h2>

          <p>

            Pakistan's National Highways are identified by the
            prefix <strong>"N"</strong>. These highways connect
            provincial capitals, ports, border crossings,
            industrial zones and tourist destinations. They are
            maintained by the National Highway Authority (NHA).

          </p>

          <div className="motorway-table-wrapper">

            <table className="motorway-table">

              <thead>

                <tr>

                  <th>Highway</th>

                  <th>Route</th>

                  <th>Importance</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>N-5</td>

                  <td>Karachi → Hyderabad → Multan → Lahore → Rawalpindi → Peshawar → Torkham</td>

                  <td>Longest and busiest highway in Pakistan (Grand Trunk Road)</td>

                </tr>

                <tr>

                  <td>N-10</td>

                  <td>Karachi → Ormara → Pasni → Gwadar</td>

                  <td>Makran Coastal Highway</td>

                </tr>

                <tr>

                  <td>N-15</td>

                  <td>Mansehra → Naran → Jalkhad</td>

                  <td>Tourism route to Kaghan Valley</td>

                </tr>

                <tr>

                  <td>N-25</td>

                  <td>Karachi → Quetta → Chaman</td>

                  <td>RCD Highway</td>

                </tr>

                <tr>

                  <td>N-35</td>

                  <td>Hasan Abdal → Gilgit → Khunjerab Pass</td>

                  <td>Karakoram Highway</td>

                </tr>

                <tr>

                  <td>N-45</td>

                  <td>Chakdara → Dir → Chitral</td>

                  <td>Connects Upper Dir & Chitral</td>

                </tr>

                <tr>

                  <td>N-50</td>

                  <td>Dera Ismail Khan → Zhob → Qila Saifullah</td>

                  <td>Western Pakistan Corridor</td>

                </tr>

                <tr>

                  <td>N-55</td>

                  <td>Karachi → Dera Ghazi Khan → Dera Ismail Khan → Peshawar</td>

                  <td>Indus Highway</td>

                </tr>

                <tr>

                  <td>N-65</td>

                  <td>Sukkur → Sibi → Quetta</td>

                  <td>Links Sindh and Balochistan</td>

                </tr>

                <tr>

                  <td>N-70</td>

                  <td>Multan → Dera Ghazi Khan → Qila Saifullah</td>

                  <td>Mountain highway through Fort Munro</td>

                </tr>

                <tr>

                  <td>N-75</td>

                  <td>Islamabad → Murree</td>

                  <td>Murree Express Route</td>

                </tr>

                <tr>

                  <td>N-85</td>

                  <td>Hoshab → Panjgur → Surab</td>

                  <td>CPEC Western Route</td>

                </tr>

                <tr>

                  <td>N-95</td>

                  <td>Chakdara → Kalam</td>

                  <td>Swat Valley Highway</td>

                </tr>

                <tr>

                  <td>N-120</td>

                  <td>Lahore Ring Road Link</td>

                  <td>Urban National Highway</td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>

        {/* IMPORTANCE */}

        <section
          id="importance"
          className="motorways-section exa-card"
        >

          <h2>
            Importance of National Highways
          </h2>

          <p>

            Pakistan's National Highways play a crucial role in
            connecting all four provinces, facilitating trade,
            supporting tourism, strengthening national defence
            logistics and improving regional connectivity.

          </p>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>
                Economic Importance
              </h3>

              <ul>

                <li>Connect industrial cities.</li>

                <li>Support domestic trade.</li>

                <li>Improve freight transportation.</li>

                <li>Reduce transportation costs.</li>

                <li>Provide access to ports.</li>

                <li>Support CPEC trade routes.</li>

              </ul>

            </div>

            <div className="motorway-card">

              <h3>
                Strategic Importance
              </h3>

              <ul>

                <li>Enable military mobility.</li>

                <li>Improve border connectivity.</li>

                <li>Strengthen national integration.</li>

                <li>Support disaster response.</li>

                <li>Improve tourism access.</li>

                <li>Enhance regional cooperation.</li>

              </ul>

            </div>

          </div>

        </section>

        {/* EXAM NOTES */}

        <section
          id="important"
          className="motorways-section exa-card"
        >

          <h2>
            PMA / ISSB Important Notes
          </h2>

          <div className="important-grid">

            <div className="important-item">
              ✓ National Highways begin with the prefix "N".
            </div>

            <div className="important-item">
              ✓ N-5 is Pakistan's longest and busiest National Highway.
            </div>

            <div className="important-item">
              ✓ N-35 is the famous Karakoram Highway.
            </div>

            <div className="important-item">
              ✓ N-10 is known as the Makran Coastal Highway.
            </div>

            <div className="important-item">
              ✓ N-25 is called the RCD Highway.
            </div>

            <div className="important-item">
              ✓ N-55 is known as the Indus Highway.
            </div>

            <div className="important-item">
              ✓ National Highways are maintained by the National Highway Authority (NHA).
            </div>

            <div className="important-item">
              ✓ National Highways are open-access roads, unlike Motorways.
            </div>

          </div>

        </section>


                {/* FAQ */}

        <section
          id="faq"
          className="motorways-section exa-card"
        >

          <h2>
            Frequently Asked Questions
          </h2>

          <div className="faq-list">

            <details className="faq-item" open>

              <summary>
                What is a National Highway?
              </summary>

              <p>

                A National Highway is a major road maintained by
                the National Highway Authority (NHA) that connects
                important cities, provinces, border crossings,
                industrial areas and ports throughout Pakistan.

              </p>

            </details>

            <details className="faq-item">

              <summary>
                Which is Pakistan's longest National Highway?
              </summary>

              <p>

                National Highway N-5 is Pakistan's longest and
                busiest National Highway. It forms the backbone
                of the country's road transportation system.

              </p>

            </details>

            <details className="faq-item">

              <summary>
                Which highway is known as the Karakoram Highway?
              </summary>

              <p>

                National Highway N-35 is internationally famous
                as the Karakoram Highway because it connects
                Pakistan with China through the Khunjerab Pass.

              </p>

            </details>

            <details className="faq-item">

              <summary>
                Which authority manages National Highways?
              </summary>

              <p>

                The National Highway Authority (NHA) is responsible
                for planning, constructing, operating and
                maintaining Pakistan's National Highway network.

              </p>

            </details>

            <details className="faq-item">

              <summary>
                What is the difference between a Motorway and a National Highway?
              </summary>

              <p>

                Motorways are controlled-access roads where entry
                and exit are possible only through designated
                interchanges. National Highways are generally
                open-access roads and pass through cities,
                towns and villages.

              </p>

            </details>

          </div>

        </section>

        {/* PRACTICE MCQS */}

        <section id="practicemcq" className="motorways-section exa-card">

          <h2>
            Practice MCQs
          </h2>

          <MCQCard
            question="Pakistan's longest National Highway is:"
            options={[
              "N-35",
              "N-5",
              "N-25",
              "N-10",
            ]}
            correct={1}
            explanation="N-5 (National Highway-5) is Pakistan's longest and busiest National Highway."
          />

          <MCQCard
            question="The Karakoram Highway is designated as:"
            options={[
              "N-10",
              "N-25",
              "N-35",
              "N-55",
            ]}
            correct={2}
            explanation="N-35 is the famous Karakoram Highway connecting Pakistan with China."
          />

          <MCQCard
            question="Which National Highway is known as the Makran Coastal Highway?"
            options={[
              "N-55",
              "N-10",
              "N-70",
              "N-15",
            ]}
            correct={1}
            explanation="N-10 is the Makran Coastal Highway connecting Karachi with Gwadar."
          />

          <MCQCard
            question="National Highways are maintained by:"
            options={[
              "Pakistan Railways",
              "WAPDA",
              "National Highway Authority",
              "Motorway Police",
            ]}
            correct={2}
            explanation="The National Highway Authority (NHA) develops and maintains Pakistan's National Highways and Motorways."
          />

          <MCQCard
            question="Which highway is also known as the Indus Highway?"
            options={[
              "N-55",
              "N-35",
              "N-5",
              "N-25",
            ]}
            correct={0}
            explanation="N-55 follows the Indus River corridor and is commonly known as the Indus Highway."
          />

        </section>

        {/* QUICK REVISION */}

        <section className="motorways-section revision-box">

          <h2>
            Quick Revision
          </h2>

          <div className="revision-grid">

            <div>

              <strong>
                Longest Highway
              </strong>

              <span>
                N-5
              </span>

            </div>

            <div>

              <strong>
                Coastal Highway
              </strong>

              <span>
                N-10
              </span>

            </div>

            <div>

              <strong>
                Karakoram Highway
              </strong>

              <span>
                N-35
              </span>

            </div>

            <div>

              <strong>
                Maintained By
              </strong>

              <span>
                NHA
              </span>

            </div>

          </div>

        </section>

        {/* DID YOU KNOW */}

        <section className="motorways-section exa-card">

          <h2>
            Did You Know?
          </h2>

          <div className="important-grid">

            <div className="important-item">
              🚛 Most of Pakistan's freight traffic travels through the National Highway network.
            </div>

            <div className="important-item">
              🌍 The Karakoram Highway is one of the world's highest paved international roads.
            </div>

            <div className="important-item">
              🌊 N-10 offers one of the most scenic coastal drives in South Asia.
            </div>

            <div className="important-item">
              🏔️ N-35 provides access to Gilgit-Baltistan and the Khunjerab Pass.
            </div>

          </div>

        </section>

        {/* EXAM TIPS */}

        <section className="motorways-section exa-card">

          <h2>
            PMA / ISSB Exam Tips
          </h2>

          <p>

            Questions about Pakistan's National Highways are
            frequently asked in PMA Long Course, ISSB,
            ASF, Police, FPSC, PPSC, CSS and other
            competitive examinations.

          </p>

          <div className="motorway-cards">

            <div className="motorway-card">

              <h3>
                Must Remember
              </h3>

              <ul>

                <li>N-5 → Longest Highway</li>

                <li>N-35 → Karakoram Highway</li>

                <li>N-10 → Makran Coastal Highway</li>

                <li>N-25 → RCD Highway</li>

                <li>N-55 → Indus Highway</li>

              </ul>

            </div>

            <div className="motorway-card">

              <h3>
                Revision Strategy
              </h3>

              <ul>

                <li>Memorize important highway numbers.</li>

                <li>Remember famous route names.</li>

                <li>Know strategic highways.</li>

                <li>Practice MCQs regularly.</li>

                <li>Revise maps of Pakistan.</li>

              </ul>

            </div>

          </div>

        </section>

      </div>
      
    </main>
    <Footer/>
    </>

  );

};

export default NationalHighwaysOfPakistan;