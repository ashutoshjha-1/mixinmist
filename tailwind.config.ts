
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#333333",
        input: "#222222",
        ring: "#555555",
        background: "#FFFFFF",
        foreground: "#000000",
        primary: {
          DEFAULT: "#000000",
          hover: "#222222",
        },
        secondary: {
          DEFAULT: "#333333",
          hover: "#555555",
        },
        accent: {
          DEFAULT: "#F1F1F1",
          hover: "#DDDDDD",
        },
        text: {
          DEFAULT: "#000000",
          muted: "#555555",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradient: {
          "0%": { 
            "background-position": "0% 50%",
            transform: "rotate(0deg)"
          },
          "33%": {
            "background-position": "100% 50%",
            transform: "rotate(120deg)"
          },
          "66%": {
            "background-position": "0% 50%",
            transform: "rotate(240deg)"
          },
          "100%": {
            "background-position": "100% 50%",
            transform: "rotate(360deg)"
          }
        },
        "gradient-secondary": {
          "0%": { 
            "background-position": "100% 50%",
            transform: "rotate(360deg)"
          },
          "33%": {
            "background-position": "0% 50%",
            transform: "rotate(240deg)"
          },
          "66%": {
            "background-position": "100% 50%",
            transform: "rotate(120deg)"
          },
          "100%": {
            "background-position": "0% 50%",
            transform: "rotate(0deg)"
          }
        }
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.7s ease-out",
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 20s ease infinite",
        "gradient-secondary": "gradient-secondary 20s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
