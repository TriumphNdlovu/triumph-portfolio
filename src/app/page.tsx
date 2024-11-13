'use client'
import { useState } from 'react';

export default function Home() {
  // State to manage the active windows
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [positions, setPositions] = useState<{ [key: string]: { top: number; left: number } }>({});

  const handleWindowOpen = (section: string) => {
    if (!openWindows.includes(section)) {
      setOpenWindows([...openWindows, section]);

      // Calculate the new position for the window based on existing ones
      const newPosition = { top: 100, left: 100 };
      const offset = 30; // The amount of offset between windows

      // If there are already open windows, calculate the new position
      const existingPositions = Object.values(positions);
      if (existingPositions.length > 0) {
        const lastPosition = existingPositions[existingPositions.length - 1];
        newPosition.top = lastPosition.top + offset; // Offset vertically from the last window
        newPosition.left = lastPosition.left + offset; // Offset horizontally from the last window
      }

      setPositions((prevPositions) => ({
        ...prevPositions,
        [section]: newPosition, // Set initial position for the new window
      }));
    }
  };

  const handleWindowClose = (section: string) => {
    setOpenWindows(openWindows.filter(window => window !== section));
    setPositions((prevPositions) => {
      const { [section]: _, ...rest } = prevPositions; // Remove the position when window is closed
      return rest;
    });
  };

  const handleDrag = (e: React.MouseEvent, windowName: string) => {
    const startX = e.clientX;
    const startY = e.clientY;
    const startTop = positions[windowName].top;
    const startLeft = positions[windowName].left;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const newTop = startTop + moveEvent.clientY - startY;
      const newLeft = startLeft + moveEvent.clientX - startX;

      setPositions((prevPositions) => ({
        ...prevPositions,
        [windowName]: { top: newTop, left: newLeft },
      }));
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center">
      {/* Desktop Icons */}
      <div className="grid grid-cols-3 gap-6 p-6">
        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleWindowOpen('about')}>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <i className="fas fa-user text-4xl text-blue-500"></i>
          </div>
          <p className="text-sm mt-2">About</p>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleWindowOpen('projects')}>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <i className="fas fa-briefcase text-4xl text-blue-500"></i>
          </div>
          <p className="text-sm mt-2">Projects</p>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleWindowOpen('skills')}>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <i className="fas fa-laptop-code text-4xl text-blue-500"></i>
          </div>
          <p className="text-sm mt-2">Skills</p>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleWindowOpen('contact')}>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <i className="fas fa-envelope text-4xl text-blue-500"></i>
          </div>
          <p className="text-sm mt-2">Contact</p>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleWindowOpen('resume')}>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <i className="fas fa-file text-4xl text-blue-500"></i>
          </div>
          <p className="text-sm mt-2">Resume</p>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => handleWindowOpen('blog')}>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <i className="fas fa-blog text-4xl text-blue-500"></i>
          </div>
          <p className="text-sm mt-2">Blog</p>
        </div>
      </div>



      {/* Open Windows (Desktop-style Windows) */}
      <div className="relative w-full h-full flex items-center justify-center">
        {openWindows.map((window, index) => (
          <div
            key={index}
            className="bg-black rounded-lg border-2 border-neonGreen absolute w-96 min-h-[70vh] transition-all duration-200"
            style={{
              top: `${positions[window]?.top}px`,
              left: `${positions[window]?.left}px`,
              width: '60vw',  
              minHeight: '60vh', 
            }} 
          >
            {/* Header Bar */}
            <div
              className="bg-black text-white p-2 rounded-t-lg flex justify-between items-center shadow-md border-b-2 border-neonGreen"
              onMouseDown={(e) => handleDrag(e, window)} 
            >
              <div className="flex gap-2">
                {/* Buttons (Minimize, Maximize, Close) */}
                <div className="w-3 h-3 bg-[#4CAF50] rounded-full hover:bg-[#45a049] cursor-pointer"></div> {/* Minimize */}
                <div className="w-3 h-3 bg-[#FFEB3B] rounded-full hover:bg-[#FFEB3B] cursor-pointer"></div> {/* Maximize */}
                <div
                  className="w-3 h-3 bg-[#F44336] rounded-full hover:bg-[#e53935] cursor-pointer"
                  onClick={() => handleWindowClose(window)}
                ></div> 
              </div>
              <span className="font-sans text-lg font-semibold text-retroPink">{window.charAt(0).toUpperCase() + window.slice(1)}</span>
            </div>

            {/* Window Content */}
            {window === 'about' && (
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
                    <h1 className="text-3xl font-semibold text-retroPink mb-4">Triumph Ndlovu</h1>

                    <div className="bg-black text-neonGreen p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
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
            )}

            {window === 'projects' && (
              <section id="projects" className="p-6 bg-black text-white">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Project 1 */}
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/project1-image.jpg"
                        alt="Project 1"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <h3 className="text-2xl text-blue-400 font-semibold mb-2">Project 1</h3>
                    <p className="text-lg mb-4 text-gray-300">This is a brief description of Project 1. It demonstrates how I utilized different technologies to create a responsive and user-friendly application.</p>
                    <div className="flex gap-4">
                      <span className="text-sm bg-gray-700 text-white py-1 px-3 rounded-full">React</span>
                      <span className="text-sm bg-gray-700 text-white py-1 px-3 rounded-full">Node.js</span>
                      <span className="text-sm bg-gray-700 text-white py-1 px-3 rounded-full">Express</span>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/project2-image.jpg"
                        alt="Project 2"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <h3 className="text-2xl text-blue-400 font-semibold mb-2">Project 2</h3>
                    <p className="text-lg mb-4 text-gray-300">This project highlights my skills in full-stack development. The app allows users to create, edit, and delete posts with a real-time messaging feature.</p>
                    <div className="flex gap-4">
                      <span className="text-sm bg-gray-700 text-white py-1 px-3 rounded-full">Vue.js</span>
                      <span className="text-sm bg-gray-700 text-white py-1 px-3 rounded-full">Firebase</span>
                      <span className="text-sm bg-gray-700 text-white py-1 px-3 rounded-full">Tailwind CSS</span>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src="/project3-image.jpg"
                        alt="Project 3"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <h3 className="text-2xl text-blue-400 font-semibold mb-2">Project 3</h3>
                    <p className="text-lg mb-4 text-gray-300">A mobile app that allows users to track their daily tasks and productivity. The design focuses on simplicity and ease of use.</p>
                    <div className="flex gap-4">
                      <span className="text-sm bg-gray-700 text-white py-1 px-3 rounded-full">React Native</span>
                      <span className="text-sm bg-gray-700 text-white py-1 px-3 rounded-full">MongoDB</span>
                      <span className="text-sm bg-gray-700 text-white py-1 px-3 rounded-full">Redux</span>
                    </div>
                  </div>
                </div>
              </section>
            )}


            {window === 'skills' && (
                  <section id="skills" className="p-6 bg-black text-white">
                    <h2 className="text-4xl text-blue-500 font-semibold mb-8 text-center">Skills</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                      {/* Skill 1: JavaScript */}
                      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl text-blue-400 font-semibold">JavaScript</h3>
                          <div className="text-sm text-gray-400">Advanced</div>
                        </div>
                        <div className="relative w-full h-2 bg-gray-700 rounded-full">
                          <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>

                      {/* Skill 2: React */}
                      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl text-blue-400 font-semibold">React</h3>
                          <div className="text-sm text-gray-400">Intermediate</div>
                        </div>
                        <div className="relative w-full h-2 bg-gray-700 rounded-full">
                          <div className="absolute top-0 left-0 h-full bg-blue-400 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>

                      {/* Skill 3: Node.js */}
                      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl text-blue-400 font-semibold">Node.js</h3>
                          <div className="text-sm text-gray-400">Intermediate</div>
                        </div>
                        <div className="relative w-full h-2 bg-gray-700 rounded-full">
                          <div className="absolute top-0 left-0 h-full bg-green-500 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>

                      {/* Skill 4: TypeScript */}
                      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl text-blue-400 font-semibold">TypeScript</h3>
                          <div className="text-sm text-gray-400">Advanced</div>
                        </div>
                        <div className="relative w-full h-2 bg-gray-700 rounded-full">
                          <div className="absolute top-0 left-0 h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>

                      {/* Add More Skills */}
                      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl text-blue-400 font-semibold">CSS</h3>
                          <div className="text-sm text-gray-400">Intermediate</div>
                        </div>
                        <div className="relative w-full h-2 bg-gray-700 rounded-full">
                          <div className="absolute top-0 left-0 h-full bg-pink-500 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                  </section>
                )}


                {window === 'contact' && (
                <section id="contact" className="p-6 bg-gray-900 text-white">
                    <h2 className="text-4xl text-blue-500 font-semibold mb-8 text-center">Contact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl text-blue-400 font-semibold mb-4">Send Me a Message</h3>
                        <form>
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
                          />
                          <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
                          />
                          <textarea
                            placeholder="Your Message"
                            className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
                          />
                          <button className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600">Send Message</button>
                        </form>
                      </div>
                      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl text-blue-400 font-semibold mb-4">Find Me On</h3>
                        <ul>
                          <li>
                            <a href="https://www.linkedin.com/in/yourname" className="text-blue-400">LinkedIn</a>
                          </li>
                          <li>
                            <a href="https://github.com/yourname" className="text-blue-400">GitHub</a>
                          </li>
                          <li>
                            <a href="mailto:yourname@example.com" className="text-blue-400">Email</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section> 
                            )}

                {window === 'resume' && (
                <section id="resume" className="p-6 bg-black text-white">
                    <h2 className="text-4xl text-blue-500 font-semibold mb-8 text-center">Resume</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl text-blue-400 font-semibold mb-4">Education</h3>
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold">BSc Computer Science</h4>
                          <p className="text-gray-400">University of Pretoria</p>
                          <p className="text-gray-400">2020 - 2024</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">High School Diploma</h4>
                          <p className="text-gray
                          -400">High School Name</p>
                          <p className="text-gray-400">2011 - 2016</p>
                          </div>
                          </div>
                          </div>
                          </section>
                    )}
                    {window === 'blog' && (
                      <section id="blog" className="p-6 bg-black text-white">
                      <h2 className="text-4xl text-blue-500 font-semibold mb-8 text-center">Blog</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                          <h3 className="text-2xl text-blue-400 font-semibold mb-4">Why I Love TypeScript</h3>
                          <p className="text-lg mb-4">In this post, I'll discuss why TypeScript has become my go-to language for building robust and maintainable web applications.</p>
                          <a href="/blog/why-i-love-typescript" className="text-blue-500">Read more</a>
                        </div>
                      </div>
                    </section>
                                        )}



          </div>
        ))}
      </div>
    </div>
  );
}