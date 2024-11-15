export default function Info() {
  return (
    <section className="p-8 text-center relative">
      <h1 className="text-5xl text-neonGreen font-pixel mb-6 animate-pulse">
        How to Use This Website 🎮
      </h1>

      <div className="bg-gray-900 p-8 rounded-lg border border-neonGreen shadow-lg max-w-6xl mx-auto">
        <p className="text-lg text-gray-300 font-vt323 mb-8 leading-relaxed">
          Welcome to my retro-themed portfolio! Here’s a quick guide to help you navigate and enjoy the experience.
        </p>

        {/* Instructions Section */}
        <div className="space-y-6 text-left h-[40vh] w-full">
          <div className="flex items-start justify-center sm:justify-start">
            <span className="text-3xl text-neonGreen font-pixel mr-4">1.</span>
            <p className="text-lg text-gray-300 font-vt323">
              For the best experience, use a <span className="text-yellow-500 font-pixel">desktop</span> or laptop computer.
            </p>
          </div>
          <div className="flex items-start justify-center sm:justify-start">
            <span className="text-3xl text-neonGreen font-pixel mr-4">2.</span>
            <p className="text-lg text-gray-300 font-vt323">
              Navigate between sections using the taskbar at the bottom of the screen or on your screen on mobile.
            </p>
          </div>
          <div className="flex items-start justify-center sm:justify-start">
            <span className="text-3xl text-neonGreen font-pixel mr-4">3.</span>
            <p className="text-lg text-gray-300 font-vt323">
              Explore my projects in the <span className="text-yellow-500 font-pixel">Projects</span> section and hover over the images for details.
            </p>
          </div>
          <div className="flex items-start justify-center sm:justify-start">
            <span className="text-3xl text-neonGreen font-pixel mr-4">4.</span>
            <p className="text-lg text-gray-300 font-vt323">
              View my career highlights and download my resume from the <span className="text-yellow-500 font-pixel">Resume</span> page.
            </p>
          </div>
          <div className="flex items-start justify-center sm:justify-start">
            <span className="text-3xl text-neonGreen font-pixel mr-4">5.</span>
            <p className="text-lg text-gray-300 font-vt323">
              Contact me directly through the <span className="text-yellow-500 font-pixel">Contact</span> section, I am always happy to chat!
            </p>
          </div>
          <div className="flex items-start justify-center sm:justify-start">
            <span className="text-3xl text-neonGreen font-pixel mr-4">6.</span>
            <p className="text-lg text-gray-300 font-vt323">
              Lastly, go try the game in the <span className="text-yellow-500 font-pixel">Game</span> section and see how many frogs you can catch!
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-10">
          <p className="text-gray-400 font-vt323 text-sm">
            Enjoy exploring my portfolio and let me know what you think! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
