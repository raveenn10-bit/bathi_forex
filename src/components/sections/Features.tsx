"use client";

import React, { useRef } from "react";
import { EDUCATION_FEATURES } from "@/data/features";
import { useGSAPContext, gsap, ScrollTrigger } from "@/hooks/useGSAPAnimations";
import {
  Globe2,
  Coins,
  CandlestickChart,
  ShieldCheck,
  BrainCircuit,
  Cpu,
  CheckCircle,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Globe2,
  Coins,
  CandlestickChart,
  ShieldCheck,
  BrainCircuit,
  Cpu,
};

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAPContext(() => {
    gsap.fromTo(
      cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
      { opacity: 0, y: 35, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
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
      id="education"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-brand-purple/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-10 bottom-10 h-72 w-72 rounded-full bg-brand-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-purpleLight mb-3">
            <span>CURRICULUM ARCHITECTURE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Learn Trading
          </h2>
          <p className="mt-4 text-base text-brand-muted">
            Six comprehensive educational pillars engineered to take you from foundational basics to institutional precision.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {EDUCATION_FEATURES.map((item, idx) => {
            const IconComponent = ICON_MAP[item.iconName] || Globe2;
            const isHighlighted = idx === 2 || idx === 3; // Technical Analysis & Risk Management

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-3xl border p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card ${
                  isHighlighted
                    ? "border-brand-purple/40 bg-gradient-to-b from-brand-card to-brand-bgSecondary hover:border-brand-purple hover:shadow-purpleGlow"
                    : "border-white/10 bg-brand-card/90 hover:border-brand-purple/40 hover:bg-brand-card"
                }`}
              >
                {/* Top Subtle Corner Flare */}
                <div className="absolute top-0 right-0 h-28 w-28 rounded-full bg-brand-purple/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-40 pointer-events-none" />

                {/* Card Icon & Index */}
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110 ${
                      isHighlighted
                        ? "border-brand-purple/40 bg-brand-purple/20 text-brand-purpleLight shadow-purpleGlow"
                        : "border-white/10 bg-brand-bgSecondary text-white group-hover:border-brand-purple/40 group-hover:text-brand-purpleLight"
                    }`}
                  >
                    <IconComponent className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-brand-muted/70">
                    0{idx + 1}
                  </span>
                </div>

                {/* Subtitle / Tagline */}
                <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-brand-gold">
                  {item.tagline}
                </span>

                {/* Title */}
                <h3 className="mt-1 font-heading text-xl font-bold text-white transition-colors group-hover:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {item.description}
                </p>

                {/* Bullet details */}
                <div className="mt-6 space-y-2 border-t border-white/5 pt-5">
                  {item.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 text-xs text-white/80"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-brand-purpleLight mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
