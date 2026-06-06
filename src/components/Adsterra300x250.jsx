// Adsterra300x250.jsx
import { useEffect } from "react";

const Adsterra300x250 = () => {
  useEffect(() => {
    const container = document.getElementById(
      "adsterra-300x250-container"
    );

    if (!container) return;

    // Prevent duplicate loading
    if (container.childNodes.length > 0) return;

    const optionsScript = document.createElement("script");

    optionsScript.innerHTML = `
      atOptions = {
        'key' : 'b767e415e09c8921b6427eb63f2179bf',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
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
      id="adsterra-300x250-container"
      style={{
        width: "300px",
        minHeight: "250px",
        margin: "20px auto",
      }}
    />
  );
};

export default Adsterra300x250;