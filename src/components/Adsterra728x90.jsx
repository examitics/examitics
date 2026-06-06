// Adsterra728x90.jsx
import { useEffect } from "react";

const Adsterra728x90 = () => {
  useEffect(() => {
    const container = document.getElementById("adsterra-728x90");

    if (!container || container.childNodes.length > 0) return;

    const optionsScript = document.createElement("script");

    optionsScript.innerHTML = `
      atOptions = {
        'key' : 'b8ac6ccae399e264e416bd733f64cba2',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
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
      id="adsterra-728x90"
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