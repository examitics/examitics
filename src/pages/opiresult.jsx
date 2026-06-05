import React, { useMemo, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import calculateOPIResult from "../utils/opiscoring";

import {
  getTraitLevel,
  getOverallFeedback,
  getTopTraits,
  getWeakTraits,
} from "../utils/opiinterpretation";

import "../styles/opi-result.css";

const OPIResult = () => {
  const location = useLocation();

  const answers = location.state?.answers || {};
  const questions = location.state?.questions || [];

  // =========================================
  // NO DATA FOUND
  // =========================================

  if (!location.state || Object.keys(answers).length === 0) {
    return (
      <div className="opi-result-page">
        <div className="opi-result-card">
          <h1>No Result Data Found</h1>

          <p>Please complete the OPI Test first.</p>

          <Link to="/opi" className="opi-back-btn">
            Go To OPI Test
          </Link>
        </div>
      </div>
    );
  }

  // =========================================
  // RESULT CALCULATION
  // =========================================

  const results = useMemo(() => {
    return calculateOPIResult(answers, questions);
  }, [answers, questions]);

  // =========================================
  // HELPER FUNCTIONS
  // =========================================

  const getGrade = (score) => {
    if (score >= 85) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 55) return "Average";

    return "Needs Improvement";
  };

  const formatTrait = (trait) => {
    return trait
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // =========================================
  // SORTED TRAITS
  // =========================================

  const sortedTraits = [...Object.entries(results)].sort(
    (a, b) => b[1] - a[1]
  );

  // =========================================
  // STRENGTHS & WEAKNESSES
  // =========================================

  const strengths = getTopTraits(results);

  const weaknesses = getWeakTraits(results).filter(
    ([trait]) =>
      !strengths.some(
        ([strongTrait]) => strongTrait === trait
      )
  );

  // =========================================
  // OVERALL SCORE
  // =========================================

  const resultValues = Object.values(results);

  const overallScore =
    resultValues.length > 0
      ? Math.round(
          resultValues.reduce((a, b) => a + b, 0) /
            resultValues.length
        )
      : 0;

  // =========================================
  // COMPLETION RATE
  // =========================================

  const answeredQuestions =
    Object.keys(answers).length;

  const completionRate =
    questions.length > 0
      ? Math.round(
          (answeredQuestions /
            questions.length) *
            100
        )
      : 0;

  // =========================================
  // REPORT DATE
  // =========================================

  const completedAt =
    new Date().toLocaleString();

  // =========================================
  // SAVE HISTORY
  // =========================================

  useEffect(() => {
    const history =
      JSON.parse(
        localStorage.getItem("opi-history")
      ) || [];

    const report = {
      date: new Date().toISOString(),
      overallScore,
      strengths,
      weaknesses,
      completionRate,
    };

    history.unshift(report);

    localStorage.setItem(
      "opi-history",
      JSON.stringify(history)
    );
  }, [
    overallScore,
    strengths,
    weaknesses,
    completionRate,
  ]);

  // =========================================
  // UI
  // =========================================

  return (
    <div className="opi-result-page">
      <div className="opi-result-card">

        {/* TITLE */}

        <h1>
          Officer Potential Practice Report
        </h1>

        <p className="report-date">
          Generated: {completedAt}
        </p>

        {/* OVERALL SCORE */}

        <div className="overall-score">
          {overallScore}%
        </div>

        <div className="assessment-grade">
          {getGrade(overallScore)}
        </div>

        {/* COMPLETION */}

        <div className="completion-box">
          <strong>Completion Rate:</strong>{" "}
          {completionRate}%
          <br />
          {answeredQuestions} of{" "}
          {questions.length} questions
          answered
        </div>

        {/* SUMMARY */}

        <div className="opi-feedback-card">
          <h3>Assessment Summary</h3>

          <p>
            {getOverallFeedback(
              strengths,
              weaknesses
            )}
          </p>
        </div>

        {/* TRAITS */}

        <h2>Trait Analysis</h2>

        {sortedTraits.map(
          ([trait, score]) => (
            <div
              className="trait-card"
              key={trait}
            >
              <div className="trait-header">
                <span>
                  {formatTrait(trait)}
                </span>

                <div className="trait-score-group">
                  <strong>{score}%</strong>

                  <span
                    className={`trait-level ${
                      getTraitLevel(score).color
                    }`}
                  >
                    {
                      getTraitLevel(score)
                        .level
                    }
                  </span>
                </div>
              </div>

              <div className="trait-progress">
                <div
                  className="trait-fill"
                  style={{
                    width: `${score}%`,
                  }}
                />
              </div>
            </div>
          )
        )}

        {/* STRENGTHS */}

        <div className="report-section">
          <h3>Top Strengths</h3>

          {strengths.map(
            ([trait, score]) => (
              <div
                key={trait}
                className="report-item strength"
              >
                <span>
                  {formatTrait(trait)}
                </span>

                <strong>
                  {score}%
                </strong>
              </div>
            )
          )}
        </div>

        {/* IMPROVEMENT */}

        <div className="report-section">
          <h3>
            Areas For Improvement
          </h3>

          {weaknesses.length > 0 ? (
            weaknesses.map(
              ([trait, score]) => (
                <div
                  key={trait}
                  className="report-item weakness"
                >
                  <span>
                    {formatTrait(trait)}
                  </span>

                  <strong>
                    {score}%
                  </strong>
                </div>
              )
            )
          ) : (
            <div className="report-item weakness">
              <span>
                No significant weak areas
                detected.
              </span>
            </div>
          )}
        </div>

        {/* DISCLAIMER */}

        <div className="opi-disclaimer">
          This report is generated for
          practice and self-assessment
          purposes only. Official ISSB
          assessment procedures may
          differ and should not be
          predicted from this mock test.
        </div>

        {/* ACTIONS */}

        <div className="result-actions">
          <Link
            to="/opi"
            className="opi-back-btn"
          >
            Retake Test
          </Link>
        </div>

      </div>
    </div>
  );
};

export default OPIResult;