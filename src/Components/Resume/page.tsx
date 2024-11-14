export default function Resume() {
  return (
    <div className="space-y-8 text-center">
      <h2 className="text-4xl text-neonGreen font-pixel mb-8">Resume</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Section */}
        <div className="bg-gray-900 p-6 rounded-lg border border-neonGreen shadow-lg">
          <h3 className="text-2xl text-neonGreen font-semibold mb-4">Education</h3>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-300">BSc Computer Science</h4>
            <p className="text-gray-500">University of Pretoria</p>
            <p className="text-gray-500">2020 - 2024</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-300">High School Diploma</h4>
            <p className="text-gray-500">High School Name</p>
            <p className="text-gray-500">2011 - 2016</p>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="bg-gray-900 p-6 rounded-lg border border-neonGreen shadow-lg">
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
