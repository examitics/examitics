import React from "react";

import "../../styles/features.css";

import SectionHeading from "../common/sectionheading";
import FeatureCard from "../common/featurecard";

import {
  FiTarget,
  FiClock,
  FiBarChart2,
  FiTrendingUp,
  FiAward,
  FiActivity,
} from "react-icons/fi";

const Features = () => {

  const featureData = [

    {
      icon: <FiTarget />,
      title: "Smart MCQ Practice",
      text:
        "Practice structured MCQs designed to improve speed, accuracy, and conceptual understanding."
    },

    {
      icon: <FiClock />,
      title: "Timed Mock Exams",
      text:
        "Simulate real exam pressure with fully timed mock test environments and smart scoring."
    },

    {
      icon: <FiBarChart2 />,
      title: "Performance Analytics",
      text:
        "Track progress with deep analytics, performance insights, and subject-wise breakdowns."
    },

    {
      icon: <FiTrendingUp />,
      title: "Weak Area Detection",
      text:
        "Identify weak concepts instantly and focus preparation where improvement matters most."
    },

    {
      icon: <FiAward />,
      title: "Leaderboard Rankings",
      text:
        "Compete with students, compare rankings, and monitor your competitive performance."
    },

    {
      icon: <FiActivity />,
      title: "Progress Tracking",
      text:
        "Monitor daily preparation consistency with intelligent progress and activity tracking."
    },

  ];

  return (

    <section className="features-section">

      <div className="container-custom">

        {/* SECTION HEADING */}

        <SectionHeading
          badge="Core Features"
          title="Built for"
          highlight="Serious Preparation"
          text="Examitics combines structured MCQ practice, intelligent analytics, and performance-driven tools to help students prepare with precision."
        />

        {/* FEATURES GRID */}

        <div className="features-grid">

          {featureData.map((feature, index) => (

            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;