import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

import {
  FiActivity,
  FiArrowRight,
  FiCheck,
  FiChevronRight,
  FiInfo,
  FiRefreshCw,
  FiShield,
  FiTrendingUp,
  FiUser,
  FiWatch,
} from "react-icons/fi";

import "../styles/bmi-calculator.css";

/* =========================================================
   CONSTANTS
========================================================= */

const BMI_MIN = 10;
const BMI_MAX = 80;

const STANDARD_CATEGORIES = [
  {
    key: "underweight",
    label: "Underweight",
    min: 0,
    max: 18.5,
  },
  {
    key: "healthy",
    label: "Healthy Weight",
    min: 18.5,
    max: 25,
  },
  {
    key: "overweight",
    label: "Overweight",
    min: 25,
    max: 30,
  },
  {
    key: "obesity",
    label: "Obesity",
    min: 30,
    max: Infinity,
  },
];

/* =========================================================
   HELPERS
========================================================= */

const round = (value, decimals = 1) => {
  const factor = 10 ** decimals;

  return Math.round((value + Number.EPSILON) * factor) / factor;
};


const parseNumber = (value) => {
  if (value === "" || value === null || value === undefined) {
    return null;
  }

  const number = Number(value);

  return Number.isFinite(number) ? number : null;
};


/* =========================================================
   BMI CALCULATION
========================================================= */

const calculateBMI = (weightKg, heightCm) => {
  if (!weightKg || !heightCm) {
    return null;
  }

  const heightMeters = heightCm / 100;

  if (heightMeters <= 0) {
    return null;
  }

  const bmi =
    weightKg / (heightMeters * heightMeters);

  return round(bmi, 1);
};


/* =========================================================
   CATEGORY
========================================================= */

const getBMICategory = (bmi) => {
  if (bmi < 18.5) {
    return {
      key: "underweight",
      label: "Underweight",
      description:
        "Your BMI is below the standard adult healthy-weight range.",
    };
  }

  if (bmi < 25) {
    return {
      key: "healthy",
      label: "Healthy Weight",
      description:
        "Your BMI falls within the standard adult healthy-weight range.",
    };
  }

  if (bmi < 30) {
    return {
      key: "overweight",
      label: "Overweight",
      description:
        "Your BMI is above the standard adult healthy-weight range.",
    };
  }

  if (bmi < 35) {
    return {
      key: "obesity-class-1",
      label: "Obesity Class 1",
      description:
        "Your BMI falls within the standard Class 1 obesity range.",
    };
  }

  if (bmi < 40) {
    return {
      key: "obesity-class-2",
      label: "Obesity Class 2",
      description:
        "Your BMI falls within the standard Class 2 obesity range.",
    };
  }

  return {
    key: "obesity-class-3",
    label: "Obesity Class 3",
    description:
      "Your BMI is 40 or higher and falls within the standard Class 3 obesity range.",
  };
};


/* =========================================================
   UNIT CONVERSION
========================================================= */

const poundsToKg = (pounds) => {
  return pounds * 0.45359237;
};


const kgToPounds = (kg) => {
  return kg / 0.45359237;
};


const feetAndInchesToCm = (feet, inches) => {
  return (feet * 12 + inches) * 2.54;
};


const cmToFeetAndInches = (cm) => {
  const totalInches = cm / 2.54;

  const feet = Math.floor(totalInches / 12);

  const inches = totalInches - feet * 12;

  return {
    feet,
    inches: round(inches, 1),
  };
};


/* =========================================================
   HEALTHY WEIGHT RANGE
========================================================= */

const calculateHealthyWeightRange = (heightCm) => {
  if (!heightCm || heightCm <= 0) {
    return null;
  }

  const heightMeters = heightCm / 100;
  const heightSquared = heightMeters * heightMeters;

  const minKg = 18.5 * heightSquared;

  const maxKg = 24.9 * heightSquared;

  return {
    minKg: round(minKg, 1),
    maxKg: round(maxKg, 1),
    minLb: round(kgToPounds(minKg), 1),
    maxLb: round(kgToPounds(maxKg), 1),
  };
};


/* =========================================================
   CATEGORY POSITION
========================================================= */

const getBMIIndicatorPosition = (bmi) => {
  const clamped =
    Math.min(Math.max(bmi, BMI_MIN), BMI_MAX);

  return (
    ((clamped - BMI_MIN) /
      (BMI_MAX - BMI_MIN)) *
    100
  );
};


/* =========================================================
   COMPONENT
========================================================= */

const BMICalculator = () => {
  const [unitSystem, setUnitSystem] =
    useState("metric");

  const [age, setAge] = useState("");

  const [heightCm, setHeightCm] = useState("");

  const [heightFeet, setHeightFeet] = useState("");

  const [heightInches, setHeightInches] =
    useState("");

  const [weightKg, setWeightKg] = useState("");

  const [weightLb, setWeightLb] = useState("");

  const [error, setError] = useState("");

  const [hasCalculated, setHasCalculated] =
    useState(false);


  /* =======================================================
     NORMALIZED VALUES
  ======================================================= */

  const normalizedHeightCm = useMemo(() => {
    if (unitSystem === "metric") {
      return parseNumber(heightCm);
    }

    const feet = parseNumber(heightFeet);
    const inches = parseNumber(heightInches);

    if (feet === null && inches === null) {
      return null;
    }

    return feetAndInchesToCm(
      feet || 0,
      inches || 0
    );
  }, [
    unitSystem,
    heightCm,
    heightFeet,
    heightInches,
  ]);


  const normalizedWeightKg = useMemo(() => {
    if (unitSystem === "metric") {
      return parseNumber(weightKg);
    }

    const pounds = parseNumber(weightLb);

    if (pounds === null) {
      return null;
    }

    return poundsToKg(pounds);
  }, [unitSystem, weightKg, weightLb]);


  /* =======================================================
     BMI RESULT
  ======================================================= */

  const bmi = useMemo(() => {
    return calculateBMI(
      normalizedWeightKg,
      normalizedHeightCm
    );
  }, [
    normalizedWeightKg,
    normalizedHeightCm,
  ]);


  const category = useMemo(() => {
    if (bmi === null) {
      return null;
    }

    return getBMICategory(bmi);
  }, [bmi]);


  const healthyWeightRange = useMemo(() => {
    return calculateHealthyWeightRange(
      normalizedHeightCm
    );
  }, [normalizedHeightCm]);


  const bmiPosition = useMemo(() => {
    if (bmi === null) {
      return 0;
    }

    return getBMIIndicatorPosition(bmi);
  }, [bmi]);


  /* =======================================================
     WEIGHT RANGE MESSAGE
  ======================================================= */

  const weightRangeMessage = useMemo(() => {
    if (
      !normalizedWeightKg ||
      !healthyWeightRange
    ) {
      return null;
    }

    if (
      normalizedWeightKg <
      healthyWeightRange.minKg
    ) {
      const difference =
        healthyWeightRange.minKg -
        normalizedWeightKg;

      return {
        type: "below",
        value: round(difference, 1),
        text:
          "Your current weight is below the calculated weight range corresponding to a BMI of 18.5–24.9.",
      };
    }

    if (
      normalizedWeightKg >
      healthyWeightRange.maxKg
    ) {
      const difference =
        normalizedWeightKg -
        healthyWeightRange.maxKg;

      return {
        type: "above",
        value: round(difference, 1),
        text:
          "Your current weight is above the calculated weight range corresponding to a BMI of 18.5–24.9.",
      };
    }

    return {
      type: "within",
      value: 0,
      text:
        "Your current weight falls within the calculated weight range corresponding to a BMI of 18.5–24.9.",
    };
  }, [
    normalizedWeightKg,
    healthyWeightRange,
  ]);


  /* =======================================================
     DISPLAY HEIGHT
  ======================================================= */

  const displayHeight = useMemo(() => {
    if (!normalizedHeightCm) {
      return "—";
    }

    if (unitSystem === "metric") {
      return `${round(normalizedHeightCm, 1)} cm`;
    }

    const converted =
      cmToFeetAndInches(normalizedHeightCm);

    return `${converted.feet} ft ${converted.inches} in`;
  }, [
    normalizedHeightCm,
    unitSystem,
  ]);


  /* =======================================================
     DISPLAY WEIGHT
  ======================================================= */

  const displayWeight = useMemo(() => {
    if (!normalizedWeightKg) {
      return "—";
    }

    if (unitSystem === "metric") {
      return `${round(normalizedWeightKg, 1)} kg`;
    }

    return `${round(
      kgToPounds(normalizedWeightKg),
      1
    )} lb`;
  }, [
    normalizedWeightKg,
    unitSystem,
  ]);


  /* =======================================================
     CALCULATE
  ======================================================= */

  const handleCalculate = () => {
    setError("");

    const ageValue = parseNumber(age);

    if (age === "") {
      setError(
        "Please enter your age. This calculator is intended for adults."
      );

      return;
    }

    if (
      ageValue === null ||
      ageValue < 18 ||
      ageValue > 120
    ) {
      setError(
        "This calculator is intended for adults aged 18 and over. Children and teenagers require age- and sex-specific BMI interpretation."
      );

      return;
    }


    if (
      !normalizedHeightCm ||
      normalizedHeightCm <= 0
    ) {
      setError(
        "Please enter a valid height."
      );

      return;
    }


    if (
      normalizedHeightCm < 50 ||
      normalizedHeightCm > 250
    ) {
      setError(
        "Please enter a realistic height between 50 cm and 250 cm."
      );

      return;
    }


    if (
      !normalizedWeightKg ||
      normalizedWeightKg <= 0
    ) {
      setError(
        "Please enter a valid weight."
      );

      return;
    }


    if (
      normalizedWeightKg < 10 ||
      normalizedWeightKg > 400
    ) {
      setError(
        "Please enter a realistic weight between 10 kg and 400 kg."
      );

      return;
    }


    setHasCalculated(true);

    window.setTimeout(() => {
      document
        .getElementById("bmi-result")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 50);
  };


  /* =======================================================
     UNIT SWITCH
  ======================================================= */

  const handleUnitChange = (unit) => {
    if (unit === unitSystem) {
      return;
    }

    setError("");
    setHasCalculated(false);

    if (unit === "imperial") {
      if (normalizedHeightCm) {
        const converted =
          cmToFeetAndInches(
            normalizedHeightCm
          );

        setHeightFeet(
          String(converted.feet)
        );

        setHeightInches(
          String(converted.inches)
        );
      }

      if (normalizedWeightKg) {
        setWeightLb(
          String(
            round(
              kgToPounds(normalizedWeightKg),
              1
            )
          )
        );
      }
    } else {
      if (normalizedHeightCm) {
        setHeightCm(
          String(
            round(normalizedHeightCm, 1)
          )
        );
      }

      if (normalizedWeightKg) {
        setWeightKg(
          String(
            round(normalizedWeightKg, 1)
          )
        );
      }
    }

    setUnitSystem(unit);
  };


  /* =======================================================
     RESET
  ======================================================= */

  const handleReset = () => {
    setAge("");

    setHeightCm("");
    setHeightFeet("");
    setHeightInches("");

    setWeightKg("");
    setWeightLb("");

    setError("");

    setHasCalculated(false);

    setUnitSystem("metric");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      {/* ===================================================
          SEO
      =================================================== */}

      <Helmet>

        <title>
          BMI Calculator – Calculate Your Body Mass Index | EXAMITICS
        </title>

        <meta
          name="description"
          content="Use the free EXAMITICS BMI Calculator to calculate your Body Mass Index using metric or imperial units. Get your BMI, adult BMI category and estimated healthy weight range for your height."
        />

        <meta
          name="keywords"
          content="BMI calculator, BMI calculator online, calculate BMI, body mass index calculator, BMI calculator kg cm, BMI calculator pounds feet inches, healthy weight calculator, BMI chart, BMI categories, adult BMI calculator"
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
          href="https://www.examitics.com/more/bmi-calculator"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="BMI Calculator – Calculate Your Body Mass Index | EXAMITICS"
        />

        <meta
          property="og:description"
          content="Calculate your BMI online with metric or imperial units and see your adult BMI category and estimated healthy weight range."
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
          content="https://www.examitics.com/more/bmi-calculator"
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
          content="BMI Calculator – Calculate Your Body Mass Index | EXAMITICS"
        />

        <meta
          name="twitter:description"
          content="Free BMI calculator for adults. Calculate BMI using kg and cm or pounds, feet and inches."
        />

        {/* WebPage Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context":
              "https://schema.org",
            "@type": "WebPage",
            name:
              "BMI Calculator",
            description:
              "Free online BMI calculator for adults using metric and imperial units.",
            url:
              "https://www.examitics.com/more/bmi-calculator",
            isPartOf: {
              "@type": "WebSite",
              name: "EXAMITICS",
              url:
                "https://www.examitics.com",
            },
            publisher: {
              "@type":
                "Organization",
              name: "EXAMITICS",
              url:
                "https://www.examitics.com",
            },
          })}
        </script>

        {/* WebApplication Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context":
              "https://schema.org",
            "@type":
              "WebApplication",
            name:
              "EXAMITICS BMI Calculator",
            url:
              "https://www.examitics.com/more/bmi-calculator",
            applicationCategory:
              "HealthApplication",
            operatingSystem:
              "Any",
            description:
              "A free browser-based BMI calculator for adults using metric or imperial height and weight measurements.",
            offers: {
              "@type":
                "Offer",
              price: "0",
              priceCurrency:
                "USD",
            },
          })}
        </script>

      </Helmet>


      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url:
              "https://www.examitics.com/",
          },
          {
            name: "More",
            url:
              "https://www.examitics.com/more",
          },
          {
            name: "BMI Calculator",
            url:
              "https://www.examitics.com/more/bmi-calculator",
          },
        ]}
      />


      <Navbar />


      <main className="bmi-calculator-page">

        <div className="container-custom">

          {/* =================================================
              HERO
          ================================================= */}

          <section className="bmi-hero">

            <div className="bmi-badge">
              <FiActivity />
              <span>
                FREE ONLINE HEALTH TOOL
              </span>
            </div>

            <h1>
              BMI Calculator
            </h1>

            <p>
              Calculate your Body Mass Index using your
              height and weight. Get your BMI, adult BMI
              category and estimated weight range
              corresponding to a BMI of 18.5–24.9.
            </p>

          </section>


          {/* =================================================
              CALCULATOR
          ================================================= */}

          <section className="bmi-calculator-card">

            <div className="bmi-calculator-header">

              <div className="bmi-calculator-icon">
                <FiActivity />
              </div>

              <div>
                <h2>
                  Calculate Your BMI
                </h2>

                <p>
                  Enter your age, height and weight to
                  calculate your adult BMI.
                </p>
              </div>

            </div>


            {/* UNIT SWITCH */}

            <div className="bmi-unit-switch">

              <button
                type="button"
                className={
                  unitSystem === "metric"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  handleUnitChange(
                    "metric"
                  )
                }
              >
                Metric
                <span>
                  kg / cm
                </span>
              </button>

              <button
                type="button"
                className={
                  unitSystem === "imperial"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  handleUnitChange(
                    "imperial"
                  )
                }
              >
                Imperial
                <span>
                  lb / ft / in
                </span>
              </button>

            </div>


            {/* FORM */}

            <div className="bmi-form">

              {/* AGE */}

              <div className="bmi-form-group">

                <label htmlFor="bmi-age">
                  Age
                </label>

                <div className="bmi-input-wrapper">

                  <FiUser />

                  <input
                    id="bmi-age"
                    type="number"
                    min="18"
                    max="120"
                    step="1"
                    inputMode="numeric"
                    placeholder="e.g. 25"
                    value={age}
                    onChange={(e) => {
                      setAge(
                        e.target.value
                      );
                      setHasCalculated(
                        false
                      );
                      setError("");
                    }}
                  />

                  <span>
                    years
                  </span>

                </div>

                <span className="bmi-input-help">
                  Adult calculator. Children and teenagers
                  need age- and sex-specific BMI interpretation.
                </span>

              </div>


              {/* METRIC HEIGHT */}

              {unitSystem === "metric" ? (
                <div className="bmi-form-group">

                  <label htmlFor="bmi-height-cm">
                    Height
                  </label>

                  <div className="bmi-input-wrapper">

                    <FiTrendingUp />

                    <input
                      id="bmi-height-cm"
                      type="number"
                      min="50"
                      max="250"
                      step="0.1"
                      inputMode="decimal"
                      placeholder="e.g. 175"
                      value={heightCm}
                      onChange={(e) => {
                        setHeightCm(
                          e.target.value
                        );
                        setHasCalculated(
                          false
                        );
                        setError("");
                      }}
                    />

                    <span>
                      cm
                    </span>

                  </div>

                </div>
              ) : (
                <div className="bmi-form-group">

                  <label>
                    Height
                  </label>

                  <div className="bmi-imperial-row">

                    <div className="bmi-input-wrapper">

                      <FiTrendingUp />

                      <input
                        type="number"
                        min="1"
                        max="8"
                        step="1"
                        inputMode="numeric"
                        placeholder="5"
                        value={
                          heightFeet
                        }
                        onChange={(e) => {
                          setHeightFeet(
                            e.target.value
                          );
                          setHasCalculated(
                            false
                          );
                          setError("");
                        }}
                        aria-label="Height in feet"
                      />

                      <span>
                        ft
                      </span>

                    </div>

                    <div className="bmi-input-wrapper">

                      <input
                        type="number"
                        min="0"
                        max="11.9"
                        step="0.1"
                        inputMode="decimal"
                        placeholder="9"
                        value={
                          heightInches
                        }
                        onChange={(e) => {
                          setHeightInches(
                            e.target.value
                          );
                          setHasCalculated(
                            false
                          );
                          setError("");
                        }}
                        aria-label="Height in inches"
                      />

                      <span>
                        in
                      </span>

                    </div>

                  </div>

                </div>
              )}


              {/* WEIGHT */}

              <div className="bmi-form-group">

                <label
                  htmlFor={
                    unitSystem === "metric"
                      ? "bmi-weight-kg"
                      : "bmi-weight-lb"
                  }
                >
                  Weight
                </label>

                <div className="bmi-input-wrapper">

                  <FiWatch />

                  <input
                    id={
                      unitSystem === "metric"
                        ? "bmi-weight-kg"
                        : "bmi-weight-lb"
                    }
                    type="number"
                    min={
                      unitSystem === "metric"
                        ? "10"
                        : "22"
                    }
                    max={
                      unitSystem === "metric"
                        ? "400"
                        : "882"
                    }
                    step="0.1"
                    inputMode="decimal"
                    placeholder={
                      unitSystem === "metric"
                        ? "e.g. 70"
                        : "e.g. 154"
                    }
                    value={
                      unitSystem === "metric"
                        ? weightKg
                        : weightLb
                    }
                    onChange={(e) => {
                      if (
                        unitSystem ===
                        "metric"
                      ) {
                        setWeightKg(
                          e.target.value
                        );
                      } else {
                        setWeightLb(
                          e.target.value
                        );
                      }

                      setHasCalculated(
                        false
                      );

                      setError("");
                    }}
                  />

                  <span>
                    {unitSystem ===
                    "metric"
                      ? "kg"
                      : "lb"}
                  </span>

                </div>

              </div>

            </div>


            {/* ERROR */}

            {error && (
              <div
                className="bmi-error"
                role="alert"
              >
                <FiInfo />
                <span>
                  {error}
                </span>
              </div>
            )}


            {/* ACTIONS */}

            <div className="bmi-actions">

              <button
                type="button"
                className="bmi-calculate-btn"
                onClick={
                  handleCalculate
                }
              >
                Calculate BMI
                <FiArrowRight />
              </button>

              <button
                type="button"
                className="bmi-reset-btn"
                onClick={
                  handleReset
                }
              >
                <FiRefreshCw />
                Reset
              </button>

            </div>


            <div className="bmi-privacy-note">
              <FiShield />
              <span>
                Your calculation is performed in your
                browser. This tool does not require you
                to submit your measurements to EXAMITICS.
              </span>
            </div>

          </section>


          {/* =================================================
              RESULT
          ================================================= */}

          <section
            id="bmi-result"
            className={`bmi-result ${
              hasCalculated &&
              bmi !== null
                ? "bmi-result-visible"
                : ""
            }`}
          >

            <div className="bmi-result-heading">

              <span className="more-section-label">
                YOUR RESULT
              </span>

              <h2>
                Your BMI Result
              </h2>

              {bmi !== null && (
                <p>
                  Based on the height and weight you
                  entered.
                </p>
              )}

            </div>


            {hasCalculated &&
            bmi !== null &&
            category ? (
              <>
                {/* MAIN BMI */}

                <div className="bmi-main-result">

                  <div className="bmi-main-number">
                    {bmi.toFixed(1)}
                  </div>

                  <div className="bmi-main-label">
                    BMI
                  </div>

                  <div
                    className={`bmi-category-pill bmi-category-${category.key}`}
                  >
                    {category.label}
                  </div>

                  <p>
                    {category.description}
                  </p>

                </div>


                {/* SCALE */}

                <div className="bmi-scale-card">

                  <div className="bmi-scale-header">
                    <strong>
                      Adult BMI Scale
                    </strong>

                    <span>
                      kg/m²
                    </span>
                  </div>

                  <div className="bmi-scale">

                    <div className="bmi-scale-segment bmi-scale-underweight">
                      <span>
                        Underweight
                      </span>
                    </div>

                    <div className="bmi-scale-segment bmi-scale-healthy">
                      <span>
                        Healthy
                      </span>
                    </div>

                    <div className="bmi-scale-segment bmi-scale-overweight">
                      <span>
                        Overweight
                      </span>
                    </div>

                    <div className="bmi-scale-segment bmi-scale-obesity">
                      <span>
                        Obesity
                      </span>
                    </div>

                    <div
                      className="bmi-scale-marker"
                      style={{
                        left: `${bmiPosition}%`,
                      }}
                      aria-label={`BMI ${bmi}`}
                    >
                      <span>
                        {bmi}
                      </span>
                    </div>

                  </div>

                  <div className="bmi-scale-labels">

                    <span>
                      &lt; 18.5
                    </span>

                    <span>
                      18.5
                    </span>

                    <span>
                      25
                    </span>

                    <span>
                      30
                    </span>

                    <span>
                      40+
                    </span>

                  </div>

                </div>


                {/* RESULT GRID */}

                <div className="bmi-result-grid">

                  <div className="bmi-result-box">

                    <span>
                      Height
                    </span>

                    <strong>
                      {displayHeight}
                    </strong>

                  </div>


                  <div className="bmi-result-box">

                    <span>
                      Weight
                    </span>

                    <strong>
                      {displayWeight}
                    </strong>

                  </div>


                  <div className="bmi-result-box">

                    <span>
                      BMI
                    </span>

                    <strong>
                      {bmi.toFixed(1)}
                    </strong>

                  </div>


                  <div className="bmi-result-box">

                    <span>
                      Category
                    </span>

                    <strong>
                      {category.label}
                    </strong>

                  </div>

                </div>


                {/* HEALTHY RANGE */}

                {healthyWeightRange && (
                  <div className="bmi-range-card">

                    <div className="bmi-range-icon">
                      <FiCheck />
                    </div>

                    <div className="bmi-range-content">

                      <span>
                        Estimated Adult Healthy-Weight Range
                      </span>

                      <strong>
                        {healthyWeightRange.minKg}
                        {" – "}
                        {healthyWeightRange.maxKg}
                        {" kg"}
                      </strong>

                      <p>
                        Approximately{" "}
                        {healthyWeightRange.minLb}
                        {" – "}
                        {healthyWeightRange.maxLb}
                        {" lb"} for your height,
                        corresponding to a BMI of
                        18.5–24.9.
                      </p>

                    </div>

                  </div>
                )}


                {/* CURRENT WEIGHT POSITION */}

                {weightRangeMessage && (
                  <div
                    className={`bmi-weight-position bmi-weight-position-${weightRangeMessage.type}`}
                  >

                    <FiInfo />

                    <div>

                      <strong>
                        Weight-range comparison
                      </strong>

                      <p>
                        {weightRangeMessage.text}
                      </p>

                    </div>

                  </div>
                )}


                {/* IMPORTANT NOTE */}

                <div className="bmi-result-note">

                  <FiInfo />

                  <div>

                    <strong>
                      Important:
                    </strong>

                    <p>
                      BMI is a screening measure based
                      only on height and weight. It does
                      not directly measure body fat and
                      should not be used by itself to
                      diagnose a health condition.
                    </p>

                  </div>

                </div>

              </>
            ) : (
              <div className="bmi-empty-result">

                <FiActivity />

                <h3>
                  Enter your measurements
                </h3>

                <p>
                  Enter your age, height and weight,
                  then select Calculate BMI to see your
                  result.
                </p>

              </div>
            )}

          </section>


          {/* =================================================
              ABOUT
          ================================================= */}

          <section className="bmi-information">

            <div className="bmi-information-content">

              <span className="more-section-label">
                ABOUT THE TOOL
              </span>

              <h2>
                What Is BMI?
              </h2>

              <p>
                Body Mass Index, commonly called BMI, is a
                calculated measure of weight relative to
                height. It is commonly used as a screening
                measure to classify weight status in adults.
              </p>

              <p>
                BMI is calculated by dividing weight in
                kilograms by height in meters squared. The
                same result can also be calculated from
                pounds and inches using the standard imperial
                conversion factor.
              </p>

              <p>
                BMI can be useful as one part of a broader
                assessment, but it does not directly measure
                body fat, muscle mass or where fat is stored.
              </p>

            </div>


            <div className="bmi-information-points">

              <div>
                <FiCheck />
                <span>
                  BMI calculated to one decimal place
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Metric and imperial units
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Adult BMI category
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Estimated healthy-weight range
                </span>
              </div>

            </div>

          </section>


          {/* =================================================
              HOW TO USE
          ================================================= */}

          <section className="bmi-content-section">

            <span className="more-section-label">
              HOW TO USE
            </span>

            <h2>
              How to Calculate Your BMI
            </h2>

            <div className="bmi-steps">

              <div className="bmi-step">

                <span className="bmi-step-number">
                  01
                </span>

                <div>
                  <h3>
                    Enter your age
                  </h3>

                  <p>
                    Enter your age so the calculator can
                    confirm that the adult BMI calculation
                    is appropriate for this tool.
                  </p>
                </div>

              </div>


              <div className="bmi-step">

                <span className="bmi-step-number">
                  02
                </span>

                <div>
                  <h3>
                    Choose your units
                  </h3>

                  <p>
                    Select Metric for kilograms and
                    centimeters, or Imperial for pounds,
                    feet and inches.
                  </p>
                </div>

              </div>


              <div className="bmi-step">

                <span className="bmi-step-number">
                  03
                </span>

                <div>
                  <h3>
                    Enter your height and weight
                  </h3>

                  <p>
                    Use your measured height and current
                    body weight. More accurate measurements
                    produce a more accurate BMI calculation.
                  </p>
                </div>

              </div>


              <div className="bmi-step">

                <span className="bmi-step-number">
                  04
                </span>

                <div>
                  <h3>
                    View your result
                  </h3>

                  <p>
                    The calculator displays your BMI,
                    standard adult category and the
                    estimated weight range corresponding
                    to a BMI of 18.5–24.9.
                  </p>
                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              FORMULA
          ================================================= */}

          <section className="bmi-content-section">

            <span className="more-section-label">
              BMI FORMULA
            </span>

            <h2>
              How Is BMI Calculated?
            </h2>

            <p>
              BMI uses your weight and height to produce a
              number measured in kilograms per square meter
              (kg/m²).
            </p>


            <div className="bmi-formula-card">

              <div className="bmi-formula-main">
                BMI = weight (kg) ÷ height² (m)
              </div>

              <div className="bmi-formula-example">

                <strong>
                  Example
                </strong>

                <p>
                  A person weighing 70 kg and measuring
                  1.75 m tall has a BMI of approximately
                  22.9.
                </p>

                <code>
                  70 ÷ (1.75 × 1.75) = 22.9
                </code>

              </div>

            </div>


            <p>
              For imperial measurements, the equivalent
              formula is weight in pounds divided by height
              in inches squared, multiplied by 703.
            </p>

          </section>


          {/* =================================================
              BMI TABLE
          ================================================= */}

          <section className="bmi-content-section">

            <span className="more-section-label">
              ADULT BMI CATEGORIES
            </span>

            <h2>
              BMI Chart for Adults
            </h2>

            <p>
              The following standard categories are commonly
              used to interpret BMI in adults.
            </p>


            <div className="bmi-table-wrapper">

              <table className="bmi-table">

                <thead>
                  <tr>
                    <th>
                      BMI
                    </th>

                    <th>
                      Category
                    </th>

                    <th>
                      Description
                    </th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>
                      Below 18.5
                    </td>

                    <td>
                      Underweight
                    </td>

                    <td>
                      Below the standard adult healthy-weight range
                    </td>
                  </tr>

                  <tr>
                    <td>
                      18.5 – 24.9
                    </td>

                    <td>
                      Healthy Weight
                    </td>

                    <td>
                      Standard adult healthy-weight range
                    </td>
                  </tr>

                  <tr>
                    <td>
                      25.0 – 29.9
                    </td>

                    <td>
                      Overweight
                    </td>

                    <td>
                      Above the standard adult healthy-weight range
                    </td>
                  </tr>

                  <tr>
                    <td>
                      30.0 – 34.9
                    </td>

                    <td>
                      Obesity Class 1
                    </td>

                    <td>
                      Standard Class 1 obesity range
                    </td>
                  </tr>

                  <tr>
                    <td>
                      35.0 – 39.9
                    </td>

                    <td>
                      Obesity Class 2
                    </td>

                    <td>
                      Standard Class 2 obesity range
                    </td>
                  </tr>

                  <tr>
                    <td>
                      40.0 or higher
                    </td>

                    <td>
                      Obesity Class 3
                    </td>

                    <td>
                      Standard Class 3 obesity range
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </section>


          {/* =================================================
              LIMITATIONS
          ================================================= */}

          <section className="bmi-content-section">

            <span className="more-section-label">
              IMPORTANT INFORMATION
            </span>

            <h2>
              What BMI Can and Cannot Tell You
            </h2>

            <div className="bmi-use-grid">

              <div className="bmi-use-card">

                <FiCheck />

                <h3>
                  What BMI Can Do
                </h3>

                <p>
                  BMI provides a quick screening measure of
                  weight relative to height and can help
                  identify whether a person's BMI falls
                  within commonly used adult categories.
                </p>

              </div>


              <div className="bmi-use-card">

                <FiInfo />

                <h3>
                  What BMI Cannot Do
                </h3>

                <p>
                  BMI cannot directly measure body fat,
                  distinguish muscle from fat, identify where
                  body fat is stored, or provide a complete
                  assessment of an individual's health.
                </p>

              </div>


              <div className="bmi-use-card">

                <FiUser />

                <h3>
                  Muscular People
                </h3>

                <p>
                  People with substantial muscle mass can
                  have a higher BMI because muscle contributes
                  to body weight. BMI should therefore be
                  interpreted alongside other information.
                </p>

              </div>


              <div className="bmi-use-card">

                <FiShield />

                <h3>
                  Medical Context
                </h3>

                <p>
                  If you are concerned about your weight,
                  have unexplained weight changes, are
                  pregnant, or have a medical condition,
                  consider discussing your measurements
                  with a qualified healthcare professional.
                </p>

              </div>

            </div>

          </section>


          {/* =================================================
              CHILDREN / TEENS
          ================================================= */}

          <section className="bmi-note-section">

            <div className="bmi-note-icon">
              <FiInfo />
            </div>

            <div>

              <h2>
                BMI for Children and Teenagers
              </h2>

              <p>
                This calculator is designed for adults. BMI
                is interpreted differently for children and
                teenagers because body composition changes
                as they grow. Pediatric BMI is generally
                assessed using age- and sex-specific
                percentiles or growth references rather than
                adult BMI cutoffs.
              </p>

              <p>
                If you are calculating BMI for someone under
                18, use a pediatric BMI-for-age calculator
                appropriate to their age and sex rather than
                applying the adult categories on this page.
              </p>

            </div>

          </section>


          {/* =================================================
              ETHNICITY CONTEXT
          ================================================= */}

          <section className="bmi-content-section">

            <span className="more-section-label">
              INTERPRETATION
            </span>

            <h2>
              Does BMI Mean the Same Thing for Everyone?
            </h2>

            <p>
              The standard BMI categories provide a useful
              general framework, but BMI should not be
              interpreted in isolation. Health risks associated
              with a particular BMI can vary among populations,
              and some clinical guidelines use lower BMI
              thresholds for additional risk assessment in
              certain ethnic groups.
            </p>

            <p>
              For example, the NHS notes that people from
              South Asian, Chinese, other Asian, Middle Eastern,
              Black African and African-Caribbean backgrounds
              can have increased health risks at lower BMI
              values. This is one reason a BMI result should be
              considered together with other health information
              rather than treated as a diagnosis.
            </p>

          </section>


          {/* =================================================
              FAQ
          ================================================= */}

          <section className="bmi-faq">

            <div className="bmi-faq-heading">

              <span className="more-section-label">
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h2>
                BMI Calculator FAQs
              </h2>

              <p>
                Common questions about BMI calculations,
                categories and interpretation.
              </p>

            </div>


            <div className="bmi-faq-list">

              <details open>

                <summary>
                  What is BMI?
                </summary>

                <p>
                  BMI, or Body Mass Index, is a calculated
                  measure of weight relative to height. It is
                  commonly used as a screening measure to
                  classify weight status in adults.
                </p>

              </details>


              <details>

                <summary>
                  What is the BMI formula?
                </summary>

                <p>
                  In metric units, BMI equals weight in
                  kilograms divided by height in meters squared:
                  BMI = kg ÷ m². In imperial units, BMI can be
                  calculated as weight in pounds divided by
                  height in inches squared, multiplied by 703.
                </p>

              </details>


              <details>

                <summary>
                  What is a healthy BMI?
                </summary>

                <p>
                  For standard adult BMI classification, a BMI
                  from 18.5 to 24.9 is commonly described as the
                  healthy-weight range. BMI should still be
                  considered alongside other health information.
                </p>

              </details>


              <details>

                <summary>
                  What BMI is considered overweight?
                </summary>

                <p>
                  Under standard adult categories, a BMI from
                  25.0 to 29.9 falls in the overweight range.
                </p>

              </details>


              <details>

                <summary>
                  What BMI is considered obesity?
                </summary>

                <p>
                  Under standard adult categories, a BMI of 30
                  or higher falls in the obesity category. Adult
                  obesity is further divided into Classes 1, 2
                  and 3.
                </p>

              </details>


              <details>

                <summary>
                  Does BMI measure body fat?
                </summary>

                <p>
                  No. BMI is calculated from height and weight
                  and does not directly measure body fat. It also
                  cannot distinguish muscle mass from fat mass.
                </p>

              </details>


              <details>

                <summary>
                  Can athletes have a high BMI?
                </summary>

                <p>
                  Yes. A person with substantial muscle mass can
                  have a higher BMI because BMI does not
                  distinguish muscle from fat. Additional
                  measures may provide useful context.
                </p>

              </details>


              <details>

                <summary>
                  Can I use this calculator for a child?
                </summary>

                <p>
                  No. This page is designed for adults.
                  Children and teenagers require BMI-for-age
                  interpretation using age- and sex-specific
                  growth references.
                </p>

              </details>


              <details>

                <summary>
                  Does BMI depend on sex?
                </summary>

                <p>
                  The standard adult BMI formula itself does not
                  use sex. However, BMI interpretation for
                  children and teenagers does depend on age and
                  sex because their bodies are still developing.
                </p>

              </details>


              <details>

                <summary>
                  Is the EXAMITICS BMI Calculator free?
                </summary>

                <p>
                  Yes. The EXAMITICS BMI Calculator is available
                  as a free browser-based tool and does not
                  require a paid subscription to perform the
                  calculation.
                </p>

              </details>


              <details>

                <summary>
                  Are my measurements stored?
                </summary>

                <p>
                  The calculator performs the BMI calculation
                  in your browser. It does not require you to
                  submit your height or weight to an external
                  calculation service.
                </p>

              </details>

            </div>

          </section>


          {/* =================================================
              RELATED
          ================================================= */}

          <section className="bmi-related">

            <div>

              <span className="more-section-label">
                EXPLORE MORE
              </span>

              <h2>
                More Tools from EXAMITICS
              </h2>

              <p>
                Explore other useful calculators and online
                services designed for quick everyday use.
              </p>

            </div>


            <Link
              to="/more"
              className="bmi-related-btn"
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

export default BMICalculator;