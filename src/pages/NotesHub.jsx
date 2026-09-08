import React from "react";
import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiCpu,
  FiGrid,
  FiHash,
  FiGlobe,
  FiActivity,
  FiFlag,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import "../styles/NotesHub.css";

const noteCategories = [
  {
    title: "Verbal Intelligence",
    description: "Build the verbal reasoning skills needed for armed forces initial tests.",
    icon: FiBookOpen,
    topics: ["Synonyms", "Antonyms", "Analogies", "Coding & Decoding", "Vocabulary"],
    links: [
      "/notes/verbal/synonyms",
      "/notes/verbal/antonyms",
      "/notes/verbal/analogies",
      "/notes/verbal/coding-decoding",
      "/notes/verbal/vocabulary",
    ],
  },
  {
    title: "Non-Verbal Intelligence",
    description: "Learn the patterns, figures and reasoning techniques used in non-verbal tests.",
    icon: FiGrid,
    topics: ["Series", "Analogies", "Classification", "Missing Figures", "Patterns"],
    links: [
      "/notes/non-verbal/series",
      "/notes/non-verbal/analogies",
      "/notes/non-verbal/classification",
      "/notes/non-verbal/missing-figures",
      "/notes/non-verbal/patterns",
    ],
  },
  {
    title: "Mathematics",
    description: "Revise the mathematical concepts commonly tested in academic and initial tests.",
    icon: FiHash,
    topics: ["Percentages", "Ratio & Proportion", "Average", "Profit & Loss", "Speed, Time & Distance"],
    links: [
      "/notes/mathematics/percentages",
      "/notes/mathematics/ratio-proportion",
      "/notes/mathematics/average",
      "/notes/mathematics/profit-loss",
      "/notes/mathematics/speed-time-distance",
    ],
  },
  {
    title: "English",
    description: "Strengthen grammar, vocabulary and sentence skills for English tests.",
    icon: FiBookOpen,
    topics: ["Parts of Speech", "Tenses", "Articles", "Prepositions", "Sentence Correction"],
    links: [
      "/notes/english/parts-of-speech",
      "/notes/english/tenses",
      "/notes/english/articles",
      "/notes/english/prepositions",
      "/notes/english/sentence-correction",
    ],
  },
  {
    title: "Physics",
    description: "Review essential physics concepts for PAF and other academic tests.",
    icon: FiActivity,
    topics: ["Motion", "Force", "Work & Energy", "Electricity", "Waves & Optics"],
    links: [
      "/notes/physics/motion",
      "/notes/physics/force",
      "/notes/physics/work-energy",
      "/notes/physics/electricity",
      "/notes/physics/waves-optics",
    ],
  },
  {
    title: "General Knowledge",
    description: "Prepare important Pakistan and world general knowledge topics.",
    icon: FiGlobe,
    topics: ["Pakistan GK", "World GK", "Geography", "Organizations", "Capitals & Currencies"],
    links: [
      "/notes/general-knowledge/pakistan-gk",
      "/notes/general-knowledge/world-gk",
      "/notes/general-knowledge/geography",
      "/notes/general-knowledge/organizations",
      "/notes/general-knowledge/capitals-currencies",
    ],
  },
  {
    title: "Current Affairs",
    description: "Stay prepared with important Pakistan, international, defence and sports developments.",
    icon: FiGlobe,
    topics: ["Pakistan", "International", "Defence", "Economy", "Sports"],
    links: [
      "/notes/current-affairs/pakistan",
      "/notes/current-affairs/international",
      "/notes/current-affairs/defence",
      "/notes/current-affairs/economy",
      "/notes/current-affairs/sports",
    ],
  },
  {
    title: "Pakistan Affairs",
    description: "Study key events, institutions and facts about Pakistan for competitive tests.",
    icon: FiFlag,
    topics: ["Pakistan Movement", "Constitution", "History", "Geography", "National Symbols"],
    links: [
      "/notes/pakistan-affairs/pakistan-movement",
      "/notes/pakistan-affairs/constitution",
      "/notes/pakistan-affairs/history",
      "/notes/pakistan-affairs/geography",
      "/notes/pakistan-affairs/national-symbols",
    ],
  },
  {
    title: "ISSB Preparation",
    description: "Understand the major psychological and GTO preparation areas for ISSB.",
    icon: FiUsers,
    topics: ["WAT", "TAT", "SCT", "OPI", "GTO Tasks"],
    links: [
      "/notes/issb/wat",
      "/notes/issb/tat",
      "/notes/issb/sct",
      "/notes/issb/opi",
      "/notes/issb/gto-tasks",
    ],
  },
];

function NotesHub() {
  return (
    <main className="notes-hub-page">
      <section className="notes-hub-hero">
        <div className="notes-hub-container">
          <span className="notes-hub-eyebrow">EXAMITICS STUDY CENTER</span>
          <h1>Notes Hub</h1>
          <p>
            Learn the concepts, understand the techniques, and build a stronger
            foundation before you take the test.
          </p>
        </div>
      </section>

      <section className="notes-hub-content">
        <div className="notes-hub-container">
          <div className="notes-hub-section-heading">
            <div>
              <span className="notes-hub-section-label">EXPLORE NOTES</span>
              <h2>Choose a subject</h2>
            </div>
            <p>{noteCategories.length} preparation categories</p>
          </div>

          <div className="notes-category-grid">
            {noteCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article className="notes-category-card" key={category.title}>
                  <div className="notes-category-card-top">
                    <div className="notes-category-icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <span className="notes-topic-count">
                      {category.topics.length} topics
                    </span>
                  </div>

                  <h3>{category.title}</h3>
                  <p className="notes-category-description">{category.description}</p>

                  <ul className="notes-topic-list">
                    {category.topics.map((topic, index) => (
                      <li key={topic}>
                        <Link to={category.links[index]}>
                          <span>{topic}</span>
                          <FiArrowRight size={15} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="notes-card-footer">
                    <span>Study category</span>
                    <FiArrowRight size={17} aria-hidden="true" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotesHub;
