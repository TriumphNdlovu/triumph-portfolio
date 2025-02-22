import { useState, useEffect } from "react";

export default function Game() {
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState<number | null>(null); 
  const [isGameOver, setIsGameOver] = useState(false);
  const [timer, setTimer] = useState(20); 
  const [gameStarted, setGameStarted] = useState(false);
  const [bonusTimeMessage, setBonusTimeMessage] = useState<string>("");

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
    setBonusTimeMessage(""); // Reset bonus message
  };

  // Constantly decrease timer
  useEffect(() => {
    if (timer > 0 && !isGameOver && gameStarted) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsGameOver(true);
      setGameStarted(false); 
    }
  }, [timer, isGameOver, gameStarted]);

  // Handle hitting the mole and increasing the score
  const hitMole = (index: number) => {
    if (index === molePosition && gameStarted && !isGameOver) {
      setScore(score + 1);
      setMolePosition(generateRandomPosition());
    }
  };

  // Gradually make the mole appear more frequently as score increases
  useEffect(() => {
    if (gameStarted && !isGameOver) {
      const moleInterval = setInterval(() => {
        setMolePosition(generateRandomPosition());
      }, Math.max(1500 - Math.floor(score / 5) * 100, 800)); // Mole appears every 1.5s, gradually reducing
      return () => clearInterval(moleInterval);
    }
  }, [gameStarted, isGameOver, score]);

  // Give time bonuses after every 10 points
  useEffect(() => {
    if (score > 0 && score % 10 === 0) {
      setTimer((prev) => prev + 5);
      setBonusTimeMessage("Bonus Time!"); // Display bonus time message
      setTimeout(() => {
        setBonusTimeMessage(""); // Hide bonus time message after a few seconds
      }, 2000);
    }
  }, [score]);

  return (
    <>
      <h2 className="text-4xl text-neonGreen font-pixel mb-6 text-center">
        Whack-a-Frog!
      </h2>
      <div className="text-center text-lg font-vt323 text-gray-300 mb-6">
        <p className="text-3xl text-yellow-500 font-pixel mb-6">Score: {score}</p>
        <p
          className={`text-2xl ${bonusTimeMessage ? "text-green-500" : "text-red-500"}`}
        >
          {timer}s
        </p>
        {bonusTimeMessage && (
          <p className="text-xl text-green-500 font-pixel mt-2">{bonusTimeMessage}</p>
        )}
      </div>

      <div className="flex justify-center items-center mb-6">
        <div className="grid grid-cols-3 gap-2 p-4">
          {Array.from({ length: 9 }, (_, index) => (
            <div
              key={index}
              className={`h-24 w-24 bg-specialAccentColor rounded-lg border-2 border-mainColor relative ${
                index === molePosition ? "bg-mainColor" : ""
              } ${gameStarted ? "" : "pointer-events-none"}`}
              onClick={() => hitMole(index)}
            >
              {index === molePosition && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-frog text-3xl text-white absolute" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {!gameStarted && !isGameOver && (
        <div className="text-center mt-6">
          <button
            onClick={startGame}
            className="px-6 py-3 bg-mainColor text-specialAccentColor rounded-lg font-pixel hover:bg-yellow-500 transition duration-300"
          >
            Start Game
          </button>
        </div>
      )}

      {isGameOver && (
        <div className="text-center mt-6">
          <h3 className="text-3xl text-red-500 font-pixel mb-4">Game Over!</h3>
          <p className="text-xl text-gray-400 font-vt323 mb-6">Frogs Caught: {score}</p>
          <button
            onClick={startGame}
            className="px-6 py-3 bg-neonGreen text-white rounded-lg font-pixel hover:bg-yellow-500 transition duration-300"
          >
            Play Again
          </button>
        </div>
      )}
    </>
  );
}
