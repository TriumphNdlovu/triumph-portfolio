export default function About() {
  return (
    <section
      id="about"
      className="p-6 text-center md:text-left bg-darkGray rounded-lg shadow-lg"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-neonGreen shadow-md">
            <img
              src="/profilePicture.png"
              alt="Triumph"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-6xl">
          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl font-pixel text-neonGreen mb-2">
            Triumph Ndlovu
          </h1>
          <h2 className="text-lg md:text-2xl font-pixel text-neonGreen mb-4">
            BSc Computer Science
          </h2>

          {/* About Text */}
          <div className="w-full p-6 rounded-lg border border-neonGreen shadow-md"> 
            <p className="text-white font-vt323 text-lg leading-relaxed mb-4"> 
              Hi! I'm a Computer Science graduate from the University of Pretoria who loves solving problems with tech. 
            </p> 
            <p className="text-white font-vt323 text-lg leading-relaxed mb-4"> 
              I work with <span className="text-blue-400">Next.js</span>, <span className="text-blue-400">Node.js</span>,  
              <span className="text-blue-400">Tailwind CSS</span>, and <span className="text-blue-400">Java</span> to build web applications that look and work great. 
            </p> 
            <p className="text-white font-vt323 text-lg leading-relaxed mb-4"> 
              I enjoy trying out new tech, creating simple and smooth designs, and solving tough challenges. Whether it's building backends, frontends, or full projects, I'm always excited to learn and improve. 
            </p> 
            <p className="text-white font-vt323 text-lg leading-relaxed mb-4"> 
              Let's connect and build something amazing together. Great ideas start with a simple chat! 
            </p> 
          </div>


        </div>
      </div>
    </section>
  );
}
