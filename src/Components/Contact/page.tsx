export default function Contact() {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const name = encodeURIComponent((document.getElementById("name") as HTMLInputElement).value);
    const email = encodeURIComponent((document.getElementById("email") as HTMLInputElement).value);
    const message = encodeURIComponent((document.getElementById("message") as HTMLTextAreaElement).value);

  
    const mailtoLink = `mailto:realtriumphndlovu@gmail.com?subject=Message from ${name}&body=Hi Triumph,%0A%0A${message}%0A%0AFrom: ${name} (${email})`;

   
    window.location.href = mailtoLink;
  };

  return (
    <div className="space-y-12">
      <h2 className="text-4xl text-neonGreen font-pixel text-center mb-8">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        
        <div className=" p-8 rounded-lg border border-neonGreen shadow-lg">
          <h3 className="text-3xl text-neonGreen font-pixel mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-4 mb-4 bg-black text-neonGreen rounded border border-gray-700 focus:outline-none"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 bg-black text-neonGreen rounded border border-gray-700 focus:outline-none"
              required
            />
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-4 mb-6 bg-black text-neonGreen rounded border border-gray-700 focus:outline-none"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-neonGreen text-black font-semibold rounded hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className=" p-8 rounded-lg border border-neonGreen shadow-lg overflow-x-auto">
          <h3 className="text-3xl text-neonGreen font-pixel mb-6">Find Me On</h3>
          <ul className="space-y-4 text-neonGreen font-vt323 text-lg">
            <li className="flex items-center space-x-4">
              <i className="fas fa-address-card text-white"></i>
              <a
                href="https://www.linkedin.com/in/triumph-ndlovu-425b73274/"
                className="hover:text-blue-400 transition duration-200"
              >
                <span className="text-white">LinkedIn:</span> Triumph LinkedIn
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <i className="fas fa-laptop-code text-white"></i>
              <a
                href="https://github.com/TriumphNdlovu"
                className="hover:text-blue-400 transition duration-200"
              >
                <span className="text-white">GitHub:</span> Triumph GitHub
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <i className="fas fa-envelope text-retroPink"></i>
              <a
                href="mailto:realtriumphndlovu@gmail.com"
                className="hover:text-blue-400 transition duration-200"
              >
                <p><span className="text-white">Email:</span> realtriumphndlovu@gmail.com</p>
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <i className="fas fa-phone-alt text-white"></i>
              <a href="#" className="hover:text-blue-400 transition duration-200">
                <span className="text-white">Mobile: </span> +27 82 779 3862
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

