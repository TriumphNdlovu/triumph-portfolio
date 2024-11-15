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
                Hi there! I'm a Computer Science graduate from the University of Pretoria with a knack for turning complex problems into elegant, 
                tech-driven solutions. </p> <p className="text-white font-vt323 text-lg leading-relaxed mb-4"> Armed with expertise in 
                <span className="text-blue-400">Next.js</span>, <span className="text-blue-400">Node.js</span>, 
                <span className="text-blue-400">Tailwind CSS</span>, and <span className="text-blue-400">Java</span>, 
                I thrive on crafting innovative web applications that blend functionality with flair. </p> 
                <p className="text-white font-vt323 text-lg leading-relaxed mb-4"> 
                I’m passionate about exploring new technologies, designing seamless user experiences, 
                and tackling challenges that push my boundaries. Whether it's building scalable backends, responsive interfaces, 
                or immersive user journeys—I'm always up for the adventure. </p> 
                <p className="text-white font-vt323 text-lg leading-relaxed mb-4"> Let’s connect and create something remarkable together. 
                The best ideas start with a great conversation! </p> 
          </div>
        </div>
      </div>
    </section>
  );
}
