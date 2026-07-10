function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rectangleQuestion(min, max) {
  const length = random(min, max);
  const width = random(min, max);

  return {
    question: `A rectangle has length ${length} cm and width ${width} cm. Find its area.`,
    answer: length * width,
  };
}

function squareQuestion(min, max) {
  const side = random(min, max);

  return {
    question: `A square has side ${side} cm. Find its area.`,
    answer: side * side,
  };
}

function triangleQuestion(min, max) {
  let base = random(min, max);
  let height = random(min, max);

  // Ensure whole-number answer
  if ((base * height) % 2 !== 0) {
    height++;
  }

  return {
    question: `A triangle has base ${base} cm and height ${height} cm. Find its area.`,
    answer: (base * height) / 2,
  };
}

export function generateAreaFinding(difficulty = "Easy") {
  let min;
  let max;

  switch (difficulty) {
    case "Easy":
      min = 2;
      max = 12;
      break;

    case "Medium":
      min = 10;
      max = 30;
      break;

    case "Hard":
      min = 25;
      max = 60;
      break;

    default:
      min = 2;
      max = 12;
  }

  const generators = [
    () => rectangleQuestion(min, max),
    () => squareQuestion(min, max),
    () => triangleQuestion(min, max),
  ];

  const randomGenerator =
    generators[random(0, generators.length - 1)];

  return randomGenerator();
}