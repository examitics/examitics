import React from "react";

const tips = [
  "Leadership",
  "Confidence",
  "Communication",
  "Discipline",
  "Time Management",
  "Teamwork",
];

const TipsSection = () => {

  return (

    <section className="issb-section">

      <div className="section-heading">

        <span className="section-tag">
          SUCCESS TIPS
        </span>

        <h2>
          Important Qualities For ISSB
        </h2>

      </div>

      <div className="tips-wrapper">

        {tips.map((tip, index) => (

          <div
            className="tip-item"
            key={index}
          >
            {tip}
          </div>

        ))}

      </div>

    </section>

  );

};

export default TipsSection;