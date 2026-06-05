const calculateOPIResult = (answers, questions) => {
  const categoryScores = {};
  const categoryCounts = {};

  questions.forEach((question) => {
    const selectedAnswer = answers[question.id];

    // Skip unanswered questions
    if (!selectedAnswer) return;

    let score = selectedAnswer;

    // Convert 1–7 Likert scale
    // 1 = Strongly Agree → 7 points
    // 7 = Strongly Disagree → 1 point
    score = 8 - score;

    // Reverse-scored statement
    if (question.reverse) {
      score = 8 - score;
    }

    const category = question.category;

    if (!categoryScores[category]) {
      categoryScores[category] = 0;
      categoryCounts[category] = 0;
    }

    categoryScores[category] += score;
    categoryCounts[category] += 1;
  });

  const results = {};

  Object.keys(categoryScores).forEach((category) => {
    const average =
      categoryScores[category] /
      categoryCounts[category];

    let percentage =
      ((average - 1) / 6) * 100;

    percentage = Math.max(
      0,
      Math.min(100, percentage)
    );

    results[category] =
      Math.round(percentage);
  });

  return results;
};

export default calculateOPIResult;