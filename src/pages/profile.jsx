import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../styles/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const {
    user,
    profile,
    loading,
    fetchProfile,
    subscription,
    isPremium,
  } = useAuth();

  const [fullName, setFullName] = useState("");
  const [targetExam, setTargetExam] = useState("");

  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // =========================================================
  // PROGRESS STATES
  // =========================================================

  const [progressLoading, setProgressLoading] = useState(true);
  const [progressError, setProgressError] = useState("");
  const [testAttempts, setTestAttempts] = useState([]);

  // =========================================================
  // DEBUG - PREMIUM STATUS
  // =========================================================

  console.log("Subscription:", subscription);
  console.log("Is Premium:", isPremium);

  // =========================================================
  // LOAD PROFILE DATA
  // =========================================================

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || "");
      setTargetExam(profile.target_exam || "");
    }
  }, [profile]);

  // =========================================================
  // REDIRECT IF NOT LOGGED IN
  // =========================================================

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", {
        replace: true,
        state: {
          from: {
            pathname: "/profile",
          },
        },
      });
    }
  }, [user, loading, navigate]);

  // =========================================================
  // LOAD USER PROGRESS
  // =========================================================

  useEffect(() => {
    if (!user) {
      setProgressLoading(false);
      return;
    }

    let cancelled = false;

    const fetchProgress = async () => {
      setProgressLoading(true);
      setProgressError("");

      try {
        const { data, error: progressFetchError } = await supabase
          .from("mock_test_attempts")
          .select(
            `
              id,
              exam,
              category,
              set_id,
              total_questions,
              attempted_questions,
              correct_answers,
              wrong_answers,
              unattempted_questions,
              score_percentage,
              time_taken_seconds,
              completed_at
            `,
          )
          .eq("user_id", user.id)
          .order("completed_at", {
            ascending: false,
          });

        if (cancelled) {
          return;
        }

        if (progressFetchError) {
          console.error("Progress loading error:", progressFetchError);

          setTestAttempts([]);
          setProgressError("Unable to load your test progress.");
          setProgressLoading(false);

          return;
        }

        setTestAttempts(data || []);
        setProgressLoading(false);
      } catch (err) {
        if (cancelled) {
          return;
        }

        console.error("Unexpected progress loading error:", err);

        setTestAttempts([]);
        setProgressError(
          "Something went wrong while loading your progress.",
        );
        setProgressLoading(false);
      }
    };

    fetchProgress();

    return () => {
      cancelled = true;
    };
  }, [user]);

  // =========================================================
  // SAVE PROFILE
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    setSaving(true);

    try {
      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          full_name: fullName.trim(),
          target_exam: targetExam || null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (updateError) {
        console.error("Profile update error:", updateError);

        setError(updateError.message);
        return;
      }

      // Refresh profile data

      if (fetchProfile) {
        await fetchProfile(user.id);
      }

      setMessage("Profile updated successfully.");
    } catch (err) {
      console.error("Profile update error:", err);

      setError("Something went wrong while updating your profile.");
    } finally {
      setSaving(false);
    }
  };

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-loading">
          <div className="profile-spinner"></div>

          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  // =========================================================
  // USER NOT AVAILABLE
  // =========================================================

  if (!user) {
    return null;
  }

  // =========================================================
  // USER DISPLAY INFORMATION
  // =========================================================

  const displayName = profile?.full_name || user.email || "User";

  const initial = displayName.charAt(0).toUpperCase();

  const createdAt = user.created_at
    ? new Date(user.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "—";

  // =========================================================
  // PROGRESS STATISTICS
  // =========================================================

  const testsAttempted = testAttempts.length;

  const questionsSolved = testAttempts.reduce(
    (total, attempt) =>
      total + Number(attempt.attempted_questions || 0),
    0,
  );

  const averageScore =
    testsAttempted > 0
      ? (
          testAttempts.reduce(
            (total, attempt) =>
              total + Number(attempt.score_percentage || 0),
            0,
          ) / testsAttempted
        ).toFixed(1)
      : "0.0";

  const bestScore =
    testsAttempted > 0
      ? Math.max(
          ...testAttempts.map((attempt) =>
            Number(attempt.score_percentage || 0),
          ),
        ).toFixed(1)
      : "0.0";

  // =========================================================
  // CATEGORY PERFORMANCE
  // =========================================================

  const categoryStats = {};

  testAttempts.forEach((attempt) => {
    const categoryKey = `${attempt.exam}-${attempt.category}`;

    if (!categoryStats[categoryKey]) {
      categoryStats[categoryKey] = {
        exam: attempt.exam,
        category: attempt.category,
        tests: 0,
        totalScore: 0,
        questions: 0,
        correct: 0,
      };
    }

    categoryStats[categoryKey].tests += 1;

    categoryStats[categoryKey].totalScore += Number(
      attempt.score_percentage || 0,
    );

    categoryStats[categoryKey].questions += Number(
      attempt.total_questions || 0,
    );

    categoryStats[categoryKey].correct += Number(
      attempt.correct_answers || 0,
    );
  });

  const categoryPerformance = Object.values(categoryStats).map((item) => ({
    ...item,

    averageScore:
      item.tests > 0
        ? (item.totalScore / item.tests).toFixed(1)
        : "0.0",
  }));

  // =========================================================
  // PROGRESS HELPERS
  // =========================================================

  const formatCategory = (category) => {
    if (!category) {
      return "—";
    }

    return category
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  };

  const formatExam = (exam) => {
    if (!exam) {
      return "—";
    }

    if (exam === "pma-lc") {
      return "PMA Long Course";
    }

    if (exam === "paf") {
      return "PAF";
    }

    return exam
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  };

  const formatTime = (seconds) => {
    if (seconds === null || seconds === undefined || seconds === "") {
      return "—";
    }

    const totalSeconds = Number(seconds);

    if (Number.isNaN(totalSeconds)) {
      return "—";
    }

    const minutes = Math.floor(totalSeconds / 60);

    const remainingSeconds = totalSeconds % 60;

    return `${minutes}m ${remainingSeconds
      .toString()
      .padStart(2, "0")}s`;
  };

  const formatDate = (date) => {
    if (!date) {
      return "—";
    }

    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // =========================================================
  // SCORE PROGRESS CHART DATA
  // =========================================================

  const scoreProgressData = [...testAttempts]
    .reverse()
    .map((attempt, index) => ({
      test: `Test ${index + 1}`,
      score: Number(attempt.score_percentage || 0),
      exam: formatExam(attempt.exam),
      category: formatCategory(attempt.category),
      set: attempt.set_id,
      date: formatDate(attempt.completed_at),
    }));

  // =========================================================
  // CUSTOM SCORE TOOLTIP
  // =========================================================

  const CustomScoreTooltip = ({ active, payload }) => {
    if (!active || !payload || !payload.length) {
      return null;
    }

    const item = payload[0].payload;

    return (
      <div className="profile-score-tooltip">
        <div className="profile-score-tooltip-title">
          {item.exam}
        </div>

        <div className="profile-score-tooltip-category">
          {item.category} • {item.set}
        </div>

        <div className="profile-score-tooltip-score">
          {Number(item.score).toFixed(1)}%
        </div>

        <div className="profile-score-tooltip-date">
          {item.date}
        </div>
      </div>
    );
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="profile-page">
      <div className="profile-container">

        {/* =================================================
            PROFILE HEADER
        ================================================= */}

        <div className="profile-header">
          <div className="profile-avatar">
            {initial}
          </div>

          <div className="profile-heading">
            <h1>My Profile</h1>

            <p>Manage your Examitics account.</p>
          </div>
        </div>

        {/* =================================================
            MESSAGES
        ================================================= */}

        {error && (
          <div className="profile-message profile-error">
            {error}
          </div>
        )}

        {message && (
          <div className="profile-message profile-success">
            {message}
          </div>
        )}

        {/* =================================================
            ACCOUNT INFORMATION
        ================================================= */}

        <div className="profile-card">
          <div className="profile-card-title">
            <h2>Account Information</h2>

            <p>
              Update your Examitics profile information.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* FULL NAME */}

            <div className="profile-form-group">
              <label htmlFor="full-name">
                Full Name
              </label>

              <input
                id="full-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                autoComplete="name"
              />
            </div>

            {/* EMAIL */}

            <div className="profile-form-group">
              <label htmlFor="profile-email">
                Email Address
              </label>

              <input
                id="profile-email"
                type="email"
                value={user.email || ""}
                disabled
              />

              <small>
                Your account email cannot be changed here.
              </small>
            </div>

            {/* TARGET EXAM */}

            <div className="profile-form-group">
              <label htmlFor="target-exam">
                Target Exam
              </label>

              <select
                id="target-exam"
                value={targetExam}
                onChange={(e) => setTargetExam(e.target.value)}
              >
                <option value="">
                  Select your target exam
                </option>

                <option value="PMA Long Course">
                  PMA Long Course
                </option>

                <option value="PAF">
                  PAF
                </option>

                <option value="ISSB">
                  ISSB
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* ACCOUNT CREATED */}

            <div className="profile-info-row">
              <span>
                Account Created
              </span>

              <strong>
                {createdAt}
              </strong>
            </div>

            {/* SAVE */}

            <button
              type="submit"
              className="profile-save-btn"
              disabled={saving}
            >
              {saving
                ? "Saving..."
                : "Save Changes"}
            </button>
          </form>
        </div>

        {/* =================================================
            YOUR PROGRESS
        ================================================= */}

        <div className="profile-card profile-progress-card">

          <div className="profile-card-title">
            <h2>Your Progress</h2>

            <p>
              Track your mock test performance and preparation progress.
            </p>
          </div>

          {/* PROGRESS LOADING */}

          {progressLoading ? (
            <div className="profile-progress-loading">

              <div className="profile-spinner"></div>

              <p>
                Loading your progress...
              </p>

            </div>
          ) : progressError ? (

            <div className="profile-message profile-error">
              {progressError}
            </div>

          ) : (

            <>

              {/* =================================================
                  STATISTICS
              ================================================= */}

              <div className="profile-progress-stats">

                <div className="profile-progress-stat">
                  <span className="profile-progress-stat-label">
                    Tests Attempted
                  </span>

                  <strong className="profile-progress-stat-value">
                    {testsAttempted}
                  </strong>
                </div>

                <div className="profile-progress-stat">
                  <span className="profile-progress-stat-label">
                    Questions Solved
                  </span>

                  <strong className="profile-progress-stat-value">
                    {questionsSolved}
                  </strong>
                </div>

                <div className="profile-progress-stat">
                  <span className="profile-progress-stat-label">
                    Average Score
                  </span>

                  <strong className="profile-progress-stat-value">
                    {averageScore}%
                  </strong>
                </div>

                <div className="profile-progress-stat">
                  <span className="profile-progress-stat-label">
                    Best Score
                  </span>

                  <strong className="profile-progress-stat-value">
                    {bestScore}%
                  </strong>
                </div>

              </div>

              {/* =================================================
                  SCORE PROGRESS
              ================================================= */}

              {scoreProgressData.length > 0 && (

                <div className="profile-progress-section">

                  <div className="profile-progress-section-heading">

                    <h3>
                      Score Progress
                    </h3>

                    <p>
                      Track how your mock test scores change over time.
                    </p>

                  </div>

                  <div className="profile-score-chart">

                    <ResponsiveContainer
                      width="100%"
                      height={320}
                    >

                      <LineChart
                        data={scoreProgressData}
                        margin={{
                          top: 10,
                          right: 20,
                          left: 0,
                          bottom: 10,
                        }}
                      >

                        <CartesianGrid
                          stroke="var(--color-border)"
                          strokeDasharray="3 3"
                          opacity={0.6}
                        />

                        <XAxis
                          dataKey="test"
                          tick={{
                            fill: "var(--color-text-muted)",
                            fontSize: 12,
                          }}
                          axisLine={{
                            stroke: "var(--color-border)",
                          }}
                          tickLine={{
                            stroke: "var(--color-border)",
                          }}
                        />

                        <YAxis
                          domain={[0, 100]}
                          tickFormatter={(value) =>
                            `${value}%`
                          }
                          tick={{
                            fill: "var(--color-text-muted)",
                            fontSize: 12,
                          }}
                          axisLine={{
                            stroke: "var(--color-border)",
                          }}
                          tickLine={{
                            stroke: "var(--color-border)",
                          }}
                        />

                        <Tooltip
                          content={
                            <CustomScoreTooltip />
                          }
                        />

                        <Line
                          type="monotone"
                          dataKey="score"
                          stroke="var(--color-primary)"
                          strokeWidth={3}
                          dot={{
                            r: 5,
                          }}
                          activeDot={{
                            r: 7,
                          }}
                        />

                      </LineChart>

                    </ResponsiveContainer>

                  </div>

                </div>
              )}

              {/* =================================================
                  PERFORMANCE BY CATEGORY
              ================================================= */}

              {categoryPerformance.length > 0 && (

                <div className="profile-progress-section">

                  <div className="profile-progress-section-heading">

                    <h3>
                      Performance by Category
                    </h3>

                  </div>

                  <div className="profile-category-list">

                    {categoryPerformance.map((item) => (

                      <div
                        className="profile-category-item"
                        key={`${item.exam}-${item.category}`}
                      >

                        <div className="profile-category-info">

                          <strong>
                            {formatCategory(item.category)}
                          </strong>

                          <span>
                            {formatExam(item.exam)}
                          </span>

                        </div>

                        <div className="profile-category-score">

                          <strong>
                            {item.averageScore}%
                          </strong>

                          <span>
                            {item.tests}{" "}
                            {item.tests === 1
                              ? "test"
                              : "tests"}
                          </span>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>
              )}

              {/* =================================================
                  RECENT TEST ATTEMPTS
              ================================================= */}

              <div className="profile-progress-section">

                <div className="profile-progress-section-heading">

                  <h3>
                    Recent Test Attempts
                  </h3>

                </div>

                {testAttempts.length === 0 ? (

                  <div className="profile-progress-empty">

                    <h4>
                      No tests completed yet
                    </h4>

                    <p>
                      Complete a mock test to start building your progress
                      history.
                    </p>

                    <button
                      type="button"
                      className="profile-back-btn"
                      onClick={() => navigate("/mock")}
                    >
                      Explore Mock Tests
                    </button>

                  </div>

                ) : (

                  <div className="profile-attempts-list">

                    {testAttempts
                      .slice(0, 10)
                      .map((attempt) => (

                        <div
                          className="profile-attempt-item"
                          key={attempt.id}
                        >

                          <div className="profile-attempt-main">

                            <strong>
                              {formatExam(attempt.exam)}
                            </strong>

                            <span>
                              {formatCategory(attempt.category)}
                              {" • "}
                              {attempt.set_id}
                            </span>

                          </div>

                          <div className="profile-attempt-result">

                            <strong>
                              {Number(
                                attempt.score_percentage || 0,
                              ).toFixed(1)}
                              %
                            </strong>

                            <span>
                              {attempt.correct_answers}/
                              {attempt.total_questions}{" "}
                              correct
                            </span>

                          </div>

                          <div className="profile-attempt-meta">

                            <span>
                              {formatTime(
                                attempt.time_taken_seconds,
                              )}
                            </span>

                            <span>
                              {formatDate(
                                attempt.completed_at,
                              )}
                            </span>

                          </div>

                        </div>

                      ))}

                  </div>
                )}

              </div>

            </>
          )}

        </div>

        {/* =================================================
            ACCOUNT
        ================================================= */}

        <div className="profile-card profile-account-card">

          <div className="profile-card-title">

            <h2>
              Account
            </h2>

            <p>
              Your Examitics account information.
            </p>

          </div>

          <button
            type="button"
            className="profile-back-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;