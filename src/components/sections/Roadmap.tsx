"use client";

import React, { useRef } from "react";
import { ROADMAP_PHASES } from "@/data/roadmap";
import { useGSAPContext, gsap, ScrollTrigger } from "@/hooks/useGSAPAnimations";
import {
  Compass,
  LineChart,
  ShieldAlert,
  Crown,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const PHASE_ICONS = [Compass, LineChart, ShieldAlert, Crown];

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const phasesRef = useRef<HTMLDivElement>(null);

  useGSAPContext(() => {
    // Progressive line drawing timeline
    const lineElement = lineRef.current;
    if (lineElement) {
      gsap.fromTo(
        lineElement,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );
    }

    // Phase cards staggered trigger
    gsap.fromTo(
      phasesRef.current?.children ? Array.from(phasesRef.current.children) : [],
      { opacity: 0, y: 35, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, containerRef);

  return (
    <section
      id="roadmap"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-brand-bgSecondary/30 border-t border-white/5"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-purple/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-gold mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>PROGRESSIVE LEARNING PATHWAY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Your Roadmap to Trading Knowledge
          </h2>
          <p className="mt-4 text-base text-brand-muted">
            A battle-tested four-phase progression taking you step-by-step from zero background to disciplined market mastery.
          </p>
        </div>

        {/* Desktop Progressive Connecting Line */}
        <div className="relative hidden lg:block mb-8">
          <div className="absolute top-1/2 left-10 right-10 h-1 -translate-y-1/2 bg-white/10 rounded-full" />
          <div
            ref={lineRef}
            className="absolute top-1/2 left-10 right-10 h-1 -translate-y-1/2 bg-gradient-to-r from-brand-purple via-brand-purpleLight to-brand-gold rounded-full shadow-purpleGlow"
          />
        </div>

        {/* 4 Phases Grid / Horizontal on Desktop & Vertical on Mobile */}
        <div
          ref={phasesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {ROADMAP_PHASES.map((phase, idx) => {
            const IconComp = PHASE_ICONS[idx] || Compass;
            const isFinalPhase = idx === 3;

            return (
              <div
                key={phase.phase}
                className={`group relative flex flex-col justify-between rounded-3xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                  isFinalPhase
                    ? "border-brand-gold/40 bg-gradient-to-b from-brand-card to-brand-bgSecondary hover:border-brand-gold hover:shadow-goldGlow"
                    : "border-white/10 bg-brand-card/90 hover:border-brand-purple/40 hover:bg-brand-card"
                }`}
              >
                <div>
                  {/* Phase Milestone Marker */}
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110 ${
                        isFinalPhase
                          ? "border-brand-gold/40 bg-brand-gold/20 text-brand-gold shadow-goldGlow"
                          : "border-brand-purple/40 bg-brand-purple/20 text-brand-purpleLight"
                      }`}
                    >
                      <IconComp className="h-6 w-6" />
                    </div>

                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full border ${
                        isFinalPhase
                          ? "border-brand-gold/30 bg-brand-gold/10 text-brand-gold"
                          : "border-brand-purple/30 bg-brand-purple/10 text-brand-purpleLight"
                      }`}
                    >
                      PHASE 0{phase.phase}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-brand-muted">
                    {phase.badge}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-bold text-white">
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-brand-muted">
                    {phase.description}
                  </p>

                  {/* Milestones Checklist */}
                  <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                    {phase.milestones.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="flex items-start gap-2 text-xs text-white/80"
                      >
                        <CheckCircle2
                          className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${
                            isFinalPhase ? "text-brand-gold" : "text-brand-purpleLight"
                          }`}
                        />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Outcome Footer */}
                <div className="mt-6 rounded-xl border border-white/5 bg-brand-bgSecondary/60 p-3">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-brand-gold">
                    Key Outcome
                  </span>
                  <p className="mt-1 text-xs text-white/90 font-medium">
                    {phase.keyOutcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
