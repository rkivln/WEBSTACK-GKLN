export function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#F8F8F8] border-b border-black/10"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16 2xl:px-24 h-[72px] md:h-[80px] flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M11 0L13.5 8.5H22L15.25 13.75L17.75 22L11 16.75L4.25 22L6.75 13.75L0 8.5H8.5L11 0Z"
              fill="#82FF1F"
            />
          </svg>
          <span className="text-[#2F2F2F] font-semibold text-xl sm:text-2xl">
            Gokulan
          </span>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-[38px]">
          <button
            onClick={() => scrollTo("about")}
            className="text-[#2F2F2F] font-semibold text-[17px] tracking-[-0.03em] hover:opacity-70 transition-opacity"
          >
            About&amp;Contacts
          </button>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden lg:flex items-center gap-1 text-[15px] font-semibold tracking-[-0.03em]">
            <span className="text-[#2F2F2F] opacity-60">Email:</span>
            <a
              href="mailto:gokulan.rkivln@gmail.com"
              className="text-[#2F2F2F] hover:text-[#82FF1F] transition-colors"
            >
              gokulan.rkivln@gmail.com
            </a>
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-[#2F2F2F] text-white font-semibold text-sm px-4 sm:px-[18px] py-[10px] rounded-[30px] hover:bg-[#82FF1F] hover:text-[#2F2F2F] transition-all"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
