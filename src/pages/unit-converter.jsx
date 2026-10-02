import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";
import {
  FiCheck,
  FiChevronDown,
  FiCopy,
  FiInfo,
  FiRefreshCw,
  FiSearch,
} from "react-icons/fi";
import "../styles/unit-converter.css";

/*
 * EXAMITICS Unit Converter
 *
 * Conversion factors are based on SI/common measurement relationships.
 * Temperature uses formulas rather than a simple multiplication factor.
 *
 * Data storage intentionally distinguishes decimal SI-style units
 * (kB, MB, GB) from binary units (KiB, MiB, GiB).
 */

const UNIT_CATEGORIES = {
  length: {
    name: "Length",
    description: "Convert distance and length measurements.",
    units: {
      millimeter: {
        name: "Millimeter",
        symbol: "mm",
        factor: 0.001,
      },
      centimeter: {
        name: "Centimeter",
        symbol: "cm",
        factor: 0.01,
      },
      meter: {
        name: "Meter",
        symbol: "m",
        factor: 1,
      },
      kilometer: {
        name: "Kilometer",
        symbol: "km",
        factor: 1000,
      },
      inch: {
        name: "Inch",
        symbol: "in",
        factor: 0.0254,
      },
      foot: {
        name: "Foot",
        symbol: "ft",
        factor: 0.3048,
      },
      yard: {
        name: "Yard",
        symbol: "yd",
        factor: 0.9144,
      },
      mile: {
        name: "Mile",
        symbol: "mi",
        factor: 1609.344,
      },
      nauticalMile: {
        name: "Nautical Mile",
        symbol: "nmi",
        factor: 1852,
      },
    },
  },

  mass: {
    name: "Weight & Mass",
    description: "Convert common metric and imperial weight units.",
    units: {
      milligram: {
        name: "Milligram",
        symbol: "mg",
        factor: 0.000001,
      },
      gram: {
        name: "Gram",
        symbol: "g",
        factor: 0.001,
      },
      kilogram: {
        name: "Kilogram",
        symbol: "kg",
        factor: 1,
      },
      metricTon: {
        name: "Metric Ton",
        symbol: "t",
        factor: 1000,
      },
      ounce: {
        name: "Ounce",
        symbol: "oz",
        factor: 0.028349523125,
      },
      pound: {
        name: "Pound",
        symbol: "lb",
        factor: 0.45359237,
      },
      stone: {
        name: "Stone",
        symbol: "st",
        factor: 6.35029318,
      },
      shortTon: {
        name: "US Short Ton",
        symbol: "short ton",
        factor: 907.18474,
      },
    },
  },

  temperature: {
    name: "Temperature",
    description: "Convert Celsius, Fahrenheit and Kelvin.",
    units: {
      celsius: {
        name: "Celsius",
        symbol: "°C",
      },
      fahrenheit: {
        name: "Fahrenheit",
        symbol: "°F",
      },
      kelvin: {
        name: "Kelvin",
        symbol: "K",
      },
    },
  },

  area: {
    name: "Area",
    description: "Convert land, surface and area measurements.",
    units: {
      squareMillimeter: {
        name: "Square Millimeter",
        symbol: "mm²",
        factor: 0.000001,
      },
      squareCentimeter: {
        name: "Square Centimeter",
        symbol: "cm²",
        factor: 0.0001,
      },
      squareMeter: {
        name: "Square Meter",
        symbol: "m²",
        factor: 1,
      },
      squareKilometer: {
        name: "Square Kilometer",
        symbol: "km²",
        factor: 1000000,
      },
      squareInch: {
        name: "Square Inch",
        symbol: "in²",
        factor: 0.00064516,
      },
      squareFoot: {
        name: "Square Foot",
        symbol: "ft²",
        factor: 0.09290304,
      },
      squareYard: {
        name: "Square Yard",
        symbol: "yd²",
        factor: 0.83612736,
      },
      acre: {
        name: "Acre",
        symbol: "acre",
        factor: 4046.8564224,
      },
      hectare: {
        name: "Hectare",
        symbol: "ha",
        factor: 10000,
      },
      squareMile: {
        name: "Square Mile",
        symbol: "mi²",
        factor: 2589988.110336,
      },
    },
  },

  volume: {
    name: "Volume",
    description: "Convert liters, gallons, cups and other volume units.",
    units: {
      milliliter: {
        name: "Milliliter",
        symbol: "mL",
        factor: 0.001,
      },
      liter: {
        name: "Liter",
        symbol: "L",
        factor: 1,
      },
      cubicMeter: {
        name: "Cubic Meter",
        symbol: "m³",
        factor: 1000,
      },
      cubicCentimeter: {
        name: "Cubic Centimeter",
        symbol: "cm³",
        factor: 0.001,
      },
      cubicInch: {
        name: "Cubic Inch",
        symbol: "in³",
        factor: 0.016387064,
      },
      cubicFoot: {
        name: "Cubic Foot",
        symbol: "ft³",
        factor: 28.316846592,
      },
      usFluidOunce: {
        name: "US Fluid Ounce",
        symbol: "fl oz",
        factor: 0.0295735295625,
      },
      usCup: {
        name: "US Cup",
        symbol: "cup",
        factor: 0.2365882365,
      },
      usPint: {
        name: "US Pint",
        symbol: "pt",
        factor: 0.473176473,
      },
      usQuart: {
        name: "US Quart",
        symbol: "qt",
        factor: 0.946352946,
      },
      usGallon: {
        name: "US Gallon",
        symbol: "gal",
        factor: 3.785411784,
      },
    },
  },

  speed: {
    name: "Speed",
    description: "Convert kilometers per hour, miles per hour and more.",
    units: {
      meterPerSecond: {
        name: "Meter per Second",
        symbol: "m/s",
        factor: 1,
      },
      kilometerPerHour: {
        name: "Kilometer per Hour",
        symbol: "km/h",
        factor: 0.2777777777777778,
      },
      milePerHour: {
        name: "Mile per Hour",
        symbol: "mph",
        factor: 0.44704,
      },
      footPerSecond: {
        name: "Foot per Second",
        symbol: "ft/s",
        factor: 0.3048,
      },
      knot: {
        name: "Knot",
        symbol: "kn",
        factor: 0.5144444444444445,
      },
    },
  },

  time: {
    name: "Time",
    description: "Convert seconds, minutes, hours, days and weeks.",
    units: {
      millisecond: {
        name: "Millisecond",
        symbol: "ms",
        factor: 0.001,
      },
      second: {
        name: "Second",
        symbol: "s",
        factor: 1,
      },
      minute: {
        name: "Minute",
        symbol: "min",
        factor: 60,
      },
      hour: {
        name: "Hour",
        symbol: "h",
        factor: 3600,
      },
      day: {
        name: "Day",
        symbol: "day",
        factor: 86400,
      },
      week: {
        name: "Week",
        symbol: "week",
        factor: 604800,
      },
    },
  },

  data: {
    name: "Digital Data",
    description:
      "Convert bits, bytes and decimal or binary digital storage units.",
    units: {
      bit: {
        name: "Bit",
        symbol: "bit",
        factor: 1 / 8,
      },
      byte: {
        name: "Byte",
        symbol: "B",
        factor: 1,
      },
      kilobyte: {
        name: "Kilobyte",
        symbol: "kB",
        factor: 1000,
      },
      megabyte: {
        name: "Megabyte",
        symbol: "MB",
        factor: 1000000,
      },
      gigabyte: {
        name: "Gigabyte",
        symbol: "GB",
        factor: 1000000000,
      },
      terabyte: {
        name: "Terabyte",
        symbol: "TB",
        factor: 1000000000000,
      },
      kibibyte: {
        name: "Kibibyte",
        symbol: "KiB",
        factor: 1024,
      },
      mebibyte: {
        name: "Mebibyte",
        symbol: "MiB",
        factor: 1048576,
      },
      gibibyte: {
        name: "Gibibyte",
        symbol: "GiB",
        factor: 1073741824,
      },
      tebibyte: {
        name: "Tebibyte",
        symbol: "TiB",
        factor: 1099511627776,
      },
    },
  },

  pressure: {
    name: "Pressure",
    description: "Convert pascals, bar, PSI, atmospheres and more.",
    units: {
      pascal: {
        name: "Pascal",
        symbol: "Pa",
        factor: 1,
      },
      kilopascal: {
        name: "Kilopascal",
        symbol: "kPa",
        factor: 1000,
      },
      megapascal: {
        name: "Megapascal",
        symbol: "MPa",
        factor: 1000000,
      },
      bar: {
        name: "Bar",
        symbol: "bar",
        factor: 100000,
      },
      psi: {
        name: "Pound per Square Inch",
        symbol: "psi",
        factor: 6894.757293168,
      },
      atmosphere: {
        name: "Standard Atmosphere",
        symbol: "atm",
        factor: 101325,
      },
      mmHg: {
        name: "Millimeter of Mercury",
        symbol: "mmHg",
        factor: 133.322387415,
      },
    },
  },

  energy: {
    name: "Energy",
    description: "Convert joules, calories, watt-hours and more.",
    units: {
      joule: {
        name: "Joule",
        symbol: "J",
        factor: 1,
      },
      kilojoule: {
        name: "Kilojoule",
        symbol: "kJ",
        factor: 1000,
      },
      calorie: {
        name: "Calorie",
        symbol: "cal",
        factor: 4.184,
      },
      kilocalorie: {
        name: "Kilocalorie",
        symbol: "kcal",
        factor: 4184,
      },
      wattHour: {
        name: "Watt-hour",
        symbol: "Wh",
        factor: 3600,
      },
      kilowattHour: {
        name: "Kilowatt-hour",
        symbol: "kWh",
        factor: 3600000,
      },
      electronVolt: {
        name: "Electronvolt",
        symbol: "eV",
        factor: 1.602176634e-19,
      },
    },
  },
};

const CATEGORY_KEYS = Object.keys(UNIT_CATEGORIES);

/*
 * Quick conversions now use actual internal unit keys.
 * This avoids mismatches such as:
 * "inches" vs "in"
 * "lbs" vs "lb"
 * "liters" vs "L"
 * "gallons" vs "gal"
 */
const QUICK_CONVERSIONS = [
  {
    categoryName: "Length",
    fromLabel: "cm",
    toLabel: "inches",
    categoryKey: "length",
    fromKey: "centimeter",
    toKey: "inch",
  },
  {
    categoryName: "Length",
    fromLabel: "km",
    toLabel: "miles",
    categoryKey: "length",
    fromKey: "kilometer",
    toKey: "mile",
  },
  {
    categoryName: "Weight",
    fromLabel: "kg",
    toLabel: "lbs",
    categoryKey: "mass",
    fromKey: "kilogram",
    toKey: "pound",
  },
  {
    categoryName: "Weight",
    fromLabel: "lbs",
    toLabel: "kg",
    categoryKey: "mass",
    fromKey: "pound",
    toKey: "kilogram",
  },
  {
    categoryName: "Temperature",
    fromLabel: "°C",
    toLabel: "°F",
    categoryKey: "temperature",
    fromKey: "celsius",
    toKey: "fahrenheit",
  },
  {
    categoryName: "Temperature",
    fromLabel: "°F",
    toLabel: "°C",
    categoryKey: "temperature",
    fromKey: "fahrenheit",
    toKey: "celsius",
  },
  {
    categoryName: "Volume",
    fromLabel: "liters",
    toLabel: "gallons",
    categoryKey: "volume",
    fromKey: "liter",
    toKey: "usGallon",
  },
  {
    categoryName: "Speed",
    fromLabel: "km/h",
    toLabel: "mph",
    categoryKey: "speed",
    fromKey: "kilometerPerHour",
    toKey: "milePerHour",
  },
  {
    categoryName: "Area",
    fromLabel: "m²",
    toLabel: "ft²",
    categoryKey: "area",
    fromKey: "squareMeter",
    toKey: "squareFoot",
  },
  {
    categoryName: "Pressure",
    fromLabel: "bar",
    toLabel: "psi",
    categoryKey: "pressure",
    fromKey: "bar",
    toKey: "psi",
  },
  {
    categoryName: "Data",
    fromLabel: "GB",
    toLabel: "MB",
    categoryKey: "data",
    fromKey: "gigabyte",
    toKey: "megabyte",
  },
];

function convertTemperature(value, from, to) {
  let celsius;

  if (from === "celsius") {
    celsius = value;
  } else if (from === "fahrenheit") {
    celsius = (value - 32) / 1.8;
  } else {
    celsius = value - 273.15;
  }

  if (to === "celsius") {
    return celsius;
  }

  if (to === "fahrenheit") {
    return celsius * 1.8 + 32;
  }

  return celsius + 273.15;
}

function convertValue(value, category, from, to) {
  if (!Number.isFinite(value)) return null;

  if (category === "temperature") {
    return convertTemperature(value, from, to);
  }

  const fromUnit = UNIT_CATEGORIES[category].units[from];
  const toUnit = UNIT_CATEGORIES[category].units[to];

  if (!fromUnit || !toUnit) return null;

  return (value * fromUnit.factor) / toUnit.factor;
}

function formatNumber(value) {
  if (!Number.isFinite(value)) return "";

  if (
    Math.abs(value) >= 1e12 ||
    (Math.abs(value) > 0 && Math.abs(value) < 1e-9)
  ) {
    return value.toExponential(8).replace(/\.?0+e/, "e");
  }

  return Number(
    value.toFixed(Math.abs(value) >= 1000 ? 6 : 10)
  ).toLocaleString("en-US", {
    maximumFractionDigits: 10,
  });
}

function getDefaultUnits(category) {
  const keys = Object.keys(UNIT_CATEGORIES[category].units);

  return {
    from: keys[0],
    to: keys[1] || keys[0],
  };
}

function UnitConverter() {
  const [category, setCategory] = useState("length");
  const defaults = getDefaultUnits("length");

  const [value, setValue] = useState("1");
  const [fromUnit, setFromUnit] = useState(defaults.from);
  const [toUnit, setToUnit] = useState(defaults.to);
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const currentCategory = UNIT_CATEGORIES[category];

  const result = useMemo(() => {
    const numericValue = Number(value);

    if (value === "" || !Number.isFinite(numericValue)) {
      return null;
    }

    return convertValue(numericValue, category, fromUnit, toUnit);
  }, [value, category, fromUnit, toUnit]);

  const filteredCategories = CATEGORY_KEYS.filter((key) => {
    if (!searchTerm.trim()) return true;

    const term = searchTerm.toLowerCase();

    return (
      UNIT_CATEGORIES[key].name.toLowerCase().includes(term) ||
      Object.values(UNIT_CATEGORIES[key].units).some((unit) =>
        `${unit.name} ${unit.symbol}`.toLowerCase().includes(term)
      )
    );
  });

  const changeCategory = (newCategory) => {
    setCategory(newCategory);

    const newDefaults = getDefaultUnits(newCategory);

    setFromUnit(newDefaults.from);
    setToUnit(newDefaults.to);
    setCopied(false);
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setCopied(false);
  };

  const resetConverter = () => {
    const newDefaults = getDefaultUnits(category);

    setValue("1");
    setFromUnit(newDefaults.from);
    setToUnit(newDefaults.to);
    setCopied(false);
  };

  const copyResult = async () => {
    if (result === null) return;

    const from = currentCategory.units[fromUnit];
    const to = currentCategory.units[toUnit];

    const text = `${value} ${from.symbol} = ${formatNumber(result)} ${to.symbol}`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  const unitOptions = Object.entries(currentCategory.units);

  const fromUnitInfo = currentCategory.units[fromUnit];
  const toUnitInfo = currentCategory.units[toUnit];

  const pageUrl = "https://www.examitics.com/more/unit-converter";

  const faqItems = [
    {
      question: "What is a unit converter?",
      answer:
        "A unit converter changes a numerical value from one measurement unit to another equivalent unit, such as centimeters to inches, kilograms to pounds, or Celsius to Fahrenheit.",
    },
    {
      question: "How does the EXAMITICS Unit Converter work?",
      answer:
        "The converter uses standard conversion relationships for each measurement category. Most conversions use a conversion factor, while temperature conversions use the appropriate mathematical formulas.",
    },
    {
      question: "How do I convert kilograms to pounds?",
      answer:
        "Enter the value in kilograms, choose Kilogram as the starting unit and Pound as the target unit. The converter calculates the equivalent mass automatically.",
    },
    {
      question: "How do I convert centimeters to inches?",
      answer:
        "Enter the measurement in centimeters and select Inch as the target unit. One inch is exactly 2.54 centimeters.",
    },
    {
      question: "How do I convert Celsius to Fahrenheit?",
      answer:
        "The Celsius-to-Fahrenheit conversion uses the formula °F = (°C × 9/5) + 32.",
    },
    {
      question: "What is the difference between GB and GiB?",
      answer:
        "GB is a decimal unit based on powers of 1000, while GiB is a binary unit based on powers of 1024. They represent different quantities and should not be treated as interchangeable.",
    },
    {
      question: "Does the converter work on mobile?",
      answer:
        "Yes. The EXAMITICS Unit Converter is designed to work on desktop, tablet and mobile screens.",
    },
    {
      question: "Do I need to create an account?",
      answer:
        "No. The unit converter is designed as a free browser-based tool and does not require an account to perform conversions.",
    }
  ];

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "EXAMITICS Unit Converter",
    url: pageUrl,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    description:
      "Free online unit converter for length, weight, temperature, area, volume, speed, time, digital data, pressure and energy.",
    publisher: {
      "@type": "Organization",
      name: "EXAMITICS",
      url: "https://www.examitics.com",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>
          Unit Converter – Length, Weight, Temperature & More | EXAMITICS
        </title>

        <meta
          name="description"
          content="Free online unit converter for length, weight, mass, temperature, area, volume, speed, time, data, pressure and energy. Convert cm to inches, kg to lbs, °C to °F, km to miles and more instantly."
        />

        <meta
          name="keywords"
          content="unit converter, unit conversion, online unit converter, length converter, weight converter, mass converter, temperature converter, cm to inches, inches to cm, kg to lbs, lbs to kg, km to miles, miles to km, Celsius to Fahrenheit, Fahrenheit to Celsius, liters to gallons, speed converter, area converter, pressure converter, data converter"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />
        <meta name="author" content="EXAMITICS" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#2563eb" />

        <link rel="canonical" href={pageUrl} />

        <meta
          property="og:title"
          content="Free Unit Converter – Length, Weight, Temperature & More"
        />
        <meta
          property="og:description"
          content="Convert length, weight, temperature, area, volume, speed, time, digital data, pressure and energy units instantly with the free EXAMITICS Unit Converter."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="EXAMITICS" />
        <meta property="og:locale" content="en_US" />

        <meta
          name="twitter:title"
          content="Free Unit Converter | EXAMITICS"
        />
        <meta
          name="twitter:description"
          content="Convert common measurement units instantly: cm to inches, kg to lbs, km to miles, Celsius to Fahrenheit and more."
        />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify(webApplicationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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
            name: "Unit Converter",
            url: pageUrl,
          },
        ]}
      />

      <Navbar />

      <main className="unit-converter-page">
        <section className="unit-hero">
          <div className="unit-container">
            <div className="unit-hero-content">
              <div className="unit-badge">
                <span className="unit-badge-dot" />
                FREE ONLINE TOOL
              </div>

              <h1>Unit Converter</h1>

              <p>
                Convert length, weight, temperature, area, volume, speed, time,
                digital data, pressure and energy units instantly.
              </p>

              <div className="unit-hero-links">
                <a href="#converter">Start Converting</a>
                <a href="#conversion-guide">Conversion Guide</a>
              </div>
            </div>
          </div>
        </section>

        <section className="unit-main" id="converter">
          <div className="unit-container">
            <div className="unit-layout">
              <aside className="unit-sidebar">
                <div className="unit-sidebar-header">
                  <h2>Conversion Categories</h2>

                  <div className="unit-search">
                    <FiSearch aria-hidden="true" />

                    <input
                      type="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search units..."
                      aria-label="Search conversion categories and units"
                    />
                  </div>
                </div>

                <div className="unit-category-list">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((key) => (
                      <button
                        type="button"
                        key={key}
                        className={`unit-category-button ${
                          category === key ? "active" : ""
                        }`}
                        onClick={() => changeCategory(key)}
                        aria-pressed={category === key}
                      >
                        <span>{UNIT_CATEGORIES[key].name}</span>

                        <FiChevronDown
                          aria-hidden="true"
                          className="unit-category-icon"
                        />
                      </button>
                    ))
                  ) : (
                    <div className="unit-no-results">
                      <span>No matching units</span>
                      <small>Try another search.</small>
                    </div>
                  )}
                </div>
              </aside>

              <div className="unit-calculator-card">
                <div className="unit-card-heading">
                  <div>
                    <span className="unit-card-label">CONVERT</span>

                    <h2>{currentCategory.name}</h2>

                    <p>{currentCategory.description}</p>
                  </div>

                  <button
                    type="button"
                    className="unit-reset-button"
                    onClick={resetConverter}
                    title="Reset converter"
                    aria-label="Reset converter"
                  >
                    <FiRefreshCw aria-hidden="true" />
                    <span>Reset</span>
                  </button>
                </div>

                <div className="unit-form">
                  <div className="unit-input-group">
                    <label htmlFor="unit-value">Value</label>

                    <input
                      id="unit-value"
                      type="number"
                      inputMode="decimal"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="Enter a value"
                      aria-label="Value to convert"
                    />
                  </div>

                  <div className="unit-select-group">
                    <label htmlFor="from-unit">From</label>

                    <select
                      id="from-unit"
                      value={fromUnit}
                      onChange={(e) => {
                        setFromUnit(e.target.value);
                        setCopied(false);
                      }}
                    >
                      {unitOptions.map(([key, unit]) => (
                        <option value={key} key={key}>
                          {unit.name} ({unit.symbol})
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    className="unit-swap-button"
                    onClick={swapUnits}
                    aria-label="Swap conversion units"
                    title="Swap units"
                  >
                    <span aria-hidden="true">↔</span>
                  </button>

                  <div className="unit-select-group">
                    <label htmlFor="to-unit">To</label>

                    <select
                      id="to-unit"
                      value={toUnit}
                      onChange={(e) => {
                        setToUnit(e.target.value);
                        setCopied(false);
                      }}
                    >
                      {unitOptions.map(([key, unit]) => (
                        <option value={key} key={key}>
                          {unit.name} ({unit.symbol})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="unit-result-card" aria-live="polite">
                  <div className="unit-result-top">
                    <span>Result</span>

                    {result !== null && (
                      <button
                        type="button"
                        className="unit-copy-button"
                        onClick={copyResult}
                        aria-label={
                          copied ? "Conversion copied" : "Copy conversion result"
                        }
                      >
                        {copied ? (
                          <>
                            <FiCheck aria-hidden="true" />
                            Copied
                          </>
                        ) : (
                          <>
                            <FiCopy aria-hidden="true" />
                            Copy
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {result !== null ? (
                    <>
                      <div className="unit-result-value">
                        <span>{formatNumber(result)}</span>
                        <small>{toUnitInfo.symbol}</small>
                      </div>

                      <p className="unit-result-equation">
                        {formatNumber(Number(value))} {fromUnitInfo.symbol}
                        {" = "}
                        {formatNumber(result)} {toUnitInfo.symbol}
                      </p>
                    </>
                  ) : (
                    <div className="unit-empty-result">
                      Enter a valid number to see the conversion.
                    </div>
                  )}
                </div>

                <div className="unit-privacy-note">
                  <FiInfo aria-hidden="true" />

                  <span>
                    Conversion calculations are performed directly in your
                    browser. No account is required.
                  </span>
                </div>
              </div>
            </div>

            <div className="quick-conversions">
              <div className="section-heading">
                <span className="section-eyebrow">
                  POPULAR CONVERSIONS
                </span>

                <h2>Quick Unit Conversion Searches</h2>

                <p>
                  Common conversions people use for school, work, travel,
                  cooking, engineering and everyday measurements.
                </p>
              </div>

              <div className="quick-grid">
                {QUICK_CONVERSIONS.map((item) => (
                  <button
                    type="button"
                    key={`${item.categoryKey}-${item.fromKey}-${item.toKey}`}
                    onClick={() => {
                      setCategory(item.categoryKey);
                      setFromUnit(item.fromKey);
                      setToUnit(item.toKey);
                      setValue("1");
                      setCopied(false);
                    }}
                    aria-label={`Convert 1 ${item.fromLabel} to ${item.toLabel}`}
                  >
                    <span>{item.categoryName}</span>

                    <strong>
                      1 {item.fromLabel}
                      <span className="quick-arrow" aria-hidden="true">
                        →
                      </span>
                      {item.toLabel}
                    </strong>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="unit-content-section" id="conversion-guide">
          <div className="unit-container">
            <div className="unit-content">
              <div className="section-heading">
                <span className="section-eyebrow">
                  UNIT CONVERSION GUIDE
                </span>

                <h2>Convert Measurements Quickly and Accurately</h2>

                <p>
                  Unit conversion is the process of expressing the same
                  quantity using a different measurement unit. For example,
                  distance can be expressed in meters, kilometers, feet or
                  miles, while mass can be expressed in grams, kilograms,
                  ounces or pounds.
                </p>
              </div>

              <div className="unit-info-grid">
                <article className="unit-info-card">
                  <h3>Length Conversion</h3>

                  <p>
                    Convert millimeters, centimeters, meters and kilometers
                    alongside inches, feet, yards, miles and nautical miles.
                  </p>

                  <p>
                    Popular searches include <strong>cm to inches</strong>,
                    <strong> inches to cm</strong>,{" "}
                    <strong>meters to feet</strong> and{" "}
                    <strong>km to miles</strong>.
                  </p>
                </article>

                <article className="unit-info-card">
                  <h3>Weight & Mass Conversion</h3>

                  <p>
                    Convert between metric and common imperial mass units such
                    as grams, kilograms, ounces, pounds, stones and tons.
                  </p>

                  <p>
                    Popular searches include <strong>kg to lbs</strong>,
                    <strong> lbs to kg</strong> and{" "}
                    <strong>grams to ounces</strong>.
                  </p>
                </article>

                <article className="unit-info-card">
                  <h3>Temperature Conversion</h3>

                  <p>
                    Convert between Celsius, Fahrenheit and Kelvin using the
                    appropriate temperature formulas rather than a simple
                    multiplication factor.
                  </p>

                  <p>
                    Popular searches include{" "}
                    <strong>Celsius to Fahrenheit</strong> and{" "}
                    <strong>Fahrenheit to Celsius</strong>.
                  </p>
                </article>

                <article className="unit-info-card">
                  <h3>Area Conversion</h3>

                  <p>
                    Convert square millimeters, centimeters, meters and
                    kilometers into square inches, feet, yards, miles, acres
                    and hectares.
                  </p>
                </article>

                <article className="unit-info-card">
                  <h3>Volume Conversion</h3>

                  <p>
                    Convert liters and milliliters to cubic measurements and
                    common US volume units such as cups, pints, quarts and
                    gallons.
                  </p>
                </article>

                <article className="unit-info-card">
                  <h3>Speed Conversion</h3>

                  <p>
                    Convert meters per second, kilometers per hour, miles per
                    hour, feet per second and knots.
                  </p>
                </article>

                <article className="unit-info-card">
                  <h3>Time Conversion</h3>

                  <p>
                    Convert milliseconds, seconds, minutes, hours, days and
                    weeks without manually calculating conversion factors.
                  </p>
                </article>

                <article className="unit-info-card">
                  <h3>Digital Data Conversion</h3>

                  <p>
                    Convert bits, bytes, decimal storage units such as MB and
                    GB, and binary units such as MiB and GiB.
                  </p>
                </article>

                <article className="unit-info-card">
                  <h3>Pressure Conversion</h3>

                  <p>
                    Convert pascals, kilopascals, megapascals, bar, PSI,
                    atmospheres and millimeters of mercury.
                  </p>
                </article>

                <article className="unit-info-card">
                  <h3>Energy Conversion</h3>

                  <p>
                    Convert joules, kilojoules, calories, kilocalories,
                    watt-hours, kilowatt-hours and electronvolts.
                  </p>
                </article>
              </div>

              <div className="unit-methodology">
                <div className="unit-methodology-icon">
                  <FiInfo aria-hidden="true" />
                </div>

                <div>
                  <h3>How Unit Conversion Works</h3>

                  <p>
                    Many unit conversions use a fixed conversion factor. The
                    original value is multiplied by the factor for the source
                    unit and divided by the factor for the target unit.
                    Temperature is different because Celsius, Fahrenheit and
                    Kelvin have different zero points, so temperature requires
                    a formula.
                  </p>

                  <p>
                    For example, one inch is exactly 2.54 centimeters, while
                    Celsius to Fahrenheit uses the formula:
                  </p>

                  <div className="formula-box">
                    °F = (°C × 9/5) + 32
                  </div>
                </div>
              </div>

              <div className="seo-topic-section">
                <h2>Common Unit Conversion Questions</h2>

                <div className="conversion-examples">
                  <div>
                    <strong>How many inches are in a centimeter?</strong>
                    <span>1 cm = 0.3937007874 in</span>
                  </div>

                  <div>
                    <strong>How many centimeters are in an inch?</strong>
                    <span>1 in = 2.54 cm</span>
                  </div>

                  <div>
                    <strong>How many pounds are in a kilogram?</strong>
                    <span>1 kg = 2.2046226218 lb</span>
                  </div>

                  <div>
                    <strong>How many kilometers are in a mile?</strong>
                    <span>1 mi = 1.609344 km</span>
                  </div>

                  <div>
                    <strong>How many Fahrenheit degrees are 20°C?</strong>
                    <span>20°C = 68°F</span>
                  </div>

                  <div>
                    <strong>How many liters are in a US gallon?</strong>
                    <span>1 US gal = 3.785411784 L</span>
                  </div>
                </div>
              </div>

              <div className="faq-section">
                <div className="section-heading">
                  <span className="section-eyebrow">FAQ</span>

                  <h2>Unit Converter Frequently Asked Questions</h2>
                </div>

                <div className="faq-list">
                  {faqItems.map((item) => (
                    <details className="faq-item" key={item.question}>
                      <summary>{item.question}</summary>

                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div className="related-tools">
                <div>
                  <span className="section-eyebrow">
                    MORE FREE TOOLS
                  </span>

                  <h2>Explore More EXAMITICS Tools</h2>

                  <p>
                    Use our other free online calculators and utilities for
                    everyday calculations.
                  </p>
                </div>

                <div className="related-tool-links">
                  <Link to="/more/age-calculator">
                    Age Calculator
                  </Link>

                  <Link to="/more/bmi-calculator">
                    BMI Calculator
                  </Link>

                  <Link to="/more">
                    All Tools
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default UnitConverter;