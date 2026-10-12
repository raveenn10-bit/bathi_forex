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
        {/* Top Center-Right Purple Nebula */}
        <div className="absolute -top-32 right-1/4 h-[550px] w-[550px] rounded-full bg-brand-purple/20 blur-[130px] filter" />
        {/* Bottom Left Subtle Gold Nebula */}
        <div className="absolute top-1/2 -left-32 h-[450px] w-[450px] rounded-full bg-brand-gold/15 blur-[140px] filter" />
        {/* Geometric Technical Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
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
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-purple/40 bg-brand-purple/10 px-3.5 py-1.5 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-brand-gold animate-pulse" />
                <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-brand-purpleLight">
                  PROFESSIONAL TRADING EDUCATION
                </span>
                <span className="h-1 w-1 rounded-full bg-brand-gold" />
                <span className="font-heading text-[10px] font-medium tracking-wide text-white/80">
                  BHATHI FOREX
                </span>
              </div>
            </div>

            {/* Main Headings */}
            <h1
              ref={heading1Ref}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
            >
              Master Forex &
              <br />
              Crypto Trading
            </h1>

            {/* Gradient Heading */}
            <h2
              ref={heading2Ref}
              className="mt-3 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
            >
              <span
                ref={gradientTextRef}
                className="bg-gradient-to-r from-brand-purpleLight via-brand-purple to-brand-gold bg-clip-text text-transparent"
              >
                Trade Smarter. Learn Better.
              </span>
            </h2>

            {/* Description */}
            <p
              ref={descRef}
              className="mt-5 max-w-xl text-base sm:text-lg font-normal leading-relaxed text-brand-muted"
            >
              Build your trading knowledge from beginner to advanced with
              structured Forex and cryptocurrency education at BHATHI FOREX.
              Eliminate guesswork with institutional price action, mathematical risk controls, and clear execution rules.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#courses"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-purple via-[#823FE0] to-brand-purpleLight px-7 py-3.5 text-sm font-bold text-white shadow-purpleGlow transition-all duration-300 hover:scale-[1.03] hover:shadow-brand-purple/60 active:scale-[0.98]"
              >
                <span>Explore Courses</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={whatsappInquiry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-brand-bgSecondary/80 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-brand-purple/60 hover:bg-white/5 active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4 text-brand-gold" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>

            {/* Key Value Trust Points */}
            <div
              ref={statsRef}
              className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 max-w-lg"
            >
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-white">
                  4-Phase
                </span>
                <span className="text-xs text-brand-muted">
                  Structured Roadmap
                </span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-4">
                <span className="font-heading text-lg font-bold text-brand-gold">
                  1 : 3+ R:R
                </span>
                <span className="text-xs text-brand-muted">
                  Risk Architecture
                </span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-4">
                <span className="font-heading text-lg font-bold text-brand-purpleLight">
                  Direct 1:1
                </span>
                <span className="text-xs text-brand-muted">
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
