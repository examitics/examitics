import "./QuickMathPractice.css";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  generateAddition,
  generateMultiplication,
  generateDivision,
  generatePercentage,
  generateAreaFinding,
  generateSpeedTimeDistance,
  generateMixed,
} from "../../data/quickMath/generators";

import PracticeHeader from "../../components/QuickMath/PracticeHeader";
import QuestionCard from "../../components/QuickMath/QuestionCard";
import PracticeSidebar from "../../components/QuickMath/PracticeSidebar";

import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";

export default function QuickMathPractice() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    category = "Mixed Practice",
    difficulty = "Easy",
    questions = 20,
    timer = "10 Seconds",
  } = state || {};

  const timerMap = {
    "5 Seconds": 5,
    "10 Seconds": 10,
    "15 Seconds": 15,
    "20 Seconds": 20,
    "30 Seconds": 30,
    Unlimited: null,
  };

  const TOTAL = Number(questions);

  const QUESTION_TIME = timerMap[timer];

  const [question, setQuestion] = useState({});
  const [current, setCurrent] = useState(1);

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [missed, setMissed] = useState(0);

  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  function getQuestion() {
    switch (category) {
      case "Addition":
        return generateAddition(difficulty);

      case "Multiplication":
        return generateMultiplication(difficulty);

      case "Division":
        return generateDivision(difficulty);

      case "Percentage":
        return generatePercentage(difficulty);

      case "Mixed Practice":
        return generateMixed(difficulty);
        
        case "Area Finding":
  return generateAreaFinding(difficulty);

case "Speed, Time & Distance":
  return generateSpeedTimeDistance(difficulty);

      default:
        return generateMixed(difficulty);
    }
  }

  useEffect(() => {
    setQuestion(getQuestion());
  }, []);

  function finishPractice() {
    navigate("/quick-math/result", {
      state: {
        total: TOTAL,
        correct,
        wrong,
        missed,
        category,
        difficulty,
        timer, 
      },
    });
  }

  function moveToNextQuestion() {
    if (current >= TOTAL) {
      finishPractice();
      return;
    }

    setCurrent((prev) => prev + 1);

    setQuestion(getQuestion());

    if (QUESTION_TIME !== null) {
      setTimeLeft(QUESTION_TIME);
    }
  }

  function handleTimeUp() {
    setMissed((prev) => prev + 1);

    moveToNextQuestion();
  }

  useEffect(() => {
    if (QUESTION_TIME === null) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);

          handleTimeUp();

          return QUESTION_TIME;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [current]);

  function nextQuestion(isCorrect) {
    if (isCorrect) {
      setCorrect((prev) => prev + 1);
    } else {
      setWrong((prev) => prev + 1);
    }

    moveToNextQuestion();
  }
    return (
        <>
        <Navbar />
    <main className="qm-practice-page section-padding">
      <div className="container-custom">

        <PracticeHeader
          current={current}
          total={TOTAL}
          timeLeft={timeLeft}
          timer={timer}
        />

        <div className="practice-layout">

          <QuestionCard
            question={question}
            onNext={nextQuestion}
            timeLeft={timeLeft}
          />

          <PracticeSidebar
            current={current}
            total={TOTAL}
            correct={correct}
            wrong={wrong}
            missed={missed}
            category={category}
            difficulty={difficulty}
            timer={timer}
          />

        </div>

      </div>
    </main>
    <Footer />
    </>
  );
}