import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLock } from "react-icons/fi";
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
            <th>Verbal</th>

            <th>Non-Verbal</th>

            <th>Academics</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Link to="/mock/verbal/set1" className="mock-table-btn">
                Verbal Mock 1
              </Link>
            </td>

            <td>
              <Link to="/mock/nonverbal/set1" className="mock-table-btn">
                Non-Verbal Mock 1
              </Link>
            </td>

            <td>
              <Link to="/mock/academic/set1" className="mock-table-btn">
                Academic Mock 1
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              {/* <Link
                to="/mock/verbal/set2"
                className="mock-table-btn"
              >
                Verbal Mock 2
              </Link> */}
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/verbal/set2")}
              >
                {/* <FiLock /> */}
                <span>Verbal Mock 2</span>
                <span className="mock-premium-diamond">◆</span>
                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>

            <td>
              <Link
                to={`/mock/${examCode}/nonverbal-2`}
                className="mock-table-btn"
              >
                Comming Soon 
              </Link>
            </td>

            <td>
              {/* <Link to="/mock/academic/set2" className="mock-table-btn">
                Academic Mock 2
              </Link> */}
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/academic/set2")}
              >
                {/* <FiLock /> */}
                <span>Academic Mock 2</span>
                <span className="mock-premium-diamond">◆</span>
                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
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
                to={`/mock/${examCode}/nonverbal-3`}
                className="mock-table-btn"
                aria-disabled="true"
              >
                Comming Soon 
              </Link>
            </td>

            <td>
              {/* <Link to="/mock/academic/set3" className="mock-table-btn">
                Academic Mock 3
              </Link> */}
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/academic/set3")}
              >
                {/* <FiLock /> */}
                <span>Academic Mock 3</span>
                <span className="mock-premium-diamond">◆</span>
                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
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
                to={`/mock/${examCode}/nonverbal-3`}
                className="mock-table-btn"
                aria-disabled="true"
              >
                Comming Soon 
              </Link>
            </td>

            <td>
              {/* <Link to="/mock/academic/set3" className="mock-table-btn">
                Academic Mock 3
              </Link> */}
              <button
                type="button"
                className="mock-table-btn mock-premium-btn"
                onClick={() => handlePremiumClick("/mock/academic/set4")}
              >
                {/* <FiLock /> */}
                <span>Academic Mock 4</span>
                <span className="mock-premium-diamond">◆</span>
                {!isPremium && (
                  <span className="mock-premium-label">PREMIUM</span>
                )}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MockTable;
