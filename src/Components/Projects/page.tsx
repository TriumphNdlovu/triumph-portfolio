
export default function Projects() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Project 1 */}
                  <div className="group bg-gradient-to-b from-black to-gray-900 border border-neonGreen p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 transform group-hover:rotate-y-180">
                      {/* Front Side */}
                      <div className="w-full h-full flex flex-col justify-between p-6 bg-opacity-75">
                        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                          <img
                            src="/sweatsession.webp"
                            alt="Project 1"
                            className="w-full h-full object-cover object-center transition-opacity duration-500"
                          />
                        </div>
                        <h3 className="text-2xl text-blue-400 font-semibold mb-2">Project 1</h3>
                        <p className="text-lg mb-4 text-gray-300">Responsive and user-friendly application demonstrating modern tech use.</p>
                      </div>
                      {/* Back Side */}
                      <div className="absolute inset-0 bg-gray-900 p-6 flex flex-col justify-center items-center transform rotate-y-180">
                        <h3 className="text-xl text-neonGreen font-semibold mb-2">Technologies Used</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                          <span className="text-sm bg-gray-800 text-white py-1 px-3 rounded-full">React</span>
                          <span className="text-sm bg-gray-800 text-white py-1 px-3 rounded-full">Node.js</span>
                          <span className="text-sm bg-gray-800 text-white py-1 px-3 rounded-full">Express</span>
                        </div>
                      </div>
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
    );
}
