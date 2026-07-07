import { useEffect } from "react";

export default function SecurityProtection() {

  useEffect(() => {
    const messagePools = {
      copy: [
        "📚 Try it yourself — that’s how you get exam-ready 💪",
        "🧠 Your brain wants a workout, not shortcuts 😄",
        "🚫 No copy-paste here — you’ve got this!",
        "✍️ Practice mode ON: build your own answer 🚀",
      ],

      cut: [
        "✂️ Nice try 😄 but we’re practicing, not editing!",
        "🧠 Stay in flow — solve it step by step 💪",
        "📚 Cutting not allowed, but learning is 😉",
      ],

      rightClick: [
        "🖱️ No shortcuts 😄 real success comes from practice!",
        "📚 Stay focused — this is your training zone 💪",
        "🚫 Right-click paused so your brain can take over 🧠",
      ],

      devtools: [
        "🛠️ Developer tools? Let’s develop your skills instead 😄",
        "🧠 Focus mode ON — your exam brain is loading...",
        "🚫 Inspection blocked — but confidence unlocked 💪",
      ],
    };

    const getMessage = (type) => {
      const list = messagePools[type] || ["Keep going 💪"];
      return list[Math.floor(Math.random() * list.length)];
    };

    const emit = (type) => {
      window.dispatchEvent(
        new CustomEvent("security-warning", {
          detail: getMessage(type),
        })
      );
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      emit("rightClick");
    };

    const handleCopy = (e) => {
      e.preventDefault();
      emit("copy");
    };

    const handleCut = (e) => {
      e.preventDefault();
      emit("cut");
    };

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
        (e.ctrlKey && key === "u")
      ) {
        e.preventDefault();
        emit("devtools");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}