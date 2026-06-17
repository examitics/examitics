import { useEffect } from "react";

const SidebarAd160x300 = () => {
  useEffect(() => {
    // prevent duplicate injection per mount
    window.atOptions = {
      key: "551c80cc900e9fb3b297811274021e0f",
      format: "iframe",
      height: 300,
      width: 160,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://www.highperformanceformat.com/551c80cc900e9fb3b297811274021e0f/invoke.js";
    script.async = true;

    const container = document.body;
    container.appendChild(script);

    return () => {
      // optional cleanup (important for SPA stability)
      script.remove();
    };
  }, []);

  return (
    <div
      style={{
        width: "160px",
        height: "300px",
        margin: "0 auto",
      }}
    />
  );
};

export default SidebarAd160x300;