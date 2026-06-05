import React from "react";

const SectionHeading = ({ badge, title, highlight, text }) => {

  return (

    <div className="section-heading">

      <div className="section-badge">

        <span></span>

        {badge}

      </div>

      <h2>

        {title}

        <span> {highlight}</span>

      </h2>

      <p>{text}</p>

    </div>

  );
};

export default SectionHeading;