import React from "react";

import "../../styles/testimonials.css";

import SectionHeading from "../common/sectionheading";

import {
  FiStar,
  FiUsers,
  FiBookOpen,
  FiBarChart2,
  FiAward,
} from "react-icons/fi";

const Testimonials = () => {

  const testimonials = [

    {
      name: "Ahmed Raza",
      exam: "PMA Long Course",
      initials: "AR",
      text:
        "Examatics helped me improve verbal intelligence and time management before my PMA initial test.",
    },

    {
      name: "Hassan Ali",
      exam: "PAF Initial Test",
      initials: "HA",
      text:
        "The analytics and mock exams made my preparation structured and much more disciplined.",
    },

    {
      name: "Usman Tariq",
      exam: "MDCAT Preparation",
      initials: "UT",
      text:
        "Subject-wise analysis helped me identify weak areas and significantly improve my accuracy.",
    },

  ];

  return (

    <section className="testimonials-section">

      <div className="container-custom">

        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <SectionHeading
          badge="Student Feedback"
          title="Trusted by"
          highlight="Serious Aspirants"
          text="Students preparing for military, medical, and competitive examinations use Examatics to train with precision and confidence."
        />

        {/* =====================================
            TESTIMONIAL GRID
        ===================================== */}

        <div className="testimonials-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              {/* TOP */}

              <div className="testimonial-top">

                <div className="testimonial-user">

                  <div className="testimonial-avatar">

                    {item.initials}

                  </div>

                  <div>

                    <h4>{item.name}</h4>

                    <p>{item.exam}</p>

                  </div>

                </div>

                <div className="testimonial-stars">

                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />

                </div>

              </div>

              {/* TEXT */}

              <div className="testimonial-body">

                <p>

                  “{item.text}”

                </p>

              </div>

            </div>

          ))}

        </div>

        {/* =====================================
            TRUST STATS
        ===================================== */}

        <div className="trust-stats">

          <div className="trust-stat-card">

            <FiBookOpen />

            <div>

              <h3>50K+</h3>

              <p>MCQs Available</p>

            </div>

          </div>

          <div className="trust-stat-card">

            <FiUsers />

            <div>

              <h3>12K+</h3>

              <p>Active Students</p>

            </div>

          </div>

          <div className="trust-stat-card">

            <FiBarChart2 />

            <div>

              <h3>300+</h3>

              <p>Mock Exams</p>

            </div>

          </div>

          <div className="trust-stat-card">

            <FiAward />

            <div>

              <h3>95%</h3>

              <p>Satisfaction Rate</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;