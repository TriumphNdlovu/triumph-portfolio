import { FaJs, FaReact, FaJava, FaNodeJs, FaLinux, FaLinkedin } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiNextdotjs, SiUdemy } from "react-icons/si";

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
      <h2 className="text-4xl text-neonGreen font-pixel mb-12 border-b border-maintextColor">Resume</h2>

      {/* Personal Introduction */}
      <p className="text-lg text-secondaryTextColor font-vt323 mb-12 mx-auto w-4/5 sm:w-3/5">
        I’m a software engineer with a solid background in web and backend development.
        I focus on writing clean, scalable code and love finding creative solutions to complex problems.
      </p>
      <div className="p-8 rounded-lg border border-neonGreen shadow-xl text-left space-y-12">
        <div className="">
          {/* Left Column: Education and Work Experience */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-xl text-neonGreen font-semibold mb-4 border-b">Education</h3>
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
                    <h4 className="text-secondaryTextColor text-lg font-semibold">{edu.degree}</h4>
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
              <h3 className="text-xl text-neonGreen font-semibold mb-4 border-b border-maintextColor">Work Experience</h3>
              <div className="relative border-l-2 border-neonGreen pl-6 space-y-8">
                {[
                  {
                    title: "IT Intern",
                    company: "Blue Turtle Technologies",
                    description: "Rotating through various departments and learning about the company's IT systems and operations.",
                    duration: "Feb 2025 - Present",
                  },
                  {
                    title: "Freelance Web Developer",
                    company: "Self-Employed",
                    description: "Developing modern and beautiful websites and web apps for clients. As well as help them solve technical issues.",
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
                    <h4 className="text-secondaryTextColor text-lg font-semibold">
                      {job.title} - <span className="text-secondaryTextColor">{job.company}</span>
                    </h4>
                    <p className="text-secondaryTextColor font-vt323 text-sm italic">{job.duration}</p>
                    <p className="text-secondaryTextColor font-vt323 text-m mt-2">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
          

<div>
  <h3 className="text-xl text-neonGreen font-semibold mb-4 border-b border-maintextColor">Licenses & Certificates</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-secondaryTextColor font-vt323 text-lg mb-8">
    <ul className="space-y-3">
      <div className="text-bold text-secondaryTextColor font-semibold">Udemy Courses</div>
      <li className="text-secondaryTextColor flex items-center">
        <span className="mr-3">
          <SiUdemy className="text-2xl bg-purple-600 rounded-sm"/>
        </span>
        <a href="https://www.udemy.com/certificate/UC-5a748d9e-17e0-4c63-b030-5adc63923d38/" target="_blank" rel="noopener noreferrer"
          className="hover:underline">
          IT Asset Management (ITAM)— Software Asset Management
        </a>
      </li>
      <li className="text-secondaryTextColor flex items-center">
        <span className="mr-3">
          <SiUdemy className="text-2xl bg-purple-600 rounded-sm"/>
        </span>
        <a href="https://www.udemy.com/certificate/UC-b960acb8-0484-4d7f-8600-0c24fa22322a/" target="_blank" rel="noopener noreferrer"
          className="hover:underline">
          Better Business Writing Skills
        </a>
      </li>
      <li className="text-secondaryTextColor flex items-center">
        <span className="mr-3">
          <SiUdemy className="text-2xl bg-purple-600 rounded-sm"/>
        </span>
        <a href="https://www.udemy.com/certificate/UC-d20e7d0e-e24a-478e-9d98-bc4d2fea61d9/" target="_blank" rel="noopener noreferrer"
          className="hover:underline">
          Smart Tips: Soft Skills for Technical Professionals
        </a>
      </li>
    </ul>

    <ul className="space-y-3">
      <div className="text-bold text-highlightColor font-semibold">
        Linkedin Certifications
      </div>
      <li className="text-secondaryTextColor flex items-center">
        <span className="mr-3 text-3xl">
          <FaLinkedin className="text-blue-600 bg-white rounded-md"/>
        </span>
        <a href="https://www.linkedin.com/learning/certificates/e755e49bde416535651d926066f4e854cd6e88375b02eaaabec1b19a486316eb?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BvYEqGtHBSoubabkdkSj1uA%3D%3D" target="_blank" rel="noopener noreferrer"
        className="hover:underline">
            Learning Spring with Spring Boot
        </a>
      </li>
      <li className="text-secondaryTextColor flex items-center">
        <span className="mr-3 text-3xl rounded-sm">
          <FaLinkedin className="text-blue-600 bg-white rounded-md"/>
        </span>
        <a href="https://www.linkedin.com/learning/certificates/e9bbc63656200374d5036c6176c1d9d5df2f08e73fe727445412bdc13f69d8f5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BvYEqGtHBSoubabkdkSj1uA%3D%3D" target="_blank" rel="noopener noreferrer" 
        className="hover:underline">
            Introduction to Data Science
        </a>
      </li>
    </ul>
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
