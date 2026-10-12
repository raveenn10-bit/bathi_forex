import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Mentor from "@/components/sections/Mentor";
import Features from "@/components/sections/Features";
import Roadmap from "@/components/sections/Roadmap";
import Pricing from "@/components/sections/Pricing";
import Platforms from "@/components/sections/Platforms";
import TradeProofs from "@/components/sections/TradeProofs";
import StudentCommunity from "@/components/sections/StudentCommunity";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import AmbientTradingBackground from "@/components/ui/AmbientTradingBackground";
import MobileAppDock from "@/components/ui/MobileAppDock";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#F4F7FB] text-slate-900 overflow-x-hidden pb-20 md:pb-0">
      {/* Cinematic Ambient Trading Candlestick Background */}
      <AmbientTradingBackground />

      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* 2. Cinematic Hero */}
      <Hero />

      {/* 3. About the Mentor */}
      <Mentor />

      {/* 4. Trading Education Features */}
      <Features />

      {/* 5. Four-Phase Trading Roadmap */}
      <Roadmap />

      {/* 6. Courses & Pricing */}
      <Pricing />

      {/* 7. Trading Platforms */}
      <Platforms />

      {/* 8. Live Market Execution & Verification */}
      <TradeProofs />

      {/* 9. Official Student WhatsApp Forum & Community */}
      <StudentCommunity />

      {/* 10. Why Choose Apex Trading Academy */}
      <WhyChooseUs />

      {/* 11. Frequently Asked Questions */}
      <FAQ />

      {/* 12. Contact & Enrollment */}
      <Contact />

      {/* 13. Premium Footer */}
      <Footer />

      {/* 14. Sticky Floating WhatsApp & Student Forum Widget */}
      <FloatingWhatsApp />

      {/* 15. Native Mobile App Bottom Navigation Dock */}
      <MobileAppDock />
    </main>
  );
}
