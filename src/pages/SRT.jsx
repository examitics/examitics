import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiInfo,
  FiPlay,
  FiRefreshCw,
  FiShield,
  FiTarget,
  FiVolume2,
} from "react-icons/fi";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

import "../styles/srt.css";

const SRT_TESTS = [
  {
    id: 1,
    title: "SRT Practice Test 1",
    level: "Foundation",
    description:
      "Practise responsibility, honesty and helpful action in everyday situations.",
    situations: [
      {
        question:
          "While travelling to an important examination, you witness a motorcycle colliding with a car at a busy intersection. The motorcyclist falls onto the road and appears seriously injured, while several people gather around him without taking action. Traffic continues moving dangerously close to the injured person, and you are already running late for your examination. What would you do?",
        sample:
          "I would check the scene for danger, call emergency services, help protect the injured person from traffic without moving them unnecessarily, and inform the examination centre about the delay.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "Your team has been assigned an important task, but two members strongly disagree about the method and begin arguing in front of everyone. The deadline is approaching, other members are becoming frustrated, and the disagreement is preventing any progress. What would you do to help the team move forward?",
        sample:
          "I would listen to both members, bring the discussion back to the task, compare the practical options and help the team agree on a clear plan with assigned responsibilities.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "You discover that you made a serious error in an assignment shortly before it must be submitted. Correcting it may take extra time, and admitting the mistake could affect how your supervisor views your work. What would you do?",
        sample:
          "I would acknowledge the error, correct it carefully, and inform the supervisor promptly if it could affect the deadline or final result.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "A close friend asks you to hide his mistake because revealing it may get him into trouble, but you know that keeping quiet could unfairly harm another person. Your friend insists that loyalty means supporting him. What would you do?",
        sample:
          "I would explain that I cannot conceal something that may harm another person, encourage my friend to be honest, and help him correct the mistake fairly.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "During a crowded journey, you notice an elderly passenger who seems confused and is struggling to get off safely while other passengers push past. The vehicle is about to leave, and you are unsure whether the passenger has anyone waiting nearby. What would you do?",
        sample:
          "I would offer calm assistance, alert the driver or staff if needed, and make sure the passenger can get to a safe place without creating further risk.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 2,
    title: "SRT Practice Test 2",
    level: "Teamwork and Leadership",
    description:
      "Practise cooperation, initiative and fair leadership when working with others.",
    situations: [
      {
        question:
          "Your group is running out of time to complete a project, and one essential section remains unfinished. Some members have completed their tasks while others are unsure what to do next, and frustration is beginning to affect cooperation. What would you do?",
        sample:
          "I would identify the unfinished work, divide it into manageable tasks, match tasks to members' strengths and check progress while keeping everyone focused on the deadline.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "You are appointed to lead a group whose members have more experience than you. One experienced member openly questions your decisions, while the rest of the team waits to see how you respond. The task is important and must begin immediately. What would you do?",
        sample:
          "I would remain confident and respectful, hear the experienced member's concerns, use the team's expertise and take responsibility for making a practical decision.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "A capable member of your team is quiet during meetings and rarely shares ideas, although you believe their knowledge could improve the final result. The group tends to rely on the most outspoken people. How would you encourage useful participation?",
        sample:
          "I would invite the member to share their views, ask specific questions without putting them on the spot and make sure their contributions are considered fairly.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "Two members of your team claim credit for the same achievement, and their disagreement is starting to divide the group. You know several people contributed, but you do not have every detail yet. What would you do?",
        sample:
          "I would hear both sides, establish the facts and recognise each person's actual contribution instead of allowing the disagreement to damage teamwork.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "Your team receives an unexpected task while already handling several commitments. Some members want to refuse it, while others want to start without planning. How would you organise the team and respond to the new responsibility?",
        sample:
          "I would review priorities and capacity, clarify the new task's urgency, discuss a realistic plan with the team and communicate any resource or deadline concerns early.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 3,
    title: "SRT Practice Test 3",
    level: "Integrity at Work",
    description:
      "Practise ethical judgment, accountability and responsible professional conduct.",
    situations: [
      {
        question:
          "You are a junior employee in a company and discover credible evidence that a senior employee is involved in corruption. Reporting the matter directly to the owner could put your job at risk, but staying silent may allow the misconduct to continue and harm the company. What would you do?",
        sample:
          "I would preserve relevant facts lawfully, avoid making unsupported accusations, review the company's reporting policy and use an appropriate confidential channel or trusted authority, while protecting myself from unnecessary exposure.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "Your supervisor asks you to change figures in a report so that the department's performance looks better than it really was. You are told that everyone makes such adjustments and that refusing could affect your future at the company. What would you do?",
        sample:
          "I would refuse to falsify the report, explain that the figures must remain accurate and suggest presenting genuine results alongside a corrective action plan.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "You notice that a colleague has accidentally received confidential information intended for another department. The colleague suggests using it to gain an advantage before anyone notices. What would you do?",
        sample:
          "I would not use or circulate the information; I would notify the appropriate person and follow company procedures to protect confidentiality.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "A supplier offers you an expensive gift shortly before your team must choose which company receives a valuable contract. The supplier says it is only a gesture of friendship and expects no favour in return. What would you do?",
        sample:
          "I would decline the gift, disclose the offer through the proper process and ensure the contract decision is based on fair and documented criteria.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "You realise that a reimbursement claim you submitted includes an expense that should not have been included. The payment has already been approved, and nobody has questioned it. What would you do?",
        sample:
          "I would inform the relevant finance contact, correct the claim and arrange repayment or adjustment so the record remains accurate.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 4,
    title: "SRT Practice Test 4",
    level: "Career and Personal Decisions",
    description:
      "Practise balancing ambition, responsibilities, advice and long-term goals.",
    situations: [
      {
        question:
          "You have two career options: one offers rapid professional growth and challenging opportunities, but several relatives strongly disapprove of this path; the other offers slower advancement but would satisfy your family. Both are realistic choices, and you want to maintain family relationships without giving up your own future. What would you choose and why?",
        sample:
          "I would compare both paths realistically, consider my abilities and long-term goals, discuss the concerns respectfully with my relatives and choose the option I can responsibly commit to.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "You receive an opportunity to study in another city that could improve your future prospects, but your family is worried about your safety and wants you to stay nearby. The application deadline is approaching, and you have not yet discussed practical arrangements in detail. What would you do?",
        sample:
          "I would gather reliable information about accommodation, costs and safety, discuss a practical support plan with my family and make an informed decision before the deadline.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "Your family expects you to join the family business, while you have been offered a position in a field you have prepared for over several years. You respect your family's efforts and concerns, but the decision will shape your long-term career. What would you do?",
        sample:
          "I would explain my goals respectfully, listen to the family's practical concerns and explore a transition or support arrangement before making a clear decision about my career.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "You are offered a promotion that brings greater responsibility and learning, but it will require longer hours for a period when your family also needs your support. Declining may delay your career progression. How would you make the decision?",
        sample:
          "I would discuss the expected workload and duration, plan how to meet family responsibilities and decide based on a realistic assessment rather than fear or pressure alone.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "After months of preparation, you are accepted into a programme that interests you, but a more familiar option offers greater immediate security. People you trust disagree about which path is wiser. What would you do before deciding?",
        sample:
          "I would compare the long-term benefits, risks and requirements, seek informed advice and choose the option best aligned with my strengths and considered goals.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 5,
    title: "SRT Practice Test 5",
    level: "Emergency and Public Safety",
    description:
      "Practise calm action, risk awareness and appropriate emergency response.",
    situations: [
      {
        question:
          "You notice smoke coming from a room in a busy public building, but people nearby assume it is coming from routine maintenance. The corridor is crowded, and you cannot immediately tell whether anyone is inside the room. What would you do?",
        sample:
          "I would alert people, activate the building's emergency procedure, move away from the danger and contact emergency services without entering a potentially hazardous room.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "While walking home after dark, you hear someone calling for help from a poorly lit roadside area. You cannot see clearly what has happened, and approaching alone could expose you to danger. What would you do?",
        sample:
          "I would keep a safe distance, call emergency services and attract help from nearby people rather than approaching an unknown danger alone.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "A strong storm begins while you and several classmates are travelling, and water starts rising across the road ahead. Some people insist the vehicle can pass, while the driver hesitates. What would you do?",
        sample:
          "I would advise against entering floodwater, move to a safe location and follow the driver's or authorities' safety instructions.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "During a sports event, a participant collapses and appears unresponsive. The crowd gathers around, some people start shouting conflicting instructions, and the event organiser is not immediately visible. What would you do?",
        sample:
          "I would ask someone to contact emergency medical services, check for immediate danger, follow dispatcher guidance and keep the crowd clear for responders.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "You smell gas inside a building and hear a person suggest switching on a light to inspect the kitchen. Several people are present and seem unaware of the possible danger. What would you do?",
        sample:
          "I would avoid switches or flames, warn everyone to leave the area, and contact the gas emergency service from a safe location.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 6,
    title: "SRT Practice Test 6",
    level: "Study and Examination Challenges",
    description:
      "Practise preparation, honesty and resilience in academic pressure.",
    situations: [
      {
        question:
          "You have an important examination tomorrow and discover that one major topic has not been revised properly. Your friends suggest staying awake all night and trying to memorise everything, although you are already tired and struggling to concentrate. What would you do?",
        sample:
          "I would prioritise the most important topics, revise actively, get adequate rest and avoid an all-night plan that could undermine concentration.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "During an examination, you notice that the candidate sitting beside you is looking at your answer sheet and quietly asking for help. An invigilator is nearby, and you do not want to create a scene. What would you do?",
        sample:
          "I would keep my own work independent, avoid helping the candidate cheat and discreetly alert the invigilator if the behaviour continues.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "You receive a much lower result than expected despite studying regularly. Your family is disappointed, and you feel tempted to blame the paper or the teacher rather than examine your preparation. What would you do?",
        sample:
          "I would review my mistakes, ask for feedback, identify weak areas and make a more targeted plan for the next attempt.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "Your classmates plan to share answers during an online assessment and say that refusing will make you look disloyal. The assessment affects everyone's grades, and you know the rules prohibit collaboration. What would you do?",
        sample:
          "I would refuse to share answers, explain that it violates the rules and complete my own assessment honestly.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "You are preparing for several competitive tests with overlapping topics, but your current study plan leaves little time for revision or rest. You are working hard yet forgetting information quickly. What would you do?",
        sample:
          "I would create a realistic timetable, use spaced revision and practice questions, and protect sufficient sleep so preparation remains effective.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 7,
    title: "SRT Practice Test 7",
    level: "Conflict Resolution",
    description:
      "Practise fairness, communication and constructive responses to disagreement.",
    situations: [
      {
        question:
          "Two neighbours begin a heated argument over a parking space, and the disagreement attracts a crowd. One person starts making threats while the other moves closer in anger. You know both neighbours but do not want the situation to become violent. What would you do?",
        sample:
          "I would avoid taking sides in the heated moment, encourage distance and calm, and seek appropriate help if there is a risk of violence before discussing a fair solution.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "A friend makes an unfair comment about another member of your group, and others begin laughing. The person targeted becomes quiet and leaves the room, while your friend expects you to join in. What would you do?",
        sample:
          "I would not join the mockery, calmly challenge the hurtful comment and check on the person who was targeted.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "Your roommate repeatedly leaves shared spaces untidy despite several indirect hints from you. The problem is affecting your daily routine, and you are becoming irritated enough to consider retaliating by doing the same. What would you do?",
        sample:
          "I would speak privately and clearly about the impact, agree on specific shared responsibilities and seek a fair arrangement rather than retaliating.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "A colleague criticises your work in front of others, but some of the criticism is valid and some is based on a misunderstanding. You feel embarrassed and want to respond immediately. What would you do?",
        sample:
          "I would remain composed, acknowledge valid points, clarify the misunderstanding respectfully and discuss detailed feedback privately if needed.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "Two members of a volunteer group disagree about how to distribute limited supplies to families in need. Both believe their approach is fair, and the delay means some families may wait longer. What would you do?",
        sample:
          "I would compare needs using transparent criteria, listen to both proposals and help the group agree on a fair distribution process.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 8,
    title: "SRT Practice Test 8",
    level: "Responsibility and Reliability",
    description:
      "Practise dependable action, planning and accountability when commitments are at stake.",
    situations: [
      {
        question:
          "You promised to help organise an important community event, but an unexpected family responsibility arises on the same day. The organisers are depending on you for a task that cannot easily be left unattended, and there is limited time to find a replacement. What would you do?",
        sample:
          "I would assess the family need, inform the organisers immediately, arrange a capable replacement and provide the instructions needed to keep the event running.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "You are assigned a task with a deadline, but another team member has not provided information you need despite repeated requests. Your supervisor expects the completed work from you, and the delay is now affecting the whole project. What would you do?",
        sample:
          "I would follow up clearly, document the dependency, inform my supervisor early and complete all parts that do not depend on the missing information.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "You realise that you may arrive late for an interview because public transport has been disrupted by an unexpected road closure. You cannot control the delay, but you can still contact the organisation and consider alternatives. What would you do?",
        sample:
          "I would contact the organisation as soon as possible, explain the situation briefly and use a safe alternative route or transport option if available.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "A relative asks you to accompany them to an appointment at the same time you have agreed to help a classmate prepare for an important assessment. Both have made plans based on your promise. What would you do?",
        sample:
          "I would explain the conflict honestly, assess which commitment is most urgent and help arrange a suitable alternative rather than leaving either person uninformed.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "You are responsible for checking equipment before an activity and notice that one item is damaged. Replacing it may delay the start, while using it could create a safety risk. What would you do?",
        sample:
          "I would stop the unsafe item from being used, report the damage and arrange a safe replacement or alternative before proceeding.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 9,
    title: "SRT Practice Test 9",
    level: "Initiative and Problem Solving",
    description:
      "Practise identifying problems, acting within your role and finding workable solutions.",
    situations: [
      {
        question:
          "At a community event, the planned water supply suddenly becomes unavailable while many participants are arriving in hot weather. The organisers are busy handling registration, and no one has been assigned to solve the problem. What would you do?",
        sample:
          "I would alert the organisers, identify safe nearby sources of drinking water, coordinate volunteers and communicate clearly with participants while the supply is restored.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "You are working on a group assignment when the computer containing the latest version stops working. The deadline is close, and the team is unsure whether a backup exists or how much work might be lost. What would you do?",
        sample:
          "I would check for backups and recovery options, preserve the device and files, divide recovery tasks and inform the team about the likely impact on the deadline.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "Your usual route to an important appointment is blocked without warning, and your phone battery is nearly empty. You do not know the area well, and arriving on time matters. What would you do?",
        sample:
          "I would seek directions from a reliable source, conserve my phone battery, contact the appointment organiser if necessary and choose a safe alternative route.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "You notice that a repeated manual process is causing mistakes and wasting time in your workplace. You have an idea for improving it, but the change would affect other team members and should not disrupt current work. What would you do?",
        sample:
          "I would record examples of the errors, propose a small controlled trial and consult the team before implementing a change that affects others.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "A local community space has become littered after a public event, and people are walking past while complaining about the mess. You have limited supplies and cannot clean the entire area alone. What would you do?",
        sample:
          "I would begin with the most urgent litter, gather willing helpers and request suitable waste bags or support from the event organisers.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 10,
    title: "SRT Practice Test 10",
    level: "Friendship and Social Responsibility",
    description:
      "Practise supporting others without compromising safety, fairness or good judgment.",
    situations: [
      {
        question:
          "Your friend tells you that he has been feeling overwhelmed and has started missing classes, but asks you not to tell anyone because he fears being judged. You are concerned about his wellbeing and are unsure how serious the situation is. What would you do?",
        sample:
          "I would listen without judging, encourage him to seek appropriate support and involve a trusted adult or professional if there were signs of immediate danger.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "You see a group of students repeatedly mocking a new student because of their accent and background. The student tries to ignore them, but the behaviour continues whenever teachers are absent. What would you do?",
        sample:
          "I would calmly challenge the bullying, support the student and report repeated harassment to a responsible teacher or authority.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "A friend borrows money from you and later admits that he cannot repay it on the date agreed. You need the money for your own expenses, but you also know your friend is facing genuine difficulties. What would you do?",
        sample:
          "I would discuss a realistic repayment plan, explain my own financial limits and treat the matter honestly without humiliating my friend.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "Your friends plan to drive after a gathering even though the driver appears tired and has been drinking. They laugh off your concern and say the journey is short. What would you do?",
        sample:
          "I would prevent the unsafe journey if possible, arrange a sober driver or other transport and seek help if they still intended to drive dangerously.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "A friend asks you to spread a rumour about someone who has offended him. Other people are already discussing it online, and he claims that sharing it will teach the person a lesson. What would you do?",
        sample:
          "I would refuse to spread an unverified rumour, encourage a direct and fair resolution and avoid adding to online harm.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 11,
    title: "SRT Practice Test 11",
    level: "Adaptability and Setbacks",
    description:
      "Practise adjusting plans and learning from unexpected changes or disappointments.",
    situations: [
      {
        question:
          "Your team has prepared for weeks for an outdoor activity, but heavy rain makes the original location unsafe. Some members want to continue because all the arrangements have been paid for, while others want to cancel immediately. What would you do?",
        sample:
          "I would put safety first, review indoor or postponed alternatives and explain the options clearly so the team can make a practical decision.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "You have prepared carefully for a selection interview, but the interviewer asks questions about a topic you have not studied. You feel nervous and cannot recall every detail, although you understand some of the basic principles. What would you do?",
        sample:
          "I would stay calm, answer what I know accurately, admit the limits of my knowledge and explain my reasoning instead of guessing confidently.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "A project you have worked on for months is cancelled because the organisation changes its priorities. You feel disappointed, and the work may not be used, but you have gained experience and completed several useful components. What would you do?",
        sample:
          "I would accept the decision professionally, preserve useful work where appropriate, seek feedback and apply what I learned to future projects.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "You move to a new class or workplace where the routines and expectations are different from what you are used to. You are making avoidable mistakes and feel that others have adjusted more quickly. What would you do?",
        sample:
          "I would observe the routines, ask focused questions, seek feedback and practise the unfamiliar tasks until I become more effective.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "Your original plan for completing a major task fails halfway through because an essential resource is no longer available. The deadline remains fixed, and repeating the same approach is unlikely to work. What would you do?",
        sample:
          "I would identify what has failed, review alternative resources, revise the task plan and communicate any realistic changes needed to meet the deadline.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 12,
    title: "SRT Practice Test 12",
    level: "Community Service",
    description:
      "Practise civic responsibility, inclusion and constructive participation in the community.",
    situations: [
      {
        question:
          "After heavy rain, you notice that a drain near your neighbourhood is blocked with rubbish and water is beginning to collect near nearby homes. Residents are complaining, but no one has contacted the relevant local service. What would you do?",
        sample:
          "I would avoid unsafe contact with contaminated water, inform the local maintenance service, encourage residents to report the blockage and help clear only what can be handled safely.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "A community centre is arranging a learning session for children, but only a few volunteers have arrived and the session is due to start soon. Parents and children are already waiting, and the planned activities require more help than is available. What would you do?",
        sample:
          "I would quickly identify essential activities, ask available volunteers to cover priority roles and inform families of any adjustments while seeking additional help.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "You notice that a person with a mobility difficulty cannot access a public building because the entrance steps have no usable ramp. Staff members say the building has always been arranged this way. What would you do?",
        sample:
          "I would help the person access the building if safe, notify management and advocate for an accessible long-term solution through the proper channel.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "Several families in your area need basic supplies after an unexpected incident, but the donations collected are limited and people disagree about who should receive them first. What would you do?",
        sample:
          "I would assess urgency and vulnerability, establish transparent distribution criteria and coordinate the available supplies so they are allocated fairly.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "A public park has broken lights and damaged play equipment, and children continue using the unsafe area. Residents have discussed the issue many times but have not made a formal report. What would you do?",
        sample:
          "I would keep children away from dangerous equipment, document the hazards and report them to the responsible local authority or park management.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 13,
    title: "SRT Practice Test 13",
    level: "Ethical Pressure",
    description:
      "Practise making principled decisions when others encourage shortcuts or unfair advantages.",
    situations: [
      {
        question:
          "A person you know offers to help you secure a place in a competitive programme if you pay an unofficial fee. They claim this is normal and say you may lose the opportunity if you follow the official process. What would you do?",
        sample:
          "I would decline the unofficial payment, follow the formal application process and report suspected misconduct through a reliable channel if appropriate.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "During a team selection, a close friend asks you to give them a higher rating even though another candidate has performed more strongly. Your decision will affect who receives the opportunity, and your friend says they would do the same for you. What would you do?",
        sample:
          "I would apply the same fair criteria to every candidate, explain my decision respectfully and avoid favouritism even when a friend is disappointed.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "You find a set of examination questions on a shared computer before the test begins. You are not sure whether the file was placed there intentionally, but opening it could give you an unfair advantage. What would you do?",
        sample:
          "I would not open or use the file, notify the appropriate exam authority and ensure the issue is handled fairly.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "A colleague asks you to sign a safety checklist for equipment you have not inspected because the inspection is taking too long. The activity is scheduled to begin soon, and everyone is waiting for your signature. What would you do?",
        sample:
          "I would refuse to sign an inspection I did not complete, carry out the required check or find a qualified person to do so before the activity starts.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "You learn that a person has been excluded from a group opportunity because of a personal disagreement with the organiser, despite meeting the published requirements. You are not responsible for selection, but you can raise the concern. What would you do?",
        sample:
          "I would review the published criteria, raise the concern respectfully with the responsible authority and request a fair, evidence-based review.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 14,
    title: "SRT Practice Test 14",
    level: "Communication and Judgment",
    description:
      "Practise clear communication, careful listening and decisions based on reliable information.",
    situations: [
      {
        question:
          "A message spreads quickly in your class group claiming that an important examination has been postponed. Several students begin changing their travel plans, but the message does not include an official notice or reliable source. What would you do?",
        sample:
          "I would verify the announcement through the official examination authority, share only confirmed information and discourage others from relying on an unverified message.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "You must explain a complicated task to a group of new volunteers who have different levels of experience. The activity begins soon, and misunderstandings could lead to wasted time or safety problems. What would you do?",
        sample:
          "I would explain the task in clear steps, demonstrate important procedures, invite questions and check understanding before the volunteers begin.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "A person gives you incomplete instructions for an important task and then becomes unavailable. You can make an educated guess, but a wrong assumption may affect other people and create extra work. What would you do?",
        sample:
          "I would review available guidance, identify what remains unclear and seek confirmation before making assumptions that could affect others.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "During a meeting, a quiet member tries to raise a concern about the proposed plan, but more outspoken members repeatedly interrupt. The meeting is close to ending, and the concern may be important. What would you do?",
        sample:
          "I would give the member a chance to finish, ask the group to consider the concern and ensure the decision reflects relevant information rather than volume of opinion.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "You receive criticism from a customer who is upset about a delay that was caused by another department. The customer wants an immediate answer, but you do not yet know the full facts. What would you do?",
        sample:
          "I would listen calmly, acknowledge the inconvenience, check the facts with the relevant department and give the customer a clear update without making unsupported promises.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 15,
    title: "SRT Practice Test 15",
    level: "Resource Management",
    description:
      "Practise using limited time, money and materials efficiently and fairly.",
    situations: [
      {
        question:
          "You are organising a student activity with a small budget, and the cost of the venue rises unexpectedly. Cancelling would disappoint participants, but spending more than the available funds is not possible. What would you do?",
        sample:
          "I would review the budget, negotiate costs or choose a suitable lower-cost venue and keep participants informed rather than commit funds we do not have.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "Your team has one working computer available for several urgent tasks, and everyone believes their work should be completed first. The deadline for each task differs, and the team is becoming impatient. What would you do?",
        sample:
          "I would rank the tasks by urgency and consequence, agree on time slots and use the computer efficiently while exploring safe alternatives for other work.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "You are responsible for distributing a limited number of training materials, but more participants arrive than expected. Some people suggest giving all the materials to the first arrivals, while others want an equal allocation. What would you do?",
        sample:
          "I would assess the purpose and urgency, distribute materials transparently and arrange shared access or additional copies where feasible.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "You notice that your household expenses are exceeding the planned budget because of several small unplanned purchases. An important payment is due soon, and you need to avoid borrowing unnecessarily. What would you do?",
        sample:
          "I would review recent spending, prioritise essential bills, reduce nonessential purchases and plan future expenses before the due date.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "During a field activity, your group discovers that it has less food and drinking water than expected, and the return journey may take longer than planned. Everyone is tired and some members want to use the remaining supplies immediately. What would you do?",
        sample:
          "I would check the remaining supplies and group's needs, ration them sensibly, arrange a safe route and seek help if the journey risks exceeding available resources.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 16,
    title: "SRT Practice Test 16",
    level: "Courage and Accountability",
    description:
      "Practise speaking up responsibly, accepting consequences and protecting others.",
    situations: [
      {
        question:
          "You witness a person in authority speaking abusively to a junior colleague who is too afraid to respond. Others remain silent because they fear becoming targets themselves, and the incident appears to be affecting the colleague's confidence. What would you do?",
        sample:
          "I would support the colleague, document what I observed accurately and use an appropriate reporting channel while avoiding an unsafe confrontation.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "During a group activity, you realise that your earlier decision caused a delay and created extra work for everyone. No one has identified the cause yet, and you could avoid embarrassment by saying nothing. What would you do?",
        sample:
          "I would acknowledge my part in the delay, explain what happened without making excuses and help correct the problem.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "You see someone damaging public property and telling bystanders that nobody will challenge them. The person appears angry, and confronting them directly could make the situation unsafe. What would you do?",
        sample:
          "I would avoid escalating the confrontation, alert security or the relevant authority and provide factual information from a safe distance.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "A team member is being blamed for a failed task, but you know that you also missed an important step. The supervisor is asking for an explanation, and the team's trust depends on an honest account. What would you do?",
        sample:
          "I would give an honest account of my own missed step, clarify the facts and work with the team to correct the process.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "You are asked to take responsibility for a decision that was made collectively, but you are the most junior person present. Some colleagues suggest blaming an absent member who cannot explain their side. What would you do?",
        sample:
          "I would explain the decision accurately, share responsibility fairly and refuse to blame someone who cannot respond.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 17,
    title: "SRT Practice Test 17",
    level: "Planning and Time Management",
    description:
      "Practise setting priorities and completing competing responsibilities with discipline.",
    situations: [
      {
        question:
          "You have a major assignment due in three days, regular classes to attend and a family commitment that will take several hours. You have delayed starting one part of the assignment and are now worried that you cannot finish everything. What would you do?",
        sample:
          "I would break the assignment into essential sections, schedule focused work blocks, communicate early if necessary and keep the family commitment within a realistic plan.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "You are preparing for a competitive test while also working part-time. Your current schedule often breaks down when unexpected tasks arise, and you end up revising only the easiest subjects. What would you do?",
        sample:
          "I would build a flexible weekly timetable, prioritise weak subjects, reserve catch-up time and track progress so unexpected tasks do not erase revision.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "Your group has planned a presentation, but the members have not agreed on roles and the rehearsal is scheduled for tomorrow. Everyone has other commitments, and some sections overlap while others are missing. What would you do?",
        sample:
          "I would quickly assign clear roles, identify missing sections, set short checkpoints and rehearse the presentation together before the deadline.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "You have several small tasks to complete at work, along with one complex task that needs uninterrupted concentration. Colleagues keep asking for quick help, and the important task is falling behind. What would you do?",
        sample:
          "I would identify the complex task's priority, set a focused work period and agree on reasonable times to help colleagues without neglecting my responsibility.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "You are asked to attend an optional event on the same day you planned to prepare for an important assessment. Your friends say the event will be enjoyable and that you can study later, but you know your preparation is incomplete. What would you do?",
        sample:
          "I would assess how prepared I am, prioritise the assessment and attend the event only if I can do so without undermining my main commitment.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 18,
    title: "SRT Practice Test 18",
    level: "Fairness and Inclusion",
    description:
      "Practise impartial decisions and ensuring people are treated respectfully.",
    situations: [
      {
        question:
          "You are helping select participants for a limited training opportunity. One applicant is your close friend, while another applicant has stronger relevant experience, and both meet the minimum requirements. Your friend expects you to support their selection. What would you do?",
        sample:
          "I would use the agreed selection criteria consistently, declare any relevant conflict of interest and support the candidate whose qualifications best fit the opportunity.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "A new member joins your group and has difficulty understanding some instructions because they are unfamiliar with the language used by most members. The team is in a hurry and some people suggest leaving the new member out of the task. What would you do?",
        sample:
          "I would clarify the instructions, pair the new member with a supportive teammate and assign a meaningful role so the person can contribute effectively.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "You are distributing duties for a group project and notice that the same reliable members are repeatedly given the hardest work while others choose easier tasks. The deadline is near, and resentment is beginning to build. What would you do?",
        sample:
          "I would review the workload, redistribute tasks fairly according to capacity and make responsibilities visible to the whole team.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "A student who usually performs well makes a mistake during a public activity and is laughed at by the group. The mistake is fixable, but the student appears embarrassed and reluctant to continue. What would you do?",
        sample:
          "I would discourage ridicule, help correct the mistake and encourage the student to continue learning from it.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "You learn that a team member's idea was dismissed because of their age and lack of seniority, even though the idea may solve the problem. The group is about to finalise its plan. What would you do?",
        sample:
          "I would ask the group to assess the idea on its merits, invite the member to explain it and make the decision based on evidence rather than status.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 19,
    title: "SRT Practice Test 19",
    level: "Persistence and Self-Improvement",
    description:
      "Practise learning from feedback, sustained effort and recovering from disappointment.",
    situations: [
      {
        question:
          "You have failed a practical assessment twice despite practising regularly, and you are beginning to doubt whether you can improve. Your next attempt is several weeks away, but you are unsure which part of your preparation is ineffective. What would you do?",
        sample:
          "I would seek specific feedback, identify the weak steps, practise them deliberately and track progress before the next assessment.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "You start learning a difficult skill and make slower progress than others in your group. Some members tease you about your mistakes, and you are tempted to quit before the next practice session. What would you do?",
        sample:
          "I would focus on steady improvement, ask for useful guidance and continue practising rather than measure my progress only against others.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "Your supervisor gives you detailed criticism of a report you worked hard on, including several weaknesses you did not notice. You feel disappointed because you expected praise, but you have an opportunity to revise the work. What would you do?",
        sample:
          "I would review the feedback objectively, clarify anything I do not understand and revise the report using the criticism as a guide.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "You set a personal fitness goal but miss several planned sessions because of a busy schedule. You feel that the whole plan has failed and consider waiting until next month to start again. What would you do?",
        sample:
          "I would restart with a realistic schedule, identify what disrupted the plan and build consistency through manageable sessions.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "After completing a difficult project, you notice that the final result is acceptable but not as strong as you hoped. The team is ready to move on, and you have limited time to reflect before the next task begins. What would you do?",
        sample:
          "I would briefly review what worked and what did not, record lessons for the next project and apply the improvements without dwelling on disappointment.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
  {
    id: 20,
    title: "SRT Practice Test 20",
    level: "Complex Choices and Personal Values",
    description:
      "Practise weighing competing priorities, consequences and long-term responsibilities.",
    situations: [
      {
        question:
          "You are offered a prestigious opportunity that would require relocating for a year, while a close family member is going through a difficult period and has asked for your support. The opportunity could significantly advance your future, but accepting it would change your current responsibilities. What would you do?",
        sample:
          "I would assess the opportunity and family need honestly, discuss practical support options with my family and make a decision that respects both long-term goals and genuine responsibilities.",
        explanation:
          "Shows calm judgment, practical action and appropriate responsibility for the people affected.",
      },
      {
        question:
          "You can finish a group task quickly by allowing a small but important quality check to be skipped. The deadline is strict, and most team members prefer to submit immediately, but an undetected error could affect the people who rely on the result. What would you do?",
        sample:
          "I would insist on the essential quality check, focus on the highest-risk items and inform the team if the deadline cannot responsibly be met without it.",
        explanation:
          "Demonstrates clear communication, fairness and a focus on resolving the problem constructively.",
      },
      {
        question:
          "A friend asks you to choose between supporting them in a personal disagreement and remaining fair to another person who has also treated you well. You have heard only one side of the story, and both expect you to take a position. What would you do?",
        sample:
          "I would listen fairly to both sides, avoid taking sides without sufficient facts and encourage a respectful resolution based on what actually happened.",
        explanation:
          "Reflects honesty, accountability and willingness to take appropriate action rather than avoid responsibility.",
      },
      {
        question:
          "You must decide whether to spend your limited savings on a short-term benefit you strongly want or keep the money for an important future expense. Your friends encourage you to enjoy the present, while your family advises caution. What would you do?",
        sample:
          "I would compare the immediate benefit with the importance and timing of the future expense, then make a budget-based decision rather than follow pressure.",
        explanation:
          "Balances personal concerns with sound judgment, respect for others and long-term consequences.",
      },
      {
        question:
          "You have the chance to gain recognition by presenting a successful team project, but doing so would leave out the contributions of quieter members. The presentation is important for your future, and no one has explicitly asked you to acknowledge the whole team. What would you do?",
        sample:
          "I would present the work accurately, recognise the team's contributions and explain my own role honestly.",
        explanation:
          "Prioritises safety, fairness and timely communication while keeping the response realistic.",
      },
    ],
  },
];

const TOTAL_TIME = 120;

// Place these files in: public/sounds/
// Vite serves files in public/ from the site root.
const BUZZER_SOUND_PATH = "/sounds/buzzer.mp3";
const BEEP_SOUND_PATH = "/sounds/beep.mp3";

function playAudio(audioRef) {
  const audio = audioRef.current;
  if (!audio) return;

  try {
    // Restart the sound if the same file was played previously.
    audio.pause();
    audio.currentTime = 0;

    const playback = audio.play();
    if (playback && typeof playback.catch === "function") {
      playback.catch(() => {
        // The timer remains usable if playback is blocked by the browser.
      });
    }
  } catch {
    // The timer remains usable if audio is unavailable.
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds,
  ).padStart(2, "0")}`;
}

export default function SRT() {
  const [phase, setPhase] = useState("overview");
  const [selectedTestId, setSelectedTestId] = useState(null);
  const [currentSituation, setCurrentSituation] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const advanceRef = useRef(null);
  const isAdvancingRef = useRef(false);
  const buzzerAudioRef = useRef(null);
  const beepAudioRef = useRef(null);

  // Load the sound files once when this page mounts.
  useEffect(() => {
    const buzzerAudio = new Audio(BUZZER_SOUND_PATH);
    const beepAudio = new Audio(BEEP_SOUND_PATH);

    buzzerAudio.preload = "auto";
    beepAudio.preload = "auto";

    buzzerAudioRef.current = buzzerAudio;
    beepAudioRef.current = beepAudio;

    return () => {
      buzzerAudio.pause();
      beepAudio.pause();
      buzzerAudioRef.current = null;
      beepAudioRef.current = null;
    };
  }, []);

  const selectedTest =
    SRT_TESTS.find((test) => test.id === selectedTestId) || null;

  const situation = selectedTest?.situations[currentSituation];
  const totalSituations = selectedTest?.situations.length || 5;

  // The bar drains from 100% to 0% during each 120-second situation.
  const progress = (timeLeft / TOTAL_TIME) * 100;

  function startTest(testId) {
    setSelectedTestId(testId);
    setCurrentSituation(0);
    setTimeLeft(TOTAL_TIME);
    isAdvancingRef.current = false;

    // Buzzer marks the beginning of every test, including retakes.
    if (soundEnabled) playAudio(buzzerAudioRef);

    setPhase("test");
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function advanceSituation() {
    if (isAdvancingRef.current || phase !== "test") return;

    isAdvancingRef.current = true;

    if (currentSituation < totalSituations - 1) {
      // Beep signals that the previous situation has ended and the next
      // situation is about to appear.
      if (soundEnabled) playAudio(beepAudioRef);

      setCurrentSituation((previous) => previous + 1);
      setTimeLeft(TOTAL_TIME);
      isAdvancingRef.current = false;
    } else {
      // The final situation has ended: use the buzzer to mark test completion.
      if (soundEnabled) playAudio(buzzerAudioRef);
      setPhase("review");
    }
  }

  advanceRef.current = advanceSituation;

  useEffect(() => {
    if (phase !== "test") return undefined;

    const intervalId = window.setInterval(() => {
      setTimeLeft((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [phase, selectedTestId, currentSituation]);

  useEffect(() => {
    if (phase === "test" && timeLeft === 0) {
      advanceRef.current?.();
    }
  }, [phase, timeLeft, currentSituation]);

  useEffect(() => {
    if (phase !== "test") return undefined;

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [phase]);

  function returnToTests() {
    setPhase("overview");
    setSelectedTestId(null);
    setCurrentSituation(0);
    setTimeLeft(TOTAL_TIME);
    isAdvancingRef.current = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Helmet>
        <title>
          SRT Practice Tests | Situation Reaction Test Preparation | EXAMITICS
        </title>
        <meta
          name="description"
          content="Practise SRT-style situations with EXAMITICS. Take timed Situation Reaction Test practice sets, write responses on paper and review illustrative sample reactions."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.examitics.com/srt" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.examitics.com/" },
          {
            name: "ISSB Preparation",
            url: "https://www.examitics.com/issb-1",
          },
          { name: "SRT Practice", url: "https://www.examitics.com/srt" },
        ]}
      />

      <Navbar />

      <main className="srt-page">
        <div className="container-custom">
          {phase === "overview" && (
            <>
              <header className="srt-hero">
                <div className="srt-eyebrow">
                  <FiShield /> ISSB PSYCHOLOGICAL PRACTICE
                </div>

                <h1>Situation Reaction Test (SRT)</h1>

                <p className="srt-hero-description">
                  Practise thinking clearly, responding practically and handling
                  everyday situations under time pressure.
                </p>

                <div className="srt-quick-stats">
                  <div className="srt-stat">
                    <FiFileText />
                    <div>
                      <strong>20 practice tests</strong>
                      <span>100 situations in total</span>
                    </div>
                  </div>

                  <div className="srt-stat">
                    <FiClock />
                    <div>
                      <strong>2 minutes</strong>
                      <span>For each situation</span>
                    </div>
                  </div>

                  <div className="srt-stat">
                    <FiTarget />
                    <div>
                      <strong>10 minutes</strong>
                      <span>Total timed practice</span>
                    </div>
                  </div>
                </div>
              </header>
              <section className="srt-test-section">
                <div className="srt-section-heading">
                  <span className="srt-section-icon">
                    <FiFileText />
                  </span>
                  <div>
                    <h2>Choose Your Practice Test</h2>
                    <p>
                      Keep your paper and pen ready. Selecting a test starts it
                      immediately.
                    </p>
                  </div>
                </div>

                <div className="srt-test-grid">
                  {SRT_TESTS.map((test) => (
                    <article className="srt-test-card exa-card" key={test.id}>
                      <div className="srt-test-card-top">
                        <span className="srt-test-number">
                          {String(test.id).padStart(2, "0")}
                        </span>
                        <span className="srt-level">{test.level}</span>
                      </div>

                      <h3>{test.title}</h3>
                      <p>{test.description}</p>

                      <div className="srt-test-meta">
                        <span>
                          <FiFileText /> 5 situations
                        </span>
                        <span>
                          <FiClock /> 10 minutes
                        </span>
                      </div>

                      <button
                        type="button"
                        className="exa-btn exa-btn-primary srt-start-button"
                        onClick={() => startTest(test.id)}
                      >
                        <FiPlay /> Start Test {test.id}
                      </button>
                    </article>
                  ))}
                </div>
              </section>

              <section className="srt-info-grid">
                <article className="srt-info-card exa-card">
                  <div className="srt-info-icon">
                    <FiTarget />
                  </div>
                  <h2>Purpose of SRT Practice</h2>
                  <p>
                    SRT-style exercises present situations that require
                    practical decisions. This practice helps you reflect on
                    responsibility, initiative, judgment, teamwork and
                    problem-solving.
                  </p>
                </article>

                <article className="srt-info-card exa-card">
                  <div className="srt-info-icon">
                    <FiBookOpen />
                  </div>
                  <h2>How to Practise</h2>
                  <p>
                    Read one situation at a time and write your reaction on
                    paper. Use your own words and aim for a clear, relevant
                    response instead of a long explanation.
                  </p>
                </article>
              </section>

              <section className="srt-rules exa-card">
                <div className="srt-section-heading">
                  <span className="srt-section-icon">
                    <FiCheckCircle />
                  </span>
                  <div>
                    <h2>Rules & Instructions</h2>
                    <p>Read these instructions before starting a test.</p>
                  </div>
                </div>

                <ul className="srt-rule-list">
                  <li>
                    <span>01</span>
                    Keep a pen or pencil and a sheet of paper ready.
                  </li>
                  <li>
                    <span>02</span>
                    Choose from 20 practice tests, each containing five
                    situations.
                  </li>
                  <li>
                    <span>03</span>
                    You have two minutes to read and respond to each situation.
                  </li>
                  <li>
                    <span>04</span>
                    Write your own response on paper. Your written answer is not
                    entered or submitted on this website.
                  </li>
                  <li>
                    <span>05</span>
                    When time expires, a beep sounds and the next situation
                    appears automatically. A buzzer marks the beginning and end
                    of each test.
                  </li>
                  <li>
                    <span>06</span>
                    You cannot return to a previous situation during the test.
                  </li>
                  <li>
                    <span>07</span>
                    After the fifth situation, review all five situations with
                    illustrative sample reactions and explanations.
                  </li>
                  <li>
                    <span>08</span>
                    Respond naturally. There is no automatic pass/fail score and
                    the sample reactions are not official answer keys.
                  </li>
                </ul>

                <div className="srt-important-note">
                  <FiInfo />
                  <p>
                    <strong>Important:</strong> This is an EXAMITICS practice
                    format, not an exact reproduction of the official ISSB
                    assessment. The number of situations and timing may differ
                    from the actual assessment.
                  </p>
                </div>
              </section>

              <div className="srt-back-link">
                <Link to="/issb-1">
                  <FiArrowLeft /> Back to ISSB Preparation
                </Link>
              </div>
            </>
          )}

          {phase === "test" && selectedTest && situation && (
            <section className="srt-active-test">
              <div className="srt-active-top">
                <div>
                  <span className="srt-eyebrow">SRT PRACTICE</span>
                  <h1>{selectedTest.title}</h1>
                </div>

                <button
                  type="button"
                  className={`srt-sound-toggle ${
                    soundEnabled ? "enabled" : ""
                  }`}
                  onClick={() => setSoundEnabled((value) => !value)}
                  aria-pressed={soundEnabled}
                >
                  <FiVolume2 />
                  {soundEnabled ? "Sound on" : "Sound off"}
                </button>
              </div>

              <div className="srt-live-summary exa-card">
                <div>
                  <span className="srt-muted-label">CURRENT SITUATION</span>
                  <strong>
                    {currentSituation + 1} of {totalSituations}
                  </strong>
                </div>

                <div className="srt-live-timer">
                  <FiClock />
                  <strong className={timeLeft <= 15 ? "srt-time-warning" : ""}>
                    {formatTime(timeLeft)}
                  </strong>
                  <span>TIME LEFT</span>
                </div>
              </div>

              <div
                className="srt-progress-track"
                role="progressbar"
                aria-label="Time remaining for this situation"
                aria-valuemin={0}
                aria-valuemax={TOTAL_TIME}
                aria-valuenow={timeLeft}
              >
                <div
                  key={currentSituation}
                  className="srt-progress-fill"
                  style={{
                    width: `${progress}%`,
                    transition: "width 1s linear",
                  }}
                />
              </div>

              <article className="srt-situation-card exa-card">
                <div className="srt-situation-label">
                  SITUATION {String(currentSituation + 1).padStart(2, "0")}
                </div>

                <h5>{situation.question}</h5>

                <div className="srt-paper-reminder">
                  <FiFileText />
                  <p>
                    Write your reaction on paper. Keep it clear, practical and
                    relevant to the situation.
                  </p>
                </div>

                <div className="srt-timer-instruction">
                  <FiClock />
                  The next situation will appear automatically when the timer
                  reaches 00:00.
                </div>

                <div className="srt-live-footer">
                  <span>
                    <FiShield /> Stay focused
                  </span>
                  <span>
                    {currentSituation + 1} / {totalSituations}
                  </span>
                </div>
              </article>

              <p className="srt-test-disclaimer">
                EXAMITICS timed practice · Your paper responses are not recorded
                online.
              </p>
            </section>
          )}

          {phase === "review" && selectedTest && (
            <section className="srt-review-page">
              <div className="srt-review-hero">
                <span className="srt-review-success">
                  <FiCheckCircle />
                </span>
                <span className="srt-eyebrow">PRACTICE COMPLETED</span>
                <h1>Review Your Responses</h1>
                <p>
                  Compare your written reactions with these illustrative
                  examples. Different reasonable responses may also be valid.
                </p>
              </div>

              <div className="srt-review-summary exa-card">
                <div>
                  <strong>{selectedTest.title}</strong>
                  <span>5 situations completed</span>
                </div>
                <div>
                  <strong>10 minutes</strong>
                  <span>Scheduled practice time</span>
                </div>
              </div>

              <div className="srt-review-list">
                {selectedTest.situations.map((item, index) => (
                  <article className="srt-review-card exa-card" key={index}>
                    <div className="srt-review-question-label">
                      SITUATION {String(index + 1).padStart(2, "0")}
                    </div>

                    <h2>{item.question}</h2>

                    <div className="srt-sample-answer">
                      <h3>
                        <FiCheckCircle /> Illustrative Sample Reaction
                      </h3>
                      <p>{item.sample}</p>
                    </div>

                    <div className="srt-explanation">
                      <h3>Why this may be a practical response</h3>
                      <p>{item.explanation}</p>
                    </div>

                    <p className="srt-answer-note">
                      This is one possible example, not an official answer key
                      or a guarantee of selection.
                    </p>
                  </article>
                ))}
              </div>

              <div className="srt-review-actions">
                <button
                  type="button"
                  className="exa-btn exa-btn-primary"
                  onClick={() => startTest(selectedTest.id)}
                >
                  <FiRefreshCw /> Retake Test
                </button>

                <button
                  type="button"
                  className="exa-btn exa-btn-outline"
                  onClick={returnToTests}
                >
                  Choose Another Test <FiArrowRight />
                </button>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
