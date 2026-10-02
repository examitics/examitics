import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

import {
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiInfo,
  FiRefreshCw,
  FiBookOpen,
} from "react-icons/fi";

import "../styles/age-calculator.css";


/* =========================================================
   HELPERS
========================================================= */

const getToday = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};


const getDateFromInput = (value) => {
  if (!value) return null;

  const [year, month, day] = value.split("-").map(Number);

  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
};


const isFutureDate = (date) => {
  if (!date) return false;

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return date > today;
};


const daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};


/* =========================================================
   AGE CALCULATION
========================================================= */

const calculateAge = (birthDate, todayDate) => {
  if (!birthDate || !todayDate) return null;

  let years = todayDate.getFullYear() - birthDate.getFullYear();

  let months = todayDate.getMonth() - birthDate.getMonth();

  let days = todayDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;

    const previousMonthDays = new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      0
    ).getDate();

    days += previousMonthDays;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years < 0) {
    return null;
  }

  const totalMilliseconds =
    todayDate.getTime() - birthDate.getTime();

  const totalDays = Math.floor(
    totalMilliseconds / (1000 * 60 * 60 * 24)
  );

  const totalWeeks = Math.floor(totalDays / 7);

  const totalHours = Math.floor(
    totalMilliseconds / (1000 * 60 * 60)
  );

  const totalMinutes = Math.floor(
    totalMilliseconds / (1000 * 60)
  );

  const totalSeconds = Math.floor(
    totalMilliseconds / 1000
  );

  const nextBirthday = new Date(
    todayDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (nextBirthday < todayDate) {
    nextBirthday.setFullYear(
      todayDate.getFullYear() + 1
    );
  }

  const millisecondsToBirthday =
    nextBirthday.getTime() - todayDate.getTime();

  const daysUntilBirthday = Math.ceil(
    millisecondsToBirthday /
      (1000 * 60 * 60 * 24)
  );

  return {
    years,
    months,
    days,
    totalDays,
    totalWeeks,
    totalHours,
    totalMinutes,
    totalSeconds,
    nextBirthday,
    daysUntilBirthday,
  };
};


/* =========================================================
   FORMAT DATE
========================================================= */

const formatDate = (date) => {
  if (!date) return "";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};


/* =========================================================
   COMPONENT
========================================================= */

const AgeCalculator = () => {
  const today = getToday();

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [calculateUntil, setCalculateUntil] = useState(today);

  const [error, setError] = useState("");

  const birthDateObject = useMemo(
    () => getDateFromInput(dateOfBirth),
    [dateOfBirth]
  );

  const endDateObject = useMemo(
    () => getDateFromInput(calculateUntil),
    [calculateUntil]
  );

  const result = useMemo(() => {
    if (!birthDateObject || !endDateObject) {
      return null;
    }

    if (isFutureDate(birthDateObject)) {
      return null;
    }

    if (endDateObject < birthDateObject) {
      return null;
    }

    return calculateAge(
      birthDateObject,
      endDateObject
    );
  }, [birthDateObject, endDateObject]);


  /* =========================================================
     CALCULATE
  ========================================================= */

  const handleCalculate = () => {
    setError("");

    if (!dateOfBirth) {
      setError("Please enter your date of birth.");
      return;
    }

    if (!birthDateObject) {
      setError("Please enter a valid date of birth.");
      return;
    }

    if (isFutureDate(birthDateObject)) {
      setError(
        "Date of birth cannot be in the future."
      );
      return;
    }

    if (!calculateUntil) {
      setError(
        "Please select the date you want to calculate your age until."
      );
      return;
    }

    if (!endDateObject) {
      setError("Please enter a valid calculation date.");
      return;
    }

    if (endDateObject < birthDateObject) {
      setError(
        "The calculation date must be after your date of birth."
      );
      return;
    }

    document
      .getElementById("age-result")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };


  /* =========================================================
     RESET
  ========================================================= */

  const handleReset = () => {
    setDateOfBirth("");
    setCalculateUntil(today);
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>

        <title>
          Age Calculator – Calculate Your Exact Age | EXAMITICS
        </title>

        <meta
          name="description"
          content="Use the free EXAMITICS Age Calculator to calculate your exact age in years, months and days. Find your total days, weeks, hours, minutes and upcoming birthday from your date of birth."
        />

        <meta
          name="keywords"
          content="age calculator, calculate age, age calculator from date of birth, exact age calculator, how old am I, date of birth calculator, age in years months days, calculate age online, birthday calculator, age between two dates"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="author"
          content="EXAMITICS"
        />

        <meta
          name="language"
          content="English"
        />

        <link
          rel="canonical"
          href="https://www.examitics.com/more/age-calculator"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="Age Calculator – Calculate Your Exact Age | EXAMITICS"
        />

        <meta
          property="og:description"
          content="Calculate your exact age in years, months and days with the free EXAMITICS Age Calculator."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="EXAMITICS"
        />

        <meta
          property="og:url"
          content="https://www.examitics.com/more/age-calculator"
        />

        <meta
          property="og:locale"
          content="en_PK"
        />

        {/* Twitter */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Age Calculator – Calculate Your Exact Age | EXAMITICS"
        />

        <meta
          name="twitter:description"
          content="Calculate your exact age in years, months and days using the free EXAMITICS Age Calculator."
        />

        {/* WebPage schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Age Calculator",
            description:
              "Free online age calculator for calculating exact age from date of birth.",
            url:
              "https://www.examitics.com/more/age-calculator",
            publisher: {
              "@type": "Organization",
              name: "EXAMITICS",
              url: "https://www.examitics.com",
            },
          })}
        </script>

        {/* WebApplication schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "EXAMITICS Age Calculator",
            url:
              "https://www.examitics.com/more/age-calculator",
            applicationCategory:
              "UtilitiesApplication",
            operatingSystem: "Any",
            description:
              "A free online calculator that calculates exact age from date of birth.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          })}
        </script>

        {/* FAQ Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How does the age calculator work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "The age calculator calculates the difference between your date of birth and a selected calculation date. It reports the result in completed years, months and days.",
                },
              },
              {
                "@type": "Question",
                name: "Can I calculate my exact age?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The calculator calculates your age in years, months and days and also provides total days, weeks, hours, minutes and seconds.",
                },
              },
              {
                "@type": "Question",
                name: "Can I calculate my age on a past or future date?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. You can select the date on which you want to calculate your age, provided that the selected date is not earlier than your date of birth.",
                },
              },
              {
                "@type": "Question",
                name: "Is the EXAMITICS Age Calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The EXAMITICS Age Calculator is available as a free online tool.",
                },
              },
            ],
          })}
        </script>

      </Helmet>


      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.examitics.com/",
          },
          {
            name: "More",
            url: "https://www.examitics.com/more",
          },
          {
            name: "Age Calculator",
            url:
              "https://www.examitics.com/more/age-calculator",
          },
        ]}
      />


      <Navbar />


      <main className="age-calculator-page">

        <div className="container-custom">

          {/* =================================================
              HERO
          ================================================= */}

          <section className="age-hero">

            <div className="age-badge">
              <FiCalendar />
              <span>FREE ONLINE TOOL</span>
            </div>

            <h1>
              Age Calculator
            </h1>

            <p>
              Calculate your exact age in years, months and
              days from your date of birth. You can also find
              your total days, weeks, hours and upcoming
              birthday.
            </p>

          </section>


          {/* =================================================
              CALCULATOR
          ================================================= */}

          <section className="age-calculator-card">

            <div className="age-calculator-header">

              <div className="age-calculator-icon">
                <FiCalendar />
              </div>

              <div>
                <h2>
                  Calculate Your Age
                </h2>

                <p>
                  Enter your date of birth to calculate
                  your exact age.
                </p>
              </div>

            </div>


            <div className="age-form">

              {/* DATE OF BIRTH */}

              <div className="age-form-group">

                <label htmlFor="date-of-birth">
                  Date of Birth
                </label>

                <div className="age-input-wrapper">

                  <FiCalendar />

                  <input
                    id="date-of-birth"
                    type="date"
                    value={dateOfBirth}
                    max={today}
                    onChange={(e) => {
                      setDateOfBirth(
                        e.target.value
                      );
                      setError("");
                    }}
                  />

                </div>

              </div>


              {/* CALCULATE UNTIL */}

              <div className="age-form-group">

                <label htmlFor="calculate-until">
                  Calculate Age Until
                </label>

                <div className="age-input-wrapper">

                  <FiCalendar />

                  <input
                    id="calculate-until"
                    type="date"
                    value={calculateUntil}
                    min={dateOfBirth || undefined}
                    onChange={(e) => {
                      setCalculateUntil(
                        e.target.value
                      );
                      setError("");
                    }}
                  />

                </div>

                <span className="age-input-help">
                  Today is selected by default.
                </span>

              </div>

            </div>


            {/* ERROR */}

            {error && (
              <div className="age-error">
                <FiInfo />
                <span>{error}</span>
              </div>
            )}


            {/* ACTIONS */}

            <div className="age-actions">

              <button
                type="button"
                className="age-calculate-btn"
                onClick={handleCalculate}
              >
                Calculate Age
                <FiArrowRight />
              </button>

              <button
                type="button"
                className="age-reset-btn"
                onClick={handleReset}
              >
                <FiRefreshCw />
                Reset
              </button>

            </div>

          </section>


          {/* =================================================
              RESULT
          ================================================= */}

          <section
            id="age-result"
            className={`age-result ${
              result
                ? "age-result-visible"
                : ""
            }`}
          >

            <div className="age-result-heading">

              <span className="more-section-label">
                YOUR RESULT
              </span>

              <h2>
                Your Exact Age
              </h2>

              {result && (
                <p>
                  Based on your date of birth and selected
                  calculation date.
                </p>
              )}

            </div>


            {result ? (
              <>
                <div className="age-main-result">

                  <div className="age-main-number">
                    {result.years}
                  </div>

                  <div className="age-main-label">
                    {result.years === 1
                      ? "year"
                      : "years"}
                  </div>

                  <div className="age-result-detail">
                    {result.months}{" "}
                    {result.months === 1
                      ? "month"
                      : "months"}{" "}
                    and{" "}
                    {result.days}{" "}
                    {result.days === 1
                      ? "day"
                      : "days"}
                  </div>

                </div>


                <div className="age-result-grid">

                  <div className="age-result-box">
                    <span>Years</span>
                    <strong>
                      {result.years}
                    </strong>
                  </div>

                  <div className="age-result-box">
                    <span>Months</span>
                    <strong>
                      {result.months}
                    </strong>
                  </div>

                  <div className="age-result-box">
                    <span>Days</span>
                    <strong>
                      {result.days}
                    </strong>
                  </div>

                  <div className="age-result-box">
                    <span>Total Days</span>
                    <strong>
                      {result.totalDays.toLocaleString()}
                    </strong>
                  </div>

                  <div className="age-result-box">
                    <span>Total Weeks</span>
                    <strong>
                      {result.totalWeeks.toLocaleString()}
                    </strong>
                  </div>

                  <div className="age-result-box">
                    <span>Total Hours</span>
                    <strong>
                      {result.totalHours.toLocaleString()}
                    </strong>
                  </div>

                </div>


                <div className="age-birthday-card">

                  <div className="age-birthday-icon">
                    <FiCalendar />
                  </div>

                  <div>
                    <span>
                      Next Birthday
                    </span>

                    <strong>
                      {formatDate(
                        result.nextBirthday
                      )}
                    </strong>

                    <p>
                      {result.daysUntilBirthday === 0
                        ? "Your birthday is today!"
                        : `${result.daysUntilBirthday} ${
                            result.daysUntilBirthday === 1
                              ? "day"
                              : "days"
                          } remaining`}
                    </p>
                  </div>

                </div>

              </>
            ) : (
              <div className="age-empty-result">

                <FiClock />

                <h3>
                  Enter your date of birth
                </h3>

                <p>
                  Your exact age and additional
                  calculations will appear here.
                </p>

              </div>
            )}

          </section>


          {/* =================================================
              ABOUT
          ================================================= */}

          <section className="age-information">

            <div className="age-information-content">

              <span className="more-section-label">
                ABOUT THE TOOL
              </span>

              <h2>
                What Is an Age Calculator?
              </h2>

              <p>
                An age calculator is an online tool that
                determines the amount of time between a
                person's date of birth and a selected date.
                Instead of manually calculating the difference
                between calendar dates, an age calculator can
                provide the result in years, months and days.
              </p>

              <p>
                The EXAMITICS Age Calculator is designed to
                make this calculation simple and convenient.
                Enter your date of birth, choose the date you
                want to calculate your age until, and the tool
                provides your exact age together with additional
                time measurements.
              </p>

            </div>


            <div className="age-information-points">

              <div>
                <FiCheck />
                <span>
                  Exact age in years, months and days
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Total days and weeks
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Total hours
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Upcoming birthday information
                </span>
              </div>

            </div>

          </section>


          {/* =================================================
              HOW TO USE
          ================================================= */}

          <section className="age-content-section">

            <span className="more-section-label">
              HOW TO USE
            </span>

            <h2>
              How to Calculate Your Age
            </h2>

            <div className="age-steps">

              <div className="age-step">

                <span className="age-step-number">
                  01
                </span>

                <div>
                  <h3>
                    Enter your date of birth
                  </h3>

                  <p>
                    Select your birth date using the
                    Date of Birth field.
                  </p>
                </div>

              </div>


              <div className="age-step">

                <span className="age-step-number">
                  02
                </span>

                <div>
                  <h3>
                    Select a calculation date
                  </h3>

                  <p>
                    The calculator uses today's date
                    by default. You can select another
                    date if you want to calculate your
                    age on a specific day.
                  </p>
                </div>

              </div>


              <div className="age-step">

                <span className="age-step-number">
                  03
                </span>

                <div>
                  <h3>
                    Calculate your age
                  </h3>

                  <p>
                    Click Calculate Age to instantly
                    see your age in years, months and
                    days along with additional results.
                  </p>
                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              CALCULATION EXPLANATION
          ================================================= */}

          <section className="age-content-section">

            <span className="more-section-label">
              CALCULATION
            </span>

            <h2>
              How Does the Age Calculator Work?
            </h2>

            <p>
              Age is calculated by comparing the date of
              birth with another calendar date. The calculator
              first determines the completed years, then the
              remaining months and days.
            </p>

            <p>
              Calendar months do not all contain the same
              number of days, so calculating an exact age is
              different from simply dividing a number of days
              by 365. The EXAMITICS calculator accounts for
              calendar months when determining the years,
              months and days in the result.
            </p>

            <div className="age-note">

              <FiInfo />

              <div>
                <strong>
                  Important:
                </strong>

                <p>
                  The years, months and days result is a
                  calendar-based calculation. Total days,
                  weeks and hours are provided separately
                  as additional measurements.
                </p>
              </div>

            </div>

          </section>


          {/* =================================================
              USE CASES
          ================================================= */}

          <section className="age-content-section">

            <span className="more-section-label">
              USE CASES
            </span>

            <h2>
              When Can You Use an Age Calculator?
            </h2>

            <div className="age-use-grid">

              <div className="age-use-card">

                <FiCalendar />

                <h3>
                  Birthday Planning
                </h3>

                <p>
                  Find your current age and determine
                  how many days remain until your next
                  birthday.
                </p>

              </div>


              <div className="age-use-card">

                <FiBookOpen />

                <h3>
                  Applications &amp; Forms
                </h3>

                <p>
                  Calculate your age when completing
                  applications, registrations and
                  other forms that require age information.
                </p>

              </div>


              <div className="age-use-card">

                <FiClock />

                <h3>
                  Date Difference
                </h3>

                <p>
                  Calculate how much time has passed
                  between your birth date and another
                  selected date.
                </p>

              </div>


              <div className="age-use-card">

                <FiCheck />

                <h3>
                  Quick Verification
                </h3>

                <p>
                  Quickly verify an age calculation
                  without manually counting years,
                  months and days.
                </p>

              </div>

            </div>

          </section>


          {/* =================================================
              FAQ
          ================================================= */}

          <section className="age-faq">

            <div className="age-faq-heading">

              <span className="more-section-label">
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h2>
                Age Calculator FAQs
              </h2>

              <p>
                Common questions about calculating age
                online.
              </p>

            </div>


            <div className="age-faq-list">

              <details open>

                <summary>
                  How does the EXAMITICS Age Calculator work?
                </summary>

                <p>
                  Enter your date of birth and select the
                  date you want to calculate your age until.
                  The calculator determines the difference
                  between the two dates and displays your
                  completed years, months and days.
                </p>

              </details>


              <details>

                <summary>
                  Can I calculate my exact age in years,
                  months and days?
                </summary>

                <p>
                  Yes. The calculator provides your age in
                  completed years, remaining months and
                  remaining days. It also provides total
                  days, weeks and hours as additional
                  measurements.
                </p>

              </details>


              <details>

                <summary>
                  Can I calculate my age on a specific date?
                </summary>

                <p>
                  Yes. The calculation date can be changed
                  from today's date to another valid date.
                  This allows you to determine how old you
                  were or will be on a particular date.
                </p>

              </details>


              <details>

                <summary>
                  Is the Age Calculator free?
                </summary>

                <p>
                  Yes. The EXAMITICS Age Calculator is
                  available as a free online tool and does
                  not require a paid subscription to perform
                  the calculation.
                </p>

              </details>


              <details>

                <summary>
                  What information do I need?
                </summary>

                <p>
                  You only need your date of birth. The
                  calculator automatically uses today's date
                  unless you choose another calculation date.
                </p>

              </details>


              <details>

                <summary>
                  Does the calculator work on mobile phones?
                </summary>

                <p>
                  Yes. The page is designed to work on
                  desktop computers, tablets and mobile
                  devices.
                </p>

              </details>

            </div>

          </section>


          {/* =================================================
              RELATED TOOLS
          ================================================= */}

          <section className="age-related">

            <div>

              <span className="more-section-label">
                EXPLORE MORE
              </span>

              <h2>
                More Tools from EXAMITICS
              </h2>

              <p>
                Explore other useful calculators and online
                services as they become available.
              </p>

            </div>

            <Link
              to="/more"
              className="age-related-btn"
            >
              Explore More Tools
              <FiArrowRight />
            </Link>

          </section>

        </div>

      </main>


      <Footer />

    </>
  );
};

export default AgeCalculator;