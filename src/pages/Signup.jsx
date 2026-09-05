import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Auth.css";

import AuthBubbleBackground from "../components/auth/AuthBubbleBackground";

function Signup() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Check password confirmation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Basic password length check
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    // const { data, error } = await signUp(email, password);
    const { data, error } = await signUp(email, password, fullName);

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    // Supabase may return a user without a session
    // when email confirmation is required.
    if (data?.user && !data?.session) {
      setSuccess(
        "Account created successfully. Please check your email and verify your account before logging in.",
      );
      return;
    }

    // If email confirmation is disabled,
    // the user may be logged in immediately.
    if (data?.session) {
      navigate("/");
    }
  };

  return (
    <div className="auth-page">
      {/* <AuthBubbleBackground />  */}
      <div className="auth-card">
        <div className="auth-brand">
    <div className="auth-brand-name">
      Examitics
    </div>

    <div className="auth-brand-line"></div>
  </div>
        <div className="auth-header">
          <h1>Create Your Account</h1>
          <p>Join Examitics and start your exam preparation.</p>
        </div>

        {error && <div className="auth-message auth-error">{error}</div>}

        {success && <div className="auth-message auth-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <label htmlFor="fullName">Full Name</label>

            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>

          <div className="auth-form-group">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="auth-form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>

          <div className="auth-form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
