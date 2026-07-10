import {
  FiCheckCircle,
  FiXCircle,
  FiClock,
  FiGrid,
  FiAward,
  FiBarChart2,
} from "react-icons/fi";

export default function PracticeSidebar({
  current,
  total,
  correct,
  wrong,
  missed,
  category,
  difficulty,
  timer,
}) {

  const remaining = total - current + 1;

  const answered = correct + wrong;

  const accuracy =
    answered === 0
      ? 0
      : Math.round((correct / answered) * 100);

  return (

    <aside className="practice-sidebar exa-card">

      <h3>Session Summary</h3>

      <div className="summary-card">

        <div className="summary-row">
          <FiGrid />
          <span>Category</span>
          <strong>{category}</strong>
        </div>

        <div className="summary-row">
          <FiBarChart2 />
          <span>Difficulty</span>
          <strong>{difficulty}</strong>
        </div>

        <div className="summary-row">
          <FiClock />
          <span>Timer</span>
          <strong>{timer}</strong>
        </div>

      </div>

      <h3 className="stats-heading">
        Live Statistics
      </h3>

      <div className="stat">

        <span>
          <FiCheckCircle />
          Correct
        </span>

        <strong className="success">
          {correct}
        </strong>

      </div>

      <div className="stat">

        <span>
          <FiXCircle />
          Wrong
        </span>

        <strong className="danger">
          {wrong}
        </strong>

      </div>

      <div className="stat">

        <span>
          <FiClock />
          Missed
        </span>

        <strong className="warning">
          {missed}
        </strong>

      </div>

      <div className="stat">

        <span>
          <FiAward />
          Accuracy
        </span>

        <strong>
          {accuracy}%
        </strong>

      </div>

      <div className="stat">

        <span>
          Remaining
        </span>

        <strong>
          {remaining}
        </strong>

      </div>

    </aside>

  );

}