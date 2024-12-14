import { FaReact, FaJsSquare, FaNodeJs, FaAngular, FaDatabase, FaGitAlt, FaNpm, FaJava, FaTools } from 'react-icons/fa';

export default function Skills() {
  interface Skill {
    name: string;
    category: string;
    icon: JSX.Element; // Add an icon to each skill
  }

  const skills: Skill[] = [
    { name: 'JavaScript', category: 'Frontend', icon: <FaJsSquare size={32} /> },
    { name: 'ReactJS', category: 'Frontend', icon: <FaReact size={32} /> },
    { name: 'TypeScript', category: 'Frontend', icon: <FaJsSquare size={32} /> }, // Example for TypeScript icon, can use any
    { name: 'Tailwind CSS', category: 'Frontend', icon: <FaTools size={32} /> },  // Placeholder icon
    { name: 'Next.Js', category: 'Frontend', icon: <FaReact size={32} /> },      // Placeholder icon
    { name: 'Angular', category: 'Frontend', icon: <FaAngular size={32} /> },
    { name: 'Node.Js', category: 'Backend', icon: <FaNodeJs size={32} /> },
    { name: 'Java & Spring Boot', category: 'Backend', icon: <FaJava size={32} /> },  // Add a Spring Boot or Java icon
    { name: 'Firebase', category: 'Backend', icon: <FaDatabase size={32} /> }, 
    { name: 'Supabase', category: 'Backend', icon: <FaDatabase size={32} /> }, 
    { name: 'Maven & Gradle', category: 'Tools', icon: <FaTools size={32} /> },
    { name: 'Git', category: 'Tools', icon: <FaGitAlt size={32} /> },
    { name: 'npm & yarn', category: 'Tools', icon: <FaNpm size={32} /> }
  ];

  const groupedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <>
      <div className="space-y-12 px-6 sm:px-12">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category}>
            <h2 className="text-3xl text-maintextColor font-pixel font-semibold mb-6">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 border border-neonGreen rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <div className="text-4xl text-neonGreen">{skill.icon}</div>
                  </div>
                  <h3 className="text-lg text-secondaryTextColor font-pixel font-semibold text-center">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
