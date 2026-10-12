"use client";

import React, { useRef } from "react";
import { ROADMAP_PHASES } from "@/data/roadmap";
import { useGSAPContext, gsap } from "@/hooks/useGSAPAnimations";
import MobileAutoScrollTrack from "../ui/MobileAutoScrollTrack";
import {
  Compass,
  LineChart,
  ShieldAlert,
  Brain,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const PHASE_ICONS = [Compass, LineChart, ShieldAlert, Brain];

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const phasesRef = useRef<HTMLDivElement>(null);

  useGSAPContext(() => {
    // Progressive timeline fill animation
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1.4,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // Stagger phase cards
    gsap.fromTo(
      phasesRef.current?.children ? Array.from(phasesRef.current.children) : [],
      { opacity: 0, y: 40, scale: 0.95 },
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
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-slate-50/60 border-t border-slate-200/80"
    >
      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-[150px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-72 w-72 rounded-full bg-amber-100/40 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-3 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>PROGRESSIVE LEARNING PATHWAY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Your Roadmap to Trading Knowledge
          </h2>
          <p className="mt-4 text-base text-slate-600">
            A battle-tested four-phase progression taking you step-by-step from zero background to disciplined market mastery at Apex Trading Academy.
          </p>
        </div>

        {/* Desktop Progressive Connecting Line */}
        <div className="relative hidden lg:block mb-8">
          <div className="absolute top-1/2 left-10 right-10 h-1 -translate-y-1/2 bg-slate-200 rounded-full" />
          <div
            ref={lineRef}
            className="absolute top-1/2 left-10 right-10 h-1 -translate-y-1/2 bg-gradient-to-r from-sky-500 via-sky-600 to-amber-500 rounded-full shadow-sm"
          />
        </div>

        {/* Mobile Horizontal Auto-Scrollable Timeline Track */}
        <MobileAutoScrollTrack
          badgeLabel="Phase Pathway • Auto-Scrolls LTR"
          className="mb-4"
        >
          {ROADMAP_PHASES.map((phase, idx) => {
            const IconComp = PHASE_ICONS[idx] || Compass;
            const isFinalPhase = idx === 3;

            return (
              <div
                key={`mobile-${phase.phase}`}
                className={`group relative flex flex-col justify-between rounded-3xl border p-6 transition-all duration-300 shadow-sm ${
                  isFinalPhase
                    ? "border-amber-300 bg-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                        isFinalPhase
                          ? "border-amber-300 bg-amber-50 text-amber-700"
                          : "border-sky-200 bg-sky-50 text-sky-600"
                      }`}
                    >
                      <IconComp className="h-5 w-5" />
                    </div>

                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full border ${
                        isFinalPhase
                          ? "border-amber-300 bg-amber-50 text-amber-700"
                          : "border-sky-200 bg-sky-50 text-sky-700"
                      }`}
                    >
                      PHASE 0{phase.phase}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] font-semibold tracking-wider uppercase text-slate-500">
                    {phase.badge}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-bold text-slate-900">
                    {phase.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
                    {phase.description}
                  </p>

                  <div className="mt-4 space-y-2 border-t border-slate-100 pt-3">
                    {phase.milestones.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2
                          className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${
                            isFinalPhase ? "text-amber-500" : "text-sky-600"
                          }`}
                        />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <span className="block text-[9px] font-mono uppercase tracking-wider text-amber-700 font-bold">
                    Key Outcome
                  </span>
                  <p className="mt-1 text-xs text-slate-800 font-medium">
                    {phase.keyOutcome}
                  </p>
                </div>
              </div>
            );
          })}
        </MobileAutoScrollTrack>

        {/* Desktop 4 Phases Grid */}
        <div
          ref={phasesRef}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {ROADMAP_PHASES.map((phase, idx) => {
            const IconComp = PHASE_ICONS[idx] || Compass;
            const isFinalPhase = idx === 3;

            return (
              <div
                key={phase.phase}
                className={`group relative flex flex-col justify-between rounded-3xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-white ${
                  isFinalPhase
                    ? "border-amber-300 hover:border-amber-400"
                    : "border-slate-200 hover:border-sky-300"
                }`}
              >
                <div>
                  {/* Phase Milestone Marker */}
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110 ${
                        isFinalPhase
                          ? "border-amber-300 bg-amber-50 text-amber-700 shadow-xs"
                          : "border-sky-200 bg-sky-50 text-sky-600"
                      }`}
                    >
                      <IconComp className="h-6 w-6" />
                    </div>

                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full border ${
                        isFinalPhase
                          ? "border-amber-300 bg-amber-50 text-amber-700"
                          : "border-sky-200 bg-sky-50 text-sky-700"
                      }`}
                    >
                      PHASE 0{phase.phase}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-slate-500">
                    {phase.badge}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-bold text-slate-900">
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {phase.description}
                  </p>

                  {/* Milestones Checklist */}
                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {phase.milestones.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2
                          className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${
                            isFinalPhase ? "text-amber-500" : "text-sky-600"
                          }`}
                        />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Outcome Footer */}
                <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-amber-700 font-bold">
                    Key Outcome
                  </span>
                  <p className="mt-1 text-xs text-slate-800 font-medium">
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
