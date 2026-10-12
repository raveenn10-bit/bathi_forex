export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export const WHY_CHOOSE_POINTS: WhyUsPoint[] = [
  {
    id: "structured-roadmap",
    title: "Structured 4-Phase Curriculum",
    description:
      "No scattered YouTube videos or contradictory advice. Every lesson builds systematically on the previous one, ensuring zero gaps in your understanding.",
    badge: "Systematic Path",
  },
  {
    id: "beginner-friendly",
    title: "Zero-Assumption Teaching",
    description:
      "Whether you have never opened a chart before or have traded for months, our foundational modules explain complex financial mechanics in plain, intuitive language.",
    badge: "Inclusive Pedagogy",
  },
  {
    id: "dual-market",
    title: "Forex & Crypto Specialized Paths",
    description:
      "Learn the unique nuances of both traditional currency sessions (London/NY) and 24/7 crypto blockchain markets without confusing the two distinct asset behaviors.",
    badge: "Dual Expertise",
  },
  {
    id: "practical-concepts",
    title: "Practical Market Analysis",
    description:
      "Skip outdated indicator formulas. We teach real-time price action, institutional liquidity concepts, and market structure that reflect current market conditions.",
    badge: "Real-World Context",
  },
  {
    id: "risk-first",
    title: "Uncompromising Risk Education",
    description:
      "We never promise get-rich-quick shortcuts. Our primary curriculum pillar is risk preservation, position sizing, and emotional control to protect your capital.",
    badge: "Capital Defense",
  },
  {
    id: "direct-support",
    title: "Direct WhatsApp Mentorship",
    description:
      "Submit your chart analysis, ask questions directly, and receive structured feedback to correct bad trading habits before they cost real money.",
    badge: "Interactive Guidance",
  },
];
