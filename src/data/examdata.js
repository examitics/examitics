import {
  FiShield,
  FiTarget,
  FiAward,
  FiCompass,
  FiTrendingUp,
  FiActivity,
} from "react-icons/fi";

const examsData = [

  {
    id: "pma",
    title: "PMA Long Course",
    category: "Pakistan Army",
    icon: FiShield,
    difficulty: "Advanced",

    description:
      "Prepare for PMA initial tests with verbal intelligence, academic MCQs, and tactical mock exams.",

    mcqs: "12K+",
    mocks: "35",
    accuracy: "92%",
    progress: 68,

    route: "/PMA-LC",
  },

  {
    id: "issb",
    title: "ISSB Preparation",
    category: "Forces Selection",
    icon: FiTarget,
    difficulty: "Intermediate",

    description:
      "Structured ISSB preparation including intelligence patterns, psychology tests, and screening practice.",

    mcqs: "8K+",
    mocks: "20",
    accuracy: "88%",
    progress: 52,

    route: "/issb-1",
  },

  {
    id: "paf",
    title: "PAF Initial Test",
    category: "Pakistan Air Force",
    icon: FiAward,
    difficulty: "Comming Soon",

    description:
      "Practice PAF initial exam modules with physics, intelligence, and timed mock environments.",

    mcqs: "10K+",
    mocks: "28",
    accuracy: "91%",
    progress: 74,

    route: "/exams/paf",
  },

  {
    id: "navy",
    title: "Navy Initial Test",
    category: "Pakistan Navy",
    icon: FiCompass,
    difficulty: "Comming Soon",

    description:
      "Comprehensive Navy preparation system with subject-based MCQs and mock test practice.",

    mcqs: "9K+",
    mocks: "24",
    accuracy: "86%",
    progress: 61,

    route: "/exams/navy",
  },

  {
    id: "mdcat",
    title: "MDCAT",
    category: "Medical Entry Test",
    icon: FiTrendingUp,
    difficulty: "Comming Soon",

    description:
      "Master biology, chemistry, and physics using high-quality structured preparation systems.",

    mcqs: "25K+",
    mocks: "60",
    accuracy: "95%",
    progress: 82,

    route: "/exams/mdcat",
  },

  {
    id: "ecat",
    title: "ECAT",
    category: "Engineering Entry Test",
    icon: FiActivity,
    difficulty: "Comming Soon",

    description:
      "Engineering-focused preparation with analytical MCQs and intelligent performance tracking.",

    mcqs: "18K+",
    mocks: "45",
    accuracy: "89%",
    progress: 70,

    route: "/exams/ecat",
  },

];

export default examsData;

// import {
//   FiShield,
//   FiAward,
//   FiCompass,
//   FiTrendingUp,
//   FiActivity,
// } from "react-icons/fi";

// const examsData = [

//   {
//     id: "pma",

//     title: "PMA Long Course",

//     category: "Pakistan Army",

//     type: "military",

//     icon: FiShield,

//     difficulty: "Advanced",

//     description:
//       "Prepare for PMA initial tests with intelligence practice, academic MCQs, and real mock examinations.",

//     mcqs: "12K+",

//     mocks: "35",

//     accuracy: "92%",

//     progress: 68,

//     studyHours: "124h",

//     subjects: [
//       "English",
//       "Verbal Intelligence",
//       "Non-Verbal Intelligence",
//       "General Knowledge",
//       "Academic",
//     ],

//     modes: [
//       {
//         title: "Practice MCQs",
//         description: "Topic-wise untimed practice sessions.",
//       },

//       {
//         title: "Mock Test",
//         description: "Full PMA exam simulation environment.",
//       },

//       {
//         title: "Timed Quiz",
//         description: "Improve speed and pressure handling.",
//       },

//       {
//         title: "Weak Areas",
//         description: "Focus on low-performance topics.",
//       },
//     ],

//     route: "/exams/pma",
//   },

//   {
//     id: "paf",

//     title: "PAF Initial Test",

//     category: "Pakistan Air Force",

//     type: "military",

//     icon: FiAward,

//     difficulty: "Advanced",

//     description:
//       "Practice intelligence, physics, and aviation-related preparation modules.",

//     mcqs: "10K+",

//     mocks: "28",

//     accuracy: "91%",

//     progress: 74,

//     studyHours: "98h",

//     subjects: [
//       "English",
//       "Physics",
//       "Intelligence",
//       "Mathematics",
//     ],

//     modes: [
//       {
//         title: "Practice MCQs",
//         description: "Daily structured preparation system.",
//       },

//       {
//         title: "Mock Test",
//         description: "Real-time PAF exam simulation.",
//       },

//       {
//         title: "Timed Quiz",
//         description: "Fast-paced timed challenges.",
//       },
//     ],

//     route: "/exams/paf",
//   },

//   {
//     id: "navy",

//     title: "Navy Initial Test",

//     category: "Pakistan Navy",

//     type: "military",

//     icon: FiCompass,

//     difficulty: "Intermediate",

//     description:
//       "Structured Navy preparation with academic and intelligence modules.",

//     mcqs: "9K+",

//     mocks: "24",

//     accuracy: "86%",

//     progress: 61,

//     studyHours: "84h",

//     subjects: [
//       "English",
//       "Mathematics",
//       "GK",
//       "Intelligence",
//     ],

//     modes: [
//       {
//         title: "Practice MCQs",
//         description: "Prepare section-wise MCQs.",
//       },

//       {
//         title: "Mock Test",
//         description: "Navy full-length exam simulation.",
//       },

//       {
//         title: "Subject Wise",
//         description: "Focus on individual subjects.",
//       },
//     ],

//     route: "/exams/navy",
//   },

//   {
//     id: "mdcat",

//     title: "MDCAT",

//     category: "Medical Entry Test",

//     type: "medical",

//     icon: FiTrendingUp,

//     difficulty: "Expert",

//     description:
//       "High-performance medical preparation system with chapter-wise practice.",

//     mcqs: "25K+",

//     mocks: "60",

//     accuracy: "95%",

//     progress: 82,

//     studyHours: "240h",

//     subjects: [
//       "Biology",
//       "Chemistry",
//       "Physics",
//       "English",
//       "Logical Reasoning",
//     ],

//     modes: [
//       {
//         title: "Chapter Practice",
//         description: "Master each chapter individually.",
//       },

//       {
//         title: "Mock Exams",
//         description: "Full MDCAT simulation tests.",
//       },

//       {
//         title: "Weak Areas",
//         description: "Improve weak concepts.",
//       },
//     ],

//     route: "/exams/mdcat",
//   },

//   {
//     id: "ecat",

//     title: "ECAT",

//     category: "Engineering Entry Test",

//     type: "engineering",

//     icon: FiActivity,

//     difficulty: "Advanced",

//     description:
//       "Engineering-focused preparation with analytical and numerical MCQs.",

//     mcqs: "18K+",

//     mocks: "45",

//     accuracy: "89%",

//     progress: 70,

//     studyHours: "168h",

//     subjects: [
//       "Mathematics",
//       "Physics",
//       "Chemistry",
//       "English",
//     ],

//     modes: [
//       {
//         title: "Practice MCQs",
//         description: "Daily analytical MCQ practice.",
//       },

//       {
//         title: "Mock Tests",
//         description: "Engineering exam simulation.",
//       },

//       {
//         title: "Timed Quiz",
//         description: "Increase solving speed.",
//       },
//     ],

//     route: "/exams/ecat",
//   },

// ];

// export default examsData;