import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "6px",  // Slightly thicker for more retro appeal
        backgroundColor: "#000",  // Dark background
        zIndex: 100,
        boxShadow: "0 0 10px rgba(255, 0, 0, 0.7)", // Retro glow
      }}
    >
      <div
        style={{
          width: `${scrollProgress}%`,
          height: "100%",
          backgroundColor: "#00FF00", // Neon green for a retro feel
          transition: "width 0.2s ease-out",
          boxShadow: "0 0 20px rgba(0, 255, 0, 0.8)",  // Glowing effect
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;

