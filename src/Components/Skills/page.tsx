import { Interface } from "readline";

export default function Skills() {
  interface Skill {
    name: string;
    category: string;
  }

  const skills: Skill[] = [
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'ReactJS', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Next.Js', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Supabase', category: 'Backend' },
    { name: 'Node.Js', category: 'Backend' },
    { name: 'Java & Spring Boot', category: 'Backend' },
    { name: 'Git', category: 'Tools' },
    { name: 'Maven & Gandle', category: 'Tools' },
    { name: 'npm & yarn', category: 'Tools' }
];


  const groupedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <>
      <div className="space-y-8">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category}>
            <h2 className="text-2xl text-neonGreen font-pixel font-semibold mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 border border-neonGreen rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <h3 className="text-lg text-white font-pixel font-semibold mb-2">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
