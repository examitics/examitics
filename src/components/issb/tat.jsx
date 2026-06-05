import React, { useEffect, useState } from "react";
import { useRef } from "react";

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

  const [lastSetIndex, setLastSetIndex] = useState(null);

  // Current Story
  const currentItem = selectedSet?.[currentIndex];

  const startSound = useRef(new Audio("/sounds/buzzer.mp3"));

  const beepSound = useRef(new Audio("/sounds/beep.mp3"));

  const buzzerSound = useRef(new Audio("/sounds/buzzer.mp3"));

  // =========================
  // START TEST
  // =========================

  const handleStartTest = () => {
    // Safety Check
    if (!tatSets.length) return;

    let randomIndex;

    // Prevent same set appearing twice consecutively
    do {
      randomIndex = Math.floor(Math.random() * tatSets.length);
    } while (tatSets.length > 1 && randomIndex === lastSetIndex);

    setLastSetIndex(randomIndex);

    setSelectedSet(tatSets[randomIndex]);

    // Reset Complete Test State
    setCurrentIndex(0);

    setTestCompleted(false);

    setTestStarted(false);

    setPhase("observation");

    setTimeLeft(0);

    // Start Countdown
    setShowModal(false);

    setCountdown(3);
  };

  // =========================
  // COUNTDOWN ENGINE
  // =========================

  useEffect(() => {
    if (countdown === null) return;

    // if (countdown === 0) {
    //   if (!currentItem) return;

    //   setTestStarted(true);

    //   setPhase("observation");

    //   setTimeLeft(currentItem.observationTime);

    //   setCountdown(null);

    //   return;
    // }

    if (countdown === 0) {
      startSound.current.play();

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
        // Phase Ends
        if (prev === 1) {
          // Observation → Writing

          // if (phase === "observation") {
          //   setPhase("writing");

          //   return currentItem.writingTime;
          // }
          if (phase === "observation") {
            beepSound.current.currentTime = 0;

            beepSound.current.play();

            setPhase("writing");

            return currentItem.writingTime;
          }

          // Writing → Next Story
          if (phase === "writing") {
            // Last Story Finished
            // if (currentIndex === selectedSet.length - 1) {
            //   setTestCompleted(true);

            //   clearInterval(timer);

            //   return 0;
            // }

            if (phase === "writing") {
              buzzerSound.current.currentTime = 0;

              buzzerSound.current.play();

              if (currentIndex === selectedSet.length - 1) {
                setTestCompleted(true);

                clearInterval(timer);

                return 0;
              }

              const nextItem = selectedSet[currentIndex + 1];

              setCurrentIndex((prev) => prev + 1);

              setPhase("observation");

              return nextItem.observationTime;
            }

            // const nextItem = selectedSet[currentIndex + 1];

            setCurrentIndex((prev) => prev + 1);

            setPhase("observation");

            return nextItem.observationTime;
          }
        }

        // Prevent Negative Values
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
      >
        ✕
      </button>

      {/* INTRO MODAL */}

      {showModal && (
        <div className="tat-modal-overlay">
          <div className="tat-modal">
            <h2>Picture Story Practice</h2>

            <ul>
              <li>4 Picture Stories</li>

              <li>Picture shown for 30 seconds</li>

              <li>3.5 minutes story writing time</li>

              <li>2 Pointer Stories</li>

              <li>Pointer shown for 30 seconds</li>

              <li>3 minutes writing time</li>

              <li>Use your notebook/copy</li>
            </ul>

            <button className="tat-start-btn" onClick={handleStartTest}>
              Start Practice
            </button>
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
              {phase === "observation" ? "Observation Phase" : "Writing Phase"}
            </span>

            <span>{formatTime(timeLeft)}</span>
          </div>

          {/* OBSERVATION PHASE */}

          {phase === "observation" && (
            <>
              {currentItem?.type === "picture" && (
                <img
                  src={currentItem.image}
                  alt="Story"
                  className="tat-image"
                />
              )}

              {currentItem?.type === "pointer" && (
                <div className="pointer-box">{currentItem.text}</div>
              )}
            </>
          )}

          {/* WRITING PHASE */}

          {phase === "writing" && (
            <div className="writing-screen">
              <h1>WRITE YOUR STORY</h1>

              <p>Continue writing on your notebook/copy.</p>
            </div>
          )}
        </div>
      )}

      {/* COMPLETION SCREEN */}

      {testCompleted && (
        <div className="tat-completed">
          <h1>TEST COMPLETED</h1>

          <p>{selectedSet.length} Stories Completed Successfully</p>
        </div>
      )}
    </div>
  );
};

export default TAT;
