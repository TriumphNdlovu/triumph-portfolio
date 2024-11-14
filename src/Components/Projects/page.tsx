import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'TQG Tickets',
      description: 'This project is a comprehensive solution for creating, distributing, and managing event tickets with a focus on secure transactions and preventing ticket duplication.',
      techStack: ['ReactJs', 'Supabase', 'Tailwind CSS', 'Typescript', 'Vercel Hosting', 'Firebase Edge Functions','NodeMailer'],
      imageUrl: '/TQGShop.png',
      github: 'https://github.com/TriumphNdlovu/taquila-gang-events',
    },
    {
      title: 'Sweat Session',
      description: 'The purpose of SweatSession is to develop a social, location-based mobile app that will enable users to schedule workout sessions with their friends, track their progress, view their friends personal bests, and earn rewards for achieving their fitness goals',
      techStack: ['Angualar', 'Ionic', 'Firebase', 'Tailwind CSS', 'Typescript'],
      imageUrl: '/sweatsession.webp',
      github: 'https://github.com/COS301-SE-2023/SweatSession',
    },
    // {
    //   title: 'Project 3',
    //   description: 'A mobile app that allows users to track their daily tasks and productivity. The design focuses on simplicity and ease of use.',
    //   techStack: ['React Native', 'MongoDB', 'Redux'],
    //   imageUrl: '/project3-image.jpg',
    //   github: 'the link to the project braddda',
    // },
    // {
    //   title: 'Project 4',
    //   description: 'A mobile app that allows users to track their daily tasks and productivity. The design focuses on simplicity and ease of use.',
    //   techStack: ['React Native', 'MongoDB', 'Redux'],
    //   imageUrl: '/project3-image.jpg',
    //   github: 'the link to the project braddda',
    // },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {projects.map((project, index) => (
        <div
          key={index}
          className=" border border-neonGreen p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 m-5"
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
                className="text-sm bg-neonGreen text-black py-1 px-3 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <a className="inline-block mt-4 px-6 py-2 bg-neonGreen text-gray-900 
                        rounded-lg font-pixel hover:bg-blue-500 transition duration-300 
                        cursor-pointer w-full justify-center text-center"
            onClick={() => window.open(project.github, '_blank')}
          >
            View on Gihub
          </a>
          
        </div>
      ))}
    </div>
  );
}
