import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Sweat Session',
      description: 'The purpose of SweatSession is to develop a social, location-based mobile app that will enable users to schedule workout sessions with their friends, track their progress, view their friends personal bests, and earn rewards for achieving their fitness goals',
      techStack: ['Angualar', 'Ionic', 'Firebase', 'Tailwind CSS'],
      imageUrl: '/sweatsession.webp',
      github: 'https://github.com/COS301-SE-2023/SweatSession',
    },
    {
      title: 'Project 2',
      description: 'This project highlights my skills in full-stack development. The app allows users to create, edit, and delete posts with a real-time messaging feature.',
      techStack: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      imageUrl: '/project2-image.jpg',
      github: 'the link to the project braddda',
    },
    {
      title: 'Project 3',
      description: 'A mobile app that allows users to track their daily tasks and productivity. The design focuses on simplicity and ease of use.',
      techStack: ['React Native', 'MongoDB', 'Redux'],
      imageUrl: '/project3-image.jpg',
      github: 'the link to the project braddda',
    },
    {
      title: 'Project 4',
      description: 'A mobile app that allows users to track their daily tasks and productivity. The design focuses on simplicity and ease of use.',
      techStack: ['React Native', 'MongoDB', 'Redux'],
      imageUrl: '/project3-image.jpg',
      github: 'the link to the project braddda',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-black border border-neonGreen p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h3 className="text-lg text-neonGreen font-pixel font-semibold mb-2">{project.title}</h3>
          <p className="text- font-vt323 mb-4 text-gray-300">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-sm bg-gray-700 text-white py-1 px-3 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <button className="bg-neonGreen text-black px-4 py-2 mt-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            onClick={() => window.open(project.github, '_blank')}
          >
            Github
          </button>
        </div>
      ))}
    </div>
  );
}
