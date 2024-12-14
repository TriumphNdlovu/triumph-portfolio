import { useState } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const name = encodeURIComponent((document.getElementById("name") as HTMLInputElement).value);
    const email = encodeURIComponent((document.getElementById("email") as HTMLInputElement).value);
    const message = encodeURIComponent((document.getElementById("message") as HTMLTextAreaElement).value);

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setFormStatus("Message Sent Successfully");
      } else {
        setFormStatus("Message Failed to Send");
      }
    } catch (err) {
      setFormStatus("Message Failed to Send");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12 ">
      <h2 className="text-4xl text-maintextColor font-pixel text-center mb-8">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Form Section */}
        <div className="p-8 rounded-lg border border-maintextColor shadow-lg bg-windowBackground">
          <h3 className="text-3xl text-maintextColor font-pixel mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-4 bg-windowBackground text-secondaryTextColor rounded border border-shadowColor focus:outline-none focus:ring-2 focus:ring-mainColor"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-4 bg-windowBackground text-secondaryTextColor rounded border border-shadowColor focus:outline-none focus:ring-2 focus:ring-mainColor"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full p-4 bg-windowBackground text-secondaryTextColor rounded border border-shadowColor focus:outline-none focus:ring-2 focus:ring-mainColor"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-neonGreen text-alertColor hover:text-secondaryTextColor border border-mainColor font-pixel rounded hover:bg-mainColor transition duration-300 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {formStatus && (
              <p className={`mt-4 text-center ${formStatus.includes("Failed") ? "text-red-500" : "text-green-500"}`}>
                {formStatus}
              </p>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="p-8 rounded-lg border border-maintextColor shadow-lg overflow-x-auto bg-windowBackground">
          <h3 className="text-3xl text-maintextColor font-pixel mb-6">Find Me On</h3>
          <ul className="space-y-4 text-maintextColor font-vt323 text-lg select-text items-center justify-center">
            <li className="flex items-center space-x-4 hover:text-alertColor transition duration-200">
              <i className="fas fa-address-card text-2xl"></i>
              <a href="https://www.linkedin.com/in/triumph-ndlovu-425b73274/" className="hover:underline">
                Triumph LinkedIn
              </a>
            </li>
            <li className="flex items-center space-x-4 hover:text-alertColor transition duration-200">
              <i className="fas fa-laptop-code text-2xl"></i>
              <a href="https://github.com/TriumphNdlovu" className="hover:underline">
                Triumph GitHub
              </a>
            </li>
            <li className="flex items-center space-x-4 hover:text-alertColor transition duration-200">
              <i className="fas fa-envelope text-2xl"></i>
              <a href="mailto:realtriumphndlovu@gmail.com" className="hover:underline">
                realtriumphndlovu@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-4 hover:text-alertColor transition duration-200">
              <i className="fas fa-phone-alt text-2xl"></i>
              <a href="tel:+27827793863" className="hover:underline">
                +27 82 779 3863
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
