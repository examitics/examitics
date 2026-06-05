import React, { useState } from "react";

import "../../styles/sidebar.css";

import {
  FiGrid,
  FiFileText,
  FiBarChart2,
  FiAward,
  FiUser,
  FiSettings,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import iconLight from "../../assets/logos/examitics-logo.png";
import iconDark from "../../assets/logos/examitics-logo.png";

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);

  const darkMode = document.body.classList.contains("dark-theme");

  return (

    <aside className={`exa-sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* ================= TOP ================= */}

      <div className="exa-sidebar-top">

        <div className="exa-sidebar-logo">

          <img
            src={darkMode ? iconLight : iconDark}
            alt="Examatics"
          />

          {!collapsed && (
            <span>EXAMATICS</span>
          )}

        </div>

        <button
          className="exa-sidebar-toggle"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>

      </div>

      {/* ================= MENU ================= */}

      <nav className="exa-sidebar-menu">

        <a href="/" className="active">

          <FiGrid />

          {!collapsed && <span>Dashboard</span>}

        </a>

        <a href="/">

          <FiFileText />

          {!collapsed && <span>Exams</span>}

        </a>

        <a href="/">

          <FiAward />

          {!collapsed && <span>Results</span>}

        </a>

        <a href="/">

          <FiBarChart2 />

          {!collapsed && <span>Analytics</span>}

        </a>

        <a href="/">

          <FiUser />

          {!collapsed && <span>Profile</span>}

        </a>

        <a href="/">

          <FiSettings />

          {!collapsed && <span>Settings</span>}

        </a>

      </nav>

      {/* ================= BOTTOM ================= */}

      <div className="exa-sidebar-bottom">

        <button className="exa-logout-btn">

          <FiLogOut />

          {!collapsed && <span>Logout</span>}

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;