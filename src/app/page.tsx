import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Mentor from "@/components/sections/Mentor";
import Features from "@/components/sections/Features";
import Roadmap from "@/components/sections/Roadmap";
import Pricing from "@/components/sections/Pricing";
import Platforms from "@/components/sections/Platforms";
import TradeProofs from "@/components/sections/TradeProofs";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-brand-bg text-white overflow-x-hidden">
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

      {/* 9. Why Choose BHATHI FOREX */}
      <WhyChooseUs />

      {/* 9. Frequently Asked Questions */}
      <FAQ />

      {/* 10. Contact & Enrollment */}
      <Contact />

      {/* 11. Premium Footer */}
      <Footer />
    </main>
  );
}
