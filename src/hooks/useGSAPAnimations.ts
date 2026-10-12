"use client";

import { useEffect, useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Custom hook to safely run GSAP animations with automatic context cleanup,
 * safe scope handling, and prefers-reduced-motion awareness.
 */
export function useGSAPContext(
  animationCallback: (ctx: gsap.Context) => void,
  scopeRef?: RefObject<HTMLElement | null> | HTMLElement | null,
  dependencies: unknown[] = []
) {
  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Determine scope element safely
    let scopeElement: HTMLElement | undefined = undefined;
    if (scopeRef) {
      if ("current" in scopeRef) {
        scopeElement = scopeRef.current ?? undefined;
      } else if (scopeRef instanceof HTMLElement) {
        scopeElement = scopeRef;
      }
    }

    // Pass `self` to prevent closure TDZ ReferenceError
    const ctx = gsap.context((self) => {
      animationCallback(self);
    }, scopeElement);

    return () => {
      ctx.revert(); // Automatically clean up all timelines and ScrollTriggers
    };
  }, dependencies);
}

export { gsap, ScrollTrigger };
