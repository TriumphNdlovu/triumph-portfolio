import { useState } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("retro");
  const [backgroundImage, setBackgroundImage] = useState("retro");

  // Function to change the theme
  const changeTheme = (newTheme: string) => {
    // Dynamically apply the theme by setting the 'data-theme' attribute
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme); // Update theme state
  };

  // Function to change the background image
  const changeBackgroundImage = (newImage: string) => {
    // Dynamically change background image
    if (newImage === "windowsXp") {
      document.documentElement.style.setProperty('--themeBG', 'url("/backgroundXP.webp")');
    } else if (newImage === "Tiger") {
      document.documentElement.style.setProperty('--themeBG', 'url("/Tiger.jpg")');
    } else if (newImage === "space") {
      document.documentElement.style.setProperty('--themeBG', 'url("/path/to/space-image.jpg")');
    }

    setBackgroundImage(newImage); // Update background image state
  };

  return (
    <section className="p-8 text-center">
      <h1 className="text-5xl text-neonGreen font-pixel mb-6">Settings</h1>
      <p className="text-lg text-gray-300 font-vt323 mb-6">
        Choose your preferred theme and background image for the website.
      </p>
      
      {/* Theme buttons */}
      <div className="mb-8">
        <h2 className="text-xl text-white font-pixel mb-4">Choose Theme</h2>
        <button
          onClick={() => changeTheme("default")}
          className="px-6 py-2 bg-retroGreen text-gray-900 font-pixel rounded-lg transition duration-300"
        >
          Default Theme
        </button>
        <button
          onClick={() => changeTheme("light")}
          className="px-6 py-2 bg-retroGreen text-gray-900 font-pixel rounded-lg transition duration-300 mt-4"
        >
          Light Theme
        </button>
        <button
          onClick={() => changeTheme("dark")}
          className="px-6 py-2 bg-retroGreen text-gray-900 font-pixel rounded-lg transition duration-300 mt-4"
        >
          Dark Theme
        </button>
      </div>

      {/* Background image buttons */}
      <div>
        <h2 className="text-xl text-white font-pixel mb-4">Choose Background Image</h2>
        <button
          onClick={() => changeBackgroundImage("windowsXp")}
          className="px-6 py-2 bg-retroGreen text-gray-900 font-pixel rounded-lg transition duration-300"
        >
          Retro Background
        </button>
        <button
          onClick={() => changeBackgroundImage("Tiger")}
          className="px-6 py-2 bg-retroGreen text-gray-900 font-pixel rounded-lg transition duration-300 mt-4"
        >
          Sunset Background
        </button>
        <button
          onClick={() => changeBackgroundImage("space")}
          className="px-6 py-2 bg-retroGreen text-gray-900 font-pixel rounded-lg transition duration-300 mt-4"
        >
          Space Background
        </button>
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
