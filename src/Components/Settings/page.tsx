import { useState, useEffect } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("default");
  const [backgroundImage, setBackgroundImage] = useState("windowsXp");

  // Retrieve theme and background from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "default";
    const savedBackground = localStorage.getItem("backgroundImage") || "windowsXp";
    
    setTheme(savedTheme);
    setBackgroundImage(savedBackground);
    document.documentElement.style.setProperty('--themeBG', getBackgroundUrl(savedBackground));
  }, []);

  // Helper function to get the background image URL based on the selected background
  const getBackgroundUrl = (bgName: string) => {
    switch (bgName) {
      case "windowsXp":
        return 'url("/backgroundXP.webp")';
      case "beach":
        return 'url("/beach.jpg")';
      case "space":
        return 'url("/space.jpg")';
      default:
        return ''; // Default background
    }
  };

  // Function to change the theme
  const changeTheme = (newTheme: string) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to localStorage
    setTheme(newTheme);
  };

  // Function to change the background image
  const changeBackgroundImage = (newImage: string) => {
    const backgroundUrl = getBackgroundUrl(newImage);
    document.documentElement.style.setProperty('--themeBG', backgroundUrl);
    localStorage.setItem("backgroundImage", newImage); // Save background to localStorage
    setBackgroundImage(newImage);
  };

  const highlightStyle = "border-4 border-accentColor";

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
            <img src="/backgroundXP.webp" alt="default" className="w-16 h-16 object-cover rounded-md" />
          </button>
          <button
            onClick={() => changeBackgroundImage("beach")}
            className={`px-2 py-2 bg-retroGreen text-gray-900 font-pixel rounded-lg transition duration-300 ${backgroundImage === "beach" ? highlightStyle : ""}`}
          >
            <img src="/beach.jpg" alt="beach" className="w-16 h-16 object-cover rounded-md" />
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
