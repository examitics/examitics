const academicQuestions = [
  // =====================================================
  // ISLAMIC STUDIES — 1-12
  // =====================================================

  {
    id: 1,
    question: "Which of the following prophets is included among the Ulul-Azm prophets?",
    options: [
      "Hazrat Yunus AS",
      "Hazrat Dawud AS",
      "Hazrat Nuh AS",
      "Hazrat Zakariya AS"
    ],
    correctAnswer: "Hazrat Nuh AS"
  },

  {
    id: 2,
    question: "Hazrat Idris AS is traditionally associated with which profession?",
    options: [
      "Tailoring",
      "Carpentry",
      "Trading",
      "Shepherding"
    ],
    correctAnswer: "Tailoring"
  },

  {
    id: 3,
    question: "Who was the wet nurse of Prophet Muhammad ﷺ?",
    options: [
      "Hazrat Amina RA",
      "Hazrat Halima Sadia RA",
      "Hazrat Khadija RA",
      "Hazrat Fatima RA"
    ],
    correctAnswer: "Hazrat Halima Sadia RA"
  },

  {
    id: 4,
    question: "Which clan of the Quraish did Prophet Muhammad ﷺ belong to?",
    options: [
      "Banu Umayyah",
      "Banu Hashim",
      "Banu Makhzum",
      "Banu Thaqif"
    ],
    correctAnswer: "Banu Hashim"
  },

  {
    id: 5,
    question: "Who was the father of Prophet Muhammad ﷺ?",
    options: [
      "Abu Talib",
      "Abdullah",
      "Abdul Muttalib",
      "Abu Sufyan"
    ],
    correctAnswer: "Abdullah"
  },

  {
    id: 6,
    question: "Which battle is known as Youm-ul-Furqan?",
    options: [
      "Battle of Uhud",
      "Battle of Badr",
      "Battle of Khandaq",
      "Battle of Hunain"
    ],
    correctAnswer: "Battle of Badr"
  },

  {
    id: 7,
    question: "Who was given the title Saifullah?",
    options: [
      "Hazrat Hamza RA",
      "Hazrat Khalid bin Walid RA",
      "Hazrat Ali RA",
      "Hazrat Umar RA"
    ],
    correctAnswer: "Hazrat Khalid bin Walid RA"
  },

  {
    id: 8,
    question: "Which caliph was responsible for sending standardized copies of the Quran to different provinces?",
    options: [
      "Hazrat Abu Bakr RA",
      "Hazrat Umar RA",
      "Hazrat Uthman RA",
      "Hazrat Ali RA"
    ],
    correctAnswer: "Hazrat Uthman RA"
  },

  {
    id: 9,
    question: "Who established the Diwan during the Rashidun Caliphate?",
    options: [
      "Hazrat Abu Bakr RA",
      "Hazrat Umar RA",
      "Hazrat Uthman RA",
      "Hazrat Ali RA"
    ],
    correctAnswer: "Hazrat Umar RA"
  },

  {
    id: 10,
    question: "Which angel is associated with the recording of human deeds?",
    options: [
      "Jibreel AS",
      "Mikaeel AS",
      "Kiraman Katibin",
      "Israfeel AS"
    ],
    correctAnswer: "Kiraman Katibin"
  },

  {
    id: 11,
    question: "Which two angels question a person in the grave?",
    options: [
      "Raqib and Atid",
      "Munkar and Nakir",
      "Jibreel and Mikaeel",
      "Malik and Ridwan"
    ],
    correctAnswer: "Munkar and Nakir"
  },

  {
    id: 12,
    question: "Which Islamic month is the ninth month of the Hijri calendar?",
    options: [
      "Shaban",
      "Ramadan",
      "Shawwal",
      "Rajab"
    ],
    correctAnswer: "Ramadan"
  },

  // =====================================================
  // MATHEMATICS — 13-28
  // =====================================================

  {
    id: 13,
    question: "If f(x) = 3x² + 5x − 7, then f'(x) is:",
    options: [
      "6x + 5",
      "3x + 5",
      "6x − 7",
      "3x² + 5"
    ],
    correctAnswer: "6x + 5"
  },

  {
    id: 14,
    question: "The derivative of cos x is:",
    options: [
      "sin x",
      "-sin x",
      "cos x",
      "-cos x"
    ],
    correctAnswer: "-sin x"
  },

  {
    id: 15,
    question: "If y = eˣ, then dy/dx equals:",
    options: [
      "x eˣ",
      "eˣ",
      "1/eˣ",
      "x"
    ],
    correctAnswer: "eˣ"
  },

  {
    id: 16,
    question: "Using the product rule, the derivative of uv is:",
    options: [
      "u'v'",
      "u'v + uv'",
      "uv' − u'v",
      "u' + v'"
    ],
    correctAnswer: "u'v + uv'"
  },

  {
    id: 17,
    question: "The integral of cos x dx is:",
    options: [
      "-sin x + C",
      "sin x + C",
      "cos x + C",
      "-cos x + C"
    ],
    correctAnswer: "sin x + C"
  },

  {
    id: 18,
    question: "The integral of 1/x dx is:",
    options: [
      "x²/2 + C",
      "1/x² + C",
      "ln|x| + C",
      "x + C"
    ],
    correctAnswer: "ln|x| + C"
  },

  {
    id: 19,
    question: "The determinant of a 2 × 2 matrix [a b; c d] is:",
    options: [
      "ab − cd",
      "ad − bc",
      "ac − bd",
      "ad + bc"
    ],
    correctAnswer: "ad − bc"
  },

  {
    id: 20,
    question: "A square matrix is singular when its determinant is:",
    options: [
      "1",
      "-1",
      "0",
      "Undefined"
    ],
    correctAnswer: "0"
  },

  {
    id: 21,
    question: "What is the average of 12, 18, 24 and 30?",
    options: [
      "18",
      "20",
      "21",
      "24"
    ],
    correctAnswer: "21"
  },

  {
    id: 22,
    question: "If 5 : 7 = x : 35, then x is:",
    options: [
      "20",
      "25",
      "30",
      "35"
    ],
    correctAnswer: "25"
  },

  {
    id: 23,
    question: "What is the value of 7! / 5! ?",
    options: [
      "12",
      "24",
      "35",
      "42"
    ],
    correctAnswer: "42"
  },

  {
    id: 24,
    question: "How many different arrangements can be made from 4 distinct objects?",
    options: [
      "12",
      "16",
      "24",
      "32"
    ],
    correctAnswer: "24"
  },

  {
    id: 25,
    question: "What is the sum of the interior angles of a pentagon?",
    options: [
      "360°",
      "540°",
      "720°",
      "900°"
    ],
    correctAnswer: "540°"
  },

  {
    id: 26,
    question: "If log₂ x = 6, then x equals:",
    options: [
      "12",
      "32",
      "64",
      "128"
    ],
    correctAnswer: "64"
  },

  {
    id: 27,
    question: "What is i³?",
    options: [
      "1",
      "-1",
      "i",
      "-i"
    ],
    correctAnswer: "-i"
  },

  {
    id: 28,
    question: "If the simple interest on Rs. 4000 for 2 years is Rs. 480, the rate of interest is:",
    options: [
      "4%",
      "5%",
      "6%",
      "8%"
    ],
    correctAnswer: "6%"
  },

  // =====================================================
  // GENERAL KNOWLEDGE / PAKISTAN STUDIES — 29-40
  // =====================================================

  {
    id: 29,
    question: "Which pass connects Quetta with Kandahar?",
    options: [
      "Khyber Pass",
      "Bolan Pass",
      "Khojak Pass",
      "Lowari Pass"
    ],
    correctAnswer: "Khojak Pass"
  },

  {
    id: 30,
    question: "Which pass connects Dir with Chitral?",
    options: [
      "Babusar Pass",
      "Lowari Pass",
      "Khyber Pass",
      "Gomal Pass"
    ],
    correctAnswer: "Lowari Pass"
  },

  {
    id: 31,
    question: "Which pass connects Kaghan Valley with Chilas?",
    options: [
      "Babusar Pass",
      "Khunjerab Pass",
      "Malakand Pass",
      "Tochi Pass"
    ],
    correctAnswer: "Babusar Pass"
  },

  {
    id: 32,
    question: "Which organization has its headquarters in Vienna?",
    options: [
      "WHO",
      "OPEC",
      "UNESCO",
      "SAARC"
    ],
    correctAnswer: "OPEC"
  },

  {
    id: 33,
    question: "Where is the headquarters of the International Atomic Energy Agency located?",
    options: [
      "Geneva",
      "Vienna",
      "Paris",
      "Rome"
    ],
    correctAnswer: "Vienna"
  },

  {
    id: 34,
    question: "Where is the headquarters of UNESCO located?",
    options: [
      "Paris",
      "Geneva",
      "New York",
      "Rome"
    ],
    correctAnswer: "Paris"
  },

  {
    id: 35,
    question: "Which organization has its headquarters in Brussels?",
    options: [
      "NATO",
      "OIC",
      "SAARC",
      "ASEAN"
    ],
    correctAnswer: "NATO"
  },

  {
    id: 36,
    question: "Which is the largest freshwater lake by area in the world?",
    options: [
      "Lake Baikal",
      "Lake Victoria",
      "Lake Superior",
      "Lake Tanganyika"
    ],
    correctAnswer: "Lake Superior"
  },

  {
    id: 37,
    question: "Which lake is the deepest in the world?",
    options: [
      "Lake Victoria",
      "Lake Baikal",
      "Lake Superior",
      "Lake Titicaca"
    ],
    correctAnswer: "Lake Baikal"
  },

  {
    id: 38,
    question: "Which is the largest lake by area in the world?",
    options: [
      "Caspian Sea",
      "Lake Superior",
      "Lake Victoria",
      "Lake Baikal"
    ],
    correctAnswer: "Caspian Sea"
  },

  {
    id: 39,
    question: "Which Pakistani desert is located mainly in Bahawalpur?",
    options: [
      "Thar",
      "Cholistan",
      "Thal",
      "Kharan"
    ],
    correctAnswer: "Cholistan"
  },

  {
    id: 40,
    question: "Which desert is located between the Indus and Jhelum rivers?",
    options: [
      "Thar",
      "Cholistan",
      "Thal",
      "Nara"
    ],
    correctAnswer: "Thal"
  },

  // =====================================================
  // ENGLISH — 41-50
  // =====================================================

  {
    id: 41,
    question: "Choose the synonym of “Prudent”.",
    options: [
      "Wise",
      "Careless",
      "Reckless",
      "Hasty"
    ],
    correctAnswer: "Wise"
  },

  {
    id: 42,
    question: "Choose the antonym of “Obsolete”.",
    options: [
      "Ancient",
      "Outdated",
      "Modern",
      "Old"
    ],
    correctAnswer: "Modern"
  },

  {
    id: 43,
    question: "Choose the synonym of “Mitigate”.",
    options: [
      "Increase",
      "Alleviate",
      "Destroy",
      "Prevent"
    ],
    correctAnswer: "Alleviate"
  },

  {
    id: 44,
    question: "Choose the antonym of “Eloquent”.",
    options: [
      "Fluent",
      "Articulate",
      "Inarticulate",
      "Expressive"
    ],
    correctAnswer: "Inarticulate"
  },

  {
    id: 45,
    question: "He is proud ___ his achievement.",
    options: [
      "at",
      "of",
      "with",
      "for"
    ],
    correctAnswer: "of"
  },

  {
    id: 46,
    question: "She prefers tea ___ coffee.",
    options: [
      "than",
      "from",
      "to",
      "over"
    ],
    correctAnswer: "to"
  },

  {
    id: 47,
    question: "By next year, he ___ his degree.",
    options: [
      "completes",
      "completed",
      "will have completed",
      "has completed"
    ],
    correctAnswer: "will have completed"
  },

  {
    id: 48,
    question: "Choose the passive voice of: “They have completed the work.”",
    options: [
      "The work was completed by them.",
      "The work has been completed by them.",
      "The work is completed by them.",
      "The work had been completed by them."
    ],
    correctAnswer: "The work has been completed by them."
  },

  {
    id: 49,
    question: "Choose the correct sentence.",
    options: [
      "Each of the students have a book.",
      "Each of the students has a book.",
      "Each students has a book.",
      "Each of students have a book."
    ],
    correctAnswer: "Each of the students has a book."
  },

  {
    id: 50,
    question: "Choose the correct form: “They suggested ___ early.”",
    options: [
      "to leave",
      "leave",
      "leaving",
      "left"
    ],
    correctAnswer: "leaving"
  }
];

export default academicQuestions;