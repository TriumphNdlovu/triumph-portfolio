import { useState } from "react";

export default function Settings() {
  // This state can hold the current theme if needed
  const [theme, setTheme] = useState("blue-theme");

  function handleThemeChange(theme: string) {
    console.log(`Theme changed to: ${theme}`);
    // Add logic to dynamically update your Tailwind theme or apply a class
    document.documentElement.className = ""; // Reset existing classes
    document.documentElement.classList.add(theme); // Apply new theme class
  }

  return (
    <section className="p-8 text-center relative">
      <h1 className="text-5xl text-neonGreen font-pixel mb-6">
        Setting <i className="fas fa-cog"></i>
      </h1>
      <h3 className="text-2xl text-white font-pixel text-left mb-6">
        Coming Soon!
      </h3>
      {/* <h3 className="text-2xl text-white font-pixel text-left mb-6">
        Choose Theme:
      </h3>
      <div className="flex space-x-4">
        <button
          className="bg-neonGreen text-white font-pixel px-4 py-2 rounded-md"
          onClick={() => handleThemeChange("blue-theme")}
        >
          Blue
        </button>
        <button
          className="bg-retroGreen text-white font-pixel px-4 py-2 rounded-md"
          onClick={() => handleThemeChange("retro-green-theme")}
        >
          Retro Green
        </button>
      </div> */}
    </section>
  );
}
