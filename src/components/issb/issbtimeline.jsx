import React from "react";

const timeline = [
  "Screening Test",
  "Psychological Tests",
  "GTO Tasks",
  "Interview",
  "Conference",
];

const IssbTimeline = () => {

  return (

    <section
      className="issb-section"
      id="timeline"
    >

      <div className="section-heading">

        <span className="section-tag">
          ISSB PROCESS
        </span>

        <h2>
          Complete ISSB Journey
        </h2>

      </div>

      <div className="timeline-wrapper">

        {timeline.map((item, index) => (

          <div
            className="timeline-card exa-card"
            key={index}
          >

            <div className="timeline-number">
              {index + 1}
            </div>

            <h3>{item}</h3>

          </div>

        ))}

      </div>

    </section>

  );

};

export default IssbTimeline;