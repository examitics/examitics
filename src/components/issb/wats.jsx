import React, { useEffect, useState, useRef } from "react";

import "../../styles/wats.css";

import wordAssociationWordsSet1 from "../../data/wat/test1";
import wordAssociationWordsSet2 from "../../data/wat/test2";
import wordAssociationWordsSet3 from "../../data/wat/test3";
import wordAssociationWordsSet4 from "../../data/wat/test4";
import wordAssociationWordsSet5 from "../../data/wat/test5";

// const WATS = () => {
const WATS = ({ closeWAT }) => {
  const [showModal, setShowModal] = useState(false);

  const [selectedTest, setSelectedTest] = useState([]);

  const [countdown, setCountdown] = useState(null);

  const [testStarted, setTestStarted] = useState(false);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const [timeLeft, setTimeLeft] = useState(10);

  const [testCompleted, setTestCompleted] = useState(false);

  // sounds

  const beepSound = useRef(new Audio("/sounds/beep.mp3"));

  const buzzerSound = useRef(new Audio("/sounds/buzzer.mp3"));
  // OPEN MODAL
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // START TEST
  const handleStartTest = (testData) => {
    // RESET STATES
    setCurrentWordIndex(0);

    setTimeLeft(10);

    setTestCompleted(false);

    setTestStarted(false);

    // LOAD TEST
    setSelectedTest(testData);

    // CLOSE MODAL
    setShowModal(false);

    // FULLSCREEN MODE
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }

    // START COUNTDOWN
    setCountdown(3);
  };

  // COUNTDOWN LOGIC
  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      setTestStarted(true);

      setCountdown(null);

      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  // MAIN WAT TIMER ENGINE
  useEffect(() => {
    if (!testStarted) return;

    if (testCompleted) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        // MOVE TO NEXT WORD
        if (prevTime === 1) {
          // LAST WORD
          if (currentWordIndex === selectedTest.length - 1) {
            clearInterval(timer);

            // play buzzer sound
            buzzerSound.current.play();

            // EXIT FULLSCREEN
            if (document.fullscreenElement) {
              document.exitFullscreen();
            }

            setTestCompleted(true);

            return 0;
          }

          // beep sound

          // beepSound.play();
          beepSound.current.currentTime = 0;

          beepSound.current.play();

          // NEXT WORD
          setCurrentWordIndex((prev) => prev + 1);

          return 10;
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testStarted, currentWordIndex, selectedTest, testCompleted]);

  // right click disable
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <div className="wats-container">
    {/*  <button
        className="wats-exit-btn"
        onClick={() => {
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }

          closeWAT();
        }}
      >
        ✕
      </button>*/}
      <button
  className="wats-exit-btn"
  onClick={() => {

    const confirmExit = window.confirm(
      "Are you sure you want to exit the WAT test?"
    );

    if (!confirmExit) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    }

    closeWAT();
  }}
>
  ✕
</button>

      {/* COUNTDOWN SCREEN */}
      {countdown !== null && (
        <div className="countdown-screen">
          <h1>{countdown}</h1>
        </div>
      )}

      {/* HOME SCREEN */}
      {!testStarted && countdown === null && !testCompleted && (
        <>
          <div className="wats-header">
            <h1>WORD ASSOCIATION TEST</h1>

            <p>Psychological test simulation based on ISSB environment.</p>
          </div>

          <div className="wats-start-section">
            <button className="wats-start-btn" onClick={handleOpenModal}>
              Start WAT Test
            </button>
          </div>
        </>
      )}

      {/* TEST SCREEN */}
      {testStarted && !testCompleted && selectedTest.length > 0 && (
        <div className="wat-test-screen">
          {/* TOP INFO */}
          <div className="wat-top-bar">
            <div>
              Word {currentWordIndex + 1} / {selectedTest.length}
            </div>

            <div>{timeLeft}s</div>
          </div>

          {/* PROGRESS BAR */}
          <div className="wat-progress-wrapper">
            <div
              className="wat-progress-bar"
              style={{
                width: `${
                  ((currentWordIndex + 1) / selectedTest.length) * 100
                }%`,
              }}
            ></div>
          </div>

          {/* WORD */}
          <div className="wat-word-container">
            {/* <h1 className="wat-word">{selectedTest[currentWordIndex]?.word}</h1> */}
            <h1 key={currentWordIndex} className="wat-word">
              {selectedTest[currentWordIndex]?.word}
            </h1>
          </div>
        </div>
      )}

      {/* COMPLETED SCREEN */}
      {testCompleted && (
        <div className="wat-completed-screen">
          <h1>TEST COMPLETED</h1>

          <p>You have successfully completed the WAT.</p>
        </div>
      )}

      {/* MODAL */}
      {showModal && (
        <div className="wats-modal-overlay">
          <div className="wats-modal">
            <h2>WAT Instructions</h2>

            <ul>
              <li>100 words will be shown.</li>
              <li>Each word appears for 10 seconds only.</li>
              <li>Focus completely during the test.</li>
              <li>Think positive and realistic.</li>
              <li>No pause option available.</li>
              <li>Write quickly and naturally.</li>
            </ul>

            {/* TEST BUTTONS */}
            <div className="wats-test-links">
              <button
                className="wat-test-btn"
                onClick={() => handleStartTest(wordAssociationWordsSet1)}
              >
                WAT Test 1
              </button>

              <button
                className="wat-test-btn"
                onClick={() => handleStartTest(wordAssociationWordsSet2)}
              >
                WAT Test 2
              </button>

              <button
                className="wat-test-btn"
                onClick={() => handleStartTest(wordAssociationWordsSet3)}
              >
                WAT Test 3
              </button>

              <button
                className="wat-test-btn"
                onClick={() => handleStartTest(wordAssociationWordsSet4)}
              >
                WAT Test 4
              </button>

              <button
                className="wat-test-btn"
                onClick={() => handleStartTest(wordAssociationWordsSet5)}
              >
                WAT Test 5
              </button>
            </div>

            {/* CLOSE BUTTON */}
            <button
              className="wats-close-btn"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WATS;
