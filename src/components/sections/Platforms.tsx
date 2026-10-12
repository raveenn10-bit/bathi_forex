"use client";

import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Image from "next/image";
import { TRADING_PLATFORMS, PlatformItem, ProofImage } from "@/data/platforms";
import { useGSAPContext, gsap } from "@/hooks/useGSAPAnimations";
import {
  CheckCircle,
  Sliders,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Eye,
  Gift,
  Sparkles,
} from "lucide-react";

interface GalleryProofItem extends ProofImage {
  platformId: string;
  platformName: string;
  platformCategory: string;
  badgeColor: "purple" | "gold";
  referralCode?: string;
  referralBonus?: string;
  referralLink?: string;
}

export default function Platforms() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [activeProofIndex, setActiveProofIndex] = useState<number | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Flatten all proofs into a single sequence for modal navigation
  const allProofs: GalleryProofItem[] = useMemo(() => {
    return TRADING_PLATFORMS.flatMap((platform) =>
      platform.proofImages.map((proof) => ({
        ...proof,
        platformId: platform.id,
        platformName: platform.name,
        platformCategory: platform.category,
        badgeColor: platform.badgeColor,
        referralCode: platform.referralCode,
        referralBonus: platform.referralBonus,
        referralLink: platform.referralLink,
      }))
    );
  }, []);

  const openLightbox = useCallback(
    (proofSrc: string) => {
      const idx = allProofs.findIndex((p) => p.src === proofSrc);
      if (idx !== -1) {
        setActiveProofIndex(idx);
      }
    },
    [allProofs]
  );

  const closeLightbox = useCallback(() => {
    setActiveProofIndex(null);
  }, []);

  const nextProof = useCallback(() => {
    setActiveProofIndex((prev) =>
      prev === null ? null : (prev + 1) % allProofs.length
    );
  }, [allProofs.length]);

  const prevProof = useCallback(() => {
    setActiveProofIndex((prev) =>
      prev === null ? null : (prev - 1 + allProofs.length) % allProofs.length
    );
  }, [allProofs.length]);

  // Keyboard navigation & body scroll lock for modal
  useEffect(() => {
    if (activeProofIndex === null) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextProof();
      } else if (e.key === "ArrowLeft") {
        prevProof();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProofIndex, closeLightbox, nextProof, prevProof]);

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

  const activeProof =
    activeProofIndex !== null ? allProofs[activeProofIndex] : null;

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
            <span>INDUSTRY-STANDARD TOOLS & VERIFIED PROOFS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Learn the Tools of Modern Trading
          </h2>
          <p className="mt-4 text-base text-brand-muted">
            Gain fluency across the world&apos;s leading charting suites, crypto exchanges, and currency execution terminals backed by real audited execution.
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
                <div>
                  {/* Category Pill & Proof Status */}
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
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-brand-bullish bg-brand-bullish/10 border border-brand-bullish/25 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="h-3 w-3" />
                      <span>Live Proof</span>
                    </span>
                  </div>

                  {/* Platform Name */}
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-white transition-colors">
                    {platform.name}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-1 font-mono text-xs text-brand-muted">
                    {platform.tagline}
                  </p>

                  {/* Real Trading Proof Thumbnails */}
                  <div className="mt-5 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-mono font-semibold uppercase tracking-wider text-brand-muted flex items-center gap-1.5">
                        <Eye className="h-3 w-3 text-brand-purpleLight" />
                        Execution Proof
                      </span>
                      <span className="font-mono text-[10px] text-brand-purpleLight">
                        Tap to inspect
                      </span>
                    </div>

                    {/* Binance has 2 proofs (Futures + P2P Withdrawal), others have 1 */}
                    {platform.proofImages.length > 1 ? (
                      <div className="grid grid-cols-2 gap-2">
                        {platform.proofImages.map((proof, pIdx) => (
                          <button
                            key={pIdx}
                            type="button"
                            onClick={() => openLightbox(proof.src)}
                            className="group/thumb relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-brand-bgSecondary/90 text-left transition-all hover:border-brand-gold/60 hover:shadow-goldGlow focus:outline-none focus:ring-2 focus:ring-brand-gold"
                            aria-label={`Inspect ${proof.title}`}
                          >
                            <Image
                              src={proof.src}
                              alt={proof.alt}
                              fill
                              sizes="(max-width: 768px) 50vw, 20vw"
                              className="object-cover object-center transition-transform duration-500 group-hover/thumb:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity group-hover/thumb:from-black/90" />

                            {proof.badge && (
                              <div className="absolute top-1.5 right-1.5">
                                <span className="rounded bg-brand-bullish/25 px-1.5 py-0.5 font-mono text-[9px] font-bold text-brand-bullish border border-brand-bullish/40 backdrop-blur-sm">
                                  {proof.badge}
                                </span>
                              </div>
                            )}

                            {/* Center Zoom Icon on Hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-brand-bg shadow-md">
                                <Maximize2 className="h-3.5 w-3.5" />
                              </span>
                            </div>

                            {/* Thumbnail Caption */}
                            <div className="absolute bottom-1.5 inset-x-1.5">
                              <p className="truncate font-heading text-[10px] font-semibold text-white">
                                {proof.title}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      platform.proofImages.map((proof, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => openLightbox(proof.src)}
                          className={`group/thumb relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-brand-bgSecondary/90 text-left transition-all focus:outline-none focus:ring-2 ${
                            isGoldBadge
                              ? "hover:border-brand-gold/60 hover:shadow-goldGlow focus:ring-brand-gold"
                              : "hover:border-brand-purple/60 hover:shadow-purpleGlow focus:ring-brand-purple"
                          }`}
                          aria-label={`Inspect ${proof.title}`}
                        >
                          <Image
                            src={proof.src}
                            alt={proof.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover object-center transition-transform duration-500 group-hover/thumb:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity group-hover/thumb:from-black/90" />

                          {proof.badge && (
                            <div className="absolute top-2 right-2">
                              <span
                                className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold border backdrop-blur-sm ${
                                  isGoldBadge
                                    ? "bg-brand-gold/25 text-brand-gold border-brand-gold/40"
                                    : "bg-brand-purple/25 text-brand-purpleLight border-brand-purple/40"
                                }`}
                              >
                                {proof.badge}
                              </span>
                            </div>
                          )}

                          {/* Center Zoom Badge on Hover */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                            <span
                              className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-semibold shadow-lg backdrop-blur-sm ${
                                isGoldBadge
                                  ? "bg-brand-gold text-brand-bg font-bold"
                                  : "bg-brand-purple text-white font-bold"
                              }`}
                            >
                              <Maximize2 className="h-3 w-3" />
                              <span>Inspect Proof</span>
                            </span>
                          </div>

                          {/* Thumbnail Caption */}
                          <div className="absolute bottom-2 inset-x-2.5">
                            <p className="truncate font-heading text-xs font-bold text-white">
                              {proof.title}
                            </p>
                            <p className="truncate font-mono text-[10px] text-white/70">
                              {proof.subtitle}
                            </p>
                          </div>
                        </button>
                      ))
                    )}
                  </div>

                  {/* Bybit Referral Special Bonus Box */}
                  {platform.referralCode && (
                    <div className="mt-4 rounded-2xl border border-brand-purple/30 bg-gradient-to-br from-brand-purple/15 to-brand-bgSecondary/70 p-3.5 backdrop-blur-md">
                      <div className="flex items-center gap-1.5 text-brand-gold">
                        <Gift className="h-3.5 w-3.5 shrink-0" />
                        <span className="font-heading text-[11px] font-bold text-brand-goldLight">
                          {platform.referralBonus ||
                            "Claim over $5,000 in bonuses on Bybit!"}
                        </span>
                      </div>

                      <div className="mt-2.5 flex flex-col gap-2">
                        {/* Copy Referral Code Button */}
                        <button
                          type="button"
                          onClick={() => handleCopyCode(platform.referralCode!)}
                          className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 font-mono text-xs font-bold transition-all ${
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
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-purple/30 hover:bg-brand-purple/50 border border-brand-purple/40 px-3 py-1.5 text-[11px] font-semibold text-brand-purpleLight hover:text-white transition-all"
                          >
                            <span>Open Bybit Registration</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="mt-4 text-xs leading-relaxed text-brand-muted">
                    {platform.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                    {platform.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-white/80"
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

                {/* Educational Note & Proof Status */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-brand-muted">
                  <span className="truncate">
                    {platform.proofSummary || "Verified Platform"}
                  </span>
                  <button
                    type="button"
                    onClick={() => openLightbox(platform.proofImages[0].src)}
                    className="font-mono text-brand-purpleLight hover:underline shrink-0 ml-2"
                  >
                    View Proof &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Transparency Disclaimer */}
        <p className="mt-10 text-center text-xs text-brand-muted/70 max-w-2xl mx-auto">
          Notice: BHATHI FOREX is an independent educational academy. All trademarks and platform names belong to their respective owners. Education is conducted for interface fluency and market execution without official endorsements.
        </p>
      </div>

      {/* High-End Trading Proof Lightbox / Modal */}
      {activeProof && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeProof.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border border-white/15 bg-brand-card shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-brand-bgSecondary/80">
              <div className="flex items-center gap-3">
                <span
                  className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    activeProof.badgeColor === "gold"
                      ? "bg-brand-gold/15 text-brand-gold border border-brand-gold/30"
                      : "bg-brand-purple/15 text-brand-purpleLight border border-brand-purple/30"
                  }`}
                >
                  {activeProof.platformName}
                </span>
                <div>
                  <h4 className="font-heading text-sm sm:text-base font-bold text-white">
                    {activeProof.title}
                  </h4>
                  <p className="font-mono text-[10px] sm:text-xs text-brand-muted">
                    {activeProof.subtitle}
                  </p>
                </div>
              </div>

              {/* Close Button & Navigation Info */}
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block font-mono text-xs text-brand-muted bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  {(activeProofIndex ?? 0) + 1} / {allProofs.length}
                </span>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="rounded-full bg-white/10 p-2 text-brand-muted hover:bg-white/20 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewer with Left / Right Navigation */}
            <div className="relative flex-1 bg-black/50 p-3 sm:p-6 flex items-center justify-center overflow-hidden min-h-[300px]">
              {/* Prev Button */}
              <button
                type="button"
                onClick={prevProof}
                className="absolute left-3 sm:left-6 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/15 hover:bg-black/90 hover:scale-105 transition-all shadow-lg backdrop-blur-sm"
                aria-label="Previous proof"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextProof}
                className="absolute right-3 sm:right-6 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/15 hover:bg-black/90 hover:scale-105 transition-all shadow-lg backdrop-blur-sm"
                aria-label="Next proof"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Displayed Image */}
              <div className="relative max-h-[58vh] sm:max-h-[62vh] w-full flex items-center justify-center">
                <Image
                  src={activeProof.src}
                  alt={activeProof.alt}
                  width={1200}
                  height={800}
                  priority
                  className="max-h-[56vh] sm:max-h-[60vh] w-auto max-w-full object-contain rounded-xl border border-white/10 shadow-2xl"
                />
              </div>
            </div>

            {/* Modal Footer & Details */}
            <div className="border-t border-white/10 bg-brand-bgSecondary p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2">
                    {activeProof.badge && (
                      <span className="rounded bg-brand-bullish/20 px-2 py-0.5 font-mono text-[10px] font-bold text-brand-bullish border border-brand-bullish/40">
                        {activeProof.badge}
                      </span>
                    )}
                    <span className="font-heading text-xs font-semibold text-white">
                      Verified Platform Execution
                    </span>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {activeProof.description}
                  </p>
                </div>

                {/* If active proof is Bybit, offer referral copy button directly */}
                {activeProof.referralCode && (
                  <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => handleCopyCode(activeProof.referralCode!)}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 font-mono text-xs font-bold transition-all ${
                        copiedCode === activeProof.referralCode
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/15"
                      }`}
                    >
                      {copiedCode === activeProof.referralCode ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span>Copied Code: {activeProof.referralCode}!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-brand-purpleLight" />
                          <span>Copy Code: {activeProof.referralCode}</span>
                        </>
                      )}
                    </button>
                    {activeProof.referralLink && (
                      <a
                        href={activeProof.referralLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-xl bg-brand-purple px-3 py-2 text-xs font-bold text-white hover:bg-brand-purpleLight transition-colors"
                      >
                        <span>Claim</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Proofs Strip Thumbnails for Quick Switching */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center gap-2 overflow-x-auto pb-1">
                {allProofs.map((p, idx) => {
                  const isCurrent = idx === activeProofIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveProofIndex(idx)}
                      className={`relative h-11 w-16 shrink-0 overflow-hidden rounded-lg border transition-all ${
                        isCurrent
                          ? "border-brand-purple ring-2 ring-brand-purple/40 scale-105"
                          : "border-white/10 opacity-50 hover:opacity-100"
                      }`}
                      aria-label={`Jump to proof ${idx + 1}: ${p.title}`}
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
