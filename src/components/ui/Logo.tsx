import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  onlyBadge?: boolean;
}

export default function Logo({
  className = "",
  showTagline = true,
  size = "md",
  onlyBadge = false,
}: LogoProps) {
  const iconDimensions = {
    sm: { size: 36, class: "w-9 h-9" },
    md: { size: 46, class: "w-11 h-11" },
    lg: { size: 58, class: "w-14 h-14" },
    xl: { size: 84, class: "w-20 h-20" },
  };

  const textSizes = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-xl",
    lg: "text-xl sm:text-2xl",
    xl: "text-2xl sm:text-3xl",
  };

  const taglineSizes = {
    sm: "text-[9px] tracking-[0.22em]",
    md: "text-[10px] tracking-[0.28em]",
    lg: "text-xs tracking-[0.32em]",
    xl: "text-xs sm:text-sm tracking-[0.35em]",
  };

  const currentIcon = iconDimensions[size];

  return (
    <Link
      href="#hero"
      className={`group flex items-center gap-3 transition-all duration-300 hover:opacity-95 ${className}`}
      aria-label="BHATHI FOREX - A TO Z TRADING"
    >
      {/* Official BHATHI FOREX Logo Emblem */}
      <div
        className={`relative ${currentIcon.class} shrink-0 rounded-full p-[1.5px] bg-gradient-to-tr from-brand-gold via-brand-purple to-brand-purpleLight shadow-goldGlow transition-transform duration-300 group-hover:scale-105 group-hover:shadow-purpleGlow`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full bg-brand-bgSecondary">
          <Image
            src="/images/logo.png"
            alt="BHATHI FOREX Official Logo"
            width={currentIcon.size}
            height={currentIcon.size}
            priority
            className="h-full w-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Ambient Ring Glow */}
        <div className="pointer-events-none absolute -inset-1 rounded-full bg-brand-gold/20 blur-sm -z-10 group-hover:bg-brand-purple/30 transition-all duration-300" />
      </div>

      {/* Brand Typography */}
      {!onlyBadge && (
        <div className="flex flex-col">
          <span
            className={`font-heading font-extrabold leading-none tracking-tight text-white ${textSizes[size]}`}
          >
            BHATHI{" "}
            <span className="bg-gradient-to-r from-brand-purple via-brand-purpleLight to-brand-gold bg-clip-text text-transparent">
              FOREX
            </span>
          </span>
          {showTagline && (
            <span
              className={`font-heading font-semibold uppercase text-brand-gold/90 transition-colors group-hover:text-brand-gold ${taglineSizes[size]} mt-1`}
            >
              A TO Z TRADING
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
