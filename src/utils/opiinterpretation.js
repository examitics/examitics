// =====================================
// TRAIT LEVEL
// =====================================

const getTraitLevel = (score) => {
  if (score >= 85) {
    return {
      level: "Excellent",
      color: "success",
    };
  }

  if (score >= 70) {
    return {
      level: "Good",
      color: "info",
    };
  }

  if (score >= 55) {
    return {
      level: "Average",
      color: "warning",
    };
  }

  return {
    level: "Needs Improvement",
    color: "danger",
  };
};

// =====================================
// FORMAT TRAIT NAME
// =====================================

const formatTraitName = (trait) => {
  return trait
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

// =====================================
// TOP STRENGTHS
// =====================================

const getTopTraits = (results) => {
  return Object.entries(results)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
};

// =====================================
// WEAK TRAITS
// =====================================

const getWeakTraits = (results) => {
  return Object.entries(results)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 3);
};

// =====================================
// OVERALL FEEDBACK
// =====================================

const getOverallFeedback = (
  strengths,
  weaknesses
) => {
  const strongTraits = strengths
    .map(([trait]) => formatTraitName(trait))
    .join(", ");

  const weakTraits = weaknesses
    .map(([trait]) => formatTraitName(trait))
    .join(", ");

  return `
Your responses suggest stronger tendencies in ${strongTraits}. These areas reflect positive officer-like qualities and personal strengths.

Further growth in ${weakTraits} may help develop a more balanced personality profile and improve overall leadership potential.

This report is intended for self-awareness and practice purposes only and should not be considered an official ISSB assessment.
`;
};

// =====================================
// EXPORTS
// =====================================

export {
  getTraitLevel,
  formatTraitName,
  getTopTraits,
  getWeakTraits,
  getOverallFeedback,
};