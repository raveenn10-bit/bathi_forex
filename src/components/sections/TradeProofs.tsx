"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useGSAPContext, gsap } from "@/hooks/useGSAPAnimations";
import { getGeneralInquiryWhatsAppUrl } from "@/lib/whatsapp";
import {
  ShieldCheck,
  TrendingUp,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  AlertTriangle,
  ArrowUpRight,
  Shield,
  Layers,
  CheckCircle2,
  Lock,
  Wallet,
  Sparkles,
  Maximize2,
} from "lucide-react";
import MobileAutoScrollTrack from "@/components/ui/MobileAutoScrollTrack";

export interface TradeProof {
  id: string;
  category: "forex" | "futures" | "liquidation";
  badge: "DISCIPLINED RISK" | "FUTURES EXECUTION" | "P2P CASHOUT";
  badgeTheme: "emerald" | "purple" | "gold" | "cyan";
  platform: string;
  platformIconUrl?: string;
  title: string;
  subtitle: string;
  image: string;
  aspectRatio: string;
  heroStat: {
    label: string;
    value: string;
    color: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  description: string;
  coreRule: string;
  referralCode?: string;
  verificationBadge: string;
}

const TRADE_PROOFS: TradeProof[] = [
  {
    id: "mt5-execution",
    category: "forex",
    badge: "DISCIPLINED RISK",
    badgeTheme: "emerald",
    platform: "MetaTrader 5",
    title: "MetaTrader 5 Multi-Asset Execution",
    subtitle: "Disciplined 0.01 lot position sizing on XAUUSD & GBPUSD",
    image: "/images/mt5-execution.jpg",
    aspectRatio: "aspect-[460/1024]",
    heroStat: {
      label: "Strict Position Sizing",
      value: "0.01 Micro-Lot",
      color: "text-emerald-400",
    },
    metrics: [
      { label: "Instruments", value: "XAUUSD & GBPUSD" },
      { label: "Position Size", value: "0.01 Fixed Lot" },
      { label: "Risk Strategy", value: "Micro Drawdown Defense" },
      { label: "Execution Speed", value: "< 15ms Institutional" },
    ],
    description:
      "Disciplined 0.01 lot position sizing on XAUUSD & GBPUSD. Real live MetaTrader 5 order book execution showcasing strict risk mitigation, surgical entry timing, and absolute refusal to gamble with oversized lots.",
    coreRule:
      "Capital preservation precedes account growth. Proper trader development begins with micro-lot precision, never uncontrolled leverage.",
    verificationBadge: "Verified Live MT5 Terminal",
  },
  {
    id: "binance-futures",
    category: "futures",
    badge: "FUTURES EXECUTION",
    badgeTheme: "gold",
    platform: "Binance Futures",
    title: "Binance Futures High-Conviction Run",
    subtitle: "High-conviction multi-asset trades with +4,727% COAI ROI",
    image: "/images/binance-futures.jpg",
    aspectRatio: "aspect-[701/1024]",
    heroStat: {
      label: "Realized Net Return",
      value: "+4,727.81% ROI",
      color: "text-brand-gold",
    },
    metrics: [
      { label: "Asset Contract", value: "COAI / USDT Perpetual" },
      { label: "Peak Return", value: "+4,727.81% ROI" },
      { label: "Trade Style", value: "Momentum Expansion" },
      { label: "Breakeven Lock", value: "De-risked at 1:2 R" },
    ],
    description:
      "High-conviction multi-asset trades with +4,727% COAI ROI. Documented perpetual futures breakout capturing asymmetric trend expansion through technical price action validation and trailing stop protection.",
    coreRule:
      "Explosive returns are mathematical byproducts of extreme patience—waiting for complete market structure alignment before deploying capital.",
    verificationBadge: "Official Binance Performance Record",
  },
  {
    id: "bybit-proof",
    category: "futures",
    badge: "FUTURES EXECUTION",
    badgeTheme: "purple",
    platform: "Bybit Derivatives",
    title: "Bybit BTC 50X Derivative Precision",
    subtitle: "Short 50X on BTC with Bybit Referral Code 02Q4O8Z",
    image: "/images/bybit-proof.jpg",
    aspectRatio: "aspect-[744/1024]",
    heroStat: {
      label: "Contract & Leverage",
      value: "Short 50X on BTC",
      color: "text-brand-purpleLight",
    },
    metrics: [
      { label: "Contract Pair", value: "BTC / USDT Perpetual" },
      { label: "Order Side", value: "50X Precision Short" },
      { label: "Partner Code", value: "02Q4O8Z" },
      { label: "Validation", value: "Resistance Rejection" },
    ],
    description:
      "Short 50X on BTC with Bybit Referral Code 02Q4O8Z. Institutional timing at major resistance rejection with multi-stage take-profit scaling under the official Apex Trading Academy Bybit partnership.",
    coreRule:
      "High leverage demands flawless invalidation levels and instant execution discipline. Learn liquidity mechanics before touching derivative leverage.",
    referralCode: "02Q4O8Z",
    verificationBadge: "Bybit Partner Verified (02Q4O8Z)",
  },
  {
    id: "binance-withdrawal",
    category: "liquidation",
    badge: "P2P CASHOUT",
    badgeTheme: "cyan",
    platform: "Binance P2P",
    title: "Binance P2P Capital Realization",
    subtitle: "11,000 USDT successful transfer and liquidation",
    image: "/images/binance-withdrawal.png",
    aspectRatio: "aspect-[473/1024]",
    heroStat: {
      label: "P2P Settlement",
      value: "11,000 USDT Realized",
      color: "text-cyan-400",
    },
    metrics: [
      { label: "Liquidation Value", value: "11,000 USDT Transfer" },
      { label: "Channel", value: "Binance P2P Escrow" },
      { label: "Settlement Status", value: "Completed & Verified" },
      { label: "Destination", value: "Direct Bank Liquidity" },
    ],
    description:
      "11,000 USDT successful transfer and liquidation. Proof of completed end-to-end trading lifecycle: converting digital market profits into tangible, verified local bank account credit.",
    coreRule:
      "A trading cycle is only finished when capital is realized in your bank account. We train students on full-stack cashout, escrow safety, and banking protocols.",
    verificationBadge: "Official P2P Escrow Settlement",
  },
];

export default function TradeProofs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState<"all" | "forex" | "futures" | "liquidation">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Filter proofs
  const filteredProofs = activeCategory === "all"
    ? TRADE_PROOFS
    : TRADE_PROOFS.filter((p) => p.category === activeCategory);

  // GSAP Entrance
  useGSAPContext(() => {
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
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, containerRef);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setZoomLevel(1);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? TRADE_PROOFS.length - 1 : prev - 1) : null
        );
        setZoomLevel(1);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === TRADE_PROOFS.length - 1 ? 0 : prev + 1) : null
        );
        setZoomLevel(1);
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const copyReferralCode = (code: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2500);
    }
  };

  const getBadgeClasses = (theme: TradeProof["badgeTheme"]) => {
    switch (theme) {
      case "emerald":
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]";
      case "gold":
        return "bg-brand-gold/15 text-brand-gold border-brand-gold/40 shadow-goldGlow";
      case "purple":
        return "bg-brand-purple/20 text-brand-purpleLight border-brand-purple/40 shadow-purpleGlow";
      case "cyan":
        return "bg-cyan-500/15 text-cyan-400 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]";
    }
  };

  const currentProof = lightboxIndex !== null ? TRADE_PROOFS[lightboxIndex] : null;

  return (
    <section
      id="proofs"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-slate-50/50 border-t border-slate-200/80"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-sky-200/25 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/4 h-96 w-96 rounded-full bg-amber-100/35 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-3.5 shadow-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
            <span>LIVE MARKET EXECUTION &amp; VERIFICATION</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Verified Execution &amp;{" "}
            <span className="text-sky-600">
              Real Results
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Real market orders. Real risk parameters. Real bank liquidations. Explore our verified trading records spanning MetaTrader 5 Forex, Binance Perpetual Futures, and Bybit derivative execution at Apex Trading Academy.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: "all", label: "All Proofs (4)" },
              { id: "forex", label: "MT5 Risk (0.01 Lot)" },
              { id: "futures", label: "Futures & High ROI" },
              { id: "liquidation", label: "P2P Cashout" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  activeCategory === tab.id
                    ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Horizontal Auto-Scroll Proofs Track */}
        <MobileAutoScrollTrack
          badgeLabel="Execution Proofs • Auto-Scrolls LTR"
          className="mb-4"
        >
          {filteredProofs.map((proof) => {
            const originalIndex = TRADE_PROOFS.findIndex((p) => p.id === proof.id);

            return (
              <div
                key={`mobile-${proof.id}`}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* Top Media Showcase Container */}
                <div className="relative w-full bg-slate-50 border-b border-slate-100 p-4 pb-0">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-extrabold uppercase tracking-wider border ${getBadgeClasses(
                        proof.badgeTheme
                      )}`}
                    >
                      {proof.badge === "DISCIPLINED RISK" && (
                        <Shield className="h-3 w-3" />
                      )}
                      {proof.badge === "FUTURES EXECUTION" && (
                        <TrendingUp className="h-3 w-3" />
                      )}
                      {proof.badge === "P2P CASHOUT" && (
                        <Wallet className="h-3 w-3" />
                      )}
                      <span>{proof.badge}</span>
                    </span>

                    <span className="font-mono text-[10px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">
                      {proof.platform}
                    </span>
                  </div>

                  <div
                    onClick={() => {
                      setLightboxIndex(originalIndex);
                      setZoomLevel(1);
                    }}
                    className="relative aspect-[9/13] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm cursor-pointer"
                  >
                    <Image
                      src={proof.image}
                      alt={proof.title}
                      fill
                      sizes="300px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                      <div className="rounded-xl bg-black/75 p-2 backdrop-blur-md border border-white/15 flex items-center justify-between">
                        <div className="truncate">
                          <span className="block text-[9px] uppercase tracking-wider text-slate-300">
                            {proof.heroStat.label}
                          </span>
                          <span
                            className={`font-heading text-sm font-extrabold ${proof.heroStat.color}`}
                          >
                            {proof.heroStat.value}
                          </span>
                        </div>
                        <div className="h-7 w-7 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0">
                          <Maximize2 className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body & Proof Dossier */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-700 mb-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{proof.verificationBadge}</span>
                    </div>

                    <h3 className="font-heading text-sm font-bold text-slate-900 leading-snug">
                      {proof.title}
                    </h3>
                    <p className="mt-1 text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                      {proof.subtitle}
                    </p>

                    <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-2.5">
                      {proof.metrics.slice(0, 2).map((m) => (
                        <div
                          key={m.label}
                          className="rounded-lg bg-slate-50 p-1.5 border border-slate-100"
                        >
                          <span className="block text-[9px] text-slate-500">
                            {m.label}
                          </span>
                          <span className="block font-mono text-xs font-bold text-slate-800 truncate">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {proof.referralCode && (
                      <div className="mt-2.5 flex items-center justify-between rounded-xl bg-amber-50 border border-amber-200 px-2.5 py-1 text-xs">
                        <span className="text-[10px] font-medium text-amber-800">
                          Code:
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyReferralCode(proof.referralCode!);
                          }}
                          className="inline-flex items-center gap-1 font-mono font-bold text-amber-700 hover:underline"
                        >
                          <span>{proof.referralCode}</span>
                          {copiedCode === proof.referralCode ? (
                            <Check className="h-3 w-3 text-emerald-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setLightboxIndex(originalIndex);
                      setZoomLevel(1);
                    }}
                    className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50 py-2 px-3 text-center text-xs font-bold text-slate-700 transition-all duration-200 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 flex items-center justify-center gap-1.5"
                  >
                    <span>View Proof</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </MobileAutoScrollTrack>

        {/* Desktop 4 Proof Cards Grid */}
        <div
          ref={cardsRef}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {filteredProofs.map((proof) => {
            const originalIndex = TRADE_PROOFS.findIndex((p) => p.id === proof.id);

            return (
              <div
                key={proof.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-md"
              >
                {/* Top Media Showcase Container */}
                <div className="relative w-full bg-slate-50 border-b border-slate-100 p-4 pb-0">
                  {/* Floating Top Badge Highlight */}
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-extrabold uppercase tracking-wider border ${getBadgeClasses(
                        proof.badgeTheme
                      )}`}
                    >
                      {proof.badge === "DISCIPLINED RISK" && (
                        <Shield className="h-3 w-3" />
                      )}
                      {proof.badge === "FUTURES EXECUTION" && (
                        <TrendingUp className="h-3 w-3" />
                      )}
                      {proof.badge === "P2P CASHOUT" && (
                        <Wallet className="h-3 w-3" />
                      )}
                      <span>{proof.badge}</span>
                    </span>

                    <span className="font-mono text-[10px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">
                      {proof.platform}
                    </span>
                  </div>

                  {/* Screenshot Card with Interactive Zoom Trigger */}
                  <div
                    onClick={() => {
                      setLightboxIndex(originalIndex);
                      setZoomLevel(1);
                    }}
                    className="relative aspect-[9/13] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm cursor-pointer group/shot"
                  >
                    <Image
                      src={proof.image}
                      alt={proof.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover/shot:scale-105"
                      priority={proof.id === "mt5-execution"}
                    />

                    {/* Gradient Dark Scrim at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                    {/* Hover Inspect Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/shot:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transform scale-95 group-hover/shot:scale-100 transition-transform">
                        <ZoomIn className="h-3.5 w-3.5" />
                        <span>Inspect &amp; Zoom</span>
                      </div>
                    </div>

                    {/* Bottom Stat Chip inside photo */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                      <div className="rounded-xl bg-black/75 p-2 backdrop-blur-md border border-white/15 flex items-center justify-between">
                        <div className="truncate">
                          <span className="block text-[9px] uppercase tracking-wider text-slate-300">
                            {proof.heroStat.label}
                          </span>
                          <span
                            className={`font-heading text-sm font-extrabold ${proof.heroStat.color}`}
                          >
                            {proof.heroStat.value}
                          </span>
                        </div>
                        <div className="h-7 w-7 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0">
                          <Maximize2 className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body & Proof Dossier */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    {/* Verification Stamp */}
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-700 mb-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{proof.verificationBadge}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                      {proof.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {proof.subtitle}
                    </p>

                    {/* Mini Metrics List */}
                    <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
                      {proof.metrics.slice(0, 2).map((m) => (
                        <div
                          key={m.label}
                          className="rounded-lg bg-slate-50 p-2 border border-slate-100"
                        >
                          <span className="block text-[10px] text-slate-500">
                            {m.label}
                          </span>
                          <span className="block font-mono text-xs font-bold text-slate-800 truncate">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bybit Partner Code Callout if available */}
                    {proof.referralCode && (
                      <div className="mt-3 flex items-center justify-between rounded-xl bg-amber-50 border border-amber-200 px-3 py-1.5 text-xs">
                        <span className="text-[11px] font-medium text-amber-800">
                          Partner Code:
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyReferralCode(proof.referralCode!);
                          }}
                          className="inline-flex items-center gap-1 font-mono font-bold text-amber-700 hover:underline"
                        >
                          <span>{proof.referralCode}</span>
                          {copiedCode === proof.referralCode ? (
                            <Check className="h-3 w-3 text-emerald-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Open Proof Lightbox Button */}
                  <button
                    onClick={() => {
                      setLightboxIndex(originalIndex);
                      setZoomLevel(1);
                    }}
                    className="mt-5 w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-3 text-center text-xs font-bold text-slate-700 transition-all duration-200 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Verified Proof</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transform transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Guarantee Strip */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">
                  100% Real Screenshots
                </span>
                <span className="text-[11px] text-slate-500">
                  Zero simulated demos or mockups
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">
                  Multi-Market Coverage
                </span>
                <span className="text-[11px] text-slate-500">
                  Forex, Gold, Bitcoin &amp; Altcoins
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">
                  Official Bybit Partner
                </span>
                <span className="text-[11px] text-slate-500">
                  Referral code: <code className="font-mono text-amber-700 font-bold">02Q4O8Z</code>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
                <Wallet className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">
                  Verified P2P Cashouts
                </span>
                <span className="text-[11px] text-slate-500">
                  Proven bank settlement workflow
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Educational & Regulatory Risk Disclaimer */}
        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-xs leading-relaxed text-slate-700">
              <h4 className="font-heading text-sm font-bold text-amber-900">
                Official Regulatory &amp; Educational Risk Disclaimer
              </h4>
              <p>
                <strong className="text-slate-900">Educational Illustrative Purpose Only:</strong> All trading execution logs, MT5 order tickets, Binance Futures PnL share cards, Bybit derivative positions, and Binance P2P liquidation receipts displayed on this page reflect authentic historical trades executed by the Apex Trading Academy lead educator. They are documented strictly for academic demonstration to illustrate proper risk-to-reward ratios, position sizing discipline, and capital realization procedures.
              </p>
              <p>
                <strong className="text-slate-900">Capital Risk Warning:</strong> Trading foreign currencies (Forex), precious metals (Gold/XAUUSD), and high-leverage cryptocurrency futures carries a high level of risk and may result in the loss of your invested capital. Leverage amplifies both profits and losses. Past performance shown is not an indicator or guarantee of future trading success. Never risk capital that you cannot afford to lose. Apex Trading Academy is an educational academy and does not provide financial investment advisory services, manage external pooled accounts, or solicit funds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {currentProof && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-2 sm:p-4 lg:p-6 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col lg:flex-row w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-white/15 bg-brand-bg shadow-2xl"
          >
            {/* Top Bar for Mobile & Desktop */}
            <div className="absolute top-3 right-3 z-30 flex items-center gap-2">
              {/* Zoom Controls */}
              <div className="hidden sm:flex items-center gap-1 rounded-full bg-black/70 border border-white/10 px-2 py-1 backdrop-blur-md">
                <button
                  onClick={() => setZoomLevel((prev) => Math.min(prev + 0.3, 2.2))}
                  aria-label="Zoom in"
                  className="p-1 rounded-md text-brand-muted hover:text-white transition-colors"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <span className="font-mono text-[10px] text-white px-1">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => setZoomLevel((prev) => Math.max(prev - 0.3, 0.8))}
                  aria-label="Zoom out"
                  className="p-1 rounded-md text-brand-muted hover:text-white transition-colors"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  aria-label="Reset zoom"
                  className="p-1 rounded-md text-brand-muted hover:text-white transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close proof preview"
                className="h-9 w-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Left Column: Interactive Screenshot Viewer */}
            <div className="relative flex-1 bg-black/80 flex items-center justify-center overflow-auto p-4 sm:p-8 min-h-[350px] lg:min-h-[580px]">
              {/* Prev / Next Nav Buttons */}
              <button
                onClick={() => {
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev === 0 ? TRADE_PROOFS.length - 1 : prev - 1) : null
                  );
                  setZoomLevel(1);
                }}
                aria-label="Previous proof"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/70 border border-white/15 text-white flex items-center justify-center hover:bg-brand-purple hover:border-brand-purpleLight transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={() => {
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev === TRADE_PROOFS.length - 1 ? 0 : prev + 1) : null
                  );
                  setZoomLevel(1);
                }}
                aria-label="Next proof"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/70 border border-white/15 text-white flex items-center justify-center hover:bg-brand-purple hover:border-brand-purpleLight transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* The Zoomable Screenshot Canvas */}
              <div
                className="relative max-h-[78vh] w-auto transition-transform duration-200 ease-out select-none"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <Image
                  src={currentProof.image}
                  alt={currentProof.title}
                  width={680}
                  height={1100}
                  className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl border border-white/10"
                  priority
                />
              </div>

              {/* Bottom Thumbnail Strip */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-black/80 border border-white/15 px-3 py-1.5 backdrop-blur-md">
                {TRADE_PROOFS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setLightboxIndex(idx);
                      setZoomLevel(1);
                    }}
                    className={`h-2.5 rounded-full transition-all ${
                      lightboxIndex === idx
                        ? "w-7 bg-brand-gold"
                        : "w-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`View ${p.title}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Detailed Proof Dossier */}
            <div className="w-full lg:w-[420px] bg-brand-card/95 border-t lg:border-t-0 lg:border-l border-white/10 p-6 overflow-y-auto max-h-[45vh] lg:max-h-[92vh] flex flex-col justify-between">
              <div>
                {/* Header Pills */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-extrabold uppercase tracking-wider border ${getBadgeClasses(
                      currentProof.badgeTheme
                    )}`}
                  >
                    <span>{currentProof.badge}</span>
                  </span>

                  <span className="font-mono text-xs text-brand-gold font-bold">
                    Proof {lightboxIndex !== null ? lightboxIndex + 1 : 1} of{" "}
                    {TRADE_PROOFS.length}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-extrabold text-white">
                  {currentProof.title}
                </h3>
                <p className="mt-1 text-xs text-brand-muted leading-relaxed">
                  {currentProof.subtitle}
                </p>

                {/* Hero Metric Box */}
                <div className="mt-4 rounded-2xl bg-black/50 border border-white/10 p-3.5">
                  <span className="block text-[10px] uppercase tracking-wider text-brand-muted">
                    {currentProof.heroStat.label}
                  </span>
                  <span
                    className={`font-heading text-2xl font-black ${currentProof.heroStat.color}`}
                  >
                    {currentProof.heroStat.value}
                  </span>
                </div>

                {/* Full Breakdown Metrics */}
                <div className="mt-4 space-y-2">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                    Execution Metrics &amp; Parameters:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {currentProof.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl bg-white/[0.03] p-2.5 border border-white/5"
                      >
                        <span className="block text-[10px] text-brand-muted">
                          {m.label}
                        </span>
                        <span className="block font-mono text-xs font-bold text-white">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bybit Partner Referral Bonus */}
                {currentProof.referralCode && (
                  <div className="mt-4 rounded-xl border border-brand-purple/40 bg-brand-purple/10 p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] font-bold uppercase text-brand-purpleLight">
                          Bybit Official Referral
                        </span>
                        <span className="font-mono text-sm font-black text-brand-gold">
                          Code: {currentProof.referralCode}
                        </span>
                      </div>
                      <button
                        onClick={() => copyReferralCode(currentProof.referralCode!)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-brand-purple px-2.5 py-1 text-xs font-bold text-white shadow-purpleGlow hover:bg-brand-purpleLight transition-colors"
                      >
                        {copiedCode === currentProof.referralCode ? (
                          <>
                            <Check className="h-3.5 w-3.5" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Educational Takeaway */}
                <div className="mt-4 rounded-xl border border-brand-gold/20 bg-brand-gold/5 p-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-brand-gold mb-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Academy Teaching Concept</span>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed italic">
                    &ldquo;{currentProof.coreRule}&rdquo;
                  </p>
                </div>

                {/* Comprehensive Description */}
                <p className="mt-3 text-xs text-brand-muted leading-relaxed">
                  {currentProof.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2">
                <a
                  href={
                    getGeneralInquiryWhatsAppUrl(
                      `Hello Apex Trading Academy, I viewed your verified trade "${currentProof.title}" (${currentProof.heroStat.value}) and would like to learn how to master this execution method.`
                    ).url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-2.5 px-3 text-center text-xs font-bold text-white shadow-lg hover:from-emerald-500 hover:to-emerald-400 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Ask Mentor About This Trade</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <button
                  onClick={() => setLightboxIndex(null)}
                  className="rounded-xl border border-white/15 bg-white/5 py-2.5 px-4 text-center text-xs font-semibold text-brand-muted hover:text-white hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
