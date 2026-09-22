import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
  FiArrowLeft,
  FiInfo,
  FiTarget,
  FiAward,
} from "react-icons/fi";

import "../../styles/notes/notesPages.css";

/*
|--------------------------------------------------------------------------
| MATHEMATICS QUESTION BANK
|--------------------------------------------------------------------------
| 120 questions total
|
| The first 56 questions are taken from the Mathematics questions present
| in the Academic mock-test sets.
|
| The remaining questions are additional expected/practice questions
| covering common armed-forces initial-test mathematics topics.
|--------------------------------------------------------------------------
*/

const questionBank = [
  // ========================================================================
  // QUESTIONS FROM ACADEMIC MOCK TESTS
  // ========================================================================

  {
    id: 1,
    source: "Academic Set 1",
    question: "90% of 90 = ?",
    options: ["81", "90", "72", "95"],
    correct: 0,
    explanation: "90% of 90 = (90/100) × 90 = 81.",
  },
  {
    id: 2,
    source: "Academic Set 1",
    question: "Area of rectangle (3×8)?",
    options: ["24", "11", "18", "30"],
    correct: 0,
    explanation: "Area of a rectangle = length × width = 3 × 8 = 24 square units.",
  },
  {
    id: 3,
    source: "Academic Set 1",
    question: "sin 90° = ?",
    options: ["1", "0", "0.5", "-1"],
    correct: 0,
    explanation: "The value of sin 90° is 1.",
  },
  {
    id: 4,
    source: "Academic Set 1",
    question: "Product of matrix and inverse?",
    options: ["Identity Matrix", "Zero Matrix", "Scalar", "Transpose"],
    correct: 0,
    explanation:
      "For a square invertible matrix A, the product A × A⁻¹ is the identity matrix.",
  },
  {
    id: 5,
    source: "Academic Set 1",
    question: "5! = ?",
    options: ["120", "24", "60", "100"],
    correct: 0,
    explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120.",
  },
  {
    id: 6,
    source: "Academic Set 1",
    question: "Probability of certain event?",
    options: ["1", "0", "0.5", "2"],
    correct: 0,
    explanation: "The probability of a certain event is 1.",
  },
  {
    id: 7,
    source: "Academic Set 1",
    question: "One third of 10% of 120?",
    options: ["4", "3", "5", "2"],
    correct: 0,
    explanation:
      "10% of 120 = 12. One third of 12 = 4.",
  },
  {
    id: 8,
    source: "Academic Set 1",
    question: "Radius doubled, area becomes?",
    options: ["4 times", "2 times", "3 times", "6 times"],
    correct: 0,
    explanation:
      "Area of a circle is proportional to r². Doubling the radius makes the area 2² = 4 times larger.",
  },
  {
    id: 9,
    source: "Academic Set 1",
    question: "2 + 2 ÷ 2 = ?",
    options: ["3", "4", "2", "1"],
    correct: 0,
    explanation:
      "Division is performed before addition: 2 + (2 ÷ 2) = 2 + 1 = 3.",
  },
  {
    id: 10,
    source: "Academic Set 1",
    question: "One dozen pencils cost Rs.27, price of 4?",
    options: ["Rs.9", "Rs.6", "Rs.12", "Rs.18"],
    correct: 0,
    explanation:
      "12 pencils cost Rs.27. Therefore 4 pencils cost 27 ÷ 12 × 4 = Rs.9.",
  },

  {
    id: 11,
    source: "Academic Set 2",
    question: "Integral of −cosec²x dx?",
    options: ["cot x + C", "-cot x + C", "tan x + C", "-tan x + C"],
    correct: 0,
    explanation:
      "Since d(cot x)/dx = −cosec²x, the integral of −cosec²x is cot x + C.",
  },
  {
    id: 12,
    source: "Academic Set 2",
    question: "80% of 80 = ?",
    options: ["64", "60", "70", "80"],
    correct: 0,
    explanation: "80% of 80 = (80/100) × 80 = 64.",
  },
  {
    id: 13,
    source: "Academic Set 2",
    question: "Probability formula?",
    options: [
      "Favorable ÷ Total outcomes",
      "Total ÷ Favorable",
      "Favorable × Total",
      "1 ÷ Total",
    ],
    correct: 0,
    explanation:
      "Probability of an event = Number of favorable outcomes ÷ Total number of possible outcomes.",
  },
  {
    id: 14,
    source: "Academic Set 2",
    question: "Eccentricity of circle?",
    options: ["0", "1", "2", "0.5"],
    correct: 0,
    explanation: "The eccentricity of a circle is 0.",
  },
  {
    id: 15,
    source: "Academic Set 2",
    question: "cos x = 0 solution?",
    options: ["x=(2n+1)π/2", "x=nπ", "x=πn/3", "x=0"],
    correct: 0,
    explanation:
      "cos x = 0 when x = (2n + 1)π/2, where n is any integer.",
  },
  {
    id: 16,
    source: "Academic Set 2",
    question: "Area of rectangle formula?",
    options: ["Length × Width", "Length + Width", "2(L+W)", "L/W"],
    correct: 0,
    explanation: "The area of a rectangle is length × width.",
  },
  {
    id: 17,
    source: "Academic Set 2",
    question: "Study of triangles called?",
    options: ["Trigonometry", "Geometry", "Algebra", "Calculus"],
    correct: 0,
    explanation:
      "Trigonometry deals extensively with relationships between angles and sides of triangles.",
  },
  {
    id: 18,
    source: "Academic Set 2",
    question: "5 men write 5 pages in 5 mins, 1 man writes 1 page in?",
    options: ["5 mins", "1 min", "10 mins", "2 mins"],
    correct: 0,
    explanation:
      "Each man writes one page in 5 minutes. Therefore, one man takes 5 minutes to write one page.",
  },
  {
    id: 19,
    source: "Academic Set 2",
    question: "2(2+2)=?",
    options: ["8", "6", "4", "10"],
    correct: 0,
    explanation: "First calculate 2 + 2 = 4. Then 2 × 4 = 8.",
  },

  {
    id: 20,
    source: "Academic Set 3",
    question: "One quarter of one tenth of 120?",
    options: ["3", "2", "4", "5"],
    correct: 0,
    explanation:
      "One tenth of 120 is 12. One quarter of 12 is 3.",
  },
  {
    id: 21,
    source: "Academic Set 3",
    question: "nth term 2n−1, fourth term?",
    options: ["7", "6", "8", "9"],
    correct: 0,
    explanation:
      "For n = 4: 2(4) − 1 = 8 − 1 = 7.",
  },
  {
    id: 22,
    source: "Academic Set 3",
    question: "Flat sides of triangular prism?",
    options: ["5", "6", "4", "3"],
    correct: 0,
    explanation:
      "A triangular prism has 5 faces: 2 triangular faces and 3 rectangular faces.",
  },
  {
    id: 23,
    source: "Academic Set 3",
    question: "sin x × cosec x = ?",
    options: ["1", "0", "sin x", "cos x"],
    correct: 0,
    explanation:
      "Since cosec x = 1/sin x, sin x × cosec x = 1 where defined.",
  },
  {
    id: 24,
    source: "Academic Set 3",
    question: "Profit % if buy 30 sell 40?",
    options: ["33.3%", "25%", "40%", "50%"],
    correct: 0,
    explanation:
      "Profit = 40 − 30 = 10. Profit percentage = (10/30) × 100 = 33.33%.",
  },
  {
    id: 25,
    source: "Academic Set 3",
    question: "Cross product of parallel vectors?",
    options: ["Zero", "One", "Infinity", "Vector"],
    correct: 0,
    explanation:
      "The magnitude of a × b is |a||b|sinθ. For parallel vectors θ = 0°, so the cross product is zero.",
  },
  {
    id: 26,
    source: "Academic Set 3",
    question: "Abscissa means?",
    options: ["X-axis", "Y-axis", "Origin", "Slope"],
    correct: 0,
    explanation:
      "In coordinate geometry, the abscissa is the x-coordinate of a point.",
  },
  {
    id: 27,
    source: "Academic Set 3",
    question: "Radius doubled area?",
    options: ["4×", "2×", "3×", "1×"],
    correct: 0,
    explanation:
      "Since area is proportional to the square of radius, doubling the radius makes the area four times larger.",
  },
  {
    id: 28,
    source: "Academic Set 3",
    question: "Number of trigonometric functions?",
    options: ["6", "3", "4", "5"],
    correct: 0,
    explanation:
      "The six basic trigonometric functions are sin, cos, tan, cot, sec and cosec.",
  },
  {
    id: 29,
    source: "Academic Set 3",
    question: "Probability range?",
    options: ["0 to 1", "1 to 10", "0 to 100", "Negative to positive"],
    correct: 0,
    explanation:
      "Probability always lies between 0 and 1 inclusive.",
  },
  {
    id: 30,
    source: "Academic Set 3",
    question: "1200 present out of 1500 percentage?",
    options: ["80%", "75%", "70%", "85%"],
    correct: 0,
    explanation:
      "Percentage = (1200/1500) × 100 = 80%.",
  },
  {
    id: 31,
    source: "Academic Set 3",
    question: "Eccentricity of circle?",
    options: ["0", "1", "2", "0.5"],
    correct: 0,
    explanation: "The eccentricity of a circle is 0.",
  },

  {
    id: 32,
    source: "Academic Set 4",
    question: "What is one quarter of one tenth of 120?",
    options: ["2", "3", "4", "6"],
    correct: 1,
    explanation:
      "One tenth of 120 is 12, and one quarter of 12 is 3.",
  },
  {
    id: 33,
    source: "Academic Set 4",
    question: "Using S = vt, if v = 90 km/h and t = 12 minutes, what is S?",
    options: ["12 km", "15 km", "18 km", "20 km"],
    correct: 2,
    explanation:
      "12 minutes = 12/60 = 0.2 hours. S = vt = 90 × 0.2 = 18 km.",
  },
  {
    id: 34,
    source: "Academic Set 4",
    question: "Out of 500 students, 360 are boys. What is the percentage of girls?",
    options: ["20%", "28%", "32%", "36%"],
    correct: 1,
    explanation:
      "Girls = 500 − 360 = 140. Percentage = (140/500) × 100 = 28%.",
  },
  {
    id: 35,
    source: "Academic Set 4",
    question: "What is the sum of the first two consecutive prime numbers?",
    options: ["3", "5", "7", "9"],
    correct: 1,
    explanation:
      "The first two prime numbers are 2 and 3. Their sum is 5.",
  },
  {
    id: 36,
    source: "Academic Set 4",
    question: "For real and equal roots, the discriminant (b² − 4ac) must be:",
    options: ["1", "-1", "0", "4"],
    correct: 2,
    explanation:
      "A quadratic equation has real and equal roots when its discriminant b² − 4ac equals zero.",
  },

  {
    id: 37,
    source: "Academic Set 5",
    question:
      "If 8 workers complete a task in 15 days, how many workers are needed to complete it in 10 days?",
    options: ["10", "12", "14", "16"],
    correct: 1,
    explanation:
      "Workers and days are inversely proportional. 8 × 15 = 120 worker-days. 120 ÷ 10 = 12 workers.",
  },
  {
    id: 38,
    source: "Academic Set 5",
    question: "The average of 6 numbers is 25. Their total is:",
    options: ["125", "150", "175", "200"],
    correct: 1,
    explanation: "Total = Average × Number of values = 25 × 6 = 150.",
  },
  {
    id: 39,
    source: "Academic Set 5",
    question: "If 40% of a number is 72, the number is:",
    options: ["160", "180", "200", "220"],
    correct: 1,
    explanation:
      "Let the number be x. 0.40x = 72, so x = 72 ÷ 0.40 = 180.",
  },
  {
    id: 40,
    source: "Academic Set 5",
    question: "HCF of 48 and 72 is:",
    options: ["12", "18", "24", "36"],
    correct: 2,
    explanation:
      "The highest common factor of 48 and 72 is 24.",
  },
  {
    id: 41,
    source: "Academic Set 5",
    question: "If x − 7 = 15, then x =",
    options: ["8", "15", "22", "25"],
    correct: 2,
    explanation: "Add 7 to both sides: x = 15 + 7 = 22.",
  },
  {
    id: 42,
    source: "Academic Set 5",
    question: "A number increased by 20% becomes 360. The original number was:",
    options: ["280", "300", "320", "340"],
    correct: 1,
    explanation:
      "120% of the original number = 360. Original = 360 ÷ 1.20 = 300.",
  },
  {
    id: 43,
    source: "Academic Set 5",
    question: "A train travels 360 km in 4 hours. Its average speed is:",
    options: ["80 km/h", "90 km/h", "100 km/h", "120 km/h"],
    correct: 1,
    explanation:
      "Speed = Distance ÷ Time = 360 ÷ 4 = 90 km/h.",
  },
  {
    id: 44,
    source: "Academic Set 5",
    question: "If 3x + 5 = 20, x equals:",
    options: ["3", "5", "7", "10"],
    correct: 1,
    explanation:
      "3x = 20 − 5 = 15, therefore x = 15 ÷ 3 = 5.",
  },
  {
    id: 45,
    source: "Academic Set 5",
    question:
      "A shopkeeper buys an article for Rs. 800 and sells it for Rs. 920. His profit percentage is:",
    options: ["10%", "12%", "15%", "20%"],
    correct: 2,
    explanation:
      "Profit = 920 − 800 = Rs.120. Profit% = 120/800 × 100 = 15%.",
  },
  {
    id: 46,
    source: "Academic Set 5",
    question: "The ratio 5:8 is equivalent to:",
    options: ["10:14", "15:24", "20:30", "25:32"],
    correct: 1,
    explanation:
      "5:8 multiplied by 3 gives 15:24.",
  },

  {
    id: 47,
    source: "Academic Set 6",
    question: "√2025 =",
    options: ["35", "40", "45", "50"],
    correct: 2,
    explanation: "45 × 45 = 2025, so √2025 = 45.",
  },
  {
    id: 48,
    source: "Academic Set 6",
    question:
      "A can finish a work in 12 days and B in 18 days. Together they complete it in:",
    options: ["6 days", "7.2 days", "8 days", "9 days"],
    correct: 1,
    explanation:
      "Combined rate = 1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days.",
  },
  {
    id: 49,
    source: "Academic Set 6",
    question: "0.625 as a fraction is:",
    options: ["3/5", "5/8", "2/3", "7/8"],
    correct: 1,
    explanation:
      "0.625 = 625/1000 = 5/8 after simplification.",
  },
  {
    id: 50,
    source: "Academic Set 6",
    question: "The perimeter of a square is 48 cm. Its area is:",
    options: ["121 cm²", "144 cm²", "169 cm²", "196 cm²"],
    correct: 1,
    explanation:
      "Side = 48 ÷ 4 = 12 cm. Area = 12² = 144 cm².",
  },
  {
    id: 51,
    source: "Academic Set 6",
    question: "A price of Rs. 1500 is reduced by 12%. The new price is:",
    options: ["Rs. 1280", "Rs. 1320", "Rs. 1350", "Rs. 1380"],
    correct: 1,
    explanation:
      "Discount = 12% of 1500 = Rs.180. New price = 1500 − 180 = Rs.1320.",
  },
  {
    id: 52,
    source: "Academic Set 6",
    question: "If 2x + 3 = 17, x is:",
    options: ["5", "6", "7", "8"],
    correct: 2,
    explanation:
      "2x = 14, therefore x = 7.",
  },
  {
    id: 53,
    source: "Academic Set 6",
    question: "Find the next number: 3, 8, 15, 24, 35, ?",
    options: ["46", "48", "50", "52"],
    correct: 1,
    explanation:
      "Differences are 5, 7, 9, 11. The next difference is 13, so 35 + 13 = 48.",
  },
  {
    id: 54,
    source: "Academic Set 6",
    question: "If a:b = 3:5 and b:c = 10:7, then a:c is:",
    options: ["3:7", "6:7", "7:6", "5:7"],
    correct: 1,
    explanation:
      "Make b common: 3:5 becomes 6:10. Therefore a:c = 6:7.",
  },
  {
    id: 55,
    source: "Academic Set 6",
    question:
      "A sum of Rs. 5000 earns simple interest of Rs. 750 in 3 years. Rate of interest is:",
    options: ["4%", "5%", "6%", "7%"],
    correct: 1,
    explanation:
      "SI = PRT/100. 750 = 5000 × R × 3 / 100. Therefore R = 5%.",
  },
  {
    id: 56,
    source: "Academic Set 6",
    question: "35² − 25² =",
    options: ["500", "600", "700", "800"],
    correct: 1,
    explanation:
      "Using a² − b² = (a−b)(a+b): (35−25)(35+25) = 10 × 60 = 600.",
  },

  // ========================================================================
  // ADDITIONAL EXPECTED QUESTIONS
  // ========================================================================

  {
    id: 57,
    source: "Expected",
    question: "25% of 240 is:",
    options: ["40", "50", "60", "80"],
    correct: 2,
    explanation: "25% = 1/4, so 240 ÷ 4 = 60.",
  },
  {
    id: 58,
    source: "Expected",
    question: "15% of 200 is:",
    options: ["20", "25", "30", "35"],
    correct: 2,
    explanation: "15% of 200 = 0.15 × 200 = 30.",
  },
  {
    id: 59,
    source: "Expected",
    question: "If 30% of x is 45, x equals:",
    options: ["120", "135", "150", "180"],
    correct: 2,
    explanation: "0.30x = 45, so x = 45 ÷ 0.30 = 150.",
  },
  {
    id: 60,
    source: "Expected",
    question: "A number is decreased by 20% from 500. The result is:",
    options: ["380", "400", "420", "450"],
    correct: 1,
    explanation: "20% of 500 = 100. Therefore 500 − 100 = 400.",
  },
  {
    id: 61,
    source: "Expected",
    question: "The ratio 12:18 in simplest form is:",
    options: ["2:3", "3:2", "4:5", "6:9"],
    correct: 0,
    explanation: "Divide both terms by their HCF, 6: 12:18 = 2:3.",
  },
  {
    id: 62,
    source: "Expected",
    question: "If 4:7 = x:21, then x =",
    options: ["8", "10", "12", "14"],
    correct: 2,
    explanation: "x/21 = 4/7, so x = 21 × 4/7 = 12.",
  },
  {
    id: 63,
    source: "Expected",
    question: "The average of 10, 20, 30, 40 and 50 is:",
    options: ["25", "30", "35", "40"],
    correct: 1,
    explanation: "Sum = 150. Average = 150 ÷ 5 = 30.",
  },
  {
    id: 64,
    source: "Expected",
    question: "The average of 8 numbers is 15. Their sum is:",
    options: ["100", "110", "120", "130"],
    correct: 2,
    explanation: "Sum = Average × Number = 15 × 8 = 120.",
  },
  {
    id: 65,
    source: "Expected",
    question: "The average of 5 numbers is 18. If four numbers total 64, the fifth number is:",
    options: ["24", "25", "26", "27"],
    correct: 2,
    explanation:
      "Total = 5 × 18 = 90. Fifth number = 90 − 64 = 26.",
  },
  {
    id: 66,
    source: "Expected",
    question: "An article bought for Rs.500 is sold for Rs.600. Profit percentage is:",
    options: ["10%", "15%", "20%", "25%"],
    correct: 2,
    explanation:
      "Profit = 100. Profit% = 100/500 × 100 = 20%.",
  },
  {
    id: 67,
    source: "Expected",
    question: "An article bought for Rs.800 is sold for Rs.680. Loss percentage is:",
    options: ["10%", "12%", "15%", "20%"],
    correct: 2,
    explanation:
      "Loss = 800 − 680 = 120. Loss% = 120/800 × 100 = 15%.",
  },
  {
    id: 68,
    source: "Expected",
    question: "If CP = Rs.1000 and profit is 25%, the selling price is:",
    options: ["Rs.1150", "Rs.1200", "Rs.1250", "Rs.1300"],
    correct: 2,
    explanation:
      "Profit = 25% of 1000 = 250. SP = 1000 + 250 = Rs.1250.",
  },
  {
    id: 69,
    source: "Expected",
    question: "The LCM of 12 and 18 is:",
    options: ["24", "30", "36", "48"],
    correct: 2,
    explanation: "The least common multiple of 12 and 18 is 36.",
  },
  {
    id: 70,
    source: "Expected",
    question: "The HCF of 36 and 60 is:",
    options: ["6", "12", "18", "24"],
    correct: 1,
    explanation: "The greatest common factor of 36 and 60 is 12.",
  },
  {
    id: 71,
    source: "Expected",
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correct: 2,
    explanation: "2 is the smallest prime number.",
  },
  {
    id: 72,
    source: "Expected",
    question: "Which number is divisible by 3?",
    options: ["124", "125", "126", "127"],
    correct: 2,
    explanation:
      "The digits of 126 sum to 9, which is divisible by 3. Therefore 126 is divisible by 3.",
  },
  {
    id: 73,
    source: "Expected",
    question: "What is 3/4 + 1/4?",
    options: ["1/2", "1", "3/2", "2"],
    correct: 1,
    explanation: "3/4 + 1/4 = 4/4 = 1.",
  },
  {
    id: 74,
    source: "Expected",
    question: "What is 2/3 of 90?",
    options: ["30", "45", "60", "75"],
    correct: 2,
    explanation: "90 × 2/3 = 60.",
  },
  {
    id: 75,
    source: "Expected",
    question: "0.75 expressed as a percentage is:",
    options: ["7.5%", "25%", "75%", "750%"],
    correct: 2,
    explanation: "0.75 × 100 = 75%.",
  },
  {
    id: 76,
    source: "Expected",
    question: "0.4 as a fraction in simplest form is:",
    options: ["1/2", "2/5", "3/5", "4/5"],
    correct: 1,
    explanation: "0.4 = 4/10 = 2/5.",
  },
  {
    id: 77,
    source: "Expected",
    question: "If x + 9 = 20, x =",
    options: ["9", "10", "11", "12"],
    correct: 2,
    explanation: "x = 20 − 9 = 11.",
  },
  {
    id: 78,
    source: "Expected",
    question: "If 5x = 45, x =",
    options: ["7", "8", "9", "10"],
    correct: 2,
    explanation: "x = 45 ÷ 5 = 9.",
  },
  {
    id: 79,
    source: "Expected",
    question: "If 4x − 8 = 20, x =",
    options: ["5", "6", "7", "8"],
    correct: 2,
    explanation: "4x = 28, so x = 7.",
  },
  {
    id: 80,
    source: "Expected",
    question: "If x/5 = 6, then x =",
    options: ["11", "25", "30", "35"],
    correct: 2,
    explanation: "Multiply both sides by 5: x = 30.",
  },
  {
    id: 81,
    source: "Expected",
    question: "What is 7²?",
    options: ["14", "21", "49", "56"],
    correct: 2,
    explanation: "7² = 7 × 7 = 49.",
  },
  {
    id: 82,
    source: "Expected",
    question: "What is 12²?",
    options: ["124", "144", "154", "164"],
    correct: 1,
    explanation: "12 × 12 = 144.",
  },
  {
    id: 83,
    source: "Expected",
    question: "What is √144?",
    options: ["10", "11", "12", "14"],
    correct: 2,
    explanation: "12 × 12 = 144, so √144 = 12.",
  },
  {
    id: 84,
    source: "Expected",
    question: "The perimeter of a rectangle with length 8 cm and width 5 cm is:",
    options: ["13 cm", "26 cm", "40 cm", "80 cm"],
    correct: 1,
    explanation: "Perimeter = 2(l+w) = 2(8+5) = 26 cm.",
  },
  {
    id: 85,
    source: "Expected",
    question: "A square has side 9 cm. Its area is:",
    options: ["18 cm²", "36 cm²", "81 cm²", "90 cm²"],
    correct: 2,
    explanation: "Area = side² = 9² = 81 cm².",
  },
  {
    id: 86,
    source: "Expected",
    question: "The area of a triangle with base 10 cm and height 6 cm is:",
    options: ["20 cm²", "30 cm²", "40 cm²", "60 cm²"],
    correct: 1,
    explanation: "Area = 1/2 × base × height = 1/2 × 10 × 6 = 30 cm².",
  },
  {
    id: 87,
    source: "Expected",
    question: "The sum of angles in a triangle is:",
    options: ["90°", "180°", "270°", "360°"],
    correct: 1,
    explanation: "The three interior angles of a triangle always sum to 180°.",
  },
  {
    id: 88,
    source: "Expected",
    question: "A right angle measures:",
    options: ["45°", "60°", "90°", "180°"],
    correct: 2,
    explanation: "A right angle measures exactly 90°.",
  },
  {
    id: 89,
    source: "Expected",
    question: "The circumference of a circle is given by:",
    options: ["πr²", "2πr", "4πr²", "πd²"],
    correct: 1,
    explanation: "Circumference of a circle = 2πr.",
  },
  {
    id: 90,
    source: "Expected",
    question: "The area of a circle of radius r is:",
    options: ["2πr", "πr²", "πd", "r²/π"],
    correct: 1,
    explanation: "Area of a circle = πr².",
  },
  {
    id: 91,
    source: "Expected",
    question: "A car travels 240 km in 4 hours. Its speed is:",
    options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    correct: 2,
    explanation: "Speed = Distance ÷ Time = 240 ÷ 4 = 60 km/h.",
  },
  {
    id: 92,
    source: "Expected",
    question: "A vehicle travels at 60 km/h for 3 hours. Distance covered is:",
    options: ["120 km", "150 km", "180 km", "200 km"],
    correct: 2,
    explanation: "Distance = Speed × Time = 60 × 3 = 180 km.",
  },
  {
    id: 93,
    source: "Expected",
    question: "A train covers 150 km at 50 km/h. Time taken is:",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    correct: 1,
    explanation: "Time = Distance ÷ Speed = 150 ÷ 50 = 3 hours.",
  },
  {
    id: 94,
    source: "Expected",
    question: "If 6 workers complete a job in 8 days, the total work is:",
    options: ["14 worker-days", "36 worker-days", "48 worker-days", "56 worker-days"],
    correct: 2,
    explanation: "Work = Workers × Days = 6 × 8 = 48 worker-days.",
  },
  {
    id: 95,
    source: "Expected",
    question: "If 4 workers complete a job in 12 days, how many days will 8 workers take?",
    options: ["4 days", "6 days", "8 days", "10 days"],
    correct: 1,
    explanation:
      "Workers are inversely proportional to time. 4 × 12 = 48 worker-days. 48 ÷ 8 = 6 days.",
  },
  {
    id: 96,
    source: "Expected",
    question: "Simple interest on Rs.2000 at 5% per year for 2 years is:",
    options: ["Rs.100", "Rs.150", "Rs.200", "Rs.250"],
    correct: 2,
    explanation:
      "SI = PRT/100 = 2000 × 5 × 2 / 100 = Rs.200.",
  },
  {
    id: 97,
    source: "Expected",
    question: "The amount after adding Rs.200 simple interest to Rs.2000 is:",
    options: ["Rs.2100", "Rs.2200", "Rs.2300", "Rs.2400"],
    correct: 1,
    explanation: "Amount = Principal + Interest = 2000 + 200 = Rs.2200.",
  },
  {
    id: 98,
    source: "Expected",
    question: "What is 2⁵?",
    options: ["10", "16", "32", "64"],
    correct: 2,
    explanation: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32.",
  },
  {
    id: 99,
    source: "Expected",
    question: "What is 3³?",
    options: ["9", "18", "27", "36"],
    correct: 2,
    explanation: "3³ = 3 × 3 × 3 = 27.",
  },
  {
    id: 100,
    source: "Expected",
    question: "The next number in the sequence 2, 4, 8, 16, ? is:",
    options: ["20", "24", "30", "32"],
    correct: 3,
    explanation: "Each number is multiplied by 2. Therefore the next number is 16 × 2 = 32.",
  },
  {
    id: 101,
    source: "Expected",
    question: "The next number in the sequence 5, 10, 15, 20, ? is:",
    options: ["22", "24", "25", "30"],
    correct: 2,
    explanation: "The sequence increases by 5 each time. Therefore the next number is 25.",
  },
  {
    id: 102,
    source: "Expected",
    question: "If 2, 5, 8, 11, ? is an arithmetic sequence, the next term is:",
    options: ["12", "13", "14", "15"],
    correct: 2,
    explanation: "Each term increases by 3, so 11 + 3 = 14.",
  },
  {
    id: 103,
    source: "Expected",
    question: "What is the probability of getting a head when a fair coin is tossed?",
    options: ["0", "1/4", "1/2", "1"],
    correct: 2,
    explanation:
      "A fair coin has two equally likely outcomes. Probability of heads = 1/2.",
  },
  {
    id: 104,
    source: "Expected",
    question: "What is the probability of rolling a 6 on a fair die?",
    options: ["1/2", "1/3", "1/6", "1/12"],
    correct: 2,
    explanation:
      "A die has six equally likely outcomes and only one is 6. Probability = 1/6.",
  },
  {
    id: 105,
    source: "Expected",
    question: "If two angles are complementary and one is 35°, the other is:",
    options: ["45°", "55°", "65°", "145°"],
    correct: 1,
    explanation:
      "Complementary angles add to 90°. Therefore 90° − 35° = 55°.",
  },
  {
    id: 106,
    source: "Expected",
    question: "If two angles are supplementary and one is 120°, the other is:",
    options: ["30°", "45°", "60°", "90°"],
    correct: 2,
    explanation:
      "Supplementary angles add to 180°. Therefore 180° − 120° = 60°.",
  },
  {
    id: 107,
    source: "Expected",
    question: "If sin θ = 1/2 for an acute angle θ, then θ is:",
    options: ["30°", "45°", "60°", "90°"],
    correct: 0,
    explanation: "For an acute angle, sin 30° = 1/2.",
  },
  {
    id: 108,
    source: "Expected",
    question: "cos 60° =",
    options: ["0", "1/2", "√3/2", "1"],
    correct: 1,
    explanation: "cos 60° = 1/2.",
  },
  {
    id: 109,
    source: "Expected",
    question: "tan 45° =",
    options: ["0", "1/2", "1", "√3"],
    correct: 2,
    explanation: "tan 45° = 1.",
  },
  {
    id: 110,
    source: "Expected",
    question: "If x² = 49 and x is positive, x =",
    options: ["5", "6", "7", "8"],
    correct: 2,
    explanation: "The positive square root of 49 is 7.",
  },
  {
    id: 111,
    source: "Expected",
    question: "The roots of x² − 9 = 0 are:",
    options: ["3 only", "-3 only", "±3", "9"],
    correct: 2,
    explanation:
      "x² = 9, so x = ±3.",
  },
  {
    id: 112,
    source: "Expected",
    question: "If x² − 5x + 6 = 0, the roots are:",
    options: ["1 and 6", "2 and 3", "3 and 4", "1 and 5"],
    correct: 1,
    explanation:
      "x² − 5x + 6 = (x−2)(x−3), so the roots are 2 and 3.",
  },
  {
    id: 113,
    source: "Expected",
    question: "The value of 10 + 5 × 2 is:",
    options: ["20", "25", "30", "15"],
    correct: 0,
    explanation:
      "Multiplication comes before addition: 5 × 2 = 10, then 10 + 10 = 20.",
  },
  {
    id: 114,
    source: "Expected",
    question: "What is 15 − 3 × 4?",
    options: ["48", "12", "3", "0"],
    correct: 2,
    explanation:
      "3 × 4 = 12. Therefore 15 − 12 = 3.",
  },
  {
    id: 115,
    source: "Expected",
    question: "If 5 pencils cost Rs.50, the cost of 8 pencils is:",
    options: ["Rs.60", "Rs.70", "Rs.80", "Rs.90"],
    correct: 2,
    explanation:
      "One pencil costs Rs.10. Therefore 8 pencils cost Rs.80.",
  },
  {
    id: 116,
    source: "Expected",
    question: "A man spends 70% of his Rs.20,000 salary. His savings are:",
    options: ["Rs.4,000", "Rs.5,000", "Rs.6,000", "Rs.7,000"],
    correct: 2,
    explanation:
      "Savings = 30% of Rs.20,000 = Rs.6,000.",
  },
  {
    id: 117,
    source: "Expected",
    question: "If 3 notebooks cost Rs.150, 7 notebooks cost:",
    options: ["Rs.300", "Rs.350", "Rs.400", "Rs.450"],
    correct: 1,
    explanation:
      "One notebook costs Rs.50. Seven notebooks cost 7 × 50 = Rs.350.",
  },
  {
    id: 118,
    source: "Expected",
    question: "The sum of the first 5 natural numbers is:",
    options: ["10", "15", "20", "25"],
    correct: 1,
    explanation: "1 + 2 + 3 + 4 + 5 = 15.",
  },
  {
    id: 119,
    source: "Expected",
    question: "What is 25 × 16?",
    options: ["300", "350", "400", "450"],
    correct: 2,
    explanation: "25 × 16 = 400.",
  },
  {
    id: 120,
    source: "Expected",
    question: "A number divided by 8 gives 12. The number is:",
    options: ["80", "88", "96", "104"],
    correct: 2,
    explanation: "Number = 12 × 8 = 96.",
  },
];

/*
|--------------------------------------------------------------------------
| RANDOM 10 QUESTION SELECTION
|--------------------------------------------------------------------------
*/

const shuffleQuestions = (questions) => {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export default function Mathematics() {
  const [practiceQuestions, setPracticeQuestions] = useState(() =>
    shuffleQuestions(questionBank).slice(0, 10)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const question = practiceQuestions[currentQuestion];

  const answered = selectedAnswer !== null;

  const isLastQuestion =
    currentQuestion === practiceQuestions.length - 1;

  const practiceFinished =
    isLastQuestion && selectedAnswer !== null;

  const handleAnswer = (index) => {
    if (answered) return;

    setSelectedAnswer(index);

    if (index === question.correct) {
      setScore((previous) => previous + 1);
    }
  };

  const handleNext = () => {
    if (!answered) return;

    if (isLastQuestion) return;

    setCurrentQuestion((previous) => previous + 1);
    setSelectedAnswer(null);
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((previous) => previous - 1);
    setSelectedAnswer(null);
  };

  const restartPractice = () => {
    setPracticeQuestions(
      shuffleQuestions(questionBank).slice(0, 10)
    );

    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
  };

  return (
    <main className="synonyms-page">
      <div className="synonyms-container">

        {/* Breadcrumb */}
        <nav className="synonyms-breadcrumb">
          <Link to="/notes">Notes Hub</Link>
          <FiArrowRight />
          <span>Academics</span>
          <FiArrowRight />
          <strong>Mathematics</strong>
        </nav>

        {/* Hero */}
        <header className="synonyms-hero">
          <div className="synonyms-hero-icon">
            <FiBookOpen />
          </div>

          <div className="synonyms-hero-content">
            <span className="synonyms-eyebrow">
              ACADEMICS
            </span>

            <h1>Mathematics</h1>

            <p>
              Strengthen your mathematical concepts with
              exam-focused questions covering arithmetic,
              algebra, geometry, percentages, ratios,
              probability, trigonometry and more.
            </p>
          </div>
        </header>

        {/* Introduction */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>Mathematics for Initial Tests</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Mathematics questions in armed-forces initial tests
              generally focus on fundamental concepts and the
              ability to solve problems quickly and accurately.
            </p>

            <p>
              Important areas include percentages, ratios,
              averages, profit and loss, fractions, algebra,
              geometry, time and work, speed-distance-time,
              probability and basic trigonometry.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Practice Strategy</strong>

                <p>
                  Focus on understanding the method first, then
                  practise solving the same type of question
                  without a calculator.
                </p>

                <span>
                  The goal is accuracy combined with speed.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">02</span>

            <div>
              <span className="section-label">CORE TOPICS</span>
              <h2>What You Should Prepare</h2>
            </div>
          </div>

          <div className="content-card">
            <div className="concept-list">

              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Arithmetic</h3>
                  <p>
                    Percentages, fractions, decimals, averages,
                    ratios, profit and loss and basic calculations.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Algebra</h3>
                  <p>
                    Linear equations, quadratic equations,
                    expressions, sequences and basic algebraic
                    relationships.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Geometry & Mensuration</h3>
                  <p>
                    Areas, perimeters, triangles, circles,
                    angles, squares and basic three-dimensional
                    figures.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Applied Mathematics</h3>
                  <p>
                    Time and work, speed-distance-time, simple
                    interest, probability and numerical reasoning.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Question Table */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">03</span>

            <div>
              <span className="section-label">QUESTION BANK</span>
              <h2>Mathematics MCQs</h2>
            </div>
          </div>

          <div className="content-card">

            <p>
              This question bank contains{" "}
              <strong>{questionBank.length} Mathematics MCQs</strong>.
              It includes questions from the existing Academic mock
              tests together with additional expected practice
              questions.
            </p>

            <div
              style={{
                width: "100%",
                overflowX: "auto",
                marginTop: "24px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "650px",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                        width: "70px",
                      }}
                    >
                      #
                    </th>

                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Question
                    </th>

                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                        width: "220px",
                      }}
                    >
                      Answer
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {questionBank.map((item, index) => (
                    <tr key={item.id}>
                      <td
                        style={{
                          padding: "13px 14px",
                          borderBottom:
                            "1px solid var(--border-color, #e2e8f0)",
                          verticalAlign: "top",
                          fontWeight: 600,
                        }}
                      >
                        {index + 1}
                      </td>

                      <td
                        style={{
                          padding: "13px 14px",
                          borderBottom:
                            "1px solid var(--border-color, #e2e8f0)",
                          verticalAlign: "top",
                        }}
                      >
                        {item.question}
                      </td>

                      <td
                        style={{
                          padding: "13px 14px",
                          borderBottom:
                            "1px solid var(--border-color, #e2e8f0)",
                          verticalAlign: "top",
                          fontWeight: 600,
                        }}
                      >
                        {item.options[item.correct]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* Exam Tips */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">04</span>

            <div>
              <span className="section-label">EXAM STRATEGY</span>
              <h2>Important Mathematics Tips</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Master percentages and ratios</strong>
                <p>
                  These are among the most useful arithmetic
                  skills for quick initial-test calculations.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>Memorize basic formulas</strong>
                <p>
                  Know common area, perimeter, speed, work,
                  percentage and interest formulas before the test.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiAward />

              <div>
                <strong>Improve calculation speed</strong>
                <p>
                  Practise mental calculations and avoid spending
                  too much time on one difficult question.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Interactive Practice */}
        <section className="practice-section">

          <div className="practice-header">
            <div>
              <span className="section-label">
                INTERACTIVE PRACTICE
              </span>

              <h2>Test Your Mathematics</h2>

              <p>
                10 questions are randomly selected from the complete
                Mathematics question bank.
              </p>
            </div>

            <div className="practice-progress">
              <strong>
                {currentQuestion + 1}
              </strong>

              <span>
                / {practiceQuestions.length}
              </span>
            </div>
          </div>

          {!practiceFinished ? (
            <div className="mcq-card">

              <div className="mcq-top">
                <span>
                  QUESTION{" "}
                  {String(currentQuestion + 1).padStart(2, "0")}
                </span>

                <span>
                  Score: {score}/{currentQuestion}
                </span>
              </div>

              <h3>
                {question.question}
              </h3>

              <div className="mcq-options">

                {question.options.map((option, index) => {

                  const isCorrect =
                    index === question.correct;

                  const isSelected =
                    index === selectedAnswer;

                  let optionClass = "";

                  if (answered && isCorrect) {
                    optionClass = "correct";
                  } else if (
                    answered &&
                    isSelected &&
                    !isCorrect
                  ) {
                    optionClass = "wrong";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      className={`mcq-option ${optionClass}`}
                      onClick={() => handleAnswer(index)}
                      disabled={answered}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="option-text">
                        {option}
                      </span>

                      {answered && isCorrect && (
                        <FiCheckCircle className="answer-icon" />
                      )}

                      {answered &&
                        isSelected &&
                        !isCorrect && (
                          <FiXCircle className="answer-icon" />
                        )}
                    </button>
                  );
                })}

              </div>

              {answered && (
                <div
                  className={`answer-feedback ${
                    selectedAnswer === question.correct
                      ? "feedback-correct"
                      : "feedback-wrong"
                  }`}
                >

                  <div className="feedback-title">

                    {selectedAnswer === question.correct ? (
                      <>
                        <FiCheckCircle />
                        Correct Answer
                      </>
                    ) : (
                      <>
                        <FiXCircle />
                        Incorrect Answer
                      </>
                    )}

                  </div>

                  <p>
                    <strong>
                      Correct answer:
                    </strong>{" "}
                    {question.options[question.correct]}
                  </p>

                  <div className="explanation">
                    <strong>Explanation</strong>

                    <p>
                      {question.explanation}
                    </p>
                  </div>

                </div>
              )}

              <div className="mcq-navigation">

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  <FiArrowLeft />
                  Previous
                </button>

                <button
                  type="button"
                  className="primary-btn"
                  onClick={handleNext}
                  disabled={!answered}
                >
                  {isLastQuestion
                    ? "Finish"
                    : "Next Question"}

                  <FiArrowRight />
                </button>

              </div>

            </div>
          ) : (
            <div className="practice-result">

              <div className="result-icon">
                <FiAward />
              </div>

              <span className="section-label">
                PRACTICE COMPLETE
              </span>

              <h2>Well Done!</h2>

              <div className="result-score">
                <strong>{score}</strong>

                <span>
                  / {practiceQuestions.length}
                </span>
              </div>

              <p>
                You answered {score} out of{" "}
                {practiceQuestions.length} questions correctly.
              </p>

              <button
                type="button"
                className="primary-btn"
                onClick={restartPractice}
              >
                Practice Again
                <FiArrowRight />
              </button>

            </div>
          )}

        </section>

        {/* Related Topics */}
        <section className="related-section">

          <span className="section-label">
            CONTINUE LEARNING
          </span>

          <h2>Academic Topics</h2>

          <div className="related-links">

            <Link to="/notes/academics/english">
              English
              <FiArrowRight />
            </Link>

            <Link to="/notes/academics/physics">
              Physics
              <FiArrowRight />
            </Link>

            <Link to="/notes/academics/general-knowledge">
              General Knowledge
              <FiArrowRight />
            </Link>

            <Link to="/notes/academics/pakistan-affairs">
              Pakistan Affairs
              <FiArrowRight />
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}