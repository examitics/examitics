import {
  FiPlus,
  FiX,
  FiDivide,
  FiPercent,
  FiNavigation,
  FiGrid,
  FiShuffle,
} from "react-icons/fi";

const categories = [
  {
    icon: <FiPlus />,
    title: "Addition",
  },
  {
    icon: <FiX />,
    title: "Multiplication",
  },
  {
    icon: <FiDivide />,
    title: "Division",
  },
  {
    icon: <FiPercent />,
    title: "Percentage",
  },
  {
    icon: <FiNavigation />,
    title: "Speed, Time & Distance",
  },
  {
    icon: <FiGrid />,
    title: "Area Finding",
  },
  {
    icon: <FiShuffle />,
    title: "Mixed Practice",
  },
];

export default function QuickMathCategories() {
  return (
    <section className="qm-categories">

      <h2>Practice Categories</h2>

      <div className="qm-category-grid">

        {categories.map((item, index) => (
          <div
            key={index}
            className="qm-category exa-card"
          >
            <div className="qm-category-icon">
              {item.icon}
            </div>

            <h5>{item.title}</h5>
          </div>
        ))}

      </div>

    </section>
  );
}