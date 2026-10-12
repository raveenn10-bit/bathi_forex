"use client";

import React, { useRef } from "react";
import { EDUCATION_FEATURES } from "@/data/features";
import { useGSAPContext, gsap, ScrollTrigger } from "@/hooks/useGSAPAnimations";
import MobileAutoScrollTrack from "@/components/ui/MobileAutoScrollTrack";
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
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-[#7FCDFF]/20 blur-[140px]" />
      <div className="pointer-events-none absolute left-10 bottom-10 h-72 w-72 rounded-full bg-[#FFD3B6]/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-3 shadow-sm">
            <span>CURRICULUM ARCHITECTURE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Learn Trading
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Six comprehensive educational pillars engineered to take you from foundational basics to institutional precision at Apex Trading Academy.
          </p>
        </div>

        {/* Mobile Horizontal Auto-Scroll Track with Touch Swipeability */}
        <MobileAutoScrollTrack
          badgeLabel="Curriculum Pillars • Auto-Scrolls LTR"
          className="mb-4"
        >
          {EDUCATION_FEATURES.map((item, idx) => {
            const IconComponent = ICON_MAP[item.iconName] || Globe2;
            const isHighlighted = idx === 2 || idx === 3;

            return (
              <div
                key={`mobile-${item.id}`}
                className={`group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border p-6 transition-all duration-300 shadow-glass ${
                  isHighlighted
                    ? "border-sky-300 bg-white/95"
                    : "border-slate-200 bg-white/85"
                }`}
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-sky-100/50 blur-xl pointer-events-none" />

                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                        isHighlighted
                          ? "border-sky-300 bg-sky-50 text-sky-600"
                          : "border-slate-200 bg-slate-50 text-slate-700"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-amber-600">
                    {item.tagline}
                  </span>

                  <h3 className="mt-1 font-heading text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                  {item.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-1.5 text-xs text-slate-700"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-sky-600 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </MobileAutoScrollTrack>

        {/* Desktop 6 Feature Cards Grid */}
        <div
          ref={cardsRef}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {EDUCATION_FEATURES.map((item, idx) => {
            const IconComponent = ICON_MAP[item.iconName] || Globe2;
            const isHighlighted = idx === 2 || idx === 3; // Technical Analysis & Risk Management

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-3xl border p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card ${
                  isHighlighted
                    ? "border-sky-300 bg-white/95 shadow-glass hover:border-sky-400"
                    : "border-slate-200 bg-white/85 shadow-glass hover:border-sky-300 hover:bg-white"
                }`}
              >
                {/* Top Subtle Corner Flare */}
                <div className="absolute top-0 right-0 h-28 w-28 rounded-full bg-sky-100/60 blur-2xl transition-opacity group-hover:opacity-100 opacity-40 pointer-events-none" />

                {/* Card Icon & Index */}
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110 ${
                      isHighlighted
                        ? "border-sky-300 bg-sky-50 text-sky-600 shadow-sm"
                        : "border-slate-200 bg-slate-50 text-slate-700 group-hover:border-sky-300 group-hover:text-sky-600"
                    }`}
                  >
                    <IconComponent className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Subtitle / Tagline */}
                <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-amber-600">
                  {item.tagline}
                </span>

                {/* Title */}
                <h3 className="mt-1 font-heading text-xl font-bold text-slate-900 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                {/* Bullet details */}
                <div className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                  {item.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 text-xs text-slate-700"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-sky-600 mt-0.5 shrink-0" />
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
