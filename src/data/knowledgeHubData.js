// import {
//   FiBookOpen,
//   FiTrendingUp,
//   FiCpu,
//   FiAward,
//   FiFlag,
//   FiBookOpen,
//   FiGlobe,
//   FiActivity,
//   FiShield,
//   FiType,
//   FiNavigation,
//   FiDroplet,
//   FiMap,
//   FiLayers,
//   FiFlag,
//   FiGlobe,
//   FiHome,
//   FiBarChart2,
//   FiNavigation,
//   FiMap,
//   FiMonitor,
//   FiActivity,
//   FiActivity,
//   FiBarChart2,
//   FiCode,
//   FiTrendingUp,
//   FiShield,
//   FiUsers,
//   FiCrosshair,
// } from "react-icons/fa6";
import {
  FiBookOpen,
  FiTrendingUp,
  FiCpu,
  FiAward,
  FiFlag,
  FiGlobe,
  FiMap,
  FiDroplet,
  FiShield,
  FiType,
  FiNavigation,
  FiLayers,
  FiHome,
  FiMonitor,
  FiCode,
  FiActivity,
  FiBarChart2,
  FiUsers,
  FiCrosshair,
} from "react-icons/fi";

/* ======================================================
   CATEGORY DATA
====================================================== */

export const knowledgeCategories = [
  {
    id: "current-affairs",
    title: "Current Affairs",
    status: "coming soon",
    icon: FiTrendingUp,
    description: "Latest national & international updates.",
  },

  {
    id: "general-knowledge",
    title: "General Knowledge",
    status: "active",
    icon: FiBookOpen,
    description: "Important facts and information.",
  },

  {
    id: "academics",
    title: "Academics",
    status: "coming soon",
    icon: FiAward,
    description: "Academic subjects for entry tests.",
  },

  {
    id: "intelligence",
    title: "Intelligence",
    status: "coming soon",
    icon: FiCpu,
    description: "Verbal & Non-Verbal reasoning.",
  },

  {
    id: "pakistan-affairs",
    title: "Pakistan Affairs",
    status: "coming soon",
    icon: FiFlag,
    description: "History, Constitution & Politics.",
  },

  {
    id: "islamic-studies",
    title: "Islamic Studies",
    status: "coming soon",
    icon: FiBookOpen,
    description: "Islamic history and fundamentals.",
  },

  {
    id: "geography",
    title: "Geography",
    status: "coming soon",
    icon: FiGlobe,
    description: "Pakistan & World Geography.",
  },

  {
    id: "science",
    title: "Science",
    status: "coming soon",
    icon: FiActivity,
    description: "Physics, Chemistry & Biology.",
  },

  {
    id: "defence",
    title: "Defence",
    status: "coming soon",
    icon: FiShield,
    description: "Pakistan Armed Forces.",
  },

  {
    id: "english",
    title: "English",
    status: "coming soon",
    icon: FiType,
    description: "Grammar, Vocabulary & Writing.",
  },
];

/* ======================================================
   HELPER
====================================================== */

const topic = ({
  id,
  category,
  title,
  slug,
  icon,
  description,
  articles,
  mcqs,
  difficulty = "Easy",
  featured = false,
  updated = "June 2026",
}) => ({
  id,
  category,
  title,
  slug,
  icon,
  description,
  articles,
  mcqs,
  difficulty,
  featured,
  updated,
});

/* ======================================================
   KNOWLEDGE ITEMS
====================================================== */

export const knowledgeItems = [

  /* ==========================================
     CURRENT AFFAIRS
  ========================================== */

  topic({
    id: 1,
    category: "current-affairs",
    title: "Pakistan Current Affairs",
    slug: "/knowledge/current-affairs/pakistan-current-affairs",
    icon: FiTrendingUp,
    description:
      "Latest national events, government updates and important developments.",
    articles: 12,
    mcqs: 220,
    featured: true,
  }),

  topic({
    id: 2,
    category: "current-affairs",
    title: "International Current Affairs",
    slug: "/knowledge/current-affairs/international-current-affairs",
    icon: FiGlobe,
    description:
      "Global news, international organizations and world affairs.",
    articles: 10,
    mcqs: 180,
    featured: true,
  }),

  topic({
    id: 3,
    category: "current-affairs",
    title: "Sports Updates",
    slug: "/knowledge/current-affairs/sports-current-affairs",
    icon: FiFlag,
    description:
      "National and international sports events and records.",
    articles: 6,
    mcqs: 90,
  }),

  // topic({
  //   id: 4,
  //   category: "current-affairs",
  //   title: "Economy",
  //   slug: "/knowledge/current-affairs/economy",
  //   icon: FiTrendingUp,
  //   description:
  //     "Economic developments, budgets and financial affairs.",
  //   articles: 9,
  //   mcqs: 130,
  // }),

  // topic({
  //   id: 5,
  //   category: "current-affairs",
  //   title: "Technology",
  //   slug: "/knowledge/current-affairs/technology",
  //   icon: FiMonitor,
  //   description:
  //     "Artificial Intelligence, innovation and technology news.",
  //   articles: 8,
  //   mcqs: 100,
  // }),

  // topic({
  //   id: 6,
  //   category: "current-affairs",
  //   title: "Environment",
  //   slug: "/knowledge/current-affairs/environment",
  //   icon: FiLayers,
  //   description:
  //     "Climate change, environment and sustainability updates.",
  //   articles: 7,
  //   mcqs: 95,
  // }),

  /* ==========================================
     GENERAL KNOWLEDGE
  ========================================== */

  topic({
    id: 7,
    category: "general-knowledge",
    title: "Motorways of Pakistan",
    // slug: "/knowledge/general-knowledge/motorways-of-pakistan",
    slug: "/knowledge/general-knowledge/motorways-of-pakistan",
    icon: FiNavigation,
    description:
      "Complete motorway network, routes and important facts.",
    articles: 8,
    mcqs: 160,
    featured: true,
  }),

  topic({
    id: 8,
    category: "general-knowledge",
    title: "National Highways",
    slug: "/knowledge/general-knowledge/national-highways-of-pakistan",
    icon: FiNavigation,
    description:
      "Important national highways connecting Pakistan.",
    articles: 6,
    mcqs: 110,
  }),

  topic({
    id: 9,
    category: "general-knowledge",
    title: "Rivers of Pakistan",
    slug: "/knowledge/general-knowledge/rivers-of-pakistan",
    icon: FiDroplet,
    description:
      "Major rivers, tributaries and river systems.",
    articles: 9,
    mcqs: 170,
    featured: true,
  }),

  topic({
    id: 10,
    category: "general-knowledge",
    title: "Dams of Pakistan",
    slug: "/knowledge/general-knowledge/dams-of-pakistan",
    icon: FiMap,
    description:
      "Major dams, reservoirs and hydroelectric projects.",
    articles: 8,
    mcqs: 140,
  }),

  topic({
    id: 11,
    category: "general-knowledge",
    title: "Lakes of Pakistan",
    slug: "/knowledge/general-knowledge/lakes-of-pakistan",
    icon: FiDroplet,
    description:
      "Natural and artificial lakes of Pakistan.",
    articles: 7,
    mcqs: 120,
  }),

  topic({
    id: 12,
    category: "general-knowledge",
    title: "Mountains of Pakistan",
    slug: "/knowledge/general-knowledge/mountains-of-pakistan",
    icon: FiMap,
    description:
      "Mountain ranges, famous peaks and important facts.",
    articles: 10,
    mcqs: 180,
  }),

  // topic({
  //   id: 13,
  //   category: "general-knowledge",
  //   title: "Mountain Passes",
  //   slug: "/knowledge/general-knowledge/passes",
  //   icon: FiMap,
  //   description:
  //     "Strategic mountain passes of Pakistan.",
  //   articles: 5,
  //   mcqs: 90,
  // }),

  topic({
    id: 14,
    category: "general-knowledge",
    title: "Deserts of Pakistan",
    slug: "/knowledge/general-knowledge/deserts-of-pakistan",
    icon: FiNavigation,
    description:
      "Major deserts and geographical importance.",
    articles: 5,
    mcqs: 85,
  }),

  topic({
    id: 15,
    category: "general-knowledge",
    title: "National Parks",
    slug: "/knowledge/general-knowledge/national-parks-of-pakistan",
    icon: FiLayers,
    description:
      "Protected parks, wildlife and biodiversity.",
    articles: 7,
    mcqs: 95,
  }),

  topic({
    id: 16,
    category: "general-knowledge",
    title: "Countries & Capitals",
    slug: "/knowledge/general-knowledge/countries-and-capitals",
    icon: FiGlobe,
    description:
      "Countries of the world and their capitals.",
    articles: 12,
    mcqs: 300,
    difficulty: "Medium",
  }),

  topic({
    id: 17,
    category: "general-knowledge",
    title: "World Currencies",
    slug: "/knowledge/general-knowledge/world-currencies",
    icon: FiBarChart2,
    description:
      "Currencies, symbols and issuing countries.",
    articles: 8,
    mcqs: 150,
  }),

  // topic({
  //   id: 18,
  //   category: "general-knowledge",
  //   title: "Flags of the World",
  //   slug: "/knowledge/general-knowledge/flags",
  //   icon: FiFlag,
  //   description:
  //     "National flags and important facts.",
  //   articles: 11,
  //   mcqs: 250,
  //   difficulty: "Medium",
  // }),
  /* ==========================================
     ACADEMICS
  ========================================== */

  // topic({
  //   id: 19,
  //   category: "academics",
  //   title: "Mathematics",
  //   slug: "/knowledge/academics/mathematics",
  //   icon: FiBarChart2,
  //   description:
  //     "Arithmetic, Algebra, Geometry, Trigonometry and important formulas.",
  //   articles: 18,
  //   mcqs: 420,
  //   featured: true,
  //   difficulty: "Medium",
  // }),

  // topic({
  //   id: 20,
  //   category: "academics",
  //   title: "Physics",
  //   slug: "/knowledge/academics/physics",
  //   icon: FiActivity,
  //   description:
  //     "Mechanics, Electricity, Magnetism, Waves and Modern Physics.",
  //   articles: 16,
  //   mcqs: 360,
  //   difficulty: "Medium",
  // }),

  // topic({
  //   id: 21,
  //   category: "academics",
  //   title: "Chemistry",
  //   slug: "/knowledge/academics/chemistry",
  //   icon: FiActivity,
  //   description:
  //     "Organic, Inorganic and Physical Chemistry with solved MCQs.",
  //   articles: 15,
  //   mcqs: 340,
  //   difficulty: "Medium",
  // }),

  // topic({
  //   id: 22,
  //   category: "academics",
  //   title: "Biology",
  //   slug: "/knowledge/academics/biology",
  //   icon: FiActivity,
  //   description:
  //     "Botany, Zoology, Human Biology and Genetics.",
  //   articles: 17,
  //   mcqs: 380,
  //   difficulty: "Medium",
  // }),

  // topic({
  //   id: 23,
  //   category: "academics",
  //   title: "Computer Science",
  //   slug: "/knowledge/academics/computer-science",
  //   icon: FiMonitor,
  //   description:
  //     "Computer fundamentals, hardware, software and networking.",
  //   articles: 12,
  //   mcqs: 250,
  // }),

  // topic({
  //   id: 24,
  //   category: "academics",
  //   title: "General Science",
  //   slug: "/knowledge/academics/general-science",
  //   icon: FiBookOpen,
  //   description:
  //     "Basic scientific concepts frequently asked in entry tests.",
  //   articles: 14,
  //   mcqs: 300,
  //   featured: true,
  // }),

  /* ==========================================
     INTELLIGENCE
  ========================================== */

  // topic({
  //   id: 25,
  //   category: "intelligence",
  //   title: "Verbal Intelligence",
  //   slug: "/knowledge/intelligence/verbal-intelligence",
  //   icon: FiCpu,
  //   description:
  //     "Verbal reasoning techniques with explanations and practice.",
  //   articles: 14,
  //   mcqs: 500,
  //   featured: true,
  //   difficulty: "Medium",
  // }),

  // topic({
  //   id: 26,
  //   category: "intelligence",
  //   title: "Non-Verbal Intelligence",
  //   slug: "/knowledge/intelligence/non-verbal-intelligence",
  //   icon: FiCpu,
  //   description:
  //     "Image-based reasoning and pattern recognition exercises.",
  //   articles: 12,
  //   mcqs: 420,
  //   featured: true,
  //   difficulty: "Medium",
  // }),

  // topic({
  //   id: 27,
  //   category: "intelligence",
  //   title: "Analogies",
  //   slug: "/knowledge/intelligence/analogies",
  //   icon: FiCpu,
  //   description:
  //     "Word relationship and analogy practice questions.",
  //   articles: 8,
  //   mcqs: 180,
  // }),

  // topic({
  //   id: 28,
  //   category: "intelligence",
  //   title: "Series",
  //   slug: "/knowledge/intelligence/series",
  //   icon: FiCpu,
  //   description:
  //     "Alphabet, number and mixed series questions.",
  //   articles: 8,
  //   mcqs: 220,
  // }),

  // topic({
  //   id: 29,
  //   category: "intelligence",
  //   title: "Coding & Decoding",
  //   slug: "/knowledge/intelligence/coding-decoding",
  //   icon: FiCode,
  //   description:
  //     "Coding-decoding tricks and solved examples.",
  //   articles: 9,
  //   mcqs: 190,
  //   difficulty: "Hard",
  // }),

  // topic({
  //   id: 30,
  //   category: "intelligence",
  //   title: "Direction Sense",
  //   slug: "/knowledge/intelligence/direction-sense",
  //   icon: FiNavigation,
  //   description:
  //     "Direction-based reasoning with shortcuts.",
  //   articles: 6,
  //   mcqs: 120,
  // }),

  // topic({
  //   id: 31,
  //   category: "intelligence",
  //   title: "Blood Relations",
  //   slug: "/knowledge/intelligence/blood-relations",
  //   icon: FiUsers,
  //   description:
  //     "Blood relation concepts with solved practice questions.",
  //   articles: 7,
  //   mcqs: 150,
  // }),

  /* ==========================================
     PAKISTAN AFFAIRS
  ========================================== */

  // topic({
  //   id: 32,
  //   category: "pakistan-affairs",
  //   title: "Constitution of Pakistan",
  //   slug: "/knowledge/pakistan-affairs/constitution",
  //   icon: FiShield,
  //   description:
  //     "History, articles and constitutional amendments.",
  //   articles: 16,
  //   mcqs: 350,
  //   featured: true,
  //   difficulty: "Hard",
  // }),

  // topic({
  //   id: 33,
  //   category: "pakistan-affairs",
  //   title: "History of Pakistan",
  //   slug: "/knowledge/pakistan-affairs/history",
  //   icon: FiFlag,
  //   description:
  //     "Pakistan Movement, independence and historical events.",
  //   articles: 18,
  //   mcqs: 420,
  //   featured: true,
  // }),

  // topic({
  //   id: 34,
  //   category: "pakistan-affairs",
  //   title: "Economy of Pakistan",
  //   slug: "/knowledge/pakistan-affairs/economy",
  //   icon: FiTrendingUp,
  //   description:
  //     "Economic indicators, sectors and financial institutions.",
  //   articles: 10,
  //   mcqs: 170,
  // }),

  // topic({
  //   id: 35,
  //   category: "pakistan-affairs",
  //   title: "Judiciary",
  //   slug: "/knowledge/pakistan-affairs/judiciary",
  //   icon: FiHome,
  //   description:
  //     "Judicial structure and constitutional courts of Pakistan.",
  //   articles: 9,
  //   mcqs: 160,
  // }),

  // topic({
  //   id: 36,
  //   category: "pakistan-affairs",
  //   title: "Political Parties",
  //   slug: "/knowledge/pakistan-affairs/political-parties",
  //   icon: FiUsers,
  //   description:
  //     "Major political parties and democratic history.",
  //   articles: 8,
  //   mcqs: 140,
  // }),

  // topic({
  //   id: 37,
  //   category: "pakistan-affairs",
  //   title: "Pakistan Armed Forces",
  //   slug: "/knowledge/pakistan-affairs/pakistan-armed-forces",
  //   icon: FiCrosshair,
  //   description:
  //     "Army, Navy and Air Force organization and history.",
  //   articles: 12,
  //   mcqs: 220,
  //   featured: true,
  // }),

  /* ==========================================
     ISLAMIC STUDIES
  ========================================== */

  // topic({
  //   id: 38,
  //   category: "islamic-studies",
  //   title: "Pillars of Islam",
  //   slug: "/knowledge/islamic-studies/pillars-of-islam",
  //   icon: FiBookOpen,
  //   description:
  //     "Five pillars of Islam with detailed explanations.",
  //   articles: 8,
  //   mcqs: 180,
  // }),

  // topic({
  //   id: 39,
  //   category: "islamic-studies",
  //   title: "Prophets",
  //   slug: "/knowledge/islamic-studies/prophets",
  //   icon: FiBookOpen,
  //   description:
  //     "Introduction to the Prophets mentioned in the Holy Quran.",
  //   articles: 12,
  //   mcqs: 240,
  // }),

  // topic({
  //   id: 40,
  //   category: "islamic-studies",
  //   title: "Holy Quran",
  //   slug: "/knowledge/islamic-studies/holy-quran",
  //   icon: FiBookOpen,
  //   description:
  //     "Important Surahs, facts, revelations and Quranic knowledge.",
  //   articles: 14,
  //   mcqs: 320,
  //   featured: true,
  // }),

  // topic({
  //   id: 41,
  //   category: "islamic-studies",
  //   title: "Ahadith",
  //   slug: "/knowledge/islamic-studies/ahadith",
  //   icon: FiBookOpen,
  //   description:
  //     "Important Ahadith frequently asked in competitive exams.",
  //   articles: 10,
  //   mcqs: 220,
  // }),

  // topic({
  //   id: 42,
  //   category: "islamic-studies",
  //   title: "Islamic History",
  //   slug: "/knowledge/islamic-studies/islamic-history",
  //   icon: FiFlag,
  //   description:
  //     "Major Islamic events, battles and historical personalities.",
  //   articles: 15,
  //   mcqs: 340,
  //   featured: true,
  //   difficulty: "Medium",
  // }),
    /* ==========================================
     GEOGRAPHY
  ========================================== */

  // topic({
  //   id: 43,
  //   category: "geography",
  //   title: "World Geography",
  //   slug: "/knowledge/geography/world-geography",
  //   icon: FiGlobe,
  //   description:
  //     "Continents, oceans, countries, mountains, rivers and important geographical facts.",
  //   articles: 18,
  //   mcqs: 420,
  //   featured: true,
  //   difficulty: "Medium",
  // }),

  // topic({
  //   id: 44,
  //   category: "geography",
  //   title: "Pakistan Geography",
  //   slug: "/knowledge/geography/pakistan-geography",
  //   icon: FiGlobe,
  //   description:
  //     "Physical features, provinces, climate and geographical importance of Pakistan.",
  //   articles: 16,
  //   mcqs: 380,
  //   featured: true,
  // }),

  // topic({
  //   id: 45,
  //   category: "geography",
  //   title: "Continents",
  //   slug: "/knowledge/geography/continents",
  //   icon: FiGlobe,
  //   description:
  //     "Seven continents with countries, population and geographical facts.",
  //   articles: 8,
  //   mcqs: 170,
  // }),

  // topic({
  //   id: 46,
  //   category: "geography",
  //   title: "Oceans",
  //   slug: "/knowledge/geography/oceans",
  //   icon: FiDroplet,
  //   description:
  //     "Major oceans, seas and important marine geography.",
  //   articles: 7,
  //   mcqs: 150,
  // }),

  // topic({
  //   id: 47,
  //   category: "geography",
  //   title: "Climate",
  //   slug: "/knowledge/geography/climate",
  //   icon: FiGlobe,
  //   description:
  //     "Climate zones, weather systems and environmental conditions.",
  //   articles: 9,
  //   mcqs: 180,
  // }),

  // topic({
  //   id: 48,
  //   category: "geography",
  //   title: "Major Rivers of the World",
  //   slug: "/knowledge/geography/major-rivers-world",
  //   icon: FiDroplet,
  //   description:
  //     "Important international rivers, their origins and significance.",
  //   articles: 10,
  //   mcqs: 210,
  // }),

  // topic({
  //   id: 49,
  //   category: "geography",
  //   title: "Mountain Ranges",
  //   slug: "/knowledge/geography/mountain-ranges",
  //   icon: FiMap,
  //   description:
  //     "Major mountain ranges of Pakistan and the world.",
  //   articles: 10,
  //   mcqs: 200,
  // }),

  // topic({
  //   id: 50,
  //   category: "geography",
  //   title: "Deserts of the World",
  //   slug: "/knowledge/geography/deserts-world",
  //   icon: FiNavigation,
  //   description:
  //     "Largest deserts, climate and geographical characteristics.",
  //   articles: 8,
  //   mcqs: 160,
  // }),

  /* ==========================================
     SCIENCE
  ========================================== */

  // topic({
  //   id: 51,
  //   category: "science",
  //   title: "Physics",
  //   slug: "/knowledge/science/physics",
  //   icon: FiActivity,
  //   description:
  //     "Motion, force, energy, electricity and modern physics concepts.",
  //   articles: 18,
  //   mcqs: 420,
  //   featured: true,
  //   difficulty: "Medium",
  // }),

  // topic({
  //   id: 52,
  //   category: "science",
  //   title: "Chemistry",
  //   slug: "/knowledge/science/chemistry",
  //   icon: FiActivity,
  //   description:
  //     "Elements, compounds, reactions and chemical calculations.",
  //   articles: 16,
  //   mcqs: 390,
  //   featured: true,
  //   difficulty: "Medium",
  // }),

  // topic({
  //   id: 53,
  //   category: "science",
  //   title: "Biology",
  //   slug: "/knowledge/science/biology",
  //   icon: FiActivity,
  //   description:
  //     "Living organisms, human body, plants and genetics.",
  //   articles: 18,
  //   mcqs: 410,
  //   featured: true,
  // }),

  // topic({
  //   id: 54,
  //   category: "science",
  //   title: "Solar System",
  //   slug: "/knowledge/science/solar-system",
  //   icon: FiGlobe,
  //   description:
  //     "Planets, satellites, stars and astronomical facts.",
  //   articles: 10,
  //   mcqs: 220,
  // }),

  // topic({
  //   id: 55,
  //   category: "science",
  //   title: "Human Body",
  //   slug: "/knowledge/science/human-body",
  //   icon: FiActivity,
  //   description:
  //     "Body systems, organs and important biological functions.",
  //   articles: 15,
  //   mcqs: 350,
  // }),

  // topic({
  //   id: 56,
  //   category: "science",
  //   title: "Computer Fundamentals",
  //   slug: "/knowledge/science/computer-fundamentals",
  //   icon: FiMonitor,
  //   description:
  //     "Computer hardware, software, operating systems and networking.",
  //   articles: 12,
  //   mcqs: 260,
  // }),

  // topic({
  //   id: 57,
  //   category: "science",
  //   title: "Artificial Intelligence",
  //   slug: "/knowledge/science/artificial-intelligence",
  //   icon: FiCpu,
  //   description:
  //     "AI fundamentals, machine learning and modern applications.",
  //   articles: 9,
  //   mcqs: 170,
  //   difficulty: "Hard",
  // }),

  // topic({
  //   id: 58,
  //   category: "science",
  //   title: "Scientific Discoveries",
  //   slug: "/knowledge/science/scientific-discoveries",
  //   icon: FiBookOpen,
  //   description:
  //     "Major discoveries, inventions and famous scientists.",
  //   articles: 11,
  //   mcqs: 210,
  // }),
    /* ==========================================
     DEFENCE
  ========================================== */

  // topic({
  //   id: 59,
  //   category: "defence",
  //   title: "Pakistan Army",
  //   slug: "/knowledge/defence/pakistan-army",
  //   icon: FiShield,
  //   description:
  //     "History, commands, corps, regiments and organizational structure.",
  //   articles: 14,
  //   mcqs: 320,
  //   featured: true,
  //   difficulty: "Medium",
  // }),

  // topic({
  //   id: 60,
  //   category: "defence",
  //   title: "Pakistan Navy",
  //   slug: "/knowledge/defence/pakistan-navy",
  //   icon: FiShield,
  //   description:
  //     "Naval commands, fleets, bases and maritime responsibilities.",
  //   articles: 11,
  //   mcqs: 240,
  // }),

  // topic({
  //   id: 61,
  //   category: "defence",
  //   title: "Pakistan Air Force",
  //   slug: "/knowledge/defence/pakistan-air-force",
  //   icon: FiCrosshair,
  //   description:
  //     "Aircraft, commands, air bases and operational capabilities.",
  //   articles: 12,
  //   mcqs: 260,
  //   featured: true,
  // }),

  // topic({
  //   id: 62,
  //   category: "defence",
  //   title: "Military Ranks",
  //   slug: "/knowledge/defence/military-ranks",
  //   icon: FiShield,
  //   description:
  //     "Officer and soldier rank structure of Pakistan Armed Forces.",
  //   articles: 8,
  //   mcqs: 170,
  // }),

  // topic({
  //   id: 63,
  //   category: "defence",
  //   title: "Military Awards",
  //   slug: "/knowledge/defence/military-awards",
  //   icon: FiBookOpen,
  //   description:
  //     "National military decorations, medals and honors.",
  //   articles: 7,
  //   mcqs: 150,
  // }),

  // topic({
  //   id: 64,
  //   category: "defence",
  //   title: "Major Weapons",
  //   slug: "/knowledge/defence/weapons",
  //   icon: FiShield,
  //   description:
  //     "Overview of equipment and major defence systems.",
  //   articles: 10,
  //   mcqs: 210,
  //   difficulty: "Medium",
  // }),

  /* ==========================================
     ENGLISH
  ========================================== */

//   topic({
//     id: 65,
//     category: "english",
//     title: "Grammar",
//     slug: "/knowledge/english/grammar",
//     icon: FiType,
//     description:
//       "Complete English grammar rules with examples and exercises.",
//     articles: 18,
//     mcqs: 450,
//     featured: true,
//     difficulty: "Medium",
//   }),

//   topic({
//     id: 66,
//     category: "english",
//     title: "Vocabulary",
//     slug: "/knowledge/english/vocabulary",
//     icon: FiType,
//     description:
//       "Essential vocabulary, word meanings and daily practice.",
//     articles: 16,
//     mcqs: 400,
//   }),

//   topic({
//     id: 67,
//     category: "english",
//     title: "Parts of Speech",
//     slug: "/knowledge/english/parts-of-speech",
//     icon: FiBookOpen,
//     description:
//       "Nouns, pronouns, verbs, adjectives and other parts of speech.",
//     articles: 10,
//     mcqs: 220,
//   }),

//   topic({
//     id: 68,
//     category: "english",
//     title: "Synonyms",
//     slug: "/knowledge/english/synonyms",
//     icon: FiType,
//     description:
//       "Frequently tested synonyms for competitive examinations.",
//     articles: 8,
//     mcqs: 240,
//   }),

//   topic({
//     id: 69,
//     category: "english",
//     title: "Antonyms",
//     slug: "/knowledge/english/antonyms",
//     icon: FiType,
//     description:
//       "Common antonyms with practice questions.",
//     articles: 8,
//     mcqs: 240,
//   }),

//   topic({
//     id: 70,
//     category: "english",
//     title: "Sentence Correction",
//     slug: "/knowledge/english/sentence-correction",
//     icon: FiType,
//     description:
//       "Improve sentence structure and identify grammatical errors.",
//     articles: 11,
//     mcqs: 280,
//     featured: true,
//   }),

];


/* ======================================================
   HELPERS
====================================================== */

export const getTopicsByCategory = (category) =>
  knowledgeItems.filter((item) => item.category === category);

export const getFeaturedTopics = () =>
  knowledgeItems.filter((item) => item.featured);

export const searchTopics = (query) => {
  if (!query.trim()) return knowledgeItems;

  const search = query.toLowerCase();

  return knowledgeItems.filter(
    (item) =>
      item.title.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
  );
};

export const getTopicBySlug = (slug) =>
  knowledgeItems.find((item) => item.slug === slug);

export const getRelatedTopics = (topic, limit = 4) =>
  knowledgeItems
    .filter(
      (item) =>
        item.category === topic.category &&
        item.id !== topic.id
    )
    .slice(0, limit);