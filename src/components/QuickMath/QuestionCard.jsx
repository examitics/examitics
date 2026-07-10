import { useEffect, useRef, useState } from "react";

export default function QuestionCard({
  question,
  onNext,
  timeLeft,
}) {
  const [answer, setAnswer] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    setAnswer("");
    inputRef.current?.focus();
  }, [question]);

  function submit() {
    if (answer.trim() === "") return;

    const isCorrect =
      Number(answer) === Number(question.answer);

    onNext(isCorrect);

    setAnswer("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      submit();
    }
  }

  function getTimerClass() {
    if (timeLeft === null) return "";

    if (timeLeft <= 2) return "danger";

    if (timeLeft <= 5) return "warning";

    return "normal";
  }

  return (
    <div className="question-card exa-card">

      {timeLeft !== null && (
        <div className={`countdown-circle ${getTimerClass()}`}>

          <span>{timeLeft}</span>

        </div>
      )}

      <h1 className="question-title">

        {question.question}

      </h1>

      <input
        ref={inputRef}
        type="number"
        inputMode="numeric"
        className="exa-input question-input"
        placeholder="Enter Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        className="exa-btn exa-btn-primary question-submit"
        onClick={submit}
      >
        Submit Answer
      </button>

      <p className="question-tip">
        Press <strong>Enter</strong> to submit quickly.
      </p>

    </div>
  );
}