import { useState, useEffect } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("Default");
  const [backgroundImage, setBackgroundImage] = useState("Default");

  // Load preferences from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedBackgroundImage = localStorage.getItem("backgroundImage");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    if (savedBackgroundImage) {
      setBackgroundImage(savedBackgroundImage);
      document.documentElement.style.setProperty('--themeBG', savedBackgroundImage);
    }
  }, []);

  // Function to change the theme
  const changeTheme = (newTheme: string) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Store theme in localStorage
  };

  // Function to change the background image
  const changeBackgroundImage = (newImage: string) => {
    let backgroundUrl = "";
    switch (newImage) {
      case "windowsXp":
        backgroundUrl = 'url("/backgroundXP.webp")';
        break;
      case "beach":
        backgroundUrl = 'url("/beach.jpg")';
        break;
      case "space":
        backgroundUrl = 'url("/space.jpg")';
        break;
      default:
        backgroundUrl = ''; // Set a default background if invalid input
    }

    document.documentElement.style.setProperty('--themeBG', backgroundUrl);
    setBackgroundImage(newImage);
    localStorage.setItem("backgroundImage", newImage); // Store background image in localStorage
  };

  // Highlight styles
  const highlightStyle = "border-4 border-yellow-500";

  return (
    <section className="p-8 text-center">
      <h1 className="text-5xl text-maintxetColor font-pixel mb-6">Settings</h1>
      <p className="text-lg text-secondaryTextColor font-vt323 mb-6">
        Choose your preferred theme and background image for the website.
      </p>

      {/* Theme buttons */}
      <div className="mb-8">
        <h2 className="text-xl text-white font-pixel mb-4">Choose Theme</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => changeTheme("default")}
            className={`px-6 py-2 bg-accentColor text-secondaryTextColor font-pixel rounded-lg transition duration-300 ${theme === "default" ? highlightStyle : ""}`}
          >
            Default
          </button>
          <button
            onClick={() => changeTheme("light")}
            className={`px-6 py-2 bg-accentColor text-secondaryTextColor font-pixel rounded-lg transition duration-300 ${theme === "light" ? highlightStyle : ""}`}
          >
            Light
          </button>
          <button
            onClick={() => changeTheme("Dark")}
            className={`px-6 py-2 bg-accentColor text-secondaryTextColor font-pixel rounded-lg transition duration-300 ${theme === "Dark" ? highlightStyle : ""}`}
          >
            Dark
          </button>
        </div>
      </div>

      {/* Background image buttons */}
      <div>
        <h2 className="text-xl text-white font-pixel mb-4">Choose Background Image</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => changeBackgroundImage("windowsXp")}
            className={`px-2 py-2 bg-retroGreen text-gray-900 font-pixel rounded-lg transition duration-300 ${backgroundImage === "windowsXp" ? highlightStyle : ""}`}
          >
            <img src="/backgroundXP.webp" alt="Retro" className="w-16 h-16 object-cover rounded-md" />
          </button>
          <button
            onClick={() => changeBackgroundImage("beach")}
            className={`px-2 py-2 bg-retroGreen text-gray-900 font-pixel rounded-lg transition duration-300 ${backgroundImage === "Tiger" ? highlightStyle : ""}`}
          >
            <img src="/beach.jpg" alt="Sunset" className="w-16 h-16 object-cover rounded-md" />
          </button>
          <button
            onClick={() => changeBackgroundImage("space")}
            className={`px-2 py-2 bg-retroGreen text-gray-900 font-pixel rounded-lg transition duration-300 ${backgroundImage === "space" ? highlightStyle : ""}`}
          >
            <img src="/space.jpg" alt="Space" className="w-16 h-16 object-cover rounded-md" />
          </button>
        </div>
      </div>

      <p className="text-gray-400 font-vt323 text-sm mt-8">
        Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </p>
      <p className="text-gray-400 font-vt323 text-sm mt-2">
        Current Background: {backgroundImage.charAt(0).toUpperCase() + backgroundImage.slice(1)}
      </p>
    </section>
  );
}
