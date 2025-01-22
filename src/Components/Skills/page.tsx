import { FaReact, FaJsSquare, FaNodeJs, FaAngular, FaDatabase, FaGitAlt, FaNpm, FaJava, FaTools, FaCcStripe, FaCss3, FaCss3Alt } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';

export default function Skills() {
 interface Skill {
  name: string;
  category: string;
  icon: JSX.Element;
  color: string;
}

const skills: Skill[] = [
  { name: 'JavaScript', category: 'Frontend', icon: <FaJsSquare size={32} />, color: 'text-yellow-500' },
  { name: 'ReactJS', category: 'Frontend', icon: <FaReact size={32} />, color: 'text-blue-500' },
  { name: 'TypeScript', category: 'Frontend', icon: <FaJsSquare size={32} />, color: 'text-blue-400' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: <FaCss3 size={32} />, color: 'text-teal-500' },
  { name: 'Next.js', category: 'Frontend', icon: <FaReact size={32} />, color: 'text-white' },
  { name: 'Angular', category: 'Frontend', icon: <FaAngular size={32} />, color: 'text-red-600' },
  { name: 'Node.js', category: 'Backend', icon: <FaNodeJs size={32} />, color: 'text-green-500' },
  { name: 'Java & Spring Boot', category: 'Backend', icon: <FaJava size={32} />, color: 'text-orange-600' },
  { name: 'Firebase', category: 'Backend', icon: <FaDatabase size={32} />, color: 'text-yellow-400' },
  { name: 'Supabase', category: 'Backend', icon: <FaDatabase size={32} />, color: 'text-green-600' },
  // { name: 'Golang', category: 'Backend', icon: <FaGolang size={32} />, color: 'text-blue-600' }, // will add this skill later
  { name: 'Maven & Gradle', category: 'Tools', icon: <FaTools size={32} />, color: 'text-gray-600' },
  { name: 'Git', category: 'Tools', icon: <FaGitAlt size={32} />, color: 'text-red-500' },
  { name: 'npm & yarn', category: 'Tools', icon: <FaNpm size={32} />, color: 'text-green-500' }
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
                    <div className={`text-4xl ${skill.color}`}>{skill.icon}</div>
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
