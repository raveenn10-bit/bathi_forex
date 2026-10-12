"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileAutoScrollTrackProps {
  children: React.ReactNode[];
  speed?: number; // pixels per frame (default ~0.75)
  autoResumeDelay?: number; // ms to resume after touch (default 2500)
  direction?: "ltr" | "rtl"; // "ltr" = Left-to-Right drift, "rtl" = Right-to-Left drift
  className?: string;
  itemClassName?: string;
  badgeLabel?: string;
}

export default function MobileAutoScrollTrack({
  children,
  speed = 0.75,
  autoResumeDelay = 2500,
  direction = "ltr",
  className = "",
  itemClassName = "",
  badgeLabel = "Auto-Scroll Loop LTR",
}: MobileAutoScrollTrackProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef<boolean>(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const originalChildren = React.Children.toArray(children);
  const originalCount = originalChildren.length;

  // Duplicate cards for seamless continuous infinite wrap
  const loopedItems = [...originalChildren, ...originalChildren];

  // Set initial scroll offset for LTR direction so it can immediately drift leftwards
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || originalCount === 0) return;

    const timer = setTimeout(() => {
      const halfWidth = el.scrollWidth / 2;
      if (halfWidth > 0 && direction === "ltr" && el.scrollLeft === 0) {
        el.scrollLeft = halfWidth;
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [direction, originalCount]);

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
    if (!el || originalCount === 0) return;
    const halfWidth = el.scrollWidth / 2;
    if (halfWidth <= 0) return;

    // Seamless wrapping check during user scroll/drag
    if (el.scrollLeft >= halfWidth * 1.8) {
      el.scrollLeft -= halfWidth;
    } else if (el.scrollLeft <= 5) {
      el.scrollLeft += halfWidth;
    }

    const cardWidth = halfWidth / originalCount;
    if (cardWidth > 0) {
      const current = Math.floor((el.scrollLeft % halfWidth) / cardWidth);
      setActiveIndex(Math.min(Math.max(current, 0), originalCount - 1));
    }
  };

  // Continuous seamless infinite loop engine
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || originalCount === 0) return;

    let animId: number;

    const tick = () => {
      if (!isInteractingRef.current && el) {
        const halfWidth = el.scrollWidth / 2;
        if (halfWidth > 0) {
          if (direction === "ltr") {
            // Left-to-Right drift: cards glide smoothly towards the right
            el.scrollLeft -= speed;
            if (el.scrollLeft <= 0) {
              el.scrollLeft += halfWidth;
            }
          } else {
            // Right-to-Left drift: cards glide smoothly towards the left
            el.scrollLeft += speed;
            if (el.scrollLeft >= halfWidth) {
              el.scrollLeft -= halfWidth;
            }
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
  }, [speed, direction, originalCount]);

  // Jump to specific card index
  const scrollToIndex = (idx: number) => {
    handleInteractionStart();
    const el = scrollRef.current;
    if (!el || originalCount === 0) return;
    const halfWidth = el.scrollWidth / 2;
    const cardWidth = halfWidth / originalCount;
    el.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(idx);
    scheduleResume();
  };

  const handlePrev = () => {
    handleInteractionStart();
    const el = scrollRef.current;
    if (!el || originalCount === 0) return;
    const halfWidth = el.scrollWidth / 2;
    const cardWidth = halfWidth / originalCount;
    el.scrollBy({ left: -cardWidth, behavior: "smooth" });
    scheduleResume();
  };

  const handleNext = () => {
    handleInteractionStart();
    const el = scrollRef.current;
    if (!el || originalCount === 0) return;
    const halfWidth = el.scrollWidth / 2;
    const cardWidth = halfWidth / originalCount;
    el.scrollBy({ left: cardWidth, behavior: "smooth" });
    scheduleResume();
  };

  return (
    <div className={`md:hidden relative w-full ${className}`}>
      {/* Top Mobile Affordance Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 dark:bg-sky-500/20 border border-sky-400/25 dark:border-sky-500/40 px-2.5 py-0.5 text-[10px] font-semibold text-sky-600 dark:text-sky-400">
          <span className="relative flex h-1.5 w-1.5">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-sky-400 ${
                !isPaused ? "animate-ping opacity-75" : "opacity-0"
              }`}
            />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500" />
          </span>
          <span>{badgeLabel}</span>
          <span className="text-[9px] font-mono text-sky-500/80 dark:text-sky-400/80 uppercase">
            {isPaused ? "• Paused" : "• Loop"}
          </span>
        </div>

        {/* Micro Interaction Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous card"
            className="h-6 w-6 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 active:scale-90 transition-all shadow-xs"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next card"
            className="h-6 w-6 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 active:scale-90 transition-all shadow-xs"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Infinite Looping Scroll Track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        className="flex overflow-x-auto no-scrollbar gap-4 pb-3 touch-pan-x cursor-grab active:cursor-grabbing select-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {loopedItems.map((child, idx) => (
          <div
            key={idx}
            className={`shrink-0 w-[84vw] max-w-[325px] transition-transform duration-200 active:scale-[0.99] ${itemClassName}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Micro Progress Dots */}
      {originalCount > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {Array.from({ length: originalCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to item ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "w-6 bg-sky-500 shadow-xs"
                  : "w-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
