export default function Resume() {
  return (
    <div className="space-y-8 text-center">
      <h2 className="text-4xl text-neonGreen font-pixel mb-8">Resume</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Career Goals & Interests Section */}
        <div className=" p-6 rounded-lg border border-neonGreen shadow-lg">
          <h3 className="text-2xl text-neonGreen font-semibold mb-4">Career Goals & Interests</h3>
          <p className="text-gray-300 font-vt323 text-lg">
            I aim to develop impactful, user-focused solutions in software development. My interests include
            backend development, cloud technologies, and creating seamless user experiences.
          </p>
          <p className="text-gray-300 font-vt323 text-lg mt-4">
            I'm passionate about AI advancements, real-time data processing, and designing intuitive,
            interactive interfaces.
          </p>
        </div>

        {/* PDF Viewer */}
        <div className=" p-6 rounded-lg border border-neonGreen shadow-lg">
          <h3 className="text-2xl text-neonGreen font-semibold mb-4">Downloadable PDF</h3>
          <iframe
            src="/resume.pdf"
            className="w-full h-[500px] border-none rounded-lg"
            title="Resume PDF"
          ></iframe>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-4 px-6 py-2 bg-neonGreen text-gray-900 rounded-lg font-pixel hover:bg-blue-500 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
