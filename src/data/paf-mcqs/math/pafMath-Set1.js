const pafMathQuestions = [
  {
    id: 1,
    question: "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A ∩ B is:",
    options: ["{1, 2}", "{3, 4}", "{5, 6}", "{1, 2, 5, 6}"],
    correctAnswer: "{3, 4}"
  },

  {
    id: 2,
    question: "If A = {1, 2, 3} and B = {3, 4, 5}, then A ∪ B contains how many elements?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "5"
  },

  {
    id: 3,
    question: "Which of the following is an irrational number?",
    options: ["0.25", "√2", "3/4", "0.125"],
    correctAnswer: "√2"
  },

  {
    id: 4,
    question: "The value of |−7| is:",
    options: ["−7", "0", "7", "14"],
    correctAnswer: "7"
  },

  {
    id: 5,
    question: "If x + 7 = 15, then x is:",
    options: ["6", "7", "8", "9"],
    correctAnswer: "8"
  },

  {
    id: 6,
    question: "The roots of x² − 5x + 6 = 0 are:",
    options: ["1, 6", "2, 3", "−2, −3", "3, 4"],
    correctAnswer: "2, 3"
  },

  {
    id: 7,
    question: "If x² = 49, then x is:",
    options: ["7 only", "−7 only", "±7", "49"],
    correctAnswer: "±7"
  },

  {
    id: 8,
    question: "The determinant of the matrix [[2, 3], [1, 4]] is:",
    options: ["5", "6", "8", "11"],
    correctAnswer: "5"
  },

  {
    id: 9,
    question: "If A = [[1, 0], [0, 1]], then A is called:",
    options: ["Zero matrix", "Identity matrix", "Row matrix", "Column matrix"],
    correctAnswer: "Identity matrix"
  },

  {
    id: 10,
    question: "If the determinant of a matrix is zero, the matrix is:",
    options: ["Singular", "Identity", "Diagonal", "Scalar"],
    correctAnswer: "Singular"
  },

  {
    id: 11,
    question: "The next term in the sequence 2, 5, 8, 11, ... is:",
    options: ["12", "13", "14", "15"],
    correctAnswer: "14"
  },

  {
    id: 12,
    question: "The common difference of the arithmetic sequence 7, 11, 15, 19, ... is:",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4"
  },

  {
    id: 13,
    question: "The 10th term of the arithmetic sequence 3, 6, 9, 12, ... is:",
    options: ["27", "30", "33", "36"],
    correctAnswer: "30"
  },

  {
    id: 14,
    question: "The common ratio of the geometric sequence 2, 6, 18, 54, ... is:",
    options: ["2", "3", "4", "6"],
    correctAnswer: "3"
  },

  {
    id: 15,
    question: "What is the sum of the first five natural numbers?",
    options: ["10", "12", "15", "20"],
    correctAnswer: "15"
  },

  {
    id: 16,
    question: "The value of 5! is:",
    options: ["25", "60", "100", "120"],
    correctAnswer: "120"
  },

  {
    id: 17,
    question: "The value of 5P2 is:",
    options: ["10", "15", "20", "25"],
    correctAnswer: "20"
  },

  {
    id: 18,
    question: "The value of 5C2 is:",
    options: ["5", "10", "15", "20"],
    correctAnswer: "10"
  },

  {
    id: 19,
    question: "A coin is tossed once. What is the probability of getting a head?",
    options: ["0", "1/4", "1/2", "1"],
    correctAnswer: "1/2"
  },

  {
    id: 20,
    question: "A standard die is rolled once. What is the probability of getting an even number?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correctAnswer: "1/2"
  },

  {
    id: 21,
    question: "The value of sin 30° is:",
    options: ["1/2", "√3/2", "1", "0"],
    correctAnswer: "1/2"
  },

  {
    id: 22,
    question: "The value of cos 60° is:",
    options: ["0", "1/2", "√3/2", "1"],
    correctAnswer: "1/2"
  },

  {
    id: 23,
    question: "The value of tan 45° is:",
    options: ["0", "1/2", "1", "√3"],
    correctAnswer: "1"
  },

  {
    id: 24,
    question: "Which identity is correct?",
    options: [
      "sin²θ + cos²θ = 1",
      "sin²θ − cos²θ = 1",
      "sinθ + cosθ = 1",
      "tan²θ + sin²θ = 1"
    ],
    correctAnswer: "sin²θ + cos²θ = 1"
  },

  {
    id: 25,
    question: "If tan θ = 1, then θ can be:",
    options: ["30°", "45°", "60°", "90°"],
    correctAnswer: "45°"
  },

  {
    id: 26,
    question: "The limit of (x + 3) as x approaches 2 is:",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5"
  },

  {
    id: 27,
    question: "The derivative of x² with respect to x is:",
    options: ["x", "2x", "x²", "2"],
    correctAnswer: "2x"
  },

  {
    id: 28,
    question: "The derivative of 5x is:",
    options: ["5", "x", "5x", "0"],
    correctAnswer: "5"
  },

  {
    id: 29,
    question: "The derivative of a constant is:",
    options: ["1", "The constant itself", "0", "−1"],
    correctAnswer: "0"
  },

  {
    id: 30,
    question: "If y = x³, then dy/dx is:",
    options: ["x²", "2x²", "3x²", "3x"],
    correctAnswer: "3x²"
  },

  {
    id: 31,
    question: "The integral of x dx is:",
    options: ["x²", "x²/2 + C", "2x + C", "x + C"],
    correctAnswer: "x²/2 + C"
  },

  {
    id: 32,
    question: "The integral of 2x dx is:",
    options: ["x² + C", "2x² + C", "x + C", "2 + C"],
    correctAnswer: "x² + C"
  },

  {
    id: 33,
    question: "The integral of 1 dx is:",
    options: ["0", "x + C", "1 + C", "x² + C"],
    correctAnswer: "x + C"
  },

  {
    id: 34,
    question: "The slope of the line y = 3x + 5 is:",
    options: ["3", "5", "−3", "1/3"],
    correctAnswer: "3"
  },

  {
    id: 35,
    question: "The distance between the points (0, 0) and (3, 4) is:",
    options: ["3", "4", "5", "7"],
    correctAnswer: "5"
  },

  {
    id: 36,
    question: "The midpoint of the points (2, 4) and (6, 8) is:",
    options: ["(3, 5)", "(4, 6)", "(5, 7)", "(8, 12)"],
    correctAnswer: "(4, 6)"
  },

  {
    id: 37,
    question: "The equation of the x-axis is:",
    options: ["x = 0", "y = 0", "x = y", "x + y = 0"],
    correctAnswer: "y = 0"
  },

  {
    id: 38,
    question: "The equation of a circle with center at the origin and radius r is:",
    options: ["x + y = r", "x² + y² = r²", "x² − y² = r²", "x² + y = r²"],
    correctAnswer: "x² + y² = r²"
  },

  {
    id: 39,
    question: "Which conic section has the eccentricity equal to 1?",
    options: ["Circle", "Ellipse", "Parabola", "Hyperbola"],
    correctAnswer: "Parabola"
  },

  {
    id: 40,
    question: "The eccentricity of a circle is:",
    options: ["0", "1", "2", "∞"],
    correctAnswer: "0"
  },

  {
    id: 41,
    question: "If vectors a = (2, 3) and b = (4, 1), then a · b is:",
    options: ["6", "8", "11", "14"],
    correctAnswer: "11"
  },

  {
    id: 42,
    question: "Two vectors are perpendicular when their dot product is:",
    options: ["−1", "0", "1", "∞"],
    correctAnswer: "0"
  },

  {
    id: 43,
    question: "The magnitude of vector (3, 4) is:",
    options: ["4", "5", "6", "7"],
    correctAnswer: "5"
  },

  {
    id: 44,
    question: "If log₁₀ 100 = x, then x is:",
    options: ["1", "2", "10", "100"],
    correctAnswer: "2"
  },

  {
    id: 45,
    question: "The value of log₁₀ 1000 is:",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3"
  },

  {
    id: 46,
    question: "If 2ˣ = 16, then x is:",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4"
  },

  {
    id: 47,
    question: "The value of √144 is:",
    options: ["10", "11", "12", "14"],
    correctAnswer: "12"
  },

  {
    id: 48,
    question: "Simplify: (2³ × 2²).",
    options: ["2⁵", "2⁶", "4⁵", "4⁶"],
    correctAnswer: "2⁵"
  },

  {
    id: 49,
    question: "If x : y = 3 : 5 and x = 12, then y is:",
    options: ["15", "18", "20", "24"],
    correctAnswer: "20"
  },

  {
    id: 50,
    question: "A number is increased by 20% and becomes 120. What was the original number?",
    options: ["90", "100", "110", "115"],
    correctAnswer: "100"
  }
];

export default pafMathQuestions;