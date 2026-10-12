"use client";

import React, { useRef } from "react";
import { COURSES } from "@/data/courses";
import { formatLKR } from "@/lib/utils";
import { getCourseEnrollmentWhatsAppUrl } from "@/lib/whatsapp";
import { useGSAPContext, gsap } from "@/hooks/useGSAPAnimations";
import MobileAutoScrollTrack from "../ui/MobileAutoScrollTrack";
import { Check, MessageSquare, Sparkles, ArrowRight } from "lucide-react";

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAPContext(() => {
    gsap.fromTo(
      cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
      { opacity: 0, y: 35, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, containerRef);

  return (
    <section
      id="courses"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-white/70 border-t border-slate-200/80 backdrop-blur-sm"
    >
      {/* Background Lighting */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-sky-200/25 blur-[140px]" />
      <div className="pointer-events-none absolute left-10 bottom-10 h-72 w-72 rounded-full bg-amber-100/35 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-700 mb-3 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>TRANSPARENT TUITION • OFFICIAL PROGRAMS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Choose Your Trading Education Path
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Structured, transparent education tailored to your trading aspirations at Apex Trading Academy. Direct WhatsApp enrollment with zero hidden platform charges.
          </p>
        </div>

        {/* Mobile Horizontal Auto-Scroll Course Cards Track */}
        <MobileAutoScrollTrack
          badgeLabel="Course Programs • Auto-Scrolls LTR"
          className="mb-4"
        >
          {COURSES.map((course) => {
            const isCompleteMaster = course.isPopular;
            const enrollAction = getCourseEnrollmentWhatsAppUrl(
              course.name,
              course.priceLKR
            );

            return (
              <div
                key={`mobile-${course.id}`}
                className={`group relative flex flex-col justify-between rounded-3xl border transition-all duration-300 shadow-sm ${
                  isCompleteMaster
                    ? "border-sky-400 bg-gradient-to-b from-sky-50/60 via-white to-white ring-2 ring-sky-300/40"
                    : "border-slate-200 bg-white"
                } p-6`}
              >
                {isCompleteMaster && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-white shadow-sm flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-white fill-white" />
                    <span>{course.badge || "BEST VALUE"}</span>
                  </div>
                )}

                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        isCompleteMaster
                          ? "bg-sky-100 text-sky-800 border border-sky-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {course.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-slate-900 min-h-[44px] flex items-center">
                    {course.name}
                  </h3>

                  <p className="mt-1 text-[11px] text-amber-700 font-semibold">
                    {course.tagline}
                  </p>

                  <div className="mt-4 border-y border-slate-100 py-3.5">
                    <span className="font-heading text-2xl font-extrabold text-slate-900">
                      {formatLKR(course.priceLKR)}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      One-time academy tuition
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {course.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      What&apos;s Included:
                    </span>
                    {course.highlights.slice(0, 4).map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-1.5 text-xs text-slate-700"
                      >
                        <Check
                          className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${
                            isCompleteMaster
                              ? "text-sky-600 font-bold"
                              : "text-slate-500"
                          }`}
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={enrollAction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn relative flex w-full items-center justify-center gap-2 rounded-2xl py-3 px-4 text-xs font-bold transition-all duration-200 ${
                      isCompleteMaster
                        ? "bg-sky-600 hover:bg-sky-700 text-white shadow-sm"
                        : "border border-slate-300 bg-white hover:border-sky-500 hover:text-sky-600 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{course.ctaLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-70 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </MobileAutoScrollTrack>

        {/* Desktop 4 Course Cards Grid */}
        <div
          ref={cardsRef}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {COURSES.map((course) => {
            const isCompleteMaster = course.isPopular;
            const enrollAction = getCourseEnrollmentWhatsAppUrl(
              course.name,
              course.priceLKR
            );

            return (
              <div
                key={course.id}
                className={`group relative flex flex-col justify-between rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                  isCompleteMaster
                    ? "border-sky-400 bg-gradient-to-b from-sky-50/60 via-white to-white ring-2 ring-sky-300/40 shadow-md"
                    : "border-slate-200 bg-white hover:border-sky-300 shadow-sm"
                } p-6 sm:p-7`}
              >
                {/* Popular / Best Value Badge */}
                {isCompleteMaster && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-sm flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3 text-white fill-white" />
                    <span>{course.badge || "BEST VALUE"}</span>
                  </div>
                )}

                <div>
                  {/* Category Pill */}
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isCompleteMaster
                          ? "bg-sky-100 text-sky-800 border border-sky-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {course.category}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="font-heading text-lg font-bold text-slate-900 min-h-[56px] flex items-center">
                    {course.name}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-1 text-xs text-amber-700 font-semibold">
                    {course.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 border-y border-slate-100 py-5">
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
                        {formatLKR(course.priceLKR)}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      One-time academy tuition
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs leading-relaxed text-slate-600">
                    {course.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-6 space-y-2.5">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      What&apos;s Included:
                    </span>
                    {course.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <Check
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            isCompleteMaster
                              ? "text-sky-600 font-bold"
                              : "text-slate-500"
                          }`}
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enrollment CTA Button */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <a
                    href={enrollAction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn relative flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 px-4 text-xs font-bold transition-all duration-200 ${
                      isCompleteMaster
                        ? "bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:scale-[1.01]"
                        : "border border-slate-300 bg-white text-slate-700 hover:border-sky-500 hover:text-sky-600 hover:bg-slate-50"
                    }`}
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{course.ctaLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-70 transition-transform group-hover/btn:translate-x-1" />
                  </a>

                  {!enrollAction.isConfigured && (
                    <span className="block text-center text-[10px] text-slate-400 mt-2">
                      WhatsApp number editable in academy config
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
