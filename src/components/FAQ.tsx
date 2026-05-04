import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "I offer end-to-end digital design and development, from UX research and wireframing to high-fidelity UI design and front-end implementation using React, Webflow, or Framer.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A landing page typically takes 1-2 weeks, while a full website or app can take 4-8 weeks. I always provide a clear timeline after the discovery call.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. I work async-first with clients across Europe, North America, and Asia. Time zone differences are never a blocker.",
  },
  {
    q: "What is your pricing model?",
    a: "I work on both fixed-price and retainer models depending on the project. Reach out with your brief and I'll provide a detailed quote.",
  },
  {
    q: "Can you help with an existing design or only new projects?",
    a: "Both! I frequently jump into existing projects to audit, redesign, or add new features on top of an established foundation.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="bg-[#F8F8F8] py-16 sm:py-20 lg:py-24"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16 2xl:px-24">
        <h2 className="text-[#2F2F2F] font-semibold text-[32px] sm:text-[36px] mb-10 sm:mb-12">
          Got Questions?
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-[#2F2F2F]/10">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-5 py-5 sm:py-6 text-left group"
              >
                <span className="text-[#2F2F2F] font-semibold text-base sm:text-[18px] group-hover:text-[#82FF1F] transition-colors">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[#2F2F2F]/20 flex items-center justify-center group-hover:border-[#82FF1F] group-hover:bg-[#82FF1F] transition-all">
                  {open === i ? (
                    <Minus size={14} className="text-[#2F2F2F]" />
                  ) : (
                    <Plus size={14} className="text-[#2F2F2F]" />
                  )}
                </span>
              </button>
              {open === i && (
                <p className="text-[#2F2F2F] opacity-60 font-medium text-[15px] sm:text-[16px] leading-relaxed pb-6 pr-12">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
          <div className="border-t border-[#2F2F2F]/10" />
        </div>
      </div>
    </section>
  );
}
