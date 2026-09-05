import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCheck,
  FiMessageCircle,
  FiShield,
  FiStar,
  FiZap,
  FiBookOpen,
  FiUsers,
  FiHeadphones,
  FiRefreshCw,
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import "../styles/PremiumPlans.css";
import DefenceDayCountdown from "../components/DefenceDayCountdown";
function PremiumPlans() {
  const { user, isPremium } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const whatsappNumber = "923014709158";

  const handleWhatsApp = (planName, price) => {
    const accountEmail = user?.email
      ? `\nMy Examitics account email is: ${user.email}`
      : "";

    const message = encodeURIComponent(
      `Hello Examitics,\n\nI want to get the ${planName} Premium Plan (${price}).${accountEmail}\n\nPlease guide me through the payment and premium activation process.`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleBack = () => {
    if (location.state?.from) {
      navigate("/premium", {
        state: {
          from: location.state.from,
        },
      });
      return;
    }

    navigate("/premium");
  };

  return (
    <main className="premium-plans-page">
      <div className="premium-plans-container">

        {/* Back */}
        <button
          type="button"
          className="premium-plans-back-btn"
          onClick={handleBack}
        >
          <FiArrowLeft />
          Back to Premium
        </button>

        {/* Header */}
        <section className="premium-plans-header">
          <span className="premium-plans-badge">
            EXAMITICS PREMIUM
          </span>

          <h1>
            Your Complete Exam
            <span> Preparation Support</span>
          </h1>

          <p>
            Go beyond mock tests. Get premium practice, regularly
            updated preparation material, a dedicated WhatsApp
            community, and priority support throughout your
            preparation.
          </p>
        </section>

        {/* Active Premium */}
        {user && isPremium && (
          <div className="premium-active-notice">
            <FiShield />

            <div>
              <strong>Your Premium Access Is Active</strong>
              <span>
                You already have access to Examitics Premium content
                and services.
              </span>
            </div>
          </div>
        )}

        {/* Defence Day Countdown */}
        <DefenceDayCountdown />

        {/* Pricing */}
        <section className="premium-plans-grid">

          {/* MONTHLY */}
          <article className="premium-plan-card">

            <div className="premium-plan-icon">
              <FiZap />
            </div>

            <span className="premium-plan-type">
              MONTHLY
            </span>

            <h2>Monthly</h2>

            <div className="premium-plan-price">
  <span className="premium-original-price">
    Rs. 2,000
  </span>

  <div className="premium-current-price">
    <span className="premium-currency">Rs.</span>
    <strong>1,000</strong>
    <span className="premium-period">/ month</span>
  </div>
</div>

            <p className="premium-plan-description">
              Flexible premium access for candidates preparing
              for an upcoming examination.
            </p>

            <ul className="premium-plan-features">
              <li>
                <FiCheck />
                Premium mock tests
              </li>

              <li>
                <FiCheck />
                Progress tracking and performance analysis
              </li>

              <li>
                <FiCheck />
                Exclusive question banks
              </li>

              <li>
                <FiCheck />
                Regularly updated preparation material
              </li>

              <li>
                <FiCheck />
                Premium WhatsApp community
              </li>

              <li>
                <FiCheck />
                Candidate support
              </li>

              <li>
                <FiCheck />
                New premium content during subscription
              </li>
            </ul>

            <button
              type="button"
              className="premium-plan-btn"
              onClick={() =>
                handleWhatsApp("Monthly", "Rs. 1,000")
              }
              disabled={isPremium}
            >
              <FiMessageCircle />

              {isPremium
                ? "Premium Active"
                : "Get Monthly Plan"}
            </button>
          </article>

          {/* YEARLY */}
          <article className="premium-plan-card premium-plan-featured">

            <div className="premium-popular-badge">
              <FiStar />
              BEST VALUE
            </div>

            <div className="premium-plan-icon">
              <FiStar />
            </div>

            <span className="premium-plan-type">
              YEARLY
            </span>

            <h2>Yearly</h2>

            <div className="premium-plan-price">
  <span className="premium-original-price">
    Rs. 3,000
  </span>

  <div className="premium-current-price">
    <span className="premium-currency">Rs.</span>
    <strong>1,500</strong>
    <span className="premium-period">/ year</span>
  </div>
</div>

            <div className="premium-saving">
              Best value for continuous preparation
            </div>

            <p className="premium-plan-description">
              Stay connected with Examitics throughout your
              preparation with continuous premium access.
            </p>

            <ul className="premium-plan-features">
              <li>
                <FiCheck />
                Everything in Monthly
              </li>

              <li>
                <FiCheck />
                Progress tracking and performance analysis
              </li>

              <li>
                <FiCheck />
                12 months premium access
              </li>

              <li>
                <FiCheck />
                All premium mock tests
              </li>

              <li>
                <FiCheck />
                Regularly updated preparation material
              </li>

              <li>
                <FiCheck />
                Premium WhatsApp community
              </li>

              <li>
                <FiCheck />
                Priority candidate support
              </li>

              <li>
                <FiCheck />
                New premium content during subscription
              </li>
            </ul>

            <button
              type="button"
              className="premium-plan-btn premium-plan-btn-featured"
              onClick={() =>
                handleWhatsApp("Yearly", "Rs. 1,500")
              }
              disabled={isPremium}
            >
              <FiMessageCircle />

              {isPremium
                ? "Premium Active"
                : "Get Yearly Plan"}
            </button>
          </article>

          {/* LIFETIME */}
          <article className="premium-plan-card">

            <div className="premium-lifetime-badge">
              LONG-TERM VALUE
            </div>

            <div className="premium-plan-icon">
              <FiShield />
            </div>

            <span className="premium-plan-type">
              LIFETIME
            </span>

            <h2>Lifetime</h2>

           <div className="premium-plan-price">
  <span className="premium-original-price">
    Rs. 3,500
  </span>

  <div className="premium-current-price">
    <span className="premium-currency">Rs.</span>
    <strong>2,500</strong>
    <span className="premium-period">
      one-time
    </span>
  </div>
</div>

            <div className="premium-saving">
              No recurring payment
            </div>

            <p className="premium-plan-description">
              One-time access for candidates who want long-term
              preparation support from Examitics.
            </p>

            <ul className="premium-plan-features">
              <li>
                <FiCheck />
                Everything in Yearly
              </li>

              <li>
                <FiCheck />
                Lifetime premium content access
              </li>

              <li>
                <FiCheck />
                Premium WhatsApp community
              </li>

              <li>
                <FiCheck />
                Regularly updated preparation material
              </li>

              <li>
                <FiCheck />
                Candidate support
              </li>

              <li>
                <FiCheck />
                Progress tracking and performance analysis
              </li>

              <li>
                <FiCheck />
                Future premium mock tests
              </li>

              <li>
                <FiCheck />
                Future premium preparation material
              </li>
            </ul>

            <button
              type="button"
              className="premium-plan-btn"
              onClick={() =>
                handleWhatsApp("Lifetime", "Rs. 2,500")
              }
              disabled={isPremium}
            >
              <FiMessageCircle />

              {isPremium
                ? "Premium Active"
                : "Get Lifetime Access"}
            </button>
          </article>

        </section>

        {/* Premium Benefits */}
        <section className="premium-benefits-section">

          <div className="premium-section-heading">
            <span>WHAT YOU GET</span>

            <h2>
              More Than Just Mock Tests
            </h2>

            <p>
              Examitics Premium is designed to provide continuous
              preparation support to serious candidates.
            </p>
          </div>

          <div className="premium-benefits-grid">

            <div className="premium-benefit-card">
              <div className="premium-benefit-icon">
                <FiBookOpen />
              </div>

              <h3>Premium Mock Tests</h3>

              <p>
                Practice with exclusive exam-style mock tests
                and advanced question banks designed for
                competitive exam preparation.
              </p>
            </div>

            <div className="premium-benefit-card">
              <div className="premium-benefit-icon">
                <FiRefreshCw />
              </div>

              <h3>Regularly Updated Material</h3>

              <p>
                Receive new and updated preparation resources,
                practice material, and important exam-related
                information regularly.
              </p>
            </div>

            <div className="premium-benefit-card">
              <div className="premium-benefit-icon">
                <FiUsers />
              </div>

              <h3>Premium WhatsApp Community</h3>

              <p>
                Premium candidates can join the Examitics
                Premium WhatsApp community for preparation
                discussions, resources, and important updates.
              </p>
            </div>

            <div className="premium-benefit-card">
              <div className="premium-benefit-icon">
                <FiHeadphones />
              </div>

              <h3>Candidate Support</h3>

              <p>
                Get assistance with mock tests, preparation
                questions, platform usage, and general exam
                preparation guidance.
              </p>
            </div>

          </div>
        </section>

        {/* WhatsApp */}
        <section className="premium-plans-whatsapp">

          <div className="premium-plans-whatsapp-icon">
            <FiMessageCircle />
          </div>

          <div className="premium-plans-whatsapp-content">
            <h3>Need Help Choosing a Plan?</h3>

            <p>
              Contact Examitics on WhatsApp for premium
              subscription assistance, payment guidance, or
              exam preparation questions.
            </p>

            <span>
              WhatsApp: 0301 4709158
            </span>
          </div>

          <button
            type="button"
            className="premium-plans-whatsapp-btn"
            onClick={() =>
              handleWhatsApp("Premium", "a premium plan")
            }
          >
            <FiMessageCircle />
            Chat on WhatsApp
          </button>

        </section>

        {/* How It Works */}
        <section className="premium-how-it-works">

          <div className="premium-section-heading">
            <span>HOW IT WORKS</span>

            <h2>
              Get Premium in 3 Simple Steps
            </h2>
          </div>

          <div className="premium-steps">

            <div className="premium-step">
              <div className="premium-step-number">1</div>

              <h3>Choose a Plan</h3>

              <p>
                Select the premium plan that best fits your
                preparation needs.
              </p>
            </div>

            <div className="premium-step">
              <div className="premium-step-number">2</div>

              <h3>Contact Examitics</h3>

              <p>
                Contact us on WhatsApp and receive payment
                instructions.
              </p>
            </div>

            <div className="premium-step">
              <div className="premium-step-number">3</div>

              <h3>Get Activated</h3>

              <p>
                After payment verification, your Premium
                access will be activated on your account.
              </p>
            </div>

          </div>
        </section>

        {/* Security */}
        <div className="premium-plans-note">
          <FiShield />

          <span>
            Premium access is securely linked to your Examitics
            account. Never share your password or OTP with anyone.
          </span>
        </div>

      </div>
    </main>
  );
}

export default PremiumPlans;