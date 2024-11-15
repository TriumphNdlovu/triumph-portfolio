export default function Info() {
  return (
    <div className=" text-lg font-vt323 text-gray-300 mb-6">
      <h2 className="text-4xl text-neonGreen font-pixel mb-6 text-center animate-glitch">
        Welcome to My Portfolio!
      </h2>

      <h3 className="text-xl text-neonGreen font-pixel mb-4 text-center">
        For the Best Experience Please use a <p className="text-yellow-600 animate-bounce">Desktop or Laptop</p>
        </h3>

      

      <h3 className="text-xl text-neonGreen font-pixel mb-4 text-center">
        Tips for Navigation:
      </h3>
      <p className="text-sm text-gray-400 mb-4 text-center">
        Use the icons on screen to quickly access different sections of the website.  
        <br />
        Minimize, maximize, or drag windows to explore your favorite content.
        <br />
        If you have any questions or feedback, feel free to reach out through the contact section!
      </p>

      <p className="text-sm text-yellow-600 font-pixel text-center mb-4">
        This website was built using React, Tailwind CSS, and a touch of nostalgia.
      </p>
      {/* // add a game icon */}
        <div className="text-center">
            <div className="w-[10vw] h-[10vh] fas fa-gamepad">
                
            </div>
        </div>
    </div>
  );
}
