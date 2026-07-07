import { useState } from "react";
import "./MCQCard.css";

const MCQCard = ({
  question,
  options,
  correct,
  explanation,
}) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    if (selected !== null) return;
    setSelected(index);
  };

  return (
    <div className="mcq-card exa-card">

      <h3 className="mcq-question">
        {question}
      </h3>

      <div className="mcq-options">

        {options.map((option, index) => {

          let className = "mcq-option";

          if (selected !== null) {

            if (index === correct) {

              className += " correct";

            } else if (
              index === selected &&
              selected !== correct
            ) {

              className += " wrong";

            }

          }

          return (

            <button
              key={index}
              className={className}
              onClick={() => handleClick(index)}
            >

              <span className="mcq-letter">
                {String.fromCharCode(65 + index)}
              </span>

              {option}

            </button>

          );

        })}

      </div>

      {selected !== null && (

        <div className="mcq-explanation">

          <strong>

            {selected === correct
              ? "✅ Correct!"
              : "❌ Incorrect"}

          </strong>

          <p>{explanation}</p>

        </div>

      )}

    </div>
  );
};

export default MCQCard;