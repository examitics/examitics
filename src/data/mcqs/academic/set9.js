const academicQuestions = [
  // PAKISTAN STUDIES & HISTORY
  {
    id: 1,
    question: "In which year was the Nehru Report presented?",
    options: ["1926", "1928", "1929", "1930"],
    correctAnswer: "1928",
  },
  {
    id: 2,
    question:
      "In which year did the War of Independence take place in the Indian subcontinent?",
    options: ["1757", "1857", "1885", "1905"],
    correctAnswer: "1857",
  },
  {
    id: 3,
    question: "When did the Chauri Chaura incident take place?",
    options: ["1919", "1920", "1922", "1925"],
    correctAnswer: "1922",
  },
  {
    id: 4,
    question:
      "Who signed the Tashkent Agreement on behalf of Pakistan and India?",
    options: [
      "Ayub Khan and Lal Bahadur Shastri",
      "Zulfikar Ali Bhutto and Indira Gandhi",
      "Yahya Khan and Jawaharlal Nehru",
      "Liaquat Ali Khan and Mahatma Gandhi",
    ],
    correctAnswer: "Ayub Khan and Lal Bahadur Shastri",
  },
  {
    id: 5,
    question: "Which country mediated the Tashkent Agreement of 1966?",
    options: ["United States", "United Kingdom", "Soviet Union", "China"],
    correctAnswer: "Soviet Union",
  },
  {
    id: 6,
    question: "On which date was the Simla Agreement signed?",
    options: [
      "2 July 1972",
      "3 July 1972",
      "14 August 1972",
      "10 January 1972",
    ],
    correctAnswer: "2 July 1972",
  },
  {
    id: 7,
    question: "In which year did Liaquat Ali Khan visit the United States?",
    options: ["1948", "1950", "1952", "1954"],
    correctAnswer: "1950",
  },
  {
    id: 8,
    question: "In which year did Gwadar become part of Pakistan?",
    options: ["1956", "1958", "1960", "1963"],
    correctAnswer: "1958",
  },
  {
    id: 9,
    question: "In which year was the Bogra Formula introduced?",
    options: ["1951", "1953", "1955", "1956"],
    correctAnswer: "1953",
  },
  {
    id: 10,
    question: "Who was the last Mughal emperor of India?",
    options: ["Akbar II", "Bahadur Shah Zafar", "Shah Alam II", "Aurangzeb"],
    correctAnswer: "Bahadur Shah Zafar",
  },
  {
    id: 11,
    question: "Who gave Pakistan the motto 'Unity, Faith, Discipline'?",
    options: [
      "Allama Iqbal",
      "Liaquat Ali Khan",
      "Muhammad Ali Jinnah",
      "Sir Syed Ahmad Khan",
    ],
    correctAnswer: "Muhammad Ali Jinnah",
  },

  // ISLAMIC STUDIES
  {
    id: 12,
    question:
      "Which Prophet is known as Bani Israel's ancestor and was also named Israel?",
    options: [
      "Prophet Ibrahim (AS)",
      "Prophet Yaqub (AS)",
      "Prophet Yusuf (AS)",
      "Prophet Ismail (AS)",
    ],
    correctAnswer: "Prophet Yaqub (AS)",
  },
  {
    id: 13,
    question: "Who led the Quraish army during the Battle of Uhud?",
    options: ["Abu Jahl", "Abu Sufyan", "Utbah ibn Rabi'ah", "Walid ibn Utbah"],
    correctAnswer: "Abu Sufyan",
  },
  {
    id: 14,
    question:
      "During which battle were Prophet Muhammad's (PBUH) teeth injured?",
    options: [
      "Battle of Badr",
      "Battle of Uhud",
      "Battle of Khandaq",
      "Battle of Hunayn",
    ],
    correctAnswer: "Battle of Uhud",
  },
  {
    id: 15,
    question:
      "Approximately how many Muslims participated in the Battle of Uhud?",
    options: ["313", "500", "700", "1,000"],
    correctAnswer: "700",
  },
  {
    id: 16,
    question: "In which Hijri year did the Battle of Tabuk take place?",
    options: ["5 AH", "7 AH", "8 AH", "9 AH"],
    correctAnswer: "9 AH",
  },
  {
    id: 17,
    question:
      "How many major military expeditions (Ghazwat) are commonly attributed to Prophet Muhammad (PBUH)?",
    options: ["17", "21", "27", "35"],
    correctAnswer: "27",
  },
  {
    id: 18,
    question: "Which major event took place in 8 AH?",
    options: [
      "Migration to Madinah",
      "Conquest of Makkah",
      "Battle of Badr",
      "Treaty of Hudaybiyyah",
    ],
    correctAnswer: "Conquest of Makkah",
  },
  {
    id: 19,
    question: "Which Prophet received the Injil?",
    options: [
      "Prophet Musa (AS)",
      "Prophet Isa (AS)",
      "Prophet Dawud (AS)",
      "Prophet Ibrahim (AS)",
    ],
    correctAnswer: "Prophet Isa (AS)",
  },
  {
    id: 20,
    question:
      "According to Islamic tradition, which angel is responsible for rain and provision?",
    options: ["Jibreel (AS)", "Mikaeel (AS)", "Israfeel (AS)", "Izraeel (AS)"],
    correctAnswer: "Mikaeel (AS)",
  },
  {
    id: 21,
    question:
      "Which wife of Prophet Muhammad (PBUH) is especially renowned for transmitting Hadith and explaining religious matters?",
    options: [
      "Hazrat Ayesha (RA)",
      "Hazrat Safiyyah (RA)",
      "Hazrat Juwayriyah (RA)",
      "Hazrat Maymunah (RA)",
    ],
    correctAnswer: "Hazrat Ayesha (RA)",
  },

  // GEOGRAPHY & WORLD GENERAL KNOWLEDGE
  {
    id: 22,
    question: "Which is the deepest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    id: 23,
    question:
      "Which river is traditionally listed as the longest river in the world in general-knowledge references?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
  },
  {
    id: 24,
    question: "Which is the longest river in Asia?",
    options: ["Ganges", "Mekong", "Yangtze", "Indus"],
    correctAnswer: "Yangtze",
  },
  {
    id: 25,
    question: "What is the largest island in the world?",
    options: ["Borneo", "Madagascar", "Greenland", "New Guinea"],
    correctAnswer: "Greenland",
  },
  {
    id: 26,
    question: "Which is the largest sea in the world by area?",
    options: [
      "Arabian Sea",
      "Caribbean Sea",
      "Philippine Sea",
      "South China Sea",
    ],
    correctAnswer: "Philippine Sea",
  },
  {
    id: 27,
    question: "On which side of Pakistan is the Arabian Sea located?",
    options: ["North", "South", "East", "West"],
    correctAnswer: "South",
  },
  {
    id: 28,
    question: "Which sea lies to the south of Pakistan?",
    options: ["Red Sea", "Arabian Sea", "Caspian Sea", "Mediterranean Sea"],
    correctAnswer: "Arabian Sea",
  },
  {
    id: 29,
    question: "Which country lies to the east of Pakistan?",
    options: ["Iran", "Afghanistan", "India", "China"],
    correctAnswer: "India",
  },
  {
    id: 30,
    question: "The Durand Line forms the border between which two countries?",
    options: [
      "Pakistan and India",
      "Pakistan and Afghanistan",
      "Pakistan and Iran",
      "Afghanistan and Iran",
    ],
    correctAnswer: "Pakistan and Afghanistan",
  },
  {
    id: 31,
    question:
      "Which famous pass connects Pakistan with Afghanistan near Peshawar?",
    options: ["Bolan Pass", "Khyber Pass", "Khunjerab Pass", "Lowari Pass"],
    correctAnswer: "Khyber Pass",
  },
  {
    id: 32,
    question:
      "Which historic route was a major passage for invaders entering the subcontinent through present-day Pakistan?",
    options: ["Babusar Pass", "Khyber Pass", "Shandur Pass", "Khunjerab Pass"],
    correctAnswer: "Khyber Pass",
  },
  {
    id: 33,
    question: "Where is Wazir Khan Mosque located?",
    options: ["Multan", "Lahore", "Peshawar", "Islamabad"],
    correctAnswer: "Lahore",
  },
  {
    id: 34,
    question: "In which region of Pakistan does the Neelum River flow?",
    options: ["Sindh", "Azad Jammu and Kashmir", "Balochistan", "South Punjab"],
    correctAnswer: "Azad Jammu and Kashmir",
  },
  {
    id: 35,
    question: "Where is Attabad Lake located?",
    options: ["Skardu", "Hunza, Gilgit-Baltistan", "Swat", "Neelum Valley"],
    correctAnswer: "Hunza, Gilgit-Baltistan",
  },

  // INTERNATIONAL AFFAIRS & ORGANIZATIONS
  {
    id: 36,
    question: "Where and when were the first Asian Games held?",
    options: [
      "Tokyo, 1950",
      "New Delhi, 1951",
      "Bangkok, 1954",
      "Jakarta, 1962",
    ],
    correctAnswer: "New Delhi, 1951",
  },
  {
    id: 37,
    question: "Where were the first modern Olympic Games held in 1896?",
    options: [
      "Paris, France",
      "Athens, Greece",
      "London, United Kingdom",
      "Rome, Italy",
    ],
    correctAnswer: "Athens, Greece",
  },
  {
    id: 38,
    question:
      "Which of the following sports was NOT part of the Paris 2024 Summer Olympic programme?",
    options: ["Surfing", "Skateboarding", "Cricket", "Sport climbing"],
    correctAnswer: "Cricket",
  },
  {
    id: 39,
    question: "What does OIC stand for?",
    options: [
      "Organization of Islamic Cooperation",
      "Organization of International Countries",
      "Office of Islamic Communities",
      "Organization for International Commerce",
    ],
    correctAnswer: "Organization of Islamic Cooperation",
  },

  // ENGLISH
  {
    id: 40,
    question: "Choose the synonym of 'Excuse'.",
    options: ["Accuse", "Pardon", "Punish", "Blame"],
    correctAnswer: "Pardon",
  },
  {
    id: 41,
    question: "What does the phrase 'All and Sundry' mean?",
    options: [
      "A few selected people",
      "Everyone without distinction",
      "Only wealthy people",
      "People from one family",
    ],
    correctAnswer: "Everyone without distinction",
  },
  {
    id: 42,
    question: "What is the closest meaning of 'Compassion'?",
    options: [
      "Cruelty",
      "Indifference",
      "Sympathy for others' suffering",
      "Pride",
    ],
    correctAnswer: "Sympathy for others' suffering",
  },
  {
    id: 43,
    question: "What does 'Dauntless' mean?",
    options: ["Fearless", "Careless", "Uncertain", "Timid"],
    correctAnswer: "Fearless",
  },
  {
    id: 44,
    question: "Choose the correct preposition: 'She is afraid ___ snakes.'",
    options: ["from", "of", "with", "at"],
    correctAnswer: "of",
  },
  {
    id: 45,
    question: "Choose the correct preposition: 'He is interested ___ science.'",
    options: ["on", "at", "in", "for"],
    correctAnswer: "in",
  },

  // MATHEMATICS
  {
    id: 46,
    question: "What is sin 30°?",
    options: ["0", "1/2", "√3/2", "1"],
    correctAnswer: "1/2",
  },
  {
    id: 47,
    question: "What is the sum of the interior angles of a triangle?",
    options: ["90°", "180°", "270°", "360°"],
    correctAnswer: "180°",
  },
  {
    id: 48,
    question:
      "A right-angled triangle has perpendicular sides of 6 cm and 8 cm. What is its hypotenuse?",
    options: ["9 cm", "10 cm", "12 cm", "14 cm"],
    correctAnswer: "10 cm",
  },

  // SCIENCE & EVERYDAY KNOWLEDGE
  {
    id: 49,
    question:
      "Which nutrient is primarily responsible for leafy vegetative growth in plants?",
    options: ["Nitrogen", "Phosphorus", "Zinc", "Sulphur"],
    correctAnswer: "Nitrogen",
  },

  // DAMS & INFRASTRUCTURE
  {
    id: 50,
    question: "Boria Dam in Pratapgarh, Rajasthan, is built on which river?",
    options: ["Mahi River", "Ganga River", "Yamuna River", "Narmada River"],
    correctAnswer: "Mahi River",
  },
];

export default academicQuestions;
