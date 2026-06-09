import React from "react";

import { Helmet } from "react-helmet-async";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import "../styles/privacy-policy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <Helmet>
        <title>Privacy Policy | EXAMITICS</title>
        <meta
          name="description"
          content="Read EXAMITICS privacy policy covering data collection, cookies, analytics, and user rights."
        />
      </Helmet>
      <div className="privacy-container">
        {/* HERO */}
        <div className="privacy-hero">
          <h1>Privacy Policy</h1>
          <p>
            EXAMITICS respects your privacy and is committed to protecting your
            personal data and user information.
          </p>
          <span className="updated">Last Updated: June 2026</span>
        </div>

        {/* SECTION 1 */}
        <section className="privacy-section">
          <h2>1. Information We Collect</h2>
          <ul>
            <li>Email address (if you subscribe or register)</li>
            <li>
              Exam progress and performance data (MCQs, mock tests, scores)
            </li>
            <li>Device information (browser type, device type, IP address)</li>
            <li>Usage data (pages visited, time spent, interactions)</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To improve exam preparation experience</li>
            <li>To track learning progress and performance</li>
            <li>To personalize content and recommendations</li>
            <li>To analyze platform usage and improve performance</li>
            <li>To display relevant advertisements (if applicable)</li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section className="privacy-section">
          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            EXAMITICS uses cookies and similar technologies to enhance user
            experience, analyze traffic, and improve platform performance.
          </p>
          <ul>
            <li>Analytics cookies (e.g., usage tracking)</li>
            <li>Functional cookies (session management)</li>
            <li>Advertising cookies (third-party ads)</li>
          </ul>
        </section>

        {/* SECTION 4 */}
        <section className="privacy-section">
          <h2>4. Third-Party Services</h2>
          <p>We may use third-party services that collect limited user data:</p>
          <ul>
            <li>Google Analytics (website usage tracking)</li>
            <li>Ad networks (e.g., Adsterra or similar platforms)</li>
            <li>Hosting services (e.g., Vercel)</li>
          </ul>
        </section>

        {/* SECTION 5 */}
        <section className="privacy-section">
          <h2>5. Data Protection</h2>
          <p>
            We implement reasonable security measures to protect your data.
            However, no system is 100% secure, and we cannot guarantee absolute
            protection of information transmitted online.
          </p>
        </section>

        {/* SECTION 6 */}
        <section className="privacy-section">
          <h2>6. Data Sharing</h2>
          <p>
            EXAMITICS does not sell, trade, or rent user personal data. Data is
            only shared with trusted third-party services required to operate
            the platform.
          </p>
        </section>

        {/* SECTION 7 */}
        <section className="privacy-section">
          <h2>7. Your Rights</h2>
          <ul>
            <li>Request access to your data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of cookies (browser settings)</li>
          </ul>
        </section>

        {/* SECTION 8 */}
        <section className="privacy-section">
          <h2>8. Children's Privacy</h2>
          <p>
            EXAMITICS is designed for educational purposes. We do not knowingly
            collect personal data from children under 13 without parental
            consent.
          </p>
        </section>

        {/* SECTION 9 */}
        <section className="privacy-section">
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with a revised date.
          </p>
        </section>

        {/* FOOTER */}
        <div className="privacy-footer">
          <p>
            If you have any questions about this Privacy Policy, contact us via
            the support section of EXAMITICS.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
