import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#12141D",
          bgSecondary: "#181B27",
          card: "#202331",
          cardHover: "#282C3D",
          purple: "#995DE8",
          purpleLight: "#B17AF5",
          purpleGlow: "rgba(153, 93, 232, 0.25)",
          gold: "#D6B15E",
          goldLight: "#E5C984",
          goldGlow: "rgba(214, 177, 94, 0.2)",
          muted: "#A6A8B5",
          border: "rgba(255, 255, 255, 0.08)",
          borderGlow: "rgba(153, 93, 232, 0.4)",
          bullish: "#00E676",
          bearish: "#FF5252",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        purpleGlow: "0 0 35px -5px rgba(153, 93, 232, 0.3)",
        goldGlow: "0 0 30px -5px rgba(214, 177, 94, 0.25)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-purple": "radial-gradient(circle at center, rgba(153,93,232,0.18) 0%, rgba(18,20,29,0) 70%)",
        "radial-gold": "radial-gradient(circle at center, rgba(214,177,94,0.12) 0%, rgba(18,20,29,0) 70%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
