import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiPercent,
  FiActivity,
  FiBarChart2,
  FiHash,
  FiRefreshCw,
  FiGrid,
  FiBookOpen,
  FiTarget,
  FiTool,
  FiCheck,
} from "react-icons/fi";

import "../styles/more.css";

const services = [
  {
  id: "bmi-calculator",
  title: "BMI Calculator",
  description:
    "Calculate your Body Mass Index (BMI), check your BMI category, and understand your healthy weight range.",
  icon: FiActivity,
  category: "Health & Fitness",
  path: "/more/bmi-calculator",
  status: "Available",
},
    {
    id: "age-calculator",
    title: "Age Calculator",
    description:
      "Calculate your exact age in years, months, days, hours and minutes from your date of birth.",
    icon: FiCalendar,
    category: "Date & Time",
    path: "/more/age-calculator",
    status: "Available",
  },
  {
    id: "unit-converter",
    title: "Unit Converter",
    description:
      "Convert common units of length, weight, temperature, time and other measurements.",
    icon: FiRefreshCw,
    category: "Conversion Tools",
    path: "/more/unit-converter",
    status: "Available",
  },
  {
    id: "percentage-calculator",
    title: "Percentage Calculator",
    description:
      "Calculate percentages quickly for exams, studies, marks, results, discounts and everyday calculations.",
    icon: FiPercent,
    category: "Math Tools",
    path: "/more/percentage-calculator",
    status: "Available",
  },
  {
    id: "gpa-calculator",
    title: "GPA Calculator",
    description:
      "Calculate your GPA from course grades and credit hours with an easy-to-use online calculator.",
    icon: FiBarChart2,
    category: "Student Tools",
    path: "/more/gpa-calculator",
    status: "Available",
  },
//   {
//     id: "grade-calculator",
//     title: "Grade Calculator",
//     description:
//       "Calculate grades and understand your academic percentage and performance from your marks.",
//     icon: FiTarget,
//     category: "Student Tools",
//     path: "/more/grade-calculator",
//     status: "Coming Soon",
//   },
//   {
//     id: "date-calculator",
//     title: "Date Calculator",
//     description:
//       "Calculate the difference between two dates and find dates by adding or subtracting days.",
//     icon: FiClock,
//     category: "Date & Time",
//     path: "/more/date-calculator",
//     status: "Coming Soon",
//   },
//   {
//     id: "time-calculator",
//     title: "Time Calculator",
//     description:
//       "Calculate time differences and perform hours, minutes and seconds calculations online.",
//     icon: FiClock,
//     category: "Date & Time",
//     path: "/more/time-calculator",
//     status: "Coming Soon",
//   },
//   {
//     id: "average-calculator",
//     title: "Average Calculator",
//     description:
//       "Calculate the average of numbers quickly for school, university, exams and everyday use.",
//     icon: FiGrid,
//     category: "Math Tools",
//     path: "/more/average-calculator",
//     status: "Coming Soon",
//   },
//   {
//     id: "discount-calculator",
//     title: "Discount Calculator",
//     description:
//       "Calculate discounts, sale prices and savings quickly using percentage-based calculations.",
//     icon: FiPercent,
//     category: "Everyday Tools",
//     path: "/more/discount-calculator",
//     status: "Coming Soon",
//   },
//   {
//     id: "ratio-calculator",
//     title: "Ratio Calculator",
//     description:
//       "Simplify ratios and calculate equivalent ratios for mathematics, study and everyday problems.",
//     icon: FiHash,
//     category: "Math Tools",
//     path: "/more/ratio-calculator",
//     status: "Coming Soon",
//   },
  
//   {
//     id: "study-tools",
//     title: "Study Tools",
//     description:
//       "Explore useful online tools designed to support students, learners and exam preparation.",
//     icon: FiBookOpen,
//     category: "Education",
//     path: "/more/study-tools",
//     status: "Coming Soon",
//   },
];

const More = () => {
  return (
    <>
      <Helmet>
        <title>
          Free Online Tools & Calculators | EXAMITICS
        </title>

        <meta
          name="description"
          content="Explore free online tools and calculators from EXAMITICS. Calculate age, percentages, GPA, grades, dates, BMI, averages, discounts, ratios and more."
        />

        <meta
          name="keywords"
          content="online calculators, free online tools, age calculator, percentage calculator, GPA calculator, grade calculator, date calculator, BMI calculator, average calculator, discount calculator, ratio calculator, unit converter, EXAMITICS"
        />

        <meta name="author" content="EXAMITICS" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        <link
          rel="canonical"
          href="https://www.examitics.com/more"
        />

        <meta
          property="og:title"
          content="Free Online Tools & Calculators | EXAMITICS"
        />

        <meta
          property="og:description"
          content="Use free online calculators and useful tools from EXAMITICS for students, learners and everyday calculations."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_PK" />

        <meta
          property="og:url"
          content="https://www.examitics.com/more"
        />

        <meta
          property="og:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Free Online Tools & Calculators | EXAMITICS"
        />

        <meta
          name="twitter:description"
          content="Explore free online calculators and useful tools from EXAMITICS."
        />

        <meta
          name="twitter:image"
          content="https://www.examitics.com/images/examitics-banner.png"
        />
      </Helmet>

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.examitics.com/",
          },
          {
            name: "More Tools",
            url: "https://www.examitics.com/more",
          },
        ]}
      />

      <Navbar />

      <main className="more-page">
        <div className="container-custom">

          {/* =========================================
              HERO
          ========================================= */}

          <section className="more-hero">

            <div className="more-hero-badge">
              <FiTool />
              <span>EXAMITICS TOOLS</span>
            </div>

            <h1>
              Free Online Tools &amp; Calculators
            </h1>

            <p>
              Explore useful online calculators and tools designed for
              students, learners, professionals and everyday use.
            </p>

          </section>


          {/* =========================================
              SERVICE INTRO
          ========================================= */}

          <section className="more-intro">

            <div className="more-intro-icon">
              <FiGrid />
            </div>

            <div>
              <h2>
                Useful Tools in One Place
              </h2>

              <p>
                EXAMITICS is expanding beyond exam preparation with
                practical online tools that are simple, fast and
                accessible from any device.
              </p>
            </div>

          </section>


          {/* =========================================
              SERVICES
          ========================================= */}

          <section className="more-services">

            <div className="more-section-heading">

              <div>
                <span className="more-section-label">
                  EXPLORE TOOLS
                </span>

                <h2>
                  More Services from EXAMITICS
                </h2>
              </div>

              <p>
                Select a tool to start.
              </p>

            </div>


            <div className="more-services-grid">

              {services.map((service) => {

                const Icon = service.icon;

                const isAvailable =
                  service.status === "Available";

                return (
                  <div
                    className={`more-service-card ${
                      !isAvailable
                        ? "more-service-disabled"
                        : ""
                    }`}
                    key={service.id}
                  >

                    {/* CARD TOP */}

                    <div className="more-service-top">

                      <div className="more-service-icon">
                        <Icon />
                      </div>

                      <span
                        className={`more-service-status ${
                          isAvailable
                            ? "available"
                            : "coming-soon"
                        }`}
                      >
                        {service.status}
                      </span>

                    </div>


                    {/* CONTENT */}

                    <div className="more-service-content">

                      <span className="more-service-category">
                        {service.category}
                      </span>

                      <h3>
                        {service.title}
                      </h3>

                      <p>
                        {service.description}
                      </p>

                    </div>


                    {/* ACTION */}

                    <div className="more-service-action">

                      {isAvailable ? (
                        <Link
                          to={service.path}
                          className="more-service-btn"
                        >
                          <span>
                            Use Tool
                          </span>

                          <FiArrowRight />
                        </Link>
                      ) : (
                        <span className="more-coming-btn">
                          Coming Soon
                        </span>
                      )}

                    </div>

                  </div>
                );
              })}

            </div>

          </section>


          {/* =========================================
              SEO CONTENT
          ========================================= */}

          <section className="more-seo-section">

            <div className="more-seo-content">

              <span className="more-section-label">
                EXAMITICS ONLINE TOOLS
              </span>

              <h2>
                Free Tools for Students and Everyday Use
              </h2>

              <p>
                EXAMITICS provides free online tools designed to make
                common calculations easier and faster. Whether you
                need to calculate your age, percentage, GPA, grade,
                date difference or another everyday calculation,
                our tools are designed with a simple and
                user-friendly interface.
              </p>

              <p>
                New calculators and useful services will continue to
                be added to this section. Each tool is designed to
                work directly in your browser without unnecessary
                steps or complicated interfaces.
              </p>

            </div>

            <div className="more-seo-points">

              <div>
                <FiCheck />
                <span>Free to use</span>
              </div>

              <div>
                <FiCheck />
                <span>Simple and easy interface</span>
              </div>

              <div>
                <FiCheck />
                <span>Works on mobile and desktop</span>
              </div>

              <div>
                <FiCheck />
                <span>Useful for students and everyday use</span>
              </div>

            </div>

          </section>


          {/* =========================================
              CTA
          ========================================= */}

          <section className="more-bottom-cta">

            <div>

              <span className="more-section-label">
                MORE FROM EXAMITICS
              </span>

              <h2>
                Prepare, Practice &amp; Learn
              </h2>

              <p>
                Explore EXAMITICS mock tests, notes and knowledge
                resources alongside our new online tools.
              </p>

            </div>

            <div className="more-bottom-actions">

              <Link
                to="/mock"
                className="exa-btn exa-btn-primary"
              >
                Practice Mock Tests
                <FiArrowRight />
              </Link>

              <Link
                to="/knowledgehub"
                className="exa-btn exa-btn-outline"
              >
                Knowledge Hub
                <FiArrowRight />
              </Link>

            </div>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default More;