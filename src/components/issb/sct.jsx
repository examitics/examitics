import React, { useState, useEffect } from "react";

import { FiX, FiClock, FiPlay, FiRotateCcw } from "react-icons/fi";

import set1 from "../../data/sct/set1";
import set2 from "../../data/sct/set2";

import "../../styles/sct.css";

const SCT = ({ closeSCT }) => {
  const testSets = [
    { name: "Test 1", data: set1 },
    { name: "Test 2", data: set2 },
  ];

  const [stage, setStage] = useState("instructions");

  const [countdown, setCountdown] = useState(3);

  const [timeLeft, setTimeLeft] = useState(360);

  const [section, setSection] = useState("english");

  const [selectedSet, setSelectedSet] = useState(null);

  // ==========================================
  // AUDIO
  // ==========================================

  const playBeep = () => {
    try {
      new Audio("/sounds/beep.mp3").play();
    } catch (error) {
      console.log(error);
    }
  };

  const playBuzzer = () => {
    try {
      new Audio("/sounds/buzzer.mp3").play();
    } catch (error) {
      console.log(error);
    }
  };

  // ==========================================
  // START TEST
  // ==========================================

  const startTest = (testSet) => {
    setSelectedSet(testSet);

    setCountdown(3);

    setStage("countdown");
  };

  // ==========================================
  // COUNTDOWN
  // ==========================================

  useEffect(() => {
    if (stage !== "countdown") return;

    if (countdown === 0) {
      playBeep();

      setSection("english");

      setTimeLeft(360);

      setStage("english");

      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, stage]);

  // ==========================================
  // TEST TIMER
  // ==========================================

  useEffect(() => {
    if (stage !== "english" && stage !== "urdu") return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          // English completed
          if (stage === "english") {
            playBeep();

            setSection("urdu");

            setTimeLeft(360);

            setStage("urdu");
          }

          // Urdu completed
          else {
            playBuzzer();

            setStage("timeup");
          }

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [stage]);

  // ==========================================
  // FORMAT TIME
  // ==========================================

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // ==========================================
  // RESET
  // ==========================================

  const resetTest = () => {
    setStage("instructions");

    setSelectedSet(null);

    setCountdown(3);

    setTimeLeft(360);

    setSection("english");
  };

  // ==========================================
  // DATA
  // ==========================================

  const currentSet = selectedSet || set1;

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="sct-overlay">
      <div className="sct-container">
        {/* CLOSE */}

        <button className="sct-close" onClick={closeSCT}>
          <FiX />
        </button>

        {/* ================================= */}
        {/* INSTRUCTIONS */}
        {/* ================================= */}

        {stage === "instructions" && (
          <div className="sct-screen">
            <h1>Sentence Completion Test</h1>

            <p>Complete each sentence mentally or on paper.</p>

            <div className="sct-rules">
              <div>• 26 English Sentences</div>

              <div>• 26 Urdu Sentences</div>

              <div>• 6 Minutes Per Section</div>

              <div>• No Answer Fields</div>

              <div>• Use Paper For Practice</div>

              <div>• Complete Every Sentence</div>
            </div>

            {/* <div className="sct-test-buttons">

              <button
                onClick={() =>
                  startTest(set1)
                }
              >
                <FiPlay />
                Test 1
              </button>

              <button
                onClick={() =>
                  startTest(set1)
                }
              >
                <FiPlay />
                Test 2
              </button>


            </div> */}
            <div className="sct-test-buttons">
              {testSets.map((test, index) => (
                <button key={index} onClick={() => startTest(test.data)}>
                  <FiPlay />
                  {test.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================================= */}
        {/* COUNTDOWN */}
        {/* ================================= */}

        {stage === "countdown" && (
          <div className="sct-countdown">
            <h1>{countdown}</h1>

            <p>Get Ready...</p>
          </div>
        )}

        {/* ================================= */}
        {/* ENGLISH */}
        {/* ================================= */}

        {stage === "english" && (
          <div className="sct-test-screen">
            <div className="sct-header">
              <h2>English Section</h2>

              <div className="sct-timer">
                <FiClock />

                {formatTime(timeLeft)}
              </div>
            </div>

            <div className="sct-list">
              {currentSet.english.map((sentence, index) => (
                <div key={index} className="sct-item">
                  <span>{index + 1}.</span>

                  {sentence}
                </div>
              ))}
            </div>
            <hr />
          </div>
        )}

        {/* ================================= */}
        {/* URDU */}
        {/* ================================= */}

        {stage === "urdu" && (
          <div className="sct-test-screen">
            <div className="sct-header">
              <h2>Urdu Section</h2>

              <div className="sct-timer">
                <FiClock />

                {formatTime(timeLeft)}
              </div>
            </div>

            <div className="sct-list urdu">
              {currentSet.urdu.map((sentence, index) => (
                <div key={index} className="sct-item">
                  <span>{index + 1}.</span>

                  {sentence}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================= */}
        {/* TIME UP */}
        {/* ================================= */}

        {stage === "timeup" && (
          <div className="sct-timeup">
            <h1>TIME UP</h1>

            <p>SCT Practice Test Completed</p>

            <div className="sct-finish-buttons">
              <button onClick={resetTest}>
                <FiRotateCcw />
                Practice Again
              </button>

              <button onClick={closeSCT}>Return</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SCT;
