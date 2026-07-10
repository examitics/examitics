import { FiZap, FiClock } from "react-icons/fi";

export default function QuickMathHero() {
  return (
    <section className="qm-hero exa-card">

      <div className="qm-hero-content">

        <span className="exa-badge exa-badge-success">
          ISSB Preparation
        </span>

        <h1>Quick Math Practice</h1>

        <p>
          Improve your mental calculation speed with unlimited
          dynamically generated questions designed for ISSB preparation.
        </p>

        <div className="qm-hero-info">

          <div className="qm-info">
            <FiZap />
            Unlimited Questions
          </div>

          <div className="qm-info">
            <FiClock />
            Timed Practice
          </div>

        </div>

      </div>

      <div className="qm-hero-image">
        <img
          src="/images/quick-math-banner.png"
          alt="Quick Math Practice"
        />
      </div>

    </section>
  );
}