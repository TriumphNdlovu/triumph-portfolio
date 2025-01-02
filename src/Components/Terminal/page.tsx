import { useState, useEffect, useRef } from "react";
import About from "../About/page";
import Projects from "../Projects/page";
import Info from "../Info/page";
import Game from "../Game/page";
import Resume from "../Resume/page";
import Skills from "../Skills/page";
import Contact from "../Contact/page";
import Settings from "../Settings/page";
import Blog from "../Blog/page";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "Welcome to Triumph's Portfolio Terminal!",
    "Type 'help' or '?' to see available commands.",
  ]);
  const [currentView, setCurrentView] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = [
    "cd about",
    "cd projects",
    "cd info",
    "cd game",
    "cd resume",
    "cd skills",
    "cd contact",
    "cd settings",
    "cd blog",
    "help",
    "clear",
  ];

  const handleCommand = (command: string) => {
    let newOutput = [...output];

    switch (command.toLowerCase()) {
      case "help":
      case "ls":
      case "h":
      case "?":
        newOutput.push("Available commands:");
        newOutput.push(
          "> cd about || cd projects || cd info || cd game || cd resume || cd skills || cd contact || cd settings || cd blog"
        );
        newOutput.push("> clear: Clear the terminal.");
        break;
      case "cd about":
        newOutput.push("Loading About section...");
        setCurrentView("about");
        break;
      case "cd projects":
        newOutput.push("Loading Projects section...");
        setCurrentView("projects");
        break;
      case "cd info":
        newOutput.push("Loading Info section...");
        setCurrentView("info");
        break;
      case "cd game":
        newOutput.push("Loading Game section...");
        setCurrentView("game");
        break;
      case "cd resume":
        newOutput.push("Loading Resume section...");
        setCurrentView("resume");
        break;
      case "cd skills":
        newOutput.push("Loading Skills section...");
        setCurrentView("skills");
        break;
      case "cd contact":
        newOutput.push("Loading Contact section...");
        setCurrentView("contact");
        break;
      case "cd settings":
        newOutput.push("Loading Settings section...");
        setCurrentView("settings");
        break;
      case "cd blog":
        newOutput.push("Loading Blog section...");
        setCurrentView("blog");
        break;
      case "clear":
        newOutput = [];
        setCurrentView(null);
        break;
      default:
        newOutput.push(`X Unknown command: '${command}'`);
    }

    setOutput(newOutput);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setHistory([...history, input]);
      setHistoryIndex(history.length + 1);
      setOutput([...output, `> ${input}`]);
      handleCommand(input.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      const prevIndex = Math.max(0, historyIndex - 1);
      setHistoryIndex(prevIndex);
      setInput(history[prevIndex] || "");
    } else if (e.key === "ArrowDown") {
      const nextIndex = Math.min(history.length, historyIndex + 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex] || "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = commands.find((cmd) => cmd.startsWith(input));
      if (match) setInput(match);
    } else if (e.ctrlKey && e.key === "c") {
      setOutput([...output, "^C"]);
      setInput("");
    }
  };

  // Scroll to the bottom of the terminal when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className=" font-mono p-4 rounded-lg shadow-lg">
      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="overflow-y-auto max-h-64 px-4 py-2 rounded-md text-sm scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-700"
      >
        {output.map((line, index) => (
          <div
            key={index}
            className={`${
              line.startsWith(">") ? "text-green-400" : "text-white"
            } ${line.startsWith("X") ? "text-red-500" : "text-white"}`}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} className="flex items-center mt-4">
        <span className="text-green-500 mr-2">triumph@portfolio:$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none focus:outline-none text-white caret-green-600 caret-2 placeholder-green-500"
          autoFocus
        />
      </form>

      {/* Render Section Based on Command */}
      <div className="mt-6 p-4 rounded-lg">
        {currentView === "about" && <About />}
        {currentView === "projects" && <Projects />}
        {currentView === "info" && <Info />}
        {currentView === "game" && <Game />}
        {currentView === "resume" && <Resume />}
        {currentView === "skills" && <Skills />}
        {currentView === "contact" && <Contact />}
        {currentView === "settings" && <Settings />}
        {currentView === "blog" && <Blog />}
      </div>
    </div>
  );
}
