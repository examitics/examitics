import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const GA_TRACKING_ID = "G-00QR3HCV7M";

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: location.pathname,
    });
  }, [location]);
};