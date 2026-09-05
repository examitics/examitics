import { useLocation, useNavigate } from "react-router-dom";
import {
  FiLock,
  FiCheck,
  FiArrowLeft,
  FiMessageCircle,
} from "react-icons/fi";

import { useAuth } from "../context/AuthContext";
import "../styles/Premium.css";

function Premium() {
  const { user, isPremium, subscription } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  // Examitics WhatsApp number
  const whatsappNumber = "923014709158";

  const handleContinue = () => {
    const destination =
      location.state?.from?.pathname || "/";

    navigate(destination);
  };

  const handleLogin = () => {
    navigate("/login", {
      state: {
        from: location.state?.from || {
          pathname: "/",
        },
      },
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Examitics,\n\nI want to know more about Premium access/subscription and exam preparation guidance."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="premium-page">
      <div className="premium-container">

        {/* Back button */}
        <button
          type="button"
          className="premium-back-btn"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft />
          Back
        </button>

        {/* Main card */}
        <section className="premium-card">

          <div className="premium-icon">
            <FiLock />
          </div>

          <span className="premium-badge">
            PREMIUM CONTENT
          </span>

          <h1>
            Unlock Examitics Premium
          </h1>

          <p className="premium-description">
            Get access to advanced mock tests, extended
            question banks and premium exam preparation
            material designed to help you prepare more
            effectively.
          </p>

          {/* User status */}
          {user && (
            <div className="premium-status">
              <div>
                <span className="status-label">
                  Current Plan
                </span>

                <strong>
                  {subscription?.plan
                    ? subscription.plan.charAt(0).toUpperCase() +
                      subscription.plan.slice(1)
                    : "Free"}
                </strong>
              </div>

              <div>
                <span className="status-label">
                  Access
                </span>

                <strong>
                  {isPremium ? "Premium" : "Free"}
                </strong>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="premium-features">

            <div className="premium-feature">
              <span className="feature-icon">
                <FiCheck />
              </span>

              <span>
                Advanced mock tests
              </span>
            </div>

            <div className="premium-feature">
              <span className="feature-icon">
                <FiCheck />
              </span>

              <span>
                Extended MCQ question banks
              </span>
            </div>

            <div className="premium-feature">
              <span className="feature-icon">
                <FiCheck />
              </span>

              <span>
                Premium exam preparation material
              </span>
            </div>

            <div className="premium-feature">
              <span className="feature-icon">
                <FiCheck />
              </span>

              <span>
                More practice opportunities
              </span>
            </div>

          </div>

          {/* WhatsApp Contact */}
          <div className="premium-whatsapp-box">

            <div className="premium-whatsapp-icon">
              <FiMessageCircle />
            </div>

            <div className="premium-whatsapp-content">
              <h3>
                Need Premium Access?
              </h3>

              <p>
                Contact us on WhatsApp for subscription
                assistance, payment guidance, or exam
                preparation guidance.
              </p>

              <strong>
                WhatsApp: 0301 4709158
              </strong>
            </div>

            <button
              type="button"
              className="premium-whatsapp-btn"
              onClick={handleWhatsApp}
            >
              <FiMessageCircle />
              Chat on WhatsApp
            </button>

          </div>

          {/* Action */}
          {!user ? (
            <button
              type="button"
              className="premium-primary-btn"
              onClick={handleLogin}
            >
              Login to Continue
            </button>
          ) : isPremium ? (
            <button
              type="button"
              className="premium-primary-btn"
              onClick={handleContinue}
            >
              Continue to Premium Content
            </button>
          ) : (
            <button
              type="button"
              className="premium-primary-btn"
              onClick={() => navigate("/premium/plans")}
            >
              View Premium Plans
            </button>
          )}

          <p className="premium-note">
            Premium access is linked to your Examitics
            account.
          </p>

        </section>

      </div>
    </main>
  );
}

export default Premium;