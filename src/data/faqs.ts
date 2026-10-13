export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category:
    | "Beginner"
    | "Enrollment"
    | "Course Details"
    | "Risk"
    | "Sri Lanka & Regulation"
    | "Market Sessions"
    | "Prop Trading & Crypto";
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-lankaforex-portal",
    question: "What is LankaForex.com and its relationship to Apex Trading Academy?",
    answer:
      "LankaForex.com is the official national web portal, digital knowledge base, and official search gateway for Apex Trading Academy Sri Lanka. Led by founder and lead market strategist Bhathiya Sooriarachchi, LankaForex.com provides verified curriculum information, Sri Lanka Standard Time (SLST) market session trackers, Central Bank regulatory clarity, and direct enrollment verification for students across Colombo, Kandy, Galle, and worldwide.",
    category: "Course Details",
  },
  {
    id: "faq-forex-legal-sri-lanka",
    question: "Is Forex trading legal in Sri Lanka for educational purposes?",
    answer:
      "Yes. Learning financial market analysis, understanding currency exchange mechanics, and studying international price action charts is 100% legal in Sri Lanka. Lanka Forex (Apex Trading Academy) operates strictly as a financial education academy; we do not accept student deposits, manage public funds, or operate as an offshore broker. Under Central Bank of Sri Lanka (CBSL) Foreign Exchange Act regulations, unauthorized capital remittance of local LKR funds to unregulated offshore retail brokers via local debit/credit cards is restricted. Our educational curriculum trains students to master technical chart analysis, practice risk-free on demo/paper trading accounts, and trade professionally with international proprietary trading firms (prop firms) that provide external company capital without violating CBSL personal remittance rules.",
    category: "Sri Lanka & Regulation",
  },
  {
    id: "faq-learn-in-sinhala",
    question: "Can I learn trading in Sinhala?",
    answer:
      "Yes, absolutely. All core video lessons, live Zoom breakdown masterclasses, and student discussions are conducted in clear, beginner-friendly Sinhala while simultaneously teaching essential international financial English vocabulary (such as Liquidity, Order Blocks, Stop Loss, Risk-to-Reward, Fair Value Gaps, and Breakeven). This dual-language structure ensures Sri Lankan students comprehend deep technical concepts naturally while remaining fully confident using global charting software like TradingView, MetaTrader 4/5, and global economic calendars.",
    category: "Beginner",
  },
  {
    id: "faq-best-trading-sessions-slst",
    question: "What are the best Forex trading sessions in Sri Lanka time (SLST)?",
    answer:
      "In Sri Lanka Standard Time (SLST, UTC+5:30), the single highest-probability trading window is the London & New York Golden Overlap from 6:30 PM to 10:30 PM SLST. Here is the full breakdown of global market sessions for Sri Lankan traders:\n\n• Asian / Tokyo Session (5:30 AM – 2:30 PM SLST): Accumulation and initial range building on JPY and AUD pairs.\n• European / London Session (1:30 PM – 10:30 PM SLST): High volatility, trend initialization, and liquidity sweeps across EUR/USD, GBP/USD, and XAU/USD (Gold).\n• US / New York Session (6:30 PM – 3:30 AM SLST): Major institutional volume and market catalyst events (US CPI, NFP, FOMC interest rates).\n• The Golden Overlap (6:30 PM – 10:30 PM SLST): When both London and New York are open concurrently, generating peak global liquidity, tightest spreads, and clean price action expansions. This evening timing is ideally suited for Sri Lankan working professionals and university students.",
    category: "Market Sessions",
  },
  {
    id: "faq-prop-firms-funded-accounts",
    question: "Can Sri Lankan students trade with Prop Firms (Funded Accounts)?",
    answer:
      "Yes! Trading through international Proprietary Trading Firms (such as FTMO, FundedNext, and The 5%ers) is one of the most effective and legally compliant pathways for Sri Lankan traders. Instead of risking personal life savings, students pay a nominal evaluation fee to take a simulated trading challenge. Once you prove your risk management and target discipline, the prop firm allocates funded accounts ranging from $5,000 to $200,000+. Traders retain 80% to 90% of all generated profits, which are withdrawn directly via international bank wire or crypto (USDT). Apex Trading Academy specifically trains students to pass prop firm challenge rules without violating daily or maximum drawdown limits.",
    category: "Prop Trading & Crypto",
  },
  {
    id: "faq-binance-bybit-p2p",
    question: "How does Binance / Bybit P2P work for Sri Lankan students?",
    answer:
      "Binance and Bybit Peer-to-Peer (P2P) platforms allow verified Sri Lankan traders to buy and sell cryptocurrency (primarily USDT) directly with other local individuals using domestic Sri Lankan bank transfers (including Commercial Bank, Sampath Bank, Hatton National Bank, and BOC) without costly card conversion fees. In our academy, Bhathiya Sooriarachchi teaches strict P2P safety protocols: strictly trading with verified merchants with a 98%+ completion rate, ensuring the buyer/seller bank account name exactly matches their KYC-verified exchange name, avoiding third-party bank transfers, and never including crypto-related keywords (such as 'crypto', 'forex', or 'USDT') in bank transfer remarks to safeguard personal banking integrity.",
    category: "Prop Trading & Crypto",
  },
  {
    id: "faq-beginners",
    question: "Can beginners join?",
    answer:
      "Yes, absolutely. Our Primary Trading Course and foundational modules are specifically engineered for complete beginners. We start from ground zero—explaining financial vocabulary, chart navigation, and platform setup before introducing any trading strategy.",
    category: "Beginner",
  },
  {
    id: "faq-forex-vs-crypto",
    question: "What is the difference between Forex and Crypto?",
    answer:
      "Forex is the global foreign exchange market where fiat currencies (e.g. EUR/USD, GBP/JPY) are traded based on macroeconomic factors, interest rates, and distinct global market sessions (London, New York, Tokyo). Cryptocurrency trading involves digital blockchain assets (such as BTC and ETH) operating 24/7 with higher volatility and distinct market cycle mechanics. Our academy offers specialized learning paths for both.",
    category: "Course Details",
  },
  {
    id: "faq-enrollment",
    question: "How do I enroll?",
    answer:
      "Enrollment is handled directly and seamlessly via WhatsApp. Simply click the 'Enroll Now' button on any course card or the navigation bar, and a prefilled message with your selected course and tuition will open in WhatsApp. Our team will verify your details and provide the enrollment schedule and access links.",
    category: "Enrollment",
  },
  {
    id: "faq-class-format",
    question: "Are classes online or physical?",
    answer:
      "Classes are conducted primarily through structured online sessions, interactive webinars, and digital study resources, allowing you to learn from anywhere in Sri Lanka or internationally. For specific cohort dates and hybrid session options, please inquire directly via WhatsApp.",
    category: "Course Details",
  },
  {
    id: "faq-complete-master",
    question: "What is included in the Complete Master course?",
    answer:
      "The Complete Master Course (LKR 40,000) combines the comprehensive curricula of both the Forex Master and Crypto Master courses, plus advanced modules in multi-asset risk management, professional trading psychology, and direct chart breakdown mentorship. It is designed for students seeking a full, all-encompassing market education.",
    category: "Course Details",
  },
  {
    id: "faq-risk",
    question: "Is trading risky?",
    answer:
      "Yes. Trading Forex and cryptocurrencies carries significant financial risk and is not suitable for everyone. Market prices can fluctuate unpredictably. At Apex Trading Academy, our core focus is teaching capital preservation, defensive position sizing, and disciplined risk-to-reward ratios so you can navigate the markets responsibly without gambling.",
    category: "Risk",
  },
  {
    id: "faq-galle-district",
    question: "Are there specific workshops or community groups for students in Galle District & Southern Province?",
    answer:
      "Yes, absolutely. Apex Trading Academy (LankaForex.com) hosts an active Southern Province Chapter with over 450+ registered students across Galle Fort, Karapitiya Medical & Campus Hub, Hikkaduwa, Ambalangoda, Baddegama, and Elpitiya. In addition to our structured live online cohorts, we organize regional physical chart breakdown meetups and dedicated Southern WhatsApp Guild discussions. Students from Galle and the Southern Province can connect directly with mentor Bhathiya Sooriarachchi via WhatsApp (+94 77 124 0270).",
    category: "Sri Lanka & Regulation",
  },
];
