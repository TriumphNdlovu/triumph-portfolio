'use client'
import Link from 'next/link';
import ScrollProgressBar from '../Components/ScrollProgressBar';

export default function Home() {
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




      {/* Footer */}
      <footer className="bg-black text-center p-4 text-neonGreen">
        <p>&copy; 2024 Triumph Ndlovu | All Rights Reserved</p>
      </footer>
    </div>
  );
}
