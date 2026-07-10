export default function PracticeHeader({
  current,
  total,
  timeLeft,
  timer,
}) {
  const progress = (current / total) * 100;

  function formatTime() {
    if (timeLeft === null) return "∞";

    return `${timeLeft}s`;
  }

  return (
    <div className="practice-header exa-card">

      <div className="practice-header-top">

        <div>

          <h2>Quick Math Practice</h2>

          <p>
            Question <strong>{current}</strong> of{" "}
            <strong>{total}</strong>
          </p>

        </div>

        <div className="practice-header-timer">

          <span>Per Question</span>

          <strong>{formatTime()}</strong>

        </div>

      </div>

      <div className="progress">

        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}