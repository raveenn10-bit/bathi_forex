"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ACADEMY_CONFIG } from "@/data/academy";
import { getGeneralInquiryWhatsAppUrl } from "@/lib/whatsapp";
import {
  X,
  CheckCheck,
  Users,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

/**
 * Clean vector SVG for official WhatsApp branding
 */
function WhatsAppGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893 0-3.177-1.237-6.164-3.489-8.416" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState("Just now");
  const popoverRef = useRef<HTMLDivElement>(null);

  // Time formatter on client mount
  useEffect(() => {
    try {
      const now = new Date();
      setCurrentTimeStr(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    } catch {
      setCurrentTimeStr("Just now");
    }
  }, []);

  // Gentle popover entrance teaser after 4.5 seconds if user hasn't interacted yet
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(true);
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const whatsappInquiry = getGeneralInquiryWhatsAppUrl();
  const whatsappGroupUrl = ACADEMY_CONFIG.studentCommunity.whatsappGroupUrl;

  const handleToggle = () => {
    setHasInteracted(true);
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasInteracted(true);
    setIsOpen(false);
  };

  const handleScrollToCommunity = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const section = document.getElementById("community");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="WhatsApp Student Support & Forum"
      className="fixed bottom-20 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none"
    >
      {/* 1. Popover Preview Card */}
      {isOpen && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-modal="false"
          aria-label="Chat with Bhathiya Sooriarachchi"
          className="pointer-events-auto mb-3.5 w-[330px] sm:w-[370px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-white/15 bg-brand-card/95 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
        >
          {/* Popover Header: WhatsApp Branding */}
          <div className="relative bg-gradient-to-r from-[#075E54] via-[#0f4a3f] to-[#128C7E] p-4 text-white">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {/* Circular Avatar of Bhathiya */}
                <div className="relative h-11 w-11 shrink-0 rounded-full border-2 border-brand-gold/60 p-0.5 bg-brand-bg shadow-md">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={ACADEMY_CONFIG.mentor.image || "/images/bhathiya-sooriarachchi.png"}
                      alt={ACADEMY_CONFIG.mentor.name}
                      fill
                      sizes="44px"
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Pulsating online indicator */}
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-brand-bg bg-emerald-400" />
                  </span>
                </div>

                {/* Name & Online Status */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="truncate font-heading text-sm font-bold text-white leading-tight">
                      Bhathiya Sooriarachchi
                    </h4>
                    {/* Verified Badge */}
                    <span
                      title="Verified Founder & Mentor"
                      className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-black text-[10px] font-black"
                    >
                      ✓
                    </span>
                  </div>
                  <p className="truncate text-[11px] text-white/80 font-medium">
                    Apex Trading Academy Official
                  </p>
                  <p className="flex items-center gap-1 text-[10px] font-mono text-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    <span>Online • Typically replies in 5m</span>
                  </p>
                </div>
              </div>

              {/* Minimize / Close Button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close WhatsApp chat preview"
                className="rounded-full bg-black/20 p-1.5 text-white/80 hover:bg-black/40 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Popover Body: WhatsApp Chat Surface */}
          <div className="relative bg-[#0b141a]/95 p-4 text-white">
            {/* Subtle WhatsApp pattern background */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#25D366 1px, transparent 1px), radial-gradient(#D6B15E 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 10px 10px",
              }}
            />

            {/* Date Chip */}
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-white/10 px-3 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-white/60">
                Today
              </span>
            </div>

            {/* Inbound Message Bubble */}
            <div className="relative mb-4 flex items-start gap-2.5">
              <div className="relative max-w-[88%] rounded-2xl rounded-tl-sm bg-[#1f2c34] p-3.5 shadow-md border border-white/5">
                <p className="font-heading text-xs font-bold text-brand-gold mb-1 flex items-center gap-1">
                  <span>Bhathiya Sooriarachchi</span>
                  <span className="text-[10px] font-mono text-brand-purpleLight font-normal">
                    (Founder)
                  </span>
                </p>
                <p className="text-xs leading-relaxed text-slate-100">
                  👋 <strong className="text-white">Ayubowan!</strong> Have questions about our Forex or Crypto courses? Ask Bhathiya directly on WhatsApp or join our student community forum!
                </p>

                {/* Bubble Footer info */}
                <div className="mt-2 flex items-center justify-end gap-1.5 text-[10px] font-mono text-white/50">
                  <span>{currentTimeStr}</span>
                  <CheckCheck className="h-3.5 w-3.5 text-sky-400" />
                </div>
              </div>
            </div>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-col gap-2 pt-1 border-t border-white/10">
              {/* Primary: Chat on WhatsApp */}
              <a
                href={whatsappInquiry.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setHasInteracted(true)}
                className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#25D366] via-[#20BA5C] to-[#128C7E] px-4 py-2.5 text-xs font-bold text-white shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all hover:scale-[1.02] hover:shadow-[0_6px_22px_rgba(37,211,102,0.5)] active:scale-[0.98]"
              >
                <WhatsAppGlyph className="h-4 w-4 fill-white" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary: Join Student Forum */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={whatsappGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setHasInteracted(true)}
                  className="group flex items-center justify-center gap-1.5 rounded-xl border border-brand-gold/40 bg-brand-gold/10 px-3 py-2 text-[11px] font-semibold text-brand-gold transition-all hover:bg-brand-gold hover:text-brand-bg active:scale-[0.98]"
                >
                  <Users className="h-3.5 w-3.5" />
                  <span>Join Forum</span>
                  <ArrowUpRight className="h-3 w-3 opacity-70 group-hover:translate-x-0.5" />
                </a>

                <button
                  type="button"
                  onClick={handleScrollToCommunity}
                  className="flex items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-medium text-brand-muted hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span>Forum Details</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Bottom Security Note */}
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-white/50">
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
              <span>Official Apex Trading Academy Support • 100% Free Consultation</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Floating Action Button Container */}
      <div className="pointer-events-auto relative flex items-center gap-3">
        {/* Idle Preview Pill on desktop when popover is closed */}
        {!isOpen && (
          <div
            onClick={handleToggle}
            className="hidden sm:flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-slate-800 shadow-glass backdrop-blur-md transition-all duration-300 hover:border-emerald-500/60 hover:scale-105"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-slate-800 font-semibold">Chat with Bhathiya</span>
            <span className="rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[9px] font-bold text-emerald-700 border border-emerald-200">
              ONLINE
            </span>
          </div>
        )}

        {/* Main Floating Trigger Button */}
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close WhatsApp widget" : "Open WhatsApp chat and forum widget"}
          className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#20BA5C] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] ring-2 ring-brand-gold/70 ring-offset-2 ring-offset-brand-bg transition-all duration-300 hover:scale-108 hover:shadow-[0_12px_40px_rgba(37,211,102,0.7)] active:scale-95"
        >
          {/* Pulsating Glowing Ripple Halo */}
          <span className="pointer-events-none absolute -inset-2 rounded-full bg-emerald-400/20 animate-ping opacity-60" />

          {/* Small circular avatar of Bhathiya Sooriarachchi overlaying button */}
          <div className="absolute -top-1.5 -left-1.5 h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-brand-bg bg-brand-card overflow-hidden shadow-md">
            <Image
              src={ACADEMY_CONFIG.mentor.image || "/images/bhathiya-sooriarachchi.png"}
              alt="Bhathiya S."
              fill
              sizes="28px"
              className="object-cover object-top"
            />
            {/* Emerald pulsating online indicator */}
            <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-[#00E676] ring-1 ring-black" />
          </div>

          {/* Unread Alert Notification Badge */}
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-rose-600 text-[10px] font-black text-white shadow-lg ring-2 ring-brand-bg animate-bounce">
              {unreadCount}
            </span>
          )}

          {/* Center Icon: WhatsApp Glyph or Close Icon */}
          {isOpen ? (
            <X className="h-6 w-6 sm:h-7 sm:w-7 text-white transition-transform duration-200 group-hover:rotate-90" />
          ) : (
            <WhatsAppGlyph className="h-7 w-7 sm:h-8 sm:w-8 fill-white transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>
      </div>
    </aside>
  );
}
