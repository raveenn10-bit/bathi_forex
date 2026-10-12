export interface ProofImage {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  badgeColor: "purple" | "gold";
  proofSummary?: string;
  proofImages: ProofImage[];
  referralCode?: string;
  referralBonus?: string;
  referralLink?: string;
}

export const TRADING_PLATFORMS: PlatformItem[] = [
  {
    id: "tradingview",
    name: "TradingView",
    category: "Charting & Technical Analysis",
    tagline: "The World's Premier Charting Suite",
    description:
      "Master professional charting tools, custom indicators, multi-timeframe layouts, alerts, and market replay to test your trade setups efficiently.",
    features: [
      "Custom indicator scripting & chart templates",
      "Drawing tools, Fibonacci & volume profiles",
      "Historical bar replay for objective backtesting",
      "Multi-asset screener (Forex, Crypto, Indices)",
    ],
    badgeColor: "purple",
    proofSummary: "Multi-timeframe charting setup",
    proofImages: [
      {
        src: "/images/trading-desk.webp",
        alt: "TradingView multi-screen technical analysis and trading setup",
        title: "Multi-Screen Technical Charting Station",
        subtitle: "TradingView Multi-Timeframe Analysis",
        badge: "Live Desk",
        description:
          "Institutional multi-monitor trading desk environment configured for multi-timeframe correlation, custom price action indicators, and disciplined trade execution.",
      },
    ],
  },
  {
    id: "binance",
    name: "Binance",
    category: "Cryptocurrency Exchange",
    tagline: "Global Digital Asset Powerhouse",
    description:
      "Learn deep liquidity navigation, advanced spot order routing, USDT-M futures execution, trailing stops, and multi-signature account security.",
    features: [
      "Spot and USDT-M Perpetuals navigation",
      "Advanced stop-limit, trailing stop, and OCO orders",
      "Order book depth analysis & funding rate tracking",
      "Two-factor authentication & anti-phishing security",
    ],
    badgeColor: "gold",
    proofSummary: "Real Futures (+4,727%) & P2P 11,000 USDT Cashout",
    proofImages: [
      {
        src: "/images/binance-futures.jpg",
        alt: "Binance Futures verified trades showing COAI +4,727% and KOMA +477%",
        title: "Live Futures Execution (+4,727% ROI)",
        subtitle: "COAI +4,727.65% | KOMA +477.40%",
        badge: "+4,727% ROI",
        description:
          "Real Binance USDT-M Futures execution capturing explosive momentum moves (COAI +4,727.65% and KOMA +477.40%) with disciplined trailing stop management.",
      },
      {
        src: "/images/binance-withdrawal.png",
        alt: "Binance P2P withdrawal execution proof of 11,000 USDT",
        title: "P2P 11,000 USDT Withdrawal Proof",
        subtitle: "Verified Capital Cashout Rail",
        badge: "11,000 USDT",
        description:
          "Realized capital withdrawal: 11,000 USDT successfully processed and liquidated through Binance verified P2P express merchant payment channels.",
      },
    ],
  },
  {
    id: "bybit",
    name: "Bybit",
    category: "Crypto Derivatives & Futures",
    tagline: "Ultra-Fast Execution Engine",
    description:
      "Understand high-speed derivative trading mechanics, inverse contracts, sub-accounts, hedge mode, and risk limit controls for crypto assets.",
    features: [
      "Isolated vs. Cross Margin mechanics",
      "Unified Trading Account (UTA) structures",
      "Hedge Mode: Simultaneous Long/Short positioning",
      "Trailing stop-loss & take-profit triggers",
    ],
    badgeColor: "purple",
    referralCode: "02Q4O8Z",
    referralBonus: "Claim over $5,000 in bonuses on Bybit!",
    referralLink: "https://www.bybit.com/invite?ref=02Q4O8Z",
    proofSummary: "Live derivatives order execution",
    proofImages: [
      {
        src: "/images/bybit-proof.jpg",
        alt: "Bybit verified live derivatives trading proof",
        title: "Bybit Live Derivatives Execution",
        subtitle: "Unified Trading Account (UTA)",
        badge: "Verified Proof",
        description:
          "High-speed derivatives position management on Bybit UTA demonstrating disciplined position sizing, isolated margin controls, and tight risk-to-reward ratios.",
      },
    ],
  },
  {
    id: "forex-platforms",
    name: "MetaTrader & Forex Platforms",
    category: "Forex Execution Engines",
    tagline: "Institutional Currency Terminals",
    description:
      "Grasp MetaTrader (MT4/MT5) and cTrader platform mechanics: lot size calculations, market orders, pending orders, trailing stops, and trade journaling.",
    features: [
      "Standard, mini & micro lot sizing formulas",
      "Pending orders (Buy Stop, Sell Stop, Buy Limit, Sell Limit)",
      "Real-time spread tracking & swap rate calculation",
      "Trade history analysis & statement auditing",
    ],
    badgeColor: "gold",
    proofSummary: "Disciplined 0.01 lot sizing on Gold & GBPUSD",
    proofImages: [
      {
        src: "/images/mt5-execution.jpg",
        alt: "MetaTrader 5 live execution showing disciplined 0.01 lot size position sizing on Gold (XAUUSD) and GBPUSD",
        title: "MT5 Disciplined Lot Size Execution",
        subtitle: "Gold (XAUUSD) & GBPUSD Currency Pairs",
        badge: "0.01 Lot Risk",
        description:
          "Live MetaTrader 5 execution demonstrating strictly disciplined 0.01 micro lot position sizing on Gold (XAUUSD) and GBPUSD, showcasing professional risk management over emotional gambling.",
      },
    ],
  },
];
