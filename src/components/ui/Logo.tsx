import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  tagline?: string;
  size?: "sm" | "md" | "lg" | "xl";
  onlyBadge?: boolean;
}

export default function Logo({
  className = "",
  showTagline = true,
  tagline = "LankaForex.com",
  size = "md",
  onlyBadge = false,
}: LogoProps) {
  const iconDimensions = {
    sm: { size: 36, class: "w-9 h-9" },
    md: { size: 44, class: "w-11 h-11" },
    lg: { size: 54, class: "w-14 h-14" },
    xl: { size: 76, class: "w-20 h-20" },
  };

  const textSizes = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-xl",
    lg: "text-xl sm:text-2xl",
    xl: "text-2xl sm:text-3xl",
  };

  const taglineSizes = {
    sm: "text-[9px] tracking-[0.2em]",
    md: "text-[10px] tracking-[0.24em]",
    lg: "text-xs tracking-[0.28em]",
    xl: "text-xs sm:text-sm tracking-[0.3em]",
  };

  const currentIcon = iconDimensions[size];

  return (
    <Link
      href="#hero"
      className={`group flex items-center gap-3 transition-all duration-300 hover:opacity-95 ${className}`}
      aria-label="Apex Trading Academy - A TO Z TRADING"
    >
      {/* Official Academy Emblem */}
      <div
        className={`relative ${currentIcon.class} shrink-0 rounded-full p-[1.5px] bg-gradient-to-tr from-brand-oceanBlue via-brand-champagneWarm to-brand-oceanDeep shadow-md transition-transform duration-300 group-hover:scale-105`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
          <Image
            src="/images/logo.png"
            alt="Apex Trading Academy Logo"
            width={currentIcon.size}
            height={currentIcon.size}
            priority
            className="h-full w-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Ambient Ring Glow */}
        <div className="pointer-events-none absolute -inset-1 rounded-full bg-brand-oceanBlue/25 dark:bg-sky-500/20 blur-sm -z-10 group-hover:bg-brand-champagne/40 transition-all duration-300" />
      </div>

      {/* Brand Typography */}
      {!onlyBadge && (
        <div className="flex flex-col">
          <span
            className={`font-heading font-extrabold leading-none tracking-tight text-slate-900 dark:text-white ${textSizes[size]}`}
          >
            APEX <span className="text-sky-600 dark:text-sky-400">TRADING</span>
          </span>

          {showTagline && (
            <span
              className={`font-mono font-bold uppercase text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5 ${taglineSizes[size]}`}
            >
              <span>ACADEMY</span>
              <span className="text-amber-500 font-bold">•</span>
              <span className="text-slate-600 dark:text-slate-300">{tagline}</span>
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
