"use client";

import React, { useRef, useState, useCallback } from "react";
import { TRADING_PLATFORMS } from "@/data/platforms";
import { useGSAPContext, gsap } from "@/hooks/useGSAPAnimations";
import {
  CheckCircle,
  Sliders,
  Copy,
  Check,
  ExternalLink,
  Gift,
} from "lucide-react";

export default function Platforms() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Clipboard copy handler with reliable fallback
  const handleCopyCode = useCallback((code: string) => {
    const applyCopiedState = () => {
      setCopiedCode(code);
      setTimeout(() => {
        setCopiedCode(null);
      }, 2500);
    };

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(code)
        .then(applyCopiedState)
        .catch(() => {
          fallbackCopy(code, applyCopiedState);
        });
    } else {
      fallbackCopy(code, applyCopiedState);
    }
  }, []);

  const fallbackCopy = (text: string, onSuccess: () => void) => {
    try {
      const el = document.createElement("textarea");
      el.value = text;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      onSuccess();
    } catch (err) {
      console.error("Failed to copy referral code", err);
    }
  };

  useGSAPContext(() => {
    gsap.fromTo(
      cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
      { opacity: 0, y: 30 },
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

  return (
    <section
      id="platforms"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-brand-bgSecondary/20 border-t border-white/5"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-purpleLight mb-3">
            <Sliders className="h-3.5 w-3.5" />
            <span>INDUSTRY-STANDARD TOOLS & PLATFORMS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Learn the Tools of Modern Trading
          </h2>
          <p className="mt-4 text-base text-brand-muted">
            Gain fluency across the world&apos;s leading charting suites, cryptocurrency exchanges, and institutional currency execution terminals.
          </p>
        </div>

        {/* Platforms Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {TRADING_PLATFORMS.map((platform) => {
            const isGoldBadge = platform.badgeColor === "gold";

            return (
              <div
                key={platform.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-brand-card/90 p-6 sm:p-7 shadow-glass backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-purple/40 hover:bg-brand-card hover:shadow-purpleGlow"
              >
                <div className="flex flex-col">
                  {/* Category Pill */}
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isGoldBadge
                          ? "bg-brand-gold/15 text-brand-gold border border-brand-gold/30"
                          : "bg-brand-purple/15 text-brand-purpleLight border border-brand-purple/30"
                      }`}
                    >
                      {platform.category}
                    </span>
                  </div>

                  {/* Platform Name */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors">
                    {platform.name}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-1 font-mono text-xs text-brand-purpleLight/90">
                    {platform.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-brand-muted">
                    {platform.description}
                  </p>

                  {/* Bybit Referral Special Bonus Box */}
                  {platform.referralCode && (
                    <div className="mt-5 rounded-2xl border border-brand-purple/30 bg-gradient-to-br from-brand-purple/15 to-brand-bgSecondary/80 p-4 backdrop-blur-md">
                      <div className="flex items-center gap-1.5 text-brand-gold">
                        <Gift className="h-4 w-4 shrink-0 text-brand-gold" />
                        <span className="font-heading text-xs font-bold text-brand-goldLight">
                          {platform.referralBonus ||
                            "Claim over $5,000 in bonuses on Bybit!"}
                        </span>
                      </div>

                      <div className="mt-3 flex flex-col gap-2">
                        {/* Copy Referral Code Button */}
                        <button
                          type="button"
                          onClick={() => handleCopyCode(platform.referralCode!)}
                          className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 font-mono text-xs font-bold transition-all ${
                            copiedCode === platform.referralCode
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                              : "bg-brand-bgSecondary text-white hover:bg-white/10 border border-white/15 hover:border-brand-purple/50 active:scale-[0.98]"
                          }`}
                          aria-label={`Copy referral code ${platform.referralCode}`}
                        >
                          {copiedCode === platform.referralCode ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                              <span>Copied: {platform.referralCode}!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5 text-brand-purpleLight" />
                              <span>Copy Referral Code: {platform.referralCode}</span>
                            </>
                          )}
                        </button>

                        {/* Direct Claim Link */}
                        {platform.referralLink && (
                          <a
                            href={platform.referralLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-purple/30 hover:bg-brand-purple/50 border border-brand-purple/40 px-3 py-2 text-xs font-semibold text-brand-purpleLight hover:text-white transition-all"
                          >
                            <span>Open Bybit Registration</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Features List */}
                  <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
                    <span className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-white/50">
                      Key Capabilities Covered
                    </span>
                    {platform.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-white/80 leading-normal"
                      >
                        <CheckCircle
                          className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${
                            isGoldBadge
                              ? "text-brand-gold"
                              : "text-brand-purpleLight"
                          }`}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-brand-muted">
                  <span className="font-mono text-[10px] text-brand-muted/70 uppercase tracking-wider">
                    Practical Training
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-brand-bullish bg-brand-bullish/10 border border-brand-bullish/25 px-2 py-0.5 rounded-full">
                    <Check className="h-2.5 w-2.5" />
                    <span>Included</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Transparency Disclaimer */}
        <p className="mt-12 text-center text-xs text-brand-muted/70 max-w-2xl mx-auto">
          Notice: BHATHI FOREX is an independent educational academy. All trademarks and platform names belong to their respective owners. Education is conducted for interface fluency and market execution without official endorsements.
        </p>
      </div>
    </section>
  );
}
