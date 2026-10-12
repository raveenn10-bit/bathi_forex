export interface RoadmapPhase {
  phase: number;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  milestones: string[];
  keyOutcome: string;
}

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 1,
    title: "Market Foundations",
    tagline: "Phase 01 — The Ground Floor",
    badge: "FOUNDATION",
    description:
      "Establish absolute fluency in global financial ecosystems. Learn how foreign exchange rates fluctuate, cryptocurrency networks operate, and broker interfaces function.",
    milestones: [
      "Understanding Currency Pairs, Spread & Pips",
      "Crypto Tokenomics & Wallet Fundamentals",
      "Brokers, Exchanges & TradingView Setup",
      "Types of Orders: Market, Limit, Stop-Loss",
    ],
    keyOutcome: "Zero hesitation when reading charts or placing test market orders.",
  },
  {
    phase: 2,
    title: "Technical Analysis",
    tagline: "Phase 02 — Decoding Market Structure",
    badge: "PRICE ACTION",
    description:
      "Move beyond beginner indicators into pure institutional price action. Understand liquidity cycles, trend validation, and supply/demand zones.",
    milestones: [
      "Candlestick Patterns & Momentum Analysis",
      "Support & Resistance vs. Dynamic Supply/Demand",
      "Trendlines, Chart Patterns & Channel Breaks",
      "Multi-Timeframe Top-Down Alignment",
    ],
    keyOutcome: "Ability to map any market chart with precision and identify high-probability setups.",
  },
  {
    phase: 3,
    title: "Risk Management",
    tagline: "Phase 03 — Capital Defense Architecture",
    badge: "PRESERVATION",
    description:
      "Master the mathematical discipline separating reckless gamblers from consistent traders. Control drawdown, eliminate blowups, and calibrate position sizes.",
    milestones: [
      "Mathematical Position Sizing Formulas",
      "Asymmetric 1:2 and 1:3+ Risk-to-Reward Ratio Execution",
      "Daily & Weekly Maximum Loss Limits",
      "Managing Trade Exposure & Correlated Positions",
    ],
    keyOutcome: "Ironclad risk parameters that protect your capital across any market volatility.",
  },
  {
    phase: 4,
    title: "Advanced Strategies & Trading Psychology",
    tagline: "Phase 04 — Elite Execution & Mindset",
    badge: "MASTERY",
    description:
      "Synthesize institutional strategy execution with psychological discipline. Eliminate emotional decision-making, establish a trading journal, and execute with precision.",
    milestones: [
      "London & New York Session Liquidity Sweeps",
      "Crypto Volatility & Altcoin Cycle Trading",
      "Rule-Based Execution & Eliminating Fear/Greed",
      "Building a Scalable Professional Trading Journal",
    ],
    keyOutcome: "An autonomous, emotion-free trading protocol with systematic execution.",
  },
];
