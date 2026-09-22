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
| PAKISTAN AFFAIRS QUESTION BANK
|--------------------------------------------------------------------------
| 120 questions
|
| Covers:
| - Pakistan–India 2025 conflict
| - Pahalgam attack
| - Operation Sindoor
| - Operation Bunyan-un-Marsoos / Marka-e-Haq
| - Pakistan–India ceasefire
| - Indus Waters Treaty
| - Pakistan's diplomatic engagements
| - Islamabad peace/diplomatic talks
| - Pakistan–Afghanistan relations
| - Pakistan–Iran relations
| - Pakistan–China relations
| - CPEC / CPEC 2.0
| - Saudi Arabia, Türkiye and Gulf relations
| - Regional diplomacy
| - IMF and Pakistan's economy
| - Defence and military developments
| - SUPARCO and Pakistan's space programme
| - Current national leadership
| - Constitutional and legislative developments
| - Infrastructure and national projects
| - National achievements and events
|
| CURRENT-AFFAIRS NOTE:
| Current office-holder questions should be reviewed periodically
| because appointments can change.
|--------------------------------------------------------------------------
*/

// const questionBank = [
//   // ========================================================================
//   // PAKISTAN–INDIA 2025 CONFLICT
//   // ========================================================================

//   {
//     id: 1,
//     source: "Pakistan–India 2025 Conflict",
//     question: "The Pahalgam attack of April 2025 took place in which region?",
//     options: ["Jammu and Kashmir", "Punjab", "Sindh", "Balochistan"],
//     correct: 0,
//     explanation:
//       "The attack occurred in Pahalgam in Indian-administered Jammu and Kashmir on 22 April 2025.",
//   },
//   {
//     id: 2,
//     source: "Pakistan–India 2025 Conflict",
//     question: "On what date did the Pahalgam attack occur?",
//     options: ["22 April 2025", "1 May 2025", "7 May 2025", "10 May 2025"],
//     correct: 0,
//     explanation:
//       "The Pahalgam attack occurred on 22 April 2025.",
//   },
//   {
//     id: 3,
//     source: "Pakistan–India 2025 Conflict",
//     question:
//       "How many people were reported killed in the Pahalgam attack?",
//     options: ["16", "22", "26", "36"],
//     correct: 2,
//     explanation:
//       "The attack killed 26 people according to widely reported accounts.",
//   },
//   {
//     id: 4,
//     source: "Pakistan–India 2025 Conflict",
//     question:
//       "Which country did India blame for supporting the militants responsible for the Pahalgam attack?",
//     options: ["Pakistan", "Iran", "China", "Afghanistan"],
//     correct: 0,
//     explanation:
//       "India blamed Pakistan for supporting the attackers. Pakistan denied involvement.",
//   },
//   {
//     id: 5,
//     source: "Pakistan–India 2025 Conflict",
//     question:
//       "What was the name given by India to its military operation launched in May 2025?",
//     options: [
//       "Operation Sindoor",
//       "Operation Meghdoot",
//       "Operation Vijay",
//       "Operation Shakti",
//     ],
//     correct: 0,
//     explanation:
//       "India named its May 2025 military strikes Operation Sindoor.",
//   },
//   {
//     id: 6,
//     source: "Pakistan–India 2025 Conflict",
//     question: "Operation Sindoor began on:",
//     options: ["22 April 2025", "7 May 2025", "10 May 2025", "14 May 2025"],
//     correct: 1,
//     explanation:
//       "India launched Operation Sindoor on 7 May 2025.",
//   },
//   {
//     id: 7,
//     source: "Pakistan–India 2025 Conflict",
//     question:
//       "Pakistan's military response to the May 2025 escalation was named:",
//     options: [
//       "Operation Bunyan-un-Marsoos",
//       "Operation Zarb-e-Azb",
//       "Operation Rah-e-Nijat",
//       "Operation Swift Retort",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan named its military response Operation Bunyan-un-Marsoos.",
//   },
//   {
//     id: 8,
//     source: "Pakistan–India 2025 Conflict",
//     question:
//       "The May 2025 Pakistan–India conflict is also referred to in Pakistan as:",
//     options: [
//       "Marka-e-Haq",
//       "Marka-e-Badr",
//       "Operation Gibraltar",
//       "Operation Koh-e-Paima",
//     ],
//     correct: 0,
//     explanation:
//       "Marka-e-Haq became a term used in Pakistan for the May 2025 conflict.",
//   },
//   {
//     id: 9,
//     source: "Pakistan–India 2025 Conflict",
//     question:
//       "The 2025 India–Pakistan conflict involved two nuclear-armed states. Which two?",
//     options: [
//       "Pakistan and India",
//       "Pakistan and Iran",
//       "India and China",
//       "Pakistan and Afghanistan",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan and India are both nuclear-armed states.",
//   },
//   {
//     id: 10,
//     source: "Pakistan–India 2025 Conflict",
//     question:
//       "The 2025 India–Pakistan ceasefire was announced on:",
//     options: ["7 May 2025", "9 May 2025", "10 May 2025", "15 May 2025"],
//     correct: 2,
//     explanation:
//       "The ceasefire was announced on 10 May 2025 after several days of military escalation.",
//   },

//   // ========================================================================
//   // CEASEFIRE & DIPLOMACY
//   // ========================================================================

//   {
//     id: 11,
//     source: "Ceasefire & Diplomacy",
//     question:
//       "Which country played a significant diplomatic role in helping facilitate the May 2025 India–Pakistan ceasefire?",
//     options: ["United States", "Brazil", "Japan", "South Africa"],
//     correct: 0,
//     explanation:
//       "The United States conducted high-level diplomatic contacts during the crisis and helped push both sides toward de-escalation.",
//   },
//   {
//     id: 12,
//     source: "Ceasefire & Diplomacy",
//     question:
//       "Which military communication channel was restored during the ceasefire process?",
//     options: [
//       "Directors General of Military Operations",
//       "Naval War College",
//       "Air Chiefs Council",
//       "Border Security Committee",
//     ],
//     correct: 0,
//     explanation:
//       "The Directors General of Military Operations of Pakistan and India resumed communication during the de-escalation process.",
//   },
//   {
//     id: 13,
//     source: "Ceasefire & Diplomacy",
//     question:
//       "The 2025 India–Pakistan crisis increased international concern primarily because both countries possess:",
//     options: [
//       "Nuclear weapons",
//       "Aircraft carriers",
//       "Space stations",
//       "Chemical weapons",
//     ],
//     correct: 0,
//     explanation:
//       "Both Pakistan and India possess nuclear weapons, making escalation particularly significant.",
//   },
//   {
//     id: 14,
//     source: "Ceasefire & Diplomacy",
//     question:
//       "The main purpose of a ceasefire is to:",
//     options: [
//       "Stop active hostilities",
//       "End all diplomatic relations",
//       "Cancel international treaties",
//       "Close all borders permanently",
//     ],
//     correct: 0,
//     explanation:
//       "A ceasefire is an agreement or understanding to stop active fighting.",
//   },
//   {
//     id: 15,
//     source: "Ceasefire & Diplomacy",
//     question:
//       "Which organization is headquartered in New York and frequently involved in international peace and security matters?",
//     options: [
//       "United Nations",
//       "SAARC Secretariat",
//       "OIC Secretariat",
//       "SCO Secretariat",
//     ],
//     correct: 0,
//     explanation:
//       "The United Nations headquarters is in New York and the organization deals extensively with international peace and security.",
//   },

//   // ========================================================================
//   // INDUS WATERS TREATY
//   // ========================================================================

//   {
//     id: 16,
//     source: "Indus Waters Treaty",
//     question: "The Indus Waters Treaty was signed in:",
//     options: ["1948", "1956", "1960", "1971"],
//     correct: 2,
//     explanation:
//       "The Indus Waters Treaty was signed in 1960.",
//   },
//   {
//     id: 17,
//     source: "Indus Waters Treaty",
//     question:
//       "The Indus Waters Treaty was brokered with the involvement of which institution?",
//     options: [
//       "World Bank",
//       "IMF",
//       "Asian Development Bank",
//       "United Nations",
//     ],
//     correct: 0,
//     explanation:
//       "The World Bank played a key role in brokering the Indus Waters Treaty.",
//   },
//   {
//     id: 18,
//     source: "Indus Waters Treaty",
//     question:
//       "Which three rivers are generally allocated to Pakistan under the Indus Waters Treaty?",
//     options: [
//       "Indus, Jhelum and Chenab",
//       "Ravi, Beas and Sutlej",
//       "Ganges, Yamuna and Ravi",
//       "Chenab, Ravi and Sutlej",
//     ],
//     correct: 0,
//     explanation:
//       "The treaty allocates the western rivers—Indus, Jhelum and Chenab—to Pakistan, subject to treaty provisions.",
//   },
//   {
//     id: 19,
//     source: "Indus Waters Treaty",
//     question:
//       "Which three rivers are generally allocated to India under the treaty?",
//     options: [
//       "Ravi, Beas and Sutlej",
//       "Indus, Jhelum and Chenab",
//       "Chenab, Ravi and Jhelum",
//       "Indus, Ravi and Sutlej",
//     ],
//     correct: 0,
//     explanation:
//       "The eastern rivers—Ravi, Beas and Sutlej—are allocated to India under the treaty.",
//   },
//   {
//     id: 20,
//     source: "Indus Waters Treaty",
//     question:
//       "Why is the Indus Waters Treaty particularly important for Pakistan?",
//     options: [
//       "Agriculture and water security",
//       "Oil production",
//       "Gold mining",
//       "Air defence",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan depends heavily on the Indus River system for agriculture, drinking water and hydropower.",
//   },
//   {
//     id: 21,
//     source: "Indus Waters Treaty",
//     question:
//       "In April 2025, India announced suspension of its participation in which treaty?",
//     options: [
//       "Indus Waters Treaty",
//       "Tashkent Agreement",
//       "Simla Agreement",
//       "Lahore Declaration",
//     ],
//     correct: 0,
//     explanation:
//       "India announced that it was putting the Indus Waters Treaty in abeyance after the Pahalgam attack.",
//   },
//   {
//     id: 22,
//     source: "Indus Waters Treaty",
//     question:
//       "Which Pakistani institution traditionally deals with international water matters involving the Indus system?",
//     options: [
//       "Indus Waters Commission",
//       "Election Commission",
//       "State Bank",
//       "Federal Board of Revenue",
//     ],
//     correct: 0,
//     explanation:
//       "The Permanent Indus Commission is the bilateral mechanism established under the treaty.",
//   },

//   // ========================================================================
//   // ISLAMABAD TALKS & REGIONAL DIPLOMACY
//   // ========================================================================

//   {
//     id: 23,
//     source: "Regional Diplomacy",
//     question:
//       "Islamabad is the capital of which country?",
//     options: ["Pakistan", "Afghanistan", "Iran", "Uzbekistan"],
//     correct: 0,
//     explanation:
//       "Islamabad is the federal capital of Pakistan.",
//   },
//   {
//     id: 24,
//     source: "Regional Diplomacy",
//     question:
//       "Pakistan's diplomatic engagement with Afghanistan has focused heavily on:",
//     options: [
//       "Border security and militancy",
//       "Space tourism",
//       "Nuclear energy exports",
//       "Arctic research",
//     ],
//     correct: 0,
//     explanation:
//       "Border security, terrorism, trade and cross-border movement are major issues in Pakistan–Afghanistan relations.",
//   },
//   {
//     id: 25,
//     source: "Regional Diplomacy",
//     question:
//       "The Durand Line is associated with the border between Pakistan and:",
//     options: ["Afghanistan", "Iran", "India", "China"],
//     correct: 0,
//     explanation:
//       "The Durand Line refers to the internationally recognized Afghanistan–Pakistan border, although its status is disputed by successive Afghan governments.",
//   },
//   {
//     id: 26,
//     source: "Regional Diplomacy",
//     question:
//       "Pakistan has repeatedly raised which security concern in relation to Afghanistan?",
//     options: [
//       "TTP militancy",
//       "Arctic piracy",
//       "Atlantic shipping",
//       "South American terrorism",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan has repeatedly raised concerns about Tehreek-e-Taliban Pakistan and cross-border militancy.",
//   },
//   {
//     id: 27,
//     source: "Regional Diplomacy",
//     question:
//       "Pakistan shares a border with Afghanistan, Iran, China and:",
//     options: ["India", "Nepal", "Bangladesh", "Tajikistan"],
//     correct: 0,
//     explanation:
//       "Pakistan has land borders with Afghanistan, Iran, China and India.",
//   },

//   // ========================================================================
//   // PAKISTAN–IRAN
//   // ========================================================================

//   {
//     id: 28,
//     source: "Pakistan–Iran Relations",
//     question:
//       "Pakistan shares its western border with which country?",
//     options: ["Iran", "Turkey", "Iraq", "Tajikistan"],
//     correct: 0,
//     explanation:
//       "Iran shares Pakistan's southwestern border.",
//   },
//   {
//     id: 29,
//     source: "Pakistan–Iran Relations",
//     question:
//       "The Pakistan–Iran border is also known as:",
//     options: [
//       "Goldsmid Line",
//       "Durand Line",
//       "Radcliffe Line",
//       "McMahon Line",
//     ],
//     correct: 0,
//     explanation:
//       "The Pakistan–Iran boundary is commonly associated with the Goldsmid Line.",
//   },
//   {
//     id: 30,
//     source: "Pakistan–Iran Relations",
//     question:
//       "Which Pakistani province borders Iran?",
//     options: ["Balochistan", "Sindh", "Punjab", "Khyber Pakhtunkhwa"],
//     correct: 0,
//     explanation:
//       "Pakistan's Balochistan province shares a border with Iran.",
//   },
//   {
//     id: 31,
//     source: "Pakistan–Iran Relations",
//     question:
//       "Which important Pakistani port lies in Balochistan near the Arabian Sea?",
//     options: ["Gwadar", "Karachi Port", "Port Qasim", "Ormara"],
//     correct: 0,
//     explanation:
//       "Gwadar Port is located in Balochistan on the Arabian Sea.",
//   },
//   {
//     id: 32,
//     source: "Pakistan–Iran Relations",
//     question:
//       "Pakistan and Iran share interests in security, trade and:",
//     options: [
//       "Border management",
//       "Arctic navigation",
//       "Pacific islands",
//       "European Union membership",
//     ],
//     correct: 0,
//     explanation:
//       "Border management, security, trade and regional connectivity are important areas of Pakistan–Iran relations.",
//   },

//   // ========================================================================
//   // PAKISTAN–CHINA & CPEC
//   // ========================================================================

//   {
//     id: 33,
//     source: "Pakistan–China Relations",
//     question:
//       "Pakistan and China commonly describe their bilateral relationship as:",
//     options: [
//       "All-weather strategic cooperative partnership",
//       "Temporary economic partnership",
//       "Neutral partnership",
//       "Limited cultural partnership",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan and China frequently describe their relationship as an all-weather strategic cooperative partnership.",
//   },
//   {
//     id: 34,
//     source: "Pakistan–China Relations",
//     question: "CPEC stands for:",
//     options: [
//       "China-Pakistan Economic Corridor",
//       "China-Pakistan Energy Council",
//       "Central Pakistan Economic Corridor",
//       "China-Pakistan Export Commission",
//     ],
//     correct: 0,
//     explanation:
//       "CPEC stands for China-Pakistan Economic Corridor.",
//   },
//   {
//     id: 35,
//     source: "Pakistan–China Relations",
//     question:
//       "CPEC connects China's Xinjiang region with Pakistan's:",
//     options:["Gwadar", "Karachi", "Lahore", "Islamabad"],
//     correct: 0,
//     explanation:
//       "CPEC is designed to connect China's Xinjiang region with Pakistan, including Gwadar Port.",
//   },
//   {
//     id: 36,
//     source: "Pakistan–China Relations",
//     question:
//       "Which Chinese city is associated with the Pakistan–China economic corridor's western starting region?",
//     options: ["Kashgar", "Shanghai", "Beijing", "Guangzhou"],
//     correct: 0,
//     explanation:
//       "Kashgar in Xinjiang is an important northern point associated with CPEC.",
//   },
//   {
//     id: 37,
//     source: "Pakistan–China Relations",
//     question:
//       "Gwadar Port is located in which province?",
//     options: ["Balochistan", "Sindh", "Punjab", "Khyber Pakhtunkhwa"],
//     correct: 0,
//     explanation:
//       "Gwadar Port is located in Balochistan.",
//   },
//   {
//     id: 38,
//     source: "CPEC",
//     question:
//       "The second phase of CPEC is commonly associated with a greater emphasis on:",
//     options: [
//       "Industrialization and agriculture",
//       "Only military cooperation",
//       "Only tourism",
//       "Only sports",
//     ],
//     correct: 0,
//     explanation:
//       "CPEC 2.0 discussions emphasize industrial cooperation, agriculture, technology, Special Economic Zones and broader economic development.",
//   },
//   {
//     id: 39,
//     source: "CPEC",
//     question:
//       "SEZ in the context of CPEC stands for:",
//     options: [
//       "Special Economic Zone",
//       "Strategic Energy Zone",
//       "Special Export Zone",
//       "State Economic Zone",
//     ],
//     correct: 0,
//     explanation:
//       "SEZ stands for Special Economic Zone.",
//   },
//   {
//     id: 40,
//     source: "CPEC",
//     question:
//       "Which Pakistani port is a major component of CPEC connectivity?",
//     options: ["Gwadar", "Pasni", "Ormara", "Karachi"],
//     correct: 0,
//     explanation:
//       "Gwadar Port is a central component of CPEC connectivity.",
//   },

//   // ========================================================================
//   // SAUDI ARABIA, TÜRKİYE & GULF RELATIONS
//   // ========================================================================

//   {
//     id: 41,
//     source: "Gulf Relations",
//     question:
//       "Pakistan and Saudi Arabia signed a formal mutual defence agreement in:",
//     options:["2023", "2024", "2025", "2026"],
//     correct: 2,
//     explanation:
//       "Pakistan and Saudi Arabia signed the Strategic Mutual Defence Agreement in September 2025.",
//   },
//   {
//     id: 42,
//     source: "Gulf Relations",
//     question:
//       "The 2025 Pakistan–Saudi defence agreement was signed in which city?",
//     options: ["Riyadh", "Jeddah", "Islamabad", "Makkah"],
//     correct: 0,
//     explanation:
//       "The agreement was signed in Riyadh on 17 September 2025.",
//   },
//   {
//     id: 43,
//     source: "Gulf Relations",
//     question:
//       "The 2025 Pakistan–Saudi defence agreement states that an attack on one country would be considered:",
//     options: [
//       "An attack on both",
//       "A trade dispute",
//       "A UN matter only",
//       "A domestic issue",
//     ],
//     correct: 0,
//     explanation:
//       "The agreement provides for mutual defence cooperation and treats an attack on one as an attack on both.",
//   },
//   {
//     id: 44,
//     source: "Gulf Relations",
//     question:
//       "Which Saudi leader signed the defence agreement with Pakistan alongside Prime Minister Shehbaz Sharif?",
//     options: [
//       "Crown Prince Mohammed bin Salman",
//       "King Abdullah",
//       "King Faisal",
//       "Crown Prince Khalid bin Salman",
//     ],
//     correct: 0,
//     explanation:
//       "Crown Prince Mohammed bin Salman signed the agreement with Prime Minister Shehbaz Sharif.",
//   },
//   {
//     id: 45,
//     source: "Gulf Relations",
//     question:
//       "Pakistan's relationship with Saudi Arabia is important in the areas of defence, energy, investment and:",
//     options:["Employment", "Arctic research", "Space tourism", "Polar science"],
//     correct: 0,
//     explanation:
//       "Employment and remittances are also important dimensions of Pakistan–Saudi relations.",
//   },
//   {
//     id: 46,
//     source: "Gulf Relations",
//     question:
//       "Which country is Pakistan's important strategic partner in the Gulf and home to Makkah and Madinah?",
//     options: ["Saudi Arabia", "Oman", "Kuwait", "Bahrain"],
//     correct: 0,
//     explanation:
//       "Saudi Arabia hosts the two holiest cities of Islam, Makkah and Madinah.",
//   },
//   {
//     id: 47,
//     source: "Pakistan–Türkiye Relations",
//     question:
//       "Pakistan's long-standing strategic and cultural partner in Anatolia is:",
//     options: ["Türkiye", "Azerbaijan", "Qatar", "Egypt"],
//     correct: 0,
//     explanation:
//       "Türkiye is an important strategic and cultural partner of Pakistan.",
//   },
//   {
//     id: 48,
//     source: "Pakistan–Türkiye Relations",
//     question:
//       "The proposed Pakistan–Saudi Arabia–Türkiye defence cooperation is associated with:",
//     options: [
//       "Greater trilateral security cooperation",
//       "European Union membership",
//       "A currency union",
//       "A space agency",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan, Saudi Arabia and Türkiye have discussed deeper trilateral defence cooperation.",
//   },

//   // ========================================================================
//   // REGIONAL PEACE & INTERNATIONAL ORGANIZATIONS
//   // ========================================================================

//   {
//     id: 49,
//     source: "Regional Diplomacy",
//     question:
//       "Pakistan is a member of which regional organization with China, Russia and Central Asian states?",
//     options: [
//       "Shanghai Cooperation Organisation",
//       "European Union",
//       "ASEAN",
//       "African Union",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan is a member of the Shanghai Cooperation Organisation (SCO).",
//   },
//   {
//     id: 50,
//     source: "Regional Diplomacy",
//     question: "SCO stands for:",
//     options: [
//       "Shanghai Cooperation Organisation",
//       "South Cooperation Organisation",
//       "Strategic Central Organisation",
//       "Security Cooperation Office",
//     ],
//     correct: 0,
//     explanation:
//       "SCO stands for Shanghai Cooperation Organisation.",
//   },
//   {
//     id: 51,
//     source: "Regional Diplomacy",
//     question:
//       "Pakistan is a member of the Organisation of Islamic Cooperation, commonly abbreviated as:",
//     options: ["OIC", "IOC", "OPEC", "OECD"],
//     correct: 0,
//     explanation:
//       "OIC stands for Organisation of Islamic Cooperation.",
//   },
//   {
//     id: 52,
//     source: "Regional Diplomacy",
//     question:
//       "Pakistan has historically advocated dialogue as a means of resolving regional disputes, particularly regarding:",
//     options:[
//       "Kashmir",
//       "Antarctica",
//       "South America",
//       "Pacific Islands",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan consistently emphasizes a peaceful resolution of the Kashmir dispute.",
//   },
//   {
//     id: 53,
//     source: "Regional Diplomacy",
//     question:
//       "The headquarters of the Organisation of Islamic Cooperation is in:",
//     options:["Jeddah", "Islamabad", "Riyadh", "Cairo"],
//     correct: 0,
//     explanation:
//       "The OIC headquarters is located in Jeddah, Saudi Arabia.",
//   },

//   // ========================================================================
//   // ECONOMY & IMF
//   // ========================================================================

//   {
//     id: 54,
//     source: "Pakistan Economy",
//     question:
//       "Pakistan's 37-month IMF Extended Fund Facility was approved in:",
//     options:["2022", "2023", "2024", "2025"],
//     correct: 2,
//     explanation:
//       "The IMF approved Pakistan's 37-month EFF arrangement in September 2024.",
//   },
//   {
//     id: 55,
//     source: "Pakistan Economy",
//     question:
//       "EFF stands for:",
//     options: [
//       "Extended Fund Facility",
//       "Economic Finance Fund",
//       "External Finance Facility",
//       "Emergency Fiscal Framework",
//     ],
//     correct: 0,
//     explanation:
//       "EFF stands for Extended Fund Facility.",
//   },
//   {
//     id: 56,
//     source: "Pakistan Economy",
//     question:
//       "In May 2025, the IMF also approved Pakistan's arrangement under which facility?",
//     options: [
//       "Resilience and Sustainability Facility",
//       "Special Drawing Facility",
//       "Global Investment Facility",
//       "Emergency Growth Facility",
//     ],
//     correct: 0,
//     explanation:
//       "The IMF approved Pakistan's Resilience and Sustainability Facility (RSF) arrangement in May 2025.",
//   },
//   {
//     id: 57,
//     source: "Pakistan Economy",
//     question: "RSF stands for:",
//     options: [
//       "Resilience and Sustainability Facility",
//       "Regional Stabilization Fund",
//       "Revenue Support Facility",
//       "Reserve Stability Framework",
//     ],
//     correct: 0,
//     explanation:
//       "RSF stands for Resilience and Sustainability Facility.",
//   },
//   {
//     id: 58,
//     source: "Pakistan Economy",
//     question:
//       "Which institution conducts monetary policy in Pakistan?",
//     options: [
//       "State Bank of Pakistan",
//       "Federal Board of Revenue",
//       "Planning Commission",
//       "Ministry of Commerce",
//     ],
//     correct: 0,
//     explanation:
//       "The State Bank of Pakistan is the country's central bank and conducts monetary policy.",
//   },
//   {
//     id: 59,
//     source: "Pakistan Economy",
//     question:
//       "FBR stands for:",
//     options: [
//       "Federal Board of Revenue",
//       "Federal Banking Regulation",
//       "Finance Board of Pakistan",
//       "Federal Budget Review",
//     ],
//     correct: 0,
//     explanation:
//       "FBR stands for Federal Board of Revenue.",
//   },
//   {
//     id: 60,
//     source: "Pakistan Economy",
//     question:
//       "Which institution manages Pakistan's foreign exchange reserves and monetary policy?",
//     options: [
//       "State Bank of Pakistan",
//       "National Assembly",
//       "SECP",
//       "Planning Commission",
//     ],
//     correct: 0,
//     explanation:
//       "The State Bank of Pakistan manages monetary policy and official foreign exchange reserves.",
//   },
//   {
//     id: 61,
//     source: "Pakistan Economy",
//     question:
//       "The currency of Pakistan is:",
//     options: ["Rupee", "Dinar", "Riyal", "Taka"],
//     correct: 0,
//     explanation:
//       "Pakistan's currency is the Pakistani rupee.",
//   },
//   {
//     id: 62,
//     source: "Pakistan Economy",
//     question:
//       "Pakistan's largest export sector traditionally includes:",
//     options:[
//       "Textiles",
//       "Aircraft",
//       "Automobiles",
//       "Crude oil",
//     ],
//     correct: 0,
//     explanation:
//       "Textiles and textile products form a major part of Pakistan's exports.",
//   },
//   {
//     id: 63,
//     source: "Pakistan Economy",
//     question:
//       "Remittances are money sent to Pakistan mainly by:",
//     options:[
//       "Overseas Pakistanis",
//       "Foreign tourists",
//       "Local farmers",
//       "Domestic banks",
//     ],
//     correct: 0,
//     explanation:
//       "Remittances are funds sent home by Pakistanis working or living abroad.",
//   },

//   // ========================================================================
//   // DEFENCE & MILITARY DEVELOPMENTS
//   // ========================================================================

//   {
//     id: 64,
//     source: "Defence",
//     question:
//       "Who is the current Chief of Army Staff and Chief of Defence Forces of Pakistan?",
//     options: [
//       "Field Marshal Syed Asim Munir",
//       "General Qamar Javed Bajwa",
//       "General Raheel Sharif",
//       "General Ashfaq Parvez Kayani",
//     ],
//     correct: 0,
//     explanation:
//       "Field Marshal Syed Asim Munir serves as Chief of Army Staff and concurrently as Chief of Defence Forces.",
//   },
//   {
//     id: 65,
//     source: "Defence",
//     question:
//       "Who is the current Chief of Air Staff of the Pakistan Air Force?",
//     options: [
//       "Air Chief Marshal Zaheer Ahmad Babar Sidhu",
//       "Air Chief Marshal Mujahid Anwar Khan",
//       "Air Marshal Sohail Aman",
//       "Air Chief Marshal Tahir Rafique Butt",
//     ],
//     correct: 0,
//     explanation:
//       "Air Chief Marshal Zaheer Ahmad Babar Sidhu is the Chief of Air Staff.",
//   },
//   {
//     id: 66,
//     source: "Defence",
//     question:
//       "Who is the current Chief of Naval Staff of Pakistan?",
//     options: [
//       "Admiral Naveed Ashraf",
//       "Admiral Zafar Mahmood Abbasi",
//       "Admiral Muhammad Amjad Khan Niazi",
//       "Admiral Asif Sandila",
//     ],
//     correct: 0,
//     explanation:
//       "Admiral Naveed Ashraf is the Chief of Naval Staff.",
//   },
//   {
//     id: 67,
//     source: "Defence",
//     question:
//       "The Chief of Defence Forces position was concurrently assigned to the Chief of Army Staff in:",
//     options:["2023", "2024", "2025", "2026"],
//     correct: 2,
//     explanation:
//       "President Asif Ali Zardari approved the appointment of Field Marshal Asim Munir as Chief of Defence Forces in December 2025.",
//   },
//   {
//     id: 68,
//     source: "Defence",
//     question:
//       "Which branch of Pakistan's armed forces operates JF-17 Thunder aircraft?",
//     options:[
//       "Pakistan Air Force",
//       "Pakistan Navy",
//       "Pakistan Army",
//       "Pakistan Coast Guards",
//     ],
//     correct: 0,
//     explanation:
//       "The JF-17 Thunder is operated by the Pakistan Air Force.",
//   },
//   {
//     id: 69,
//     source: "Defence",
//     question:
//       "Which country is a major partner of Pakistan in JF-17 development?",
//     options:["China", "Turkey", "Saudi Arabia", "Iran"],
//     correct: 0,
//     explanation:
//       "The JF-17 was jointly developed by Pakistan and China.",
//   },
//   {
//     id: 70,
//     source: "Defence",
//     question:
//       "PNS Khaibar is associated with which service?",
//     options:[
//       "Pakistan Navy",
//       "Pakistan Air Force",
//       "Pakistan Army",
//       "Pakistan Rangers",
//     ],
//     correct: 0,
//     explanation:
//       "PNS Khaibar is a Pakistan Navy vessel and was inducted into the fleet in 2026.",
//   },

//   // ========================================================================
//   // SPACE PROGRAMME & SUPARCO
//   // ========================================================================

//   {
//     id: 71,
//     source: "Space Programme",
//     question: "SUPARCO stands for:",
//     options: [
//       "Space and Upper Atmosphere Research Commission",
//       "Supreme Pakistan Research Council",
//       "Space Utility and Research Corporation",
//       "Scientific Pakistan Research Commission",
//     ],
//     correct: 0,
//     explanation:
//       "SUPARCO stands for Space and Upper Atmosphere Research Commission.",
//   },
//   {
//     id: 72,
//     source: "Space Programme",
//     question:
//       "SUPARCO is Pakistan's national organization responsible for:",
//     options:[
//       "Space and upper-atmosphere research",
//       "Railway operations",
//       "Defence procurement only",
//       "Foreign exchange management",
//     ],
//     correct: 0,
//     explanation:
//       "SUPARCO is Pakistan's national space research and development organization.",
//   },
//   {
//     id: 73,
//     source: "Space Programme",
//     question:
//       "Which Pakistani satellite is associated with remote sensing and Earth observation?",
//     options:[
//       "PRSS-1",
//       "Badr-1",
//       "PAKSAT-1R",
//       "GPS-1",
//     ],
//     correct: 0,
//     explanation:
//       "PRSS-1 is a Pakistan Remote Sensing Satellite used for Earth observation and related applications.",
//   },
//   {
//     id: 74,
//     source: "Space Programme",
//     question:
//       "Pakistan's first satellite was called:",
//     options:[
//       "Badr-1",
//       "PRSS-1",
//       "PAKSAT-1R",
//       "PakSat-2",
//     ],
//     correct: 0,
//     explanation:
//       "Badr-1 was Pakistan's first satellite.",
//   },
//   {
//     id: 75,
//     source: "Space Programme",
//     question:
//       "Pakistan's space cooperation with China includes satellite development and:",
//     options:[
//       "Lunar exploration",
//       "Arctic exploration",
//       "Deep-sea oil drilling",
//       "European space membership",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan and China cooperate in space science and satellite programmes, including lunar exploration initiatives.",
//   },

//   // ========================================================================
//   // CURRENT NATIONAL LEADERSHIP
//   // ========================================================================

//   {
//     id: 76,
//     source: "Current Leadership",
//     question: "Who is the current President of Pakistan?",
//     options: [
//       "Asif Ali Zardari",
//       "Arif Alvi",
//       "Mamnoon Hussain",
//       "Sadiq Sanjrani",
//     ],
//     correct: 0,
//     explanation:
//       "Asif Ali Zardari is the President of Pakistan.",
//   },
//   {
//     id: 77,
//     source: "Current Leadership",
//     question: "Who is the current Prime Minister of Pakistan?",
//     options: [
//       "Shehbaz Sharif",
//       "Anwaar-ul-Haq Kakar",
//       "Imran Khan",
//       "Shahid Khaqan Abbasi",
//     ],
//     correct: 0,
//     explanation:
//       "Mian Muhammad Shehbaz Sharif is the Prime Minister of Pakistan.",
//   },
//   {
//     id: 78,
//     source: "Current Leadership",
//     question:
//       "Who is the current Chief Minister of Punjab?",
//     options: [
//       "Maryam Nawaz Sharif",
//       "Usman Buzdar",
//       "Hamza Shahbaz",
//       "Parvez Elahi",
//     ],
//     correct: 0,
//     explanation:
//       "Maryam Nawaz Sharif is the current Chief Minister of Punjab.",
//   },
//   {
//     id: 79,
//     source: "Current Leadership",
//     question:
//       "Who is the current Chief Minister of Sindh?",
//     options: [
//       "Murad Ali Shah",
//       "Qaim Ali Shah",
//       "Sharjeel Memon",
//       "Kamran Tessori",
//     ],
//     correct: 0,
//     explanation:
//       "Syed Murad Ali Shah is the current Chief Minister of Sindh.",
//   },
//   {
//     id: 80,
//     source: "Current Leadership",
//     question:
//       "Who is the current Chief Minister of Khyber Pakhtunkhwa?",
//     options: [
//       "Muhammad Sohail Afridi",
//       "Ali Amin Gandapur",
//       "Pervez Khattak",
//       "Mahmood Khan",
//     ],
//     correct: 0,
//     explanation:
//       "Muhammad Sohail Afridi is the current Chief Minister of Khyber Pakhtunkhwa.",
//   },
//   {
//     id: 81,
//     source: "Current Leadership",
//     question:
//       "Who is the current Chief Minister of Balochistan?",
//     options: [
//       "Sarfraz Bugti",
//       "Abdul Quddus Bizenjo",
//       "Jam Kamal Khan",
//       "Mir Abdul Malik Baloch",
//     ],
//     correct: 0,
//     explanation:
//       "Mir Sarfraz Bugti is the current Chief Minister of Balochistan.",
//   },
//   {
//     id: 82,
//     source: "Current Leadership",
//     question:
//       "Who is Pakistan's current Federal Minister for Defence?",
//     options: [
//       "Khawaja Muhammad Asif",
//       "Mohsin Naqvi",
//       "Ishaq Dar",
//       "Ahsan Iqbal",
//     ],
//     correct: 0,
//     explanation:
//       "Khawaja Muhammad Asif is the Federal Minister for Defence.",
//   },
//   {
//     id: 83,
//     source: "Current Leadership",
//     question:
//       "Who is Pakistan's current Federal Minister for Foreign Affairs?",
//     options: [
//       "Ishaq Dar",
//       "Bilawal Bhutto Zardari",
//       "Khawaja Asif",
//       "Ahsan Iqbal",
//     ],
//     correct: 0,
//     explanation:
//       "Muhammad Ishaq Dar is the Federal Minister for Foreign Affairs and Deputy Prime Minister.",
//   },
//   {
//     id: 84,
//     source: "Current Leadership",
//     question:
//       "Who is Pakistan's current Federal Minister for Interior and Narcotics Control?",
//     options: [
//       "Mohsin Naqvi",
//       "Attaullah Tarar",
//       "Azam Nazeer Tarar",
//       "Rana Tanveer Hussain",
//     ],
//     correct: 0,
//     explanation:
//       "Mohsin Naqvi is the Federal Minister for Interior and Narcotics Control.",
//   },
//   {
//     id: 85,
//     source: "Current Leadership",
//     question:
//       "Who is Pakistan's current Federal Minister for Federal Education and Professional Training?",
//     options: [
//       "Khalid Maqbool Siddiqui",
//       "Ahsan Iqbal",
//       "Shaza Fatima Khawaja",
//       "Rana Tanveer Hussain",
//     ],
//     correct: 0,
//     explanation:
//       "Dr. Khalid Maqbool Siddiqui holds the Federal Education and Professional Training portfolio.",
//   },
//   {
//     id: 86,
//     source: "Current Leadership",
//     question:
//       "Who holds Pakistan's Federal Information Technology and Telecommunication portfolio?",
//     options: [
//       "Shaza Fatima Khawaja",
//       "Attaullah Tarar",
//       "Khalid Maqbool Siddiqui",
//       "Ahsan Iqbal",
//     ],
//     correct: 0,
//     explanation:
//       "Shaza Fatima Khawaja holds the Information Technology and Telecommunication portfolio.",
//   },
//   {
//     id: 87,
//     source: "Current Leadership",
//     question:
//       "Who is Pakistan's current Federal Minister for Finance and Revenue?",
//     options: [
//       "Muhammad Aurangzeb",
//       "Ishaq Dar",
//       "Ahsan Iqbal",
//       "Abdul Aleem Khan",
//     ],
//     correct: 0,
//     explanation:
//       "Muhammad Aurangzeb is the Federal Minister for Finance and Revenue.",
//   },
//   {
//     id: 88,
//     source: "Current Leadership",
//     question:
//       "Who is the current Chief Election Commissioner of Pakistan?",
//     options: [
//       "Sikandar Sultan Raja",
//       "Fakhruddin G. Ebrahim",
//       "Justice Nasir-ul-Mulk",
//       "Sardar Raza",
//     ],
//     correct: 0,
//     explanation:
//       "Sikandar Sultan Raja is the Chief Election Commissioner of Pakistan.",
//   },

//   // ========================================================================
//   // CONSTITUTIONAL & LEGISLATIVE DEVELOPMENTS
//   // ========================================================================

//   {
//     id: 89,
//     source: "Constitution & Legislation",
//     question:
//       "The Constitution currently in force in Pakistan was adopted in:",
//     options:["1956", "1962", "1973", "1985"],
//     correct: 2,
//     explanation:
//       "The Constitution of the Islamic Republic of Pakistan was adopted in 1973.",
//   },
//   {
//     id: 90,
//     source: "Constitution & Legislation",
//     question:
//       "Pakistan's Parliament consists of the National Assembly and:",
//     options:["Senate", "Supreme Court", "Cabinet", "Election Commission"],
//     correct: 0,
//     explanation:
//       "Pakistan's Parliament is bicameral, consisting of the National Assembly and Senate.",
//   },
//   {
//     id: 91,
//     source: "Constitution & Legislation",
//     question:
//       "The 26th Constitutional Amendment of Pakistan was passed in:",
//     options:["2022", "2023", "2024", "2025"],
//     correct: 2,
//     explanation:
//       "Pakistan's 26th Constitutional Amendment was enacted in 2024 and included changes concerning the judiciary and constitutional procedures.",
//   },
//   {
//     id: 92,
//     source: "Constitution & Legislation",
//     question:
//       "The constitutional head of state of Pakistan is the:",
//     options:["President", "Prime Minister", "Chief Justice", "Army Chief"],
//     correct: 0,
//     explanation:
//       "The President is the constitutional head of state, while the Prime Minister is the head of government.",
//   },
//   {
//     id: 93,
//     source: "Constitution & Legislation",
//     question:
//       "The head of government in Pakistan is the:",
//     options:["Prime Minister", "President", "Senate Chairman", "Chief Justice"],
//     correct: 0,
//     explanation:
//       "The Prime Minister is the head of government.",
//   },
//   {
//     id: 94,
//     source: "Constitution & Legislation",
//     question:
//       "Which institution conducts Pakistan's general elections?",
//     options:[
//       "Election Commission of Pakistan",
//       "Supreme Court",
//       "Senate",
//       "Cabinet Division",
//     ],
//     correct: 0,
//     explanation:
//       "The Election Commission of Pakistan is constitutionally responsible for conducting elections.",
//   },

//   // ========================================================================
//   // NATIONAL PROJECTS & INFRASTRUCTURE
//   // ========================================================================

//   {
//     id: 95,
//     source: "National Projects",
//     question:
//       "The Diamer-Bhasha Dam is being constructed on which river?",
//     options:["Indus", "Jhelum", "Chenab", "Ravi"],
//     correct: 0,
//     explanation:
//       "Diamer-Bhasha Dam is being constructed on the Indus River.",
//   },
//   {
//     id: 96,
//     source: "National Projects",
//     question:
//       "Mohmand Dam is located in which province?",
//     options:[
//       "Khyber Pakhtunkhwa",
//       "Punjab",
//       "Sindh",
//       "Balochistan",
//     ],
//     correct: 0,
//     explanation:
//       "Mohmand Dam is being developed in Khyber Pakhtunkhwa.",
//   },
//   {
//     id: 97,
//     source: "National Projects",
//     question:
//       "Which major transport project links Pakistan's northern areas with the country's southern regions through CPEC?",
//     options:[
//       "CPEC road and rail network",
//       "Karachi Circular Railway only",
//       "Lahore Metro only",
//       "Gwadar Airport only",
//     ],
//     correct: 0,
//     explanation:
//       "CPEC includes road, rail and other connectivity infrastructure linking different parts of Pakistan.",
//   },
//   {
//     id: 98,
//     source: "National Projects",
//     question:
//       "Which motorway is commonly known as the Islamabad–Lahore Motorway?",
//     options:["M-2", "M-1", "M-3", "M-5"],
//     correct: 0,
//     explanation:
//       "The M-2 connects Islamabad and Lahore.",
//   },
//   {
//     id: 99,
//     source: "National Projects",
//     question:
//       "Which major Pakistani port is located near Karachi?",
//     options:[
//       "Port Qasim",
//       "Gwadar Port",
//       "Chabahar Port",
//       "Ormara Port",
//     ],
//     correct: 0,
//     explanation:
//       "Port Qasim is located near Karachi in Sindh.",
//   },

//   // ========================================================================
//   // INTERNATIONAL ACHIEVEMENTS & NATIONAL EVENTS
//   // ========================================================================

//   {
//     id: 100,
//     source: "National Achievements",
//     question:
//       "Which Pakistani athlete won Olympic gold in javelin at the Paris 2024 Olympics?",
//     options:[
//       "Arshad Nadeem",
//       "Babar Azam",
//       "Jahangeer Khan",
//       "Naseem Shah",
//     ],
//     correct: 0,
//     explanation:
//       "Arshad Nadeem won Pakistan's first individual Olympic gold medal in athletics at Paris 2024.",
//   },
//   {
//     id: 101,
//     source: "National Achievements",
//     question:
//       "Arshad Nadeem won his Olympic gold medal in which event?",
//     options:[
//       "Javelin throw",
//       "Shot put",
//       "Discus throw",
//       "Hammer throw",
//     ],
//     correct: 0,
//     explanation:
//       "Arshad Nadeem won the men's javelin throw at the Paris 2024 Olympics.",
//   },
//   {
//     id: 102,
//     source: "National Events",
//     question:
//       "Pakistan Day is observed on:",
//     options:["23 March", "14 August", "6 September", "25 December"],
//     correct: 0,
//     explanation:
//       "Pakistan Day is observed on 23 March.",
//   },
//   {
//     id: 103,
//     source: "National Events",
//     question:
//       "Pakistan Independence Day is observed on:",
//     options:["14 August", "23 March", "6 September", "25 December"],
//     correct: 0,
//     explanation:
//       "Pakistan celebrates Independence Day on 14 August.",
//   },
//   {
//     id: 104,
//     source: "National Events",
//     question:
//       "Defence Day of Pakistan is observed on:",
//     options:["6 September", "14 August", "23 March", "28 May"],
//     correct: 0,
//     explanation:
//       "Defence Day is observed on 6 September.",
//   },
//   {
//     id: 105,
//     source: "National Events",
//     question:
//       "Youm-e-Takbeer is observed on:",
//     options:["28 May", "6 September", "14 August", "23 March"],
//     correct: 0,
//     explanation:
//       "Youm-e-Takbeer is observed on 28 May, commemorating Pakistan's nuclear tests in 1998.",
//   },
//   {
//     id: 106,
//     source: "National Events",
//     question:
//       "Pakistan conducted its nuclear tests in 1998 at:",
//     options:[
//       "Chagai",
//       "Kahuta",
//       "Islamabad",
//       "Multan",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan conducted its nuclear tests in the Chagai area of Balochistan in May 1998.",
//   },

//   // ========================================================================
//   // IMPORTANT NATIONAL INSTITUTIONS
//   // ========================================================================

//   {
//     id: 107,
//     source: "National Institutions",
//     question:
//       "The headquarters of Pakistan's National Assembly is located in:",
//     options:["Islamabad", "Lahore", "Karachi", "Peshawar"],
//     correct: 0,
//     explanation:
//       "The National Assembly is located in Islamabad.",
//   },
//   {
//     id: 108,
//     source: "National Institutions",
//     question:
//       "The Supreme Court of Pakistan is headquartered in:",
//     options:["Islamabad", "Lahore", "Karachi", "Rawalpindi"],
//     correct: 0,
//     explanation:
//       "The Supreme Court of Pakistan is headquartered in Islamabad.",
//   },
//   {
//     id: 109,
//     source: "National Institutions",
//     question:
//       "Pakistan's main intelligence agency is commonly known as:",
//     options:[
//       "Inter-Services Intelligence",
//       "Federal Investigation Agency",
//       "Intelligence Bureau",
//       "National Accountability Bureau",
//     ],
//     correct: 0,
//     explanation:
//       "Inter-Services Intelligence is commonly abbreviated as ISI.",
//   },
//   {
//     id: 110,
//     source: "National Institutions",
//     question:
//       "FIA stands for:",
//     options:[
//       "Federal Investigation Agency",
//       "Federal Intelligence Authority",
//       "Foreign Investigation Agency",
//       "Federal Internal Administration",
//     ],
//     correct: 0,
//     explanation:
//       "FIA stands for Federal Investigation Agency.",
//   },

//   // ========================================================================
//   // MIXED CURRENT PAKISTAN AFFAIRS
//   // ========================================================================

//   {
//     id: 111,
//     source: "Current Pakistan Affairs",
//     question:
//       "Which city is the federal capital of Pakistan?",
//     options:["Islamabad", "Karachi", "Lahore", "Rawalpindi"],
//     correct: 0,
//     explanation:
//       "Islamabad is Pakistan's federal capital.",
//   },
//   {
//     id: 112,
//     source: "Current Pakistan Affairs",
//     question:
//       "Which province is the largest by area?",
//     options:[
//       "Balochistan",
//       "Punjab",
//       "Sindh",
//       "Khyber Pakhtunkhwa",
//     ],
//     correct: 0,
//     explanation:
//       "Balochistan is Pakistan's largest province by area.",
//   },
//   {
//     id: 113,
//     source: "Current Pakistan Affairs",
//     question:
//       "Which province has the largest population?",
//     options:[
//       "Punjab",
//       "Sindh",
//       "Khyber Pakhtunkhwa",
//       "Balochistan",
//     ],
//     correct: 0,
//     explanation:
//       "Punjab is Pakistan's most populous province.",
//   },
//   {
//     id: 114,
//     source: "Current Pakistan Affairs",
//     question:
//       "Which sea lies south of Pakistan?",
//     options:[
//       "Arabian Sea",
//       "Red Sea",
//       "Caspian Sea",
//       "Black Sea",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan has a coastline along the Arabian Sea.",
//   },
//   {
//     id: 115,
//     source: "Current Pakistan Affairs",
//     question:
//       "Which mountain range contains K2?",
//     options:[
//       "Karakoram",
//       "Himalayas",
//       "Hindu Kush",
//       "Sulaiman Range",
//     ],
//     correct: 0,
//     explanation:
//       "K2 is located in the Karakoram mountain range.",
//   },
//   {
//     id: 116,
//     source: "Current Pakistan Affairs",
//     question:
//       "Pakistan's highest mountain is:",
//     options:["K2", "Nanga Parbat", "Tirich Mir", "Broad Peak"],
//     correct: 0,
//     explanation:
//       "K2, at 8,611 metres, is Pakistan's highest mountain.",
//   },
//   {
//     id: 117,
//     source: "Current Pakistan Affairs",
//     question:
//       "Which river is the largest river of Pakistan?",
//     options:["Indus", "Jhelum", "Chenab", "Ravi"],
//     correct: 0,
//     explanation:
//       "The Indus is Pakistan's principal and largest river system.",
//   },
//   {
//     id: 118,
//     source: "Current Pakistan Affairs",
//     question:
//       "Which city is Pakistan's largest by population and an important financial centre?",
//     options:["Karachi", "Lahore", "Islamabad", "Peshawar"],
//     correct: 0,
//     explanation:
//       "Karachi is Pakistan's largest city and a major financial and commercial centre.",
//   },
//   {
//     id: 119,
//     source: "Current Pakistan Affairs",
//     question:
//       "Which organization is responsible for Pakistan's national space programme?",
//     options:[
//       "SUPARCO",
//       "NESPAK",
//       "PAEC",
//       "PCSIR",
//     ],
//     correct: 0,
//     explanation:
//       "SUPARCO is Pakistan's national space research and development organization.",
//   },
//   {
//     id: 120,
//     source: "Current Pakistan Affairs",
//     question:
//       "Which city is the headquarters of the Pakistan Army?",
//     options:[
//       "Rawalpindi",
//       "Islamabad",
//       "Lahore",
//       "Peshawar",
//     ],
//     correct: 0,
//     explanation:
//       "General Headquarters (GHQ) of the Pakistan Army is located in Rawalpindi.",
//   },
// ];
const questionBank = [

  // ========================================================================
  // PAKISTAN–INDIA 2025 CONFLICT
  // ========================================================================

  {
    id: 1,
    source: "Pakistan–India 2025 Conflict",
    question: "The Pahalgam attack of April 2025 took place in which region?",
    options: ["Punjab", "Jammu and Kashmir", "Sindh", "Balochistan"],
    correct: 1,
    explanation:
      "The attack occurred in Pahalgam in Indian-administered Jammu and Kashmir on 22 April 2025.",
  },

  {
    id: 2,
    source: "Pakistan–India 2025 Conflict",
    question: "On what date did the Pahalgam attack occur?",
    options: ["1 May 2025", "7 May 2025", "22 April 2025", "10 May 2025"],
    correct: 2,
    explanation:
      "The Pahalgam attack occurred on 22 April 2025.",
  },

  {
    id: 3,
    source: "Pakistan–India 2025 Conflict",
    question:
      "How many people were reported killed in the Pahalgam attack?",
    options: ["16", "36", "22", "26"],
    correct: 3,
    explanation:
      "The attack killed 26 people according to widely reported accounts.",
  },

  {
    id: 4,
    source: "Pakistan–India 2025 Conflict",
    question:
      "Which country did India blame for supporting the militants responsible for the Pahalgam attack?",
    options: ["Iran", "China", "Afghanistan", "Pakistan"],
    correct: 3,
    explanation:
      "India blamed Pakistan for supporting the attackers. Pakistan denied involvement.",
  },

  {
    id: 5,
    source: "Pakistan–India 2025 Conflict",
    question:
      "What was the name given by India to its military operation launched in May 2025?",
    options: [
      "Operation Meghdoot",
      "Operation Sindoor",
      "Operation Vijay",
      "Operation Shakti",
    ],
    correct: 1,
    explanation:
      "India named its May 2025 military strikes Operation Sindoor.",
  },

  {
    id: 6,
    source: "Pakistan–India 2025 Conflict",
    question: "Operation Sindoor began on:",
    options: ["1 May 2025", "10 May 2025", "14 May 2025", "7 May 2025"],
    correct: 3,
    explanation:
      "India launched Operation Sindoor on 7 May 2025.",
  },

  {
    id: 7,
    source: "Pakistan–India 2025 Conflict",
    question:
      "Pakistan's military response to the May 2025 escalation was named:",
    options: [
      "Operation Zarb-e-Azb",
      "Operation Rah-e-Nijat",
      "Operation Bunyan-un-Marsoos",
      "Operation Swift Retort",
    ],
    correct: 2,
    explanation:
      "Pakistan named its military response Operation Bunyan-un-Marsoos.",
  },

  {
    id: 8,
    source: "Pakistan–India 2025 Conflict",
    question:
      "The May 2025 Pakistan–India conflict is also referred to in Pakistan as:",
    options: [
      "Marka-e-Badr",
      "Operation Gibraltar",
      "Operation Koh-e-Paima",
      "Marka-e-Haq",
    ],
    correct: 3,
    explanation:
      "Marka-e-Haq became a term used in Pakistan for the May 2025 conflict.",
  },

  {
    id: 9,
    source: "Pakistan–India 2025 Conflict",
    question:
      "The 2025 India–Pakistan conflict involved two nuclear-armed states. Which two?",
    options: [
      "Pakistan and Iran",
      "India and China",
      "Pakistan and Afghanistan",
      "Pakistan and India",
    ],
    correct: 3,
    explanation:
      "Pakistan and India are both nuclear-armed states.",
  },

  {
    id: 10,
    source: "Pakistan–India 2025 Conflict",
    question:
      "The 2025 India–Pakistan ceasefire was announced on:",
    options: ["9 May 2025", "10 May 2025", "15 May 2025", "7 May 2025"],
    correct: 1,
    explanation:
      "The ceasefire was announced on 10 May 2025 after several days of military escalation.",
  },

  // ========================================================================
  // CEASEFIRE & DIPLOMACY
  // ========================================================================

  {
    id: 11,
    source: "Ceasefire & Diplomacy",
    question:
      "Which country played a significant diplomatic role in helping facilitate the May 2025 India–Pakistan ceasefire?",
    options: ["Brazil", "Japan", "United States", "South Africa"],
    correct: 2,
    explanation:
      "The United States conducted high-level diplomatic contacts during the crisis and helped push both sides toward de-escalation.",
  },

  {
    id: 12,
    source: "Ceasefire & Diplomacy",
    question:
      "Which military communication channel was restored during the ceasefire process?",
    options: [
      "Naval War College",
      "Air Chiefs Council",
      "Border Security Committee",
      "Directors General of Military Operations",
    ],
    correct: 3,
    explanation:
      "The Directors General of Military Operations of Pakistan and India resumed communication during the de-escalation process.",
  },

  {
    id: 13,
    source: "Ceasefire & Diplomacy",
    question:
      "The 2025 India–Pakistan crisis increased international concern primarily because both countries possess:",
    options: [
      "Aircraft carriers",
      "Space stations",
      "Chemical weapons",
      "Nuclear weapons",
    ],
    correct: 3,
    explanation:
      "Both Pakistan and India possess nuclear weapons, making escalation particularly significant.",
  },

  {
    id: 14,
    source: "Ceasefire & Diplomacy",
    question:
      "The main purpose of a ceasefire is to:",
    options: [
      "End all diplomatic relations",
      "Cancel international treaties",
      "Close all borders permanently",
      "Stop active hostilities",
    ],
    correct: 3,
    explanation:
      "A ceasefire is an agreement or understanding to stop active fighting.",
  },

  {
    id: 15,
    source: "Ceasefire & Diplomacy",
    question:
      "Which organization is headquartered in New York and frequently involved in international peace and security matters?",
    options: [
      "SAARC Secretariat",
      "OIC Secretariat",
      "SCO Secretariat",
      "United Nations",
    ],
    correct: 3,
    explanation:
      "The United Nations headquarters is in New York and the organization deals extensively with international peace and security.",
  },

  // ========================================================================
  // INDUS WATERS TREATY
  // ========================================================================

  {
    id: 16,
    source: "Indus Waters Treaty",
    question: "The Indus Waters Treaty was signed in:",
    options: ["1948", "1956", "1971", "1960"],
    correct: 3,
    explanation:
      "The Indus Waters Treaty was signed in 1960.",
  },

  {
    id: 17,
    source: "Indus Waters Treaty",
    question:
      "The Indus Waters Treaty was brokered with the involvement of which institution?",
    options: [
      "IMF",
      "Asian Development Bank",
      "United Nations",
      "World Bank",
    ],
    correct: 3,
    explanation:
      "The World Bank played a key role in brokering the Indus Waters Treaty.",
  },

  {
    id: 18,
    source: "Indus Waters Treaty",
    question:
      "Which three rivers are generally allocated to Pakistan under the Indus Waters Treaty?",
    options: [
      "Ravi, Beas and Sutlej",
      "Ganges, Yamuna and Ravi",
      "Chenab, Ravi and Sutlej",
      "Indus, Jhelum and Chenab",
    ],
    correct: 3,
    explanation:
      "The treaty allocates the western rivers—Indus, Jhelum and Chenab—to Pakistan, subject to treaty provisions.",
  },

  {
    id: 19,
    source: "Indus Waters Treaty",
    question:
      "Which three rivers are generally allocated to India under the treaty?",
    options: [
      "Indus, Jhelum and Chenab",
      "Chenab, Ravi and Jhelum",
      "Indus, Ravi and Sutlej",
      "Ravi, Beas and Sutlej",
    ],
    correct: 3,
    explanation:
      "The eastern rivers—Ravi, Beas and Sutlej—are allocated to India under the treaty.",
  },

  {
    id: 20,
    source: "Indus Waters Treaty",
    question:
      "Why is the Indus Waters Treaty particularly important for Pakistan?",
    options: [
      "Oil production",
      "Gold mining",
      "Air defence",
      "Agriculture and water security",
    ],
    correct: 3,
    explanation:
      "Pakistan depends heavily on the Indus River system for agriculture, drinking water and hydropower.",
  },

  {
    id: 21,
    source: "Indus Waters Treaty",
    question:
      "In April 2025, India announced suspension of its participation in which treaty?",
    options: [
      "Tashkent Agreement",
      "Simla Agreement",
      "Lahore Declaration",
      "Indus Waters Treaty",
    ],
    correct: 3,
    explanation:
      "India announced that it was putting the Indus Waters Treaty in abeyance after the Pahalgam attack.",
  },

  {
    id: 22,
    source: "Indus Waters Treaty",
    question:
      "Which Pakistani institution traditionally deals with international water matters involving the Indus system?",
    options: [
      "Election Commission",
      "State Bank",
      "Federal Board of Revenue",
      "Indus Waters Commission",
    ],
    correct: 3,
    explanation:
      "The Permanent Indus Commission is the bilateral mechanism established under the treaty.",
  },

  // ========================================================================
  // ISLAMABAD TALKS & REGIONAL DIPLOMACY
  // ========================================================================

  {
    id: 23,
    source: "Regional Diplomacy",
    question:
      "Islamabad is the capital of which country?",
    options: ["Afghanistan", "Iran", "Uzbekistan", "Pakistan"],
    correct: 3,
    explanation:
      "Islamabad is the federal capital of Pakistan.",
  },

  {
    id: 24,
    source: "Regional Diplomacy",
    question:
      "Pakistan's diplomatic engagement with Afghanistan has focused heavily on:",
    options: [
      "Space tourism",
      "Nuclear energy exports",
      "Arctic research",
      "Border security and militancy",
    ],
    correct: 3,
    explanation:
      "Border security, terrorism, trade and cross-border movement are major issues in Pakistan–Afghanistan relations.",
  },

  {
    id: 25,
    source: "Regional Diplomacy",
    question:
      "The Durand Line is associated with the border between Pakistan and:",
    options: ["Iran", "India", "China", "Afghanistan"],
    correct: 3,
    explanation:
      "The Durand Line refers to the internationally recognized Afghanistan–Pakistan border, although its status is disputed by successive Afghan governments.",
  },

  {
    id: 26,
    source: "Regional Diplomacy",
    question:
      "Pakistan has repeatedly raised which security concern in relation to Afghanistan?",
    options: [
      "Arctic piracy",
      "Atlantic shipping",
      "South American terrorism",
      "TTP militancy",
    ],
    correct: 3,
    explanation:
      "Pakistan has repeatedly raised concerns about Tehreek-e-Taliban Pakistan and cross-border militancy.",
  },

  {
    id: 27,
    source: "Regional Diplomacy",
    question:
      "Pakistan shares a border with Afghanistan, Iran, China and:",
    options: ["Nepal", "Bangladesh", "Tajikistan", "India"],
    correct: 3,
    explanation:
      "Pakistan has land borders with Afghanistan, Iran, China and India.",
  },

  // ========================================================================
  // PAKISTAN–IRAN
  // ========================================================================

  {
    id: 28,
    source: "Pakistan–Iran Relations",
    question:
      "Pakistan shares its western border with which country?",
    options: ["Turkey", "Iraq", "Tajikistan", "Iran"],
    correct: 3,
    explanation:
      "Iran shares Pakistan's southwestern border.",
  },

  {
    id: 29,
    source: "Pakistan–Iran Relations",
    question:
      "The Pakistan–Iran border is also known as:",
    options: [
      "Durand Line",
      "Radcliffe Line",
      "McMahon Line",
      "Goldsmid Line",
    ],
    correct: 3,
    explanation:
      "The Pakistan–Iran boundary is commonly associated with the Goldsmid Line.",
  },

  {
    id: 30,
    source: "Pakistan–Iran Relations",
    question:
      "Which Pakistani province borders Iran?",
    options: ["Sindh", "Punjab", "Khyber Pakhtunkhwa", "Balochistan"],
    correct: 3,
    explanation:
      "Pakistan's Balochistan province shares a border with Iran.",
  },

  {
    id: 31,
    source: "Pakistan–Iran Relations",
    question:
      "Which important Pakistani port lies in Balochistan near the Arabian Sea?",
    options: ["Karachi Port", "Port Qasim", "Ormara", "Gwadar"],
    correct: 3,
    explanation:
      "Gwadar Port is located in Balochistan on the Arabian Sea.",
  },

  {
    id: 32,
    source: "Pakistan–Iran Relations",
    question:
      "Pakistan and Iran share interests in security, trade and:",
    options: [
      "Arctic navigation",
      "Pacific islands",
      "European Union membership",
      "Border management",
    ],
    correct: 3,
    explanation:
      "Border management, security, trade and regional connectivity are important areas of Pakistan–Iran relations.",
  },

  // ========================================================================
  // PAKISTAN–CHINA & CPEC
  // ========================================================================

  {
    id: 33,
    source: "Pakistan–China Relations",
    question:
      "Pakistan and China commonly describe their bilateral relationship as:",
    options: [
      "Temporary economic partnership",
      "Neutral partnership",
      "Limited cultural partnership",
      "All-weather strategic cooperative partnership",
    ],
    correct: 3,
    explanation:
      "Pakistan and China frequently describe their relationship as an all-weather strategic cooperative partnership.",
  },

  {
    id: 34,
    source: "Pakistan–China Relations",
    question: "CPEC stands for:",
    options: [
      "China-Pakistan Energy Council",
      "Central Pakistan Economic Corridor",
      "China-Pakistan Export Commission",
      "China-Pakistan Economic Corridor",
    ],
    correct: 3,
    explanation:
      "CPEC stands for China-Pakistan Economic Corridor.",
  },

  {
    id: 35,
    source: "Pakistan–China Relations",
    question:
      "CPEC connects China's Xinjiang region with Pakistan's:",
    options: ["Karachi", "Lahore", "Islamabad", "Gwadar"],
    correct: 3,
    explanation:
      "CPEC is designed to connect China's Xinjiang region with Pakistan, including Gwadar Port.",
  },

  {
    id: 36,
    source: "Pakistan–China Relations",
    question:
      "Which Chinese city is associated with the Pakistan–China economic corridor's western starting region?",
    options: ["Shanghai", "Beijing", "Guangzhou", "Kashgar"],
    correct: 3,
    explanation:
      "Kashgar in Xinjiang is an important northern point associated with CPEC.",
  },

  {
    id: 37,
    source: "Pakistan–China Relations",
    question:
      "Gwadar Port is located in which province?",
    options: ["Sindh", "Punjab", "Khyber Pakhtunkhwa", "Balochistan"],
    correct: 3,
    explanation:
      "Gwadar Port is located in Balochistan.",
  },

  {
    id: 38,
    source: "CPEC",
    question:
      "The second phase of CPEC is commonly associated with a greater emphasis on:",
    options: [
      "Only military cooperation",
      "Only tourism",
      "Only sports",
      "Industrialization and agriculture",
    ],
    correct: 3,
    explanation:
      "CPEC 2.0 discussions emphasize industrial cooperation, agriculture, technology, Special Economic Zones and broader economic development.",
  },

  {
    id: 39,
    source: "CPEC",
    question:
      "SEZ in the context of CPEC stands for:",
    options: [
      "Strategic Energy Zone",
      "Special Export Zone",
      "State Economic Zone",
      "Special Economic Zone",
    ],
    correct: 3,
    explanation:
      "SEZ stands for Special Economic Zone.",
  },

  {
    id: 40,
    source: "CPEC",
    question:
      "Which Pakistani port is a major component of CPEC connectivity?",
    options: ["Pasni", "Ormara", "Karachi", "Gwadar"],
    correct: 3,
    explanation:
      "Gwadar Port is a central component of CPEC connectivity.",
  },

  // ========================================================================
  // SAUDI ARABIA, TÜRKİYE & GULF RELATIONS
  // ========================================================================

  {
    id: 41,
    source: "Gulf Relations",
    question:
      "Pakistan and Saudi Arabia signed a formal mutual defence agreement in:",
    options: ["2023", "2024", "2026", "2025"],
    correct: 3,
    explanation:
      "Pakistan and Saudi Arabia signed the Strategic Mutual Defence Agreement in September 2025.",
  },

  {
    id: 42,
    source: "Gulf Relations",
    question:
      "The 2025 Pakistan–Saudi defence agreement was signed in which city?",
    options: ["Jeddah", "Islamabad", "Makkah", "Riyadh"],
    correct: 3,
    explanation:
      "The agreement was signed in Riyadh on 17 September 2025.",
  },

  {
    id: 43,
    source: "Gulf Relations",
    question:
      "The 2025 Pakistan–Saudi defence agreement states that an attack on one country would be considered:",
    options: [
      "A trade dispute",
      "A UN matter only",
      "A domestic issue",
      "An attack on both",
    ],
    correct: 3,
    explanation:
      "The agreement provides for mutual defence cooperation and treats an attack on one as an attack on both.",
  },

  {
    id: 44,
    source: "Gulf Relations",
    question:
      "Which Saudi leader signed the defence agreement with Pakistan alongside Prime Minister Shehbaz Sharif?",
    options: [
      "King Abdullah",
      "King Faisal",
      "Crown Prince Khalid bin Salman",
      "Crown Prince Mohammed bin Salman",
    ],
    correct: 3,
    explanation:
      "Crown Prince Mohammed bin Salman signed the agreement with Prime Minister Shehbaz Sharif.",
  },

  {
    id: 45,
    source: "Gulf Relations",
    question:
      "Pakistan's relationship with Saudi Arabia is important in the areas of defence, energy, investment and:",
    options: ["Arctic research", "Space tourism", "Polar science", "Employment"],
    correct: 3,
    explanation:
      "Employment and remittances are also important dimensions of Pakistan–Saudi relations.",
  },

  {
    id: 46,
    source: "Gulf Relations",
    question:
      "Which country is Pakistan's important strategic partner in the Gulf and home to Makkah and Madinah?",
    options: ["Oman", "Kuwait", "Bahrain", "Saudi Arabia"],
    correct: 3,
    explanation:
      "Saudi Arabia hosts the two holiest cities of Islam, Makkah and Madinah.",
  },

  {
    id: 47,
    source: "Pakistan–Türkiye Relations",
    question:
      "Pakistan's long-standing strategic and cultural partner in Anatolia is:",
    options: ["Azerbaijan", "Qatar", "Egypt", "Türkiye"],
    correct: 3,
    explanation:
      "Türkiye is an important strategic and cultural partner of Pakistan.",
  },

  {
    id: 48,
    source: "Pakistan–Türkiye Relations",
    question:
      "The proposed Pakistan–Saudi Arabia–Türkiye defence cooperation is associated with:",
    options: [
      "European Union membership",
      "A currency union",
      "A space agency",
      "Greater trilateral security cooperation",
    ],
    correct: 3,
    explanation:
      "Pakistan, Saudi Arabia and Türkiye have discussed deeper trilateral defence cooperation.",
  },

  // ========================================================================
  // REGIONAL PEACE & INTERNATIONAL ORGANIZATIONS
  // ========================================================================

  {
    id: 49,
    source: "Regional Diplomacy",
    question:
      "Pakistan is a member of which regional organization with China, Russia and Central Asian states?",
    options: [
      "European Union",
      "ASEAN",
      "African Union",
      "Shanghai Cooperation Organisation",
    ],
    correct: 3,
    explanation:
      "Pakistan is a member of the Shanghai Cooperation Organisation (SCO).",
  },

  {
    id: 50,
    source: "Regional Diplomacy",
    question: "SCO stands for:",
    options: [
      "South Cooperation Organisation",
      "Strategic Central Organisation",
      "Security Cooperation Office",
      "Shanghai Cooperation Organisation",
    ],
    correct: 3,
    explanation:
      "SCO stands for Shanghai Cooperation Organisation.",
  },

  {
    id: 51,
    source: "Regional Diplomacy",
    question:
      "Pakistan is a member of the Organisation of Islamic Cooperation, commonly abbreviated as:",
    options: ["IOC", "OPEC", "OECD", "OIC"],
    correct: 3,
    explanation:
      "OIC stands for Organisation of Islamic Cooperation.",
  },

  {
    id: 52,
    source: "Regional Diplomacy",
    question:
      "Pakistan has historically advocated dialogue as a means of resolving regional disputes, particularly regarding:",
    options: ["Antarctica", "South America", "Pacific Islands", "Kashmir"],
    correct: 3,
    explanation:
      "Pakistan consistently emphasizes a peaceful resolution of the Kashmir dispute.",
  },

  {
    id: 53,
    source: "Regional Diplomacy",
    question:
      "The headquarters of the Organisation of Islamic Cooperation is in:",
    options: ["Islamabad", "Riyadh", "Cairo", "Jeddah"],
    correct: 3,
    explanation:
      "The OIC headquarters is located in Jeddah, Saudi Arabia.",
  },

  // ========================================================================
  // ECONOMY & IMF
  // ========================================================================

  {
    id: 54,
    source: "Pakistan Economy",
    question:
      "Pakistan's 37-month IMF Extended Fund Facility was approved in:",
    options: ["2022", "2023", "2025", "2024"],
    correct: 3,
    explanation:
      "The IMF approved Pakistan's 37-month EFF arrangement in September 2024.",
  },

  {
    id: 55,
    source: "Pakistan Economy",
    question: "EFF stands for:",
    options: [
      "Economic Finance Fund",
      "External Finance Facility",
      "Emergency Fiscal Framework",
      "Extended Fund Facility",
    ],
    correct: 3,
    explanation:
      "EFF stands for Extended Fund Facility.",
  },

  {
    id: 56,
    source: "Pakistan Economy",
    question:
      "In May 2025, the IMF also approved Pakistan's arrangement under which facility?",
    options: [
      "Special Drawing Facility",
      "Global Investment Facility",
      "Emergency Growth Facility",
      "Resilience and Sustainability Facility",
    ],
    correct: 3,
    explanation:
      "The IMF approved Pakistan's Resilience and Sustainability Facility (RSF) arrangement in May 2025.",
  },

  {
    id: 57,
    source: "Pakistan Economy",
    question: "RSF stands for:",
    options: [
      "Regional Stabilization Fund",
      "Revenue Support Facility",
      "Reserve Stability Framework",
      "Resilience and Sustainability Facility",
    ],
    correct: 3,
    explanation:
      "RSF stands for Resilience and Sustainability Facility.",
  },

  {
    id: 58,
    source: "Pakistan Economy",
    question:
      "Which institution conducts monetary policy in Pakistan?",
    options: [
      "Federal Board of Revenue",
      "Planning Commission",
      "Ministry of Commerce",
      "State Bank of Pakistan",
    ],
    correct: 3,
    explanation:
      "The State Bank of Pakistan is the country's central bank and conducts monetary policy.",
  },

  {
    id: 59,
    source: "Pakistan Economy",
    question: "FBR stands for:",
    options: [
      "Federal Banking Regulation",
      "Finance Board of Pakistan",
      "Federal Budget Review",
      "Federal Board of Revenue",
    ],
    correct: 3,
    explanation:
      "FBR stands for Federal Board of Revenue.",
  },

  {
    id: 60,
    source: "Pakistan Economy",
    question:
      "Which institution manages Pakistan's foreign exchange reserves and monetary policy?",
    options: [
      "National Assembly",
      "SECP",
      "Planning Commission",
      "State Bank of Pakistan",
    ],
    correct: 3,
    explanation:
      "The State Bank of Pakistan manages monetary policy and official foreign exchange reserves.",
  },

  {
    id: 61,
    source: "Pakistan Economy",
    question:
      "The currency of Pakistan is:",
    options: ["Dinar", "Riyal", "Taka", "Rupee"],
    correct: 3,
    explanation:
      "Pakistan's currency is the Pakistani rupee.",
  },

  {
    id: 62,
    source: "Pakistan Economy",
    question:
      "Pakistan's largest export sector traditionally includes:",
    options: [
      "Aircraft",
      "Automobiles",
      "Crude oil",
      "Textiles",
    ],
    correct: 3,
    explanation:
      "Textiles and textile products form a major part of Pakistan's exports.",
  },

  {
    id: 63,
    source: "Pakistan Economy",
    question:
      "Remittances are money sent to Pakistan mainly by:",
    options: [
      "Foreign tourists",
      "Local farmers",
      "Domestic banks",
      "Overseas Pakistanis",
    ],
    correct: 3,
    explanation:
      "Remittances are funds sent home by Pakistanis working or living abroad.",
  },

  // ========================================================================
  // DEFENCE & MILITARY DEVELOPMENTS
  // ========================================================================

  {
    id: 64,
    source: "Defence",
    question:
      "Who is the current Chief of Army Staff and Chief of Defence Forces of Pakistan?",
    options: [
      "General Qamar Javed Bajwa",
      "General Raheel Sharif",
      "General Ashfaq Parvez Kayani",
      "Field Marshal Syed Asim Munir",
    ],
    correct: 3,
    explanation:
      "Field Marshal Syed Asim Munir serves as Chief of Army Staff and concurrently as Chief of Defence Forces.",
  },

  {
    id: 65,
    source: "Defence",
    question:
      "Who is the current Chief of Air Staff of the Pakistan Air Force?",
    options: [
      "Air Chief Marshal Mujahid Anwar Khan",
      "Air Marshal Sohail Aman",
      "Air Chief Marshal Tahir Rafique Butt",
      "Air Chief Marshal Zaheer Ahmad Babar Sidhu",
    ],
    correct: 3,
    explanation:
      "Air Chief Marshal Zaheer Ahmad Babar Sidhu is the Chief of Air Staff.",
  },

  {
    id: 66,
    source: "Defence",
    question:
      "Who is the current Chief of Naval Staff of Pakistan?",
    options: [
      "Admiral Zafar Mahmood Abbasi",
      "Admiral Muhammad Amjad Khan Niazi",
      "Admiral Asif Sandila",
      "Admiral Naveed Ashraf",
    ],
    correct: 3,
    explanation:
      "Admiral Naveed Ashraf is the Chief of Naval Staff.",
  },

  {
    id: 67,
    source: "Defence",
    question:
      "The Chief of Defence Forces position was concurrently assigned to the Chief of Army Staff in:",
    options: ["2023", "2024", "2026", "2025"],
    correct: 3,
    explanation:
      "President Asif Ali Zardari approved the appointment of Field Marshal Asim Munir as Chief of Defence Forces in December 2025.",
  },

  {
    id: 68,
    source: "Defence",
    question:
      "Which branch of Pakistan's armed forces operates JF-17 Thunder aircraft?",
    options: [
      "Pakistan Navy",
      "Pakistan Army",
      "Pakistan Coast Guards",
      "Pakistan Air Force",
    ],
    correct: 3,
    explanation:
      "The JF-17 Thunder is operated by the Pakistan Air Force.",
  },

  {
    id: 69,
    source: "Defence",
    question:
      "Which country is a major partner of Pakistan in JF-17 development?",
    options: ["Turkey", "Saudi Arabia", "Iran", "China"],
    correct: 3,
    explanation:
      "The JF-17 was jointly developed by Pakistan and China.",
  },

  {
    id: 70,
    source: "Defence",
    question:
      "PNS Khaibar is associated with which service?",
    options: [
      "Pakistan Air Force",
      "Pakistan Army",
      "Pakistan Rangers",
      "Pakistan Navy",
    ],
    correct: 3,
    explanation:
      "PNS Khaibar is a Pakistan Navy vessel and was inducted into the fleet in 2026.",
  },

  // ========================================================================
  // SPACE PROGRAMME & SUPARCO
  // ========================================================================

  {
    id: 71,
    source: "Space Programme",
    question: "SUPARCO stands for:",
    options: [
      "Supreme Pakistan Research Council",
      "Space Utility and Research Corporation",
      "Scientific Pakistan Research Commission",
      "Space and Upper Atmosphere Research Commission",
    ],
    correct: 3,
    explanation:
      "SUPARCO stands for Space and Upper Atmosphere Research Commission.",
  },

  {
    id: 72,
    source: "Space Programme",
    question:
      "SUPARCO is Pakistan's national organization responsible for:",
    options: [
      "Railway operations",
      "Defence procurement only",
      "Foreign exchange management",
      "Space and upper-atmosphere research",
    ],
    correct: 3,
    explanation:
      "SUPARCO is Pakistan's national space research and development organization.",
  },

  {
    id: 73,
    source: "Space Programme",
    question:
      "Which Pakistani satellite is associated with remote sensing and Earth observation?",
    options: [
      "Badr-1",
      "PAKSAT-1R",
      "GPS-1",
      "PRSS-1",
    ],
    correct: 3,
    explanation:
      "PRSS-1 is a Pakistan Remote Sensing Satellite used for Earth observation and related applications.",
  },

  {
    id: 74,
    source: "Space Programme",
    question:
      "Pakistan's first satellite was called:",
    options: [
      "PRSS-1",
      "PAKSAT-1R",
      "PakSat-2",
      "Badr-1",
    ],
    correct: 3,
    explanation:
      "Badr-1 was Pakistan's first satellite.",
  },

  {
    id: 75,
    source: "Space Programme",
    question:
      "Pakistan's space cooperation with China includes satellite development and:",
    options: [
      "Arctic exploration",
      "Deep-sea oil drilling",
      "European space membership",
      "Lunar exploration",
    ],
    correct: 3,
    explanation:
      "Pakistan and China cooperate in space science and satellite programmes, including lunar exploration initiatives.",
  },

  // ========================================================================
  // CURRENT NATIONAL LEADERSHIP
  // ========================================================================

  {
    id: 76,
    source: "Current Leadership",
    question: "Who is the current President of Pakistan?",
    options: [
      "Arif Alvi",
      "Mamnoon Hussain",
      "Sadiq Sanjrani",
      "Asif Ali Zardari",
    ],
    correct: 3,
    explanation:
      "Asif Ali Zardari is the President of Pakistan.",
  },

  {
    id: 77,
    source: "Current Leadership",
    question: "Who is the current Prime Minister of Pakistan?",
    options: [
      "Anwaar-ul-Haq Kakar",
      "Imran Khan",
      "Shahid Khaqan Abbasi",
      "Shehbaz Sharif",
    ],
    correct: 3,
    explanation:
      "Mian Muhammad Shehbaz Sharif is the Prime Minister of Pakistan.",
  },

  {
    id: 78,
    source: "Current Leadership",
    question:
      "Who is the current Chief Minister of Punjab?",
    options: [
      "Usman Buzdar",
      "Hamza Shahbaz",
      "Parvez Elahi",
      "Maryam Nawaz Sharif",
    ],
    correct: 3,
    explanation:
      "Maryam Nawaz Sharif is the current Chief Minister of Punjab.",
  },

  {
    id: 79,
    source: "Current Leadership",
    question:
      "Who is the current Chief Minister of Sindh?",
    options: [
      "Qaim Ali Shah",
      "Sharjeel Memon",
      "Kamran Tessori",
      "Murad Ali Shah",
    ],
    correct: 3,
    explanation:
      "Syed Murad Ali Shah is the current Chief Minister of Sindh.",
  },

  {
    id: 80,
    source: "Current Leadership",
    question:
      "Who is the current Chief Minister of Khyber Pakhtunkhwa?",
    options: [
      "Ali Amin Gandapur",
      "Pervez Khattak",
      "Mahmood Khan",
      "Muhammad Sohail Afridi",
    ],
    correct: 3,
    explanation:
      "Muhammad Sohail Afridi is the current Chief Minister of Khyber Pakhtunkhwa.",
  },

  {
    id: 81,
    source: "Current Leadership",
    question:
      "Who is the current Chief Minister of Balochistan?",
    options: [
      "Abdul Quddus Bizenjo",
      "Jam Kamal Khan",
      "Mir Abdul Malik Baloch",
      "Sarfraz Bugti",
    ],
    correct: 3,
    explanation:
      "Mir Sarfraz Bugti is the current Chief Minister of Balochistan.",
  },

  {
    id: 82,
    source: "Current Leadership",
    question:
      "Who is Pakistan's current Federal Minister for Defence?",
    options: [
      "Mohsin Naqvi",
      "Ishaq Dar",
      "Ahsan Iqbal",
      "Khawaja Muhammad Asif",
    ],
    correct: 3,
    explanation:
      "Khawaja Muhammad Asif is the Federal Minister for Defence.",
  },

  {
    id: 83,
    source: "Current Leadership",
    question:
      "Who is Pakistan's current Federal Minister for Foreign Affairs?",
    options: [
      "Bilawal Bhutto Zardari",
      "Khawaja Asif",
      "Ahsan Iqbal",
      "Ishaq Dar",
    ],
    correct: 3,
    explanation:
      "Muhammad Ishaq Dar is the Federal Minister for Foreign Affairs and Deputy Prime Minister.",
  },

  {
    id: 84,
    source: "Current Leadership",
    question:
      "Who is Pakistan's current Federal Minister for Interior and Narcotics Control?",
    options: [
      "Attaullah Tarar",
      "Azam Nazeer Tarar",
      "Rana Tanveer Hussain",
      "Mohsin Naqvi",
    ],
    correct: 3,
    explanation:
      "Mohsin Naqvi is the Federal Minister for Interior and Narcotics Control.",
  },

  {
    id: 85,
    source: "Current Leadership",
    question:
      "Who is Pakistan's current Federal Minister for Federal Education and Professional Training?",
    options: [
      "Ahsan Iqbal",
      "Shaza Fatima Khawaja",
      "Rana Tanveer Hussain",
      "Khalid Maqbool Siddiqui",
    ],
    correct: 3,
    explanation:
      "Dr. Khalid Maqbool Siddiqui holds the Federal Education and Professional Training portfolio.",
  },

  {
    id: 86,
    source: "Current Leadership",
    question:
      "Who holds Pakistan's Federal Information Technology and Telecommunication portfolio?",
    options: [
      "Attaullah Tarar",
      "Khalid Maqbool Siddiqui",
      "Ahsan Iqbal",
      "Shaza Fatima Khawaja",
    ],
    correct: 3,
    explanation:
      "Shaza Fatima Khawaja holds the Information Technology and Telecommunication portfolio.",
  },

  {
    id: 87,
    source: "Current Leadership",
    question:
      "Who is Pakistan's current Federal Minister for Finance and Revenue?",
    options: [
      "Ishaq Dar",
      "Ahsan Iqbal",
      "Abdul Aleem Khan",
      "Muhammad Aurangzeb",
    ],
    correct: 3,
    explanation:
      "Muhammad Aurangzeb is the Federal Minister for Finance and Revenue.",
  },

  {
    id: 88,
    source: "Current Leadership",
    question:
      "Who is the current Chief Election Commissioner of Pakistan?",
    options: [
      "Fakhruddin G. Ebrahim",
      "Justice Nasir-ul-Mulk",
      "Sardar Raza",
      "Sikandar Sultan Raja",
    ],
    correct: 3,
    explanation:
      "Sikandar Sultan Raja is the Chief Election Commissioner of Pakistan.",
  },

  // ========================================================================
  // CONSTITUTIONAL & LEGISLATIVE DEVELOPMENTS
  // ========================================================================

  {
    id: 89,
    source: "Constitution & Legislation",
    question:
      "The Constitution currently in force in Pakistan was adopted in:",
    options: ["1956", "1962", "1985", "1973"],
    correct: 3,
    explanation:
      "The Constitution of the Islamic Republic of Pakistan was adopted in 1973.",
  },

  {
    id: 90,
    source: "Constitution & Legislation",
    question:
      "Pakistan's Parliament consists of the National Assembly and:",
    options: ["Supreme Court", "Cabinet", "Election Commission", "Senate"],
    correct: 3,
    explanation:
      "Pakistan's Parliament is bicameral, consisting of the National Assembly and Senate.",
  },

  {
    id: 91,
    source: "Constitution & Legislation",
    question:
      "The 26th Constitutional Amendment of Pakistan was passed in:",
    options: ["2022", "2023", "2025", "2024"],
    correct: 3,
    explanation:
      "Pakistan's 26th Constitutional Amendment was enacted in 2024 and included changes concerning the judiciary and constitutional procedures.",
  },

  {
    id: 92,
    source: "Constitution & Legislation",
    question:
      "The constitutional head of state of Pakistan is the:",
    options: ["Prime Minister", "Chief Justice", "Army Chief", "President"],
    correct: 3,
    explanation:
      "The President is the constitutional head of state, while the Prime Minister is the head of government.",
  },

  {
    id: 93,
    source: "Constitution & Legislation",
    question:
      "The head of government in Pakistan is the:",
    options: ["President", "Senate Chairman", "Chief Justice", "Prime Minister"],
    correct: 3,
    explanation:
      "The Prime Minister is the head of government.",
  },

  {
    id: 94,
    source: "Constitution & Legislation",
    question:
      "Which institution conducts Pakistan's general elections?",
    options: [
      "Supreme Court",
      "Senate",
      "Cabinet Division",
      "Election Commission of Pakistan",
    ],
    correct: 3,
    explanation:
      "The Election Commission of Pakistan is constitutionally responsible for conducting elections.",
  },

  // ========================================================================
  // NATIONAL PROJECTS & INFRASTRUCTURE
  // ========================================================================

  {
    id: 95,
    source: "National Projects",
    question:
      "The Diamer-Bhasha Dam is being constructed on which river?",
    options: ["Jhelum", "Chenab", "Ravi", "Indus"],
    correct: 3,
    explanation:
      "Diamer-Bhasha Dam is being constructed on the Indus River.",
  },

  {
    id: 96,
    source: "National Projects",
    question:
      "Mohmand Dam is located in which province?",
    options: [
      "Punjab",
      "Sindh",
      "Balochistan",
      "Khyber Pakhtunkhwa",
    ],
    correct: 3,
    explanation:
      "Mohmand Dam is being developed in Khyber Pakhtunkhwa.",
  },

  {
    id: 97,
    source: "National Projects",
    question:
      "Which major transport project links Pakistan's northern areas with the country's southern regions through CPEC?",
    options: [
      "Karachi Circular Railway only",
      "Lahore Metro only",
      "Gwadar Airport only",
      "CPEC road and rail network",
    ],
    correct: 3,
    explanation:
      "CPEC includes road, rail and other connectivity infrastructure linking different parts of Pakistan.",
  },

  {
    id: 98,
    source: "National Projects",
    question:
      "Which motorway is commonly known as the Islamabad–Lahore Motorway?",
    options: ["M-1", "M-3", "M-5", "M-2"],
    correct: 3,
    explanation:
      "The M-2 connects Islamabad and Lahore.",
  },

  {
    id: 99,
    source: "National Projects",
    question:
      "Which major Pakistani port is located near Karachi?",
    options: [
      "Gwadar Port",
      "Chabahar Port",
      "Ormara Port",
      "Port Qasim",
    ],
    correct: 3,
    explanation:
      "Port Qasim is located near Karachi in Sindh.",
  },

  // ========================================================================
  // INTERNATIONAL ACHIEVEMENTS & NATIONAL EVENTS
  // ========================================================================

  {
    id: 100,
    source: "National Achievements",
    question:
      "Which Pakistani athlete won Olympic gold in javelin at the Paris 2024 Olympics?",
    options: [
      "Babar Azam",
      "Jahangeer Khan",
      "Naseem Shah",
      "Arshad Nadeem",
    ],
    correct: 3,
    explanation:
      "Arshad Nadeem won Pakistan's first individual Olympic gold medal in athletics at Paris 2024.",
  },

  {
    id: 101,
    source: "National Achievements",
    question:
      "Arshad Nadeem won his Olympic gold medal in which event?",
    options: [
      "Shot put",
      "Discus throw",
      "Hammer throw",
      "Javelin throw",
    ],
    correct: 3,
    explanation:
      "Arshad Nadeem won the men's javelin throw at the Paris 2024 Olympics.",
  },

  {
    id: 102,
    source: "National Events",
    question:
      "Pakistan Day is observed on:",
    options: ["14 August", "6 September", "25 December", "23 March"],
    correct: 3,
    explanation:
      "Pakistan Day is observed on 23 March.",
  },

  {
    id: 103,
    source: "National Events",
    question:
      "Pakistan Independence Day is observed on:",
    options: ["23 March", "6 September", "25 December", "14 August"],
    correct: 3,
    explanation:
      "Pakistan celebrates Independence Day on 14 August.",
  },

  {
    id: 104,
    source: "National Events",
    question:
      "Defence Day of Pakistan is observed on:",
    options: ["14 August", "23 March", "28 May", "6 September"],
    correct: 3,
    explanation:
      "Defence Day is observed on 6 September.",
  },

  {
    id: 105,
    source: "National Events",
    question:
      "Youm-e-Takbeer is observed on:",
    options: ["6 September", "14 August", "23 March", "28 May"],
    correct: 3,
    explanation:
      "Youm-e-Takbeer is observed on 28 May, commemorating Pakistan's nuclear tests in 1998.",
  },

  {
    id: 106,
    source: "National Events",
    question:
      "Pakistan conducted its nuclear tests in 1998 at:",
    options: [
      "Kahuta",
      "Islamabad",
      "Multan",
      "Chagai",
    ],
    correct: 3,
    explanation:
      "Pakistan conducted its nuclear tests in the Chagai area of Balochistan in May 1998.",
  },

  // ========================================================================
  // IMPORTANT NATIONAL INSTITUTIONS
  // ========================================================================

  {
    id: 107,
    source: "National Institutions",
    question:
      "The headquarters of Pakistan's National Assembly is located in:",
    options: ["Lahore", "Karachi", "Peshawar", "Islamabad"],
    correct: 3,
    explanation:
      "The National Assembly is located in Islamabad.",
  },

  {
    id: 108,
    source: "National Institutions",
    question:
      "The Supreme Court of Pakistan is headquartered in:",
    options: ["Lahore", "Karachi", "Rawalpindi", "Islamabad"],
    correct: 3,
    explanation:
      "The Supreme Court of Pakistan is headquartered in Islamabad.",
  },

  {
    id: 109,
    source: "National Institutions",
    question:
      "Pakistan's main intelligence agency is commonly known as:",
    options: [
      "Federal Investigation Agency",
      "Intelligence Bureau",
      "National Accountability Bureau",
      "Inter-Services Intelligence",
    ],
    correct: 3,
    explanation:
      "Inter-Services Intelligence is commonly abbreviated as ISI.",
  },

  {
    id: 110,
    source: "National Institutions",
    question:
      "FIA stands for:",
    options: [
      "Federal Intelligence Authority",
      "Foreign Investigation Agency",
      "Federal Internal Administration",
      "Federal Investigation Agency",
    ],
    correct: 3,
    explanation:
      "FIA stands for Federal Investigation Agency.",
  },

  // ========================================================================
  // MIXED CURRENT PAKISTAN AFFAIRS
  // ========================================================================

  {
    id: 111,
    source: "Current Pakistan Affairs",
    question:
      "Which city is the federal capital of Pakistan?",
    options: ["Karachi", "Lahore", "Rawalpindi", "Islamabad"],
    correct: 3,
    explanation:
      "Islamabad is Pakistan's federal capital.",
  },

  {
    id: 112,
    source: "Current Pakistan Affairs",
    question:
      "Which province is the largest by area?",
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
    id: 113,
    source: "Current Pakistan Affairs",
    question:
      "Which province has the largest population?",
    options: [
      "Sindh",
      "Khyber Pakhtunkhwa",
      "Balochistan",
      "Punjab",
    ],
    correct: 3,
    explanation:
      "Punjab is Pakistan's most populous province.",
  },

  {
    id: 114,
    source: "Current Pakistan Affairs",
    question:
      "Which sea lies south of Pakistan?",
    options: [
      "Red Sea",
      "Caspian Sea",
      "Black Sea",
      "Arabian Sea",
    ],
    correct: 3,
    explanation:
      "Pakistan has a coastline along the Arabian Sea.",
  },

  {
    id: 115,
    source: "Current Pakistan Affairs",
    question:
      "Which mountain range contains K2?",
    options: [
      "Himalayas",
      "Hindu Kush",
      "Sulaiman Range",
      "Karakoram",
    ],
    correct: 3,
    explanation:
      "K2 is located in the Karakoram mountain range.",
  },

  {
    id: 116,
    source: "Current Pakistan Affairs",
    question:
      "Pakistan's highest mountain is:",
    options: ["Nanga Parbat", "Tirich Mir", "Broad Peak", "K2"],
    correct: 3,
    explanation:
      "K2, at 8,611 metres, is Pakistan's highest mountain.",
  },

  {
    id: 117,
    source: "Current Pakistan Affairs",
    question:
      "Which river is the largest river of Pakistan?",
    options: ["Jhelum", "Chenab", "Ravi", "Indus"],
    correct: 3,
    explanation:
      "The Indus is Pakistan's principal and largest river system.",
  },

  {
    id: 118,
    source: "Current Pakistan Affairs",
    question:
      "Which city is Pakistan's largest by population and an important financial centre?",
    options: ["Lahore", "Islamabad", "Peshawar", "Karachi"],
    correct: 3,
    explanation:
      "Karachi is Pakistan's largest city and a major financial and commercial centre.",
  },

  {
    id: 119,
    source: "Current Pakistan Affairs",
    question:
      "Which organization is responsible for Pakistan's national space programme?",
    options: [
      "NESPAK",
      "PAEC",
      "PCSIR",
      "SUPARCO",
    ],
    correct: 3,
    explanation:
      "SUPARCO is Pakistan's national space research and development organization.",
  },

  {
    id: 120,
    source: "Current Pakistan Affairs",
    question:
      "Which city is the headquarters of the Pakistan Army?",
    options: [
      "Islamabad",
      "Lahore",
      "Peshawar",
      "Rawalpindi",
    ],
    correct: 3,
    explanation:
      "General Headquarters (GHQ) of the Pakistan Army is located in Rawalpindi.",
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

export default function PakistanAffairs() {
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
          <strong>Pakistan Affairs</strong>
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

            <h1>Pakistan Affairs</h1>

            <p>
              Prepare Pakistan Affairs with current national,
              political, economic, diplomatic, defence and
              strategic developments relevant to armed-forces
              initial tests and competitive examinations.
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

              <h2>Pakistan Affairs for Current-Affairs Tests</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Pakistan Affairs questions can cover much more than
              historical facts. Candidates should understand major
              national developments, foreign relations, defence
              affairs, economic developments, constitutional
              changes, infrastructure projects and important
              office-holders.
            </p>

            <p>
              This page focuses especially on developments from
              2025 and 2026, including the Pakistan–India conflict,
              Operation Sindoor, Operation Bunyan-un-Marsoos,
              the Indus Waters dispute, Pakistan's relations with
              Afghanistan, Iran, China, Saudi Arabia and Türkiye,
              IMF developments and important national leadership.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Current Affairs Strategy</strong>

                <p>
                  Do not memorize isolated names only. Connect
                  each person, event, agreement and institution
                  with its date, purpose, country and significance.
                </p>

                <span>
                  Current office-holder questions should be
                  revised regularly because appointments can change.
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
                  <h3>Pakistan–India Relations</h3>

                  <p>
                    Pahalgam attack, Operation Sindoor,
                    Operation Bunyan-un-Marsoos, ceasefire,
                    Kashmir and the Indus Waters Treaty.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Foreign Relations</h3>

                  <p>
                    Pakistan's relations with Afghanistan,
                    Iran, China, Saudi Arabia, Türkiye,
                    Gulf countries and major international
                    partners.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Economy & IMF</h3>

                  <p>
                    IMF programmes, EFF, RSF, inflation,
                    foreign exchange reserves, exports,
                    remittances and economic reforms.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Defence & National Security</h3>

                  <p>
                    Armed forces leadership, military
                    developments, CPEC security, maritime
                    security and regional strategic issues.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>05</span>

                <div>
                  <h3>Leadership & Governance</h3>

                  <p>
                    President, Prime Minister, provincial
                    Chief Ministers, federal ministers,
                    Election Commission and major institutions.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>06</span>

                <div>
                  <h3>National Development</h3>

                  <p>
                    CPEC, dams, motorways, Gwadar, space
                    programme, SUPARCO and major infrastructure
                    projects.
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

              <h2>Pakistan Affairs MCQs</h2>
            </div>
          </div>

          <div className="content-card">

            <p>
              This question bank contains{" "}
              <strong>
                {questionBank.length} Pakistan Affairs MCQs
              </strong>{" "}
              covering major national developments, foreign
              relations, defence, economy, leadership,
              constitutional matters and important national
              events.
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
                  minWidth: "700px",
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
                        width: "260px",
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

              <h2>Important Pakistan Affairs Tips</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />

              <div>
                <strong>
                  Remember dates and names
                </strong>

                <p>
                  Pay special attention to important dates,
                  agreements, operations, appointments and
                  major national events.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>
                  Connect events with countries
                </strong>

                <p>
                  For foreign-affairs questions, remember
                  which country, organization or institution
                  is connected to each development.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiAward />

              <div>
                <strong>
                  Revise current office-holders
                </strong>

                <p>
                  Current Prime Minister, President, Chief
                  Ministers, federal ministers and armed-forces
                  chiefs are common current-affairs topics.
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

              <h2>
                Test Your Pakistan Affairs
              </h2>

              <p>
                10 questions are randomly selected from the
                complete Pakistan Affairs question bank.
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
                      onClick={() =>
                        handleAnswer(index)
                      }
                      disabled={answered}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="option-text">
                        {option}
                      </span>

                      {answered && isCorrect && (
                        <FiCheckCircle
                          className="answer-icon"
                        />
                      )}

                      {answered &&
                        isSelected &&
                        !isCorrect && (
                          <FiXCircle
                            className="answer-icon"
                          />
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

              <h2>
                Well Done!
              </h2>

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

          <h2>
            Academic Topics
          </h2>

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

            <Link to="/notes/academics/general-knowledge">
              General Knowledge
              <FiArrowRight />
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}