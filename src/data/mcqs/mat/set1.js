const questionsmat = [
  {
    id: 1,
    question: "At which point is the ball going faster?",
    image: "/images/mat-images/q1.PNG",
    
    options: ["A", "B", "Equal"],
    correctAnswer: "B"
  },
  {
    id: 2,
    question: "Which of these streams are flowing faster?",
    options: ["A", "B", "Equal"],
    correctAnswer: "A"
  },
  {
    id: 3,
    question: "Which way will it be easier to carry the rock in the wheelbarrow?",
    options: [
      "Rock near wheel (A)",
      "Rock away from wheel (B)",
      "Either"
    ],
    correctAnswer: "A"
  },
  {
    id: 4,
    question: "Which picture shows the way a drop of water looks just before it falls?",
    options: ["Picture A", "Picture B"],
    correctAnswer: "A"
  },
  {
    id: 5,
    question: "Which dam is stronger?",
    options: ["Dam A", "Dam B", "Equal"],
    correctAnswer: "A"
  },
  {
    id: 6,
    question: "Which weighs more?",
    options: [
      "Solid iron sphere",
      "Solid iron cube",
      "Equal"
    ],
    correctAnswer: "B"
  },
  {
    id: 7,
    question: "Which is more likely to tip over?",
    options: ["Crane A", "Crane B", "Either"],
    correctAnswer: "A"
  },
  {
    id: 8,
    question: "Which weighs more?",
    options: [
      "Bucket of apples",
      "Bucket of water",
      "Equal"
    ],
    correctAnswer: "B"
  },
  {
    id: 9,
    question: "Which man has to pull harder to lift the roller?",
    options: ["Man A", "Man B", "Equal"],
    correctAnswer: "A"
  },
  {
    id: 10,
    question: "If the left-hand gear moves in the direction shown, in which direction will the right-hand gear move?",
    options: ["Direction A", "Direction B"],
    correctAnswer: "B"
  },
  {
    id: 11,
    question: "Which pipe contains the cooler water? (If equal, mark C)",
    options: [
      "Pipe A",
      "Pipe B",
      "Equal temperature"
    ],
    correctAnswer: "B"
  },

  {
    id: 12,
    question: "Which will hold more water, the two tanks at A or the one tank at B? (If equal, mark C)",
    options: [
      "Two tanks at A",
      "One tank at B",
      "Equal amount"
    ],
    correctAnswer: "C"
  },

  {
    id: 13,
    question: "Which road is steeper? (If equal, mark C)",
    options: [
      "Road A",
      "Road B",
      "Equal steepness"
    ],
    correctAnswer: "A"
  },

  {
    id: 14,
    question: "Which will carry more water, the two pipes in A or the one pipe in B? (If no difference, mark C)",
    options: [
      "Two pipes in A",
      "One pipe in B",
      "No difference"
    ],
    correctAnswer: "B"
  },

  {
    id: 15,
    question: "Which man has to pull more rope to raise the weight the same distance? (If equal, mark C)",
    options: [
      "Man A",
      "Man B",
      "Equal amount of rope"
    ],
    correctAnswer: "B"
  },

  {
    id: 16,
    question: "Which wheel is more likely to fly apart if it is spun at high speed? (If equal, mark C)",
    options: [
      "Wheel A",
      "Wheel B",
      "Equal likelihood"
    ],
    correctAnswer: "B"
  },

  {
    id: 17,
    question: "Which one piece of chain will hold up the sign? (If equal, mark C)",
    options: [
      "Chain A",
      "Chain B",
      "Either chain"
    ],
    correctAnswer: "C"
  },

  {
    id: 18,
    question: "Which picture shows how a clock looks when seen in a mirror?",
    options: [
      "Clock A",
      "Clock B",
      "Clock C"
    ],
    correctAnswer: "C"
  },

  {
    id: 19,
    question: "Which picture shows how oil and water would be after standing for a while?",
    options: [
      "Picture A",
      "Picture B",
      "Picture C"
    ],
    correctAnswer: "B"
  },

  {
    id: 20,
    question: "In which case will the water splash more? (If equal, mark C)",
    options: [
      "Case A",
      "Case B",
      "Equal splash"
    ],
    correctAnswer: "A"
  },
  {
    id: 21,
    question: "In which position is there more strain on 'X'? (If equal, mark C)",
    options: ["Position A", "Position B", "Equal"],
    correctAnswer: "A"
  },
  {
    id: 22,
    question: "In which direction will the boat go faster? (If equal, mark C)",
    options: ["Direction A", "Direction B", "Equal"],
    correctAnswer: "A"
  },
  {
    id: 23,
    question: "Which child will ride faster? (If equal, mark C)",
    options: ["Child A", "Child B", "Equal"],
    correctAnswer: "A"
  },
  {
    id: 24,
    question: "When the wind blows, in which direction will these cups turn? (If either, mark C)",
    options: ["Direction A", "Direction B", "Either"],
    correctAnswer: "A"
  },
  {
    id: 25,
    question: "If the windlass is turned in the direction shown, the load will:",
    options: [
      "Move up",
      "Move down",
      "Not move"
    ],
    correctAnswer: "B"
  },
  {
    id: 26,
    question: "When the handle is moved back and forth the wheel will turn:",
    options: [
      "In direction A",
      "In direction B",
      "First one direction then the other"
    ],
    correctAnswer: "B"
  },
  {
    id: 27,
    question: "When this car is slowed by the brakes, the load on the front wheel is:",
    options: [
      "Less",
      "Greater",
      "Unchanged"
    ],
    correctAnswer: "B"
  },
  {
    id: 28,
    question: "Which bridge is stronger? (If equal, mark C)",
    options: [
      "Bridge A",
      "Bridge B",
      "Equal strength"
    ],
    correctAnswer: "B"
  },
  {
    id: 29,
    question: "In which of these round jars will the liquid press harder on the bottom? (If equal, mark C)",
    options: [
      "Jar A",
      "Jar B",
      "Equal pressure"
    ],
    correctAnswer: "C"
  },
  {
    id: 30,
    question: "Which man will be falling faster when he reaches the ground? (If equal, mark C)",
    options: [
      "Man A",
      "Man B",
      "Equal speed"
    ],
    correctAnswer: "C"
  },
  {
    id: 31,
    question: "Which picture shows the way mud flies off a bicycle wheel?",
    options: [
      "Picture A",
      "Picture B",
      "Neither"
    ],
    correctAnswer: "B"
  },
  {
    id: 32,
    question: "Which umbrella is more likely to turn inside out in high wind? (If both, mark C)",
    options: [
      "Umbrella A",
      "Umbrella B",
      "Both equally"
    ],
    correctAnswer: "B"
  },
  {
    id: 33,
    question: "Where will the alarm clock sound louder? (If equal, mark C)",
    options: [
      "Position A",
      "Position B",
      "Equal loudness"
    ],
    correctAnswer: "A"
  },
  {
    id: 34,
    question: "Which tug will be more easily handled? (If equal, mark C)",
    options: [
      "Tug A",
      "Tug B",
      "Equal"
    ],
    correctAnswer: "A"
  },
  {
    id: 35,
    question: "Which man will have to pull harder in order to move the load? (If equal, mark C)",
    options: [
      "Man A",
      "Man B",
      "Equal effort"
    ],
    correctAnswer: "C"
  },
  {
    id: 36,
    question: "With which windlass can a man lift the heavier weight? (If equal, mark C)",
    options: [
      "Windlass A",
      "Windlass B",
      "Equal"
    ],
    correctAnswer: "B"
  },
  {
    id: 37,
    question: "Which way should the driver first turn his front wheels to back the trailer in the direction shown?",
    options: [
      "Direction A",
      "Direction B",
      "Neither"
    ],
    correctAnswer: "A"
  },
  {
    id: 38,
    question: "Which bell will have the higher note? (If equal, mark C)",
    options: [
      "Bell A",
      "Bell B",
      "Equal pitch"
    ],
    correctAnswer: "B"
  },
  {
    id: 39,
    question: "Which man has to pull harder? (If equal, mark C)",
    options: [
      "Man A",
      "Man B",
      "Equal force"
    ],
    correctAnswer: "C"
  },
  {
    id: 40,
    question: "Which man has to pull harder? (If equal, mark C)",
    options: [
      "Man A",
      "Man B",
      "Equal force"
    ],
    correctAnswer: "A"
  },
  {
    id: 41,
    question: "Which is the better way to lift the shovel? (If equal, mark C)",
    options: ["Method A", "Method B", "Equal"],
    correctAnswer: "A"
  },
  {
    id: 42,
    question: "If the upper wheel goes in the direction shown, in which direction will the lower wheel go? (If either, mark C)",
    options: ["Direction A", "Direction B", "Either"],
    correctAnswer: "B"
  },
  {
    id: 43,
    question: "Which ounce of ice will cool a drink more quickly? (If equal, mark C)",
    options: [
      "One large 1-ounce ice cube (A)",
      "Several smaller pieces totaling 1 ounce (B)",
      "Equal"
    ],
    correctAnswer: "B"
  },
  {
    id: 44,
    question: "Which jar will let the water run out?",
    options: ["Jar A", "Jar B", "Jar C"],
    correctAnswer: "C"
  },
  {
    id: 45,
    question: "Which windmill will do more work? (If equal, mark C)",
    options: [
      "Windmill A",
      "Windmill B",
      "Equal"
    ],
    correctAnswer: "B"
  },

  {
    id: 46,
    question: "In which picture has the candle been burning? (If neither, mark C)",
    options: [
      "Picture A",
      "Picture B",
      "Neither"
    ],
    correctAnswer: "B"
  },

  {
    id: 47,
    question: "At which spot will it take longer to cook potatoes by boiling? (If equal, mark C)",
    options: [
      "Spot A",
      "Spot B",
      "Equal"
    ],
    correctAnswer: "A"
  },

  {
    id: 48,
    question: "Which bank of the river is more likely to wear away?",
    options: [
      "Bank A",
      "Bank B",
      "Equal"
    ],
    correctAnswer: "B"
  },

  {
    id: 49,
    question: "In which direction can this wrench turn the pipe? (If either, mark C)",
    options: [
      "Direction A",
      "Direction B",
      "Either direction"
    ],
    correctAnswer: "A"
  },

  {
    id: 50,
    question: "Which end of the cord should you pull to open the curtain? (If either, mark C)",
    options: [
      "End A",
      "End B",
      "Either end"
    ],
    correctAnswer: "B"
  },
    {
    id: 51,
    question: "Which way will the wheel turn? (If either, mark C)",
    options: ["Direction A", "Direction B", "Either"],
    correctAnswer: "B"
  },
  {
    id: 52,
    question: "Which picture shows the correct action of the mechanism?",
    options: ["A", "B", "C"],
    correctAnswer: "B"
  },
  {
    id: 53,
    question: "Which switch will light both lamps?",
    options: ["Switch A", "Switch B", "Switch C"],
    correctAnswer: "C"
  },
  {
    id: 54,
    question: "Which way can the man pull the heavier load? (If equal, mark C)",
    options: ["Method A", "Method B", "Equal"],
    correctAnswer: "B"
  },
  {
    id: 55,
    question: "Through which pipe will water enter this pump? (If either, mark C)",
    options: ["Pipe A", "Pipe B", "Either"],
    correctAnswer: "A"
  },
  {
    id: 56,
    question: "Which of these pictures shows what would actually happen? (If either, mark C)",
    options: ["Picture A", "Picture B", "Either"],
    correctAnswer: "A"
  },
  {
    id: 57,
    question: "Which measure is properly marked?",
    options: ["A", "B", "C"],
    correctAnswer: "B"
  },
  {
    id: 58,
    question: "Which weighs more? (If equal, mark C)",
    options: [
      "One quart of milk",
      "One quart of cream",
      "Equal"
    ],
    correctAnswer: "A"
  },
  {
    id: 59,
    question: "If the two men are pushing against the pushball in the direction shown, in which direction is it most likely to go?",
    options: ["Direction A", "Direction B", "Direction C"],
    correctAnswer: "B"
  },
  {
    id: 60,
    question: "Which wheel presses harder against the rail? (If equal, mark C)",
    options: ["Wheel A", "Wheel B", "Equal"],
    correctAnswer: "B"
  },
  {
    id: 61,
    question: "When the automobile is in a tunnel how will the horn sound?",
    options: [
      "Louder than normal",
      "Less loud than normal",
      "Normally loud"
    ],
    correctAnswer: "A"
  },
  {
    id: 62,
    question: "Which rope is under more strain? (If equal, mark C)",
    options: ["Rope A", "Rope B", "Equal"],
    correctAnswer: "A"
  },
  {
    id: 63,
    question: "Which side of the road should be built higher? (If equal, mark C)",
    options: ["Side A", "Side B", "Equal"],
    correctAnswer: "B"
  },
  {
    id: 64,
    question: "Which acrobat will find it easier to keep her balance? (If equal, mark C)",
    options: ["Acrobat A", "Acrobat B", "Equal"],
    correctAnswer: "B"
  },
  {
    id: 65,
    question: "Which metal container will hold more sugar? (If equal, mark C)",
    options: ["Container A", "Container B", "Equal"],
    correctAnswer: "A"
  },
  {
    id: 66,
    question: "Which one piece of chain will hold up the mailbox shelf? (If neither, mark C)",
    options: ["Chain A", "Chain B", "Neither"],
    correctAnswer: "B"
  },
  {
    id: 67,
    question: "Which way will the boat go? (If either, mark C)",
    options: ["Direction A", "Direction B", "Either"],
    correctAnswer: "A"
  },
  {
    id: 68,
    question: "Which rock will get hotter in the sun? (If equal, mark C)",
    options: ["Rock A", "Rock B", "Equal"],
    correctAnswer: "A"
  },
  {
    id: 69,
    question: "From which fire hydrant will the water spurt farther? (If equal, mark C)",
    options: ["Hydrant A", "Hydrant B", "Equal"],
    correctAnswer: "B"
  }

];
export default questionsmat;