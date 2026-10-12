"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  GraduationCap,
  ShieldCheck,
  Users,
  MessageCircle,
} from "lucide-react";
import { getGeneralInquiryWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Clean SVG WhatsApp glyph
 */
function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
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

export default function MobileAppDock() {
  const [activeTab, setActiveTab] = useState<string>("hero");
  const whatsappUrl = getGeneralInquiryWhatsAppUrl().url;

  // Track active section as user scrolls
  useEffect(() => {
    const sectionIds = ["hero", "courses", "proofs", "community"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(id);
          return;
        }
      }
      setActiveTab("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId === "whatsapp") return; // Handled naturally via href

    e.preventDefault();
    setActiveTab(targetId);

    if (targetId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    {
      id: "hero",
      label: "Home",
      icon: Home,
      href: "#hero",
      badge: null,
    },
    {
      id: "courses",
      label: "Courses",
      icon: GraduationCap,
      href: "#courses",
      badge: null,
    },
    {
      id: "proofs",
      label: "Proofs",
      icon: ShieldCheck,
      href: "#proofs",
      badge: null,
    },
    {
      id: "community",
      label: "Forum",
      icon: Users,
      href: "#community",
      badge: "1.5K",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: WhatsAppIcon,
      href: whatsappUrl,
      isExternal: true,
      badge: null,
    },
  ];

  return (
    <nav
      aria-label="Mobile Navigation App Dock"
      className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-white/90 backdrop-blur-xl border-t border-slate-200/80 shadow-appDock pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] pt-1.5 px-2"
    >
      <div className="grid grid-cols-5 items-center justify-items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          const isWhatsApp = item.id === "whatsapp";

          return (
            <a
              key={item.id}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`group relative flex flex-col items-center justify-center py-1 px-1.5 w-full rounded-2xl transition-all duration-200 active:scale-95 ${
                isActive && !isWhatsApp
                  ? "text-sky-600 font-bold"
                  : isWhatsApp
                  ? "text-emerald-600 hover:text-emerald-700 font-semibold"
                  : "text-slate-500 hover:text-slate-800 font-medium"
              }`}
            >
              {/* Active Tab Top Indicator Pill */}
              {isActive && !isWhatsApp && (
                <span className="absolute -top-1.5 w-7 h-1 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 shadow-sm animate-pulse" />
              )}

              {/* Icon Container with Badge */}
              <div className="relative flex items-center justify-center h-6 w-6">
                <Icon
                  className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                    isActive && !isWhatsApp
                      ? "stroke-[2.5px] text-sky-600"
                      : isWhatsApp
                      ? "text-emerald-600"
                      : "stroke-[1.8px]"
                  }`}
                />

                {/* Forum Badge (1.5K VIP Community) */}
                {item.badge && (
                  <span className="absolute -top-1.5 -right-3.5 px-1 py-0.2 rounded-full text-[8.5px] font-black uppercase tracking-tight bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm ring-1 ring-white">
                    {item.badge}
                  </span>
                )}

                {/* WhatsApp Glowing Pulse Dot */}
                {isWhatsApp && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 ring-1.5 ring-white" />
                  </span>
                )}
              </div>

              {/* Micro-label */}
              <span
                className={`mt-1 text-[10px] tracking-tight leading-none text-center truncate ${
                  isActive && !isWhatsApp
                    ? "font-bold text-sky-600"
                    : isWhatsApp
                    ? "font-semibold text-emerald-600"
                    : "text-slate-500"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
