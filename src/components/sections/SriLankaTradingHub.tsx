"use client";

import React, { useState, useEffect, useRef } from "react";
import { ACADEMY_CONFIG } from "@/data/academy";
import { getGeneralInquiryWhatsAppUrl } from "@/lib/whatsapp";
import { useGSAPContext, gsap } from "@/hooks/useGSAPAnimations";
import {
  Clock,
  Flame,
  Zap,
  ShieldCheck,
  TrendingUp,
  Globe2,
  DollarSign,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Sun,
  Sunset,
  Moon,
  Laptop,
  CheckCircle2,
  Layers,
  ChevronRight,
  Award,
  BookOpen,
} from "lucide-react";

interface SessionData {
  id: string;
  name: string;
  nativeName: string;
  timeRange: string;
  slstHours: string;
  startMinute: number;
  endMinute: number;
  crossesMidnight?: boolean;
  majorCenters: string;
  pairs: string[];
  description: string;
  colorScheme: {
    badge: string;
    border: string;
    glow: string;
  };
}

const MARKET_SESSIONS: SessionData[] = [
  {
    id: "asian",
    name: "Asian / Tokyo Session",
    nativeName: "ආසියානු වෙළඳපල සැසිය",
    timeRange: "05:30 AM – 02:30 PM SLST",
    slstHours: "05:30 – 14:30",
    startMinute: 5 * 60 + 30, // 330
    endMinute: 14 * 60 + 30, // 870
    majorCenters: "Tokyo • Sydney • Singapore",
    pairs: ["USD/JPY", "AUD/USD", "NZD/USD"],
    description: "Range accumulation & liquidity building. Establishes the Asian high & low boundaries before European volatility.",
    colorScheme: {
      badge: "border-sky-500/30 text-sky-600 dark:text-sky-400 bg-sky-500/10",
      border: "border-sky-500/20",
      glow: "from-sky-500/10 to-transparent",
    },
  },
  {
    id: "london",
    name: "London Session",
    nativeName: "ලන්ඩන් යුරෝපා සැසිය",
    timeRange: "01:30 PM – 10:30 PM SLST",
    slstHours: "13:30 – 22:30",
    startMinute: 13 * 60 + 30, // 810
    endMinute: 22 * 60 + 30, // 1350
    majorCenters: "London • Frankfurt • Zurich",
    pairs: ["GBP/USD", "EUR/USD", "XAU/USD"],
    description: "Massive institutional liquidity injection. Asian range breakouts, Judas swings, and explosive trend continuations.",
    colorScheme: {
      badge: "border-purple-500/30 text-purple-600 dark:text-purple-400 bg-purple-500/10",
      border: "border-purple-500/20",
      glow: "from-purple-500/10 to-transparent",
    },
  },
  {
    id: "newyork",
    name: "New York Session",
    nativeName: "නිව්යෝර්ක් ඇමරිකානු සැසිය",
    timeRange: "06:30 PM – 03:30 AM SLST",
    slstHours: "18:30 – 03:30 (+1)",
    startMinute: 18 * 60 + 30, // 1110
    endMinute: 3 * 60 + 30, // 210
    crossesMidnight: true,
    majorCenters: "New York • Chicago • Toronto",
    pairs: ["XAU/USD", "BTC/USD", "US30", "NAS100"],
    description: "Peak global volume & institutional order execution. Major macroeconomic catalyst driver (CPI, NFP, FOMC interest rates).",
    colorScheme: {
      badge: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
      border: "border-emerald-500/20",
      glow: "from-emerald-500/10 to-transparent",
    },
  },
];

// Golden Overlap Window: 06:30 PM - 10:30 PM SLST (London + New York overlap)
const GOLDEN_OVERLAP_START = 18 * 60 + 30; // 1110 (18:30)
const GOLDEN_OVERLAP_END = 22 * 60 + 30; // 1350 (22:30)

export default function SriLankaTradingHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Client-side real-time clock state
  const [mounted, setMounted] = useState(false);
  const [timeString, setTimeString] = useState<string>("18:30:00 SLST");
  const [dateString, setDateString] = useState<string>("Colombo, Sri Lanka");
  const [totalMinutes, setTotalMinutes] = useState<number>(1110);

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const now = new Date();

      // Format in Asia/Colombo (Sri Lanka Standard Time UTC+5:30)
      const timeFormatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const dateFormatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Colombo",
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      const parts = timeFormatter.formatToParts(now);
      const h = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
      const m = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
      const s = parseInt(parts.find((p) => p.type === "second")?.value || "0", 10);

      const pad = (v: number) => v.toString().padStart(2, "0");
      setTimeString(`${pad(h)}:${pad(m)}:${pad(s)} SLST`);
      setDateString(dateFormatter.format(now));
      setTotalMinutes(h * 60 + m);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate active session states
  const isSessionActive = (session: SessionData): boolean => {
    if (!mounted) return session.id === "newyork" || session.id === "london";
    if (session.crossesMidnight) {
      return totalMinutes >= session.startMinute || totalMinutes < session.endMinute;
    }
    return totalMinutes >= session.startMinute && totalMinutes < session.endMinute;
  };

  const isGoldenOverlapActive = mounted
    ? totalMinutes >= GOLDEN_OVERLAP_START && totalMinutes < GOLDEN_OVERLAP_END
    : true; // SSR safe preview default

  // GSAP animation
  useGSAPContext(() => {
    gsap.fromTo(
      cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
      { opacity: 0, y: 30, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.12,
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

  const whatsappInquiry = getGeneralInquiryWhatsAppUrl(
    "Hello Bhathiya & Apex Trading Academy! I am a Sri Lankan trader interested in joining your practical Forex & Crypto academy. Please share the course syllabus and enrollment steps."
  );

  const activeSessionsCount = MARKET_SESSIONS.filter(isSessionActive).length;

  return (
    <section
      id="sl-market"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-transparent via-slate-100/40 dark:via-slate-900/30 to-transparent"
    >
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#7FCDFF]/20 dark:bg-[#38B6FF]/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/15 dark:bg-amber-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 dark:border-amber-500/30 bg-amber-50/90 dark:bg-amber-950/40 px-4 py-1.5 shadow-xs backdrop-blur-md mb-4">
            <span className="text-sm">🇱🇰</span>
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              SRI LANKA MARKET ENGAGEMENT HUB • LANKAFOREX.COM
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Sri Lanka Market Hub: <br />
            <span className="bg-gradient-to-r from-amber-600 via-sky-600 to-emerald-600 dark:from-amber-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Trade The World From Home
            </span>
          </h2>

          <p className="mt-3 font-medium text-slate-700 dark:text-slate-300 text-base sm:text-lg">
            ලෝකයේ හොඳම වෙළඳපල වේලාවන්හිදී ශ්‍රී ලංකාවේ සිට නිවැරදිව Trade කරන්න
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Sri Lanka operates in a mathematically privileged global timezone (UTC+05:30).
            Experience peak Wall Street & London market volume directly during your relaxing evening hours.
          </p>
        </div>

        {/* 1. Real-Time Sri Lanka Standard Time (SLST) Interactive Session Terminal */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-[#0D121F]/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl mb-16">
          {/* Top Live Clock Bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            {/* Clock Display */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 shadow-inner">
                <Clock className="h-7 w-7 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {timeString}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    LIVE SLST
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Sri Lanka Standard Time (UTC+05:30) &bull; {dateString}
                </p>
              </div>
            </div>

            {/* Real-time Session Status Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 px-4 py-2 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                <Globe2 className="h-4 w-4 text-sky-500" />
                <span>
                  Active Sessions:{" "}
                  <strong className="text-slate-900 dark:text-white">
                    {activeSessionsCount} Open Now
                  </strong>
                </span>
              </div>

              {/* Golden Overlap Badge */}
              <div
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 border text-xs font-bold transition-all duration-300 ${
                  isGoldenOverlapActive
                    ? "bg-amber-500/15 border-amber-500/40 text-amber-700 dark:text-amber-300 shadow-md shadow-amber-500/10 animate-pulse"
                    : "bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                }`}
              >
                <Flame className={`h-4 w-4 ${isGoldenOverlapActive ? "text-amber-500 animate-bounce" : "text-slate-400"}`} />
                <span>
                  {isGoldenOverlapActive
                    ? "🔥 Golden Overlap ACTIVE (18:30 – 22:30 SLST)"
                    : "Golden Overlap: 06:30 PM – 10:30 PM SLST"}
                </span>
              </div>
            </div>
          </div>

          {/* Golden Overlap Callout Banner */}
          <div
            className={`mt-6 p-4 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
              isGoldenOverlapActive
                ? "border-amber-400/50 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/5 dark:from-amber-950/40 dark:via-orange-950/20 dark:to-transparent shadow-md"
                : "border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-3.5 w-3.5 shrink-0">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isGoldenOverlapActive ? "bg-amber-400 opacity-75" : "bg-sky-400 opacity-50"}`}></span>
                <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${isGoldenOverlapActive ? "bg-amber-500" : "bg-sky-500"}`}></span>
              </span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>The Sri Lankan &ldquo;Golden Overlap Window&rdquo; (06:30 PM – 10:30 PM SLST)</span>
                  {isGoldenOverlapActive && (
                    <span className="rounded-full bg-amber-500 text-slate-950 text-[9px] font-extrabold px-2 py-0.5 uppercase tracking-wide">
                      Prime Window Open Now
                    </span>
                  )}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Over 70% of global daily Forex & Gold liquidity clears during this 4-hour confluence of London close & New York open.
                </p>
              </div>
            </div>

            <a
              href="#courses"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 shrink-0 transition-colors"
            >
              <span>Learn Evening Session Playbook</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* 3 Core Global Market Sessions Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {MARKET_SESSIONS.map((session) => {
              const active = isSessionActive(session);

              return (
                <div
                  key={session.id}
                  className={`relative rounded-2xl border p-5 transition-all duration-300 ${
                    active
                      ? "border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20 shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/30"
                      : "border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#121824]/60 opacity-80 hover:opacity-100"
                  }`}
                >
                  {/* Session Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {session.id === "asian" && <Sun className="h-4 w-4 text-amber-500" />}
                      {session.id === "london" && <Sunset className="h-4 w-4 text-purple-500" />}
                      {session.id === "newyork" && <Moon className="h-4 w-4 text-emerald-500" />}
                      <span className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                        {session.name}
                      </span>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                        active
                          ? "bg-emerald-500 text-white shadow-xs"
                          : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {active ? (
                        <>
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                          LIVE / OPEN
                        </>
                      ) : (
                        "CLOSED"
                      )}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">
                    {session.nativeName}
                  </p>

                  <div className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                    ⏱️ {session.timeRange}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {session.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mb-1.5">
                      Prime Pairs & Assets:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {session.pairs.map((pair) => (
                        <span
                          key={pair}
                          className="rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 font-mono text-[11px] font-bold text-slate-800 dark:text-slate-200"
                        >
                          {pair}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. 'Why Trading from Sri Lanka is an Unfair Advantage' (4 core cards) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Why Trading from Sri Lanka is an{" "}
              <span className="text-sky-600 dark:text-sky-400">Unfair Advantage</span>
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              ජාත්‍යන්තර වෙළඳපලවලින් ප්‍රතිලාභ ලැබීමට ශ්‍රී ලාංකික ඔබට හිමිවන සුවිශේෂී වාසි 4ක්
            </p>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Card 1: Evening Prime Hours */}
            <div className="group relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-[#101522]/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Sunset className="h-6 w-6" />
              </div>
              <span className="inline-block rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase mb-2">
                Timezone Advantage
              </span>
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white leading-snug">
                Evening Prime Hours <br />
                <span className="text-amber-600 dark:text-amber-400 text-sm font-normal">
                  (06:30 PM – 10:30 PM)
                </span>
              </h4>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                සවස් කාලයේ උපරිම Liquidity
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Trade peak Wall Street & London liquidity after your daily 9-to-5 job or campus lectures. Zero sleep deprivation unlike Western traders who wake up at 3:00 AM.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>Zero Conflict with Day Job</span>
              </div>
            </div>

            {/* Card 2: LKR to USD / USDT Hedge */}
            <div className="group relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-[#101522]/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <DollarSign className="h-6 w-6" />
              </div>
              <span className="inline-block rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase mb-2">
                Hard Currency Hedge
              </span>
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white leading-snug">
                LKR to USD / USDT <br />
                <span className="text-emerald-600 dark:text-emerald-400 text-sm font-normal">
                  Capital Hedge
                </span>
              </h4>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                රුපියලේ අවප්‍රමාණයට ශක්තිමත් පවුරක්
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Safeguard against rupee devaluation by building USD/USDT-denominated equity. Every dollar earned in Forex or Crypto multiplies purchasing power locally.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>Safe P2P USDT Cashouts</span>
              </div>
            </div>

            {/* Card 3: Funded Accounts / Prop Firms */}
            <div className="group relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-[#101522]/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span className="inline-block rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase mb-2">
                Institutional Capital
              </span>
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white leading-snug">
                Funded Prop Firms <br />
                <span className="text-sky-600 dark:text-sky-400 text-sm font-normal">
                  ($10K – $200K Accounts)
                </span>
              </h4>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                පවුලේ ඉතුරුම් අවදානමට ලක් නොකර
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Learn how Sri Lankans trade $10,000 to $200,000 prop accounts (FTMO, FundedNext) with zero risk to family life savings. Keep 80% to 90% of profits.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>Zero Family Savings at Risk</span>
              </div>
            </div>

            {/* Card 4: Sinhala + English Direct Mentorship */}
            <div className="group relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-[#101522]/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Laptop className="h-6 w-6" />
              </div>
              <span className="inline-block rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase mb-2">
                1:1 Founder Mentorship
              </span>
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white leading-snug">
                Bilingual Mentorship <br />
                <span className="text-purple-600 dark:text-purple-400 text-sm font-normal">
                  (Sinhala + English)
                </span>
              </h4>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                සිංහල මාධ්‍යයෙන් සරල පැහැදිලි කිරීම්
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Institutional Wall Street terms explained in straightforward Sinhala alongside international standards, with direct WhatsApp guidance from Bhathiya Sooriarachchi.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>Direct WhatsApp 1:1 Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Sri Lanka Trader Currency Volatility Guide (Visual pill table) */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-[#0D121F]/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                Sri Lanka Trader Currency Volatility Guide
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                දවසේ වේලාව අනුව Sri Lankan Traders ලා සඳහා වඩාත්ම ගැලපෙන Pairs සහ Trading Strategies
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 px-3 py-1 text-xs text-sky-700 dark:text-sky-300 font-medium">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>Optimal SL Schedule</span>
            </div>
          </div>

          {/* Responsive Matrix / Pills Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-heading uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <th className="py-3 px-4 font-bold">Time Window (SLST)</th>
                  <th className="py-3 px-4 font-bold">Session & Cycle</th>
                  <th className="py-3 px-4 font-bold">Prime Asset Pairs</th>
                  <th className="py-3 px-4 font-bold">Institutional Mechanics</th>
                  <th className="py-3 px-4 font-bold text-right">Volatility Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {/* Morning Slot */}
                <tr className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="font-mono font-bold text-slate-900 dark:text-white text-xs">
                      05:30 – 13:30 SLST
                    </div>
                    <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                      Morning Session
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs">
                      Asian / Tokyo Session
                    </span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Sydney & Tokyo Banks Open
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/50 px-2 py-0.5 font-mono text-xs font-bold">
                        USDJPY
                      </span>
                      <span className="rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/50 px-2 py-0.5 font-mono text-xs font-bold">
                        AUDUSD
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
                    Asian range accumulation, high & low demarcation, liquidity pool builds before Europe open.
                  </td>
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-[11px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Moderate / Range
                    </span>
                  </td>
                </tr>

                {/* Afternoon Slot */}
                <tr className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="font-mono font-bold text-slate-900 dark:text-white text-xs">
                      13:30 – 18:30 SLST
                    </div>
                    <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">
                      Afternoon Session
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs">
                      London Open Session
                    </span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      European Institutional Volume
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-md bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50 px-2 py-0.5 font-mono text-xs font-bold">
                        GBPUSD
                      </span>
                      <span className="rounded-md bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50 px-2 py-0.5 font-mono text-xs font-bold">
                        EURUSD
                      </span>
                      <span className="rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50 px-2 py-0.5 font-mono text-xs font-bold">
                        XAUUSD
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
                    London open breakouts, sweeps of Asian highs and lows, trend expansion across European pairs.
                  </td>
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 dark:bg-purple-950/60 px-2.5 py-1 text-[11px] font-bold text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                      High Momentum
                    </span>
                  </td>
                </tr>

                {/* Evening Golden Overlap Slot */}
                <tr className="bg-amber-500/5 dark:bg-amber-500/10 hover:bg-amber-500/10 transition-colors">
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="font-mono font-bold text-amber-700 dark:text-amber-300 text-xs flex items-center gap-1.5">
                      <span>18:30 – 22:30 SLST</span>
                      <Flame className="h-3.5 w-3.5 text-amber-500 animate-bounce" />
                    </div>
                    <span className="text-[11px] text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                      ★ Golden Overlap
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-bold text-slate-900 dark:text-white text-xs">
                      London + New York Confluence
                    </span>
                    <p className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                      Wall Street Open & CPI / NFP
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-md bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700 px-2 py-0.5 font-mono text-xs font-extrabold">
                        XAUUSD Gold
                      </span>
                      <span className="rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 px-2 py-0.5 font-mono text-xs font-extrabold">
                        BTCUSD
                      </span>
                      <span className="rounded-md bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-200 border border-sky-300 dark:border-sky-700 px-2 py-0.5 font-mono text-xs font-extrabold">
                        US30
                      </span>
                      <span className="rounded-md bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-200 border border-sky-300 dark:border-sky-700 px-2 py-0.5 font-mono text-xs font-extrabold">
                        NAS100
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-700 dark:text-slate-300 max-w-xs leading-relaxed font-medium">
                    Maximum global volume. Algorithmic liquidity sweeps, macroeconomic data releases, cleanest session continuations.
                  </td>
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 text-slate-950 px-2.5 py-1 text-[11px] font-extrabold shadow-sm animate-pulse">
                      ⚡ Explosive (Peak SL)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Dual-Language High Conversion CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-sky-300/60 dark:border-sky-500/30 bg-gradient-to-r from-sky-600 via-sky-700 to-indigo-800 p-8 sm:p-12 text-white shadow-2xl">
          {/* Background Ambient Orbs */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Top Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold backdrop-blur-md mb-4 border border-white/20">
              <span className="text-sm">🇱🇰</span>
              <span>LankaForex.com • Apex Trading Academy Official Portal</span>
            </div>

            {/* Sinhala Main Pitch */}
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
              ශ්‍රී ලංකාවේ අංක 1 Forex & Crypto ප්‍රායෝගික පාඨමාලාවට අදම සම්බන්ධ වන්න
            </h3>

            {/* English Subheading */}
            <p className="mt-3 text-sm sm:text-base text-sky-100 max-w-2xl leading-relaxed">
              Join over 1,500+ active Sri Lankan students learning institutional price action, mathematical risk management, and prop firm funding directly under Bhathiya Sooriarachchi.
            </p>

            {/* Trust Checklist */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-sky-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>100% Practical & Verified Results</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Sinhala + English Explanations</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Direct WhatsApp 1:1 Mentorship</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={ACADEMY_CONFIG.studentCommunity.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 px-8 py-4 text-sm font-extrabold text-white shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Join 1,500+ Sri Lankan Traders on WhatsApp</span>
              </a>

              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <BookOpen className="h-4 w-4" />
                <span>Check Course Syllabus</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
