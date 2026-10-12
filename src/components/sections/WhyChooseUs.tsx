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
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-3 shadow-sm">
            <Award className="h-3.5 w-3.5 text-amber-600" />
            <span>THE APEX TRADING ACADEMY STANDARD</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Apex Trading Academy
          </h2>
          <p className="mt-4 text-base text-slate-600">
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
              className="group relative rounded-3xl border border-slate-200 bg-white/85 p-7 shadow-glass backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400 hover:bg-white hover:shadow-card"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] font-bold tracking-widest uppercase rounded-full border border-sky-300 bg-sky-50 px-2.5 py-1 text-sky-700">
                  {item.badge}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {`#0${idx + 1}`}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ethical Statement Banner */}
        <div className="mt-12 rounded-3xl border border-amber-300/80 bg-gradient-to-r from-amber-50/70 via-white to-amber-50/70 p-8 text-center max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-2 text-amber-600">
            <ShieldCheck className="h-5 w-5" />
            <span className="font-heading text-sm font-bold uppercase tracking-wider text-amber-800">
              Educational Integrity Commitment
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            &ldquo;We do not fabricate trading results, student profits, or unrealistic overnight wealth. We teach math, probability, psychology, and risk management so you can cultivate an independent trading skillset.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
