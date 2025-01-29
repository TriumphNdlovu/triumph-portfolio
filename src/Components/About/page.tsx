import Image from "next/image";
import Link from "next/link";

export default function About() {

  return (
    <section
      id="about"
      className="p-8 bg-darkGray rounded-lg shadow-lg max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-mainColor shadow-lg group">
            {/* Default Image */}
            <Image
              src="/profilePicture.png"
              alt="Triumph"
              fill
              style={{ objectFit: "cover" }}
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

          {/* Social Media Links */}
          <div className="flex justify-center mt-4 space-x-4">
            <Link
              href="https://www.linkedin.com/in/triumph-ndlovu-425b73274/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-3xl text-blue-600 hover:text-accentColor"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link
              href="https://github.com/TriumphNdlovu"
              target="_blank"
              aria-label="GitHub"
              className="text-3xl text-gray-400 hover:text-accentColor"
            >
              <i className="fab fa-github"></i>
            </Link>
            <Link
              href="https://wa.me/27827793863"
              target="_blank"
              aria-label="WhatsApp"
              className="text-3xl text-green-600 hover:text-accentColor"
            >
              <i className="fab fa-whatsapp"></i>
            </Link>
          </div>
            <h2 className="text-xl text-maintextColor pt-4 font-pixel">Git Calendar</h2>
          <div className="flex justify-center mt-4 space-x-4 bg-white p-2 rounded-lg flex-col items-center">
            <img src={`https://ghchart.rshah.org/2DBA4E/TriumphNdlovu`} alt="Triumph's GitHub contributions" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          {/* Name and Title */}
          <h1 className="text-3xl md:text-5xl font-pixel text-maintextColor text-center md:text-left">
            Hi! <span className="hover:animate-glitch">👋</span>, I'm Triumph
          </h1>
          <h2 className="text-base md:text-2xl font-pixel text-alertColor text-center md:text-left">
            BSc Computer Science
          </h2>


          {/* About Text */}
          <div className="bg-windowBackground p-6 rounded-lg border border-accentColor shadow-md">
            <p className="text-secondaryTextColor font-vt323 text-lg leading-relaxed mb-4">
              I'm a Computer Science graduate from the University of Pretoria with a passion for crafting efficient and visually stunning web applications.
            </p>
            <p className="text-secondaryTextColor font-vt323 text-lg leading-relaxed mb-4">
              I specialize in modern technologies like <span className="text-alertColor">Next.js</span>, <span className="text-alertColor">Node.js</span>, 
              <span className="text-alertColor">Tailwind CSS</span>, and <span className="text-alertColor">Java</span>. Whether it's creating responsive designs or building scalable backends, I enjoy every step of the process.
            </p>
            <p className="text-secondaryTextColor font-vt323 text-lg leading-relaxed mb-4">
              Let's connect and bring your ideas to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
