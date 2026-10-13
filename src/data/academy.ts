export interface MarketSessionSLST {
  session: string;
  city: string;
  timeSLST: string;
  utcTime: string;
  statusNotes: string;
  keyPairs: string[];
  volatility: "Low" | "Medium" | "High" | "Peak";
}

export interface AcademyConfig {
  siteUrl: string;
  domain: string;
  portalName: string;
  alternateNames: string[];
  brandName: string;
  tagline: string;
  legalName: string;
  whatsappNumber: string; // e.g. "94771234567" (country code without '+') or empty for placeholder
  displayPhone: string;
  email: string;
  location: string;
  foundedYear: number;
  seo: {
    googleSiteVerification: string;
    keywords: string[];
  };
  marketSessionsSLST: MarketSessionSLST[];
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
  siteUrl: "https://lankaforex.com",
  domain: "lankaforex.com",
  portalName: "Lanka Forex (LankaForex.com)",
  alternateNames: [
    "Lanka Forex",
    "LankaForex",
    "LankaForex.com",
    "Bhathi Forex",
    "Apex Trading Academy Sri Lanka",
  ],
  brandName: "Apex Trading Academy",
  tagline: "A TO Z TRADING",
  legalName: "Apex Trading Academy",
  // Verified WhatsApp number in international format without leading '+' or spaces
  whatsappNumber: "94771240270",
  displayPhone: "+94 77 124 0270",
  email: "apextradingacademy9@gmail.com",
  location: "Sri Lanka",
  foundedYear: 2021,
  seo: {
    googleSiteVerification:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    keywords: [
      "Lanka Forex",
      "LankaForex",
      "LankaForex.com",
      "Apex Trading Academy",
      "Bhathiya Sooriarachchi",
      "Bhathi Forex",
      "Forex trading Sri Lanka",
      "Forex classes Sri Lanka Sinhala",
      "Learn Forex trading in Sinhala",
      "Best Forex academy in Sri Lanka",
      "Crypto trading course Sri Lanka",
      "Binance P2P Sri Lanka cashout",
      "Bybit trading Sri Lanka",
      "Forex market hours Sri Lanka time SLST",
      "London New York golden overlap SLST",
      "Central Bank of Sri Lanka Forex education",
      "FTMO funded account Sri Lanka",
      "FundedNext challenge Sri Lanka",
      "Price action technical analysis Sri Lanka",
      "Gold trading XAUUSD Sri Lanka strategy",
      "Crypto futures leverage risk management",
      "Professional trader Colombo Kandy Galle",
    ],
  },
  marketSessionsSLST: [
    {
      session: "Asian / Tokyo Session",
      city: "Tokyo, Sydney & Singapore",
      timeSLST: "5:30 AM – 2:30 PM SLST",
      utcTime: "00:00 – 09:00 UTC",
      statusNotes:
        "Initial liquidity accumulation and Asian range establishment. High activity in JPY, AUD, and NZD currency pairs before European opening bells.",
      keyPairs: ["USD/JPY", "AUD/USD", "NZD/USD", "EUR/JPY"],
      volatility: "Medium",
    },
    {
      session: "European / London Session",
      city: "London & Frankfurt",
      timeSLST: "1:30 PM – 10:30 PM SLST",
      utcTime: "08:00 – 17:00 UTC",
      statusNotes:
        "Primary trend initialization, institutional liquidity injection, and Judas swings. Significant directional expansion across major European currency pairs and Gold.",
      keyPairs: ["EUR/USD", "GBP/USD", "GBP/JPY", "EUR/GBP", "XAU/USD (Gold)"],
      volatility: "High",
    },
    {
      session: "North American / New York Session",
      city: "New York",
      timeSLST: "6:30 PM – 3:30 AM SLST",
      utcTime: "13:00 – 22:00 UTC",
      statusNotes:
        "Aggressive institutional volume driven by US macroeconomic events (CPI, NFP, FOMC interest rates). Massive trading participation from global investment funds.",
      keyPairs: ["EUR/USD", "GBP/USD", "USD/CAD", "USD/JPY", "XAU/USD", "BTC/USDT"],
      volatility: "High",
    },
    {
      session: "London & New York Golden Overlap",
      city: "London × New York",
      timeSLST: "6:30 PM – 10:30 PM SLST",
      utcTime: "13:00 – 17:00 UTC",
      statusNotes:
        "Peak global volume and maximum financial liquidity. The single best time window for Sri Lankan traders to execute disciplined intraday trades with ultra-tight broker spreads.",
      keyPairs: ["XAU/USD (Gold)", "EUR/USD", "GBP/USD", "US30", "NAS100", "BTC/USDT"],
      volatility: "Peak",
    },
  ],
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
    { platform: "WhatsApp", url: "https://wa.me/94771240270" },
    { platform: "Telegram", url: "https://t.me/bhathiforex" },
    { platform: "YouTube", url: "https://youtube.com/@bhathiforex" },
    { platform: "Instagram", url: "https://instagram.com/bhathiforex" },
  ],
  riskDisclaimer:
    "Forex and cryptocurrency trading involve substantial financial risk. Educational content does not guarantee profits and is not personalized financial advice. Past performance is not indicative of future results. Never trade with capital you cannot afford to lose.",
};
