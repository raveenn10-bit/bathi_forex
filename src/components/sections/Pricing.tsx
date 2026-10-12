"use client";

import React, { useRef, useState } from "react";
import { COURSES, CoursePackage } from "@/data/courses";
import { getCourseEnrollmentWhatsAppUrl } from "@/lib/whatsapp";
import { formatLKR } from "@/lib/utils";
import { useGSAPContext, gsap, ScrollTrigger } from "@/hooks/useGSAPAnimations";
import {
  Check,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Shield,
  Zap,
} from "lucide-react";

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAPContext(() => {
    gsap.fromTo(
      cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      }
    );
  }, containerRef);

  return (
    <section
      id="courses"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute right-10 top-1/4 h-[550px] w-[550px] rounded-full bg-brand-purple/15 blur-[160px]" />
      <div className="pointer-events-none absolute left-10 bottom-1/4 h-[450px] w-[450px] rounded-full bg-brand-gold/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-purple/40 bg-brand-purple/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-purpleLight mb-3">
            <Zap className="h-3.5 w-3.5 text-brand-gold" />
            <span>TRANSPARENT TUITION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Choose Your Trading Education Path
          </h2>
          <p className="mt-4 text-base text-brand-muted">
            Structured, transparent education tailored to your trading aspirations. Direct WhatsApp enrollment with zero hidden platform charges.
          </p>
        </div>

        {/* 4 Course Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
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
                className={`group relative flex flex-col justify-between rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  isCompleteMaster
                    ? "border-brand-purple bg-gradient-to-b from-[#241B3B] via-brand-card to-brand-bgSecondary shadow-purpleGlow hover:shadow-brand-purple/40"
                    : "border-white/10 bg-brand-card/90 hover:border-brand-purple/40 hover:bg-brand-card shadow-glass"
                } p-6 sm:p-7`}
              >
                {/* Popular / Best Value Badge */}
                {isCompleteMaster && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-gold via-brand-goldLight to-brand-gold px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest text-brand-bg shadow-goldGlow flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3 text-brand-bg fill-brand-bg" />
                    <span>{course.badge || "BEST VALUE"}</span>
                  </div>
                )}

                <div>
                  {/* Category Pill */}
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isCompleteMaster
                          ? "bg-brand-purple/30 text-brand-purpleLight border border-brand-purple/40"
                          : "bg-white/5 text-brand-muted border border-white/10"
                      }`}
                    >
                      {course.category}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="font-heading text-lg font-bold text-white min-h-[56px] flex items-center">
                    {course.name}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-1 text-xs text-brand-gold font-medium">
                    {course.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 border-y border-white/10 py-5">
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                        {formatLKR(course.priceLKR)}
                      </span>
                    </div>
                    <span className="text-[11px] text-brand-muted block mt-1">
                      One-time academy tuition
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs leading-relaxed text-brand-muted">
                    {course.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-6 space-y-2.5">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-white/50">
                      What&apos;s Included:
                    </span>
                    {course.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 text-xs text-white/85"
                      >
                        <Check
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            isCompleteMaster
                              ? "text-brand-gold"
                              : "text-brand-purpleLight"
                          }`}
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enrollment CTA Button */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  <a
                    href={enrollAction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn relative flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 px-4 text-xs font-bold transition-all duration-300 ${
                      isCompleteMaster
                        ? "bg-gradient-to-r from-brand-purple via-[#8847E4] to-brand-purpleLight text-white shadow-purpleGlow hover:shadow-brand-purple/60 hover:scale-[1.02]"
                        : "border border-brand-purple/40 bg-brand-purple/10 text-brand-purpleLight hover:bg-brand-purple hover:text-white"
                    }`}
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{course.ctaLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-70 transition-transform group-hover/btn:translate-x-1" />
                  </a>

                  {!enrollAction.isConfigured && (
                    <span className="block text-center text-[10px] text-brand-muted mt-2">
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
