// import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Exams from "./pages/exams";
import MockTest from "./pages/mocktest";
import Result from "./pages/result";
import MOCK from "./pages/mock";
import ISSBa from "./pages/issb-1";
import OPI from "./pages/opi";
import OPIResult from "./pages/opiresult";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import PmaInitialTestProcedure from "./pages/PmaInitialTestProcedure";
import PafInitialTestProcedure from "./pages/PafInitialTestProcedure";
import ISSBGuide from "./pages/IssbGuide";
import QuickMath from "./pages/QuickMath/QuickMath";
import QuickMathSetup from "./pages/QuickMath/QuickMathSetup";
import QuickMathPractice from "./pages/QuickMath/QuickMathPractice";
import QuickMathResult from "./pages/QuickMath/QuickMathResult";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/profile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import AuthTestPage from "./pages/AuthTestPage";
import ProfileTest from "./components/auth/ProfileTest";
import Premium from "./pages/Premium";
import NotesHub from "./pages/NotesHub";


import PremiumRoute from "./components/auth/PremiumRoute";
import PremiumTest from "./pages/PremiumTest";
import PremiumPlans from "./pages/PremiumPlans";

import KnowledgeHub from "./pages/KnowledgeHub";
import NotesHub from "./pages/NotesHub";
import MotorwaysOfPakistan from "./pages/knowledge/general-knowledge/MotorwaysOfPakistan";
import NationalHighwaysOfPakistan from "./pages/knowledge/general-knowledge/NationalHighwaysOfPakistan";
import RiversOfPakistan from "./pages/knowledge/general-knowledge/RiversOfPakistan";
import DamsOfPakistan from "./pages/knowledge/general-knowledge/DamsOfPakistan";
import LakesOfPakistan from "./pages/knowledge/general-knowledge/LakesOfPakistan";
import MountainsOfPakistan from "./pages/knowledge/general-knowledge/MountainsOfPakistan";
import DesertsOfPakistan from "./pages/knowledge/general-knowledge/DesertsOfPakistan";
import NationalParksOfPakistan from "./pages/knowledge/general-knowledge/NationalParksOfPakistan";
import CountriesAndCapitals from "./pages/knowledge/general-knowledge/CountriesAndCapitals";
import WorldCurrencies from "./pages/knowledge/general-knowledge/WorldCurrencies";

import PakistanCurrentAffairs from "./pages/knowledge/current-affairs/PakistanCurrentAffairs";
import InternationalCurrentAffairs from "./pages/knowledge/current-affairs/InternationalCurrentAffairs";
import SportsCurrentAffairs from "./pages/knowledge/current-affairs/SportsCurrentAffairs";

import Synonyms from "./pages/notes/Synonyms";
import Antonyms from "./pages/notes/Antonyms";
import Analogies from "./pages/notes/Analogies";
import CodingDecoding from "./pages/notes/CodingDecoding";
import Vocabulary from "./pages/notes/Vocabulary";
import SeriesCompletion from "./pages/notes/SeriesCompletion";
import DaysDates from "./pages/notes/DaysAndDates";
import DirectionSense from "./pages/notes/DirectionSense";
import Classification from "./pages/notes/Classification";
import BloodRelations from "./pages/notes/BloodRelations";
import JumbledWordsLetters from "./pages/notes/JumbledWords";
import CommonSenseGeneralLogic from "./pages/notes/GeneralLogic";

import ScrollToTop from "./components/common/ScrollToTop";
import FloatingFeedback from "./components/common/FloatingFeedback";
import { usePageTracking } from "./analytics/usePageTracking";

import SecurityProtection from "./components/SecurityProtection";
import SecurityToast from "./components/SecurityToast";

import Admin from "./pages/Admin";
import AdminRoute from "./components/auth/AdminRoute";

import "./styles/globals.css";
import DefenceDayOfferPopup from "./components/DefenceDayOfferPopup";
// import AuthTest from "./components/AuthTest";
function App() {
  usePageTracking();

  return (
    <>
      {/* <AuthTest /> */}
      {/* <SecurityToast />  
      <SecurityProtection />  */}

      <ScrollToTop />

      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />
<Route
  path="/notes/verbal/synonyms"
  element={<Synonyms />}
/>
<Route
  path="/notes/verbal/antonyms"
  element={<Antonyms />}
/>
<Route
  path="/notes/verbal/analogies"
  element={<Analogies />}
/>
<Route
  path="/notes/verbal/coding-decoding"
  element={<CodingDecoding />}
/>
<Route
  path="/notes/verbal/vocabulary"
  element={<Vocabulary />}
/>
<Route
  path="/notes/verbal/series-completion"
  element={<SeriesCompletion />}
/> 
<Route
  path="/notes/verbal/days-dates"
  element={<DaysDates />}
/>
<Route
  path="/notes/verbal/direction-sense"
  element={<DirectionSense />}
/>
<Route
  path="/notes/verbal/classification"
  element={<Classification />}
/>
<Route
  path="/notes/verbal/blood-relations"
  element={<BloodRelations />}
/>
<Route
  path="/notes/verbal/jumbled-words-letters"
  element={<JumbledWordsLetters />}
/>
<Route
  path="/notes/verbal/common-sense-general-logic"
  element={<CommonSenseGeneralLogic />}
/>
        {/* AUTH PAGES */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />

        {/* PREMIUM PAGE */}
        <Route path="/premium" element={<Premium />} />
        <Route path="/premium/plans" element={<PremiumPlans />} />

        {/* PREMIUM TEST PAGE */}
        <Route
          path="/premium-test"
          element={
            <PremiumRoute>
              <PremiumTest />
            </PremiumRoute>
          }
        />

        {/* ADMIN PAGE */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />

        {/* PROTECTED TEST ROUTE */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile-test" element={<ProfileTest />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route
      path="/auth-test"
      element={<AuthTestPage />}
    /> */}
        </Route>

        {/* EXAMS PAGE */}
        <Route path="/exams" element={<Exams />} />

        {/* MOCK TEST PAGE */}

        {/* ==========================================
    PREMIUM PMA ACADEMIC MOCK TEST 2
========================================== */}

        <Route
          path="/mock/academic/set2"
          element={
            <PremiumRoute>
              <MockTest exam="pma-lc" category="academic" setId="set2" />
            </PremiumRoute>
          }
        />

        {/* ==========================================
    PREMIUM PMA ACADEMIC MOCK TEST 3
========================================== */}

        <Route
          path="/mock/academic/set3"
          element={
            <PremiumRoute>
              <MockTest exam="pma-lc" category="academic" setId="set3" />
            </PremiumRoute>
          }
        />

        <Route
          path="/mock/academic/set4"
          element={
            <PremiumRoute>
              <MockTest exam="pma-lc" category="academic" setId="set4" />
            </PremiumRoute>
          }
        />
        {/* ==========================================
    PREMIUM PMA VERBAL MOCK TEST 2
========================================== */}

        <Route
          path="/mock/verbal/set2"
          element={
            <PremiumRoute>
              <MockTest exam="pma-lc" category="verbal" setId="set2" />
            </PremiumRoute>
          }
        />

        {/* ==========================================
    PREMIUM PAF ENGLISH MOCK TEST 2
========================================== */}

        <Route
          path="/mock/english/set2"
          element={
            <PremiumRoute>
              <MockTest exam="paf" category="english" setId="set2" />
            </PremiumRoute>
          }
        />

        {/* ==========================================
    PREMIUM PAF ENGLISH MOCK TEST 3
========================================== */}

        <Route
          path="/mock/english/set3"
          element={
            <PremiumRoute>
              <MockTest exam="paf" category="english" setId="set3" />
            </PremiumRoute>
          }
        />

        <Route
          path="/mock/physics/set2"
          element={
            <PremiumRoute>
              <MockTest exam="paf" category="physics" setId="set2" />
            </PremiumRoute>
          }
        />

        <Route
          path="/mock/physics/set3"
          element={
            <PremiumRoute>
              <MockTest exam="paf" category="physics" setId="set3" />
            </PremiumRoute>
          }
        />

        <Route
          path="/mock/math/set2"
          element={
            <PremiumRoute>
              <MockTest exam="paf" category="math" setId="set2" />
            </PremiumRoute>
          }
        />

        <Route
          path="/mock/math/set3"
          element={
            <PremiumRoute>
              <MockTest exam="paf" category="math" setId="set3" />
            </PremiumRoute>
          }
        />

        {/* FREE MOCK TESTS */}
        <Route path="/mock/:category/:setId" element={<MockTest />} />

        {/* RESULT PAGE */}
        <Route path="/result" element={<Result />} />

        {/* MOCK PAGE */}
        <Route path="/mock" element={<MOCK />} />

        {/* NOTES HUB PAGE */}
        <Route path="/notes" element={<NotesHub />} />

        {/* ISSB-1 PAGE */}
        <Route path="/issb-1" element={<ISSBa />} />

        {/* QUICK MATH PAGE */}
        <Route path="/quick-math" element={<QuickMath />} />
        <Route path="/quick-math/setup" element={<QuickMathSetup />} />
        <Route path="/quick-math/practice" element={<QuickMathPractice />} />
        <Route path="/quick-math/result" element={<QuickMathResult />} />
        {/* OPI PAGE */}
        <Route path="/opi" element={<OPI />} />

        {/* OPI RESULT PAGE */}
        <Route path="/opi-result" element={<OPIResult />} />

        {/* PRIVACY POLICY PAGE */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* TERMS & CONDITIONS PAGE */}
        <Route path="/terms-conditions" element={<TermsConditions />} />

        {/* PmaInitialTestProcedure.jsx */}
        <Route
          path="/pma-lc-initial-procedure"
          element={<PmaInitialTestProcedure />}
        />

        {/* PAF Initial Test Procedure.jsx */}
        <Route
          path="/paf-initial-test-procedure"
          element={<PafInitialTestProcedure />}
        />

        {/* ISSB Comprehencive Guide  */}
        <Route path="/issbguide" element={<ISSBGuide />} />

        {/* =================================
        Knowledge Hub 
        ================================= */}
        <Route path="/knowledgehub" element={<KnowledgeHub />} />

        {/* =================================
        Notes Hub
        ================================= */}
        <Route path="/notes" element={<NotesHub />} />

        {/* ===============================
         general-Knowledge topics pages 
         =============================== */}
        <Route
          path="/knowledge/general-knowledge/motorways-of-pakistan"
          element={<MotorwaysOfPakistan />}
        />
        <Route
          path="/knowledge/general-knowledge/national-highways-of-pakistan"
          element={<NationalHighwaysOfPakistan />}
        />
        <Route
          path="/knowledge/general-knowledge/rivers-of-pakistan"
          element={<RiversOfPakistan />}
        />
        <Route
          path="/knowledge/general-knowledge/dams-of-pakistan"
          element={<DamsOfPakistan />}
        />
        <Route
          path="/knowledge/general-knowledge/lakes-of-pakistan"
          element={<LakesOfPakistan />}
        />
        <Route
          path="/knowledge/general-knowledge/mountains-of-pakistan"
          element={<MountainsOfPakistan />}
        />
        <Route
          path="/knowledge/general-knowledge/deserts-of-pakistan"
          element={<DesertsOfPakistan />}
        />
        <Route
          path="/knowledge/general-knowledge/national-parks-of-pakistan"
          element={<NationalParksOfPakistan />}
        />
        <Route
          path="/knowledge/general-knowledge/countries-and-capitals"
          element={<CountriesAndCapitals />}
        />
        <Route
          path="/knowledge/general-knowledge/world-currencies"
          element={<WorldCurrencies />}
        />

        {/* ===============================
         current- affairs topics pages 
         =============================== */}
        <Route
          path="/knowledge/current-affairs/pakistan-current-affairs"
          element={<PakistanCurrentAffairs />}
        />
        <Route
          path="/knowledge/current-affairs/international-current-affairs"
          element={<InternationalCurrentAffairs />}
        />
        <Route
          path="/knowledge/current-affairs/sports-current-affairs"
          element={<SportsCurrentAffairs />}
        />
        {/* Add more routes for other exams as needed */}
      </Routes>
      <FloatingFeedback />
      <DefenceDayOfferPopup />
    </>
  );
}

export default App;