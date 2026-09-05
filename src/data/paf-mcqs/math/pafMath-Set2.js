const pafMathQuestions = [
  {
    id: 1,
    question: "If 3x - 7 = 14, then x is:",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7"
  },

  {
    id: 2,
    question: "If 2x + 5 = 17, what is the value of x?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "6"
  },

  {
    id: 3,
    question: "Simplify: 3(2x - 5) + 4.",
    options: ["6x - 11", "6x - 15", "6x + 1", "6x - 19"],
    correctAnswer: "6x - 11"
  },

  {
    id: 4,
    question: "If x/3 = 7, then x is:",
    options: ["10", "18", "21", "24"],
    correctAnswer: "21"
  },

  {
    id: 5,
    question: "The HCF of 24 and 36 is:",
    options: ["6", "8", "12", "18"],
    correctAnswer: "12"
  },

  {
    id: 6,
    question: "The LCM of 8 and 12 is:",
    options: ["16", "20", "24", "32"],
    correctAnswer: "24"
  },

  {
    id: 7,
    question: "Which of the following is a prime number?",
    options: ["21", "27", "31", "39"],
    correctAnswer: "31"
  },

  {
    id: 8,
    question: "What is the remainder when 47 is divided by 5?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2"
  },

  {
    id: 9,
    question: "Simplify: 2/3 + 1/6.",
    options: ["1/2", "2/3", "5/6", "7/6"],
    correctAnswer: "5/6"
  },

  {
    id: 10,
    question: "If a = 4 and b = 3, find a² + b².",
    options: ["12", "16", "25", "49"],
    correctAnswer: "25"
  },

  {
    id: 11,
    question: "Factorize: x² + 7x + 12.",
    options: [
      "(x + 2)(x + 6)",
      "(x + 3)(x + 4)",
      "(x - 3)(x - 4)",
      "(x + 1)(x + 12)"
    ],
    correctAnswer: "(x + 3)(x + 4)"
  },

  {
    id: 12,
    question: "The roots of x² - 9 = 0 are:",
    options: ["0, 9", "3, 3", "−3, 3", "−9, 9"],
    correctAnswer: "−3, 3"
  },

  {
    id: 13,
    question: "If x² - 7x + 10 = 0, the roots are:",
    options: ["1 and 10", "2 and 5", "3 and 4", "−2 and −5"],
    correctAnswer: "2 and 5"
  },

  {
    id: 14,
    question: "The discriminant of x² + 4x + 4 = 0 is:",
    options: ["0", "4", "8", "16"],
    correctAnswer: "0"
  },

  {
    id: 15,
    question: "If the roots of a quadratic equation are 3 and 5, their sum is:",
    options: ["2", "8", "15", "25"],
    correctAnswer: "8"
  },

  {
    id: 16,
    question: "The next term in the sequence 5, 10, 15, 20, ... is:",
    options: ["22", "24", "25", "30"],
    correctAnswer: "25"
  },

  {
    id: 17,
    question: "The 8th term of the arithmetic sequence 4, 7, 10, 13, ... is:",
    options: ["22", "25", "28", "31"],
    correctAnswer: "25"
  },

  {
    id: 18,
    question: "The common ratio of 3, 9, 27, 81, ... is:",
    options: ["2", "3", "6", "9"],
    correctAnswer: "3"
  },

  {
    id: 19,
    question: "What is the sum of the first 10 positive integers?",
    options: ["45", "50", "55", "60"],
    correctAnswer: "55"
  },

  {
    id: 20,
    question: "The 5th term of the geometric sequence 2, 4, 8, 16, ... is:",
    options: ["24", "30", "32", "36"],
    correctAnswer: "32"
  },

  {
    id: 21,
    question: "If 4 workers complete a task in 12 days, assuming equal efficiency, how many days will 8 workers take?",
    options: ["3", "6", "8", "10"],
    correctAnswer: "6"
  },

  {
    id: 22,
    question: "A car travels 180 km in 3 hours. Its average speed is:",
    options: ["50 km/h", "60 km/h", "70 km/h", "90 km/h"],
    correctAnswer: "60 km/h"
  },

  {
    id: 23,
    question: "A train travels at 72 km/h. How far will it travel in 25 minutes?",
    options: ["20 km", "25 km", "30 km", "36 km"],
    correctAnswer: "30 km"
  },

  {
    id: 24,
    question: "If a shirt costs Rs. 800 and is sold for Rs. 920, the profit percentage is:",
    options: ["10%", "12%", "15%", "20%"],
    correctAnswer: "15%"
  },

  {
    id: 25,
    question: "A number is decreased from 500 to 425. The percentage decrease is:",
    options: ["10%", "12%", "15%", "20%"],
    correctAnswer: "15%"
  },

  {
    id: 26,
    question: "The area of a rectangle having length 12 cm and width 7 cm is:",
    options: ["72 cm²", "84 cm²", "96 cm²", "108 cm²"],
    correctAnswer: "84 cm²"
  },

  {
    id: 27,
    question: "The perimeter of a square whose side is 9 cm is:",
    options: ["18 cm", "27 cm", "36 cm", "81 cm"],
    correctAnswer: "36 cm"
  },

  {
    id: 28,
    question: "The area of a triangle with base 10 cm and height 8 cm is:",
    options: ["20 cm²", "40 cm²", "80 cm²", "100 cm²"],
    correctAnswer: "40 cm²"
  },

  {
    id: 29,
    question: "The circumference of a circle with radius 7 cm is approximately: (Use π = 22/7)",
    options: ["22 cm", "44 cm", "88 cm", "154 cm"],
    correctAnswer: "44 cm"
  },

  {
    id: 30,
    question: "The volume of a cube with side 4 cm is:",
    options: ["16 cm³", "32 cm³", "64 cm³", "96 cm³"],
    correctAnswer: "64 cm³"
  },

  {
    id: 31,
    question: "If sin θ = 3/5 for an acute angle θ, then cos θ is:",
    options: ["3/5", "4/5", "5/3", "1/5"],
    correctAnswer: "4/5"
  },

  {
    id: 32,
    question: "The value of sin 90° is:",
    options: ["0", "1/2", "1", "√3/2"],
    correctAnswer: "1"
  },

  {
    id: 33,
    question: "The value of cos 0° is:",
    options: ["0", "1/2", "1", "−1"],
    correctAnswer: "1"
  },

  {
    id: 34,
    question: "The value of tan 30° is:",
    options: ["1/√3", "1", "√3", "0"],
    correctAnswer: "1/√3"
  },

  {
    id: 35,
    question: "If sec θ = 2, then cos θ is:",
    options: ["2", "1/2", "√3/2", "1"],
    correctAnswer: "1/2"
  },

  {
    id: 36,
    question: "The slope of a line passing through (2, 3) and (4, 7) is:",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2"
  },

  {
    id: 37,
    question: "The midpoint of (1, 5) and (7, 9) is:",
    options: ["(3, 6)", "(4, 7)", "(5, 8)", "(6, 7)"],
    correctAnswer: "(4, 7)"
  },

  {
    id: 38,
    question: "The distance between the points (1, 2) and (4, 6) is:",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5"
  },

  {
    id: 39,
    question: "What is the equation of a line with slope 2 and y-intercept 3?",
    options: ["y = 2x + 3", "y = 3x + 2", "y = 2x − 3", "y = x + 3"],
    correctAnswer: "y = 2x + 3"
  },

  {
    id: 40,
    question: "Two lines having slopes whose product is −1 are:",
    options: ["Parallel", "Perpendicular", "Coincident", "Identical"],
    correctAnswer: "Perpendicular"
  },

  {
    id: 41,
    question: "If f(x) = 2x + 3, then f(4) is:",
    options: ["8", "9", "11", "12"],
    correctAnswer: "11"
  },

  {
    id: 42,
    question: "If f(x) = x² − 1, then f(3) is:",
    options: ["6", "8", "9", "10"],
    correctAnswer: "8"
  },

  {
    id: 43,
    question: "The domain of the function f(x) = 1/x excludes:",
    options: ["0", "1", "−1", "2"],
    correctAnswer: "0"
  },

  {
    id: 44,
    question: "The derivative of 4x² + 3x is:",
    options: ["4x + 3", "8x + 3", "8x + 4", "4x² + 3"],
    correctAnswer: "8x + 3"
  },

  {
    id: 45,
    question: "The derivative of x⁴ is:",
    options: ["x³", "3x³", "4x³", "4x"],
    correctAnswer: "4x³"
  },

  {
    id: 46,
    question: "The integral of 3x² dx is:",
    options: ["x³ + C", "3x³ + C", "x² + C", "6x + C"],
    correctAnswer: "x³ + C"
  },

  {
    id: 47,
    question: "The value of log₂ 8 is:",
    options: ["2", "3", "4", "8"],
    correctAnswer: "3"
  },

  {
    id: 48,
    question: "If log₃ x = 4, then x is:",
    options: ["12", "27", "64", "81"],
    correctAnswer: "81"
  },

  {
    id: 49,
    question: "If 3ˣ = 27, then x is:",
    options: ["2", "3", "4", "9"],
    correctAnswer: "3"
  },

  {
    id: 50,
    question: "A bag contains 3 red balls and 2 blue balls. What is the probability of selecting a red ball at random?",
    options: ["2/5", "3/5", "1/2", "3/4"],
    correctAnswer: "3/5"
  }
];

export default pafMathQuestions;