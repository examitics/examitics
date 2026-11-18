
import React, { useEffect, useRef, useState } from "react";

import "../../styles/tat.css";
import tatSets from "../../data/tat";

const TAT = ({ closeTAT }) => {
  // =========================
  // STATE
  // =========================

  const [showModal, setShowModal] = useState(true);
  const [countdown, setCountdown] = useState(null);
  const [testStarted, setTestStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState("observation");
  const [timeLeft, setTimeLeft] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [selectedSet, setSelectedSet] = useState([]);

  // Current Story
  const currentItem = selectedSet?.[currentIndex];

  // Sounds
  const startSound = useRef(new Audio("/sounds/buzzer.mp3"));
  const beepSound = useRef(new Audio("/sounds/beep.mp3"));
  const buzzerSound = useRef(new Audio("/sounds/buzzer.mp3"));

  // =========================
  // START SELECTED TEST
  // =========================

  const handleStartTest = (setIndex) => {
    const chosenSet = tatSets[setIndex];

    if (!chosenSet || !chosenSet.length) return;

    // Select candidate's chosen set
    setSelectedSet(chosenSet);

    // Reset test state
    setCurrentIndex(0);
    setTestCompleted(false);
    setTestStarted(false);
    setPhase("observation");
    setTimeLeft(0);

    // Close selection modal
    setShowModal(false);

    // Start countdown
    setCountdown(3);
  };

  // =========================
  // COUNTDOWN ENGINE
  // =========================

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      startSound.current.currentTime = 0;
      startSound.current.play().catch(() => {});

      if (!currentItem) return;

      setTestStarted(true);
      setPhase("observation");
      setTimeLeft(currentItem.observationTime);
      setCountdown(null);

      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, currentItem]);

  // =========================
  // MAIN TEST ENGINE
  // =========================

  useEffect(() => {
    if (!testStarted || testCompleted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        // Current phase has ended
        if (prev === 1) {
          // Observation -> Writing
          if (phase === "observation") {
            beepSound.current.currentTime = 0;
            beepSound.current.play().catch(() => {});

            setPhase("writing");

            return currentItem.writingTime;
          }

          // Writing -> Next Story
          if (phase === "writing") {
            buzzerSound.current.currentTime = 0;
            buzzerSound.current.play().catch(() => {});

            // Last story completed
            if (currentIndex === selectedSet.length - 1) {
              setTestCompleted(true);
              clearInterval(timer);

              return 0;
            }

            // Move to next story
            const nextItem = selectedSet[currentIndex + 1];

            setCurrentIndex((prevIndex) => prevIndex + 1);
            setPhase("observation");

            return nextItem.observationTime;
          }
        }

        // Prevent negative timer
        return Math.max(prev - 1, 0);
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [
    testStarted,
    testCompleted,
    phase,
    currentIndex,
    currentItem,
    selectedSet,
  ]);

  // =========================
  // TIME FORMATTER
  // =========================

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // =========================
  // UI
  // =========================

  return (
    <div className="tat-container">

      {/* EXIT BUTTON */}

      <button
        className="tat-exit-btn"
        onClick={() => {
          const confirmExit = window.confirm("Exit TAT Practice?");

          if (!confirmExit) return;

          closeTAT();
        }}
        aria-label="Exit TAT practice"
      >
        ✕
      </button>

      {/* SET SELECTION MODAL */}

      {showModal && (
        <div className="tat-modal-overlay">
          <div className="tat-modal">

            <div className="tat-modal-heading">
              <span className="tat-modal-eyebrow">
                EXAMITICS ISSB PRACTICE
              </span>

              <h2>Select Your TAT Practice Set</h2>

              <p>
                Choose one of the three available sets to begin your
                picture story practice.
              </p>
            </div>

            {/* SET BUTTONS */}

            <div className="tat-set-selection">

              {tatSets.map((set, index) => (
                <button
                  key={index}
                  type="button"
                  className="tat-set-btn"
                  onClick={() => handleStartTest(index)}
                >
                  <span className="tat-set-number">
                    SET {index + 1}
                  </span>

                  <span className="tat-set-description">
                    {set.length} Stories
                  </span>

                  <span className="tat-set-arrow">
                    Start Practice →
                  </span>
                </button>
              ))}

            </div>

            {/* TEST INSTRUCTIONS */}

            <div className="tat-instructions">

              <h3>Test Instructions</h3>

              <ul>
                <li>4 Picture Stories</li>
                <li>30 seconds observation time for each picture</li>
                <li>3.5 minutes writing time for each picture</li>
                <li>2 Pointer Stories</li>
                <li>30 seconds observation time for each pointer</li>
                <li>3 minutes writing time for each pointer</li>
                <li>Write your stories in your notebook/copy</li>
              </ul>

            </div>

            <p className="tat-modal-note">
              Select a set to begin. A 3-second countdown will start
              before the first story appears.
            </p>

          </div>
        </div>
      )}

      {/* COUNTDOWN SCREEN */}

      {countdown !== null && (
        <div className="tat-countdown">
          <h1>{countdown}</h1>
        </div>
      )}

      {/* TEST SCREEN */}

      {testStarted && !testCompleted && countdown === null && (
        <div className="tat-test-screen">

          <div className="tat-top-bar">

            <span>
              Story {currentIndex + 1} / {selectedSet.length}
            </span>

            <span className="phase-indicator">
              {phase === "observation"
                ? "Observation Phase"
                : "Writing Phase"}
            </span>

            <span>{formatTime(timeLeft)}</span>

          </div>

          {/* OBSERVATION PHASE */}

          {phase === "observation" && (
            <>
              {currentItem?.type === "picture" && (
                <img
                  src={currentItem.image}
                  alt={`TAT picture story ${currentIndex + 1}`}
                  className="tat-image"
                />
              )}

              {currentItem?.type === "pointer" && (
                <div className="pointer-box">
                  {currentItem.text}
                </div>
              )}
            </>
          )}

          {/* WRITING PHASE */}

          {phase === "writing" && (
            <div className="writing-screen">

              <h1>WRITE YOUR STORY</h1>

              <p>
                Continue writing on your notebook/copy.
              </p>

            </div>
          )}

        </div>
      )}

      {/* COMPLETION SCREEN */}

      {testCompleted && (
        <div className="tat-completed">

          <h1>TEST COMPLETED</h1>

          <p>
            {selectedSet.length} Stories Completed Successfully
          </p>

          <p className="tat-completed-subtitle">
            You have successfully completed your TAT practice session.
          </p>

          <button
            className="tat-start-btn tat-restart-btn"
            onClick={() => {
              setTestStarted(false);
              setTestCompleted(false);
              setCurrentIndex(0);
              setTimeLeft(0);
              setPhase("observation");
              setSelectedSet([]);
              setShowModal(true);
            }}
          >
            Practice Another Set
          </button>

        </div>
      )}

    </div>
  );
};

export default TAT;
