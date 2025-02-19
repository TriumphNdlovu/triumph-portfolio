import { FaJs, FaReact, FaJava, FaNodeJs, FaLinux } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiNextdotjs } from "react-icons/si";

export default function Resume() {
  const skillIcons: Record<string, JSX.Element> = {
    JavaScript: <FaJs />,
    TypeScript: <SiTypescript />,
    React: <FaReact />,
    Nextjs: <SiNextdotjs />, // Updated Next.js icon
    "Spring Boot": <SiSpringboot />,
    Java: <FaJava />,
    NodeJS: <FaNodeJs />,
    Linux: <FaLinux />, // Added Linux icon
  };

  return (
    <div className="space-y-12 text-center">
      {/* Page Title */}
      <h2 className="text-4xl text-neonGreen font-pixel mb-12">Resume</h2>

      {/* Personal Introduction */}
      <p className="text-lg text-secondaryTextColor font-vt323 mb-12 mx-auto w-4/5 sm:w-3/5">
        Passionate software engineer with a strong foundation in web and backend development.
        I strive to write clean, scalable code and always seek innovative solutions to complex challenges.
      </p>

      <div className="p-8 rounded-lg border border-neonGreen shadow-xl text-left space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Education and Work Experience */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-xl text-neonGreen font-semibold mb-4">Education</h3>
              <div className="relative border-l-2 border-neonGreen pl-6 space-y-6">
                {[
                  {
                    degree: "High School Matric",
                    school: "Solomon Mahlangu High School",
                    duration: "Jan 2014 - Dec 2018",
                    details: [
                      "Finished 3rd in my class",
                      "With distinctions in Mathematics and Physical Science",
                      "Computer Lab Assistant",
                    ],
                  },
                  {
                    degree: "BSc in Computer Science",
                    school: "University of Pretoria",
                    duration: "2020 - 2024",
                    details: [
                      "Data Structures and Algorithms",
                      "Software Engineering (passed with distinction)",
                      "Computer Architecture",
                      "Design Patterns",
                      "and many more skills acquired",
                    ],
                  },
                ].map((edu, index) => (
                  <div key={index} className="mb-6">
                    <div className="absolute -left-3 w-6 h-6 bg-accentColor rounded-full border border-backgroundColor"></div>
                    <h4 className="text-highlightColor text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-secondaryTextColor font-vt323 text-sm italic">{edu.school}</p>
                    <p className="text-secondaryTextColor font-vt323 text-sm">{edu.duration}</p>
                    <ul className="list-disc list-inside text-secondaryTextColor font-vt323 text-sm mt-2">
                      {edu.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h3 className="text-xl text-neonGreen font-semibold mb-4">Work Experience</h3>
              <div className="relative border-l-2 border-neonGreen pl-6 space-y-8">
                {[
                  {
                    title: "IT Intern",
                    comapny: "Blue Turtle Technologies",
                    description: "Rotating through various departments and learning about the company's IT systems and operations.",
                    duration: "Feb 2025 - Present",
                  },
                  {
                    title: "Freelance Web Developer",
                    company: "Self-Employed",
                    description: "Developed modern websites and web apps for clients.",
                    duration: "2021 - Present",
                  },
                  {
                    title: "Tutor",
                    company: "University of Pretoria Afterschool Program",
                    description: "Helping students with the module Computer Organization and Architecture. Evaluated their Assembly coding practical and graded them. Provided consultation sessions.",
                    duration: "2019 - Second Semester",
                  },
                  {
                    title: "Volunteer",
                    company: "SPCA",
                    description: "Collaborated with a team of 5 to renovate the SPCA laundry room. Enhanced the facility to improve cleanliness and hygiene for the animals.",
                    duration: "2021 - Second Semester",
                  },
                ].map((job, index) => (
                  <div key={index} className="mb-6 transition-transform duration-300">
                    <div className="absolute -left-3 w-6 h-6 bg-accentColor rounded-full border border-backgroundColor"></div>
                    <h4 className="text-highlightColor text-lg font-semibold">
                      {job.title} - <span className="text-secondaryTextColor">{job.company}</span>
                    </h4>
                    <p className="text-secondaryTextColor font-vt323 text-sm italic">{job.duration}</p>
                    <p className="text-secondaryTextColor font-vt323 text-m mt-2">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Technical Skills and Soft Skills */}
          <div className="space-y-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl text-neonGreen font-semibold mb-8">Technical Skills</h3>
              {/* Skill Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Programming Languages */}
                <div className="border border-neonGreen rounded-lg p-6 space-y-4 bg-backgroundColor shadow-xl">
                  <h4 className="text-lg text-highlightColor font-semibold">Programming Languages</h4>
                  <ul className="list-disc list-inside text-secondaryTextColor font-vt323 text-lg space-y-2">
                    <li>C++</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>PHP</li>
                  </ul>
                </div>

                {/* Frameworks and Libraries */}
                <div className="border border-neonGreen rounded-lg p-6 space-y-4 bg-backgroundColor shadow-xl">
                  <h4 className="text-lg text-highlightColor font-semibold">Frameworks and Libraries</h4>
                  <ul className="list-disc list-inside text-secondaryTextColor font-vt323 text-lg space-y-2">
                    <li>Angular</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>NextUI</li>
                    <li>.NET Core</li>
                    <li>Spring Boot</li>
                    <li>Maven</li>
                    <li>Gradle</li>
                  </ul>
                </div>

                {/* Databases */}
                <div className="border border-neonGreen rounded-lg p-6 space-y-4 bg-backgroundColor shadow-xl">
                  <h4 className="text-lg text-highlightColor font-semibold">Databases</h4>
                  <ul className="list-disc list-inside text-secondaryTextColor font-vt323 text-lg space-y-2">
                    <li>Supabase</li>
                    <li>Firebase</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Firebase Cloud Functions</li>
                  </ul>
                </div>

                {/* Testing and Debugging Expertise */}
                <div className="border border-neonGreen rounded-lg p-6 space-y-4 bg-backgroundColor shadow-xl">
                  <h4 className="text-lg text-highlightColor font-semibold">Testing and Debugging Expertise</h4>
                  <ul className="list-disc list-inside text-secondaryTextColor font-vt323 text-lg space-y-2">
                    <li>Unit testing (Jest)</li>
                    <li>Integration testing (Jest)</li>
                    <li>End-to-end testing (Cypress)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl text-neonGreen font-semibold mb-6">Soft Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-secondaryTextColor font-vt323 text-lg mb-8">
                <ul className="space-y-3">
                  <li className="text-highlightColor flex items-center">
                    <span className="mr-3">⏰</span>Time Management
                  </li>
                  <li className="text-highlightColor flex items-center">
                    <span className="mr-3">🔄</span>Adaptability
                  </li>
                  <li className="text-highlightColor flex items-center">
                    <span className="mr-3">🎯</span>Leadership
                  </li>
                  <li className="text-highlightColor flex items-center">
                    <span className="mr-3">👂</span>Active Listening
                  </li>
                  <li className="text-highlightColor flex items-center">
                    <span className="mr-3">🎨</span>Creativity
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="text-highlightColor flex items-center">
                    <span className="mr-3">💬</span>Excellent Communication
                  </li>
                  <li className="text-highlightColor flex items-center">
                    <span className="mr-3">🤝</span>Teamwork
                  </li>
                  <li className="text-highlightColor flex items-center">
                    <span className="mr-3">🧩</span>Problem Solving
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Download Button */}
      <a
        href="/resume.pdf"
        download
        className="inline-block px-8 py-3 bg-mainColor text-accentColor rounded-lg font-pixel hover:bg-alertColor transition duration-300 transform hover:scale-105 border"
      >
        Download Resume
      </a>
    </div>
  );
}
