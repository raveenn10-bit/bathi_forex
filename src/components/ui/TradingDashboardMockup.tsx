"use client";

import React, { useState } from "react";
import CandlestickChartVisual from "./CandlestickChartVisual";
import { ArrowUpRight, ShieldCheck, TrendingUp, Zap } from "lucide-react";

export default function TradingDashboardMockup() {
  const [selectedPair, setSelectedPair] = useState("EUR/USD");

  const pairs = [
    { name: "EUR/USD", type: "Forex Major", price: "1.08425", change: "+0.48%" },
    { name: "BTC/USDT", type: "Crypto", price: "68,450.00", change: "+3.24%" },
    { name: "XAU/USD", type: "Gold Spot", price: "2,654.80", change: "+1.12%" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* Ambient background glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-400/25 via-[#38B6FF]/20 to-amber-300/25 dark:from-sky-500/15 dark:via-cyan-500/10 dark:to-amber-500/10 opacity-70 blur-2xl filter" />

      {/* Main Terminal Shell */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-[#121824]/95 p-5 sm:p-7 shadow-glass dark:shadow-2xl backdrop-blur-2xl transition-colors duration-300">
        {/* Terminal Header Bar */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-slate-500 dark:text-slate-400 tracking-wider uppercase font-semibold">
              APEX TERMINAL v2.4 // RISK MATRIX
            </span>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 rounded-full border border-amber-400/50 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-950/40 px-3 py-1">
            <Zap className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
            <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300">
              Optimal Setup Active
            </span>
          </div>
        </div>

        {/* Pair selector pills */}
        <div className="mb-4 flex flex-wrap gap-2">
          {pairs.map((p) => {
            const isSelected = selectedPair === p.name;
            return (
              <button
                key={p.name}
                type="button"
                onClick={() => setSelectedPair(p.name)}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                  isSelected
                    ? "border border-sky-400 dark:border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-200 shadow-sm"
                    : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span>{p.name}</span>
                <span
                  className={`font-mono text-[10px] ${
                    isSelected ? "text-sky-600 dark:text-sky-400 font-bold" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {p.change}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Candlestick Chart Visual */}
        <CandlestickChartVisual activePair={selectedPair} />

        {/* Trade Risk Management Architecture Strip */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
              <span>Risk Per Trade</span>
            </div>
            <div className="mt-1 font-mono text-sm font-bold text-slate-900 dark:text-white">1.0% Max</div>
            <div className="text-[9px] text-slate-500 dark:text-slate-400">Capital Preserved</div>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
              <TrendingUp className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>Risk : Reward</span>
            </div>
            <div className="mt-1 font-mono text-sm font-bold text-amber-700 dark:text-amber-400">1 : 3.4</div>
            <div className="text-[9px] text-slate-500 dark:text-slate-400">Asymmetric Yield</div>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-3">
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Order Fill</div>
            <div className="mt-1 font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">Zero Slippage</div>
            <div className="text-[9px] text-slate-500 dark:text-slate-400">Institutional Entry</div>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-3">
            <div className="text-[10px] text-slate-500 dark:text-slate-400">Confirmation</div>
            <div className="mt-1 flex items-center gap-1 font-mono text-sm font-bold text-sky-600 dark:text-sky-400">
              <span>BOS Retest</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
            <div className="text-[9px] text-slate-500 dark:text-slate-400">Liquidity Grabbed</div>
          </div>
        </div>

        {/* Micro Floating Educational Badge */}
        <div className="mt-4 flex items-center justify-between rounded-xl border border-sky-200 dark:border-slate-800 bg-gradient-to-r from-sky-50 to-white dark:from-slate-900/80 dark:to-[#121824] p-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500 text-white">
              <span className="font-heading text-xs font-bold">A-Z</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Learn to trade systematically, not emotionally.
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                Mathematical entry, invalidation, and exit rules.
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-block rounded-full bg-sky-100 dark:bg-sky-950/60 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-sky-700 dark:text-sky-300">
            Phase 2 & 3
          </span>
        </div>
      </div>
    </div>
  );
}
