import { useEffect, useRef } from "react";

const Adsterra728x90 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Prevent double load safely
    if (container.dataset.loaded === "true") return;
    container.dataset.loaded = "true";

    const optionsScript = document.createElement("script");

    optionsScript.text = `
      var atOptions = {
        key: "b8ac6ccae399e264e416bd733f64cba2",
        format: "iframe",
        height: 90,
        width: 728,
        params: {}
      };
    `;

    const invokeScript = document.createElement("script");
    invokeScript.src =
      "https://www.highperformanceformat.com/b8ac6ccae399e264e416bd733f64cba2/invoke.js";
    invokeScript.async = true;

    container.appendChild(optionsScript);
    container.appendChild(invokeScript);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
        minHeight: "90px",
      }}
    />
  );
};

export default Adsterra728x90;