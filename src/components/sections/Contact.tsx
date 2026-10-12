"use client";

import React, { useState, useRef } from "react";
import { ACADEMY_CONFIG } from "@/data/academy";
import { COURSES } from "@/data/courses";
import { getCourseEnrollmentWhatsAppUrl, getGeneralInquiryWhatsAppUrl } from "@/lib/whatsapp";
import { formatLKR } from "@/lib/utils";
import { useGSAPContext, gsap, ScrollTrigger } from "@/hooks/useGSAPAnimations";
import {
  MessageSquare,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export default function Contact() {
  const [selectedCourseId, setSelectedCourseId] = useState(COURSES[3].id); // Complete Master by default
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAPContext(() => {
    gsap.fromTo(
      contentRef.current?.children ? Array.from(contentRef.current.children) : [],
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

  const selectedCourse = COURSES.find((c) => c.id === selectedCourseId) || COURSES[0];
  const enrollLink = getCourseEnrollmentWhatsAppUrl(
    selectedCourse.name,
    selectedCourse.priceLKR
  );

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden"
    >
      {/* Dynamic Background Nebula */}
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-[500px] w-[500px] rounded-full bg-[#7FCDFF]/25 blur-[150px]" />
      <div className="pointer-events-none absolute -top-20 left-10 h-[400px] w-[400px] rounded-full bg-[#FFD3B6]/30 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Contact Channels */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-700 w-fit shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>DIRECT ADMISSIONS</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Start Your Trading Journey
            </h2>

            <p className="text-base text-slate-600 leading-relaxed max-w-lg">
              Take the first step toward disciplined financial education at Apex Trading Academy. Select your preferred course below to connect directly with our admissions desk on WhatsApp.
            </p>

            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="rounded-2xl border border-slate-200 bg-white/85 p-5 backdrop-blur-md shadow-glass">
                <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-1">
                  <Phone className="h-4 w-4 text-amber-600" />
                  <span>Direct Hotline</span>
                </div>
                <div className="font-mono text-sm font-bold text-slate-900">
                  {ACADEMY_CONFIG.displayPhone}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Available on WhatsApp</div>
              </div>

              <a
                href={`mailto:${ACADEMY_CONFIG.email}`}
                className="group rounded-2xl border border-slate-200 bg-white/85 p-5 backdrop-blur-md shadow-glass transition-all duration-300 hover:border-sky-300 hover:bg-white block"
              >
                <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-1 group-hover:text-sky-600 transition-colors">
                  <Mail className="h-4 w-4 text-sky-600" />
                  <span>Official Email</span>
                </div>
                <div className="font-mono text-sm font-bold text-slate-900 truncate group-hover:text-sky-600 transition-colors">
                  {ACADEMY_CONFIG.email}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Direct support & admissions inquiries</div>
              </a>

              <div className="rounded-2xl border border-slate-200 bg-white/85 p-5 backdrop-blur-md shadow-glass sm:col-span-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-1">
                  <MapPin className="h-4 w-4 text-amber-600" />
                  <span>Academy Operations</span>
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {ACADEMY_CONFIG.location} &bull; Online & Hybrid Sessions Nationwide
                </div>
              </div>
            </div>

            {/* Social media links */}
            <div>
              <span className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                Official Channels:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {ACADEMY_CONFIG.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-slate-200 bg-white/85 px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:border-sky-300 hover:text-sky-600 transition-all hover:scale-105 shadow-sm"
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Instant WhatsApp Enrollment Console */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-slate-200/90 bg-white/95 p-7 sm:p-9 shadow-glass backdrop-blur-2xl">
              {/* Top Card Eyebrow */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-sky-600" />
                  <span className="font-heading text-sm font-bold text-slate-900">
                    WhatsApp Course Dispatcher
                  </span>
                </div>
                <span className="font-mono text-[11px] text-amber-700 font-bold uppercase">
                  Instant Response
                </span>
              </div>

              {/* Course Selection Form */}
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-2">
                    1. Select Your Desired Course:
                  </label>
                  <div className="grid grid-cols-1 gap-2.5">
                    {COURSES.map((course) => {
                      const isSelected = course.id === selectedCourseId;
                      return (
                        <button
                          key={course.id}
                          type="button"
                          onClick={() => setSelectedCourseId(course.id)}
                          className={`flex items-center justify-between rounded-xl p-3.5 text-left border transition-all ${
                            isSelected
                              ? "border-sky-400 bg-sky-50/80 text-sky-900 shadow-sm"
                              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                          }`}
                        >
                          <div>
                            <div className="font-heading text-xs font-bold text-slate-900">
                              {course.name}
                            </div>
                            <div className="text-[10px] text-slate-500">
                              {course.tagline}
                            </div>
                          </div>
                          <div className="font-mono text-xs font-bold text-amber-700">
                            {formatLKR(course.priceLKR)}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Message Preview Box */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-2">
                    2. Automated Message Preview:
                  </label>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 font-mono text-xs text-slate-600 leading-relaxed">
                    &ldquo;Hello Apex Trading Academy, I am interested in the{" "}
                    <span className="text-slate-900 font-bold">{selectedCourse.name}</span> course priced at{" "}
                    <span className="text-amber-700 font-bold">{formatLKR(selectedCourse.priceLKR)}</span>. Please send me the enrollment details.&rdquo;
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-2">
                  <a
                    href={enrollLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#38B6FF] via-[#0ea5e9] to-[#0284c7] py-4 px-6 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-sky-500/40 active:scale-[0.98]"
                  >
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <span>Send Message on WhatsApp</span>
                    <ArrowRight className="h-4 w-4 opacity-70" />
                  </a>

                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
                    <ShieldAlert className="h-3.5 w-3.5 text-amber-600" />
                    <span>Direct connection &bull; No middleman &bull; Instant WhatsApp chat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
