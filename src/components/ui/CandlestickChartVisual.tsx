"use client";

import React, { useState, useEffect } from "react";

interface CandlestickChartVisualProps {
  className?: string;
  activePair?: string;
}

export default function CandlestickChartVisual({
  className = "",
  activePair = "EUR/USD",
}: CandlestickChartVisualProps) {
  // Live price fluctuation micro-effect
  const [currentPrice, setCurrentPrice] = useState("1.08425");
  const [isBullishTick, setIsBullishTick] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const base = 1.0842;
      const randomDelta = (Math.random() - 0.48) * 0.001;
      const newPrice = (base + randomDelta).toFixed(5);
      setIsBullishTick(newPrice >= currentPrice);
      setCurrentPrice(newPrice);
    }, 2800);

    return () => clearInterval(interval);
  }, [currentPrice]);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#121824]/90 p-4 shadow-sm backdrop-blur-xl transition-colors duration-300 ${className}`}
    >
      {/* Chart Header */}
      <div className="mb-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
            <span className="font-heading text-xs font-bold">FX</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                {activePair}
              </span>
              <span className="rounded bg-sky-100 dark:bg-sky-950/60 px-1.5 py-0.5 text-[10px] font-semibold text-sky-700 dark:text-sky-300">
                1H
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span
                className={`font-mono font-bold transition-colors ${
                  isBullishTick ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                }`}
              >
                {currentPrice}
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">+0.48% Today</span>
            </div>
          </div>
        </div>

        {/* Live indicator & Target ratio */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end text-right">
            <span className="text-[10px] text-slate-500 dark:text-slate-400">Target R:R</span>
            <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">1 : 3.4</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 border border-emerald-200 dark:border-emerald-800/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-bold tracking-wider text-emerald-700 dark:text-emerald-300 uppercase">
              LIVE
            </span>
          </div>
        </div>
      </div>

      {/* Candlestick SVG canvas */}
      <div className="relative h-44 sm:h-52 w-full">
        {/* Support & Resistance Horizontal Reference Lines */}
        <div className="absolute top-[22%] left-0 right-0 flex items-center gap-2 border-t border-dashed border-rose-300 dark:border-rose-900/60">
          <span className="rounded bg-rose-50 dark:bg-rose-950/50 px-1.5 py-0.5 text-[9px] font-mono text-rose-600 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60">
            Resistance 1.08900
          </span>
        </div>
        <div className="absolute bottom-[28%] left-0 right-0 flex items-center gap-2 border-t border-dashed border-emerald-300 dark:border-emerald-900/60">
          <span className="rounded bg-emerald-50 dark:bg-emerald-950/50 px-1.5 py-0.5 text-[9px] font-mono text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
            Institutional Demand 1.08150
          </span>
        </div>

        {/* SVG candlesticks */}
        <svg
          viewBox="0 0 500 180"
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38B6FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#38B6FF" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="pathGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="70%" stopColor="#38B6FF" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="0" y1="45" x2="500" y2="45" className="stroke-slate-200 dark:stroke-slate-800/80" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1="0" y1="90" x2="500" y2="90" className="stroke-slate-200 dark:stroke-slate-800/80" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1="0" y1="135" x2="500" y2="135" className="stroke-slate-200 dark:stroke-slate-800/80" strokeDasharray="3 3" strokeWidth="0.8" />

          {/* Candlesticks sequence */}
          {/* Candle 1 (Bullish) */}
          <line x1="30" y1="110" x2="30" y2="145" stroke="#059669" strokeWidth="1.2" />
          <rect x="25" y="118" width="10" height="20" rx="1.5" fill="#059669" />

          {/* Candle 2 (Bearish) */}
          <line x1="60" y1="105" x2="60" y2="135" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="55" y="110" width="10" height="18" rx="1.5" fill="#DC2626" />

          {/* Candle 3 (Bullish) */}
          <line x1="90" y1="95" x2="90" y2="130" stroke="#059669" strokeWidth="1.2" />
          <rect x="85" y="100" width="10" height="22" rx="1.5" fill="#059669" />

          {/* Candle 4 (Bullish strong) */}
          <line x1="120" y1="75" x2="120" y2="115" stroke="#059669" strokeWidth="1.2" />
          <rect x="115" y="80" width="10" height="30" rx="1.5" fill="#059669" />

          {/* Candle 5 (Pullback Bearish) */}
          <line x1="150" y1="78" x2="150" y2="110" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="145" y="85" width="10" height="15" rx="1.5" fill="#DC2626" />

          {/* Candle 6 (Liquidity sweep pinbar) */}
          <line x1="180" y1="65" x2="180" y2="118" stroke="#059669" strokeWidth="1.2" />
          <rect x="175" y="70" width="10" height="12" rx="1.5" fill="#059669" />

          {/* Candle 7 (Bearish consolidation) */}
          <line x1="210" y1="68" x2="210" y2="100" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="205" y="75" width="10" height="18" rx="1.5" fill="#DC2626" />

          {/* Candle 8 (Demand test) */}
          <line x1="240" y1="80" x2="240" y2="125" stroke="#059669" strokeWidth="1.2" />
          <rect x="235" y="85" width="10" height="25" rx="1.5" fill="#059669" />

          {/* Candle 9 (Bullish continuation) */}
          <line x1="270" y1="58" x2="270" y2="98" stroke="#059669" strokeWidth="1.2" />
          <rect x="265" y="65" width="10" height="26" rx="1.5" fill="#059669" />

          {/* Candle 10 (Break of Structure - BOS) */}
          <line x1="300" y1="42" x2="300" y2="80" stroke="#059669" strokeWidth="1.2" />
          <rect x="295" y="48" width="10" height="24" rx="1.5" fill="#059669" />

          {/* Candle 11 (Retest) */}
          <line x1="330" y1="50" x2="330" y2="78" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="325" y="55" width="10" height="14" rx="1.5" fill="#DC2626" />

          {/* Candle 12 (Expansion upward) */}
          <line x1="360" y1="32" x2="360" y2="68" stroke="#059669" strokeWidth="1.2" />
          <rect x="355" y="38" width="10" height="25" rx="1.5" fill="#059669" />

          {/* Candle 13 (Consolidation) */}
          <line x1="390" y1="30" x2="390" y2="58" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="385" y="34" width="10" height="16" rx="1.5" fill="#DC2626" />

          {/* Candle 14 (Institutional thrust) */}
          <line x1="420" y1="18" x2="420" y2="52" stroke="#059669" strokeWidth="1.2" />
          <rect x="415" y="22" width="10" height="22" rx="1.5" fill="#059669" />

          {/* Candle 15 (Current active candle) */}
          <line x1="450" y1="12" x2="450" y2="40" stroke="#d97706" strokeWidth="1.5" />
          <rect x="445" y="16" width="10" height="18" rx="1.5" fill="#d97706" />

          {/* Dynamic Moving Average Trend Curves */}
          <path
            d="M20 135 C 100 115, 180 90, 260 75 S 380 35, 460 22"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Area fill glow */}
          <path
            d="M20 135 C 100 115, 180 90, 260 75 S 380 35, 460 22 L 460 170 L 20 170 Z"
            fill="url(#areaGlow)"
          />

          {/* Active price pointer beacon */}
          <circle cx="450" cy="22" r="5" fill="#d97706" className="animate-pulse" />
          <circle cx="450" cy="22" r="10" fill="none" stroke="#d97706" strokeOpacity="0.5" strokeWidth="1" />
        </svg>

        {/* Volume Bars at Bottom */}
        <div className="absolute bottom-1 left-2 right-2 flex items-end justify-between h-7 opacity-50">
          <div className="w-1.5 h-3 bg-emerald-500 rounded-t-sm" />
          <div className="w-1.5 h-2 bg-rose-500 rounded-t-sm" />
          <div className="w-1.5 h-4 bg-emerald-500 rounded-t-sm" />
          <div className="w-1.5 h-6 bg-emerald-500 rounded-t-sm" />
          <div className="w-1.5 h-3 bg-rose-500 rounded-t-sm" />
          <div className="w-1.5 h-5 bg-emerald-500 rounded-t-sm" />
          <div className="w-1.5 h-2 bg-rose-500 rounded-t-sm" />
          <div className="w-1.5 h-4 bg-emerald-500 rounded-t-sm" />
          <div className="w-1.5 h-7 bg-emerald-500 rounded-t-sm" />
          <div className="w-1.5 h-5 bg-emerald-500 rounded-t-sm" />
          <div className="w-1.5 h-2 bg-rose-500 rounded-t-sm" />
          <div className="w-1.5 h-6 bg-emerald-500 rounded-t-sm" />
          <div className="w-1.5 h-3 bg-rose-500 rounded-t-sm" />
          <div className="w-1.5 h-7 bg-emerald-500 rounded-t-sm" />
          <div className="w-1.5 h-5 bg-amber-500 rounded-t-sm" />
        </div>
      </div>

      {/* Chart Footer Information Bar */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 dark:border-slate-800 pt-2 text-[10px] text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-3">
          <span>Spread: <strong className="text-slate-800 dark:text-slate-200 font-mono">0.6 pips</strong></span>
          <span className="hidden sm:inline">Volume: <strong className="text-slate-800 dark:text-slate-200 font-mono">$1.48B</strong></span>
          <span>Session: <strong className="text-sky-600 dark:text-sky-400">London / NY Overlap</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
          <span>Liquidity Sweep Identified</span>
        </div>
      </div>
    </div>
  );
}
