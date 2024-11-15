import Image from 'next/image';

export default function Info() {
  return (
    <div className=" text-lg font-vt323 text-gray-300 mb-6 overflow-x-auto">
      <h2 className="text-4xl text-neonGreen font-pixel mb-6 text-center animate-glitch">
        Welcome to My Portfolio!
      </h2>

      <h3 className="text-xl text-neonGreen font-pixel mb-4 text-center">
        For the Best Experience Please use a{' '}
        <span className="text-yellow-600 animate-bounce">Desktop or Laptop</span>
      </h3>

      <h3 className="text-xl text-neonGreen font-pixel mb-4 text-center">
        Tips for Navigation:
      </h3>
      <p className="text-lg text-gray-400 font-bold mb-4 text-center">
        Use the icons on screen to quickly access different sections of the website.  
        <br />
        Minimize, maximize, or drag windows to explore your favorite content.
        <br />
        If you have any questions or feedback, feel free to reach out through the contact section!
      </p>

      <p className="text-sm text-yellow-600 font-pixel text-center mb-4">
        This website was built using NextJs, Tailwind CSS, and a touch of nostalgia.
      </p>

      
      <div className="text-center mt-6">
        <div className=" fas text-4xl mb-4">
          <i className="fas fa-gamepad"></i>
          <Image
            src="/game.webp"
            alt="I will add some fun GIF/animation here"
            width={200}
            height={5}
            className="rounded-lg"
          />

        </div>
      </div>
    </div>
  );
}
