import { useEffect, useState } from "react";
import { FiX, FiMessageCircle, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/DefenceDayOfferPopup.css";

const OFFER_END = new Date("2026-09-07T00:00:00+05:00").getTime();

function getTimeLeft() {
  return Math.max(OFFER_END - Date.now(), 0);
}

function calculateTime(distance) {
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

function DefenceDayOfferPopup() {
  const navigate = useNavigate();
  const { user, profile, loading, isPremium } = useAuth();

  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    if (loading || isPremium) return;

    const dismissed = sessionStorage.getItem(
      "defenceDayOfferPopupDismissed"
    );

    if (dismissed === "true") return;

    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 6000);

    return () => clearTimeout(showTimer);
  }, [loading, isPremium]);

  useEffect(() => {
    if (!visible) return;

    const timer = setInterval(() => {
      const remaining = getTimeLeft();

      setTimeLeft(remaining);

      if (remaining <= 0) {
        setVisible(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [visible]);

  const closePopup = () => {
    sessionStorage.setItem("defenceDayOfferPopupDismissed", "true");
    setVisible(false);
  };

  const handlePlans = () => {
    closePopup();
    navigate("/premium/plans");
  };

  const handleWhatsApp = () => {
    closePopup();

    window.open(
      "https://wa.me/923014709158?text=Hi%20Examatics%2C%20I%20want%20to%20get%20the%20Defence%20Day%20Premium%20Offer.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleFree = () => {
    closePopup();
  };

  // Don't show to premium users, admins, or after expiry
  if (
    loading ||
    isPremium ||
    profile?.role === "admin" ||
    timeLeft <= 0 ||
    !visible
  ) {
    return null;
  }

  const time = calculateTime(timeLeft);

  return (
    <div className="defence-popup-overlay">
      <div
        className="defence-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="defence-popup-title"
      >
        <button
          type="button"
          className="defence-popup-close"
          onClick={closePopup}
          aria-label="Close offer"
        >
          <FiX />
        </button>

        <div className="defence-popup-content">

          <div className="defence-popup-badge">
            🇵🇰 DEFENCE DAY SPECIAL OFFER
          </div>
          <div className="defence-popup-badge">
          🇵🇰 PMA 159 Long Course Initial Test Preparation
          </div>
          <h2 id="defence-popup-title">
            Upgrade Your Exam Preparation
          </h2>

          <p className="defence-popup-description">
            Get access to premium mock tests and additional
            preparation resources at our special Defence Day prices.
          </p>

          <div className="defence-popup-countdown-label">
            OFFER ENDS IN
          </div>

          <div className="defence-popup-countdown">

            <div className="defence-popup-time">
              <strong>{String(time.days).padStart(2, "0")}</strong>
              <span>Days</span>
            </div>

            <div className="defence-popup-time">
              <strong>{String(time.hours).padStart(2, "0")}</strong>
              <span>Hours</span>
            </div>

            <div className="defence-popup-time">
              <strong>{String(time.minutes).padStart(2, "0")}</strong>
              <span>Min</span>
            </div>

            <div className="defence-popup-time">
              <strong>{String(time.seconds).padStart(2, "0")}</strong>
              <span>Sec</span>
            </div>

          </div>

          <div className="defence-popup-actions">

            <button
              type="button"
              className="defence-popup-primary"
              onClick={handlePlans}
            >
              See Premium Plans
              <FiArrowRight />
            </button>

            <button
              type="button"
              className="defence-popup-whatsapp"
              onClick={handleWhatsApp}
            >
              <FiMessageCircle />
              Contact on WhatsApp
            </button>

            <button
              type="button"
              className="defence-popup-free"
              onClick={handleFree}
            >
              Continue with Free
            </button>

          </div>

          <p className="defence-popup-note">
            Limited-time Defence Day pricing. Offer ends 7 September 2026.
          </p>

        </div>
      </div>
    </div>
  );
}

export default DefenceDayOfferPopup;