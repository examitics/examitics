
const pafMathQuestions = [
  {
    id: 1,
    question: "What is the degree of the polynomial x²y²z³ + xy + 5yz?",
    options: ["3", "5", "7", "9"],
    correctAnswer: "7"
  },
  {
    id: 2,
    question: "Which is the variable in 2x³ + 5?",
    options: ["2", "3", "x", "5"],
    correctAnswer: "x"
  },
  {
    id: 3,
    question: "What is the coefficient of x²y in 6x²y?",
    options: ["6", "x", "2", "y"],
    correctAnswer: "6"
  },
  {
    id: 4,
    question: "What is the exponent of x in 5x³y²z?",
    options: ["5", "3", "2", "4"],
    correctAnswer: "3"
  },
  {
    id: 5,
    question: "Which is the factorization of x⁴ + 64?",
    options: [
      "(x² - 4x + 8)(x² + 4x + 8)",
      "(x² - 4x - 8)(x² + 4x + 8)",
      "(x² + 4x + 8)(x² + 4x - 8)",
      "x² + 64x + 5"
    ],
    correctAnswer: "(x² - 4x + 8)(x² + 4x + 8)"
  },
  {
    id: 6,
    question: "Which expression represents the expanded product of 3x²y³?",
    options: [
      "(3xy)³",
      "3 × x × x × y × y × y",
      "x²y³",
      "3x³y²"
    ],
    correctAnswer: "3 × x × x × y × y × y"
  },
  {
    id: 7,
    question: "Factorize x² - 7x + 10.",
    options: [
      "(x - 2)(x + 7)",
      "(x - 2)(x + 5)",
      "(x + 2)(x + 5)",
      "(x - 2)(x - 5)"
    ],
    correctAnswer: "(x - 2)(x - 5)"
  },
  {
    id: 8,
    question: "How many rows and columns are in the matrix [[3, 2], [-1, 2]]?",
    options: [
      "1 row and 2 columns",
      "1 row and 1 column",
      "2 rows and 2 columns",
      "None of these"
    ],
    correctAnswer: "2 rows and 2 columns"
  },
  {
    id: 9,
    question: "A matrix having only one column is called a:",
    options: [
      "Equal matrix",
      "Rectangular matrix",
      "Column matrix",
      "None of these"
    ],
    correctAnswer: "Column matrix"
  },
  {
    id: 10,
    question: "An obtuse-angled triangle has how many obtuse angles?",
    options: ["Three", "Two", "One", "None"],
    correctAnswer: "One"
  },
  {
    id: 11,
    question: "In an isosceles triangle, the angles opposite the equal sides are:",
    options: [
      "Congruent",
      "Different",
      "Both 90°",
      "None of these"
    ],
    correctAnswer: "Congruent"
  },
  {
    id: 12,
    question: "If all three altitudes of a triangle have equal lengths, the triangle is:",
    options: [
      "Equilateral",
      "Isosceles only",
      "Right-angled",
      "None of these"
    ],
    correctAnswer: "Equilateral"
  },
  {
    id: 13,
    question: "An angle of a triangle measures 55°. What is its supplementary angle?",
    options: ["155°", "95°", "125°", "250°"],
    correctAnswer: "125°"
  },
  {
    id: 14,
    question: "Which type of triangle has side lengths 5, 12, and 13?",
    options: [
      "Right-angled triangle",
      "Isosceles triangle",
      "Equilateral triangle",
      "None of these"
    ],
    correctAnswer: "Right-angled triangle"
  },
  {
    id: 15,
    question: "The angle bisectors of a triangle are:",
    options: [
      "Non-concurrent",
      "Concurrent",
      "Parallel",
      "Perpendicular to one another"
    ],
    correctAnswer: "Concurrent"
  },
  {
    id: 16,
    question: "Factorize x² + 2x - 15.",
    options: [
      "(x + 3)(x - 5)",
      "(x - 3)(x - 5)",
      "(x + 5)(x - 3)",
      "(x + 3)(x + 5)"
    ],
    correctAnswer: "(x + 5)(x - 3)"
  },
  {
    id: 17,
    question: "What is the common factor of 27n³ + 27?",
    options: ["n", "27", "3", "None of these"],
    correctAnswer: "27"
  },
  {
    id: 18,
    question: "What is the greatest common factor of xa⁶ - ax⁶?",
    options: ["xa", "x⁶a⁶", "a⁶", "x⁶"],
    correctAnswer: "xa"
  },
  {
    id: 19,
    question: "What is the greatest common factor of p⁴q - q⁴p?",
    options: ["p⁴q⁴", "pq", "p²q²", "p⁵q⁴"],
    correctAnswer: "pq"
  },
  {
    id: 20,
    question: "If the matrix [[8, 6], [x, 8]] is singular, find x.",
    options: ["4", "32/3", "1", "8"],
    correctAnswer: "32/3"
  },
  {
    id: 21,
    question: "If AB = BA = I, then A and B are:",
    options: [
      "Equal matrices",
      "Multiplicative inverses of each other",
      "Additive inverses of each other",
      "None of these"
    ],
    correctAnswer: "Multiplicative inverses of each other"
  },
  {
    id: 22,
    question: "If [[a, b], [c, d]] = (1/3)[[3, 6], [9, 12]], find a, b, c, and d.",
    options: [
      "a = 1, b = 2, c = 3, d = 4",
      "a = -1, b = -2, c = -3, d = -4",
      "a = 0, b = 2, c = 4, d = 6",
      "a = 3, b = 6, c = 9, d = 12"
    ],
    correctAnswer: "a = 1, b = 2, c = 3, d = 4"
  },
  {
    id: 23,
    question: "A line segment joining two points on a circle is called a:",
    options: ["Chord", "Circumference", "Perimeter", "None of these"],
    correctAnswer: "Chord"
  },
  {
    id: 24,
    question: "Solve √x = 6.",
    options: ["{6}", "{36}", "∅", "{-6}"],
    correctAnswer: "{36}"
  },
  {
    id: 25,
    question: "What is the solution set of |x| < 4?",
    options: [
      "{4}",
      "{-4}",
      "{x ∈ ℝ : -4 < x < 4}",
      "{-4, 4}"
    ],
    correctAnswer: "{x ∈ ℝ : -4 < x < 4}"
  },
  {
    id: 26,
    question: "The sum of three interior angles of a triangle is:",
    options: ["160°", "170°", "180°", "150°"],
    correctAnswer: "180°"
  },
  {
    id: 27,
    question: "Three angles of a square have a total measure of 270°. What is the fourth angle?",
    options: ["90°", "120°", "110°", "105°"],
    correctAnswer: "90°"
  },
  {
    id: 28,
    question: "What is the supplement of 70°?",
    options: ["70°", "210°", "140°", "110°"],
    correctAnswer: "110°"
  },
  {
    id: 29,
    question: "Two angles of a triangle sum to 120°. What is the third angle?",
    options: ["70°", "80°", "60°", "50°"],
    correctAnswer: "60°"
  },
  {
    id: 30,
    question: "How many right angles does a right-angled triangle have?",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: "One"
  },
  {
    id: 31,
    question: "Two numbers have a sum of -13 and a product of -30. Find the numbers.",
    options: ["-2, 15", "2, -15", "-3, 10", "3, -10"],
    correctAnswer: "2, -15"
  },
  {
    id: 32,
    question: "The sum of two expressions is x² + 2x - y². If one expression is x² - y², find the other.",
    options: [
      "2x² + 2x - 2y²",
      "-2x",
      "-2x² - 2x + 2y²",
      "2x"
    ],
    correctAnswer: "2x"
  },
  {
    id: 33,
    question: "Which is the factorization of x² + x?",
    options: ["x(x² + 1)", "x(x - 1)", "x(x + 1)", "None of these"],
    correctAnswer: "x(x + 1)"
  },
  {
    id: 34,
    question: "Factorize x² - 25.",
    options: [
      "(x + 5)(x - 5)",
      "(x + 5)²",
      "(x - 5)²",
      "None of these"
    ],
    correctAnswer: "(x + 5)(x - 5)"
  },
  {
    id: 35,
    question: "What is the greatest common factor of x³ + x² + x?",
    options: ["x", "x²", "x³", "None of these"],
    correctAnswer: "x"
  },
  {
    id: 36,
    question: "What is the greatest common factor of 5n³ - 65n + 10?",
    options: ["5", "10", "n", "3"],
    correctAnswer: "5"
  },
  {
    id: 37,
    question: "If AB = C and A is invertible, then B equals:",
    options: [
      "CA⁻¹",
      "AC⁻¹",
      "A⁻¹C",
      "A + C"
    ],
    correctAnswer: "A⁻¹C"
  },
  {
    id: 38,
    question: "The matrix [[a, b], [c, d]] is singular when:",
    options: [
      "ab - cd = 0",
      "ac - bd = 0",
      "ad - bc = 0",
      "ad - bc ≠ 0"
    ],
    correctAnswer: "ad - bc = 0"
  },
  {
    id: 39,
    question: "The set of all points in a plane equidistant from a fixed point forms a:",
    options: ["Circle", "Diameter", "Line", "None of these"],
    correctAnswer: "Circle"
  },
  {
    id: 40,
    question: "The distance from the centre of a circle to any point on its circumference is called the:",
    options: ["Radius", "Diameter", "Circle", "None of these"],
    correctAnswer: "Radius"
  },
  {
    id: 41,
    question: "A line segment joining the centre of a circle to a point on its circumference is called a:",
    options: ["Radius", "Diameter", "Perimeter", "None of these"],
    correctAnswer: "Radius"
  },
  {
    id: 42,
    question: "The medians of a triangle are:",
    options: ["Parallel", "Of different lengths", "Concurrent", "None of these"],
    correctAnswer: "Concurrent"
  },
  {
    id: 43,
    question: "A triangle has side lengths 6, 8, and 10. It is:",
    options: [
      "Right-angled",
      "Acute-angled",
      "Obtuse-angled",
      "None of these"
    ],
    correctAnswer: "Right-angled"
  },
  {
    id: 44,
    question: "The perpendicular bisectors of the sides of a triangle are:",
    options: ["Parallel", "Concurrent", "A single point", "None of these"],
    correctAnswer: "Concurrent"
  },
  {
    id: 45,
    question: "A right triangle has perpendicular sides of lengths 12 and 5. Find its hypotenuse.",
    options: ["18", "20", "13", "25"],
    correctAnswer: "13"
  },
  {
    id: 46,
    question: "Factorize x³ + 27.",
    options: [
      "(x + 3)(x² - 3x + 9)",
      "(x - 3)(x² + 3x + 9)",
      "(x - 3)(x² - 3x + 9)",
      "(x + 3)(x² + 3x + 9)"
    ],
    correctAnswer: "(x + 3)(x² - 3x + 9)"
  },
  {
    id: 47,
    question: "The expression 8x³ + 125 is an example of:",
    options: ["A sum of squares", "A difference of squares", "A difference of cubes", "A sum of cubes"],
    correctAnswer: "A sum of cubes"
  },
  {
    id: 48,
    question: "Factorize 4y² - 9.",
    options: [
      "(2y + 3)(2y - 3)",
      "(2y - 3)²",
      "(2y + 3)²",
      "(2y - 3)³"
    ],
    correctAnswer: "(2y + 3)(2y - 3)"
  },
  {
    id: 49,
    question: "Factorize a³ + b³ + c³ - 3abc.",
    options: [
      "(a + b + c)(a² + b² + c² + ab + bc + ca)",
      "(a + b + c)(a² + b² + c² - ab - bc - ca)",
      "(a + b + c)(a² + b² + c² - ab + bc - ca)",
      "None of these"
    ],
    correctAnswer: "(a + b + c)(a² + b² + c² - ab - bc - ca)"
  },
  {
    id: 50,
    question: "Simplify (a² + b²)(a² - b²).",
    options: ["a⁴ + b⁴", "(a - b)²", "a² - b²", "a⁴ - b⁴"],
    correctAnswer: "a⁴ - b⁴"
  }
];

export default pafMathQuestions;