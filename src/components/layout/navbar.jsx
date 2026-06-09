import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar.css";

import { FiMenu, FiX, FiBell, FiMoon, FiSun, FiSearch } from "react-icons/fi";

import logoDark from "../../assets/logos/examitics-logo.png";
import logoLight from "../../assets/logos/examitics-logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="exa-navbar">
      <div className="container-custom">
        <div className="exa-navbar-wrapper">
          {/* ================= LOGO ================= */}

          <div className="exa-logo">
            <Link to="/" className="exa-logo">
              <img src={darkMode ? logoLight : logoDark} alt="Examitics Logo" />
            </Link>
          </div>

          {/* ================= NAV LINKS ================= */}

          <nav className={`exa-nav-links ${mobileMenu ? "active" : ""}`}>
            <Link to="/">Dashboard</Link>

            <Link to="/exams">Exams</Link>

            <Link to="/mock">Mock</Link>

            <Link to="/ISSB-1">ISSB</Link>

          </nav>

          {/* ================= RIGHT ACTIONS ================= */}

          <div className="exa-navbar-actions">
            {/* Search */}

            <div className="exa-search-box">
              <FiSearch className="search-icon" />

              <input type="text" placeholder="Search..." />
            </div>

            {/* Notifications */}

            <button className="exa-icon-btn">
              <FiBell />

              <span className="notification-dot"></span>
            </button>

            {/* Theme Toggle */}

            <button
              className="exa-icon-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            {/* Profile */}

            <div className="exa-profile-avatar">
              <img src="https://i.pravatar.cc/100" alt="Profile" />
            </div>

            {/* Mobile Toggle */}

            <button
              className="exa-mobile-toggle"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
