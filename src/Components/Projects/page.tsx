import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'TQG Tickets',
      description:
        'This project is a comprehensive solution for creating, distributing, and managing event tickets with a focus on secure transactions and preventing ticket duplication.',
      techStack: [
        'ReactJs',
        'Supabase',
        'Tailwind CSS',
        'Typescript',
        'Vercel Hosting',
        'Firebase Edge Functions',
        'NodeMailer',
      ],
      imageUrl: '/TQGShop.png',
      github: 'https://github.com/TriumphNdlovu/taquila-gang-events',
    },
    {
      title: 'TLT Media Website',
      description: 'A modern website for a media company that specializes in video production and photography.',
      techStack: ['NextJs', 'Tailwind CSS', 'Typescript', 'Vercel Hosting', 'coudinary'],
      imageUrl: '/tlt-media.png',
      github: 'https://github.com/TriumphNdlovu/tlt-media',
    },
    {
      title: 'Jobman',
      description:'Jobman is an AI-powered career recommendation tool that helps users explore potential career paths based on their skills, education, and interests.It provides tailored career suggestions and detailed explanations on why each career might be a good fit',
      techStack: ['Angular', 'Tailwind CSS', 'Typescript', ' GoogleGenerativeAI', 'Vercel Hosting', 'Render Hosting'],
      imageUrl: '/jobman.png',
      github: 'https://github.com/TriumphNdlovu/jobman',
    },
    {
      title: 'Sweat Session',
      description:
        'The purpose of SweatSession is to develop a social, location-based mobile app that will enable users to schedule workout sessions with their friends, track their progress, view their friends personal bests, and earn rewards for achieving their fitness goals.',
      techStack: ['Angular', 'Ionic', 'Firebase', 'Tailwind CSS', 'Typescript'],
      imageUrl: '/sweatsession.webp',
      github: 'https://github.com/COS301-SE-2023/SweatSession',
    },
    {
      title: 'Desktop (POS) System',
      description:
        'The POS System(Desktop App) is a user-friendly application designed to streamline sales and inventory management for retail businesses. It features barcode scanning for quick product searches, real-time inventory updates, and secure transaction processing.',
      techStack: ['Java Swing', 'Maven', 'JPA', 'Barcode Scanning', 'PostgreSQL Database'],
      imageUrl: '/pos_system.png',
      github: 'https://github.com/TriumphNdlovu/pos_system',
    },
    

  ];

  return (
    <section className="p-8">
      <h2 className="text-4xl text-center text-maintextColor font-pixel mb-12">
        Featured Projects
      </h2>
      <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Project Image */}
            <div className="relative w-full h-72 lg:h-[20rem] rounded-lg overflow-hidden mb-6">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Project Details */}
            <h3 className="text-2xl text-neonGreen font-pixel font-semibold mb-4">
              {project.title}
            </h3>
            <p className="text-base text-secondaryTextColor font-vt323 mb-6 sm:text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs sm:text-sm bg-shadowColor border border-accentColor text-neonGreen py-1 px-3 rounded-full font-pixel hover:bg-neonGreen hover:text-highlightColor transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              className="px-6 py-2 bg-mainColor text-shadowColor font-pixel rounded-lg hover:bg-highlightColor transition duration-300"
              onClick={() => window.open(project.github, '_blank')}
            >
              View on GitHub
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
