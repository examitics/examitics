
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Monetag In-Page Push zone
const MONETAG_ZONE_ID = "12052307";
const MONETAG_SCRIPT_URL = "https://nap5k.com/tag.min.js";

// Monetag will be injected only when a visitor opens one of these routes.
// Add or remove routes according to your ad-placement plan.
const APPROVED_PATHS = new Set([
  "/",
  "/knowledgehub",
  "/issb-guide",
  "/pma-lc-initial-procedure",
  "/paf-initial-procedure",
]);

export default function MonetagInPagePush() {
  const { pathname } = useLocation();
  const { user, isPremium, profile, loading } = useAuth();

  useEffect(() => {
    // Wait for the initial authentication state.
    if (loading) return;

    // Do not inject ads on unapproved routes.
    if (!APPROVED_PATHS.has(pathname)) return;

    // Never intentionally inject ads for Premium users or admins.
    if (isPremium || profile?.role === "admin") return;

    // Prevent duplicate injection during React re-renders/navigation.
    const scriptId = `examitics-monetag-${MONETAG_ZONE_ID}`;
    if (document.getElementById(scriptId)) return;

    // Equivalent to the tag supplied by Monetag.
    const script = document.createElement("script");
    script.id = scriptId;
    script.dataset.zone = MONETAG_ZONE_ID;
    script.src = MONETAG_SCRIPT_URL;
    script.async = true;

    (document.body || document.documentElement).appendChild(script);

    // Intentionally do not remove the script on cleanup:
    // removing it does not undo code that has already executed.
  }, [pathname, user, isPremium, profile, loading]);

  return null;
}
