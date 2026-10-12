"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import { getGeneralInquiryWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowUpRight, Menu, X, MessageSquare } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Courses", href: "#courses" },
  { label: "Platforms", href: "#platforms" },
  { label: "Proof", href: "#proofs" },
  { label: "Community", href: "#community" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappInquiry = getGeneralInquiryWhatsAppUrl();

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/80 py-3.5 shadow-glass backdrop-blur-xl text-slate-900"
          : "bg-transparent py-5 text-slate-900"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full border border-slate-200/90 bg-white/90 px-3 py-1 shadow-sm backdrop-blur-md"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                  isActive
                    ? "bg-sky-50 text-sky-700 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappInquiry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-sky-600 hover:bg-sky-700 px-5 py-2.5 text-xs font-bold text-white shadow-sm shadow-sky-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
            <span>Enroll Now</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/90 text-slate-800 md:hidden hover:border-slate-300"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 px-6 py-6 shadow-2xl backdrop-blur-2xl">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs text-sky-600 font-bold">&rarr;</span>
              </a>
            ))}

            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3">
              <a
                href={whatsappInquiry.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#38B6FF] to-[#0284c7] px-5 py-3 text-sm font-semibold text-white shadow-md"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Enroll via WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
