"use client";

import React, { useRef } from "react";
import { WHY_CHOOSE_POINTS } from "@/data/whyUs";
import { useGSAPContext, gsap, ScrollTrigger } from "@/hooks/useGSAPAnimations";
import {
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
  Compass,
  CheckCircle2,
  Award,
} from "lucide-react";

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAPContext(() => {
    gsap.fromTo(
      cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, containerRef);

  return (
    <section
      id="why-us"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-gold mb-3">
            <Award className="h-3.5 w-3.5" />
            <span>THE BHATHI FOREX STANDARD</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Choose BHATHI FOREX
          </h2>
          <p className="mt-4 text-base text-brand-muted">
            We focus exclusively on high-caliber financial market education, capital defense, and rule-based consistency. No get-rich illusions.
          </p>
        </div>

        {/* Editorial Feature Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_CHOOSE_POINTS.map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-3xl border border-white/10 bg-brand-card/80 p-7 shadow-glass backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple/40 hover:bg-brand-card hover:shadow-card"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase rounded-full border border-brand-purple/30 bg-brand-purple/10 px-2.5 py-1 text-brand-purpleLight">
                  {item.badge}
                </span>
                <span className="font-mono text-xs text-brand-muted/60">
                  {`#0${idx + 1}`}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-white group-hover:text-white transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ethical Statement Banner */}
        <div className="mt-12 rounded-3xl border border-brand-gold/20 bg-gradient-to-r from-brand-bgSecondary via-brand-card to-brand-bgSecondary p-8 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2 text-brand-gold">
            <ShieldCheck className="h-5 w-5" />
            <span className="font-heading text-sm font-bold uppercase tracking-wider">
              Educational Integrity Commitment
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/90">
            &ldquo;We do not fabricate trading results, student profits, or unrealistic overnight wealth. We teach math, probability, psychology, and risk management so you can cultivate an independent trading skillset.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
