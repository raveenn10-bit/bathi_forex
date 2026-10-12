"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ACADEMY_CONFIG } from "@/data/academy";
import { useGSAPContext, gsap } from "@/hooks/useGSAPAnimations";
import { getGeneralInquiryWhatsAppUrl } from "@/lib/whatsapp";
import {
  Award,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Monitor,
  UserCheck,
  MessageSquare,
  ArrowRight,
  Maximize2,
  X,
  Compass,
} from "lucide-react";

export default function Mentor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Active view: "portrait" or "desk"
  const [activeView, setActiveView] = useState<"portrait" | "desk">("portrait");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useGSAPContext(() => {
    // ScrollTrigger entrance animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      cardRef.current,
      { opacity: 0, x: -40, scale: 0.96 },
      { opacity: 1, x: 0, scale: 1, duration: 0.9 }
    );

    tl.fromTo(
      contentRef.current?.children ? Array.from(contentRef.current.children) : [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.12, duration: 0.7 },
      "-=0.6"
    );
  }, containerRef);

  const { mentor } = ACADEMY_CONFIG;
  const whatsappMentorUrl = getGeneralInquiryWhatsAppUrl(
    `Hello Bhathiya Sooriarachchi, I am interested in joining BHATHI FOREX and learning directly from you. Please send me the enrollment details.`
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full overflow-hidden py-24 sm:py-32 bg-brand-bgSecondary/40 border-y border-white/5"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-brand-purple/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-brand-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-gold mb-3 shadow-goldGlow">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>FOUNDER & LEAD LECTURER</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Learn Trading Directly with{" "}
            <span className="bg-gradient-to-r from-brand-purple via-brand-purpleLight to-brand-gold bg-clip-text text-transparent">
              {mentor.name}
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-muted max-w-2xl mx-auto">
            Founder, Lecturer & Crypto Master of BHATHI FOREX. Dedicated to engineering disciplined, profitable mindsets through mathematical risk models and raw price action.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column 1: Mentor Visual Showcase */}
          <div ref={cardRef} className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-brand-purple via-brand-purpleLight to-brand-gold opacity-35 blur-xl" />

              {/* Card Container */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-card p-5 sm:p-6 shadow-glass backdrop-blur-xl">
                {/* View Switcher Controls */}
                <div className="flex items-center justify-between mb-4 bg-brand-bgSecondary/90 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setActiveView("portrait")}
                    className={`flex-1 flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                      activeView === "portrait"
                        ? "bg-gradient-to-r from-brand-purple to-brand-purpleLight text-white shadow-purpleGlow"
                        : "text-brand-muted hover:text-white"
                    }`}
                  >
                    <UserCheck className="h-3.5 w-3.5" />
                    <span>Founder Portrait</span>
                  </button>
                  <button
                    onClick={() => setActiveView("desk")}
                    className={`flex-1 flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                      activeView === "desk"
                        ? "bg-gradient-to-r from-brand-gold/80 to-brand-gold text-brand-bg font-bold shadow-goldGlow"
                        : "text-brand-muted hover:text-white"
                    }`}
                  >
                    <Monitor className="h-3.5 w-3.5" />
                    <span>Trading Desk</span>
                  </button>
                </div>

                {/* Primary Photo Presentation Area */}
                <div className="group/photo relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#1c1f2e] via-[#141622] to-[#0c0d15] shadow-2xl">
                  {/* View 1: Founder Cutout Portrait */}
                  {activeView === "portrait" ? (
                    <div className="relative h-full w-full">
                      {/* Luxury atmospheric backdrops */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(153,93,232,0.25),transparent_70%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(214,177,94,0.15),transparent_60%)]" />
                      
                      {/* Architectural grid overlay */}
                      <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                          backgroundSize: "28px 28px",
                        }}
                      />

                      <Image
                        src="/images/bhathiya-sooriarachchi.png"
                        alt="Bhathiya Sooriarachchi - Founder, Lecturer & Crypto Master at BHATHI FOREX"
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-contain object-bottom transition-transform duration-700 ease-out group-hover/photo:scale-105"
                        priority
                      />

                      {/* Vignette Shadow for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-90" />
                    </div>
                  ) : (
                    /* View 2: Live Dual-Monitor Trading Desk */
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/trading-desk.webp"
                        alt="BHATHI FOREX Dual-Monitor Trading Desk with Live Candlestick Charts & Coffee Setup"
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover/photo:scale-105"
                        priority
                      />
                      {/* Ambient Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />
                    </div>
                  )}

                  {/* Top Status & Official Circular Logo Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-start justify-between gap-2">
                    {/* Founder Badge Indicator */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-black/85 px-3 py-1 text-[11px] font-bold text-brand-gold backdrop-blur-md shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
                      </span>
                      <span className="tracking-wide">
                        {activeView === "portrait"
                          ? "FOUNDER & CRYPTO MASTER"
                          : "LIVE TRADING DESK"}
                      </span>
                    </div>

                    {/* Official Circular BHATHI FOREX Logo Badge */}
                    <div className="relative h-13 w-13 sm:h-14 sm:w-14 shrink-0 rounded-full p-[2px] bg-gradient-to-tr from-brand-gold via-brand-purpleLight to-brand-gold shadow-goldGlow transition-transform duration-300 hover:scale-105">
                      <div className="relative h-full w-full overflow-hidden rounded-full bg-black/90 border border-brand-gold/40">
                        <Image
                          src="/images/logo.png"
                          alt="Official BHATHI FOREX Academy Badge"
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating Desk Preview Thumbnail (When on portrait mode) */}
                  {activeView === "portrait" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveView("desk");
                      }}
                      className="absolute right-3.5 bottom-28 z-30 group/pip flex items-center gap-2 rounded-xl border border-white/20 bg-black/80 p-1.5 backdrop-blur-md shadow-xl transition-all hover:scale-105 hover:border-brand-gold"
                    >
                      <div className="relative h-10 w-14 overflow-hidden rounded-lg border border-white/10">
                        <Image
                          src="/images/trading-desk.webp"
                          alt="Trading desk mini preview"
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div className="pr-1 text-left">
                        <span className="block text-[9px] font-mono uppercase tracking-wider text-brand-gold">
                          Setup
                        </span>
                        <span className="block text-[10px] font-semibold text-white">
                          Live Desk
                        </span>
                      </div>
                    </button>
                  )}

                  {/* Floating Portrait Preview Thumbnail (When on desk mode) */}
                  {activeView === "desk" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveView("portrait");
                      }}
                      className="absolute right-3.5 bottom-28 z-30 group/pip flex items-center gap-2 rounded-xl border border-white/20 bg-black/80 p-1.5 backdrop-blur-md shadow-xl transition-all hover:scale-105 hover:border-brand-purple"
                    >
                      <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-brand-card">
                        <Image
                          src="/images/bhathiya-sooriarachchi.png"
                          alt="Bhathiya portrait mini preview"
                          fill
                          sizes="40px"
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="pr-1 text-left">
                        <span className="block text-[9px] font-mono uppercase tracking-wider text-brand-purpleLight">
                          Lecturer
                        </span>
                        <span className="block text-[10px] font-semibold text-white">
                          Bhathiya S.
                        </span>
                      </div>
                    </button>
                  )}

                  {/* Bottom Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-5 text-left bg-gradient-to-t from-brand-bg via-brand-bg/90 to-transparent">
                    <div className="inline-flex items-center gap-1.5 rounded-md bg-brand-gold/15 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-gold border border-brand-gold/30 mb-2 backdrop-blur-sm">
                      <Sparkles className="h-3 w-3" />
                      <span>{mentor.role}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                        {mentor.name}
                      </h3>
                      <Award className="h-5 w-5 text-brand-gold shrink-0 drop-shadow" />
                    </div>
                    <p className="mt-0.5 font-mono text-xs font-semibold text-brand-purpleLight drop-shadow">
                      {mentor.title}
                    </p>

                    {/* Micro stats banner */}
                    <div className="mt-3.5 grid grid-cols-2 gap-2 w-full border-t border-white/15 pt-3">
                      <div className="rounded-xl bg-black/60 border border-white/10 p-2 text-center backdrop-blur-md">
                        <span className="block font-heading text-base font-bold text-brand-gold">
                          4+ Years
                        </span>
                        <span className="text-[10px] text-brand-muted">
                          Market Education
                        </span>
                      </div>
                      <div className="rounded-xl bg-black/60 border border-white/10 p-2 text-center backdrop-blur-md">
                        <span className="block font-heading text-base font-bold text-brand-purpleLight">
                          Direct 1:1
                        </span>
                        <span className="text-[10px] text-brand-muted">
                          Student Guidance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtitle note & Lightbox trigger */}
                <div className="mt-4 flex items-center justify-between text-xs text-brand-muted">
                  <span className="flex items-center gap-1.5 text-brand-gold">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Verified Founder Identity</span>
                  </span>
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="flex items-center gap-1 text-[11px] font-mono text-brand-purpleLight hover:text-white transition-colors"
                  >
                    <Maximize2 className="h-3 w-3" />
                    <span>Expand Visual</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Biography & Philosophy */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-brand-gold">
                <Compass className="h-3.5 w-3.5" />
                FOUNDER, LECTURER & CRYPTO MASTER
              </span>
              <h3 className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Architecting Independent Traders with Systematic Precision
              </h3>
            </div>

            <p className="text-base leading-relaxed text-brand-muted">
              {mentor.bio}
            </p>

            {/* Approach Card */}
            <div className="rounded-2xl border border-brand-purple/20 bg-brand-card/70 p-5 backdrop-blur-md">
              <h4 className="font-heading text-sm font-bold text-brand-purpleLight flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-brand-purpleLight" />
                Educational Approach
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                &ldquo;{mentor.approach}&rdquo;
              </p>
            </div>

            {/* Philosophy Card */}
            <div className="rounded-2xl border border-brand-gold/25 bg-brand-card/70 p-5 backdrop-blur-md">
              <h4 className="font-heading text-sm font-bold text-brand-gold flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-gold" />
                Core Philosophy
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                &ldquo;{mentor.philosophy}&rdquo;
              </p>
            </div>

            {/* Core Specialties List */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
                Key Educational Modules Covered:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {mentor.specialties.map((spec) => (
                  <div
                    key={spec}
                    className="flex items-center gap-2 text-xs text-white/85"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Mentorship CTA */}
            <div className="mt-2 flex flex-wrap items-center gap-4 pt-2">
              <a
                href={whatsappMentorUrl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-purple via-[#823FE0] to-brand-purpleLight px-7 py-3.5 text-sm font-bold text-white shadow-purpleGlow transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4 text-brand-gold" />
                <span>Contact Bhathiya on WhatsApp</span>
              </a>

              <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-brand-purple/50 hover:bg-white/10 active:scale-[0.98]"
              >
                <span>View Courses</span>
                <ArrowRight className="h-4 w-4 text-brand-muted" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] overflow-hidden rounded-3xl border border-white/20 bg-brand-card p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div>
                <h4 className="font-heading text-lg font-bold text-white">
                  {activeView === "portrait"
                    ? "Bhathiya Sooriarachchi — Founder Portrait"
                    : "Live Trading Desk Setup — Sri Lanka"}
                </h4>
                <p className="text-xs text-brand-muted">
                  BHATHI FOREX — A TO Z TRADING
                </p>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-[4/5] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black">
              {activeView === "portrait" ? (
                <Image
                  src="/images/bhathiya-sooriarachchi.png"
                  alt="Bhathiya Sooriarachchi Full"
                  fill
                  className="object-contain"
                />
              ) : (
                <Image
                  src="/images/trading-desk.webp"
                  alt="Trading Desk Full"
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
