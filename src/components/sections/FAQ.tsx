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
    "Hello BHATHI FOREX, I have a question regarding course admissions."
  );

  return (
    <section
      id="faq"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-brand-bgSecondary/20 border-t border-white/5"
    >
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-purpleLight mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-brand-purpleLight" />
            <span>CLARITY & TRANSPARENCY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-brand-muted">
            Everything you need to know about learning Forex and Cryptocurrency with BHATHI FOREX.
          </p>
        </div>

        {/* Accordion List */}
        <div ref={itemsRef} className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-brand-purple/50 bg-brand-card shadow-purpleGlow"
                    : "border-white/10 bg-brand-card/60 hover:border-white/20 hover:bg-brand-card/90"
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
                  <span className="font-heading text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 border-brand-purple bg-brand-purple text-white shadow-purpleGlow"
                        : "border-white/10 bg-brand-bgSecondary text-brand-muted"
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
                    className="border-t border-white/5 px-5 sm:px-6 pb-6 pt-2"
                  >
                    <p className="text-sm leading-relaxed text-brand-muted">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-brand-card/80 p-6 text-center backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading text-base font-bold text-white">
              Have a specific question not covered here?
            </h4>
            <p className="text-xs text-brand-muted mt-1">
              Reach out directly to our academy admissions team on WhatsApp.
            </p>
          </div>
          <a
            href={whatsappInquiry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-purpleLight px-5 py-2.5 text-xs font-bold text-white shadow-purpleGlow hover:scale-105 transition-all"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
