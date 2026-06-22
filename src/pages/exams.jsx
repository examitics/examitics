import React from "react";

import "../styles/exams.css";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

import ExamCard from "../components/exam/examcard";

import examsData from "../data/examdata";

import SidebarAd160x600 from "../components/SidebarAd160x600";
import SidebarAd160x300 from "../components/SidebarAd160x300";

import Adsterra728x90 from "../components/Adsterra728x90";
import Adsterra300x250 from "../components/Adsterra300x250";

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
      
      <div className="page-layout">
        <div className="exams-page">
          <div className="container-custom">
            {/* =====================================
              HEADER
          ===================================== */}

            <div className="exams-header">
              <div>
                <span className="page-badge">Competitive Preparation</span>

                <h1>Exam Preparation Portal</h1>

                <p>
                  Access structured MCQ preparation systems, mock examinations,
                  and performance analytics for competitive and military
                  examinations.
                </p>
              </div>

              {/* SEARCH */}

              <div className="exams-search">
                <FiSearch />

                <input type="text" placeholder="Search exam categories..." />
              </div>
            </div>

            {/* =====================================
              STATS
          ===================================== */}

            {/* <div className="exams-stats-grid">
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
            </div> */}
            <div className="mobile-ad">
                        <h6 style={{ display: "grid", placeItems: "center" }}>
                          Advertisement
                        </h6>
            
                        {/* 320x50 Adsterra banner code */}
                        <Adsterra300x250 />
                      </div>
                      <div className="desktop-ad">
                        <h6 style={{ display: "grid", placeItems: "center" }}>
                          Advertisement
                        </h6>
            
                        <Adsterra728x90 />
                      </div>

            {/* =====================================
              GRID
          ===================================== */}

            <div className="exams-grid">
              {examsData.map((exam) => (
                <ExamCard key={exam.id} exam={exam} />
              ))}
            </div>
          </div>
        </div>
        {/* <aside className="sidebar">
          <SidebarAd160x600 />
          <SidebarAd160x300 />
        </aside> */}
      </div>
      <Footer />
    </>
  );
};

export default Exams;
