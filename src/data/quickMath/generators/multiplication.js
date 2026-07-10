export function generateMultiplication(level = "Easy") {

  let max = 10;

  if (level === "Medium") max = 20;

  if (level === "Hard") max = 50;

  const a = Math.floor(Math.random() * max) + 2;
  const b = Math.floor(Math.random() * max) + 2;

  return {
    question: `${a} × ${b}`,
    answer: a * b,
  };
}