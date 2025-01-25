'use client';
import { useEffect, useState } from 'react';
import About from '../Components/About/page';
import Projects from '@/Components/Projects/page';
import Skills from '@/Components/Skills/page';
import Contact from '@/Components/Contact/page';
import Resume from '@/Components/Resume/page';
import Blog from './Blog';
import Game from '@/Components/Game/page';
import Info from '@/Components/Info/page';
import Settings from '@/Components/Settings/page';
import Terminal from '@/Components/Terminal/page';

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [positions, setPositions] = useState<{ [key: string]: { top: number; left: number } }>({});
  const [size, setSize] = useState<{ [key: string]: { width: number; height: number } }>({});
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);


  const handleWindowOpen = (section: string) => {
  if (!openWindows.includes(section)) {
    setOpenWindows((prevWindows) => [...prevWindows, section]);

    const offset = 30; 
    const defaultWidth = 80; 
    const defaultHeight = 70; 
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let newPosition = { top: 30, left: 320 };
    let newSize = { width: defaultWidth, height: defaultHeight };

 
    if (screenWidth < 768) {
      newPosition = { top: 1, left: 1 };
      newSize = { width: 99, height: 99 };
    }

    const existingPositions = Object.values(positions);
    if (existingPositions.length > 0) {
      const lastPosition = existingPositions[existingPositions.length - 1];
      newPosition.top = lastPosition.top + offset;
      newPosition.left = lastPosition.left + offset;
    }

    if (newPosition.left + (screenWidth * (defaultWidth / 100)) > screenWidth) {
      newPosition.left = screenWidth - screenWidth * (defaultWidth / 100) - offset;
    }
    if (newPosition.top + (screenHeight * (defaultHeight / 100)) > screenHeight) {
      newPosition.top = screenHeight - screenHeight * (defaultHeight / 100) - offset;
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
    setOpenWindows((prevWindows) => prevWindows.filter((window) => window !== section));
    setPositions((prevPositions) => {
      const { [section]: _, ...rest } = prevPositions;
      return rest;
    });
    setSize((prevSize) => {
      const { [section]: _, ...rest } = prevSize;
      return rest;
    });
  };

  const handleWindowMinimize = (section: string) => {
    setMinimizedWindows([...minimizedWindows, section]);
  };

  const handleTaskbarClick = (section: string) => {
    if (openWindows.includes(section)) {
      if (minimizedWindows.includes(section)) {
        setMinimizedWindows(minimizedWindows.filter((window) => window !== section));
      } else {
        setMinimizedWindows([...minimizedWindows, section]);
      }
    } else {
      handleWindowOpen(section);
    }
  };

  const handleWindowMaximizeORMinimize = (section: string) => {
    
    if (size[section]?.width === 100) {
      setSize((prevSize) => ({
        ...prevSize,
        [section]: { width: 80, height: 60 },
      }));
      
      // check if we are on mobile or desktop
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      if (screenWidth < 768) {
        setPositions((prevPositions) => ({
          ...prevPositions,
          [section]: { top: 1, left: 1 },
        }));
      } else {
        setPositions((prevPositions) => ({
          ...prevPositions,
          [section]: { top: 30, left: 320 },
        }));
      }
    

    } else {
      setSize((prevSize) => ({
        ...prevSize,
        [section]: { width: 100, height: 100 },
      }));
        setPositions((prevPositions) => ({
        ...prevPositions,
        [section]: { top: 0, left: 0 },
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

  const toggleStartMenu = () => {
    setStartMenuOpen((prev) => !prev);
  };

  const getBackgroundUrl = (bgName: string) => {
    switch (bgName) {
      case "windowsXp":
        return 'url("/backgroundXP.webp")';
      case "beach":
        return 'url("/beach.jpg")';
      case "space":
        return 'url("/space.jpg")';
      default:
        return ''; // Default background
    }
  };

  useEffect(() => {
    //Update theme and background image 
    const savedTheme = localStorage.getItem("theme") || "Dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    const savedBackground = localStorage.getItem("backgroundImage") || "beach";
    document.documentElement.style.setProperty('--themeBG', getBackgroundUrl(savedBackground));

    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    const fetchPosts = async () => {
      // properly make the GET request
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setPosts(data);
    };


    fetchPosts();
    setCurrentDate(new Date().toDateString());

    if (!openWindows.includes('Triumph')) {
      handleWindowOpen('Triumph');
    }
    
    // sleep for 1 sec
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    updateCurrentTime();
    const timer = setInterval(updateCurrentTime, 60000);
    return () => clearInterval(timer);
  }, []);



return (
   <div className=" absolute inset-0 select-none">
    {loading ? (
      <div className='bg-blue-500 justify-center h-screen text-center flex items-center'>
        <div className='border p-10 rounded-2xl'>
          <div className=''>
            <i className='fas fa-user text-5xl text-white'></i>
            <h1 className='text-white text-2xl'>Guest User</h1>
          </div>
          <div className='pt-14'>
              <i className='fas fa-spinner animate-spin text-5xl text-white'></i>
              <h1 className='text-white text-2xl'>Logging in...</h1>
          </div>
          </div>
      </div>
    ):(
    
      <div className="bg-custom-backgroundImage bg-cover bg-center bg-fixed text-maintextColor h-screen flex justify-center items-center overflow-y-clip overflow-x-clip">
        <div className="fixed text-sm top-0 left-0 h-full font-pixel grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-2 gap-4 p-4 z-50 overflow-y-auto">
          {['Triumph', 'projects', 'Terminal','skills', 'contact', 'resume', 'blog','info' , 'Game','Settings' ].map((section) => (
            <div
              key={section}
              className="flex flex-col items-center cursor-pointer transform transition duration-300"
              onClick={() => handleWindowOpen(section)}
            >
              <div className="p-4 rounded-lg shadow-md bg-windowBackground hover:border-mainColor border border-transparent transition duration-300 ease-in-out">
                <i
                  className={`fas fa-${
                    section === 'Triumph'
                      ? 'user-ninja'
                      : section === 'projects'
                      ? 'briefcase'
                      : section === 'skills'
                      ? 'laptop-code'
                      : section === 'contact'
                      ? 'envelope'
                      : section === 'resume'
                      ? 'file'
                      : section === 'blog'
                      ? 'comments'
                      : section === 'info'
                      ? 'info'
                      : section === 'Settings'
                      ? 'cogs'
                      :section === 'Terminal'
                      ? 'terminal'
                      : 'frog'
                  } text-lg text-neonGreen`}
                ></i>
              </div>
              <p className=" mt-2 text-center text-sm text-windowBackground transition duration-300">
                <span className ="text-shadow-3xl" >{section.charAt(0).toUpperCase() + section.slice(1)}</span>
              </p>

            </div>
          ))}
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          {openWindows.map(
            (window, index) =>
              !minimizedWindows.includes(window) && (
                <div
                  key={index}
                  className="bg-windowBackground bg-opacity-50 rounded-lg border-2 border-mainColor absolute transition-all duration-200"
                  style={{
                    top: `${positions[window]?.top}px`,
                    left: `${positions[window]?.left}px`,
                    width: `${size[window]?.width}vw`,
                    minHeight: `${size[window]?.height}vh`,
                    zIndex: 50 + index,
                    opacity: 0.95,
                  }}
                >
                  <div
                      className="bg-windowBackground text-maintextColor p-2 rounded-t-lg flex justify-between items-center shadow-md border-b-2 border-mainColor cursor-move"
                      onMouseDown={(e) => handleDrag(e, window)}
                    >
                        
                      <span className="text-lg font-pixel flex items-center justify-start">
                      {/* Icon */}
                      <i
                        className={`fas fa-${
                          window === 'Triumph'
                            ? 'user-ninja'
                            : window === 'projects'
                            ? 'briefcase'
                            : window === 'skills'
                            ? 'laptop-code'
                            : window === 'contact'
                            ? 'envelope'
                            : window === 'resume'
                            ? 'file'
                            : window === 'blog'
                            ? 'comments'
                            : window === 'info'
                            ? 'info'
                            : window === 'Settings'
                            ? 'cogs'
                            : window === 'Game'
                            ? 'gamepad'

                            : 'terminal'
                        } p-2`}
                      ></i>
                      {/* Text */}
                      <span className="ml-2 p-2">
                        {window.charAt(0).toUpperCase() + window.slice(1)}
                      </span>
                    </span>



                      <div className="flex gap-2 p-2">
                        <div
                          className="w-4 h-4 bg-[#4CAF50] rounded-full flex items-center justify-center hover:bg-[#45a049] cursor-pointer"
                          onClick={() => handleWindowMinimize(window)}
                        >
                          <i className="fas fa-minus hover:text-gray-800 text-gray-200 text-xs"></i>
                        </div>
                        <div
                          className="w-4 h-4 bg-[#FFEB3B] rounded-full flex items-center justify-center hover:bg-[#FFD700] cursor-pointer"
                          onClick={() => handleWindowMaximizeORMinimize(window)}
                        >
                          {size[window]?.width === 100 ? (
                            <i className="fa fa-angle-down text-gray-800  text-xs"></i>
                          ) : (
                            <i className="fa fa-angle-up text-gray-800  text-xs"></i>
                          )}
                        </div>
                        <div
                          className="w-4 h-4 bg-[#F44336] rounded-full flex items-center justify-center hover:bg-[#E53935] cursor-pointer"
                          onClick={() => handleWindowClose(window)}
                        >
                          <i className="fas fa-times hover:text-gray-800 text-gray-200 text-xs"></i>
                        </div>
                      </div>

                      {/* Window Title */}
                    </div>

                  <div className="overflow-y-auto max-h-[85vh] p-6">
                    {window === 'Triumph' && <About />}
                    {window === 'projects' && <Projects />}
                    {window === 'skills' && <Skills />}
                    {window === 'contact' && <Contact />}
                    {window === 'resume' && <Resume />}
                    {window === 'blog' && <Blog posts={posts} />}
                    {window === 'info' && <Info />}
                    {window === 'Game' && <Game />}
                    {window === 'Settings' && <Settings />}
                    {window === 'Terminal' && <Terminal />}
                  </div>
                </div>
              ),
          )}
        </div>

        <div className="bg-windowBackground fixed bottom-0 left-0 right-0 text-maintextColor sm:flex items-center h-14 p-3 shadow-md font-pixel z-50 border-t-2 border-mainColor">
  {/* Start Button */}
  <div
    className="start-button flex items-center space-x-4 px-4 py-2 cursor-pointer bg-specialAccentColor rounded-md hover:bg-specialAccentColor transition-all duration-200"
    id="start-button"
    onClick={toggleStartMenu}
  >
    <i className="fas fa-frog text-lg"></i>
    <span className="text-sm">Start</span>
  </div>

  {/* Start Menu */}
  {startMenuOpen && (
  <div
    className="bg-windowBackground absolute bottom-16 left-0 border-2 border-mainColor rounded-lg p-4 shadow-lg z-50 sm:w-auto w-full max-w-xs transition-all duration-300 ease-in-out transform"
    style={{ transform: startMenuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: startMenuOpen ? 1 : 0 }}
  >
    <div>
      {/* //search bar   */}
      <div className="flex items-center bg-mainColor rounded-md p-2 mb-4">
        <i className="fas fa-search text-accentColor"></i>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none text-SpecialaccentColor ml-2"
          />
      </div>
    </div>
  
    <ul className="font-pixel text-sm space-y-2">
      {/* Section 1: General */}
      <li className="font-bold text-xs text-accentColor">General</li>
      {['Triumph', 'projects', 'skills', 'Terminal'].map((section) => (
        <li
          key={section}
          className="cursor-pointer hover:bg-specialAccentColor hover:text-white rounded-md px-4 py-2 transition-all flex items-center space-x-2"
          onClick={() => {
            handleWindowOpen(section);
            toggleStartMenu();
          }}
        >
          <i
            className={`fas fa-${
              section === 'Triumph'
                ? 'user-ninja'
                : section === 'projects'
                ? 'briefcase'
                : section === 'skills'
                ? 'laptop-code'
                : 'terminal'
            }`}
          ></i>
          <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
        </li>
      ))}

      {/* Section 2: Media */}
      <li className="font-bold text-xs text-accentColor mt-4">Media</li>
      {['contact', 'resume','blog', 'Game'].map((section) => (
        <li
          key={section}
          className="cursor-pointer hover:bg-specialAccentColor hover:text-white rounded-md px-4 py-2 transition-all flex items-center space-x-2"
          onClick={() => {
            handleWindowOpen(section);
            toggleStartMenu();
          }}
        >
          <i
            className={`fas fa-${
              section === 'contact'
                ? 'envelope'
                : section === 'resume'
                ? 'file'
                : section === 'Game'
                ? 'gamepad'
                : 'comments'
            }`}
          ></i>
          <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
        </li>
      ))}

      {/* Section 3: Settings & Info */}
      <li className="font-bold text-xs text-accentColor mt-4">Settings & Info</li>
      {['info', 'Settings'].map((section) => (
        <li
          key={section}
          className="cursor-pointer hover:bg-specialAccentColor hover:text-white rounded-md px-4 py-2 transition-all flex items-center space-x-2"
          onClick={() => {
            handleWindowOpen(section);
            toggleStartMenu();
          }}
        >
          <i
            className={`fas fa-${
              section === 'info'
                ? 'info'
              : section === 'Settings'
                ? 'cogs'
                : 'cogs'
            }`}
          ></i>
          <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
        </li>
      ))}
    </ul>
  </div>
)}


  {/* Taskbar Windows */}
  <div className="flex space-x-2 overflow-x-auto p-2">
    {openWindows.map((window) => (
      <div
        key={window}
        className="flex items-center px-4 hover:bg-shadowColor cursor-pointer border-l border-neonGreen py-2 rounded-md transition-all duration-200"
        onClick={() => handleTaskbarClick(window)}
        onContextMenu={(e) => {
          e.preventDefault();
          handleWindowClose(window);
        }}
      >
        <i
          className={`fas fa-${
            window === 'Triumph'
              ? 'user-ninja'
              : window === 'projects'
              ? 'briefcase'
              : window === 'skills'
              ? 'laptop-code'
              : window === 'contact'
              ? 'envelope'
              : window === 'resume'
              ? 'file'
              : window === 'blog'
              ? 'comments'
              : window === 'info'
              ? 'info'
              : window === 'settings'
              ? 'cogs'
              : window === 'terminal'
              ? 'terminal'
              : 'gamepad'
          }`}
        ></i>
        <span className="ml-2 text-xs">{window.charAt(0).toUpperCase() + window.slice(1)}</span>
      </div>
    ))}
  </div>

  {/* Spacer */}
  <div className="flex-grow"></div>

  {/* Current Time */}
  <div className="flex items-center mr-4 text-xs font-semibold">{currentTime}, {currentDate} </div>
</div>
      </div>
    )}
    </div>
  );
}