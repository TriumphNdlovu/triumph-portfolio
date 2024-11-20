export default function Info() {
  return (
    <section className="p-8 text-center relative">
      <h1 className="text-4xl sm:text-5xl text-neonGreen font-pixel mb-6 animate-pulse">
        How to Use This Website 🎮
      </h1>

      <div className="bg-gray-900 p-8 rounded-lg border border-neonGreen shadow-lg max-w-6xl mx-auto">
        <p className="text-lg sm:text-xl text-gray-300 font-vt323 mb-8 leading-relaxed">
          Welcome to my retro-themed portfolio! Here’s a quick guide to help you navigate and enjoy the experience.
        </p>

        {/* Instructions Section */}
        <div className="space-y-6 text-left sm:h-[40vh] w-full">
          {[
            "For the best experience, use a desktop or laptop computer.",
            "Navigate between sections using the taskbar at the bottom of the screen or on your screen on mobile.",
            "Explore my projects in the Projects section and hover over the images for details.",
            "View my career highlights and download my resume from the Resume page.",
            "Contact me directly through the Contact section, I am always happy to chat!",
            "Lastly, go try the game in the Game section and see how many frogs you can catch!"
          ].map((text, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start justify-center sm:justify-start">
              <span className="text-3xl sm:text-4xl text-neonGreen font-pixel mr-4">{index + 1}.</span>
              <p className="text-lg sm:text-xl text-gray-300 font-vt323">{text}</p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-10">
          <p className="text-gray-400 font-vt323 text-sm sm:text-base">
            Enjoy exploring my portfolio and let me know what you think! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
