import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import {
  FiGlobe,
  FiMap,
  FiBook,
  FiHelpCircle,
  FiCheckCircle,
  FiFlag,
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
    id: "asia",
    title: "Asia",
    icon: FiGlobe,
  },
  {
    id: "europe",
    title: "Europe",
    icon: FiMap,
  },
  {
    id: "africa",
    title: "Africa",
    icon: FiFlag,
  },
  {
    id: "americas",
    title: "Americas",
    icon: FiGlobe,
  },
  {
    id: "oceania",
    title: "Oceania",
    icon: FiMap,
  },
  {
    id: "faq",
    title: "FAQs",
    icon: FiHelpCircle,
  },
];

const CountriesAndCapitals = () => {
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
      const el = document.getElementById(section.id);

      if (el) observer.observe(el);
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
            Countries and Capitals of the World | Complete Guide | EXAMITICS
          </title>

          <meta
            name="description"
            content="Complete list of countries and capitals of the world organized by continent. Updated notes, important facts, FAQs and MCQs for PMA, ISSB, CSS, PMS, FPSC, PPSC, ASF and other competitive exams."
          />

          <meta
            name="keywords"
            content="Countries and Capitals, World Capitals, Asian Countries and Capitals, European Capitals, African Countries, PMA Notes, ISSB GK, CSS Geography, FPSC General Knowledge, EXAMITICS"
          />

          <meta
            property="og:title"
            content="Countries and Capitals of the World | EXAMITICS"
          />

          <meta
            property="og:description"
            content="Learn all countries and their capitals with continent-wise tables, MCQs and quick revision."
          />

          <meta property="og:type" content="article" />

          <link
            rel="canonical"
            href="https://www.examitics.com/knowledge/general-knowledge/countries-and-capitals"
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
              name: "Countries & Capitals",
              url: "https://www.examitics.com/knowledge/general-knowledge/countries-and-capitals",
            },
          ]}
        />
        {/* HERO */}

        <section className="motorways-hero">
          <div className="container-custom">
            <span className="hero-badge">General Knowledge</span>

            <h1>Countries and Capitals of the World</h1>

            <p>
              Learn all sovereign countries of the world and their official
              capitals through continent-wise tables, important facts,
              frequently asked questions and interactive MCQs. This guide is
              specially prepared for PMA Long Course, ISSB, CSS, PMS, FPSC,
              PPSC, ASF, FIA, NTS and other competitive examinations.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>195</strong>

                <span>Countries</span>
              </div>

              <div className="hero-stat">
                <strong>6</strong>

                <span>Continents Covered</span>
              </div>

              <div className="hero-stat">
                <strong>20+</strong>

                <span>Practice MCQs</span>
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
              Every sovereign country has an officially designated capital city
              that serves as the administrative, political and often economic
              center of the nation. Capitals usually host government
              institutions, parliament, supreme courts, embassies and official
              residences of national leaders.
            </p>

            <p>
              Questions about countries and their capitals are among the most
              common in General Knowledge examinations. Candidates should
              memorize capitals continent-wise, paying special attention to
              countries whose capitals are frequently confused or have changed
              in recent years.
            </p>
          </section>

          {/* CONTINENTS OVERVIEW */}

          <section className="motorways-section exa-card">
            <h2>Continents Covered</h2>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Asia</h3>

                <p>
                  Pakistan, China, India, Japan, Saudi Arabia, UAE and more.
                </p>
              </div>

              <div className="motorway-card">
                <h3>Europe</h3>

                <p>
                  United Kingdom, France, Germany, Italy, Spain, Norway and
                  more.
                </p>
              </div>

              <div className="motorway-card">
                <h3>Africa</h3>

                <p>Egypt, Nigeria, Kenya, Algeria, Morocco and more.</p>
              </div>

              <div className="motorway-card">
                <h3>North America</h3>

                <p>United States, Canada, Mexico and Caribbean nations.</p>
              </div>

              <div className="motorway-card">
                <h3>South America</h3>

                <p>Brazil, Argentina, Chile, Peru and more.</p>
              </div>

              <div className="motorway-card">
                <h3>Oceania</h3>

                <p>Australia, New Zealand, Fiji, Samoa and Pacific nations.</p>
              </div>
            </div>
          </section>
          {/* ====================== ASIA ====================== */}

          <section id="asia" className="motorways-section exa-card">
            <h2>Asian Countries and Their Capitals</h2>

            <p>
              Asia is the world's largest and most populous continent. It
              contains more than 45 sovereign countries ranging from the Middle
              East and Central Asia to South Asia, Southeast Asia and East Asia.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Capital</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Afghanistan</td>
                    <td>Kabul</td>
                  </tr>

                  <tr>
                    <td>Armenia</td>
                    <td>Yerevan</td>
                  </tr>

                  <tr>
                    <td>Azerbaijan</td>
                    <td>Baku</td>
                  </tr>

                  <tr>
                    <td>Bahrain</td>
                    <td>Manama</td>
                  </tr>

                  <tr>
                    <td>Bangladesh</td>
                    <td>Dhaka</td>
                  </tr>

                  <tr>
                    <td>Bhutan</td>
                    <td>Thimphu</td>
                  </tr>

                  <tr>
                    <td>Brunei</td>
                    <td>Bandar Seri Begawan</td>
                  </tr>

                  <tr>
                    <td>Cambodia</td>
                    <td>Phnom Penh</td>
                  </tr>

                  <tr>
                    <td>China</td>
                    <td>Beijing</td>
                  </tr>

                  <tr>
                    <td>Cyprus</td>
                    <td>Nicosia</td>
                  </tr>

                  <tr>
                    <td>Georgia</td>
                    <td>Tbilisi</td>
                  </tr>

                  <tr>
                    <td>India</td>
                    <td>New Delhi</td>
                  </tr>

                  <tr>
                    <td>Indonesia</td>
                    <td>Jakarta</td>
                  </tr>

                  <tr>
                    <td>Iran</td>
                    <td>Tehran</td>
                  </tr>

                  <tr>
                    <td>Iraq</td>
                    <td>Baghdad</td>
                  </tr>

                  <tr>
                    <td>Israel</td>
                    <td>Jerusalem</td>
                  </tr>

                  <tr>
                    <td>Japan</td>
                    <td>Tokyo</td>
                  </tr>

                  <tr>
                    <td>Jordan</td>
                    <td>Amman</td>
                  </tr>

                  <tr>
                    <td>Kazakhstan</td>
                    <td>Astana</td>
                  </tr>

                  <tr>
                    <td>Kuwait</td>
                    <td>Kuwait City</td>
                  </tr>

                  <tr>
                    <td>Kyrgyzstan</td>
                    <td>Bishkek</td>
                  </tr>

                  <tr>
                    <td>Laos</td>
                    <td>Vientiane</td>
                  </tr>

                  <tr>
                    <td>Lebanon</td>
                    <td>Beirut</td>
                  </tr>

                  <tr>
                    <td>Malaysia</td>
                    <td>Kuala Lumpur</td>
                  </tr>

                  <tr>
                    <td>Maldives</td>
                    <td>Malé</td>
                  </tr>

                  <tr>
                    <td>Mongolia</td>
                    <td>Ulaanbaatar</td>
                  </tr>

                  <tr>
                    <td>Myanmar</td>
                    <td>Naypyidaw</td>
                  </tr>

                  <tr>
                    <td>Nepal</td>
                    <td>Kathmandu</td>
                  </tr>

                  <tr>
                    <td>North Korea</td>
                    <td>Pyongyang</td>
                  </tr>

                  <tr>
                    <td>Oman</td>
                    <td>Muscat</td>
                  </tr>

                  <tr>
                    <td>Pakistan</td>
                    <td>Islamabad</td>
                  </tr>

                  <tr>
                    <td>Palestine</td>
                    <td>Jerusalem (claimed) / Ramallah (administrative)</td>
                  </tr>

                  <tr>
                    <td>Philippines</td>
                    <td>Manila</td>
                  </tr>

                  <tr>
                    <td>Qatar</td>
                    <td>Doha</td>
                  </tr>

                  <tr>
                    <td>Saudi Arabia</td>
                    <td>Riyadh</td>
                  </tr>

                  <tr>
                    <td>Singapore</td>
                    <td>Singapore</td>
                  </tr>

                  <tr>
                    <td>South Korea</td>
                    <td>Seoul</td>
                  </tr>

                  <tr>
                    <td>Sri Lanka</td>
                    <td>Sri Jayawardenepura Kotte</td>
                  </tr>

                  <tr>
                    <td>Syria</td>
                    <td>Damascus</td>
                  </tr>

                  <tr>
                    <td>Tajikistan</td>
                    <td>Dushanbe</td>
                  </tr>

                  <tr>
                    <td>Thailand</td>
                    <td>Bangkok</td>
                  </tr>

                  <tr>
                    <td>Timor-Leste</td>
                    <td>Dili</td>
                  </tr>

                  <tr>
                    <td>Turkey</td>
                    <td>Ankara</td>
                  </tr>

                  <tr>
                    <td>Turkmenistan</td>
                    <td>Ashgabat</td>
                  </tr>

                  <tr>
                    <td>United Arab Emirates</td>
                    <td>Abu Dhabi</td>
                  </tr>

                  <tr>
                    <td>Uzbekistan</td>
                    <td>Tashkent</td>
                  </tr>

                  <tr>
                    <td>Vietnam</td>
                    <td>Hanoi</td>
                  </tr>

                  <tr>
                    <td>Yemen</td>
                    <td>Sana'a</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ASIA QUICK FACTS */}

          <section className="motorways-section exa-card">
            <h2>Important Facts About Asia</h2>

            <div className="important-grid">
              <div className="important-item">
                🌏 Largest continent in the world.
              </div>

              <div className="important-item">👥 Most populous continent.</div>

              <div className="important-item">
                🏔️ Mount Everest is located in Asia.
              </div>

              <div className="important-item">
                🌍 Pakistan's capital is Islamabad.
              </div>

              <div className="important-item">
                🇨🇳 China's capital is Beijing.
              </div>

              <div className="important-item">
                🇮🇳 India's capital is New Delhi.
              </div>

              <div className="important-item">🇯🇵 Japan's capital is Tokyo.</div>

              <div className="important-item">
                🇸🇦 Saudi Arabia's capital is Riyadh.
              </div>
            </div>
          </section>
          {/* ====================== EUROPE ====================== */}

          <section id="europe" className="motorways-section exa-card">
            <h2>European Countries and Their Capitals</h2>

            <p>
              Europe is known for its rich history, diverse cultures, advanced
              economies and political institutions. It consists of approximately
              44 sovereign countries, many of which are frequently asked in
              competitive examinations.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Capital</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Albania</td>
                    <td>Tirana</td>
                  </tr>

                  <tr>
                    <td>Andorra</td>
                    <td>Andorra la Vella</td>
                  </tr>

                  <tr>
                    <td>Austria</td>
                    <td>Vienna</td>
                  </tr>

                  <tr>
                    <td>Belarus</td>
                    <td>Minsk</td>
                  </tr>

                  <tr>
                    <td>Belgium</td>
                    <td>Brussels</td>
                  </tr>

                  <tr>
                    <td>Bosnia and Herzegovina</td>
                    <td>Sarajevo</td>
                  </tr>

                  <tr>
                    <td>Bulgaria</td>
                    <td>Sofia</td>
                  </tr>

                  <tr>
                    <td>Croatia</td>
                    <td>Zagreb</td>
                  </tr>

                  <tr>
                    <td>Czech Republic</td>
                    <td>Prague</td>
                  </tr>

                  <tr>
                    <td>Denmark</td>
                    <td>Copenhagen</td>
                  </tr>

                  <tr>
                    <td>Estonia</td>
                    <td>Tallinn</td>
                  </tr>

                  <tr>
                    <td>Finland</td>
                    <td>Helsinki</td>
                  </tr>

                  <tr>
                    <td>France</td>
                    <td>Paris</td>
                  </tr>

                  <tr>
                    <td>Germany</td>
                    <td>Berlin</td>
                  </tr>

                  <tr>
                    <td>Greece</td>
                    <td>Athens</td>
                  </tr>

                  <tr>
                    <td>Hungary</td>
                    <td>Budapest</td>
                  </tr>

                  <tr>
                    <td>Iceland</td>
                    <td>Reykjavík</td>
                  </tr>

                  <tr>
                    <td>Ireland</td>
                    <td>Dublin</td>
                  </tr>

                  <tr>
                    <td>Italy</td>
                    <td>Rome</td>
                  </tr>

                  <tr>
                    <td>Kosovo</td>
                    <td>Pristina</td>
                  </tr>

                  <tr>
                    <td>Latvia</td>
                    <td>Riga</td>
                  </tr>

                  <tr>
                    <td>Liechtenstein</td>
                    <td>Vaduz</td>
                  </tr>

                  <tr>
                    <td>Lithuania</td>
                    <td>Vilnius</td>
                  </tr>

                  <tr>
                    <td>Luxembourg</td>
                    <td>Luxembourg City</td>
                  </tr>

                  <tr>
                    <td>Malta</td>
                    <td>Valletta</td>
                  </tr>

                  <tr>
                    <td>Moldova</td>
                    <td>Chișinău</td>
                  </tr>

                  <tr>
                    <td>Monaco</td>
                    <td>Monaco</td>
                  </tr>

                  <tr>
                    <td>Montenegro</td>
                    <td>Podgorica</td>
                  </tr>

                  <tr>
                    <td>Netherlands</td>
                    <td>Amsterdam</td>
                  </tr>

                  <tr>
                    <td>North Macedonia</td>
                    <td>Skopje</td>
                  </tr>

                  <tr>
                    <td>Norway</td>
                    <td>Oslo</td>
                  </tr>

                  <tr>
                    <td>Poland</td>
                    <td>Warsaw</td>
                  </tr>

                  <tr>
                    <td>Portugal</td>
                    <td>Lisbon</td>
                  </tr>

                  <tr>
                    <td>Romania</td>
                    <td>Bucharest</td>
                  </tr>

                  <tr>
                    <td>Russia</td>
                    <td>Moscow</td>
                  </tr>

                  <tr>
                    <td>San Marino</td>
                    <td>San Marino</td>
                  </tr>

                  <tr>
                    <td>Serbia</td>
                    <td>Belgrade</td>
                  </tr>

                  <tr>
                    <td>Slovakia</td>
                    <td>Bratislava</td>
                  </tr>

                  <tr>
                    <td>Slovenia</td>
                    <td>Ljubljana</td>
                  </tr>

                  <tr>
                    <td>Spain</td>
                    <td>Madrid</td>
                  </tr>

                  <tr>
                    <td>Sweden</td>
                    <td>Stockholm</td>
                  </tr>

                  <tr>
                    <td>Switzerland</td>
                    <td>Bern</td>
                  </tr>

                  <tr>
                    <td>Ukraine</td>
                    <td>Kyiv</td>
                  </tr>

                  <tr>
                    <td>United Kingdom</td>
                    <td>London</td>
                  </tr>

                  <tr>
                    <td>Vatican City</td>
                    <td>Vatican City</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* EUROPE FACTS */}

          <section className="motorways-section exa-card">
            <h2>Important Facts About Europe</h2>

            <div className="important-grid">
              <div className="important-item">
                🇪🇺 Europe is the second-smallest continent by area.
              </div>

              <div className="important-item">
                🏛️ Brussels is the headquarters of many European Union
                institutions.
              </div>

              <div className="important-item">
                🇫🇷 France's capital is Paris.
              </div>

              <div className="important-item">
                🇩🇪 Germany's capital is Berlin.
              </div>

              <div className="important-item">
                🇬🇧 United Kingdom's capital is London.
              </div>

              <div className="important-item">🇮🇹 Italy's capital is Rome.</div>

              <div className="important-item">
                🇪🇸 Spain's capital is Madrid.
              </div>

              <div className="important-item">
                🇷🇺 Russia's capital is Moscow.
              </div>
            </div>
          </section>
          {/* ====================== AFRICA ====================== */}

          <section id="africa" className="motorways-section exa-card">
            <h2>African Countries and Their Capitals</h2>

            <p>
              Africa is the world's second-largest continent by both area and
              population. It consists of 54 internationally recognized sovereign
              countries and is home to diverse cultures, ecosystems and natural
              resources.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Capital</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Algeria</td>
                    <td>Algiers</td>
                  </tr>

                  <tr>
                    <td>Angola</td>
                    <td>Luanda</td>
                  </tr>

                  <tr>
                    <td>Benin</td>
                    <td>Porto-Novo</td>
                  </tr>

                  <tr>
                    <td>Botswana</td>
                    <td>Gaborone</td>
                  </tr>

                  <tr>
                    <td>Burkina Faso</td>
                    <td>Ouagadougou</td>
                  </tr>

                  <tr>
                    <td>Burundi</td>
                    <td>Gitega</td>
                  </tr>

                  <tr>
                    <td>Cabo Verde</td>
                    <td>Praia</td>
                  </tr>

                  <tr>
                    <td>Cameroon</td>
                    <td>Yaoundé</td>
                  </tr>

                  <tr>
                    <td>Central African Republic</td>
                    <td>Bangui</td>
                  </tr>

                  <tr>
                    <td>Chad</td>
                    <td>N'Djamena</td>
                  </tr>

                  <tr>
                    <td>Comoros</td>
                    <td>Moroni</td>
                  </tr>

                  <tr>
                    <td>Democratic Republic of the Congo</td>
                    <td>Kinshasa</td>
                  </tr>

                  <tr>
                    <td>Republic of the Congo</td>
                    <td>Brazzaville</td>
                  </tr>

                  <tr>
                    <td>Djibouti</td>
                    <td>Djibouti</td>
                  </tr>

                  <tr>
                    <td>Egypt</td>
                    <td>Cairo</td>
                  </tr>

                  <tr>
                    <td>Equatorial Guinea</td>
                    <td>Malabo</td>
                  </tr>

                  <tr>
                    <td>Eritrea</td>
                    <td>Asmara</td>
                  </tr>

                  <tr>
                    <td>Eswatini</td>
                    <td>Mbabane</td>
                  </tr>

                  <tr>
                    <td>Ethiopia</td>
                    <td>Addis Ababa</td>
                  </tr>

                  <tr>
                    <td>Gabon</td>
                    <td>Libreville</td>
                  </tr>

                  <tr>
                    <td>Gambia</td>
                    <td>Banjul</td>
                  </tr>

                  <tr>
                    <td>Ghana</td>
                    <td>Accra</td>
                  </tr>

                  <tr>
                    <td>Guinea</td>
                    <td>Conakry</td>
                  </tr>

                  <tr>
                    <td>Guinea-Bissau</td>
                    <td>Bissau</td>
                  </tr>

                  <tr>
                    <td>Ivory Coast (Côte d'Ivoire)</td>
                    <td>Yamoussoukro</td>
                  </tr>

                  <tr>
                    <td>Kenya</td>
                    <td>Nairobi</td>
                  </tr>

                  <tr>
                    <td>Lesotho</td>
                    <td>Maseru</td>
                  </tr>

                  <tr>
                    <td>Liberia</td>
                    <td>Monrovia</td>
                  </tr>

                  <tr>
                    <td>Libya</td>
                    <td>Tripoli</td>
                  </tr>

                  <tr>
                    <td>Madagascar</td>
                    <td>Antananarivo</td>
                  </tr>

                  <tr>
                    <td>Malawi</td>
                    <td>Lilongwe</td>
                  </tr>

                  <tr>
                    <td>Mali</td>
                    <td>Bamako</td>
                  </tr>

                  <tr>
                    <td>Mauritania</td>
                    <td>Nouakchott</td>
                  </tr>

                  <tr>
                    <td>Mauritius</td>
                    <td>Port Louis</td>
                  </tr>

                  <tr>
                    <td>Morocco</td>
                    <td>Rabat</td>
                  </tr>

                  <tr>
                    <td>Mozambique</td>
                    <td>Maputo</td>
                  </tr>

                  <tr>
                    <td>Namibia</td>
                    <td>Windhoek</td>
                  </tr>

                  <tr>
                    <td>Niger</td>
                    <td>Niamey</td>
                  </tr>

                  <tr>
                    <td>Nigeria</td>
                    <td>Abuja</td>
                  </tr>

                  <tr>
                    <td>Rwanda</td>
                    <td>Kigali</td>
                  </tr>

                  <tr>
                    <td>São Tomé and Príncipe</td>
                    <td>São Tomé</td>
                  </tr>

                  <tr>
                    <td>Senegal</td>
                    <td>Dakar</td>
                  </tr>

                  <tr>
                    <td>Seychelles</td>
                    <td>Victoria</td>
                  </tr>

                  <tr>
                    <td>Sierra Leone</td>
                    <td>Freetown</td>
                  </tr>

                  <tr>
                    <td>Somalia</td>
                    <td>Mogadishu</td>
                  </tr>

                  <tr>
                    <td>South Africa</td>
                    <td>Pretoria* (Administrative)</td>
                  </tr>

                  <tr>
                    <td>South Sudan</td>
                    <td>Juba</td>
                  </tr>

                  <tr>
                    <td>Sudan</td>
                    <td>Khartoum</td>
                  </tr>

                  <tr>
                    <td>Tanzania</td>
                    <td>Dodoma</td>
                  </tr>

                  <tr>
                    <td>Togo</td>
                    <td>Lomé</td>
                  </tr>

                  <tr>
                    <td>Tunisia</td>
                    <td>Tunis</td>
                  </tr>

                  <tr>
                    <td>Uganda</td>
                    <td>Kampala</td>
                  </tr>

                  <tr>
                    <td>Zambia</td>
                    <td>Lusaka</td>
                  </tr>

                  <tr>
                    <td>Zimbabwe</td>
                    <td>Harare</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* AFRICA FACTS */}

          <section className="motorways-section exa-card">
            <h2>Important Facts About Africa</h2>

            <div className="important-grid">
              <div className="important-item">
                🌍 Africa has 54 sovereign countries.
              </div>

              <div className="important-item">
                🏜️ The Sahara is the world's largest hot desert.
              </div>

              <div className="important-item">
                🌊 The River Nile is one of the world's longest rivers.
              </div>

              <div className="important-item">🇪🇬 Egypt's capital is Cairo.</div>

              <div className="important-item">
                🇳🇬 Nigeria's capital is Abuja.
              </div>

              <div className="important-item">
                🇰🇪 Kenya's capital is Nairobi.
              </div>

              <div className="important-item">
                🇲🇦 Morocco's capital is Rabat.
              </div>

              <div className="important-item">
                🇿🇦 South Africa has three capital cities.
              </div>
            </div>

            <div className="note-box">
              <h3>Exam Note</h3>

              <p>
                South Africa is unique because it has three capitals:
                <strong> Pretoria</strong> (Administrative),
                <strong> Cape Town</strong> (Legislative), and{" "}
                <strong> Bloemfontein</strong> (Judicial). In most competitive
                examinations, <strong>Pretoria</strong>
                is accepted as the capital unless the question specifically asks
                about the legislative or judicial capital.
              </p>
            </div>
          </section>
          {/* ====================== AMERICAS ====================== */}

          <section id="americas" className="motorways-section exa-card">
            <h2>North & South American Countries and Their Capitals</h2>

            <p>
              The Americas consist of North America, Central America, the
              Caribbean and South America. Together they contain some of the
              world's largest economies, longest rivers and most diverse
              ecosystems.
            </p>

            {/* NORTH AMERICA */}

            <h3 style={{ marginTop: "2rem" }}>North America & Caribbean</h3>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Capital</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Antigua and Barbuda</td>
                    <td>Saint John's</td>
                  </tr>

                  <tr>
                    <td>Bahamas</td>
                    <td>Nassau</td>
                  </tr>

                  <tr>
                    <td>Barbados</td>
                    <td>Bridgetown</td>
                  </tr>

                  <tr>
                    <td>Belize</td>
                    <td>Belmopan</td>
                  </tr>

                  <tr>
                    <td>Canada</td>
                    <td>Ottawa</td>
                  </tr>

                  <tr>
                    <td>Costa Rica</td>
                    <td>San José</td>
                  </tr>

                  <tr>
                    <td>Cuba</td>
                    <td>Havana</td>
                  </tr>

                  <tr>
                    <td>Dominica</td>
                    <td>Roseau</td>
                  </tr>

                  <tr>
                    <td>Dominican Republic</td>
                    <td>Santo Domingo</td>
                  </tr>

                  <tr>
                    <td>El Salvador</td>
                    <td>San Salvador</td>
                  </tr>

                  <tr>
                    <td>Grenada</td>
                    <td>Saint George's</td>
                  </tr>

                  <tr>
                    <td>Guatemala</td>
                    <td>Guatemala City</td>
                  </tr>

                  <tr>
                    <td>Haiti</td>
                    <td>Port-au-Prince</td>
                  </tr>

                  <tr>
                    <td>Honduras</td>
                    <td>Tegucigalpa</td>
                  </tr>

                  <tr>
                    <td>Jamaica</td>
                    <td>Kingston</td>
                  </tr>

                  <tr>
                    <td>Mexico</td>
                    <td>Mexico City</td>
                  </tr>

                  <tr>
                    <td>Nicaragua</td>
                    <td>Managua</td>
                  </tr>

                  <tr>
                    <td>Panama</td>
                    <td>Panama City</td>
                  </tr>

                  <tr>
                    <td>Saint Kitts and Nevis</td>
                    <td>Basseterre</td>
                  </tr>

                  <tr>
                    <td>Saint Lucia</td>
                    <td>Castries</td>
                  </tr>

                  <tr>
                    <td>Saint Vincent and the Grenadines</td>
                    <td>Kingstown</td>
                  </tr>

                  <tr>
                    <td>Trinidad and Tobago</td>
                    <td>Port of Spain</td>
                  </tr>

                  <tr>
                    <td>United States</td>
                    <td>Washington, D.C.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* SOUTH AMERICA */}

            <h3 style={{ marginTop: "3rem" }}>South America</h3>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Capital</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Argentina</td>
                    <td>Buenos Aires</td>
                  </tr>

                  <tr>
                    <td>Bolivia</td>
                    <td>Sucre (Constitutional)</td>
                  </tr>

                  <tr>
                    <td>Brazil</td>
                    <td>Brasília</td>
                  </tr>

                  <tr>
                    <td>Chile</td>
                    <td>Santiago</td>
                  </tr>

                  <tr>
                    <td>Colombia</td>
                    <td>Bogotá</td>
                  </tr>

                  <tr>
                    <td>Ecuador</td>
                    <td>Quito</td>
                  </tr>

                  <tr>
                    <td>Guyana</td>
                    <td>Georgetown</td>
                  </tr>

                  <tr>
                    <td>Paraguay</td>
                    <td>Asunción</td>
                  </tr>

                  <tr>
                    <td>Peru</td>
                    <td>Lima</td>
                  </tr>

                  <tr>
                    <td>Suriname</td>
                    <td>Paramaribo</td>
                  </tr>

                  <tr>
                    <td>Uruguay</td>
                    <td>Montevideo</td>
                  </tr>

                  <tr>
                    <td>Venezuela</td>
                    <td>Caracas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ====================== OCEANIA ====================== */}

          <section id="oceania" className="motorways-section exa-card">
            <h2>Oceania Countries and Their Capitals</h2>

            <p>
              Oceania consists of Australia, New Zealand and the Pacific island
              nations. Although it is the smallest continent by population, it
              includes many independent island countries that are commonly asked
              in competitive examinations.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Capital</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Australia</td>
                    <td>Canberra</td>
                  </tr>

                  <tr>
                    <td>Fiji</td>
                    <td>Suva</td>
                  </tr>

                  <tr>
                    <td>Kiribati</td>
                    <td>South Tarawa</td>
                  </tr>

                  <tr>
                    <td>Marshall Islands</td>
                    <td>Majuro</td>
                  </tr>

                  <tr>
                    <td>Micronesia</td>
                    <td>Palikir</td>
                  </tr>

                  <tr>
                    <td>Nauru</td>
                    <td>Yaren (District)</td>
                  </tr>

                  <tr>
                    <td>New Zealand</td>
                    <td>Wellington</td>
                  </tr>

                  <tr>
                    <td>Palau</td>
                    <td>Ngerulmud</td>
                  </tr>

                  <tr>
                    <td>Papua New Guinea</td>
                    <td>Port Moresby</td>
                  </tr>

                  <tr>
                    <td>Samoa</td>
                    <td>Apia</td>
                  </tr>

                  <tr>
                    <td>Solomon Islands</td>
                    <td>Honiara</td>
                  </tr>

                  <tr>
                    <td>Tonga</td>
                    <td>Nukuʻalofa</td>
                  </tr>

                  <tr>
                    <td>Tuvalu</td>
                    <td>Funafuti</td>
                  </tr>

                  <tr>
                    <td>Vanuatu</td>
                    <td>Port Vila</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* QUICK CONTINENT FACTS */}

          <section className="motorways-section exa-card">
            <h2>Important Facts About the Americas & Oceania</h2>

            <div className="important-grid">
              <div className="important-item">
                🇺🇸 United States → Washington, D.C.
              </div>

              <div className="important-item">🇨🇦 Canada → Ottawa.</div>

              <div className="important-item">🇲🇽 Mexico → Mexico City.</div>

              <div className="important-item">🇧🇷 Brazil → Brasília.</div>

              <div className="important-item">🇦🇷 Argentina → Buenos Aires.</div>

              <div className="important-item">🇨🇱 Chile → Santiago.</div>

              <div className="important-item">🇦🇺 Australia → Canberra.</div>

              <div className="important-item">🇳🇿 New Zealand → Wellington.</div>
            </div>

            <div className="note-box">
              <h3>Important Exam Notes</h3>

              <ul>
                <li>
                  Bolivia has two capitals:
                  <strong> Sucre</strong> (Constitutional) and
                  <strong> La Paz</strong> (Seat of Government).
                </li>

                <li>
                  Brazil's capital is
                  <strong> Brasília</strong>, not Rio de Janeiro.
                </li>

                <li>
                  Australia's capital is
                  <strong> Canberra</strong>, not Sydney.
                </li>

                <li>
                  Canada's capital is
                  <strong> Ottawa</strong>, not Toronto.
                </li>

                <li>
                  The capital of the United States is
                  <strong> Washington, D.C.</strong>, not New York City.
                </li>
              </ul>
            </div>
          </section>
          {/* ====================== IMPORTANT FACTS ====================== */}

          <section className="motorways-section exa-card">
            <h2>Important Facts About Countries and Capitals</h2>

            <p>
              Several countries have unique capital arrangements. Some have more
              than one capital city, while others have changed their capitals in
              recent decades. These questions are frequently asked in PMA, ISSB,
              CSS, PMS, FPSC, PPSC, ASF and FIA examinations.
            </p>

            <div className="important-grid">
              <div className="important-item">🌍 Largest country → Russia</div>

              <div className="important-item">
                🏝️ Smallest country → Vatican City
              </div>

              <div className="important-item">
                🇺🇳 UN Headquarters → New York City
              </div>

              <div className="important-item">
                🇪🇺 European Union Headquarters → Brussels
              </div>

              <div className="important-item">🌏 Largest continent → Asia</div>

              <div className="important-item">
                🌍 Largest population → India
              </div>

              <div className="important-item">
                🏛️ Pakistan's capital → Islamabad
              </div>

              <div className="important-item">
                🌐 World's busiest diplomatic city → Washington, D.C.
              </div>
            </div>
          </section>

          {/* ====================== MULTIPLE CAPITALS ====================== */}

          <section className="motorways-section exa-card">
            <h2>Countries with Multiple Capitals</h2>

            <p>
              Although most countries have one capital city, some countries
              perform different government functions in different cities.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Capital Arrangement</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>South Africa</td>

                    <td>
                      Pretoria (Executive), Cape Town (Legislative),
                      Bloemfontein (Judicial)
                    </td>
                  </tr>

                  <tr>
                    <td>Bolivia</td>

                    <td>Sucre (Constitutional), La Paz (Seat of Government)</td>
                  </tr>

                  <tr>
                    <td>Malaysia</td>

                    <td>Kuala Lumpur (Official), Putrajaya (Administrative)</td>
                  </tr>

                  <tr>
                    <td>Netherlands</td>

                    <td>Amsterdam (Constitutional), The Hague (Government)</td>
                  </tr>

                  <tr>
                    <td>Sri Lanka</td>

                    <td>
                      Sri Jayawardenepura Kotte (Official), Colombo (Commercial)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ====================== CHANGED CAPITALS ====================== */}

          <section className="motorways-section exa-card">
            <h2>Countries That Changed Their Capitals</h2>

            <p>
              Several countries have moved their capitals for administrative,
              political or economic reasons.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Old Capital</th>

                    <th>Current Capital</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Kazakhstan</td>

                    <td>Almaty</td>

                    <td>Astana</td>
                  </tr>

                  <tr>
                    <td>Myanmar</td>

                    <td>Yangon</td>

                    <td>Naypyidaw</td>
                  </tr>

                  <tr>
                    <td>Nigeria</td>

                    <td>Lagos</td>

                    <td>Abuja</td>
                  </tr>

                  <tr>
                    <td>Brazil</td>

                    <td>Rio de Janeiro</td>

                    <td>Brasília</td>
                  </tr>

                  <tr>
                    <td>Pakistan</td>

                    <td>Karachi</td>

                    <td>Islamabad</td>
                  </tr>

                  <tr>
                    <td>Belize</td>

                    <td>Belize City</td>

                    <td>Belmopan</td>
                  </tr>

                  <tr>
                    <td>Tanzania</td>

                    <td>Dar es Salaam</td>

                    <td>Dodoma</td>
                  </tr>

                  <tr>
                    <td>Côte d'Ivoire</td>

                    <td>Abidjan</td>

                    <td>Yamoussoukro</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ====================== FREQUENTLY CONFUSED CAPITALS ====================== */}

          <section className="motorways-section exa-card">
            <h2>Frequently Confused Capitals</h2>

            <p>
              These are among the most commonly confused capitals in competitive
              examinations.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Correct Capital</th>

                    <th>Common Mistake</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Australia</td>

                    <td>Canberra</td>

                    <td>Sydney</td>
                  </tr>

                  <tr>
                    <td>Canada</td>

                    <td>Ottawa</td>

                    <td>Toronto</td>
                  </tr>

                  <tr>
                    <td>Brazil</td>

                    <td>Brasília</td>

                    <td>Rio de Janeiro</td>
                  </tr>

                  <tr>
                    <td>Pakistan</td>

                    <td>Islamabad</td>

                    <td>Karachi</td>
                  </tr>

                  <tr>
                    <td>Turkey</td>

                    <td>Ankara</td>

                    <td>Istanbul</td>
                  </tr>

                  <tr>
                    <td>Switzerland</td>

                    <td>Bern</td>

                    <td>Zurich</td>
                  </tr>

                  <tr>
                    <td>Morocco</td>

                    <td>Rabat</td>

                    <td>Casablanca</td>
                  </tr>

                  <tr>
                    <td>South Africa</td>

                    <td>Pretoria*</td>

                    <td>Johannesburg</td>
                  </tr>

                  <tr>
                    <td>United States</td>

                    <td>Washington, D.C.</td>

                    <td>New York City</td>
                  </tr>

                  <tr>
                    <td>New Zealand</td>

                    <td>Wellington</td>

                    <td>Auckland</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="note-box">
              <h3>Exam Tip</h3>

              <p>
                Questions about Australia's capital (Canberra), Canada's capital
                (Ottawa), Brazil's capital (Brasília), Turkey's capital (Ankara)
                and Switzerland's capital (Bern) appear repeatedly in PMA, ISSB
                and other competitive examinations.
              </p>
            </div>
          </section>
          {/* ====================== PRACTICE MCQS ====================== */}

          <section className="motorways-section exa-card">
            <h2>Practice MCQs</h2>

            <MCQCard
              question="What is the capital of Pakistan?"
              options={["Lahore", "Karachi", "Islamabad", "Peshawar"]}
              correct={2}
              explanation="Islamabad became Pakistan's capital in 1967."
            />

            <MCQCard
              question="The capital of China is:"
              options={["Shanghai", "Beijing", "Hong Kong", "Guangzhou"]}
              correct={1}
              explanation="Beijing is the capital of China."
            />

            <MCQCard
              question="What is the capital of Japan?"
              options={["Kyoto", "Osaka", "Tokyo", "Nagoya"]}
              correct={2}
              explanation="Tokyo is Japan's capital and largest city."
            />

            <MCQCard
              question="The capital of India is:"
              options={["Mumbai", "Kolkata", "Chennai", "New Delhi"]}
              correct={3}
              explanation="New Delhi is the capital of India."
            />

            <MCQCard
              question="Which city is the capital of Saudi Arabia?"
              options={["Jeddah", "Mecca", "Medina", "Riyadh"]}
              correct={3}
              explanation="Riyadh is the capital of Saudi Arabia."
            />

            <MCQCard
              question="The capital of Turkey is:"
              options={["Istanbul", "Ankara", "Izmir", "Bursa"]}
              correct={1}
              explanation="Ankara is the capital, not Istanbul."
            />

            <MCQCard
              question="What is the capital of Australia?"
              options={["Sydney", "Melbourne", "Canberra", "Perth"]}
              correct={2}
              explanation="Canberra is Australia's capital."
            />

            <MCQCard
              question="The capital of Canada is:"
              options={["Toronto", "Vancouver", "Ottawa", "Montreal"]}
              correct={2}
              explanation="Ottawa is Canada's capital."
            />

            <MCQCard
              question="The capital of the United States is:"
              options={[
                "New York",
                "Washington, D.C.",
                "Los Angeles",
                "Chicago",
              ]}
              correct={1}
              explanation="Washington, D.C. is the capital of the United States."
            />

            <MCQCard
              question="Brazil's capital is:"
              options={["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"]}
              correct={2}
              explanation="Brasília became Brazil's capital in 1960."
            />

            <MCQCard
              question="The capital of France is:"
              options={["Paris", "Lyon", "Marseille", "Nice"]}
              correct={0}
              explanation="Paris is the capital of France."
            />

            <MCQCard
              question="Germany's capital is:"
              options={["Munich", "Frankfurt", "Berlin", "Hamburg"]}
              correct={2}
              explanation="Berlin is the capital of Germany."
            />

            <MCQCard
              question="The capital of Italy is:"
              options={["Rome", "Milan", "Venice", "Naples"]}
              correct={0}
              explanation="Rome is Italy's capital."
            />

            <MCQCard
              question="The capital of Russia is:"
              options={["Saint Petersburg", "Moscow", "Kazan", "Sochi"]}
              correct={1}
              explanation="Moscow is the capital of Russia."
            />

            <MCQCard
              question="The capital of Egypt is:"
              options={["Alexandria", "Luxor", "Cairo", "Giza"]}
              correct={2}
              explanation="Cairo is Egypt's capital."
            />

            <MCQCard
              question="The capital of Nigeria is:"
              options={["Lagos", "Abuja", "Kano", "Ibadan"]}
              correct={1}
              explanation="Abuja replaced Lagos as Nigeria's capital."
            />

            <MCQCard
              question="The capital of South Korea is:"
              options={["Busan", "Seoul", "Incheon", "Daegu"]}
              correct={1}
              explanation="Seoul is South Korea's capital."
            />

            <MCQCard
              question="The capital of Afghanistan is:"
              options={["Herat", "Kandahar", "Kabul", "Mazar-i-Sharif"]}
              correct={2}
              explanation="Kabul is the capital of Afghanistan."
            />

            <MCQCard
              question="The capital of Nepal is:"
              options={["Pokhara", "Kathmandu", "Biratnagar", "Lalitpur"]}
              correct={1}
              explanation="Kathmandu is Nepal's capital."
            />

            <MCQCard
              question="The capital of Bangladesh is:"
              options={["Chattogram", "Khulna", "Dhaka", "Rajshahi"]}
              correct={2}
              explanation="Dhaka is the capital of Bangladesh."
            />

            <MCQCard
              question="The capital of Iran is:"
              options={["Mashhad", "Tabriz", "Tehran", "Isfahan"]}
              correct={2}
              explanation="Tehran is Iran's capital."
            />

            <MCQCard
              question="The capital of Malaysia is:"
              options={["Johor Bahru", "Kuala Lumpur", "Putrajaya", "Penang"]}
              correct={1}
              explanation="Kuala Lumpur is the official capital, while Putrajaya is the administrative center."
            />

            <MCQCard
              question="The capital of Indonesia is:"
              options={["Bandung", "Surabaya", "Jakarta", "Medan"]}
              correct={2}
              explanation="Jakarta remains Indonesia's official capital."
            />

            <MCQCard
              question="The capital of Switzerland is:"
              options={["Zurich", "Geneva", "Bern", "Basel"]}
              correct={2}
              explanation="Bern is Switzerland's federal city and capital."
            />

            <MCQCard
              question="Which country has three capital cities?"
              options={["Bolivia", "South Africa", "Netherlands", "Malaysia"]}
              correct={1}
              explanation="South Africa has Pretoria, Cape Town and Bloemfontein."
            />
          </section>

          {/* ====================== FAQs ====================== */}

          {/* <section
          id="faq"
          className="motorways-section exa-card"
        >

          <h2>

            Frequently Asked Questions (FAQs)

          </h2>

          <div className="faq-list">

            <div className="faq-item">

              <h3>

                1. How many countries are there in the world?

              </h3>

              <p>

                There are 195 widely recognized sovereign states,
                including 193 United Nations member states and
                2 UN observer states (Holy See/Vatican City and
                the State of Palestine).

              </p>

            </div>

            <div className="faq-item">

              <h3>

                2. Which country is the largest in the world?

              </h3>

              <p>

                Russia is the largest country by total land area.

              </p>

            </div>

            <div className="faq-item">

              <h3>

                3. Which country is the smallest?

              </h3>

              <p>

                Vatican City is the world's smallest independent state.

              </p>

            </div>

            <div className="faq-item">

              <h3>

                4. What is Pakistan's capital?

              </h3>

              <p>

                Islamabad is the federal capital of Pakistan.

              </p>

            </div>

            <div className="faq-item">

              <h3>

                5. Which country has three capitals?

              </h3>

              <p>

                South Africa has three capitals:
                Pretoria (Executive),
                Cape Town (Legislative),
                and Bloemfontein (Judicial).

              </p>

            </div>

            <div className="faq-item">

              <h3>

                6. Why is Canberra the capital instead of Sydney?

              </h3>

              <p>

                Canberra was selected as a compromise between
                Sydney and Melbourne and officially became the
                capital of Australia in 1913.

              </p>

            </div>

            <div className="faq-item">

              <h3>

                7. What is the capital of Brazil?

              </h3>

              <p>

                Brasília is the capital of Brazil.
                Many students mistakenly answer Rio de Janeiro.

              </p>

            </div>

            <div className="faq-item">

              <h3>

                8. Which capital changes are commonly asked in exams?

              </h3>

              <p>

                Kazakhstan (Astana), Myanmar (Naypyidaw),
                Nigeria (Abuja), Pakistan (Islamabad),
                Brazil (Brasília) and Tanzania (Dodoma)
                are among the most frequently tested examples.

              </p>

            </div>

          </div>

        </section> */}
          <section id="faq" className="motorways-section exa-card">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-list">
              <details className="faq-item" open>
                <summary>How many countries are there in the world?</summary>

                <p>
                  There are 195 widely recognized sovereign states, including
                  193 United Nations member states and 2 UN observer states (the
                  Holy See/Vatican City and the State of Palestine).
                </p>
              </details>

              <details className="faq-item">
                <summary>Which is the largest country in the world?</summary>

                <p>
                  Russia is the world's largest country by total land area,
                  covering more than 17 million square kilometres.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which is the smallest country in the world?</summary>

                <p>
                  Vatican City is the world's smallest independent country,
                  covering an area of about 0.49 square kilometres.
                </p>
              </details>

              <details className="faq-item">
                <summary>What is the capital of Pakistan?</summary>

                <p>
                  Islamabad is the capital city of Pakistan and serves as the
                  country's political and administrative centre.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which country has three capitals?</summary>

                <p>
                  South Africa has three capitals: Pretoria (Executive), Cape
                  Town (Legislative), and Bloemfontein (Judicial).
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  Why is Canberra the capital of Australia instead of Sydney?
                </summary>

                <p>
                  Canberra was selected as a compromise between Sydney and
                  Melbourne and officially became Australia's capital in 1913.
                </p>
              </details>

              <details className="faq-item">
                <summary>What is the capital of Brazil?</summary>

                <p>
                  Brasília is the capital of Brazil. Many students mistakenly
                  think Rio de Janeiro is the capital because it was the former
                  capital and remains the country's most famous city.
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  Which capital changes are commonly asked in competitive exams?
                </summary>

                <p>
                  Frequently asked examples include Astana (Kazakhstan),
                  Naypyidaw (Myanmar), Abuja (Nigeria), Islamabad (Pakistan),
                  Brasília (Brazil), and Dodoma (Tanzania).
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  Which country has the most populous capital city?
                </summary>

                <p>
                  Beijing (China), Tokyo (Japan), and Delhi (India) are among
                  the world's largest capital cities by population, with Tokyo
                  being the largest metropolitan capital.
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  Which capitals are most commonly confused in exams?
                </summary>

                <p>
                  Candidates frequently confuse Canberra with Sydney, Ottawa
                  with Toronto, Brasília with Rio de Janeiro, Ankara with
                  Istanbul, Bern with Zurich, and Washington, D.C. with New
                  York.
                </p>
              </details>
            </div>
          </section>

          {/* ====================== QUICK REVISION ====================== */}

          <section className="motorways-section exa-card">
            <h2>Quick Revision</h2>

            <div className="important-grid">
              <div className="important-item">🇵🇰 Pakistan → Islamabad</div>

              <div className="important-item">🇨🇳 China → Beijing</div>

              <div className="important-item">🇮🇳 India → New Delhi</div>

              <div className="important-item">🇯🇵 Japan → Tokyo</div>

              <div className="important-item">🇺🇸 USA → Washington, D.C.</div>

              <div className="important-item">🇬🇧 UK → London</div>

              <div className="important-item">🇫🇷 France → Paris</div>

              <div className="important-item">🇩🇪 Germany → Berlin</div>

              <div className="important-item">🇨🇦 Canada → Ottawa</div>

              <div className="important-item">🇦🇺 Australia → Canberra</div>

              <div className="important-item">🇧🇷 Brazil → Brasília</div>

              <div className="important-item">🇿🇦 South Africa → Pretoria*</div>
            </div>
          </section>

          {/* ====================== EXAM TIPS ====================== */}

          <section className="motorways-section exa-card">
            <h2>PMA, ISSB & Competitive Exam Tips</h2>

            <ul className="motorway-list">
              <li>
                Memorize countries continent-wise instead of trying to learn all
                capitals at once.
              </li>

              <li>
                Focus on capitals that candidates commonly confuse, such as
                Canberra, Ottawa, Brasília, Ankara and Bern.
              </li>

              <li>
                Revise countries with multiple capitals, including South Africa,
                Bolivia, the Netherlands and Malaysia.
              </li>

              <li>
                Learn capitals that have changed in recent history, including
                Astana, Naypyidaw and Abuja.
              </li>

              <li>Solve MCQs regularly to improve speed and accuracy.</li>

              <li>
                Use this guide alongside EXAMITICS mock tests for maximum
                preparation.
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CountriesAndCapitals;
