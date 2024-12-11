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
      title: 'Sweat Session',
      description:
        'The purpose of SweatSession is to develop a social, location-based mobile app that will enable users to schedule workout sessions with their friends, track their progress, view their friends personal bests, and earn rewards for achieving their fitness goals.',
      techStack: ['Angular', 'Ionic', 'Firebase', 'Tailwind CSS', 'Typescript'],
      imageUrl: '/sweatsession.webp',
      github: 'https://github.com/COS301-SE-2023/SweatSession',
    },
    {
      title: 'Point of Sale (POS) System',
      description:
        'The POS System(Desktop App) is a user-friendly application designed to streamline sales and inventory management for retail businesses. It features barcode scanning for quick product searches, real-time inventory updates, and secure transaction processing.',
      techStack: ['Java Swing', 'Maven', 'JPA', 'Barcode Scanning', 'PostgreSQL Database'],
      imageUrl: '/project3-image.jpg',
      github: 'https://github.com/TriumphNdlovu/pos_system',
    },
  ];

  return (
    <section className="p-8">
      <h2 className="text-4xl text-center text-neonGreen font-pixel mb-12">
        Featured Projects
      </h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:items-center gap-8 border border-gray-700 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Project Image */}
            <div className="relative w-full lg:w-1/2 h-80 lg:h-[28rem] rounded-lg overflow-hidden border border-gray-600 mb-4 lg:mb-0">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:opacity-90 transition-opacity duration-300"
              />
            </div>

            {/* Project Details */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl text-neonGreen font-pixel font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-base text-gray-300 font-vt323 mb-6 sm:text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-gray-800 border border-neonGreen text-neonGreen py-1 px-3 rounded-full font-pixel hover:bg-neonGreen hover:text-black transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                className="px-6 py-2 bg-neonGreen text-gray-900 font-pixel rounded-lg hover:bg-yellow-500 transition duration-300"
                onClick={() => window.open(project.github, '_blank')}
              >
                View on GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
