import React from "react";
import { FiMessageCircle, FiX, FiArrowRight } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import "./AnnouncementBar.css";

const WHATSAPP_NUMBER = "923014709158";

const AnnouncementBar = () => {
  const { user, isPremium, loading } = useAuth();
  const [visible, setVisible] = React.useState(true);
React.useEffect(() => {
  if (loading || (user && isPremium) || !visible) {
    document.documentElement.style.setProperty(
      "--announcement-height",
      "0px"
    );
  } else {
    document.documentElement.style.setProperty(
      "--announcement-height",
      "44px"
    );
  }

  return () => {
    document.documentElement.style.setProperty(
      "--announcement-height",
      "0px"
    );
  };
}, [loading, user, isPremium, visible]);
  // Prevent the bar from flashing while authentication is loading
  if (loading) {
    return null;
  }

  // Premium users do not need this promotion
  if (user && isPremium) {
    return null;
  }

  if (!visible) {
    return null;
  }

  const whatsappMessage = encodeURIComponent(
    "Assalam o Alaikum, I want complete preparation and guidance for PMA 159 Long Course."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const AnnouncementContent = ({ duplicate = false }) => (
    <div
      className="announcement-group"
      aria-hidden={duplicate ? "true" : undefined}
    >
      <div className="announcement-item">
        <span className="announcement-badge">
          <FiMessageCircle />
        </span>

        <span className="announcement-label">
          PMA 159 Long Course
        </span>

        <span className="announcement-message">
          Preparation is ON — Complete preparation, guidance & support
        </span>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="announcement-cta"
          tabIndex={duplicate ? -1 : undefined}
        >
          <span>Get Guidance</span>
          <FiArrowRight />
        </a>
      </div>

      <span className="announcement-separator">•</span>

      <div className="announcement-item announcement-highlight">
        <span className="announcement-dot" />
        <strong>Prepare Smart. Practice More. Get Ready.</strong>
      </div>

      <span className="announcement-separator">•</span>
    </div>
  );

  return (
    <div className="announcement-bar">
      <div className="announcement-viewport">

        {/* Left fade */}
        <div className="announcement-fade announcement-fade-left" />

        <div className="announcement-track">
          <AnnouncementContent />
          <AnnouncementContent duplicate />
        </div>

        {/* Right fade */}
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

