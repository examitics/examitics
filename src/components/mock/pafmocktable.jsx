import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const MockTable = ({ examCode }) => {
  const { user, isPremium } = useAuth();
  const navigate = useNavigate();

  const handlePremiumClick = (path) => {
    if (!user || !isPremium) {
      navigate("/premium", {
        state: {
          from: path,
        },
      });
      return;
    }

    navigate(path);
  };
  return (
    <div className="mock-table-wrapper">
      <table className="mock-table">
        <thead>
          <tr>
            <th>Intelligence</th>

            <th>Math</th>

            <th>Physics</th>

            <th>English</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Link
                to={"/mock/intelligence/intelligence-set1"}
                className="mock-table-btn"
              >
                Intelligence Mock 1
              </Link>
            </td>

            <td>
              <Link to={`/mock/math/math-set1`} className="mock-table-btn">
                Math Mock 1
              </Link>
            </td>

            <td>
              <Link
                to={`/mock/physics/physics-set1`}
                className="mock-table-btn"
              >
                Physics Mock 1
              </Link>
            </td>

            <td>
              <Link
                to={`/mock/english/english-set1`}
                className="mock-table-btn"
              >
                English Mock 1
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              {/* <Link
                to={`/mock/${examCode}/nonverbal-2`}
                className="mock-table-btn"
              >
                Comming Soon 
              </Link> */}

              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() =>
                  handlePremiumClick("/mock/intelligence/intelligence-set2")
                }
              >
                <span>Intelligence Mock 2</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/math/set2")}
              >
                <span>Math Mock 2</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/physics/set2")}
              >
                <span>Physics Mock 2</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              {/* <Link to={`/mock/english/english-set2`} className="mock-table-btn">
                English Mock 2
              </Link> */}
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/english/set2")}
              >
                {/* <FiLock /> */}
                <span>English Mock 2</span>
                <span className="mock-premium-diamond">◆</span>
                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() =>
                  handlePremiumClick("/mock/intelligence/intelligence-set3")
                }
              >
                <span>Intelligence Mock 3</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/math/set3")}
              >
                <span>Math Mock 3</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/physics/set3")}
              >
                <span>Physics Mock 3</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              {/* <Link to={`/mock/english/english-set3`} className="mock-table-btn">
                English Mock 3
              </Link> */}

              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/english/set3")}
              >
                <span>English Mock 3</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() =>
                  handlePremiumClick("/mock/intelligence/intelligence-set4")
                }
              >
                <span>Intelligence Mock 4</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/math/set4")}
              >
                <span>Math Mock 4</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/physics/set4")}
              >
                <span>Physics Mock 4</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <Link
                to={`/mock/${examCode}/verbal-3`}
                className="mock-table-btn"
              >
                Comming Soon
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() =>
                  handlePremiumClick("/mock/intelligence/intelligence-set5")
                }
              >
                <span>Intelligence Mock 5</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <Link
                to={`/mock/${examCode}/verbal-3`}
                className="mock-table-btn"
              >
                Comming Soon
              </Link>
            </td>

            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/physics/set5")}
              >
                <span>Physics Mock 5</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <Link
                to={`/mock/${examCode}/verbal-3`}
                className="mock-table-btn"
              >
                Comming Soon
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() =>
                  handlePremiumClick("/mock/intelligence/intelligence-set6")
                }
              >
                <span>Intelligence Mock 6</span>
                <span className="mock-premium-diamond">◆</span>
                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <Link
                to={`/mock/${examCode}/verbal-3`}
                className="mock-table-btn"
              >
                Comming Soon
              </Link>
            </td>

            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/physics/set6")}
              >
                <span>Physics Mock 6</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <Link
                to={`/mock/${examCode}/verbal-3`}
                className="mock-table-btn"
              >
                Comming Soon
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link
                to={`/mock/${examCode}/verbal-3`}
                className="mock-table-btn"
              >
                Comming Soon
              </Link>
            </td>

            <td>
              <Link
                to={`/mock/${examCode}/verbal-3`}
                className="mock-table-btn"
              >
                Comming Soon
              </Link>
            </td>

            <td>
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/physics/set7")}
              >
                <span>Physics Mock 7</span>

                <span className="mock-premium-diamond">◆</span>

                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <Link
                to={`/mock/${examCode}/verbal-3`}
                className="mock-table-btn"
              >
                Comming Soon
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MockTable;
