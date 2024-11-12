import { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Handle scroll event to detect which section is in view
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const { top, bottom, id } = section.getBoundingClientRect();
      if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
        currentSection = id;
      }
    });

    setActiveSection(currentSection);
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 space-x-4 p-4 z-20">
      <div className="flex">
        <div
          className={`${
            activeSection === "hero" ? "bg-retroPink" : "bg-darkGray"
          } w-3 h-3 rounded-full transition-all`}
        ></div>
        <div
          className={`${
            activeSection === "about" ? "bg-retroPink" : "bg-darkGray"
          } w-3 h-3 rounded-full transition-all`}
        ></div>
        <div
          className={`${
            activeSection === "projects" ? "bg-retroPink" : "bg-darkGray"
          } w-3 h-3 rounded-full transition-all`}
        ></div>
        <div
          className={`${
            activeSection === "contact" ? "bg-retroPink" : "bg-darkGray"
          } w-3 h-3 rounded-full transition-all`}
        ></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;

