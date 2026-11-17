
import React from "react";
import {
  FiTag,
  FiX,
  FiArrowRight,
} from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import "./AnnouncementBar.css";

const WHATSAPP_NUMBER = "923014709158";

// Offer remains valid through November 20
// Pakistan time (UTC+5).
const OFFER_END = new Date(
  "2026-11-21T00:00:00+05:00"
).getTime();

const AnnouncementBar = () => {
  const { user, isPremium, loading } = useAuth();

  const [visible, setVisible] = React.useState(true);
  const [offerActive, setOfferActive] = React.useState(
    () => Date.now() < OFFER_END
  );

  React.useEffect(() => {
    const remaining = OFFER_END - Date.now();

    if (remaining <= 0) {
      setOfferActive(false);
      return;
    }

    const timeout = window.setTimeout(() => {
      setOfferActive(false);
    }, remaining);

    return () => window.clearTimeout(timeout);
  }, []);

  const shouldShow =
    !loading &&
    !(user && isPremium) &&
    visible &&
    offerActive;

  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--announcement-height",
      shouldShow ? "44px" : "0px"
    );

    return () => {
      document.documentElement.style.setProperty(
        "--announcement-height",
        "0px"
      );
    };
  }, [shouldShow]);

  if (!shouldShow) {
    return null;
  }

  const whatsappMessage = encodeURIComponent(
    "Assalam o Alaikum, I want to avail the EXAMITICS limited-time offer: 1 Month Premium Access for all premium mock tests for Rs. 500 /-. Please guide me through payment and activation."
  );
  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const AnnouncementContent = ({ duplicate = false }) => (
    <div
      className="announcement-group"
      aria-hidden={duplicate ? "true" : undefined}
    >
      <div className="announcement-item">

        <span className="announcement-badge offer-badge">
          <FiTag />
        </span>

        <span className="announcement-label offer-label">
          LIMITED-TIME OFFER
        </span>

        <span className="announcement-message">
          — 1 MONTH PREMIUM
        </span>

        <span className="announcement-old-price">
          Rs. 1,500
        </span>

        <strong className="announcement-offer-price">
          Rs. 500
        </strong>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="announcement-cta"
          tabIndex={duplicate ? -1 : undefined}
        >
          <span>GET PREMIUM</span>
          <FiArrowRight />
        </a>
      </div>

      <span className="announcement-separator">•</span>

      <div className="announcement-item announcement-highlight">
        <span className="announcement-dot" />
        <strong>
          ALL MOCK TESTS: PMA LC • PAF • NAVY • AFNS
        </strong>
      </div>

      <span className="announcement-separator">•</span>

      <div className="announcement-item">
        <strong className="announcement-deadline">
          OFFER VALID TILL 20 NOVEMBER 2026
        </strong>
      </div>

      <span className="announcement-separator">•</span>
    </div>
  );

  return (
    <div className="announcement-bar">

      <div className="announcement-viewport">

        <div className="announcement-fade announcement-fade-left" />

        <div className="announcement-track">
          <AnnouncementContent />
          <AnnouncementContent duplicate />
        </div>

        <div className="announcement-fade announcement-fade-right" />

      </div>

      <button
        type="button"
        className="announcement-close"
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
      >
        <FiX />
      </button>

    </div>
  );
};

export default AnnouncementBar;
