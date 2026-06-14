const questionsmat = [
  {
    id: 1,
    question: "At which point is the ball going faster?",
    image: "/images/mat-images/q1.png",
    options: ["A", "B", "Equal"],
    correctAnswer: "B",
  },
  {
    id: 2,
    question: "Which of these streams are flowing faster?",
    image: "/images/mat-images/q2.png",
    options: ["A", "B", "Equal"],
    correctAnswer: "A",
  },
  {
    id: 3,
    question:
      "Which way will it be easier to carry the rock in the wheelbarrow?",
    image: "/images/mat-images/q3.png",
    options: ["Rock near wheel (A)", "Rock away from wheel (B)", "Either (C)"],
    correctAnswer: "Rock near wheel (A)",
  },
  {
    id: 4,
    question:
      "Which picture shows the way a drop of water looks just before it falls?",
    image: "/images/mat-images/q4.png",
    options: ["Picture A (A)", "Picture B (B)"],
    correctAnswer: "Picture A (A)",
  },
  {
    id: 5,
    question: "Which dam is stronger?",
    image: "/images/mat-images/q5.png",
    options: ["Dam (A)", "Dam (B)", "Equal (C)"],
    correctAnswer: "Dam (A)",
  },
  {
    id: 6,
    question: "Which weighs more?",
    image: "/images/mat-images/q6.png",
    options: ["Solid iron sphere (A)", "Solid iron cube (B)", "Equal (C)"],
    correctAnswer: "Solid iron cube (B)",
  },
  {
    id: 7,
    question: "Which is more likely to tip over?",
    image: "/images/mat-images/q7.png",
    options: ["option (A)", "option (B)", "Could tip over either way (C)"],
    correctAnswer: "option A (A)",
  }, 
  {
    id: 8, 
    question: "Which weighs more?",
    image: "/images/mat-images/q8.png",
    options: ["Bucket of apples (A)", "Bucket of water (B)", "Equal (C)"],
    correctAnswer: "Bucket of water (B)",
  },
  {
    id: 9,
    question: "Which man has to pull harder to lift the roller?",
    image: "/images/mat-images/q9.png",
    options: ["Man A", "Man B", "Equal (C)"],
    correctAnswer: "Man A", 
  },
  {
    id: 10,
    question:
      "If the left-hand gear moves in the direction shown, in which direction will the right-hand gear move?",
    image: "/images/mat-images/q10.png",
    options: ["Direction A (A)", "Direction B (B)"],
    correctAnswer: "Direction B (B)", 
  },
  {
    id: 11,
    question: "Which pipe contains the cooler water? (If equal, mark C)",
    image: "/images/mat-images/q11.png",
    options: ["Pipe A", "Pipe B", "Equal temperature"],
    correctAnswer: "Pipe B",
  },

  {
    id: 12,
    question:
      "Which will hold more water, the two tanks at A or the one tank at B? (If equal, mark C)",
    image: "/images/mat-images/q12.png",
    options: ["Two tanks at A", "One tank at B", "Equal amount"],
    correctAnswer: "Equal amount",
  },

  {
    id: 13,
    question: "Which road is steeper? (If equal, mark C)",
    image: "/images/mat-images/q13.png",
    options: ["Road A", "Road B", "Equal steepness"],
    correctAnswer: "Road A",
  }, 

  {
    id: 14,
    question:
      "Which will carry more water, the two pipes in A or the one pipe in B? (If no difference, mark C)",
    image: "/images/mat-images/q14.png",
    options: ["Two pipes in A", "One pipe in B", "No difference"],
    correctAnswer: "One pipe in B",
  },

  {
    id: 15,
    question:
      "Which man has to pull more rope to raise the weight the same distance? (If equal, mark C)",
    image: "/images/mat-images/q15.png",
    options: ["Man A", "Man B", "Equal amount of rope"],
    correctAnswer: "Man B",
  },

  {
    id: 16,
    question:
      "Which wheel is more likely to fly apart if it is spun at high speed? (If equal, mark C)",
    image: "/images/mat-images/q16.png",
    options: ["Wheel A", "Wheel B", "Equal likelihood (C)"],
    correctAnswer: "Wheel B",
  },

  {
    id: 17,
    question:
      "Which one piece of chain will hold up the sign? (If equal, mark C)",
    image: "/images/mat-images/q17.png",
    options: ["Chain A", "Chain B", "Either chain (C)"],
    correctAnswer: "Either chain (C)",
  },

  {
    id: 18,
    question: "Which picture shows how a clock looks when seen in a mirror?",
    image: "/images/mat-images/q18.png",
    options: ["Clock A", "Clock B", "Clock C"],
    correctAnswer: "Clock C",
  },

  {
    id: 19,
    question:
      "Which picture shows how oil and water would be after standing for a while?",
    image: "/images/mat-images/q19.png",
    options: ["Picture A", "Picture B", "Picture C"],
    correctAnswer: "Picture B",
  },

  {
    id: 20,
    question: "In which case will the water splash more? (If equal, mark C)",
    image: "/images/mat-images/q20.png",
    options: ["Case A", "Case B", "Equal splash"],
    correctAnswer: "Case A",
  },
  {
    id: 21,
    question:
      "In which position is there more strain on 'X'? (If equal, mark C)",
    image: "/images/mat-images/q21.png",
    options: ["Position A", "Position B", "Equal"],
    correctAnswer: "Position A",
  },
  {
    id: 22,
    question: "In which direction will the boat go faster? (If equal, mark C)",
    image: "/images/mat-images/q22.png",
    options: ["Direction A", "Direction B", "Equal"],
    correctAnswer: "Direction A",
  },
  {
    id: 23,
    question: "Which child will ride faster? (If equal, mark C)",
    image: "/images/mat-images/q23.png",
    options: ["Child A", "Child B", "Equal"],
    correctAnswer: "Child A",
  },
  {
    id: 24,
    question:
      "When the wind blows, in which direction will these cups turn? (If either, mark C)",
    image: "/images/mat-images/q24.png",
    options: ["Direction A", "Direction B", "Either"],
    correctAnswer: "Direction A",
  },
  {
    id: 25,
    question:
      "If the windlass is turned in the direction shown, the load will:",
    image: "/images/mat-images/q25.png",
    options: ["Move up", "Move down", "Not move"],
    correctAnswer: "Move down",
  },
  {
    id: 26,
    question: "When the handle is moved back and forth the wheel will turn:",
    image: "/images/mat-images/q26.png",

    options: [
      "In direction A",
      "In direction B",
      "First one direction then the other",
    ],
    correctAnswer: "In direction B",
  },
  {
    id: 27,
    question:
      "When this car is slowed by the brakes, the load on the front wheel is:",
    image: "/images/mat-images/q27.png",
    options: ["Less", "Greater", "Unchanged"],
    correctAnswer: "Greater",
  },
  {
    id: 28,
    question: "Which bridge is stronger? (If equal, mark C)",
    image: "/images/mat-images/q28.png",
    options: ["Bridge A", "Bridge B", "Equal strength"],
    correctAnswer: "Bridge B",
  },
  {
    id: 29,
    question:
      "In which of these round jars will the liquid press harder on the bottom? (If equal, mark C)",
    image: "/images/mat-images/q29.png",
    options: ["Jar A", "Jar B", "Equal pressure"],
    correctAnswer: "Equal pressure",
  },
  {
    id: 30,
    question:
      "Which man will be falling faster when he reaches the ground? (If equal, mark C)",
    image: "/images/mat-images/q30.png",
    options: ["Man A", "Man B", "Equal speed"],
    correctAnswer: "Equal speed",
  },
  {
    id: 31,
    question: "Which picture shows the way mud flies off a bicycle wheel?",
    image: "/images/mat-images/q31.png",
    options: ["Picture A", "Picture B", "Neither"],
    correctAnswer: "Picture B",
  },
  {
    id: 32,
    question:
      "Which umbrella is more likely to turn inside out in high wind? (If both, mark C)",
    image: "/images/mat-images/q32.png",
    options: ["Umbrella A", "Umbrella B", "Both equally"],
    correctAnswer: "Umbrella B",
  },
  {
    id: 33,
    question: "Where will the alarm clock sound louder? (If equal, mark C)",
    image: "/images/mat-images/q33.png",
    options: ["Position A", "Position B", "Equal loudness"],
    correctAnswer: "Position A",
  },
  {
    id: 34,
    question: "Which tug will be more easily handled? (If equal, mark C)",
    image: "/images/mat-images/q34.png",
    options: ["Tug A", "Tug B", "Equal"],
    correctAnswer: "Tug A",
  },
  {
    id: 35,
    question:
      "Which man will have to pull harder in order to move the load? (If equal, mark C)",
    image: "/images/mat-images/q35.png",
    options: ["Man A", "Man B", "Equal effort"],
    correctAnswer: "Equal effort",
  },
  {
    id: 36,
    question:
      "With which windlass can a man lift the heavier weight? (If equal, mark C)",
    image: "/images/mat-images/q36.png",
    options: ["Windlass A", "Windlass B", "Equal"],
    correctAnswer: "Windlass B",
  },
  {
    id: 37,
    question:
      "Which way should the driver first turn his front wheels to back the trailer in the direction shown?",
    image: "/images/mat-images/q37.png",
    options: ["Direction A", "Direction B", "Neither"],
    correctAnswer: "Direction A",
  },
  {
    id: 38,
    question: "Which bell will have the higher note? (If equal, mark C)",
    image: "/images/mat-images/q38.png",
    options: ["Bell A", "Bell B", "Equal pitch"],
    correctAnswer: "Bell B",
  },
  {
    id: 39,
    question: "Which man has to pull harder? (If equal, mark C)",
    image: "/images/mat-images/q39.png",
    options: ["Man A", "Man B", "Equal force"],
    correctAnswer: "Equal force",
  },
  {
    id: 40,
    question: "Which man has to pull harder? (If equal, mark C)",
    image: "/images/mat-images/q40.png",
    options: ["Man A", "Man B", "Equal force"],
    correctAnswer: "Man A",
  },
  {
    id: 41,
    question: "Which is the better way to lift the shovel? (If equal, mark C)",
    image: "/images/mat-images/q41.png",
    options: ["Method A", "Method B", "Equal"],
    correctAnswer: "Method A",
  },
  {
    id: 42,
    question:
      "If the upper wheel goes in the direction shown, in which direction will the lower wheel go? (If either, mark C)",
    image: "/images/mat-images/q42.png",
    options: ["Direction A", "Direction B", "Either"],
    correctAnswer: "Direction A",
  },
  {
    id: 43,
    question:
      "Which ounce of ice will cool a drink more quickly? (If equal, mark C)",
    image: "/images/mat-images/q43.png",
    options: [
      "One large 1-ounce ice cube (A)",
      "Several smaller pieces totaling 1 ounce (B)",
      "Equal",
    ],
    correctAnswer: "Several smaller pieces totaling 1 ounce (B)",
  },
  {
    id: 44,
    question: "Which jar will let the water run out?",
    image: "/images/mat-images/q44.png",
    options: ["Jar A", "Jar B", "Jar C"],
    correctAnswer: "Jar C",
  },
  {
    id: 45,
    question: "Which windmill will do more work? (If equal, mark C)",
    image: "/images/mat-images/q45.png",
    options: ["Windmill A", "Windmill B", "Equal"],
    correctAnswer: "Windmill B",
  },

  {
    id: 46,
    question:
      "In which picture has the candle been burning? (If neither, mark C)",
    image: "/images/mat-images/q46.png",
    options: ["Picture A", "Picture B", "Neither"],
    correctAnswer: "Picture B",
  },

  {
    id: 47,
    question:
      "At which spot will it take longer to cook potatoes by boiling? (If equal, mark C)",
    image: "/images/mat-images/q47.png",
    options: ["Spot A", "Spot B", "Equal"],
    correctAnswer: "Spot A",
  },

  {
    id: 48,
    question: "Which bank of the river is more likely to wear away?",
    image: "/images/mat-images/q48.png",
    options: ["Bank A", "Bank B", "Equal"],
    correctAnswer: "Bank B",
  },

  {
    id: 49,
    question:
      "In which direction can this wrench turn the pipe? (If either, mark C)",
    image: "/images/mat-images/q49.png",
    options: ["Direction A", "Direction B", "Either direction"],
    correctAnswer: "Direction A",
  },

  {
    id: 50,
    question:
      "Which end of the cord should you pull to open the curtain? (If either, mark C)",
    image: "/images/mat-images/q50.png",
    options: ["End A", "End B", "Either end"],
    correctAnswer: "End B",
  },
  //   {
  //   id: 51,
  //   question: "Which way will the wheel turn? (If either, mark C)",
  //   options: ["Direction A", "Direction B", "Either"],
  //   correctAnswer: "B"
  // },
  // {
  //   id: 52,
  //   question: "Which picture shows the correct action of the mechanism?",
  //   options: ["A", "B", "C"],
  //   correctAnswer: "B"
  // },
  // {
  //   id: 53,
  //   question: "Which switch will light both lamps?",
  //   options: ["Switch A", "Switch B", "Switch C"],
  //   correctAnswer: "C"
  // },
  // {
  //   id: 54,
  //   question: "Which way can the man pull the heavier load? (If equal, mark C)",
  //   options: ["Method A", "Method B", "Equal"],
  //   correctAnswer: "B"
  // },
  // {
  //   id: 55,
  //   question: "Through which pipe will water enter this pump? (If either, mark C)",
  //   options: ["Pipe A", "Pipe B", "Either"],
  //   correctAnswer: "A"
  // },
  // {
  //   id: 56,
  //   question: "Which of these pictures shows what would actually happen? (If either, mark C)",
  //   options: ["Picture A", "Picture B", "Either"],
  //   correctAnswer: "A"
  // },
  // {
  //   id: 57,
  //   question: "Which measure is properly marked?",
  //   options: ["A", "B", "C"],
  //   correctAnswer: "B"
  // },
  // {
  //   id: 58,
  //   question: "Which weighs more? (If equal, mark C)",
  //   options: [
  //     "One quart of milk",
  //     "One quart of cream",
  //     "Equal"
  //   ],
  //   correctAnswer: "A"
  // },
  // {
  //   id: 59,
  //   question: "If the two men are pushing against the pushball in the direction shown, in which direction is it most likely to go?",
  //   options: ["Direction A", "Direction B", "Direction C"],
  //   correctAnswer: "B"
  // },
  // {
  //   id: 60,
  //   question: "Which wheel presses harder against the rail? (If equal, mark C)",
  //   options: ["Wheel A", "Wheel B", "Equal"],
  //   correctAnswer: "B"
  // },
  // {
  //   id: 61,
  //   question: "When the automobile is in a tunnel how will the horn sound?",
  //   options: [
  //     "Louder than normal",
  //     "Less loud than normal",
  //     "Normally loud"
  //   ],
  //   correctAnswer: "A"
  // },
  // {
  //   id: 62,
  //   question: "Which rope is under more strain? (If equal, mark C)",
  //   options: ["Rope A", "Rope B", "Equal"],
  //   correctAnswer: "A"
  // },
  // {
  //   id: 63,
  //   question: "Which side of the road should be built higher? (If equal, mark C)",
  //   options: ["Side A", "Side B", "Equal"],
  //   correctAnswer: "B"
  // },
  // {
  //   id: 64,
  //   question: "Which acrobat will find it easier to keep her balance? (If equal, mark C)",
  //   options: ["Acrobat A", "Acrobat B", "Equal"],
  //   correctAnswer: "B"
  // },
  // {
  //   id: 65,
  //   question: "Which metal container will hold more sugar? (If equal, mark C)",
  //   options: ["Container A", "Container B", "Equal"],
  //   correctAnswer: "A"
  // },
  // {
  //   id: 66,
  //   question: "Which one piece of chain will hold up the mailbox shelf? (If neither, mark C)",
  //   options: ["Chain A", "Chain B", "Neither"],
  //   correctAnswer: "B"
  // },
  // {
  //   id: 67,
  //   question: "Which way will the boat go? (If either, mark C)",
  //   options: ["Direction A", "Direction B", "Either"],
  //   correctAnswer: "A"
  // },
  // {
  //   id: 68,
  //   question: "Which rock will get hotter in the sun? (If equal, mark C)",
  //   options: ["Rock A", "Rock B", "Equal"],
  //   correctAnswer: "A"
  // },
  // {
  //   id: 69,
  //   question: "From which fire hydrant will the water spurt farther? (If equal, mark C)",
  //   options: ["Hydrant A", "Hydrant B", "Equal"],
  //   correctAnswer: "B"
  // }
];
export default questionsmat;
