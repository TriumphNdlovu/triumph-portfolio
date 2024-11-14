export default function Contact() {
  return (
    <div className="space-y-12">
      <h2 className="text-4xl text-neonGreen font-pixel text-center mb-8">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Message Form */}
        <div className="bg-gray-900 p-8 rounded-lg border border-neonGreen shadow-lg">
          <h3 className="text-3xl text-neonGreen font-pixel mb-6">Send Me a Message</h3>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-4 bg-black text-neonGreen rounded border border-gray-700 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 bg-black text-neonGreen rounded border border-gray-700 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 mb-6 bg-black text-neonGreen rounded border border-gray-700 focus:outline-none"
              rows={4}
            />
            <button className="w-full py-3 bg-neonGreen text-black font-semibold rounded hover:bg-gray-800 transition duration-300"
              disabled
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="bg-gray-900 p-8 rounded-lg border border-neonGreen shadow-lg">
          <h3 className="text-3xl text-neonGreen font-pixel mb-6">Find Me On</h3>
          <ul className="space-y-4 text-neonGreen font-vt323 text-lg">
            <li className="flex items-center space-x-4">
              <i className="fas fa-linkedin text-blue-500"></i>
              <a href="https://www.linkedin.com/in/triumph-ndlovu-425b73274/" className="hover:text-blue-400 transition duration-200">
                <span className="text-blue-500">LinkedIn:</span> Click here
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <i className="fas fa-github-square text-gray-500"></i>
              <a href="https://github.com/TriumphNdlovu" className="hover:text-blue-400 transition duration-200">
                <span className="text-blue-500">GitHub:</span> Click here
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <i className="fas fa-envelope text-retroPink"></i>
              <a href="mailto:realtriumphndlovu@gmail.com" className="hover:text-blue-400 transition duration-200">
                <span className="text-retroPink">Email:</span> realtriumphndlovu@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
