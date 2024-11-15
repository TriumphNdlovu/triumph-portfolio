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
        // neonGreen: '#00FF00',387654
        // neonGreen: '#38ff11',
        // neonGreen: '#b5366b',
        neonGreen : '#305cb3',
        // retroPink: '#FF1493',F6733A
        retroPink: '#ffffff',
        darkCharcoal: '#444444', // Lighter charcoal
        mediumGray: '#555555', // Medium gray for some sections
        borderGray: '#333333',
        neonBlue: '#00FFFF', // Retro blue
        forG: '#000000',
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
        pixel: ['"Press Start 2P"', 'system-ui'],
        vt323: ['"VT323"', 'monospace'], // Option for VT323 font
      },
    },
  },
  plugins: [],
} satisfies Config;