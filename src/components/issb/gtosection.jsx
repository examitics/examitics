import React from "react";

const tasks = [
  "Group Discussion",
  "Command Task",
  "Lecturette",
  "Obstacle Course",
  "Planning Exercise",
  "Progressive Group Task",
];

const GtoSection = () => {

  return (

    <section className="issb-section">

      <div className="section-heading">

        <span className="section-tag">
          GTO TASKS
        </span>

        <h2>
          Group Testing Officer Tasks
        </h2>

      </div>

      <div className="issb-grid">

        {tasks.map((task, index) => (

          <div
            className="issb-card exa-card"
            key={index}
          >

            <h3>{task}</h3>

            <p>
              Learn techniques, confidence building,
              and group coordination strategies.
            </p>

          </div>

        ))}

      </div>

    </section>

  );

};

export default GtoSection;