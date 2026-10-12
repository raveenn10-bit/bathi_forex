"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ACADEMY_CONFIG } from "@/data/academy";
import { useGSAPContext, gsap } from "@/hooks/useGSAPAnimations";
import { getGeneralInquiryWhatsAppUrl } from "@/lib/whatsapp";
import {
  Award,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Check,
} from "lucide-react";

const FOUNDER_STATS = [
  {
    value: "4+ Years",
    label: "Educating",
    detail: "Dedicated Mentorship",
  },
  {
    value: "1:1",
    label: "Mentorship",
    detail: "Direct Student Guidance",
  },
  {
    value: "100%",
    label: "Objective",
    detail: "Rule-Based Methodology",
  },
];

export default function Mentor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAPContext(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      cardRef.current,
      { opacity: 0, x: -35, scale: 0.97 },
      { opacity: 1, x: 0, scale: 1, duration: 0.85 }
    );

    tl.fromTo(
      contentRef.current?.children
        ? Array.from(contentRef.current.children)
        : [],
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.7 },
      "-=0.55"
    );
  }, containerRef);

  const { mentor } = ACADEMY_CONFIG;
  const whatsappMentorUrl = getGeneralInquiryWhatsAppUrl(
    `Hello Bhathiya Sooriarachchi, I am interested in joining Apex Trading Academy and learning directly from you. Please send me the enrollment details.`
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full overflow-hidden py-24 sm:py-32 bg-white/70 dark:bg-[#0d1117]/70 border-y border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm transition-colors duration-300"
    >
      {/* Subtle ambient light accents */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-sky-200/30 dark:bg-sky-900/15 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-amber-100/40 dark:bg-amber-900/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-950/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-3.5 shadow-xs">
            <GraduationCap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <span>FOUNDER & LEAD LECTURER</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learn Trading Directly with{" "}
            <span className="text-sky-600 dark:text-sky-400">
              {mentor.name}
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Founder, Lecturer &amp; Crypto Master of Apex Trading Academy. Dedicated to engineering disciplined, independent traders through mathematical probability, institutional liquidity concepts, and emotion-free execution.
          </p>
        </div>

        {/* Two-Column Executive Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Column 1: Founder Portrait Showcase */}
          <div ref={cardRef} className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Soft ambient shadow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-amber-200/40 dark:from-sky-900/20 dark:via-blue-950/20 dark:to-amber-950/20 opacity-70 blur-2xl" />

              {/* Main Portrait Frame */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#121824] p-3 sm:p-4 shadow-xl shadow-slate-200/60 dark:shadow-none backdrop-blur-xl transition-colors duration-300">
                {/* Visual Area */}
                <div className="group/portrait relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-slate-900 dark:via-[#161f30] dark:to-[#121824] shadow-inner">
                  {/* Subtle radial luxury illumination */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(14,165,233,0.08),transparent_70%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.08),transparent_65%)]" />

                  {/* Architectural subtle grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(15,23,42,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.2) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  {/* Top Bar: Founder Credential & Academy Seal */}
                  <div className="absolute top-3.5 inset-x-3.5 z-20 flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/80 dark:border-amber-500/40 bg-white/95 dark:bg-slate-900/90 px-3 py-1 text-[11px] font-bold text-amber-800 dark:text-amber-300 backdrop-blur-md shadow-sm">
                      <ShieldCheck className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                      <span className="tracking-wide">VERIFIED FOUNDER</span>
                    </div>

                    {/* Official Academy Emblem */}
                    <div className="relative h-11 w-11 shrink-0 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-sky-400 to-amber-500 shadow-sm">
                      <div className="relative h-full w-full overflow-hidden rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <Image
                          src="/images/logo.png"
                          alt="Official Apex Trading Academy Emblem"
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bhathiya Sooriarachchi Cutout Portrait */}
                  <Image
                    src="/images/bhathiya-sooriarachchi.png"
                    alt="Bhathiya Sooriarachchi - Founder, Lecturer & Crypto Master at Apex Trading Academy"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-contain object-bottom transition-transform duration-700 ease-out group-hover/portrait:scale-105"
                    priority
                  />

                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#121824] dark:via-[#121824]/80 dark:to-transparent" />

                  {/* Bottom Portrait Nameplate */}
                  <div className="absolute bottom-3.5 inset-x-3.5 z-20 text-left">
                    <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-[#121824]/95 p-3.5 backdrop-blur-md shadow-md">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <span>{mentor.name}</span>
                            <Award className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                          </h3>
                          <p className="font-mono text-xs font-semibold text-sky-700 dark:text-sky-400">
                            Founder, Lecturer &amp; Crypto Master
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded-full shrink-0 font-semibold">
                          <Check className="h-2.5 w-2.5 text-emerald-600 dark:text-emerald-400" />
                          <span>Active Desk</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Executive Stats Grid */}
                <div className="mt-3.5 grid grid-cols-3 gap-2">
                  {FOUNDER_STATS.map((stat, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-3 text-center transition-all hover:border-sky-300 dark:hover:border-sky-500 hover:bg-white dark:hover:bg-slate-900"
                    >
                      <span className="block font-heading text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                        {stat.value}
                      </span>
                      <span className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                        {stat.label}
                      </span>
                      <span className="hidden sm:block text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                        {stat.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Biography, Cards & Modules */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>EXECUTIVE ACADEMY PROFILE</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Architecting Independent Traders with Systematic Precision
              </h3>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {mentor.bio}
            </p>

            {/* Clean Cards: Educational Approach & Core Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Educational Approach Card */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 shadow-xs transition-all hover:border-sky-300 dark:hover:border-sky-500 hover:shadow-sm">
                <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 mb-2">
                  <div className="rounded-lg bg-sky-50 dark:bg-sky-950/60 p-1.5 border border-sky-200 dark:border-sky-900/60">
                    <TrendingUp className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                    Educational Approach
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  &ldquo;{mentor.approach}&rdquo;
                </p>
              </div>

              {/* Core Philosophy Card */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-5 shadow-xs transition-all hover:border-amber-300 dark:hover:border-amber-500 hover:shadow-sm">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 mb-2">
                  <div className="rounded-lg bg-amber-50 dark:bg-amber-950/60 p-1.5 border border-amber-200 dark:border-amber-900/60">
                    <ShieldCheck className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                    Core Philosophy
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  &ldquo;{mentor.philosophy}&rdquo;
                </p>
              </div>
            </div>

            {/* Key Educational Modules Covered */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <span>Key Educational Modules Covered:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {mentor.specialties.map((spec) => (
                  <div
                    key={spec}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 px-3.5 py-2.5 text-xs text-slate-700 dark:text-slate-300 transition-all hover:border-sky-300 dark:hover:border-sky-500 hover:shadow-xs"
                  >
                    <CheckCircle2 className="h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prominent CTAs */}
            <div className="mt-2 flex flex-wrap items-center gap-4 pt-2">
              <a
                href={whatsappMentorUrl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-sky-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4 text-emerald-300" />
                <span>Speak with Bhathiya on WhatsApp</span>
              </a>

              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-all duration-200 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-[0.98]"
              >
                <span>Explore Courses</span>
                <ArrowRight className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
