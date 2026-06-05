const opiQuestions = [
  // =========================================
  // LEADERSHIP
  // =========================================

  {
    id: 1,
    category: "leadership",
    reverse: false,
    statement: "I naturally take charge when a group faces confusion or uncertainty."
  },
  {
    id: 2,
    category: "leadership",
    reverse: false,
    statement: "People often trust me to coordinate activities and keep everyone focused on the objective."
  },
  {
    id: 3,
    category: "leadership",
    reverse: true,
    statement: "I avoid positions of responsibility because I do not enjoy directing others."
  },
  {
    id: 4,
    category: "leadership",
    reverse: false,
    statement: "When working in a team, I try to motivate others rather than focusing only on my own tasks."
  },
  {
    id: 5,
    category: "leadership",
    reverse: true,
    statement: "I prefer that someone else makes important group decisions even when I understand the situation well."
  },
  {
    id: 6,
    category: "leadership",
    reverse: false,
    statement: "I can maintain control of a group even when people have different opinions."
  },

  // =========================================
  // CONFIDENCE
  // =========================================

  {
    id: 7,
    category: "confidence",
    reverse: false,
    statement: "I believe I can handle most challenges if I put in sufficient effort."
  },
  {
    id: 8,
    category: "confidence",
    reverse: true,
    statement: "I often hesitate to express my views because I worry that they may be incorrect."
  },
  {
    id: 9,
    category: "confidence",
    reverse: false,
    statement: "I remain self-assured even when competing against highly capable individuals."
  },
  {
    id: 10,
    category: "confidence",
    reverse: true,
    statement: "Criticism from others affects my confidence for a long time."
  },
  {
    id: 11,
    category: "confidence",
    reverse: false,
    statement: "I am comfortable taking on tasks that are outside my usual area of experience."
  },
  {
    id: 12,
    category: "confidence",
    reverse: true,
    statement: "I frequently underestimate my ability to achieve difficult goals."
  },

  // =========================================
  // INITIATIVE
  // =========================================

  {
    id: 13,
    category: "initiative",
    reverse: false,
    statement: "I prefer starting work immediately rather than waiting for repeated instructions."
  },
  {
    id: 14,
    category: "initiative",
    reverse: false,
    statement: "When I notice a problem, I usually try to solve it before someone asks me to."
  },
  {
    id: 15,
    category: "initiative",
    reverse: true,
    statement: "I tend to wait for others to act before deciding what I should do."
  },
  {
    id: 16,
    category: "initiative",
    reverse: false,
    statement: "I actively look for opportunities to improve situations around me."
  },
  {
    id: 17,
    category: "initiative",
    reverse: true,
    statement: "I avoid taking the first step unless I am completely sure of success."
  },
  {
    id: 18,
    category: "initiative",
    reverse: false,
    statement: "I enjoy taking on responsibilities that require independent action."
  },

  // =========================================
  // RESPONSIBILITY
  // =========================================

  {
    id: 19,
    category: "responsibility",
    reverse: false,
    statement: "I accept accountability for the outcomes of my decisions."
  },
  {
    id: 20,
    category: "responsibility",
    reverse: true,
    statement: "When something goes wrong, I often look for someone else to blame."
  },
  {
    id: 21,
    category: "responsibility",
    reverse: false,
    statement: "People can rely on me to complete assigned duties without constant supervision."
  },
  {
    id: 22,
    category: "responsibility",
    reverse: false,
    statement: "I take commitments seriously even when fulfilling them becomes difficult."
  },
  {
    id: 23,
    category: "responsibility",
    reverse: true,
    statement: "I sometimes ignore obligations that do not directly benefit me."
  },
  {
    id: 24,
    category: "responsibility",
    reverse: false,
    statement: "I feel personally responsible for maintaining high standards in my work."
  },

  // =========================================
  // TEAMWORK
  // =========================================

  {
    id: 25,
    category: "teamwork",
    reverse: false,
    statement: "I cooperate effectively with people whose opinions differ from my own."
  },
  {
    id: 26,
    category: "teamwork",
    reverse: false,
    statement: "I willingly support team members when they face difficulties."
  },
  {
    id: 27,
    category: "teamwork",
    reverse: true,
    statement: "I find it difficult to work with others when I disagree with their methods."
  },
  {
    id: 28,
    category: "teamwork",
    reverse: false,
    statement: "Group success is often more important to me than receiving personal recognition."
  },
  {
    id: 29,
    category: "teamwork",
    reverse: true,
    statement: "I prefer accomplishing tasks alone because teamwork often slows progress."
  },
  {
    id: 30,
    category: "teamwork",
    reverse: false,
    statement: "I encourage participation from quieter members of a group."
  },

  // =========================================
  // DISCIPLINE
  // =========================================

  {
    id: 31,
    category: "discipline",
    reverse: false,
    statement: "I follow schedules and plans even when I do not feel motivated."
  },
  {
    id: 32,
    category: "discipline",
    reverse: true,
    statement: "I frequently delay important work until the last possible moment."
  },
  {
    id: 33,
    category: "discipline",
    reverse: false,
    statement: "I maintain consistency in my efforts even during demanding periods."
  },
  {
    id: 34,
    category: "discipline",
    reverse: true,
    statement: "I often abandon tasks before they are fully completed."
  },
  {
    id: 35,
    category: "discipline",
    reverse: false,
    statement: "I believe self-control is more important than temporary comfort."
  },
  {
    id: 36,
    category: "discipline",
    reverse: false,
    statement: "I usually organize my priorities before beginning a major task."
  },

  // =========================================
  // SOCIAL ADAPTABILITY
  // =========================================

  {
    id: 37,
    category: "socialAdaptability",
    reverse: false,
    statement: "I can adjust my behavior appropriately when interacting with different types of people."
  },
  {
    id: 38,
    category: "socialAdaptability",
    reverse: true,
    statement: "I feel uneasy when placed in unfamiliar social situations."
  },
  {
    id: 39,
    category: "socialAdaptability",
    reverse: false,
    statement: "I make friends relatively easily in new environments."
  },
  {
    id: 40,
    category: "socialAdaptability",
    reverse: true,
    statement: "I avoid meeting new people whenever possible."
  },
  {
    id: 41,
    category: "socialAdaptability",
    reverse: false,
    statement: "I can communicate comfortably with people from different backgrounds and age groups."
  },
  {
    id: 42,
    category: "socialAdaptability",
    reverse: false,
    statement: "I quickly adapt to changes in social or professional environments."
  },

  // =========================================
  // EMOTIONAL STABILITY
  // =========================================

  {
    id: 43,
    category: "emotionalStability",
    reverse: false,
    statement: "I remain calm and focused when facing pressure or unexpected setbacks."
  },
  {
    id: 44,
    category: "emotionalStability",
    reverse: true,
    statement: "Minor problems often affect my mood more than they should."
  },
  {
    id: 45,
    category: "emotionalStability",
    reverse: false,
    statement: "I can think clearly even when emotions are running high."
  },
  {
    id: 46,
    category: "emotionalStability",
    reverse: true,
    statement: "I become irritated quickly when things do not go according to plan."
  },
  {
    id: 47,
    category: "emotionalStability",
    reverse: false,
    statement: "I recover from disappointment without losing focus on future goals."
  },
  {
    id: 48,
    category: "emotionalStability",
    reverse: true,
    statement: "Stress often prevents me from performing at my best."

  },

  // =========================================
  // DECISION MAKING
  // =========================================

  {
    id: 49,
    category: "decisionMaking",
    reverse: false,
    statement: "I can make timely decisions even when all information is not available."
  },
  {
    id: 50,
    category: "decisionMaking",
    reverse: true,
    statement: "I often postpone decisions because I am afraid of making the wrong choice."
  },
    // =========================================
  // INTEGRITY
  // =========================================

  {
    id: 51,
    category: "integrity",
    reverse: false,
    statement: "I remain truthful even when telling the truth may place me at a disadvantage."
  },
  {
    id: 52,
    category: "integrity",
    reverse: true,
    statement: "Small dishonest actions are acceptable if they help achieve an important objective."
  },
  {
    id: 53,
    category: "integrity",
    reverse: false,
    statement: "I prefer earning success through fair means rather than taking unfair shortcuts."
  },
  {
    id: 54,
    category: "integrity",
    reverse: true,
    statement: "Rules can usually be ignored if there is little chance of being caught."
  },
  {
    id: 55,
    category: "integrity",
    reverse: false,
    statement: "I admit my mistakes even when doing so may affect my reputation."
  },
  {
    id: 56,
    category: "integrity",
    reverse: false,
    statement: "My actions generally reflect the values and principles that I claim to believe in."
  },

  // =========================================
  // COURAGE
  // =========================================

  {
    id: 57,
    category: "courage",
    reverse: false,
    statement: "I am willing to face difficult situations rather than avoiding them."
  },
  {
    id: 58,
    category: "courage",
    reverse: true,
    statement: "I usually avoid challenges that involve a significant risk of failure."
  },
  {
    id: 59,
    category: "courage",
    reverse: false,
    statement: "I can defend what I believe is right even when others disagree with me."
  },
  {
    id: 60,
    category: "courage",
    reverse: true,
    statement: "Fear of criticism often prevents me from taking action."
  },
  {
    id: 61,
    category: "courage",
    reverse: false,
    statement: "I remain determined when facing uncertainty or unfamiliar circumstances."
  },
  {
    id: 62,
    category: "courage",
    reverse: false,
    statement: "I can continue working toward a goal even when success is not guaranteed."
  },

  // =========================================
  // ACHIEVEMENT MOTIVATION
  // =========================================

  {
    id: 63,
    category: "achievementMotivation",
    reverse: false,
    statement: "I set challenging goals for myself and work hard to achieve them."
  },
  {
    id: 64,
    category: "achievementMotivation",
    reverse: true,
    statement: "I am satisfied with average performance as long as I avoid difficulties."
  },
  {
    id: 65,
    category: "achievementMotivation",
    reverse: false,
    statement: "I continuously look for ways to improve my skills and abilities."
  },
  {
    id: 66,
    category: "achievementMotivation",
    reverse: true,
    statement: "Once minimum requirements are met, I rarely put in additional effort."
  },
  {
    id: 67,
    category: "achievementMotivation",
    reverse: false,
    statement: "I feel motivated when given opportunities to compete and excel."
  },
  {
    id: 68,
    category: "achievementMotivation",
    reverse: false,
    statement: "Personal growth is important to me even when it requires sacrifice."
  },

  // =========================================
  // SELF CONTROL
  // =========================================

  {
    id: 69,
    category: "selfControl",
    reverse: false,
    statement: "I think carefully before reacting when I am upset."
  },
  {
    id: 70,
    category: "selfControl",
    reverse: true,
    statement: "I sometimes say things in anger that I later regret."
  },
  {
    id: 71,
    category: "selfControl",
    reverse: false,
    statement: "I can resist distractions when focusing on an important task."
  },
  {
    id: 72,
    category: "selfControl",
    reverse: true,
    statement: "I often make decisions based on impulse rather than careful thought."
  },
  {
    id: 73,
    category: "selfControl",
    reverse: false,
    statement: "I remain respectful even when dealing with difficult individuals."
  },
  {
    id: 74,
    category: "selfControl",
    reverse: false,
    statement: "I am usually able to control my emotions in demanding situations."
  },

  // =========================================
  // SERVICE ORIENTATION
  // =========================================

  {
    id: 75,
    category: "serviceOrientation",
    reverse: false,
    statement: "Helping others gives me a sense of satisfaction and purpose."
  },
  {
    id: 76,
    category: "serviceOrientation",
    reverse: true,
    statement: "I rarely assist others unless there is a direct benefit for me."
  },
  {
    id: 77,
    category: "serviceOrientation",
    reverse: false,
    statement: "I am willing to put group interests ahead of personal convenience when necessary."
  },
  {
    id: 78,
    category: "serviceOrientation",
    reverse: true,
    statement: "Community responsibilities are less important than personal success."
  },
  {
    id: 79,
    category: "serviceOrientation",
    reverse: false,
    statement: "I feel responsible for contributing positively to society."
  },
  {
    id: 80,
    category: "serviceOrientation",
    reverse: false,
    statement: "I willingly support people who are struggling even when no recognition is expected."
  },

  // =========================================
  // PERSISTENCE
  // =========================================

  {
    id: 81,
    category: "persistence",
    reverse: false,
    statement: "I continue working toward objectives even when progress is slow."
  },
  {
    id: 82,
    category: "persistence",
    reverse: true,
    statement: "I lose motivation quickly when results are not immediate."
  },
  {
    id: 83,
    category: "persistence",
    reverse: false,
    statement: "Obstacles encourage me to work harder rather than give up."
  },
  {
    id: 84,
    category: "persistence",
    reverse: true,
    statement: "I often abandon goals that require long-term effort."
  },
  {
    id: 85,
    category: "persistence",
    reverse: false,
    statement: "I remain committed to important goals despite setbacks."
  },
  {
    id: 86,
    category: "persistence",
    reverse: false,
    statement: "I am prepared to make sustained efforts to achieve meaningful success."
  },

  // =========================================
  // OPTIMISM
  // =========================================

  {
    id: 87,
    category: "optimism",
    reverse: false,
    statement: "I usually expect positive outcomes when I work hard toward a goal."
  },
  {
    id: 88,
    category: "optimism",
    reverse: true,
    statement: "I often focus more on possible failures than possible successes."
  },
  {
    id: 89,
    category: "optimism",
    reverse: false,
    statement: "I can find opportunities even in difficult circumstances."
  },
  {
    id: 90,
    category: "optimism",
    reverse: true,
    statement: "I frequently assume that problems will become worse rather than improve."
  },
  {
    id: 91,
    category: "optimism",
    reverse: false,
    statement: "I generally maintain a positive outlook during challenging periods."
  },
  {
    id: 92,
    category: "optimism",
    reverse: false,
    statement: "I believe determination can overcome many obstacles."
  },

  // =========================================
  // STRESS TOLERANCE
  // =========================================

  {
    id: 93,
    category: "stressTolerance",
    reverse: false,
    statement: "I can perform effectively under pressure."
  },
  {
    id: 94,
    category: "stressTolerance",
    reverse: true,
    statement: "Stress often causes me to lose focus on important tasks."
  },
  {
    id: 95,
    category: "stressTolerance",
    reverse: false,
    statement: "I remain productive even when dealing with multiple responsibilities."
  },
  {
    id: 96,
    category: "stressTolerance",
    reverse: true,
    statement: "Unexpected difficulties easily overwhelm me."
  },
  {
    id: 97,
    category: "stressTolerance",
    reverse: false,
    statement: "I can maintain clear thinking during demanding situations."
  },
  {
    id: 98,
    category: "stressTolerance",
    reverse: false,
    statement: "Pressure motivates me to organize my efforts more effectively."
  },

  // =========================================
  // INTERPERSONAL RELATIONS
  // =========================================

  {
    id: 99,
    category: "interpersonalRelations",
    reverse: false,
    statement: "I treat people with respect regardless of their position or status."
  },
  {
    id: 100,
    category: "interpersonalRelations",
    reverse: true,
    statement: "I find it difficult to maintain positive relationships with people whose views differ from mine."
  },
    // =========================================
  // INTERPERSONAL RELATIONS (CONTINUED)
  // =========================================

  {
    id: 101,
    category: "interpersonalRelations",
    reverse: false,
    statement: "I can maintain constructive relationships even after disagreements."
  },
  {
    id: 102,
    category: "interpersonalRelations",
    reverse: false,
    statement: "I listen carefully to others before forming conclusions."
  },
  {
    id: 103,
    category: "interpersonalRelations",
    reverse: true,
    statement: "I often judge people before fully understanding their circumstances."
  },
  {
    id: 104,
    category: "interpersonalRelations",
    reverse: false,
    statement: "People generally find me approachable and cooperative."
  },

  // =========================================
  // PROBLEM SOLVING
  // =========================================

  {
    id: 105,
    category: "problemSolving",
    reverse: false,
    statement: "I prefer analyzing a problem thoroughly before deciding on a solution."
  },
  {
    id: 106,
    category: "problemSolving",
    reverse: true,
    statement: "I often avoid complicated problems and hope they resolve themselves."
  },
  {
    id: 107,
    category: "problemSolving",
    reverse: false,
    statement: "I can identify practical solutions when resources are limited."
  },
  {
    id: 108,
    category: "problemSolving",
    reverse: false,
    statement: "I remain focused on finding solutions rather than complaining about difficulties."
  },
  {
    id: 109,
    category: "problemSolving",
    reverse: true,
    statement: "When a problem becomes difficult, I tend to lose interest in solving it."
  },
  {
    id: 110,
    category: "problemSolving",
    reverse: false,
    statement: "I enjoy situations that require logical thinking and careful judgment."
  },

  // =========================================
  // ADAPTABILITY
  // =========================================

  {
    id: 111,
    category: "adaptability",
    reverse: false,
    statement: "I adjust quickly when plans change unexpectedly."
  },
  {
    id: 112,
    category: "adaptability",
    reverse: true,
    statement: "Changes in routine usually make me uncomfortable."
  },
  {
    id: 113,
    category: "adaptability",
    reverse: false,
    statement: "I can perform effectively in unfamiliar environments."
  },
  {
    id: 114,
    category: "adaptability",
    reverse: false,
    statement: "I learn new methods quickly when circumstances require it."
  },
  {
    id: 115,
    category: "adaptability",
    reverse: true,
    statement: "I prefer sticking to old ways even when better alternatives exist."
  },
  {
    id: 116,
    category: "adaptability",
    reverse: false,
    statement: "I see change as an opportunity for growth rather than a threat."
  },

  // =========================================
  // PATRIOTISM / NATIONAL SERVICE
  // =========================================

  {
    id: 117,
    category: "nationalService",
    reverse: false,
    statement: "Serving my country in a meaningful way is an important personal goal."
  },
  {
    id: 118,
    category: "nationalService",
    reverse: false,
    statement: "I believe personal sacrifices are sometimes necessary for the greater good of society."
  },
  {
    id: 119,
    category: "nationalService",
    reverse: true,
    statement: "National responsibilities are less important than personal convenience."
  },
  {
    id: 120,
    category: "nationalService",
    reverse: false,
    statement: "I take pride in contributing positively to my community and country."
  },
  {
    id: 121,
    category: "nationalService",
    reverse: true,
    statement: "Public service is meaningful only when it provides personal rewards."
  },
  {
    id: 122,
    category: "nationalService",
    reverse: false,
    statement: "I respect individuals who dedicate themselves to serving others."
  },

  // =========================================
  // PLANNING & ORGANIZATION
  // =========================================

  {
    id: 123,
    category: "planning",
    reverse: false,
    statement: "I usually develop a plan before starting an important task."
  },
  {
    id: 124,
    category: "planning",
    reverse: true,
    statement: "I often begin important work without considering potential obstacles."
  },
  {
    id: 125,
    category: "planning",
    reverse: false,
    statement: "I prioritize tasks according to their importance rather than convenience."
  },
  {
    id: 126,
    category: "planning",
    reverse: false,
    statement: "Careful preparation improves the chances of success."
  },
  {
    id: 127,
    category: "planning",
    reverse: true,
    statement: "Planning is usually unnecessary because problems can be handled later."
  },
  {
    id: 128,
    category: "planning",
    reverse: false,
    statement: "I manage my time effectively when multiple responsibilities exist."
  },

  // =========================================
  // LEARNING ATTITUDE
  // =========================================

  {
    id: 129,
    category: "learningAttitude",
    reverse: false,
    statement: "I actively seek feedback that can help me improve."
  },
  {
    id: 130,
    category: "learningAttitude",
    reverse: true,
    statement: "I rarely change my views even when presented with strong evidence."
  },
  {
    id: 131,
    category: "learningAttitude",
    reverse: false,
    statement: "I enjoy learning new skills that expand my capabilities."
  },
  {
    id: 132,
    category: "learningAttitude",
    reverse: false,
    statement: "Constructive criticism helps me become more effective."
  },
  {
    id: 133,
    category: "learningAttitude",
    reverse: true,
    statement: "Once I learn a method, I see little reason to explore better approaches."
  },
  {
    id: 134,
    category: "learningAttitude",
    reverse: false,
    statement: "Continuous self-improvement is important for long-term success."
  },

  // =========================================
  // CONSISTENCY / SELF ASSESSMENT
  // =========================================

  {
    id: 135,
    category: "selfAssessment",
    reverse: false,
    statement: "I try to maintain the same standards of behavior in both public and private situations."
  },
  {
    id: 136,
    category: "selfAssessment",
    reverse: true,
    statement: "My behavior changes significantly depending on who is watching."
  },
  {
    id: 137,
    category: "selfAssessment",
    reverse: false,
    statement: "I regularly evaluate my strengths and weaknesses."
  },
  {
    id: 138,
    category: "selfAssessment",
    reverse: true,
    statement: "I rarely reflect on my actions after making important decisions."
  },
  {
    id: 139,
    category: "selfAssessment",
    reverse: false,
    statement: "I recognize that personal growth requires honest self-evaluation."
  },
  {
    id: 140,
    category: "selfAssessment",
    reverse: false,
    statement: "I can acknowledge areas where I still need improvement."
  },

  // =========================================
  // REALISTIC OPI CROSS-CHECK ITEMS
  // =========================================

  {
    id: 141,
    category: "consistencyCheck",
    reverse: true,
    statement: "I have never made a mistake that affected other people."
  },
  {
    id: 142,
    category: "consistencyCheck",
    reverse: true,
    statement: "I always make the correct decision regardless of circumstances."
  },
  {
    id: 143,
    category: "consistencyCheck",
    reverse: true,
    statement: "I have never felt nervous before an important event."
  },
  {
    id: 144,
    category: "consistencyCheck",
    reverse: true,
    statement: "I get along perfectly with every person I meet."
  },

  // =========================================
  // SITUATIONAL CHOICE QUESTIONS
  // =========================================

  {
    id: 145,
    type: "situational",
    category: "leadership",
    statement: "Your team is running out of time during an important task and members are becoming confused. What would you most likely do?",
    options: [
      "Take charge, assign responsibilities, and guide the team toward completion",
      "Wait for someone more experienced to take control",
      "Focus only on your own assigned work",
      "Avoid involvement to prevent making mistakes"
    ]
  },

  {
    id: 146,
    type: "situational",
    category: "integrity",
    statement: "You discover that a close friend has violated an important rule. What would you most likely do?",
    options: [
      "Encourage your friend to report the matter honestly and accept responsibility",
      "Ignore the issue because friendship is more important",
      "Help conceal the mistake to protect your friend",
      "Blame someone else to avoid consequences"
    ]
  },

  {
    id: 147,
    type: "situational",
    category: "decisionMaking",
    statement: "You must make an important decision with limited information and little time. What would you most likely do?",
    options: [
      "Analyze available facts and make the best decision possible",
      "Delay the decision as long as possible",
      "Let others decide entirely",
      "Choose randomly to save time"
    ]
  },

  {
    id: 148,
    type: "situational",
    category: "teamwork",
    statement: "A team member is struggling and the group's success may be affected. What would you most likely do?",
    options: [
      "Offer assistance while ensuring overall progress continues",
      "Ignore the issue because it is their responsibility",
      "Criticize them in front of others",
      "Leave the group and focus on yourself"
    ]
  },

  {
    id: 149,
    type: "situational",
    category: "emotionalStability",
    statement: "You receive unexpected criticism regarding a project you worked hard on. What would you most likely do?",
    options: [
      "Remain calm, evaluate the feedback, and improve where necessary",
      "Become defensive and argue immediately",
      "Give up on the project",
      "Avoid future responsibilities"
    ]
  },

  {
    id: 150,
    type: "situational",
    category: "initiative",
    statement: "You notice a serious problem that nobody else has identified yet. What would you most likely do?",
    options: [
      "Take appropriate action and inform relevant people",
      "Wait and see if someone else notices it",
      "Ignore it because it is not your responsibility",
      "Avoid involvement to prevent extra work"
    ]
  }

];

export default opiQuestions;