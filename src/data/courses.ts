export interface CoursePackage {
  id: string;
  name: string;
  category: "Foundation" | "Forex" | "Crypto" | "Comprehensive";
  tagline: string;
  priceLKR: number;
  isPopular?: boolean;
  badge?: string;
  description: string;
  highlights: string[];
  curriculum: string[];
  ctaLabel: string;
}

export const COURSES: CoursePackage[] = [
  {
    id: "primary-trading-course",
    name: "PRIMARY TRADING COURSE",
    category: "Foundation",
    tagline: "Beginner-friendly trading foundation",
    priceLKR: 5000,
    isPopular: false,
    description:
      "A complete fundamental walkthrough designed for absolute beginners seeking to understand financial market mechanics, chart navigation, and essential order types without unnecessary complexity.",
    highlights: [
      "Market terminology & basic mechanics",
      "TradingView setup & chart navigation",
      "Understanding currency pairs & crypto assets",
      "Order types: Market, Limit, Stop orders",
      "Core foundational risk concepts",
    ],
    curriculum: [
      "Introduction to Global Financial Markets",
      "Navigating Candlestick Charts & Timeframes",
      "Bid / Ask Spread, Pips & Leverage Explained",
      "Essential Platform Navigation",
      "Basic Trade Execution & Safety Rules",
    ],
    ctaLabel: "Enroll in Primary Course",
  },
  {
    id: "forex-master-course",
    name: "FOREX MASTER COURSE",
    category: "Forex",
    tagline: "Structured Forex trading education",
    priceLKR: 25000,
    isPopular: false,
    description:
      "Deep dive into the foreign exchange markets. Learn currency correlation, institutional session timing (London & New York), high-probability market structure, and disciplined trade management.",
    highlights: [
      "Major, minor & exotic pair dynamics",
      "London & New York session strategies",
      "Support & Resistance, Supply & Demand",
      "Economic calendar & news event impact",
      "Risk-to-reward ratios & lot sizing",
    ],
    curriculum: [
      "Macro Currency Flows & Central Bank Impact",
      "Advanced Market Structure & Liquidity Pools",
      "Session Timing, Kill Zones & Volume Anomalies",
      "Multi-Timeframe Top-Down Analysis",
      "Forex Risk Models & Capital Preservation",
    ],
    ctaLabel: "Enroll in Forex Master",
  },
  {
    id: "crypto-master-course",
    name: "CRYPTO MASTER COURSE",
    category: "Crypto",
    tagline: "Cryptocurrency trading education",
    priceLKR: 25000,
    isPopular: false,
    description:
      "Master the fast-moving cryptocurrency ecosystem with structured analysis. Learn Binance and Bybit platform navigation, Bitcoin market cycles, derivatives, and volatile market risk controls.",
    highlights: [
      "Bitcoin dominance & altcoin rotation cycles",
      "Spot vs. Futures / Perpetual contracts",
      "Binance & Bybit execution workflows",
      "On-chain signals & market sentiment indicators",
      "Crypto liquidation avoidance & risk controls",
    ],
    curriculum: [
      "Blockchain Mechanics & Digital Asset Classification",
      "Binance & Bybit Pro Trading Tools & Interface",
      "Perpetuals, Funding Rates & Open Interest",
      "Identifying High-Probability Chart Patterns",
      "Managing Volatility & Tail-Risk Defense",
    ],
    ctaLabel: "Enroll in Crypto Master",
  },
  {
    id: "complete-master-course",
    name: "COMPLETE MASTER COURSE",
    category: "Comprehensive",
    tagline: "Forex + Crypto combined education",
    priceLKR: 40000,
    isPopular: true,
    badge: "BEST VALUE",
    description:
      "The definitive dual-curriculum academy program merging complete Forex mastery with deep Cryptocurrency trading education, advanced risk architecture, and institutional psychology.",
    highlights: [
      "Full Forex Master curriculum included",
      "Full Crypto Master curriculum included",
      "Dual-market portfolio risk management",
      "Advanced trading psychology & mental frameworks",
      "Direct 1:1 mentorship chart breakdown sessions",
    ],
    curriculum: [
      "Complete Phase 1: Market Foundations",
      "Complete Phase 2: Technical Analysis Mastery",
      "Complete Phase 3: Mathematical Risk Management",
      "Complete Phase 4: Advanced Strategy & Trader Psychology",
      "Synthesis: Cross-Asset Opportunity Capitalization",
    ],
    ctaLabel: "Enroll in Complete Master",
  },
];
