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
import ISSBGuide from "./pages/IssbGuide";
import QuickMath from "./pages/QuickMath/QuickMath";
import QuickMathSetup from "./pages/QuickMath/QuickMathSetup";
import QuickMathPractice from "./pages/QuickMath/QuickMathPractice";
import QuickMathResult from "./pages/QuickMath/QuickMathResult";


import KnowledgeHub from "./pages/KnowledgeHub";
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





import ScrollToTop from "./components/common/ScrollToTop";
import FloatingFeedback from "./components/common/FloatingFeedback";
import { usePageTracking } from "./analytics/usePageTracking";

import SecurityProtection from "./components/SecurityProtection";
import SecurityToast from "./components/SecurityToast";

import "./styles/globals.css";

function App() {
  usePageTracking();

  return (
    <>
      <SecurityToast /> 
      <SecurityProtection />

      <ScrollToTop />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* EXAMS PAGE */}
        <Route path="/exams" element={<Exams />} />

         {/* MOCK TEST PAGE */}
        <Route path="/mock/:category/:setId" element={<MockTest />} />

        {/* RESULT PAGE */}
        <Route path="/result" element={<Result />} />

        {/* MOCK PAGE */}
        <Route path="/mock" element={<MOCK />} />

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

        {/* ISSB Comprehencive Guide  */}
        <Route path="/issbguide" element={<ISSBGuide />} />

        {/* =================================
        Knowledge Hub 
        ================================= */}
        <Route path="/knowledgehub" element={<KnowledgeHub />} />
       
         {/* ===============================
         general-Knowledge topics pages 
         =============================== */}
        <Route path="/knowledge/general-knowledge/motorways-of-pakistan" element={<MotorwaysOfPakistan />} />
        <Route path="/knowledge/general-knowledge/national-highways-of-pakistan" element={<NationalHighwaysOfPakistan />} />
        <Route path="/knowledge/general-knowledge/rivers-of-pakistan" element={<RiversOfPakistan />} />
        <Route path="/knowledge/general-knowledge/dams-of-pakistan" element={<DamsOfPakistan />} />
        <Route path="/knowledge/general-knowledge/lakes-of-pakistan" element={<LakesOfPakistan />} />
        <Route path="/knowledge/general-knowledge/mountains-of-pakistan" element={<MountainsOfPakistan />} />
        <Route path="/knowledge/general-knowledge/deserts-of-pakistan" element={<DesertsOfPakistan />} />
        <Route path="/knowledge/general-knowledge/national-parks-of-pakistan" element={<NationalParksOfPakistan />} />
        <Route path="/knowledge/general-knowledge/countries-and-capitals" element={<CountriesAndCapitals />} />
        <Route path="/knowledge/general-knowledge/world-currencies" element={<WorldCurrencies />} />
        
       {/* Add more routes for other exams as needed */}
      </Routes>
      <FloatingFeedback />
    </>
  );
}

export default App;
