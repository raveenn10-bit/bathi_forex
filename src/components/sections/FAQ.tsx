"use client";

import React, { useState, useRef } from "react";
import { FAQS } from "@/data/faqs";
import { useGSAPContext, gsap, ScrollTrigger } from "@/hooks/useGSAPAnimations";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { getGeneralInquiryWhatsAppUrl } from "@/lib/whatsapp";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useGSAPContext(() => {
    gsap.fromTo(
      itemsRef.current?.children ? Array.from(itemsRef.current.children) : [],
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, containerRef);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappInquiry = getGeneralInquiryWhatsAppUrl(
    "Hello Apex Trading Academy, I have a question regarding course admissions."
  );

  return (
    <section
      id="faq"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-slate-50/50 dark:bg-[#0B0E14] border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 dark:border-sky-500/30 bg-sky-50 dark:bg-sky-950/40 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300 mb-3 shadow-sm">
            <HelpCircle className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
            <span>CLARITY & TRANSPARENCY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Everything you need to know about learning Forex and Cryptocurrency with Apex Trading Academy.
          </p>
        </div>

        {/* Accordion List */}
        <div ref={itemsRef} className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 shadow-glass ${
                  isOpen
                    ? "border-sky-300 dark:border-sky-500/60 bg-white dark:bg-[#121824] shadow-card"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#121824] hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 border-sky-400 bg-sky-500 text-white shadow-sm"
                        : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="border-t border-slate-100 dark:border-slate-800 px-5 sm:px-6 pb-6 pt-2"
                  >
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-6 text-center backdrop-blur-xl shadow-glass flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
              Have a specific question not covered here?
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Reach out directly to our academy admissions team on WhatsApp.
            </p>
          </div>
          <a
            href={whatsappInquiry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#38B6FF] to-[#0284c7] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-sky-500/20 hover:scale-105 transition-all"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
