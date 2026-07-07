import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.jsx";
import DisableDevtool from "disable-devtool";
import { BrowserRouter } from "react-router-dom";

// DisableDevtool();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Analytics />
    </HelmetProvider>
  </StrictMode>,
);
