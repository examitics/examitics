import { useEffect } from "react";

const SidebarAd160x600 = () => {
  useEffect(() => {
    // Prevent multiple injections in SPA
    if (window.__ad_160x600_loaded__) return;
    window.__ad_160x600_loaded__ = true;

    // Define ad config BEFORE script loads
    window.atOptions = {
      key: "c1c8b5bc48181d37bb7fab683cc925f5",
      format: "iframe",
      height: 600,
      width: 160,
      params: {},
    };

    // Create script only once
    const script = document.createElement("script");
    script.src =
      "https://www.highperformanceformat.com/c1c8b5bc48181d37bb7fab683cc925f5/invoke.js";
    script.async = true;
    script.type = "text/javascript";

    document.body.appendChild(script);

    // Cleanup not removing script (important for ad stability)
  }, []);

  return (
    <div
      style={{
        width: "160px",
        height: "600px",
        minHeight: "600px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

export default SidebarAd160x600;