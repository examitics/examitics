import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
  FiArrowLeft,
  FiTarget,
  FiAward,
} from "react-icons/fi";

import "../../styles/notes/notesPages.css";

/*
|--------------------------------------------------------------------------
| Chemistry Question Bank
|--------------------------------------------------------------------------
| This question bank is used for:
| 1. The complete Chemistry MCQ table
| 2. Random 10-question practice
|
| AFNS Academic Source questions are clearly labelled. Additional questions
| are original FSC-level practice questions written for revision.
|--------------------------------------------------------------------------
*/

const questionBank = [
  {
    question: "Which functional group is present in an aldehyde?",
    options: ["-OH", "-CHO", "-COOH", "-NH2"],
    correct: 1,
    explanation: "An aldehyde contains the terminal -CHO functional group.",
    source: "AFNS Academic Source",
    id: 1,
  },
  {
    question: "Oxidation of a secondary alcohol generally produces a:",
    options: ["Aldehyde", "Ketone", "Carboxylic acid", "Ether"],
    correct: 1,
    explanation: "Secondary alcohols are oxidized to ketones.",
    source: "AFNS Academic Source",
    id: 2,
  },
  {
    question: "Which compound gives a positive Tollens' test?",
    options: ["Ethane", "Ethanal", "Ethanol", "Ethene"],
    correct: 1,
    explanation:
      "Aldehydes such as ethanal reduce Tollens' reagent to metallic silver.",
    source: "AFNS Academic Source",
    id: 3,
  },
  {
    question: "Lucas reagent is used to distinguish between:",
    options: [
      "Alkanes",
      "Alcohols of different classes",
      "Carboxylic acids",
      "Amines",
    ],
    correct: 1,
    explanation:
      "Lucas reagent helps distinguish primary, secondary and tertiary alcohols by reaction rate.",
    source: "AFNS Academic Source",
    id: 4,
  },
  {
    question:
      "An ester is formed by the reaction of a carboxylic acid with an alcohol in the presence of:",
    options: [
      "A strong base",
      "An acid catalyst",
      "Water only",
      "A reducing agent",
    ],
    correct: 1,
    explanation:
      "Esterification is acid-catalyzed condensation of a carboxylic acid and alcohol.",
    source: "AFNS Academic Source",
    id: 5,
  },
  {
    question: "Which of the following is the strongest acid?",
    options: ["Methane", "Ethane", "Ethene", "Ethanoic acid"],
    correct: 3,
    explanation:
      "Ethanoic acid is acidic because its conjugate base is resonance-stabilized.",
    source: "AFNS Academic Source",
    id: 6,
  },
  {
    question: "The carbon atoms in methane are:",
    options: ["sp", "sp2", "sp3", "sp3d"],
    correct: 2,
    explanation:
      "Methane has four sigma bonds arranged tetrahedrally, corresponding to sp3 hybridization.",
    source: "AFNS Academic Source",
    id: 7,
  },
  {
    question: "Which of the following is an amine?",
    options: ["CH3NH2", "CH3OH", "CH3COOH", "CH3CHO"],
    correct: 0,
    explanation: "Methylamine, CH3NH2, is a primary amine.",
    source: "AFNS Academic Source",
    id: 8,
  },
  {
    question: "Reduction of propanone produces:",
    options: ["Propan-1-ol", "Propan-2-ol", "Propanal", "Propanoic acid"],
    correct: 1,
    explanation:
      "Reduction of propanone converts the carbonyl group to a secondary alcohol, propan-2-ol.",
    source: "AFNS Academic Source",
    id: 9,
  },
  {
    question: "Which of the following is a metalloid?",
    options: ["Sodium", "Boron", "Chlorine", "Calcium"],
    correct: 1,
    explanation: "Boron is commonly classified as a metalloid.",
    source: "AFNS Academic Source",
    id: 10,
  },
  {
    question:
      "Which trend generally occurs across a period from left to right?",
    options: [
      "Atomic radius increases",
      "Atomic radius decreases",
      "Metallic character increases",
      "Nuclear charge decreases",
    ],
    correct: 1,
    explanation:
      "Effective nuclear charge generally increases across a period, drawing electrons closer and decreasing atomic radius.",
    source: "AFNS Academic Source",
    id: 11,
  },
  {
    question:
      "At the cathode during electrolysis of molten sodium chloride, the product is:",
    options: ["Chlorine gas", "Sodium metal", "Oxygen gas", "Hydrogen gas"],
    correct: 1,
    explanation: "Na+ ions gain electrons at the cathode to form sodium metal.",
    source: "AFNS Academic Source",
    id: 12,
  },
  {
    question: "Which pair is isoelectronic?",
    options: ["N2 and CO", "Na and Cl", "H2 and O2", "K and Ca"],
    correct: 0,
    explanation: "N2 and CO each contain 14 electrons.",
    source: "AFNS Academic Source",
    id: 13,
  },
  {
    question:
      "The standard hydrogen electrode has a standard electrode potential of:",
    options: ["-1.00 V", "-0.50 V", "0.00 V", "+1.00 V"],
    correct: 2,
    explanation:
      "By convention, the standard hydrogen electrode is assigned E° = 0.00 V.",
    source: "AFNS Academic Source",
    id: 14,
  },
  {
    question: "Addition of hydrogen to an alkene is an example of:",
    options: ["Substitution", "Addition", "Elimination", "Neutralization"],
    correct: 1,
    explanation:
      "Hydrogen adds across the carbon-carbon double bond in an alkene.",
    source: "AFNS Academic Source",
    id: 15,
  },
  {
    question: "Which functional group is present in a carboxylic acid?",
    options: ["-OH", "-COOH", "-CHO", "-NH2"],
    correct: 1,
    explanation: "Carboxylic acids contain the -COOH group.",
    source: "AFNS Academic Source",
    id: 16,
  },
  {
    question:
      "Which bond generally has the lowest bond energy among the following?",
    options: ["N≡N", "O=O", "C-H", "H-H"],
    correct: 2,
    explanation:
      "A typical C-H bond has lower bond dissociation energy than the N≡N, O=O and H-H bonds listed.",
    source: "AFNS Academic Source",
    id: 17,
  },
  {
    question: "Which compound is an alcohol?",
    options: ["CH3OH", "CH3CHO", "CH3COOH", "CH3NH2"],
    correct: 0,
    explanation:
      "CH3OH contains a hydroxyl group bonded to carbon and is methanol.",
    source: "AFNS Academic Source",
    id: 18,
  },
  {
    question:
      "Which reagent is commonly used to test for unsaturation in an organic compound?",
    options: [
      "Bromine water",
      "Tollens' reagent",
      "Fehling's solution",
      "Lucas reagent",
    ],
    correct: 0,
    explanation:
      "Bromine water is decolorized by many alkenes because of addition across the double bond.",
    source: "AFNS Academic Source",
    id: 19,
  },
  {
    question: "Which of the following is an alkene?",
    options: ["Ethane", "Ethene", "Ethyne", "Methane"],
    correct: 1,
    explanation:
      "Ethene contains a carbon-carbon double bond and is an alkene.",
    source: "AFNS Academic Source",
    id: 20,
  },
  {
    question: "The general formula of open-chain alkanes is:",
    options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"],
    correct: 1,
    explanation: "Saturated acyclic hydrocarbons have the formula CnH2n+2.",
    source: "AFNS Academic Source",
    id: 21,
  },
  {
    question: "Which compound is aromatic?",
    options: ["Benzene", "Ethane", "Propane", "Butane"],
    correct: 0,
    explanation: "Benzene is a classic aromatic hydrocarbon.",
    source: "AFNS Academic Source",
    id: 22,
  },
  {
    question: "Which substance is a strong electrolyte in aqueous solution?",
    options: ["Glucose", "Sodium chloride", "Ethanol", "Urea"],
    correct: 1,
    explanation:
      "NaCl dissociates into ions in water and conducts electricity strongly.",
    source: "AFNS Academic Source",
    id: 23,
  },
  {
    question:
      "Which gas is commonly produced when an acid reacts with a carbonate?",
    options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Nitrogen"],
    correct: 2,
    explanation: "Acid-carbonate reactions release CO2 gas.",
    source: "AFNS Academic Source",
    id: 24,
  },
  {
    question: "A catalyst increases reaction rate mainly by:",
    options: [
      "Increasing product energy",
      "Lowering activation energy",
      "Increasing equilibrium constant",
      "Being permanently consumed",
    ],
    correct: 1,
    explanation:
      "A catalyst provides an alternative pathway with lower activation energy.",
    source: "AFNS Academic Source",
    id: 25,
  },
  {
    question: "An exothermic reaction:",
    options: [
      "Absorbs heat from surroundings",
      "Releases heat to surroundings",
      "Always requires light",
      "Has zero enthalpy change",
    ],
    correct: 1,
    explanation:
      "Exothermic reactions release heat, so their enthalpy change is negative.",
    source: "AFNS Academic Source",
    id: 26,
  },
  {
    question:
      "Which principle predicts the response of an equilibrium system to a change in conditions?",
    options: [
      "Boyle's law",
      "Le Chatelier's principle",
      "Ohm's law",
      "Pascal's law",
    ],
    correct: 1,
    explanation:
      "Le Chatelier's principle describes how equilibrium responds to imposed changes.",
    source: "AFNS Academic Source",
    id: 27,
  },
  {
    question: "A solution with pH less than 7 at 25°C is generally:",
    options: ["Acidic", "Basic", "Neutral", "Always saturated"],
    correct: 0,
    explanation: "At 25°C, pH below 7 indicates an acidic solution.",
    source: "AFNS Academic Source",
    id: 28,
  },
  {
    question: "Oxidation is commonly defined as:",
    options: [
      "Gain of electrons",
      "Loss of electrons",
      "Gain of protons only",
      "Loss of neutrons",
    ],
    correct: 1,
    explanation:
      "In electron-transfer reactions, oxidation is loss of electrons.",
    source: "AFNS Academic Source",
    id: 29,
  },
  {
    question: "Which substance can act as a reducing agent?",
    options: [
      "A species that readily donates electrons",
      "A species that only accepts electrons",
      "A neutron",
      "An inert gas only",
    ],
    correct: 0,
    explanation: "A reducing agent donates electrons and is itself oxidized.",
    source: "AFNS Academic Source",
    id: 30,
  },
  {
    question: "The pH of a neutral aqueous solution at 25°C is:",
    options: ["0", "5", "7", "14"],
    correct: 2,
    explanation: "At 25°C, a neutral aqueous solution has pH 7.",
    source: "AFNS Academic Source",
    id: 31,
  },
  {
    question:
      "When the direction of a reversible reaction is reversed, the enthalpy change:",
    options: [
      "Has the same sign",
      "Has the same magnitude but opposite sign",
      "Becomes zero",
      "Doubles",
    ],
    correct: 1,
    explanation:
      "Reversing a reaction reverses the sign of ΔH while retaining its magnitude.",
    source: "AFNS Academic Source",
    id: 32,
  },
  {
    question: "The catalyst used in the Haber process is mainly:",
    options: ["Iron", "Copper", "Silver", "Aluminium"],
    correct: 0,
    explanation:
      "Finely divided iron is used as the industrial catalyst in the Haber process.",
    source: "AFNS Academic Source",
    id: 33,
  },
  {
    question:
      "Among the common diatomic halogens listed, which has the highest bond dissociation energy?",
    options: ["F2", "Cl2", "Br2", "I2"],
    correct: 1,
    explanation:
      "The F-F bond is unusually weak; among these halogens, Cl2 has the highest bond dissociation energy.",
    source: "AFNS Academic Source",
    id: 34,
  },
  {
    question:
      "Which ion has five unpaired electrons in its high-spin free-ion configuration?",
    options: ["Fe3+", "Fe2+", "Cu2+", "Zn2+"],
    correct: 0,
    explanation:
      "Fe3+ has a 3d5 configuration, giving five unpaired electrons in the free ion.",
    source: "AFNS Academic Source",
    id: 35,
  },
  {
    question: "The oxidation number of oxygen in most compounds is:",
    options: ["+2", "0", "-2", "+1"],
    correct: 2,
    explanation:
      "Oxygen commonly has oxidation number -2, with important exceptions such as peroxides.",
    source: "AFNS Academic Source",
    id: 36,
  },
  {
    question: "Dry ice is:",
    options: ["Solid CO2", "Solid O2", "Solid N2", "Solid H2O"],
    correct: 0,
    explanation: "Dry ice is the solid form of carbon dioxide.",
    source: "AFNS Academic Source",
    id: 37,
  },
  {
    question: "The most abundant element by mass in Earth's crust is:",
    options: ["Silicon", "Oxygen", "Aluminium", "Iron"],
    correct: 1,
    explanation:
      "Oxygen is the most abundant element by mass in Earth's crust.",
    source: "AFNS Academic Source",
    id: 38,
  },
  {
    question: "Which of the following is a noble gas?",
    options: ["Neon", "Chlorine", "Hydrogen", "Oxygen"],
    correct: 0,
    explanation: "Neon is a Group 18 noble gas.",
    source: "AFNS Academic Source",
    id: 39,
  },
  {
    question:
      "A covalent bond in which the shared electron pair is donated by one atom is called a:",
    options: [
      "Ionic bond",
      "Coordinate covalent bond",
      "Metallic bond",
      "Hydrogen bond",
    ],
    correct: 1,
    explanation:
      "In a coordinate covalent bond, both shared electrons originate from one atom.",
    source: "AFNS Academic Source",
    id: 40,
  },
  {
    question: "Hydroquinone has the molecular formula:",
    options: ["C6H6O2", "C6H12O6", "C6H6O", "C5H6O2"],
    correct: 0,
    explanation: "Hydroquinone is benzene-1,4-diol with formula C6H6O2.",
    source: "AFNS Academic Source",
    id: 41,
  },
  {
    question: "Cytochrome oxidase belongs to which major enzyme class?",
    options: ["Oxidoreductases", "Transferases", "Hydrolases", "Ligases"],
    correct: 0,
    explanation:
      "Cytochrome oxidase catalyzes an oxidation-reduction reaction and is an oxidoreductase.",
    source: "AFNS Academic Source",
    id: 42,
  },
  {
    question:
      "In base-excision repair, the damaged base is first removed by a:",
    options: ["DNA glycosylase", "DNA ligase", "RNA polymerase", "Ribosome"],
    correct: 0,
    explanation:
      "DNA glycosylases recognize and remove damaged bases during base-excision repair.",
    source: "AFNS Academic Source",
    id: 43,
  },
  {
    question:
      "A Grignard reagent reacts with carbon dioxide followed by acidic work-up to produce a:",
    options: ["Carboxylic acid", "Ketone only", "Primary amine", "Alkene"],
    correct: 0,
    explanation:
      "Grignard reagents add to CO2 and, after acidic work-up, yield carboxylic acids.",
    source: "AFNS Academic Source",
    id: 44,
  },
  {
    question:
      "Which has the highest boiling point among methane, ethane, propane and butane?",
    options: ["Methane", "Ethane", "Propane", "Butane"],
    correct: 3,
    explanation:
      "Boiling point generally increases with molar mass and dispersion forces within this homologous series.",
    source: "AFNS Academic Source",
    id: 45,
  },
  {
    question: "Which statement correctly distinguishes molarity from molality?",
    options: [
      "Both are moles per kilogram",
      "Molarity uses moles per litre of solution; molality uses moles per kilogram of solvent",
      "Molarity uses kilograms of solvent",
      "Molality uses litres of solution",
    ],
    correct: 1,
    explanation:
      "Molarity is mol solute per litre solution, while molality is mol solute per kilogram solvent.",
    source: "AFNS Academic Source",
    id: 46,
  },
  {
    question: "Bromine water is commonly used to test for:",
    options: ["Unsaturation", "Chloride ions", "Ammonia", "Carbon dioxide"],
    correct: 0,
    explanation:
      "Alkenes and other unsaturated compounds can decolorize bromine water by addition reactions.",
    source: "AFNS Academic Source",
    id: 47,
  },
  {
    question:
      "Increasing temperature generally causes the rate of a chemical reaction to:",
    options: [
      "Decrease always",
      "Increase",
      "Become zero",
      "Remain exactly unchanged",
    ],
    correct: 1,
    explanation:
      "Higher temperature generally increases the fraction of collisions with energy at or above the activation energy.",
    source: "AFNS Academic Source",
    id: 48,
  },
  {
    question: "Which element has the highest first ionization energy?",
    options: ["Hydrogen", "Helium", "Lithium", "Neon"],
    correct: 1,
    explanation:
      "Helium has the highest first ionization energy among these choices.",
    source: "AFNS Academic Source",
    id: 49,
  },
  {
    question: "Who discovered the neutron?",
    options: [
      "J. J. Thomson",
      "Ernest Rutherford",
      "James Chadwick",
      "Niels Bohr",
    ],
    correct: 2,
    explanation: "James Chadwick discovered the neutron in 1932.",
    source: "AFNS Academic Source",
    id: 50,
  },
  {
    question:
      "Which element has the highest electronegativity on the Pauling scale?",
    options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
    correct: 2,
    explanation:
      "Fluorine has the highest electronegativity on the Pauling scale.",
    source: "AFNS Academic Source",
    id: 51,
  },
  {
    question: "Which of the following is a transition metal?",
    options: ["Sodium", "Calcium", "Iron", "Aluminium"],
    correct: 2,
    explanation: "Iron is a d-block transition metal.",
    source: "AFNS Academic Source",
    id: 52,
  },
  {
    question:
      "Which substance is used as the standard reference for measuring electrode potentials?",
    options: [
      "Copper electrode",
      "Standard hydrogen electrode",
      "Zinc electrode",
      "Silver electrode",
    ],
    correct: 1,
    explanation:
      "The standard hydrogen electrode is the conventional reference electrode.",
    source: "AFNS Academic Source",
    id: 53,
  },
  {
    question:
      "What is the standard electrode potential of the standard hydrogen electrode?",
    options: ["-1.00 V", "-0.50 V", "0.00 V", "+1.00 V"],
    correct: 2,
    explanation:
      "The standard hydrogen electrode is assigned a standard potential of 0.00 V.",
    source: "AFNS Academic Source",
    id: 54,
  },
  {
    question:
      "Which type of reaction involves the transfer of electrons between chemical species?",
    options: [
      "Redox reaction",
      "Precipitation only",
      "Neutralization only",
      "Decomposition only",
    ],
    correct: 0,
    explanation:
      "Redox reactions involve oxidation and reduction, which are electron-transfer processes.",
    source: "AFNS Academic Source",
    id: 55,
  },
  {
    question: "Which element is present in all organic compounds?",
    options: ["Oxygen", "Carbon", "Nitrogen", "Sulfur"],
    correct: 1,
    explanation:
      "Organic chemistry is centered on carbon compounds; organic compounds contain carbon.",
    source: "AFNS Academic Source",
    id: 56,
  },
  {
    question: "Which of the following is the chemical formula of ammonia?",
    options: ["NH₃", "NH₄", "NO₂", "N₂H₄"],
    correct: 0,
    explanation: "Ammonia has the molecular formula NH3.",
    source: "AFNS Academic Source",
    id: 57,
  },
  {
    question:
      "Which substance is commonly used to remove temporary hardness from water by boiling?",
    options: [
      "Calcium bicarbonate solution",
      "Boiling",
      "Sodium chloride",
      "Ethanol",
    ],
    correct: 1,
    explanation:
      "Boiling decomposes soluble bicarbonates responsible for temporary hardness, allowing precipitates to form.",
    source: "AFNS Academic Source",
    id: 58,
  },
  {
    question: "Which gas is released when a metal reacts with a dilute acid?",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Chlorine"],
    correct: 1,
    explanation:
      "Many reactive metals react with dilute acids to release hydrogen gas.",
    source: "AFNS Academic Source",
    id: 59,
  },
  {
    question:
      "Which of the following is a non-metal that is liquid at room temperature?",
    options: ["Bromine", "Iodine", "Sulfur", "Carbon"],
    correct: 0,
    explanation: "Bromine is a non-metal and is liquid at room temperature.",
    source: "AFNS Academic Source",
    id: 60,
  },
  {
    question: "What is the molar mass of H2O?",
    options: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
    correct: 1,
    explanation:
      "H2O has two hydrogen atoms (2 g/mol) and one oxygen atom (16 g/mol), totaling 18 g/mol.",
    source: "FSC Practice",
    id: 61,
  },
  {
    question: "How many particles are present in one mole of a substance?",
    options: [
      "6.022 × 10^20",
      "6.022 × 10^21",
      "6.022 × 10^23",
      "6.022 × 10^26",
    ],
    correct: 2,
    explanation:
      "One mole contains Avogadro's constant, approximately 6.022 × 10^23 entities.",
    source: "FSC Practice",
    id: 62,
  },
  {
    question: "What is the empirical formula of hydrogen peroxide, H2O2?",
    options: ["H2O2", "HO", "H2O", "HO2"],
    correct: 1,
    explanation:
      "Dividing the subscripts in H2O2 by their greatest common divisor, 2, gives HO.",
    source: "FSC Practice",
    id: 63,
  },
  {
    question: "Which particle determines the identity of an element?",
    options: ["Neutron", "Proton", "Electron", "Photon"],
    correct: 1,
    explanation:
      "The number of protons, the atomic number, defines an element.",
    source: "FSC Practice",
    id: 64,
  },
  {
    question: "Isotopes of an element have the same number of:",
    options: ["Neutrons", "Protons", "Nucleons", "Mass units"],
    correct: 1,
    explanation:
      "Isotopes have the same atomic number, so they contain the same number of protons.",
    source: "FSC Practice",
    id: 65,
  },
  {
    question: "The maximum number of electrons in a p subshell is:",
    options: ["2", "6", "10", "14"],
    correct: 1,
    explanation:
      "A p subshell contains three orbitals, each holding two electrons, for a maximum of six.",
    source: "FSC Practice",
    id: 66,
  },
  {
    question: "Which orbital is spherical in shape?",
    options: ["s", "p", "d", "f"],
    correct: 0,
    explanation: "An s orbital has a spherical shape.",
    source: "FSC Practice",
    id: 67,
  },
  {
    question: "The electronic configuration of sodium (Z = 11) is:",
    options: ["2,8,1", "2,7,2", "2,8,2", "2,9"],
    correct: 0,
    explanation: "Sodium has 11 electrons arranged as 2, 8, 1.",
    source: "FSC Practice",
    id: 68,
  },
  {
    question: "Across a period, first ionization energy generally:",
    options: [
      "Decreases",
      "Increases",
      "Becomes zero",
      "Remains exactly constant",
    ],
    correct: 1,
    explanation:
      "Effective nuclear charge generally increases across a period, making electron removal harder.",
    source: "FSC Practice",
    id: 69,
  },
  {
    question: "Down a group, atomic radius generally:",
    options: ["Decreases", "Increases", "Becomes zero", "Is unchanged"],
    correct: 1,
    explanation:
      "Additional electron shells are added down a group, increasing atomic radius.",
    source: "FSC Practice",
    id: 70,
  },
  {
    question: "The most electronegative element is:",
    options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
    correct: 1,
    explanation:
      "Fluorine has the highest electronegativity on the Pauling scale.",
    source: "FSC Practice",
    id: 71,
  },
  {
    question: "An ionic bond is formed primarily by:",
    options: [
      "Sharing electrons equally",
      "Transfer of electrons",
      "Sharing protons",
      "Transfer of neutrons",
    ],
    correct: 1,
    explanation:
      "Ionic bonding results from electron transfer and electrostatic attraction between oppositely charged ions.",
    source: "FSC Practice",
    id: 72,
  },
  {
    question: "Which molecule has a linear shape?",
    options: ["H2O", "NH3", "CO2", "CH4"],
    correct: 2,
    explanation: "CO2 has two bonding regions around carbon and is linear.",
    source: "FSC Practice",
    id: 73,
  },
  {
    question: "The shape of methane is:",
    options: ["Linear", "Trigonal planar", "Tetrahedral", "Bent"],
    correct: 2,
    explanation:
      "Methane has four bonding pairs around carbon and a tetrahedral geometry.",
    source: "FSC Practice",
    id: 74,
  },
  {
    question: "Hydrogen bonding is especially important in:",
    options: ["CH4", "H2O", "CO2", "H2S only"],
    correct: 1,
    explanation:
      "Water molecules form strong intermolecular hydrogen bonds because hydrogen is bonded to highly electronegative oxygen.",
    source: "FSC Practice",
    id: 75,
  },
  {
    question: "Which intermolecular force is generally weakest among these?",
    options: [
      "Hydrogen bonding",
      "Dipole-dipole attraction",
      "London dispersion forces",
      "Ionic attraction",
    ],
    correct: 2,
    explanation:
      "London dispersion forces are generally the weakest of these intermolecular interactions.",
    source: "FSC Practice",
    id: 76,
  },
  {
    question: "Boyle's law states that at constant temperature, pressure is:",
    options: [
      "Directly proportional to volume",
      "Inversely proportional to volume",
      "Equal to volume",
      "Independent of volume",
    ],
    correct: 1,
    explanation:
      "For a fixed amount of gas at constant temperature, P is inversely proportional to V.",
    source: "FSC Practice",
    id: 77,
  },
  {
    question:
      "Charles's law states that at constant pressure, volume is directly proportional to:",
    options: ["Mass only", "Absolute temperature", "Pressure", "Density"],
    correct: 1,
    explanation:
      "At constant pressure, gas volume is directly proportional to absolute temperature.",
    source: "FSC Practice",
    id: 78,
  },
  {
    question:
      "The concentration expressed as moles of solute per litre of solution is:",
    options: ["Molality", "Molarity", "Mole fraction", "Mass fraction"],
    correct: 1,
    explanation:
      "Molarity is defined as moles of solute per litre of solution.",
    source: "FSC Practice",
    id: 79,
  },
  {
    question:
      "A solution containing 1 mole of NaCl in 1 litre of solution has a molarity of:",
    options: ["0.1 M", "0.5 M", "1 M", "2 M"],
    correct: 2,
    explanation: "Molarity = moles of solute / litres of solution = 1 mol/L.",
    source: "FSC Practice",
    id: 80,
  },
  {
    question: "An exothermic reaction has:",
    options: [
      "Positive ΔH",
      "Negative ΔH",
      "Zero ΔH always",
      "No energy change",
    ],
    correct: 1,
    explanation:
      "Heat is released in an exothermic process, so ΔH is negative.",
    source: "FSC Practice",
    id: 81,
  },
  {
    question: "A catalyst changes the:",
    options: [
      "Equilibrium constant",
      "Activation energy pathway",
      "Atomic number",
      "Products at equilibrium",
    ],
    correct: 1,
    explanation:
      "A catalyst provides an alternative pathway with lower activation energy and does not change the equilibrium constant.",
    source: "FSC Practice",
    id: 82,
  },
  {
    question:
      "Increasing temperature usually increases reaction rate because particles:",
    options: [
      "Become larger",
      "Have greater average kinetic energy",
      "Lose all collisions",
      "Stop moving",
    ],
    correct: 1,
    explanation:
      "Higher temperature increases average kinetic energy and the fraction of particles able to overcome activation energy.",
    source: "FSC Practice",
    id: 83,
  },
  {
    question: "A dynamic equilibrium occurs when:",
    options: [
      "The reaction stops completely",
      "Forward and reverse rates are equal",
      "Only products remain",
      "Only reactants remain",
    ],
    correct: 1,
    explanation:
      "At dynamic equilibrium, forward and reverse reactions continue at equal rates.",
    source: "FSC Practice",
    id: 84,
  },
  {
    question:
      "For an exothermic equilibrium reaction, increasing temperature generally shifts equilibrium toward:",
    options: [
      "Products",
      "Reactants",
      "Both equally",
      "Neither under any condition",
    ],
    correct: 1,
    explanation:
      "Adding heat favors the endothermic direction, which is the reverse direction for an exothermic forward reaction.",
    source: "FSC Practice",
    id: 85,
  },
  {
    question: "A buffer solution resists changes in:",
    options: ["Mass", "pH", "Volume", "Temperature"],
    correct: 1,
    explanation:
      "Buffers resist large changes in pH when small amounts of acid or base are added.",
    source: "FSC Practice",
    id: 86,
  },
  {
    question:
      "Which indicator is commonly used to detect an acid-base endpoint by a color change?",
    options: [
      "Phenolphthalein",
      "Copper sulfate",
      "Sodium chloride",
      "Ethanol",
    ],
    correct: 0,
    explanation:
      "Phenolphthalein is an acid-base indicator that changes color over a characteristic pH range.",
    source: "FSC Practice",
    id: 87,
  },
  {
    question: "A strong acid in aqueous solution:",
    options: [
      "Ionizes only slightly",
      "Ionizes extensively",
      "Never forms ions",
      "Is always concentrated",
    ],
    correct: 1,
    explanation:
      "Strong acids ionize essentially completely in dilute aqueous solution.",
    source: "FSC Practice",
    id: 88,
  },
  {
    question: "Neutralization between an acid and a base generally produces:",
    options: [
      "Salt and water",
      "Metal and oxygen",
      "Hydrogen only",
      "Carbon only",
    ],
    correct: 0,
    explanation: "Acid-base neutralization commonly forms a salt and water.",
    source: "FSC Practice",
    id: 89,
  },
  {
    question: "The oxidation number of sodium in NaCl is:",
    options: ["-1", "0", "+1", "+2"],
    correct: 2,
    explanation: "Chlorine is -1 in NaCl, so sodium must be +1.",
    source: "FSC Practice",
    id: 90,
  },
  {
    question: "Which species is reduced in a redox reaction?",
    options: [
      "The species that loses electrons",
      "The species that gains electrons",
      "The catalyst only",
      "The solvent only",
    ],
    correct: 1,
    explanation: "Reduction is gain of electrons.",
    source: "FSC Practice",
    id: 91,
  },
  {
    question: "In a galvanic cell, chemical energy is converted into:",
    options: [
      "Electrical energy",
      "Nuclear energy",
      "Sound only",
      "Light only",
    ],
    correct: 0,
    explanation:
      "A galvanic cell uses a spontaneous redox reaction to generate electrical energy.",
    source: "FSC Practice",
    id: 92,
  },
  {
    question: "During electrolysis, reduction occurs at the:",
    options: ["Anode", "Cathode", "Salt bridge", "Electrolyte surface only"],
    correct: 1,
    explanation:
      "Reduction occurs at the cathode in both galvanic and electrolytic cells.",
    source: "FSC Practice",
    id: 93,
  },
  {
    question: "Rusting of iron requires oxygen and usually:",
    options: [
      "Water or moisture",
      "Pure nitrogen",
      "Helium",
      "Dry carbon dioxide only",
    ],
    correct: 0,
    explanation: "Iron corrosion is promoted by oxygen and water/moisture.",
    source: "FSC Practice",
    id: 94,
  },
  {
    question: "The simplest alkane is:",
    options: ["Methane", "Ethene", "Ethyne", "Benzene"],
    correct: 0,
    explanation: "Methane, CH4, is the simplest alkane.",
    source: "FSC Practice",
    id: 95,
  },
  {
    question: "An alkene contains at least one:",
    options: [
      "C-C single bond only",
      "C=C double bond",
      "C≡C triple bond only",
      "C=O bond",
    ],
    correct: 1,
    explanation:
      "Alkenes are unsaturated hydrocarbons containing a carbon-carbon double bond.",
    source: "FSC Practice",
    id: 96,
  },
  {
    question: "The functional group of an alcohol is:",
    options: ["-COOH", "-OH", "-CHO", "-COO-"],
    correct: 1,
    explanation: "Alcohols contain a hydroxyl (-OH) group attached to carbon.",
    source: "FSC Practice",
    id: 97,
  },
  {
    question: "Which compound is a ketone?",
    options: ["Propanone", "Propanal", "Propanoic acid", "Propan-1-ol"],
    correct: 0,
    explanation:
      "Propanone contains a carbonyl group bonded to two carbon atoms, making it a ketone.",
    source: "FSC Practice",
    id: 98,
  },
  {
    question: "Polymerization of ethene produces:",
    options: ["Polyethene", "Polypropene", "PVC", "Nylon-6"],
    correct: 0,
    explanation: "Addition polymerization of ethene forms polyethene.",
    source: "FSC Practice",
    id: 99,
  },
  {
    question: "Benzene is classified as a:",
    options: [
      "Saturated alkane",
      "Aromatic hydrocarbon",
      "Carboxylic acid",
      "Primary amine",
    ],
    correct: 1,
    explanation:
      "Benzene is an aromatic hydrocarbon with a delocalized pi-electron system.",
    source: "FSC Practice",
    id: 100,
  },
];

const shuffleQuestions = (questions) => {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const Chemistry = () => {
  const [practiceQuestions, setPracticeQuestions] = useState(() =>
    shuffleQuestions(questionBank).slice(0, 10),
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = practiceQuestions[currentQuestion];

  const handleAnswer = (answerIndex) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);

    if (answerIndex === question.correct) {
      setScore((previous) => previous + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < practiceQuestions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
      setSelectedAnswer(null);
    }
  };

  const restartPractice = () => {
    setPracticeQuestions(shuffleQuestions(questionBank).slice(0, 10));
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <main className="synonyms-page">
      <div className="synonyms-container">
        {/* Breadcrumb */}
        <nav className="synonyms-breadcrumb">
          <Link to="/notes">Notes Hub</Link>
          <span>/</span>
          <Link to="/notes">Academics</Link>
          <span>/</span>
          <span>Chemistry</span>
        </nav>

        {/* Hero */}
        <header className="synonyms-hero">
          <div className="synonyms-hero-icon">
            <FiBookOpen />
          </div>

          <div className="synonyms-hero-content">
            <span className="synonyms-eyebrow">ACADEMICS</span>
            <h1>Chemistry</h1>

            <p>
              Revise Chemistry for academic initial-test preparation with clear
              FSC-level concepts, important formulae and a focused collection of
              Chemistry practice questions.
            </p>

            <p>
              Key areas include atomic structure, the periodic table, chemical
              bonding, mole concept, states of matter, energetics, chemical
              equilibrium, acids and bases, electrochemistry and organic
              chemistry.
            </p>
          </div>
        </header>

        {/* Section 01 — Introduction */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <span className="section-label">INTRODUCTION</span>
              <h2>Chemistry for Initial Tests</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              Chemistry becomes much easier to revise when you understand the
              basic idea behind each formula, reaction and chemical term. For
              academic-test preparation, focus on core concepts, chemical
              formulae, basic calculations, balanced equations and common
              applications.
            </p>

            <p>
              Build your preparation topic by topic. Start with atoms, molecules
              and the mole concept, then move through periodic trends, bonding,
              states of matter, energetics, equilibrium, acids and bases, redox
              reactions and organic chemistry.
            </p>

            <p>
              The Chemistry question bank contains
              <strong>{questionBank.length} MCQs</strong>. The practice section
              randomly selects 10 questions from the same bank each time you
              start or restart the quiz.
            </p>

            <div className="info-box">
              <FiTarget />

              <div>
                <strong>Practice Strategy</strong>
                <p>
                  Revise the basic concept first, then practise MCQs and short
                  calculations. Pay attention to units, chemical formulae and
                  reaction conditions, and balance accuracy with speed when
                  solving questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 — Core Chemistry Topics */}
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
                  <h3>Basic Concepts and Stoichiometry</h3>

                  <p>
                    Atoms, molecules, ions, the mole, Avogadro&apos;s constant,
                    molar mass, empirical and molecular formulae, balancing
                    equations and limiting reactants.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>02</span>

                <div>
                  <h3>Atomic Structure</h3>

                  <p>
                    Protons, neutrons, electrons, isotopes, atomic number, mass
                    number, shells, subshells, orbitals and electronic
                    configuration.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>03</span>

                <div>
                  <h3>Periodic Table and Periodicity</h3>

                  <p>
                    Groups, periods, atomic radius, ionization energy, electron
                    affinity, electronegativity and metallic or non-metallic
                    character.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>04</span>

                <div>
                  <h3>Chemical Bonding</h3>

                  <p>
                    Ionic, covalent and coordinate bonding, polarity, Lewis
                    structures, molecular shapes, intermolecular forces and
                    hydrogen bonding.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>05</span>

                <div>
                  <h3>States of Matter and Solutions</h3>

                  <p>
                    Gas laws, diffusion, kinetic molecular theory, solutions,
                    concentration and solubility.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>06</span>

                <div>
                  <h3>Chemical Energetics and Kinetics</h3>

                  <p>
                    Exothermic and endothermic reactions, enthalpy, activation
                    energy, catalysts and factors affecting reaction rate.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>07</span>

                <div>
                  <h3>Chemical Equilibrium</h3>

                  <p>
                    Dynamic equilibrium, equilibrium constants, Le
                    Chatelier&apos;s principle and factors that shift
                    equilibrium.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>08</span>

                <div>
                  <h3>Acids, Bases and Salts</h3>

                  <p>
                    Acid and base definitions, pH, neutralization, indicators,
                    buffers and common salts.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>09</span>

                <div>
                  <h3>Redox and Electrochemistry</h3>

                  <p>
                    Oxidation numbers, oxidation and reduction, galvanic cells,
                    electrolysis and corrosion.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>10</span>

                <div>
                  <h3>Organic Chemistry</h3>

                  <p>
                    Hydrocarbons, alkanes, alkenes, alkynes, aromatic compounds,
                    functional groups, basic nomenclature and polymers.
                  </p>
                </div>
              </div>

              <div className="concept-item">
                <span>11</span>

                <div>
                  <h3>Applied and Environmental Chemistry</h3>

                  <p>
                    Water hardness and treatment, common industrial chemicals,
                    air pollutants, greenhouse gases and laboratory safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03 — Quick Revision */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">03</span>

            <div>
              <span className="section-label">QUICK REVISION</span>

              <h2>Key Facts to Remember</h2>
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
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Topic
                    </th>

                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Key Fact / Formula
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Avogadro&apos;s constant
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      6.022 × 10²³ entities per mole
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Atomic number
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Number of protons in the nucleus
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Mass number
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Number of protons + number of neutrons
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Neutral pH
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      pH 7 at 25°C
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Open-chain alkanes
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                        fontWeight: 600,
                      }}
                    >
                      CₙH₂ₙ₊₂
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Oxidation
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Loss of electrons
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Reduction
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Gain of electrons
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Boyle&apos;s law
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      P₁V₁ = P₂V₂ at constant temperature and fixed amount of
                      gas
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Charles&apos;s law
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      V₁/T₁ = V₂/T₂ at constant pressure; temperature in kelvin
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Gay-Lussac&apos;s law
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      P₁/T₁ = P₂/T₂ at constant volume; temperature in kelvin
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      Combined gas law
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        borderBottom: "1px solid var(--border-color, #e2e8f0)",
                      }}
                    >
                      P₁V₁/T₁ = P₂V₂/T₂ for a fixed amount of gas
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "13px 14px",
                      }}
                    >
                      Ideal gas equation
                    </td>

                    <td
                      style={{
                        padding: "13px 14px",
                        fontWeight: 600,
                      }}
                    >
                      PV = nRT
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 04 — Chemistry MCQ Question Bank */}
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-number">04</span>

            <div>
              <span className="section-label">QUESTION BANK</span>

              <h2>Chemistry MCQs</h2>
            </div>
          </div>

          <div className="content-card">
            <p>
              This question bank contains{" "}
              <strong>{questionBank.length} Chemistry questions</strong>.
              Questions labelled <strong>AFNS Academic Source</strong> are drawn
              from the Chemistry questions supplied for the AFNS academic sets.
              Questions labelled <strong>FSC Practice</strong> are newly written
              FSC-level practice questions.
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
                        <strong>{item.question}</strong>

                        <div
                          style={{
                            marginTop: "6px",
                            fontSize: "0.78rem",
                            opacity: 0.7,
                          }}
                        >
                          {item.source}
                        </div>
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

        {/* Section 05 — Interactive Practice */}
        <section className="practice-section">
          <div className="practice-header">
            <div>
              <span className="section-label">INTERACTIVE PRACTICE</span>

              <h2>Chemistry Practice Test</h2>

              <p>
                Practice with <strong>10 random Chemistry MCQs</strong> selected
                from the complete question bank above. Every time you choose{" "}
                <strong>Practice Again</strong>, a fresh random set of 10
                questions is generated.
              </p>
            </div>

            <div className="practice-progress">
              <strong>{currentQuestion + 1}</strong>

              <span>/ {practiceQuestions.length}</span>
            </div>
          </div>

          {!showResult ? (
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

                  if (selectedAnswer !== null && isCorrect) {
                    optionClass = "correct";
                  } else if (
                    selectedAnswer !== null &&
                    isSelected &&
                    !isCorrect
                  ) {
                    optionClass = "wrong";
                  }

                  return (
                    <button
                      key={`${question.id}-${index}`}
                      type="button"
                      className={`mcq-option ${optionClass}`}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedAnswer !== null}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="option-text">{option}</span>

                      {selectedAnswer !== null && isCorrect && (
                        <FiCheckCircle className="answer-icon" />
                      )}

                      {selectedAnswer !== null && isSelected && !isCorrect && (
                        <FiXCircle className="answer-icon" />
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
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
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                >
                  <FiArrowLeft />
                  Previous
                </button>

                <button
                  type="button"
                  className="primary-btn"
                  onClick={nextQuestion}
                  disabled={selectedAnswer === null}
                >
                  {currentQuestion === practiceQuestions.length - 1
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

              <span className="section-label">PRACTICE COMPLETE</span>

              <h2>Practice Test Completed</h2>

              <div className="result-score">
                <strong>{score}</strong>

                <span>/ {practiceQuestions.length}</span>
              </div>

              <p>
                You scored {score} out of {practiceQuestions.length} questions
                correctly.
              </p>

              <p>
                Percentage:{" "}
                <strong>
                  {Math.round((score / practiceQuestions.length) * 100)}%
                </strong>
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

        {/* Related Academic Topics */}
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

            <Link to="/notes/academics/general-knowledge">
              General Knowledge
              <FiArrowRight />
            </Link>

            <Link to="/notes/academics/current-affairs">
              Current Affairs
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
};

export default Chemistry;
