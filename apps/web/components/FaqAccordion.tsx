"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <div
          key={faq.question}
          className="overflow-hidden rounded-[16px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-5 py-4 text-left font-poppins text-[14px] font-semibold text-[#1E1E1E] transition-colors hover:bg-[#F7F7F7] md:px-8 md:py-5 md:text-[18px]"
          >
            {faq.question}
            <svg
              className={`ml-4 h-5 w-5 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="#7A33FF"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`grid transition-all duration-300 ${openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          >
            <div className="overflow-hidden">
              <p className="px-5 pb-5 font-roboto text-[13px] leading-[1.7] text-[#666666] md:px-8 md:pb-6 md:text-[15px]">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
