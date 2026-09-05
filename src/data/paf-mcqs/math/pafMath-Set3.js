const pafMathQuestions = [
  {
    id: 1,
    question: "If 5x + 3 = 28, then x is:",
    options: ["4", "5", "6", "7"],
    correctAnswer: "5"
  },

  {
    id: 2,
    question: "Simplify: 4x + 7 - 2x + 3.",
    options: ["2x + 10", "6x + 10", "2x + 4", "6x + 4"],
    correctAnswer: "2x + 10"
  },

  {
    id: 3,
    question: "If 3(x + 2) = 21, then x is:",
    options: ["5", "6", "7", "8"],
    correctAnswer: "5"
  },

  {
    id: 4,
    question: "The value of (−3)² + (−2)³ is:",
    options: ["1", "17", "−17", "−1"],
    correctAnswer: "1"
  },

  {
    id: 5,
    question: "Which of the following is a rational number?",
    options: ["√2", "√3", "√5", "7/9"],
    correctAnswer: "7/9"
  },

  {
    id: 6,
    question: "The GCD of 42 and 56 is:",
    options: ["7", "12", "14", "28"],
    correctAnswer: "14"
  },

  {
    id: 7,
    question: "The LCM of 9 and 15 is:",
    options: ["30", "36", "45", "60"],
    correctAnswer: "45"
  },

  {
    id: 8,
    question: "If a = 5 and b = −2, find a² − b².",
    options: ["17", "21", "29", "33"],
    correctAnswer: "21"
  },

  {
    id: 9,
    question: "Simplify: (3/4) ÷ (9/8).",
    options: ["1/2", "2/3", "3/2", "4/3"],
    correctAnswer: "2/3"
  },

  {
    id: 10,
    question: "What is 25% of 240?",
    options: ["50", "60", "70", "80"],
    correctAnswer: "60"
  },

  {
    id: 11,
    question: "Factorize: x² − 9x + 20.",
    options: [
      "(x − 2)(x − 10)",
      "(x − 4)(x − 5)",
      "(x + 4)(x + 5)",
      "(x − 3)(x − 6)"
    ],
    correctAnswer: "(x − 4)(x − 5)"
  },

  {
    id: 12,
    question: "The roots of x² + x − 6 = 0 are:",
    options: ["2 and −3", "−2 and 3", "1 and −6", "−1 and 6"],
    correctAnswer: "2 and −3"
  },

  {
    id: 13,
    question: "If x² − 4x = 0, the roots are:",
    options: ["0 and 2", "0 and 4", "2 and 4", "−2 and 4"],
    correctAnswer: "0 and 4"
  },

  {
    id: 14,
    question: "The discriminant of x² − 6x + 5 = 0 is:",
    options: ["4", "16", "25", "36"],
    correctAnswer: "16"
  },

  {
    id: 15,
    question: "If the roots of a quadratic equation are 4 and −2, their product is:",
    options: ["−8", "−6", "2", "8"],
    correctAnswer: "−8"
  },

  {
    id: 16,
    question: "The next term in the sequence 3, 7, 11, 15, ... is:",
    options: ["17", "18", "19", "20"],
    correctAnswer: "19"
  },

  {
    id: 17,
    question: "What is the 12th term of the arithmetic sequence 2, 5, 8, 11, ...?",
    options: ["32", "35", "38", "41"],
    correctAnswer: "35"
  },

  {
    id: 18,
    question: "Find the sum of the first 8 terms of the arithmetic sequence 2, 4, 6, 8, ...",
    options: ["64", "72", "80", "88"],
    correctAnswer: "72"
  },

  {
    id: 19,
    question: "The next term of the geometric sequence 5, 10, 20, 40, ... is:",
    options: ["60", "70", "80", "100"],
    correctAnswer: "80"
  },

  {
    id: 20,
    question: "The sum of the first four terms of the geometric sequence 1, 2, 4, 8 is:",
    options: ["12", "15", "16", "18"],
    correctAnswer: "15"
  },

  {
    id: 21,
    question: "A man buys an article for Rs. 1,200 and sells it for Rs. 1,500. His profit is:",
    options: ["Rs. 200", "Rs. 250", "Rs. 300", "Rs. 350"],
    correctAnswer: "Rs. 300"
  },

  {
    id: 22,
    question: "A product marked at Rs. 2,000 is sold at a 10% discount. Its selling price is:",
    options: ["Rs. 1,700", "Rs. 1,800", "Rs. 1,900", "Rs. 1,950"],
    correctAnswer: "Rs. 1,800"
  },

  {
    id: 23,
    question: "A car travels 240 km at an average speed of 80 km/h. How long does the journey take?",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    correctAnswer: "3 hours"
  },

  {
    id: 24,
    question: "A man walks at 5 km/h. How far will he travel in 36 minutes?",
    options: ["2 km", "3 km", "4 km", "5 km"],
    correctAnswer: "3 km"
  },

  {
    id: 25,
    question: "If 6 notebooks cost Rs. 540, what will 10 notebooks cost at the same rate?",
    options: ["Rs. 800", "Rs. 850", "Rs. 900", "Rs. 950"],
    correctAnswer: "Rs. 900"
  },

  {
    id: 26,
    question: "The area of a circle with radius 14 cm is: (Use π = 22/7)",
    options: ["308 cm²", "616 cm²", "728 cm²", "784 cm²"],
    correctAnswer: "616 cm²"
  },

  {
    id: 27,
    question: "The perimeter of a rectangle with length 15 cm and width 8 cm is:",
    options: ["38 cm", "42 cm", "46 cm", "48 cm"],
    correctAnswer: "46 cm"
  },

  {
    id: 28,
    question: "The hypotenuse of a right triangle with perpendicular sides 6 cm and 8 cm is:",
    options: ["9 cm", "10 cm", "12 cm", "14 cm"],
    correctAnswer: "10 cm"
  },

  {
    id: 29,
    question: "The volume of a cuboid measuring 5 cm × 4 cm × 3 cm is:",
    options: ["40 cm³", "50 cm³", "60 cm³", "70 cm³"],
    correctAnswer: "60 cm³"
  },

  {
    id: 30,
    question: "The total surface area of a cube of side 5 cm is:",
    options: ["100 cm²", "125 cm²", "150 cm²", "175 cm²"],
    correctAnswer: "150 cm²"
  },

  {
    id: 31,
    question: "If cos θ = 5/13 for an acute angle θ, then sin θ is:",
    options: ["5/13", "12/13", "13/12", "8/13"],
    correctAnswer: "12/13"
  },

  {
    id: 32,
    question: "The value of sin 60° is:",
    options: ["1/2", "1", "√3/2", "1/√3"],
    correctAnswer: "√3/2"
  },

  {
    id: 33,
    question: "The value of cos 90° is:",
    options: ["0", "1/2", "1", "−1"],
    correctAnswer: "0"
  },

  {
    id: 34,
    question: "If tan θ = 3/4, then sec θ is:",
    options: ["3/4", "4/3", "5/4", "4/5"],
    correctAnswer: "5/4"
  },

  {
    id: 35,
    question: "If sin θ = 1/2 and θ is acute, then θ is:",
    options: ["30°", "45°", "60°", "90°"],
    correctAnswer: "30°"
  },

  {
    id: 36,
    question: "The slope of a line passing through (1, 2) and (5, 10) is:",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2"
  },

  {
    id: 37,
    question: "The midpoint of the points (−2, 4) and (6, 8) is:",
    options: ["(1, 6)", "(2, 6)", "(2, 7)", "(4, 6)"],
    correctAnswer: "(2, 6)"
  },

  {
    id: 38,
    question: "The distance between (−1, 2) and (2, 6) is:",
    options: ["4", "5", "6", "7"],
    correctAnswer: "5"
  },

  {
    id: 39,
    question: "Which point lies on the line y = 2x + 1?",
    options: ["(1, 2)", "(2, 5)", "(3, 5)", "(4, 7)"],
    correctAnswer: "(2, 5)"
  },

  {
    id: 40,
    question: "The equation of a horizontal line passing through y = 4 is:",
    options: ["x = 4", "y = 4", "x + y = 4", "y = x + 4"],
    correctAnswer: "y = 4"
  },

  {
    id: 41,
    question: "If f(x) = x + 5, then f(7) is:",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12"
  },

  {
    id: 42,
    question: "If f(x) = 3x − 2, then f(5) is:",
    options: ["10", "12", "13", "15"],
    correctAnswer: "13"
  },

  {
    id: 43,
    question: "If f(x) = x² + 2x, then f(2) is:",
    options: ["6", "8", "10", "12"],
    correctAnswer: "8"
  },

  {
    id: 44,
    question: "The derivative of 7x³ is:",
    options: ["7x²", "14x²", "21x²", "21x³"],
    correctAnswer: "21x²"
  },

  {
    id: 45,
    question: "The derivative of 5x² − 4x + 7 is:",
    options: ["10x − 4", "5x − 4", "10x + 7", "5x² − 4"],
    correctAnswer: "10x − 4"
  },

  {
    id: 46,
    question: "The integral of 4x³ dx is:",
    options: ["x⁴ + C", "2x⁴ + C", "4x⁴ + C", "x³ + C"],
    correctAnswer: "x⁴ + C"
  },

  {
    id: 47,
    question: "The value of log₅ 25 is:",
    options: ["1", "2", "3", "5"],
    correctAnswer: "2"
  },

  {
    id: 48,
    question: "If log₄ x = 3, then x is:",
    options: ["12", "16", "32", "64"],
    correctAnswer: "64"
  },

  {
    id: 49,
    question: "Simplify: √81 + √49.",
    options: ["14", "15", "16", "17"],
    correctAnswer: "16"
  },

  {
    id: 50,
    question: "A box contains 4 white balls and 6 black balls. What is the probability of selecting a white ball?",
    options: ["2/5", "3/5", "1/2", "4/6"],
    correctAnswer: "2/5"
  }
];

export default pafMathQuestions;