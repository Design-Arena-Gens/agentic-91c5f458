import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#070707",
        surface: "#0B0B0B",
        accent: "#E50914",
        slate: {
          850: "#151515"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(229, 9, 20, 0.45)",
        card: "0 24px 48px rgba(0, 0, 0, 0.45)"
      },
      borderRadius: {
        xl: "16px"
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at top, rgba(229,9,20,0.36), transparent 65%)"
      }
    }
  },
  plugins: []
};

export default config;
