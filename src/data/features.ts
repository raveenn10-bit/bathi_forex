export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string; // mapped to Lucide icons
  details: string[];
}

export const EDUCATION_FEATURES: FeatureItem[] = [
  {
    id: "forex-fundamentals",
    title: "Forex Trading Fundamentals",
    tagline: "The World's Largest Financial Market",
    description:
      "Grasp the bedrock fundamentals of global currency markets, exchange rates, central bank interventions, economic calendars, and market liquidity.",
    iconName: "Globe2",
    details: [
      "Major, minor & currency cross mechanics",
      "Macro-economic indicators & interest rate decisions",
      "London, New York & Asian market session overlaps",
    ],
  },
  {
    id: "crypto-trading",
    title: "Cryptocurrency Trading",
    tagline: "24/7 Digital Asset Dynamics",
    description:
      "Navigate the high-velocity cryptocurrency ecosystem with precision. Understand Bitcoin cycle theory, altcoin liquidity, on-chain sentiment, and volatility capture.",
    iconName: "Coins",
    details: [
      "Spot market vs. derivatives & futures mechanics",
      "Market cap, open interest & funding rate dynamics",
      "Managing volatility and portfolio diversification",
    ],
  },
  {
    id: "technical-analysis",
    title: "Technical Analysis",
    tagline: "Institutional Chart Reading & Price Action",
    description:
      "Decode market structure through pure candlestick behavior, liquidity pools, order blocks, multi-timeframe analysis, and supply/demand imbalances.",
    iconName: "CandlestickChart",
    details: [
      "Advanced market structure (BOS, CHoCH, Liquidity sweeps)",
      "High-probability candlestick trigger confirmations",
      "Multi-timeframe confluence frameworks",
    ],
  },
  {
    id: "risk-management",
    title: "Risk Management",
    tagline: "Capital Preservation First, Always",
    description:
      "The undisputed foundation of long-term longevity. Master position sizing formulas, drawdown limits, dynamic stop-losses, and asymmetric risk-to-reward ratios.",
    iconName: "ShieldCheck",
    details: [
      "Strict 1-2% risk-per-trade model execution",
      "Position size calculator formulas for all assets",
      "Portfolio drawdown circuit breakers & risk rules",
    ],
  },
  {
    id: "trading-psychology",
    title: "Trading Psychology",
    tagline: "Mastering the Mind Behind the Screen",
    description:
      "Overcome FOMO, revenge trading, and emotional turbulence. Cultivate an unwavering statistical mindset and rule-based execution habits.",
    iconName: "BrainCircuit",
    details: [
      "Eliminating emotional bias and fear of missing out",
      "Building a disciplined trading journal & daily routine",
      "Developing unwavering process conviction",
    ],
  },
  {
    id: "binance-bybit-education",
    title: "Binance & Bybit Education",
    tagline: "Professional Exchange Mastery",
    description:
      "Step-by-step masterclasses on configuring, securing, and navigating tier-one cryptocurrency platforms with optimal order execution and fee management.",
    iconName: "Cpu",
    details: [
      "Full platform tour: Spot, Margin & USDT-M Perpetuals",
      "Advanced order types: OCO, trailing stops & trigger orders",
      "Account security, 2FA hardening & wallet safety",
    ],
  },
];
