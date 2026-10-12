"use client";

import React, { useRef } from "react";
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
  MessageSquare,
  ArrowRight,
  Check,
} from "lucide-react";

const FOUNDER_STATS = [
  {
    value: "4+ Years",
    label: "Educating",
    detail: "Dedicated Mentorship",
  },
  {
    value: "1:1",
    label: "Mentorship",
    detail: "Direct Student Guidance",
  },
  {
    value: "100%",
    label: "Objective",
    detail: "Rule-Based Methodology",
  },
];

export default function Mentor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      { opacity: 0, x: -35, scale: 0.97 },
      { opacity: 1, x: 0, scale: 1, duration: 0.85 }
    );

    tl.fromTo(
      contentRef.current?.children
        ? Array.from(contentRef.current.children)
        : [],
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.7 },
      "-=0.55"
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
      className="relative w-full overflow-hidden py-24 sm:py-32 bg-brand-bgSecondary/30 border-y border-white/5"
    >
      {/* Subtle ambient luxury glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-brand-purple/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-brand-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold mb-3.5 shadow-goldGlow">
            <GraduationCap className="h-4 w-4" />
            <span>FOUNDER & LEAD LECTURER</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Learn Trading Directly with{" "}
            <span className="bg-gradient-to-r from-brand-purple via-brand-purpleLight to-brand-gold bg-clip-text text-transparent">
              {mentor.name}
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-muted max-w-2xl mx-auto">
            Founder, Lecturer &amp; Crypto Master of BHATHI FOREX. Dedicated to engineering disciplined, independent traders through mathematical probability and institutional price action.
          </p>
        </div>

        {/* Two-Column Executive Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Column 1: Founder Portrait Showcase */}
          <div ref={cardRef} className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Luxury Halo Glow behind portrait */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-purple/30 via-brand-purpleLight/20 to-brand-gold/25 opacity-40 blur-2xl" />

              {/* Main Portrait Frame */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#1c1f2e] via-[#141622] to-[#0d0e15] p-3 sm:p-4 shadow-glass backdrop-blur-xl">
                {/* Visual Area */}
                <div className="group/portrait relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#1e2235]/70 via-[#141622] to-[#0c0d15] shadow-2xl">
                  {/* Subtle radial luxury illumination */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(153,93,232,0.22),transparent_70%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(214,177,94,0.14),transparent_65%)]" />

                  {/* Architectural subtle grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  {/* Top Bar: Founder Credential & Academy Seal */}
                  <div className="absolute top-3.5 inset-x-3.5 z-20 flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/40 bg-black/80 px-3 py-1 text-[11px] font-bold text-brand-gold backdrop-blur-md shadow-lg">
                      <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" />
                      <span className="tracking-wide">VERIFIED FOUNDER</span>
                    </div>

                    {/* Official Academy Emblem */}
                    <div className="relative h-11 w-11 shrink-0 rounded-full p-[2px] bg-gradient-to-tr from-brand-gold via-brand-purpleLight to-brand-gold shadow-goldGlow">
                      <div className="relative h-full w-full overflow-hidden rounded-full bg-black/95 border border-brand-gold/40">
                        <Image
                          src="/images/logo.png"
                          alt="Official BHATHI FOREX Academy Emblem"
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bhathiya Sooriarachchi Cutout Portrait */}
                  <Image
                    src="/images/bhathiya-sooriarachchi.png"
                    alt="Bhathiya Sooriarachchi - Founder, Lecturer & Crypto Master at BHATHI FOREX"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-contain object-bottom transition-transform duration-700 ease-out group-hover/portrait:scale-105"
                    priority
                  />

                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0c0d15] via-[#0c0d15]/80 to-transparent" />

                  {/* Bottom Portrait Nameplate */}
                  <div className="absolute bottom-3.5 inset-x-3.5 z-20 text-left">
                    <div className="rounded-2xl border border-white/10 bg-black/75 p-3.5 backdrop-blur-md shadow-xl">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <h3 className="font-heading text-lg sm:text-xl font-bold text-white flex items-center gap-1.5">
                            <span>{mentor.name}</span>
                            <Award className="h-4 w-4 text-brand-gold shrink-0" />
                          </h3>
                          <p className="font-mono text-xs font-semibold text-brand-purpleLight">
                            Founder, Lecturer &amp; Crypto Master
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-brand-bullish bg-brand-bullish/10 border border-brand-bullish/30 px-2 py-0.5 rounded-full shrink-0">
                          <Check className="h-2.5 w-2.5" />
                          <span>Active Desk</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Executive Stats Grid */}
                <div className="mt-3.5 grid grid-cols-3 gap-2">
                  {FOUNDER_STATS.map((stat, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-white/10 bg-brand-bgSecondary/80 p-3 text-center backdrop-blur-md transition-all hover:border-brand-purple/40"
                    >
                      <span className="block font-heading text-base sm:text-lg font-extrabold text-brand-gold">
                        {stat.value}
                      </span>
                      <span className="block text-[11px] font-semibold text-white/90">
                        {stat.label}
                      </span>
                      <span className="hidden sm:block text-[9px] text-brand-muted/80 mt-0.5 truncate">
                        {stat.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Biography, Cards & Modules */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-brand-gold mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>EXECUTIVE ACADEMY PROFILE</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Architecting Independent Traders with Systematic Precision
              </h3>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-brand-muted">
              {mentor.bio}
            </p>

            {/* Clean Cards: Educational Approach & Core Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Educational Approach Card */}
              <div className="rounded-2xl border border-brand-purple/30 bg-gradient-to-br from-brand-card/95 to-brand-bgSecondary/80 p-5 shadow-glass backdrop-blur-md transition-all hover:border-brand-purple/50">
                <div className="flex items-center gap-2 text-brand-purpleLight mb-2">
                  <div className="rounded-lg bg-brand-purple/15 p-1.5 border border-brand-purple/30">
                    <TrendingUp className="h-4 w-4 text-brand-purpleLight" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-white">
                    Educational Approach
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-brand-muted">
                  &ldquo;{mentor.approach}&rdquo;
                </p>
              </div>

              {/* Core Philosophy Card */}
              <div className="rounded-2xl border border-brand-gold/30 bg-gradient-to-br from-brand-card/95 to-brand-bgSecondary/80 p-5 shadow-glass backdrop-blur-md transition-all hover:border-brand-gold/50">
                <div className="flex items-center gap-2 text-brand-gold mb-2">
                  <div className="rounded-lg bg-brand-gold/15 p-1.5 border border-brand-gold/30">
                    <ShieldCheck className="h-4 w-4 text-brand-gold" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-white">
                    Core Philosophy
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-brand-muted">
                  &ldquo;{mentor.philosophy}&rdquo;
                </p>
              </div>
            </div>

            {/* Key Educational Modules Covered */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-muted flex items-center gap-2">
                <span>Key Educational Modules Covered:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {mentor.specialties.map((spec) => (
                  <div
                    key={spec}
                    className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5 text-xs text-white/90 transition-all hover:border-brand-purple/30 hover:bg-white/[0.04]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prominent CTAs */}
            <div className="mt-2 flex flex-wrap items-center gap-4 pt-2">
              <a
                href={whatsappMentorUrl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-brand-purple via-[#823FE0] to-brand-purpleLight px-7 py-3.5 text-sm font-bold text-white shadow-purpleGlow transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(153,93,232,0.45)] active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4 text-brand-gold" />
                <span>Speak with Bhathiya on WhatsApp</span>
              </a>

              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-brand-purple/50 hover:bg-white/10 active:scale-[0.98]"
              >
                <span>Explore Courses</span>
                <ArrowRight className="h-4 w-4 text-brand-muted" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
