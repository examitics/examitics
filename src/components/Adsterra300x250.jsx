import { useEffect, useRef } from "react";

const Adsterra300x250 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    if (container.dataset.loaded === "true") return;
    container.dataset.loaded = "true";

    const optionsScript = document.createElement("script");

    optionsScript.text = `
      var atOptions = {
        key: "b767e415e09c8921b6427eb63f2179bf",
        format: "iframe",
        height: 250,
        width: 300,
        params: {}
      };
    `;

    const invokeScript = document.createElement("script");
    invokeScript.src =
      "https://www.highperformanceformat.com/b767e415e09c8921b6427eb63f2179bf/invoke.js";
    invokeScript.async = true;

    container.appendChild(optionsScript);
    container.appendChild(invokeScript);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "300px",
        minHeight: "250px",
        margin: "20px auto",
      }}
    />
  );
};

export default Adsterra300x250;