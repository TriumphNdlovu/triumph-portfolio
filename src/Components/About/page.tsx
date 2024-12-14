import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="p-8 bg-darkGray rounded-lg shadow-lg max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Profile Image */}
        <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-mainColor shadow-lg group">
          {/* Default Image */}
          <Image
            src="/profilePicture.png"
            alt="Triumph"
            layout="fill"
            objectFit="cover"
            className="rounded-full transition-opacity duration-500 group-hover:opacity-0"
          />
          {/* Hover Image */}
          <Image
            src="/profilePicture-funk.png"
            alt="Triumph Hover"
            layout="fill"
            objectFit="cover"
            className="rounded-full absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl font-pixel text-maintextColor text-center md:text-left">
            Hi! <span className="hover:animate-glitch">👋</span>, I'm Triumph
          </h1>
          <h2 className="text-lg md:text-2xl font-pixel text-alertColor text-center md:text-left">
            BSc Computer Science
          </h2>

          {/* About Text */}
          <div className="bg-windowBackground p-6 rounded-lg border border-accentColor shadow-md">
            <p className="text-secondaryTextColor font-vt323 text-lg leading-relaxed mb-4">
              Hi! I'm a Computer Science graduate from the University of Pretoria who loves solving problems with tech.
            </p>
            <p className="text-secondaryTextColor font-vt323 text-lg leading-relaxed mb-4">
              I work with <span className="text-alertColor">Next.js</span>, <span className="text-alertColor">Node.js</span>,
              <span className="text-alertColor"> Tailwind CSS</span>, and <span className="text-alertColor">Java</span> to build web applications that look and work great.
            </p>
            <p className="text-secondaryTextColor font-vt323 text-lg leading-relaxed mb-4">
              I enjoy trying out new tech, creating simple and smooth designs, and solving tough challenges. Whether it's building backends, frontends, or full projects, I'm always excited to learn and improve.
            </p>
            <p className="text-secondaryTextColor font-vt323 text-lg leading-relaxed mb-4">
              Let's connect and build something amazing together. Great ideas start with a simple chat!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
