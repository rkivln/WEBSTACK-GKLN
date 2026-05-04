const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start with a deep-dive into your brand, goals, and audience to align on vision.",
  },
  {
    num: "02",
    title: "Strategy & Wireframes",
    desc: "Mapping out the user journey and page architecture before any pixels are pushed.",
  },
  {
    num: "03",
    title: "Visual Design",
    desc: "Crafting high-fidelity mockups with pixel-perfect attention to typography and layout.",
  },
  {
    num: "04",
    title: "Development & Launch",
    desc: "Building the final product with clean, performant code, then shipping it live.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Founder, EchoStream",
    text: "Gokulan delivered beyond expectations. The site perfectly captures our brand.",
  },
  {
    name: "James K.",
    role: "CEO, PulseTech",
    text: "Professional, fast, and incredibly talented. Would work with him again in a heartbeat.",
  },
];

const stats = [
  { value: "95+", label: "Happy clients", accent: true },
  { value: "10+", label: "Years exp.", accent: false },
  { value: "24+", label: "Awards", accent: false },
];

export function HowItWorks() {
  return (
    <section
      className="bg-[#111111] py-16 sm:py-20 lg:py-24"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16 2xl:px-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <p className="text-white opacity-40 font-semibold text-[13px] tracking-[-0.03em] mb-4">
              Process
            </p>
            <h2
              className="text-white font-semibold leading-tight mb-10 sm:mb-12 text-[34px] sm:text-[42px] lg:text-[52px]"
            >
              How it works
            </h2>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center group-hover:border-[#82FF1F] transition-colors">
                    <span className="text-white opacity-40 font-semibold text-[12px]">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[18px] tracking-[-0.03em] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-white opacity-40 font-medium text-[15px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="text-white opacity-40 font-semibold text-[13px] tracking-[-0.03em] mb-8">
              Don&apos;t take my word for it
            </p>

            <div className="space-y-4 mb-12">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-[#171717] border border-[#262626] rounded-2xl p-6">
                  <p className="text-white opacity-60 font-medium text-[15px] leading-relaxed tracking-[-0.02em] mb-4">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-semibold text-[15px] tracking-[-0.03em]">{t.name}</p>
                    <p className="text-white opacity-40 font-semibold text-[13px]">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`rounded-xl sm:rounded-2xl p-5 ${s.accent ? "bg-[#82FF1F]" : "bg-[#171717] border border-[#262626]"}`}
                >
                  <p
                    className={`font-semibold text-[28px] sm:text-[32px] mb-1 ${s.accent ? "text-[#2F2F2F]" : "text-white"}`}
                  >
                    {s.value}
                  </p>
                  <p
                    className={`font-semibold text-[13px] tracking-[-0.03em] ${s.accent ? "text-[#2F2F2F] opacity-70" : "text-white opacity-40"}`}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
