import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

import {
  FiArrowRight,
  FiBookOpen,
  FiCheck,
  FiInfo,
  FiPlus,
  FiRefreshCw,
  FiTrash2,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";

import "../styles/gpa-calculator.css";

/* =========================================================
   GPA SCALES
========================================================= */

const GPA_SCALES = {
  "4.0": [
    { grade: "A+", points: 4.0 },
    { grade: "A", points: 4.0 },
    { grade: "A-", points: 3.7 },
    { grade: "B+", points: 3.3 },
    { grade: "B", points: 3.0 },
    { grade: "B-", points: 2.7 },
    { grade: "C+", points: 2.3 },
    { grade: "C", points: 2.0 },
    { grade: "C-", points: 1.7 },
    { grade: "D+", points: 1.3 },
    { grade: "D", points: 1.0 },
    { grade: "F", points: 0.0 },
  ],

  "5.0": [
    { grade: "A+", points: 5.0 },
    { grade: "A", points: 5.0 },
    { grade: "B+", points: 4.5 },
    { grade: "B", points: 4.0 },
    { grade: "C+", points: 3.5 },
    { grade: "C", points: 3.0 },
    { grade: "D+", points: 2.5 },
    { grade: "D", points: 2.0 },
    { grade: "F", points: 0.0 },
  ],
};


/* =========================================================
   HELPERS
========================================================= */

const createCourse = (id) => ({
  id,
  name: "",
  credits: "3",
  grade: "",
});


const getGradePoints = (grade, scale) => {
  const selectedScale = GPA_SCALES[scale] || GPA_SCALES["4.0"];

  const item = selectedScale.find(
    (entry) => entry.grade === grade
  );

  return item ? item.points : null;
};


const formatGPA = (value) => {
  if (!Number.isFinite(value)) return "0.00";

  return Math.min(value, 5).toFixed(2);
};


/* =========================================================
   COMPONENT
========================================================= */

const GPACalculator = () => {
  const [mode, setMode] = useState("semester");
  const [scale, setScale] = useState("4.0");

  const [courses, setCourses] = useState([
    createCourse(1),
    createCourse(2),
    createCourse(3),
    createCourse(4),
  ]);

  const [previousGPA, setPreviousGPA] = useState("");
  const [previousCredits, setPreviousCredits] = useState("");

  const [error, setError] = useState("");

  /* =======================================================
     CURRENT SEMESTER CALCULATION
  ======================================================= */

  const calculation = useMemo(() => {
    let totalCredits = 0;
    let totalQualityPoints = 0;
    let completedCourses = 0;

    courses.forEach((course) => {
      const credits = Number(course.credits);
      const gradePoints = getGradePoints(course.grade, scale);

      if (
        Number.isFinite(credits) &&
        credits > 0 &&
        gradePoints !== null
      ) {
        totalCredits += credits;
        totalQualityPoints += credits * gradePoints;
        completedCourses += 1;
      }
    });

    const semesterGPA =
      totalCredits > 0
        ? totalQualityPoints / totalCredits
        : 0;

    let cumulativeGPA = semesterGPA;
    let cumulativeCredits = totalCredits;

    if (mode === "cumulative") {
      const oldGPA = Number(previousGPA);
      const oldCredits = Number(previousCredits);

      const hasPreviousData =
        Number.isFinite(oldGPA) &&
        Number.isFinite(oldCredits) &&
        oldGPA >= 0 &&
        oldCredits > 0;

      if (hasPreviousData) {
        const combinedQualityPoints =
          oldGPA * oldCredits +
          totalQualityPoints;

        cumulativeCredits =
          oldCredits + totalCredits;

        cumulativeGPA =
          cumulativeCredits > 0
            ? combinedQualityPoints / cumulativeCredits
            : 0;
      }
    }

    return {
      totalCredits,
      totalQualityPoints,
      semesterGPA,
      cumulativeGPA,
      cumulativeCredits,
      completedCourses,
    };
  }, [
    courses,
    scale,
    mode,
    previousGPA,
    previousCredits,
  ]);


  /* =======================================================
     COURSE ACTIONS
  ======================================================= */

  const updateCourse = (id, field, value) => {
    setCourses((current) =>
      current.map((course) =>
        course.id === id
          ? {
              ...course,
              [field]: value,
            }
          : course
      )
    );

    setError("");
  };


  const addCourse = () => {
    const nextId =
      courses.length > 0
        ? Math.max(...courses.map((course) => course.id)) + 1
        : 1;

    setCourses((current) => [
      ...current,
      createCourse(nextId),
    ]);

    setError("");
  };


  const removeCourse = (id) => {
    if (courses.length === 1) {
      setError("At least one course is required.");
      return;
    }

    setCourses((current) =>
      current.filter((course) => course.id !== id)
    );

    setError("");
  };


  /* =======================================================
     RESET
  ======================================================= */

  const handleReset = () => {
    setCourses([
      createCourse(1),
      createCourse(2),
      createCourse(3),
      createCourse(4),
    ]);

    setMode("semester");
    setScale("4.0");

    setPreviousGPA("");
    setPreviousCredits("");

    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  /* =======================================================
     VALIDATION / CALCULATE
  ======================================================= */

  const handleCalculate = () => {
    setError("");

    const validCourses = courses.filter((course) => {
      const credits = Number(course.credits);

      return (
        course.grade &&
        Number.isFinite(credits) &&
        credits > 0
      );
    });

    if (validCourses.length === 0) {
      setError(
        "Add at least one course with credit hours and a grade."
      );

      return;
    }

    if (mode === "cumulative") {
      const oldGPA = Number(previousGPA);
      const oldCredits = Number(previousCredits);

      if (
        !Number.isFinite(oldGPA) ||
        oldGPA < 0 ||
        oldGPA > Number(scale) ||
        !Number.isFinite(oldCredits) ||
        oldCredits <= 0
      ) {
        setError(
          `For cumulative GPA, enter a previous GPA between 0 and ${scale} and your completed credit hours.`
        );

        return;
      }
    }

    document
      .getElementById("gpa-result")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };


  /* =======================================================
     GRADE SCALE OPTIONS
  ======================================================= */

  const gradeOptions =
    GPA_SCALES[scale] || GPA_SCALES["4.0"];


  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>

        <title>
          GPA Calculator – Calculate Semester & Cumulative GPA | EXAMITICS
        </title>

        <meta
          name="description"
          content="Use the free EXAMITICS GPA Calculator to calculate your semester GPA or cumulative GPA using course grades and credit hours. Supports 4.0 and 5.0 GPA scales."
        />

        <meta
          name="keywords"
          content="GPA calculator, GPA calculator college, GPA calculator university, semester GPA calculator, cumulative GPA calculator, CGPA calculator, 4.0 GPA calculator, 5.0 GPA calculator, GPA calculator with credit hours, calculate GPA, grade point average calculator, university GPA calculator, student GPA calculator, Pakistan GPA calculator"
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
          href="https://www.examitics.com/more/gpa-calculator"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="GPA Calculator – Semester & Cumulative GPA | EXAMITICS"
        />

        <meta
          property="og:description"
          content="Calculate your GPA using course grades and credit hours. Free semester and cumulative GPA calculator with 4.0 and 5.0 scales."
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
          content="https://www.examitics.com/more/gpa-calculator"
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
          content="GPA Calculator – Semester & Cumulative GPA | EXAMITICS"
        />

        <meta
          name="twitter:description"
          content="Calculate semester or cumulative GPA from grades and credit hours with the free EXAMITICS GPA Calculator."
        />

        {/* WebPage Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "GPA Calculator",
            description:
              "Free online GPA calculator for calculating semester and cumulative GPA using grades and credit hours.",
            url:
              "https://www.examitics.com/more/gpa-calculator",
            publisher: {
              "@type": "Organization",
              name: "EXAMITICS",
              url: "https://www.examitics.com",
            },
          })}
        </script>

        {/* WebApplication Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "EXAMITICS GPA Calculator",
            url:
              "https://www.examitics.com/more/gpa-calculator",
            applicationCategory:
              "EducationalApplication",
            operatingSystem: "Any",
            browserRequirements:
              "Requires JavaScript",
            description:
              "A free GPA calculator that calculates semester and cumulative GPA using course grades and credit hours.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          })}
        </script>

        {/* Educational / Answer-focused content */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "GPA Calculator Terms",
            hasDefinedTerm: [
              {
                "@type": "DefinedTerm",
                name: "GPA",
                description:
                  "Grade Point Average is a weighted average of grade points earned across courses.",
              },
              {
                "@type": "DefinedTerm",
                name: "Credit Hours",
                description:
                  "Credit hours represent the academic weight assigned to a course and are used to weight its grade points.",
              },
              {
                "@type": "DefinedTerm",
                name: "Cumulative GPA",
                description:
                  "Cumulative GPA combines previous academic credit hours and quality points with the current academic period.",
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
            name: "GPA Calculator",
            url:
              "https://www.examitics.com/more/gpa-calculator",
          },
        ]}
      />


      <Navbar />


      <main className="gpa-calculator-page">

        <div className="container-custom">

          {/* =================================================
              HERO
          ================================================= */}

          <section className="gpa-hero">

            <div className="gpa-badge">
              <FiAward />
              <span>FREE ONLINE TOOL</span>
            </div>

            <h1>
              GPA Calculator
            </h1>

            <p>
              Calculate your semester or cumulative GPA
              using your course grades and credit hours.
              Fast, simple and designed for college and
              university students.
            </p>

            <div className="gpa-hero-links">
              <a href="#gpa-calculator">
                Calculate GPA
              </a>

              <a href="#how-gpa-works">
                How GPA Works
              </a>

              <a href="#gpa-faq">
                FAQs
              </a>
            </div>

          </section>


          {/* =================================================
              CALCULATOR
          ================================================= */}

          <section
            id="gpa-calculator"
            className="gpa-calculator-card"
          >

            <div className="gpa-calculator-header">

              <div className="gpa-calculator-icon">
                <FiBookOpen />
              </div>

              <div>

                <h2>
                  Calculate Your GPA
                </h2>

                <p>
                  Enter your courses, credit hours and
                  grades. Your GPA updates automatically.
                </p>

              </div>

            </div>


            {/* =================================================
                CALCULATOR OPTIONS
            ================================================= */}

            <div className="gpa-options">

              <div className="gpa-option-group">

                <label>
                  Calculation Type
                </label>

                <div className="gpa-mode-buttons">

                  <button
                    type="button"
                    className={
                      mode === "semester"
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      setMode("semester");
                      setError("");
                    }}
                  >
                    Semester GPA
                  </button>

                  <button
                    type="button"
                    className={
                      mode === "cumulative"
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      setMode("cumulative");
                      setError("");
                    }}
                  >
                    Cumulative GPA
                  </button>

                </div>

              </div>


              <div className="gpa-option-group">

                <label htmlFor="gpa-scale">
                  GPA Scale
                </label>

                <select
                  id="gpa-scale"
                  value={scale}
                  onChange={(e) => {
                    setScale(e.target.value);
                    setError("");
                  }}
                >
                  <option value="4.0">
                    4.0 Scale
                  </option>

                  <option value="5.0">
                    5.0 Scale
                  </option>
                </select>

              </div>

            </div>


            {/* =================================================
                PREVIOUS GPA
            ================================================= */}

            {mode === "cumulative" && (
              <div className="gpa-previous-card">

                <div className="gpa-previous-heading">

                  <FiTrendingUp />

                  <div>

                    <h3>
                      Previous Academic Record
                    </h3>

                    <p>
                      Enter your previous GPA and completed
                      credit hours to calculate your new
                      cumulative GPA.
                    </p>

                  </div>

                </div>


                <div className="gpa-previous-grid">

                  <div className="gpa-form-group">

                    <label htmlFor="previous-gpa">
                      Previous GPA
                    </label>

                    <input
                      id="previous-gpa"
                      type="number"
                      min="0"
                      max={scale}
                      step="0.01"
                      placeholder={`e.g. 3.20`}
                      value={previousGPA}
                      onChange={(e) => {
                        setPreviousGPA(
                          e.target.value
                        );
                        setError("");
                      }}
                    />

                  </div>


                  <div className="gpa-form-group">

                    <label htmlFor="previous-credits">
                      Completed Credit Hours
                    </label>

                    <input
                      id="previous-credits"
                      type="number"
                      min="0"
                      step="0.5"
                      placeholder="e.g. 45"
                      value={previousCredits}
                      onChange={(e) => {
                        setPreviousCredits(
                          e.target.value
                        );
                        setError("");
                      }}
                    />

                  </div>

                </div>

              </div>
            )}


            {/* =================================================
                COURSE TABLE
            ================================================= */}

            <div className="gpa-course-section">

              <div className="gpa-course-heading">

                <div>

                  <span className="gpa-section-label">
                    YOUR COURSES
                  </span>

                  <h3>
                    Enter Course Grades
                  </h3>

                </div>

                <span className="gpa-course-count">
                  {courses.length}{" "}
                  {courses.length === 1
                    ? "course"
                    : "courses"}
                </span>

              </div>


              <div className="gpa-course-list">

                {courses.map((course, index) => {

                  const points = getGradePoints(
                    course.grade,
                    scale
                  );

                  return (
                    <div
                      className="gpa-course-row"
                      key={course.id}
                    >

                      <div className="gpa-course-number">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </div>


                      <div className="gpa-form-group gpa-course-name">

                        <label
                          htmlFor={`course-name-${course.id}`}
                        >
                          Course
                        </label>

                        <input
                          id={`course-name-${course.id}`}
                          type="text"
                          placeholder="e.g. Mathematics"
                          value={course.name}
                          onChange={(e) =>
                            updateCourse(
                              course.id,
                              "name",
                              e.target.value
                            )
                          }
                        />

                      </div>


                      <div className="gpa-form-group gpa-credit-input">

                        <label
                          htmlFor={`credits-${course.id}`}
                        >
                          Credits
                        </label>

                        <input
                          id={`credits-${course.id}`}
                          type="number"
                          min="0.5"
                          step="0.5"
                          placeholder="3"
                          value={course.credits}
                          onChange={(e) =>
                            updateCourse(
                              course.id,
                              "credits",
                              e.target.value
                            )
                          }
                        />

                      </div>


                      <div className="gpa-form-group gpa-grade-input">

                        <label
                          htmlFor={`grade-${course.id}`}
                        >
                          Grade
                        </label>

                        <select
                          id={`grade-${course.id}`}
                          value={course.grade}
                          onChange={(e) =>
                            updateCourse(
                              course.id,
                              "grade",
                              e.target.value
                            )
                          }
                        >
                          <option value="">
                            Select grade
                          </option>

                          {gradeOptions.map(
                            (item) => (
                              <option
                                key={item.grade}
                                value={item.grade}
                              >
                                {item.grade} —{" "}
                                {item.points.toFixed(1)}
                              </option>
                            )
                          )}

                        </select>

                      </div>


                      <div className="gpa-points-display">

                        <span>
                          Points
                        </span>

                        <strong>
                          {points !== null
                            ? points.toFixed(1)
                            : "—"}
                        </strong>

                      </div>


                      <button
                        type="button"
                        className="gpa-delete-btn"
                        aria-label={`Remove course ${
                          index + 1
                        }`}
                        onClick={() =>
                          removeCourse(course.id)
                        }
                      >
                        <FiTrash2 />
                      </button>

                    </div>
                  );
                })}

              </div>


              <button
                type="button"
                className="gpa-add-course-btn"
                onClick={addCourse}
              >
                <FiPlus />
                Add Another Course
              </button>

            </div>


            {/* =================================================
                ERROR
            ================================================= */}

            {error && (
              <div className="gpa-error">

                <FiInfo />

                <span>
                  {error}
                </span>

              </div>
            )}


            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="gpa-actions">

              <button
                type="button"
                className="gpa-calculate-btn"
                onClick={handleCalculate}
              >
                Calculate GPA
                <FiArrowRight />
              </button>

              <button
                type="button"
                className="gpa-reset-btn"
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
            id="gpa-result"
            className="gpa-result"
          >

            <div className="gpa-result-heading">

              <span className="gpa-section-label">
                YOUR RESULT
              </span>

              <h2>
                {mode === "semester"
                  ? "Your Semester GPA"
                  : "Your Cumulative GPA"}
              </h2>

              <p>
                Your GPA is calculated using credit-hour
                weighting rather than a simple average of
                your grades.
              </p>

            </div>


            <div className="gpa-main-result">

              <div className="gpa-main-number">
                {formatGPA(
                  mode === "semester"
                    ? calculation.semesterGPA
                    : calculation.cumulativeGPA
                )}
              </div>

              <div className="gpa-main-scale">
                / {scale}.00
              </div>

              <div className="gpa-main-label">
                GPA
              </div>

            </div>


            <div className="gpa-result-grid">

              <div className="gpa-result-box">

                <span>
                  Completed Courses
                </span>

                <strong>
                  {calculation.completedCourses}
                </strong>

              </div>


              <div className="gpa-result-box">

                <span>
                  Credit Hours
                </span>

                <strong>
                  {calculation.totalCredits
                    .toLocaleString()}
                </strong>

              </div>


              <div className="gpa-result-box">

                <span>
                  Quality Points
                </span>

                <strong>
                  {calculation.totalQualityPoints.toFixed(
                    2
                  )}
                </strong>

              </div>


              {mode === "cumulative" && (
                <div className="gpa-result-box">

                  <span>
                    Total Credits
                  </span>

                  <strong>
                    {calculation.cumulativeCredits.toLocaleString()}
                  </strong>

                </div>
              )}

            </div>


            <div className="gpa-formula-card">

              <div className="gpa-formula-icon">
                <FiInfo />
              </div>

              <div>

                <strong>
                  GPA Formula
                </strong>

                <p>
                  GPA = Total Quality Points ÷ Total
                  Credit Hours
                </p>

                <small>
                  Quality Points = Grade Points ×
                  Credit Hours for each course.
                </small>

              </div>

            </div>

          </section>


          {/* =================================================
              ABOUT
          ================================================= */}

          <section className="gpa-information">

            <div className="gpa-information-content">

              <span className="gpa-section-label">
                ABOUT THE TOOL
              </span>

              <h2>
                What Is a GPA Calculator?
              </h2>

              <p>
                A GPA calculator is an online tool that
                calculates your Grade Point Average from
                the grades and credit hours of your courses.
                Because courses can have different credit
                hours, GPA is normally calculated as a
                weighted average.
              </p>

              <p>
                The EXAMITICS GPA Calculator lets you enter
                your courses individually, select the grade
                you received and enter the credit hours.
                It then calculates the weighted GPA for
                your semester.
              </p>

              <p>
                If you already have a previous GPA and
                completed credit hours, you can switch to
                Cumulative GPA mode to combine your previous
                academic record with your current courses.
              </p>

            </div>


            <div className="gpa-information-points">

              <div>
                <FiCheck />
                <span>
                  Calculates GPA using credit hours
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Supports 4.0 and 5.0 scales
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Semester and cumulative GPA modes
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Works on phones, tablets and desktops
                </span>
              </div>

            </div>

          </section>


          {/* =================================================
              HOW TO USE
          ================================================= */}

          <section className="gpa-content-section">

            <span className="gpa-section-label">
              HOW TO USE
            </span>

            <h2>
              How to Calculate Your GPA
            </h2>

            <div className="gpa-steps">

              <div className="gpa-step">

                <span className="gpa-step-number">
                  01
                </span>

                <div>

                  <h3>
                    Choose your GPA type
                  </h3>

                  <p>
                    Select Semester GPA if you want to
                    calculate the GPA for your current
                    courses. Select Cumulative GPA if you
                    want to combine your previous GPA with
                    your current semester.
                  </p>

                </div>

              </div>


              <div className="gpa-step">

                <span className="gpa-step-number">
                  02
                </span>

                <div>

                  <h3>
                    Select your GPA scale
                  </h3>

                  <p>
                    Choose the grading scale used by your
                    institution. The calculator provides
                    4.0 and 5.0 scale options.
                  </p>

                </div>

              </div>


              <div className="gpa-step">

                <span className="gpa-step-number">
                  03
                </span>

                <div>

                  <h3>
                    Enter your courses
                  </h3>

                  <p>
                    Add each course, enter its credit
                    hours and select the grade you received.
                    The calculator automatically determines
                    the corresponding grade points.
                  </p>

                </div>

              </div>


              <div className="gpa-step">

                <span className="gpa-step-number">
                  04
                </span>

                <div>

                  <h3>
                    Calculate your GPA
                  </h3>

                  <p>
                    Click Calculate GPA to view your GPA,
                    total credit hours, quality points and
                    calculation details.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              HOW GPA WORKS
          ================================================= */}

          <section
            id="how-gpa-works"
            className="gpa-content-section"
          >

            <span className="gpa-section-label">
              CALCULATION
            </span>

            <h2>
              How Is GPA Calculated?
            </h2>

            <p>
              GPA is calculated by multiplying the grade
              points for each course by that course's credit
              hours. The quality points from all courses are
              then added together and divided by the total
              number of credit hours.
            </p>

            <div className="gpa-equation">

              <span>
                GPA
              </span>

              <strong>
                =
              </strong>

              <div>
                <strong>
                  Total Quality Points
                </strong>

                <span>
                  Total Credit Hours
                </span>
              </div>

            </div>


            <p>
              For example, if a 3-credit course has a grade
              worth 4.0 points, that course contributes
              12 quality points. A 3-credit course with
              3.0 grade points contributes 9 quality points.
              GPA is based on the combined weighted result.
            </p>


            <div className="gpa-note">

              <FiInfo />

              <div>

                <strong>
                  Important:
                </strong>

                <p>
                  GPA grading scales and letter-grade
                  conversions can differ between universities.
                  Always use the grading policy published by
                  your institution when an official GPA is
                  required.
                </p>

              </div>

            </div>

          </section>


          {/* =================================================
              GPA VS CGPA
          ================================================= */}

          <section className="gpa-content-section">

            <span className="gpa-section-label">
              GPA VS CGPA
            </span>

            <h2>
              What Is the Difference Between GPA and CGPA?
            </h2>

            <div className="gpa-comparison-grid">

              <div className="gpa-comparison-card">

                <FiBookOpen />

                <h3>
                  GPA
                </h3>

                <p>
                  GPA usually refers to the Grade Point
                  Average for a particular semester, term
                  or academic period.
                </p>

              </div>


              <div className="gpa-comparison-card">

                <FiTrendingUp />

                <h3>
                  CGPA
                </h3>

                <p>
                  CGPA or cumulative GPA represents an
                  overall academic average across multiple
                  semesters or academic periods.
                </p>

              </div>

            </div>

          </section>


          {/* =================================================
              GRADE TABLE
          ================================================= */}

          <section className="gpa-content-section">

            <span className="gpa-section-label">
              GRADE SCALE
            </span>

            <h2>
              4.0 GPA Scale
            </h2>

            <p>
              The following table shows the grade-point
              mapping currently used by this calculator for
              the 4.0 scale.
            </p>


            <div className="gpa-grade-table-wrapper">

              <table className="gpa-grade-table">

                <thead>

                  <tr>
                    <th>
                      Grade
                    </th>

                    <th>
                      Grade Points
                    </th>
                  </tr>

                </thead>

                <tbody>

                  {GPA_SCALES["4.0"].map(
                    (item) => (
                      <tr key={item.grade}>

                        <td>
                          {item.grade}
                        </td>

                        <td>
                          {item.points.toFixed(1)}
                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>

            <p className="gpa-table-note">
              This is a general 4.0-scale reference. Your
              university may use a different conversion,
              particularly for A+, A, plus/minus grades or
              repeated courses.
            </p>

          </section>


          {/* =================================================
              USE CASES
          ================================================= */}

          <section className="gpa-content-section">

            <span className="gpa-section-label">
              USE CASES
            </span>

            <h2>
              Who Can Use a GPA Calculator?
            </h2>

            <div className="gpa-use-grid">

              <div className="gpa-use-card">

                <FiBookOpen />

                <h3>
                  University Students
                </h3>

                <p>
                  Calculate your semester GPA from your
                  course grades and credit hours.
                </p>

              </div>


              <div className="gpa-use-card">

                <FiTrendingUp />

                <h3>
                  CGPA Tracking
                </h3>

                <p>
                  Combine previous academic results with a
                  new semester to estimate your cumulative
                  GPA.
                </p>

              </div>


              <div className="gpa-use-card">

                <FiAward />

                <h3>
                  Academic Planning
                </h3>

                <p>
                  Check how different grades and credit
                  hours contribute to your academic average.
                </p>

              </div>


              <div className="gpa-use-card">

                <FiCheck />

                <h3>
                  Quick Verification
                </h3>

                <p>
                  Verify a manually calculated GPA without
                  performing the weighted calculation yourself.
                </p>

              </div>

            </div>

          </section>


          {/* =================================================
              FAQ
          ================================================= */}

          <section
            id="gpa-faq"
            className="gpa-faq"
          >

            <div className="gpa-faq-heading">

              <span className="gpa-section-label">
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h2>
                GPA Calculator FAQs
              </h2>

              <p>
                Clear answers to common questions about
                GPA, credit hours and cumulative GPA.
              </p>

            </div>


            <div className="gpa-faq-list">

              <details open>

                <summary>
                  How does a GPA calculator work?
                </summary>

                <p>
                  A GPA calculator converts each course
                  grade into grade points, multiplies those
                  points by the course credit hours, adds the
                  resulting quality points and divides them
                  by the total credit hours.
                </p>

              </details>


              <details>

                <summary>
                  How do I calculate GPA from credit hours?
                </summary>

                <p>
                  Multiply each course's grade points by its
                  credit hours. Add the quality points from
                  all courses and divide the total by the
                  combined credit hours.
                </p>

              </details>


              <details>

                <summary>
                  What is the difference between GPA and CGPA?
                </summary>

                <p>
                  GPA generally represents an academic
                  average for a specific semester or period.
                  CGPA, or cumulative GPA, combines academic
                  performance across multiple periods.
                </p>

              </details>


              <details>

                <summary>
                  Can I calculate cumulative GPA?
                </summary>

                <p>
                  Yes. Select Cumulative GPA and enter your
                  previous GPA and completed credit hours.
                  Then add your current courses and grades.
                  The calculator combines the two records
                  using credit-hour weighting.
                </p>

              </details>


              <details>

                <summary>
                  Is this a 4.0 GPA calculator?
                </summary>

                <p>
                  Yes. The calculator supports a 4.0 GPA
                  scale and also provides a 5.0 scale option.
                  Because universities can use different
                  grade conversions, verify the applicable
                  scale with your institution.
                </p>

              </details>


              <details>

                <summary>
                  Does the GPA calculator work for university students?
                </summary>

                <p>
                  Yes. You can use it for university or
                  college courses where grades are represented
                  by a compatible GPA scale and courses have
                  defined credit hours.
                </p>

              </details>


              <details>

                <summary>
                  Can I use the GPA calculator on mobile?
                </summary>

                <p>
                  Yes. The calculator is designed to work
                  across desktop, tablet and mobile screens.
                  Courses can be added and removed directly
                  from the calculator.
                </p>

              </details>


              <details>

                <summary>
                  Is the EXAMITICS GPA Calculator free?
                </summary>

                <p>
                  Yes. The EXAMITICS GPA Calculator is
                  available as a free online tool.
                </p>

              </details>

            </div>

          </section>


          {/* =================================================
              RELATED
          ================================================= */}

          <section className="gpa-related">

            <div>

              <span className="gpa-section-label">
                EXPLORE MORE
              </span>

              <h2>
                More Tools from EXAMITICS
              </h2>

              <p>
                Explore useful calculators and online tools
                for students and everyday tasks.
              </p>

            </div>


            <Link
              to="/more"
              className="gpa-related-btn"
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

export default GPACalculator;