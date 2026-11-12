const academicQuestions = [
  // PAKISTAN STUDIES & HISTORY
  {
    id: 1,
    question: "Who was the second Prime Minister of Pakistan?",
    options: [
      "Khawaja Nazimuddin",
      "Liaquat Ali Khan",
      "Muhammad Ali Bogra",
      "Chaudhry Muhammad Ali",
    ],
    correctAnswer: "Khawaja Nazimuddin",
  },
  {
    id: 2,
    question: "Who was the first Field Marshal of Pakistan?",
    options: [
      "General Yahya Khan",
      "Field Marshal Ayub Khan",
      "General Musa Khan",
      "General Tikka Khan",
    ],
    correctAnswer: "Field Marshal Ayub Khan",
  },
  {
    id: 3,
    question:
      "In which year did Quaid-e-Azam join the Indian National Congress?",
    options: ["1905", "1906", "1913", "1916"],
    correctAnswer: "1906",
  },
  {
    id: 4,
    question: "When was Quaid-e-Azam Muhammad Ali Jinnah born?",
    options: [
      "25 December 1876",
      "23 March 1877",
      "14 August 1876",
      "25 December 1875",
    ],
    correctAnswer: "25 December 1876",
  },
  {
    id: 5,
    question: "On which date was the Lahore Resolution passed?",
    options: [
      "23 March 1941",
      "23 March 1940",
      "23 March 1942",
      "23 March 1943",
    ],
    correctAnswer: "23 March 1940",
  },
  {
    id: 6,
    question: "When was the first census of Pakistan conducted?",
    options: ["1948", "1951", "1956", "1961"],
    correctAnswer: "1951",
  },
  {
    id: 7,
    question: "In which year was the One Unit Scheme introduced in Pakistan?",
    options: ["1953", "1955", "1956", "1958"],
    correctAnswer: "1955",
  },
  {
    id: 8,
    question:
      "How many years after independence did Pakistan adopt its first Constitution in 1956?",
    options: ["7 years", "8 years", "9 years", "10 years"],
    correctAnswer: "9 years",
  },
  {
    id: 9,
    question:
      "Under the 1956 Constitution, the President of Pakistan was elected by:",
    options: [
      "Direct public vote",
      "An electoral college of the national and provincial legislatures",
      "The Prime Minister alone",
      "The Supreme Court",
    ],
    correctAnswer:
      "An electoral college of the national and provincial legislatures",
  },
  {
    id: 10,
    question:
      "Who presented the Fourteen Points in response to the Nehru Report?",
    options: [
      "Allama Iqbal",
      "Muhammad Ali Jinnah",
      "Liaquat Ali Khan",
      "A.K. Fazlul Haq",
    ],
    correctAnswer: "Muhammad Ali Jinnah",
  },

  // ISLAMIC STUDIES
  {
    id: 11,
    question: "Who was the third Caliph of Islam?",
    options: [
      "Hazrat Abu Bakr (RA)",
      "Hazrat Umar (RA)",
      "Hazrat Usman (RA)",
      "Hazrat Ali (RA)",
    ],
    correctAnswer: "Hazrat Usman (RA)",
  },
  {
    id: 12,
    question: "Which Sahabi's name is explicitly mentioned in the Holy Quran?",
    options: [
      "Hazrat Abu Bakr (RA)",
      "Hazrat Zaid bin Harithah (RA)",
      "Hazrat Umar (RA)",
      "Hazrat Bilal (RA)",
    ],
    correctAnswer: "Hazrat Zaid bin Harithah (RA)",
  },
  {
    id: 13,
    question:
      "What was the relationship of Hazrat Hamza (RA) to Prophet Muhammad (PBUH)?",
    options: [
      "Paternal uncle",
      "Maternal uncle",
      "Cousin only",
      "Brother-in-law",
    ],
    correctAnswer: "Paternal uncle",
  },
  {
    id: 14,
    question:
      "Abu Sufyan (RA) was the father of which wife of Prophet Muhammad (PBUH)?",
    options: [
      "Hazrat Hafsa (RA)",
      "Hazrat Umm Habibah (RA)",
      "Hazrat Ayesha (RA)",
      "Hazrat Zainab (RA)",
    ],
    correctAnswer: "Hazrat Umm Habibah (RA)",
  },
  {
    id: 15,
    question:
      "Who was the adopted son of Prophet Muhammad (PBUH) before the prohibition of legal adoption as lineage?",
    options: [
      "Hazrat Zaid bin Harithah (RA)",
      "Hazrat Anas bin Malik (RA)",
      "Hazrat Abdullah bin Masood (RA)",
      "Hazrat Usama bin Zaid (RA)",
    ],
    correctAnswer: "Hazrat Zaid bin Harithah (RA)",
  },
  {
    id: 16,
    question: "Who was the first child to accept Islam?",
    options: [
      "Hazrat Zaid bin Harithah (RA)",
      "Hazrat Ali (RA)",
      "Hazrat Abdullah bin Umar (RA)",
      "Hazrat Anas (RA)",
    ],
    correctAnswer: "Hazrat Ali (RA)",
  },
  {
    id: 17,
    question: "Who was the first woman to accept Islam?",
    options: [
      "Hazrat Ayesha (RA)",
      "Hazrat Fatima (RA)",
      "Hazrat Khadijah (RA)",
      "Hazrat Hafsa (RA)",
    ],
    correctAnswer: "Hazrat Khadijah (RA)",
  },
  {
    id: 18,
    question: "Who was the father of Prophet Ismail (AS)?",
    options: [
      "Prophet Musa (AS)",
      "Prophet Ibrahim (AS)",
      "Prophet Yaqub (AS)",
      "Prophet Ishaq (AS)",
    ],
    correctAnswer: "Prophet Ibrahim (AS)",
  },
  {
    id: 19,
    question: "Which Prophet was sent to Pharaoh (Firaun)?",
    options: [
      "Prophet Isa (AS)",
      "Prophet Musa (AS)",
      "Prophet Yusuf (AS)",
      "Prophet Dawud (AS)",
    ],
    correctAnswer: "Prophet Musa (AS)",
  },
  {
    id: 20,
    question: "Which Prophet is regarded as the ancestor of Bani Israel?",
    options: [
      "Prophet Ismail (AS)",
      "Prophet Yaqub (AS)",
      "Prophet Yunus (AS)",
      "Prophet Harun (AS)",
    ],
    correctAnswer: "Prophet Yaqub (AS)",
  },

  // GEOGRAPHY & WORLD GENERAL KNOWLEDGE
  {
    id: 21,
    question: "What is the capital of Bahrain?",
    options: ["Doha", "Manama", "Muscat", "Kuwait City"],
    correctAnswer: "Manama",
  },
  {
    id: 22,
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: "Ottawa",
  },
  {
    id: 23,
    question: "What is the capital of Gilgit-Baltistan?",
    options: ["Skardu", "Hunza", "Gilgit", "Chilas"],
    correctAnswer: "Gilgit",
  },
  {
    id: 24,
    question: "What is the capital of Antigua and Barbuda?",
    options: ["Castries", "St. John's", "Kingstown", "Roseau"],
    correctAnswer: "St. John's",
  },
  {
    id: 25,
    question: "What is the capital of Madagascar?",
    options: ["Nairobi", "Antananarivo", "Maputo", "Harare"],
    correctAnswer: "Antananarivo",
  },
  {
    id: 26,
    question: "What is the capital of Zimbabwe?",
    options: ["Lusaka", "Harare", "Gaborone", "Kampala"],
    correctAnswer: "Harare",
  },
  {
    id: 27,
    question: "What is the capital of Japan?",
    options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
    correctAnswer: "Tokyo",
  },
  {
    id: 28,
    question: "Which is the largest continent by land area?",
    options: ["Africa", "Asia", "North America", "Europe"],
    correctAnswer: "Asia",
  },
  {
    id: 29,
    question: "Which is the largest planet in our solar system?",
    options: ["Saturn", "Earth", "Jupiter", "Neptune"],
    correctAnswer: "Jupiter",
  },
  {
    id: 30,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Mercury", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    id: 31,
    question:
      "Which planet has the highest average surface temperature in our solar system?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Venus",
  },
  {
    id: 32,
    question: "Which planet can come closest to Earth at its nearest approach?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: "Venus",
  },
  {
    id: 33,
    question:
      "Which planet currently has the highest confirmed number of natural satellites?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Saturn",
  },

  // INTERNATIONAL AFFAIRS & ORGANIZATIONS
  {
    id: 34,
    question:
      "When did the United States conduct Operation Midnight Hammer against Iranian nuclear facilities?",
    options: [
      "13 June 2025",
      "21 June 2025",
      "6 September 2025",
      "1 July 2025",
    ],
    correctAnswer: "21 June 2025",
  },
  {
    id: 35,
    question:
      "What was the name of the US military operation against Iranian nuclear facilities in June 2025?",
    options: [
      "Operation Desert Storm",
      "Operation Midnight Hammer",
      "Operation Enduring Freedom",
      "Operation Epic Fury",
    ],
    correctAnswer: "Operation Midnight Hammer",
  },
  {
    id: 36,
    question: "What was the name of India's first nuclear test in 1974?",
    options: ["Pokhran-II", "Smiling Buddha", "Shakti", "Operation Vijay"],
    correctAnswer: "Smiling Buddha",
  },
  {
    id: 37,
    question: "How many nuclear tests did Pakistan conduct in May 1998?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "6",
  },
  {
    id: 38,
    question: "When were the first Nobel Prizes awarded?",
    options: ["1895", "1901", "1905", "1910"],
    correctAnswer: "1901",
  },

  // ENGLISH
  {
    id: 39,
    question: "Choose the synonym of 'Tyrant'.",
    options: ["Benevolent ruler", "Despot", "Peacemaker", "Supporter"],
    correctAnswer: "Despot",
  },
  {
    id: 40,
    question: "Choose the antonym of 'Beauty'.",
    options: ["Charm", "Grace", "Ugliness", "Elegance"],
    correctAnswer: "Ugliness",
  },
  {
    id: 41,
    question: "Choose the synonym of 'Disgusting'.",
    options: ["Repulsive", "Pleasant", "Attractive", "Delightful"],
    correctAnswer: "Repulsive",
  },
  {
    id: 42,
    question: "Choose the synonym of 'Safe'.",
    options: ["Dangerous", "Secure", "Risky", "Exposed"],
    correctAnswer: "Secure",
  },
  {
    id: 43,
    question: "Choose the synonym of 'Continue'.",
    options: ["Cease", "Persist", "Abandon", "Interrupt"],
    correctAnswer: "Persist",
  },

  // MATHEMATICS
  {
    id: 44,
    question: "The derivative of ln x with respect to x is:",
    options: ["x", "1/x", "ln x", "eˣ"],
    correctAnswer: "1/x",
  },
  {
    id: 45,
    question: "Solve: 3x − 7 = 14.",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    id: 46,
    question: "Differentiate y = x³ + 2x² − 5x.",
    options: ["3x² + 4x − 5", "3x² + 2x − 5", "x² + 4x − 5", "3x³ + 4x² − 5"],
    correctAnswer: "3x² + 4x − 5",
  },

  // SCIENCE & EVERYDAY KNOWLEDGE
  {
    id: 47,
    question: "What does DNA stand for?",
    options: [
      "Deoxyribonucleic Acid",
      "Dioxyribose Nuclear Acid",
      "Deoxynitric Acid",
      "Dynamic Nucleic Arrangement",
    ],
    correctAnswer: "Deoxyribonucleic Acid",
  },
  {
    id: 48,
    question:
      "Which nutrient is especially important for root development in plants?",
    options: ["Nitrogen", "Phosphorus", "Potassium", "Calcium"],
    correctAnswer: "Phosphorus",
  },

  // DAMS & INFRASTRUCTURE
  {
    id: 49,
    question: "On which river is the Diamer-Bhasha Dam being constructed?",
    options: ["Jhelum River", "Indus River", "Chenab River", "Kabul River"],
    correctAnswer: "Indus River",
  },
  {
    id: 50,
    question:
      "According to WAPDA, what is the planned length of the Diamer-Bhasha Dam?",
    options: ["806 metres", "906 metres", "1,006 metres", "1,206 metres"],
    correctAnswer: "1,006 metres",
  },
];

export default academicQuestions;
