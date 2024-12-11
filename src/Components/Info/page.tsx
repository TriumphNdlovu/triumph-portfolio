export default function Info() {
  return (
    <section className="p-8 text-center relative">
      <h1 className="text-4xl sm:text-5xl text-neonGreen font-pixel mb-6 animate-pulse">
        How to Navigate 🎮
      </h1>

      <div className="bg-gray-900 p-8 rounded-lg border border-neonGreen shadow-lg max-w-6xl mx-auto">
        <p className="text-sm sm:text-xm text-gray-300 font-vt323 mb-8 leading-relaxed">
          Welcome, explorer! Ready to dive into a retro-inspired digital world? Here’s your quick-start guide to getting the most out of this portfolio. Let’s level up!
        </p>

        {/* Instructions Section */}
        <div className="space-y-6 text-left sm:h-[40vh] w-full overflow-y-auto">
          {[
            "👾 Best View: This portfolio shines brightest on desktops and laptops. The Website is optimized for larger screens.",
            "🖱️ Closing Windows: To close any pop-up window or section, look for the '🔴' icon in the top-left corner of the window and click it.",
            "📄 Resume: Looking for my credentials? Download my resume or explore my career highlights in the Resume section.",
            "🎮 Game Zone: Test your reflexes in the Game section. Catch as many frogs as you can—bonus points for beating the high score!",
            "📂 Projects: Visit the Projects section to explore my work and click to view full descriptions.",
            "📧 Contact: Got questions or opportunities? Use the Contact page to get in touch. Let’s collaborate!",
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
            Ready? Jump in and explore. Let me know what you think or if you'd like a retro-styled website for yourself! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
