export function Hero() {
  return (
    <section
      className="min-h-screen bg-[#F8F8F8] pt-[72px] md:pt-[80px]"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-80px)] max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16 2xl:px-24 flex flex-col justify-between">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(300px,420px)] 2xl:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] items-center gap-8 lg:gap-14 py-8 lg:py-8 flex-1">
          <div className="flex-1 min-w-0">
            {/* Top label */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5 sm:mb-6">
              <span className="text-[#2F2F2F] font-semibold text-sm sm:text-[15px] opacity-60">
                Digital Designer
              </span>
              <span className="w-2 h-2 rounded-full bg-[#82FF1F]" aria-hidden="true" />
              <span className="text-[#2F2F2F] font-semibold text-sm sm:text-[15px] opacity-60">
                from
              </span>
              <span className="text-[#2F2F2F] font-semibold text-sm sm:text-[15px]">
                Puducherry
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-[#2F2F2F] font-light leading-[1] text-[38px] min-[390px]:text-[42px] sm:text-[56px] lg:text-[64px] 2xl:text-[78px] mb-7 sm:mb-8">
              Hi! I&apos;m <span className="text-[#82FF1F]">GOKULAN</span>
              <br />a <em className="not-italic text-[#2F2F2F]">Digital Designer</em>
              <br />from <span className="text-[#2F2F2F]">Puducherry</span>
              <br />
              turning your ideas into
              <br />
              pixel-perfect realities
            </h1>

            {/* CTA */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#82FF1F] text-[rgba(0,0,0,0.8)] font-semibold text-base sm:text-[18px] px-5 sm:px-6 py-3.5 sm:py-4 rounded-[27px] flex items-center gap-3 hover:brightness-110 transition-all"
              >
                View my work
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7H12M12 7L7 2M12 7L7 12"
                      stroke="#2F2F2F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="w-full max-w-[280px] min-[390px]:max-w-[310px] sm:max-w-[380px] lg:max-w-none mx-auto lg:mx-0 lg:justify-self-end">
            <div className="aspect-[4/5] lg:max-h-[52vh] rounded-[22px] sm:rounded-[24px] overflow-hidden bg-[#2F2F2F] shadow-[0_24px_70px_rgba(47,47,47,0.18)]">
              <img
                src="/Gokulan_linkedin_profile.jpeg"
                alt="Gokulan"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Stats ticker */}
        <div className="bg-[#171717] py-4 px-0 -mx-5 sm:-mx-8 lg:-mx-16 2xl:-mx-24 flex items-center gap-12 overflow-x-auto">
          <div className="flex items-center gap-8 sm:gap-12 px-5 sm:px-8 lg:px-16 2xl:px-24 whitespace-nowrap">
            <div className="flex items-center gap-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#82FF1F" opacity="0.2" />
                <circle cx="16" cy="16" r="6" fill="#82FF1F" />
              </svg>
              <span className="font-medium text-lg sm:text-[22px] 2xl:text-[26px] text-white">
                <span className="text-[#82FF1F]">8+</span> / years of experience
              </span>
            </div>
            <div className="w-px h-6 bg-[#262626]" />
            <div className="flex items-center gap-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#82FF1F" opacity="0.2" />
                <circle cx="16" cy="16" r="6" fill="#82FF1F" />
              </svg>
              <span className="font-medium text-lg sm:text-[22px] 2xl:text-[26px] text-white">
                <span className="text-[#82FF1F]">&gt;95%</span> / client retention rate
              </span>
            </div>
            <div className="w-px h-6 bg-[#262626]" />
            <div className="flex items-center gap-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#82FF1F" opacity="0.2" />
                <circle cx="16" cy="16" r="6" fill="#82FF1F" />
              </svg>
              <span className="font-medium text-lg sm:text-[22px] 2xl:text-[26px] text-[#82FF1F]">
                18 / satisfied clients
              </span>
            </div>
            <div className="w-px h-6 bg-[#262626]" />
            <div className="flex items-center gap-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#82FF1F" opacity="0.2" />
                <circle cx="16" cy="16" r="6" fill="#82FF1F" />
              </svg>
              <span className="font-medium text-lg sm:text-[22px] 2xl:text-[26px] text-white">
                <span className="text-[#82FF1F]">14</span> / projects finished
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
