import React from "react";

import { Link } from "react-router-dom";

const MockTable = ({ examCode }) => {
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
              <Link to={"/mock/intelligence/intelligence-set1"} className="mock-table-btn">
                Intelligence Mock 1
              </Link>
            </td>

            <td>
              <Link to={`/mock/${examCode}/nonverbal-2`} className="mock-table-btn">
                Not Uploaded
              </Link>
            </td>

            <td>
              <Link to={`/mock/${examCode}/nonverbal-2`} className="mock-table-btn">
                Not Uploaded
              </Link>
            </td>

            <td>
              <Link to={`/mock/${examCode}/nonverbal-2`} className="mock-table-btn">
                Not Uploaded
              </Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to={`/mock/${examCode}/nonverbal-2`} className="mock-table-btn">
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
              <Link to={`/mock/${examCode}/nonverbal-2`} className="mock-table-btn">
                Not Uploaded
              </Link>
            </td>

            <td>
              <Link to={`/mock/${examCode}/nonverbal-2`} className="mock-table-btn">
                Not Uploaded
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
              <Link to={`/mock/${examCode}/nonverbal-2`} className="mock-table-btn">
                Not Uploaded
              </Link>
            </td>

            <td>
              <Link to={`/mock/${examCode}/nonverbal-2`} className="mock-table-btn">
                Not Uploaded
              </Link>
            </td>

            <td>
              <Link to={`/mock/${examCode}/nonverbal-2`} className="mock-table-btn">
                Not Uploaded
              </Link>
            </td>
          </tr>

          
        </tbody>
      </table>
    </div>
  );
};

export default MockTable;
