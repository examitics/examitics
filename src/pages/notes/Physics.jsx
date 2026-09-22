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
| PHYSICS QUESTION BANK
|--------------------------------------------------------------------------
| 120 questions total
|
| The question bank is designed for armed-forces initial-test preparation.
| It contains Physics questions from the academic material together with
| additional expected/practice questions.
|--------------------------------------------------------------------------
*/

const questionBank = [
  // ========================================================================
  // ACADEMIC / CORE PHYSICS QUESTIONS
  // ========================================================================

  {
    id: 1,
    source: "Academic",
    question: "The SI unit of force is:",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correct: 1,
    explanation:
      "The SI unit of force is Newton (N). One Newton is the force required to accelerate a 1 kg mass by 1 m/s².",
  },
  {
    id: 2,
    source: "Academic",
    question: "The SI unit of work is:",
    options: ["Watt", "Newton", "Joule", "Pascal"],
    correct: 2,
    explanation:
      "The SI unit of work is the Joule (J). One Joule is equal to one Newton-meter.",
  },
  {
    id: 3,
    source: "Academic",
    question: "The SI unit of power is:",
    options: ["Joule", "Watt", "Newton", "Volt"],
    correct: 1,
    explanation:
      "Power is the rate of doing work, and its SI unit is the Watt (W).",
  },
  {
    id: 4,
    source: "Academic",
    question: "The approximate acceleration due to gravity on Earth is:",
    options: ["7.8 m/s²", "8.8 m/s²", "9.8 m/s²", "10.8 m/s²"],
    correct: 2,
    explanation:
      "The standard approximate value of acceleration due to gravity near Earth's surface is 9.8 m/s².",
  },
  {
    id: 5,
    source: "Academic",
    question: "Which particle has a negative electric charge?",
    options: ["Proton", "Neutron", "Electron", "Nucleus"],
    correct: 2,
    explanation:
      "An electron carries a negative electric charge. A proton is positively charged and a neutron has no net charge.",
  },
  {
    id: 6,
    source: "Academic",
    question: "Which particle has a positive electric charge?",
    options: ["Electron", "Proton", "Neutron", "Photon"],
    correct: 1,
    explanation:
      "A proton carries a positive electric charge.",
  },
  {
    id: 7,
    source: "Academic",
    question: "Which particle has no electric charge?",
    options: ["Electron", "Proton", "Neutron", "Ion"],
    correct: 2,
    explanation:
      "A neutron has no net electric charge.",
  },
  {
    id: 8,
    source: "Academic",
    question: "Which lens is used to correct myopia?",
    options: ["Convex", "Concave", "Cylindrical", "Plane"],
    correct: 1,
    explanation:
      "Myopia, or short-sightedness, is corrected using a concave lens, which diverges incoming light rays.",
  },
  {
    id: 9,
    source: "Academic",
    question: "Which lens is used to correct hypermetropia?",
    options: ["Concave", "Convex", "Plane", "Cylindrical"],
    correct: 1,
    explanation:
      "Hypermetropia, or long-sightedness, is corrected using a convex lens.",
  },
  {
    id: 10,
    source: "Academic",
    question: "The speed of light in vacuum is approximately:",
    options: [
      "3 × 10⁶ m/s",
      "3 × 10⁷ m/s",
      "3 × 10⁸ m/s",
      "3 × 10⁹ m/s",
    ],
    correct: 2,
    explanation:
      "Light travels through vacuum at approximately 3 × 10⁸ m/s.",
  },
  {
    id: 11,
    source: "Academic",
    question: "The speed of sound is greatest in:",
    options: ["Vacuum", "Gases", "Liquids", "Solids"],
    correct: 3,
    explanation:
      "Sound generally travels fastest through solids because their particles are closely packed.",
  },
  {
    id: 12,
    source: "Academic",
    question: "Sound cannot travel through:",
    options: ["Water", "Steel", "Air", "Vacuum"],
    correct: 3,
    explanation:
      "Sound is a mechanical wave and requires a material medium. It cannot travel through a vacuum.",
  },
  {
    id: 13,
    source: "Academic",
    question: "The SI unit of frequency is:",
    options: ["Newton", "Hertz", "Joule", "Watt"],
    correct: 1,
    explanation:
      "Frequency is measured in Hertz (Hz), where one Hertz means one cycle per second.",
  },
  {
    id: 14,
    source: "Academic",
    question: "The SI unit of electric current is:",
    options: ["Volt", "Ohm", "Ampere", "Coulomb"],
    correct: 2,
    explanation:
      "Electric current is measured in Ampere (A).",
  },
  {
    id: 15,
    source: "Academic",
    question: "The SI unit of resistance is:",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    correct: 1,
    explanation:
      "Electrical resistance is measured in Ohms (Ω).",
  },
  {
    id: 16,
    source: "Academic",
    question: "The SI unit of electric charge is:",
    options: ["Ampere", "Volt", "Coulomb", "Ohm"],
    correct: 2,
    explanation:
      "Electric charge is measured in Coulombs (C).",
  },
  {
    id: 17,
    source: "Academic",
    question: "Ohm's law is:",
    options: ["V = IR", "P = VI", "F = ma", "W = mg"],
    correct: 0,
    explanation:
      "Ohm's law states that voltage V is equal to current I multiplied by resistance R: V = IR.",
  },
  {
    id: 18,
    source: "Academic",
    question: "The unit of voltage is:",
    options: ["Volt", "Ohm", "Ampere", "Coulomb"],
    correct: 0,
    explanation:
      "Potential difference or voltage is measured in Volts (V).",
  },
  {
    id: 19,
    source: "Academic",
    question: "A device used to measure electric current is:",
    options: ["Voltmeter", "Ammeter", "Barometer", "Thermometer"],
    correct: 1,
    explanation:
      "An ammeter is used to measure electric current in a circuit.",
  },
  {
    id: 20,
    source: "Academic",
    question: "A device used to measure potential difference is:",
    options: ["Ammeter", "Voltmeter", "Galvanometer", "Barometer"],
    correct: 1,
    explanation:
      "A voltmeter measures potential difference between two points.",
  },

  // ========================================================================
  // MECHANICS
  // ========================================================================

  {
    id: 21,
    source: "Academic",
    question: "Newton's first law of motion is also called the law of:",
    options: ["Acceleration", "Inertia", "Momentum", "Gravitation"],
    correct: 1,
    explanation:
      "Newton's first law is known as the law of inertia.",
  },
  {
    id: 22,
    source: "Academic",
    question: "Newton's second law is represented by:",
    options: ["F = ma", "V = IR", "P = VI", "W = Fs"],
    correct: 0,
    explanation:
      "Newton's second law states that force equals mass multiplied by acceleration: F = ma.",
  },
  {
    id: 23,
    source: "Academic",
    question: "Newton's third law states that:",
    options: [
      "Force equals mass times acceleration",
      "Every action has an equal and opposite reaction",
      "Objects remain at rest",
      "Energy is conserved",
    ],
    correct: 1,
    explanation:
      "Newton's third law states that for every action there is an equal and opposite reaction.",
  },
  {
    id: 24,
    source: "Academic",
    question: "Momentum is equal to:",
    options:["mv", "ma", "m/v", "v/m"],
    correct: 0,
    explanation:
      "Momentum is the product of mass and velocity: p = mv.",
  },
  {
    id: 25,
    source: "Academic",
    question: "The SI unit of momentum is:",
    options: ["N", "kg m/s", "J", "W"],
    correct: 1,
    explanation:
      "Momentum is measured in kg m/s.",
  },
  {
    id: 26,
    source: "Academic",
    question: "The force that attracts objects toward Earth is:",
    options: ["Friction", "Gravity", "Magnetism", "Tension"],
    correct: 1,
    explanation:
      "Gravity is the attractive force between masses and pulls objects toward Earth.",
  },
  {
    id: 27,
    source: "Academic",
    question: "Weight of an object is given by:",
    options: ["W = mg", "W = mv", "W = ma²", "W = m/g"],
    correct: 0,
    explanation:
      "Weight is the gravitational force acting on an object: W = mg.",
  },
  {
    id: 28,
    source: "Academic",
    question: "Mass is measured in:",
    options: ["Newton", "Kilogram", "Joule", "Watt"],
    correct: 1,
    explanation:
      "The SI unit of mass is kilogram (kg).",
  },
  {
    id: 29,
    source: "Academic",
    question: "Weight is measured in:",
    options: ["Kilogram", "Newton", "Joule", "Pascal"],
    correct: 1,
    explanation:
      "Weight is a force, so its SI unit is Newton.",
  },
  {
    id: 30,
    source: "Academic",
    question: "Friction always acts:",
    options:[
      "In the direction of motion",
      "Opposite to relative motion",
      "Vertically upward",
      "Toward the center",
    ],
    correct: 1,
    explanation:
      "Friction opposes relative motion or the tendency of relative motion between surfaces.",
  },

  // ========================================================================
  // WORK, ENERGY AND POWER
  // ========================================================================

  {
    id: 31,
    source: "Academic",
    question: "Work is done when a force causes:",
    options:["Mass", "Displacement", "Temperature", "Pressure"],
    correct: 1,
    explanation:
      "Mechanical work is done when a force causes displacement in the direction of the force.",
  },
  {
    id: 32,
    source: "Academic",
    question: "The formula for mechanical work is:",
    options:["W = Fs", "W = ma", "W = mv", "W = mg"],
    correct: 0,
    explanation:
      "When force and displacement are in the same direction, work is W = Fs.",
  },
  {
    id: 33,
    source: "Academic",
    question: "Kinetic energy depends on:",
    options:[
      "Mass and velocity",
      "Mass only",
      "Height only",
      "Temperature only",
    ],
    correct: 0,
    explanation:
      "Kinetic energy is KE = 1/2 mv², so it depends on mass and velocity.",
  },
  {
    id: 34,
    source: "Academic",
    question: "The formula for kinetic energy is:",
    options:["mgh", "1/2mv²", "mv", "ma"],
    correct: 1,
    explanation:
      "Kinetic energy is given by KE = 1/2 mv².",
  },
  {
    id: 35,
    source: "Academic",
    question: "Potential energy due to height is:",
    options:["mgh", "1/2mv²", "mv", "ma"],
    correct: 0,
    explanation:
      "Gravitational potential energy near Earth's surface is PE = mgh.",
  },
  {
    id: 36,
    source: "Academic",
    question: "Power is defined as:",
    options:[
      "Force per unit area",
      "Work done per unit time",
      "Mass per unit volume",
      "Distance per unit time",
    ],
    correct: 1,
    explanation:
      "Power is the rate at which work is done: P = W/t.",
  },
  {
    id: 37,
    source: "Academic",
    question: "The law of conservation of energy states that energy:",
    options:[
      "Can be created",
      "Can be destroyed",
      "Cannot be created or destroyed",
      "Always increases",
    ],
    correct: 2,
    explanation:
      "Energy cannot be created or destroyed; it can only be transformed from one form to another.",
  },
  {
    id: 38,
    source: "Academic",
    question: "The energy possessed by a moving body is:",
    options:["Potential energy", "Kinetic energy", "Chemical energy", "Nuclear energy"],
    correct: 1,
    explanation:
      "A moving body possesses kinetic energy.",
  },
  {
    id: 39,
    source: "Academic",
    question: "The energy stored in a stretched spring is:",
    options:[
      "Kinetic energy",
      "Elastic potential energy",
      "Chemical energy",
      "Thermal energy",
    ],
    correct: 1,
    explanation:
      "A stretched or compressed spring stores elastic potential energy.",
  },
  {
    id: 40,
    source: "Academic",
    question: "One kilowatt is equal to:",
    options:["10 W", "100 W", "1000 W", "10,000 W"],
    correct: 2,
    explanation:
      "1 kilowatt = 1000 watts.",
  },

  // ========================================================================
  // HEAT
  // ========================================================================

  {
    id: 41,
    source: "Academic",
    question: "The SI unit of temperature is:",
    options:["Celsius", "Kelvin", "Fahrenheit", "Joule"],
    correct: 1,
    explanation:
      "The SI base unit of thermodynamic temperature is Kelvin.",
  },
  {
    id: 42,
    source: "Academic",
    question: "Heat is a form of:",
    options:["Matter", "Energy", "Force", "Pressure"],
    correct: 1,
    explanation:
      "Heat is energy transferred because of a temperature difference.",
  },
  {
    id: 43,
    source: "Academic",
    question: "Heat transfer through direct contact is called:",
    options:["Convection", "Conduction", "Radiation", "Reflection"],
    correct: 1,
    explanation:
      "Conduction is the transfer of heat through direct contact between particles.",
  },
  {
    id: 44,
    source: "Academic",
    question: "Heat transfer through fluids mainly occurs by:",
    options:["Conduction", "Convection", "Radiation", "Reflection"],
    correct: 1,
    explanation:
      "Convection is the main mode of heat transfer through liquids and gases.",
  },
  {
    id: 45,
    source: "Academic",
    question: "Heat from the Sun reaches Earth mainly through:",
    options:["Conduction", "Convection", "Radiation", "Diffusion"],
    correct: 2,
    explanation:
      "Radiation can travel through vacuum, allowing heat from the Sun to reach Earth.",
  },
  {
    id: 46,
    source: "Academic",
    question: "Water boils at sea level at:",
    options:["0°C", "50°C", "100°C", "150°C"],
    correct: 2,
    explanation:
      "At standard atmospheric pressure, water boils at approximately 100°C.",
  },
  {
    id: 47,
    source: "Academic",
    question: "Water freezes at:",
    options:["0°C", "10°C", "50°C", "100°C"],
    correct: 0,
    explanation:
      "Pure water freezes at 0°C under standard atmospheric pressure.",
  },
  {
    id: 48,
    source: "Academic",
    question: "A thermometer is used to measure:",
    options:["Pressure", "Temperature", "Force", "Current"],
    correct: 1,
    explanation:
      "A thermometer measures temperature.",
  },
  {
    id: 49,
    source: "Academic",
    question: "The normal human body temperature is approximately:",
    options:["27°C", "37°C", "47°C", "57°C"],
    correct: 1,
    explanation:
      "Normal average human body temperature is approximately 37°C.",
  },
  {
    id: 50,
    source: "Academic",
    question: "A good conductor of heat is:",
    options:["Wood", "Plastic", "Copper", "Rubber"],
    correct: 2,
    explanation:
      "Copper is an excellent conductor of heat and is commonly used where heat transfer is required.",
  },

  // ========================================================================
  // WAVES, SOUND AND LIGHT
  // ========================================================================

  {
    id: 51,
    source: "Academic",
    question: "The distance between two consecutive crests of a wave is called:",
    options:["Frequency", "Wavelength", "Amplitude", "Period"],
    correct: 1,
    explanation:
      "The distance between corresponding points on consecutive waves, such as crest to crest, is wavelength.",
  },
  {
    id: 52,
    source: "Academic",
    question: "The maximum displacement from the mean position is called:",
    options:["Frequency", "Amplitude", "Wavelength", "Velocity"],
    correct: 1,
    explanation:
      "Amplitude is the maximum displacement of a vibrating particle from its mean position.",
  },
  {
    id: 53,
    source: "Academic",
    question: "Frequency is the number of vibrations completed in:",
    options:["One minute", "One second", "One hour", "One day"],
    correct: 1,
    explanation:
      "Frequency is the number of complete cycles or vibrations per second.",
  },
  {
    id: 54,
    source: "Academic",
    question: "The relationship between wave speed, frequency and wavelength is:",
    options:["v = fλ", "v = f/λ", "v = λ/f", "v = f + λ"],
    correct: 0,
    explanation:
      "Wave speed is given by v = fλ.",
  },
  {
    id: 55,
    source: "Academic",
    question: "An echo is caused by:",
    options:["Refraction", "Reflection of sound", "Diffraction", "Absorption"],
    correct: 1,
    explanation:
      "An echo is produced when sound waves are reflected from a distant surface and return to the listener.",
  },
  {
    id: 56,
    source: "Academic",
    question: "The phenomenon in which light changes direction when entering another medium is:",
    options:["Reflection", "Refraction", "Diffraction", "Interference"],
    correct: 1,
    explanation:
      "Refraction is the bending or change in direction of light when it passes from one medium to another.",
  },
  {
    id: 57,
    source: "Academic",
    question: "The bouncing back of light from a surface is called:",
    options:["Refraction", "Reflection", "Dispersion", "Diffraction"],
    correct: 1,
    explanation:
      "Reflection is the bouncing back of light from a surface.",
  },
  {
    id: 58,
    source: "Academic",
    question: "A rainbow is mainly produced due to:",
    options:[
      "Reflection only",
      "Dispersion of sunlight",
      "Conduction",
      "Magnetism",
    ],
    correct: 1,
    explanation:
      "A rainbow forms when sunlight is refracted, internally reflected and dispersed by water droplets.",
  },
  {
    id: 59,
    source: "Academic",
    question: "A plane mirror forms an image that is:",
    options:[
      "Real and inverted",
      "Virtual and upright",
      "Real and upright",
      "Always magnified",
    ],
    correct: 1,
    explanation:
      "A plane mirror forms a virtual, upright image of the same approximate size as the object.",
  },
  {
    id: 60,
    source: "Academic",
    question: "The splitting of white light into its component colours is called:",
    options:["Reflection", "Dispersion", "Conduction", "Polarization"],
    correct: 1,
    explanation:
      "Dispersion is the separation of white light into its component colours.",
  },

  // ========================================================================
  // ELECTRICITY AND MAGNETISM
  // ========================================================================

  {
    id: 61,
    source: "Academic",
    question: "A material that allows electric current to pass easily is called:",
    options:["Insulator", "Conductor", "Semiconductor only", "Dielectric"],
    correct: 1,
    explanation:
      "Conductors contain charge carriers that can move relatively easily and therefore allow current to flow.",
  },
  {
    id: 62,
    source: "Academic",
    question: "Which is a good electrical conductor?",
    options:["Rubber", "Glass", "Copper", "Wood"],
    correct: 2,
    explanation:
      "Copper is a good conductor of electricity and is widely used in electrical wiring.",
  },
  {
    id: 63,
    source: "Academic",
    question: "Which material is generally an electrical insulator?",
    options:["Copper", "Aluminium", "Rubber", "Silver"],
    correct: 2,
    explanation:
      "Rubber has high electrical resistance and is commonly used as an insulator.",
  },
  {
    id: 64,
    source: "Academic",
    question: "Electric power can be calculated using:",
    options:["P = VI", "P = ma", "P = mv", "P = mgh"],
    correct: 0,
    explanation:
      "Electrical power is P = VI, where V is voltage and I is current.",
  },
  {
    id: 65,
    source: "Academic",
    question: "A fuse is used to:",
    options:[
      "Increase voltage",
      "Protect a circuit from excessive current",
      "Store charge",
      "Measure resistance",
    ],
    correct: 1,
    explanation:
      "A fuse melts when excessive current flows, breaking the circuit and providing protection.",
  },
  {
    id: 66,
    source: "Academic",
    question: "A magnet has:",
    options:[
      "Only a north pole",
      "Only a south pole",
      "North and south poles",
      "No poles",
    ],
    correct: 2,
    explanation:
      "Every ordinary magnet has both a north pole and a south pole.",
  },
  {
    id: 67,
    source: "Academic",
    question: "Like magnetic poles:",
    options:["Attract", "Repel", "Disappear", "Have no effect"],
    correct: 1,
    explanation:
      "Like magnetic poles repel each other, while unlike poles attract.",
  },
  {
    id: 68,
    source: "Academic",
    question: "Unlike magnetic poles:",
    options:["Repel", "Attract", "Always disappear", "Do not interact"],
    correct: 1,
    explanation:
      "Unlike magnetic poles attract each other.",
  },
  {
    id: 69,
    source: "Academic",
    question: "An electric motor converts electrical energy into:",
    options:["Chemical energy", "Mechanical energy", "Nuclear energy", "Light only"],
    correct: 1,
    explanation:
      "An electric motor converts electrical energy into mechanical energy.",
  },
  {
    id: 70,
    source: "Academic",
    question: "A generator converts mechanical energy into:",
    options:["Electrical energy", "Chemical energy", "Sound energy", "Nuclear energy"],
    correct: 0,
    explanation:
      "An electrical generator converts mechanical energy into electrical energy.",
  },

  // ========================================================================
  // ADDITIONAL EXPECTED QUESTIONS
  // ========================================================================

  {
    id: 71,
    source: "Expected",
    question: "The SI unit of pressure is:",
    options:["Newton", "Pascal", "Joule", "Watt"],
    correct: 1,
    explanation:
      "Pressure is measured in Pascal (Pa), which is equal to one Newton per square metre.",
  },
  {
    id: 72,
    source: "Expected",
    question: "Pressure is defined as:",
    options:[
      "Force × Area",
      "Force ÷ Area",
      "Area ÷ Force",
      "Mass × Velocity",
    ],
    correct: 1,
    explanation:
      "Pressure is force acting normally per unit area: P = F/A.",
  },
  {
    id: 73,
    source: "Expected",
    question: "Density is defined as:",
    options:[
      "Mass ÷ Volume",
      "Volume ÷ Mass",
      "Mass × Volume",
      "Weight ÷ Mass",
    ],
    correct: 0,
    explanation:
      "Density is mass per unit volume: ρ = m/V.",
  },
  {
    id: 74,
    source: "Expected",
    question: "The SI unit of density is:",
    options:["kg/m³", "N/m²", "kg/m", "g/cm"],
    correct: 0,
    explanation:
      "The SI unit of density is kilogram per cubic metre (kg/m³).",
  },
  {
    id: 75,
    source: "Expected",
    question: "The principle of buoyancy is associated with:",
    options:["Newton", "Archimedes", "Einstein", "Faraday"],
    correct: 1,
    explanation:
      "Archimedes' principle explains the upward buoyant force exerted by a fluid on an immersed object.",
  },
  {
    id: 76,
    source: "Expected",
    question: "An object floats in water when its average density is:",
    options:[
      "Greater than water",
      "Less than water",
      "Always equal to zero",
      "Infinite",
    ],
    correct: 1,
    explanation:
      "An object generally floats when its average density is less than that of the fluid.",
  },
  {
    id: 77,
    source: "Expected",
    question: "The instrument used to measure atmospheric pressure is:",
    options:["Thermometer", "Barometer", "Ammeter", "Hydrometer"],
    correct: 1,
    explanation:
      "A barometer is used to measure atmospheric pressure.",
  },
  {
    id: 78,
    source: "Expected",
    question: "The instrument used to measure relative density of liquids is:",
    options:["Barometer", "Hydrometer", "Ammeter", "Voltmeter"],
    correct: 1,
    explanation:
      "A hydrometer is used to measure the relative density or specific gravity of liquids.",
  },
  {
    id: 79,
    source: "Expected",
    question: "If velocity increases while mass remains constant, momentum:",
    options:["Decreases", "Increases", "Becomes zero", "Remains unchanged"],
    correct: 1,
    explanation:
      "Momentum p = mv. Therefore, if velocity increases while mass is constant, momentum increases.",
  },
  {
    id: 80,
    source: "Expected",
    question: "If the velocity of an object doubles, its kinetic energy becomes:",
    options:["2 times", "3 times", "4 times", "8 times"],
    correct: 2,
    explanation:
      "Kinetic energy is proportional to v². Doubling velocity makes kinetic energy four times larger.",
  },
  {
    id: 81,
    source: "Expected",
    question: "If the mass of an object doubles while velocity remains constant, its kinetic energy becomes:",
    options:["Half", "Double", "Four times", "Unchanged"],
    correct: 1,
    explanation:
      "Kinetic energy is KE = 1/2mv², so it is directly proportional to mass.",
  },
  {
    id: 82,
    source: "Expected",
    question: "The rate of change of velocity is called:",
    options:["Speed", "Acceleration", "Momentum", "Force"],
    correct: 1,
    explanation:
      "Acceleration is the rate of change of velocity with time.",
  },
  {
    id: 83,
    source: "Expected",
    question: "The SI unit of acceleration is:",
    options:["m/s", "m/s²", "km/h", "N/kg²"],
    correct: 1,
    explanation:
      "Acceleration is measured in metres per second squared (m/s²).",
  },
  {
    id: 84,
    source: "Expected",
    question: "Speed is defined as:",
    options:[
      "Distance ÷ Time",
      "Time ÷ Distance",
      "Distance × Time",
      "Mass ÷ Time",
    ],
    correct: 0,
    explanation:
      "Speed is the distance travelled per unit time.",
  },
  {
    id: 85,
    source: "Expected",
    question: "Velocity differs from speed because velocity has:",
    options:["Mass", "Direction", "Temperature", "Pressure"],
    correct: 1,
    explanation:
      "Velocity is a vector quantity, so it has both magnitude and direction.",
  },
  {
    id: 86,
    source: "Expected",
    question: "An object at rest has:",
    options:[
      "Zero velocity",
      "Maximum velocity",
      "Infinite acceleration",
      "Negative mass",
    ],
    correct: 0,
    explanation:
      "An object at rest has zero velocity relative to the chosen reference frame.",
  },
  {
    id: 87,
    source: "Expected",
    question: "A freely falling object near Earth's surface accelerates due to:",
    options:["Friction", "Gravity", "Magnetism", "Electricity"],
    correct: 1,
    explanation:
      "A freely falling object accelerates because of Earth's gravitational field.",
  },
  {
    id: 88,
    source: "Expected",
    question: "At the highest point of a vertically thrown object, its instantaneous velocity is:",
    options:["Maximum", "Zero", "Infinite", "9.8 m/s"],
    correct: 1,
    explanation:
      "At the highest point, the object's instantaneous velocity becomes zero before it starts moving downward.",
  },
  {
    id: 89,
    source: "Expected",
    question: "The force opposing motion between two surfaces is:",
    options:["Gravity", "Friction", "Buoyancy", "Magnetic force"],
    correct: 1,
    explanation:
      "Friction acts to oppose relative motion between surfaces in contact.",
  },
  {
    id: 90,
    source: "Expected",
    question: "The turning effect of a force is called:",
    options:["Momentum", "Torque", "Pressure", "Impulse"],
    correct: 1,
    explanation:
      "Torque is the turning effect of a force about an axis or pivot.",
  },
  {
    id: 91,
    source: "Expected",
    question: "The unit of torque is:",
    options:["N", "N m", "J/s", "kg/m³"],
    correct: 1,
    explanation:
      "Torque is measured in Newton-metres (N m).",
  },
  {
    id: 92,
    source: "Expected",
    question: "The energy possessed by an object because of its position is:",
    options:["Kinetic energy", "Potential energy", "Sound energy", "Electrical energy"],
    correct: 1,
    explanation:
      "Potential energy is energy stored because of position or configuration.",
  },
  {
    id: 93,
    source: "Expected",
    question: "A moving object possesses:",
    options:["Kinetic energy", "Only potential energy", "No energy", "Chemical energy only"],
    correct: 0,
    explanation:
      "An object in motion possesses kinetic energy.",
  },
  {
    id: 94,
    source: "Expected",
    question: "The unit of electrical energy commonly used in homes is:",
    options:["Watt", "Kilowatt-hour", "Volt", "Ampere"],
    correct: 1,
    explanation:
      "Electrical energy consumption in homes is commonly measured in kilowatt-hours (kWh).",
  },
  {
    id: 95,
    source: "Expected",
    question: "One kilowatt-hour is equal to:",
    options:[
      "3.6 × 10³ J",
      "3.6 × 10⁴ J",
      "3.6 × 10⁶ J",
      "3.6 × 10⁸ J",
    ],
    correct: 2,
    explanation:
      "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J.",
  },
  {
    id: 96,
    source: "Expected",
    question: "Which colour of visible light has the longest wavelength?",
    options:["Violet", "Blue", "Green", "Red"],
    correct: 3,
    explanation:
      "Red light has the longest wavelength among the main colours of visible light.",
  },
  {
    id: 97,
    source: "Expected",
    question: "Which colour of visible light has the shortest wavelength?",
    options:["Red", "Yellow", "Green", "Violet"],
    correct: 3,
    explanation:
      "Violet light has the shortest wavelength among the visible colours.",
  },
  {
    id: 98,
    source: "Expected",
    question: "The frequency of a wave is inversely proportional to its:",
    options:["Wavelength", "Mass", "Force", "Pressure"],
    correct: 0,
    explanation:
      "For a fixed wave speed, v = fλ, so frequency and wavelength are inversely related.",
  },
  {
    id: 99,
    source: "Expected",
    question: "Ultrasound has a frequency:",
    options:[
      "Below 20 Hz",
      "Below 20 kHz",
      "Above 20 kHz",
      "Exactly 20 Hz",
    ],
    correct: 2,
    explanation:
      "Ultrasound refers to sound waves with frequencies above approximately 20 kHz.",
  },
  {
    id: 100,
    source: "Expected",
    question: "The normal audible frequency range for humans is approximately:",
    options:[
      "2 Hz to 200 Hz",
      "20 Hz to 20 kHz",
      "200 Hz to 2 kHz",
      "20 kHz to 200 kHz",
    ],
    correct: 1,
    explanation:
      "The commonly stated human hearing range is approximately 20 Hz to 20 kHz.",
  },
  {
    id: 101,
    source: "Expected",
    question: "In a transverse wave, particles vibrate:",
    options:[
      "Parallel to wave direction",
      "Perpendicular to wave direction",
      "Only upward",
      "Only downward",
    ],
    correct: 1,
    explanation:
      "In a transverse wave, particles vibrate perpendicular to the direction of wave propagation.",
  },
  {
    id: 102,
    source: "Expected",
    question: "In a longitudinal wave, particles vibrate:",
    options:[
      "Perpendicular to propagation",
      "Parallel to propagation",
      "In circles only",
      "Without motion",
    ],
    correct: 1,
    explanation:
      "In a longitudinal wave, particles vibrate parallel to the direction of wave propagation.",
  },
  {
    id: 103,
    source: "Expected",
    question: "The bending of light around obstacles is called:",
    options:["Reflection", "Refraction", "Diffraction", "Dispersion"],
    correct: 2,
    explanation:
      "Diffraction is the bending or spreading of waves around obstacles and through narrow openings.",
  },
  {
    id: 104,
    source: "Expected",
    question: "A convex mirror always forms an image that is:",
    options:[
      "Real and inverted",
      "Virtual and diminished",
      "Real and magnified",
      "Virtual and magnified",
    ],
    correct: 1,
    explanation:
      "A convex mirror produces a virtual, upright and diminished image.",
  },
  {
    id: 105,
    source: "Expected",
    question: "A concave mirror can form:",
    options:[
      "Only virtual images",
      "Only diminished images",
      "Real or virtual images",
      "No image",
    ],
    correct: 2,
    explanation:
      "Depending on the object's position, a concave mirror can form either real or virtual images.",
  },
  {
    id: 106,
    source: "Expected",
    question: "The focal length of a plane mirror is:",
    options:["Zero", "One metre", "Infinite", "Negative one metre"],
    correct: 2,
    explanation:
      "A plane mirror can be considered to have an infinite radius of curvature and therefore infinite focal length.",
  },
  {
    id: 107,
    source: "Expected",
    question: "The image in a plane mirror is laterally:",
    options:["Magnified", "Inverted", "Reversed", "Destroyed"],
    correct: 2,
    explanation:
      "A plane mirror produces lateral inversion, meaning left and right appear reversed.",
  },
  {
    id: 108,
    source: "Expected",
    question: "A prism can split white light because different colours have different:",
    options:["Masses", "Refractive indices", "Charges", "Temperatures"],
    correct: 1,
    explanation:
      "Different wavelengths of light experience different refractive indices in a material, producing dispersion.",
  },
  {
    id: 109,
    source: "Expected",
    question: "The resistance of a conductor generally increases when its:",
    options:[
      "Temperature decreases",
      "Temperature increases",
      "Length becomes zero",
      "Area becomes infinite",
    ],
    correct: 1,
    explanation:
      "For many metallic conductors, electrical resistance increases as temperature increases.",
  },
  {
    id: 110,
    source: "Expected",
    question: "If voltage is constant and resistance increases, current:",
    options:["Increases", "Decreases", "Becomes infinite", "Always becomes zero"],
    correct: 1,
    explanation:
      "From Ohm's law I = V/R. At constant voltage, increasing resistance decreases current.",
  },
  {
    id: 111,
    source: "Expected",
    question: "If resistance is constant and voltage doubles, current:",
    options:["Halves", "Doubles", "Becomes zero", "Remains unchanged"],
    correct: 1,
    explanation:
      "From I = V/R, if resistance remains constant, doubling voltage doubles current.",
  },
  {
    id: 112,
    source: "Expected",
    question: "Two resistors connected in series have a total resistance equal to:",
    options:[
      "The difference of resistances",
      "The sum of resistances",
      "The product only",
      "The smaller resistance",
    ],
    correct: 1,
    explanation:
      "For resistors in series, total resistance is the sum of individual resistances.",
  },
  {
    id: 113,
    source: "Expected",
    question: "In a parallel circuit, the voltage across each parallel branch is:",
    options:[
      "Always zero",
      "The same",
      "Always different",
      "Infinite",
    ],
    correct: 1,
    explanation:
      "Components connected in parallel have the same potential difference across them.",
  },
  {
    id: 114,
    source: "Expected",
    question: "A transformer works with:",
    options:[
      "Direct current only",
      "Alternating current",
      "Static charge only",
      "Mechanical energy only",
    ],
    correct: 1,
    explanation:
      "A conventional transformer operates using changing magnetic flux produced by alternating current.",
  },
  {
    id: 115,
    source: "Expected",
    question: "A step-up transformer:",
    options:[
      "Decreases voltage",
      "Increases voltage",
      "Always decreases current to zero",
      "Produces no magnetic field",
    ],
    correct: 1,
    explanation:
      "A step-up transformer increases the output voltage compared with the input voltage.",
  },
  {
    id: 116,
    source: "Expected",
    question: "The magnetic field around a straight current-carrying wire consists of:",
    options:[
      "Straight parallel lines",
      "Concentric circles",
      "Random lines",
      "No field",
    ],
    correct: 1,
    explanation:
      "The magnetic field around a straight current-carrying conductor forms concentric circular field lines.",
  },
  {
    id: 117,
    source: "Expected",
    question: "The Earth behaves approximately like a:",
    options:["Electric bulb", "Bar magnet", "Battery", "Transformer"],
    correct: 1,
    explanation:
      "Earth has a magnetic field and behaves approximately like a large bar magnet.",
  },
  {
    id: 118,
    source: "Expected",
    question: "The energy stored in a battery is mainly:",
    options:[
      "Chemical energy",
      "Sound energy",
      "Mechanical energy",
      "Gravitational energy",
    ],
    correct: 0,
    explanation:
      "A battery stores chemical energy and converts it into electrical energy during operation.",
  },
  {
    id: 119,
    source: "Expected",
    question: "A solar cell converts:",
    options:[
      "Electrical energy into light",
      "Light energy into electrical energy",
      "Sound into heat",
      "Mechanical energy into sound",
    ],
    correct: 1,
    explanation:
      "A photovoltaic solar cell converts light energy into electrical energy.",
  },
  {
    id: 120,
    source: "Expected",
    question: "The instrument used to detect small electric currents is:",
    options:["Galvanometer", "Barometer", "Thermometer", "Hydrometer"],
    correct: 0,
    explanation:
      "A galvanometer is a sensitive instrument used to detect and measure small electric currents.",
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

export default function Physics() {
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

          <strong>Physics</strong>
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

            <h1>Physics</h1>

            <p>
              Strengthen your Physics concepts with
              exam-focused questions covering mechanics,
              work and energy, heat, waves, sound, light,
              electricity, magnetism and more.
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

              <h2>Physics for Initial Tests</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Physics questions in armed-forces initial tests
              generally focus on fundamental concepts, common
              formulas and the practical application of basic
              physical principles.
            </p>

            <p>
              Important areas include mechanics, force,
              motion, work and energy, heat, sound, light,
              electricity, magnetism, waves and basic
              measurements.
            </p>

            <div className="info-box">
              <FiInfo />

              <div>
                <strong>Practice Strategy</strong>

                <p>
                  Understand the basic concept and formula
                  first, then practise solving short questions
                  quickly without relying on a calculator.
                </p>

                <span>
                  The goal is accuracy combined with speed.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Topics */}
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
                  <h3>Mechanics</h3>

                  <p>
                    Motion, speed, velocity, acceleration,
                    force, Newton's laws, momentum, gravity
                    and friction.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Work, Energy & Power</h3>

                  <p>
                    Work, kinetic energy, potential energy,
                    power, conservation of energy and basic
                    mechanical calculations.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Heat, Waves & Light</h3>

                  <p>
                    Temperature, heat transfer, waves,
                    sound, reflection, refraction, mirrors,
                    lenses and dispersion.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Electricity & Magnetism</h3>

                  <p>
                    Current, voltage, resistance, Ohm's law,
                    electrical power, circuits, magnets,
                    motors, generators and transformers.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Important Formulas */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">03</span>

            <div>
              <span className="section-label">
                QUICK REVISION
              </span>

              <h2>Important Physics Formulas</h2>
            </div>
          </div>

          <div className="content-card">
            <div
              style={{
                width: "100%",
                overflowX: "auto",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "600px",
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
                      }}
                    >
                      Quantity
                    </th>

                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Formula
                    </th>

                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Meaning
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Speed
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                        fontWeight: 600,
                      }}
                    >
                      v = d/t
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Distance divided by time
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Force
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                        fontWeight: 600,
                      }}
                    >
                      F = ma
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Mass × acceleration
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Momentum
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                        fontWeight: 600,
                      }}
                    >
                      p = mv
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Mass × velocity
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Work
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                        fontWeight: 600,
                      }}
                    >
                      W = Fs
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Force × displacement
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Kinetic Energy
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                        fontWeight: 600,
                      }}
                    >
                      KE = ½mv²
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Energy of motion
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Potential Energy
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                        fontWeight: 600,
                      }}
                    >
                      PE = mgh
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Energy due to height
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Power
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                        fontWeight: 600,
                      }}
                    >
                      P = W/t
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Work done per unit time
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Ohm's Law
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                        fontWeight: 600,
                      }}
                    >
                      V = IR
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom:
                          "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Voltage = current × resistance
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                      }}
                    >
                      Electric Power
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        fontWeight: 600,
                      }}
                    >
                      P = VI
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                      }}
                    >
                      Voltage × current
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Question Bank */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">04</span>

            <div>
              <span className="section-label">
                QUESTION BANK
              </span>

              <h2>Physics MCQs</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              This question bank contains{" "}
              <strong>
                {questionBank.length} Physics MCQs
              </strong>
              . It covers the major Physics concepts commonly
              required for armed-forces initial-test preparation,
              together with additional expected practice questions.
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
                        width: "220px",
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
            <span className="section-number">05</span>

            <div>
              <span className="section-label">
                EXAM STRATEGY
              </span>

              <h2>Important Physics Tips</h2>
            </div>
          </div>

          <div className="tips-card">

            <div className="tip">
              <FiTarget />

              <div>
                <strong>Memorize basic formulas</strong>

                <p>
                  Know the important formulas for force,
                  motion, work, energy, power, electricity
                  and waves before the test.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiCheckCircle />

              <div>
                <strong>Understand the concepts</strong>

                <p>
                  Do not rely only on memorization. Understand
                  what each physical quantity and formula means.
                </p>
              </div>
            </div>

            <div className="tip">
              <FiAward />

              <div>
                <strong>Practise quick calculations</strong>

                <p>
                  Initial tests are time-limited, so practise
                  solving short numerical questions accurately
                  and quickly.
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

              <h2>Test Your Physics</h2>

              <p>
                10 questions are randomly selected from the
                complete Physics question bank.
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
                    <strong>Explanation</strong>

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

            <Link to="/notes/academics/english">
              English
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