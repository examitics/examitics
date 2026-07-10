import { useNavigate } from "react-router-dom";

export default function QuickMathCTA() {

  const navigate = useNavigate();

  return (
    <section className="qm-cta exa-card">

      <h2>Ready to Improve Your Mental Math?</h2>

      <p>
        Practice unlimited questions and prepare for ISSB with confidence.
      </p>

      <button
        className="exa-btn exa-btn-primary"
        onClick={() => navigate("/quick-math/setup")}
      >
        Start Practice
      </button>

    </section>
  );
}