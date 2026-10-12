"use client";

import React from "react";
import Image from "next/image";

/**
 * AmbientTradingBackground
 * Ultra-premium, cinematic dark fintech background system for BHATHI FOREX.
 * Renders realistic Japanese candlestick streams, Fibonacci retracement overlays,
 * moving averages, order book depth histograms, trading desk photo textures,
 * and atmospheric purple & gold nebulae.
 * Fully GPU-accelerated and non-intrusive (pointer-events-none, opacity 0.12 - 0.25).
 */
export default function AmbientTradingBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* =========================================================================
          LAYER 1: ATMOSPHERIC NEBULAE & DEEP FINTECH LIGHTING
          ========================================================================= */}
      <div className="absolute inset-0 bg-[#0d0f17]">
        {/* Top-Right Vivid Purple Nebula */}
        <div className="absolute -top-40 right-[-10%] h-[650px] w-[650px] rounded-full bg-[#995DE8]/15 blur-[160px] transform-gpu" />

        {/* Mid-Left Deep Violet Glow */}
        <div className="absolute top-[28%] -left-32 h-[560px] w-[560px] rounded-full bg-[#7928CA]/14 blur-[150px] transform-gpu" />

        {/* Center-Right Prestige Gold Nebula Spot */}
        <div className="absolute top-[42%] right-[5%] h-[480px] w-[480px] rounded-full bg-[#D6B15E]/12 blur-[145px] transform-gpu" />

        {/* Bottom-Left Soft Purple Nebula */}
        <div className="absolute bottom-[-10%] left-[10%] h-[600px] w-[600px] rounded-full bg-[#995DE8]/12 blur-[170px] transform-gpu" />

        {/* Top-Left Subtle Gold Accent Spot */}
        <div className="absolute top-10 left-[8%] h-[380px] w-[380px] rounded-full bg-[#D6B15E]/08 blur-[130px] transform-gpu" />

        {/* Deep Dark Navy Center Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#12141D]/90 via-[#0d0f17]/70 to-[#0a0c13]/95" />

        {/* Vignette Rim: Darkens edges to focus eyes on content */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(10, 12, 19, 0.85) 100%)",
          }}
        />
      </div>

      {/* =========================================================================
          LAYER 2: REALISTIC TRADING DESK PHOTO TEXTURE INTEGRATION
          ========================================================================= */}
      <div
        className="absolute top-0 right-0 w-full sm:w-[850px] h-[580px] pointer-events-none overflow-hidden opacity-[0.11] mix-blend-screen"
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
          className="object-cover object-center filter brightness-90 contrast-125"
        />
        {/* Seamless fade masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141D] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12141D] via-transparent to-transparent" />
      </div>

      {/* =========================================================================
          LAYER 3: TECHNICAL MATRIX GRID & FIBONACCI COORDINATE RULERS
          ========================================================================= */}
      <div className="absolute inset-0 trading-matrix-grid opacity-35" />

      {/* Subtle Horizontal Depth Scanlines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "100% 32px",
        }}
      />

      {/* =========================================================================
          LAYER 4: CANDLESTICK STREAM 1 (LEFT — BULLISH WYCKOFF & BOS BREAKOUT)
          ========================================================================= */}
      <div className="absolute top-16 sm:top-24 -left-12 sm:left-2 md:left-6 lg:left-12 w-[340px] sm:w-[420px] h-[520px] animate-candle-float will-change-transform transform-gpu opacity-[0.20]">
        <svg
          viewBox="0 0 420 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="stream1EmaGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00E676" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#995DE8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D6B15E" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="stream1AreaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#995DE8" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#995DE8" stopOpacity="0.0" />
            </linearGradient>

            <filter id="candleGlowGreen" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Reference Price Grid Lines */}
          <line x1="20" y1="120" x2="400" y2="120" stroke="#25293E" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1="20" y1="210" x2="400" y2="210" stroke="#25293E" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1="20" y1="300" x2="400" y2="300" stroke="#25293E" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1="20" y1="390" x2="400" y2="390" stroke="#25293E" strokeDasharray="3 3" strokeWidth="0.8" />

          {/* Technical Structure Annotations */}
          {/* Break of Structure (BOS) Line */}
          <line x1="160" y1="210" x2="380" y2="210" stroke="#995DE8" strokeWidth="1.2" strokeDasharray="4 4" />
          <rect x="230" y="200" width="84" height="18" rx="4" fill="#181B27" stroke="#995DE8" strokeWidth="0.8" />
          <text x="238" y="213" fill="#B17AF5" fontSize="9" fontFamily="monospace" fontWeight="600">
            BOS BREAKOUT
          </text>

          {/* Fair Value Gap (FVG) Zone */}
          <rect x="248" y="165" width="70" height="38" rx="2" fill="#995DE8" fillOpacity="0.08" stroke="#995DE8" strokeWidth="0.6" strokeDasharray="2 2" />
          <text x="254" y="188" fill="#995DE8" fontSize="8" fontFamily="monospace" opacity="0.8">
            +FVG IMBALANCE
          </text>

          {/* Area Fill Glow under EMA */}
          <path
            d="M 24 430 C 90 440, 160 395, 230 320 S 330 180, 395 110 L 395 480 L 24 480 Z"
            fill="url(#stream1AreaFill)"
          />

          {/* 50 EMA Trend Line (Purple) */}
          <path
            d="M 24 445 C 95 450, 165 415, 235 345 S 330 220, 395 145"
            stroke="#7928CA"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />

          {/* 20 EMA Fast Trend Line (Emerald to Gold) */}
          <path
            d="M 24 430 C 90 440, 160 395, 230 320 S 330 180, 395 110"
            stroke="url(#stream1EmaGlow)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* ==========================================
              REALISTIC CANDLESTICKS SEQUENCE
              ========================================== */}
          {/* Candle 1 (x=30): Bearish consolidation */}
          <line x1="30" y1="360" x2="30" y2="430" stroke="#FF5252" strokeWidth="1.2" />
          <rect x="25" y="375" width="10" height="40" rx="1.5" fill="#FF5252" />

          {/* Candle 2 (x=56): Pullback Bear */}
          <line x1="56" y1="380" x2="56" y2="445" stroke="#FF5252" strokeWidth="1.2" />
          <rect x="51" y="395" width="10" height="36" rx="1.5" fill="#FF5252" />

          {/* Candle 3 (x=82): Dragonfly Doji (Reversal Indication) */}
          <line x1="82" y1="410" x2="82" y2="475" stroke="#00E676" strokeWidth="1.2" />
          <rect x="76" y="412" width="12" height="3" rx="1" fill="#00E676" />

          {/* Candle 4 (x=108): Classic Bullish Hammer with long lower wick */}
          <line x1="108" y1="385" x2="108" y2="465" stroke="#00E676" strokeWidth="1.4" />
          <rect x="103" y="388" width="10" height="22" rx="1.5" fill="#00E676" />

          {/* Candle 5 (x=134): Strong Bullish Confirmation */}
          <line x1="134" y1="350" x2="134" y2="415" stroke="#00E676" strokeWidth="1.2" />
          <rect x="129" y="360" width="10" height="42" rx="1.5" fill="#00E676" />

          {/* Candle 6 (x=160): Marubozu Expansion (Institutional Volume) */}
          <line x1="160" y1="305" x2="160" y2="375" stroke="#00E676" strokeWidth="1.2" />
          <rect x="155" y="312" width="10" height="54" rx="1.5" fill="#00E676" />

          {/* Candle 7 (x=186): Small Bearish Retest */}
          <line x1="186" y1="318" x2="186" y2="370" stroke="#FF5252" strokeWidth="1.2" />
          <rect x="181" y="328" width="10" height="24" rx="1.5" fill="#FF5252" />

          {/* Candle 8 (x=212): Long-Legged Doji (Equilibrium Pause) */}
          <line x1="212" y1="285" x2="212" y2="360" stroke="#D6B15E" strokeWidth="1.2" />
          <rect x="206" y="318" width="12" height="2.5" rx="1" fill="#D6B15E" />

          {/* Candle 9 (x=238): Bullish Push */}
          <line x1="238" y1="260" x2="238" y2="330" stroke="#00E676" strokeWidth="1.2" />
          <rect x="233" y="270" width="10" height="46" rx="1.5" fill="#00E676" />

          {/* Candle 10 (x=264): BOS Breakout Candle (Massive momentum) */}
          <line x1="264" y1="195" x2="264" y2="278" stroke="#00E676" strokeWidth="1.4" />
          <rect x="259" y="205" width="10" height="60" rx="1.5" fill="#00E676" filter="url(#candleGlowGreen)" />

          {/* Candle 11 (x=290): Continuation Bull */}
          <line x1="290" y1="160" x2="290" y2="230" stroke="#00E676" strokeWidth="1.2" />
          <rect x="285" y="170" width="10" height="48" rx="1.5" fill="#00E676" />

          {/* Candle 12 (x=316): Minor Bear Pullback */}
          <line x1="316" y1="172" x2="316" y2="225" stroke="#FF5252" strokeWidth="1.2" />
          <rect x="311" y="180" width="10" height="26" rx="1.5" fill="#FF5252" />

          {/* Candle 13 (x=342): Thrust Candle */}
          <line x1="342" y1="120" x2="342" y2="195" stroke="#00E676" strokeWidth="1.2" />
          <rect x="337" y="130" width="10" height="52" rx="1.5" fill="#00E676" />

          {/* Candle 14 (x=368): Live Peak Candle with Gold Accent */}
          <line x1="368" y1="85" x2="368" y2="155" stroke="#D6B15E" strokeWidth="1.6" />
          <rect x="362" y="95" width="12" height="42" rx="2" fill="#D6B15E" />

          {/* Active Live Price Beacon */}
          <circle cx="368" cy="95" r="4.5" fill="#D6B15E" />
          <circle cx="368" cy="95" r="11" stroke="#D6B15E" strokeWidth="1" opacity="0.6" className="animate-ping" />

          {/* Price Callout Tag */}
          <g transform="translate(280, 56)">
            <rect width="132" height="24" rx="5" fill="#181B27" stroke="#D6B15E" strokeWidth="1" />
            <circle cx="12" cy="12" r="3" fill="#00E676" />
            <text x="22" y="16" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="700">
              XAUUSD $2,648.20
            </text>
          </g>

          {/* Sub Volume Profile Bars at Bottom */}
          <g opacity="0.6" transform="translate(20, 485)">
            <rect x="8" y="12" width="5" height="18" rx="1" fill="#FF5252" />
            <rect x="34" y="16" width="5" height="14" rx="1" fill="#FF5252" />
            <rect x="60" y="20" width="5" height="10" rx="1" fill="#00E676" />
            <rect x="86" y="8" width="5" height="22" rx="1" fill="#00E676" />
            <rect x="112" y="2" width="5" height="28" rx="1" fill="#00E676" />
            <rect x="138" y="0" width="5" height="30" rx="1" fill="#00E676" />
            <rect x="164" y="14" width="5" height="16" rx="1" fill="#FF5252" />
            <rect x="190" y="18" width="5" height="12" rx="1" fill="#D6B15E" />
            <rect x="216" y="6" width="5" height="24" rx="1" fill="#00E676" />
            <rect x="242" y="-4" width="5" height="34" rx="1" fill="#00E676" />
            <rect x="268" y="4" width="5" height="26" rx="1" fill="#00E676" />
            <rect x="294" y="12" width="5" height="18" rx="1" fill="#FF5252" />
            <rect x="320" y="2" width="5" height="28" rx="1" fill="#00E676" />
            <rect x="346" y="-6" width="5" height="36" rx="1" fill="#D6B15E" />
          </g>
        </svg>
      </div>

      {/* =========================================================================
          LAYER 5: CANDLESTICK STREAM 2 (RIGHT — FIBONACCI RETRACEMENT & GOLDEN POCKET)
          ========================================================================= */}
      <div className="absolute top-28 sm:top-40 -right-16 sm:right-2 md:right-6 lg:right-10 w-[360px] sm:w-[460px] h-[550px] animate-candle-float-reverse will-change-transform transform-gpu opacity-[0.22]">
        <svg
          viewBox="0 0 460 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="goldenZoneGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#D6B15E" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#D6B15E" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#D6B15E" stopOpacity="0.18" />
            </linearGradient>

            <linearGradient id="fibEmaLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF5252" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D6B15E" stopOpacity="1" />
              <stop offset="100%" stopColor="#00E676" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* ==========================================
              FIBONACCI RETRACEMENT HORIZONTAL LEVELS
              ========================================== */}
          {/* Level 0.000: Swing High */}
          <line x1="20" y1="75" x2="430" y2="75" stroke="#3A3E54" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="360" y="70" fill="#A6A8B5" fontSize="8.5" fontFamily="monospace">
            0.000 ($93,800.0)
          </text>

          {/* Level 0.236 */}
          <line x1="20" y1="135" x2="430" y2="135" stroke="#3A3E54" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="360" y="130" fill="#A6A8B5" fontSize="8.5" fontFamily="monospace">
            0.236 ($93,240.5)
          </text>

          {/* Level 0.382 */}
          <line x1="20" y1="190" x2="430" y2="190" stroke="#00E676" strokeWidth="0.9" strokeDasharray="4 4" strokeOpacity="0.6" />
          <text x="360" y="185" fill="#00E676" fontSize="8.5" fontFamily="monospace" opacity="0.8">
            0.382 ($92,890.0)
          </text>

          {/* Level 0.500: Equilibrium */}
          <line x1="20" y1="245" x2="430" y2="245" stroke="#995DE8" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.8" />
          <text x="350" y="240" fill="#B17AF5" fontSize="8.5" fontFamily="monospace" fontWeight="600">
            0.500 EQ ($92,600.0)
          </text>

          {/* Level 0.618: GOLDEN POCKET REVERSAL ZONE */}
          <rect x="20" y="290" width="410" height="34" rx="4" fill="url(#goldenZoneGradient)" stroke="#D6B15E" strokeWidth="0.9" strokeDasharray="3 3" />
          <line x1="20" y1="307" x2="430" y2="307" stroke="#D6B15E" strokeWidth="1.6" strokeDasharray="5 3" />
          <text x="240" y="303" fill="#D6B15E" fontSize="9.5" fontFamily="monospace" fontWeight="700">
            ★ 0.618 GOLDEN POCKET ($92,310.0)
          </text>

          {/* Level 0.786 */}
          <line x1="20" y1="375" x2="430" y2="375" stroke="#FF5252" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.6" />
          <text x="360" y="370" fill="#FF5252" fontSize="8.5" fontFamily="monospace" opacity="0.8">
            0.786 ($91,890.0)
          </text>

          {/* Level 1.000: Swing Low */}
          <line x1="20" y1="450" x2="430" y2="450" stroke="#3A3E54" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="360" y="445" fill="#A6A8B5" fontSize="8.5" fontFamily="monospace">
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

          {/* ==========================================
              FIBONACCI REVERSAL CANDLE SEQUENCE
              ========================================== */}
          {/* Candle 1 (x=35): Swing high top */}
          <line x1="35" y1="75" x2="35" y2="135" stroke="#FF5252" strokeWidth="1.2" />
          <rect x="30" y="85" width="10" height="38" rx="1.5" fill="#FF5252" />

          {/* Candle 2 (x=62): Bearish continuation */}
          <line x1="62" y1="105" x2="62" y2="175" stroke="#FF5252" strokeWidth="1.2" />
          <rect x="57" y="118" width="10" height="42" rx="1.5" fill="#FF5252" />

          {/* Candle 3 (x=89): Small Bull Pullback */}
          <line x1="89" y1="135" x2="89" y2="185" stroke="#00E676" strokeWidth="1.2" />
          <rect x="84" y="142" width="10" height="24" rx="1.5" fill="#00E676" />

          {/* Candle 4 (x=116): Strong Bear Push */}
          <line x1="116" y1="160" x2="116" y2="235" stroke="#FF5252" strokeWidth="1.2" />
          <rect x="111" y="172" width="10" height="48" rx="1.5" fill="#FF5252" />

          {/* Candle 5 (x=143): Indecision Gravestone Doji */}
          <line x1="143" y1="210" x2="143" y2="280" stroke="#FF5252" strokeWidth="1.2" />
          <rect x="137" y="275" width="12" height="3" rx="1" fill="#FF5252" />

          {/* Candle 6 (x=170): Bear Sweep into Golden Pocket */}
          <line x1="170" y1="250" x2="170" y2="322" stroke="#FF5252" strokeWidth="1.2" />
          <rect x="165" y="262" width="10" height="46" rx="1.5" fill="#FF5252" />

          {/* Candle 7 (x=197): MASTER REVERSAL HAMMER PINBAR AT 0.618! */}
          {/* Long lower wick testing exactly into golden pocket and rejecting */}
          <line x1="197" y1="285" x2="197" y2="336" stroke="#D6B15E" strokeWidth="1.8" />
          <rect x="191" y="286" width="12" height="18" rx="2" fill="#D6B15E" />
          {/* Gold Reversal Callout */}
          <circle cx="197" cy="336" r="3.5" fill="#D6B15E" />

          {/* Candle 8 (x=224): Explosive Bullish Engulfing */}
          <line x1="224" y1="245" x2="224" y2="310" stroke="#00E676" strokeWidth="1.4" />
          <rect x="219" y="252" width="10" height="50" rx="1.5" fill="#00E676" />

          {/* Candle 9 (x=251): Institutional Expansion */}
          <line x1="251" y1="195" x2="251" y2="265" stroke="#00E676" strokeWidth="1.2" />
          <rect x="246" y="205" width="10" height="52" rx="1.5" fill="#00E676" />

          {/* Candle 10 (x=278): Retest Candle */}
          <line x1="278" y1="185" x2="278" y2="235" stroke="#FF5252" strokeWidth="1.2" />
          <rect x="273" y="195" width="10" height="22" rx="1.5" fill="#FF5252" />

          {/* Candle 11 (x=305): Bullish Continuation */}
          <line x1="305" y1="140" x2="305" y2="210" stroke="#00E676" strokeWidth="1.2" />
          <rect x="300" y="150" width="10" height="48" rx="1.5" fill="#00E676" />

          {/* Candle 12 (x=332): Marubozu Breaker */}
          <line x1="332" y1="100" x2="332" y2="165" stroke="#00E676" strokeWidth="1.2" />
          <rect x="327" y="108" width="10" height="50" rx="1.5" fill="#00E676" />

          {/* Candle 13 (x=359): Live Target Candle */}
          <line x1="359" y1="65" x2="359" y2="125" stroke="#00E676" strokeWidth="1.6" />
          <rect x="353" y="72" width="12" height="40" rx="2" fill="#00E676" />

          {/* Active Live Beacon */}
          <circle cx="359" cy="72" r="4.5" fill="#00E676" />
          <circle cx="359" cy="72" r="10" stroke="#00E676" strokeWidth="1" opacity="0.6" className="animate-ping" />

          {/* BTCUSDT Ticker Badge */}
          <g transform="translate(18, 25)">
            <rect width="144" height="26" rx="5" fill="#181B27" stroke="#995DE8" strokeWidth="1" />
            <circle cx="12" cy="13" r="3" fill="#D6B15E" />
            <text x="22" y="17" fill="#FFFFFF" fontSize="10.5" fontFamily="monospace" fontWeight="700">
              BTCUSDT $92,450.0
            </text>
          </g>

          {/* ==========================================
              ORDER BOOK DEPTH HISTOGRAM (DOM BARS)
              ========================================== */}
          <g transform="translate(390, 270)" className="animate-depth-pulse">
            {/* Bid Volume Depth (Emerald) */}
            <rect x="0" y="0" width="48" height="5" rx="1" fill="#00E676" opacity="0.7" />
            <rect x="0" y="8" width="62" height="5" rx="1" fill="#00E676" opacity="0.85" />
            <rect x="0" y="16" width="75" height="5" rx="1" fill="#00E676" opacity="0.95" />
            <rect x="0" y="24" width="54" height="5" rx="1" fill="#00E676" opacity="0.7" />
            {/* Ask Volume Depth (Red) */}
            <rect x="0" y="36" width="38" height="5" rx="1" fill="#FF5252" opacity="0.6" />
            <rect x="0" y="44" width="45" height="5" rx="1" fill="#FF5252" opacity="0.75" />
            <rect x="0" y="52" width="28" height="5" rx="1" fill="#FF5252" opacity="0.5" />
          </g>
        </svg>
      </div>

      {/* =========================================================================
          LAYER 6: CENTER MACRO AMBIENT SWEEPING CHART WAVE (BACKGROUND DEPTH)
          ========================================================================= */}
      <div className="absolute top-[28%] md:top-[34%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[320px] sm:h-[400px] animate-chart-pulse will-change-transform transform-gpu opacity-[0.14]">
        <svg
          viewBox="0 0 1200 400"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="macroAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#995DE8" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#7928CA" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#12141D" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="macroLineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#995DE8" stopOpacity="0.5" />
              <stop offset="30%" stopColor="#00E676" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#D6B15E" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#995DE8" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Macro Grid Horizon Lines */}
          <line x1="0" y1="100" x2="1200" y2="100" stroke="#25293E" strokeDasharray="4 4" strokeWidth="0.7" />
          <line x1="0" y1="200" x2="1200" y2="200" stroke="#25293E" strokeDasharray="4 4" strokeWidth="0.7" />
          <line x1="0" y1="300" x2="1200" y2="300" stroke="#25293E" strokeDasharray="4 4" strokeWidth="0.7" />

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

          {/* Macro Candlestick Anchors across the chart */}
          {/* Cluster 1: Accumulation Base */}
          <line x1="120" y1="285" x2="120" y2="335" stroke="#00E676" strokeWidth="1.2" />
          <rect x="116" y="295" width="8" height="28" rx="1" fill="#00E676" />
          <line x1="140" y1="290" x2="140" y2="340" stroke="#FF5252" strokeWidth="1.2" />
          <rect x="136" y="300" width="8" height="24" rx="1" fill="#FF5252" />

          {/* Cluster 2: Mid-Swing Expansion */}
          <line x1="420" y1="220" x2="420" y2="275" stroke="#00E676" strokeWidth="1.2" />
          <rect x="416" y="230" width="8" height="32" rx="1" fill="#00E676" />
          <line x1="440" y1="210" x2="440" y2="265" stroke="#00E676" strokeWidth="1.2" />
          <rect x="436" y="218" width="8" height="36" rx="1" fill="#00E676" />

          {/* Cluster 3: Institutional Retest */}
          <line x1="680" y1="160" x2="680" y2="210" stroke="#FF5252" strokeWidth="1.2" />
          <rect x="676" y="170" width="8" height="26" rx="1" fill="#FF5252" />
          <line x1="700" y1="145" x2="700" y2="195" stroke="#D6B15E" strokeWidth="1.2" />
          <rect x="696" y="152" width="8" height="28" rx="1" fill="#D6B15E" />

          {/* Cluster 4: Golden Breakout */}
          <line x1="980" y1="95" x2="980" y2="155" stroke="#00E676" strokeWidth="1.2" />
          <rect x="976" y="105" width="8" height="38" rx="1" fill="#00E676" />
          <line x1="1000" y1="75" x2="1000" y2="135" stroke="#00E676" strokeWidth="1.2" />
          <rect x="996" y="82" width="8" height="42" rx="1" fill="#00E676" />
        </svg>
      </div>

      {/* =========================================================================
          LAYER 7: INSTITUTIONAL PRICE COORDINATES & TICKER HUD STRIP
          ========================================================================= */}
      {/* Top Left Marginal Coordinate Badge */}
      <div className="hidden lg:flex absolute top-6 left-8 items-center gap-2.5 font-mono text-[10px] text-brand-muted/40 tracking-wider">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-bullish animate-pulse" />
        <span>INSTITUTIONAL MARKET DEPTH: ACTIVE</span>
        <span className="text-white/20">|</span>
        <span>LATENCY: 0.8ms</span>
      </div>

      {/* Top Right Marginal Coordinate Badge */}
      <div className="hidden lg:flex absolute top-6 right-8 items-center gap-3 font-mono text-[10px] text-brand-muted/40 tracking-wider">
        <span>EUR/USD 1.08425</span>
        <span className="text-brand-bullish/60">+0.48%</span>
        <span className="text-white/20">|</span>
        <span>ETH/USD $3,420.50</span>
        <span className="text-brand-bullish/60">+1.92%</span>
      </div>

      {/* Mid Left Marginal Coordinate */}
      <div className="hidden xl:flex absolute top-1/2 left-4 -translate-y-1/2 flex-col gap-1 font-mono text-[9px] text-white/25">
        <div>[VOL 24H: $4.18B]</div>
        <div>[NY SESSION: 13:00 - 21:00 UTC]</div>
        <div>[SMC ORDER FLOW: CONFIRMED]</div>
      </div>

      {/* Mid Right Marginal Coordinate */}
      <div className="hidden xl:flex absolute top-1/2 right-4 -translate-y-1/2 flex-col items-end gap-1 font-mono text-[9px] text-white/25 text-right">
        <div>[ALGO: LIQUIDITY SWEEP]</div>
        <div>[RISK: 1:3.4 R:R CALIBRATED]</div>
        <div>[BHATHI FOREX ENGINE]</div>
      </div>
    </div>
  );
}
