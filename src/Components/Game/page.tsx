import { useState, useEffect } from "react";

export default function Game() {
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState<number | null>(null); 
  const [isGameOver, setIsGameOver] = useState(false);
  const [timer, setTimer] = useState(20); 
  const [gameStarted, setGameStarted] = useState(false); 

  const generateRandomPosition = () => {
    const randomIndex = Math.floor(Math.random() * 9); 
    return randomIndex;
  };

  const startGame = () => {
    setScore(0);
    setTimer(20);
    setIsGameOver(false);
    setGameStarted(true);
    setMolePosition(generateRandomPosition());
  };

  useEffect(() => {
    if (timer > 0 && !isGameOver && gameStarted) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsGameOver(true);
      setGameStarted(false); 
    }
  }, [timer, isGameOver, gameStarted]);

  const hitMole = (index: number) => {
    if (index === molePosition && gameStarted && !isGameOver) {
      setScore(score + 1);
      setMolePosition(generateRandomPosition());
    }
  };

  return (
    <>
      <h2 className="text-4xl text-neonGreen font-pixel mb-6 text-center">
        Whack-a-Mole Game
      </h2>
      <div className="text-center text-lg font-vt323 text-gray-300 mb-6">
        <p className="text-3xl text-red-500 font-pixel mb-6">Score: {score}</p>
        <p className="text-2xl text-gray-500">Time Left: {timer}s</p>
      </div>

      <div className="grid items-center justify-center grid-cols-3 gap-2 mb-6">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            className={`h-24 w-24 bg-black rounded-lg border-2 border-neonGreen relative ${
              index === molePosition ? "bg-green-500" : ""
            } ${gameStarted ? "" : "pointer-events-none"}`} 
            onClick={() => hitMole(index)}
          >
            {index === molePosition && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-neonGreen rounded-full" />
              </div>
            )}
          </div>
        ))}
      </div>

      {!gameStarted && !isGameOver && (
        <div className="text-center mt-6">
          <button
            onClick={startGame}
            className="px-6 py-3 bg-neonGreen text-white rounded-lg font-pixel hover:bg-blue-500 transition duration-300"
          >
            Start Game
          </button>
        </div>
      )}

      {isGameOver && (
        <div className="text-center mt-6">
          <h3 className="text-3xl text-red-500 font-pixel mb-4">Game Over!</h3>
          <p className="text-xl text-gray-400 font-vt323 mb-6">Your final score: {score}</p>
          <button
            onClick={startGame}
            className="px-6 py-3 bg-neonGreen text-white rounded-lg font-pixel hover:bg-blue-500 transition duration-300"
          >
            Play Again
          </button>
        </div>
      )}
    </>
  );
}