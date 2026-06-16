const obstacles = [
  {
    id: 1,
    name: "Monkey Bridge",
    slug: "monkey-bridge",
    difficulty: "Medium",
    model: "/models/monkey-bridge.glb",
    description:
      "Cross a suspended bridge while maintaining balance and confidence.",
    instructions: [
      { text: "Get ready", action: "IDLE" },
      { text: "Start crawl", action: "CRAWL_START" },
      { text: "Cross bridge", action: "BALANCE_WALK" },
    ],
  },
  {
    id: 2,
    name: "Tarzan Swing",
    slug: "tarzan-swing",
    difficulty: "Hard",
    model: "/models/tarzan-swing.glb",
    description:
      "Use a rope swing to cross a gap and land safely on the other side.",
    instructions: [
      { text: "Get into position", action: "CROUCH" },
      { text: "Move forward", action: "MOVE_FORWARD" },
    ],
  },
  {
    id: 3,
    name: "Rope Climbing",
    slug: "rope-climbing",
    difficulty: "Hard",
    model: "/models/rope-climbing.glb",
    description:
      "Climb a vertical rope using proper grip and body coordination.",
    instructions: [
      { text: "Get into position", action: "CROUCH" },
      { text: "Move forward", action: "MOVE_FORWARD" },
    ],
  },
  {
    id: 4,
    name: "Ditch Crossing",
    slug: "ditch-crossing",
    difficulty: "Medium",
    model: "/models/ditch-crossing.glb",
    description:
      "Jump across a ditch while maintaining balance during landing.",
    instructions: [
      { text: "Get into position", action: "CROUCH" },
      { text: "Move forward", action: "MOVE_FORWARD" },
    ],
  },
  {
    id: 5,
    name: "High Jump",
    slug: "high-jump",
    difficulty: "Medium",
    model: "/models/high-jump.glb",
    description: "Clear a raised obstacle using proper jumping technique.",
    instructions: [
      { text: "Get into position", action: "CROUCH" },
      { text: "Move forward", action: "MOVE_FORWARD" },
    ],
  },
  {
    id: 6,
    name: "Zig Zag",
    slug: "zig-zag",
    difficulty: "Easy",
    model: "/models/zig-zag.glb",
    description:
      "Move quickly through a zig-zag obstacle while maintaining control.",
    instructions: [
      { text: "Get into position", action: "CROUCH" },
      { text: "Move forward", action: "MOVE_FORWARD" },
    ],
  },
  {
    id: 7,
    name: "Boxing Ring",
    slug: "boxing-ring",
    difficulty: "Easy",
    model: "/models/boxing-ring.glb",
    description: "Navigate over and through a boxing-ring style obstacle.",
    instructions: [
      { text: "Get into position", action: "CROUCH" },
      { text: "Move forward", action: "MOVE_FORWARD" },
    ],
  },
  {
    id: 8,
    name: "Tire Crossing",
    slug: "tire-crossing",
    difficulty: "Medium",
    model: "/models/tire-crossing.glb",
    description:
      "Cross a sequence of tires using speed, balance, and coordination.",
    instructions: [
      { text: "Get into position", action: "CROUCH" },
      { text: "Move forward", action: "MOVE_FORWARD" },
    ],
  },
  {
    id: 9,
    name: "Hanging Log",
    slug: "hanging-log",
    difficulty: "Hard",
    model: "/models/hanging-log.glb",
    description:
      "Traverse a suspended log while maintaining stability and grip.",
    instructions: [
      { text: "Get into position", action: "CROUCH" },
      { text: "Move forward", action: "MOVE_FORWARD" },
    ],
  },
];

export default obstacles;
