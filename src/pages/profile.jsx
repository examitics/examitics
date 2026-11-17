
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiActivity,
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiEdit3,
  FiLogOut,
  FiMail,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
  FiZap,
} from "react-icons/fi";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import "../styles/Profile.css";

const EXAM_OPTIONS = [
  { value: "PMA Long Course", label: "PMA Long Course" },
  { value: "PAF", label: "Pakistan Air Force (PAF)" },
  { value: "Navy", label: "Pakistan Navy" },
  { value: "AFNS", label: "AFNS" },
  { value: "ISSB", label: "ISSB" },
  { value: "Other", label: "Other" },
];

const PAGE_SIZE = 500;

const formatExam = (exam) => {
  if (!exam) return "Other";

  const normalized = String(exam).toLowerCase();

  if (normalized === "pma-lc" || normalized === "pma") {
    return "PMA Long Course";
  }

  if (normalized === "paf") return "PAF";
  if (normalized === "navy") return "Pakistan Navy";
  if (normalized === "afns") return "AFNS";
  if (normalized === "issb") return "ISSB";

  return String(exam)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const formatCategory = (category) => {
  if (!category) return "General";

  return String(category)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const formatDate = (date, options = {}) => {
  if (!date) return "—";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return "—";

  return parsedDate.toLocaleDateString("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
    ...options,
  });
};

const formatTime = (seconds) => {
  if (seconds === null || seconds === undefined || seconds === "") {
    return "—";
  }

  const totalSeconds = Number(seconds);

  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) {
    return "—";
  }

  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = Math.floor(totalSeconds % 60);

  return `${minutes}m ${String(remainingSeconds).padStart(2, "0")}s`;
};

const formatPlan = (plan) => {
  if (!plan) return "Premium";

  return String(plan)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

function CustomScoreTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const item = payload[0].payload;

  return (
    <div className="profile-chart-tooltip">
      <strong>{item.exam}</strong>
      <span>{item.category} · {item.set}</span>
      <b>{Number(item.score).toFixed(1)}%</b>
      <small>{item.date}</small>
    </div>
  );
}

function Profile() {
  const navigate = useNavigate();

  const {
    user,
    profile,
    loading,
    fetchProfile,
    subscription,
    isPremium,
    signOut,
  } = useAuth();

  const [fullName, setFullName] = useState("");
  const [targetExam, setTargetExam] = useState("");
  const [saving, setSaving] = useState(false);
  const [profileMessage, setProfileMessage] = useState("");
  const [profileError, setProfileError] = useState("");

  const [progressLoading, setProgressLoading] = useState(true);
  const [progressError, setProgressError] = useState("");
  const [testAttempts, setTestAttempts] = useState([]);

  const [signingOut, setSigningOut] = useState(false);
  const [accountError, setAccountError] = useState("");

  // Keep the form synchronized with the latest profile data.
  useEffect(() => {
    if (!profile) return;

    setFullName(profile.full_name || "");
    setTargetExam(profile.target_exam || "");
  }, [profile]);

  // Redirect users who are not authenticated.
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

  // Fetch the user's mock-test history in pages.
  useEffect(() => {
    if (!user?.id) {
      setTestAttempts([]);
      setProgressLoading(false);
      return undefined;
    }

    let cancelled = false;

    const fetchProgress = async () => {
      setProgressLoading(true);
      setProgressError("");

      try {
        const allAttempts = [];
        let start = 0;

        while (true) {
          const { data, error: fetchError } = await supabase
            .from("mock_test_attempts")
            .select(`
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
            `)
            .eq("user_id", user.id)
            .order("completed_at", { ascending: false })
            .range(start, start + PAGE_SIZE - 1);

          if (fetchError) throw fetchError;

          const page = data || [];
          allAttempts.push(...page);

          if (page.length < PAGE_SIZE) break;

          start += PAGE_SIZE;
        }

        if (cancelled) return;

        setTestAttempts(allAttempts);
        setProgressLoading(false);
      } catch (err) {
        if (cancelled) return;

        console.error("Profile progress loading error:", err);
        setTestAttempts([]);
        setProgressError(
          "We could not load your test history. Please refresh the page and try again."
        );
        setProgressLoading(false);
      }
    };

    fetchProgress();

    return () => {
      cancelled = true;
    };
  }, [user?.id]);

  // Save profile information.
  const handleProfileSave = async (event) => {
    event.preventDefault();

    setProfileMessage("");
    setProfileError("");

    if (!fullName.trim()) {
      setProfileError("Please enter your full name.");
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

      if (updateError) throw updateError;

      if (fetchProfile) {
        await fetchProfile(user.id);
      }

      setProfileMessage("Your profile has been updated successfully.");
    } catch (err) {
      console.error("Profile update error:", err);
      setProfileError(
        err?.message || "Something went wrong while updating your profile."
      );
    } finally {
      setSaving(false);
    }
  };

  // Sign out using the existing AuthContext method.
  const handleSignOut = async () => {
    setAccountError("");
    setSigningOut(true);

    try {
      const { error: signOutError } = await signOut();

      if (signOutError) {
        throw signOutError;
      }

      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Sign-out error:", err);
      setAccountError(
        err?.message || "Unable to sign out. Please try again."
      );
      setSigningOut(false);
    }
  };

  const displayName =
    profile?.full_name?.trim() ||
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "Student";

  const initial = displayName.charAt(0).toUpperCase();

  const memberSince = formatDate(user?.created_at, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const stats = useMemo(() => {
    const totalTests = testAttempts.length;

    const questionsAttempted = testAttempts.reduce(
      (total, attempt) =>
        total + Number(attempt.attempted_questions || 0),
      0
    );

    const averageScore =
      totalTests > 0
        ? testAttempts.reduce(
            (total, attempt) =>
              total + Number(attempt.score_percentage || 0),
            0
          ) / totalTests
        : 0;

    const bestScore =
      totalTests > 0
        ? Math.max(
            ...testAttempts.map((attempt) =>
              Number(attempt.score_percentage || 0)
            )
          )
        : 0;

    const correctAnswers = testAttempts.reduce(
      (total, attempt) =>
        total + Number(attempt.correct_answers || 0),
      0
    );

    return {
      totalTests,
      questionsAttempted,
      averageScore,
      bestScore,
      correctAnswers,
    };
  }, [testAttempts]);

  const categoryPerformance = useMemo(() => {
    const groups = {};

    testAttempts.forEach((attempt) => {
      const exam = attempt.exam || "other";
      const category = attempt.category || "general";
      const key = `${exam}-${category}`;

      if (!groups[key]) {
        groups[key] = {
          key,
          exam,
          category,
          tests: 0,
          totalScore: 0,
        };
      }

      groups[key].tests += 1;
      groups[key].totalScore += Number(
        attempt.score_percentage || 0
      );
    });

    return Object.values(groups)
      .map((item) => ({
        ...item,
        averageScore:
          item.tests > 0 ? item.totalScore / item.tests : 0,
      }))
      .sort((a, b) => b.tests - a.tests);
  }, [testAttempts]);

  // Show the latest 20 attempts in chronological order on the chart.
  const scoreProgressData = useMemo(() => {
    return [...testAttempts]
      .slice(0, 20)
      .reverse()
      .map((attempt, index) => ({
        label: `#${index + 1}`,
        score: Number(attempt.score_percentage || 0),
        exam: formatExam(attempt.exam),
        category: formatCategory(attempt.category),
        set: attempt.set_id || "Test",
        date: formatDate(attempt.completed_at),
      }));
  }, [testAttempts]);

  const subscriptionExpiry =
    subscription?.plan === "lifetime"
      ? "Lifetime access"
      : formatDate(subscription?.expires_at, {
          month: "long",
          day: "numeric",
          year: "numeric",
        });

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-loading">
          <span className="profile-spinner" />
          <p>Loading your account...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <>
      <Navbar />
    <main className="profile-page">
      <div className="profile-container">

        {/* Dashboard heading */}
        <section className="profile-welcome">
          <div className="profile-welcome-copy">
            <span className="profile-eyebrow">
              EXAMITICS STUDENT PORTAL
            </span>

            <h1>
              Welcome back, {displayName.split(" ")[0]}
            </h1>

            <p>
              Your preparation progress, performance and account details
              in one place.
            </p>
          </div>

          <div className="profile-member-chip">
            <FiCalendar />
            <span>Member since {memberSince}</span>
          </div>
        </section>

        {/* Student identity card */}
        <section className="profile-identity-card">
          <div className="profile-identity-main">
            <div className="profile-avatar">
              {initial}
            </div>

            <div className="profile-identity-info">
              <div className="profile-identity-name-row">
                <h2>{displayName}</h2>

                <span
                  className={`profile-plan-badge ${
                    isPremium ? "is-premium" : "is-free"
                  }`}
                >
                  {isPremium ? (
                    <>
                      <FiAward />
                      Premium
                    </>
                  ) : (
                    <>
                      <FiUser />
                      Free Account
                    </>
                  )}
                </span>
              </div>

              <p>
                <FiMail />
                {user.email}
              </p>

              <p>
                <FiTarget />
                Target: {targetExam || "Not selected"}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="profile-edit-shortcut"
            onClick={() =>
              document
                .getElementById("profile-account-settings")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <FiEdit3 />
            Edit Profile
          </button>
        </section>

        {/* Quick statistics */}
        <section className="profile-stats-section">
          <div className="profile-section-heading">
            <div>
              <span className="profile-eyebrow">YOUR ACTIVITY</span>
              <h2>Preparation Overview</h2>
            </div>

            <span className="profile-section-note">
              {progressLoading
                ? "Updating statistics..."
                : `${stats.totalTests} completed ${
                    stats.totalTests === 1 ? "test" : "tests"
                  }`}
            </span>
          </div>

          {progressLoading ? (
            <div className="profile-stats-loading">
              <span className="profile-spinner" />
              <span>Calculating your progress...</span>
            </div>
          ) : progressError ? (
            <div className="profile-message profile-error">
              {progressError}
            </div>
          ) : (
            <div className="profile-stats-grid">
              <article className="profile-stat-card">
                <div className="profile-stat-icon">
                  <FiBookOpen />
                </div>
                <span>Tests Completed</span>
                <strong>{stats.totalTests}</strong>
                <small>Your completed mock tests</small>
              </article>

              <article className="profile-stat-card">
                <div className="profile-stat-icon">
                  <FiTarget />
                </div>
                <span>Questions Attempted</span>
                <strong>
                  {stats.questionsAttempted.toLocaleString()}
                </strong>
                <small>
                  {stats.correctAnswers.toLocaleString()} correct answers
                </small>
              </article>

              <article className="profile-stat-card">
                <div className="profile-stat-icon">
                  <FiActivity />
                </div>
                <span>Average Test Score</span>
                <strong>{stats.averageScore.toFixed(1)}%</strong>
                <small>Average across completed tests</small>
              </article>

              <article className="profile-stat-card">
                <div className="profile-stat-icon">
                  <FiAward />
                </div>
                <span>Personal Best</span>
                <strong>{stats.bestScore.toFixed(1)}%</strong>
                <small>Your highest test score</small>
              </article>
            </div>
          )}
        </section>

        {/* Premium membership */}
        <section className="profile-membership-card">
          <div className="profile-membership-top">
            <div className="profile-membership-icon">
              {isPremium ? <FiShield /> : <FiZap />}
            </div>

            <div className="profile-membership-copy">
              <span className="profile-eyebrow">
                MEMBERSHIP
              </span>

              <h2>
                {isPremium
                  ? "Your Premium Membership"
                  : "Unlock Your Full Preparation Potential"}
              </h2>

              <p>
                {isPremium
                  ? "Your Premium access is active. Continue using the premium preparation resources available on Examitics."
                  : "Upgrade to access premium mock tests, additional question sets and extended preparation resources."}
              </p>
            </div>

            <span
              className={`profile-membership-status ${
                isPremium ? "active" : "free"
              }`}
            >
              {isPremium ? "ACTIVE" : "FREE PLAN"}
            </span>
          </div>

          {isPremium ? (
            <div className="profile-membership-details">
              <div>
                <span>Current plan</span>
                <strong>{formatPlan(subscription?.plan)}</strong>
              </div>

              <div>
                <span>Access status</span>
                <strong className="profile-active-text">
                  <FiCheckCircle />
                  Active
                </strong>
              </div>

              <div>
                <span>Started</span>
                <strong>
                  {formatDate(subscription?.started_at)}
                </strong>
              </div>

              <div>
                <span>Access expiry</span>
                <strong>{subscriptionExpiry}</strong>
              </div>
            </div>
          ) : (
            <div className="profile-membership-benefits">
              <span>
                <FiCheckCircle />
                Additional premium mock tests
              </span>
              <span>
                <FiCheckCircle />
                More practice question sets
              </span>
              <span>
                <FiCheckCircle />
                Extended exam preparation resources
              </span>
            </div>
          )}

          <div className="profile-membership-footer">
            <span>
              {isPremium
                ? "Keep practising and make the most of your membership."
                : "Explore available plans and choose the access that suits your preparation."}
            </span>

            <button
              type="button"
              onClick={() => navigate("/premium/plans")}
              className="profile-membership-btn"
            >
              {isPremium ? "View Plans" : "Explore Premium Plans"}
              <FiTrendingUp />
            </button>
          </div>
        </section>

        {/* Performance analytics */}
        <section className="profile-content-card">
          <div className="profile-section-heading">
            <div>
              <span className="profile-eyebrow">PERFORMANCE</span>
              <h2>Your Progress</h2>
              <p>
                Review your test scores and identify areas that need more
                practice.
              </p>
            </div>
          </div>

          {progressLoading ? (
            <div className="profile-empty-loading">
              <span className="profile-spinner" />
              <p>Loading performance data...</p>
            </div>
          ) : progressError ? (
            <div className="profile-message profile-error">
              {progressError}
            </div>
          ) : stats.totalTests === 0 ? (
            <div className="profile-empty-state">
              <div className="profile-empty-icon">
                <FiBookOpen />
              </div>
              <h3>Your progress starts here</h3>
              <p>
                Complete your first mock test to see your scores,
                performance trends and subject-wise progress here.
              </p>
              <button
                type="button"
                className="profile-primary-btn"
                onClick={() => navigate("/mock")}
              >
                Explore Mock Tests
              </button>
            </div>
          ) : (
            <>
              {scoreProgressData.length > 1 && (
                <div className="profile-analytics-section">
                  <div className="profile-subsection-heading">
                    <div>
                      <h3>Score Trend</h3>
                      <p>
                        Your latest {scoreProgressData.length} completed
                        tests, shown in chronological order.
                      </p>
                    </div>
                  </div>

                  <div className="profile-chart">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={scoreProgressData}
                        margin={{
                          top: 12,
                          right: 16,
                          left: -12,
                          bottom: 4,
                        }}
                      >
                        <CartesianGrid
                          stroke="var(--color-border)"
                          strokeDasharray="4 4"
                          vertical={false}
                        />

                        <XAxis
                          dataKey="label"
                          tick={{
                            fill: "var(--color-text-muted)",
                            fontSize: 12,
                          }}
                          axisLine={false}
                          tickLine={false}
                        />

                        <YAxis
                          domain={[0, 100]}
                          tickFormatter={(value) => `${value}%`}
                          tick={{
                            fill: "var(--color-text-muted)",
                            fontSize: 12,
                          }}
                          axisLine={false}
                          tickLine={false}
                          width={48}
                        />

                        <Tooltip content={<CustomScoreTooltip />} />

                        <Line
                          type="monotone"
                          dataKey="score"
                          stroke="var(--color-primary)"
                          strokeWidth={3}
                          dot={{
                            r: 4,
                            fill: "var(--color-primary)",
                            strokeWidth: 0,
                          }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {categoryPerformance.length > 0 && (
                <div className="profile-analytics-section">
                  <div className="profile-subsection-heading">
                    <div>
                      <h3>Performance by Category</h3>
                      <p>
                        Your average score in each tested category.
                      </p>
                    </div>
                  </div>

                  <div className="profile-category-list">
                    {categoryPerformance.map((item) => (
                      <div
                        className="profile-category-row"
                        key={item.key}
                      >
                        <div className="profile-category-info">
                          <strong>
                            {formatCategory(item.category)}
                          </strong>
                          <span>{formatExam(item.exam)}</span>
                        </div>

                        <div className="profile-category-progress">
                          <div className="profile-progress-track">
                            <span
                              style={{
                                width: `${Math.min(
                                  100,
                                  Math.max(0, item.averageScore)
                                )}%`,
                              }}
                            />
                          </div>
                          <small>
                            {item.tests}{" "}
                            {item.tests === 1 ? "test" : "tests"}
                          </small>
                        </div>

                        <strong className="profile-category-percentage">
                          {item.averageScore.toFixed(1)}%
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent attempts */}
              <div className="profile-analytics-section">
                <div className="profile-subsection-heading profile-recent-heading">
                  <div>
                    <h3>Recent Test Attempts</h3>
                    <p>
                      Your latest completed mock tests.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="profile-text-btn"
                    onClick={() => navigate("/mock")}
                  >
                    Practice more
                    <FiTrendingUp />
                  </button>
                </div>

                <div className="profile-attempts-list">
                  {testAttempts.slice(0, 8).map((attempt) => {
                    const score = Number(
                      attempt.score_percentage || 0
                    );

                    return (
                      <article
                        className="profile-attempt-row"
                        key={attempt.id}
                      >
                        <div className="profile-attempt-icon">
                          <FiBookOpen />
                        </div>

                        <div className="profile-attempt-details">
                          <strong>{formatExam(attempt.exam)}</strong>
                          <span>
                            {formatCategory(attempt.category)}
                            {attempt.set_id
                              ? ` · ${attempt.set_id}`
                              : ""}
                          </span>
                        </div>

                        <div className="profile-attempt-score">
                          <strong>{score.toFixed(1)}%</strong>
                          <span>
                            {Number(attempt.correct_answers || 0)}/
                            {Number(attempt.total_questions || 0)} correct
                          </span>
                        </div>

                        <div className="profile-attempt-meta">
                          <span>
                            <FiClock />
                            {formatTime(attempt.time_taken_seconds)}
                          </span>
                          <small>
                            {formatDate(attempt.completed_at)}
                          </small>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </section>

        {/* Account settings */}
        <section
          className="profile-content-card profile-account-settings"
          id="profile-account-settings"
        >
          <div className="profile-section-heading">
            <div>
              <span className="profile-eyebrow">ACCOUNT MANAGEMENT</span>
              <h2>Account Settings</h2>
              <p>
                Manage your personal information and account access.
              </p>
            </div>
          </div>

          {profileError && (
            <div className="profile-message profile-error">
              {profileError}
            </div>
          )}

          {profileMessage && (
            <div className="profile-message profile-success">
              <FiCheckCircle />
              {profileMessage}
            </div>
          )}

          <form
            className="profile-settings-form"
            onSubmit={handleProfileSave}
          >
            <div className="profile-form-grid">
              <div className="profile-form-group">
                <label htmlFor="profile-full-name">
                  Full Name
                </label>
                <input
                  id="profile-full-name"
                  type="text"
                  value={fullName}
                  onChange={(event) =>
                    setFullName(event.target.value)
                  }
                  placeholder="Enter your full name"
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </div>

              <div className="profile-form-group">
                <label htmlFor="profile-target-exam">
                  Target Exam
                </label>
                <select
                  id="profile-target-exam"
                  value={targetExam}
                  onChange={(event) =>
                    setTargetExam(event.target.value)
                  }
                >
                  <option value="">Select your target exam</option>
                  {EXAM_OPTIONS.map((option) => (
                    <option
                      value={option.value}
                      key={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="profile-form-group profile-email-field">
                <label htmlFor="profile-account-email">
                  Email Address
                </label>
                <input
                  id="profile-account-email"
                  type="email"
                  value={user.email || ""}
                  disabled
                  readOnly
                />
                <small>
                  Your login email is managed by your authentication
                  account and cannot be changed here.
                </small>
              </div>

              <div className="profile-form-group profile-created-field">
                <label>Account Created</label>
                <div className="profile-readonly-field">
                  <FiCalendar />
                  {memberSince}
                </div>
              </div>
            </div>

            <div className="profile-form-actions">
              <button
                type="submit"
                className="profile-primary-btn"
                disabled={saving}
              >
                {saving ? "Saving Changes..." : "Save Profile Changes"}
              </button>
            </div>
          </form>

          <div className="profile-danger-zone">
            <div className="profile-danger-copy">
              <div className="profile-danger-icon">
                <FiLogOut />
              </div>
              <div>
                <strong>Sign out of Examitics</strong>
                <p>
                  End your current session on this device.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="profile-signout-btn"
              onClick={handleSignOut}
              disabled={signingOut}
            >
              <FiLogOut />
              {signingOut ? "Signing out..." : "Sign Out"}
            </button>
          </div>

          {accountError && (
            <div className="profile-message profile-error">
              {accountError}
            </div>
          )}
        </section>

        {/* Footer links */}
        <div className="profile-footer">
          <span>
            <FiShield />
            Your account information is protected by Examitics.
          </span>

          <button
            type="button"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>

      </div>
    </main>
    <Footer />
    </>
  );
}

export default Profile;
