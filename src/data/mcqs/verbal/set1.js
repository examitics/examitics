const verbalQuestions = [

  {
    id: 1,
    question: "If Ali's present age is 5 years and Sidra is twice of Ali's age. Calculate Sidra's age when Ali is 11 years old?",
    options: ["14", "15", "16", "17"],
    correctAnswer: "16"
  },
  {
    id: 2,
    question: "A boy is 3 years old and his sister is 3 times older than him. What will be the age of his sister when the boy is 11 years old?",
    options: ["15", "16", "17", "18"],
    correctAnswer: "17"
  },
  {
    id: 3,
    question: "If my age is 10 years and my brother is twice my age, what will be our ratio after 10 years?",
    options: ["1:2", "2:3", "3:4", "1:3"],
    correctAnswer: "2:3"
  },
  {
    id: 4,
    question: "Salman is 4 years old and Ali's age is twice of Salman. When Salman is 12 years old, what will be Ali's age?",
    options: ["14", "16", "18", "20"],
    correctAnswer: "16"
  },
  {
    id: 5,
    question: "A man walks towards north, then turns left and then right. What is his present direction?",
    options: ["East", "West", "North", "South"],
    correctAnswer: "North"
  },
  {
    id: 6,
    question: "Ali moves toward north, turns left and then left again. What is his present direction?",
    options: ["North", "South", "East", "West"],
    correctAnswer: "South"
  },
  {
    id: 7,
    question: "If Ahmad walks towards north and then turns left, what is his present direction?",
    options: ["East", "West", "South", "North"],
    correctAnswer: "West"
  },
  {
    id: 8,
    question: "Frank is taller than John and Ralph is taller than Frank. Who is the shortest?",
    options: ["Frank", "Ralph", "John", "None"],
    correctAnswer: "John"
  },
  {
    id: 9,
    question: "Azhar was born in 2000 and Javed in 2005. Aslam is older than Javed but younger than Azhar. Who is the oldest?",
    options: ["Javed", "Aslam", "Azhar", "None"],
    correctAnswer: "Azhar"
  },
  {
    id: 10,
    question: "Ali is younger than Ahmad and Yaqoob is older than Ahmad. Who is the youngest?",
    options: ["Ahmad", "Yaqoob", "Ali", "None"],
    correctAnswer: "Ali"
  },
  {
    id: 11,
    question: "90% of 90 is:",
    options: ["72", "80", "81", "90"],
    correctAnswer: "81"
  },
  {
    id: 12,
    question: "80% of 90 is:",
    options: ["70", "72", "75", "80"],
    correctAnswer: "72"
  },
  {
    id: 13,
    question: "80% of 80 is:",
    options: ["60", "62", "64", "66"],
    correctAnswer: "64"
  },
  {
    id: 14,
    question: "60% of 9 is:",
    options: ["5.4", "6", "4.5", "3.6"],
    correctAnswer: "5.4"
  },
  {
    id: 15,
    question: "One third of 10% of 90 is:",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3"
  },
  {
    id: 16,
    question: "One third of 10% of 120 is:",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4"
  },
  {
    id: 17,
    question: "20% of one tenth of 90 is:",
    options: ["1.8", "2", "2.5", "3"],
    correctAnswer: "1.8"
  },
  {
    id: 18,
    question: "Out of 500 students, 360 are boys. What is the percentage of girls?",
    options: ["20%", "25%", "28%", "30%"],
    correctAnswer: "28%"
  },
  {
    id: 19,
    question: "There are 30 passengers in a bus. 2/3 are men. What percentage are women?",
    options: ["25%", "30%", "33.33%", "40%"],
    correctAnswer: "33.33%"
  },
  {
    id: 20,
    question: "In a class of 500 students, 340 are boys. Find the percentage of boys.",
    options: ["65%", "68%", "70%", "72%"],
    correctAnswer: "68%"
  },
  {
    id: 21,
    question: "In a classroom of 1500 students, 1200 are present. Find the percentage of present students.",
    options: ["70%", "75%", "80%", "85%"],
    correctAnswer: "80%"
  },
  {
    id: 22,
    question: "What comes next in the series: 2, 6, 14, 30, 62, ?",
    options: ["124", "126", "128", "130"],
    correctAnswer: "126"
  },
  {
    id: 23,
    question: "What comes next in the series: 3, 7, 14, 18, 36, 40, ?",
    options: ["60", "70", "80", "90"],
    correctAnswer: "80"
  },
  {
    id: 24,
    question: "Quarter of one tenth of 120 is:",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3"
  },
  {
    id: 25,
    question: "Quarter of 120 is:",
    options: ["20", "25", "30", "35"],
    correctAnswer: "30"
  },
  {
    id: 26,
    question: "One tenth of 90 is:",
    options: ["8", "9", "10", "11"],
    correctAnswer: "9"
  },
  {
    id: 27,
    question: "One third of 120 is:",
    options: ["30", "35", "40", "45"],
    correctAnswer: "40"
  },
  {
    id: 28,
    question: "120 × 7 =",
    options: ["720", "840", "960", "1020"],
    correctAnswer: "840"
  },
  {
    id: 29,
    question: "2(2+2) =",
    options: ["6", "8", "10", "12"],
    correctAnswer: "8"
  },
  {
    id: 30,
    question: "Half of quarter is:",
    options: ["1/2", "1/4", "1/6", "1/8"],
    correctAnswer: "1/8"
  },
  {
    id: 31,
    question: "What comes next: B, E, J, Q, ?",
    options: ["T", "U", "Y", "Z"],
    correctAnswer: "Z"
  },
  {
    id: 32,
    question: "What comes next: A, C, F, J, O, ?",
    options: ["S", "T", "U", "V"],
    correctAnswer: "U"
  },
  {
    id: 33,
    question: "What comes next: L, M, N, ?",
    options: ["O", "P", "Q", "R"],
    correctAnswer: "O"
  },
  {
    id: 34,
    question: "If z=2 and x=5 then u=?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "9"
  },
  {
    id: 35,
    question: "What comes next: z=3, x=5, v=7, t=9, ?",
    options: ["r=10", "r=11", "q=11", "p=13"],
    correctAnswer: "r=11"
  },
  {
    id: 36,
    question: "What comes next: A, E, K, ?",
    options: ["Q", "R", "S", "T"],
    correctAnswer: "S"
  },
  {
    id: 37,
    question: "What comes next: H, F, D, ?",
    options: ["A", "B", "C", "E"],
    correctAnswer: "B"
  },
  {
    id: 38,
    question: "How many months have 31 days?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7"
  },
  {
    id: 39,
    question: "Leap year comes after how many years?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4"
  },
  {
    id: 40,
    question: "If yesterday was Sunday, then the day after tomorrow will be:",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    correctAnswer: "Wednesday"
  },
  {
    id: 41,
    question: "If yesterday was Friday, tomorrow will be:",
    options: ["Saturday", "Sunday", "Monday", "Tuesday"],
    correctAnswer: "Sunday"
  },
  {
    id: 42,
    question: "If the 28th day of a month is Sunday, then the 2nd day will be:",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    correctAnswer: "Tuesday"
  },
  {
    id: 43,
    question: "If the 4th day of the month is Tuesday, then the 26th day will be:",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    correctAnswer: "Wednesday"
  },
  {
    id: 44,
    question: "If the 1st day of a month is Monday, then the 12th day will be:",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    correctAnswer: "Saturday"
  },
  {
    id: 45,
    question: "If the 2nd day of a month is Sunday, then the 23rd day will be:",
    options: ["Friday", "Saturday", "Sunday", "Monday"],
    correctAnswer: "Sunday"
  },
  {
    id: 46,
    question: "If one dozen pencils cost Rs 27, what is the price of 4 pencils?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "9"
  },
  {
    id: 47,
    question: "If one dozen pencils cost Rs 60, what is the cost of 5 pencils?",
    options: ["20", "25", "30", "35"],
    correctAnswer: "25"
  },
  {
    id: 48,
    question: "If one dozen eggs cost Rs 24, what is the price of 7 eggs?",
    options: ["12", "14", "16", "18"],
    correctAnswer: "14"
  },
  {
    id: 49,
    question: "If my brother's sister is your mother, who am I to you?",
    options: ["Brother", "Father", "Uncle", "Cousin"],
    correctAnswer: "Uncle"
  },
  {
    id: 50,
    question: "Sister of my brother's son is my:",
    options: ["Aunt", "Niece", "Sister", "Daughter"],
    correctAnswer: "Niece"
  },
  {
    id: 51,
    question: "My sister is your mother. What is the relation between you and me?",
    options: ["Brother", "Uncle", "Nephew or Niece", "Father"],
    correctAnswer: "Nephew or Niece"
  },
  {
    id: 52,
    question: "A is father of B but B is not A's son. What is the relation of B to A?",
    options: ["Brother", "Daughter", "Nephew", "Sister"],
    correctAnswer: "Daughter"
  },
  {
    id: 53,
    question: "A train's speed is twice that of a car. If a car covers 60 km in 1 hour, how much distance will the train cover in 30 minutes?",
    options: ["30 km", "40 km", "50 km", "60 km"],
    correctAnswer: "60 km"
  },
  {
    id: 54,
    question: "Train speed is double that of a car and the car travels 30 km in 1 hour. How much distance will the train cover in 30 minutes?",
    options: ["15 km", "20 km", "25 km", "30 km"],
    correctAnswer: "30 km"
  },
  {
    id: 55,
    question: "A train is moving at a speed of 90 km/h. How much distance will it cover in 12 minutes?",
    options: ["15 km", "18 km", "20 km", "22 km"],
    correctAnswer: "18 km"
  },
  {
    id: 56,
    question: "If a helicopter needs 50 gallons to move 320 km, how many gallons are needed for 400 km?",
    options: ["60", "62.5", "65", "70"],
    correctAnswer: "62.5"
  },
  {
    id: 57,
    question: "A man walks 20 km in 1 hour 40 minutes. How much time will he take to cover 1 km?",
    options: ["3 min", "4 min", "5 min", "6 min"],
    correctAnswer: "5 min"
  },
  {
    id: 58,
    question: "Ali bought a pen for Rs 30 and sold it for Rs 40. What is the profit percentage?",
    options: ["25%", "30%", "33.33%", "40%"],
    correctAnswer: "33.33%"
  },
  {
    id: 59,
    question: "A person purchased a book for Rs 500 and sold it for Rs 700. What is the profit percentage?",
    options: ["20%", "30%", "40%", "50%"],
    correctAnswer: "40%"
  },
  {
    id: 60,
    question: "Bat cannot see and snake cannot:",
    options: ["Walk", "Hear", "Move", "Bite"],
    correctAnswer: "Hear"
  },
  {
    id: 61,
    question: "Which one is different: Angle, Rectangle, Square, Hexagon?",
    options: ["Rectangle", "Square", "Hexagon", "Angle"],
    correctAnswer: "Angle"
  },
  {
    id: 62,
    question: "Which one is different: Cricket, Football, Tennis, Baseball?",
    options: ["Cricket", "Football", "Tennis", "Baseball"],
    correctAnswer: "Football"
  },
  {
    id: 63,
    question: "Which one is different: Wheat, Hay, Rice, Maize?",
    options: ["Wheat", "Hay", "Rice", "Maize"],
    correctAnswer: "Hay"
  },
  {
    id: 64,
    question: "Which one is different: Monkey, Ape, Chimpanzee, Panda?",
    options: ["Monkey", "Ape", "Chimpanzee", "Panda"],
    correctAnswer: "Panda"
  },
  {
    id: 65,
    question: "Which one is different: America, Africa, Asia, Euro?",
    options: ["America", "Africa", "Asia", "Euro"],
    correctAnswer: "Euro"
  },
  {
    id: 66,
    question: "Sound of eagle is called:",
    options: ["Roar", "Scream", "Chirp", "Cry"],
    correctAnswer: "Scream"
  },
  {
    id: 67,
    question: "Airplane flies due to:",
    options: ["Gravity", "Pressure", "Lift", "Engine"],
    correctAnswer: "Lift"
  },
  {
    id: 68,
    question: "Vehicle is to wheels as sound is to:",
    options: ["Voice", "Air", "Waves", "Noise"],
    correctAnswer: "Waves"
  },
  {
    id: 69,
    question: "Dog is to bitch as horse is to:",
    options: ["Cow", "Mare", "Doe", "Hen"],
    correctAnswer: "Mare"
  },
  {
    id: 70,
    question: "Parents give education to their children:",
    options: ["For jobs", "To groom them", "For money", "For sports"],
    correctAnswer: "To groom them"
  },
  {
    id: 71,
    question: "Why do we boil milk?",
    options: ["To cool it", "To change taste", "To kill germs", "To store it"],
    correctAnswer: "To kill germs"
  },
  {
    id: 72,
    question: "Why do people read newspapers?",
    options: ["Entertainment", "Knowledge", "Time pass", "Sleep"],
    correctAnswer: "Knowledge"
  },
  {
    id: 73,
    question: "Why do people use cars?",
    options: ["Decoration", "Travel", "Exercise", "Storage"],
    correctAnswer: "Travel"
  },
  {
    id: 74,
    question: "Why do girls wear glasses?",
    options: ["Fashion", "Style", "Eyesight", "Reading"],
    correctAnswer: "Eyesight"
  },
  {
    id: 75,
    question: "Why do women go to bazaar?",
    options: ["Walking", "Shopping", "Meeting", "Games"],
    correctAnswer: "Shopping"
  },
  {
    id: 76,
    question: "Last letter of UTYEAB after arranging alphabetically is:",
    options: ["T", "U", "Y", "B"],
    correctAnswer: "Y"
  },
  {
    id: 77,
    question: "What will be the 3rd letter in the word MANAGEMENT when arranged alphabetically?",
    options: ["E", "G", "M", "N"],
    correctAnswer: "G"
  },
  {
    id: 78,
    question: "Second letter when AUGMENTED is arranged alphabetically is:",
    options: ["A", "D", "E", "G"],
    correctAnswer: "E"
  },
  {
    id: 79,
    question: "After arranging RAPIS, it becomes the name of a:",
    options: ["Country", "City", "Ocean", "State"],
    correctAnswer: "City"
  },
  {
    id: 80,
    question: "Arrange OPERALD. It becomes:",
    options: ["Pet animal", "Bird", "Wild animal", "Fish"],
    correctAnswer: "Wild animal"
  },
  {
    id: 81,
    question: "Which one is different: Lahore, Rawalpindi, Karachi, Sindh, Quetta?",
    options: ["Lahore", "Karachi", "Sindh", "Quetta"],
    correctAnswer: "Sindh"
  },
  {
    id: 82,
    question: "Cold is to ice as hot is to:",
    options: ["Fire", "Steam", "Water", "Sun"],
    correctAnswer: "Steam"
  },
  {
    id: 83,
    question: "Which one does not belong: Cow, Dog, Leopard, Cat?",
    options: ["Dog", "Cow", "Cat", "Leopard"],
    correctAnswer: "Cow"
  },
  {
    id: 84,
    question: "E.H.M.O.R.T arranged becomes:",
    options: ["Mother", "Brother", "Teacher", "Doctor"],
    correctAnswer: "Mother"
  },
  {
    id: 85,
    question: "According to dictionary order, which comes first?",
    options: ["Mountain", "Margalla", "Machine", "None"],
    correctAnswer: "Machine"
  }
];

export default verbalQuestions;