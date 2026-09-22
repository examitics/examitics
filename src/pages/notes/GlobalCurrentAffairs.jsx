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
| GLOBAL CURRENT AFFAIRS QUESTION BANK
|--------------------------------------------------------------------------
| 120 questions
|
| Coverage:
| 01. Iran - United States - Israel conflict
| 02. Palestine / Israel / Gaza
| 03. Pakistan - India 2025 conflict
| 04. Islamabad Peace Talks - US / Iran
| 05. Pakistan - Türkiye - Saudi Arabia
| 06. Pakistan - Afghanistan peace process
| 07. Other major global current affairs
|
| Current-affairs reference point:
| September 22, 2026
|--------------------------------------------------------------------------
*/

// const questionBank = [
//   // ========================================================================
//   // IRAN - UNITED STATES - ISRAEL
//   // ========================================================================

//   {
//     id: 1,
//     source: "Global Current Affairs",
//     question:
//       "On which date did the major 2026 US-Israel military campaign against Iran begin?",
//     options: [
//       "28 February 2026",
//       "15 January 2026",
//       "10 March 2026",
//       "7 April 2026",
//     ],
//     correct: 0,
//     explanation:
//       "The major 2026 military confrontation began on 28 February 2026 when Israel launched attacks on Iran, with the United States also becoming directly involved.",
//   },

//   {
//     id: 2,
//     source: "Global Current Affairs",
//     question:
//       "Which two countries launched the major military strikes against Iran on 28 February 2026?",
//     options: [
//       "United States and Israel",
//       "Russia and China",
//       "Turkey and Saudi Arabia",
//       "United Kingdom and France",
//     ],
//     correct: 0,
//     explanation:
//       "The conflict began with coordinated US-Israeli military action against Iran.",
//   },

//   {
//     id: 3,
//     source: "Global Current Affairs",
//     question:
//       "What was one of the major issues at the center of the US-Iran dispute in 2026?",
//     options: [
//       "Iran's nuclear programme",
//       "The Panama Canal",
//       "The Arctic Ocean",
//       "The South China Sea",
//     ],
//     correct: 0,
//     explanation:
//       "Iran's nuclear programme and its uranium enrichment activities remained central issues in negotiations and military tensions.",
//   },

//   {
//     id: 4,
//     source: "Global Current Affairs",
//     question:
//       "Which Iranian city was reported to have been struck at the beginning of the 2026 conflict?",
//     options: ["Tehran", "Mashhad", "Shiraz", "Tabriz"],
//     correct: 0,
//     explanation:
//       "Explosions were reported in Tehran following the initial strikes on 28 February 2026.",
//   },

//   {
//     id: 5,
//     source: "Global Current Affairs",
//     question:
//       "Which Iranian leader was serving as President during the 2026 conflict?",
//     options: [
//       "Masoud Pezeshkian",
//       "Hassan Rouhani",
//       "Ebrahim Raisi",
//       "Mahmoud Ahmadinejad",
//     ],
//     correct: 0,
//     explanation:
//       "Masoud Pezeshkian was Iran's president during the 2026 conflict.",
//   },

//   {
//     id: 6,
//     source: "Global Current Affairs",
//     question:
//       "Which Iranian official was serving as Foreign Minister during the 2026 conflict?",
//     options: [
//       "Abbas Araghchi",
//       "Mohammad Javad Zarif",
//       "Ali Shamkhani",
//       "Hossein Amir-Abdollahian",
//     ],
//     correct: 0,
//     explanation:
//       "Abbas Araghchi served as Iran's Foreign Minister during this period.",
//   },

//   {
//     id: 7,
//     source: "Global Current Affairs",
//     question:
//       "Which strategic waterway became a major concern during the 2026 Iran conflict?",
//     options: [
//       "Strait of Hormuz",
//       "Strait of Gibraltar",
//       "Bosporus",
//       "Bering Strait",
//     ],
//     correct: 0,
//     explanation:
//       "The Strait of Hormuz became a major global concern because of its importance for international oil and energy shipments.",
//   },

//   {
//     id: 8,
//     source: "Global Current Affairs",
//     question:
//       "The Strait of Hormuz connects the Persian Gulf with which body of water?",
//     options: ["Gulf of Oman", "Mediterranean Sea", "Red Sea", "Black Sea"],
//     correct: 0,
//     explanation:
//       "The Strait of Hormuz connects the Persian Gulf with the Gulf of Oman and the Arabian Sea beyond it.",
//   },

//   {
//     id: 9,
//     source: "Global Current Affairs",
//     question:
//       "Which Iranian military organization is commonly abbreviated as IRGC?",
//     options: [
//       "Islamic Revolutionary Guard Corps",
//       "Iranian Regional Guard Command",
//       "Islamic Republic General Command",
//       "Iranian Republican Ground Corps",
//     ],
//     correct: 0,
//     explanation: "IRGC stands for Islamic Revolutionary Guard Corps.",
//   },

//   {
//     id: 10,
//     source: "Global Current Affairs",
//     question:
//       "Which regional group based in Yemen became involved in the wider Middle East conflict?",
//     options: ["Houthis", "Taliban", "PKK", "Boko Haram"],
//     correct: 0,
//     explanation:
//       "The Iran-aligned Houthi movement in Yemen became involved in the wider regional conflict.",
//   },

//   {
//     id: 11,
//     source: "Global Current Affairs",
//     question: "The Houthis are primarily based in which country?",
//     options: ["Yemen", "Iraq", "Syria", "Lebanon"],
//     correct: 0,
//     explanation: "The Houthi movement is based in Yemen.",
//   },

//   {
//     id: 12,
//     source: "Global Current Affairs",
//     question:
//       "Which major international organization held an emergency Security Council meeting after the February 2026 Iran strikes?",
//     options: ["United Nations", "NATO", "OIC", "SAARC"],
//     correct: 0,
//     explanation:
//       "The United Nations Security Council convened an emergency meeting following the escalation.",
//   },

//   {
//     id: 13,
//     source: "Global Current Affairs",
//     question:
//       "Which UN official urged the parties involved in the February 2026 escalation to return to negotiations?",
//     options: [
//       "António Guterres",
//       "Ban Ki-moon",
//       "Kofi Annan",
//       "Tedros Adhanom",
//     ],
//     correct: 0,
//     explanation:
//       "UN Secretary-General António Guterres called for de-escalation and a return to diplomacy.",
//   },

//   {
//     id: 14,
//     source: "Global Current Affairs",
//     question:
//       "Which country hosts the largest US military air base in the Middle East that became relevant to regional tensions?",
//     options: ["Qatar", "Oman", "Kuwait", "Bahrain"],
//     correct: 0,
//     explanation:
//       "Al Udeid Air Base in Qatar is a major US military facility in the region.",
//   },

//   {
//     id: 15,
//     source: "Global Current Affairs",
//     question:
//       "Which country became an important diplomatic channel for discussions involving Iran and the United States?",
//     options: ["Pakistan", "Brazil", "South Africa", "Indonesia"],
//     correct: 0,
//     explanation:
//       "Pakistan played a diplomatic role in facilitating US-Iran discussions during the 2026 crisis.",
//   },

//   {
//     id: 16,
//     source: "Global Current Affairs",
//     question: "Which city hosted the US-Iran peace negotiations in April 2026?",
//     options: ["Islamabad", "Doha", "Geneva", "Istanbul"],
//     correct: 0,
//     explanation:
//       "The US-Iran peace negotiations were hosted in Islamabad on 11-12 April 2026.",
//   },

//   {
//     id: 17,
//     source: "Global Current Affairs",
//     question:
//       "Which major global commodity market was strongly affected by disruptions around the Strait of Hormuz?",
//     options: ["Oil", "Coffee", "Cotton", "Wheat"],
//     correct: 0,
//     explanation:
//       "The Strait of Hormuz is one of the world's most important energy shipping routes, making oil markets particularly sensitive to disruptions.",
//   },

//   {
//     id: 18,
//     source: "Global Current Affairs",
//     question:
//       "Which sea route was also affected by wider Middle East tensions involving the Houthis?",
//     options: ["Red Sea", "Baltic Sea", "Caspian Sea", "Caribbean Sea"],
//     correct: 0,
//     explanation:
//       "Houthi attacks affected shipping through the Red Sea and the wider Bab el-Mandeb route.",
//   },

//   {
//     id: 19,
//     source: "Global Current Affairs",
//     question: "Bab el-Mandeb connects the Red Sea with which gulf?",
//     options: ["Gulf of Aden", "Persian Gulf", "Gulf of Oman", "Gulf of Mexico"],
//     correct: 0,
//     explanation:
//       "Bab el-Mandeb is the strategic strait connecting the Red Sea with the Gulf of Aden.",
//   },

//   {
//     id: 20,
//     source: "Global Current Affairs",
//     question:
//       "What was a major diplomatic objective of the 2026 US-Iran talks?",
//     options: [
//       "Ending the military conflict and addressing nuclear issues",
//       "Creating NATO membership for Iran",
//       "Dividing Iraq",
//       "Changing the UN headquarters",
//     ],
//     correct: 0,
//     explanation:
//       "The talks focused on ending hostilities and addressing issues surrounding Iran's nuclear programme and regional security.",
//   },

//   // ========================================================================
//   // PALESTINE - ISRAEL - GAZA
//   // ========================================================================

//   {
//     id: 21,
//     source: "Global Current Affairs",
//     question:
//       "The Gaza war that began in 2023 was triggered by the Hamas attack on Israel on which date?",
//     options: [
//       "7 October 2023",
//       "1 January 2023",
//       "15 August 2023",
//       "20 December 2023",
//     ],
//     correct: 0,
//     explanation:
//       "The present Gaza war began after the Hamas-led attack on southern Israel on 7 October 2023.",
//   },

//   {
//     id: 22,
//     source: "Global Current Affairs",
//     question:
//       "Which Palestinian armed group launched the 7 October 2023 attack on Israel?",
//     options: ["Hamas", "Hezbollah", "Fatah", "Palestinian Islamic Jihad"],
//     correct: 0,
//     explanation:
//       "The attack was led by Hamas, with other armed groups also involved.",
//   },

//   {
//     id: 23,
//     source: "Global Current Affairs",
//     question: "Gaza is located on the eastern coast of which sea?",
//     options: ["Mediterranean Sea", "Red Sea", "Arabian Sea", "Black Sea"],
//     correct: 0,
//     explanation: "The Gaza Strip lies along the Mediterranean coast.",
//   },

//   {
//     id: 24,
//     source: "Global Current Affairs",
//     question:
//       "Which two countries played major mediation roles in Gaza ceasefire negotiations during 2025?",
//     options: [
//       "Qatar and Egypt",
//       "Pakistan and Turkey",
//       "China and Russia",
//       "India and Iran",
//     ],
//     correct: 0,
//     explanation:
//       "Qatar and Egypt were important mediators in negotiations between Israel and Hamas, with US involvement also significant.",
//   },

//   {
//     id: 25,
//     source: "Global Current Affairs",
//     question:
//       "Which country proposed a 60-day Gaza ceasefire plan in May 2025?",
//     options: ["United States", "China", "Russia", "Pakistan"],
//     correct: 0,
//     explanation:
//       "The United States proposed a 60-day ceasefire framework in May 2025.",
//   },

//   {
//     id: 26,
//     source: "Global Current Affairs",
//     question:
//       "The 2025 US Gaza ceasefire proposal included negotiations involving which Palestinian group?",
//     options: ["Hamas", "Fatah only", "Hezbollah", "Taliban"],
//     correct: 0,
//     explanation:
//       "Hamas was one of the principal parties involved in negotiations over the proposed ceasefire.",
//   },

//   {
//     id: 27,
//     source: "Global Current Affairs",
//     question:
//       "Which organization is the principal United Nations agency assisting Palestinian refugees?",
//     options: ["UNRWA", "UNICEF", "UNESCO", "UNDP"],
//     correct: 0,
//     explanation:
//       "UNRWA stands for United Nations Relief and Works Agency for Palestine Refugees in the Near East.",
//   },

//   {
//     id: 28,
//     source: "Global Current Affairs",
//     question: "What does UNRWA stand for?",
//     options: [
//       "United Nations Relief and Works Agency",
//       "United Nations Refugee Welfare Association",
//       "United Nations Regional Works Administration",
//       "United Nations Relief and Water Authority",
//     ],
//     correct: 0,
//     explanation:
//       "UNRWA stands for United Nations Relief and Works Agency for Palestine Refugees in the Near East.",
//   },

//   {
//     id: 29,
//     source: "Global Current Affairs",
//     question:
//       "Which organization warned repeatedly about the humanitarian situation in Gaza?",
//     options: ["United Nations", "NATO", "ASEAN", "SAARC"],
//     correct: 0,
//     explanation:
//       "Multiple UN agencies have reported on humanitarian conditions in Gaza.",
//   },

//   {
//     id: 30,
//     source: "Global Current Affairs",
//     question:
//       "Which city is the administrative center of the Palestinian Authority?",
//     options: ["Ramallah", "Gaza City", "Jericho", "Hebron"],
//     correct: 0,
//     explanation:
//       "Ramallah functions as the de facto administrative center of the Palestinian Authority.",
//   },

//   {
//     id: 31,
//     source: "Global Current Affairs",
//     question: "Which city is the largest urban center in the Gaza Strip?",
//     options: ["Gaza City", "Rafah", "Khan Younis", "Deir al-Balah"],
//     correct: 0,
//     explanation: "Gaza City is the largest urban center in the Gaza Strip.",
//   },

//   {
//     id: 32,
//     source: "Global Current Affairs",
//     question:
//       "Which crossing became a major route for humanitarian assistance and evacuations from Gaza?",
//     options: [
//       "Rafah Crossing",
//       "Khyber Pass",
//       "Torkham Crossing",
//       "Wagah Border",
//     ],
//     correct: 0,
//     explanation:
//       "The Rafah Crossing connects Gaza with Egypt and has been central to humanitarian and evacuation arrangements.",
//   },

//   {
//     id: 33,
//     source: "Global Current Affairs",
//     question: "Which country borders the Gaza Strip to the southwest?",
//     options: ["Egypt", "Jordan", "Lebanon", "Syria"],
//     correct: 0,
//     explanation: "Egypt borders the Gaza Strip to the southwest.",
//   },

//   {
//     id: 34,
//     source: "Global Current Affairs",
//     question:
//       "Which armed group in Lebanon is closely associated with Iran and has been involved in the Israel conflict?",
//     options: ["Hezbollah", "Hamas", "Houthis", "Taliban"],
//     correct: 0,
//     explanation:
//       "Hezbollah is a Lebanon-based armed and political organization with close ties to Iran.",
//   },

//   {
//     id: 35,
//     source: "Global Current Affairs",
//     question: "Which country is Hezbollah primarily based in?",
//     options: ["Lebanon", "Syria", "Iraq", "Yemen"],
//     correct: 0,
//     explanation: "Hezbollah is based primarily in Lebanon.",
//   },

//   {
//     id: 36,
//     source: "Global Current Affairs",
//     question:
//       "Which international organization has repeatedly called for humanitarian access to Gaza?",
//     options: ["United Nations", "NATO", "OPEC", "WTO"],
//     correct: 0,
//     explanation:
//       "The United Nations and its agencies have repeatedly called for humanitarian access and assistance.",
//   },

//   {
//     id: 37,
//     source: "Global Current Affairs",
//     question:
//       "Which country hosted many rounds of indirect Israel-Hamas negotiations in Doha?",
//     options: ["Qatar", "Oman", "Saudi Arabia", "Jordan"],
//     correct: 0,
//     explanation:
//       "Qatar hosted important rounds of indirect negotiations between Israel and Hamas.",
//   },

//   {
//     id: 38,
//     source: "Global Current Affairs",
//     question:
//       "Which international organization is responsible for global public-health coordination during humanitarian crises?",
//     options: ["World Health Organization", "World Bank", "IMF", "WTO"],
//     correct: 0,
//     explanation:
//       "The World Health Organization coordinates international public-health responses.",
//   },

//   {
//     id: 39,
//     source: "Global Current Affairs",
//     question: "What is the approximate area of the Gaza Strip?",
//     options: [
//       "About 365 km²",
//       "About 1,500 km²",
//       "About 5,000 km²",
//       "About 10,000 km²",
//     ],
//     correct: 0,
//     explanation: "The Gaza Strip covers approximately 365 square kilometres.",
//   },

//   {
//     id: 40,
//     source: "Global Current Affairs",
//     question:
//       "Which body of water is particularly important for Gaza's geographic location?",
//     options: ["Mediterranean Sea", "Persian Gulf", "Indian Ocean", "Red Sea"],
//     correct: 0,
//     explanation: "Gaza lies on the Mediterranean coast.",
//   },

//   // ========================================================================
//   // PAKISTAN - INDIA 2025
//   // ========================================================================

//   {
//     id: 41,
//     source: "Global Current Affairs",
//     question: "On which date did the Pahalgam attack occur in 2025?",
//     options: ["22 April 2025", "7 May 2025", "10 May 2025", "14 August 2025"],
//     correct: 0,
//     explanation:
//       "The deadly attack on tourists in Pahalgam occurred on 22 April 2025.",
//   },

//   {
//     id: 42,
//     source: "Global Current Affairs",
//     question: "In which region did the April 2025 attack on tourists occur?",
//     options: [
//       "Pahalgam in Indian-administered Kashmir",
//       "Ladakh",
//       "Punjab",
//       "Rajasthan",
//     ],
//     correct: 0,
//     explanation:
//       "The attack took place in Pahalgam in Indian-administered Kashmir.",
//   },

//   {
//     id: 43,
//     source: "Global Current Affairs",
//     question:
//       "Which two countries became involved in the military conflict in May 2025?",
//     options: [
//       "Pakistan and India",
//       "Pakistan and Afghanistan",
//       "India and China",
//       "Iran and India",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan and India engaged in several days of military confrontation in May 2025.",
//   },

//   {
//     id: 44,
//     source: "Global Current Affairs",
//     question:
//       "What was Pakistan's military operation launched on 10 May 2025 called?",
//     options: [
//       "Operation Bunyan-ul-Marsoos",
//       "Operation Zarb-e-Azb",
//       "Operation Rah-e-Nijat",
//       "Operation Swift Retort",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan announced Operation Bunyan-ul-Marsoos during the May 2025 conflict.",
//   },

//   {
//     id: 45,
//     source: "Global Current Affairs",
//     question:
//       "Operation Bunyan-ul-Marsoos was launched in response to military action by which country?",
//     options: ["India", "Afghanistan", "Iran", "China"],
//     correct: 0,
//     explanation:
//       "Pakistan stated that Operation Bunyan-ul-Marsoos was launched in response to Indian attacks.",
//   },

//   {
//     id: 46,
//     source: "Global Current Affairs",
//     question:
//       "On which date did Pakistan and India announce a ceasefire understanding in May 2025?",
//     options: ["10 May 2025", "7 May 2025", "12 May 2025", "15 May 2025"],
//     correct: 0,
//     explanation:
//       "Pakistan and India agreed to a ceasefire understanding on 10 May 2025.",
//   },

//   {
//     id: 47,
//     source: "Global Current Affairs",
//     question:
//       "Which international power played a diplomatic role in helping Pakistan and India reach the May 2025 ceasefire?",
//     options: ["United States", "Russia", "China", "France"],
//     correct: 0,
//     explanation:
//       "The United States, including President Donald Trump and US officials, was involved in diplomatic efforts surrounding the ceasefire.",
//   },

//   {
//     id: 48,
//     source: "Global Current Affairs",
//     question: "What is the capital of Pakistan?",
//     options: ["Islamabad", "Karachi", "Lahore", "Rawalpindi"],
//     correct: 0,
//     explanation: "Islamabad is the capital of Pakistan.",
//   },

//   {
//     id: 49,
//     source: "Global Current Affairs",
//     question: "What is the capital of India?",
//     options: ["New Delhi", "Mumbai", "Kolkata", "Bengaluru"],
//     correct: 0,
//     explanation: "New Delhi is the capital of India.",
//   },

//   {
//     id: 50,
//     source: "Global Current Affairs",
//     question:
//       "Pakistan and India are both members of which international organization?",
//     options: ["United Nations", "NATO", "European Union", "G7"],
//     correct: 0,
//     explanation: "Both Pakistan and India are members of the United Nations.",
//   },

//   {
//     id: 51,
//     source: "Global Current Affairs",
//     question:
//       "Which disputed region has historically been the main territorial issue between Pakistan and India?",
//     options: ["Kashmir", "Tibet", "Balochistan", "Sindh"],
//     correct: 0,
//     explanation:
//       "Kashmir remains the central territorial dispute between Pakistan and India.",
//   },

//   {
//     id: 52,
//     source: "Global Current Affairs",
//     question:
//       "Which treaty governs the sharing of the Indus River system between Pakistan and India?",
//     options: [
//       "Indus Waters Treaty",
//       "Simla Agreement",
//       "Tashkent Agreement",
//       "Lahore Declaration",
//     ],
//     correct: 0,
//     explanation:
//       "The Indus Waters Treaty governs the use of the Indus river system by Pakistan and India.",
//   },

//   {
//     id: 53,
//     source: "Global Current Affairs",
//     question: "In which year was the Indus Waters Treaty signed?",
//     options: ["1960", "1947", "1972", "1999"],
//     correct: 0,
//     explanation: "The Indus Waters Treaty was signed in 1960.",
//   },

//   {
//     id: 54,
//     source: "Global Current Affairs",
//     question: "Which organization helped broker the Indus Waters Treaty?",
//     options: ["World Bank", "United Nations", "IMF", "Asian Development Bank"],
//     correct: 0,
//     explanation:
//       "The World Bank played an important role in facilitating the Indus Waters Treaty.",
//   },

//   {
//     id: 55,
//     source: "Global Current Affairs",
//     question:
//       "Which river is one of the major western rivers allocated primarily to Pakistan under the Indus Waters Treaty?",
//     options: ["Indus", "Ganges", "Yamuna", "Brahmaputra"],
//     correct: 0,
//     explanation:
//       "The Indus is one of the three western rivers primarily allocated to Pakistan under the treaty.",
//   },

//   {
//     id: 56,
//     source: "Global Current Affairs",
//     question:
//       "Which country is Pakistan's eastern neighbour across the main international border?",
//     options: ["India", "Iran", "Afghanistan", "China"],
//     correct: 0,
//     explanation: "India lies to Pakistan's east.",
//   },

//   {
//     id: 57,
//     source: "Global Current Affairs",
//     question: "Which country borders Pakistan to the west and northwest?",
//     options: ["Afghanistan", "India", "China", "Iran"],
//     correct: 0,
//     explanation:
//       "Afghanistan borders Pakistan mainly to the west and northwest.",
//   },

//   {
//     id: 58,
//     source: "Global Current Affairs",
//     question:
//       "Which Pakistani city is located near the Wagah border crossing with India?",
//     options: ["Lahore", "Multan", "Peshawar", "Quetta"],
//     correct: 0,
//     explanation: "Wagah is near Lahore in Punjab.",
//   },

//   {
//     id: 59,
//     source: "Global Current Affairs",
//     question:
//       "What is the approximate length of the India-Pakistan international border?",
//     options: [
//       "About 3,300 km",
//       "About 800 km",
//       "About 6,000 km",
//       "About 10,000 km",
//     ],
//     correct: 0,
//     explanation:
//       "The international boundary between Pakistan and India is roughly 3,300 kilometres long.",
//   },

//   {
//     id: 60,
//     source: "Global Current Affairs",
//     question:
//       "Which two countries possess nuclear weapons and were directly involved in the May 2025 conflict?",
//     options: [
//       "Pakistan and India",
//       "Pakistan and Iran",
//       "India and Iran",
//       "Pakistan and Afghanistan",
//     ],
//     correct: 0,
//     explanation: "Pakistan and India are both nuclear-armed states.",
//   },

//   // ========================================================================
//   // ISLAMABAD PEACE TALKS - US / IRAN 2026
//   // ========================================================================

//   {
//     id: 61,
//     source: "Global Current Affairs",
//     question:
//       "Which two countries held peace talks in Islamabad in April 2026?",
//     options: [
//       "United States and Iran",
//       "Pakistan and India",
//       "Russia and Ukraine",
//       "Israel and Palestine",
//     ],
//     correct: 0,
//     explanation:
//       "The United States and Iran held peace negotiations in Islamabad on 11-12 April 2026.",
//   },

//   {
//     id: 62,
//     source: "Global Current Affairs",
//     question: "On which dates were the 2026 Islamabad Peace Talks held?",
//     options: [
//       "11-12 April 2026",
//       "1-2 March 2026",
//       "20-21 May 2026",
//       "7-8 August 2026",
//     ],
//     correct: 0,
//     explanation: "The talks took place on 11 and 12 April 2026.",
//   },

//   {
//     id: 63,
//     source: "Global Current Affairs",
//     question: "Which country hosted the Islamabad Peace Talks?",
//     options: ["Pakistan", "Qatar", "Turkey", "Saudi Arabia"],
//     correct: 0,
//     explanation: "Pakistan hosted the talks in Islamabad.",
//   },

//   {
//     id: 64,
//     source: "Global Current Affairs",
//     question:
//       "Which US official headed the American delegation at the Islamabad Peace Talks?",
//     options: ["J.D. Vance", "Marco Rubio", "Antony Blinken", "Mike Pompeo"],
//     correct: 0,
//     explanation: "US Vice President J.D. Vance headed the American delegation.",
//   },

//   {
//     id: 65,
//     source: "Global Current Affairs",
//     question: "Who headed the Iranian delegation at the Islamabad Peace Talks?",
//     options: [
//       "Mohammad Bagher Ghalibaf",
//       "Masoud Pezeshkian",
//       "Abbas Araghchi",
//       "Ali Larijani",
//     ],
//     correct: 0,
//     explanation:
//       "The Iranian delegation was headed by Speaker of the Iranian Parliament Mohammad Bagher Ghalibaf.",
//   },

//   {
//     id: 66,
//     source: "Global Current Affairs",
//     question:
//       "Approximately how many hours of actual negotiations took place during the Islamabad Peace Talks?",
//     options: ["21 hours", "5 hours", "12 hours", "48 hours"],
//     correct: 0,
//     explanation:
//       "Pakistan's Foreign Office stated that the negotiations continued for approximately 21 hours of actual talks.",
//   },

//   {
//     id: 67,
//     source: "Global Current Affairs",
//     question: "What was one of the main subjects of the Islamabad Peace Talks?",
//     options: [
//       "Iran's nuclear programme",
//       "Kashmir",
//       "European Union membership",
//       "South China Sea",
//     ],
//     correct: 0,
//     explanation: "Iran's nuclear programme was among the key issues discussed.",
//   },

//   {
//     id: 68,
//     source: "Global Current Affairs",
//     question:
//       "Which Pakistani city became a diplomatic venue for US-Iran negotiations in April 2026?",
//     options: ["Islamabad", "Karachi", "Lahore", "Peshawar"],
//     correct: 0,
//     explanation: "Islamabad hosted the negotiations.",
//   },

//   {
//     id: 69,
//     source: "Global Current Affairs",
//     question:
//       "Which Pakistani Prime Minister received the US and Iranian delegations separately before the talks?",
//     options: [
//       "Shehbaz Sharif",
//       "Imran Khan",
//       "Nawaz Sharif",
//       "Shahid Khaqan Abbasi",
//     ],
//     correct: 0,
//     explanation:
//       "Prime Minister Shehbaz Sharif received the two delegations separately before negotiations.",
//   },

//   {
//     id: 70,
//     source: "Global Current Affairs",
//     question:
//       "What was Pakistan's stated diplomatic objective in hosting the US-Iran talks?",
//     options: [
//       "Facilitating dialogue and de-escalation",
//       "Joining the war",
//       "Changing Iran's government",
//       "Creating a military alliance against Iran",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan presented its role as one of facilitating dialogue, diplomacy and regional de-escalation.",
//   },

//   {
//     id: 71,
//     source: "Global Current Affairs",
//     question:
//       "Which organization was closely concerned with Iran's nuclear activities?",
//     options: [
//       "International Atomic Energy Agency",
//       "World Trade Organization",
//       "NATO",
//       "World Bank",
//     ],
//     correct: 0,
//     explanation:
//       "The International Atomic Energy Agency, or IAEA, monitors nuclear activities and safeguards.",
//   },

//   {
//     id: 72,
//     source: "Global Current Affairs",
//     question: "What does IAEA stand for?",
//     options: [
//       "International Atomic Energy Agency",
//       "International Arms and Energy Authority",
//       "International Atomic Energy Association",
//       "International Agency for Energy Affairs",
//     ],
//     correct: 0,
//     explanation: "IAEA stands for International Atomic Energy Agency.",
//   },

//   {
//     id: 73,
//     source: "Global Current Affairs",
//     question: "Which city is the headquarters of the IAEA?",
//     options: ["Vienna", "Geneva", "New York", "Paris"],
//     correct: 0,
//     explanation: "The IAEA is headquartered in Vienna, Austria.",
//   },

//   {
//     id: 74,
//     source: "Global Current Affairs",
//     question:
//       "Which agreement is the main international framework governing Iran's nuclear programme?",
//     options: ["JCPOA", "NATO Treaty", "START Treaty", "Dayton Agreement"],
//     correct: 0,
//     explanation:
//       "The Joint Comprehensive Plan of Action (JCPOA) was the major 2015 international nuclear agreement concerning Iran.",
//   },

//   {
//     id: 75,
//     source: "Global Current Affairs",
//     question: "What does JCPOA stand for?",
//     options: [
//       "Joint Comprehensive Plan of Action",
//       "Joint Council for Peace and Arms",
//       "Joint Comprehensive Peace Agreement",
//       "Justice and Cooperation Political Accord",
//     ],
//     correct: 0,
//     explanation: "JCPOA stands for Joint Comprehensive Plan of Action.",
//   },

//   // ========================================================================
//   // PAKISTAN - TÜRKİYE - SAUDI ARABIA
//   // ========================================================================

//   {
//     id: 76,
//     source: "Global Current Affairs",
//     question:
//       "Which three countries signed the Makkah Joint Defence Agreement in August 2026?",
//     options: [
//       "Pakistan, Türkiye and Saudi Arabia",
//       "Pakistan, Iran and Qatar",
//       "Türkiye, Iran and Iraq",
//       "Saudi Arabia, UAE and Egypt",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan, Türkiye and Saudi Arabia signed the Makkah Joint Defence Agreement.",
//   },

//   {
//     id: 77,
//     source: "Global Current Affairs",
//     question: "On which date was the Makkah Joint Defence Agreement signed?",
//     options: [
//       "7 August 2026",
//       "14 August 2026",
//       "31 August 2026",
//       "1 September 2026",
//     ],
//     correct: 0,
//     explanation: "The agreement was signed in Makkah on 7 August 2026.",
//   },

//   {
//     id: 78,
//     source: "Global Current Affairs",
//     question:
//       "In which city was the Pakistan-Türkiye-Saudi defence agreement signed?",
//     options: ["Makkah", "Riyadh", "Istanbul", "Islamabad"],
//     correct: 0,
//     explanation: "The Makkah Joint Defence Agreement was signed in Makkah.",
//   },

//   {
//     id: 79,
//     source: "Global Current Affairs",
//     question:
//       "What is the commonly used name of the Pakistan-Türkiye-Saudi defence agreement?",
//     options: [
//       "Makkah Joint Defence Agreement",
//       "Riyadh Security Treaty",
//       "Islamabad Defence Pact",
//       "Ankara Security Agreement",
//     ],
//     correct: 0,
//     explanation:
//       "It is commonly referred to as the Makkah Joint Defence Agreement or Makkah Accord.",
//   },

//   {
//     id: 80,
//     source: "Global Current Affairs",
//     question:
//       "What does the Makkah Joint Defence Agreement state regarding an armed attack on one member?",
//     options: [
//       "It is regarded as an attack on all three",
//       "It is treated only as a diplomatic dispute",
//       "Only the attacked country may respond",
//       "The UN automatically takes military command",
//     ],
//     correct: 0,
//     explanation:
//       "The agreement states that an armed attack against one of the three states shall be regarded as an attack against all.",
//   },

//   {
//     id: 81,
//     source: "Global Current Affairs",
//     question: "Which Turkish leader signed the Makkah Joint Defence Agreement?",
//     options: [
//       "Recep Tayyip Erdoğan",
//       "Hakan Fidan",
//       "Kemal Kılıçdaroğlu",
//       "Abdullah Gül",
//     ],
//     correct: 0,
//     explanation: "Turkish President Recep Tayyip Erdoğan signed the agreement.",
//   },

//   {
//     id: 82,
//     source: "Global Current Affairs",
//     question:
//       "Which Pakistani leader signed the Makkah Joint Defence Agreement?",
//     options: [
//       "Shehbaz Sharif",
//       "Asif Ali Zardari",
//       "Mohammad Ishaq Dar",
//       "Khawaja Asif",
//     ],
//     correct: 0,
//     explanation:
//       "Prime Minister Shehbaz Sharif signed the agreement on behalf of Pakistan.",
//   },

//   {
//     id: 83,
//     source: "Global Current Affairs",
//     question: "Which Saudi leader signed the Makkah Joint Defence Agreement?",
//     options: [
//       "Mohammed bin Salman",
//       "King Salman",
//       "Faisal bin Farhan",
//       "Khalid bin Salman",
//     ],
//     correct: 0,
//     explanation:
//       "Saudi Crown Prince and Prime Minister Mohammed bin Salman signed the agreement.",
//   },

//   {
//     id: 84,
//     source: "Global Current Affairs",
//     question:
//       "Which body was established under the Makkah Agreement to institutionalize cooperation?",
//     options: [
//       "Strategic Political and Defence Committee",
//       "Islamic Economic Council",
//       "Joint Parliamentary Assembly",
//       "Regional Trade Commission",
//     ],
//     correct: 0,
//     explanation:
//       "The Strategic Political and Defence Committee was established under the agreement.",
//   },

//   {
//     id: 85,
//     source: "Global Current Affairs",
//     question:
//       "Where did the first Strategic Political and Defence Committee meeting take place?",
//     options: ["Istanbul", "Makkah", "Islamabad", "Riyadh"],
//     correct: 0,
//     explanation: "The first meeting was held in Istanbul on 31 August 2026.",
//   },

//   {
//     id: 86,
//     source: "Global Current Affairs",
//     question:
//       "On which date did the first Strategic Political and Defence Committee meeting take place?",
//     options: [
//       "31 August 2026",
//       "7 August 2026",
//       "14 August 2026",
//       "1 September 2026",
//     ],
//     correct: 0,
//     explanation:
//       "The first committee meeting took place in Istanbul on 31 August 2026.",
//   },

//   {
//     id: 87,
//     source: "Global Current Affairs",
//     question:
//       "Where will the Secretariat of the Makkah Agreement be established?",
//     options: ["Saudi Arabia", "Pakistan", "Türkiye", "Qatar"],
//     correct: 0,
//     explanation:
//       "The agreement's Secretariat is to be established in Saudi Arabia.",
//   },

//   {
//     id: 88,
//     source: "Global Current Affairs",
//     question:
//       "For how long is the first Secretary-General of the Makkah Agreement initially expected to serve?",
//     options: ["Three years", "One year", "Five years", "Ten years"],
//     correct: 0,
//     explanation:
//       "The Secretariat is initially to be headed by a Secretary-General from Pakistan for three years.",
//   },

//   {
//     id: 89,
//     source: "Global Current Affairs",
//     question:
//       "Which country is initially designated to provide the Secretary-General for the Makkah Agreement?",
//     options: ["Pakistan", "Saudi Arabia", "Türkiye", "Qatar"],
//     correct: 0,
//     explanation: "The initial Secretary-General is to come from Pakistan.",
//   },

//   {
//     id: 90,
//     source: "Global Current Affairs",
//     question:
//       "Which UN Charter article was referenced in relation to individual and collective self-defence under the Makkah Agreement?",
//     options: ["Article 51", "Article 1", "Article 25", "Article 100"],
//     correct: 0,
//     explanation:
//       "The agreement refers to the inherent right of individual and collective self-defence under Article 51 of the UN Charter.",
//   },

//   // ========================================================================
//   // PAKISTAN - AFGHANISTAN PEACE PROCESS
//   // ========================================================================

//   {
//     id: 91,
//     source: "Global Current Affairs",
//     question:
//       "Which two countries held peace talks after major border clashes in October 2025?",
//     options: [
//       "Pakistan and Afghanistan",
//       "Pakistan and India",
//       "Iran and Afghanistan",
//       "India and Afghanistan",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan and Afghanistan entered negotiations after serious border clashes in October 2025.",
//   },

//   {
//     id: 92,
//     source: "Global Current Affairs",
//     question:
//       "Where were the first major October 2025 Pakistan-Afghanistan peace talks held?",
//     options: ["Doha", "Islamabad", "Istanbul", "Riyadh"],
//     correct: 0,
//     explanation: "The initial major talks were held in Doha.",
//   },

//   {
//     id: 93,
//     source: "Global Current Affairs",
//     question:
//       "Which two countries mediated the October 2025 Pakistan-Afghanistan talks?",
//     options: [
//       "Qatar and Türkiye",
//       "China and Russia",
//       "Iran and Saudi Arabia",
//       "United States and China",
//     ],
//     correct: 0,
//     explanation: "Qatar and Türkiye played important mediation roles.",
//   },

//   {
//     id: 94,
//     source: "Global Current Affairs",
//     question:
//       "On which date was an immediate Pakistan-Afghanistan ceasefire agreed in October 2025?",
//     options: [
//       "19 October 2025",
//       "7 October 2025",
//       "25 October 2025",
//       "31 October 2025",
//     ],
//     correct: 0,
//     explanation:
//       "The two sides agreed to an immediate ceasefire on 19 October 2025.",
//   },

//   {
//     id: 95,
//     source: "Global Current Affairs",
//     question:
//       "Where were follow-up Pakistan-Afghanistan talks held after the Doha negotiations?",
//     options: ["Istanbul", "Tehran", "Beijing", "Moscow"],
//     correct: 0,
//     explanation: "Follow-up negotiations were held in Istanbul.",
//   },

//   {
//     id: 96,
//     source: "Global Current Affairs",
//     question:
//       "Which two countries mediated the Istanbul round of Pakistan-Afghanistan talks?",
//     options: [
//       "Türkiye and Qatar",
//       "China and Russia",
//       "Iran and Oman",
//       "Saudi Arabia and UAE",
//     ],
//     correct: 0,
//     explanation: "Türkiye and Qatar mediated the Istanbul discussions.",
//   },

//   {
//     id: 97,
//     source: "Global Current Affairs",
//     question:
//       "What was one of Pakistan's principal security concerns in the Afghanistan talks?",
//     options: [
//       "Militant activity from Afghan territory",
//       "Trade with Europe",
//       "Kashmir",
//       "Nuclear energy",
//     ],
//     correct: 0,
//     explanation:
//       "Pakistan repeatedly raised concerns about militant attacks originating from Afghan territory.",
//   },

//   {
//     id: 98,
//     source: "Global Current Affairs",
//     question:
//       "Which militant organization has been a central security concern for Pakistan in relation to Afghanistan?",
//     options: ["Tehreek-e-Taliban Pakistan", "Hamas", "Hezbollah", "Houthis"],
//     correct: 0,
//     explanation:
//       "The Tehreek-e-Taliban Pakistan (TTP) has been a major concern in Pakistan-Afghanistan security discussions.",
//   },

//   {
//     id: 99,
//     source: "Global Current Affairs",
//     question: "What does TTP stand for?",
//     options: [
//       "Tehreek-e-Taliban Pakistan",
//       "Tehran Trade Partnership",
//       "Turkish Taliban Party",
//       "Transnational Terrorism Programme",
//     ],
//     correct: 0,
//     explanation: "TTP stands for Tehreek-e-Taliban Pakistan.",
//   },

//   {
//     id: 100,
//     source: "Global Current Affairs",
//     question:
//       "Which city hosted the later Pakistan-Afghanistan talks that ended without a final resolution in October 2025?",
//     options: ["Istanbul", "Doha", "Islamabad", "Kabul"],
//     correct: 0,
//     explanation: "The Istanbul talks ended without a final resolution.",
//   },

//   {
//     id: 101,
//     source: "Global Current Affairs",
//     question:
//       "Which two countries helped mediate the Pakistan-Afghanistan peace process in 2025?",
//     options: [
//       "Qatar and Türkiye",
//       "Pakistan and Iran",
//       "India and China",
//       "Russia and India",
//     ],
//     correct: 0,
//     explanation: "Qatar and Türkiye were key mediators in the talks.",
//   },

//   {
//     id: 102,
//     source: "Global Current Affairs",
//     question:
//       "Pakistan shares its longest international border with which country?",
//     options: ["India", "Afghanistan", "Iran", "China"],
//     correct: 0,
//     explanation: "Pakistan's longest international border is with India.",
//   },

//   {
//     id: 103,
//     source: "Global Current Affairs",
//     question:
//       "Which famous mountain pass historically connects Pakistan and Afghanistan?",
//     options: ["Khyber Pass", "Bolan Pass", "Khunjerab Pass", "Lowari Pass"],
//     correct: 0,
//     explanation:
//       "The Khyber Pass is the best-known historic route between Pakistan and Afghanistan.",
//   },

//   {
//     id: 104,
//     source: "Global Current Affairs",
//     question: "Which Pakistani province shares a long border with Afghanistan?",
//     options: ["Khyber Pakhtunkhwa", "Sindh", "Punjab", "Balochistan only"],
//     correct: 0,
//     explanation:
//       "Khyber Pakhtunkhwa shares a long border with Afghanistan, as does Balochistan.",
//   },

//   {
//     id: 105,
//     source: "Global Current Affairs",
//     question: "What is the capital of Afghanistan?",
//     options: ["Kabul", "Kandahar", "Herat", "Jalalabad"],
//     correct: 0,
//     explanation: "Kabul is the capital of Afghanistan.",
//   },

//   // ========================================================================
//   // OTHER MAJOR GLOBAL CURRENT AFFAIRS
//   // ========================================================================

//   {
//     id: 106,
//     source: "Global Current Affairs",
//     question:
//       "Which organization held its 80th General Assembly session in 2025?",
//     options: ["United Nations", "NATO", "OIC", "SAARC"],
//     correct: 0,
//     explanation:
//       "The United Nations held its 80th General Assembly session in 2025.",
//   },

//   {
//     id: 107,
//     source: "Global Current Affairs",
//     question: "Where is the headquarters of the United Nations?",
//     options: ["New York", "Geneva", "Paris", "Vienna"],
//     correct: 0,
//     explanation: "The UN headquarters is in New York City.",
//   },

//   {
//     id: 108,
//     source: "Global Current Affairs",
//     question: "Who was serving as UN Secretary-General during 2025-26?",
//     options: [
//       "António Guterres",
//       "Ban Ki-moon",
//       "Kofi Annan",
//       "Boutros Boutros-Ghali",
//     ],
//     correct: 0,
//     explanation:
//       "António Guterres was serving as UN Secretary-General during this period.",
//   },

//   {
//     id: 109,
//     source: "Global Current Affairs",
//     question: "Which country hosted COP30 in 2025?",
//     options: ["Brazil", "France", "United Arab Emirates", "United Kingdom"],
//     correct: 0,
//     explanation: "COP30 was held in Brazil in 2025.",
//   },

//   {
//     id: 110,
//     source: "Global Current Affairs",
//     question: "In which Brazilian city was COP30 held?",
//     options: ["Belém", "Brasília", "Rio de Janeiro", "São Paulo"],
//     correct: 0,
//     explanation: "COP30 was held in Belém, Brazil.",
//   },

//   {
//     id: 111,
//     source: "Global Current Affairs",
//     question: "What does COP stand for in the context of climate conferences?",
//     options: [
//       "Conference of the Parties",
//       "Council of Presidents",
//       "Committee on Pollution",
//       "Conference on Petroleum",
//     ],
//     correct: 0,
//     explanation: "COP stands for Conference of the Parties.",
//   },

//   {
//     id: 112,
//     source: "Global Current Affairs",
//     question:
//       "Which organization is responsible for the BRICS grouping's major summits?",
//     options: [
//       "BRICS member states",
//       "United Nations",
//       "NATO",
//       "European Union",
//     ],
//     correct: 0,
//     explanation:
//       "BRICS is a grouping of member states that conducts its own summits and cooperation mechanisms.",
//   },

//   {
//     id: 113,
//     source: "Global Current Affairs",
//     question: "Which country hosted the BRICS summit in 2025?",
//     options: ["Brazil", "Russia", "India", "China"],
//     correct: 0,
//     explanation: "Brazil hosted the BRICS summit in 2025.",
//   },

//   {
//     id: 114,
//     source: "Global Current Affairs",
//     question: "Which country hosted the G20 Leaders' Summit in 2025?",
//     options: ["South Africa", "Brazil", "India", "United States"],
//     correct: 0,
//     explanation:
//       "South Africa held the G20 presidency and hosted the 2025 G20 Leaders' Summit.",
//   },

//   {
//     id: 115,
//     source: "Global Current Affairs",
//     question:
//       "Which continent hosted the G20 Leaders' Summit for the first time in 2025?",
//     options: ["Africa", "Asia", "Europe", "South America"],
//     correct: 0,
//     explanation:
//       "South Africa's 2025 summit represented the first G20 Leaders' Summit hosted on the African continent.",
//   },

//   {
//     id: 116,
//     source: "Global Current Affairs",
//     question:
//       "Which international organization is headquartered in Geneva and is responsible for global trade rules?",
//     options: ["World Trade Organization", "World Bank", "IMF", "UNESCO"],
//     correct: 0,
//     explanation:
//       "The World Trade Organization is headquartered in Geneva, Switzerland.",
//   },

//   {
//     id: 117,
//     source: "Global Current Affairs",
//     question:
//       "Which organization is responsible for international monetary cooperation and financial stability?",
//     options: ["International Monetary Fund", "UNICEF", "WHO", "UNESCO"],
//     correct: 0,
//     explanation:
//       "The International Monetary Fund works on international monetary cooperation and financial stability.",
//   },

//   {
//     id: 118,
//     source: "Global Current Affairs",
//     question:
//       "Which European country remained at the center of the Russia-Ukraine war during 2025-26?",
//     options: ["Ukraine", "Poland", "Germany", "Romania"],
//     correct: 0,
//     explanation:
//       "Ukraine remained the principal country defending itself against Russia's invasion.",
//   },

//   {
//     id: 119,
//     source: "Global Current Affairs",
//     question:
//       "Which two countries were directly involved in the main Russia-Ukraine war?",
//     options: [
//       "Russia and Ukraine",
//       "Russia and Poland",
//       "Ukraine and Germany",
//       "Russia and France",
//     ],
//     correct: 0,
//     explanation:
//       "The main war has been between Russia and Ukraine since Russia's full-scale invasion in February 2022.",
//   },

//   {
//     id: 120,
//     source: "Global Current Affairs",
//     question:
//       "Which technology became one of the major international policy issues during 2025-26?",
//     options: [
//       "Artificial Intelligence",
//       "Steam engines",
//       "Telegraph",
//       "Typewriters",
//     ],
//     correct: 0,
//     explanation:
//       "Artificial Intelligence became a major international policy, economic, security and governance issue during 2025-26.",
//   },
// ];
 const questionBank = [
  // ========================================================================
  // IRAN - UNITED STATES - ISRAEL
  // ========================================================================

  {
    id: 1,
    source: "Global Current Affairs",
    question:
      "On which date did the major 2026 US-Israel military campaign against Iran begin?",
    options: [
      "10 March 2026",
      "28 February 2026",
      "7 April 2026",
      "15 January 2026",
    ],
    correct: 1,
    explanation:
      "The major 2026 military confrontation began on 28 February 2026 when Israel launched attacks on Iran, with the United States also becoming directly involved.",
  },

  {
    id: 2,
    source: "Global Current Affairs",
    question:
      "Which two countries launched the major military strikes against Iran on 28 February 2026?",
    options: [
      "United Kingdom and France",
      "Russia and China",
      "United States and Israel",
      "Turkey and Saudi Arabia",
    ],
    correct: 2,
    explanation:
      "The conflict began with coordinated US-Israeli military action against Iran.",
  },

  {
    id: 3,
    source: "Global Current Affairs",
    question:
      "What was one of the major issues at the center of the US-Iran dispute in 2026?",
    options: [
      "The South China Sea",
      "Iran's nuclear programme",
      "The Arctic Ocean",
      "The Panama Canal",
    ],
    correct: 1,
    explanation:
      "Iran's nuclear programme and its uranium enrichment activities remained central issues in negotiations and military tensions.",
  },

  {
    id: 4,
    source: "Global Current Affairs",
    question:
      "Which Iranian city was reported to have been struck at the beginning of the 2026 conflict?",
    options: ["Shiraz", "Tabriz", "Tehran", "Mashhad"],
    correct: 2,
    explanation:
      "Explosions were reported in Tehran following the initial strikes on 28 February 2026.",
  },

  {
    id: 5,
    source: "Global Current Affairs",
    question:
      "Which Iranian leader was serving as President during the 2026 conflict?",
    options: [
      "Ebrahim Raisi",
      "Mahmoud Ahmadinejad",
      "Masoud Pezeshkian",
      "Hassan Rouhani",
    ],
    correct: 2,
    explanation:
      "Masoud Pezeshkian was Iran's president during the 2026 conflict.",
  },

  {
    id: 6,
    source: "Global Current Affairs",
    question:
      "Which Iranian official was serving as Foreign Minister during the 2026 conflict?",
    options: [
      "Ali Shamkhani",
      "Hossein Amir-Abdollahian",
      "Abbas Araghchi",
      "Mohammad Javad Zarif",
    ],
    correct: 2,
    explanation:
      "Abbas Araghchi served as Iran's Foreign Minister during this period.",
  },

  {
    id: 7,
    source: "Global Current Affairs",
    question:
      "Which strategic waterway became a major concern during the 2026 Iran conflict?",
    options: [
      "Bering Strait",
      "Strait of Gibraltar",
      "Strait of Hormuz",
      "Bosporus",
    ],
    correct: 2,
    explanation:
      "The Strait of Hormuz became a major global concern because of its importance for international oil and energy shipments.",
  },

  {
    id: 8,
    source: "Global Current Affairs",
    question:
      "The Strait of Hormuz connects the Persian Gulf with which body of water?",
    options: [
      "Red Sea",
      "Gulf of Oman",
      "Black Sea",
      "Mediterranean Sea",
    ],
    correct: 1,
    explanation:
      "The Strait of Hormuz connects the Persian Gulf with the Gulf of Oman and the Arabian Sea beyond it.",
  },

  {
    id: 9,
    source: "Global Current Affairs",
    question:
      "Which Iranian military organization is commonly abbreviated as IRGC?",
    options: [
      "Islamic Republic General Command",
      "Iranian Republican Ground Corps",
      "Islamic Revolutionary Guard Corps",
      "Iranian Regional Guard Command",
    ],
    correct: 2,
    explanation: "IRGC stands for Islamic Revolutionary Guard Corps.",
  },

  {
    id: 10,
    source: "Global Current Affairs",
    question:
      "Which regional group based in Yemen became involved in the wider Middle East conflict?",
    options: ["Boko Haram", "Houthis", "PKK", "Taliban"],
    correct: 1,
    explanation:
      "The Iran-aligned Houthi movement in Yemen became involved in the wider regional conflict.",
  },

  {
    id: 11,
    source: "Global Current Affairs",
    question: "The Houthis are primarily based in which country?",
    options: ["Syria", "Yemen", "Lebanon", "Iraq"],
    correct: 1,
    explanation: "The Houthi movement is based in Yemen.",
  },

  {
    id: 12,
    source: "Global Current Affairs",
    question:
      "Which major international organization held an emergency Security Council meeting after the February 2026 Iran strikes?",
    options: ["SAARC", "NATO", "United Nations", "OIC"],
    correct: 2,
    explanation:
      "The United Nations Security Council convened an emergency meeting following the escalation.",
  },

  {
    id: 13,
    source: "Global Current Affairs",
    question:
      "Which UN official urged the parties involved in the February 2026 escalation to return to negotiations?",
    options: [
      "Kofi Annan",
      "Tedros Adhanom",
      "António Guterres",
      "Ban Ki-moon",
    ],
    correct: 2,
    explanation:
      "UN Secretary-General António Guterres called for de-escalation and a return to diplomacy.",
  },

  {
    id: 14,
    source: "Global Current Affairs",
    question:
      "Which country hosts the largest US military air base in the Middle East that became relevant to regional tensions?",
    options: ["Bahrain", "Qatar", "Oman", "Kuwait"],
    correct: 1,
    explanation:
      "Al Udeid Air Base in Qatar is a major US military facility in the region.",
  },

  {
    id: 15,
    source: "Global Current Affairs",
    question:
      "Which country became an important diplomatic channel for discussions involving Iran and the United States?",
    options: ["Indonesia", "South Africa", "Pakistan", "Brazil"],
    correct: 2,
    explanation:
      "Pakistan played a diplomatic role in facilitating US-Iran discussions during the 2026 crisis.",
  },

  {
    id: 16,
    source: "Global Current Affairs",
    question:
      "Which Pakistani city was reported in your source material as hosting US-Iran peace negotiations in April 2026?",
    options: ["Istanbul", "Islamabad", "Geneva", "Doha"],
    correct: 1,
    explanation:
      "The supplied question bank identifies Islamabad as the venue for the reported April 2026 talks.",
  },

  {
    id: 17,
    source: "Global Current Affairs",
    question:
      "Which major global commodity market was strongly affected by disruptions around the Strait of Hormuz?",
    options: ["Wheat", "Oil", "Cotton", "Coffee"],
    correct: 1,
    explanation:
      "The Strait of Hormuz is one of the world's most important energy shipping routes, making oil markets particularly sensitive to disruptions.",
  },

  {
    id: 18,
    source: "Global Current Affairs",
    question:
      "Which sea route was also affected by wider Middle East tensions involving the Houthis?",
    options: ["Baltic Sea", "Caribbean Sea", "Red Sea", "Caspian Sea"],
    correct: 2,
    explanation:
      "Houthi attacks affected shipping through the Red Sea and the wider Bab el-Mandeb route.",
  },

  {
    id: 19,
    source: "Global Current Affairs",
    question: "Bab el-Mandeb connects the Red Sea with which gulf?",
    options: [
      "Gulf of Mexico",
      "Persian Gulf",
      "Gulf of Aden",
      "Gulf of Oman",
    ],
    correct: 2,
    explanation:
      "Bab el-Mandeb is the strategic strait connecting the Red Sea with the Gulf of Aden.",
  },

  {
    id: 20,
    source: "Global Current Affairs",
    question:
      "What was a major diplomatic objective of the 2026 US-Iran talks?",
    options: [
      "Changing the UN headquarters",
      "Creating NATO membership for Iran",
      "Ending the military conflict and addressing nuclear issues",
      "Dividing Iraq",
    ],
    correct: 2,
    explanation:
      "The talks focused on ending hostilities and addressing issues surrounding Iran's nuclear programme and regional security.",
  },

  // ========================================================================
  // PALESTINE - ISRAEL - GAZA
  // ========================================================================

  {
    id: 21,
    source: "Global Current Affairs",
    question:
      "The Gaza war that began in 2023 was triggered by the Hamas attack on Israel on which date?",
    options: [
      "15 August 2023",
      "20 December 2023",
      "7 October 2023",
      "1 January 2023",
    ],
    correct: 2,
    explanation:
      "The present Gaza war began after the Hamas-led attack on southern Israel on 7 October 2023.",
  },

  {
    id: 22,
    source: "Global Current Affairs",
    question:
      "Which Palestinian armed group launched the 7 October 2023 attack on Israel?",
    options: ["Fatah", "Palestinian Islamic Jihad", "Hamas", "Hezbollah"],
    correct: 2,
    explanation:
      "The attack was led by Hamas, with other armed groups also involved.",
  },

  {
    id: 23,
    source: "Global Current Affairs",
    question: "Gaza is located on the eastern coast of which sea?",
    options: ["Black Sea", "Mediterranean Sea", "Red Sea", "Arabian Sea"],
    correct: 1,
    explanation: "The Gaza Strip lies along the Mediterranean coast.",
  },

  {
    id: 24,
    source: "Global Current Affairs",
    question:
      "Which two countries played major mediation roles in Gaza ceasefire negotiations during 2025?",
    options: [
      "China and Russia",
      "India and Iran",
      "Qatar and Egypt",
      "Pakistan and Turkey",
    ],
    correct: 2,
    explanation:
      "Qatar and Egypt were important mediators in negotiations between Israel and Hamas, with US involvement also significant.",
  },

  {
    id: 25,
    source: "Global Current Affairs",
    question:
      "Which country proposed a 60-day Gaza ceasefire plan in May 2025?",
    options: ["Russia", "United States", "Pakistan", "China"],
    correct: 1,
    explanation:
      "The United States proposed a 60-day ceasefire framework in May 2025.",
  },

  {
    id: 26,
    source: "Global Current Affairs",
    question:
      "The 2025 US Gaza ceasefire proposal included negotiations involving which Palestinian group?",
    options: ["Taliban", "Hamas", "Fatah only", "Hezbollah"],
    correct: 1,
    explanation:
      "Hamas was one of the principal parties involved in negotiations over the proposed ceasefire.",
  },

  {
    id: 27,
    source: "Global Current Affairs",
    question:
      "Which organization is the principal United Nations agency assisting Palestinian refugees?",
    options: ["UNDP", "UNRWA", "UNICEF", "UNESCO"],
    correct: 1,
    explanation:
      "UNRWA stands for United Nations Relief and Works Agency for Palestine Refugees in the Near East.",
  },

  {
    id: 28,
    source: "Global Current Affairs",
    question: "What does UNRWA stand for?",
    options: [
      "United Nations Regional Works Administration",
      "United Nations Relief and Works Agency",
      "United Nations Relief and Water Authority",
      "United Nations Refugee Welfare Association",
    ],
    correct: 1,
    explanation:
      "UNRWA stands for United Nations Relief and Works Agency for Palestine Refugees in the Near East.",
  },

  {
    id: 29,
    source: "Global Current Affairs",
    question:
      "Which organization warned repeatedly about the humanitarian situation in Gaza?",
    options: ["SAARC", "ASEAN", "United Nations", "NATO"],
    correct: 2,
    explanation:
      "Multiple UN agencies have reported on humanitarian conditions in Gaza.",
  },

  {
    id: 30,
    source: "Global Current Affairs",
    question: "Which city is the administrative center of the Palestinian Authority?",
    options: ["Hebron", "Gaza City", "Ramallah", "Jericho"],
    correct: 2,
    explanation:
      "Ramallah functions as the de facto administrative center of the Palestinian Authority.",
  },

  {
    id: 31,
    source: "Global Current Affairs",
    question: "Which city is the largest urban center in the Gaza Strip?",
    options: ["Khan Younis", "Gaza City", "Deir al-Balah", "Rafah"],
    correct: 1,
    explanation: "Gaza City is the largest urban center in the Gaza Strip.",
  },

  {
    id: 32,
    source: "Global Current Affairs",
    question:
      "Which crossing became a major route for humanitarian assistance and evacuations from Gaza?",
    options: [
      "Torkham Crossing",
      "Rafah Crossing",
      "Wagah Border",
      "Khyber Pass",
    ],
    correct: 1,
    explanation:
      "The Rafah Crossing connects Gaza with Egypt and has been central to humanitarian and evacuation arrangements.",
  },

  {
    id: 33,
    source: "Global Current Affairs",
    question: "Which country borders the Gaza Strip to the southwest?",
    options: ["Lebanon", "Syria", "Egypt", "Jordan"],
    correct: 2,
    explanation: "Egypt borders the Gaza Strip to the southwest.",
  },

  {
    id: 34,
    source: "Global Current Affairs",
    question:
      "Which armed group in Lebanon is closely associated with Iran and has been involved in the Israel conflict?",
    options: ["Houthis", "Hezbollah", "Taliban", "Hamas"],
    correct: 1,
    explanation:
      "Hezbollah is a Lebanon-based armed and political organization with close ties to Iran.",
  },

  {
    id: 35,
    source: "Global Current Affairs",
    question: "Which country is Hezbollah primarily based in?",
    options: ["Iraq", "Yemen", "Lebanon", "Syria"],
    correct: 2,
    explanation: "Hezbollah is based primarily in Lebanon.",
  },

  {
    id: 36,
    source: "Global Current Affairs",
    question:
      "Which international organization has repeatedly called for humanitarian access to Gaza?",
    options: ["WTO", "United Nations", "OPEC", "NATO"],
    correct: 1,
    explanation:
      "The United Nations and its agencies have repeatedly called for humanitarian access and assistance.",
  },

  {
    id: 37,
    source: "Global Current Affairs",
    question:
      "Which country hosted many rounds of indirect Israel-Hamas negotiations in Doha?",
    options: ["Jordan", "Oman", "Qatar", "Saudi Arabia"],
    correct: 2,
    explanation:
      "Qatar hosted important rounds of indirect negotiations between Israel and Hamas.",
  },

  {
    id: 38,
    source: "Global Current Affairs",
    question:
      "Which international organization is responsible for global public-health coordination during humanitarian crises?",
    options: ["IMF", "WHO", "World Bank", "WTO"],
    correct: 1,
    explanation:
      "The World Health Organization coordinates international public-health responses.",
  },

  {
    id: 39,
    source: "Global Current Affairs",
    question: "What is the approximate area of the Gaza Strip?",
    options: [
      "About 5,000 km²",
      "About 365 km²",
      "About 10,000 km²",
      "About 1,500 km²",
    ],
    correct: 1,
    explanation: "The Gaza Strip covers approximately 365 square kilometres.",
  },

  {
    id: 40,
    source: "Global Current Affairs",
    question:
      "Which body of water is particularly important for Gaza's geographic location?",
    options: ["Indian Ocean", "Red Sea", "Mediterranean Sea", "Persian Gulf"],
    correct: 2,
    explanation: "Gaza lies on the Mediterranean coast.",
  },

  // ========================================================================
  // PAKISTAN - INDIA 2025
  // ========================================================================

  {
    id: 41,
    source: "Global Current Affairs",
    question: "On which date did the Pahalgam attack occur in 2025?",
    options: ["10 May 2025", "22 April 2025", "14 August 2025", "7 May 2025"],
    correct: 1,
    explanation:
      "The deadly attack on tourists in Pahalgam occurred on 22 April 2025.",
  },

  {
    id: 42,
    source: "Global Current Affairs",
    question:
      "In which region did the April 2025 attack on tourists occur?",
    options: [
      "Punjab",
      "Pahalgam in Indian-administered Kashmir",
      "Rajasthan",
      "Ladakh",
    ],
    correct: 1,
    explanation:
      "The attack took place in Pahalgam in Indian-administered Kashmir.",
  },

  {
    id: 43,
    source: "Global Current Affairs",
    question:
      "Which two countries became involved in the military conflict in May 2025?",
    options: [
      "Iran and India",
      "Pakistan and India",
      "India and China",
      "Pakistan and Afghanistan",
    ],
    correct: 1,
    explanation:
      "Pakistan and India engaged in several days of military confrontation in May 2025.",
  },

  {
    id: 44,
    source: "Global Current Affairs",
    question:
      "What was Pakistan's military operation launched on 10 May 2025 called?",
    options: [
      "Operation Swift Retort",
      "Operation Bunyan-ul-Marsoos",
      "Operation Rah-e-Nijat",
      "Operation Zarb-e-Azb",
    ],
    correct: 1,
    explanation:
      "Pakistan announced Operation Bunyan-ul-Marsoos during the May 2025 conflict.",
  },

  {
    id: 45,
    source: "Global Current Affairs",
    question:
      "Operation Bunyan-ul-Marsoos was launched in response to military action by which country?",
    options: ["China", "India", "Afghanistan", "Iran"],
    correct: 1,
    explanation:
      "Pakistan stated that Operation Bunyan-ul-Marsoos was launched in response to Indian attacks.",
  },

  {
    id: 46,
    source: "Global Current Affairs",
    question:
      "On which date did Pakistan and India announce a ceasefire understanding in May 2025?",
    options: ["15 May 2025", "10 May 2025", "12 May 2025", "7 May 2025"],
    correct: 1,
    explanation:
      "Pakistan and India agreed to a ceasefire understanding on 10 May 2025.",
  },

  {
    id: 47,
    source: "Global Current Affairs",
    question:
      "Which international power played a diplomatic role in helping Pakistan and India reach the May 2025 ceasefire?",
    options: ["China", "France", "United States", "Russia"],
    correct: 2,
    explanation:
      "The United States, including President Donald Trump and US officials, was involved in diplomatic efforts surrounding the ceasefire.",
  },

  {
    id: 48,
    source: "Global Current Affairs",
    question: "What is the capital of Pakistan?",
    options: ["Rawalpindi", "Islamabad", "Lahore", "Karachi"],
    correct: 1,
    explanation: "Islamabad is the capital of Pakistan.",
  },

  {
    id: 49,
    source: "Global Current Affairs",
    question: "What is the capital of India?",
    options: ["Bengaluru", "New Delhi", "Mumbai", "Kolkata"],
    correct: 1,
    explanation: "New Delhi is the capital of India.",
  },

  {
    id: 50,
    source: "Global Current Affairs",
    question:
      "Pakistan and India are both members of which international organization?",
    options: ["G7", "United Nations", "European Union", "NATO"],
    correct: 1,
    explanation:
      "Both Pakistan and India are members of the United Nations.",
  },

  {
    id: 51,
    source: "Global Current Affairs",
    question:
      "Which disputed region has historically been the main territorial issue between Pakistan and India?",
    options: ["Sindh", "Tibet", "Kashmir", "Balochistan"],
    correct: 2,
    explanation:
      "Kashmir remains the central territorial dispute between Pakistan and India.",
  },

  {
    id: 52,
    source: "Global Current Affairs",
    question:
      "Which treaty governs the sharing of the Indus River system between Pakistan and India?",
    options: [
      "Lahore Declaration",
      "Indus Waters Treaty",
      "Tashkent Agreement",
      "Simla Agreement",
    ],
    correct: 1,
    explanation:
      "The Indus Waters Treaty governs the use of the Indus river system by Pakistan and India.",
  },

  {
    id: 53,
    source: "Global Current Affairs",
    question: "In which year was the Indus Waters Treaty signed?",
    options: ["1972", "1960", "1999", "1947"],
    correct: 1,
    explanation: "The Indus Waters Treaty was signed in 1960.",
  },

  {
    id: 54,
    source: "Global Current Affairs",
    question:
      "Which organization helped broker the Indus Waters Treaty?",
    options: ["IMF", "Asian Development Bank", "World Bank", "United Nations"],
    correct: 2,
    explanation:
      "The World Bank played an important role in facilitating the Indus Waters Treaty.",
  },

  {
    id: 55,
    source: "Global Current Affairs",
    question:
      "Which river is one of the major western rivers allocated primarily to Pakistan under the Indus Waters Treaty?",
    options: ["Brahmaputra", "Indus", "Ganges", "Yamuna"],
    correct: 1,
    explanation:
      "The Indus is one of the three western rivers primarily allocated to Pakistan under the treaty.",
  },

  {
    id: 56,
    source: "Global Current Affairs",
    question:
      "Which country is Pakistan's eastern neighbour across the main international border?",
    options: ["China", "India", "Iran", "Afghanistan"],
    correct: 1,
    explanation: "India lies to Pakistan's east.",
  },

  {
    id: 57,
    source: "Global Current Affairs",
    question:
      "Which country borders Pakistan to the west and northwest?",
    options: ["China", "Afghanistan", "India", "Iran"],
    correct: 1,
    explanation:
      "Afghanistan borders Pakistan mainly to the west and northwest.",
  },

  {
    id: 58,
    source: "Global Current Affairs",
    question:
      "Which Pakistani city is located near the Wagah border crossing with India?",
    options: ["Quetta", "Lahore", "Multan", "Peshawar"],
    correct: 1,
    explanation: "Wagah is near Lahore in Punjab.",
  },

  {
    id: 59,
    source: "Global Current Affairs",
    question:
      "What is the approximate length of the India-Pakistan international border?",
    options: [
      "About 6,000 km",
      "About 3,300 km",
      "About 10,000 km",
      "About 800 km",
    ],
    correct: 1,
    explanation:
      "The international boundary between Pakistan and India is roughly 3,300 kilometres long.",
  },

  {
    id: 60,
    source: "Global Current Affairs",
    question:
      "Which two countries possess nuclear weapons and were directly involved in the May 2025 conflict?",
    options: [
      "India and Iran",
      "Pakistan and India",
      "Pakistan and Afghanistan",
      "Pakistan and Iran",
    ],
    correct: 1,
    explanation:
      "Pakistan and India are both nuclear-armed states.",
  },

  // ========================================================================
  // US / IRAN 2026
  // ========================================================================

  {
    id: 61,
    source: "Global Current Affairs",
    question:
      "Which two countries were reported in the supplied material as holding peace talks in Islamabad in April 2026?",
    options: [
      "Russia and Ukraine",
      "Pakistan and India",
      "United States and Iran",
      "Israel and Palestine",
    ],
    correct: 2,
    explanation:
      "The supplied question bank identifies the United States and Iran as the participants.",
  },

  {
    id: 62,
    source: "Global Current Affairs",
    question:
      "On which dates were the reported 2026 Islamabad Peace Talks held?",
    options: [
      "20-21 May 2026",
      "11-12 April 2026",
      "7-8 August 2026",
      "1-2 March 2026",
    ],
    correct: 1,
    explanation:
      "The supplied question bank identifies 11 and 12 April 2026.",
  },

  {
    id: 63,
    source: "Global Current Affairs",
    question:
      "Which country was reported as hosting the Islamabad Peace Talks?",
    options: ["Saudi Arabia", "Turkey", "Pakistan", "Qatar"],
    correct: 2,
    explanation: "Pakistan hosted the reported talks in Islamabad.",
  },

  {
    id: 64,
    source: "Global Current Affairs",
    question:
      "Which US official was reported in the supplied material as heading the American delegation?",
    options: ["Mike Pompeo", "J.D. Vance", "Marco Rubio", "Antony Blinken"],
    correct: 1,
    explanation:
      "The supplied question bank identifies US Vice President J.D. Vance.",
  },

  {
    id: 65,
    source: "Global Current Affairs",
    question:
      "Who was reported in the supplied material as heading the Iranian delegation?",
    options: [
      "Abbas Araghchi",
      "Ali Larijani",
      "Mohammad Bagher Ghalibaf",
      "Masoud Pezeshkian",
    ],
    correct: 2,
    explanation:
      "The supplied question bank identifies Mohammad Bagher Ghalibaf.",
  },

  {
    id: 66,
    source: "Global Current Affairs",
    question:
      "Approximately how many hours of actual negotiations were reported during the Islamabad Peace Talks?",
    options: ["48 hours", "12 hours", "21 hours", "5 hours"],
    correct: 2,
    explanation:
      "The supplied question bank identifies approximately 21 hours of actual talks.",
  },

  {
    id: 67,
    source: "Global Current Affairs",
    question:
      "What was one of the reported main subjects of the Islamabad Peace Talks?",
    options: [
      "European Union membership",
      "Iran's nuclear programme",
      "South China Sea",
      "Kashmir",
    ],
    correct: 1,
    explanation:
      "Iran's nuclear programme was among the reported key issues.",
  },

  {
    id: 68,
    source: "Global Current Affairs",
    question:
      "Which Pakistani city became a diplomatic venue for the reported US-Iran negotiations in April 2026?",
    options: ["Peshawar", "Islamabad", "Karachi", "Lahore"],
    correct: 1,
    explanation: "Islamabad was identified as the venue.",
  },

  {
    id: 69,
    source: "Global Current Affairs",
    question:
      "Which Pakistani Prime Minister was reported as receiving the US and Iranian delegations separately?",
    options: [
      "Nawaz Sharif",
      "Shahid Khaqan Abbasi",
      "Shehbaz Sharif",
      "Imran Khan",
    ],
    correct: 2,
    explanation:
      "The supplied question bank identifies Prime Minister Shehbaz Sharif.",
  },

  {
    id: 70,
    source: "Global Current Affairs",
    question:
      "What was Pakistan's stated diplomatic objective in hosting the US-Iran talks?",
    options: [
      "Creating a military alliance against Iran",
      "Facilitating dialogue and de-escalation",
      "Joining the war",
      "Changing Iran's government",
    ],
    correct: 1,
    explanation:
      "Pakistan presented its role as one of facilitating dialogue, diplomacy and regional de-escalation.",
  },

  {
    id: 71,
    source: "Global Current Affairs",
    question:
      "Which organization was closely concerned with Iran's nuclear activities?",
    options: [
      "NATO",
      "International Atomic Energy Agency",
      "World Bank",
      "World Trade Organization",
    ],
    correct: 1,
    explanation:
      "The International Atomic Energy Agency, or IAEA, monitors nuclear activities and safeguards.",
  },

  {
    id: 72,
    source: "Global Current Affairs",
    question: "What does IAEA stand for?",
    options: [
      "International Agency for Energy Affairs",
      "International Atomic Energy Agency",
      "International Arms and Energy Authority",
      "International Atomic Energy Association",
    ],
    correct: 1,
    explanation: "IAEA stands for International Atomic Energy Agency.",
  },

  {
    id: 73,
    source: "Global Current Affairs",
    question: "Which city is the headquarters of the IAEA?",
    options: ["Paris", "Vienna", "New York", "Geneva"],
    correct: 1,
    explanation: "The IAEA is headquartered in Vienna, Austria.",
  },

  {
    id: 74,
    source: "Global Current Affairs",
    question:
      "Which agreement is the main international framework historically associated with Iran's nuclear programme?",
    options: ["START Treaty", "JCPOA", "Dayton Agreement", "NATO Treaty"],
    correct: 1,
    explanation:
      "The Joint Comprehensive Plan of Action (JCPOA) was the major 2015 international nuclear agreement concerning Iran.",
  },

  {
    id: 75,
    source: "Global Current Affairs",
    question: "What does JCPOA stand for?",
    options: [
      "Justice and Cooperation Political Accord",
      "Joint Comprehensive Plan of Action",
      "Joint Comprehensive Peace Agreement",
      "Joint Council for Peace and Arms",
    ],
    correct: 1,
    explanation:
      "JCPOA stands for Joint Comprehensive Plan of Action.",
  },

  // ========================================================================
  // PAKISTAN - TÜRKİYE - SAUDI ARABIA
  // ========================================================================

  {
    id: 76,
    source: "Global Current Affairs",
    question:
      "Which three countries signed the Makkah Joint Defence Agreement in August 2026?",
    options: [
      "Türkiye, Iran and Iraq",
      "Pakistan, Türkiye and Saudi Arabia",
      "Saudi Arabia, UAE and Egypt",
      "Pakistan, Iran and Qatar",
    ],
    correct: 1,
    explanation:
      "Pakistan, Türkiye and Saudi Arabia signed the Makkah Joint Defence Agreement.",
  },

  {
    id: 77,
    source: "Global Current Affairs",
    question:
      "On which date was the Makkah Joint Defence Agreement signed?",
    options: [
      "31 August 2026",
      "7 August 2026",
      "1 September 2026",
      "14 August 2026",
    ],
    correct: 1,
    explanation:
      "The agreement was signed in Makkah on 7 August 2026.",
  },

  {
    id: 78,
    source: "Global Current Affairs",
    question:
      "In which city was the Pakistan-Türkiye-Saudi defence agreement signed?",
    options: ["Istanbul", "Makkah", "Islamabad", "Riyadh"],
    correct: 1,
    explanation:
      "The Makkah Joint Defence Agreement was signed in Makkah.",
  },

  {
    id: 79,
    source: "Global Current Affairs",
    question:
      "What is the commonly used name of the Pakistan-Türkiye-Saudi defence agreement?",
    options: [
      "Islamabad Defence Pact",
      "Makkah Joint Defence Agreement",
      "Ankara Security Agreement",
      "Riyadh Security Treaty",
    ],
    correct: 1,
    explanation:
      "It is commonly referred to as the Makkah Joint Defence Agreement.",
  },

  {
    id: 80,
    source: "Global Current Affairs",
    question:
      "What does the Makkah Joint Defence Agreement state regarding an armed attack on one member?",
    options: [
      "Only the attacked country may respond",
      "It is regarded as an attack on all three",
      "The UN automatically takes military command",
      "It is treated only as a diplomatic dispute",
    ],
    correct: 1,
    explanation:
      "The agreement states that an armed attack against one of the three states shall be regarded as an attack against all.",
  },

  {
    id: 81,
    source: "Global Current Affairs",
    question:
      "Which Turkish leader signed the Makkah Joint Defence Agreement?",
    options: [
      "Abdullah Gül",
      "Recep Tayyip Erdoğan",
      "Hakan Fidan",
      "Kemal Kılıçdaroğlu",
    ],
    correct: 1,
    explanation:
      "Turkish President Recep Tayyip Erdoğan signed the agreement.",
  },

  {
    id: 82,
    source: "Global Current Affairs",
    question:
      "Which Pakistani leader signed the Makkah Joint Defence Agreement?",
    options: [
      "Khawaja Asif",
      "Shehbaz Sharif",
      "Asif Ali Zardari",
      "Mohammad Ishaq Dar",
    ],
    correct: 1,
    explanation:
      "Prime Minister Shehbaz Sharif signed the agreement on behalf of Pakistan.",
  },

  {
    id: 83,
    source: "Global Current Affairs",
    question:
      "Which Saudi leader signed the Makkah Joint Defence Agreement?",
    options: [
      "Faisal bin Farhan",
      "Khalid bin Salman",
      "Mohammed bin Salman",
      "King Salman",
    ],
    correct: 2,
    explanation:
      "Saudi Crown Prince and Prime Minister Mohammed bin Salman signed the agreement.",
  },

  {
    id: 84,
    source: "Global Current Affairs",
    question:
      "Which body was established under the Makkah Agreement to institutionalize cooperation?",
    options: [
      "Joint Parliamentary Assembly",
      "Strategic Political and Defence Committee",
      "Regional Trade Commission",
      "Islamic Economic Council",
    ],
    correct: 1,
    explanation:
      "The Strategic Political and Defence Committee was established under the agreement.",
  },

  {
    id: 85,
    source: "Global Current Affairs",
    question:
      "Where did the first Strategic Political and Defence Committee meeting take place?",
    options: ["Riyadh", "Istanbul", "Makkah", "Islamabad"],
    correct: 1,
    explanation:
      "The first meeting was held in Istanbul on 31 August 2026.",
  },

  {
    id: 86,
    source: "Global Current Affairs",
    question:
      "On which date did the first Strategic Political and Defence Committee meeting take place?",
    options: [
      "1 September 2026",
      "31 August 2026",
      "14 August 2026",
      "7 August 2026",
    ],
    correct: 1,
    explanation:
      "The first committee meeting took place in Istanbul on 31 August 2026.",
  },

  {
    id: 87,
    source: "Global Current Affairs",
    question:
      "Where will the Secretariat of the Makkah Agreement be established?",
    options: ["Türkiye", "Saudi Arabia", "Qatar", "Pakistan"],
    correct: 1,
    explanation:
      "The agreement's Secretariat is to be established in Saudi Arabia.",
  },

  {
    id: 88,
    source: "Global Current Affairs",
    question:
      "For how long is the first Secretary-General of the Makkah Agreement initially expected to serve?",
    options: ["Five years", "Three years", "Ten years", "One year"],
    correct: 1,
    explanation:
      "The Secretariat is initially to be headed by a Secretary-General from Pakistan for three years.",
  },

  {
    id: 89,
    source: "Global Current Affairs",
    question:
      "Which country is initially designated to provide the Secretary-General for the Makkah Agreement?",
    options: ["Qatar", "Pakistan", "Türkiye", "Saudi Arabia"],
    correct: 1,
    explanation:
      "The initial Secretary-General is to come from Pakistan.",
  },

  {
    id: 90,
    source: "Global Current Affairs",
    question:
      "Which UN Charter article was referenced in relation to individual and collective self-defence under the Makkah Agreement?",
    options: ["Article 100", "Article 51", "Article 25", "Article 1"],
    correct: 1,
    explanation:
      "The agreement refers to the inherent right of individual and collective self-defence under Article 51 of the UN Charter.",
  },

  // ========================================================================
  // PAKISTAN - AFGHANISTAN
  // ========================================================================

  {
    id: 91,
    source: "Global Current Affairs",
    question:
      "Which two countries held peace talks after major border clashes in October 2025?",
    options: [
      "India and Afghanistan",
      "Pakistan and Afghanistan",
      "Iran and Afghanistan",
      "Pakistan and India",
    ],
    correct: 1,
    explanation:
      "Pakistan and Afghanistan entered negotiations after serious border clashes in October 2025.",
  },

  {
    id: 92,
    source: "Global Current Affairs",
    question:
      "Where were the first major October 2025 Pakistan-Afghanistan peace talks held?",
    options: ["Istanbul", "Riyadh", "Doha", "Islamabad"],
    correct: 2,
    explanation:
      "The initial major talks were held in Doha.",
  },

  {
    id: 93,
    source: "Global Current Affairs",
    question:
      "Which two countries mediated the October 2025 Pakistan-Afghanistan talks?",
    options: [
      "United States and China",
      "China and Russia",
      "Qatar and Türkiye",
      "Iran and Saudi Arabia",
    ],
    correct: 2,
    explanation:
      "Qatar and Türkiye played important mediation roles.",
  },

  {
    id: 94,
    source: "Global Current Affairs",
    question:
      "On which date was an immediate Pakistan-Afghanistan ceasefire agreed in October 2025?",
    options: [
      "25 October 2025",
      "19 October 2025",
      "31 October 2025",
      "7 October 2025",
    ],
    correct: 1,
    explanation:
      "The two sides agreed to an immediate ceasefire on 19 October 2025.",
  },

  {
    id: 95,
    source: "Global Current Affairs",
    question:
      "Where were follow-up Pakistan-Afghanistan talks held after the Doha negotiations?",
    options: ["Beijing", "Moscow", "Istanbul", "Tehran"],
    correct: 2,
    explanation:
      "Follow-up negotiations were held in Istanbul.",
  },

  {
    id: 96,
    source: "Global Current Affairs",
    question:
      "Which two countries mediated the Istanbul round of Pakistan-Afghanistan talks?",
    options: [
      "Saudi Arabia and UAE",
      "Türkiye and Qatar",
      "China and Russia",
      "Iran and Oman",
    ],
    correct: 1,
    explanation:
      "Türkiye and Qatar mediated the Istanbul discussions.",
  },

  {
    id: 97,
    source: "Global Current Affairs",
    question:
      "What was one of Pakistan's principal security concerns in the Afghanistan talks?",
    options: [
      "Nuclear energy",
      "Militant activity from Afghan territory",
      "Kashmir",
      "Trade with Europe",
    ],
    correct: 1,
    explanation:
      "Pakistan repeatedly raised concerns about militant attacks originating from Afghan territory.",
  },

  {
    id: 98,
    source: "Global Current Affairs",
    question:
      "Which militant organization has been a central security concern for Pakistan in relation to Afghanistan?",
    options: ["Houthis", "Tehreek-e-Taliban Pakistan", "Hamas", "Hezbollah"],
    correct: 1,
    explanation:
      "The Tehreek-e-Taliban Pakistan (TTP) has been a major concern in Pakistan-Afghanistan security discussions.",
  },

  {
    id: 99,
    source: "Global Current Affairs",
    question: "What does TTP stand for?",
    options: [
      "Tehran Trade Partnership",
      "Tehreek-e-Taliban Pakistan",
      "Transnational Terrorism Programme",
      "Turkish Taliban Party",
    ],
    correct: 1,
    explanation: "TTP stands for Tehreek-e-Taliban Pakistan.",
  },

  {
    id: 100,
    source: "Global Current Affairs",
    question:
      "Which city hosted the later Pakistan-Afghanistan talks that ended without a final resolution in October 2025?",
    options: ["Kabul", "Istanbul", "Doha", "Islamabad"],
    correct: 1,
    explanation:
      "The Istanbul talks ended without a final resolution.",
  },

  {
    id: 101,
    source: "Global Current Affairs",
    question:
      "Which two countries helped mediate the Pakistan-Afghanistan peace process in 2025?",
    options: [
      "India and China",
      "Qatar and Türkiye",
      "Russia and India",
      "Pakistan and Iran",
    ],
    correct: 1,
    explanation:
      "Qatar and Türkiye were key mediators in the talks.",
  },

  {
    id: 102,
    source: "Global Current Affairs",
    question:
      "Pakistan shares its longest international border with which country?",
    options: ["Iran", "India", "China", "Afghanistan"],
    correct: 1,
    explanation:
      "Pakistan's longest international border is with India.",
  },

  {
    id: 103,
    source: "Global Current Affairs",
    question:
      "Which famous mountain pass historically connects Pakistan and Afghanistan?",
    options: [
      "Khunjerab Pass",
      "Khyber Pass",
      "Lowari Pass",
      "Bolan Pass",
    ],
    correct: 1,
    explanation:
      "The Khyber Pass is the best-known historic route between Pakistan and Afghanistan.",
  },

  {
    id: 104,
    source: "Global Current Affairs",
    question:
      "Which Pakistani province shares a long border with Afghanistan?",
    options: [
      "Sindh",
      "Khyber Pakhtunkhwa",
      "Punjab",
      "Balochistan only",
    ],
    correct: 1,
    explanation:
      "Khyber Pakhtunkhwa shares a long border with Afghanistan, as does Balochistan.",
  },

  {
    id: 105,
    source: "Global Current Affairs",
    question: "What is the capital of Afghanistan?",
    options: ["Herat", "Kabul", "Jalalabad", "Kandahar"],
    correct: 1,
    explanation: "Kabul is the capital of Afghanistan.",
  },

  // ========================================================================
  // OTHER MAJOR GLOBAL CURRENT AFFAIRS
  // ========================================================================

  {
    id: 106,
    source: "Global Current Affairs",
    question:
      "Which organization held its 80th General Assembly session in 2025?",
    options: ["SAARC", "United Nations", "NATO", "OIC"],
    correct: 1,
    explanation:
      "The United Nations held its 80th General Assembly session in 2025.",
  },

  {
    id: 107,
    source: "Global Current Affairs",
    question: "Where is the headquarters of the United Nations?",
    options: ["Paris", "New York", "Geneva", "Vienna"],
    correct: 1,
    explanation: "The UN headquarters is in New York City.",
  },

  {
    id: 108,
    source: "Global Current Affairs",
    question: "Who was serving as UN Secretary-General during 2025-26?",
    options: [
      "Kofi Annan",
      "António Guterres",
      "Boutros Boutros-Ghali",
      "Ban Ki-moon",
    ],
    correct: 1,
    explanation:
      "António Guterres was serving as UN Secretary-General during this period.",
  },

  {
    id: 109,
    source: "Global Current Affairs",
    question: "Which country hosted COP30 in 2025?",
    options: ["United Kingdom", "Brazil", "France", "United Arab Emirates"],
    correct: 1,
    explanation:
      "COP30 was held in Brazil in 2025.",
  },

  {
    id: 110,
    source: "Global Current Affairs",
    question: "In which Brazilian city was COP30 held?",
    options: ["Rio de Janeiro", "Belém", "São Paulo", "Brasília"],
    correct: 1,
    explanation:
      "COP30 was held in Belém, Brazil.",
  },

  {
    id: 111,
    source: "Global Current Affairs",
    question:
      "What does COP stand for in the context of climate conferences?",
    options: [
      "Committee on Pollution",
      "Conference of the Parties",
      "Conference on Petroleum",
      "Council of Presidents",
    ],
    correct: 1,
    explanation:
      "COP stands for Conference of the Parties.",
  },

  {
    id: 112,
    source: "Global Current Affairs",
    question:
      "Which organization is responsible for the BRICS grouping's major summits?",
    options: [
      "NATO",
      "BRICS member states",
      "European Union",
      "United Nations",
    ],
    correct: 1,
    explanation:
      "BRICS is a grouping of member states that conducts its own summits and cooperation mechanisms.",
  },

  {
    id: 113,
    source: "Global Current Affairs",
    question: "Which country hosted the BRICS summit in 2025?",
    options: ["China", "Brazil", "India", "Russia"],
    correct: 1,
    explanation:
      "Brazil hosted the BRICS summit in 2025.",
  },

  {
    id: 114,
    source: "Global Current Affairs",
    question: "Which country hosted the G20 Leaders' Summit in 2025?",
    options: ["United States", "South Africa", "Brazil", "India"],
    correct: 1,
    explanation:
      "South Africa held the G20 presidency and hosted the 2025 G20 Leaders' Summit.",
  },

  {
    id: 115,
    source: "Global Current Affairs",
    question:
      "Which continent hosted the G20 Leaders' Summit for the first time in 2025?",
    options: ["South America", "Africa", "Europe", "Asia"],
    correct: 1,
    explanation:
      "South Africa's 2025 summit represented the first G20 Leaders' Summit hosted on the African continent.",
  },

  {
    id: 116,
    source: "Global Current Affairs",
    question:
      "Which international organization is headquartered in Geneva and is responsible for global trade rules?",
    options: ["UNESCO", "World Trade Organization", "World Bank", "IMF"],
    correct: 1,
    explanation:
      "The World Trade Organization is headquartered in Geneva, Switzerland.",
  },

  {
    id: 117,
    source: "Global Current Affairs",
    question:
      "Which organization is responsible for international monetary cooperation and financial stability?",
    options: ["UNESCO", "International Monetary Fund", "WHO", "UNICEF"],
    correct: 1,
    explanation:
      "The International Monetary Fund works on international monetary cooperation and financial stability.",
  },

  {
    id: 118,
    source: "Global Current Affairs",
    question:
      "Which European country remained at the center of the Russia-Ukraine war during 2025-26?",
    options: ["Romania", "Ukraine", "Germany", "Poland"],
    correct: 1,
    explanation:
      "Ukraine remained the principal country defending itself against Russia's invasion.",
  },

  {
    id: 119,
    source: "Global Current Affairs",
    question:
      "Which two countries were directly involved in the main Russia-Ukraine war?",
    options: [
      "Ukraine and Germany",
      "Russia and Ukraine",
      "Russia and France",
      "Russia and Poland",
    ],
    correct: 1,
    explanation:
      "The main war has been between Russia and Ukraine since Russia's full-scale invasion in February 2022.",
  },

  {
    id: 120,
    source: "Global Current Affairs",
    question:
      "Which technology became one of the major international policy issues during 2025-26?",
    options: [
      "Telegraph",
      "Artificial Intelligence",
      "Typewriters",
      "Steam engines",
    ],
    correct: 1,
    explanation:
      "Artificial Intelligence became a major international policy, economic, security and governance issue during 2025-26.",
  },

  // ========================================================================
  // EXTRA GLOBAL CURRENT AFFAIRS - 2026
  // ========================================================================

  {
    id: 121,
    source: "Global Current Affairs",
    question:
      "Which two leaders are scheduled to meet in Washington on 24 September 2026?",
    options: [
      "Donald Trump and Xi Jinping",
      "Donald Trump and Vladimir Putin",
      "Xi Jinping and Emmanuel Macron",
      "Joe Biden and Xi Jinping",
    ],
    correct: 0,
    explanation:
      "US President Donald Trump and Chinese President Xi Jinping are scheduled to meet in Washington on 24 September 2026.",
  },

  {
    id: 122,
    source: "Global Current Affairs",
    question:
      "Which country is the focus of major US-China discussions regarding tensions in East Asia?",
    options: ["Taiwan", "Nepal", "Sri Lanka", "Mongolia"],
    correct: 0,
    explanation:
      "Taiwan remains an important issue in US-China relations and is among the topics surrounding the 2026 summit.",
  },

  {
    id: 123,
    source: "Global Current Affairs",
    question:
      "Which major technology issue is expected to be discussed in US-China relations in 2026?",
    options: [
      "Artificial intelligence",
      "Steam engines",
      "Printing presses",
      "Typewriters",
    ],
    correct: 0,
    explanation:
      "Artificial intelligence governance and safety have become major areas of US-China dialogue.",
  },

  {
    id: 124,
    source: "Global Current Affairs",
    question:
      "Which Chinese city is expected to host another US-China AI safety discussion in 2026?",
    options: ["Shenzhen", "Beijing", "Shanghai", "Guangzhou"],
    correct: 0,
    explanation:
      "US and Chinese officials said they would reconvene for AI safety discussions in Shenzhen.",
  },

  {
    id: 125,
    source: "Global Current Affairs",
    question:
      "Which country is currently facing continued international security pressure because of its war with Russia?",
    options: ["Ukraine", "Hungary", "Austria", "Portugal"],
    correct: 0,
    explanation:
      "Ukraine remains at the center of the Russia-Ukraine war.",
  },

  {
    id: 126,
    source: "Global Current Affairs",
    question:
      "Which military alliance has been reviewing US military engagement and deployments in Europe during 2026?",
    options: ["NATO", "ASEAN", "SAARC", "OIC"],
    correct: 0,
    explanation:
      "NATO and its members have been discussing defence spending, force posture and US military engagement in Europe.",
  },

  {
    id: 127,
    source: "Global Current Affairs",
    question:
      "Where is NATO's headquarters located?",
    options: ["Brussels", "Paris", "Berlin", "London"],
    correct: 0,
    explanation:
      "NATO headquarters is located in Brussels, Belgium.",
  },

  {
    id: 128,
    source: "Global Current Affairs",
    question:
      "Which organization is responsible for coordinating collective defence among its member states in the North Atlantic area?",
    options: ["NATO", "WTO", "OPEC", "WHO"],
    correct: 0,
    explanation:
      "NATO is a political and military alliance focused on collective defence.",
  },

  {
    id: 129,
    source: "Global Current Affairs",
    question:
      "Which country is currently central to the Middle East energy-security concerns surrounding the Strait of Hormuz?",
    options: ["Iran", "Brazil", "Canada", "Japan"],
    correct: 0,
    explanation:
      "Iran is central to current tensions surrounding the Strait of Hormuz.",
  },

  {
    id: 130,
    source: "Global Current Affairs",
    question:
      "Which country is facing attacks from the Iran-aligned Houthi movement in the latest 2026 regional escalation?",
    options: ["Saudi Arabia", "Morocco", "Tunisia", "Algeria"],
    correct: 0,
    explanation:
      "Saudi Arabia has faced attacks by the Houthi movement during the current regional escalation.",
  },

  {
    id: 131,
    source: "Global Current Affairs",
    question:
      "Which international shipping route is closely connected to the Bab el-Mandeb Strait?",
    options: ["Red Sea route", "Panama Canal route", "Baltic Sea route", "North Sea route"],
    correct: 0,
    explanation:
      "Bab el-Mandeb provides an important maritime connection between the Red Sea and Gulf of Aden.",
  },

  {
    id: 132,
    source: "Global Current Affairs",
    question:
      "Which country is the headquarters location of the World Trade Organization?",
    options: ["Switzerland", "France", "United States", "Austria"],
    correct: 0,
    explanation:
      "The WTO headquarters is located in Geneva, Switzerland.",
  },

  {
    id: 133,
    source: "Global Current Affairs",
    question:
      "Which city is the headquarters of the International Monetary Fund?",
    options: ["Washington, D.C.", "Geneva", "London", "New York"],
    correct: 0,
    explanation:
      "The IMF is headquartered in Washington, D.C.",
  },

  {
    id: 134,
    source: "Global Current Affairs",
    question:
      "Which city is the headquarters of the World Health Organization?",
    options: ["Geneva", "Vienna", "Paris", "Rome"],
    correct: 0,
    explanation:
      "The World Health Organization is headquartered in Geneva, Switzerland.",
  },

  {
    id: 135,
    source: "Global Current Affairs",
    question:
      "Which organization is responsible for international civil aviation standards?",
    options: [
      "International Civil Aviation Organization",
      "International Maritime Organization",
      "World Trade Organization",
      "International Energy Agency",
    ],
    correct: 0,
    explanation:
      "ICAO develops international standards and recommended practices for civil aviation.",
  },

  {
    id: 136,
    source: "Global Current Affairs",
    question:
      "Where is the headquarters of the International Civil Aviation Organization?",
    options: ["Montreal", "Geneva", "New York", "Paris"],
    correct: 0,
    explanation:
      "ICAO is headquartered in Montreal, Canada.",
  },

  {
    id: 137,
    source: "Global Current Affairs",
    question:
      "Which country hosted COP30 in November 2025?",
    options: ["Brazil", "France", "India", "South Africa"],
    correct: 0,
    explanation:
      "COP30 took place in Belém, Brazil, in November 2025.",
  },

  {
    id: 138,
    source: "Global Current Affairs",
    question:
      "Which Brazilian city hosted the 2025 United Nations climate conference?",
    options: ["Belém", "Brasília", "Salvador", "Rio de Janeiro"],
    correct: 0,
    explanation:
      "The UN Climate Change Conference COP30 was held in Belém, Brazil.",
  },

  {
    id: 139,
    source: "Global Current Affairs",
    question:
      "Which country held the G20 presidency during 2025?",
    options: ["South Africa", "Brazil", "India", "United States"],
    correct: 0,
    explanation:
      "South Africa held the G20 presidency in 2025.",
  },

  {
    id: 140,
    source: "Global Current Affairs",
    question:
      "Which country held the BRICS presidency during 2025?",
    options: ["Brazil", "Russia", "China", "India"],
    correct: 0,
    explanation:
      "Brazil assumed the BRICS presidency for 2025.",
  },

  {
    id: 141,
    source: "Global Current Affairs",
    question:
      "Which organization is responsible for setting international standards in nuclear safety and safeguards?",
    options: [
      "International Atomic Energy Agency",
      "World Trade Organization",
      "NATO",
      "International Monetary Fund",
    ],
    correct: 0,
    explanation:
      "The IAEA works on nuclear safeguards, safety and peaceful uses of nuclear energy.",
  },

  {
    id: 142,
    source: "Global Current Affairs",
    question:
      "Which international organization is primarily responsible for global weather and climate cooperation?",
    options: [
      "World Meteorological Organization",
      "World Trade Organization",
      "UNICEF",
      "International Maritime Organization",
    ],
    correct: 0,
    explanation:
      "The World Meteorological Organization coordinates international cooperation in meteorology, climate and related sciences.",
  },

  {
    id: 143,
    source: "Global Current Affairs",
    question:
      "Which organization is responsible for international cooperation on maritime safety and shipping regulations?",
    options: [
      "International Maritime Organization",
      "International Civil Aviation Organization",
      "World Health Organization",
      "International Monetary Fund",
    ],
    correct: 0,
    explanation:
      "The International Maritime Organization develops global standards for the safety, security and environmental performance of international shipping.",
  },

  {
    id: 144,
    source: "Global Current Affairs",
    question:
      "Which major global economic issue was discussed in the 2026 US-China talks alongside AI and geopolitical matters?",
    options: [
      "Trade",
      "Antarctic tourism",
      "Space tourism only",
      "International football",
    ],
    correct: 0,
    explanation:
      "Trade remains a major issue in US-China relations, alongside technology and geopolitical matters.",
  },

  {
    id: 145,
    source: "Global Current Affairs",
    question:
      "Which three countries are members of the Makkah Joint Defence Agreement signed in August 2026?",
    options: [
      "Pakistan, Türkiye and Saudi Arabia",
      "Pakistan, Iran and Qatar",
      "Saudi Arabia, Egypt and UAE",
      "Türkiye, Iran and Iraq",
    ],
    correct: 0,
    explanation:
      "Pakistan, Türkiye and Saudi Arabia signed the Makkah Joint Defence Agreement on 7 August 2026.",
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

export default function GlobalCurrentAffairs() {
  const [practiceQuestions, setPracticeQuestions] = useState(() =>
    shuffleQuestions(questionBank).slice(0, 10),
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const question = practiceQuestions[currentQuestion];

  const answered = selectedAnswer !== null;

  const isLastQuestion = currentQuestion === practiceQuestions.length - 1;

  const practiceFinished = isLastQuestion && selectedAnswer !== null;

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
    setPracticeQuestions(shuffleQuestions(questionBank).slice(0, 10));

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

          <strong>Global Current Affairs</strong>
        </nav>

        {/* Hero */}

        <header className="synonyms-hero">
          <div className="synonyms-hero-icon">
            <FiBookOpen />
          </div>

          <div className="synonyms-hero-content">
            <span className="synonyms-eyebrow">ACADEMICS</span>

            <h1>Global Current Affairs</h1>

            <p>
              Stay updated with important national, regional and international
              developments relevant to Pakistan Armed Forces initial tests,
              interviews and general knowledge preparation.
            </p>
          </div>
        </header>

        {/* Introduction */}

        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>

            <div>
              <span className="section-label">INTRODUCTION</span>

              <h2>Global Current Affairs for Initial Tests</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Current affairs questions test your awareness of important
              political, diplomatic, military, economic, environmental and
              international developments.
            </p>

            <p>
              This section focuses on major events involving Pakistan and the
              wider world, including the Iran-US-Israel conflict, Palestine and
              Gaza, the 2025 Pakistan-India conflict, Operation
              Bunyan-ul-Marsoos, Islamabad Peace Talks, Pakistan-Türkiye-Saudi
              cooperation and Pakistan-Afghanistan diplomacy.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Current Affairs Strategy</strong>

                <p>
                  Do not memorize isolated names only. Understand the date,
                  location, countries involved, organization, agreement and
                  major purpose of each important event.
                </p>

                <span>Focus on who, what, when, where and why.</span>
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
                  <h3>Iran - United States - Israel</h3>

                  <p>
                    Major developments involving Iran, the United States,
                    Israel, nuclear negotiations, regional escalation, the
                    Strait of Hormuz and diplomatic efforts.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Palestine & Gaza</h3>

                  <p>
                    Gaza conflict developments, ceasefire negotiations,
                    humanitarian issues, regional actors and international
                    diplomacy.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Pakistan - India</h3>

                  <p>
                    Pahalgam attack, May 2025 military escalation, Operation
                    Bunyan-ul-Marsoos, ceasefire and Indus Waters Treaty
                    developments.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Pakistan & International Diplomacy</h3>

                  <p>
                    Islamabad Peace Talks, Makkah Joint Defence Agreement,
                    Pakistan-Afghanistan talks and other major international
                    developments.
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

              <h2>Global Current Affairs MCQs</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              This question bank contains{" "}
              <strong>{questionBank.length} Global Current Affairs MCQs</strong>
              covering major Pakistan, regional and international developments.
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
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                        width: "70px",
                      }}
                    >
                      #
                    </th>

                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Question
                    </th>

                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
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

              <h2>Important Current Affairs Tips</h2>
            </div>
          </div>

          <div className="tips-card">
            <div className="tip">
              <FiTarget />

              <div>
                <strong>Remember important dates</strong>

                <p>
                  Pay special attention to dates of military operations,
                  ceasefires, agreements, summits and major diplomatic meetings.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>Know the countries and organizations</strong>

                <p>
                  Learn which countries were involved and identify the relevant
                  international organizations and diplomatic forums.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiAward />

              <div>
                <strong>Understand the event, not just the name</strong>

                <p>
                  For agreements and operations, remember their purpose,
                  participants, location and major significance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Practice */}

        <section className="practice-section">
          <div className="practice-header">
            <div>
              <span className="section-label">INTERACTIVE PRACTICE</span>

              <h2>Test Your Global Current Affairs</h2>

              <p>
                10 questions are randomly selected from the complete Global
                Current Affairs question bank.
              </p>
            </div>

            <div className="practice-progress">
              <strong>{currentQuestion + 1}</strong>

              <span>/ {practiceQuestions.length}</span>
            </div>
          </div>

          {!practiceFinished ? (
            <div className="mcq-card">
              <div className="mcq-top">
                <span>
                  QUESTION {String(currentQuestion + 1).padStart(2, "0")}
                </span>

                <span>
                  Score: {score}/{currentQuestion}
                </span>
              </div>

              <h3>{question.question}</h3>

              <div className="mcq-options">
                {question.options.map((option, index) => {
                  const isCorrect = index === question.correct;

                  const isSelected = index === selectedAnswer;

                  let optionClass = "";

                  if (answered && isCorrect) {
                    optionClass = "correct";
                  } else if (answered && isSelected && !isCorrect) {
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

                      <span className="option-text">{option}</span>

                      {answered && isCorrect && (
                        <FiCheckCircle className="answer-icon" />
                      )}

                      {answered && isSelected && !isCorrect && (
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
                    <strong>Correct answer:</strong>{" "}
                    {question.options[question.correct]}
                  </p>

                  <div className="explanation">
                    <strong>Explanation</strong>

                    <p>{question.explanation}</p>
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
                  {isLastQuestion ? "Finish" : "Next Question"}

                  <FiArrowRight />
                </button>
              </div>
            </div>
          ) : (
            <div className="practice-result">
              <div className="result-icon">
                <FiAward />
              </div>

              <span className="section-label">PRACTICE COMPLETE</span>

              <h2>Well Done!</h2>

              <div className="result-score">
                <strong>{score}</strong>

                <span>/ {practiceQuestions.length}</span>
              </div>

              <p>
                You answered {score} out of {practiceQuestions.length} questions
                correctly.
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
          <span className="section-label">CONTINUE LEARNING</span>

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
