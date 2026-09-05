import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function PremiumRoute({ children }) {
  const {
    user,
    isPremium,
    loading,
  } = useAuth();

  const location = useLocation();

  // Still checking authentication/subscription
  if (loading) {
    return (
      <div className="auth-loading">
        Checking your premium access...
      </div>
    );
  }

  // User is not logged in
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  // User is logged in but does not have premium access
  if (!isPremium) {
    return (
      <Navigate
        to="/premium"
        replace
        state={{ from: location }}
      />
    );
  }

  // Premium user
  return children;
}

export default PremiumRoute;