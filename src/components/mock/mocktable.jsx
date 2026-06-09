import React from "react";

import { Link } from "react-router-dom";

const MockTable = ({ examCode }) => {
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
              <Link
                to={`/mock/${examCode}/verbal-2`}
                className="mock-table-btn"
              >
                Not Uploaded
              </Link>
            </td>

            <td>
              <Link
                to={`/mock/${examCode}/nonverbal-2`}
                className="mock-table-btn"
              >
                Not Uploaded
              </Link>
            </td>

            <td>
              <Link to="/mock/academic/set2" className="mock-table-btn">
                Academic Mock 2
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link
                to={`/mock/${examCode}/verbal-3`}
                className="mock-table-btn"
              >
                Not Uploaded
              </Link>
            </td>

            <td>
              <Link
                to={`/mock/${examCode}/nonverbal-3`}
                className="mock-table-btn"
              >
                Not Uploaded
              </Link>
            </td>

            <td>
              <Link to="/mock/academic/set3" className="mock-table-btn">
                Academic Mock 3
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MockTable;
