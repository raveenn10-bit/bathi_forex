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
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-400/25 via-[#38B6FF]/20 to-amber-300/25 opacity-70 blur-2xl filter" />

      {/* Main Terminal Shell */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 sm:p-7 shadow-glass backdrop-blur-2xl">
        {/* Terminal Header Bar */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-slate-500 tracking-wider uppercase font-semibold">
              APEX TERMINAL v2.4 // RISK MATRIX
            </span>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-50 px-3 py-1">
            <Zap className="h-3.5 w-3.5 text-amber-600" />
            <span className="text-[11px] font-bold text-amber-700">
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
                    ? "border border-sky-400 bg-sky-50 text-sky-800 shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                <span>{p.name}</span>
                <span
                  className={`font-mono text-[10px] ${
                    isSelected ? "text-sky-600 font-bold" : "text-slate-500"
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
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
              <span>Risk Per Trade</span>
            </div>
            <div className="mt-1 font-mono text-sm font-bold text-slate-900">1.0% Max</div>
            <div className="text-[9px] text-slate-500">Capital Preserved</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
              <TrendingUp className="h-3.5 w-3.5 text-amber-600" />
              <span>Risk : Reward</span>
            </div>
            <div className="mt-1 font-mono text-sm font-bold text-amber-700">1 : 3.4</div>
            <div className="text-[9px] text-slate-500">Asymmetric Yield</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
            <div className="text-[10px] text-slate-500">Order Fill</div>
            <div className="mt-1 font-mono text-sm font-bold text-emerald-600">Zero Slippage</div>
            <div className="text-[9px] text-slate-500">Institutional Entry</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
            <div className="text-[10px] text-slate-500">Confirmation</div>
            <div className="mt-1 flex items-center gap-1 font-mono text-sm font-bold text-sky-600">
              <span>BOS Retest</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
            <div className="text-[9px] text-slate-500">Liquidity Grabbed</div>
          </div>
        </div>

        {/* Micro Floating Educational Badge */}
        <div className="mt-4 flex items-center justify-between rounded-xl border border-sky-200 bg-gradient-to-r from-sky-50 to-white p-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500 text-white">
              <span className="font-heading text-xs font-bold">A-Z</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800">
                Learn to trade systematically, not emotionally.
              </p>
              <p className="text-[10px] text-slate-500">
                Mathematical entry, invalidation, and exit rules.
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-block rounded-full bg-sky-100 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-sky-700">
            Phase 2 & 3
          </span>
        </div>
      </div>
    </div>
  );
}
