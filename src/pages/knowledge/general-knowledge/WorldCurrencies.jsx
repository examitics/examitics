import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import {
  FiDollarSign,
  FiGlobe,
  FiCreditCard,
  FiHome,
  FiArrowUp,
  FiBookOpen,
  FiMap,
  FiCompass,
  FiFlag,
  FiNavigation,
  FiHelpCircle,
  FiMessageCircle,
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
    icon: FiBookOpen,
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
    icon: FiCompass,
  },
  {
    id: "americas",
    title: "Americas",
    icon: FiFlag,
  },
  {
    id: "oceania",
    title: "Oceania",
    icon: FiNavigation,
  },
  {
    id: "mcqs",
    title: "MCQs",
    icon: FiHelpCircle,
  },
  {
    id: "faq",
    title: "FAQs",
    icon: FiMessageCircle,
  },
];

const WorldCurrencies = () => {
  const [showTop, setShowTop] = useState(false);
  const [active, setActive] = useState("overview");
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="motorways-page">
        <Helmet>
          <title>
            World Currencies | Countries, Currency Names & Codes | EXAMITICS
          </title>

          <meta
            name="description"
            content="Complete guide to world currencies including currency names, ISO currency codes, important facts, practice MCQs and competitive exam preparation for PMA, ISSB, CSS, FPSC, PPSC and NTS."
          />

          <meta
            name="keywords"
            content="World Currencies, Countries and Currencies, Currency Codes, ISO 4217, PKR, USD, EUR, GBP, JPY, PMA Notes, ISSB General Knowledge, CSS GK"
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
              name: "World Currencies",
              url: "https://www.examitics.com/knowledge/general-knowledge/world-currencies",
            },
          ]}
        />
        {/* Hero */}

        <section className="motorways-hero">
          <div className="container-custom">
            <span className="motorway-badge">General Knowledge</span>

            <h1>World Currencies</h1>

            <p>
              Learn the official currencies and ISO currency codes of countries
              around the world. This guide is designed for PMA Long Course,
              ISSB, CSS, PMS, FPSC, PPSC, ASF, FIA, NTS and other competitive
              examinations.
            </p>
          </div>
        </section>

        {/* Sticky Navigation */}

        <div className="motorways-sticky">
          <div className="container-custom">
            <div className="motorways-nav">
              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <button
                    key={section.id}
                    className={active === section.id ? "active" : ""}
                    onClick={() => scrollToSection(section.id)}
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
          {/* ================= OVERVIEW ================= */}

          <section id="overview" className="motorways-section exa-card">
            <h2>What is a Currency?</h2>

            <p>
              A currency is the official medium of exchange used by a country or
              a group of countries to buy goods and services. Every sovereign
              nation has its own official currency, although some countries
              share a common currency such as the Euro, while others officially
              use another country's currency.
            </p>

            <p>
              Modern currencies are regulated by central banks and recognized
              internationally through the
              <strong> ISO 4217 currency code </strong>
              system. These three-letter codes are widely used in banking,
              international trade, financial markets and competitive
              examinations.
            </p>
          </section>

          {/* Currency Overview */}

          <section className="motorways-section exa-card">
            <h2>Currency Overview</h2>

            <div className="important-grid">
              <div className="important-item">
                <FiDollarSign />

                <strong>Official Currency</strong>

                <p>
                  Every country issues an official currency for domestic
                  transactions.
                </p>
              </div>

              <div className="important-item">
                <FiCreditCard />

                <strong>ISO Currency Code</strong>

                <p>
                  Internationally recognized three-letter code such as PKR, USD
                  and EUR.
                </p>
              </div>

              <div className="important-item">
                <FiGlobe />

                <strong>International Trade</strong>

                <p>
                  Currency exchange enables global trade and international
                  commerce.
                </p>
              </div>

              <div className="important-item">
                <FiHome />

                <strong>Central Banks</strong>

                <p>
                  Central banks regulate monetary policy and issue national
                  currencies.
                </p>
              </div>
            </div>
          </section>

          {/* Important Facts */}

          <section className="motorways-section exa-card">
            <h2>Important Facts</h2>

            <ul className="motorway-list">
              <li>
                The United States Dollar (USD) is the world's most traded
                currency.
              </li>

              <li>
                The Euro (EUR) is the official currency of many European Union
                countries.
              </li>

              <li>
                Pakistan's official currency is the Pakistani Rupee (PKR).
              </li>

              <li>Japan uses the Japanese Yen (JPY).</li>

              <li>
                China's official currency is the Renminbi (Yuan) with the code
                CNY.
              </li>

              <li>Switzerland uses the Swiss Franc (CHF), not the Euro.</li>

              <li>
                The Kuwaiti Dinar (KWD) is among the world's highest-valued
                currencies.
              </li>

              <li>
                ISO 4217 defines standardized three-letter currency codes used
                worldwide.
              </li>
            </ul>
          </section>
          {/* ====================== ASIA ====================== */}

          <section id="asia" className="motorways-section exa-card">
            <h2>Asian Countries and Their Currencies</h2>

            <p>
              Asia is the world's largest and most populous continent,
              consisting of nearly 50 sovereign countries. It is home to many of
              the world's strongest economies, including China, Japan, India,
              Saudi Arabia and the United Arab Emirates. The table below lists
              the official currencies and their ISO 4217 currency codes.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Official Currency</th>

                    <th>ISO Code</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Afghanistan</td>
                    <td>Afghani</td>
                    <td>AFN</td>
                  </tr>

                  <tr>
                    <td>Armenia</td>
                    <td>Armenian Dram</td>
                    <td>AMD</td>
                  </tr>

                  <tr>
                    <td>Azerbaijan</td>
                    <td>Azerbaijani Manat</td>
                    <td>AZN</td>
                  </tr>

                  <tr>
                    <td>Bahrain</td>
                    <td>Bahraini Dinar</td>
                    <td>BHD</td>
                  </tr>

                  <tr>
                    <td>Bangladesh</td>
                    <td>Taka</td>
                    <td>BDT</td>
                  </tr>

                  <tr>
                    <td>Bhutan</td>
                    <td>Ngultrum</td>
                    <td>BTN</td>
                  </tr>

                  <tr>
                    <td>Brunei</td>
                    <td>Brunei Dollar</td>
                    <td>BND</td>
                  </tr>

                  <tr>
                    <td>Cambodia</td>
                    <td>Riel</td>
                    <td>KHR</td>
                  </tr>

                  <tr>
                    <td>China</td>
                    <td>Renminbi (Yuan)</td>
                    <td>CNY</td>
                  </tr>

                  <tr>
                    <td>Cyprus</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Georgia</td>
                    <td>Lari</td>
                    <td>GEL</td>
                  </tr>

                  <tr>
                    <td>India</td>
                    <td>Indian Rupee</td>
                    <td>INR</td>
                  </tr>

                  <tr>
                    <td>Indonesia</td>
                    <td>Rupiah</td>
                    <td>IDR</td>
                  </tr>

                  <tr>
                    <td>Iran</td>
                    <td>Iranian Rial</td>
                    <td>IRR</td>
                  </tr>

                  <tr>
                    <td>Iraq</td>
                    <td>Iraqi Dinar</td>
                    <td>IQD</td>
                  </tr>

                  <tr>
                    <td>Israel</td>
                    <td>Israeli New Shekel</td>
                    <td>ILS</td>
                  </tr>

                  <tr>
                    <td>Japan</td>
                    <td>Japanese Yen</td>
                    <td>JPY</td>
                  </tr>

                  <tr>
                    <td>Jordan</td>
                    <td>Jordanian Dinar</td>
                    <td>JOD</td>
                  </tr>

                  <tr>
                    <td>Kazakhstan</td>
                    <td>Tenge</td>
                    <td>KZT</td>
                  </tr>

                  <tr>
                    <td>Kuwait</td>
                    <td>Kuwaiti Dinar</td>
                    <td>KWD</td>
                  </tr>

                  <tr>
                    <td>Kyrgyzstan</td>
                    <td>Som</td>
                    <td>KGS</td>
                  </tr>

                  <tr>
                    <td>Laos</td>
                    <td>Kip</td>
                    <td>LAK</td>
                  </tr>

                  <tr>
                    <td>Lebanon</td>
                    <td>Lebanese Pound</td>
                    <td>LBP</td>
                  </tr>

                  <tr>
                    <td>Malaysia</td>
                    <td>Malaysian Ringgit</td>
                    <td>MYR</td>
                  </tr>

                  <tr>
                    <td>Maldives</td>
                    <td>Rufiyaa</td>
                    <td>MVR</td>
                  </tr>

                  <tr>
                    <td>Mongolia</td>
                    <td>Tögrög</td>
                    <td>MNT</td>
                  </tr>

                  <tr>
                    <td>Myanmar</td>
                    <td>Kyat</td>
                    <td>MMK</td>
                  </tr>

                  <tr>
                    <td>Nepal</td>
                    <td>Nepalese Rupee</td>
                    <td>NPR</td>
                  </tr>

                  <tr>
                    <td>North Korea</td>
                    <td>North Korean Won</td>
                    <td>KPW</td>
                  </tr>

                  <tr>
                    <td>Oman</td>
                    <td>Omani Rial</td>
                    <td>OMR</td>
                  </tr>

                  <tr>
                    <td>Pakistan</td>
                    <td>Pakistani Rupee</td>
                    <td>PKR</td>
                  </tr>

                  <tr>
                    <td>Palestine</td>
                    <td>Israeli New Shekel*</td>
                    <td>ILS</td>
                  </tr>

                  <tr>
                    <td>Philippines</td>
                    <td>Philippine Peso</td>
                    <td>PHP</td>
                  </tr>

                  <tr>
                    <td>Qatar</td>
                    <td>Qatari Riyal</td>
                    <td>QAR</td>
                  </tr>

                  <tr>
                    <td>Saudi Arabia</td>
                    <td>Saudi Riyal</td>
                    <td>SAR</td>
                  </tr>

                  <tr>
                    <td>Singapore</td>
                    <td>Singapore Dollar</td>
                    <td>SGD</td>
                  </tr>

                  <tr>
                    <td>South Korea</td>
                    <td>South Korean Won</td>
                    <td>KRW</td>
                  </tr>

                  <tr>
                    <td>Sri Lanka</td>
                    <td>Sri Lankan Rupee</td>
                    <td>LKR</td>
                  </tr>

                  <tr>
                    <td>Syria</td>
                    <td>Syrian Pound</td>
                    <td>SYP</td>
                  </tr>

                  <tr>
                    <td>Taiwan</td>
                    <td>New Taiwan Dollar</td>
                    <td>TWD</td>
                  </tr>

                  <tr>
                    <td>Tajikistan</td>
                    <td>Somoni</td>
                    <td>TJS</td>
                  </tr>

                  <tr>
                    <td>Thailand</td>
                    <td>Baht</td>
                    <td>THB</td>
                  </tr>

                  <tr>
                    <td>Timor-Leste</td>
                    <td>United States Dollar</td>
                    <td>USD</td>
                  </tr>

                  <tr>
                    <td>Turkey</td>
                    <td>Turkish Lira</td>
                    <td>TRY</td>
                  </tr>

                  <tr>
                    <td>Turkmenistan</td>
                    <td>Manat</td>
                    <td>TMT</td>
                  </tr>

                  <tr>
                    <td>United Arab Emirates</td>
                    <td>UAE Dirham</td>
                    <td>AED</td>
                  </tr>

                  <tr>
                    <td>Uzbekistan</td>
                    <td>Som</td>
                    <td>UZS</td>
                  </tr>

                  <tr>
                    <td>Vietnam</td>
                    <td>Dong</td>
                    <td>VND</td>
                  </tr>

                  <tr>
                    <td>Yemen</td>
                    <td>Yemeni Rial</td>
                    <td>YER</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ====================== ASIA FACTS ====================== */}

          <section className="motorways-section exa-card">
            <h2>Important Facts About Asian Currencies</h2>

            <div className="important-grid">
              <div className="important-item">
                🇵🇰 Pakistan → Pakistani Rupee (PKR)
              </div>

              <div className="important-item">
                🇮🇳 India → Indian Rupee (INR)
              </div>

              <div className="important-item">
                🇨🇳 China → Renminbi (Yuan) (CNY)
              </div>

              <div className="important-item">
                🇯🇵 Japan → Japanese Yen (JPY)
              </div>

              <div className="important-item">🇰🇷 South Korea → Won (KRW)</div>

              <div className="important-item">🇧🇩 Bangladesh → Taka (BDT)</div>

              <div className="important-item">
                🇸🇦 Saudi Arabia → Riyal (SAR)
              </div>

              <div className="important-item">🇦🇪 UAE → Dirham (AED)</div>

              <div className="important-item">
                🇰🇼 Kuwait → Kuwaiti Dinar (KWD)
              </div>

              <div className="important-item">🇴🇲 Oman → Omani Rial (OMR)</div>
            </div>

            <div className="note-box">
              <h3>Exam Tip</h3>

              <p>
                In competitive examinations, candidates often confuse
                <strong> Yuan and Yen</strong>,<strong> Riyal and Rial</strong>,
                and <strong> Rupee and Rupiah</strong>. Remember that{" "}
                <strong>China uses the Yuan (CNY)</strong>,
                <strong>Japan uses the Yen (JPY)</strong>,
                <strong>Indonesia uses the Rupiah (IDR)</strong>, while
                Pakistan, India, Nepal and Sri Lanka use different forms of the{" "}
                <strong>Rupee</strong>.
              </p>
            </div>
          </section>
          {/* ====================== EUROPE ====================== */}

          <section id="europe" className="motorways-section exa-card">
            <h2>European Countries and Their Currencies</h2>

            <p>
              Europe consists of more than 40 sovereign countries. While many
              European Union members use the Euro (EUR), several countries
              continue to use their own national currencies such as the Pound
              Sterling, Swiss Franc, Norwegian Krone and Swedish Krona.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Official Currency</th>

                    <th>ISO Code</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Albania</td>
                    <td>Lek</td>
                    <td>ALL</td>
                  </tr>

                  <tr>
                    <td>Andorra</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Austria</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Belarus</td>
                    <td>Belarusian Ruble</td>
                    <td>BYN</td>
                  </tr>

                  <tr>
                    <td>Belgium</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Bosnia and Herzegovina</td>
                    <td>Convertible Mark</td>
                    <td>BAM</td>
                  </tr>

                  <tr>
                    <td>Bulgaria</td>
                    <td>Bulgarian Lev</td>
                    <td>BGN</td>
                  </tr>

                  <tr>
                    <td>Croatia</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Czech Republic</td>
                    <td>Czech Koruna</td>
                    <td>CZK</td>
                  </tr>

                  <tr>
                    <td>Denmark</td>
                    <td>Danish Krone</td>
                    <td>DKK</td>
                  </tr>

                  <tr>
                    <td>Estonia</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Finland</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>France</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Germany</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Greece</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Hungary</td>
                    <td>Forint</td>
                    <td>HUF</td>
                  </tr>

                  <tr>
                    <td>Iceland</td>
                    <td>Icelandic Króna</td>
                    <td>ISK</td>
                  </tr>

                  <tr>
                    <td>Ireland</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Italy</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Kosovo</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Latvia</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Liechtenstein</td>
                    <td>Swiss Franc</td>
                    <td>CHF</td>
                  </tr>

                  <tr>
                    <td>Lithuania</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Luxembourg</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Malta</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Moldova</td>
                    <td>Moldovan Leu</td>
                    <td>MDL</td>
                  </tr>

                  <tr>
                    <td>Monaco</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Montenegro</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Netherlands</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>North Macedonia</td>
                    <td>Macedonian Denar</td>
                    <td>MKD</td>
                  </tr>

                  <tr>
                    <td>Norway</td>
                    <td>Norwegian Krone</td>
                    <td>NOK</td>
                  </tr>

                  <tr>
                    <td>Poland</td>
                    <td>Złoty</td>
                    <td>PLN</td>
                  </tr>

                  <tr>
                    <td>Portugal</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Romania</td>
                    <td>Romanian Leu</td>
                    <td>RON</td>
                  </tr>

                  <tr>
                    <td>Russia</td>
                    <td>Russian Ruble</td>
                    <td>RUB</td>
                  </tr>

                  <tr>
                    <td>San Marino</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Serbia</td>
                    <td>Serbian Dinar</td>
                    <td>RSD</td>
                  </tr>

                  <tr>
                    <td>Slovakia</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Slovenia</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Spain</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>

                  <tr>
                    <td>Sweden</td>
                    <td>Swedish Krona</td>
                    <td>SEK</td>
                  </tr>

                  <tr>
                    <td>Switzerland</td>
                    <td>Swiss Franc</td>
                    <td>CHF</td>
                  </tr>

                  <tr>
                    <td>Ukraine</td>
                    <td>Hryvnia</td>
                    <td>UAH</td>
                  </tr>

                  <tr>
                    <td>United Kingdom</td>
                    <td>Pound Sterling</td>
                    <td>GBP</td>
                  </tr>

                  <tr>
                    <td>Vatican City</td>
                    <td>Euro</td>
                    <td>EUR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ====================== EUROPE FACTS ====================== */}

          <section className="motorways-section exa-card">
            <h2>Important Facts About European Currencies</h2>

            <div className="important-grid">
              <div className="important-item">🇪🇺 Euro → EUR</div>

              <div className="important-item">
                🇬🇧 United Kingdom → Pound Sterling (GBP)
              </div>

              <div className="important-item">
                🇨🇭 Switzerland → Swiss Franc (CHF)
              </div>

              <div className="important-item">
                🇳🇴 Norway → Norwegian Krone (NOK)
              </div>

              <div className="important-item">
                🇸🇪 Sweden → Swedish Krona (SEK)
              </div>

              <div className="important-item">
                🇩🇰 Denmark → Danish Krone (DKK)
              </div>

              <div className="important-item">🇵🇱 Poland → Złoty (PLN)</div>

              <div className="important-item">
                🇨🇿 Czech Republic → Czech Koruna (CZK)
              </div>

              <div className="important-item">🇭🇺 Hungary → Forint (HUF)</div>

              <div className="important-item">
                🇷🇺 Russia → Russian Ruble (RUB)
              </div>
            </div>

            <div className="note-box">
              <h3>Exam Tip</h3>

              <p>
                Do not assume every European country uses the Euro. Countries
                such as the <strong>United Kingdom</strong>,{" "}
                <strong>Switzerland</strong>, <strong>Norway</strong>,{" "}
                <strong>Sweden</strong>, <strong>Denmark</strong>,{" "}
                <strong>Poland</strong>, <strong>Czech Republic</strong> and
                <strong> Hungary</strong> have their own national currencies.
                Questions on these exceptions are common in PMA, ISSB, CSS, FPSC
                and PPSC examinations.
              </p>
            </div>
          </section>
          {/* ====================== AFRICA ====================== */}

          <section id="africa" className="motorways-section exa-card">
            <h2>African Countries and Their Currencies</h2>

            <p>
              Africa is the world's second-largest continent and consists of 54
              sovereign countries. African nations use a wide variety of
              currencies including the Egyptian Pound, Nigerian Naira, Kenyan
              Shilling, South African Rand and several regional CFA Franc
              currencies.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Official Currency</th>

                    <th>ISO Code</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Algeria</td>
                    <td>Algerian Dinar</td>
                    <td>DZD</td>
                  </tr>

                  <tr>
                    <td>Angola</td>
                    <td>Kwanza</td>
                    <td>AOA</td>
                  </tr>

                  <tr>
                    <td>Benin</td>
                    <td>West African CFA Franc</td>
                    <td>XOF</td>
                  </tr>

                  <tr>
                    <td>Botswana</td>
                    <td>Pula</td>
                    <td>BWP</td>
                  </tr>

                  <tr>
                    <td>Burkina Faso</td>
                    <td>West African CFA Franc</td>
                    <td>XOF</td>
                  </tr>

                  <tr>
                    <td>Burundi</td>
                    <td>Burundian Franc</td>
                    <td>BIF</td>
                  </tr>

                  <tr>
                    <td>Cabo Verde</td>
                    <td>Cape Verdean Escudo</td>
                    <td>CVE</td>
                  </tr>

                  <tr>
                    <td>Cameroon</td>
                    <td>Central African CFA Franc</td>
                    <td>XAF</td>
                  </tr>

                  <tr>
                    <td>Central African Republic</td>
                    <td>Central African CFA Franc</td>
                    <td>XAF</td>
                  </tr>

                  <tr>
                    <td>Chad</td>
                    <td>Central African CFA Franc</td>
                    <td>XAF</td>
                  </tr>

                  <tr>
                    <td>Comoros</td>
                    <td>Comorian Franc</td>
                    <td>KMF</td>
                  </tr>

                  <tr>
                    <td>Democratic Republic of the Congo</td>
                    <td>Congolese Franc</td>
                    <td>CDF</td>
                  </tr>

                  <tr>
                    <td>Republic of the Congo</td>
                    <td>Central African CFA Franc</td>
                    <td>XAF</td>
                  </tr>

                  <tr>
                    <td>Djibouti</td>
                    <td>Djiboutian Franc</td>
                    <td>DJF</td>
                  </tr>

                  <tr>
                    <td>Egypt</td>
                    <td>Egyptian Pound</td>
                    <td>EGP</td>
                  </tr>

                  <tr>
                    <td>Equatorial Guinea</td>
                    <td>Central African CFA Franc</td>
                    <td>XAF</td>
                  </tr>

                  <tr>
                    <td>Eritrea</td>
                    <td>Nakfa</td>
                    <td>ERN</td>
                  </tr>

                  <tr>
                    <td>Eswatini</td>
                    <td>Lilangeni</td>
                    <td>SZL</td>
                  </tr>

                  <tr>
                    <td>Ethiopia</td>
                    <td>Ethiopian Birr</td>
                    <td>ETB</td>
                  </tr>

                  <tr>
                    <td>Gabon</td>
                    <td>Central African CFA Franc</td>
                    <td>XAF</td>
                  </tr>

                  <tr>
                    <td>Gambia</td>
                    <td>Dalasi</td>
                    <td>GMD</td>
                  </tr>

                  <tr>
                    <td>Ghana</td>
                    <td>Ghanaian Cedi</td>
                    <td>GHS</td>
                  </tr>

                  <tr>
                    <td>Guinea</td>
                    <td>Guinean Franc</td>
                    <td>GNF</td>
                  </tr>

                  <tr>
                    <td>Guinea-Bissau</td>
                    <td>West African CFA Franc</td>
                    <td>XOF</td>
                  </tr>

                  <tr>
                    <td>Ivory Coast (Côte d'Ivoire)</td>
                    <td>West African CFA Franc</td>
                    <td>XOF</td>
                  </tr>

                  <tr>
                    <td>Kenya</td>
                    <td>Kenyan Shilling</td>
                    <td>KES</td>
                  </tr>

                  <tr>
                    <td>Lesotho</td>
                    <td>Loti</td>
                    <td>LSL</td>
                  </tr>

                  <tr>
                    <td>Liberia</td>
                    <td>Liberian Dollar</td>
                    <td>LRD</td>
                  </tr>

                  <tr>
                    <td>Libya</td>
                    <td>Libyan Dinar</td>
                    <td>LYD</td>
                  </tr>

                  <tr>
                    <td>Madagascar</td>
                    <td>Malagasy Ariary</td>
                    <td>MGA</td>
                  </tr>

                  <tr>
                    <td>Malawi</td>
                    <td>Malawian Kwacha</td>
                    <td>MWK</td>
                  </tr>

                  <tr>
                    <td>Mali</td>
                    <td>West African CFA Franc</td>
                    <td>XOF</td>
                  </tr>

                  <tr>
                    <td>Mauritania</td>
                    <td>Ouguiya</td>
                    <td>MRU</td>
                  </tr>

                  <tr>
                    <td>Mauritius</td>
                    <td>Mauritian Rupee</td>
                    <td>MUR</td>
                  </tr>

                  <tr>
                    <td>Morocco</td>
                    <td>Moroccan Dirham</td>
                    <td>MAD</td>
                  </tr>

                  <tr>
                    <td>Mozambique</td>
                    <td>Metical</td>
                    <td>MZN</td>
                  </tr>

                  <tr>
                    <td>Namibia</td>
                    <td>Namibian Dollar</td>
                    <td>NAD</td>
                  </tr>

                  <tr>
                    <td>Niger</td>
                    <td>West African CFA Franc</td>
                    <td>XOF</td>
                  </tr>

                  <tr>
                    <td>Nigeria</td>
                    <td>Naira</td>
                    <td>NGN</td>
                  </tr>

                  <tr>
                    <td>Rwanda</td>
                    <td>Rwandan Franc</td>
                    <td>RWF</td>
                  </tr>

                  <tr>
                    <td>São Tomé and Príncipe</td>
                    <td>Dobra</td>
                    <td>STN</td>
                  </tr>

                  <tr>
                    <td>Senegal</td>
                    <td>West African CFA Franc</td>
                    <td>XOF</td>
                  </tr>

                  <tr>
                    <td>Seychelles</td>
                    <td>Seychellois Rupee</td>
                    <td>SCR</td>
                  </tr>

                  <tr>
                    <td>Sierra Leone</td>
                    <td>Leone</td>
                    <td>SLE</td>
                  </tr>

                  <tr>
                    <td>Somalia</td>
                    <td>Somali Shilling</td>
                    <td>SOS</td>
                  </tr>

                  <tr>
                    <td>South Africa</td>
                    <td>Rand</td>
                    <td>ZAR</td>
                  </tr>

                  <tr>
                    <td>South Sudan</td>
                    <td>South Sudanese Pound</td>
                    <td>SSP</td>
                  </tr>

                  <tr>
                    <td>Sudan</td>
                    <td>Sudanese Pound</td>
                    <td>SDG</td>
                  </tr>

                  <tr>
                    <td>Tanzania</td>
                    <td>Tanzanian Shilling</td>
                    <td>TZS</td>
                  </tr>

                  <tr>
                    <td>Togo</td>
                    <td>West African CFA Franc</td>
                    <td>XOF</td>
                  </tr>

                  <tr>
                    <td>Tunisia</td>
                    <td>Tunisian Dinar</td>
                    <td>TND</td>
                  </tr>

                  <tr>
                    <td>Uganda</td>
                    <td>Ugandan Shilling</td>
                    <td>UGX</td>
                  </tr>

                  <tr>
                    <td>Zambia</td>
                    <td>Zambian Kwacha</td>
                    <td>ZMW</td>
                  </tr>

                  <tr>
                    <td>Zimbabwe</td>
                    <td>Zimbabwe Gold (ZiG)</td>
                    <td>ZWG</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ====================== AFRICA FACTS ====================== */}

          <section className="motorways-section exa-card">
            <h2>Important Facts About African Currencies</h2>

            <div className="important-grid">
              <div className="important-item">
                🇪🇬 Egypt → Egyptian Pound (EGP)
              </div>

              <div className="important-item">🇳🇬 Nigeria → Naira (NGN)</div>

              <div className="important-item">
                🇰🇪 Kenya → Kenyan Shilling (KES)
              </div>

              <div className="important-item">🇿🇦 South Africa → Rand (ZAR)</div>

              <div className="important-item">
                🇲🇦 Morocco → Moroccan Dirham (MAD)
              </div>

              <div className="important-item">
                🇹🇳 Tunisia → Tunisian Dinar (TND)
              </div>

              <div className="important-item">🇪🇹 Ethiopia → Birr (ETB)</div>

              <div className="important-item">🇬🇭 Ghana → Cedi (GHS)</div>
            </div>

            <div className="note-box">
              <h3>Exam Tip</h3>

              <p>
                Many West and Central African countries share regional
                currencies. Countries such as{" "}
                <strong>
                  Benin, Burkina Faso, Côte d'Ivoire, Guinea-Bissau, Mali,
                  Niger, Senegal and Togo
                </strong>{" "}
                use the <strong>West African CFA Franc (XOF)</strong>, while{" "}
                <strong>
                  Cameroon, Central African Republic, Chad, Republic of the
                  Congo, Equatorial Guinea and Gabon
                </strong>
                use the <strong>Central African CFA Franc (XAF)</strong>. This
                is a common topic in competitive examinations.
              </p>
            </div>
          </section>
          {/* ====================== AMERICAS ====================== */}

          <section id="americas" className="motorways-section exa-card">
            <h2>Countries of the Americas and Their Currencies</h2>

            <p>
              North America, Central America and South America contain more than
              35 sovereign states. Although the US Dollar is the world's
              dominant reserve currency, each country has its own official
              currency except for a few that officially use the US Dollar.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Official Currency</th>

                    <th>ISO Code</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Antigua and Barbuda</td>
                    <td>East Caribbean Dollar</td>
                    <td>XCD</td>
                  </tr>

                  <tr>
                    <td>Argentina</td>
                    <td>Argentine Peso</td>
                    <td>ARS</td>
                  </tr>

                  <tr>
                    <td>Bahamas</td>
                    <td>Bahamian Dollar</td>
                    <td>BSD</td>
                  </tr>

                  <tr>
                    <td>Barbados</td>
                    <td>Barbadian Dollar</td>
                    <td>BBD</td>
                  </tr>

                  <tr>
                    <td>Belize</td>
                    <td>Belize Dollar</td>
                    <td>BZD</td>
                  </tr>

                  <tr>
                    <td>Bolivia</td>
                    <td>Boliviano</td>
                    <td>BOB</td>
                  </tr>

                  <tr>
                    <td>Brazil</td>
                    <td>Brazilian Real</td>
                    <td>BRL</td>
                  </tr>

                  <tr>
                    <td>Canada</td>
                    <td>Canadian Dollar</td>
                    <td>CAD</td>
                  </tr>

                  <tr>
                    <td>Chile</td>
                    <td>Chilean Peso</td>
                    <td>CLP</td>
                  </tr>

                  <tr>
                    <td>Colombia</td>
                    <td>Colombian Peso</td>
                    <td>COP</td>
                  </tr>

                  <tr>
                    <td>Costa Rica</td>
                    <td>Costa Rican Colón</td>
                    <td>CRC</td>
                  </tr>

                  <tr>
                    <td>Cuba</td>
                    <td>Cuban Peso</td>
                    <td>CUP</td>
                  </tr>

                  <tr>
                    <td>Dominica</td>
                    <td>East Caribbean Dollar</td>
                    <td>XCD</td>
                  </tr>

                  <tr>
                    <td>Dominican Republic</td>
                    <td>Dominican Peso</td>
                    <td>DOP</td>
                  </tr>

                  <tr>
                    <td>Ecuador</td>
                    <td>United States Dollar</td>
                    <td>USD</td>
                  </tr>

                  <tr>
                    <td>El Salvador</td>
                    <td>United States Dollar</td>
                    <td>USD</td>
                  </tr>

                  <tr>
                    <td>Grenada</td>
                    <td>East Caribbean Dollar</td>
                    <td>XCD</td>
                  </tr>

                  <tr>
                    <td>Guatemala</td>
                    <td>Quetzal</td>
                    <td>GTQ</td>
                  </tr>

                  <tr>
                    <td>Guyana</td>
                    <td>Guyanese Dollar</td>
                    <td>GYD</td>
                  </tr>

                  <tr>
                    <td>Haiti</td>
                    <td>Gourde</td>
                    <td>HTG</td>
                  </tr>

                  <tr>
                    <td>Honduras</td>
                    <td>Lempira</td>
                    <td>HNL</td>
                  </tr>

                  <tr>
                    <td>Jamaica</td>
                    <td>Jamaican Dollar</td>
                    <td>JMD</td>
                  </tr>

                  <tr>
                    <td>Mexico</td>
                    <td>Mexican Peso</td>
                    <td>MXN</td>
                  </tr>

                  <tr>
                    <td>Nicaragua</td>
                    <td>Córdoba</td>
                    <td>NIO</td>
                  </tr>

                  <tr>
                    <td>Panama</td>
                    <td>Balboa / US Dollar</td>
                    <td>PAB / USD</td>
                  </tr>

                  <tr>
                    <td>Paraguay</td>
                    <td>Guaraní</td>
                    <td>PYG</td>
                  </tr>

                  <tr>
                    <td>Peru</td>
                    <td>Sol</td>
                    <td>PEN</td>
                  </tr>

                  <tr>
                    <td>Saint Kitts and Nevis</td>
                    <td>East Caribbean Dollar</td>
                    <td>XCD</td>
                  </tr>

                  <tr>
                    <td>Saint Lucia</td>
                    <td>East Caribbean Dollar</td>
                    <td>XCD</td>
                  </tr>

                  <tr>
                    <td>Saint Vincent and the Grenadines</td>
                    <td>East Caribbean Dollar</td>
                    <td>XCD</td>
                  </tr>

                  <tr>
                    <td>Suriname</td>
                    <td>Surinamese Dollar</td>
                    <td>SRD</td>
                  </tr>

                  <tr>
                    <td>Trinidad and Tobago</td>
                    <td>Trinidad and Tobago Dollar</td>
                    <td>TTD</td>
                  </tr>

                  <tr>
                    <td>United States</td>
                    <td>US Dollar</td>
                    <td>USD</td>
                  </tr>

                  <tr>
                    <td>Uruguay</td>
                    <td>Uruguayan Peso</td>
                    <td>UYU</td>
                  </tr>

                  <tr>
                    <td>Venezuela</td>
                    <td>Bolívar</td>
                    <td>VES</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ====================== OCEANIA ====================== */}

          <section id="oceania" className="motorways-section exa-card">
            <h2>Oceania Countries and Their Currencies</h2>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Country</th>

                    <th>Official Currency</th>

                    <th>ISO Code</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Australia</td>
                    <td>Australian Dollar</td>
                    <td>AUD</td>
                  </tr>

                  <tr>
                    <td>Fiji</td>
                    <td>Fijian Dollar</td>
                    <td>FJD</td>
                  </tr>

                  <tr>
                    <td>Kiribati</td>
                    <td>Australian Dollar</td>
                    <td>AUD</td>
                  </tr>

                  <tr>
                    <td>Marshall Islands</td>
                    <td>US Dollar</td>
                    <td>USD</td>
                  </tr>

                  <tr>
                    <td>Micronesia</td>
                    <td>US Dollar</td>
                    <td>USD</td>
                  </tr>

                  <tr>
                    <td>Nauru</td>
                    <td>Australian Dollar</td>
                    <td>AUD</td>
                  </tr>

                  <tr>
                    <td>New Zealand</td>
                    <td>New Zealand Dollar</td>
                    <td>NZD</td>
                  </tr>

                  <tr>
                    <td>Palau</td>
                    <td>US Dollar</td>
                    <td>USD</td>
                  </tr>

                  <tr>
                    <td>Papua New Guinea</td>
                    <td>Kina</td>
                    <td>PGK</td>
                  </tr>

                  <tr>
                    <td>Samoa</td>
                    <td>Tala</td>
                    <td>WST</td>
                  </tr>

                  <tr>
                    <td>Solomon Islands</td>
                    <td>Solomon Islands Dollar</td>
                    <td>SBD</td>
                  </tr>

                  <tr>
                    <td>Tonga</td>
                    <td>Paʻanga</td>
                    <td>TOP</td>
                  </tr>

                  <tr>
                    <td>Tuvalu</td>
                    <td>Australian Dollar</td>
                    <td>AUD</td>
                  </tr>

                  <tr>
                    <td>Vanuatu</td>
                    <td>Vatu</td>
                    <td>VUV</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ====================== IMPORTANT FACTS ====================== */}

          <section className="motorways-section exa-card">
            <h2>Quick Currency Facts</h2>

            <div className="important-grid">
              <div className="important-item">
                💵 USD → United States Dollar
              </div>

              <div className="important-item">💶 EUR → Euro</div>

              <div className="important-item">💷 GBP → Pound Sterling</div>

              <div className="important-item">💴 JPY → Japanese Yen</div>

              <div className="important-item">💹 CNY → Chinese Yuan</div>

              <div className="important-item">🇵🇰 PKR → Pakistani Rupee</div>

              <div className="important-item">🇮🇳 INR → Indian Rupee</div>

              <div className="important-item">🇦🇪 AED → UAE Dirham</div>

              <div className="important-item">🇸🇦 SAR → Saudi Riyal</div>

              <div className="important-item">🇨🇭 CHF → Swiss Franc</div>

              <div className="important-item">🇨🇦 CAD → Canadian Dollar</div>

              <div className="important-item">🇦🇺 AUD → Australian Dollar</div>
            </div>

            <div className="note-box">
              <h3>PMA / ISSB Exam Tip</h3>

              <p>
                Questions frequently test countries that use the
                <strong> US Dollar</strong>,<strong> Euro</strong>,
                <strong> CFA Franc</strong>, or have similar currency names such
                as
                <strong> Rupee</strong>,<strong> Rupiah</strong>,
                <strong> Rial</strong>,<strong> Riyal</strong>,
                <strong> Krona</strong>,<strong> Krone</strong>, and
                <strong> Peso</strong>. Focus on these for quick revision.
              </p>
            </div>
          </section>
          {/* ====================== MOST VALUABLE CURRENCIES ====================== */}

          <section className="motorways-section exa-card">
            <h2>Highest-Valued Currencies in the World</h2>

            <p>
              The following currencies are generally regarded among the
              highest-valued currencies by exchange rate. These currencies are
              frequently asked in PMA, ISSB, CSS, FPSC and other competitive
              examinations.
            </p>

            <div className="important-grid">
              <div className="important-item">
                <strong>Kuwaiti Dinar (KWD)</strong>

                <p>
                  Official currency of Kuwait and widely regarded as the world's
                  highest-valued currency.
                </p>
              </div>

              <div className="important-item">
                <strong>Bahraini Dinar (BHD)</strong>

                <p>
                  Official currency of Bahrain and one of the strongest
                  currencies globally.
                </p>
              </div>

              <div className="important-item">
                <strong>Omani Rial (OMR)</strong>

                <p>
                  Official currency of Oman and among the world's most valuable
                  currencies.
                </p>
              </div>

              <div className="important-item">
                <strong>Jordanian Dinar (JOD)</strong>

                <p>
                  Jordan's currency consistently ranks among the highest valued.
                </p>
              </div>

              <div className="important-item">
                <strong>Pound Sterling (GBP)</strong>

                <p>
                  One of the oldest and most influential currencies in
                  international finance.
                </p>
              </div>
            </div>
          </section>

          {/* ====================== RESERVE CURRENCIES ====================== */}

          <section className="motorways-section exa-card">
            <h2>Major Global Reserve Currencies</h2>

            <p>
              Reserve currencies are held by central banks around the world for
              international trade, investment and foreign exchange reserves.
            </p>

            <div className="important-grid">
              <div className="important-item">🇺🇸 US Dollar (USD)</div>

              <div className="important-item">🇪🇺 Euro (EUR)</div>

              <div className="important-item">🇯🇵 Japanese Yen (JPY)</div>

              <div className="important-item">🇬🇧 Pound Sterling (GBP)</div>

              <div className="important-item">🇨🇳 Chinese Yuan (CNY)</div>
            </div>
          </section>

          {/* ====================== CURRENCY SYMBOLS ====================== */}

          <section className="motorways-section exa-card">
            <h2>Common Currency Symbols</h2>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Symbol</th>

                    <th>Currency</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>$</td>

                    <td>Dollar</td>
                  </tr>

                  <tr>
                    <td>€</td>

                    <td>Euro</td>
                  </tr>

                  <tr>
                    <td>£</td>

                    <td>Pound Sterling</td>
                  </tr>

                  <tr>
                    <td>¥</td>

                    <td>Yen / Yuan</td>
                  </tr>

                  <tr>
                    <td>₹</td>

                    <td>Indian Rupee</td>
                  </tr>

                  <tr>
                    <td>₨</td>

                    <td>Pakistani / Nepalese / Sri Lankan Rupee</td>
                  </tr>

                  <tr>
                    <td>₩</td>

                    <td>Won</td>
                  </tr>

                  <tr>
                    <td>₽</td>

                    <td>Russian Ruble</td>
                  </tr>

                  <tr>
                    <td>₺</td>

                    <td>Turkish Lira</td>
                  </tr>

                  <tr>
                    <td>₫</td>

                    <td>Vietnamese Dong</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ====================== CONFUSED CURRENCIES ====================== */}

          <section className="motorways-section exa-card">
            <h2>Frequently Confused Currencies</h2>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Currency Pair</th>

                    <th>Difference</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Yuan vs Yen</td>

                    <td>
                      Yuan is China's currency (CNY), while Yen is Japan's
                      currency (JPY).
                    </td>
                  </tr>

                  <tr>
                    <td>Rupee vs Rupiah</td>

                    <td>
                      Rupee is used by Pakistan, India, Nepal and Sri Lanka,
                      whereas Rupiah is Indonesia's currency.
                    </td>
                  </tr>

                  <tr>
                    <td>Riyal vs Rial</td>

                    <td>
                      Riyal is used by Saudi Arabia and Qatar, while Rial is
                      used by Iran and Oman.
                    </td>
                  </tr>

                  <tr>
                    <td>Krona vs Krone</td>

                    <td>
                      Sweden uses Krona, whereas Denmark and Norway use Krone.
                    </td>
                  </tr>

                  <tr>
                    <td>Dollar vs Peso</td>

                    <td>
                      Several countries use Dollar, while Mexico, Argentina,
                      Chile and others use Peso.
                    </td>
                  </tr>

                  <tr>
                    <td>Franc vs CFA Franc</td>

                    <td>
                      Swiss Franc (CHF) is Switzerland's currency, while XOF and
                      XAF are regional African CFA Francs.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="note-box">
              <h3>PMA / ISSB Tip</h3>

              <p>
                Questions involving currencies with similar names are among the
                most common in competitive examinations. Pay special attention
                to Yuan vs Yen, Riyal vs Rial, Rupee vs Rupiah, and Krone vs
                Krona.
              </p>
            </div>
          </section>

          {/* ====================== PRACTICE MCQS ====================== */}

          <section id="mcqs" className="motorways-section exa-card">
            <h2>Practice MCQs</h2>
            <MCQCard
              question="1. What is the official currency of Pakistan?"
              options={["Rupee", "Pakistani Rupee", "Rial", "Taka"]}
              correct={1}
              explanation="Pakistan's official currency is the Pakistani Rupee (PKR)."
            />

            <MCQCard
              question="2. Which currency is used in Japan?"
              options={["Yuan", "Won", "Yen", "Ringgit"]}
              correct={2}
              explanation="Japan's official currency is the Japanese Yen (JPY)."
            />

            <MCQCard
              question="3. What is the currency of China?"
              options={["Yen", "Won", "Renminbi (Yuan)", "Baht"]}
              correct={2}
              explanation="China's official currency is the Renminbi, commonly called the Yuan (CNY)."
            />

            <MCQCard
              question="4. Which country uses the Euro?"
              options={["Switzerland", "Germany", "Norway", "United Kingdom"]}
              correct={1}
              explanation="Germany uses the Euro (EUR)."
            />

            <MCQCard
              question="5. What is the currency of the United Kingdom?"
              options={["Euro", "Pound Sterling", "Dollar", "Krone"]}
              correct={1}
              explanation="The United Kingdom uses Pound Sterling (GBP)."
            />

            <MCQCard
              question="6. Switzerland uses which currency?"
              options={["Euro", "Swiss Franc", "Krone", "Forint"]}
              correct={1}
              explanation="Switzerland uses the Swiss Franc (CHF), not the Euro."
            />

            <MCQCard
              question="7. What is the currency of India?"
              options={["Rupee", "Rupiah", "Rial", "Taka"]}
              correct={0}
              explanation="India's official currency is the Indian Rupee (INR)."
            />

            <MCQCard
              question="8. Bangladesh uses which currency?"
              options={["Rupee", "Taka", "Kyat", "Dong"]}
              correct={1}
              explanation="Bangladesh uses the Taka (BDT)."
            />

            <MCQCard
              question="9. Which country uses the Baht?"
              options={["Vietnam", "Thailand", "Malaysia", "Cambodia"]}
              correct={1}
              explanation="Thailand's official currency is the Baht (THB)."
            />

            <MCQCard
              question="10. The official currency of Malaysia is:"
              options={["Ringgit", "Peso", "Baht", "Dong"]}
              correct={0}
              explanation="Malaysia uses the Malaysian Ringgit (MYR)."
            />

            <MCQCard
              question="11. Which country uses the Saudi Riyal?"
              options={["Oman", "Saudi Arabia", "Iran", "Qatar"]}
              correct={1}
              explanation="Saudi Arabia's official currency is the Saudi Riyal (SAR)."
            />

            <MCQCard
              question="12. Which currency is used in the United Arab Emirates?"
              options={["Riyal", "Dirham", "Dinar", "Pound"]}
              correct={1}
              explanation="The UAE uses the UAE Dirham (AED)."
            />

            <MCQCard
              question="13. Which country uses the Canadian Dollar?"
              options={["United States", "Australia", "Canada", "New Zealand"]}
              correct={2}
              explanation="Canada's official currency is the Canadian Dollar (CAD)."
            />
            <MCQCard
              question="14. What is the official currency of Australia?"
              options={[
                "Australian Dollar",
                "US Dollar",
                "New Zealand Dollar",
                "Pound Sterling",
              ]}
              correct={0}
              explanation="Australia uses the Australian Dollar (AUD)."
            />

            <MCQCard
              question="15. Which country uses the Brazilian Real?"
              options={["Argentina", "Brazil", "Chile", "Peru"]}
              correct={1}
              explanation="Brazil's official currency is the Brazilian Real (BRL)."
            />

            <MCQCard
              question="16. The currency code PKR stands for:"
              options={[
                "Pakistan Krona",
                "Pakistani Rupee",
                "Pakistan Rial",
                "Pakistan Riyal",
              ]}
              correct={1}
              explanation="PKR is the ISO 4217 code for the Pakistani Rupee."
            />

            <MCQCard
              question="17. Which country uses the Swiss Franc?"
              options={["Austria", "Belgium", "Switzerland", "Germany"]}
              correct={2}
              explanation="Switzerland uses the Swiss Franc (CHF)."
            />

            <MCQCard
              question="18. What is the currency of South Africa?"
              options={["Rand", "Shilling", "Dinar", "Pound"]}
              correct={0}
              explanation="South Africa's currency is the Rand (ZAR)."
            />

            <MCQCard
              question="19. Which country uses the Naira?"
              options={["Kenya", "Nigeria", "Ghana", "Uganda"]}
              correct={1}
              explanation="Nigeria uses the Naira (NGN)."
            />

            <MCQCard
              question="20. The currency code USD belongs to:"
              options={[
                "United Kingdom",
                "United States",
                "Canada",
                "Australia",
              ]}
              correct={1}
              explanation="USD is the ISO code for the United States Dollar."
            />

            <MCQCard
              question="21. Which country uses the Peso?"
              options={["Mexico", "Japan", "China", "Thailand"]}
              correct={0}
              explanation="Mexico uses the Mexican Peso (MXN)."
            />

            <MCQCard
              question="22. Which currency is used in Turkey?"
              options={["Lira", "Rial", "Riyal", "Euro"]}
              correct={0}
              explanation="Turkey uses the Turkish Lira (TRY)."
            />

            <MCQCard
              question="23. Which currency is among the world's highest-valued?"
              options={["US Dollar", "Euro", "Kuwaiti Dinar", "Japanese Yen"]}
              correct={2}
              explanation="The Kuwaiti Dinar (KWD) is generally considered the world's highest-valued currency."
            />

            <MCQCard
              question="24. Which organization defines ISO currency codes?"
              options={["United Nations", "ISO", "IMF", "World Bank"]}
              correct={1}
              explanation="The International Organization for Standardization (ISO) defines ISO 4217 currency codes."
            />

            <MCQCard
              question="25. Which country uses the Yen?"
              options={["China", "South Korea", "Japan", "Vietnam"]}
              correct={2}
              explanation="Japan's official currency is the Japanese Yen (JPY)."
            />
          </section>

          {/* ====================== FAQ ====================== */}

          <section id="faq" className="motorways-section exa-card">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-list">
              <details className="faq-item" open>
                <summary>Which is the world's most traded currency?</summary>

                <p>
                  The United States Dollar (USD) is the world's most traded
                  currency and the primary global reserve currency used in
                  international trade, banking and finance.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which currency has the highest value?</summary>

                <p>
                  The Kuwaiti Dinar (KWD) is generally regarded as the
                  highest-valued currency in the world based on exchange rate
                  against the US Dollar.
                </p>
              </details>

              <details className="faq-item">
                <summary>What is the difference between Yuan and Yen?</summary>

                <p>
                  Yuan (CNY) is the official currency of China, whereas Yen
                  (JPY) is the official currency of Japan. They are two
                  completely different currencies.
                </p>
              </details>

              <details className="faq-item">
                <summary>Which countries use the Euro?</summary>

                <p>
                  Many European Union member states, including Germany, France,
                  Italy, Spain, Portugal, Belgium and the Netherlands, use the
                  Euro (EUR) as their official currency.
                </p>
              </details>

              <details className="faq-item">
                <summary>What does ISO 4217 mean?</summary>

                <p>
                  ISO 4217 is the international standard that assigns
                  three-letter currency codes such as PKR, USD, EUR, GBP, JPY
                  and SAR for use in banking and international transactions.
                </p>
              </details>
            </div>
          </section>
          {/* ====================== QUICK REVISION ====================== */}

          <section className="motorways-section exa-card">
            <h2>Quick Revision</h2>

            <ul className="motorway-list">
              <li>Pakistan → PKR → Pakistani Rupee</li>
              <li>India → INR → Indian Rupee</li>
              <li>China → CNY → Yuan</li>
              <li>Japan → JPY → Yen</li>
              <li>Bangladesh → BDT → Taka</li>
              <li>Saudi Arabia → SAR → Riyal</li>
              <li>UAE → AED → Dirham</li>
              <li>United States → USD → Dollar</li>
              <li>United Kingdom → GBP → Pound Sterling</li>
              <li>Switzerland → CHF → Swiss Franc</li>
              <li>Canada → CAD → Canadian Dollar</li>
              <li>Australia → AUD → Australian Dollar</li>
              <li>South Africa → ZAR → Rand</li>
              <li>Nigeria → NGN → Naira</li>
              <li>Brazil → BRL → Brazilian Real</li>
            </ul>
          </section>

          {/* ====================== EXAM TIPS ====================== */}

          <section className="motorways-section exa-card">
            <h2>PMA / ISSB Preparation Tips</h2>

            <ul className="motorway-list">
              <li>
                Memorize currencies continent-wise instead of learning all
                countries together.
              </li>

              <li>
                Learn important ISO codes such as PKR, USD, EUR, GBP, JPY, CNY,
                SAR and AED.
              </li>

              <li>
                Remember the difference between Yuan & Yen, Riyal & Rial, and
                Rupee & Rupiah.
              </li>

              <li>
                Focus on countries that use the Euro and those that do not.
              </li>

              <li>
                Practice currency-related MCQs regularly for quick recall.
              </li>

              <li>
                Revise the highest-valued and most traded currencies before
                exams.
              </li>
            </ul>
          </section>
        </div>

        {showTop && (
          <button
            className="scroll-top-btn"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <FiArrowUp />
          </button>
        )}
      </main>
      <Footer />
    </>
  );
};

export default WorldCurrencies;
