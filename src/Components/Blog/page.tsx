export default function Blog() {
  return (
    <>
      <h2 className="text-4xl text-neonGreen font-pixel mb-8 text-center">My Blog</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg border border-neonGreen shadow-lg transition duration-300 transform hover:scale-105">
          <h3 className="text-2xl text-neonGreen font-pixel font-semibold mb-4">Blogs are still on their way...</h3>
          <p className="text-lg text-gray-300 font-vt323 mb-4">
            Stay in touch.</p>
          <a href="#" className="inline-block mt-4 px-6 py-2 bg-neonGreen text-gray-900 rounded-lg font-pixel hover:bg-blue-500 transition duration-300">
            Read more
          </a>
        </div>
        
      </div>
    </>
  );
}
