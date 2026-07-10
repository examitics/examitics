export function generateAddition(level = "Easy") {

  let min = 10;
  let max = 99;

  if (level === "Medium") {
    min = 100;
    max = 999;
  }

  if (level === "Hard") {
    min = 1000;
    max = 9999;
  }

  const a = Math.floor(Math.random() * (max - min + 1)) + min;
  const b = Math.floor(Math.random() * (max - min + 1)) + min;

  return {
    question: `${a} + ${b}`,
    answer: a + b,
  };
}