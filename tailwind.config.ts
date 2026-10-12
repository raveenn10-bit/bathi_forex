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
          // Light Silver & White Metallic Foundations
          bg: "#F4F7FB", // Light Silver metallic base
          bgSecondary: "#FFFFFF", // Crisp pristine card/section white
          card: "#FFFFFF",
          cardHover: "#F8FAFC",
          
          // 6 Reference Palettes: Ocean Breeze (03) & Peach Champagne (04)
          oceanIce: "#DFF7FF", // Palette 1: Soft Ice Silver Blue
          oceanBlue: "#7FCDFF", // Palette 2: Ocean Breeze Sky
          oceanDeep: "#38B6FF", // Palette 3: Deep Ocean Blue
          champagne: "#FFD3B6", // Palette 4: Peach Champagne
          champagneWarm: "#F5A87B", // Palette 5: Warm Sunset Champagne
          champagneGold: "#E09C64", // Palette 6: Deep Champagne Amber
          
          // Legacy support mapped to new light silver tokens
          purple: "#38B6FF", // Modern vibrant Ocean Blue
          purpleLight: "#7FCDFF", // Ocean Breeze Sky
          purpleGlow: "rgba(127, 205, 255, 0.35)",
          gold: "#F5A87B", // Peach Champagne Accent
          goldLight: "#FFD3B6", // Soft Peach
          goldGlow: "rgba(255, 211, 182, 0.4)",

          // High Contrast Typography on Light Silver
          textPrimary: "#0F172A", // Slate 900
          textSecondary: "#334155", // Slate 700
          muted: "#64748B", // Slate 500
          border: "rgba(203, 213, 225, 0.8)", // Slate 300
          borderGlow: "rgba(127, 205, 255, 0.6)",
          
          // High-visibility Candlestick & Market Colors
          bullish: "#059669", // Emerald 600
          bullishBg: "rgba(5, 150, 105, 0.12)",
          bearish: "#DC2626", // Red 600
          bearishBg: "rgba(220, 38, 38, 0.12)",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 30px rgba(15, 23, 42, 0.06)",
        card: "0 10px 30px -10px rgba(15, 23, 42, 0.08)",
        purpleGlow: "0 0 35px -5px rgba(127, 205, 255, 0.4)",
        goldGlow: "0 0 30px -5px rgba(255, 211, 182, 0.45)",
        appDock: "0 -4px 25px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-ocean": "radial-gradient(circle at center, rgba(127,205,255,0.2) 0%, rgba(244,247,251,0) 70%)",
        "radial-champagne": "radial-gradient(circle at center, rgba(255,211,182,0.25) 0%, rgba(244,247,251,0) 70%)",
        "ocean-breeze": "linear-gradient(135deg, #DFF7FF 0%, #7FCDFF 100%)",
        "peach-champagne": "linear-gradient(135deg, #DFF7FF 0%, #FFD3B6 100%)",
        "silver-luxe": "linear-gradient(180deg, #FFFFFF 0%, #F4F7FB 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        ticker: "ticker 25s linear infinite",
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
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
