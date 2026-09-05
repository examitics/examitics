import { useEffect, useState } from "react";
import "../styles/DefenceDayCountdown.css";

const OFFER_END = new Date("2026-09-07T00:00:00+05:00").getTime();

function getTimeLeft() {
  const distance = OFFER_END - Date.now();

  return Math.max(distance, 0);
}

function calculateTime(distance) {
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

function DefenceDayCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Automatically hide after the offer expires
  if (timeLeft <= 0) {
    return null;
  }

  const time = calculateTime(timeLeft);

  return (
    <section className="defence-day-offer">
      <div className="defence-day-offer-content">

        <div className="defence-day-offer-badge">
          🇵🇰 DEFENCE DAY SPECIAL OFFER
        </div>

        <h2>Defence Day Special Offer</h2>

        <p>
          Special pricing available for a limited time.
          <br />
          <strong>Offer ends at midnight on 7 September.</strong>
        </p>

        <div className="defence-day-countdown">

          <div className="defence-day-time-box">
            <span>{String(time.days).padStart(2, "0")}</span>
            <small>Days</small>
          </div>

          <div className="defence-day-time-box">
            <span>{String(time.hours).padStart(2, "0")}</span>
            <small>Hours</small>
          </div>

          <div className="defence-day-time-box">
            <span>{String(time.minutes).padStart(2, "0")}</span>
            <small>Minutes</small>
          </div>

          <div className="defence-day-time-box">
            <span>{String(time.seconds).padStart(2, "0")}</span>
            <small>Seconds</small>
          </div>

        </div>

        <div className="defence-day-offer-note">
          🇵🇰 Defence Day • Limited Time Only
        </div>

      </div>
    </section>
  );
}

export default DefenceDayCountdown;