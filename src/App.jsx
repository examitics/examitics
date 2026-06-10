// import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Exams from "./pages/exams";
import PMALC from "./pages/PMA-LC";
import MockTest from "./pages/mocktest";
import Result from "./pages/result";
import MOCK from "./pages/mock";
import ISSBa from "./pages/issb-1";
import OPI from "./pages/opi";
import OPIResult from "./pages/opiresult";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

import ScrollToTop from "./components/common/ScrollToTop";
import FloatingFeedback from "./components/common/FloatingFeedback";

import "./styles/globals.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* EXAMS PAGE */}
        <Route path="/exams" element={<Exams />} />

        {/* PMA LC PAGE */}
        <Route path="/PMA-LC" element={<PMALC />} />

        {/* MOCK TEST PAGE */}
        <Route path="/mock/:category/:setId" element={<MockTest />} />

        {/* RESULT PAGE */}
        <Route path="/result" element={<Result />} />

        {/* MOCK PAGE */}
        <Route path="/mock" element={<MOCK />} />

        {/* ISSB-1 PAGE */}
        <Route path="/issb-1" element={<ISSBa />} />

        {/* OPI PAGE */}
        <Route path="/opi" element={<OPI />} />

        {/* OPI RESULT PAGE */}
        <Route path="/opi-result" element={<OPIResult />} />

        {/* PRIVACY POLICY PAGE */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* TERMS & CONDITIONS PAGE */}
        <Route path="/terms-conditions" element={<TermsConditions />} />

        {/*floating feedback button */}
        {/* <FloatingFeedback /> */}
        {/* Add more routes for other exams as needed */}
      </Routes>
      <FloatingFeedback />
    </BrowserRouter>
  );
}

export default App;
