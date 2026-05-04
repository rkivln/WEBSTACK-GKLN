const tools = [
  { name: "Figma", level: 95 },
  { name: "Webflow", level: 85 },
  { name: "React", level: 80 },
  { name: "Framer", level: 75 },
  { name: "Notion", level: 90 },
];

export function About() {
  return (
    <section
      id="about"
      className="bg-[#F8F8F8] py-16 sm:py-20 lg:py-24"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16 2xl:px-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-[#2F2F2F] opacity-40 font-semibold text-[13px] tracking-[-0.03em] mb-4">
              About me
            </p>

            {/* Avatar */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://cdn.codia.ai/figma/3kUU6VJzWcwMIBXL8GcOsH/img-33b66657f2b51db2.png"
                alt="Gokulan"
                className="w-[72px] h-[72px] rounded-full object-cover"
              />
              <div>
                <p className="text-[#2F2F2F] font-semibold text-[22px] tracking-[-0.03em]">
                  Gokulan A
                </p>
                <p className="text-[#2F2F2F] opacity-40 font-semibold text-[15px] tracking-[-0.03em]">
                  Web-designer, developer
                </p>
              </div>
            </div>

            <h2
              className="text-[#2F2F2F] font-semibold leading-tight mb-6 text-[34px] sm:text-[42px] lg:text-[52px]"
            >
              I blend creativity with{" "}
              <span className="text-[#82FF1F]">technical expertise</span>
            </h2>

            <p className="text-[#2F2F2F] opacity-60 font-medium text-base sm:text-[17px] leading-relaxed mb-8">
              With over 2 years of experience in digital design and development,
              I help brands turn ideas into seamless digital experiences.
              From pixel-perfect interfaces to performant web apps.
            </p>

            <a
              href="/gokulan-resume.pdf"
              download="Gokulan-Resume.pdf"
              className="bg-[#82FF1F] text-[rgba(0,0,0,0.8)] font-semibold text-base sm:text-[17px] px-5 sm:px-6 py-3.5 sm:py-4 rounded-[27px] inline-flex items-center gap-3 hover:brightness-110 transition-all"
            >
              Download CV
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2V10M7 10L3 6M7 10L11 6" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          {/* Right */}
          <div className="min-w-0">
            <p className="text-[#2F2F2F] opacity-40 font-semibold text-[13px] tracking-[-0.03em] mb-8">
              My creative toolbox
            </p>

            <div className="space-y-6">
              {tools.map((tool) => (
                <div key={tool.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#2F2F2F] font-semibold text-[17px] tracking-[-0.03em]">
                      {tool.name}
                    </span>
                    <span className="text-[#2F2F2F] opacity-40 font-semibold text-[15px]">
                      {tool.level}%
                    </span>
                  </div>
                  <div className="h-[3px] bg-[#2F2F2F]/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#82FF1F] rounded-full"
                      style={{ width: `${tool.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="mt-10 sm:mt-12 flex flex-wrap gap-2">
              {["E-commerce", "Corporate website", "Landing page", "Blog", "Social network"].map((cat) => (
                <span
                  key={cat}
                  className="bg-[#2F2F2F]/5 text-[#2F2F2F] font-semibold text-[13px] tracking-[-0.03em] px-4 py-2 rounded-full hover:bg-[#82FF1F] hover:text-[#2F2F2F] cursor-pointer transition-all"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
