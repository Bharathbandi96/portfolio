import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        animTop: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
    
        },
        animLeft: {
          '0%': { transform: 'translateX(-200px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        animRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      animation: {
        animLeft: 'animLeft 0.5s ease-in-out forwards',
        animRight: 'animRight 1s ease forwards;',
        animTop: 'animTop .5s ease forwards'
      },
    },
  },
  plugins: [],
} satisfies Config;
