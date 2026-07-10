import { generateAddition } from "./addition";
import { generateDivision } from "./division";
import { generateMultiplication } from "./multiplication";
import { generatePercentage } from "./percentage";

const generators = [
  generateAddition,
  generateMultiplication,
  generateDivision,
  generatePercentage,
];

export function generateMixed(level) {

  const generators = [

    () => generateAddition(level),

    () => generateMultiplication(level),

    () => generateDivision(level),

    () => generatePercentage(level),

  ];

  return generators[
    Math.floor(Math.random() * generators.length)
  ]();

}