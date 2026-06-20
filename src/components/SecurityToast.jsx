import { useEffect, useState } from "react";
// import "./SecurityToast.css";

export default function SecurityToast() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleEvent = (e) => {
      setMessage(e.detail);

      setTimeout(() => {
        setMessage("");
      }, 2200);
    };

    window.addEventListener("security-warning", handleEvent);

    return () => {
      window.removeEventListener("security-warning", handleEvent);
    };
  }, []);

  if (!message) return null;

  return (
    <div style={styles.toast}>
      {message}
    </div>
  );
}

const styles = {
  toast: {
    position: "fixed",
    bottom: "25px",
    left: "50%",
    transform: "translateX(-50%)",
    // background: "linear-gradient(135deg, #111827, #1f2937)",
    background: "var(--gradient-dark)",
    color: "#ffffff",
    padding: "12px 18px",
    borderRadius: "50px",
    fontSize: "14px",
    fontWeight: "500",
    zIndex: 999999,
    // textShadow: "0 5px 10px rgba(241, 238, 16, 0.81)",

    boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.1)",
  },
};