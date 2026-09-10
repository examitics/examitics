import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import {
//   FiBookOpen,
//   FiCpu,
//   FiGrid,
//   FiHash,
//   FiGlobe,
//   FiActivity,
//   FiFlag,
//   FiUsers,
//   FiArrowRight,
// } from "react-icons/fi";
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
  FiLock,
  FiCheck,
  FiMessageCircle,
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import "../styles/NotesHub.css";

const noteCategories = [
  {
    title: "Verbal Intelligence",
    description:
      "Build the verbal reasoning skills required for armed forces initial tests.",
    icon: FiBookOpen,
    topics: [
      "Synonyms",
      "Antonyms",
      "Analogies",
      "Coding & Decoding",
      "Vocabulary",
      "Series Completion",
      "Days & Dates",
      "Directions sense",
      "Classification",
      "Blood Relations",
      "Jumbled Words & Letters",
      "Common Sense & General Logic",
    ],
    links: [
      "/notes/verbal/synonyms",
      "/notes/verbal/antonyms",
      "/notes/verbal/analogies",
      "/notes/verbal/coding-decoding",
      "/notes/verbal/vocabulary",
      "/notes/verbal/series-completion",
      "/notes/verbal/days-dates",
      "/notes/verbal/direction-sense",
      "/notes/verbal/classification",
      "/notes/verbal/blood-relations",
      "/notes/verbal/jumbled-words-letters",
      "/notes/verbal/common-sense-general-logic",
    ],
  },

  {
    title: "Non-Verbal Intelligence",
    description:
      "Learn patterns, figures and reasoning techniques used in non-verbal tests.",
    icon: FiGrid,
    topics: [
      "Series",
      "Analogies",
      "Classification",
      "Missing Figures",
      "Patterns",
    ],
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
    description:
      "Revise mathematical concepts commonly tested in academic and initial tests.",
    icon: FiHash,
    topics: [
      "Percentages",
      "Ratio & Proportion",
      "Average",
      "Profit & Loss",
      "Speed, Time & Distance",
    ],
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
    description:
      "Strengthen grammar, vocabulary and sentence skills for English tests.",
    icon: FiBookOpen,
    topics: [
      "Parts of Speech",
      "Tenses",
      "Articles",
      "Prepositions",
      "Sentence Correction",
    ],
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
    description:
      "Review essential physics concepts for PAF and other academic tests.",
    icon: FiActivity,
    topics: [
      "Motion",
      "Force",
      "Work & Energy",
      "Electricity",
      "Waves & Optics",
    ],
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
    description:
      "Prepare important Pakistan and world general knowledge topics.",
    icon: FiGlobe,
    topics: [
      "Pakistan GK",
      "World GK",
      "Geography",
      "Organizations",
      "Capitals & Currencies",
    ],
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
    description:
      "Stay prepared with important Pakistan, international, defence and sports developments.",
    icon: FiGlobe,
    topics: [
      "Pakistan",
      "International",
      "Defence",
      "Economy",
      "Sports",
    ],
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
    description:
      "Study important events, institutions and facts about Pakistan.",
    icon: FiFlag,
    topics: [
      "Pakistan Movement",
      "Constitution",
      "History",
      "Geography",
      "National Symbols",
    ],
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
    description:
      "Understand the major psychological and GTO preparation areas for ISSB.",
    icon: FiUsers,
    topics: [
      "WAT",
      "TAT",
      "SCT",
      "OPI",
      "GTO Tasks",
    ],
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
  const { user, profile, isPremium, loading } = useAuth();
  const navigate = useNavigate();

  /*
   * Premium access:
   * - Premium users can access normally
   * - Admins can access normally
   * - Everyone else sees the premium popup
   */
  const isAdmin = profile?.role === "admin";
  const hasPremiumAccess = isPremium || isAdmin;

  const whatsappNumber = "923014709158";

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello EXAMITICS,\n\nI want to get Premium Access for the Notes Hub. Please share the available pricing plans and payment details."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="notes-hub-page">

      <Navbar />

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="notes-hub-hero">

        <div className="notes-development-badge">
          <span className="notes-development-dot"></span>
          <span>Under Development</span>
        </div>

        <div className="notes-hub-container">

          <span className="notes-hub-eyebrow">
            EXAMITICS STUDY CENTER
          </span>

          <h1>Notes Hub</h1>

          <p>
            Learn the concepts, understand the techniques, and build a
            stronger foundation before you take the test.
          </p>

        </div>
      </section>

      {/* =========================
          NOTES CONTENT
      ========================= */}
      <section className="notes-hub-content">

        <div className="notes-hub-container">

          <div className="notes-hub-section-heading">

            <div>
              <span className="notes-hub-section-label">
                EXPLORE NOTES
              </span>

              <h2>Choose a Subject</h2>
            </div>

            <p>
              {noteCategories.length} preparation categories
            </p>

          </div>

          {/* =========================
              CATEGORY CARDS
          ========================= */}
          <div className="notes-category-grid">

            {noteCategories.map((category) => {

              const Icon = category.icon;

              return (
                <article
                  className="notes-category-card"
                  key={category.title}
                >

                  {/* Card Header */}
                  <div className="notes-category-card-top">

                    <div className="notes-category-icon">
                      <Icon
                        size={22}
                        strokeWidth={2}
                      />
                    </div>

                    <span className="notes-topic-count">
                      {category.title === "Verbal Intelligence"
                        ? "Uploaded"
                        : "Coming Soon"}
                    </span>

                  </div>

                  {/* Category Title */}
                  <h3>{category.title}</h3>

                  {/* Description */}
                  <p className="notes-category-description">
                    {category.description}
                  </p>

                  {/* Topics */}
                  <ul className="notes-topic-list">

                    {category.topics.map((topic, index) => (

                      <li key={topic}>

                        <Link to={category.links[index]}>

                          <span>{topic}</span>

                          <FiArrowRight
                            size={15}
                            aria-hidden="true"
                          />

                        </Link>

                      </li>

                    ))}

                  </ul>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      <Footer />

      {/* =========================
          PREMIUM ACCESS OVERLAY
      ========================= */}
      {!loading && !hasPremiumAccess && (
        <div className="notes-premium-overlay">

          <div
            className="notes-premium-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="notes-premium-title"
          >

            {/* Lock Icon */}
            <div className="notes-premium-icon">
              <FiLock size={28} />
            </div>

            {/* Badge */}
            <span className="notes-premium-badge">
              PREMIUM CONTENT
            </span>

            {/* Heading */}
            <h2 id="notes-premium-title">
              Unlock Notes Hub
            </h2>

            <p className="notes-premium-description">
              Get complete access to EXAMITICS Notes Hub and
              prepare with structured notes, practice questions,
              explanations and interactive MCQs.
            </p>

            {/* Features */}
            <div className="notes-premium-features">

              <div className="notes-premium-feature">
                <span>
                  <FiCheck />
                </span>
                Complete Verbal Intelligence Notes
              </div>

              <div className="notes-premium-feature">
                <span>
                  <FiCheck />
                </span>
                Interactive MCQ Practice
              </div>

              <div className="notes-premium-feature">
                <span>
                  <FiCheck />
                </span>
                Detailed Explanations
              </div>

              <div className="notes-premium-feature">
                <span>
                  <FiCheck />
                </span>
                All Premium Notes Content
              </div>

            </div>

            {/* =========================
                WHATSAPP CTA
            ========================= */}
            <button
              type="button"
              className="notes-premium-whatsapp-btn"
              onClick={handleWhatsApp}
            >
              <FiMessageCircle size={19} />
              Get Premium via WhatsApp
            </button>

            {/* Pricing */}
            <button
              type="button"
              className="notes-premium-plans-btn"
              onClick={() => navigate("/premium/plans")}
            >
              See Pricing Plans
              <FiArrowRight size={17} />
            </button>

            {/* Home */}
            <button
              type="button"
              className="notes-premium-home-btn"
              onClick={() => navigate("/")}
            >
              Go to Home
            </button>

            <p className="notes-premium-contact">
              Contact EXAMITICS for premium access and
              preparation guidance.
            </p>

          </div>

        </div>
      )}

    </main>
  );
}

export default NotesHub;