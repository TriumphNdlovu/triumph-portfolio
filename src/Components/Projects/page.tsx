
export default function Projects() {
    return (
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
    );
}
