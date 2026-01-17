import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
        },
        accent: {
          amber: '#f59e0b',
          pink: '#ec4899',
          emerald: '#10b981',
        },
        category: {
          languages: '#3b82f6',
          frameworks: '#8b5cf6',
          tools: '#10b981',
          databases: '#f59e0b',
        }
      },
    },
  },
  plugins: [],
};
export default config;
