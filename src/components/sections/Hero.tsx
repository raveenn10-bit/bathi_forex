"use client";

import React, { useRef } from "react";
import Link from "next/link";
import TradingDashboardMockup from "../ui/TradingDashboardMockup";
import { getGeneralInquiryWhatsAppUrl } from "@/lib/whatsapp";
import { useGSAPContext, gsap } from "@/hooks/useGSAPAnimations";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Sparkles,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const gradientTextRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAPContext(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 0.2s — Eyebrow badge appears
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: -15, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6 },
      0.2
    );

    // 0.4s — First heading line reveals upward
    tl.fromTo(
      heading1Ref.current,
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.4
    );

    // 0.6s — Second heading line reveals
    tl.fromTo(
      heading2Ref.current,
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.6
    );

    // 0.8s — Gradient text reveal
    tl.fromTo(
      gradientTextRef.current,
      { opacity: 0, y: 20, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 },
      0.8
    );

    // 1.0s — Description fades in
    tl.fromTo(
      descRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7 },
      1.0
    );

    // 1.2s — CTA buttons stagger upward
    tl.fromTo(
      ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.12, duration: 0.6 },
      1.2
    );

    // Stats strip
    tl.fromTo(
      statsRef.current?.children ? Array.from(statsRef.current.children) : [],
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
      1.3
    );

    // 1.4s — Trading dashboard scales and fades into view
    tl.fromTo(
      visualRef.current,
      { opacity: 0, y: 40, scale: 0.94 },
      { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power2.out" },
      1.4
    );
  }, containerRef);

  const whatsappInquiry = getGeneralInquiryWhatsAppUrl();

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] w-full overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Cinematic Ambient Background Lighting */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Top Center-Right Ocean Breeze Glow */}
        <div className="absolute -top-32 right-1/4 h-[550px] w-[550px] rounded-full bg-[#7FCDFF]/25 dark:bg-[#38B6FF]/15 blur-[140px] filter" />
        {/* Bottom Left Peach Champagne Glow */}
        <div className="absolute top-1/2 -left-32 h-[450px] w-[450px] rounded-full bg-[#FFD3B6]/35 dark:bg-[#E09C64]/10 blur-[140px] filter" />
        {/* Geometric Technical Grid */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] bg-[linear-gradient(rgba(15,23,42,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]"
          style={{
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Hero Content */}
          <div className="flex flex-col lg:col-span-6 xl:col-span-7">
            {/* Eyebrow Badge */}
            <div ref={badgeRef} className="mb-5 inline-flex items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 px-3.5 py-1.5 shadow-xs backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                  PROFESSIONAL TRADING EDUCATION
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="font-heading text-[10px] font-bold tracking-wide text-slate-800 dark:text-slate-200">
                  APEX TRADING ACADEMY
                </span>
              </div>
            </div>

            {/* Main Headings */}
            <h1
              ref={heading1Ref}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]"
            >
              Master Forex &
              <br />
              Crypto Trading
            </h1>

            {/* Refined Executive Subheading */}
            <h2
              ref={heading2Ref}
              className="mt-3 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100"
            >
              Trade Smarter.{" "}
              <span className="text-sky-600 dark:text-sky-400 font-extrabold">Learn With Precision.</span>
            </h2>

            {/* Description */}
            <p
              ref={descRef}
              className="mt-5 max-w-xl text-base sm:text-lg font-normal leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Build your trading knowledge from beginner to advanced with
              structured Forex and cryptocurrency education at Apex Trading Academy.
              Led by Bhathiya Sooriarachchi.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#courses"
                className="group inline-flex items-center gap-2.5 rounded-full bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-sky-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Courses</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={whatsappInquiry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-7 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-xs transition-all duration-200 hover:border-sky-500 dark:hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>

            {/* Key Value Trust Points */}
            <div
              ref={statsRef}
              className="mt-10 grid grid-cols-3 gap-3 border-t border-slate-200 dark:border-slate-800 pt-6 max-w-lg"
            >
              <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-3 shadow-xs text-slate-700 dark:text-slate-300">
                <span className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  4-Phase
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Structured Roadmap
                </span>
              </div>
              <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-3 shadow-xs text-slate-700 dark:text-slate-300">
                <span className="font-heading text-lg font-bold text-amber-600 dark:text-amber-400">
                  1 : 3+ R:R
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Risk Architecture
                </span>
              </div>
              <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-3 shadow-xs text-slate-700 dark:text-slate-300">
                <span className="font-heading text-lg font-bold text-sky-600 dark:text-sky-400">
                  Direct 1:1
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Mentorship Support
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Floating Terminal */}
          <div
            ref={visualRef}
            className="lg:col-span-6 xl:col-span-5 relative"
          >
            <div className="animate-float">
              <TradingDashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
