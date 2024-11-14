'use client'
import { useState } from 'react';
import About from '../Components/About/page';
import Projects from '@/Components/Projects/page';
import Skills from '@/Components/Skills/page';
import Contact from '@/Components/Contact/page';
import Resume from '@/Components/Resume/page';
import Blog from '@/Components/Blog/page';
import Trash from '@/Components/Trash/page';
import Game from '@/Components/Game/page';

export default function Home() {
  // State to manage the active windows
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [positions, setPositions] = useState<{ [key: string]: { top: number; left: number } }>({});
  const [size, setSize] = useState<{ [key: string]: { width: number; height: number } }>({});

  const handleWindowOpen = (section: string) => {
    if (!openWindows.includes(section)) {
      setOpenWindows([...openWindows, section]);

      // if on a mobile device, set the position to center
      let newPosition = { top: 30, left: 320 };
      let size = { width: 80, height: 60 };
      let offset = 30; 

      if (window.innerWidth < 768) {
        newPosition = { top: 0, left: 0 };
        size = { width: 100, height: 100 };
        offset = 0;
      }

      const existingPositions = Object.values(positions);
      if (existingPositions.length > 0) {
        const lastPosition = existingPositions[existingPositions.length - 1];
        newPosition.top = lastPosition.top + offset; 
        newPosition.left = lastPosition.left + offset; 
      }

      setPositions((prevPositions) => ({
        ...prevPositions,
        [section]: newPosition, 
      }));

      setSize((prevSize) => ({ 
        ...prevSize,
        [section]: size,
      }));
    }
  };

  const handleWindowClose = (section: string) => {
    setOpenWindows(openWindows.filter(window => window !== section));
    setPositions((prevPositions) => {
      const { [section]: _, ...rest } = prevPositions; 
      return rest;
    });
  };

  const handleWindowMaximize = (section: string) => {
      // make the size 100vw and 100 vh
      setPositions((prevPositions) => ({
        ...prevPositions,
        [section]: { top: 0, left: 0 },
      }));
      if(size[section].width === 100)
        {
          setSize((prevSize) => ({
            ...prevSize,
            [section]: { width: 80, height: 60 },
          }));
        }
      else
      {
        setSize((prevSize) => ({
          ...prevSize,
          [section]: { width: 100, height: 100 },
        }));
      }

  }

  const handleDrag = (e: React.MouseEvent, windowName: string) => {
    const startX = e.clientX;
    const startY = e.clientY;
    const startTop = positions[windowName].top;
    const startLeft = positions[windowName].left;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const newTop = startTop + moveEvent.clientY - startY;
      const newLeft = startLeft + moveEvent.clientX - startX;

      setPositions((prevPositions) => ({
        ...prevPositions,
        [windowName]: { top: newTop, left: newLeft },
      }));
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    
<div className="bg-[#121212] text-white h-screen flex justify-center items-center overflow-y-clip">
  {/* Desktop Icons */}
  <div className="fixed top-0 left-0 h-full font-pixel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p-4 z-50 overflow-y-auto">
    <div
      className="flex flex-col items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110"
      onClick={() => handleWindowOpen('about')}
    >
      <div className="p-4 rounded-lg shadow-md hover:border-neonGreen hover:border transition duration-300 ease-in-out">
        <i className="fas fa-user text-4xl text-neonGreen"></i>
      </div>
      <p className="text-sm mt-2 text-center transition duration-300">About</p>
    </div>

    <div
      className="flex flex-col items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110"
      onClick={() => handleWindowOpen('projects')}
    >
      <div className="p-4 rounded-lg shadow-md hover:border-neonGreen hover:border transition duration-300 ease-in-out">
        <i className="fas fa-briefcase text-4xl text-neonGreen"></i>
      </div>
      <p className="text-sm  mt-2 text-center transition duration-300">Projects</p>
    </div>

    <div
      className="flex flex-col items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110"
      onClick={() => handleWindowOpen('skills')}
    >
      <div className="p-4 rounded-lg shadow-md hover:border-neonGreen hover:border transition duration-300 ease-in-out">
        <i className="fas fa-laptop-code text-4xl text-neonGreen"></i>
      </div>
      <p className="text-sm mt-2 text-center transition duration-300">Skills</p>
    </div>

    <div
      className="flex flex-col items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110"
      onClick={() => handleWindowOpen('contact')}
    >
      <div className="p-4 rounded-lg shadow-md hover:border-neonGreen hover:border transition duration-300 ease-in-out">
        <i className="fas fa-envelope text-4xl text-neonGreen"></i>
      </div>
      <p className="text-sm mt-2 text-center transition duration-300">Contact</p>
    </div>

    <div
      className="flex flex-col items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110"
      onClick={() => handleWindowOpen('resume')}
    >
      <div className="p-4 rounded-lg shadow-md hover:border-neonGreen hover:border transition duration-300 ease-in-out">
        <i className="fas fa-file text-4xl text-neonGreen"></i>
      </div>
      <p className="text-sm mt-2 text-center transition duration-300">Resume</p>
    </div>

    <div
      className="flex flex-col items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110"
      onClick={() => handleWindowOpen('blog')}
    >
      <div className="p-4 rounded-lg shadow-md hover:border-neonGreen hover:border transition duration-300 ease-in-out">
        <i className="fas fa-comments text-4xl text-neonGreen"></i>
      </div>
      <p className="text-sm mt-2 text-center transition duration-300">Blog</p>
    </div>

    <div 
      className="flex flex-col items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110"
      onClick={() => handleWindowOpen('Trash')}
    >
      <div className="p-4 rounded-lg shadow-md hover:border-neonGreen hover:border transition duration-300 ease-in-out">
        <i className="fas fa-trash text-4xl text-neonGreen"></i>
      </div>
      <p className="text-sm mt-2 text-center transition duration-300">Trash</p>
    </div>

    <div
      className="flex flex-col items-center cursor-pointer transform transition duration-300 ease-in-out hover:scale-110"
      onClick={() => handleWindowOpen('Game')}
    >
      <div className="p-4 rounded-lg shadow-md hover:border-neonGreen hover:border transition duration-300 ease-in-out">
        <i className="fas fa-gamepad text-4xl text-neonGreen"></i>
      </div>
      <p className="text-sm mt-2 text-center transition duration-300">Game</p>
    </div>
  </div>

      <div className="relative w-full h-full flex items-center justify-center">
        {openWindows.map((window, index) => (
          <div
            key={index}
            className="bg-forG rounded-lg border-2 border-neonGreen absolute w-96 min-h-[70vh] transition-all duration-200"
            style={{
              top: `${positions[window]?.top}px`,
              left: `${positions[window]?.left}px`,
              width: `${size[window]?.width}vw`,
              minHeight: `${size[window]?.height}vh`, 
              zIndex: 50 + index,
            }} 
          >
            

            <div
              className="bg-[#121212] text-white p-2 rounded-t-lg flex justify-between items-center shadow-md border-b-2 border-neonGreen"
              onMouseDown={(e) => handleDrag(e, window)} 
            >
              <div className="flex gap-2">
                {/* Buttons (Minimize, Maximize, Close) */}
                <div className="w-3 h-3 bg-[#4CAF50] rounded-full hover:bg-[#45a049] cursor-pointer"
                  onClick={() => handleWindowClose(window)}
                  
                ></div> {/* Minimize */}
                <div className="w-3 h-3 bg-[#FFEB3B] rounded-full hover:bg-[#FFEB3B] cursor-pointer"
                onClick={() => handleWindowMaximize(window)}
                
                ></div> {/* Maximize */}
                <div
                  className="w-3 h-3 bg-[#F44336] rounded-full hover:bg-[#e53935] cursor-pointer"
                  onClick={() => handleWindowClose(window)}
                ></div> 
              </div>
              <span className=" text-lg font-pixel text-retroPink">{window.charAt(0).toUpperCase() + window.slice(1)}</span>
            </div>

         
            {window === 'about' && (
              <section id = 'about' className="p-6 text-white max-h-[90vh] overflow-y-auto">
                <About />
              </section>
            )}

            {window === 'projects' && (
              <section id="projects" className="p-6 text-white max-h-[90vh] overflow-y-auto">
                <Projects />
              </section>
            )}


            {window === 'skills' && (
                  <section id="skills" className="p-6 text-white max-h-[90vh] overflow-y-auto">
                    <Skills />
                  </section>
            )}


            {window === 'contact' && (
                <section id="contact" className="p-6 text-white max-h-[90vh] overflow-y-auto">
                    <Contact />
                  </section> 
            )}

            {window === 'resume' && (
                <section id="resume" className="p-6 text-white max-h-[90vh] overflow-y-auto">
                  <Resume />                  
                </section>
            )}
            {window === 'blog' && (
              <section id="blog" className="p-6 text-white max-h-[90vh] overflow-y-auto">
                      <Blog />
              </section>
            )}
            
            {window === 'Trash' && (
              <section id="Trash" className="p-6 text-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
                <Trash />
              </section>
            )}

            {window === 'Game' && (
              <section id="Game" className="p-6 text-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
                <Game />
              </section>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}