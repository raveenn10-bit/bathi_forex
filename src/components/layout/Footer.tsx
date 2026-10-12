"use client";

import React from "react";
import Logo from "../ui/Logo";
import { ACADEMY_CONFIG } from "@/data/academy";
import { COURSES } from "@/data/courses";
import { ShieldAlert, ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/10 bg-brand-bg pt-16 pb-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-brand-purple/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Logo size="lg" />
            <p className="mt-2 text-sm text-brand-muted max-w-sm leading-relaxed">
              BHATHI FOREX is an elite trading academy dedicated to demystifying global currency and cryptocurrency markets through systematic price action, mathematical risk management, and disciplined execution.
            </p>
            <div className="flex items-center gap-3 mt-2 text-xs text-brand-muted">
              <span className="inline-flex items-center gap-1.5 text-brand-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                A TO Z TRADING
              </span>
              <span>&bull;</span>
              <span>Based in Sri Lanka</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-muted">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About the Mentor
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  Educational Features
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">
                  Four-Phase Roadmap
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Courses & Pricing
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-white transition-colors">
                  Trading Platforms
                </a>
              </li>
              <li>
                <a href="#proofs" className="hover:text-white transition-colors">
                  Live Trade Proofs
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-white transition-colors text-emerald-400 font-semibold flex items-center gap-1">
                  <span>Student WhatsApp Forum</span>
                  <span className="rounded-full bg-emerald-400/20 px-1.5 py-0.2 text-[9px] text-emerald-400">
                    1.5K+
                  </span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Course Programs */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white mb-4">
              Academy Courses
            </h4>
            <ul className="space-y-3 text-xs text-brand-muted">
              {COURSES.map((course) => (
                <li key={course.id} className="flex items-center justify-between">
                  <a
                    href="#courses"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{course.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-60" />
                  </a>
                  <span className="font-mono text-brand-gold font-semibold">
                    LKR {course.priceLKR.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-white/5 bg-brand-bgSecondary/70 p-4">
              <span className="block font-heading text-xs font-bold text-brand-purpleLight">
                Enrollment Inquiries
              </span>
              <p className="mt-1 text-[11px] text-brand-muted">
                {ACADEMY_CONFIG.displayPhone} &bull;{" "}
                <a
                  href={`mailto:${ACADEMY_CONFIG.email}`}
                  className="hover:text-brand-purpleLight transition-colors underline decoration-white/20 underline-offset-2"
                >
                  {ACADEMY_CONFIG.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Financial Risk Disclaimer */}
        <div className="my-8 rounded-2xl border border-brand-bearish/20 bg-brand-bearish/5 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-brand-bearish shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-bearish">
                Financial Risk Disclaimer
              </h5>
              <p className="text-xs leading-relaxed text-brand-muted">
                Forex and cryptocurrency trading involve substantial financial risk. Educational content does not guarantee profits and is not personalized financial advice.
                Never trade with capital you cannot afford to lose. All content provided by BHATHI FOREX is for educational purposes only.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted pt-4">
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
