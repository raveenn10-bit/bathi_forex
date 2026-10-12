"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ACADEMY_CONFIG } from "@/data/academy";
import { getGeneralInquiryWhatsAppUrl } from "@/lib/whatsapp";
import { useGSAPContext, gsap } from "@/hooks/useGSAPAnimations";
import {
  Users,
  LineChart,
  UserCheck,
  Bell,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Lock,
  MessageSquare,
  TrendingUp,
  Volume2,
  Flame,
} from "lucide-react";

/**
 * Clean vector SVG for official WhatsApp branding
 */
function WhatsAppGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893 0-3.177-1.237-6.164-3.489-8.416" />
    </svg>
  );
}

// Icon mapper for benefits cards
const BENEFIT_ICONS = [
  LineChart, // Daily Chart Markups & Watchlists
  UserCheck, // Direct Access to Bhathiya
  Bell, // High-Impact Macro Alerts
  ShieldCheck, // Supportive Student Trading Culture
];

const BENEFIT_PILLS = [
  "XAUUSD • FX • CRYPTO",
  "1:1 DIRECT FEEDBACK",
  "CPI & NFP DEFENSE",
  "NO-GAMBLING CULTURE",
];

export default function StudentCommunity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAPContext(() => {
    // Feature cards stagger animation
    gsap.fromTo(
      cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      }
    );

    // Big CTA card entrance
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.96, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, containerRef);

  const { studentCommunity } = ACADEMY_CONFIG;
  const whatsappGroupUrl = studentCommunity.whatsappGroupUrl;
  const directInquiryUrl = getGeneralInquiryWhatsAppUrl(
    "Hello Bhathiya Sooriarachchi, I would like to inquire about joining the BHATHI FOREX student forum and learning program."
  );

  return (
    <section
      id="community"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-brand-bgSecondary/30 border-y border-white/5"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[420px] w-[420px] rounded-full bg-brand-gold/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 shadow-[0_0_20px_rgba(37,211,102,0.2)]">
            <WhatsAppGlyph className="h-4 w-4 fill-emerald-400" />
            <span>OFFICIAL STUDENT FORUM & TRADING COMMUNITY</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Join the Official{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-brand-gold bg-clip-text text-transparent">
              Student WhatsApp Forum
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Connect with 1,500+ active Sri Lankan traders, get daily market breakdowns, and receive direct chart guidance from Bhathiya Sooriarachchi.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-white/80">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>1,500+ Active Members</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-brand-gold" />
              <span>Daily Pre-Market Watchlists</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Zero Spam & Anti-Gambling Rule</span>
            </span>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20"
        >
          {studentCommunity.benefits.map((benefit, idx) => {
            const IconComponent = BENEFIT_ICONS[idx % BENEFIT_ICONS.length];
            const pillText = BENEFIT_PILLS[idx % BENEFIT_PILLS.length];

            return (
              <div
                key={benefit.title}
                className="group relative rounded-3xl border border-white/10 bg-brand-card/75 p-6 shadow-glass backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/40 hover:bg-brand-card hover:shadow-[0_12px_32px_rgba(0,0,0,0.5),0_0_25px_rgba(37,211,102,0.15)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(37,211,102,0.15)] transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-brand-muted/60">
                      {`0${idx + 1}`}
                    </span>
                  </div>

                  <span className="inline-block font-mono text-[10px] font-bold tracking-wider uppercase text-brand-gold mb-2">
                    {pillText}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-brand-muted">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-medium text-emerald-400/90">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>Included for All Forum Students</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big, High-Converting WhatsApp Forum CTA Card */}
        <div
          ref={ctaRef}
          className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-brand-card via-[#161d28] to-brand-bg p-8 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(37,211,102,0.15)] backdrop-blur-2xl"
        >
          {/* Subtle background glow spots */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-brand-gold/15 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Conversion Copy & CTA Buttons */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Trust Badges Strip */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/50 bg-emerald-500/15 px-3 py-1 font-mono text-xs font-bold text-emerald-400 shadow-[0_0_15px_rgba(37,211,102,0.25)]">
                  <WhatsAppGlyph className="h-3.5 w-3.5 fill-emerald-400" />
                  <span>1,500+ Active Traders</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 font-mono text-xs font-bold text-brand-gold">
                  <Sparkles className="h-3 w-3" />
                  <span>100% Free Educational Forum</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium text-brand-muted">
                  <Lock className="h-3 w-3" />
                  <span>Zero Spam Guarantee</span>
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Accelerate Your Trading Journey with Sri Lanka&apos;s Most Disciplined Community
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-brand-muted">
                  Never trade in isolation again. Join our verified student community to review trade setups, discuss real macroeconomic events, and elevate your discipline alongside fellow dedicated traders under Bhathiya&apos;s direct supervision.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={whatsappGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20BA5C] to-[#128C7E] px-7 py-4 text-sm font-bold text-white shadow-[0_4px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_35px_rgba(37,211,102,0.6)] active:scale-[0.98]"
                >
                  <WhatsAppGlyph className="h-5 w-5 fill-white" />
                  <span>Join Student WhatsApp Forum</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={directInquiryUrl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-gold/40 bg-brand-gold/10 px-6 py-4 text-sm font-semibold text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-brand-bg hover:border-brand-gold active:scale-[0.98]"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Direct 1:1 Inquiries</span>
                </a>
              </div>

              {/* Ethical Community Rules */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-brand-muted border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Strict Moderator Screening</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>No Scam Bots or Signals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Focus on Pure Price Action</span>
                </div>
              </div>
            </div>

            {/* Right: Realistic WhatsApp Chat Mockup Simulation */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/15 bg-[#0b141a] shadow-2xl">
                {/* Mockup WhatsApp Header */}
                <div className="flex items-center justify-between bg-gradient-to-r from-[#075E54] to-[#128C7E] px-4 py-3 text-white">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative h-10 w-10 shrink-0 rounded-full border-2 border-brand-gold/50 bg-black/50 overflow-hidden">
                      <Image
                        src="/images/logo.png"
                        alt="BHATHI FOREX Group Avatar"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="truncate font-heading text-xs font-bold text-white">
                          BHATHI FOREX Official Forum
                        </h4>
                        <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-400 text-[9px] font-bold text-black">
                          ✓
                        </span>
                      </div>
                      <p className="truncate text-[10px] text-white/80">
                        1,524 traders • 48 online right now
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-black/25 px-2.5 py-0.5 font-mono text-[9px] font-bold text-emerald-300">
                    LIVE
                  </span>
                </div>

                {/* Mockup Chat Surface */}
                <div className="space-y-3 p-4 text-xs">
                  {/* Pinned Mentor Message */}
                  <div className="rounded-2xl rounded-tl-sm bg-[#1f2c34] p-3 text-slate-100 shadow border-l-4 border-emerald-400">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-heading text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                        <span>Bhathiya Sooriarachchi</span>
                        <span className="rounded bg-brand-gold/20 px-1 py-0.2 text-[9px] font-bold text-brand-gold">
                          FOUNDER
                        </span>
                      </span>
                      <span className="font-mono text-[9px] text-white/40">
                        08:15 AM
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-200">
                      📊 <strong>XAUUSD (Gold) London Markup:</strong> Price tapped the key liquidity level at 2,342. Watch for 15m MSS confirmation before taking shorts. Risk strictly 1% max!
                    </p>
                    {/* Reaction Bar */}
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/90">
                        <Flame className="h-3 w-3 text-amber-400" />
                        <span>54</span>
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/90">
                        <span>🎯 38</span>
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/90">
                        <span>🙏 29</span>
                      </span>
                    </div>
                  </div>

                  {/* Student Reply 1 */}
                  <div className="rounded-2xl rounded-tl-sm bg-[#1f2c34] p-2.5 text-slate-200 shadow">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-heading text-[10px] font-bold text-sky-400">
                        Kasun M. (Kandy)
                      </span>
                      <span className="font-mono text-[9px] text-white/40">
                        09:42 AM
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-100">
                      Followed the London sweep setup with 0.01 micro lot. TP hit at 2,328 for +45 pips! Thank you sir! 🚀
                    </p>
                  </div>

                  {/* Student Reply 2 */}
                  <div className="rounded-2xl rounded-tl-sm bg-[#1f2c34] p-2.5 text-slate-200 shadow">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-heading text-[10px] font-bold text-amber-400">
                        Dilan P. (Colombo)
                      </span>
                      <span className="font-mono text-[9px] text-white/40">
                        10:05 AM
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-100">
                      The CPI risk rules from Phase 2 saved me today. Capital preserved and zero stress.
                    </p>
                  </div>

                  {/* Mentor Audio Note simulation */}
                  <div className="flex items-center justify-between rounded-xl bg-emerald-950/40 border border-emerald-500/20 px-3 py-2 text-[11px] text-emerald-300">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <Volume2 className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="block font-semibold">Bhathiya Voice Note</span>
                        <span className="text-[9px] text-white/60">New York Session Volatility Caution • 01:45</span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-emerald-400">
                      PLAY
                    </span>
                  </div>
                </div>

                {/* Bottom Input Simulation */}
                <div className="border-t border-white/10 bg-[#121b22] px-3.5 py-2.5 flex items-center justify-between text-[11px] text-white/40">
                  <span>Join now to participate in live discussions...</span>
                  <a
                    href={whatsappGroupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Join Group &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
