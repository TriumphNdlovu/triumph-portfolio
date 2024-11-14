'use client';
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
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);


  const handleWindowOpen = (section: string) => {
    if (!openWindows.includes(section)) {
      setOpenWindows([...openWindows, section]);

      // Set default window size and position based on screen width
      let newPosition = { top: 30, left: 320 };
      let newSize = { width: 80, height: 60 };
      let offset = 30;

      // Adjust position for smaller screens (Mobile View)
      if (window.innerWidth < 768) {
        newPosition = { top: 5, left: 5 };
        newSize = { width: 95, height: 95 };
        offset = 0;
      }

      // Prevent overlap and adjust position for multiple windows
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
        [section]: newSize,
      }));
    }
  };

  const handleWindowClose = (section: string) => {
    setOpenWindows(openWindows.filter((window) => window !== section));
    setPositions((prevPositions) => {
      const { [section]: _, ...rest } = prevPositions;
      return rest;
    });
  };

      const handleWindowMinimize = (section: string) => {
      setMinimizedWindows([...minimizedWindows, section]);
    };


    const handleTaskbarClick = (section: string) => {
      if (minimizedWindows.includes(section)) {
        setMinimizedWindows(minimizedWindows.filter((window) => window !== section));
      } else {
        handleWindowOpen(section);
      }
    };

    
  const handleWindowMaximizeORMinimize = (section: string) => {
    setPositions((prevPositions) => ({
      ...prevPositions,
      [section]: { top: 0, left: 0 },
    }));
    if (size[section]?.width === 100) {
      setSize((prevSize) => ({
        ...prevSize,
        [section]: { width: 80, height: 60 },
      }));
    } else {
      setSize((prevSize) => ({
        ...prevSize,
        [section]: { width: 100, height: 100 },
      }));
    }
  };

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
    <>
      <div className="bg-black absolute inset-0">
    <div className="bg-[url('/background.webp')] bg-opacity-60 bg-cover bg-center bg-fixed text-white h-screen flex justify-center items-center overflow-y-clip">
      {/* Desktop Icons */}
      <div className="fixed top-0 left-0 h-full font-pixel grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-4 p-4 z-50 overflow-y-auto">
        {/* Each window icon */}
        {['about', 'projects', 'skills', 'contact', 'resume', 'blog', 'Trash', 'Game'].map((section) => (
          <div
            key={section}
            className="flex flex-col items-center cursor-pointer transform transition duration-300"
            >
            <div className="p-4 rounded-lg shadow-md hover:border-neonGreen hover:border transition duration-300 ease-in-out"
            onClick={() => handleWindowOpen(section)}
            
            >
              <i className={`fas fa-${section === 'about' ? 'user' : section === 'projects' ? 'briefcase' : section === 'skills' ? 'laptop-code' : section === 'contact' ? 'envelope' : section === 'resume' ? 'file' : section === 'blog' ? 'comments' : section === 'Trash' ? 'trash' : 'gamepad'} text-4xl text-neonGreen`}></i>
            </div>
            <p className="text-sm mt-2 text-center transition duration-300">{section.charAt(0).toUpperCase() + section.slice(1)}</p>
          </div>
        ))}
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        {openWindows.map((window, index) => (
  !minimizedWindows.includes(window) && (
    <div
      key={index}
      className="bg-forG rounded-lg border-2 border-neonGreen absolute transition-all duration-200"
      style={{
        top: `${positions[window]?.top}px`,
        left: `${positions[window]?.left}px`,
        width: `${size[window]?.width}vw`,
        minHeight: `${size[window]?.height}vh`,
        zIndex: 50 + index,
      }}
    >
      <div
        className="bg-[#121212] text-white p-2 rounded-t-lg flex justify-between 
        items-center shadow-md border-b-2 border-neonGreen
        cursor-move"
        onMouseDown={(e) => handleDrag(e, window)}
      >
        <div className="flex gap-2">
          <div
            className="w-3 h-3 bg-[#4CAF50] rounded-full hover:bg-[#45a049] cursor-pointer"
            onClick={() => handleWindowMinimize(window)}
          ></div>
          <div
            className="w-3 h-3 bg-[#FFEB3B] rounded-full hover:bg-[#FFEB3B] cursor-pointer"
            onClick={() => handleWindowMaximizeORMinimize(window)}
          ></div>
          <div
            className="w-3 h-3 bg-[#F44336] rounded-full hover:bg-[#e53935] cursor-pointer"
            onClick={() => handleWindowClose(window)}
          ></div>
        </div>
        <span className="text-lg font-pixel text-retroPink">{window.charAt(0).toUpperCase() + window.slice(1)}</span>
      </div>
      <div className="overflow-y-auto max-h-[90vh]">
        {window === 'about' && <About />}
        {window === 'projects' && <Projects />}
        {window === 'skills' && <Skills />}
        {window === 'contact' && <Contact />}
        {window === 'resume' && <Resume />}
        {window === 'blog' && <Blog />}
        {window === 'Trash' && <Trash />}
        {window === 'Game' && <Game />}
      </div>
    </div>
  )
))}

      <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] text-white flex items-center h-12 p-2 shadow-lg font-pixel z-60">
            <div className="flex items-center space-x-4 px-4 cursor-pointer hover:bg-[#3a3a3a] rounded-md py-1">
              <i className="fas fa-tv text-lg"></i>
              <span className="text-sm">Start</span>
            </div>
            <div className="flex-grow"></div>
            {/* Add icons or titles of opened windows */}
            {openWindows.map((window) => (
            <div
              key={window}
              className="flex items-center px-4 hover:bg-[#3a3a3a] cursor-pointer"
              onClick={() => handleTaskbarClick(window)}
            >
              <i className={`fas fa-${window === 'about' ? 'user' : window === 'projects' ? 'briefcase' : window === 'skills' ? 'laptop-code' : window === 'contact' ? 'envelope' : window === 'resume' ? 'file' : window === 'blog' ? 'comments' : window === 'Trash' ? 'trash' : 'gamepad'}`}></i>
              <span className="ml-2 text-xs">{window.charAt(0).toUpperCase() + window.slice(1)}</span>
            </div>
          ))}
          
          <div className="flex-right">
            15:00
          </div>

      </div>
      
        </div>
      </div>
    </div>
</>
  );
}
