import React, { useState } from "react";
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
| ENGLISH QUESTION BANK
|--------------------------------------------------------------------------
| 120 questions total
|
| Includes English questions from the Academic mock-test sets plus
| additional expected/practice questions.
|--------------------------------------------------------------------------
*/

const questionBank = [
  // ========================================================================
  // QUESTIONS FROM ACADEMIC MOCK TESTS
  // ========================================================================

  {
    id: 1,
    source: "Academic Set 1",
    question: "Antonym of Wild?",
    options: ["Tame", "Rough", "Free", "Sharp"],
    correct: 0,
    explanation: "The antonym of 'Wild' is 'Tame'.",
  },
  {
    id: 2,
    source: "Academic Set 1",
    question: "Synonym of Reluctant?",
    options: ["Hesitant", "Bold", "Fast", "Angry"],
    correct: 0,
    explanation: "Reluctant means hesitant or unwilling.",
  },
  {
    id: 3,
    source: "Academic Set 1",
    question: "Meaning of Ubiquitous?",
    options: ["Present everywhere", "Rare", "Invisible", "Limited"],
    correct: 0,
    explanation: "Ubiquitous means present or found everywhere.",
  },
  {
    id: 4,
    source: "Academic Set 1",
    question: "Antonym of Scarce?",
    options: ["Abundant", "Rare", "Small", "Empty"],
    correct: 0,
    explanation: "Scarce means insufficient or in short supply. Its antonym is abundant.",
  },
  {
    id: 5,
    source: "Academic Set 1",
    question: "Meaning of Diligent?",
    options: ["Hardworking", "Lazy", "Weak", "Careless"],
    correct: 0,
    explanation: "Diligent means hardworking and careful in one's work.",
  },
  {
    id: 6,
    source: "Academic Set 1",
    question: "Meaning of Immaculate?",
    options: ["Spotlessly clean", "Dirty", "Broken", "Heavy"],
    correct: 0,
    explanation: "Immaculate means perfectly clean or without any fault.",
  },
  {
    id: 7,
    source: "Academic Set 1",
    question: "Synonym of Abhorrent?",
    options: ["Hateful", "Lovely", "Kind", "Soft"],
    correct: 0,
    explanation: "Abhorrent means hateful, disgusting or extremely unpleasant.",
  },
  {
    id: 8,
    source: "Academic Set 1",
    question: "Antonym of Opaque?",
    options: ["Transparent", "Dark", "Heavy", "Thick"],
    correct: 0,
    explanation: "Opaque means not allowing light through. Its antonym is transparent.",
  },
  {
    id: 9,
    source: "Academic Set 1",
    question: "Meaning of Leisurely?",
    options: ["Relaxed", "Fast", "Angry", "Busy"],
    correct: 0,
    explanation: "Leisurely means relaxed and unhurried.",
  },
  {
    id: 10,
    source: "Academic Set 2",
    question: "Antonym of Obligatory?",
    options: ["Optional", "Required", "Must", "Needed"],
    correct: 0,
    explanation: "Obligatory means required or compulsory. Its antonym is optional.",
  },
  {
    id: 11,
    source: "Academic Set 2",
    question: "Meaning of Accomplished?",
    options: ["Highly skilled", "Weak", "Poor", "Average"],
    correct: 0,
    explanation: "An accomplished person is highly skilled or successful.",
  },
  {
    id: 12,
    source: "Academic Set 2",
    question: "Synonym of Tame?",
    options: ["Gentle", "Wild", "Rough", "Hard"],
    correct: 0,
    explanation: "Tame can mean gentle, domesticated or not wild.",
  },
  {
    id: 13,
    source: "Academic Set 2",
    question: "Meaning of Laborious?",
    options: ["Hard work", "Easy", "Fast", "Simple"],
    correct: 0,
    explanation: "Laborious means requiring considerable effort or hard work.",
  },
  {
    id: 14,
    source: "Academic Set 2",
    question: "Antonym of Ally?",
    options: ["Enemy", "Friend", "Partner", "Helper"],
    correct: 0,
    explanation: "An ally is a friend or supporter; its opposite is an enemy.",
  },
  {
    id: 15,
    source: "Academic Set 2",
    question: "Meaning of Inhabitant?",
    options: ["Resident", "Visitor", "Leader", "Stranger"],
    correct: 0,
    explanation: "An inhabitant is a person who lives in a particular place.",
  },
  {
    id: 16,
    source: "Academic Set 2",
    question: "Synonym of Refrain?",
    options: ["Abstain", "Start", "Continue", "Increase"],
    correct: 0,
    explanation: "Refrain means to abstain or hold oneself back from something.",
  },
  {
    id: 17,
    source: "Academic Set 2",
    question: "Antonym of Magnanimous?",
    options: ["Petty", "Generous", "Kind", "Brave"],
    correct: 0,
    explanation: "Magnanimous means generous and forgiving; its opposite is petty.",
  },
  {
    id: 18,
    source: "Academic Set 3",
    question: "Synonym of Quaint?",
    options: ["Odd", "Normal", "Modern", "Fast"],
    correct: 0,
    explanation: "Quaint means attractively unusual or old-fashioned.",
  },
  {
    id: 19,
    source: "Academic Set 3",
    question: "Antonym of Wild?",
    options: ["Tame", "Free", "Sharp", "Rough"],
    correct: 0,
    explanation: "The antonym of Wild is Tame.",
  },
  {
    id: 20,
    source: "Academic Set 3",
    question: "Antonym of Opaque?",
    options: ["Transparent", "Dark", "Thick", "Heavy"],
    correct: 0,
    explanation: "Transparent is the opposite of opaque.",
  },
  {
    id: 21,
    source: "Academic Set 3",
    question: "Meaning of Immaculate?",
    options: ["Pure/Clean", "Dirty", "Broken", "Weak"],
    correct: 0,
    explanation: "Immaculate means perfectly clean or pure.",
  },
  {
    id: 22,
    source: "Academic Set 3",
    question: "Meaning of Accomplished?",
    options: ["Expert", "Beginner", "Weak", "Average"],
    correct: 0,
    explanation: "Accomplished means highly skilled or expert.",
  },
  {
    id: 23,
    source: "Academic Set 3",
    question: "Meaning of Diligent?",
    options: ["Hardworking", "Lazy", "Careless", "Weak"],
    correct: 0,
    explanation: "Diligent means hardworking and careful.",
  },
  {
    id: 24,
    source: "Academic Set 3",
    question: "Meaning of Leisurely?",
    options: ["Unhurried", "Fast", "Busy", "Hard"],
    correct: 0,
    explanation: "Leisurely means relaxed and unhurried.",
  },
  {
    id: 25,
    source: "Academic Set 3",
    question: "Synonym of Abhorrent?",
    options: ["Hateful", "Kind", "Soft", "Calm"],
    correct: 0,
    explanation: "Abhorrent means hateful or extremely unpleasant.",
  },
  {
    id: 26,
    source: "Academic Set 4",
    question: "The picture is hung ___ the wall.",
    options: ["in", "on", "at", "by"],
    correct: 1,
    explanation: "The correct preposition is 'on': the picture is hung on the wall.",
  },
  {
    id: 27,
    source: "Academic Set 4",
    question:
      "No sooner ___ the meeting started than the electricity failed.",
    options: ["has", "had", "have", "was"],
    correct: 1,
    explanation:
      "The correct construction is 'No sooner had ... than ...'.",
  },
  {
    id: 28,
    source: "Academic Set 4",
    question:
      "The committee arrived at ___ unanimous decision.",
    options: ["a", "an", "the", "no article"],
    correct: 0,
    explanation:
      "The word 'unanimous' begins with a consonant sound /juː/, so 'a' is used.",
  },

  // Set 5
  {
    id: 29,
    source: "Academic Set 5",
    question: "Synonym of 'Obstinate' is:",
    options: ["Flexible", "Stubborn", "Generous", "Timid"],
    correct: 1,
    explanation: "Obstinate means stubborn or unwilling to change one's opinion.",
  },
  {
    id: 30,
    source: "Academic Set 5",
    question: "Antonym of 'Lucid' is:",
    options: ["Clear", "Obvious", "Confusing", "Brilliant"],
    correct: 2,
    explanation: "Lucid means clear and easy to understand. Its antonym is confusing.",
  },
  {
    id: 31,
    source: "Academic Set 5",
    question: "'A blessing in disguise' means:",
    options: [
      "A hidden danger",
      "Something that seems bad but proves beneficial",
      "A religious blessing",
      "An unexpected punishment",
    ],
    correct: 1,
    explanation:
      "The idiom describes something that initially appears bad but eventually has a beneficial result.",
  },
  {
    id: 32,
    source: "Academic Set 5",
    question: "Choose the grammatically correct sentence:",
    options: [
      "Neither of the boys have arrived.",
      "Neither of the boys has arrived.",
      "Neither boys has arrived.",
      "Neither of boys have arrived.",
    ],
    correct: 1,
    explanation:
      "'Neither' is singular in this construction, so it takes 'has'.",
  },
  {
    id: 33,
    source: "Academic Set 5",
    question: "Synonym of 'Meticulous' is:",
    options: ["Careless", "Careful", "Reckless", "Hasty"],
    correct: 1,
    explanation: "Meticulous means very careful and precise.",
  },
  {
    id: 34,
    source: "Academic Set 5",
    question: "Antonym of 'Hostile' is:",
    options: ["Aggressive", "Friendly", "Violent", "Cruel"],
    correct: 1,
    explanation: "Hostile means unfriendly or aggressive; its opposite is friendly.",
  },
  {
    id: 35,
    source: "Academic Set 5",
    question: "He succeeded ___ his hard work.",
    options: ["because", "because of", "despite", "although"],
    correct: 1,
    explanation:
      "'Because of' is followed by a noun phrase: because of his hard work.",
  },
  {
    id: 36,
    source: "Academic Set 5",
    question: "One who cannot be corrected is called:",
    options: ["Incorrigible", "Invincible", "Invisible", "Infallible"],
    correct: 0,
    explanation: "Incorrigible means incapable of being corrected or reformed.",
  },
  {
    id: 37,
    source: "Academic Set 5",
    question: "'At sixes and sevens' means:",
    options: ["In order", "In confusion", "Very happy", "Very angry"],
    correct: 1,
    explanation: "The idiom means to be in a state of confusion or disorder.",
  },
  {
    id: 38,
    source: "Academic Set 5",
    question: "Choose the correctly spelled word:",
    options: ["Accomodation", "Acommodation", "Accommodation", "Accommadation"],
    correct: 2,
    explanation: "The correct spelling is 'Accommodation'.",
  },

  // Set 6
  {
    id: 39,
    source: "Academic Set 6",
    question: "The news ___ true.",
    options: ["are", "were", "is", "have"],
    correct: 2,
    explanation:
      "'News' is treated as a singular uncountable noun, so 'is' is correct.",
  },
  {
    id: 40,
    source: "Academic Set 6",
    question:
      "Passive voice: 'They will complete the project tomorrow.'",
    options: [
      "The project will be completed by them tomorrow.",
      "The project is completed by them tomorrow.",
      "The project was completed by them tomorrow.",
      "The project has completed by them tomorrow.",
    ],
    correct: 0,
    explanation:
      "Future simple passive uses 'will be + past participle': will be completed.",
  },
  {
    id: 41,
    source: "Academic Set 6",
    question: "Synonym of 'Abolish' is:",
    options: ["Establish", "Destroy", "Continue", "Improve"],
    correct: 1,
    explanation: "Abolish means to formally end or eliminate something.",
  },
  {
    id: 42,
    source: "Academic Set 6",
    question: "Antonym of 'Scarce' is:",
    options: ["Rare", "Limited", "Abundant", "Insufficient"],
    correct: 2,
    explanation: "Scarce means limited or insufficient; its antonym is abundant.",
  },
  {
    id: 43,
    source: "Academic Set 6",
    question: "He is junior ___ me.",
    options: ["than", "from", "to", "with"],
    correct: 2,
    explanation:
      "The standard construction is 'junior to someone'.",
  },
  {
    id: 44,
    source: "Academic Set 6",
    question: "'To call a spade a spade' means:",
    options: [
      "To insult someone",
      "To speak frankly",
      "To avoid truth",
      "To exaggerate",
    ],
    correct: 1,
    explanation:
      "The idiom means to speak plainly or frankly about something.",
  },
  {
    id: 45,
    source: "Academic Set 6",
    question: "If I ___ you, I would accept the offer.",
    options: ["am", "was", "were", "be"],
    correct: 2,
    explanation:
      "In the hypothetical second conditional, 'were' is traditionally used: If I were you.",
  },
  {
    id: 46,
    source: "Academic Set 6",
    question: "One who loves mankind is called:",
    options: ["Philanthropist", "Misanthrope", "Patriot", "Pessimist"],
    correct: 0,
    explanation: "A philanthropist is a person who seeks to promote human welfare.",
  },
  {
    id: 47,
    source: "Academic Set 6",
    question: "He has been living here ___ 2020.",
    options: ["for", "since", "from", "by"],
    correct: 1,
    explanation:
      "'Since' is used with a specific point in time such as 2020.",
  },
  {
    id: 48,
    source: "Academic Set 6",
    question: "'Callous' means:",
    options: ["Compassionate", "Insensitive", "Intelligent", "Generous"],
    correct: 1,
    explanation: "Callous means emotionally insensitive or lacking sympathy.", 
  },

  // ========================================================================
  // ADDITIONAL EXPECTED QUESTIONS
  // ========================================================================

  {
    id: 49,
    source: "Expected",
    question: "Synonym of 'Abundant' is:",
    options: ["Plentiful", "Scarce", "Rare", "Limited"],
    correct: 0,
    explanation: "Abundant means plentiful or available in large quantities.",
  },
  {
    id: 50,
    source: "Expected",
    question: "Antonym of 'Ancient' is:",
    options: ["Old", "Modern", "Historic", "Past"],
    correct: 1,
    explanation: "Ancient means very old; its antonym is modern.",
  },
  {
    id: 51,
    source: "Expected",
    question: "Synonym of 'Brave' is:",
    options: ["Cowardly", "Courageous", "Weak", "Timid"],
    correct: 1,
    explanation: "Brave means courageous.",
  },
  {
    id: 52,
    source: "Expected",
    question: "Antonym of 'Expand' is:",
    options: ["Increase", "Extend", "Contract", "Grow"],
    correct: 2,
    explanation: "Expand means increase in size; contract means become smaller.",
  },
  {
    id: 53,
    source: "Expected",
    question: "Synonym of 'Benevolent' is:",
    options: ["Kind", "Cruel", "Selfish", "Angry"],
    correct: 0,
    explanation: "Benevolent means kind, generous and well-meaning.",
  },
  {
    id: 54,
    source: "Expected",
    question: "Antonym of 'Artificial' is:",
    options: ["Synthetic", "Natural", "Manufactured", "False"],
    correct: 1,
    explanation: "The opposite of artificial is natural.",
  },
  {
    id: 55,
    source: "Expected",
    question: "Synonym of 'Rapid' is:",
    options: ["Slow", "Fast", "Weak", "Late"],
    correct: 1,
    explanation: "Rapid means very fast or quick.",
  },
  {
    id: 56,
    source: "Expected",
    question: "Antonym of 'Victory' is:",
    options: ["Success", "Defeat", "Triumph", "Achievement"],
    correct: 1,
    explanation: "Victory means success in a contest; its opposite is defeat.",
  },
  {
    id: 57,
    source: "Expected",
    question: "Synonym of 'Candid' is:",
    options: ["Frank", "Secretive", "Dishonest", "Reserved"],
    correct: 0,
    explanation: "Candid means truthful, frank and straightforward.",
  },
  {
    id: 58,
    source: "Expected",
    question: "Antonym of 'Permanent' is:",
    options: ["Stable", "Fixed", "Temporary", "Lasting"],
    correct: 2,
    explanation: "Temporary is the opposite of permanent.",
  },
  {
    id: 59,
    source: "Expected",
    question: "Synonym of 'Commence' is:",
    options: ["Finish", "Begin", "Stop", "Delay"],
    correct: 1,
    explanation: "Commence means begin or start.",
  },
  {
    id: 60,
    source: "Expected",
    question: "Antonym of 'Generous' is:",
    options: ["Kind", "Charitable", "Stingy", "Helpful"],
    correct: 2,
    explanation: "Stingy means unwilling to give or spend freely.",
  },
  {
    id: 61,
    source: "Expected",
    question: "Synonym of 'Evident' is:",
    options: ["Hidden", "Obvious", "Doubtful", "Secret"],
    correct: 1,
    explanation: "Evident means clearly seen or understood; obvious.",
  },
  {
    id: 62,
    source: "Expected",
    question: "Antonym of 'Flexible' is:",
    options: ["Soft", "Adaptable", "Rigid", "Elastic"],
    correct: 2,
    explanation: "Rigid means stiff or not flexible.",
  },
  {
    id: 63,
    source: "Expected",
    question: "Synonym of 'Fragile' is:",
    options: ["Strong", "Delicate", "Hard", "Durable"],
    correct: 1,
    explanation: "Fragile means easily broken or damaged; delicate.",
  },
  {
    id: 64,
    source: "Expected",
    question: "Antonym of 'Optimistic' is:",
    options: ["Hopeful", "Positive", "Pessimistic", "Confident"],
    correct: 2,
    explanation: "Pessimistic is the opposite of optimistic.",
  },
  {
    id: 65,
    source: "Expected",
    question: "Synonym of 'Hostile' is:",
    options: ["Friendly", "Unfriendly", "Helpful", "Gentle"],
    correct: 1,
    explanation: "Hostile means unfriendly or antagonistic.",
  },
  {
    id: 66,
    source: "Expected",
    question: "Antonym of 'Artificial' is:",
    options: ["Natural", "False", "Synthetic", "Man-made"],
    correct: 0,
    explanation: "Natural is the opposite of artificial.",
  },
  {
    id: 67,
    source: "Expected",
    question: "Synonym of 'Obsolete' is:",
    options: ["Modern", "Outdated", "New", "Current"],
    correct: 1,
    explanation: "Obsolete means no longer in use or outdated.",
  },
  {
    id: 68,
    source: "Expected",
    question: "Antonym of 'Difficult' is:",
    options: ["Hard", "Simple", "Complex", "Tough"],
    correct: 1,
    explanation: "Simple or easy is the opposite of difficult.",
  },

  {
    id: 69,
    source: "Expected",
    question: "Choose the correct article: He is ___ honest man.",
    options: ["a", "an", "the", "no article"],
    correct: 1,
    explanation: "Honest begins with a vowel sound, so 'an' is used.",
  },
  {
    id: 70,
    source: "Expected",
    question: "She bought ___ umbrella.",
    options: ["a", "an", "the", "no article"],
    correct: 1,
    explanation: "Umbrella begins with a vowel sound, so 'an' is correct.",
  },
  {
    id: 71,
    source: "Expected",
    question: "He is ___ university student.",
    options: ["a", "an", "the", "no article"],
    correct: 0,
    explanation:
      "University begins with the consonant sound /juː/, so 'a' is used.",
  },
  {
    id: 72,
    source: "Expected",
    question: "I have lived here ___ five years.",
    options: ["since", "for", "from", "by"],
    correct: 1,
    explanation: "'For' is used with a period of time such as five years.",
  },
  {
    id: 73,
    source: "Expected",
    question: "She has been ill ___ Monday.",
    options: ["for", "since", "from", "by"],
    correct: 1,
    explanation: "'Since' is used with a specific starting point.",
  },
  {
    id: 74,
    source: "Expected",
    question: "He arrived ___ the airport at 8 o'clock.",
    options: ["in", "on", "at", "by"],
    correct: 2,
    explanation: "We use 'at' for a specific place such as the airport.",
  },
  {
    id: 75,
    source: "Expected",
    question: "The book is ___ the table.",
    options: ["on", "at", "to", "by"],
    correct: 0,
    explanation: "The correct preposition is 'on'.",
  },
  {
    id: 76,
    source: "Expected",
    question: "He is good ___ mathematics.",
    options: ["in", "at", "on", "with"],
    correct: 1,
    explanation: "The standard expression is 'good at'.",
  },
  {
    id: 77,
    source: "Expected",
    question: "She is interested ___ science.",
    options: ["on", "at", "in", "for"],
    correct: 2,
    explanation: "The correct expression is 'interested in'.",
  },
  {
    id: 78,
    source: "Expected",
    question: "They are waiting ___ the bus.",
    options: ["for", "on", "at", "with"],
    correct: 0,
    explanation: "The correct expression is 'wait for'.",
  },

  {
    id: 79,
    source: "Expected",
    question: "Neither Ali nor Ahmed ___ present.",
    options: ["are", "were", "is", "have"],
    correct: 2,
    explanation:
      "With 'neither...nor', the verb agrees with the nearer subject. Ahmed is singular, so 'is' is used.",
  },
  {
    id: 80,
    source: "Expected",
    question: "Each of the students ___ a book.",
    options: ["have", "has", "are", "were"],
    correct: 1,
    explanation: "'Each' is singular and takes 'has'.",
  },
  {
    id: 81,
    source: "Expected",
    question: "The boys ___ playing football.",
    options: ["is", "am", "are", "was"],
    correct: 2,
    explanation: "The plural subject 'boys' takes 'are'.",
  },
  {
    id: 82,
    source: "Expected",
    question: "Mathematics ___ an interesting subject.",
    options: ["are", "is", "were", "have"],
    correct: 1,
    explanation:
      "Mathematics, when referring to the subject, takes a singular verb.",
  },
  {
    id: 83,
    source: "Expected",
    question: "The furniture ___ expensive.",
    options: ["are", "were", "is", "have"],
    correct: 2,
    explanation: "Furniture is an uncountable singular noun and takes 'is'.",
  },
  {
    id: 84,
    source: "Expected",
    question: "The police ___ investigating the case.",
    options: ["is", "are", "was", "has"],
    correct: 1,
    explanation: "Police is generally treated as a plural noun and takes 'are'.",
  },

  {
    id: 85,
    source: "Expected",
    question: "He ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    correct: 1,
    explanation:
      "For third-person singular in the simple present, 'goes' is correct.",
  },
  {
    id: 86,
    source: "Expected",
    question: "They ___ football yesterday.",
    options: ["play", "played", "playing", "plays"],
    correct: 1,
    explanation:
      "The past time marker 'yesterday' requires the simple past 'played'.",
  },
  {
    id: 87,
    source: "Expected",
    question: "She ___ dinner before I arrived.",
    options: ["has eaten", "had eaten", "eats", "is eating"],
    correct: 1,
    explanation:
      "The earlier past action uses the past perfect: 'had eaten'.",
  },
  {
    id: 88,
    source: "Expected",
    question: "I ___ my homework already.",
    options: ["finish", "finished", "have finished", "finishing"],
    correct: 2,
    explanation:
      "'Already' commonly indicates the present perfect here: have finished.",
  },
  {
    id: 89,
    source: "Expected",
    question: "He ___ TV when I called him.",
    options: ["watches", "watched", "was watching", "has watched"],
    correct: 2,
    explanation:
      "An action in progress at a particular past time uses past continuous.",
  },
  {
    id: 90,
    source: "Expected",
    question: "By next year, she ___ her degree.",
    options: [
      "completes",
      "completed",
      "will have completed",
      "is completing",
    ],
    correct: 2,
    explanation:
      "The future perfect is used for an action completed before a future time.",
  },

  {
    id: 91,
    source: "Expected",
    question: "Passive voice: 'Ali wrote a letter.'",
    options: [
      "A letter was written by Ali.",
      "A letter is written by Ali.",
      "A letter has written by Ali.",
      "A letter wrote by Ali.",
    ],
    correct: 0,
    explanation:
      "The simple past active becomes simple past passive: was written.",
  },
  {
    id: 92,
    source: "Expected",
    question: "Passive voice: 'She is cleaning the room.'",
    options: [
      "The room is being cleaned by her.",
      "The room was cleaned by her.",
      "The room has cleaned by her.",
      "The room is cleaned by her.",
    ],
    correct: 0,
    explanation:
      "Present continuous passive uses 'is being + past participle'.",
  },
  {
    id: 93,
    source: "Expected",
    question: "Passive voice: 'They built the bridge.'",
    options: [
      "The bridge is built by them.",
      "The bridge was built by them.",
      "The bridge has built by them.",
      "The bridge had build by them.",
    ],
    correct: 1,
    explanation: "Simple past passive uses 'was/were + past participle'.",
  },
  {
    id: 94,
    source: "Expected",
    question: "Passive voice: 'People speak English worldwide.'",
    options: [
      "English is spoken worldwide.",
      "English was spoken worldwide.",
      "English has spoken worldwide.",
      "English speaks worldwide.",
    ],
    correct: 0,
    explanation:
      "Simple present passive is formed with 'is/are + past participle'.",
  },

  {
    id: 95,
    source: "Expected",
    question: "'Once in a blue moon' means:",
    options: [
      "Very frequently",
      "Very rarely",
      "Every day",
      "At night",
    ],
    correct: 1,
    explanation: "The idiom means something that happens very rarely.",
  },
  {
    id: 96,
    source: "Expected",
    question: "'A piece of cake' means:",
    options: [
      "Something difficult",
      "Something very easy",
      "Something expensive",
      "Something dangerous",
    ],
    correct: 1,
    explanation: "The idiom means something that is very easy to do.",
  },
  {
    id: 97,
    source: "Expected",
    question: "'Break the ice' means:",
    options: [
      "To start a friendly conversation",
      "To destroy something",
      "To become angry",
      "To end a friendship",
    ],
    correct: 0,
    explanation:
      "Break the ice means to make people feel more comfortable in a social situation.",
  },
  {
    id: 98,
    source: "Expected",
    question: "'Hit the nail on the head' means:",
    options: [
      "To make a mistake",
      "To say exactly the right thing",
      "To work slowly",
      "To become angry",
    ],
    correct: 1,
    explanation:
      "It means to describe or identify something exactly.",
  },
  {
    id: 99,
    source: "Expected",
    question: "'Spill the beans' means:",
    options: [
      "To waste food",
      "To reveal a secret",
      "To make a plan",
      "To become tired",
    ],
    correct: 1,
    explanation: "The idiom means to reveal secret information.",
  },

  {
    id: 100,
    source: "Expected",
    question: "One who hates mankind is called:",
    options: ["Philanthropist", "Misanthrope", "Patriot", "Optimist"],
    correct: 1,
    explanation: "A misanthrope is a person who dislikes or distrusts humanity.",
  },
  {
    id: 101,
    source: "Expected",
    question: "One who speaks many languages is called:",
    options: ["Monolingual", "Polyglot", "Illiterate", "Orator"],
    correct: 1,
    explanation: "A polyglot is a person who knows or uses several languages.",
  },
  {
    id: 102,
    source: "Expected",
    question: "One who loves books is called:",
    options: ["Bibliophile", "Biologist", "Philosopher", "Geologist"],
    correct: 0,
    explanation: "A bibliophile is a person who loves or collects books.",
  },
  {
    id: 103,
    source: "Expected",
    question: "One who looks at the bright side of life is:",
    options: ["Pessimist", "Optimist", "Realist", "Critic"],
    correct: 1,
    explanation: "An optimist generally expects positive outcomes.",
  },
  {
    id: 104,
    source: "Expected",
    question: "One who cannot read or write is called:",
    options: ["Literate", "Illiterate", "Educated", "Scholar"],
    correct: 1,
    explanation: "Illiterate means unable to read or write.",
  },

  {
    id: 105,
    source: "Expected",
    question: "Choose the correctly spelled word:",
    options: ["Definately", "Definitely", "Definatly", "Definetely"],
    correct: 1,
    explanation: "The correct spelling is 'Definitely'.",
  },
  {
    id: 106,
    source: "Expected",
    question: "Choose the correctly spelled word:",
    options: ["Necessary", "Neccessary", "Necassary", "Necesary"],
    correct: 0,
    explanation: "The correct spelling is 'Necessary'.",
  },
  {
    id: 107,
    source: "Expected",
    question: "Choose the correctly spelled word:",
    options: ["Separate", "Seperate", "Seprate", "Separete"],
    correct: 0,
    explanation: "The correct spelling is 'Separate'.",
  },
  {
    id: 108,
    source: "Expected",
    question: "Choose the correctly spelled word:",
    options: ["Privilege", "Privelege", "Priviledge", "Privilage"],
    correct: 0,
    explanation: "The correct spelling is 'Privilege'.",
  },
  {
    id: 109,
    source: "Expected",
    question: "Choose the correctly spelled word:",
    options: ["Occurrence", "Occurence", "Occurance", "Ocurrence"],
    correct: 0,
    explanation: "The correct spelling is 'Occurrence'.",
  },

  {
    id: 110,
    source: "Expected",
    question: "Choose the correct sentence:",
    options: [
      "He don't know me.",
      "He doesn't know me.",
      "He doesn't knows me.",
      "He not know me.",
    ],
    correct: 1,
    explanation:
      "With the third-person singular subject 'he', use 'doesn't + base verb'.",
  },
  {
    id: 111,
    source: "Expected",
    question: "Choose the correct sentence:",
    options: [
      "She is senior than me.",
      "She is senior to me.",
      "She is senior from me.",
      "She is senior with me.",
    ],
    correct: 1,
    explanation: "The standard construction is 'senior to'.",
  },
  {
    id: 112,
    source: "Expected",
    question: "Choose the correct sentence:",
    options: [
      "I prefer tea than coffee.",
      "I prefer tea to coffee.",
      "I prefer tea from coffee.",
      "I prefer tea with coffee.",
    ],
    correct: 1,
    explanation: "The correct construction is 'prefer X to Y'.",
  },
  {
    id: 113,
    source: "Expected",
    question: "Choose the correct sentence:",
    options: [
      "He is good in mathematics.",
      "He is good at mathematics.",
      "He is good on mathematics.",
      "He is good by mathematics.",
    ],
    correct: 1,
    explanation: "The standard expression is 'good at mathematics'.",
  },
  {
    id: 114,
    source: "Expected",
    question: "Choose the correct sentence:",
    options: [
      "I have seen him yesterday.",
      "I saw him yesterday.",
      "I had seen him yesterday.",
      "I see him yesterday.",
    ],
    correct: 1,
    explanation:
      "A definite finished past time such as 'yesterday' normally takes the simple past.",
  },

  {
    id: 115,
    source: "Expected",
    question: "If you work hard, you ___ succeed.",
    options: ["would", "will", "would have", "had"],
    correct: 1,
    explanation:
      "The first conditional uses present simple in the if-clause and 'will' in the result clause.",
  },
  {
    id: 116,
    source: "Expected",
    question: "If I had money, I ___ buy a car.",
    options: ["will", "would", "shall", "can"],
    correct: 1,
    explanation:
      "The second conditional uses 'would' in the result clause.",
  },
  {
    id: 117,
    source: "Expected",
    question: "Unless you hurry, you ___ miss the train.",
    options: ["will", "would", "have", "had"],
    correct: 0,
    explanation:
      "'Unless' means 'if not'; the first conditional takes 'will' in the result clause.",
  },
  {
    id: 118,
    source: "Expected",
    question: "She is the ___ girl in the class.",
    options: ["tall", "taller", "tallest", "more tall"],
    correct: 2,
    explanation:
      "When comparing one person with all others in a group, the superlative 'tallest' is used.",
  },
  {
    id: 119,
    source: "Expected",
    question: "This book is ___ than that one.",
    options: ["interesting", "more interesting", "most interesting", "interest"],
    correct: 1,
    explanation:
      "For a comparative adjective with multiple syllables, use 'more': more interesting.",
  },
  {
    id: 120,
    source: "Expected",
    question: "He runs ___ than his brother.",
    options: ["fast", "faster", "fastest", "more fast"],
    correct: 1,
    explanation: "The comparative form of 'fast' is 'faster'.",
  },
];

/*
|--------------------------------------------------------------------------
| RANDOM QUESTION SELECTION
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

export default function English() {
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
          <strong>English</strong>
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

            <h1>English</h1>

            <p>
              Improve your English vocabulary and grammar with
              exam-focused questions covering synonyms, antonyms,
              sentence correction, prepositions, tenses, idioms,
              active and passive voice, spellings and more.
            </p>
          </div>
        </header>

        {/* Introduction */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>English for Initial Tests</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              English is an important part of many armed-forces
              initial tests. Questions generally test vocabulary,
              grammar, sentence structure and the candidate's
              ability to understand commonly used English.
            </p>

            <p>
              Focus especially on synonyms, antonyms, vocabulary,
              prepositions, articles, subject-verb agreement,
              tenses, idioms and sentence correction.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Practice Strategy</strong>

                <p>
                  Build your vocabulary every day and practise
                  grammar questions under time pressure.
                </p>

                <span>
                  Accuracy first, then improve your solving speed.
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
                  <h3>Vocabulary</h3>

                  <p>
                    Synonyms, antonyms, word meanings and
                    commonly tested vocabulary.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Grammar</h3>

                  <p>
                    Articles, prepositions, tenses,
                    subject-verb agreement and sentence structure.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Idioms & One-Word Substitutions</h3>

                  <p>
                    Frequently used idioms, phrases and
                    one-word substitutions.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Sentence & Voice</h3>

                  <p>
                    Sentence correction, active/passive voice,
                    conditionals and correct word usage.
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
              <h2>English MCQs</h2>
            </div>
          </div>

          <div className="content-card">

            <p>
              This question bank contains{" "}
              <strong>{questionBank.length} English MCQs</strong>.
              It includes questions from the existing Academic mock
              tests together with additional expected questions.
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
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                        width: "70px",
                      }}
                    >
                      #
                    </th>

                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Question
                    </th>

                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                        width: "250px",
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

        {/* Exam Strategy */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">04</span>

            <div>
              <span className="section-label">EXAM STRATEGY</span>
              <h2>Important English Tips</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Build your vocabulary</strong>

                <p>
                  Learn synonyms, antonyms and word meanings
                  regularly instead of memorizing them only before
                  the test.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>Master common grammar rules</strong>

                <p>
                  Pay particular attention to articles,
                  prepositions, tenses and subject-verb agreement.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiAward />

              <div>
                <strong>Practise under time pressure</strong>

                <p>
                  English questions are often straightforward,
                  so avoid spending too much time on one question.
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

              <h2>Test Your English</h2>

              <p>
                10 questions are randomly selected from the complete
                English question bank.
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

                    <strong>
                      Explanation
                    </strong>

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

            <Link to="/notes/academics/mathematics">
              Mathematics
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