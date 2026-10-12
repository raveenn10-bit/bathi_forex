"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  variant?: "pill" | "icon";
}

export default function ThemeToggle({
  className = "",
  variant = "pill",
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`h-9 w-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 animate-pulse ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className={`relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-sm transition-all duration-300 hover:scale-105 hover:border-sky-400 active:scale-95 ${className}`}
      >
        {isDark ? (
          <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="h-4 w-4 text-sky-600 transition-transform duration-300 hover:-rotate-12" />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative flex items-center gap-2 rounded-full border border-slate-200/90 dark:border-slate-700/80 bg-white/90 dark:bg-slate-900/90 px-3 py-1.5 text-xs font-semibold shadow-sm transition-all duration-300 hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-md active:scale-95 ${className}`}
    >
      <div className="relative flex h-4 w-4 items-center justify-center">
        {isDark ? (
          <Sun className="h-3.5 w-3.5 text-amber-400 transition-transform group-hover:rotate-45" />
        ) : (
          <Moon className="h-3.5 w-3.5 text-sky-600 transition-transform group-hover:-rotate-12" />
        )}
      </div>
      <span className="font-heading text-[11px] font-bold tracking-wider uppercase text-slate-700 dark:text-slate-200">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
