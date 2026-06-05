import React from "react";
import XLSX from "xlsx-js-style";
import { saveAs } from "file-saver";

import { useLocation } from "react-router-dom";

import "../styles/result.css";

const Result = () => {
  const location = useLocation();

  const { questions, answers, timeLeft } =
    location.state;

  const hasImages = questions.some(
    (q) => q.image
  );

  const correct = questions.filter(
    (q) =>
      answers[q.id] === q.correctAnswer
  ).length;

  const wrong = questions.filter(
    (q) =>
      answers[q.id] &&
      answers[q.id] !== q.correctAnswer
  ).length;

  const notAttempted =
    questions.filter(
      (q) => !answers[q.id]
    ).length;

  const percentage = (
    (correct / questions.length) *
    100
  ).toFixed(2);

  const passed = percentage >= 50;

  const totalTime = 1800;

  const timeUsed =
    totalTime - timeLeft;

  const minutesUsed = Math.floor(
    timeUsed / 60
  );

  const secondsUsed =
    timeUsed % 60;

  // =========================================
  // EXCEL EXPORT
  // =========================================

  const downloadExcel = () => {
    const worksheetData = [
      ["EXAMITICS - PMA MOCK TEST RESULT"],

      [],

      ["Total Questions", questions.length],
      ["Correct Answers", correct],
      ["Wrong Answers", wrong],
      ["Not Attempted", notAttempted],
      ["Percentage", `${percentage}%`],
      ["Status", passed ? "PASS" : "FAIL"],

      [],

      hasImages
        ? [
            "Question No",
            "Image",
            "Question",
            "Your Answer",
            "Correct Answer",
            "Status",
          ]
        : [
            "Question No",
            "Question",
            "Your Answer",
            "Correct Answer",
            "Status",
          ],
    ];

    questions.forEach((q, index) => {
      const userAnswer =
        answers[q.id] ||
        "Not Attempted";

      const status =
        userAnswer ===
        q.correctAnswer
          ? "Correct"
          : userAnswer ===
              "Not Attempted"
            ? "Not Attempted"
            : "Wrong";

      if (hasImages) {
        worksheetData.push([
          index + 1,
          q.image || "-",
          q.question,
          userAnswer,
          q.correctAnswer,
          status,
        ]);
      } else {
        worksheetData.push([
          index + 1,
          q.question,
          userAnswer,
          q.correctAnswer,
          status,
        ]);
      }
    });

    const worksheet =
      XLSX.utils.aoa_to_sheet(
        worksheetData
      );

    worksheet["!cols"] = hasImages
      ? [
          { wch: 12 },
          { wch: 40 },
          { wch: 70 },
          { wch: 25 },
          { wch: 25 },
          { wch: 18 },
        ]
      : [
          { wch: 12 },
          { wch: 70 },
          { wch: 25 },
          { wch: 25 },
          { wch: 18 },
        ];

    worksheet["A1"].s = {
      font: {
        bold: true,
        sz: 18,
        color: {
          rgb: "FFFFFF",
        },
      },

      fill: {
        fgColor: {
          rgb: "1D4ED8",
        },
      },

      alignment: {
        horizontal: "center",
        vertical: "center",
      },
    };

    worksheet["!merges"] = [
      {
        s: { r: 0, c: 0 },
        e: {
          r: 0,
          c: hasImages ? 5 : 4,
        },
      },
    ];

    const summaryRows = [
      3, 4, 5, 6, 7,
    ];

    summaryRows.forEach((row) => {
      const titleCell = `A${row}`;

      const valueCell = `B${row}`;

      worksheet[titleCell].s = {
        font: {
          bold: true,
          color: {
            rgb: "FFFFFF",
          },
        },

        fill: {
          fgColor: {
            rgb: "2563EB",
          },
        },
      };

      worksheet[valueCell].s = {
        font: {
          bold: true,
        },

        alignment: {
          horizontal:
            "center",
        },
      };
    });

    const headerRow = 10;

    (
      hasImages
        ? [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
          ]
        : [
            "A",
            "B",
            "C",
            "D",
            "E",
          ]
    ).forEach((col) => {
      worksheet[
        `${col}${headerRow}`
      ].s = {
        font: {
          bold: true,
          color: {
            rgb: "FFFFFF",
          },
        },

        fill: {
          fgColor: {
            rgb: "1E40AF",
          },
        },

        alignment: {
          horizontal:
            "center",
          vertical:
            "center",
        },
      };
    });

    for (
      let i = 11;
      i <= worksheetData.length;
      i++
    ) {
      const statusCell =
        worksheet[
          `${
            hasImages
              ? "F"
              : "E"
          }${i}`
        ];

      if (!statusCell)
        continue;

      const status =
        statusCell.v;

      let bgColor =
        "FFFFFF";

      if (
        status === "Correct"
      )
        bgColor =
          "DCFCE7";

      else if (
        status === "Wrong"
      )
        bgColor =
          "FEE2E2";

      else if (
        status ===
        "Not Attempted"
      )
        bgColor =
          "FEF3C7";

      (
        hasImages
          ? [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
            ]
          : [
              "A",
              "B",
              "C",
              "D",
              "E",
            ]
      ).forEach((col) => {
        const cell =
          worksheet[
            `${col}${i}`
          ];

        if (!cell) return;

        cell.s = {
          fill: {
            fgColor: {
              rgb: bgColor,
            },
          },

          alignment: {
            wrapText: true,
            vertical:
              "top",
          },
        };
      });
    }

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "PMA Result"
    );

    const excelBuffer =
      XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

    const blob = new Blob(
      [excelBuffer],
      {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      }
    );

    saveAs(
      blob,
      "EXAMITICS-PMA-RESULT.xlsx"
    );
  };
    // =========================================
  // CSV EXPORT
  // =========================================

  const downloadCSV = () => {
    const currentDate =
      new Date().toLocaleString();

    const rows = [
      [
        "====================================================",
      ],
      [
        "EXAMITICS - PMA MOCK TEST RESULT",
      ],
      [
        "====================================================",
      ],

      [],

      [
        "Generated On",
        currentDate,
      ],

      [
        "Total Questions",
        questions.length,
      ],

      [
        "Time Taken",
        `${minutesUsed} Minutes ${secondsUsed} Seconds`,
      ],

      [],

      [
        "================ RESULT SUMMARY ====================",
      ],

      [],

      [
        "Correct Answers",
        correct,
      ],

      [
        "Wrong Answers",
        wrong,
      ],

      [
        "Not Attempted",
        notAttempted,
      ],

      [
        "Percentage",
        `${percentage}%`,
      ],

      [
        "Status",
        passed ? "PASS" : "FAIL",
      ],

      [],

      [
        "================ DETAILED ANALYSIS =================",
      ],

      [],

      hasImages
        ? [
            "Question No",
            "Image",
            "Question",
            "Your Answer",
            "Correct Answer",
            "Status",
          ]
        : [
            "Question No",
            "Question",
            "Your Answer",
            "Correct Answer",
            "Status",
          ],
    ];

    questions.forEach((q, index) => {
      const userAnswer =
        answers[q.id] ||
        "Not Attempted";

      const status =
        userAnswer ===
        q.correctAnswer
          ? "Correct"
          : userAnswer ===
              "Not Attempted"
            ? "Not Attempted"
            : "Wrong";

      if (hasImages) {
        rows.push([
          index + 1,
          q.image || "-",
          q.question,
          userAnswer,
          q.correctAnswer,
          status,
        ]);
      } else {
        rows.push([
          index + 1,
          q.question,
          userAnswer,
          q.correctAnswer,
          status,
        ]);
      }
    });

    const csvContent = rows
      .map((row) =>
        row
          .map(
            (item) =>
              `"${item}"`
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type:
          "text/csv;charset=utf-8;",
      }
    );

    saveAs(
      blob,
      "EXAMITICS-PMA-RESULT.csv"
    );
  };

  // =========================================
  // UI
  // =========================================

  return (
    <main className="result-page">
      <div className="result-header">

        <h1>
          Mock Test Result
        </h1>

        <div className="result-stats">

          <div>
            <h3>{correct}</h3>
            <p>Correct</p>
          </div>

          <div>
            <h3>{wrong}</h3>
            <p>Wrong</p>
          </div>

          <div>
            <h3>{notAttempted}</h3>
            <p>
              Not Attempted
            </p>
          </div>

          <div>
            <h3>
              {percentage}%
            </h3>
            <p>Score</p>
          </div>

        </div>

        <div
          className={
            passed
              ? "status pass"
              : "status fail"
          }
        >
          {passed
            ? "PASS"
            : "FAIL"}
        </div>

      </div>

      <div className="result-actions">

        <button
          className="download-btn"
          onClick={downloadCSV}
        >
          Download Result CSV
        </button>

        <button
          className="download-btn"
          onClick={downloadExcel}
        >
          Download Result Excel
        </button>

      </div>

      <div className="result-table-wrapper">

        <table className="result-table">

          <thead>

            <tr>

              <th>#</th>

              {hasImages && (
                <th>Image</th>
              )}

              <th>
                Question
              </th>

              <th>
                Your Answer
              </th>

              <th>
                Correct Answer
              </th>

              <th>
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {questions.map(
              (q, index) => {
                const userAnswer =
                  answers[q.id];

                const isCorrect =
                  userAnswer ===
                  q.correctAnswer;

                return (
                  <tr key={q.id}>

                    <td>
                      {index + 1}
                    </td>

                    {hasImages && (
                      <td>
                        {q.image ? (
                          <img
                            src={q.image}
                            alt={`Question ${
                              index + 1
                            }`}
                            className="result-question-image"
                          />
                        ) : (
                          "-"
                        )}
                      </td>
                    )}

                    <td>
                      {q.question}
                    </td>

                    <td>
                      {userAnswer ||
                        "Not Attempted"}
                    </td>

                    <td>
                      {
                        q.correctAnswer
                      }
                    </td>

                    <td>
                      {!userAnswer
                        ? "⚪"
                        : isCorrect
                          ? "✅"
                          : "❌"}
                    </td>

                  </tr>
                );
              }
            )}

          </tbody>

        </table>

      </div>
    </main>
  );
};

export default Result;