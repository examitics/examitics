import React from "react";

import "../styles/exams.css";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

import ExamCard from "../components/exam/examcard";

import examsData from "../data/examdata";

import {
  FiSearch,
  FiBarChart2,
  FiClock,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const Exams = () => {

  return (

    <>

      <Navbar />

      <main className="exams-page">

        <div className="container-custom">

          {/* =====================================
              HEADER
          ===================================== */}

          <div className="exams-header">

            <div>

              <span className="page-badge">

                Competitive Preparation

              </span>

              <h1>

                Exam Preparation Portal

              </h1>

              <p>

                Access structured MCQ preparation systems,
                mock examinations, and performance analytics
                for competitive and military examinations.

              </p>

            </div>

            {/* SEARCH */}

            <div className="exams-search">

              <FiSearch />

              <input
                type="text"
                placeholder="Search exam categories..."
              />

            </div>

          </div>

          {/* =====================================
              STATS
          ===================================== */}

          <div className="exams-stats-grid">

            <div className="exam-stat-card">

              <FiBarChart2 />

              <div>

                <h3>18</h3>

                <p>Mock Exams Completed</p>

              </div>

            </div>

            <div className="exam-stat-card">

              <FiClock />

              <div>

                <h3>124h</h3>

                <p>Total Study Time</p>

              </div>

            </div>

            <div className="exam-stat-card">

              <FiTarget />

              <div>

                <h3>89%</h3>

                <p>Average Accuracy</p>

              </div>

            </div>

            <div className="exam-stat-card">

              <FiTrendingUp />

              <div>

                <h3>+14%</h3>

                <p>Monthly Improvement</p>

              </div>

            </div>

          </div>

          {/* =====================================
              GRID
          ===================================== */}

          <div className="exams-grid">

            {examsData.map((exam) => (

              <ExamCard
                key={exam.id}
                exam={exam}
              />

            ))}

          </div>

        </div>

      </main>
      <Footer />
    </>
  );
};

export default Exams;