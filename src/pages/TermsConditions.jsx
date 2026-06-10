import React from "react";
import "../styles/terms-conditions.css";

import { Helmet } from "react-helmet-async";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

const TermsConditions = () => {
  return (
    <>
      <Navbar />
      <Helmet>
        <title>Terms & Conditions | EXAMITICS</title>
        <meta
          name="description"
          content="Read EXAMITICS terms and conditions covering user responsibilities, intellectual property, and disclaimer."
        />
      </Helmet>

      <div className="terms-container">
        <div className="terms-hero">
          <h1>Terms & Conditions</h1>
          <p>
            Please read these Terms & Conditions carefully before using
            EXAMITICS.
          </p>
          <span className="updated">Last Updated: June 2026</span>
        </div>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using EXAMITICS, you agree to comply with and be
            bound by these Terms & Conditions. If you do not agree with any part
            of these terms, you should discontinue use of the platform.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Educational Purpose</h2>
          <p>
            EXAMITICS is an educational preparation platform designed to help
            candidates prepare for military, academic, and competitive
            examinations through practice material, mock tests, and study
            resources.
          </p>

          <p>
            EXAMITICS is not affiliated with, endorsed by, or operated by any
            government recruitment organization, armed forces institution,
            testing authority, or examination board unless explicitly stated.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. No Guarantee of Selection</h2>
          <p>
            Use of EXAMITICS does not guarantee selection, admission,
            employment, recommendation, qualification, or success in any
            examination, recruitment process, interview, ISSB assessment, or
            military selection procedure.
          </p>

          <p>
            Examination outcomes depend on individual performance and official
            selection criteria established by the relevant authorities.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. User Responsibilities</h2>

          <ul>
            <li>Provide accurate information when required.</li>
            <li>Use the platform lawfully and responsibly.</li>
            <li>Not attempt unauthorized access to platform systems.</li>
            <li>Not copy, distribute, or misuse protected content.</li>
            <li>Respect the rights of other users and the platform.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>5. Intellectual Property</h2>

          <p>
            All content available on EXAMITICS, including but not limited to
            questions, mock tests, explanations, designs, graphics, branding,
            logos, source material, and educational resources, remains the
            property of EXAMITICS or its content providers unless otherwise
            indicated.
          </p>

          <p>
            Unauthorized reproduction, redistribution, modification, or
            commercial use of platform content is prohibited.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Third-Party Services</h2>

          <p>
            EXAMITICS may use third-party services including analytics,
            advertising providers, hosting platforms, and external resources.
            These services may operate under their own policies and terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Advertisements</h2>

          <p>
            The platform may display advertisements from third-party advertising
            partners. EXAMITICS is not responsible for the content, accuracy, or
            practices of external advertisers or linked websites.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Limitation of Liability</h2>

          <p>
            EXAMITICS shall not be liable for any direct, indirect, incidental,
            consequential, or special damages resulting from the use or
            inability to use the platform, including loss of data, examination
            results, missed opportunities, or service interruptions.
          </p>
        </section>

        <section className="terms-section">
          <h2>9. Service Availability</h2>

          <p>
            We reserve the right to modify, suspend, update, or discontinue any
            feature, content, examination module, or service without prior
            notice.
          </p>
        </section>

        <section className="terms-section">
          <h2>10. Changes to These Terms</h2>

          <p>
            These Terms & Conditions may be updated periodically. Continued use
            of EXAMITICS after changes are published constitutes acceptance of
            the revised terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>11. Contact</h2>

          <p>
            Questions regarding these Terms & Conditions may be submitted
            through the EXAMITICS contact or support channels available on the
            platform.
          </p>
        </section>

        <div className="terms-footer">
          <p>
            By continuing to use EXAMITICS, you acknowledge that you have read,
            understood, and agreed to these Terms & Conditions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditions;
