import { Twitter, Linkedin, Dribbble, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      id="contact"
      className="bg-[#111111]"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* Stats ticker */}
      <div className="bg-[#171717] border-t border-[#262626] py-5 sm:py-6">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16 2xl:px-24 flex items-center gap-8 sm:gap-16 overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#82FF1F" opacity="0.15" />
              <circle cx="16" cy="16" r="6" fill="#82FF1F" />
            </svg>
            <span className="font-medium text-lg sm:text-[26px] text-white">
              <span className="text-[#82FF1F]">2+</span> / years of experience
            </span>
          </div>
          <div className="w-px h-5 bg-[#262626]" />
          <div className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#82FF1F" opacity="0.15" />
              <circle cx="16" cy="16" r="6" fill="#82FF1F" />
            </svg>
            <span className="font-medium text-lg sm:text-[26px] text-white">
              <span className="text-[#82FF1F]">&gt;95%</span> / client retention rate
            </span>
          </div>
          <div className="w-px h-5 bg-[#262626]" />
          <div className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#82FF1F" opacity="0.15" />
              <circle cx="16" cy="16" r="6" fill="#82FF1F" />
            </svg>
            <span className="font-medium text-lg sm:text-[26px] text-[#82FF1F]">
              18 / satisfied clients
            </span>
          </div>
          <div className="w-px h-5 bg-[#262626]" />
          <div className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#82FF1F" opacity="0.15" />
              <circle cx="16" cy="16" r="6" fill="#82FF1F" />
            </svg>
            <span className="font-medium text-lg sm:text-[26px] text-white">
              <span className="text-[#82FF1F]">14</span> / projects finished
            </span>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16 2xl:px-24 pt-14 sm:pt-20 pb-10 sm:pb-12">
        {/* Top row */}
        <div className="flex items-center justify-between gap-6 mb-10 sm:mb-12">
          <div className="flex items-center gap-2">
            <div
              className="w-2.5 h-2.5 rounded-full bg-[#82FF1F]"
              style={{ boxShadow: "0 0 12px 0 rgba(130, 255, 31, 0.32)" }}
            />
            <span className="text-white font-semibold text-sm sm:text-[15px]">
              Available for freelance
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollTop}
              className="hidden sm:inline text-white opacity-30 font-semibold text-[15px] hover:opacity-60 transition-opacity"
            >
              Back to top
            </button>
            <button
              onClick={scrollTop}
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:bg-[#82FF1F] transition-colors"
            >
              <ArrowUp size={18} className="text-[#2F2F2F]" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#262626] mb-10 sm:mb-12" />

        {/* Large heading */}
        <h2
          className="text-white font-light leading-[1] text-[42px] min-[390px]:text-[48px] sm:text-[64px] lg:text-[86px] 2xl:text-[96px] mb-10 sm:mb-16"
        >
          {"Let's create something"}
          <br />
          extraordinary{" "}
          <span className="text-[#82FF1F]">together.</span>
        </h2>

        <p className="text-white opacity-60 font-semibold text-lg sm:text-[22px] mb-10 sm:mb-16">
          {"Let's make an impact"}
        </p>

        {/* Contact info + CTA grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-12 sm:mb-16">
          {/* Left: contact details */}
          <div className="space-y-10">
            <div>
              <p className="text-white opacity-30 font-semibold text-[15px] tracking-[-0.03em] mb-3">
                Contact me
              </p>
              <a
                href="mailto:gokulan.rkivln@gmail.com"
                className="text-white font-semibold text-[24px] min-[390px]:text-[27px] sm:text-[34px] lg:text-[39px] break-all hover:text-[#82FF1F] transition-colors"
              >
                gokulan.rkivln<span className="text-[#82FF1F]">@</span>gmail.com
              </a>
            </div>
            <p className="text-white/50 font-medium text-base sm:text-[18px] leading-relaxed max-w-md">
              Hit me up if you&apos;re looking for a fast, reliable web-designer who can bring your vision to life
            </p>
          </div>

          {/* Right: person card + CTA */}
          <div className="flex flex-col items-start gap-8">
            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src="https://cdn.codia.ai/figma/3kUU6VJzWcwMIBXL8GcOsH/img-33b66657f2b51db2.png"
                alt="Gokulan"
                className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full object-cover"
              />
              <div>
                <p className="text-white font-semibold text-[22px] tracking-[-0.03em] mb-1">
                  Gokulan A
                </p>
                <p className="text-white opacity-30 font-semibold text-[15px] tracking-[-0.03em] mb-3">
                  Web-designer, developer
                </p>
                <div className="flex items-center gap-2.5">
                  <a href="#" className="opacity-50 hover:opacity-100 transition-opacity text-white">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="opacity-50 hover:opacity-100 transition-opacity text-white">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="opacity-50 hover:opacity-100 transition-opacity text-white">
                    <Dribbble size={18} />
                  </a>
                </div>
              </div>
            </div>

            <a
              href="mailto:gokulan.rkivln@gmail.com"
              className="bg-[#82FF1F] text-[rgba(0,0,0,0.8)] font-semibold text-base sm:text-[19px] px-5 sm:px-6 py-3.5 sm:py-4 rounded-[27px] flex items-center gap-3 hover:brightness-110 transition-all"
            >
              Book a call
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#262626] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M11 0L13.5 8.5H22L15.25 13.75L17.75 22L11 16.75L4.25 22L6.75 13.75L0 8.5H8.5L11 0Z"
                fill="#82FF1F"
              />
            </svg>
            <span className="text-white font-semibold text-xl sm:text-2xl">
              Webstack
            </span>
          </div>

          <p className="text-white opacity-60 font-semibold text-sm sm:text-[15px]">
            Copyright &copy; GKLN Design and Development, 2026
          </p>

         
        </div>
      </div>
    </footer>
  );
}
