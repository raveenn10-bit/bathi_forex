"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileAutoScrollTrackProps {
  children: React.ReactNode[];
  speed?: number; // pixels per animation frame (default ~0.7)
  autoResumeDelay?: number; // ms to resume after touch (default 3000)
  className?: string;
  itemClassName?: string;
  badgeLabel?: string;
}

export default function MobileAutoScrollTrack({
  children,
  speed = 0.7,
  autoResumeDelay = 3000,
  className = "",
  itemClassName = "",
  badgeLabel = "Auto-Scrolls Left → Right",
}: MobileAutoScrollTrackProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef<boolean>(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const totalItems = React.Children.count(children);

  // Resume auto-scroll after idle timeout
  const scheduleResume = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
      setIsPaused(false);
    }, autoResumeDelay);
  }, [autoResumeDelay]);

  // Pause immediately upon user contact
  const handleInteractionStart = () => {
    isInteractingRef.current = true;
    setIsPaused(true);
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
  };

  const handleInteractionEnd = () => {
    scheduleResume();
  };

  // Track active slide based on scrollLeft
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el || totalItems === 0) return;
    const cardWidth = el.scrollWidth / totalItems;
    const current = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(current, 0), totalItems - 1));
  };

  // Continuous gentle horizontal drift engine
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;

    const tick = () => {
      if (!isInteractingRef.current && el) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll > 0) {
          if (el.scrollLeft >= maxScroll - 1) {
            // Smoothly reset back to the beginning once end is reached
            el.scrollLeft = 0;
          } else {
            el.scrollLeft += speed;
          }
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, [speed]);

  // Jump to specific card index
  const scrollToIndex = (idx: number) => {
    handleInteractionStart();
    const el = scrollRef.current;
    if (!el) return;
    const childrenNodes = el.children;
    if (childrenNodes[idx]) {
      const targetChild = childrenNodes[idx] as HTMLElement;
      el.scrollTo({
        left: targetChild.offsetLeft - 16,
        behavior: "smooth",
      });
    }
    scheduleResume();
  };

  const handlePrev = () => {
    scrollToIndex((activeIndex - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    scrollToIndex((activeIndex + 1) % totalItems);
  };

  return (
    <div className={`md:hidden relative w-full ${className}`}>
      {/* Top Mobile Affordance Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 px-2.5 py-0.5 text-[10px] font-semibold text-sky-600">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-sky-400 ${
                !isPaused ? "animate-ping opacity-75" : "opacity-0"
              }`}
            />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500" />
          </span>
          <span>{badgeLabel}</span>
        </div>

        {/* Micro Interaction Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous card"
            className="h-6 w-6 rounded-full bg-white/80 border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-white active:scale-90 transition-all shadow-sm"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next card"
            className="h-6 w-6 rounded-full bg-white/80 border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-white active:scale-90 transition-all shadow-sm"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 pb-3 scroll-smooth touch-pan-x"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {React.Children.map(children, (child, idx) => (
          <div
            key={idx}
            className={`snap-center shrink-0 w-[84vw] max-w-[325px] transition-transform duration-200 active:scale-[0.99] ${itemClassName}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Micro Progress Dots */}
      {totalItems > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {Array.from({ length: totalItems }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to item ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "w-6 bg-sky-500 shadow-sm"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
