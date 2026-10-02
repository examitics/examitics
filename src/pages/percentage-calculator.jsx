import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";

import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiInfo,
  FiRefreshCw,
  FiBookOpen,
} from "react-icons/fi";

import "../styles/percentage-calculator.css";


/* =========================================================
   HELPERS
========================================================= */

const formatNumber = (value, maximumFractionDigits = 4) => {
  if (!Number.isFinite(value)) return "0";

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
  }).format(value);
};


const parseNumber = (value) => {
  if (value === "" || value === null || value === undefined) {
    return null;
  }

  const number = Number(value);

  return Number.isFinite(number) ? number : null;
};


const getPercentageChange = (oldValue, newValue) => {
  if (oldValue === 0) return null;

  return ((newValue - oldValue) / Math.abs(oldValue)) * 100;
};


/* =========================================================
   COMPONENT
========================================================= */

const PercentageCalculator = () => {

  const [activeTool, setActiveTool] = useState("percentage-of");

  const [percentage, setPercentage] = useState("");
  const [baseValue, setBaseValue] = useState("");

  const [partValue, setPartValue] = useState("");
  const [wholeValue, setWholeValue] = useState("");

  const [oldValue, setOldValue] = useState("");
  const [newValue, setNewValue] = useState("");

  const [differenceValue1, setDifferenceValue1] = useState("");
  const [differenceValue2, setDifferenceValue2] = useState("");

  const [originalValue, setOriginalValue] = useState("");
  const [reversePercentage, setReversePercentage] = useState("");

  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");

  const [taxPrice, setTaxPrice] = useState("");
  const [taxPercentage, setTaxPercentage] = useState("");

  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");

  const [decimalValue, setDecimalValue] = useState("");

  const [error, setError] = useState("");


  /* =========================================================
     MAIN CALCULATIONS
  ========================================================= */

  const percentageOfResult = useMemo(() => {

    const percent = parseNumber(percentage);
    const value = parseNumber(baseValue);

    if (percent === null || value === null) {
      return null;
    }

    return (percent / 100) * value;

  }, [percentage, baseValue]);


  const percentageOfFormatted = useMemo(() => {

    if (percentageOfResult === null) {
      return null;
    }

    return formatNumber(percentageOfResult);

  }, [percentageOfResult]);


  const whatPercentageResult = useMemo(() => {

    const part = parseNumber(partValue);
    const whole = parseNumber(wholeValue);

    if (
      part === null ||
      whole === null ||
      whole === 0
    ) {
      return null;
    }

    return (part / whole) * 100;

  }, [partValue, wholeValue]);


  const percentageChangeResult = useMemo(() => {

    const oldNumber = parseNumber(oldValue);
    const newNumber = parseNumber(newValue);

    if (
      oldNumber === null ||
      newNumber === null ||
      oldNumber === 0
    ) {
      return null;
    }

    return getPercentageChange(
      oldNumber,
      newNumber
    );

  }, [oldValue, newValue]);


  const percentageDifferenceResult = useMemo(() => {

    const first = parseNumber(differenceValue1);
    const second = parseNumber(differenceValue2);

    if (
      first === null ||
      second === null ||
      (first === 0 && second === 0)
    ) {
      return null;
    }

    const average =
      (Math.abs(first) + Math.abs(second)) / 2;

    if (average === 0) {
      return null;
    }

    return (
      (Math.abs(first - second) / average) *
      100
    );

  }, [differenceValue1, differenceValue2]);


  const reversePercentageResult = useMemo(() => {

    const value = parseNumber(originalValue);
    const percent = parseNumber(reversePercentage);

    if (
      value === null ||
      percent === null ||
      percent === 100
    ) {
      return null;
    }

    return value / (1 + percent / 100);

  }, [originalValue, reversePercentage]);


  const discountResult = useMemo(() => {

    const amount = parseNumber(price);
    const discount = parseNumber(discountPercentage);

    if (
      amount === null ||
      discount === null
    ) {
      return null;
    }

    const savings =
      amount * (discount / 100);

    const finalPrice =
      amount - savings;

    return {
      savings,
      finalPrice,
    };

  }, [price, discountPercentage]);


  const taxResult = useMemo(() => {

    const amount = parseNumber(taxPrice);
    const tax = parseNumber(taxPercentage);

    if (
      amount === null ||
      tax === null
    ) {
      return null;
    }

    const taxAmount =
      amount * (tax / 100);

    const total =
      amount + taxAmount;

    return {
      taxAmount,
      total,
    };

  }, [taxPrice, taxPercentage]);


  const tipResult = useMemo(() => {

    const amount = parseNumber(billAmount);
    const tip = parseNumber(tipPercentage);

    if (
      amount === null ||
      tip === null
    ) {
      return null;
    }

    const tipAmount =
      amount * (tip / 100);

    const total =
      amount + tipAmount;

    return {
      tipAmount,
      total,
    };

  }, [billAmount, tipPercentage]);


  const decimalToPercentageResult = useMemo(() => {

    const decimal = parseNumber(decimalValue);

    if (decimal === null) {
      return null;
    }

    return decimal * 100;

  }, [decimalValue]);


  /* =========================================================
     TOOL CONFIGURATION
  ========================================================= */

  const tools = [
    {
      id: "percentage-of",
      title: "Percentage of a Number",
      description:
        "Find a percentage of any number.",
    },
    {
      id: "what-percentage",
      title: "What Percentage?",
      description:
        "Find what percentage one number is of another.",
    },
    {
      id: "percentage-change",
      title: "Percentage Change",
      description:
        "Calculate percentage increase or decrease.",
    },
    {
      id: "percentage-difference",
      title: "Percentage Difference",
      description:
        "Compare two values without choosing an original value.",
    },
    {
      id: "reverse-percentage",
      title: "Reverse Percentage",
      description:
        "Find the original value before a percentage change.",
    },
    {
      id: "discount",
      title: "Discount Calculator",
      description:
        "Calculate savings and final price after a discount.",
    },
    {
      id: "tax",
      title: "Tax Calculator",
      description:
        "Calculate tax amount and final price.",
    },
    {
      id: "tip",
      title: "Tip Calculator",
      description:
        "Calculate a tip and total bill.",
    },
    {
      id: "decimal",
      title: "Decimal to Percentage",
      description:
        "Convert a decimal value into a percentage.",
    },
  ];


  /* =========================================================
     TOOL TITLES
  ========================================================= */

  const activeToolTitle =
    tools.find(
      (tool) => tool.id === activeTool
    )?.title || "Percentage Calculator";


  /* =========================================================
     VALIDATION
  ========================================================= */

  const handleCalculate = () => {

    setError("");

    let valid = true;

    if (activeTool === "percentage-of") {
      if (
        parseNumber(percentage) === null ||
        parseNumber(baseValue) === null
      ) {
        valid = false;
      }
    }

    if (activeTool === "what-percentage") {
      if (
        parseNumber(partValue) === null ||
        parseNumber(wholeValue) === null
      ) {
        valid = false;
      }

      if (parseNumber(wholeValue) === 0) {
        setError(
          "The second value cannot be zero."
        );
        return;
      }
    }

    if (activeTool === "percentage-change") {
      if (
        parseNumber(oldValue) === null ||
        parseNumber(newValue) === null
      ) {
        valid = false;
      }

      if (parseNumber(oldValue) === 0) {
        setError(
          "The original value cannot be zero for percentage change."
        );
        return;
      }
    }

    if (activeTool === "percentage-difference") {
      if (
        parseNumber(differenceValue1) === null ||
        parseNumber(differenceValue2) === null
      ) {
        valid = false;
      }
    }

    if (activeTool === "reverse-percentage") {
      if (
        parseNumber(originalValue) === null ||
        parseNumber(reversePercentage) === null
      ) {
        valid = false;
      }

      if (parseNumber(reversePercentage) === 100) {
        setError(
          "A 100% increase cannot be reversed using this formula."
        );
        return;
      }
    }

    if (activeTool === "discount") {
      if (
        parseNumber(price) === null ||
        parseNumber(discountPercentage) === null
      ) {
        valid = false;
      }
    }

    if (activeTool === "tax") {
      if (
        parseNumber(taxPrice) === null ||
        parseNumber(taxPercentage) === null
      ) {
        valid = false;
      }
    }

    if (activeTool === "tip") {
      if (
        parseNumber(billAmount) === null ||
        parseNumber(tipPercentage) === null
      ) {
        valid = false;
      }
    }

    if (activeTool === "decimal") {
      if (
        parseNumber(decimalValue) === null
      ) {
        valid = false;
      }
    }

    if (!valid) {
      setError(
        "Please enter all required values before calculating."
      );
      return;
    }

    document
      .getElementById("percentage-result")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };


  /* =========================================================
     RESET CURRENT TOOL
  ========================================================= */

  const handleReset = () => {

    setPercentage("");
    setBaseValue("");

    setPartValue("");
    setWholeValue("");

    setOldValue("");
    setNewValue("");

    setDifferenceValue1("");
    setDifferenceValue2("");

    setOriginalValue("");
    setReversePercentage("");

    setPrice("");
    setDiscountPercentage("");

    setTaxPrice("");
    setTaxPercentage("");

    setBillAmount("");
    setTipPercentage("");

    setDecimalValue("");

    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  /* =========================================================
     TOOL SWITCH
  ========================================================= */

  const handleToolChange = (toolId) => {

    setActiveTool(toolId);

    setError("");

    setTimeout(() => {

      document
        .getElementById("percentage-calculator-card")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

    }, 50);
  };


  /* =========================================================
     RENDER CALCULATOR INPUTS
  ========================================================= */

  const renderCalculator = () => {

    switch (activeTool) {

      /* =====================================================
         PERCENTAGE OF
      ===================================================== */

      case "percentage-of":

        return (
          <>
            <div className="percentage-form-group">

              <label htmlFor="percentage-value">
                Percentage
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="percentage-value"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 25"
                  value={percentage}
                  onChange={(e) => {
                    setPercentage(e.target.value);
                    setError("");
                  }}
                />

                <span>%</span>

              </div>

            </div>


            <div className="percentage-form-group">

              <label htmlFor="base-value">
                Number
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="base-value"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 200"
                  value={baseValue}
                  onChange={(e) => {
                    setBaseValue(e.target.value);
                    setError("");
                  }}
                />

              </div>

            </div>
          </>
        );


      /* =====================================================
         WHAT PERCENTAGE
      ===================================================== */

      case "what-percentage":

        return (
          <>
            <div className="percentage-form-group">

              <label htmlFor="part-value">
                Part / First Number
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="part-value"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 25"
                  value={partValue}
                  onChange={(e) => {
                    setPartValue(e.target.value);
                    setError("");
                  }}
                />

              </div>

            </div>


            <div className="percentage-form-group">

              <label htmlFor="whole-value">
                Whole / Second Number
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="whole-value"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 100"
                  value={wholeValue}
                  onChange={(e) => {
                    setWholeValue(e.target.value);
                    setError("");
                  }}
                />

              </div>

            </div>
          </>
        );


      /* =====================================================
         PERCENTAGE CHANGE
      ===================================================== */

      case "percentage-change":

        return (
          <>
            <div className="percentage-form-group">

              <label htmlFor="old-value">
                Original Value
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="old-value"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 80"
                  value={oldValue}
                  onChange={(e) => {
                    setOldValue(e.target.value);
                    setError("");
                  }}
                />

              </div>

            </div>


            <div className="percentage-form-group">

              <label htmlFor="new-value">
                New Value
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="new-value"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 100"
                  value={newValue}
                  onChange={(e) => {
                    setNewValue(e.target.value);
                    setError("");
                  }}
                />

              </div>

            </div>
          </>
        );


      /* =====================================================
         PERCENTAGE DIFFERENCE
      ===================================================== */

      case "percentage-difference":

        return (
          <>
            <div className="percentage-form-group">

              <label htmlFor="difference-value-1">
                First Value
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="difference-value-1"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 80"
                  value={differenceValue1}
                  onChange={(e) => {
                    setDifferenceValue1(e.target.value);
                    setError("");
                  }}
                />

              </div>

            </div>


            <div className="percentage-form-group">

              <label htmlFor="difference-value-2">
                Second Value
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="difference-value-2"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 100"
                  value={differenceValue2}
                  onChange={(e) => {
                    setDifferenceValue2(e.target.value);
                    setError("");
                  }}
                />

              </div>

            </div>
          </>
        );


      /* =====================================================
         REVERSE PERCENTAGE
      ===================================================== */

      case "reverse-percentage":

        return (
          <>
            <div className="percentage-form-group">

              <label htmlFor="reverse-value">
                Final Value
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="reverse-value"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 120"
                  value={originalValue}
                  onChange={(e) => {
                    setOriginalValue(e.target.value);
                    setError("");
                  }}
                />

              </div>

            </div>


            <div className="percentage-form-group">

              <label htmlFor="reverse-percentage">
                Percentage Change
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="reverse-percentage"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 20"
                  value={reversePercentage}
                  onChange={(e) => {
                    setReversePercentage(e.target.value);
                    setError("");
                  }}
                />

                <span>%</span>

              </div>

            </div>
          </>
        );


      /* =====================================================
         DISCOUNT
      ===================================================== */

      case "discount":

        return (
          <>
            <div className="percentage-form-group">

              <label htmlFor="discount-price">
                Original Price
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="discount-price"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 5000"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                    setError("");
                  }}
                />

              </div>

            </div>


            <div className="percentage-form-group">

              <label htmlFor="discount-percent">
                Discount
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="discount-percent"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 20"
                  value={discountPercentage}
                  onChange={(e) => {
                    setDiscountPercentage(e.target.value);
                    setError("");
                  }}
                />

                <span>%</span>

              </div>

            </div>
          </>
        );


      /* =====================================================
         TAX
      ===================================================== */

      case "tax":

        return (
          <>
            <div className="percentage-form-group">

              <label htmlFor="tax-price">
                Price Before Tax
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="tax-price"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 10000"
                  value={taxPrice}
                  onChange={(e) => {
                    setTaxPrice(e.target.value);
                    setError("");
                  }}
                />

              </div>

            </div>


            <div className="percentage-form-group">

              <label htmlFor="tax-percent">
                Tax Rate
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="tax-percent"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 18"
                  value={taxPercentage}
                  onChange={(e) => {
                    setTaxPercentage(e.target.value);
                    setError("");
                  }}
                />

                <span>%</span>

              </div>

            </div>
          </>
        );


      /* =====================================================
         TIP
      ===================================================== */

      case "tip":

        return (
          <>
            <div className="percentage-form-group">

              <label htmlFor="bill-amount">
                Bill Amount
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="bill-amount"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 2500"
                  value={billAmount}
                  onChange={(e) => {
                    setBillAmount(e.target.value);
                    setError("");
                  }}
                />

              </div>

            </div>


            <div className="percentage-form-group">

              <label htmlFor="tip-percent">
                Tip Percentage
              </label>

              <div className="percentage-input-wrapper">

                <input
                  id="tip-percent"
                  type="number"
                  inputMode="decimal"
                  placeholder="e.g. 10"
                  value={tipPercentage}
                  onChange={(e) => {
                    setTipPercentage(e.target.value);
                    setError("");
                  }}
                />

                <span>%</span>

              </div>

            </div>
          </>
        );


      /* =====================================================
         DECIMAL
      ===================================================== */

      case "decimal":

        return (
          <div className="percentage-form-group percentage-single-input">

            <label htmlFor="decimal-value">
              Decimal Value
            </label>

            <div className="percentage-input-wrapper">

              <input
                id="decimal-value"
                type="number"
                inputMode="decimal"
                placeholder="e.g. 0.25"
                value={decimalValue}
                onChange={(e) => {
                  setDecimalValue(e.target.value);
                  setError("");
                }}
              />

            </div>

            <span className="percentage-input-help">
              Example: 0.25 becomes 25%.
            </span>

          </div>
        );


      default:
        return null;
    }
  };


  /* =========================================================
     RENDER RESULT
  ========================================================= */

  const renderResult = () => {

    if (activeTool === "percentage-of") {

      return percentageOfResult !== null ? (
        <>
          <div className="percentage-main-result">

            <div className="percentage-main-number">
              {percentageOfFormatted}
            </div>

            <div className="percentage-main-label">
              {percentage}% of {formatNumber(parseNumber(baseValue))}
            </div>

          </div>

          <div className="percentage-result-grid">

            <div className="percentage-result-box">
              <span>Percentage</span>
              <strong>{formatNumber(parseNumber(percentage))}%</strong>
            </div>

            <div className="percentage-result-box">
              <span>Number</span>
              <strong>{formatNumber(parseNumber(baseValue))}</strong>
            </div>

            <div className="percentage-result-box">
              <span>Result</span>
              <strong>{percentageOfFormatted}</strong>
            </div>

          </div>

          <div className="percentage-formula-box">

            <strong>Formula</strong>

            <p>
              ({formatNumber(parseNumber(percentage))} ÷ 100)
              × {formatNumber(parseNumber(baseValue))}
              = {percentageOfFormatted}
            </p>

          </div>
        </>
      ) : null;
    }


    if (activeTool === "what-percentage") {

      return whatPercentageResult !== null ? (
        <>
          <div className="percentage-main-result">

            <div className="percentage-main-number">
              {formatNumber(whatPercentageResult)}%
            </div>

            <div className="percentage-main-label">
              {formatNumber(parseNumber(partValue))}
              is this percentage of{" "}
              {formatNumber(parseNumber(wholeValue))}
            </div>

          </div>

          <div className="percentage-result-grid">

            <div className="percentage-result-box">
              <span>Part</span>
              <strong>
                {formatNumber(parseNumber(partValue))}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Whole</span>
              <strong>
                {formatNumber(parseNumber(wholeValue))}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Percentage</span>
              <strong>
                {formatNumber(whatPercentageResult)}%
              </strong>
            </div>

          </div>

          <div className="percentage-formula-box">

            <strong>Formula</strong>

            <p>
              ({formatNumber(parseNumber(partValue))} ÷{" "}
              {formatNumber(parseNumber(wholeValue))})
              × 100 ={" "}
              {formatNumber(whatPercentageResult)}%
            </p>

          </div>
        </>
      ) : null;
    }


    if (activeTool === "percentage-change") {

      return percentageChangeResult !== null ? (
        <>
          <div className="percentage-main-result">

            <div className="percentage-main-number">
              {formatNumber(
                Math.abs(percentageChangeResult)
              )}%
            </div>

            <div className="percentage-main-label">
              {percentageChangeResult > 0
                ? "Increase"
                : percentageChangeResult < 0
                ? "Decrease"
                : "No change"}
            </div>

          </div>

          <div className="percentage-result-grid">

            <div className="percentage-result-box">
              <span>Original</span>
              <strong>
                {formatNumber(parseNumber(oldValue))}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>New</span>
              <strong>
                {formatNumber(parseNumber(newValue))}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Change</span>
              <strong>
                {formatNumber(
                  parseNumber(newValue) -
                    parseNumber(oldValue)
                )}
              </strong>
            </div>

          </div>

          <div className="percentage-formula-box">

            <strong>Formula</strong>

            <p>
              ((New − Original) ÷ |Original|) × 100
            </p>

          </div>
        </>
      ) : null;
    }


    if (activeTool === "percentage-difference") {

      return percentageDifferenceResult !== null ? (
        <>
          <div className="percentage-main-result">

            <div className="percentage-main-number">
              {formatNumber(
                percentageDifferenceResult
              )}%
            </div>

            <div className="percentage-main-label">
              Percentage Difference
            </div>

          </div>

          <div className="percentage-result-grid">

            <div className="percentage-result-box">
              <span>First Value</span>
              <strong>
                {formatNumber(
                  parseNumber(differenceValue1)
                )}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Second Value</span>
              <strong>
                {formatNumber(
                  parseNumber(differenceValue2)
                )}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Absolute Difference</span>
              <strong>
                {formatNumber(
                  Math.abs(
                    parseNumber(differenceValue1) -
                      parseNumber(differenceValue2)
                  )
                )}
              </strong>
            </div>

          </div>

          <div className="percentage-formula-box">

            <strong>Formula</strong>

            <p>
              |A − B| ÷ ((|A| + |B|) ÷ 2) × 100
            </p>

          </div>
        </>
      ) : null;
    }


    if (activeTool === "reverse-percentage") {

      return reversePercentageResult !== null ? (
        <>
          <div className="percentage-main-result">

            <div className="percentage-main-number">
              {formatNumber(
                reversePercentageResult
              )}
            </div>

            <div className="percentage-main-label">
              Estimated original value
            </div>

          </div>

          <div className="percentage-result-grid">

            <div className="percentage-result-box">
              <span>Final Value</span>
              <strong>
                {formatNumber(
                  parseNumber(originalValue)
                )}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Percentage</span>
              <strong>
                {formatNumber(
                  parseNumber(reversePercentage)
                )}%
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Original Value</span>
              <strong>
                {formatNumber(
                  reversePercentageResult
                )}
              </strong>
            </div>

          </div>

          <div className="percentage-formula-box">

            <strong>Formula</strong>

            <p>
              Final Value ÷ (1 + Percentage ÷ 100)
            </p>

          </div>
        </>
      ) : null;
    }


    if (activeTool === "discount") {

      return discountResult !== null ? (
        <>
          <div className="percentage-main-result">

            <div className="percentage-main-number">
              {formatNumber(
                discountResult.finalPrice
              )}
            </div>

            <div className="percentage-main-label">
              Final Price
            </div>

          </div>

          <div className="percentage-result-grid">

            <div className="percentage-result-box">
              <span>Original Price</span>
              <strong>
                {formatNumber(parseNumber(price))}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>You Save</span>
              <strong>
                {formatNumber(
                  discountResult.savings
                )}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Discount</span>
              <strong>
                {formatNumber(
                  parseNumber(discountPercentage)
                )}%
              </strong>
            </div>

          </div>

          <div className="percentage-formula-box">

            <strong>Formula</strong>

            <p>
              Savings = Original Price × Discount ÷ 100
            </p>

          </div>
        </>
      ) : null;
    }


    if (activeTool === "tax") {

      return taxResult !== null ? (
        <>
          <div className="percentage-main-result">

            <div className="percentage-main-number">
              {formatNumber(taxResult.total)}
            </div>

            <div className="percentage-main-label">
              Total After Tax
            </div>

          </div>

          <div className="percentage-result-grid">

            <div className="percentage-result-box">
              <span>Before Tax</span>
              <strong>
                {formatNumber(parseNumber(taxPrice))}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Tax Amount</span>
              <strong>
                {formatNumber(taxResult.taxAmount)}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Tax Rate</span>
              <strong>
                {formatNumber(
                  parseNumber(taxPercentage)
                )}%
              </strong>
            </div>

          </div>
        </>
      ) : null;
    }


    if (activeTool === "tip") {

      return tipResult !== null ? (
        <>
          <div className="percentage-main-result">

            <div className="percentage-main-number">
              {formatNumber(tipResult.total)}
            </div>

            <div className="percentage-main-label">
              Total Bill
            </div>

          </div>

          <div className="percentage-result-grid">

            <div className="percentage-result-box">
              <span>Bill</span>
              <strong>
                {formatNumber(parseNumber(billAmount))}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Tip</span>
              <strong>
                {formatNumber(tipResult.tipAmount)}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Tip Rate</span>
              <strong>
                {formatNumber(
                  parseNumber(tipPercentage)
                )}%
              </strong>
            </div>

          </div>
        </>
      ) : null;
    }


    if (activeTool === "decimal") {

      return decimalToPercentageResult !== null ? (
        <>
          <div className="percentage-main-result">

            <div className="percentage-main-number">
              {formatNumber(
                decimalToPercentageResult
              )}%
            </div>

            <div className="percentage-main-label">
              Percentage
            </div>

          </div>

          <div className="percentage-result-grid">

            <div className="percentage-result-box">
              <span>Decimal</span>
              <strong>
                {formatNumber(
                  parseNumber(decimalValue)
                )}
              </strong>
            </div>

            <div className="percentage-result-box">
              <span>Percentage</span>
              <strong>
                {formatNumber(
                  decimalToPercentageResult
                )}%
              </strong>
            </div>

          </div>

          <div className="percentage-formula-box">

            <strong>Formula</strong>

            <p>
              Decimal × 100 = Percentage
            </p>

          </div>
        </>
      ) : null;
    }

    return null;
  };


  const hasResult =
    activeTool === "percentage-of"
      ? percentageOfResult !== null
      : activeTool === "what-percentage"
      ? whatPercentageResult !== null
      : activeTool === "percentage-change"
      ? percentageChangeResult !== null
      : activeTool === "percentage-difference"
      ? percentageDifferenceResult !== null
      : activeTool === "reverse-percentage"
      ? reversePercentageResult !== null
      : activeTool === "discount"
      ? discountResult !== null
      : activeTool === "tax"
      ? taxResult !== null
      : activeTool === "tip"
      ? tipResult !== null
      : decimalToPercentageResult !== null;


  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>

        <title>
          Percentage Calculator – Increase, Discount, Tax &amp; More | EXAMITICS
        </title>

        <meta
          name="description"
          content="Free advanced percentage calculator for finding percentages, percentage change, increase and decrease, discounts, tax, tips, reverse percentages and more."
        />

        <meta
          name="keywords"
          content="percentage calculator, percent calculator, percentage increase calculator, percentage decrease calculator, percentage change calculator, percentage difference calculator, discount calculator, tax percentage calculator, tip calculator, reverse percentage calculator, percentage of a number, what percentage is one number of another, decimal to percentage"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="author"
          content="EXAMITICS"
        />

        <meta
          name="language"
          content="English"
        />

        <link
          rel="canonical"
          href="https://www.examitics.com/more/percentage-calculator"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="Percentage Calculator – Increase, Discount, Tax & More | EXAMITICS"
        />

        <meta
          property="og:description"
          content="Calculate percentages, percentage change, discounts, tax, tips and reverse percentages with the free EXAMITICS Percentage Calculator."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="EXAMITICS"
        />

        <meta
          property="og:url"
          content="https://www.examitics.com/more/percentage-calculator"
        />

        <meta
          property="og:locale"
          content="en_PK"
        />

        {/* Twitter */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Percentage Calculator – Increase, Discount, Tax & More | EXAMITICS"
        />

        <meta
          name="twitter:description"
          content="Free online percentage calculator for percentages, percentage change, discounts, tax, tips and reverse percentage calculations."
        />


        {/* WebPage Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Percentage Calculator",
            description:
              "Free advanced percentage calculator for calculating percentages, percentage changes, discounts, tax, tips and reverse percentages.",
            url:
              "https://www.examitics.com/more/percentage-calculator",
            publisher: {
              "@type": "Organization",
              name: "EXAMITICS",
              url: "https://www.examitics.com",
            },
          })}
        </script>


        {/* WebApplication Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name:
              "EXAMITICS Percentage Calculator",
            url:
              "https://www.examitics.com/more/percentage-calculator",
            applicationCategory:
              "UtilitiesApplication",
            operatingSystem: "Any",
            description:
              "A free online percentage calculator with percentage, percentage change, discount, tax, tip and reverse percentage calculations.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          })}
        </script>


        {/* FAQ Schema */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name:
                  "How do I calculate a percentage of a number?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Multiply the number by the percentage divided by 100. For example, 20% of 150 is (20 ÷ 100) × 150 = 30.",
                },
              },
              {
                "@type": "Question",
                name:
                  "How do I calculate what percentage one number is of another?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Divide the part by the whole and multiply the result by 100. For example, 25 is 25% of 100.",
                },
              },
              {
                "@type": "Question",
                name:
                  "How do I calculate percentage increase or decrease?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Subtract the original value from the new value, divide the difference by the absolute original value, and multiply by 100. A positive result represents an increase and a negative result represents a decrease.",
                },
              },
              {
                "@type": "Question",
                name:
                  "How do I calculate a discount percentage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Multiply the original price by the discount percentage divided by 100 to find the savings, then subtract the savings from the original price.",
                },
              },
              {
                "@type": "Question",
                name:
                  "How do I calculate tax using a percentage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Multiply the price before tax by the tax rate divided by 100 to find the tax amount, then add the tax to the original price.",
                },
              },
              {
                "@type": "Question",
                name:
                  "How do I reverse a percentage increase?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "If a final value includes a percentage increase, divide the final value by 1 plus the percentage divided by 100 to estimate the original value.",
                },
              },
              {
                "@type": "Question",
                name:
                  "Is the EXAMITICS Percentage Calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. The EXAMITICS Percentage Calculator is available as a free online tool.",
                },
              },
            ],
          })}
        </script>

      </Helmet>


      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.examitics.com/",
          },
          {
            name: "More",
            url: "https://www.examitics.com/more",
          },
          {
            name: "Percentage Calculator",
            url:
              "https://www.examitics.com/more/percentage-calculator",
          },
        ]}
      />


      <Navbar />


      <main className="percentage-calculator-page">

        <div className="container-custom">


          {/* =================================================
              HERO
          ================================================= */}

          <section className="percentage-hero">

            <div className="percentage-badge">
              <span className="percentage-symbol">%</span>
              <span>FREE ONLINE TOOL</span>
            </div>

            <h1>
              Percentage Calculator
            </h1>

            <p>
              Calculate percentages, percentage increase and
              decrease, discounts, tax, tips, reverse
              percentages and more with one fast,
              easy-to-use calculator.
            </p>

          </section>


          {/* =================================================
              TOOL SELECTOR
          ================================================= */}

          <section className="percentage-tool-selector">

            <div className="percentage-tool-selector-heading">

              <span className="more-section-label">
                CHOOSE A CALCULATION
              </span>

              <h2>
                What do you want to calculate?
              </h2>

              <p>
                Select the calculation that matches your
                question. Your inputs and results stay on
                this page.
              </p>

            </div>


            <div className="percentage-tool-grid">

              {tools.map((tool) => (

                <button
                  key={tool.id}
                  type="button"
                  className={`percentage-tool-option ${
                    activeTool === tool.id
                      ? "percentage-tool-option-active"
                      : ""
                  }`}
                  onClick={() =>
                    handleToolChange(tool.id)
                  }
                >

                  <span className="percentage-tool-icon">
                    %
                  </span>

                  <span className="percentage-tool-content">

                    <strong>
                      {tool.title}
                    </strong>

                    <small>
                      {tool.description}
                    </small>

                  </span>

                </button>

              ))}

            </div>

          </section>


          {/* =================================================
              CALCULATOR
          ================================================= */}

          <section
            id="percentage-calculator-card"
            className="percentage-calculator-card"
          >

            <div className="percentage-calculator-header">

              <div className="percentage-calculator-icon">
                %
              </div>

              <div>

                <h2>
                  {activeToolTitle}
                </h2>

                <p>
                  Enter the values below to calculate your
                  result instantly.
                </p>

              </div>

            </div>


            <div className="percentage-form">

              {renderCalculator()}

            </div>


            {error && (

              <div className="percentage-error">

                <FiInfo />

                <span>
                  {error}
                </span>

              </div>

            )}


            <div className="percentage-actions">

              <button
                type="button"
                className="percentage-calculate-btn"
                onClick={handleCalculate}
              >
                Calculate
                <FiArrowRight />
              </button>


              <button
                type="button"
                className="percentage-reset-btn"
                onClick={handleReset}
              >
                <FiRefreshCw />
                Reset
              </button>

            </div>


            <div className="percentage-live-note">

              <FiCheck />

              <span>
                Results update automatically as you enter
                values.
              </span>

            </div>

          </section>


          {/* =================================================
              RESULT
          ================================================= */}

          <section
            id="percentage-result"
            className={`percentage-result ${
              hasResult
                ? "percentage-result-visible"
                : ""
            }`}
          >

            <div className="percentage-result-heading">

              <span className="more-section-label">
                YOUR RESULT
              </span>

              <h2>
                {activeToolTitle}
              </h2>

              {hasResult && (

                <p>
                  Your calculation is shown below with the
                  relevant formula.
                </p>

              )}

            </div>


            {hasResult ? (

              renderResult()

            ) : (

              <div className="percentage-empty-result">

                <FiClock />

                <h3>
                  Enter your values
                </h3>

                <p>
                  Your percentage calculation and formula
                  explanation will appear here.
                </p>

              </div>

            )}

          </section>


          {/* =================================================
              ABOUT
          ================================================= */}

          <section className="percentage-information">

            <div className="percentage-information-content">

              <span className="more-section-label">
                ABOUT THE TOOL
              </span>

              <h2>
                What Is a Percentage Calculator?
              </h2>

              <p>
                A percentage calculator is an online tool
                that solves common calculations involving
                percentages. Instead of manually applying
                percentage formulas, you can enter your
                numbers and receive the result immediately.
              </p>

              <p>
                The EXAMITICS Percentage Calculator combines
                several common percentage calculations in one
                place. You can find a percentage of a number,
                determine what percentage one value is of
                another, calculate percentage change,
                compare values, reverse a percentage change,
                and calculate discounts, tax and tips.
              </p>

            </div>


            <div className="percentage-information-points">

              <div>
                <FiCheck />
                <span>
                  Multiple percentage calculations in one tool
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Automatic results and formulas
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Discount, tax and tip calculations
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Works with decimals and large numbers
                </span>
              </div>

              <div>
                <FiCheck />
                <span>
                  Mobile-friendly and free to use
                </span>
              </div>

            </div>

          </section>


          {/* =================================================
              HOW TO USE
          ================================================= */}

          <section className="percentage-content-section">

            <span className="more-section-label">
              HOW TO USE
            </span>

            <h2>
              How to Use the Percentage Calculator
            </h2>

            <div className="percentage-steps">

              <div className="percentage-step">

                <span className="percentage-step-number">
                  01
                </span>

                <div>

                  <h3>
                    Choose a calculation
                  </h3>

                  <p>
                    Select the calculation that matches your
                    question, such as percentage of a number,
                    percentage change, discount or tax.
                  </p>

                </div>

              </div>


              <div className="percentage-step">

                <span className="percentage-step-number">
                  02
                </span>

                <div>

                  <h3>
                    Enter your values
                  </h3>

                  <p>
                    Enter the numbers requested by the
                    calculator. Use decimals when necessary,
                    such as 12.5 or 0.25.
                  </p>

                </div>

              </div>


              <div className="percentage-step">

                <span className="percentage-step-number">
                  03
                </span>

                <div>

                  <h3>
                    View your result
                  </h3>

                  <p>
                    The calculator displays the answer,
                    supporting values and the formula used
                    to produce the result.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              COMMON FORMULAS
          ================================================= */}

          <section className="percentage-content-section">

            <span className="more-section-label">
              PERCENTAGE FORMULAS
            </span>

            <h2>
              Common Percentage Formulas
            </h2>

            <p>
              Understanding the basic formulas makes it
              easier to choose the correct percentage
              calculation.
            </p>


            <div className="percentage-formula-grid">

              <div className="percentage-formula-card">

                <span>01</span>

                <h3>
                  Percentage of a Number
                </h3>

                <code>
                  Percentage ÷ 100 × Number
                </code>

                <p>
                  Example: 20% of 150 = 30.
                </p>

              </div>


              <div className="percentage-formula-card">

                <span>02</span>

                <h3>
                  What Percentage?
                </h3>

                <code>
                  Part ÷ Whole × 100
                </code>

                <p>
                  Example: 25 is 25% of 100.
                </p>

              </div>


              <div className="percentage-formula-card">

                <span>03</span>

                <h3>
                  Percentage Change
                </h3>

                <code>
                  (New − Original) ÷ |Original| × 100
                </code>

                <p>
                  A positive result indicates an increase;
                  a negative result indicates a decrease.
                </p>

              </div>


              <div className="percentage-formula-card">

                <span>04</span>

                <h3>
                  Percentage Difference
                </h3>

                <code>
                  |A − B| ÷ ((|A| + |B|) ÷ 2) × 100
                </code>

                <p>
                  Useful when neither value is treated as
                  the original or reference value.
                </p>

              </div>

            </div>


            <div className="percentage-note">

              <FiInfo />

              <div>

                <strong>
                  Percentage change vs. percentage difference
                </strong>

                <p>
                  Percentage change uses an original or
                  reference value. Percentage difference
                  compares two values using their average
                  magnitude, so it does not designate one
                  value as the starting point.
                </p>

              </div>

            </div>

          </section>


          {/* =================================================
              USE CASES
          ================================================= */}

          <section className="percentage-content-section">

            <span className="more-section-label">
              USE CASES
            </span>

            <h2>
              What Can You Use a Percentage Calculator For?
            </h2>

            <div className="percentage-use-grid">

              <div className="percentage-use-card">

                <span className="percentage-use-icon">
                  %
                </span>

                <h3>
                  School &amp; Education
                </h3>

                <p>
                  Calculate marks, scores, percentages,
                  changes and ratios when working with
                  academic problems.
                </p>

              </div>


              <div className="percentage-use-card">

                <span className="percentage-use-icon">
                  %
                </span>

                <h3>
                  Shopping &amp; Discounts
                </h3>

                <p>
                  Calculate sale prices, discounts and
                  savings before making a purchase.
                </p>

              </div>


              <div className="percentage-use-card">

                <span className="percentage-use-icon">
                  %
                </span>

                <h3>
                  Finance &amp; Business
                </h3>

                <p>
                  Compare values, calculate percentage
                  changes and estimate tax or other
                  percentage-based amounts.
                </p>

              </div>


              <div className="percentage-use-card">

                <span className="percentage-use-icon">
                  %
                </span>

                <h3>
                  Everyday Calculations
                </h3>

                <p>
                  Work out tips, increases, decreases,
                  proportions and other percentage
                  calculations quickly.
                </p>

              </div>

            </div>

          </section>


          {/* =================================================
              IMPORTANT NOTES
          ================================================= */}

          <section className="percentage-content-section">

            <span className="more-section-label">
              IMPORTANT NOTES
            </span>

            <h2>
              Percentage Calculations Explained
            </h2>

            <p>
              A percentage means “per hundred.” For example,
              25% means 25 out of 100, which can also be
              written as 0.25 or 1/4.
            </p>

            <p>
              Percentage calculations are used in education,
              finance, business, statistics, shopping,
              taxation and many everyday situations. The
              correct formula depends on what the question
              is asking.
            </p>

            <div className="percentage-note">

              <FiInfo />

              <div>

                <strong>
                  Be careful when reversing percentage changes
                </strong>

                <p>
                  A percentage increase and an equal
                  percentage decrease do not cancel each
                  other out. For example, increasing a value
                  by 20% and then decreasing the result by
                  20% does not return exactly to the original
                  value.
                </p>

              </div>

            </div>

          </section>


          {/* =================================================
              FAQ
          ================================================= */}

          <section className="percentage-faq">

            <div className="percentage-faq-heading">

              <span className="more-section-label">
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h2>
                Percentage Calculator FAQs
              </h2>

              <p>
                Answers to common questions about percentages
                and percentage calculations.
              </p>

            </div>


            <div className="percentage-faq-list">

              <details open>

                <summary>
                  How do I calculate a percentage of a number?
                </summary>

                <p>
                  Divide the percentage by 100 and multiply
                  it by the number. For example, 20% of 150
                  is (20 ÷ 100) × 150 = 30.
                </p>

              </details>


              <details>

                <summary>
                  What percentage is one number of another?
                </summary>

                <p>
                  Divide the part by the whole and multiply
                  by 100. For example, 30 is 20% of 150
                  because (30 ÷ 150) × 100 = 20%.
                </p>

              </details>


              <details>

                <summary>
                  How do I calculate percentage increase?
                </summary>

                <p>
                  Subtract the original value from the new
                  value, divide the difference by the original
                  value, and multiply by 100. If the result is
                  positive, the value increased.
                </p>

              </details>


              <details>

                <summary>
                  How do I calculate percentage decrease?
                </summary>

                <p>
                  Subtract the new value from the original
                  value, divide the difference by the original
                  value, and multiply by 100. The calculator
                  can show the magnitude of the decrease.
                </p>

              </details>


              <details>

                <summary>
                  What is the difference between percentage
                  change and percentage difference?
                </summary>

                <p>
                  Percentage change uses an original value as
                  the reference point. Percentage difference
                  compares two values using their average
                  magnitude and does not treat either value as
                  the starting point.
                </p>

              </details>


              <details>

                <summary>
                  How do I calculate a discount?
                </summary>

                <p>
                  Multiply the original price by the discount
                  percentage divided by 100 to find the
                  savings. Subtract the savings from the
                  original price to find the final price.
                </p>

              </details>


              <details>

                <summary>
                  How do I calculate tax from a percentage?
                </summary>

                <p>
                  Multiply the price before tax by the tax
                  rate divided by 100. Add the resulting tax
                  amount to the original price to get the
                  total after tax.
                </p>

              </details>


              <details>

                <summary>
                  How do I calculate a tip?
                </summary>

                <p>
                  Multiply the bill amount by the tip
                  percentage divided by 100. Add the tip to
                  the bill to calculate the total.
                </p>

              </details>


              <details>

                <summary>
                  Is the EXAMITICS Percentage Calculator free?
                </summary>

                <p>
                  Yes. The EXAMITICS Percentage Calculator is
                  free to use and provides multiple percentage
                  calculations in one online tool.
                </p>

              </details>


              <details>

                <summary>
                  Can I use this percentage calculator on my
                phone?
              </summary>

                <p>
                  Yes. The page is designed to work on
                  desktop computers, tablets and mobile
                  phones.
                </p>

              </details>

            </div>

          </section>


          {/* =================================================
              RELATED TOOLS
          ================================================= */}

          <section className="percentage-related">

            <div>

              <span className="more-section-label">
                EXPLORE MORE
              </span>

              <h2>
                More Tools from EXAMITICS
              </h2>

              <p>
                Explore more free calculators and useful
                online tools available from EXAMITICS.
              </p>

            </div>


            <Link
              to="/more"
              className="percentage-related-btn"
            >
              Explore More Tools
              <FiArrowRight />
            </Link>

          </section>


          {/* =================================================
              INTERNAL TOOL LINKS
          ================================================= */}

          <section className="percentage-internal-links">

            <span className="more-section-label">
              MORE CALCULATORS
            </span>

            <div className="percentage-internal-grid">

              <Link to="/more/age-calculator">
                <FiClock />
                <span>
                  Age Calculator
                </span>
                <FiArrowRight />
              </Link>


              <Link to="/more/gpa-calculator">
                <FiBookOpen />
                <span>
                  GPA Calculator
                </span>
                <FiArrowRight />
              </Link>


              <Link to="/more/unit-converter">
                <FiCheck />
                <span>
                  Unit Converter
                </span>
                <FiArrowRight />
              </Link>

            </div>

          </section>

        </div>

      </main>


      <Footer />

    </>
  );
};


export default PercentageCalculator;