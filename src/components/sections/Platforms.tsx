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
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-slate-50/50 border-t border-slate-200/80"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-3 shadow-xs">
            <Sliders className="h-3.5 w-3.5" />
            <span>INDUSTRY-STANDARD TOOLS & PLATFORMS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Learn the Tools of Modern Trading
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Gain fluency across the world&apos;s leading charting suites, cryptocurrency exchanges, and institutional currency execution terminals at Apex Trading Academy.
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
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-md"
              >
                <div className="flex flex-col">
                  {/* Category Pill */}
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isGoldBadge
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-sky-50 text-sky-700 border border-sky-200"
                      }`}
                    >
                      {platform.category}
                    </span>
                  </div>

                  {/* Platform Name */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 transition-colors">
                    {platform.name}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-1 font-mono text-xs text-sky-700 font-semibold">
                    {platform.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {platform.description}
                  </p>

                  {/* Bybit Referral Special Bonus Box */}
                  {platform.referralCode && (
                    <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/60 p-4">
                      <div className="flex items-center gap-1.5 text-amber-800">
                        <Gift className="h-4 w-4 shrink-0 text-amber-600" />
                        <span className="font-heading text-xs font-bold text-amber-800">
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
                              ? "bg-emerald-600 text-white shadow-xs"
                              : "bg-white text-slate-800 border border-slate-300 hover:border-slate-400 active:scale-[0.98]"
                          }`}
                          aria-label={`Copy referral code ${platform.referralCode}`}
                        >
                          {copiedCode === platform.referralCode ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-white" />
                              <span>Copied: {platform.referralCode}!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5 text-sky-600" />
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
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 px-3 py-2 text-xs font-semibold text-white transition-all shadow-xs"
                          >
                            <span>Open Bybit Registration</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Features List */}
                  <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                    <span className="block font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Key Capabilities Covered
                    </span>
                    {platform.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal"
                      >
                        <CheckCircle
                          className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${
                            isGoldBadge
                              ? "text-amber-500"
                              : "text-sky-600"
                          }`}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    Practical Training
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">
                    <Check className="h-2.5 w-2.5 text-emerald-600" />
                    <span>Included</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Transparency Disclaimer */}
        <p className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          Notice: Apex Trading Academy is an independent educational academy. All trademarks and platform names belong to their respective owners. Education is conducted for interface fluency and market execution without official endorsements.
        </p>
      </div>
    </section>
  );
}
