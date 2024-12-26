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
        maintextColor: "var(--maintextColor)", 
        accentColor: "var(--accentColor)", 
        highlightColor: "var(--highlightColor)", 
        windowBackground: "var(--windowBackground)", 
        secondaryTextColor: "var(--secondaryTextColor)", 
        shadowColor: "var(--shadowColor)", 
        specialAccentColor: "var(--specialAccentColor)", 
        alertColor: "var(--alertColor)", 
    },

    textShadow: {
        '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
        '3xl': '0 0 3px rgba(255, 255, 255, 1), 0 0 5px rgba(0, 0, 0, .9)',
        // rgba(197, 99, 0, 0)
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
  plugins: [
  require('tailwindcss-textshadow'),require('@tailwindcss/typography')],
} satisfies Config;
