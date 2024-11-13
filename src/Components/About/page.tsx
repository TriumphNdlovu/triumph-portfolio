
export default function About() {


    
    return (
        <section id="about" className="p-6 text-center md:text-left relative">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                  {/* Profile Image */}
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 md:mb-0 border-2 border-neonGreen">
                    <img
                      src="/profilePicture.png"
                      alt="Triumph"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text and Name Section */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-3xl font-pixel text-retroPink mb-4">Triumph Ndlovu</h1>

                    <div className="bg-black text-neonGreen font-pixel text-sm p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                      <p className="text-lg mb-4 leading-relaxed">
                        I'm a BSc Computer Science graduate from the University of Pretoria, passionate about solving complex problems through technology. With experience in web development, software engineering, and a focus on creating impactful solutions, I strive to build things that make a difference.
                      </p>
                      <p className="text-lg mb-4 leading-relaxed">
                        I specialize in <span className="text-blue-400">JavaScript</span>, <span className="text-blue-400">TypeScript</span>, <span className="text-blue-400">React</span>, and <span className="text-blue-400">Node.js</span>, and I enjoy working on projects that challenge my creativity and technical skills.
                      </p>
                      <p className="text-lg mb-4 leading-relaxed">
                        Whether it's building innovative web applications or optimizing existing systems, I approach each project with a strong sense of ownership and an eagerness to continuously learn.
                      </p>
                      <p className="text-lg mb-4 leading-relaxed">
                        Let's connect and work together to build something amazing!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blinking Cursor */}
                {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <span className="blink text-retroPink">|</span>
                </div> */}
              </section>
    );
    }