
export default function Skills() {

    return (
        <>
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
        </>
    );
}