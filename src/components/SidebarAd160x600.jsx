import { useEffect } from "react";

const SidebarAd160x600 = () => {
  useEffect(() => {
    if (window.__ad160x600_loaded__) return;

    window.__ad160x600_loaded__ = true;

    window.atOptions = {
      key: "c1c8b5bc48181d37bb7fab683cc925f5",
      format: "iframe",
      height: 600,
      width: 160,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://www.highperformanceformat.com/c1c8b5bc48181d37bb7fab683cc925f5/invoke.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return <div style={{ width: 160, height: 600 }} />;
};

export default SidebarAd160x600;