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
 * Biology question bank:
 * 108 distinct complete MCQs retained from the uploaded academic-labelled
 * Biology items. Reworded duplicates were removed. Candidate recollections
 * are unofficial; this page does not claim these are verified past-paper items.
 */
const questionBank = [
{
    id: 1,
    source: "Academic",
    question: "The basic structural and functional unit of life is:",
    options: ["cell", "tissue", "organ", "organ system"],
    correct: 0,
    explanation: "Cells perform the basic functions of living organisms.",
  },
{
    id: 2,
    source: "Academic",
    question: "The control center of a eukaryotic cell is the:",
    options: ["ribosome", "vacuole", "cell wall", "nucleus"],
    correct: 3,
    explanation: "The nucleus contains DNA and regulates cell activities.",
  },
{
    id: 3,
    source: "Academic",
    question: "The organelle that modifies and packages proteins is the:",
    options: ["centriole", "nucleolus", "Golgi apparatus", "lysosome"],
    correct: 2,
    explanation: "The Golgi apparatus processes and sorts proteins.",
  },
{
    id: 4,
    source: "Academic",
    question: "The site of aerobic respiration is mainly the:",
    options: ["vacuole", "mitochondrion", "ribosome", "Golgi body"],
    correct: 1,
    explanation:
      "Mitochondria generate much of the cell ATP by aerobic respiration.",
  },
{
    id: 5,
    source: "Academic",
    question: "Protein synthesis occurs on:",
    options: ["ribosomes", "lysosomes", "centrioles", "vacuoles"],
    correct: 0,
    explanation: "Ribosomes translate mRNA into polypeptides.",
  },
{
    id: 6,
    source: "Academic",
    question: "The selectively permeable boundary of a cell is the:",
    options: ["cell wall", "nuclear pore", "cytoplasm", "plasma membrane"],
    correct: 3,
    explanation:
      "The plasma membrane controls movement into and out of the cell.",
  },
{
    id: 7,
    source: "Academic",
    question: "Plant cell walls are mainly made of:",
    options: ["chitin", "starch", "cellulose", "glycogen"],
    correct: 2,
    explanation: "Cellulose provides strength to plant cell walls.",
  },
{
    id: 8,
    source: "Academic",
    question: "The organelle containing chlorophyll is the:",
    options: ["lysosome", "chloroplast", "mitochondrion", "nucleus"],
    correct: 1,
    explanation: "Chloroplasts capture light energy for photosynthesis.",
  },
{
    id: 9,
    source: "Academic",
    question: "The fluid portion of cytoplasm is called:",
    options: ["cytosol", "matrix", "stroma", "plasma"],
    correct: 0,
    explanation: "Cytosol is the aqueous part of the cytoplasm.",
  },
{
    id: 10,
    source: "Academic",
    question: "The organelle that digests worn-out cell parts is the:",
    options: ["ribosome", "chloroplast", "nucleolus", "lysosome"],
    correct: 3,
    explanation: "Lysosomes contain digestive enzymes.",
  },
{
    id: 11,
    source: "Academic",
    question: "The main immediate energy currency of cells is:",
    options: ["RNA", "ADP", "ATP", "DNA"],
    correct: 2,
    explanation: "ATP supplies energy for cellular processes.",
  },
{
    id: 12,
    source: "Academic",
    question: "Enzymes are biological catalysts that usually are:",
    options: ["minerals", "proteins", "lipids", "carbohydrates"],
    correct: 1,
    explanation: "Most enzymes are proteins that lower activation energy.",
  },
{
    id: 13,
    source: "Academic",
    question: "The sugar present in DNA is:",
    options: ["deoxyribose", "ribose", "glucose", "fructose"],
    correct: 0,
    explanation: "DNA contains deoxyribose sugar.",
  },
{
    id: 14,
    source: "Academic",
    question: "The base found in RNA but not DNA is:",
    options: ["thymine", "guanine", "cytosine", "uracil"],
    correct: 3,
    explanation: "RNA uses uracil in place of thymine.",
  },
{
    id: 15,
    source: "Academic",
    question: "The monomers of proteins are:",
    options: ["nucleotides", "monosaccharides", "amino acids", "fatty acids"],
    correct: 2,
    explanation: "Proteins are chains of amino acids.",
  },
{
    id: 16,
    source: "Academic",
    question: "The storage carbohydrate in animals is:",
    options: ["sucrose", "glycogen", "starch", "cellulose"],
    correct: 1,
    explanation: "Animals store glucose as glycogen.",
  },
{
    id: 17,
    source: "Academic",
    question: "The bond joining amino acids is a:",
    options: ["peptide bond", "hydrogen bond", "ionic bond", "glycosidic bond"],
    correct: 0,
    explanation: "Peptide bonds link amino acids in proteins.",
  },
{
    id: 18,
    source: "Academic",
    question: "The process by which plants make glucose using light is:",
    options: ["respiration", "fermentation", "transpiration", "photosynthesis"],
    correct: 3,
    explanation: "Photosynthesis converts light energy into chemical energy.",
  },
{
    id: 19,
    source: "Academic",
    question: "The gas released during oxygenic photosynthesis is:",
    options: ["carbon dioxide", "hydrogen", "oxygen", "nitrogen"],
    correct: 2,
    explanation: "Water splitting releases oxygen.",
  },
{
    id: 20,
    source: "Academic",
    question: "The green pigment that absorbs light is:",
    options: ["keratin", "chlorophyll", "haemoglobin", "melanin"],
    correct: 1,
    explanation: "Chlorophyll absorbs light for photosynthesis.",
  },
{
    id: 21,
    source: "Academic",
    question: "The opening and closing of stomata is controlled by:",
    options: ["guard cells", "root hairs", "xylem vessels", "phloem cells"],
    correct: 0,
    explanation: "Guard cells regulate the stomatal pore.",
  },
{
    id: 22,
    source: "Academic",
    question: "Water is transported from roots mainly through:",
    options: ["phloem", "epidermis", "cambium", "xylem"],
    correct: 3,
    explanation: "Xylem conducts water and minerals upward.",
  },
{
    id: 23,
    source: "Academic",
    question: "Sugars are transported in plants by:",
    options: ["cork", "pith", "phloem", "xylem"],
    correct: 2,
    explanation: "Phloem transports organic nutrients.",
  },
{
    id: 24,
    source: "Academic",
    question: "The loss of water vapour from aerial plant parts is:",
    options: ["pollination", "transpiration", "guttation", "respiration"],
    correct: 1,
    explanation: "Transpiration is water vapour loss, mainly through stomata.",
  },
{
    id: 25,
    source: "Academic",
    question: "The growth of a plant shoot toward light is:",
    options: ["phototropism", "geotropism", "hydrotropism", "thigmotropism"],
    correct: 0,
    explanation: "Phototropism is a directional growth response to light.",
  },
{
    id: 26,
    source: "Academic",
    question: "The plant hormone associated with cell elongation is:",
    options: ["ethylene", "abscisic acid", "cytokinin", "auxin"],
    correct: 3,
    explanation: "Auxin promotes elongation in many shoot tissues.",
  },
{
    id: 27,
    source: "Academic",
    question: "The male reproductive part of a flower is the:",
    options: ["sepal", "petal", "stamen", "pistil"],
    correct: 2,
    explanation: "A stamen consists of anther and filament.",
  },
{
    id: 28,
    source: "Academic",
    question: "The female reproductive part of a flower is the:",
    options: ["petal", "pistil", "stamen", "sepal"],
    correct: 1,
    explanation: "The pistil includes stigma, style and ovary.",
  },
{
    id: 29,
    source: "Academic",
    question: "After fertilization, the ovule usually develops into a:",
    options: ["seed", "fruit", "leaf", "root"],
    correct: 0,
    explanation: "The ovule develops into a seed.",
  },
{
    id: 30,
    source: "Academic",
    question: "After fertilization, the ovary usually develops into a:",
    options: ["seed", "pollen grain", "embryo sac", "fruit"],
    correct: 3,
    explanation: "The ovary develops into the fruit.",
  },
{
    id: 31,
    source: "Academic",
    question: "The functional unit of the kidney is the:",
    options: ["alveolus", "villus", "nephron", "neuron"],
    correct: 2,
    explanation: "Nephrons filter blood and form urine.",
  },
{
    id: 32,
    source: "Academic",
    question: "Filtration of blood in a nephron begins at the:",
    options: ["renal pelvis", "glomerulus", "collecting duct", "ureter"],
    correct: 1,
    explanation: "The glomerulus filters plasma into Bowman’s capsule.",
  },
{
    id: 33,
    source: "Academic",
    question: "Most filtered glucose is reabsorbed in the:",
    options: [
      "proximal convoluted tubule",
      "distal tubule",
      "ureter",
      "collecting duct",
    ],
    correct: 0,
    explanation: "The proximal tubule reabsorbs nearly all filtered glucose.",
  },
{
    id: 34,
    source: "Academic",
    question: "The tube carrying urine from kidney to bladder is the:",
    options: ["urethra", "nephron", "renal artery", "ureter"],
    correct: 3,
    explanation: "Ureters transport urine to the urinary bladder.",
  },
{
    id: 35,
    source: "Academic",
    question: "The tube carrying urine out of the body is the:",
    options: ["renal vein", "nephron", "urethra", "ureter"],
    correct: 2,
    explanation: "The urethra carries urine from the bladder outside.",
  },
{
    id: 36,
    source: "Academic",
    question: "The main nitrogenous waste in human urine is:",
    options: ["glucose", "urea", "ammonia", "uric acid"],
    correct: 1,
    explanation: "Humans excrete nitrogen mainly as urea.",
  },
{
    id: 37,
    source: "Academic",
    question: "The organ that produces bile is the:",
    options: ["liver", "pancreas", "stomach", "gallbladder"],
    correct: 0,
    explanation: "The liver produces bile; the gallbladder stores it.",
  },
{
    id: 38,
    source: "Academic",
    question: "Bile helps digestion by emulsifying:",
    options: ["proteins", "starch", "DNA", "fats"],
    correct: 3,
    explanation: "Bile breaks fat into small droplets.",
  },
{
    id: 39,
    source: "Academic",
    question: "The enzyme in saliva that begins starch digestion is:",
    options: ["lipase", "trypsin", "amylase", "pepsin"],
    correct: 2,
    explanation: "Salivary amylase breaks starch into smaller sugars.",
  },
{
    id: 40,
    source: "Academic",
    question: "The main site of nutrient absorption is the:",
    options: ["oesophagus", "small intestine", "stomach", "large intestine"],
    correct: 1,
    explanation: "Villi and microvilli increase absorptive surface area.",
  },
{
    id: 41,
    source: "Academic",
    question: "The large intestine mainly absorbs:",
    options: ["water and salts", "amino acids", "oxygen", "bile"],
    correct: 0,
    explanation: "The colon reabsorbs water and electrolytes.",
  },
{
    id: 42,
    source: "Academic",
    question: "The protein-digesting enzyme in the stomach is:",
    options: ["amylase", "lipase", "maltase", "pepsin"],
    correct: 3,
    explanation: "Pepsin works in acidic gastric conditions.",
  },
{
    id: 43,
    source: "Academic",
    question: "The pancreas releases digestive enzymes into the:",
    options: ["large intestine", "mouth", "small intestine", "oesophagus"],
    correct: 2,
    explanation: "Pancreatic juice enters the duodenum.",
  },
{
    id: 44,
    source: "Academic",
    question: "The tiny air sacs where gas exchange occurs are:",
    options: ["larynx", "alveoli", "bronchi", "trachea"],
    correct: 1,
    explanation: "Alveoli provide a large surface for gas exchange.",
  },
{
    id: 45,
    source: "Academic",
    question: "The muscle chiefly responsible for quiet breathing is the:",
    options: ["diaphragm", "biceps", "triceps", "deltoid"],
    correct: 0,
    explanation: "Diaphragm contraction expands the thoracic cavity.",
  },
{
    id: 46,
    source: "Academic",
    question: "The windpipe is called the:",
    options: ["oesophagus", "bronchiole", "pharynx", "trachea"],
    correct: 3,
    explanation: "The trachea conducts air to the bronchi.",
  },
{
    id: 47,
    source: "Academic",
    question: "Oxygen is carried in blood mainly by:",
    options: ["fibrin", "keratin", "haemoglobin", "insulin"],
    correct: 2,
    explanation: "Haemoglobin in red blood cells binds oxygen.",
  },
{
    id: 48,
    source: "Academic",
    question: "The blood cells chiefly involved in clotting are:",
    options: ["monocytes", "platelets", "red cells", "lymphocytes"],
    correct: 1,
    explanation: "Platelets help form a clot at damaged vessels.",
  },
{
    id: 49,
    source: "Academic",
    question: "The liquid part of blood is:",
    options: ["plasma", "serum only", "lymphocyte", "haemoglobin"],
    correct: 0,
    explanation: "Plasma transports cells, nutrients, hormones and wastes.",
  },
{
    id: 50,
    source: "Academic",
    question: "The natural pacemaker of the heart is the:",
    options: ["AV valve", "aorta", "medulla", "sinoatrial node"],
    correct: 3,
    explanation: "The SA node initiates the normal heartbeat.",
  },
{
    id: 51,
    source: "Academic",
    question: "The chamber that pumps blood to the body is the:",
    options: [
      "left atrium",
      "right ventricle",
      "left ventricle",
      "right atrium",
    ],
    correct: 2,
    explanation: "The left ventricle pumps oxygenated blood into the aorta.",
  },
{
    id: 52,
    source: "Academic",
    question: "The vessel carrying blood from heart to lungs is the:",
    options: ["vena cava", "pulmonary artery", "pulmonary vein", "aorta"],
    correct: 1,
    explanation:
      "The pulmonary artery carries deoxygenated blood to the lungs.",
  },
{
    id: 53,
    source: "Academic",
    question: "The vessel carrying blood from lungs to heart is the:",
    options: ["pulmonary vein", "pulmonary artery", "vena cava", "aorta"],
    correct: 0,
    explanation: "Pulmonary veins return oxygenated blood to the left atrium.",
  },
{
    id: 54,
    source: "Academic",
    question: "The universal red-cell donor blood group is commonly:",
    options: ["AB positive", "A positive", "B negative", "O negative"],
    correct: 3,
    explanation: "O-negative red cells lack A, B and Rh D antigens.",
  },
{
    id: 55,
    source: "Academic",
    question: "The universal red-cell recipient group is commonly:",
    options: ["A negative", "B positive", "AB positive", "O negative"],
    correct: 2,
    explanation:
      "AB-positive recipients can receive red cells of all ABO/Rh groups.",
  },
{
    id: 56,
    source: "Academic",
    question: "The hormone that lowers blood glucose is:",
    options: ["thyroxine", "insulin", "glucagon", "adrenaline"],
    correct: 1,
    explanation: "Insulin promotes glucose uptake and storage.",
  },
{
    id: 57,
    source: "Academic",
    question: "The hormone that raises blood glucose between meals is:",
    options: ["glucagon", "insulin", "melatonin", "oxytocin"],
    correct: 0,
    explanation: "Glucagon stimulates liver glucose release.",
  },
{
    id: 58,
    source: "Academic",
    question: "The thyroid gland produces:",
    options: ["insulin", "adrenaline", "oestrogen", "thyroxine"],
    correct: 3,
    explanation: "Thyroxine helps regulate metabolic rate.",
  },
{
    id: 59,
    source: "Academic",
    question: "The gland often called the master gland is the:",
    options: ["adrenal", "pineal", "pituitary", "thyroid"],
    correct: 2,
    explanation: "Pituitary hormones regulate several other endocrine glands.",
  },
{
    id: 60,
    source: "Academic",
    question: "Body temperature regulation is coordinated by the:",
    options: ["hippocampus", "hypothalamus", "cerebellum", "medulla"],
    correct: 1,
    explanation: "The hypothalamus helps maintain homeostasis.",
  },
{
    id: 61,
    source: "Academic",
    question: "Balance and coordination are chiefly controlled by the:",
    options: ["cerebellum", "cerebrum", "medulla", "thalamus"],
    correct: 0,
    explanation: "The cerebellum coordinates movement and balance.",
  },
{
    id: 62,
    source: "Academic",
    question:
      "The part of the brain controlling breathing and heartbeat is the:",
    options: ["cerebellum", "cerebrum", "hypothalamus", "medulla oblongata"],
    correct: 3,
    explanation: "The medulla contains vital autonomic control centers.",
  },
{
    id: 63,
    source: "Academic",
    question: "The basic functional cell of the nervous system is the:",
    options: ["osteocyte", "erythrocyte", "neuron", "nephron"],
    correct: 2,
    explanation: "Neurons transmit electrical and chemical signals.",
  },
{
    id: 64,
    source: "Academic",
    question: "The part of a neuron that usually receives signals is the:",
    options: ["node of Ranvier", "dendrite", "axon terminal", "myelin sheath"],
    correct: 1,
    explanation: "Dendrites receive input from other cells.",
  },
{
    id: 65,
    source: "Academic",
    question: "The insulating covering that speeds nerve impulses is:",
    options: ["myelin sheath", "synaptic cleft", "dendrite", "cell body"],
    correct: 0,
    explanation: "Myelin enables faster impulse conduction.",
  },
{
    id: 66,
    source: "Academic",
    question: "The light-sensitive layer of the eye is the:",
    options: ["cornea", "iris", "sclera", "retina"],
    correct: 3,
    explanation: "Photoreceptors in the retina detect light.",
  },
{
    id: 67,
    source: "Academic",
    question: "The colored part of the eye is the:",
    options: ["cornea", "lens", "iris", "retina"],
    correct: 2,
    explanation: "The iris adjusts pupil size.",
  },
{
    id: 68,
    source: "Academic",
    question: "The hearing receptors are located in the:",
    options: ["auditory canal", "cochlea", "pinna", "eardrum"],
    correct: 1,
    explanation:
      "Hair cells in the cochlea convert vibration to nerve signals.",
  },
{
    id: 69,
    source: "Academic",
    question:
      "The joint allowing movement in many directions at the shoulder is:",
    options: ["ball-and-socket", "hinge", "pivot", "gliding"],
    correct: 0,
    explanation: "The shoulder is a ball-and-socket joint.",
  },
{
    id: 70,
    source: "Academic",
    question: "A tendon connects:",
    options: [
      "bone to bone",
      "nerve to muscle",
      "cartilage to skin",
      "muscle to bone",
    ],
    correct: 3,
    explanation: "Tendons transmit muscle force to bones.",
  },
{
    id: 71,
    source: "Academic",
    question: "A ligament connects:",
    options: [
      "skin to muscle",
      "nerve to bone",
      "bone to bone",
      "muscle to bone",
    ],
    correct: 2,
    explanation: "Ligaments stabilize joints by joining bones.",
  },
{
    id: 72,
    source: "Academic",
    question: "The longest bone in the human body is the:",
    options: ["radius", "femur", "humerus", "tibia"],
    correct: 1,
    explanation: "The femur is the thigh bone and the longest bone.",
  },
{
    id: 73,
    source: "Academic",
    question: "The adult human skeleton typically has:",
    options: ["206 bones", "201 bones", "212 bones", "300 bones"],
    correct: 0,
    explanation: "The typical adult skeleton has 206 bones.",
  },
{
    id: 74,
    source: "Academic",
    question: "The number of pairs of ribs in humans is:",
    options: ["10", "11", "14", "12"],
    correct: 3,
    explanation: "Humans usually have twelve pairs of ribs.",
  },
{
    id: 75,
    source: "Academic",
    question: "The hereditary material in most organisms is:",
    options: ["cellulose", "lipid", "DNA", "ATP"],
    correct: 2,
    explanation: "DNA stores inherited genetic information.",
  },
{
    id: 76,
    source: "Academic",
    question: "A segment of DNA that influences a trait is a:",
    options: ["chromatid", "gene", "ribosome", "codon"],
    correct: 1,
    explanation: "A gene is a DNA sequence with a functional product.",
  },
{
    id: 77,
    source: "Academic",
    question: "The usual number of chromosomes in human body cells is:",
    options: ["46", "23", "44", "48"],
    correct: 0,
    explanation: "Human somatic cells normally contain 23 pairs.",
  },
{
    id: 78,
    source: "Academic",
    question: "Human gametes normally contain:",
    options: [
      "46 chromosomes",
      "22 chromosomes",
      "92 chromosomes",
      "23 chromosomes",
    ],
    correct: 3,
    explanation: "Meiosis produces haploid gametes.",
  },
{
    id: 79,
    source: "Academic",
    question:
      "Cell division producing two genetically similar daughter cells is:",
    options: ["fertilization", "binary fission", "mitosis", "meiosis"],
    correct: 2,
    explanation: "Mitosis supports growth and tissue repair.",
  },
{
    id: 80,
    source: "Academic",
    question: "The cell division that reduces chromosome number by half is:",
    options: ["binary fission", "meiosis", "mitosis", "budding"],
    correct: 1,
    explanation: "Meiosis produces haploid cells for sexual reproduction.",
  },
{
    id: 81,
    source: "Academic",
    question: "DNA replication is described as:",
    options: [
      "semi-conservative",
      "fully conservative",
      "dispersive only",
      "random",
    ],
    correct: 0,
    explanation: "Each new DNA molecule contains one parental strand.",
  },
{
    id: 82,
    source: "Academic",
    question: "The enzyme that unwinds DNA during replication is:",
    options: ["ligase", "amylase", "lipase", "helicase"],
    correct: 3,
    explanation: "Helicase separates the DNA strands.",
  },
{
    id: 83,
    source: "Academic",
    question: "The enzyme that joins DNA fragments is:",
    options: ["primase", "RNA polymerase", "DNA ligase", "helicase"],
    correct: 2,
    explanation: "Ligase seals breaks in the sugar-phosphate backbone.",
  },
{
    id: 84,
    source: "Academic",
    question: "The RNA that carries amino acids to ribosomes is:",
    options: ["miRNA", "tRNA", "mRNA", "rRNA"],
    correct: 1,
    explanation: "Transfer RNA delivers amino acids during translation.",
  },
{
    id: 85,
    source: "Academic",
    question: "The RNA that carries coding information from DNA is:",
    options: ["mRNA", "tRNA", "rRNA", "DNA polymerase"],
    correct: 0,
    explanation: "Messenger RNA carries the transcript to ribosomes.",
  },
{
    id: 86,
    source: "Academic",
    question: "A three-base sequence on mRNA is a:",
    options: ["gene", "anticodon", "chromosome", "codon"],
    correct: 3,
    explanation: "Each codon specifies an amino acid or stop signal.",
  },
{
    id: 87,
    source: "Academic",
    question: "The observable characteristics of an organism are its:",
    options: ["alleles", "locus", "phenotype", "genotype"],
    correct: 2,
    explanation:
      "Phenotype includes observable traits shaped by genes and environment.",
  },
{
    id: 88,
    source: "Academic",
    question: "The genetic makeup of an organism is its:",
    options: ["biome", "genotype", "phenotype", "ecotype"],
    correct: 1,
    explanation: "Genotype refers to an organism’s alleles.",
  },
{
    id: 89,
    source: "Academic",
    question: "An organism with two identical alleles is:",
    options: ["homozygous", "heterozygous", "hybrid only", "hemizygous"],
    correct: 0,
    explanation: "Homozygous means the alleles at a locus are the same.",
  },
{
    id: 90,
    source: "Academic",
    question: "An organism with two different alleles is:",
    options: ["homozygous", "haploid", "pure line", "heterozygous"],
    correct: 3,
    explanation: "Heterozygous individuals carry two different alleles.",
  },
{
    id: 91,
    source: "Academic",
    question: "The scientist associated with natural selection is:",
    options: [
      "Louis Pasteur",
      "Robert Hooke",
      "Charles Darwin",
      "Gregor Mendel",
    ],
    correct: 2,
    explanation: "Darwin explained evolution by natural selection.",
  },
{
    id: 92,
    source: "Academic",
    question: "The scientist known for pea plant inheritance experiments is:",
    options: ["Fleming", "Gregor Mendel", "Charles Darwin", "Watson"],
    correct: 1,
    explanation: "Mendel established foundational inheritance patterns.",
  },
{
    id: 93,
    source: "Academic",
    question: "The smallest unit of classification is:",
    options: ["species", "family", "order", "class"],
    correct: 0,
    explanation: "Species is the basic taxonomic unit.",
  },
{
    id: 94,
    source: "Academic",
    question: "The two-part scientific naming system is:",
    options: [
      "taxonomy key",
      "classification ladder",
      "natural selection",
      "binomial nomenclature",
    ],
    correct: 3,
    explanation: "A species name uses genus and specific epithet.",
  },
{
    id: 95,
    source: "Academic",
    question: "Organisms without a membrane-bound nucleus are:",
    options: ["fungi", "plants", "prokaryotes", "eukaryotes"],
    correct: 2,
    explanation: "Prokaryotic cells lack a membrane-bound nucleus.",
  },
{
    id: 96,
    source: "Academic",
    question: "Bacteria commonly reproduce by:",
    options: ["pollination", "binary fission", "meiosis", "mitosis"],
    correct: 1,
    explanation: "Binary fission is a common asexual process in bacteria.",
  },
{
    id: 97,
    source: "Academic",
    question: "Viruses can reproduce only inside:",
    options: [
      "living host cells",
      "soil minerals",
      "pure water",
      "dead leaves",
    ],
    correct: 0,
    explanation: "Viruses depend on host-cell machinery.",
  },
{
    id: 98,
    source: "Academic",
    question: "The bacterium used to make yoghurt is commonly:",
    options: ["Plasmodium", "Amoeba", "Rhizopus", "Lactobacillus"],
    correct: 3,
    explanation: "Lactic acid bacteria ferment milk sugars.",
  },
{
    id: 99,
    source: "Academic",
    question: "Malaria is caused by a protozoan of genus:",
    options: ["Vibrio", "Trypanosoma", "Plasmodium", "Salmonella"],
    correct: 2,
    explanation: "Plasmodium parasites cause malaria.",
  },
{
    id: 100,
    source: "Academic",
    question: "Tuberculosis is caused by:",
    options: [
      "Influenza virus",
      "Mycobacterium tuberculosis",
      "Plasmodium vivax",
      "HIV",
    ],
    correct: 1,
    explanation: "TB is a bacterial disease.",
  },
{
    id: 101,
    source: "Academic",
    question: "Antibiotics are used to treat many:",
    options: [
      "bacterial infections",
      "viral infections",
      "genetic disorders",
      "all allergies",
    ],
    correct: 0,
    explanation: "Antibiotics act against bacteria, not viruses.",
  },
{
    id: 102,
    source: "Academic",
    question: "Vaccination helps develop:",
    options: ["dehydration", "digestion", "bone growth", "specific immunity"],
    correct: 3,
    explanation: "Vaccines train immune responses to recognize pathogens.",
  },
{
    id: 103,
    source: "Academic",
    question: "Antibodies are produced by activated:",
    options: [
      "platelets",
      "neurons",
      "B lymphocytes / plasma cells",
      "red blood cells",
    ],
    correct: 2,
    explanation: "Plasma cells derived from B cells secrete antibodies.",
  },
{
    id: 104,
    source: "Academic",
    question:
      "The branch of biology studying interactions with environment is:",
    options: ["histology", "ecology", "anatomy", "genetics"],
    correct: 1,
    explanation: "Ecology studies organisms and their environment.",
  },
{
    id: 105,
    source: "Academic",
    question: "The first trophic level in most food chains is:",
    options: [
      "producers",
      "primary consumers",
      "decomposers",
      "secondary consumers",
    ],
    correct: 0,
    explanation: "Producers capture energy and form the base of food chains.",
  },
{
    id: 106,
    source: "Academic",
    question: "Energy transfer between trophic levels is generally:",
    options: ["100 percent", "always increasing", "unlimited", "inefficient"],
    correct: 3,
    explanation: "Much energy is lost as heat and through metabolism.",
  },
{
    id: 107,
    source: "Academic",
    question: "The variety of life in an area is called:",
    options: ["population density", "succession", "biodiversity", "biomass"],
    correct: 2,
    explanation: "Biodiversity describes variety among living organisms.",
  },
{
    id: 108,
    source: "Academic",
    question: "Organisms that break down dead organic matter are:",
    options: ["top predators", "decomposers", "producers", "herbivores"],
    correct: 1,
    explanation: "Decomposers recycle nutrients from organic remains.",
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

export default function Biology() {
  const [practiceQuestions, setPracticeQuestions] = useState(() =>
    shuffleQuestions(questionBank).slice(0, 10),
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const question = practiceQuestions[currentQuestion];
  const answered = selectedAnswer !== null;
  const isLastQuestion = currentQuestion === practiceQuestions.length - 1;
  const practiceFinished = isLastQuestion && answered;

  const handleAnswer = (index) => {
    if (answered) return;
    setSelectedAnswer(index);
    if (index === question.correct) setScore((previous) => previous + 1);
  };
  const handleNext = () => {
    if (!answered || isLastQuestion) return;
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
        <nav className="synonyms-breadcrumb">
          <Link to="/notes">Notes</Link><FiArrowRight />
          <Link to="/notes">Academics</Link><FiArrowRight />
          <span>Biology</span>
        </nav>
<section className="notes-section">
  <div className="section-heading">
    <span className="section-number">01</span>
    <div>
      <span className="section-label">INTRODUCTION</span>
      <h2>Biology for Initial Tests</h2>
    </div>
  </div>

  <div className="content-card">
    <p>
      Biology is the study of living organisms and their life processes.
      For initial-test preparation, focus on basic biological concepts,
      human body systems, cells, plants, genetics and the environment.
    </p>

    <p>
      Questions may cover cell structure, tissues, nutrition, respiration,
      circulation, excretion, reproduction, heredity, classification and
      ecology. Build clear concepts first, then revise important terms
      and practise MCQs.
    </p>

    <div className="info-box">
      <FiInfo />
      <div>
        <strong>Practice Strategy</strong>
        <p>
          Learn the meaning and function of each important term. Review
          diagrams and key processes, then practise short MCQs and check
          why each answer is correct.
        </p>
        <span>The goal is clear understanding, accuracy and speed.</span>
      </div>
    </div>
  </div>
</section>

{/* SECTION 02 — CORE TOPICS */}
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
          <h3>Cell Biology</h3>
          <p>
            Cell structure and functions, cell membrane, nucleus,
            mitochondria, ribosomes, plant and animal cells, and
            cell division including mitosis and meiosis.
          </p>
        </div>
      </div>

      <div className="concept-item">
        <span>02</span>
        <div>
          <h3>Human Body Systems</h3>
          <p>
            Digestive, respiratory, circulatory, nervous, skeletal,
            muscular and excretory systems; major organs and their
            basic functions.
          </p>
        </div>
      </div>

      <div className="concept-item">
        <span>03</span>
        <div>
          <h3>Plant Biology</h3>
          <p>
            Photosynthesis, transpiration, transport in xylem and
            phloem, plant tissues, roots, stems, leaves and plant
            growth responses.
          </p>
        </div>
      </div>

      <div className="concept-item">
        <span>04</span>
        <div>
          <h3>Genetics, Microbiology & Ecology</h3>
          <p>
            DNA, genes, chromosomes, inheritance, microorganisms,
            common diseases, food chains, ecosystems, biodiversity
            and conservation.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* SECTION 03 — QUICK REVISION: BIOLOGY KEY FACTS (NOT FORMULAS) */}
<section className="notes-section">
  <div className="section-heading">
    <span className="section-number">03</span>
    <div>
      <span className="section-label">QUICK REVISION</span>
      <h2>Important Biology Key Facts</h2>
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
            <th style={{ textAlign: "left", padding: "14px", borderBottom: "1px solid var(--border-color, #e2e8f0)" }}>
              Topic
            </th>
            <th style={{ textAlign: "left", padding: "14px", borderBottom: "1px solid var(--border-color, #e2e8f0)" }}>
              Key fact
            </th>
            <th style={{ textAlign: "left", padding: "14px", borderBottom: "1px solid var(--border-color, #e2e8f0)" }}>
              Quick reminder
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Cell", "Mitochondria produce most of the cell’s usable ATP.", "Often called the cell’s powerhouse."],
            ["Genetics", "DNA stores hereditary information.", "Genes are segments of DNA."],
            ["Blood", "Red blood cells carry oxygen using haemoglobin.", "Most mature human RBCs lack a nucleus."],
            ["Respiration", "Gas exchange takes place in the alveoli of the lungs.", "Alveoli have thin, moist walls."],
            ["Digestion", "Most nutrient absorption occurs in the small intestine.", "Villi increase its surface area."],
            ["Excretion", "The nephron is the functional unit of the kidney.", "It filters blood and helps form urine."],
            ["Plants", "Xylem transports water and minerals from roots.", "Phloem transports sugars and other organic nutrients."],
            ["Ecology", "Producers make organic food, usually by photosynthesis.", "They form the base of most food chains."]
          ].map(([topic, fact, reminder]) => (
            <tr key={topic}>
              <td style={{ padding: "13px 14px", borderBottom: "1px solid var(--border-color, #e2e8f0)", verticalAlign: "top", fontWeight: 600 }}>
                {topic}
              </td>
              <td style={{ padding: "13px 14px", borderBottom: "1px solid var(--border-color, #e2e8f0)", verticalAlign: "top" }}>
                {fact}
              </td>
              <td style={{ padding: "13px 14px", borderBottom: "1px solid var(--border-color, #e2e8f0)", verticalAlign: "top" }}>
                {reminder}
              </td>
            </tr>
          ))}
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
      <span className="section-label">QUESTION BANK</span>
      <h2>Biology MCQs</h2>
    </div>
  </div>

  <div className="content-card">
    <p>
      This question bank contains{" "}
      <strong>{questionBank.length} Biology MCQs</strong>. It covers
      important Biology concepts for initial-test practice.
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
              }}
            >
              Correct Answer
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
        <section className="notes-section">
          <div className="section-heading">
            <span className="section-label">PREPARATION TIPS</span>
            <h2>Biology Exam Tips</h2>
          </div>
          <div className="tips-card">
            <div className="tip"><FiTarget /><div><strong>Revise core concepts</strong><p>Review cells, human body systems, genetics, plants, ecology and microorganisms.</p></div></div>
            <div className="tip"><FiCheckCircle /><div><strong>Read every option</strong><p>Notice key terms in the question and compare all four options before selecting.</p></div></div>
            <div className="tip"><FiAward /><div><strong>Practise under time limits</strong><p>Use short mixed quizzes to build accuracy and confidence without relying on repeated facts.</p></div></div>
          </div>
        </section>

        <section className="practice-section">
          <div className="practice-header">
            <div><span className="section-label">INTERACTIVE PRACTICE</span><h2>Test Your Biology</h2><p>10 different questions are randomly selected from the Biology bank.</p></div>
            <div className="practice-progress"><strong>{currentQuestion + 1}</strong><span>/ {practiceQuestions.length}</span></div>
          </div>
          {!practiceFinished ? (
            <div className="mcq-card">
              <div className="mcq-top"><span>QUESTION {String(currentQuestion + 1).padStart(2, "0")}</span><span>Score: {score}/{currentQuestion}</span></div>
              <h3>{question.question}</h3>
              <div className="mcq-options">
                {question.options.map((option, index) => {
                  const isCorrect = index === question.correct;
                  const isSelected = index === selectedAnswer;
                  let optionClass = "";
                  if (answered && isCorrect) optionClass = "correct";
                  else if (answered && isSelected && !isCorrect) optionClass = "wrong";
                  return <button key={`${question.id}-${index}`} type="button" className={`mcq-option ${optionClass}`} onClick={() => handleAnswer(index)} disabled={answered}>
                    <span className="option-letter">{String.fromCharCode(65 + index)}</span><span className="option-text">{option}</span>
                    {answered && isCorrect && <FiCheckCircle className="answer-icon" />}
                    {answered && isSelected && !isCorrect && <FiXCircle className="answer-icon" />}
                  </button>;
                })}
              </div>
              {answered && <div className={`answer-feedback ${selectedAnswer === question.correct ? "feedback-correct" : "feedback-wrong"}`}>
                <div className="feedback-title">{selectedAnswer === question.correct ? <><FiCheckCircle />Correct Answer</> : <><FiXCircle />Incorrect Answer</>}</div>
                <p><strong>Correct answer:</strong> {question.options[question.correct]}</p>
                <div className="explanation"><strong>Explanation</strong><p>{question.explanation}</p></div>
              </div>}
              <div className="mcq-navigation">
                <button type="button" className="secondary-btn" onClick={handlePrevious} disabled={currentQuestion === 0}><FiArrowLeft />Previous</button>
                <button type="button" className="primary-btn" onClick={handleNext} disabled={!answered}>{isLastQuestion ? "Finish" : "Next Question"}<FiArrowRight /></button>
              </div>
              {isLastQuestion && answered && <div className="answer-feedback"><button type="button" className="primary-btn" onClick={restartPractice}>Practice Again <FiArrowRight /></button></div>}
            </div>
          ) : (
            <div className="practice-result"><div className="result-icon"><FiAward /></div><span className="section-label">PRACTICE COMPLETE</span><h2>Well Done!</h2><div className="result-score"><strong>{score}</strong><span>/ {practiceQuestions.length}</span></div><p>You answered {score} out of {practiceQuestions.length} questions correctly.</p><button type="button" className="primary-btn" onClick={restartPractice}>Practice Again <FiArrowRight /></button></div>
          )}
        </section>

        <section className="related-section">
          <span className="section-label">CONTINUE LEARNING</span><h2>Academic Topics</h2>
          <div className="related-links">
            <Link to="/notes/academics/mathematics">Mathematics <FiArrowRight /></Link>
            <Link to="/notes/academics/english">English <FiArrowRight /></Link>
            <Link to="/notes/academics/general-knowledge">General Knowledge <FiArrowRight /></Link>
            <Link to="/notes/academics/pakistan-affairs">Pakistan Affairs <FiArrowRight /></Link>
          </div>
        </section>
      </div>
    </main>
  );
}
