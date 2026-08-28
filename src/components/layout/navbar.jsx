import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
     DROPDOWN STATES
     =========================================================
     Each dropdown has its own state.

     PMA LC  → pmaDropdown
     PAF     → pafDropdown
     ISSB    → issbDropdown

     Only one dropdown should be open at a time.
  ========================================================= */

  const [issbDropdown, setIssbDropdown] = useState(false);
  const [pmaDropdown, setPmaDropdown] = useState(false);
  const [pafDropdown, setPafDropdown] = useState(false);


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
     =========================================================
     This helper keeps dropdown behavior consistent.
  ========================================================= */

  const closeAllDropdowns = () => {

    setPmaDropdown(false);
    setPafDropdown(false);
    setIssbDropdown(false);

  };


  /* =========================================================
     OPEN PMA DROPDOWN
     ========================================================= */

  const openPmaDropdown = () => {

    setPmaDropdown(true);

    // Close other dropdowns
    setPafDropdown(false);
    setIssbDropdown(false);

  };


  /* =========================================================
     OPEN PAF DROPDOWN
     ========================================================= */

  const openPafDropdown = () => {

    setPafDropdown(true);

    // Close other dropdowns
    setPmaDropdown(false);
    setIssbDropdown(false);

  };


  /* =========================================================
     OPEN ISSB DROPDOWN
     ========================================================= */

  const openIssbDropdown = () => {

    setIssbDropdown(true);

    // Close other dropdowns
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


  return (

    <header className="exa-navbar">

      <div className="container-custom">

        <div className="exa-navbar-wrapper">


          {/* =================================================
              LOGO
          ================================================= */}

          <div className="exa-logo">

            <Link
              to="/"
              className="exa-logo"
              onClick={handleNavigation}
            >

              <img
                src={darkMode ? logoLight : logoDark}
                alt="Examitics Logo"
              />

            </Link>

          </div>


          {/* =================================================
              NAVIGATION LINKS
          ================================================= */}

          <nav
            className={`exa-nav-links ${
              mobileMenu ? "active" : ""
            }`}
          >


            {/* =================================================
                HOME
            ================================================= */}

            <Link
              to="/"
              onClick={handleNavigation}
            >
              Home
            </Link>


            {/* =================================================
                EXAMS
            ================================================= */}

            <Link
              to="/exams"
              onClick={handleNavigation}
            >
              Exams
            </Link>


            {/* =================================================
                PMA LONG COURSE DROPDOWN
            ================================================= */}

            <div
              className="exa-dropdown"

              /*
                Desktop:
                Open dropdown when mouse enters.

                Mobile:
                Hover events are ignored.
              */
              onMouseEnter={() => {

                if (window.innerWidth > 992) {

                  openPmaDropdown();

                }

              }}

              onMouseLeave={() => {

                if (window.innerWidth > 992) {

                  setPmaDropdown(false);

                }

              }}
            >

              {/* PMA BUTTON */}

              <button
                type="button"
                className="exa-dropdown-btn"
                onClick={togglePmaDropdown}
              >

                PMA LC

                <FiChevronDown
                  className={
                    pmaDropdown
                      ? "rotate"
                      : ""
                  }
                />

              </button>


              {/* PMA DROPDOWN MENU */}

              <div
                className={`exa-dropdown-menu ${
                  pmaDropdown ? "show" : ""
                }`}
              >

                <Link
                  to="/pma-lc-initial-procedure"
                  onClick={handleNavigation}
                >
                  PMA LC Initial Guide
                </Link>


                <Link
                  to="/mock"
                  onClick={handleNavigation}
                >
                  PMA LC Mock Test
                </Link>

              </div>

            </div>


            {/* =================================================
                PAF DROPDOWN
            ================================================= */}

            <div
              className="exa-dropdown"

              /*
                IMPORTANT BUG FIX:

                Previously this section incorrectly used:

                setPmaDropdown(true)
                setPmaDropdown(false)

                That caused the PAF dropdown to control
                the PMA dropdown.

                It now correctly uses:

                openPafDropdown()
                setPafDropdown(false)
              */

              onMouseEnter={() => {

                if (window.innerWidth > 992) {

                  openPafDropdown();

                }

              }}

              onMouseLeave={() => {

                if (window.innerWidth > 992) {

                  setPafDropdown(false);

                }

              }}
            >

              {/* PAF BUTTON */}

              <button
                type="button"
                className="exa-dropdown-btn"
                onClick={togglePafDropdown}
              >

                PAF

                <FiChevronDown
                  className={
                    pafDropdown
                      ? "rotate"
                      : ""
                  }
                />

              </button>


              {/* PAF DROPDOWN MENU */}

              <div
                className={`exa-dropdown-menu ${
                  pafDropdown ? "show" : ""
                }`}
              >

                <Link
                  to="/paf-initial-test-procedure"
                  onClick={handleNavigation}
                >
                  PAF Initial Guide
                </Link>


                <Link
                  to="/mock"
                  onClick={handleNavigation}
                >
                  PAF Mock Test
                </Link>

              </div>

            </div>


            {/* =================================================
                ISSB DROPDOWN
            ================================================= */}

            <div
              className="exa-dropdown"

              onMouseEnter={() => {

                if (window.innerWidth > 992) {

                  openIssbDropdown();

                }

              }}

              onMouseLeave={() => {

                if (window.innerWidth > 992) {

                  setIssbDropdown(false);

                }

              }}
            >

              {/* ISSB BUTTON */}

              <button
                type="button"
                className="exa-dropdown-btn"
                onClick={toggleIssbDropdown}
              >

                ISSB

                <FiChevronDown
                  className={
                    issbDropdown
                      ? "rotate"
                      : ""
                  }
                />

              </button>


              {/* ISSB DROPDOWN MENU */}

              <div
                className={`exa-dropdown-menu ${
                  issbDropdown ? "show" : ""
                }`}
              >

                <Link
                  to="/issbguide"
                  onClick={handleNavigation}
                >
                  ISSB Guide
                </Link>


                <Link
                  to="/ISSB-1"
                  onClick={handleNavigation}
                >
                  ISSB Preparation
                </Link>

              </div>

            </div>


            {/* =================================================
                KNOWLEDGE HUB
            ================================================= */}

            <Link
              to="/knowledgehub"
              onClick={handleNavigation}
            >
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

              <input
                type="text"
                placeholder="Search..."
              />

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
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >

              {darkMode
                ? <FiSun />
                : <FiMoon />
              }

            </button>


            {/* =================================================
                PROFILE AVATAR
            ================================================= */}

            <div className="exa-profile-avatar">

              <img
                src="https://i.pravatar.cc/100"
                alt="Profile"
              />

            </div>


            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              className="exa-mobile-toggle"
              onClick={() => {

                setMobileMenu(!mobileMenu);

                // Close dropdowns when mobile menu changes
                closeAllDropdowns();

              }}
              aria-label={
                mobileMenu
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >

              {mobileMenu
                ? <FiX />
                : <FiMenu />
              }

            </button>

          </div>

        </div>

      </div>

    </header>

  );

};


export default Navbar;