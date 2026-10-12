"use client";

import React from "react";
import Logo from "../ui/Logo";
import { ACADEMY_CONFIG } from "@/data/academy";
import { COURSES } from "@/data/courses";
import { ShieldAlert, ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-slate-200 bg-white/80 pt-16 pb-12 overflow-hidden backdrop-blur-md">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-[#7FCDFF]/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Logo size="lg" />
            <p className="mt-2 text-sm text-slate-600 max-w-sm leading-relaxed">
              Apex Trading Academy is an elite trading academy dedicated to demystifying global currency and cryptocurrency markets through systematic price action, mathematical risk management, and disciplined execution.
            </p>
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5 text-amber-600 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                A TO Z TRADING
              </span>
              <span>&bull;</span>
              <span>Based in Sri Lanka</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a href="#hero" className="hover:text-slate-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  About the Mentor
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-slate-900 transition-colors">
                  Educational Features
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-slate-900 transition-colors">
                  Four-Phase Roadmap
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-slate-900 transition-colors">
                  Courses & Pricing
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-slate-900 transition-colors">
                  Trading Platforms
                </a>
              </li>
              <li>
                <a href="#proofs" className="hover:text-slate-900 transition-colors">
                  Live Trade Proofs
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-emerald-600 transition-colors text-emerald-600 font-semibold flex items-center gap-1">
                  <span>Student WhatsApp Forum</span>
                  <span className="rounded-full bg-emerald-100 px-1.5 py-0.2 text-[9px] text-emerald-700">
                    1.5K+
                  </span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-900 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-900 transition-colors">
                  Contact Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Course Programs */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Academy Courses
            </h4>
            <ul className="space-y-3 text-xs text-slate-600">
              {COURSES.map((course) => (
                <li key={course.id} className="flex items-center justify-between">
                  <a
                    href="#courses"
                    className="hover:text-slate-900 transition-colors flex items-center gap-1.5"
                  >
                    <span>{course.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </a>
                  <span className="font-mono text-amber-700 font-bold">
                    LKR {course.priceLKR.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <span className="block font-heading text-xs font-bold text-sky-700">
                Enrollment Inquiries
              </span>
              <p className="mt-1 text-[11px] text-slate-600">
                {ACADEMY_CONFIG.displayPhone} &bull;{" "}
                <a
                  href={`mailto:${ACADEMY_CONFIG.email}`}
                  className="hover:text-sky-600 transition-colors underline decoration-slate-300 underline-offset-2"
                >
                  {ACADEMY_CONFIG.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Financial Risk Disclaimer */}
        <div className="my-8 rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-rose-700">
                Financial Risk Disclaimer
              </h5>
              <p className="text-xs leading-relaxed text-slate-600">
                Forex and cryptocurrency trading involve substantial financial risk. Educational content does not guarantee profits and is not personalized financial advice.
                Never trade with capital you cannot afford to lose. All content provided by Apex Trading Academy is for educational purposes only.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-4">
          <p>
            &copy; {currentYear} {ACADEMY_CONFIG.brandName} &bull; All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built with precision for disciplined traders</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
