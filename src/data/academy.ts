export interface AcademyConfig {
  brandName: string;
  tagline: string;
  legalName: string;
  whatsappNumber: string; // e.g. "94771234567" (country code without '+') or empty for placeholder
  displayPhone: string;
  email: string;
  location: string;
  foundedYear: number;
  mentor: {
    name: string;
    role: string;
    title: string;
    badge?: string;
    image?: string;
    deskImage?: string;
    bio: string;
    approach: string;
    philosophy: string;
    specialties: string[];
    stats: {
      label: string;
      value: string;
      detail: string;
    }[];
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
  riskDisclaimer: string;
}

export const ACADEMY_CONFIG: AcademyConfig = {
  brandName: "BHATHI FOREX",
  tagline: "A TO Z TRADING",
  legalName: "BHATHI FOREX Trading Academy",
  // Change to verified WhatsApp number in international format without leading '+' or spaces, e.g. "94770000000"
  whatsappNumber: "94771234567",
  displayPhone: "+94 77 123 4567",
  email: "support@bhathiforex.com",
  location: "Sri Lanka",
  foundedYear: 2021,
  mentor: {
    name: "Bhathiya Sooriarachchi",
    role: "Founder, Lecturer & Crypto Master",
    title: "Founder & Lead Forex / Crypto Market Strategist",
    badge: "FOUNDER & CRYPTO MASTER",
    image: "/images/bhathiya-sooriarachchi.png",
    deskImage: "/images/trading-desk.webp",
    bio: "Dedicated professional trader, lecturer, and crypto market specialist with extensive practical experience in systematic price action, institutional liquidity concepts, derivatives risk engineering, and multi-asset execution. Committed to demystifying global financial markets for ambitious students from raw beginner foundations to master-level confidence.",
    approach: "Focus on clean price action, liquidity dynamics, structured capital preservation, and emotional equilibrium rather than noisy lagging indicators.",
    philosophy: "Trading is not about predicting every tick; it is a game of probability, iron discipline, and mathematical risk management. Protect your capital first, and sustainable gains will follow.",
    specialties: [
      "Multi-Timeframe Price Action & Market Structure",
      "Cryptocurrency Futures & Derivatives Architecture",
      "Forex Session Dynamics (London & New York)",
      "Strict Position Sizing & Micro Drawdown Defense",
      "Binance & Bybit Institutional Execution",
      "Trading Psychology & Rule-Based Discipline",
    ],
    stats: [
      {
        value: "4+",
        label: "Years Educating",
        detail: "Structured curriculum tailored for local & global markets",
      },
      {
        value: "4",
        label: "Comprehensive Phases",
        detail: "From raw foundation to elite execution psychology",
      },
      {
        value: "1:1",
        label: "Mentorship Support",
        detail: "Direct query resolution and chart breakdown guidance",
      },
      {
        value: "100%",
        label: "Objective Focus",
        detail: "Strictly educational, non-gambling market methodology",
      },
    ],
  },
  socialLinks: [
    { platform: "WhatsApp", url: "https://wa.me/94771234567" },
    { platform: "Telegram", url: "https://t.me/bhathiforex" },
    { platform: "YouTube", url: "https://youtube.com/@bhathiforex" },
    { platform: "Instagram", url: "https://instagram.com/bhathiforex" },
  ],
  riskDisclaimer:
    "Forex and cryptocurrency trading involve substantial financial risk. Educational content does not guarantee profits and is not personalized financial advice. Past performance is not indicative of future results. Never trade with capital you cannot afford to lose.",
};
