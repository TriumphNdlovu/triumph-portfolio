export default function Info() {
  return (
    <section className="p-8 text-center relative ">
      <h1 className="text-4xl sm:text-5xl text-maintextColor font-pixel mb-6 animate-pulse">
       Welcome🎮
      </h1>

      <div className="p-8 rounded-lg border border-neonGreen shadow-xl max-w-6xl mx-auto">
      

        {/* Instructions Section */}
        <div className="text-left">
          <h2 className="text-2xl sm:text-4xl text-maintextColor font-pixel mb-6">
            Quick-Start Guide
          </h2>

          <div className="space-y-8 sm:h-[40vh] w-full overflow-y-auto scrollbar-thin scrollbar-thumb-neonGreen scrollbar-track-gray-700">
            {[
              "👾 Best View: This portfolio shines brightest on desktops and laptops. The Website is optimized for larger screens.",
              "🖱️ Closing Windows: To close any pop-up window or section, look for the '🔴' icon in the top-left corner of the window and click it.",
              "📄 Resume: Looking for my credentials? Download my resume or explore my career highlights in the Resume section.",
              "🎮 Game Zone: Test your reflexes in the Game section. Catch as many frogs as you can—bonus points for beating the high score!",
              "📂 Projects: Visit the Projects section to explore my work and click to view full descriptions.",
              "📧 Contact: Got questions or opportunities? Use the Contact page to get in touch. Let’s collaborate!",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start justify-center sm:justify-start group"
              >
                <span className="text-3xl sm:text-4xl text-neonGreen font-pixel mr-4 transition-transform duration-300 group-hover:scale-110">
                  {index + 1}.
                </span>
                <p className="text-base sm:text-lg text-gray-300 font-vt323 transition-colors duration-300 group-hover:text-white">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
        <p className="text-maintextColor font-vt323 text-sm sm:text-base mb-4">
            Ready? Jump in and explore. Let me know what you think or if you'd like a retro-styled website for yourself! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
