export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Beginner" | "Enrollment" | "Course Details" | "Risk";
}

export const FAQS: FAQItem[] = [
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
];
