import React, { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiGrid,
  FiUsers,
  FiCreditCard,
  FiFileText,
  FiSettings,
  FiLogOut,
  FiShield,
} from "react-icons/fi";

import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";

import AdminUsers from "../components/admin/AdminUsers";
import AdminSubscriptions from "../components/admin/AdminSubscriptions";
import AdminMockTests from "../components/admin/AdminMockTests";

import "../styles/Admin.css";

function Admin() {
  const { user, profile, signOut } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  // Dashboard statistics
  const [dashboardStats, setDashboardStats] = useState({
    total_users: 0,
    premium_users: 0,
    active_subscriptions: 0,
    mock_questions: 0,
  });

  const [dashboardLoading, setDashboardLoading] = useState(true);
  const [dashboardError, setDashboardError] = useState("");

  // Fetch dashboard statistics
  const fetchDashboardStats = async () => {
    try {
      setDashboardLoading(true);
      setDashboardError("");

      const { data, error } = await supabase.rpc(
        "admin_get_dashboard_stats"
      );

      if (error) {
        throw error;
      }

      setDashboardStats({
        total_users: Number(data?.total_users || 0),
        premium_users: Number(data?.premium_users || 0),
        active_subscriptions: Number(
          data?.active_subscriptions || 0
        ),
        mock_questions: Number(data?.mock_questions || 0),
      });
    } catch (error) {
      console.error(
        "Error fetching dashboard statistics:",
        error
      );

      setDashboardError(
        "Unable to load dashboard statistics."
      );
    } finally {
      setDashboardLoading(false);
    }
  };

  // Load dashboard statistics when admin is available
  useEffect(() => {
    if (user && profile?.role === "admin") {
      fetchDashboardStats();
    }
  }, [user, profile?.role]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setSidebarOpen(false);

    // Refresh dashboard whenever user returns to it
    if (section === "dashboard") {
      fetchDashboardStats();
    }
  };

  const handleLogout = async () => {
    await signOut();
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <FiGrid />,
    },
    {
      id: "users",
      label: "Users",
      icon: <FiUsers />,
    },
    {
      id: "subscriptions",
      label: "Subscriptions",
      icon: <FiCreditCard />,
    },
    {
      id: "mock-tests",
      label: "Mock Tests",
      icon: <FiFileText />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <FiSettings />,
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "users":
        return <AdminUsers />;

      case "subscriptions":
        return <AdminSubscriptions />;

      case "mock-tests":
        return <AdminMockTests />;

      case "settings":
        return (
          <div className="admin-placeholder">
            <FiSettings />
            <h2>Admin Settings</h2>
            <p>
              Administrative settings will be added here.
            </p>
          </div>
        );

      default:
        return (
          <>
            {/* Dashboard error */}
            {dashboardError && (
              <div className="admin-dashboard-error">
                {dashboardError}
              </div>
            )}

            {/* Dashboard statistics */}
            <div className="admin-stats-grid">
              {/* Total Users */}
              <div className="admin-stat-card">
                <div className="admin-stat-icon">
                  <FiUsers />
                </div>

                <div>
                  <span className="admin-stat-label">
                    Total Users
                  </span>

                  <strong className="admin-stat-value">
                    {dashboardLoading
                      ? "..."
                      : dashboardStats.total_users}
                  </strong>
                </div>
              </div>

              {/* Premium Users */}
              <div className="admin-stat-card">
                <div className="admin-stat-icon">
                  <FiShield />
                </div>

                <div>
                  <span className="admin-stat-label">
                    Premium Users
                  </span>

                  <strong className="admin-stat-value">
                    {dashboardLoading
                      ? "..."
                      : dashboardStats.premium_users}
                  </strong>
                </div>
              </div>

              {/* Active Subscriptions */}
              <div className="admin-stat-card">
                <div className="admin-stat-icon">
                  <FiCreditCard />
                </div>

                <div>
                  <span className="admin-stat-label">
                    Active Subscriptions
                  </span>

                  <strong className="admin-stat-value">
                    {dashboardLoading
                      ? "..."
                      : dashboardStats.active_subscriptions}
                  </strong>
                </div>
              </div>

              {/* Mock Questions */}
              <div className="admin-stat-card">
                <div className="admin-stat-icon">
                  <FiFileText />
                </div>

                <div>
                  <span className="admin-stat-label">
                    Mock Questions
                  </span>

                  <strong className="admin-stat-value">
                    {dashboardLoading
                      ? "..."
                      : dashboardStats.mock_questions}
                  </strong>
                </div>
              </div>
            </div>

            {/* Dashboard panels */}
            <div className="admin-dashboard-grid">
              {/* Welcome panel */}
              <div className="admin-panel">
                <div className="admin-panel-header">
                  <div>
                    <h2>Welcome to Examatics Admin</h2>
                    <p>
                      Manage your platform from one place.
                    </p>
                  </div>
                </div>

                <div className="admin-welcome">
                  <div className="admin-welcome-icon">
                    <FiShield />
                  </div>

                  <div>
                    <h3>
                      Admin access is active
                    </h3>

                    <p>
                      You are signed in as{" "}
                      <strong>
                        {profile?.full_name || user?.email}
                      </strong>
                      .
                    </p>

                    <span className="admin-role-badge">
                      {profile?.role || "admin"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="admin-panel">
                <div className="admin-panel-header">
                  <div>
                    <h2>Quick Actions</h2>
                    <p>
                      Common administrative tasks.
                    </p>
                  </div>
                </div>

                <div className="admin-quick-actions">
                  <button
                    type="button"
                    onClick={() =>
                      handleSectionChange("users")
                    }
                  >
                    <FiUsers />
                    Manage Users
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleSectionChange("subscriptions")
                    }
                  >
                    <FiCreditCard />
                    Manage Subscriptions
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleSectionChange("mock-tests")
                    }
                  >
                    <FiFileText />
                    Manage Mock Tests
                  </button>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="admin-page">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="admin-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`admin-sidebar ${
          sidebarOpen ? "admin-sidebar-open" : ""
        }`}
      >
        <div className="admin-sidebar-top">

          <div className="admin-brand">
            <div className="admin-brand-icon">
              <FiShield />
            </div>

            <div>
              <strong>EXAMATICS</strong>
              <span>Admin Panel</span>
            </div>
          </div>

          <button
            type="button"
            className="admin-mobile-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close admin menu"
          >
            <FiX />
          </button>
        </div>

        <nav className="admin-nav">
          <span className="admin-nav-title">
            MANAGEMENT
          </span>

          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`admin-nav-item ${
                activeSection === item.id
                  ? "admin-nav-item-active"
                  : ""
              }`}
              onClick={() =>
                handleSectionChange(item.id)
              }
            >
              <span className="admin-nav-icon">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-user-mini">
            <div className="admin-user-avatar">
              {(profile?.full_name ||
                user?.email ||
                "A")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div className="admin-user-info">
              <strong>
                {profile?.full_name || "Admin"}
              </strong>

              <span>
                {user?.email}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="admin-logout-btn"
            onClick={handleLogout}
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </aside>

      {/* Main area */}
      <main className="admin-main">

        {/* Header */}
        <header className="admin-header">
          <div className="admin-header-left">
            <button
              type="button"
              className="admin-mobile-menu"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open admin menu"
            >
              <FiMenu />
            </button>

            <div>
              <h1>
                {activeSection === "dashboard"
                  ? "Dashboard"
                  : menuItems.find(
                      (item) =>
                        item.id === activeSection
                    )?.label}
              </h1>

              <p>
                Examatics administration
              </p>
            </div>
          </div>

          <div className="admin-header-user">
            <div className="admin-header-avatar">
              {(profile?.full_name ||
                user?.email ||
                "A")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>
              <strong>
                {profile?.full_name || "Admin"}
              </strong>

              <span>Administrator</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <section className="admin-content">
          {renderContent()}
        </section>

      </main>
    </div>
  );
}

export default Admin;