"use client";

import React from "react";
import Image from "next/image";

/**
 * AmbientTradingBackground
 * Ultra-premium, light silver fintech background system for Apex Trading Academy.
 * Combines light silver (#F4F7FB) metallic base with:
 * - Ocean Breeze palette (#DFF7FF, #7FCDFF, #38B6FF)
 * - Peach Champagne palette (#DFF7FF, #FFD3B6, #F5A87B, and luxury gold #E09C64)
 * - Subtle silver-blue candlestick streams & Fibonacci retracement grids
 * - GPU-accelerated and non-intrusive (pointer-events-none).
 */
export default function AmbientTradingBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* =========================================================================
          LAYER 1: LIGHT SILVER BASE & OCEAN BREEZE / PEACH CHAMPAGNE GLOW ORBS
          ========================================================================= */}
      <div className="absolute inset-0 bg-[#F4F7FB] dark:bg-[#0B0E14] transition-colors duration-300">
        {/* Top-Right Vivid Ocean Breeze Sky Glow */}
        <div className="absolute -top-40 right-[-10%] h-[680px] w-[680px] rounded-full bg-[#7FCDFF]/30 dark:bg-[#38B6FF]/15 blur-[150px] transform-gpu" />

        {/* Mid-Left Ocean Deep Ambient Pool */}
        <div className="absolute top-[26%] -left-32 h-[580px] w-[580px] rounded-full bg-[#38B6FF]/18 dark:bg-[#0284c7]/12 blur-[150px] transform-gpu" />

        {/* Center-Right Warm Peach Champagne Glow */}
        <div className="absolute top-[42%] right-[4%] h-[520px] w-[520px] rounded-full bg-[#FFD3B6]/40 dark:bg-[#E09C64]/10 blur-[145px] transform-gpu" />

        {/* Bottom-Left Soft Ocean Ice Glow */}
        <div className="absolute bottom-[-10%] left-[8%] h-[620px] w-[620px] rounded-full bg-[#DFF7FF]/70 dark:bg-[#0369a1]/12 blur-[160px] transform-gpu" />

        {/* Top-Left Peach Champagne Accent */}
        <div className="absolute top-10 left-[6%] h-[400px] w-[400px] rounded-full bg-[#F5A87B]/20 dark:bg-[#F5A87B]/10 blur-[130px] transform-gpu" />

        {/* Subtle Light Silver / Dark Executive Vignette Rim */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_55%,rgba(203,213,225,0.35)_100%)] dark:bg-[radial-gradient(ellipse_at_50%_50%,transparent_50%,rgba(5,8,13,0.75)_100%)]"
        />
      </div>

      {/* =========================================================================
          LAYER 2: REALISTIC TRADING DESK WATERMARK TEXTURE
          ========================================================================= */}
      <div
        className="absolute top-0 right-0 w-full sm:w-[850px] h-[580px] pointer-events-none overflow-hidden opacity-[0.035] dark:opacity-[0.045] mix-blend-multiply dark:mix-blend-screen"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 65% at 75% 35%, black 20%, rgba(0,0,0,0.5) 55%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 75% 35%, black 20%, rgba(0,0,0,0.5) 55%, transparent 85%)",
        }}
      >
        <Image
          src="/images/trading-desk.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 850px"
          className="object-cover object-center filter grayscale contrast-125"
        />
        {/* Seamless fade masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F7FB] dark:from-[#0B0E14] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FB] dark:from-[#0B0E14] via-transparent to-transparent" />
      </div>

      {/* =========================================================================
          LAYER 3: TECHNICAL MATRIX GRID & SCANLINES
          ========================================================================= */}
      <div className="absolute inset-0 trading-matrix-grid opacity-60 dark:opacity-40" />

      {/* Subtle Horizontal Depth Coordinate Lines */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] bg-[linear-gradient(rgba(15,23,42,0.2)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)]"
        style={{
          backgroundSize: "100% 32px",
        }}
      />

      {/* =========================================================================
          LAYER 4: CANDLESTICK STREAM 1 (LEFT — BULLISH WYCKOFF & BOS BREAKOUT)
          ========================================================================= */}
      <div className="absolute top-16 sm:top-24 -left-12 sm:left-2 md:left-6 lg:left-12 w-[340px] sm:w-[420px] h-[520px] animate-candle-float will-change-transform transform-gpu opacity-[0.28] dark:opacity-[0.38]">
        <svg
          viewBox="0 0 420 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="stream1EmaGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#38B6FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#E09C64" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="stream1AreaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38B6FF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#38B6FF" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Reference Price Grid Lines */}
          <line x1="20" y1="120" x2="400" y2="120" className="stroke-slate-300 dark:stroke-slate-800" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1="20" y1="210" x2="400" y2="210" className="stroke-slate-300 dark:stroke-slate-800" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1="20" y1="300" x2="400" y2="300" className="stroke-slate-300 dark:stroke-slate-800" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1="20" y1="390" x2="400" y2="390" className="stroke-slate-300 dark:stroke-slate-800" strokeDasharray="3 3" strokeWidth="0.8" />

          {/* Technical Structure Annotations */}
          {/* Break of Structure (BOS) Line */}
          <line x1="160" y1="210" x2="380" y2="210" stroke="#0284c7" className="stroke-sky-600 dark:stroke-sky-400" strokeWidth="1.2" strokeDasharray="4 4" />
          <rect x="230" y="200" width="84" height="18" rx="4" className="fill-white dark:fill-slate-900 stroke-sky-600 dark:stroke-sky-400" strokeWidth="0.8" />
          <text x="238" y="213" className="fill-sky-600 dark:fill-sky-400" fontSize="9" fontFamily="monospace" fontWeight="600">
            BOS BREAKOUT
          </text>

          {/* Fair Value Gap (FVG) Zone */}
          <rect x="248" y="165" width="70" height="38" rx="2" className="fill-sky-400/10 dark:fill-sky-400/15 stroke-sky-400/60 dark:stroke-sky-400/40" strokeWidth="0.6" strokeDasharray="2 2" />
          <text x="254" y="188" className="fill-sky-600 dark:fill-sky-400" fontSize="8" fontFamily="monospace" opacity="0.85">
            +FVG IMBALANCE
          </text>

          {/* Area Fill Glow under EMA */}
          <path
            d="M 24 430 C 90 440, 160 395, 230 320 S 330 180, 395 110 L 395 480 L 24 480 Z"
            fill="url(#stream1AreaFill)"
          />

          {/* 50 EMA Trend Line */}
          <path
            d="M 24 445 C 95 450, 165 415, 235 345 S 330 220, 395 145"
            stroke="#7FCDFF"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />

          {/* 20 EMA Fast Trend Line */}
          <path
            d="M 24 430 C 90 440, 160 395, 230 320 S 330 180, 395 110"
            stroke="url(#stream1EmaGlow)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Candlesticks sequence */}
          {/* Candle 1 (x=30): Bearish consolidation */}
          <line x1="30" y1="360" x2="30" y2="430" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="25" y="375" width="10" height="40" rx="1.5" fill="#DC2626" />

          {/* Candle 2 (x=56): Pullback Bear */}
          <line x1="56" y1="380" x2="56" y2="445" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="51" y="395" width="10" height="36" rx="1.5" fill="#DC2626" />

          {/* Candle 3 (x=82): Dragonfly Doji */}
          <line x1="82" y1="410" x2="82" y2="475" stroke="#059669" strokeWidth="1.2" />
          <rect x="76" y="412" width="12" height="3" rx="1" fill="#059669" />

          {/* Candle 4 (x=108): Classic Bullish Hammer */}
          <line x1="108" y1="385" x2="108" y2="465" stroke="#059669" strokeWidth="1.4" />
          <rect x="103" y="388" width="10" height="22" rx="1.5" fill="#059669" />

          {/* Candle 5 (x=134): Strong Bullish Confirmation */}
          <line x1="134" y1="350" x2="134" y2="415" stroke="#059669" strokeWidth="1.2" />
          <rect x="129" y="360" width="10" height="42" rx="1.5" fill="#059669" />

          {/* Candle 6 (x=160): Marubozu Expansion */}
          <line x1="160" y1="305" x2="160" y2="375" stroke="#059669" strokeWidth="1.2" />
          <rect x="155" y="312" width="10" height="54" rx="1.5" fill="#059669" />

          {/* Candle 7 (x=186): Small Bearish Retest */}
          <line x1="186" y1="318" x2="186" y2="370" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="181" y="328" width="10" height="24" rx="1.5" fill="#DC2626" />

          {/* Candle 8 (x=212): Long-Legged Doji */}
          <line x1="212" y1="285" x2="212" y2="360" stroke="#E09C64" strokeWidth="1.2" />
          <rect x="206" y="318" width="12" height="2.5" rx="1" fill="#E09C64" />

          {/* Candle 9 (x=238): Bullish Push */}
          <line x1="238" y1="260" x2="238" y2="330" stroke="#059669" strokeWidth="1.2" />
          <rect x="233" y="270" width="10" height="46" rx="1.5" fill="#059669" />

          {/* Candle 10 (x=264): BOS Breakout Candle */}
          <line x1="264" y1="195" x2="264" y2="278" stroke="#059669" strokeWidth="1.4" />
          <rect x="259" y="205" width="10" height="60" rx="1.5" fill="#059669" />

          {/* Candle 11 (x=290): Continuation Bull */}
          <line x1="290" y1="160" x2="290" y2="230" stroke="#059669" strokeWidth="1.2" />
          <rect x="285" y="170" width="10" height="48" rx="1.5" fill="#059669" />

          {/* Candle 12 (x=316): Minor Bear Pullback */}
          <line x1="316" y1="172" x2="316" y2="225" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="311" y="180" width="10" height="26" rx="1.5" fill="#DC2626" />

          {/* Candle 13 (x=342): Thrust Candle */}
          <line x1="342" y1="120" x2="342" y2="195" stroke="#059669" strokeWidth="1.2" />
          <rect x="337" y="130" width="10" height="52" rx="1.5" fill="#059669" />

          {/* Candle 14 (x=368): Live Peak Candle with Gold Accent */}
          <line x1="368" y1="85" x2="368" y2="155" stroke="#E09C64" strokeWidth="1.6" />
          <rect x="362" y="95" width="12" height="42" rx="2" fill="#E09C64" />

          {/* Active Live Price Beacon */}
          <circle cx="368" cy="95" r="4.5" fill="#E09C64" />
          <circle cx="368" cy="95" r="11" stroke="#E09C64" strokeWidth="1" opacity="0.6" className="animate-ping" />

          {/* Price Callout Tag */}
          <g transform="translate(280, 56)">
            <rect width="132" height="24" rx="5" className="fill-white dark:fill-slate-900 stroke-amber-500 dark:stroke-amber-400" strokeWidth="1" />
            <circle cx="12" cy="12" r="3" fill="#059669" />
            <text x="22" y="16" className="fill-slate-900 dark:fill-slate-100" fontSize="10" fontFamily="monospace" fontWeight="700">
              XAUUSD $2,648.20
            </text>
          </g>

          {/* Sub Volume Profile Bars */}
          <g opacity="0.5" transform="translate(20, 485)">
            <rect x="8" y="12" width="5" height="18" rx="1" fill="#DC2626" />
            <rect x="34" y="16" width="5" height="14" rx="1" fill="#DC2626" />
            <rect x="60" y="20" width="5" height="10" rx="1" fill="#059669" />
            <rect x="86" y="8" width="5" height="22" rx="1" fill="#059669" />
            <rect x="112" y="2" width="5" height="28" rx="1" fill="#059669" />
            <rect x="138" y="0" width="5" height="30" rx="1" fill="#059669" />
            <rect x="164" y="14" width="5" height="16" rx="1" fill="#DC2626" />
            <rect x="190" y="18" width="5" height="12" rx="1" fill="#E09C64" />
            <rect x="216" y="6" width="5" height="24" rx="1" fill="#059669" />
            <rect x="242" y="-4" width="5" height="34" rx="1" fill="#059669" />
            <rect x="268" y="4" width="5" height="26" rx="1" fill="#059669" />
            <rect x="294" y="12" width="5" height="18" rx="1" fill="#DC2626" />
            <rect x="320" y="2" width="5" height="28" rx="1" fill="#059669" />
            <rect x="346" y="-6" width="5" height="36" rx="1" fill="#E09C64" />
          </g>
        </svg>
      </div>

      {/* =========================================================================
          LAYER 5: CANDLESTICK STREAM 2 (RIGHT — FIBONACCI RETRACEMENT & GOLDEN POCKET)
          ========================================================================= */}
      <div className="absolute top-28 sm:top-40 -right-16 sm:right-2 md:right-6 lg:right-10 w-[360px] sm:w-[460px] h-[550px] animate-candle-float-reverse will-change-transform transform-gpu opacity-[0.28] dark:opacity-[0.38]">
        <svg
          viewBox="0 0 460 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="goldenZoneGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFD3B6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#F5A87B" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FFD3B6" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="fibEmaLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#E09C64" stopOpacity="1" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Fibonacci Levels */}
          <line x1="20" y1="75" x2="430" y2="75" className="stroke-slate-300 dark:stroke-slate-800" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="360" y="70" className="fill-slate-500 dark:fill-slate-400" fontSize="8.5" fontFamily="monospace">
            0.000 ($93,800.0)
          </text>

          <line x1="20" y1="135" x2="430" y2="135" className="stroke-slate-300 dark:stroke-slate-800" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="360" y="130" className="fill-slate-500 dark:fill-slate-400" fontSize="8.5" fontFamily="monospace">
            0.236 ($93,240.5)
          </text>

          <line x1="20" y1="190" x2="430" y2="190" stroke="#059669" strokeWidth="0.9" strokeDasharray="4 4" strokeOpacity="0.7" />
          <text x="360" y="185" className="fill-emerald-600 dark:fill-emerald-400" fontSize="8.5" fontFamily="monospace" opacity="0.9">
            0.382 ($92,890.0)
          </text>

          <line x1="20" y1="245" x2="430" y2="245" stroke="#0284c7" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.8" />
          <text x="350" y="240" className="fill-sky-600 dark:fill-sky-400" fontSize="8.5" fontFamily="monospace" fontWeight="600">
            0.500 EQ ($92,600.0)
          </text>

          {/* Level 0.618: GOLDEN POCKET REVERSAL ZONE */}
          <rect x="20" y="290" width="410" height="34" rx="4" fill="url(#goldenZoneGradient)" stroke="#E09C64" strokeWidth="0.9" strokeDasharray="3 3" />
          <line x1="20" y1="307" x2="430" y2="307" stroke="#E09C64" strokeWidth="1.6" strokeDasharray="5 3" />
          <text x="240" y="303" className="fill-amber-700 dark:fill-amber-400" fontSize="9.5" fontFamily="monospace" fontWeight="700">
            ★ 0.618 GOLDEN POCKET ($92,310.0)
          </text>

          <line x1="20" y1="375" x2="430" y2="375" stroke="#DC2626" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.6" />
          <text x="360" y="370" className="fill-rose-600 dark:fill-rose-400" fontSize="8.5" fontFamily="monospace" opacity="0.8">
            0.786 ($91,890.0)
          </text>

          <line x1="20" y1="450" x2="430" y2="450" className="stroke-slate-300 dark:stroke-slate-800" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="360" y="445" className="fill-slate-500 dark:fill-slate-400" fontSize="8.5" fontFamily="monospace">
            1.000 ($91,400.0)
          </text>

          {/* Dynamic Spline Indicator Curve */}
          <path
            d="M 35 110 C 95 140, 145 260, 205 315 S 315 220, 395 105"
            stroke="url(#fibEmaLine)"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Candle sequence */}
          <line x1="35" y1="75" x2="35" y2="135" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="30" y="85" width="10" height="38" rx="1.5" fill="#DC2626" />

          <line x1="62" y1="105" x2="62" y2="175" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="57" y="118" width="10" height="42" rx="1.5" fill="#DC2626" />

          <line x1="89" y1="135" x2="89" y2="185" stroke="#059669" strokeWidth="1.2" />
          <rect x="84" y="142" width="10" height="24" rx="1.5" fill="#059669" />

          <line x1="116" y1="160" x2="116" y2="235" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="111" y="172" width="10" height="48" rx="1.5" fill="#DC2626" />

          <line x1="143" y1="210" x2="143" y2="280" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="137" y="275" width="12" height="3" rx="1" fill="#DC2626" />

          <line x1="170" y1="250" x2="170" y2="322" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="165" y="262" width="10" height="46" rx="1.5" fill="#DC2626" />

          {/* Master Reversal Hammer at 0.618 */}
          <line x1="197" y1="285" x2="197" y2="336" stroke="#E09C64" strokeWidth="1.8" />
          <rect x="191" y="286" width="12" height="18" rx="2" fill="#E09C64" />
          <circle cx="197" cy="336" r="3.5" fill="#E09C64" />

          <line x1="224" y1="245" x2="224" y2="310" stroke="#059669" strokeWidth="1.4" />
          <rect x="219" y="252" width="10" height="50" rx="1.5" fill="#059669" />

          <line x1="251" y1="195" x2="251" y2="265" stroke="#059669" strokeWidth="1.2" />
          <rect x="246" y="205" width="10" height="52" rx="1.5" fill="#059669" />

          <line x1="278" y1="185" x2="278" y2="235" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="273" y="195" width="10" height="22" rx="1.5" fill="#DC2626" />

          <line x1="305" y1="140" x2="305" y2="210" stroke="#059669" strokeWidth="1.2" />
          <rect x="300" y="150" width="10" height="48" rx="1.5" fill="#059669" />

          <line x1="332" y1="100" x2="332" y2="165" stroke="#059669" strokeWidth="1.2" />
          <rect x="327" y="108" width="10" height="50" rx="1.5" fill="#059669" />

          <line x1="359" y1="65" x2="359" y2="125" stroke="#059669" strokeWidth="1.6" />
          <rect x="353" y="72" width="12" height="40" rx="2" fill="#059669" />

          <circle cx="359" cy="72" r="4.5" fill="#059669" />
          <circle cx="359" cy="72" r="10" stroke="#059669" strokeWidth="1" opacity="0.6" className="animate-ping" />

          {/* BTCUSDT Ticker Badge */}
          <g transform="translate(18, 25)">
            <rect width="144" height="26" rx="5" className="fill-white dark:fill-slate-900 stroke-sky-600 dark:stroke-sky-400" strokeWidth="1" />
            <circle cx="12" cy="13" r="3" fill="#E09C64" />
            <text x="22" y="17" className="fill-slate-900 dark:fill-slate-100" fontSize="10.5" fontFamily="monospace" fontWeight="700">
              BTCUSDT $92,450.0
            </text>
          </g>

          {/* Order Book Depth DOM Bars */}
          <g transform="translate(390, 270)" className="animate-depth-pulse">
            <rect x="0" y="0" width="48" height="5" rx="1" fill="#059669" opacity="0.7" />
            <rect x="0" y="8" width="62" height="5" rx="1" fill="#059669" opacity="0.85" />
            <rect x="0" y="16" width="75" height="5" rx="1" fill="#059669" opacity="0.95" />
            <rect x="0" y="24" width="54" height="5" rx="1" fill="#059669" opacity="0.7" />
            <rect x="0" y="36" width="38" height="5" rx="1" fill="#DC2626" opacity="0.6" />
            <rect x="0" y="44" width="45" height="5" rx="1" fill="#DC2626" opacity="0.75" />
            <rect x="0" y="52" width="28" height="5" rx="1" fill="#DC2626" opacity="0.5" />
          </g>
        </svg>
      </div>

      {/* =========================================================================
          LAYER 6: CENTER MACRO AMBIENT SWEEPING CHART WAVE
          ========================================================================= */}
      <div className="absolute top-[28%] md:top-[34%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[320px] sm:h-[400px] animate-chart-pulse will-change-transform transform-gpu opacity-[0.20] dark:opacity-[0.28]">
        <svg
          viewBox="0 0 1200 400"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="macroAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7FCDFF" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#38B6FF" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#F4F7FB" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="macroLineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7FCDFF" stopOpacity="0.6" />
              <stop offset="30%" stopColor="#059669" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#E09C64" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38B6FF" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Macro Grid Horizon Lines */}
          <line x1="0" y1="100" x2="1200" y2="100" className="stroke-slate-300 dark:stroke-slate-800" strokeDasharray="4 4" strokeWidth="0.7" />
          <line x1="0" y1="200" x2="1200" y2="200" className="stroke-slate-300 dark:stroke-slate-800" strokeDasharray="4 4" strokeWidth="0.7" />
          <line x1="0" y1="300" x2="1200" y2="300" className="stroke-slate-300 dark:stroke-slate-800" strokeDasharray="4 4" strokeWidth="0.7" />

          {/* Area Glow */}
          <path
            d="M 0 310 C 180 320, 320 220, 480 250 S 720 150, 920 180 S 1080 80, 1200 60 L 1200 400 L 0 400 Z"
            fill="url(#macroAreaGradient)"
          />

          {/* Continuous Macro Wave Spline */}
          <path
            d="M 0 310 C 180 320, 320 220, 480 250 S 720 150, 920 180 S 1080 80, 1200 60"
            stroke="url(#macroLineGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Candlestick clusters */}
          <line x1="120" y1="285" x2="120" y2="335" stroke="#059669" strokeWidth="1.2" />
          <rect x="116" y="295" width="8" height="28" rx="1" fill="#059669" />
          <line x1="140" y1="290" x2="140" y2="340" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="136" y="300" width="8" height="24" rx="1" fill="#DC2626" />

          <line x1="420" y1="220" x2="420" y2="275" stroke="#059669" strokeWidth="1.2" />
          <rect x="416" y="230" width="8" height="32" rx="1" fill="#059669" />
          <line x1="440" y1="210" x2="440" y2="265" stroke="#059669" strokeWidth="1.2" />
          <rect x="436" y="218" width="8" height="36" rx="1" fill="#059669" />

          <line x1="680" y1="160" x2="680" y2="210" stroke="#DC2626" strokeWidth="1.2" />
          <rect x="676" y="170" width="8" height="26" rx="1" fill="#DC2626" />
          <line x1="700" y1="145" x2="700" y2="195" stroke="#E09C64" strokeWidth="1.2" />
          <rect x="696" y="152" width="8" height="28" rx="1" fill="#E09C64" />

          <line x1="980" y1="95" x2="980" y2="155" stroke="#059669" strokeWidth="1.2" />
          <rect x="976" y="105" width="8" height="38" rx="1" fill="#059669" />
          <line x1="1000" y1="75" x2="1000" y2="135" stroke="#059669" strokeWidth="1.2" />
          <rect x="996" y="82" width="8" height="42" rx="1" fill="#059669" />
        </svg>
      </div>

      {/* =========================================================================
          LAYER 7: INSTITUTIONAL PRICE COORDINATES & TICKER HUD STRIP
          ========================================================================= */}
      <div className="hidden lg:flex absolute top-6 left-8 items-center gap-2.5 font-mono text-[10px] text-slate-400 dark:text-slate-500 tracking-wider">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>INSTITUTIONAL MARKET DEPTH: ACTIVE</span>
        <span className="text-slate-300 dark:text-slate-700">|</span>
        <span>LATENCY: 0.8ms</span>
      </div>

      <div className="hidden lg:flex absolute top-6 right-8 items-center gap-3 font-mono text-[10px] text-slate-400 dark:text-slate-500 tracking-wider">
        <span>EUR/USD 1.08425</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">+0.48%</span>
        <span className="text-slate-300 dark:text-slate-700">|</span>
        <span>ETH/USD $3,420.50</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">+1.92%</span>
      </div>

      <div className="hidden xl:flex absolute top-1/2 left-4 -translate-y-1/2 flex-col gap-1 font-mono text-[9px] text-slate-400 dark:text-slate-500">
        <div>[VOL 24H: $4.18B]</div>
        <div>[NY SESSION: 13:00 - 21:00 UTC]</div>
        <div>[SMC ORDER FLOW: CONFIRMED]</div>
      </div>

      <div className="hidden xl:flex absolute top-1/2 right-4 -translate-y-1/2 flex-col items-end gap-1 font-mono text-[9px] text-slate-400 dark:text-slate-500 text-right">
        <div>[ALGO: LIQUIDITY SWEEP]</div>
        <div>[RISK: 1:3.4 R:R CALIBRATED]</div>
        <div>[APEX TRADING ENGINE]</div>
      </div>
    </div>
  );
}
