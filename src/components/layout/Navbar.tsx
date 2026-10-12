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
          ? "border-b border-white/10 bg-brand-bg/85 py-3.5 shadow-glass backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-brand-bgSecondary/70 px-5 py-1.5 shadow-glass backdrop-blur-lg"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-brand-muted hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-brand-purple via-brand-purpleLight to-brand-gold" />
                )}
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
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-purple via-[#8545E0] to-brand-purpleLight px-5 py-2.5 text-xs font-semibold text-white shadow-purpleGlow transition-all duration-300 hover:scale-[1.03] hover:shadow-brand-purple/50 active:scale-[0.98]"
          >
            <MessageSquare className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
            <span>Enroll Now</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-brand-bgSecondary/80 text-white md:hidden hover:border-white/20"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-brand-bgSecondary/95 px-6 py-6 shadow-2xl backdrop-blur-2xl">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-brand-muted hover:bg-white/5 hover:text-white transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs text-brand-purpleLight">&rarr;</span>
              </a>
            ))}

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={whatsappInquiry.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-purpleLight px-5 py-3 text-sm font-semibold text-white shadow-purpleGlow"
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
