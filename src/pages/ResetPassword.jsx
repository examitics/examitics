import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "../styles/Auth.css";

function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error || !data?.session) {
        setError(
          "This password reset link is invalid or has expired."
        );
      }

      setCheckingSession(false);
    };

    checkSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(
      "Your password has been updated successfully."
    );

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  if (checkingSession) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Checking Reset Link</h1>
            <p>Please wait...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <h1>Reset Password</h1>

          <p>
            Create a new password for your Examitics
            account.
          </p>
        </div>

        {error && (
          <div className="auth-message auth-error">
            {error}
          </div>
        )}

        {success && (
          <div className="auth-message auth-success">
            {success}
          </div>
        )}

        {!success && !error && (
          <form onSubmit={handleSubmit}>

            {/* <div className="auth-form-group">
              <label htmlFor="new-password">
                New Password
              </label>

              <input
                id="new-password"
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
                autoComplete="new-password"
              />
            </div> */}
            <div className="auth-form-group">
  <label htmlFor="new-password">
    New Password
  </label>

  <div className="password-input-wrapper">
    <input
      id="new-password"
      type={showPassword ? "text" : "password"}
      placeholder="Enter new password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      autoComplete="new-password"
    />

    <button
      type="button"
      className="password-toggle-btn"
      onClick={() => setShowPassword((prev) => !prev)}
      aria-label={
        showPassword ? "Hide password" : "Show password"
      }
    >
      {showPassword ? <FiEyeOff /> : <FiEye />}
    </button>
  </div>
</div>
<p className="password-hint">
  Use 8+ characters with uppercase, lowercase, a number, and a symbol.
</p>
            {/* <div className="auth-form-group">
              <label htmlFor="confirm-new-password">
                Confirm New Password
              </label>

              <input
                id="confirm-new-password"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                required
                autoComplete="new-password"
              />
            </div> */}
            <div className="auth-form-group">
  <label htmlFor="confirm-new-password">
    Confirm New Password
  </label>

  <div className="password-input-wrapper">
    <input
      id="confirm-new-password"
      type={showConfirmPassword ? "text" : "password"}
      placeholder="Confirm new password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
      autoComplete="new-password"
    />

    <button
      type="button"
      className="password-toggle-btn"
      onClick={() =>
        setShowConfirmPassword((prev) => !prev)
      }
      aria-label={
        showConfirmPassword
          ? "Hide password"
          : "Show password"
      }
    >
      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
    </button>
  </div>
</div>

            <button
              type="submit"
              className="auth-submit-btn"
              disabled={loading}
            >
              {loading
                ? "Updating Password..."
                : "Update Password"}
            </button>

          </form>
        )}

        {error && (
          <div className="auth-footer">
            <p>
              <Link to="/forgot-password">
                Request a new reset link
              </Link>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default ResetPassword;