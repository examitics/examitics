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
| GENERAL KNOWLEDGE QUESTION BANK
|--------------------------------------------------------------------------
| Questions are taken from the GK / Pakistan Studies / Geography /
| International Organizations / current-affairs / factual sections
| present in the Academic mock-test sets.
|
| Additional expected questions are included after the mock-test
| questions to provide a broader preparation bank.
|--------------------------------------------------------------------------
*/

const questionBank = [
  // ========================================================================
  // QUESTIONS FROM ACADEMIC MOCK TESTS
  // ========================================================================

  {
    id: 1,
    source: "Academic Set 1",
    question: "Abu Jahl was killed in which Ghazwa?",
    options: [
      "Ghazwa Badr",
      "Ghazwa Uhud",
      "Ghazwa Hunayn",
      "Ghazwa Khandaq",
    ],
    correct: 0,
    explanation:
      "Abu Jahl was killed during the Battle of Badr in 2 AH.",
  },
  {
    id: 2,
    source: "Academic Set 1",
    question: "OIC Headquarters?",
    options: ["Riyadh", "Jeddah", "Dubai", "Cairo"],
    correct: 1,
    explanation:
      "The headquarters of the Organization of Islamic Cooperation (OIC) is in Jeddah, Saudi Arabia.",
  },
  {
    id: 3,
    source: "Academic Set 1",
    question: "Pakistan's first nuclear test date?",
    options: [
      "28 May 1998",
      "14 Aug 1998",
      "25 Dec 1998",
      "6 Sep 1998",
    ],
    correct: 0,
    explanation:
      "Pakistan conducted its first nuclear tests on 28 May 1998 at Chagai, Balochistan.",
  },
  {
    id: 4,
    source: "Academic Set 1",
    question: "Heart of Quran?",
    options: [
      "Surah Yaseen",
      "Surah Rehman",
      "Surah Fatiha",
      "Surah Mulk",
    ],
    correct: 0,
    explanation:
      "Surah Yaseen is commonly referred to as the Heart of the Quran.",
  },
  {
    id: 5,
    source: "Academic Set 1",
    question: "NATO Headquarters?",
    options: ["Brussels", "Paris", "London", "Berlin"],
    correct: 0,
    explanation:
      "NATO headquarters is located in Brussels, Belgium.",
  },
  {
    id: 6,
    source: "Academic Set 1",
    question: "Current PM of Pakistan?",
    options: [
      "Shahbaz Sharif",
      "Imran Khan",
      "Nawaz Sharif",
      "Asif Zardari",
    ],
    correct: 0,
    explanation:
      "The mock-test question identifies Shehbaz Sharif as the Prime Minister of Pakistan.",
  },
  {
    id: 7,
    source: "Academic Set 1",
    question: "Rooh Ullah is title of?",
    options: [
      "Hazrat Isa AS",
      "Hazrat Musa AS",
      "Hazrat Dawood AS",
      "Hazrat Adam AS",
    ],
    correct: 0,
    explanation:
      "Roohullah is a title associated with Hazrat Isa (AS).",
  },
  {
    id: 8,
    source: "Academic Set 1",
    question: "First PM of Pakistan?",
    options: [
      "Liaquat Ali Khan",
      "Quaid-e-Azam",
      "Iskander Mirza",
      "Ayub Khan",
    ],
    correct: 0,
    explanation:
      "Liaquat Ali Khan was the first Prime Minister of Pakistan.",
  },
  {
    id: 9,
    source: "Academic Set 1",
    question: "Mangla Dam is on which river?",
    options: [
      "Jhelum River",
      "Indus River",
      "Chenab River",
      "Ravi River",
    ],
    correct: 0,
    explanation:
      "Mangla Dam is built on the Jhelum River.",
  },
  {
    id: 10,
    source: "Academic Set 1",
    question: "Which Surah has two Bismillah?",
    options: [
      "Surah An-Naml",
      "Surah Fatiha",
      "Surah Yaseen",
      "Surah Baqarah",
    ],
    correct: 0,
    explanation:
      "Surah An-Naml contains the opening Bismillah and another Bismillah within its text.",
  },
  {
    id: 11,
    source: "Academic Set 1",
    question: "47th President of USA?",
    options: [
      "Donald Trump",
      "Joe Biden",
      "Barack Obama",
      "George Bush",
    ],
    correct: 0,
    explanation:
      "The Academic Set 1 question identifies Donald Trump as the 47th President of the United States.",
  },
  {
    id: 12,
    source: "Academic Set 1",
    question: "Capital of Austria?",
    options: ["Vienna", "Zurich", "Rome", "Berlin"],
    correct: 0,
    explanation:
      "Vienna is the capital city of Austria.",
  },
  {
    id: 13,
    source: "Academic Set 1",
    question: "Hazrat Hajra is mother of?",
    options: [
      "Hazrat Ismail AS",
      "Hazrat Ishaq AS",
      "Hazrat Musa AS",
      "Hazrat Yahya AS",
    ],
    correct: 0,
    explanation:
      "Hazrat Hajra (AS) is traditionally identified as the mother of Hazrat Ismail (AS).",
  },
  {
    id: 14,
    source: "Academic Set 1",
    question: "Pakistan joined UN on?",
    options: [
      "30 September 1947",
      "14 August 1947",
      "1 January 1948",
      "23 March 1956",
    ],
    correct: 0,
    explanation:
      "Pakistan became a member of the United Nations on 30 September 1947.",
  },
  {
    id: 15,
    source: "Academic Set 1",
    question: "Deepest point in world?",
    options: [
      "Mariana Trench",
      "Dead Sea",
      "Pacific Ridge",
      "Java Trench",
    ],
    correct: 0,
    explanation:
      "The Mariana Trench contains the deepest known point in Earth's oceans.",
  },
  {
    id: 16,
    source: "Academic Set 1",
    question: "Jami-ul-Quran?",
    options: [
      "Hazrat Usman RA",
      "Hazrat Ali RA",
      "Hazrat Umar RA",
      "Hazrat Abu Bakr RA",
    ],
    correct: 0,
    explanation:
      "Hazrat Usman (RA) is commonly associated with the standardization and compilation of the Quranic text.",
  },
  {
    id: 17,
    source: "Academic Set 1",
    question: "Original name of Karachi?",
    options: [
      "Kolachi",
      "Karachi Town",
      "Port City",
      "Sindh Port",
    ],
    correct: 0,
    explanation:
      "Karachi's historical name is commonly associated with Kolachi.",
  },
  {
    id: 18,
    source: "Academic Set 1",
    question: "Current COAS of Pakistan?",
    options: [
      "General Asim Munir",
      "General Bajwa",
      "General Raheel",
      "General Kayani",
    ],
    correct: 0,
    explanation:
      "The Academic Set 1 question identifies General Asim Munir as the Chief of Army Staff.",
  },
  {
    id: 19,
    source: "Academic Set 1",
    question: "First constitution of Pakistan date?",
    options: [
      "23 March 1956",
      "14 August 1947",
      "25 December 1956",
      "1 January 1958",
    ],
    correct: 0,
    explanation:
      "Pakistan's first Constitution came into force on 23 March 1956.",
  },
  {
    id: 20,
    source: "Academic Set 1",
    question: "Land of thousand lakes?",
    options: [
      "Finland",
      "Norway",
      "Sweden",
      "Canada",
    ],
    correct: 0,
    explanation:
      "Finland is commonly known as the Land of a Thousand Lakes.",
  },
  {
    id: 21,
    source: "Academic Set 1",
    question: "First woman shaheed of Islam?",
    options: [
      "Hazrat Sumayyah RA",
      "Hazrat Khadija RA",
      "Hazrat Ayesha RA",
      "Hazrat Fatima RA",
    ],
    correct: 0,
    explanation:
      "Hazrat Sumayyah (RA) is traditionally regarded as the first female martyr of Islam.",
  },
  {
    id: 22,
    source: "Academic Set 1",
    question: "Border between China and India?",
    options: [
      "McMahon Line",
      "Durand Line",
      "Radcliffe Line",
      "Line of Control",
    ],
    correct: 0,
    explanation:
      "The McMahon Line is associated with the India-China border in the eastern sector.",
  },
  {
    id: 23,
    source: "Academic Set 1",
    question: "Current President of France?",
    options: [
      "Emmanuel Macron",
      "Marine Le Pen",
      "Nicolas Sarkozy",
      "François Hollande",
    ],
    correct: 0,
    explanation:
      "The Academic Set 1 question identifies Emmanuel Macron as President of France.",
  },
  {
    id: 24,
    source: "Academic Set 1",
    question: "Hazrat Abu Bakr RA ki beti?",
    options: [
      "Hazrat Ayesha RA",
      "Hazrat Fatima RA",
      "Hazrat Zainab RA",
      "Hazrat Ruqayyah RA",
    ],
    correct: 0,
    explanation:
      "Hazrat Ayesha (RA) was the daughter of Hazrat Abu Bakr (RA).",
  },
  {
    id: 25,
    source: "Academic Set 1",
    question: "Founder of Dawn newspaper?",
    options: [
      "Muhammad Ali Jinnah",
      "Liaquat Ali Khan",
      "Allama Iqbal",
      "Sir Syed Ahmad Khan",
    ],
    correct: 0,
    explanation:
      "Muhammad Ali Jinnah founded the newspaper Dawn.",
  },
  {
    id: 26,
    source: "Academic Set 1",
    question: "Pakistan word coined by?",
    options: [
      "Choudhry Rahmat Ali",
      "Allama Iqbal",
      "Jinnah",
      "Liaquat Ali Khan",
    ],
    correct: 0,
    explanation:
      "The name Pakistan was coined by Choudhry Rahmat Ali in 1933.",
  },
  {
    id: 27,
    source: "Academic Set 1",
    question: "Ghazwa Khyber took place in?",
    options: ["7 AH", "5 AH", "10 AH", "3 AH"],
    correct: 0,
    explanation:
      "The Battle of Khaybar took place in 7 AH.",
  },
  {
    id: 28,
    source: "Academic Set 1",
    question: "Smallest country in world?",
    options: [
      "Vatican City",
      "Monaco",
      "Malta",
      "Bahrain",
    ],
    correct: 0,
    explanation:
      "Vatican City is the world's smallest sovereign state by area.",
  },
  {
    id: 29,
    source: "Academic Set 1",
    question: "Current Foreign Minister of Pakistan?",
    options: [
      "Ishaq Dar",
      "Bilawal Bhutto",
      "Shah Mehmood Qureshi",
      "Hina Rabbani",
    ],
    correct: 0,
    explanation:
      "The Academic Set 1 question identifies Ishaq Dar as Pakistan's Foreign Minister.",
  },
  {
    id: 30,
    source: "Academic Set 1",
    question: "Khunjerab Pass connects?",
    options: [
      "Pakistan and China",
      "Pakistan and India",
      "China and India",
      "Iran and Pakistan",
    ],
    correct: 0,
    explanation:
      "Khunjerab Pass connects Pakistan with China and lies on the Karakoram Highway.",
  },
  {
    id: 31,
    source: "Academic Set 1",
    question: "Hazrat Haroon AS brother?",
    options: [
      "Hazrat Musa AS",
      "Hazrat Isa AS",
      "Hazrat Adam AS",
      "Hazrat Nuh AS",
    ],
    correct: 0,
    explanation:
      "Hazrat Musa (AS) was the brother of Hazrat Haroon (AS).",
  },

  // ========================================================================
  // ACADEMIC SET 2
  // ========================================================================

  {
    id: 32,
    source: "Academic Set 2",
    question: "OIC established in?",
    options: [
      "Rabat, Morocco",
      "Jeddah",
      "Cairo",
      "Tehran",
    ],
    correct: 0,
    explanation:
      "The OIC was established following the 1969 Islamic Summit Conference in Rabat, Morocco.",
  },
  {
    id: 33,
    source: "Academic Set 2",
    question: "SCO Summit 2024 hosted by?",
    options: [
      "Pakistan",
      "China",
      "Russia",
      "India",
    ],
    correct: 0,
    explanation:
      "Pakistan hosted the 2024 Shanghai Cooperation Organisation Council of Heads of Government meeting in Islamabad.",
  },
  {
    id: 34,
    source: "Academic Set 2",
    question: "K2 located in which range?",
    options: [
      "Karakoram Range",
      "Himalayas",
      "Hindu Kush",
      "Pamir",
    ],
    correct: 0,
    explanation:
      "K2 is located in the Karakoram Range.",
  },
  {
    id: 35,
    source: "Academic Set 2",
    question: "Hazrat Salman Farsi RA suggested?",
    options: [
      "Digging trench",
      "Building mosque",
      "Migration",
      "Trade",
    ],
    correct: 0,
    explanation:
      "Hazrat Salman Farsi (RA) suggested digging a defensive trench during the Battle of Ahzab.",
  },
  {
    id: 36,
    source: "Academic Set 2",
    question: "Current Governor of Sindh?",
    options: [
      "Kamran Tessori",
      "Imran Ismail",
      "Zardari",
      "Murad Ali Shah",
    ],
    correct: 0,
    explanation:
      "The Academic Set 2 question identifies Kamran Tessori as Governor of Sindh.",
  },
  {
    id: 37,
    source: "Academic Set 2",
    question: "First Chief Justice of Pakistan?",
    options: [
      "Sir Abdul Rashid",
      "Muhammad Munir",
      "A.R. Cornelius",
      "Fazal Akbar",
    ],
    correct: 0,
    explanation:
      "Sir Abdul Rashid was the first Chief Justice of Pakistan.",
  },
  {
    id: 38,
    source: "Academic Set 2",
    question: "Stagflation means?",
    options: [
      "Inflation + stagnation",
      "Growth + inflation",
      "Deflation",
      "Recession only",
    ],
    correct: 0,
    explanation:
      "Stagflation refers to a combination of economic stagnation and inflation.",
  },
  {
    id: 39,
    source: "Academic Set 2",
    question: "Wakhan Corridor connects?",
    options: [
      "Afghanistan to Tajikistan",
      "Pakistan to China",
      "Iran to Iraq",
      "India to Nepal",
    ],
    correct: 0,
    explanation:
      "The Wakhan Corridor is a narrow strip of Afghanistan extending toward Tajikistan.",
  },
  {
    id: 40,
    source: "Academic Set 2",
    question: "Asadullah title belongs to?",
    options: [
      "Hazrat Ali RA",
      "Hazrat Umar RA",
      "Hazrat Hamza RA",
      "Hazrat Khalid RA",
    ],
    correct: 0,
    explanation:
      "Asadullah is a title traditionally associated with Hazrat Ali (RA).",
  },
  {
    id: 41,
    source: "Academic Set 2",
    question: "G20 Summit 2025 held in?",
    options: [
      "South Africa",
      "India",
      "Brazil",
      "USA",
    ],
    correct: 0,
    explanation:
      "South Africa held the G20 presidency and hosted the 2025 G20 Leaders' Summit.",
  },
  {
    id: 42,
    source: "Academic Set 2",
    question: "Manchester of Pakistan?",
    options: [
      "Faisalabad",
      "Lahore",
      "Karachi",
      "Multan",
    ],
    correct: 0,
    explanation:
      "Faisalabad is widely known as the Manchester of Pakistan because of its textile industry.",
  },
  {
    id: 43,
    source: "Academic Set 2",
    question: "Hazrat Muhammad SAW ki betiyan?",
    options: ["4", "2", "3", "5"],
    correct: 0,
    explanation:
      "The commonly taught answer is four daughters.",
  },
  {
    id: 44,
    source: "Academic Set 2",
    question: "First President of Pakistan?",
    options: [
      "Iskander Mirza",
      "Quaid-e-Azam",
      "Liaquat Ali Khan",
      "Ayub Khan",
    ],
    correct: 0,
    explanation:
      "Iskander Mirza became the first President of Pakistan in 1956.",
  },
  {
    id: 45,
    source: "Academic Set 2",
    question: "Rising sun symbol of?",
    options: [
      "Japan",
      "China",
      "Korea",
      "Thailand",
    ],
    correct: 0,
    explanation:
      "Japan is popularly known as the Land of the Rising Sun.",
  },
  {
    id: 46,
    source: "Academic Set 2",
    question: "Madina ka purana naam?",
    options: [
      "Yathrib",
      "Makkah",
      "Badr",
      "Taif",
    ],
    correct: 0,
    explanation:
      "Yathrib was the pre-Islamic name of Madinah.",
  },
  {
    id: 47,
    source: "Academic Set 2",
    question: "Tashkent Agreement signed on?",
    options: [
      "10 January 1966",
      "1965",
      "1971",
      "1956",
    ],
    correct: 0,
    explanation:
      "The Tashkent Declaration was signed on 10 January 1966.",
  },
  {
    id: 48,
    source: "Academic Set 2",
    question: "Pakistan coastline length?",
    options: [
      "1046 km",
      "1200 km",
      "900 km",
      "1500 km",
    ],
    correct: 0,
    explanation:
      "The commonly cited length of Pakistan's coastline is approximately 1,046 km.",
  },
  {
    id: 49,
    source: "Academic Set 2",
    question: "Battle of Confederates means?",
    options: [
      "Ghazwa Ahzab",
      "Badr",
      "Uhud",
      "Khyber",
    ],
    correct: 0,
    explanation:
      "Ghazwa Ahzab is also known as the Battle of the Confederates or Battle of the Trench.",
  },
  {
    id: 50,
    source: "Academic Set 2",
    question: "Capital of Kazakhstan?",
    options: [
      "Astana",
      "Almaty",
      "Baku",
      "Tashkent",
    ],
    correct: 0,
    explanation:
      "Astana is the capital of Kazakhstan.",
  },
  {
    id: 51,
    source: "Academic Set 2",
    question: "Current President of Iran?",
    options: [
      "Masoud Pezeshkian",
      "Rouhani",
      "Khamenei",
      "Raisi",
    ],
    correct: 0,
    explanation:
      "The Academic Set 2 question identifies Masoud Pezeshkian as President of Iran.",
  },
  {
    id: 52,
    source: "Academic Set 2",
    question: "How many prophets mentioned in Quran?",
    options: ["25", "30", "20", "15"],
    correct: 0,
    explanation:
      "Twenty-five prophets are commonly identified by name in the Quran.",
  },
  {
    id: 53,
    source: "Academic Set 2",
    question: "Mound of the Dead?",
    options: [
      "Mohenjo-daro",
      "Harappa",
      "Taxila",
      "Mehran",
    ],
    correct: 0,
    explanation:
      "Mohenjo-daro is commonly translated as Mound of the Dead.",
  },
  {
    id: 54,
    source: "Academic Set 2",
    question: "Ghazwa Badr Muslims count?",
    options: [
      "313",
      "3130",
      "300",
      "400",
    ],
    correct: 0,
    explanation:
      "The commonly cited number of Muslim combatants at Badr is 313.",
  },
  {
    id: 55,
    source: "Academic Set 2",
    question: "Pakistan-China border agreement?",
    options: [
      "1963",
      "1965",
      "1971",
      "1958",
    ],
    correct: 0,
    explanation:
      "Pakistan and China signed their boundary agreement in 1963.",
  },
  {
    id: 56,
    source: "Academic Set 2",
    question: "Current President of USA?",
    options: [
      "Donald Trump",
      "Joe Biden",
      "Obama",
      "Bush",
    ],
    correct: 0,
    explanation:
      "The Academic Set 2 question identifies Donald Trump as President of the United States.",
  },
  {
    id: 57,
    source: "Academic Set 2",
    question: "First revealed verses?",
    options: [
      "Surah Al-Alaq",
      "Surah Fatiha",
      "Surah Yaseen",
      "Surah Ikhlas",
    ],
    correct: 0,
    explanation:
      "The first revealed verses are traditionally identified as the opening verses of Surah Al-Alaq.",
  },
  {
    id: 58,
    source: "Academic Set 2",
    question: "First US President to visit Pakistan?",
    options: [
      "Dwight Eisenhower",
      "John Kennedy",
      "Richard Nixon",
      "Jimmy Carter",
    ],
    correct: 0,
    explanation:
      "Dwight D. Eisenhower was the first sitting U.S. President to visit Pakistan.",
  },
  {
    id: 59,
    source: "Academic Set 2",
    question: "Amnesty International HQ?",
    options: [
      "London",
      "Paris",
      "New York",
      "Berlin",
    ],
    correct: 0,
    explanation:
      "Amnesty International's international secretariat is headquartered in London.",
  },
  {
    id: 60,
    source: "Academic Set 2",
    question: "Gatekeeper of Jahannum?",
    options: [
      "Hazrat Maalik AS",
      "Hazrat Israfeel AS",
      "Hazrat Jibrael AS",
      "Hazrat Mikaeel AS",
    ],
    correct: 0,
    explanation:
      "Hazrat Malik (AS) is traditionally identified as the keeper of Hell.",
  },
  {
    id: 61,
    source: "Academic Set 2",
    question: "Current Foreign Minister of Iran?",
    options: [
      "Abbas Araghchi",
      "Zarif",
      "Raisi",
      "Khamenei",
    ],
    correct: 0,
    explanation:
      "The Academic Set 2 question identifies Abbas Araghchi as Iran's Foreign Minister.",
  },
  {
    id: 62,
    source: "Academic Set 2",
    question: "Quaid-e-Millat title?",
    options: [
      "Liaquat Ali Khan",
      "Jinnah",
      "Iqbal",
      "Nehru",
    ],
    correct: 0,
    explanation:
      "Liaquat Ali Khan is commonly known by the title Quaid-e-Millat.",
  },

  // ========================================================================
  // ACADEMIC SET 3
  // ========================================================================

  {
    id: 63,
    source: "Academic Set 3",
    question: "Hazrat Israfeel AS responsibility?",
    options: [
      "Blow Soor",
      "Rain",
      "Wahiy",
      "Death",
    ],
    correct: 0,
    explanation:
      "Hazrat Israfeel (AS) is traditionally associated with blowing the trumpet (Soor).",
  },
  {
    id: 64,
    source: "Academic Set 3",
    question: "SAARC Secretariat?",
    options: [
      "Kathmandu",
      "Delhi",
      "Dhaka",
      "Colombo",
    ],
    correct: 0,
    explanation:
      "The SAARC Secretariat is located in Kathmandu, Nepal.",
  },
  {
    id: 65,
    source: "Academic Set 3",
    question: "First Governor General after Jinnah?",
    options: [
      "Khawaja Nazimuddin",
      "Liaquat Ali Khan",
      "Iskander Mirza",
      "Ayub Khan",
    ],
    correct: 0,
    explanation:
      "Khawaja Nazimuddin succeeded Muhammad Ali Jinnah as Governor-General of Pakistan.",
  },
  {
    id: 66,
    source: "Academic Set 3",
    question: "Sulah-e-Hudaibiya?",
    options: [
      "6 AH",
      "5 AH",
      "7 AH",
      "8 AH",
    ],
    correct: 0,
    explanation:
      "The Treaty of Hudaybiyyah was concluded in 6 AH.",
  },
  {
    id: 67,
    source: "Academic Set 3",
    question: "World's fastest bird?",
    options: [
      "Peregrine Falcon",
      "Eagle",
      "Sparrow",
      "Hawk",
    ],
    correct: 0,
    explanation:
      "The peregrine falcon is recognized as the fastest bird, especially during its hunting dive.",
  },
  {
    id: 68,
    source: "Academic Set 3",
    question: "Pakistan Army current chief?",
    options: [
      "Asim Munir",
      "Bajwa",
      "Raheel",
      "Kayani",
    ],
    correct: 0,
    explanation:
      "The Academic Set 3 question identifies Asim Munir as Pakistan Army's current chief.",
  },
  {
    id: 69,
    source: "Academic Set 3",
    question: "Rohtas Fort in?",
    options: [
      "Jhelum",
      "Lahore",
      "Multan",
      "Karachi",
    ],
    correct: 0,
    explanation:
      "Rohtas Fort is located near Jhelum in Punjab, Pakistan.",
  },
  {
    id: 70,
    source: "Academic Set 3",
    question: "Surah Baqarah total ayaat?",
    options: [
      "286",
      "200",
      "150",
      "300",
    ],
    correct: 0,
    explanation:
      "Surah Al-Baqarah contains 286 verses (ayat).",
  },
  {
    id: 71,
    source: "Academic Set 3",
    question: "UNO Headquarters?",
    options: [
      "New York",
      "Geneva",
      "Paris",
      "London",
    ],
    correct: 0,
    explanation:
      "The main headquarters of the United Nations is in New York City.",
  },
  {
    id: 72,
    source: "Academic Set 3",
    question: "Hazrat Abu Bakr Siddiq RA real name?",
    options: [
      "Abdullah ibn Abi Quhafa",
      "Umar",
      "Usman",
      "Ali",
    ],
    correct: 0,
    explanation:
      "Hazrat Abu Bakr (RA) is traditionally identified by the name Abdullah ibn Abi Quhafa.",
  },
  {
    id: 73,
    source: "Academic Set 3",
    question: "Sui gas discovered in?",
    options: [
      "1952",
      "1947",
      "1960",
      "1958",
    ],
    correct: 0,
    explanation:
      "Natural gas was discovered at Sui in Balochistan in 1952.",
  },
  {
    id: 74,
    source: "Academic Set 3",
    question: "Jerusalem conquered by?",
    options: [
      "Hazrat Umar RA",
      "Hazrat Ali RA",
      "Hazrat Abu Bakr RA",
      "Hazrat Usman RA",
    ],
    correct: 0,
    explanation:
      "Jerusalem came under Muslim rule during the caliphate of Hazrat Umar (RA).",
  },
  {
    id: 75,
    source: "Academic Set 3",
    question: "Pakistan's largest seaport?",
    options: [
      "Karachi Port",
      "Gwadar",
      "Qasim Port",
      "Ormara",
    ],
    correct: 0,
    explanation:
      "Karachi Port is one of Pakistan's major and historically largest commercial seaports.",
  },
  {
    id: 76,
    source: "Academic Set 3",
    question: "Capital of AJK?",
    options: [
      "Muzaffarabad",
      "Mirpur",
      "Skardu",
      "Gilgit",
    ],
    correct: 0,
    explanation:
      "Muzaffarabad is the capital of Azad Jammu and Kashmir.",
  },
  {
    id: 77,
    source: "Academic Set 3",
    question: "Allahabad Address delivered in?",
    options: [
      "1930",
      "1920",
      "1940",
      "1910",
    ],
    correct: 0,
    explanation:
      "Allama Iqbal delivered the Allahabad Address in 1930.",
  },
  {
    id: 78,
    source: "Academic Set 3",
    question: "First nuclear test of India?",
    options: [
      "1974",
      "1964",
      "1984",
      "1998",
    ],
    correct: 0,
    explanation:
      "India conducted its first nuclear test in 1974 at Pokhran.",
  },
  {
    id: 79,
    source: "Academic Set 3",
    question: "Kissing Hajr-e-Aswad called?",
    options: [
      "Istilam",
      "Tawaf",
      "Saee",
      "Ihram",
    ],
    correct: 0,
    explanation:
      "Istilam refers to greeting, touching or kissing the Black Stone when performing Tawaf.",
  },
  {
    id: 80,
    source: "Academic Set 3",
    question: "Current PM Pakistan?",
    options: [
      "Shahbaz Sharif",
      "Imran Khan",
      "Nawaz Sharif",
      "Zardari",
    ],
    correct: 0,
    explanation:
      "The Academic Set 3 question identifies Shehbaz Sharif as Pakistan's Prime Minister.",
  },
  {
    id: 81,
    source: "Academic Set 3",
    question: "Pakistan requested to join?",
    options: [
      "BRICS",
      "NATO",
      "EU",
      "ASEAN",
    ],
    correct: 0,
    explanation:
      "The Academic Set 3 question identifies BRICS as the grouping Pakistan requested to join.",
  },
  {
    id: 82,
    source: "Academic Set 3",
    question: "Hazrat Sulaiman AS blessed with?",
    options: [
      "Kingship",
      "Prophecy only",
      "Wealth",
      "War",
    ],
    correct: 0,
    explanation:
      "Hazrat Sulaiman (AS) was blessed with a great kingdom and authority.",
  },
  {
    id: 83,
    source: "Academic Set 3",
    question: "First question on Day of Judgment?",
    options: [
      "Namaz",
      "Roza",
      "Hajj",
      "Zakat",
    ],
    correct: 0,
    explanation:
      "A commonly taught Islamic studies answer is that prayer (Namaz) is among the first matters for which a person will be questioned.",
  },
  {
    id: 84,
    source: "Academic Set 3",
    question: "Pakistan's flag designed by?",
    options: [
      "Syed Amiruddin Kedwaii",
      "Jinnah",
      "Iqbal",
      "Liaquat",
    ],
    correct: 0,
    explanation:
      "Pakistan's national flag was designed by Syed Amir-uddin Kedwaii.",
  },
  {
    id: 85,
    source: "Academic Set 3",
    question: "Lowest temperature city in Pakistan?",
    options: [
      "Skardu",
      "Lahore",
      "Karachi",
      "Quetta",
    ],
    correct: 0,
    explanation:
      "Skardu is known for extremely low winter temperatures and is frequently cited in general-knowledge questions.",
  },
  {
    id: 86,
    source: "Academic Set 3",
    question: "Hazrat Jafar RA martyred in?",
    options: [
      "Ghazwa Mutah",
      "Badr",
      "Uhud",
      "Khyber",
    ],
    correct: 0,
    explanation:
      "Hazrat Jafar ibn Abi Talib (RA) was martyred in the Battle of Mu'tah.",
  },
  {
    id: 87,
    source: "Academic Set 3",
    question: "War of Plassey date?",
    options: [
      "23 June 1757",
      "1750",
      "1760",
      "1747",
    ],
    correct: 0,
    explanation:
      "The Battle of Plassey was fought on 23 June 1757.",
  },
  {
    id: 88,
    source: "Academic Set 3",
    question: "Pakistan's foreign reserve target?",
    options: [
      "$13 billion",
      "$10 billion",
      "$20 billion",
      "$5 billion",
    ],
    correct: 0,
    explanation:
      "The Academic Set 3 question gives $13 billion as the stated foreign-reserve target.",
  },
  {
    id: 89,
    source: "Academic Set 3",
    question: "Hazrat Adam AS title?",
    options: [
      "Safiullah",
      "Khalilullah",
      "Roohullah",
      "Asadullah",
    ],
    correct: 0,
    explanation:
      "Safiullah is a title traditionally associated with Hazrat Adam (AS).",
  },
  {
    id: 90,
    source: "Academic Set 3",
    question: "Benazir Bhutto assassinated in?",
    options: [
      "Rawalpindi",
      "Lahore",
      "Karachi",
      "Islamabad",
    ],
    correct: 0,
    explanation:
      "Benazir Bhutto was assassinated in Rawalpindi on 27 December 2007.",
  },
  {
    id: 91,
    source: "Academic Set 3",
    question: "Hazrat Muhammad SAW tribe?",
    options: [
      "Quraish",
      "Ansar",
      "Banu Hashim",
      "Banu Umayyah",
    ],
    correct: 0,
    explanation:
      "Prophet Muhammad (SAW) belonged to the Quraish tribe, specifically the Banu Hashim clan.",
  },

  // ========================================================================
  // ACADEMIC SET 4
  // ========================================================================

  {
    id: 92,
    source: "Academic Set 4",
    question: "Iran's operation against America in 2026 is named?",
    options: [
      "Operation True Promise 3",
      "Operation Epic Fury",
      "Operation Sindoor",
      "Operation Ghazab Ul Haq",
    ],
    correct: 0,
    explanation:
      "This question is taken from Academic Set 4's current-affairs section.",
  },
  {
    id: 93,
    source: "Academic Set 4",
    question:
      "Operation Ghazab Ul Haq was launched by Pakistan against which country?",
    options: [
      "India",
      "Afghanistan",
      "Iran",
      "Bangladesh",
    ],
    correct: 1,
    explanation:
      "This question is taken from Academic Set 4's current-affairs section.",
  },
  {
    id: 94,
    source: "Academic Set 4",
    question:
      "Which provincial assembly recommended the Nobel Peace Prize for PM Nawaz Sharif in 2026?",
    options: [
      "Sindh Assembly",
      "Punjab Assembly",
      "KPK Assembly",
      "Balochistan Assembly",
    ],
    correct: 1,
    explanation:
      "This question is taken from Academic Set 4's current-affairs section.",
  },
  {
    id: 95,
    source: "Academic Set 4",
    question:
      "US-Iran negotiations with Pakistan's mediation were held in which city?",
    options: [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Peshawar",
    ],
    correct: 2,
    explanation:
      "This question is taken from Academic Set 4's current-affairs section.",
  },
  {
    id: 96,
    source: "Academic Set 4",
    question: "PIA was privatized by which company?",
    options: [
      "Arif Habib Consortium",
      "Engro Corporation",
      "Lucky Cement",
      "Fauji Foundation",
    ],
    correct: 0,
    explanation:
      "This question is taken from Academic Set 4's current-affairs section.",
  },
  {
    id: 97,
    source: "Academic Set 4",
    question:
      "What was the name of the US military operation against Iran in 2026?",
    options: [
      "Operation True Promise 3",
      "Operation Epic Fury",
      "Operation Sindoor",
      "Operation Desert Storm",
    ],
    correct: 1,
    explanation:
      "This question is taken from Academic Set 4's current-affairs section.",
  },
  {
    id: 98,
    source: "Academic Set 4",
    question:
      "The Bajaur attack in early 2026 was claimed by which organization?",
    options: [
      "TTP",
      "ISIS",
      "BLA",
      "Al-Qaeda",
    ],
    correct: 0,
    explanation:
      "This question is taken from Academic Set 4's current-affairs section.",
  },
  {
    id: 99,
    source: "Academic Set 4",
    question:
      "Operation Sindoor was launched by which country and against whom?",
    options: [
      "Pakistan against India",
      "India against Pakistan",
      "Iran against Israel",
      "Afghanistan against Pakistan",
    ],
    correct: 1,
    explanation:
      "This question is taken from Academic Set 4's current-affairs section.",
  },
  {
    id: 100,
    source: "Academic Set 4",
    question:
      "The CPEC agreement was signed between which two leaders?",
    options: [
      "Nawaz Sharif and Xi Jinping",
      "Imran Khan and Xi Jinping",
      "Ayub Khan and Mao Zedong",
      "Zulfikar Ali Bhutto and Deng Xiaoping",
    ],
    correct: 0,
    explanation:
      "The question's intended answer is Nawaz Sharif and Xi Jinping.",
  },
  {
    id: 101,
    source: "Academic Set 4",
    question: "Who presented the Lahore Resolution of 1940?",
    options: [
      "Muhammad Ali Jinnah",
      "A.K. Fazlul Haq",
      "Liaquat Ali Khan",
      "Allama Muhammad Iqbal",
    ],
    correct: 1,
    explanation:
      "A.K. Fazlul Haq presented the Lahore Resolution at the Muslim League session in 1940.",
  },
  {
    id: 102,
    source: "Academic Set 4",
    question: "When did Pakistan celebrate its first Defence Day?",
    options: [
      "6 September 1965",
      "14 August 1947",
      "23 March 1956",
      "28 May 1998",
    ],
    correct: 0,
    explanation:
      "Pakistan observes Defence Day on 6 September, commemorating the 1965 war.",
  },
  {
    id: 103,
    source: "Academic Set 4",
    question:
      "The Strait of Hormuz connects which two water bodies?",
    options: [
      "Persian Gulf and Arabian Sea",
      "Red Sea and Mediterranean Sea",
      "Black Sea and Caspian Sea",
      "Arabian Sea and Bay of Bengal",
    ],
    correct: 0,
    explanation:
      "The Strait of Hormuz provides the maritime passage between the Persian Gulf and the Gulf of Oman, opening toward the Arabian Sea.",
  },
  {
    id: 104,
    source: "Academic Set 4",
    question:
      "Where are the headquarters of the IMF and World Bank located?",
    options: [
      "New York",
      "Washington D.C.",
      "Geneva",
      "London",
    ],
    correct: 1,
    explanation:
      "Both the IMF and World Bank are headquartered in Washington, D.C.",
  },
  {
    id: 105,
    source: "Academic Set 4",
    question:
      "Where is the headquarters of the Asian Development Bank (ADB) located?",
    options: [
      "Manila",
      "Tokyo",
      "Beijing",
      "Singapore",
    ],
    correct: 0,
    explanation:
      "The Asian Development Bank is headquartered in Manila, Philippines.",
  },
  {
    id: 106,
    source: "Academic Set 4",
    question:
      "Where is the headquarters of the World Health Organization (WHO) located?",
    options: [
      "Geneva",
      "New York",
      "Paris",
      "Washington D.C.",
    ],
    correct: 0,
    explanation:
      "The World Health Organization is headquartered in Geneva, Switzerland.",
  },
  {
    id: 107,
    source: "Academic Set 4",
    question: "Who wrote the book 'Friends Not Masters'?",
    options: [
      "Ayub Khan",
      "Zulfikar Ali Bhutto",
      "Liaquat Ali Khan",
      "Stanley Wolpert",
    ],
    correct: 0,
    explanation:
      "Friends Not Masters was written by former Pakistani President Ayub Khan.",
  },
  {
    id: 108,
    source: "Academic Set 4",
    question: "Who wrote the book 'Jinnah of Pakistan'?",
    options: [
      "Stanley Wolpert",
      "Ayub Khan",
      "Hector Bolitho",
      "Ayesha Jalal",
    ],
    correct: 0,
    explanation:
      "Jinnah of Pakistan was written by historian Stanley Wolpert.",
  },
  {
    id: 109,
    source: "Academic Set 4",
    question:
      "Which pass is known as the gateway of invaders into South Asia?",
    options: [
      "Khyber Pass",
      "Bolan Pass",
      "Khunjerab Pass",
      "Lowari Pass",
    ],
    correct: 0,
    explanation:
      "The Khyber Pass has historically served as a major route into the Indian subcontinent.",
  },
  {
    id: 110,
    source: "Academic Set 4",
    question:
      "How many permanent members with veto power are there in the UN Security Council?",
    options: ["3", "5", "7", "10"],
    correct: 1,
    explanation:
      "The UN Security Council has five permanent members with veto power.",
  },
  {
    id: 111,
    source: "Academic Set 4",
    question:
      "What is the minimum age required to become President of Pakistan according to the 1956 Constitution?",
    options: [
      "35 years",
      "40 years",
      "45 years",
      "50 years",
    ],
    correct: 1,
    explanation:
      "The 1956 Constitution specified 40 years as the minimum age for the President.",
  },
  {
    id: 112,
    source: "Academic Set 4",
    question: "The Aligarh Movement was started by whom?",
    options: [
      "Sir Syed Ahmad Khan",
      "Allama Muhammad Iqbal",
      "Muhammad Ali Jinnah",
      "Liaquat Ali Khan",
    ],
    correct: 0,
    explanation:
      "The Aligarh Movement was led by Sir Syed Ahmad Khan.",
  },
  {
    id: 113,
    source: "Academic Set 4",
    question:
      "Quaid-e-Azam joined the All India Muslim League in which year?",
    options: [
      "1906",
      "1909",
      "1913",
      "1916",
    ],
    correct: 2,
    explanation:
      "Muhammad Ali Jinnah joined the All-India Muslim League in 1913.",
  },
  {
    id: 114,
    source: "Academic Set 4",
    question:
      "Muslims were granted the right of separate electorates in which year?",
    options: [
      "1905",
      "1906",
      "1909",
      "1913",
    ],
    correct: 2,
    explanation:
      "Separate electorates for Muslims were introduced through the Indian Councils Act of 1909.",
  },
  {
    id: 115,
    source: "Academic Set 4",
    question:
      "What is the summer capital of Khyber Pakhtunkhwa?",
    options: [
      "Nathiagali",
      "Peshawar",
      "Abbottabad",
      "Mardan",
    ],
    correct: 0,
    explanation:
      "Nathiagali is commonly described in general-knowledge material as the summer capital of Khyber Pakhtunkhwa.",
  },
  {
    id: 116,
    source: "Academic Set 4",
    question:
      "What is another name for Nanga Parbat?",
    options: [
      "Killer Mountain",
      "Savage Mountain",
      "Golden Mountain",
      "White Mountain",
    ],
    correct: 0,
    explanation:
      "Nanga Parbat is commonly known as the Killer Mountain.",
  },
  {
    id: 117,
    source: "Academic Set 4",
    question:
      "In which year did the Kargil War take place?",
    options: [
      "1971",
      "1984",
      "1999",
      "2001",
    ],
    correct: 2,
    explanation:
      "The Kargil conflict took place in 1999.",
  },
  {
    id: 118,
    source: "Academic Set 4",
    question: "Who wrote the National Anthem of Pakistan?",
    options: [
      "Hafeez Jalandhri",
      "Allama Muhammad Iqbal",
      "Ahmed Ghulamali Chagla",
      "Josh Malihabadi",
    ],
    correct: 0,
    explanation:
      "The lyrics of Pakistan's national anthem were written by Hafeez Jalandhri.",
  },
  {
    id: 119,
    source: "Academic Set 4",
    question:
      "The first Partition of Bengal took place in which year?",
    options: [
      "1905",
      "1906",
      "1911",
      "1913",
    ],
    correct: 0,
    explanation:
      "The first Partition of Bengal was carried out in 1905.",
  },
  {
    id: 120,
    source: "Academic Set 4",
    question:
      "Safiullah is the title of which Prophet?",
    options: [
      "Hazrat Adam AS",
      "Hazrat Ibrahim AS",
      "Hazrat Musa AS",
      "Hazrat Isa AS",
    ],
    correct: 0,
    explanation:
      "Safiullah is traditionally associated with Hazrat Adam (AS).",
  },
  {
    id: 121,
    source: "Academic Set 4",
    question:
      "Which angel is responsible for bringing rain?",
    options: [
      "Hazrat Jibreel AS",
      "Hazrat Mikaeel AS",
      "Hazrat Israfeel AS",
      "Hazrat Izraeel AS",
    ],
    correct: 1,
    explanation:
      "Hazrat Mikaeel (AS) is traditionally associated with rain and sustenance.",
  },
  {
    id: 122,
    source: "Academic Set 4",
    question:
      "Who will blow the trumpet (Soor) on the Day of Judgment?",
    options: [
      "Hazrat Jibreel AS",
      "Hazrat Mikaeel AS",
      "Hazrat Israfeel AS",
      "Hazrat Izraeel AS",
    ],
    correct: 2,
    explanation:
      "Hazrat Israfeel (AS) is traditionally associated with blowing the trumpet.",
  },
  {
    id: 123,
    source: "Academic Set 4",
    question:
      "What is the total number of Wajibat of Namaz?",
    options: [
      "10",
      "12",
      "14",
      "17",
    ],
    correct: 2,
    explanation:
      "The commonly taught answer in the mock material is 14.",
  },
  {
    id: 124,
    source: "Academic Set 4",
    question:
      "In which Nabwi year was Namaz made obligatory?",
    options: [
      "5th Nabwi year",
      "7th Nabwi year",
      "10th/11th Nabwi year",
      "13th Nabwi year",
    ],
    correct: 2,
    explanation:
      "The mock-test material gives the 10th/11th Nabwi year as the answer.",
  },
  {
    id: 125,
    source: "Academic Set 4",
    question:
      "Who wrote 'Shikwa' and 'Jawab-e-Shikwa'?",
    options: [
      "Allama Muhammad Iqbal",
      "Faiz Ahmed Faiz",
      "Hafeez Jalandhri",
      "Mirza Ghalib",
    ],
    correct: 0,
    explanation:
      "Both Shikwa and Jawab-e-Shikwa were written by Allama Muhammad Iqbal.",
  },
  {
    id: 126,
    source: "Academic Set 4",
    question:
      "Which year is known as the 'Year of Sorrow' (Gham ka Saal)?",
    options: [
      "5th Nabwi year",
      "8th Nabwi year",
      "10th Nabwi year",
      "13th Nabwi year",
    ],
    correct: 2,
    explanation:
      "The Year of Sorrow is traditionally associated with the 10th year of Prophethood.",
  },
  {
    id: 127,
    source: "Academic Set 4",
    question:
      "Two daughters of Hazrat Muhammad SAW were married to which Sahabi?",
    options: [
      "Hazrat Abu Bakr RA",
      "Hazrat Umar RA",
      "Hazrat Usman RA",
      "Hazrat Ali RA",
    ],
    correct: 2,
    explanation:
      "Hazrat Usman (RA) married two daughters of Prophet Muhammad (SAW), earning the title Dhun-Nurayn.",
  },
  {
    id: 128,
    source: "Academic Set 4",
    question:
      "What was the relationship of Abdul Muttalib with Prophet Muhammad SAW?",
    options: [
      "Father",
      "Uncle",
      "Paternal Grandfather",
      "Brother",
    ],
    correct: 2,
    explanation:
      "Abdul Muttalib was the paternal grandfather of Prophet Muhammad (SAW).",
  },
  {
    id: 129,
    source: "Academic Set 4",
    question:
      "When did Hazrat Muhammad SAW perform Hajj?",
    options: [
      "8 AH",
      "9 AH",
      "10 AH",
      "11 AH",
    ],
    correct: 2,
    explanation:
      "The Prophet Muhammad (SAW) performed his Farewell Hajj in 10 AH.",
  },
  {
    id: 130,
    source: "Academic Set 4",
    question:
      "Which Sahabi was known for not revealing the secret during the battle?",
    options: [
      "Hazrat Khubaib ibn Adi RA",
      "Hazrat Bilal RA",
      "Hazrat Ammar ibn Yasir RA",
      "Hazrat Salman Farsi RA",
    ],
    correct: 0,
    explanation:
      "The Academic Set 4 question identifies Hazrat Khubaib ibn Adi (RA).",
  },
  {
    id: 131,
    source: "Academic Set 4",
    question:
      "When were the general elections held after the 1973 Constitution?",
    options: [
      "1970",
      "1973",
      "1977",
      "1985",
    ],
    correct: 2,
    explanation:
      "The first general elections after the 1973 Constitution were held in 1977.",
  },
  {
    id: 132,
    source: "Academic Set 4",
    question:
      "According to the 1973 Constitution of Pakistan, who is the Head of State?",
    options: [
      "Prime Minister",
      "President",
      "Chief Justice",
      "Chief of Army Staff",
    ],
    correct: 1,
    explanation:
      "Under Pakistan's constitutional system, the President is the Head of State.",
  },

  // ========================================================================
  // ACADEMIC SET 5
  // ========================================================================

  {
    id: 133,
    source: "Academic Set 5",
    question: "Which is the largest ocean in the world?",
    options: [
      "Atlantic",
      "Indian",
      "Pacific",
      "Arctic",
    ],
    correct: 2,
    explanation:
      "The Pacific Ocean is the largest ocean on Earth.",
  },
  {
    id: 134,
    source: "Academic Set 5",
    question:
      "The headquarters of the United Nations is located in:",
    options: [
      "Geneva",
      "New York",
      "Paris",
      "Washington D.C.",
    ],
    correct: 1,
    explanation:
      "The main headquarters of the United Nations is in New York City.",
  },
  {
    id: 135,
    source: "Academic Set 5",
    question:
      "Which country is known as the “Land of the Rising Sun”?",
    options: [
      "China",
      "Japan",
      "South Korea",
      "Thailand",
    ],
    correct: 1,
    explanation:
      "Japan is commonly known as the Land of the Rising Sun.",
  },
  {
    id: 136,
    source: "Academic Set 5",
    question:
      "The Strait of Hormuz connects the Persian Gulf with the:",
    options: [
      "Red Sea",
      "Gulf of Oman",
      "Arabian Sea directly",
      "Mediterranean Sea",
    ],
    correct: 1,
    explanation:
      "The Strait of Hormuz connects the Persian Gulf with the Gulf of Oman.",
  },
  {
    id: 137,
    source: "Academic Set 5",
    question:
      "Who formulated the theory of relativity?",
    options: [
      "Newton",
      "Einstein",
      "Galileo",
      "Darwin",
    ],
    correct: 1,
    explanation:
      "Albert Einstein formulated the theories of special and general relativity.",
  },
  {
    id: 138,
    source: "Academic Set 5",
    question: "The currency of Turkey is:",
    options: [
      "Dinar",
      "Lira",
      "Riyal",
      "Franc",
    ],
    correct: 1,
    explanation:
      "The currency of Türkiye is the Turkish lira.",
  },
  {
    id: 139,
    source: "Academic Set 5",
    question:
      "Which is the smallest continent by land area?",
    options: [
      "Europe",
      "Antarctica",
      "Australia",
      "South America",
    ],
    correct: 2,
    explanation:
      "Australia is the smallest continent by land area.",
  },
  {
    id: 140,
    source: "Academic Set 5",
    question:
      "The headquarters of the World Health Organization is in:",
    options: [
      "Geneva",
      "Rome",
      "Vienna",
      "Brussels",
    ],
    correct: 0,
    explanation:
      "WHO headquarters is located in Geneva, Switzerland.",
  },
  {
    id: 141,
    source: "Academic Set 5",
    question:
      "The All-India Muslim League was founded in:",
    options: [
      "1905",
      "1906",
      "1907",
      "1908",
    ],
    correct: 1,
    explanation:
      "The All-India Muslim League was founded in 1906 at Dhaka.",
  },
  {
    id: 142,
    source: "Academic Set 5",
    question:
      "The founder of the All-India Muslim League was:",
    options: [
      "Sir Syed Ahmad Khan",
      "Nawab Salimullah Khan",
      "Allama Iqbal",
      "Liaquat Ali Khan",
    ],
    correct: 1,
    explanation:
      "Nawab Salimullah Khan was a leading figure behind the founding of the All-India Muslim League.",
  },
  {
    id: 143,
    source: "Academic Set 5",
    question:
      "The Allahabad Address was delivered by Allama Iqbal in:",
    options: [
      "1928",
      "1929",
      "1930",
      "1932",
    ],
    correct: 2,
    explanation:
      "Allama Iqbal delivered the Allahabad Address in 1930.",
  },
  {
    id: 144,
    source: "Academic Set 5",
    question:
      "The Nehru Report was published in:",
    options: [
      "1927",
      "1928",
      "1929",
      "1930",
    ],
    correct: 1,
    explanation:
      "The Nehru Report was published in 1928.",
  },
  {
    id: 145,
    source: "Academic Set 5",
    question:
      "Quaid-e-Azam presented his Fourteen Points in:",
    options: [
      "1928",
      "1929",
      "1930",
      "1931",
    ],
    correct: 1,
    explanation:
      "Muhammad Ali Jinnah presented his Fourteen Points in 1929.",
  },
  {
    id: 146,
    source: "Academic Set 5",
    question:
      "The first Governor-General of Pakistan was:",
    options: [
      "Liaquat Ali Khan",
      "Khawaja Nazimuddin",
      "Muhammad Ali Jinnah",
      "Iskander Mirza",
    ],
    correct: 2,
    explanation:
      "Muhammad Ali Jinnah was the first Governor-General of Pakistan.",
  },
  {
    id: 147,
    source: "Academic Set 5",
    question:
      "The first capital of Pakistan was:",
    options: [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Rawalpindi",
    ],
    correct: 1,
    explanation:
      "Karachi served as Pakistan's first capital.",
  },
  {
    id: 148,
    source: "Academic Set 5",
    question:
      "Pakistan's first constitution came into force in:",
    options: [
      "1954",
      "1956",
      "1958",
      "1962",
    ],
    correct: 1,
    explanation:
      "Pakistan's first Constitution came into force in 1956.",
  },
  {
    id: 149,
    source: "Academic Set 5",
    question:
      "The first revelation came to Prophet Muhammad ﷺ in the cave of:",
    options: [
      "Thawr",
      "Hira",
      "Safa",
      "Uhud",
    ],
    correct: 1,
    explanation:
      "The first revelation came in the Cave of Hira.",
  },
  {
    id: 150,
    source: "Academic Set 5",
    question:
      "The first revealed verses belong to:",
    options: [
      "Surah Al-Fatiha",
      "Surah Al-Alaq",
      "Surah Al-Baqarah",
      "Surah Al-Muddaththir",
    ],
    correct: 1,
    explanation:
      "The first revealed verses are traditionally identified as the opening verses of Surah Al-Alaq.",
  },
  {
    id: 151,
    source: "Academic Set 5",
    question:
      "How many obligatory prayers are offered each day?",
    options: [
      "3",
      "4",
      "5",
      "6",
    ],
    correct: 2,
    explanation:
      "There are five obligatory prayers each day.",
  },
  {
    id: 152,
    source: "Academic Set 5",
    question:
      "The first Caliph of Islam was:",
    options: [
      "Umar ibn al-Khattab رضي الله عنه",
      "Abu Bakr رضي الله عنه",
      "Uthman رضي الله عنه",
      "Ali رضي الله عنه",
    ],
    correct: 1,
    explanation:
      "Hazrat Abu Bakr (RA) was the first Caliph after Prophet Muhammad (SAW).",
  },
  {
    id: 153,
    source: "Academic Set 5",
    question:
      "The Battle of Badr took place in:",
    options: [
      "1 AH",
      "2 AH",
      "3 AH",
      "4 AH",
    ],
    correct: 1,
    explanation:
      "The Battle of Badr took place in 2 AH.",
  },
  {
    id: 154,
    source: "Academic Set 5",
    question:
      "The Treaty of Hudaybiyyah was signed in:",
    options: [
      "5 AH",
      "6 AH",
      "7 AH",
      "8 AH",
    ],
    correct: 1,
    explanation:
      "The Treaty of Hudaybiyyah was concluded in 6 AH.",
  },
  {
    id: 155,
    source: "Academic Set 5",
    question:
      "Which Surah is known as the “Heart of the Quran”?",
    options: [
      "Al-Baqarah",
      "Yaseen",
      "Al-Ikhlas",
      "Al-Kahf",
    ],
    correct: 1,
    explanation:
      "Surah Yaseen is commonly referred to as the Heart of the Quran.",
  },

  // ========================================================================
  // ACADEMIC SET 6
  // ========================================================================

  {
    id: 156,
    source: "Academic Set 6",
    question:
      "Which country gifted the Statue of Liberty to the USA?",
    options: [
      "Britain",
      "France",
      "Germany",
      "Spain",
    ],
    correct: 1,
    explanation:
      "France gifted the Statue of Liberty to the United States.",
  },
  {
    id: 157,
    source: "Academic Set 6",
    question:
      "The Suez Canal connects the Mediterranean Sea with the:",
    options: [
      "Arabian Sea",
      "Red Sea",
      "Black Sea",
      "Caspian Sea",
    ],
    correct: 1,
    explanation:
      "The Suez Canal connects the Mediterranean Sea with the Red Sea.",
  },
  {
    id: 158,
    source: "Academic Set 6",
    question:
      "Which is the largest desert in the world?",
    options: [
      "Sahara",
      "Gobi",
      "Arabian",
      "Antarctic Desert",
    ],
    correct: 3,
    explanation:
      "Antarctica is classified as the world's largest desert because of its extremely low precipitation.",
  },
  {
    id: 159,
    source: "Academic Set 6",
    question:
      "The Nobel Prize was established by:",
    options: [
      "Albert Einstein",
      "Alfred Nobel",
      "Isaac Newton",
      "Alexander Fleming",
    ],
    correct: 1,
    explanation:
      "The Nobel Prizes were established according to the will of Alfred Nobel.",
  },
  {
    id: 160,
    source: "Academic Set 6",
    question:
      "Which country has the largest population in the world as of recent estimates?",
    options: [
      "USA",
      "China",
      "India",
      "Russia",
    ],
    correct: 2,
    explanation:
      "India is currently the world's most populous country.",
  },
  {
    id: 161,
    source: "Academic Set 6",
    question:
      "The International Court of Justice is located in:",
    options: [
      "London",
      "The Hague",
      "Geneva",
      "Paris",
    ],
    correct: 1,
    explanation:
      "The International Court of Justice is located in The Hague, Netherlands.",
  },
  {
    id: 162,
    source: "Academic Set 6",
    question:
      "Which planet has the largest number of prominent rings?",
    options: [
      "Mars",
      "Venus",
      "Jupiter",
      "Saturn",
    ],
    correct: 3,
    explanation:
      "Saturn is famous for its extensive and prominent ring system.",
  },
  {
    id: 163,
    source: "Academic Set 6",
    question:
      "The Objectives Resolution was passed in:",
    options: [
      "1948",
      "1949",
      "1950",
      "1951",
    ],
    correct: 1,
    explanation:
      "The Objectives Resolution was passed by Pakistan's Constituent Assembly in 1949.",
  },
  {
    id: 164,
    source: "Academic Set 6",
    question:
      "Who was the first President of Pakistan?",
    options: [
      "Ayub Khan",
      "Iskander Mirza",
      "Ghulam Muhammad",
      "Liaquat Ali Khan",
    ],
    correct: 1,
    explanation:
      "Iskander Mirza became Pakistan's first President in 1956.",
  },
  {
    id: 165,
    source: "Academic Set 6",
    question:
      "The 1973 Constitution was unanimously passed on:",
    options: [
      "10 April 1973",
      "12 April 1973",
      "14 August 1973",
      "23 March 1973",
    ],
    correct: 0,
    explanation:
      "The Constitution was passed by the National Assembly on 10 April 1973 and came into force on 14 August.",
  },
  {
    id: 166,
    source: "Academic Set 6",
    question:
      "Pakistan became a member of the United Nations in:",
    options: [
      "1947",
      "1948",
      "1949",
      "1950",
    ],
    correct: 0,
    explanation:
      "Pakistan joined the United Nations in 1947.",
  },
  {
    id: 167,
    source: "Academic Set 6",
    question:
      "The largest province of Pakistan by area is:",
    options: [
      "Punjab",
      "Sindh",
      "Khyber Pakhtunkhwa",
      "Balochistan",
    ],
    correct: 3,
    explanation:
      "Balochistan is Pakistan's largest province by area.",
  },
  {
    id: 168,
    source: "Academic Set 6",
    question:
      "Mangla Dam is built on the River:",
    options: [
      "Indus",
      "Jhelum",
      "Chenab",
      "Ravi",
    ],
    correct: 1,
    explanation:
      "Mangla Dam is constructed on the Jhelum River.",
  },
  {
    id: 169,
    source: "Academic Set 6",
    question:
      "The first martial law in Pakistan was imposed in:",
    options: [
      "1956",
      "1958",
      "1962",
      "1969",
    ],
    correct: 1,
    explanation:
      "The first martial law in Pakistan was imposed in 1958.",
  },
  {
    id: 170,
    source: "Academic Set 6",
    question:
      "The total number of Surahs in the Holy Quran is:",
    options: [
      "112",
      "113",
      "114",
      "116",
    ],
    correct: 2,
    explanation:
      "The Holy Quran contains 114 Surahs.",
  },
  {
    id: 171,
    source: "Academic Set 6",
    question:
      "Zakat is generally calculated at:",
    options: [
      "1%",
      "2%",
      "2.5%",
      "5%",
    ],
    correct: 2,
    explanation:
      "The commonly taught Zakat rate on qualifying wealth is 2.5%.",
  },
  {
    id: 172,
    source: "Academic Set 6",
    question:
      "The Prophet ﷺ migrated from Makkah to:",
    options: [
      "Taif",
      "Madinah",
      "Jerusalem",
      "Damascus",
    ],
    correct: 1,
    explanation:
      "The Hijrah was the migration from Makkah to Madinah.",
  },
  {
    id: 173,
    source: "Academic Set 6",
    question:
      "The Islamic calendar begins from the event of:",
    options: [
      "Birth of Prophet ﷺ",
      "First revelation",
      "Hijrah",
      "Conquest of Makkah",
    ],
    correct: 2,
    explanation:
      "The Islamic Hijri calendar is based on the Hijrah of Prophet Muhammad (SAW).",
  },
  {
    id: 174,
    source: "Academic Set 6",
    question:
      "Which Surah does not begin with Bismillah?",
    options: [
      "Al-Fatiha",
      "At-Tawbah",
      "Al-Ikhlas",
      "Al-Kahf",
    ],
    correct: 1,
    explanation:
      "Surah At-Tawbah is the only Surah that does not begin with Bismillah.",
  },
  {
    id: 175,
    source: "Academic Set 6",
    question:
      "The first mosque built by the Prophet ﷺ after Hijrah was:",
    options: [
      "Masjid al-Haram",
      "Masjid an-Nabawi",
      "Masjid Quba",
      "Masjid al-Aqsa",
    ],
    correct: 2,
    explanation:
      "Masjid Quba was established after the Prophet's arrival near Madinah.",
  },
  {
    id: 176,
    source: "Academic Set 6",
    question:
      "The Battle of Khaybar occurred in:",
    options: [
      "5 AH",
      "6 AH",
      "7 AH",
      "8 AH",
    ],
    correct: 2,
    explanation:
      "The Battle of Khaybar took place in 7 AH.",
  },
  {
    id: 177,
    source: "Academic Set 6",
    question:
      "The number of obligatory acts (Faraiz) of Wudu is commonly taught as:",
    options: [
      "3",
      "4",
      "5",
      "6",
    ],
    correct: 1,
    explanation:
      "The commonly taught answer in the Academic Set 6 material is four Faraiz of Wudu.",
  },

  // ========================================================================
  // ADDITIONAL EXPECTED GENERAL KNOWLEDGE QUESTIONS
  // ========================================================================

  {
    id: 178,
    source: "Expected",
    question: "What is the capital of Pakistan?",
    options: [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Peshawar",
    ],
    correct: 2,
    explanation:
      "Islamabad is the capital of Pakistan.",
  },
  {
    id: 179,
    source: "Expected",
    question: "Which is the highest mountain in the world?",
    options: [
      "K2",
      "Mount Everest",
      "Nanga Parbat",
      "Kangchenjunga",
    ],
    correct: 1,
    explanation:
      "Mount Everest is the highest mountain above sea level.",
  },
  {
    id: 180,
    source: "Expected",
    question: "Which is the highest mountain in Pakistan?",
    options: [
      "Nanga Parbat",
      "K2",
      "Broad Peak",
      "Rakaposhi",
    ],
    correct: 1,
    explanation:
      "K2 is the highest mountain in Pakistan and the second-highest mountain in the world.",
  },
  {
    id: 181,
    source: "Expected",
    question: "Which is the longest river of Pakistan?",
    options: [
      "Jhelum",
      "Chenab",
      "Indus",
      "Ravi",
    ],
    correct: 2,
    explanation:
      "The Indus is the longest river in Pakistan.",
  },
  {
    id: 182,
    source: "Expected",
    question: "Which is the largest province of Pakistan by population?",
    options: [
      "Sindh",
      "Punjab",
      "Balochistan",
      "Khyber Pakhtunkhwa",
    ],
    correct: 1,
    explanation:
      "Punjab is Pakistan's most populous province.",
  },
  {
    id: 183,
    source: "Expected",
    question: "What is the national flower of Pakistan?",
    options: [
      "Rose",
      "Jasmine",
      "Sunflower",
      "Tulip",
    ],
    correct: 1,
    explanation:
      "Jasmine is the national flower of Pakistan.",
  },
  {
    id: 184,
    source: "Expected",
    question: "What is the national animal of Pakistan?",
    options: [
      "Markhor",
      "Lion",
      "Snow Leopard",
      "Deer",
    ],
    correct: 0,
    explanation:
      "The markhor is the national animal of Pakistan.",
  },
  {
    id: 185,
    source: "Expected",
    question: "What is the national bird of Pakistan?",
    options: [
      "Eagle",
      "Chukar",
      "Falcon",
      "Peacock",
    ],
    correct: 1,
    explanation:
      "The chukar partridge is the national bird of Pakistan.",
  },
  {
    id: 186,
    source: "Expected",
    question: "Which city is known as the City of Gardens in Pakistan?",
    options: [
      "Lahore",
      "Karachi",
      "Multan",
      "Islamabad",
    ],
    correct: 0,
    explanation:
      "Lahore is commonly known as the City of Gardens.",
  },
  {
    id: 187,
    source: "Expected",
    question: "Which is the largest desert of Pakistan?",
    options: [
      "Thar Desert",
      "Cholistan Desert",
      "Thal Desert",
      "Kharan Desert",
    ],
    correct: 0,
    explanation:
      "The Thar Desert is the largest desert region associated with Pakistan.",
  },
  {
    id: 188,
    source: "Expected",
    question: "Which pass connects Pakistan and Afghanistan?",
    options: [
      "Khyber Pass",
      "Khunjerab Pass",
      "Bolan Pass",
      "Lowari Pass",
    ],
    correct: 0,
    explanation:
      "Khyber Pass is a historic route connecting Pakistan with Afghanistan.",
  },
  {
    id: 189,
    source: "Expected",
    question: "Which pass connects Pakistan and China?",
    options: [
      "Khyber Pass",
      "Khunjerab Pass",
      "Bolan Pass",
      "Khojak Pass",
    ],
    correct: 1,
    explanation:
      "Khunjerab Pass lies on the Pakistan-China border.",
  },
  {
    id: 190,
    source: "Expected",
    question: "Where is the headquarters of the OIC?",
    options: [
      "Riyadh",
      "Jeddah",
      "Mecca",
      "Medina",
    ],
    correct: 1,
    explanation:
      "The OIC headquarters is located in Jeddah, Saudi Arabia.",
  },
  {
    id: 191,
    source: "Expected",
    question: "Where is the headquarters of UNESCO?",
    options: [
      "Paris",
      "Geneva",
      "London",
      "New York",
    ],
    correct: 0,
    explanation:
      "UNESCO is headquartered in Paris, France.",
  },
  {
    id: 192,
    source: "Expected",
    question: "Where is the headquarters of the International Atomic Energy Agency?",
    options: [
      "Vienna",
      "Geneva",
      "New York",
      "Paris",
    ],
    correct: 0,
    explanation:
      "The IAEA is headquartered in Vienna, Austria.",
  },
  {
    id: 193,
    source: "Expected",
    question: "Where is the headquarters of NATO?",
    options: [
      "Brussels",
      "Paris",
      "London",
      "Berlin",
    ],
    correct: 0,
    explanation:
      "NATO headquarters is located in Brussels, Belgium.",
  },
  {
    id: 194,
    source: "Expected",
    question: "Where is the headquarters of SAARC?",
    options: [
      "Kathmandu",
      "Islamabad",
      "Dhaka",
      "New Delhi",
    ],
    correct: 0,
    explanation:
      "The SAARC Secretariat is located in Kathmandu, Nepal.",
  },
  {
    id: 195,
    source: "Expected",
    question: "What is the capital of Saudi Arabia?",
    options: [
      "Jeddah",
      "Riyadh",
      "Mecca",
      "Medina",
    ],
    correct: 1,
    explanation:
      "Riyadh is the capital of Saudi Arabia.",
  },
  {
    id: 196,
    source: "Expected",
    question: "What is the capital of Türkiye?",
    options: [
      "Istanbul",
      "Ankara",
      "Izmir",
      "Bursa",
    ],
    correct: 1,
    explanation:
      "Ankara is the capital of Türkiye.",
  },
  {
    id: 197,
    source: "Expected",
    question: "What is the capital of Australia?",
    options: [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Perth",
    ],
    correct: 2,
    explanation:
      "Canberra is the capital of Australia.",
  },
  {
    id: 198,
    source: "Expected",
    question: "What is the capital of Canada?",
    options: [
      "Toronto",
      "Ottawa",
      "Vancouver",
      "Montreal",
    ],
    correct: 1,
    explanation:
      "Ottawa is the capital of Canada.",
  },
  {
    id: 199,
    source: "Expected",
    question: "What is the capital of China?",
    options: [
      "Shanghai",
      "Beijing",
      "Hong Kong",
      "Guangzhou",
    ],
    correct: 1,
    explanation:
      "Beijing is the capital of China.",
  },
  {
    id: 200,
    source: "Expected",
    question: "What is the capital of Germany?",
    options: [
      "Munich",
      "Frankfurt",
      "Berlin",
      "Hamburg",
    ],
    correct: 2,
    explanation:
      "Berlin is the capital of Germany.",
  },
  {
    id: 201,
    source: "Expected",
    question: "Which is the largest continent by area?",
    options: [
      "Africa",
      "Asia",
      "Europe",
      "North America",
    ],
    correct: 1,
    explanation:
      "Asia is the largest continent by both area and population.",
  },
  {
    id: 202,
    source: "Expected",
    question: "Which is the smallest ocean?",
    options: [
      "Indian Ocean",
      "Arctic Ocean",
      "Atlantic Ocean",
      "Southern Ocean",
    ],
    correct: 1,
    explanation:
      "The Arctic Ocean is the smallest of the world's five oceans.",
  },
  {
    id: 203,
    source: "Expected",
    question: "Which country is known as the Land of the Midnight Sun?",
    options: [
      "Norway",
      "Spain",
      "Egypt",
      "Brazil",
    ],
    correct: 0,
    explanation:
      "Norway is commonly associated with the Land of the Midnight Sun.",
  },
  {
    id: 204,
    source: "Expected",
    question: "Which is the largest island in the world?",
    options: [
      "Greenland",
      "Madagascar",
      "Borneo",
      "New Guinea",
    ],
    correct: 0,
    explanation:
      "Greenland is the world's largest island.",
  },
  {
    id: 205,
    source: "Expected",
    question: "Which sea lies between Europe and Africa?",
    options: [
      "Arabian Sea",
      "Mediterranean Sea",
      "Black Sea",
      "Caspian Sea",
    ],
    correct: 1,
    explanation:
      "The Mediterranean Sea lies between southern Europe and northern Africa.",
  },
  {
    id: 206,
    source: "Expected",
    question: "Which canal connects the Mediterranean Sea and Red Sea?",
    options: [
      "Panama Canal",
      "Suez Canal",
      "Kiel Canal",
      "Corinth Canal",
    ],
    correct: 1,
    explanation:
      "The Suez Canal connects the Mediterranean Sea with the Red Sea.",
  },
  {
    id: 207,
    source: "Expected",
    question: "Which canal connects the Atlantic and Pacific Oceans?",
    options: [
      "Suez Canal",
      "Panama Canal",
      "Kiel Canal",
      "Corinth Canal",
    ],
    correct: 1,
    explanation:
      "The Panama Canal connects the Atlantic and Pacific Oceans.",
  },
  {
    id: 208,
    source: "Expected",
    question: "Which organization is responsible for international public health?",
    options: [
      "WHO",
      "WTO",
      "UNESCO",
      "UNHCR",
    ],
    correct: 0,
    explanation:
      "The World Health Organization is the UN specialized agency responsible for international public health.",
  },
  {
    id: 209,
    source: "Expected",
    question: "What does IMF stand for?",
    options: [
      "International Monetary Fund",
      "International Market Federation",
      "International Money Forum",
      "International Monetary Federation",
    ],
    correct: 0,
    explanation:
      "IMF stands for International Monetary Fund.",
  },
  {
    id: 210,
    source: "Expected",
    question: "What does UNESCO stand for?",
    options: [
      "United Nations Educational, Scientific and Cultural Organization",
      "United Nations Economic and Social Council Organization",
      "United Nations Education and Security Organization",
      "United Nations Scientific Council",
    ],
    correct: 0,
    explanation:
      "UNESCO stands for United Nations Educational, Scientific and Cultural Organization.",
  },
  {
    id: 211,
    source: "Expected",
    question: "What does UNICEF primarily work for?",
    options: [
      "Children",
      "International trade",
      "Military cooperation",
      "Oil production",
    ],
    correct: 0,
    explanation:
      "UNICEF works primarily for the rights and welfare of children.",
  },
  {
    id: 212,
    source: "Expected",
    question: "Who was the founder of Pakistan?",
    options: [
      "Allama Iqbal",
      "Muhammad Ali Jinnah",
      "Liaquat Ali Khan",
      "Sir Syed Ahmad Khan",
    ],
    correct: 1,
    explanation:
      "Muhammad Ali Jinnah is recognized as the founder of Pakistan.",
  },
  {
    id: 213,
    source: "Expected",
    question: "Pakistan gained independence on:",
    options: [
      "23 March 1940",
      "14 August 1947",
      "15 August 1947",
      "14 August 1956",
    ],
    correct: 1,
    explanation:
      "Pakistan became independent on 14 August 1947.",
  },
  {
    id: 214,
    source: "Expected",
    question: "The Lahore Resolution was passed in:",
    options: [
      "1930",
      "1940",
      "1947",
      "1956",
    ],
    correct: 1,
    explanation:
      "The Lahore Resolution was passed on 23 March 1940.",
  },
  {
    id: 215,
    source: "Expected",
    question: "Pakistan's first Constitution was promulgated in:",
    options: [
      "1949",
      "1956",
      "1962",
      "1973",
    ],
    correct: 1,
    explanation:
      "Pakistan's first Constitution was promulgated in 1956.",
  },
  {
    id: 216,
    source: "Expected",
    question: "Pakistan's current Constitution was adopted in:",
    options: [
      "1956",
      "1962",
      "1973",
      "1985",
    ],
    correct: 2,
    explanation:
      "The Constitution of 1973 is Pakistan's current constitutional framework.",
  },
  {
    id: 217,
    source: "Expected",
    question: "Which city is known as the City of Saints in Pakistan?",
    options: [
      "Multan",
      "Lahore",
      "Peshawar",
      "Quetta",
    ],
    correct: 0,
    explanation:
      "Multan is widely known as the City of Saints.",
  },
  {
    id: 218,
    source: "Expected",
    question: "Which is the largest lake of Pakistan?",
    options: [
      "Manchar Lake",
      "Saif-ul-Malook",
      "Attabad Lake",
      "Keenjhar Lake",
    ],
    correct: 0,
    explanation:
      "Manchar Lake is Pakistan's largest natural freshwater lake.",
  },
  {
    id: 219,
    source: "Expected",
    question: "Which dam is built on the Indus River?",
    options: [
      "Mangla Dam",
      "Tarbela Dam",
      "Warsak Dam",
      "Hub Dam",
    ],
    correct: 1,
    explanation:
      "Tarbela Dam is built on the Indus River.",
  },
  {
    id: 220,
    source: "Expected",
    question: "Which is the largest city of Pakistan by population?",
    options: [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Peshawar",
    ],
    correct: 1,
    explanation:
      "Karachi is Pakistan's largest city by population.",
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

export default function GeneralKnowledge() {
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
          <strong>General Knowledge</strong>
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

            <h1>General Knowledge</h1>

            <p>
              Build strong general knowledge for armed-forces
              initial tests with Pakistan Studies, world
              geography, international organizations, capitals,
              current affairs, history and important factual
              information.
            </p>
          </div>
        </header>

        {/* Introduction */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">
                INTRODUCTION
              </span>

              <h2>General Knowledge for Initial Tests</h2>
            </div>
          </div>

          <div className="content-card">

            <p>
              General Knowledge questions in armed-forces
              initial tests can cover Pakistan Studies,
              geography, international organizations,
              capitals and currencies, history, important
              personalities, Islamic studies and current
              national and international information.
            </p>

            <p>
              The most effective preparation method is to
              understand important facts and repeatedly revise
              commonly tested information.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Preparation Strategy</strong>

                <p>
                  Revise Pakistan GK, world geography,
                  organizations, capitals, important dates
                  and frequently repeated factual questions.
                </p>

                <span>
                  Focus on quick recall because initial tests
                  are time-sensitive.
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
              <span className="section-label">
                CORE TOPICS
              </span>

              <h2>What You Should Prepare</h2>
            </div>
          </div>

          <div className="content-card">

            <div className="concept-list">

              <div className="concept-item">
                <span>01</span>

                <div>
                  <h3>Pakistan General Knowledge</h3>

                  <p>
                    Pakistan's history, important personalities,
                    constitutional developments, national symbols,
                    geography and major historical events.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>World Geography</h3>

                  <p>
                    Continents, oceans, mountains, deserts,
                    rivers, passes, canals, straits and important
                    geographical locations.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Organizations & Headquarters</h3>

                  <p>
                    UN, OIC, NATO, WHO, IMF, World Bank, ADB,
                    SAARC and other important international
                    organizations.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Capitals, History & Current Affairs</h3>

                  <p>
                    Countries and capitals, important historical
                    events, current national developments and
                    major international events.
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
              <span className="section-label">
                QUESTION BANK
              </span>

              <h2>General Knowledge MCQs</h2>
            </div>
          </div>

          <div className="content-card">

            <p>
              This question bank contains{" "}
              <strong>
                {questionBank.length} General Knowledge MCQs
              </strong>
              . It combines GK-related questions from the
              Academic mock tests with additional expected
              questions for practice.
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
                        width: "240px",
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
              <span className="section-label">
                EXAM STRATEGY
              </span>

              <h2>Important GK Tips</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />

              <div>
                <strong>
                  Memorize important facts
                </strong>

                <p>
                  Focus on capitals, organizations,
                  headquarters, national symbols, important
                  dates and geographical facts.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>
                  Revise Pakistan Studies
                </strong>

                <p>
                  Give special attention to Pakistan's
                  constitutional history, independence movement,
                  geography and important personalities.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiAward />

              <div>
                <strong>
                  Practise quick recall
                </strong>

                <p>
                  GK questions are often solved through
                  immediate recognition, so practise answering
                  without spending excessive time on one question.
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

              <h2>Test Your General Knowledge</h2>

              <p>
                10 questions are randomly selected from the
                complete General Knowledge question bank.
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
                <strong>
                  {score}
                </strong>

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

            <Link to="/notes/academics/english">
              English
              <FiArrowRight />
            </Link>

            <Link to="/notes/academics/physics">
              Physics
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