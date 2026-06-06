import { useEffect } from "react";

const AdsterraNativeBanner = () => {
  useEffect(() => {
    // Prevent duplicate script loading
    if (
      document.querySelector(
        'script[src="https://pl29654525.effectivecpmnetwork.com/264ab09df9518049cacbf55842abd2f2/invoke.js"]'
      )
    ) {
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://pl29654525.effectivecpmnetwork.com/264ab09df9518049cacbf55842abd2f2/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    document.body.appendChild(script);

    return () => {
      // Optional cleanup
    };
  }, []);

  return (
    <div
      id="container-264ab09df9518049cacbf55842abd2f2"
      style={{ width: "100%" }}
    />
  );
};

export default AdsterraNativeBanner;