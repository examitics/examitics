// import {
//   FaBookOpen,
//   FaBrain,
//   FaGraduationCap,
//   FaGlobe,
// } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="knowledge-hero">
      <div className="knowledge-hero-pattern"></div>

      <div className="container-custom">

        <div className="knowledge-hero-content">

          <span className="knowledge-hero-badge">
            {/* <FaBookOpen /> */}
            EXAMITICS Knowledge Hub
          </span>

          <h1>
            Learn Faster.
            <br />
            Prepare Smarter.
          </h1>

          <p>
            Explore organized study material for PMA, ISSB, ASF, Pakistan
            Navy, PAF and Competitive Exams. Learn concepts, revise facts,
            and strengthen your preparation from one place.
          </p>

          <div className="knowledge-hero-stats">

            <div className="hero-stat exa-card card-holder">
              {/* <FaBookOpen /> */}
              <div>
                <h3>100+</h3>
                <span>Knowledge Topics</span>
              </div>
            </div>

            <div className="hero-stat exa-card card-holder">
              {/* <FaBrain /> */}
              <div>
                <h3>5000+</h3>
                <span>MCQs</span>
              </div>
            </div>

            <div className="hero-stat exa-card card-holder">
              {/* <FaGraduationCap /> */}
              <div>
                <h3>10+</h3>
                <span>Categories</span>
              </div>
            </div>

            <div className="hero-stat exa-card card-holder">
              {/* <FaGlobe /> */}
              <div>
                <h3>Free</h3>
                <span>For Everyone</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;