import {
  FiTarget,
  FiClock,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";

const features = [
  {
    icon: <FiClock />,
    title: "Timed Practice",
    desc: "Improve speed under pressure.",
  },
  {
    icon: <FiTarget />,
    title: "ISSB Focused",
    desc: "Questions relevant to ISSB screening.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Track Progress",
    desc: "Monitor your improvement.",
  },
  {
    icon: <FiAward />,
    title: "Unlimited Practice",
    desc: "Never run out of questions.",
  },
];

export default function QuickMathFeatures() {
  return (
    <section className="qm-features">

      {features.map((item, index) => (
        <div
          key={index}
          className="qm-feature exa-card"
        >
          <div className="qm-feature-icon">
            {item.icon}
          </div>

          <h3>{item.title}</h3>

          <p>{item.desc}</p>
        </div>
      ))}

    </section>
  );
}