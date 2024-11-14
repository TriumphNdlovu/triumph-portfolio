import { useState } from 'react';

const trashPhrases = [
  "This is totally not the best advice!",
  "Believe me, this is absolute trash!",
  "Definitely ignore everything I just said.",
  "The worst decision you'll ever make!",
  "Take this with a huge grain of salt!",
  "Not a good idea... trust me.",
  "This is complete nonsense, move on.",
  "Why even listen to this?",
];

export default function Trash() {
  const [randomPhrase, setRandomPhrase] = useState(trashPhrases[0]);

  // Function to get a random phrase
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * trashPhrases.length);
    setRandomPhrase(trashPhrases[randomIndex]);
  };

  return (
    <>
      <h2 className="text-4xl text-red-500 font-pixel mb-6 text-center animate-pulse">
        Trash Talk 🤪
      </h2>
      
      <div className="bg-gray-900 p-8 rounded-lg border border-neonGreen shadow-lg text-center">
        <p className="text-lg text-gray-300 font-vt323 mb-4">
          Welcome to the world of trash! Here are some things you should absolutely *not* believe.
        </p>
        
        <p className="text-3xl text-red-500 font-semibold font-pixel mb-6">
          "{randomPhrase}"
        </p>
        
        <button 
          onClick={getRandomPhrase} 
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-vt323 transition duration-300">
          Get Another Trash Phrase 💩
        </button>
      </div>
    </>
  );
}
