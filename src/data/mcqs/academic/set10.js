const academicQuestions = [
  // PAKISTAN STUDIES & HISTORY
  {
    id: 1,
    question: "Who wrote the book 'The Prince'?",
    options: ["Thomas Hobbes", "Niccolò Machiavelli", "Plato", "Aristotle"],
    correctAnswer: "Niccolò Machiavelli",
  },
  {
    id: 2,
    question: "What was the first capital of Pakistan?",
    options: ["Lahore", "Karachi", "Rawalpindi", "Islamabad"],
    correctAnswer: "Karachi",
  },
  {
    id: 3,
    question: "Which city is commonly known as the heart of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    correctAnswer: "Lahore",
  },
  {
    id: 4,
    question: "Which South African city is often called the 'City of Gold'?",
    options: ["Cape Town", "Durban", "Johannesburg", "Pretoria"],
    correctAnswer: "Johannesburg",
  },
  {
    id: 5,
    question: "On what date did Fatima Jinnah pass away?",
    options: [
      "9 July 1967",
      "14 August 1967",
      "23 March 1968",
      "11 September 1965",
    ],
    correctAnswer: "9 July 1967",
  },
  {
    id: 6,
    question:
      "In which year did Fatima Jinnah join the All-India Muslim League?",
    options: ["1930", "1935", "1938", "1940"],
    correctAnswer: "1938",
  },
  {
    id: 7,
    question: "What was the profession of Fatima Jinnah?",
    options: ["Teacher", "Dentist", "Lawyer", "Journalist"],
    correctAnswer: "Dentist",
  },
  {
    id: 8,
    question: "What was the title of Ayub Khan's autobiography?",
    options: [
      "Pakistan: The Heart of Asia",
      "Friends Not Masters",
      "The Discovery of Pakistan",
      "My Life and Times",
    ],
    correctAnswer: "Friends Not Masters",
  },
  {
    id: 9,
    question: "What is Pakistan's highest military gallantry award?",
    options: [
      "Hilal-e-Jurat",
      "Sitara-e-Jurat",
      "Nishan-e-Haider",
      "Tamgha-e-Jurat",
    ],
    correctAnswer: "Nishan-e-Haider",
  },
  {
    id: 10,
    question: "How many individuals have been awarded the Nishan-e-Haider?",
    options: ["9", "10", "11", "12"],
    correctAnswer: "11",
  },
  {
    id: 11,
    question: "Which city is known as the old capital of Pakistan?",
    options: ["Lahore", "Karachi", "Quetta", "Peshawar"],
    correctAnswer: "Karachi",
  },

  // ISLAMIC STUDIES
  {
    id: 12,
    question:
      "What is the meaning commonly given to the name 'Israel' in Islamic tradition?",
    options: [
      "Servant of Allah",
      "Friend of Allah",
      "Lion of Allah",
      "Light of Allah",
    ],
    correctAnswer: "Servant of Allah",
  },
  {
    id: 13,
    question: "Which is the shortest Surah of the Holy Quran?",
    options: [
      "Surah Al-Ikhlas",
      "Surah Al-Kawthar",
      "Surah Al-Asr",
      "Surah Al-Falaq",
    ],
    correctAnswer: "Surah Al-Kawthar",
  },
  {
    id: 14,
    question: "How many months are there in the Islamic Hijri calendar?",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12",
  },
  {
    id: 15,
    question: "Which Islamic month is the ninth month of the Hijri calendar?",
    options: ["Muharram", "Rajab", "Ramadan", "Shawwal"],
    correctAnswer: "Ramadan",
  },
  {
    id: 16,
    question:
      "Which is the fourth pillar of Islam in the commonly taught five-pillar order?",
    options: ["Zakat", "Hajj", "Sawm (fasting)", "Shahadah"],
    correctAnswer: "Sawm (fasting)",
  },
  {
    id: 17,
    question:
      "What did the Quraish primarily worship before the advent of Islam?",
    options: ["Idols", "The sun only", "The stars only", "No deities"],
    correctAnswer: "Idols",
  },
  {
    id: 18,
    question:
      "Which daughter of Hazrat Umar (RA) married Prophet Muhammad (PBUH)?",
    options: [
      "Hazrat Ayesha (RA)",
      "Hazrat Hafsa (RA)",
      "Hazrat Zainab (RA)",
      "Hazrat Ruqayyah (RA)",
    ],
    correctAnswer: "Hazrat Hafsa (RA)",
  },
  {
    id: 19,
    question: "What was the name of Prophet Muhammad's (PBUH) foster sister?",
    options: [
      "Shayma bint al-Harith",
      "Asma bint Abu Bakr",
      "Umm Kulthum",
      "Safiyyah bint Abdul Muttalib",
    ],
    correctAnswer: "Shayma bint al-Harith",
  },
  {
    id: 20,
    question: "Which Surah of the Holy Quran is named after a family?",
    options: [
      "Surah An-Nisa",
      "Surah Al-Imran",
      "Surah Al-Maidah",
      "Surah Al-Anfal",
    ],
    correctAnswer: "Surah Al-Imran",
  },

  // GEOGRAPHY & WORLD GENERAL KNOWLEDGE
  {
    id: 21,
    question: "Where is Ratti Gali Lake located?",
    options: [
      "Hunza Valley",
      "Neelum Valley",
      "Swat Valley",
      "Skardu",
    ],
    correctAnswer: "Neelum Valley",
  },
  {
    id: 22,
    question: "Where is the National Museum of Pakistan located?",
    options: ["Lahore", "Islamabad", "Karachi", "Peshawar"],
    correctAnswer: "Karachi",
  },
  {
    id: 23,
    question: "What is the height of K2 above sea level?",
    options: ["8,126 metres", "8,611 metres", "8,848 metres", "8,586 metres"],
    correctAnswer: "8,611 metres",
  },
  {
    id: 24,
    question:
      "Where is the headquarters of the Asian Development Bank located?",
    options: [
      "Tokyo, Japan",
      "Manila, Philippines",
      "Beijing, China",
      "Bangkok, Thailand",
    ],
    correctAnswer: "Manila, Philippines",
  },
  {
    id: 25,
    question: "Where is the headquarters of Human Rights Watch located?",
    options: ["Geneva", "New York City", "London", "Brussels"],
    correctAnswer: "New York City",
  },
  {
    id: 26,
    question: "What is the capital of France?",
    options: ["Lyon", "Marseille", "Paris", "Nice"],
    correctAnswer: "Paris",
  },
  {
    id: 27,
    question:
      "Nelson Mandela was the former president and anti-apartheid leader of which country?",
    options: ["Nigeria", "South Africa", "Kenya", "Ghana"],
    correctAnswer: "South Africa",
  },
  {
    id: 28,
    question: "Adolf Hitler was the leader of which country?",
    options: ["Italy", "Germany", "Austria", "Spain"],
    correctAnswer: "Germany",
  },
  {
    id: 29,
    question: "Which country won the 2022 FIFA World Cup?",
    options: ["France", "Brazil", "Argentina", "Germany"],
    correctAnswer: "Argentina",
  },
  {
    id: 30,
    question: "Which country uses the Japanese Yen as its official currency?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan",
  },
  {
    id: 31,
    question: "What is the national bird of Pakistan?",
    options: ["Peacock", "Chukar Partridge", "Eagle", "Falcon"],
    correctAnswer: "Chukar Partridge",
  },
  {
    id: 32,
    question: "What is the national tree of Pakistan?",
    options: ["Neem", "Deodar", "Banyan", "Sheesham"],
    correctAnswer: "Deodar",
  },
  {
    id: 33,
    question: "What is the national flower of Pakistan?",
    options: ["Rose", "Tulip", "Jasmine", "Sunflower"],
    correctAnswer: "Jasmine",
  },
  {
    id: 34,
    question:
      "Pakistan is commonly divided into how many major physical regions?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3",
  },

  // INTERNATIONAL AFFAIRS & ORGANIZATIONS
  {
    id: 35,
    question: "What does OPEC stand for?",
    options: [
      "Organization of Petroleum Exporting Countries",
      "Organization for Political and Economic Cooperation",
      "Oil Producing and Exporting Council",
      "Organization of Petroleum and Energy Cooperation",
    ],
    correctAnswer: "Organization of Petroleum Exporting Countries",
  },
  {
    id: 36,
    question: "What does SAARC stand for?",
    options: [
      "South Asian Association for Regional Cooperation",
      "South African Alliance for Regional Commerce",
      "Southeast Asian Association for Regional Cooperation",
      "South Asian Agency for Research and Culture",
    ],
    correctAnswer: "South Asian Association for Regional Cooperation",
  },
  {
    id: 37,
    question: "Where is the headquarters of SAARC located?",
    options: [
      "Islamabad, Pakistan",
      "Dhaka, Bangladesh",
      "Kathmandu, Nepal",
      "New Delhi, India",
    ],
    correctAnswer: "Kathmandu, Nepal",
  },
  {
    id: 38,
    question:
      "The 38th Parallel is associated with the division between which two countries?",
    options: [
      "India and Pakistan",
      "North Korea and South Korea",
      "China and Mongolia",
      "Germany and Poland",
    ],
    correctAnswer: "North Korea and South Korea",
  },
  {
    id: 39,
    question:
      "The Victoria Cross is the highest military gallantry award of which country?",
    options: ["United States", "United Kingdom", "France", "Canada"],
    correctAnswer: "United Kingdom",
  },

  // ENGLISH
  {
    id: 40,
    question: "Choose the grammatically correct sentence.",
    options: [
      "Each of the players have a uniform.",
      "Each of the players has a uniform.",
      "Each players has a uniform.",
      "Each of players have a uniform.",
    ],
    correctAnswer: "Each of the players has a uniform.",
  },
  {
    id: 41,
    question:
      "Choose the correct verb form: 'If he ___ hard, he will pass the examination.'",
    options: ["study", "studies", "studied", "studying"],
    correctAnswer: "studies",
  },
  {
    id: 42,
    question: "Which of the following is an adjective?",
    options: ["Quickly", "Honesty", "Brave", "Run"],
    correctAnswer: "Brave",
  },
  {
    id: 43,
    question: "Which of the following is a first-person pronoun?",
    options: ["They", "He", "I", "You"],
    correctAnswer: "I",
  },
  {
    id: 44,
    question: "Complete the sentence: 'She told him ___ the notebook.'",
    options: ["return", "to return", "returned", "returning"],
    correctAnswer: "to return",
  },
  {
    id: 45,
    question: "What is a leopard?",
    options: [
      "A large wild cat",
      "A type of deer",
      "A wild dog",
      "A species of bear",
    ],
    correctAnswer: "A large wild cat",
  },

  // MATHEMATICS
  {
    id: 46,
    question: "What is 15% of 240?",
    options: ["24", "30", "36", "40"],
    correctAnswer: "36",
  },
  {
    id: 47,
    question:
      "The ratio of two numbers is 3:5 and their sum is 64. What is the smaller number?",
    options: ["18", "24", "30", "40"],
    correctAnswer: "24",
  },

  // SCIENCE & EVERYDAY KNOWLEDGE
  {
    id: 48,
    question:
      "Which element is an essential component of many amino acids and proteins in plants?",
    options: ["Sulphur", "Neon", "Helium", "Argon"],
    correctAnswer: "Sulphur",
  },
  {
    id: 49,
    question: "Zinc is important for plants mainly because it:",
    options: [
      "Supports enzyme activity",
      "Replaces sunlight",
      "Provides carbon dioxide",
      "Prevents all water loss",
    ],
    correctAnswer: "Supports enzyme activity",
  },

  // DAMS & INFRASTRUCTURE
  {
    id: 50,
    question: "What is the approximate crest length of Boria Dam in Rajasthan?",
    options: ["498 metres", "598 metres", "698 metres", "798 metres"],
    correctAnswer: "698 metres",
  },
];

export default academicQuestions;
