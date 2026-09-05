import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute() {
  const { user, loading } = useAuth();

  const location = useLocation();

  /* =========================================================
     WAIT FOR AUTHENTICATION TO INITIALIZE
     ========================================================= */

  if (loading) {
    return (
      <div className="auth-loading">
        <div className="auth-loading-spinner"></div>

        <p>Loading...</p>
      </div>
    );
  }


  /* =========================================================
     USER NOT LOGGED IN
     ========================================================= */

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }


  /* =========================================================
     USER IS LOGGED IN
     ========================================================= */

  return <Outlet />;
}

export default ProtectedRoute;