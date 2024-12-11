import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
        mainColor: "var(--mainColor)",
        windowBackgroud: "var(--windowBackgroud)",
        // retroPink: "var(--retroPink)",
        // darkCharcoal: "var(--darkCharcoal)",
        // mediumGray: "var(--mediumGray)",
        // borderGray: "var(--borderGray)",
        // neonBlue: "var(--neonBlue)",
        // forG: "var(--forG)",
        },
      backgroundImage: {
        'custom-backgroundImage': "var(--themeBG)",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        vt323: ['"VT323"', 'monospace'],
      },
      animation: {
        glitch: 'glitch 1s infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { textShadow: '2px 2px #ff0000, -2px -2px #00ff00' },
          '50%': { textShadow: '-2px -2px #ff0000, 2px 2px #00ff00' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
