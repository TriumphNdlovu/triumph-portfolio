

export default function Contact() {
    return (
        <>
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
        </>
    );
}