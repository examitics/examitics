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
    id: "parks",
    title: "National Parks",
    icon: FiLayers,
  },
  {
    id: "wildlife",
    title: "Wildlife",
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

const NationalParksOfPakistan = () => {
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
            National Parks of Pakistan | Complete Guide & MCQs | EXAMITICS
          </title>

          <meta
            name="description"
            content="Study the National Parks of Pakistan including Hingol, Deosai, Khunjerab, Ayubia, Margalla Hills, Lal Suhanra and more with complete notes, MCQs and geography facts for PMA, ISSB, CSS, FPSC and other competitive exams."
          />

          <meta
            name="keywords"
            content="National Parks of Pakistan, Hingol National Park, Deosai National Park, Khunjerab National Park, Ayubia National Park, Pakistan Wildlife, Pakistan Geography Notes, PMA Notes, ISSB Notes, CSS Geography, FPSC GK, EXAMITICS"
          />

          <meta
            property="og:title"
            content="National Parks of Pakistan | EXAMITICS"
          />

          <meta
            property="og:description"
            content="Comprehensive guide to Pakistan's National Parks with wildlife, geography notes and interactive MCQs."
          />

          <meta property="og:type" content="article" />

          <meta
            property="og:url"
            content="https://www.examitics.com/knowledge/general-knowledge/national-parks-of-pakistan"
          />

          <link
            rel="canonical"
            href="https://www.examitics.com/knowledge/general-knowledge/national-parks-of-pakistan"
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
              name: "National Parks of Pakistan",
              url: "https://www.examitics.com/knowledge/general-knowledge/national-parks-of-pakistan",
            },
          ]}
        />
        {/* HERO */}

        <section className="motorways-hero">
          <div className="container-custom">
            <span className="hero-badge">General Knowledge</span>

            <h1>National Parks of Pakistan</h1>

            <p>
              Pakistan's national parks protect some of the country's most
              valuable ecosystems, wildlife, mountains, forests, deserts and
              wetlands. From the vast landscapes of Hingol National Park to the
              snow-covered plains of Deosai and the alpine wilderness of
              Khunjerab, these protected areas preserve biodiversity while
              supporting research, tourism and conservation. This guide is
              specially prepared for PMA, ISSB, CSS, PMS, FPSC, PPSC, ASF, FIA
              and other competitive examinations.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>30+</strong>

                <span>National Parks</span>
              </div>

              <div className="hero-stat">
                <strong>Largest</strong>

                <span>Central Karakoram</span>
              </div>

              <div className="hero-stat">
                <strong>Highest</strong>

                <span>Khunjerab</span>
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
              National parks are legally protected areas established to conserve
              natural ecosystems, wildlife, landscapes and biodiversity.
              Pakistan's national parks safeguard mountains, glaciers, forests,
              deserts, coastal areas, rivers and wetlands while promoting
              scientific research, environmental education and sustainable
              tourism.
            </p>

            <p>
              These protected areas are home to endangered species such as the
              Snow Leopard, Himalayan Brown Bear, Markhor, Musk Deer and
              numerous migratory birds. They also preserve unique geological
              formations, alpine meadows, coastal habitats and freshwater
              ecosystems.
            </p>
          </section>

          {/* IMPORTANT NATIONAL PARKS */}

          <section id="parks" className="motorways-section exa-card">
            <h2>Important National Parks of Pakistan</h2>

            <p>
              Pakistan has more than thirty national parks spread across all
              provinces and territories. Each park protects unique habitats,
              endangered wildlife and significant natural landscapes.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>National Park</th>

                    <th>Province / Territory</th>

                    <th>Famous For</th>

                    <th>Established</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Hingol</td>

                    <td>Balochistan</td>

                    <td>Largest National Park</td>

                    <td>1988</td>
                  </tr>

                  <tr>
                    <td>Central Karakoram</td>

                    <td>Gilgit-Baltistan</td>

                    <td>K2 & Glaciers</td>

                    <td>1993</td>
                  </tr>

                  <tr>
                    <td>Khunjerab</td>

                    <td>Gilgit-Baltistan</td>

                    <td>Snow Leopard & Marco Polo Sheep</td>

                    <td>1975</td>
                  </tr>

                  <tr>
                    <td>Deosai</td>

                    <td>Gilgit-Baltistan</td>

                    <td>Brown Bear</td>

                    <td>1993</td>
                  </tr>

                  <tr>
                    <td>Ayubia</td>

                    <td>Khyber Pakhtunkhwa</td>

                    <td>Temperate Forests</td>

                    <td>1984</td>
                  </tr>

                  <tr>
                    <td>Margalla Hills</td>

                    <td>Islamabad ICT</td>

                    <td>Hiking & Wildlife</td>

                    <td>1980</td>
                  </tr>

                  <tr>
                    <td>Lal Suhanra</td>

                    <td>Punjab</td>

                    <td>Desert Ecosystem</td>

                    <td>1972</td>
                  </tr>

                  <tr>
                    <td>Hazarganji-Chiltan</td>

                    <td>Balochistan</td>

                    <td>Chiltan Markhor</td>

                    <td>1980</td>
                  </tr>

                  <tr>
                    <td>Broghil Valley</td>

                    <td>Khyber Pakhtunkhwa</td>

                    <td>High-Altitude Wetlands</td>

                    <td>2010</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* HINGOL NATIONAL PARK */}

          <section className="motorways-section exa-card">
            <h2>Hingol National Park</h2>

            <p>
              Hingol National Park is located in Lasbela District, Balochistan,
              along the Makran Coastal Highway. It is widely recognized in
              Pakistan General Knowledge as the country's largest national park
              and is famous for its rugged mountains, coastal landscapes, mud
              volcanoes, unique rock formations and diverse wildlife.
            </p>

            <p>
              The park is named after the Hingol River, the largest river in
              Balochistan. It is also home to the famous Princess of Hope rock
              formation and the Hinglaj Mata Temple, an important religious
              pilgrimage site.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Province: Balochistan</li>

                  <li>Established: 1988</li>

                  <li>
                    Largest national park in Pakistan (commonly accepted in GK).
                  </li>

                  <li>Located along the Makran Coast.</li>

                  <li>Contains Hingol River.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Famous Attractions</h3>

                <ul>
                  <li>Princess of Hope.</li>

                  <li>Mud Volcanoes.</li>

                  <li>Hinglaj Mata Temple.</li>

                  <li>Makran Coastal scenery.</li>

                  <li>Wildlife & eco-tourism.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* DEOSAI NATIONAL PARK */}

          <section className="motorways-section exa-card">
            <h2>Deosai National Park</h2>

            <p>
              Deosai National Park is situated in Gilgit-Baltistan between
              Skardu and Astore. It is one of the world's highest alpine
              plateaus and is popularly known as the "Land of Giants."
            </p>

            <p>
              The park was established to protect the endangered Himalayan Brown
              Bear and contains spectacular alpine meadows, rivers, wetlands and
              Sheosar Lake, making it one of Pakistan's most popular tourist
              destinations.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Region: Gilgit-Baltistan</li>

                  <li>Established: 1993</li>

                  <li>Average elevation above 4,000 metres.</li>

                  <li>Known as the Land of Giants.</li>

                  <li>Contains Sheosar Lake.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Famous Wildlife</h3>

                <ul>
                  <li>Himalayan Brown Bear.</li>

                  <li>Golden Marmot.</li>

                  <li>Snow Leopard.</li>

                  <li>Tibetan Wolf.</li>

                  <li>Golden Eagle.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* KHUNJERAB NATIONAL PARK */}

          <section className="motorways-section exa-card">
            <h2>Khunjerab National Park</h2>

            <p>
              Khunjerab National Park lies in the extreme north of
              Gilgit-Baltistan along the Pakistan–China border. It surrounds the
              famous Khunjerab Pass and protects one of the country's most
              fragile high-mountain ecosystems.
            </p>

            <p>
              The park is internationally important for conserving endangered
              species such as the Snow Leopard, Marco Polo Sheep, Himalayan Ibex
              and Blue Sheep. It is also crossed by the Karakoram Highway.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Region: Gilgit-Baltistan</li>

                  <li>Established: 1975</li>

                  <li>Near Khunjerab Pass.</li>

                  <li>Pakistan-China border.</li>

                  <li>High-altitude ecosystem.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Protected Wildlife</h3>

                <ul>
                  <li>Snow Leopard.</li>

                  <li>Marco Polo Sheep.</li>

                  <li>Himalayan Ibex.</li>

                  <li>Blue Sheep.</li>

                  <li>Golden Eagle.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AYUBIA NATIONAL PARK */}

          <section className="motorways-section exa-card">
            <h2>Ayubia National Park</h2>

            <p>
              Ayubia National Park is located in Abbottabad District, Khyber
              Pakhtunkhwa. It is famous for its dense temperate forests, hiking
              trails, cool climate and exceptional biodiversity.
            </p>

            <p>
              The park is one of Pakistan's most visited protected areas and is
              renowned for the Ayubia Pipeline Track, which offers spectacular
              views of the surrounding mountains and forests.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Province: Khyber Pakhtunkhwa</li>

                  <li>Established: 1984</li>

                  <li>Temperate forests.</li>

                  <li>Popular tourist destination.</li>

                  <li>Pipeline Track.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Wildlife</h3>

                <ul>
                  <li>Common Leopard.</li>

                  <li>Black Bear.</li>

                  <li>Barking Deer.</li>

                  <li>Flying Squirrel.</li>

                  <li>Numerous bird species.</li>
                </ul>
              </div>
            </div>
          </section>
          {/* LAL SUHANRA NATIONAL PARK */}

          <section className="motorways-section exa-card">
            <h2>Lal Suhanra National Park</h2>

            <p>
              Lal Suhanra National Park is located about 35 km east of
              Bahawalpur in Punjab. It is one of South Asia's earliest national
              parks and is unique because it protects desert, forest and wetland
              ecosystems within a single protected area.
            </p>

            <p>
              The park provides habitat for numerous mammals, reptiles and
              migratory birds. It is also an important destination for
              environmental education and wildlife conservation.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Province: Punjab</li>

                  <li>Established: 1972</li>

                  <li>Near Bahawalpur.</li>

                  <li>Desert, forest & wetland ecosystems.</li>

                  <li>Among Pakistan's earliest national parks.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Famous Wildlife</h3>

                <ul>
                  <li>Chinkara.</li>

                  <li>Blackbuck (reintroduction).</li>

                  <li>Wild Boar.</li>

                  <li>Jackal.</li>

                  <li>Migratory Birds.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CENTRAL KARAKORAM NATIONAL PARK */}

          <section className="motorways-section exa-card">
            <h2>Central Karakoram National Park</h2>

            <p>
              Central Karakoram National Park (CKNP) is situated in
              Gilgit-Baltistan and is one of the world's largest high-mountain
              protected areas. It contains K2, Broad Peak, Gasherbrum peaks and
              some of the largest glaciers outside the polar regions.
            </p>

            <p>
              The park plays a vital role in protecting glaciers, alpine
              ecosystems and endangered mountain wildlife, while also supporting
              mountaineering and scientific research.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Region: Gilgit-Baltistan</li>

                  <li>Established: 1993</li>

                  <li>Includes K2.</li>

                  <li>Baltoro Glacier.</li>

                  <li>High-altitude protected area.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Importance</h3>

                <ul>
                  <li>Glacier conservation.</li>

                  <li>Snow Leopard habitat.</li>

                  <li>Mountaineering.</li>

                  <li>Climate research.</li>

                  <li>Biodiversity protection.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* MARGALLA HILLS NATIONAL PARK */}

          <section className="motorways-section exa-card">
            <h2>Margalla Hills National Park</h2>

            <p>
              Margalla Hills National Park is located in Islamabad Capital
              Territory at the foothills of the Himalayas. It is one of
              Pakistan's most visited protected areas, attracting hikers, nature
              lovers and wildlife enthusiasts throughout the year.
            </p>

            <p>
              The park contains forests, hiking trails, viewpoints, streams and
              a wide variety of birds and mammals, making it an important
              ecological asset for the federal capital.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Region: Islamabad Capital Territory</li>

                  <li>Established: 1980</li>

                  <li>Foothills of the Himalayas.</li>

                  <li>Popular hiking destination.</li>

                  <li>Near Faisal Mosque.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Wildlife</h3>

                <ul>
                  <li>Leopard.</li>

                  <li>Barking Deer.</li>

                  <li>Wild Boar.</li>

                  <li>Rhesus Monkey.</li>

                  <li>Hundreds of bird species.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* BROGHIL NATIONAL PARK */}

          <section className="motorways-section exa-card">
            <h2>Broghil National Park</h2>

            <p>
              Broghil National Park is located in Upper Chitral, Khyber
              Pakhtunkhwa, close to the Wakhan Corridor of Afghanistan. The park
              is famous for its alpine meadows, glaciers, wetlands and numerous
              natural lakes.
            </p>

            <p>
              It supports several rare mountain species and plays an important
              role in protecting high-altitude biodiversity in northern
              Pakistan.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Province: Khyber Pakhtunkhwa</li>

                  <li>Established: 2010</li>

                  <li>Upper Chitral.</li>

                  <li>High-altitude wetlands.</li>

                  <li>Natural lakes.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Wildlife</h3>

                <ul>
                  <li>Snow Leopard.</li>

                  <li>Ibex.</li>

                  <li>Blue Sheep.</li>

                  <li>Golden Eagle.</li>

                  <li>Wolf.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* HAZARGANJI-CHILTAN NATIONAL PARK */}

          <section className="motorways-section exa-card">
            <h2>Hazarganji-Chiltan National Park</h2>

            <p>
              Hazarganji-Chiltan National Park is situated near Quetta in
              Balochistan. It was established primarily to protect the
              endangered Chiltan Markhor, a rare wild goat found only in this
              region.
            </p>

            <p>
              The park also contains juniper woodlands, rugged mountains and
              diverse wildlife, making it one of Balochistan's most important
              protected areas.
            </p>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Key Facts</h3>

                <ul>
                  <li>Province: Balochistan</li>

                  <li>Near Quetta.</li>

                  <li>Established: 1980</li>

                  <li>Mountain ecosystem.</li>

                  <li>Juniper forests.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Protected Species</h3>

                <ul>
                  <li>Chiltan Markhor.</li>

                  <li>Urial.</li>

                  <li>Wolf.</li>

                  <li>Fox.</li>

                  <li>Golden Eagle.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* IMPORTANT FACTS */}

          <section className="motorways-section exa-card">
            <h2>Important Facts About Pakistan's National Parks</h2>

            <div className="important-grid">
              <div className="important-item">
                🌿 Pakistan has more than 30 national parks.
              </div>

              <div className="important-item">
                🏔️ Central Karakoram National Park includes K2.
              </div>

              <div className="important-item">
                🐻 Deosai National Park protects the Himalayan Brown Bear.
              </div>

              <div className="important-item">
                🐆 Khunjerab National Park is famous for the Snow Leopard.
              </div>

              <div className="important-item">
                🌊 Hingol National Park includes coastal, river and mountain
                ecosystems.
              </div>

              <div className="important-item">
                🌲 Ayubia National Park is known for temperate forests.
              </div>
            </div>
          </section>
          {/* WILDLIFE */}

          <section id="wildlife" className="motorways-section exa-card">
            <h2>Important Wildlife Found in Pakistan's National Parks</h2>

            <p>
              Pakistan's national parks protect hundreds of mammals, birds,
              reptiles and plant species. Many endangered animals survive today
              because these protected areas preserve their natural habitats.
            </p>

            <div className="motorway-table-wrapper">
              <table className="motorway-table">
                <thead>
                  <tr>
                    <th>Species</th>

                    <th>Common National Parks</th>

                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Snow Leopard</td>
                    <td>Khunjerab, Central Karakoram, Broghil</td>
                    <td>Endangered</td>
                  </tr>

                  <tr>
                    <td>Himalayan Brown Bear</td>
                    <td>Deosai</td>
                    <td>Protected</td>
                  </tr>

                  <tr>
                    <td>Markhor</td>
                    <td>Hazarganji-Chiltan</td>
                    <td>Protected</td>
                  </tr>

                  <tr>
                    <td>Himalayan Ibex</td>
                    <td>Khunjerab, Broghil</td>
                    <td>Protected</td>
                  </tr>

                  <tr>
                    <td>Golden Eagle</td>
                    <td>Northern National Parks</td>
                    <td>Protected</td>
                  </tr>

                  <tr>
                    <td>Leopard</td>
                    <td>Ayubia, Margalla Hills</td>
                    <td>Protected</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* IMPORTANCE */}

          <section id="importance" className="motorways-section exa-card">
            <h2>Importance of National Parks</h2>

            <div className="motorway-cards">
              <div className="motorway-card">
                <h3>Environmental Importance</h3>

                <ul>
                  <li>Protect biodiversity.</li>

                  <li>Conserve endangered species.</li>

                  <li>Preserve forests and glaciers.</li>

                  <li>Reduce habitat destruction.</li>

                  <li>Support climate resilience.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Economic Importance</h3>

                <ul>
                  <li>Eco-tourism.</li>

                  <li>Employment opportunities.</li>

                  <li>Scientific research.</li>

                  <li>Sustainable development.</li>

                  <li>Foreign tourism.</li>
                </ul>
              </div>

              <div className="motorway-card">
                <h3>Educational Importance</h3>

                <ul>
                  <li>Wildlife research.</li>

                  <li>Environmental awareness.</li>

                  <li>Geography studies.</li>

                  <li>Conservation education.</li>

                  <li>Student field visits.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}

          <section id="faq" className="motorways-section exa-card">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-list">
              <details className="faq-item" open>
                <summary>
                  Which is the largest national park of Pakistan?
                </summary>

                <p>
                  Hingol National Park is widely regarded in Pakistan General
                  Knowledge as the country's largest national park.
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  Which national park protects the Himalayan Brown Bear?
                </summary>

                <p>Deosai National Park.</p>
              </details>

              <details className="faq-item">
                <summary>Which national park contains K2?</summary>

                <p>Central Karakoram National Park.</p>
              </details>

              <details className="faq-item">
                <summary>
                  Which national park is located near Islamabad?
                </summary>

                <p>Margalla Hills National Park.</p>
              </details>

              <details className="faq-item">
                <summary>
                  Which national park is famous for the Snow Leopard?
                </summary>

                <p>Khunjerab National Park.</p>
              </details>
            </div>
          </section>

          {/* PRACTICE MCQS */}

          <section className="motorways-section exa-card">
            <h2>Practice MCQs</h2>

            <MCQCard
              question="Which is the largest national park of Pakistan?"
              options={["Ayubia", "Hingol", "Khunjerab", "Deosai"]}
              correct={1}
              explanation="Hingol National Park is commonly accepted as Pakistan's largest national park."
            />

            <MCQCard
              question="Deosai National Park is famous for protecting:"
              options={["Snow Leopard", "Brown Bear", "Markhor", "Ibex"]}
              correct={1}
              explanation="Deosai National Park protects the Himalayan Brown Bear."
            />

            <MCQCard
              question="Khunjerab National Park is located in:"
              options={["Punjab", "Gilgit-Baltistan", "Sindh", "Balochistan"]}
              correct={1}
              explanation="Khunjerab National Park is located in Gilgit-Baltistan."
            />

            <MCQCard
              question="Which national park includes K2?"
              options={[
                "Ayubia",
                "Central Karakoram",
                "Hingol",
                "Margalla Hills",
              ]}
              correct={1}
              explanation="K2 lies within Central Karakoram National Park."
            />

            <MCQCard
              question="Ayubia National Park is located in:"
              options={["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"]}
              correct={2}
              explanation="Ayubia National Park is located in Abbottabad, Khyber Pakhtunkhwa."
            />

            <MCQCard
              question="Lal Suhanra National Park is situated near:"
              options={["Quetta", "Bahawalpur", "Skardu", "Islamabad"]}
              correct={1}
              explanation="Lal Suhanra National Park is located near Bahawalpur."
            />

            <MCQCard
              question="Margalla Hills National Park is located in:"
              options={["Islamabad", "Murree", "Peshawar", "Lahore"]}
              correct={0}
              explanation="Margalla Hills National Park is located in Islamabad."
            />

            <MCQCard
              question="Which national park is famous for the Chiltan Markhor?"
              options={["Khunjerab", "Hazarganji-Chiltan", "Ayubia", "Broghil"]}
              correct={1}
              explanation="Hazarganji-Chiltan National Park protects the Chiltan Markhor."
            />

            <MCQCard
              question="The Snow Leopard is commonly associated with:"
              options={["Khunjerab", "Lal Suhanra", "Margalla Hills", "Hingol"]}
              correct={0}
              explanation="Khunjerab National Park is famous for the Snow Leopard."
            />

            <MCQCard
              question="Broghil National Park is located in:"
              options={["Sindh", "Punjab", "Khyber Pakhtunkhwa", "Balochistan"]}
              correct={2}
              explanation="Broghil National Park is located in Upper Chitral, Khyber Pakhtunkhwa."
            />
          </section>

          {/* QUICK REVISION */}

          <section className="motorways-section revision-box">
            <h2>Quick Revision</h2>

            <div className="revision-grid">
              <div>
                <strong>Largest Park</strong>
                <span>Hingol</span>
              </div>

              <div>
                <strong>Brown Bear</strong>
                <span>Deosai</span>
              </div>

              <div>
                <strong>Snow Leopard</strong>
                <span>Khunjerab</span>
              </div>

              <div>
                <strong>K2</strong>
                <span>Central Karakoram</span>
              </div>

              <div>
                <strong>Islamabad</strong>
                <span>Margalla Hills</span>
              </div>

              <div>
                <strong>Punjab</strong>
                <span>Lal Suhanra</span>
              </div>

              <div>
                <strong>Temperate Forests</strong>
                <span>Ayubia</span>
              </div>

              <div>
                <strong>Chiltan Markhor</strong>
                <span>Hazarganji-Chiltan</span>
              </div>
            </div>
          </section>

          {/* PMA TIPS */}

          <section className="motorways-section exa-card">
            <h2>PMA / ISSB Exam Tips</h2>

            <p>
              Questions related to National Parks of Pakistan are regularly
              asked in PMA Long Course, ISSB, CSS, PMS, FPSC, PPSC, ASF, FIA and
              other competitive examinations. Candidates should memorize each
              important park with its province, famous wildlife and unique
              features.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NationalParksOfPakistan;
