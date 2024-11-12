import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { 
        neonGreen: '#00FF00',
        retroPink: '#FF1493',
        darkCharcoal: '#444444', // Lighter charcoal
        mediumGray: '#555555', // Medium gray for some sections
        borderGray: '#333333',
        neonBlue: '#00FFFF', // Retro blue
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
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        vt323: ['"VT323"', 'monospace'], // Option for VT323 font
      },
    },
  },
  plugins: [],
} satisfies Config;