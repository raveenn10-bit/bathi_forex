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
  studentCommunity: {
    title: string;
    tagline: string;
    description: string;
    whatsappGroupUrl: string;
    memberCountBadge: string;
    telegramGroupUrl?: string;
    benefits: {
      title: string;
      description: string;
      iconName?: string;
    }[];
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
  riskDisclaimer: string;
}

export const ACADEMY_CONFIG: AcademyConfig = {
  brandName: "Apex Trading Academy",
  tagline: "A TO Z TRADING",
  legalName: "Apex Trading Academy",
  // Change to verified WhatsApp number in international format without leading '+' or spaces, e.g. "94770000000"
  whatsappNumber: "94771234567",
  displayPhone: "+94 77 123 4567",
  email: "apextradingacademy9@gmail.com",
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
  studentCommunity: {
    title: "Apex Trading Academy Official Student WhatsApp Forum",
    tagline: "Exclusive Peer Learning & Live Market Discussions",
    description: "Join over 1,500+ aspiring and active Sri Lankan Forex & Crypto traders. Get daily price action markups, high-probability market alerts, and engage in real-time discussions directly with Bhathiya Sooriarachchi.",
    whatsappGroupUrl: "https://chat.whatsapp.com/invite/bhathiforex",
    memberCountBadge: "1,500+ Active Traders",
    telegramGroupUrl: "https://t.me/bhathiforex",
    benefits: [
      {
        title: "Daily Chart Markups & Watchlists",
        description: "Receive pre-market multi-timeframe analysis on XAUUSD (Gold), GBPUSD, EURUSD, and Bitcoin before London & New York volatility kicks in.",
      },
      {
        title: "Direct Access to Bhathiya",
        description: "Submit chart queries, get constructive feedback on your trade entries, and discuss risk calculations directly with the founder.",
      },
      {
        title: "High-Impact Macro Alerts",
        description: "Instant breakdowns during CPI, NFP, and interest rate announcements so you never get trapped in manipulated market spikes.",
      },
      {
        title: "Supportive Student Trading Culture",
        description: "Network with disciplined fellow students who prioritize mathematical risk management over gambling and excessive leverage.",
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
