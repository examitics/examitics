export function generateDivision(level = "Easy") {

  let max = 10;

  if (level === "Medium") max = 25;

  if (level === "Hard") max = 50;

  const divisor = Math.floor(Math.random() * max) + 2;

  const answer = Math.floor(Math.random() * max) + 2;

  return {
    question: `${divisor * answer} ÷ ${divisor}`,
    answer,
  };
}