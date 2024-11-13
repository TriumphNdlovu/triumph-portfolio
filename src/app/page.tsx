'use client'
import Link from 'next/link';
import ScrollProgressBar from '../Components/ScrollProgressBar';
import { useEffect, useRef } from 'react';

export default function Home() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Function to generate random values
  const randomPosition = () => {
    const randomTop = Math.random() * 100; // Random top position (percentage)
    const randomLeft = Math.random() * 100; // Random left position (percentage)
    const randomDelay = Math.random() * 5 + 's'; // Random delay for animation
    const randomDuration = Math.random() * 3 + 5 + 's'; // Random duration (8s to 11s)
    return {
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      animationDelay: randomDelay,
      animationDuration: randomDuration,
    };
  };

    useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement; // Cast to HTMLElement

        // Reset the animation when leaving the viewport
        if (!entry.isIntersecting) {
          element.classList.remove('animate-slideInLeft', 'animate-slideInRight');
          element.classList.add('opacity-0'); // Keep it hidden when not in view
        }

        // Add animation when the element is in the viewport
        if (entry.isIntersecting) {
          const animation = element.dataset.animation === 'left' ? 'animate-slideInLeft' : 'animate-slideInRight';
          element.classList.remove('opacity-0'); // Remove opacity when the animation starts
          element.classList.add(animation); // Add animation class
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is in view
  );

  projectRefs.current.filter((project): project is HTMLDivElement => project !== null).forEach((project) => observer.observe(project));

  return () => observer.disconnect();
}, []);


  return (
    <div className="scroll-smooth bg-black relative">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Hero Section */}
      <section id="hero" className="h-screen bg-black flex items-center justify-center text-center text-neonGreen relative overflow-hidden">
        <div>
          <h1 className="text-6xl font-vt323 mb-4  text-retroPink animate-glitch">Triumph Ndlovu</h1>
          <p className="text-xl mb-8 text-neonGreen font-pixel">A passionate developer focused on creating innovative and efficient solutions.</p>
          <div className='animate-glitch'>
          <a href="#projects" className="bg-retroPink text-black p-3 rounded-lg hover:bg-neonGreen hover:text-black ">Let's Explore</a>
          </div>
        </div>

        {/* Flying Objects */}
        <div className="flying-object" style={randomPosition()}></div>
        <div className="flying-object" style={randomPosition()}></div>
        <div className="flying-object" style={randomPosition()}></div>
        <div className="flying-object" style={randomPosition()}></div>
        <div className="flying-object" style={randomPosition()}></div>
      </section>

     <section id="about" className="py-16 bg-black text-neonGreen text-center h-[100vh]">
  <h2 className="text-4xl font-vt323 mb-8 text-retroPink">About Triumph</h2>
  
  <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 max-w-4xl mx-auto px-4">
    {/* Profile Image */}
    <div className="relative w-48 h-48 rounded-full border-4 border-neonGreen overflow-hidden">
      <img 
        src="/profilePicture.png" 
        alt="Triumph Ndlovu"
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Terminal-Style Text */}
    <div className="text-lg font-mono text-neonGreen  bg-black p-6 rounded-md leading-relaxed max-w-2xl md:text-left text-center shadow-lg border border-neonGreen">
      {/* Terminal Prompt */}
      <p className="text-retroPink">
        triumph@Linux:~/github/triumph-portfolio$
      </p>
      <p className="">
        I'm a BSc Computer Science graduate from the University of Pretoria, passionate about solving complex problems through technology. With experience in web development, software engineering, and a focus on creating impactful solutions, I strive to build things that make a difference.
      <span className="blink text-retroPink">|</span>
      </p>
    </div>
  </div>
  <a 
    href="/path/to/your-cv.pdf" 
    download 
    className="inline-block bg-retroPink text-black py-3 px-6 rounded-lg hover:bg-neonGreen font-pixel">
    Download CV
  </a>

</section>


{/* Skills Section */}
{/* Skills Section */}
<section id="skills" className="py-16 bg-black text-neonGreen text-center h-[100vh] flex flex-col items-center">
  <h2 className="text-4xl font-vt323 mb-8 text-retroPink">Skills</h2>

  {/* Skills Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl px-4">
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">JavaScript</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">TypeScript</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">React</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">Node.js</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">Express</div>
    {/* // vertial line */}
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">Next.js</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">MongoDB</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">Firebase</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">Tailwind CSS</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">Java</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">Spring Boot</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">SQL</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">Python</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">HTML & CSS</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">Git</div>
    <div className="bg-darkGray p-4 rounded-lg border border-neonGreen font-pixel">Docker</div>
  </div>
</section>






<section id="projects" className="py-16 bg-black text-neonGreen text-center h-screen">
  <h2 className="text-4xl font-vt323 mb-8 text-retroPink">Projects</h2>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
    
    {/* Project Card */}
    <div className="relative group border border-neonGreen rounded-lg overflow-hidden shadow-lg bg-opacity-10 hover:bg-opacity-20 transition">
      {/* Image */}
      <img
        src="/sweatsession.png"
        alt="Sweat Session"
        className="w-full h-[50vh] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-4">
        <div className="text-center">
          <h3 className="text-2xl font-pixel text-retroPink mb-2">Sweat Session Mobile App</h3>
          <p className="text-lg mb-4">
            A social, location-based app for scheduling workout sessions, tracking progress, and achieving fitness goals with friends.
          </p>
          <a href="#" className="text-retroPink hover:text-neonGreen">GitHub Link</a>
        </div>
      </div>
    </div>

    {/* Project 2 Card */}
    <div className="relative group border border-neonGreen rounded-lg overflow-hidden shadow-lg bg-opacity-10 hover:bg-opacity-20 transition">
      <img
        src="/project2.png"
        alt="Project 2"
        className="w-full h-[50vh] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-4">
        <div className="text-center">
          <h3 className="text-2xl font-pixel text-retroPink mb-2">Project 2</h3>
          <p className="text-lg mb-4">A brief description of this project.</p>
          <a href="#" className="text-retroPink hover:text-neonGreen">View Details</a>
        </div>
      </div>
    </div>

  </div>
</section>


      {/* Footer */}
      <footer className="bg-black text-center p-4 text-neonGreen">
        <p>&copy; 2024 Triumph Ndlovu | All Rights Reserved</p>
      </footer>
    </div>
  );
}
