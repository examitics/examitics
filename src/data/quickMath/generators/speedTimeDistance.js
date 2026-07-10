function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[random(0, array.length - 1)];
}

const vehicles = [
  "car",
  "bus",
  "train",
  "bike",
  "truck",
  "jeep",
  "van",
  "motorcycle",
];

function generateDistance(minSpeed, maxSpeed, minTime, maxTime) {
  const speed = random(minSpeed, maxSpeed);
  const time = random(minTime, maxTime);
  const vehicle = randomChoice(vehicles);

  return {
    question: `A ${vehicle} travels at ${speed} km/h for ${time} hours. Find the distance travelled (in km).`,
    answer: speed * time,
  };
}

function generateSpeed(minSpeed, maxSpeed, minTime, maxTime) {
  const speed = random(minSpeed, maxSpeed);
  const time = random(minTime, maxTime);
  const vehicle = randomChoice(vehicles);

  const distance = speed * time;

  return {
    question: `A ${vehicle} travels ${distance} km in ${time} hours. Find its speed (km/h).`,
    answer: speed,
  };
}

function generateTime(minSpeed, maxSpeed, minTime, maxTime) {
  const speed = random(minSpeed, maxSpeed);
  const time = random(minTime, maxTime);
  const vehicle = randomChoice(vehicles);

  const distance = speed * time;

  return {
    question: `A ${vehicle} travels ${distance} km at ${speed} km/h. How many hours does it take?`,
    answer: time,
  };
}

export function generateSpeedTimeDistance(
  difficulty = "Easy"
) {
  let minSpeed;
  let maxSpeed;
  let minTime;
  let maxTime;

  switch (difficulty) {
    case "Easy":
      minSpeed = 20;
      maxSpeed = 60;
      minTime = 2;
      maxTime = 5;
      break;

    case "Medium":
      minSpeed = 40;
      maxSpeed = 90;
      minTime = 3;
      maxTime = 8;
      break;

    case "Hard":
      minSpeed = 60;
      maxSpeed = 120;
      minTime = 4;
      maxTime = 10;
      break;

    default:
      minSpeed = 20;
      maxSpeed = 60;
      minTime = 2;
      maxTime = 5;
  }

  const generators = [
    () =>
      generateDistance(
        minSpeed,
        maxSpeed,
        minTime,
        maxTime
      ),

    () =>
      generateSpeed(
        minSpeed,
        maxSpeed,
        minTime,
        maxTime
      ),

    () =>
      generateTime(
        minSpeed,
        maxSpeed,
        minTime,
        maxTime
      ),
  ];

  return randomChoice(generators)();
}