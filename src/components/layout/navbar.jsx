import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import "../../styles/navbar.css";

import {
  FiMenu,
  FiX,
  FiBell,
  FiMoon,
  FiSun,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";

import logoDark from "../../assets/logos/examitics-logo.png";
import logoLight from "../../assets/logos/examitics-logo.png";

const Navbar = () => {
  /* =========================================================
     AUTHENTICATION
     ========================================================= */

  const { user, profile, signOut } = useAuth();

  /* =========================================================
     DROPDOWN STATES
     ========================================================= */

  const [issbDropdown, setIssbDropdown] = useState(false);
  const [pmaDropdown, setPmaDropdown] = useState(false);
  const [pafDropdown, setPafDropdown] = useState(false);
  const [dropdownCloseTimer, setDropdownCloseTimer] = useState(null);

  /* =========================================================
     MOBILE MENU STATE
     ========================================================= */

  const [mobileMenu, setMobileMenu] = useState(false);

  /* =========================================================
     DARK MODE STATE
     ========================================================= */

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  /* =========================================================
     APPLY THEME
     ========================================================= */

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");

      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");

      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* =========================================================
     CLOSE ALL DROPDOWNS
     ========================================================= */

  const closeAllDropdowns = () => {
  setPmaDropdown(false);
  setPafDropdown(false);
  setIssbDropdown(false);
};

const scheduleDropdownClose = () => {
  if (dropdownCloseTimer) {
    clearTimeout(dropdownCloseTimer);
  }

  const timer = setTimeout(() => {
    closeAllDropdowns();
  }, 200);

  setDropdownCloseTimer(timer);
};

const cancelDropdownClose = () => {
  if (dropdownCloseTimer) {
    clearTimeout(dropdownCloseTimer);
    setDropdownCloseTimer(null);
  }
};

  /* =========================================================
     OPEN PMA DROPDOWN
     ========================================================= */

  const openPmaDropdown = () => {
    setPmaDropdown(true);
    setPafDropdown(false);
    setIssbDropdown(false);
  };

  /* =========================================================
     OPEN PAF DROPDOWN
     ========================================================= */

  const openPafDropdown = () => {
    setPafDropdown(true);

    setPmaDropdown(false);
    setIssbDropdown(false);
  };

  /* =========================================================
     OPEN ISSB DROPDOWN
     ========================================================= */

  const openIssbDropdown = () => {
    setIssbDropdown(true);

    setPmaDropdown(false);
    setPafDropdown(false);
  };

  /* =========================================================
     TOGGLE PMA DROPDOWN
     ========================================================= */

  const togglePmaDropdown = () => {
    if (pmaDropdown) {
      closeAllDropdowns();
    } else {
      openPmaDropdown();
    }
  };

  /* =========================================================
     TOGGLE PAF DROPDOWN
     ========================================================= */

  const togglePafDropdown = () => {
    if (pafDropdown) {
      closeAllDropdowns();
    } else {
      openPafDropdown();
    }
  };

  /* =========================================================
     TOGGLE ISSB DROPDOWN
     ========================================================= */

  const toggleIssbDropdown = () => {
    if (issbDropdown) {
      closeAllDropdowns();
    } else {
      openIssbDropdown();
    }
  };

  /* =========================================================
     CLOSE MENU AFTER NAVIGATION
     ========================================================= */

  const handleNavigation = () => {
    closeAllDropdowns();

    setMobileMenu(false);
  };

  /* =========================================================
     LOGOUT
     ========================================================= */

  const handleLogout = async () => {
    const { error } = await signOut();

    if (error) {
      console.error("Logout error:", error);

      return;
    }

    handleNavigation();
  };

  /* =========================================================
     GET USER DISPLAY NAME
     ========================================================= */

  const userDisplayName = profile?.full_name || user?.email || "User";

  /* =========================================================
     GET USER INITIAL
     ========================================================= */

  const userInitial = userDisplayName.charAt(0).toUpperCase();

  return (
    <header className="exa-navbar">
      <div className="container-custom">
        <div className="exa-navbar-wrapper">
          {/* =================================================
              LOGO
          ================================================= */}

          <div className="exa-logo">
            <Link to="/" className="exa-logo" onClick={handleNavigation}>
              <img src={darkMode ? logoLight : logoDark} alt="Examitics Logo" />
            </Link>
          </div>

          {/* =================================================
              NAVIGATION LINKS
          ================================================= */}

          <nav className={`exa-nav-links ${mobileMenu ? "active" : ""}`}>
            {/* =================================================
                HOME
            ================================================= */}

            <Link to="/" onClick={handleNavigation}>
              Home
            </Link>

            {/* =================================================
                EXAMS
            ================================================= */}

            <Link to="/exams" onClick={handleNavigation}>
              Exams
            </Link>

            {/* =================================================
                Guides dropdown
            ================================================= */}

            <div
  className="exa-dropdown"
  onMouseEnter={() => {
    if (window.innerWidth > 992) {
      cancelDropdownClose();
      openPmaDropdown();
    }
  }}
  onMouseLeave={() => {
    if (window.innerWidth > 992) {
      scheduleDropdownClose();
    }
  }}
>
              <button
                type="button"
                className="exa-dropdown-btn"
                onClick={togglePmaDropdown}
              >
                Guides
                <FiChevronDown className={pmaDropdown ? "rotate" : ""} />
              </button>

              <div className={`exa-dropdown-menu ${pmaDropdown ? "show" : ""}`}>
                <Link to="/pma-lc-initial-procedure" onClick={handleNavigation}>
                  PMA LC Initial Guide
                </Link>

                <Link
                  to="/paf-initial-test-procedure"
                  onClick={handleNavigation}
                >
                  PAF Initial Guide
                </Link>

                <Link to="/issbguide" onClick={handleNavigation}>
                  ISSB Guide
                </Link>

                {/* <Link to="/mock" onClick={handleNavigation}>
                  PMA LC Mock Test
                </Link> */}
              </div>
            </div>

            {/* =================================================
                Practice Hub DROPDOWN
            ================================================= */}

            <div
  className="exa-dropdown"
  onMouseEnter={() => {
    if (window.innerWidth > 992) {
      cancelDropdownClose();
      openPafDropdown();
    }
  }}
  onMouseLeave={() => {
    if (window.innerWidth > 992) {
      scheduleDropdownClose();
    }
  }}
>   
              <button
                type="button"
                className="exa-dropdown-btn"
                onClick={togglePafDropdown}
              >
                Practice Hub
                <FiChevronDown className={pafDropdown ? "rotate" : ""} />
              </button>

              <div className={`exa-dropdown-menu ${pafDropdown ? "show" : ""}`}>
                <Link to="/mock" onClick={handleNavigation}>
                  Mock Tests
                </Link>

                <Link to="/ISSB-1" onClick={handleNavigation}>
                  ISSB Preparation
                </Link>
              </div>
            </div>

            {/* =================================================
                KNOWLEDGE HUB
            ================================================= */}

            <Link to="/knowledgehub" onClick={handleNavigation}>
              Knowledge Hub
            </Link>
          </nav>

          {/* =================================================
              RIGHT NAVBAR ACTIONS
          ================================================= */}

          <div className="exa-navbar-actions">
            {/* =================================================
                SEARCH
            ================================================= */}

            <div className="exa-search-box">
              <FiSearch className="search-icon" />

              <input type="text" placeholder="Search..." />
            </div>

            {/* =================================================
                NOTIFICATIONS
            ================================================= */}

            <button
              type="button"
              className="exa-icon-btn"
              aria-label="Notifications"
            >
              <FiBell />

              <span className="notification-dot"></span>
            </button>

            {/* =================================================
                DARK / LIGHT MODE
            ================================================= */}

            <button
              type="button"
              className="exa-icon-btn"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            {/* =================================================
                AUTHENTICATION
            ================================================= */}

            {user ? (
              <div className="exa-auth-user">
                {/* USER AVATAR */}
                <Link
                  to="/profile"
                  className="exa-profile-avatar-link"
                  onClick={handleNavigation}
                  title="My Profile"
                  aria-label="Open My Profile"
                >
                  <div className="exa-profile-avatar" title={userDisplayName}>
                    <div className="exa-profile-initial">{userInitial}</div>
                  </div>
                </Link>

                {/* USER NAME */}

                {/* <span
                  className="exa-user-name"
                  title={userDisplayName}
                >
                  {userDisplayName}
                </span> */}

                {/* LOGOUT */}
{profile?.role === "admin" && (
  <Link
    to="/admin"
    className="exa-admin-btn"
    onClick={handleNavigation}
  >
    Admin
  </Link>
)}
                <button
                  type="button"
                  className="exa-logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="exa-auth-buttons">
                <Link
                  to="/login"
                  className="exa-login-btn"
                  onClick={handleNavigation}
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="exa-signup-btn"
                  onClick={handleNavigation}
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              className="exa-mobile-toggle"
              onClick={() => {
                setMobileMenu(!mobileMenu);

                closeAllDropdowns();
              }}
              aria-label={
                mobileMenu ? "Close navigation menu" : "Open navigation menu"
              }
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
