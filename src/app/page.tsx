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
          <h1 className="text-6xl font-vt323 mb-4 animate-glitch text-retroPink">Triumph Ndlovu</h1>
          <p className="text-xl mb-8 text-neonGreen font-pixel">A passionate developer focused on creating innovative and efficient solutions.</p>
          <a href="#projects" className="bg-retroPink text-black p-3 rounded-lg hover:bg-neonGreen hover:text-black">See My Work</a>
        </div>

        {/* Flying Objects */}
        <div className="flying-object" style={randomPosition()}></div>
        <div className="flying-object" style={randomPosition()}></div>
        <div className="flying-object" style={randomPosition()}></div>
        <div className="flying-object" style={randomPosition()}></div>
        <div className="flying-object" style={randomPosition()}></div>
      </section>

     <section id="about" className="py-16 bg-black text-neonGreen text-center">
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
    <div className="text-lg font-mono text-neonGreen bg-black p-6 rounded-md leading-relaxed max-w-2xl md:text-left text-center shadow-lg border border-neonGreen">
      {/* Terminal Prompt */}
      <p className="text-retroPink">
        triumph@Linux:~/Documents/triumph-portfolio$
      </p>
      <p className="">
        I'm a BSc Computer Science graduate from the University of Pretoria, passionate about solving complex problems through technology. With experience in web development, software engineering, and a focus on creating impactful solutions, I strive to build things that make a difference.
      <span className="blink text-retroPink">|</span>
      </p>
    </div>
  </div>
</section>


{/* Projects Section */}
<section id="projects" className="py-16 bg-black text-neonGreen text-center">
  <h2 className="text-4xl font-vt323 mb-8 text-retroPink">Projects</h2>

  <div className="flex flex-row gap-12 max-w-4xl mx-auto px-4">
    {/* Project 1 */}
    <div
      className="opacity-0 w-[20vw] h-[80vh]  flex flex-col md:flex-row items-center justify-center shadow-lg border border-neonGreen overflow-hidden"
      ref={(el) => {
        projectRefs.current[0] = el;
      }}
      
    >
      {/* Image */}
      <img
        src="/sweatsession.png"
        alt="Sweat Session"
        // className="w-full h-auto md:w-1/2 object-contain border-2 border-neonGreen"
        data-animation="left"
      />

      {/* Content */}
      {/* <div className="flex flex-col justify-center text-center md:text-left mt-6 md:mt-0 md:ml-6">
        <h3 className="text-2xl font-pixel mb-2 text-retroPink">Sweat Session Mobile App</h3>
        <p className="text-lg mb-4">
          The purpose of SweatSession is to develop a social, location-based mobile app that will enable users to schedule workout sessions with their friends, track their progress, view their friends' personal bests, and earn rewards for achieving their fitness goals.
        </p>
        <a href="#" className="text-retroPink hover:text-neonGreen">GitHub Link</a>
      </div> */}
    </div>

    {/* Project 2 */}
    <div
      className="opacity-0 bg-darkGray p-6 rounded-lg w-[60vw] h-[80vh] flex flex-col md:flex-row items-center justify-center shadow-lg border border-neonGreen overflow-hidden"
      data-animation="right"
      ref={(el) => { projectRefs.current[1] = el }}
    >
      {/* Image */}
      {/* <img
        src="/project2.png"
        alt="Project 2"
        className="w-full h-auto md:w-1/2 object-contain border-2 border-neonGreen"
      /> */}

      {/* Content */}
      {/* <div className="flex flex-col justify-center text-center md:text-left mt-6 md:mt-0 md:ml-6">
        <h3 className="text-2xl font-pixel mb-2 text-retroPink">Project 2</h3>
        <p className="text-lg mb-4">A brief description of what this project is about.</p>
        <a href="#" className="text-retroPink hover:text-neonGreen">View Details</a>
      </div> */}
      <div className="flex flex-col justify-center text-center md:text-left mt-6 md:mt-0 md:ml-6">
        <h3 className="text-2xl font-pixel mb-2 text-retroPink">Sweat Session Mobile App</h3>
        <p className="text-lg mb-4">
          The purpose of SweatSession is to develop a social, location-based mobile app that will enable users to schedule workout sessions with their friends, track their progress, view their friends' personal bests, and earn rewards for achieving their fitness goals.
        </p>
        <a href="#" className="text-retroPink hover:text-neonGreen">GitHub Link</a>
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
