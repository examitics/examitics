import "./QuickMathSetup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiPlus,
  FiX,
  FiDivide,
  FiPercent,
  FiNavigation,
  FiGrid,
  FiShuffle,
  FiPlay,
  FiClock,
  FiBarChart2,
  FiHelpCircle,
} from "react-icons/fi";

import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

export default function QuickMathSetup() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("Addition");
  const [difficulty, setDifficulty] = useState("Easy");
  const [questions, setQuestions] = useState(20);
  const [timer, setTimer] = useState("10 seconds");

  const categories = [
    { title: "Addition", icon: <FiPlus /> },
    { title: "Multiplication", icon: <FiX /> },
    { title: "Division", icon: <FiDivide /> },
    { title: "Percentage", icon: <FiPercent /> },
    { title: "Speed, Time & Distance", icon: <FiNavigation /> },
    { title: "Area Finding", icon: <FiGrid /> },
    { title: "Mixed Practice", icon: <FiShuffle /> },
  ];

  return (
    <>
    <Navbar />
    <main className="qm-setup-page section-padding">

      <div className="container-custom">

        <div className="qm-setup-header exa-card">

          <h1>Quick Math Practice Setup</h1>

          <p>
            Customize your practice session before starting.
          </p>

        </div>

        <div className="qm-setup-layout">

          {/* LEFT */}

          <div className="qm-setup-main">

            <section className="exa-card qm-card">

              <h2>Select Category</h2>

              <div className="qm-category-grid">

                {categories.map((item) => (

                  <div
                    key={item.title}
                    className={`qm-option-card ${
                      category === item.title ? "active" : ""
                    }`}
                    onClick={() => setCategory(item.title)}
                  >
                    <span>{item.icon}</span>
                    <h4>{item.title}</h4>
                  </div>

                ))}

              </div>

            </section>

            <section className="exa-card qm-card">

              <h2>Select Difficulty</h2>

              <div className="qm-selection-grid">

                {["Easy", "Medium", "Hard"].map((level) => (

                  <button
                    key={level}
                    className={`qm-select-btn ${
                      difficulty === level ? "active" : ""
                    }`}
                    onClick={() => setDifficulty(level)}
                  >
                    <FiBarChart2 />
                    {level}
                  </button>

                ))}

              </div>

            </section>

            <section className="exa-card qm-card">

              <h2>Number of Questions</h2>

              <div className="qm-selection-grid">

                {[10, 20, 30, 50].map((num) => (

                  <button
                    key={num}
                    className={`qm-select-btn ${
                      questions === num ? "active" : ""
                    }`}
                    onClick={() => setQuestions(num)}
                  >
                    <FiHelpCircle />
                    {num}
                  </button>

                ))}

              </div>

            </section>

            <section className="exa-card qm-card">

              <h2>Select Timer</h2>

              <div className="qm-selection-grid">

                {[
  "5 Seconds",
  "10 Seconds",
  "15 Seconds",
  "20 Seconds",
  "30 Seconds",
  "Unlimited",
].map((time) => (

                  <button
                    key={time}
                    className={`qm-select-btn ${
                      timer === time ? "active" : ""
                    }`}
                    onClick={() => setTimer(time)}
                  >
                    <FiClock />
                    {time}
                  </button>

                ))}

              </div>

            </section>

          </div>

          {/* RIGHT */}

          <aside className="qm-summary exa-card">

            <h2>Session Summary</h2>

            <div className="summary-item">
              <span>Category</span>
              <strong>{category}</strong>
            </div>

            <div className="summary-item">
              <span>Difficulty</span>
              <strong>{difficulty}</strong>
            </div>

            <div className="summary-item">
              <span>Questions</span>
              <strong>{questions}</strong>
            </div>

            <div className="summary-item">
              <span>Timer</span>
              <strong>{timer}</strong>
            </div>

            <button
              className="exa-btn exa-btn-primary qm-start-btn"
            //   onClick={() => navigate("/quick-math/practice")}
            onClick={() =>
  navigate("/quick-math/practice", {
    state: {
      category,
      difficulty,
      questions,
      timer,
    },
  })
}
            >
              <FiPlay />
              Start Practice
            </button>

          </aside>

        </div>

      </div>

    </main>
    <Footer />
    </>
  );
}