const projects = [
  {
    id: 1,
    title: "EchoStream Entertainment",
    category: "E-commerce",
    year: "2024",
    imageUrl: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "PulseTech Innovations",
    category: "Corporate website",
    year: "2024",
    imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "EchoStream Entertainment",
    category: "Landing page",
    year: "2024",
    imageUrl: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "Cut & Sew",
    category: "E-commerce",
    year: "2023",
    imageUrl: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    title: "SilverLynx Technologies",
    category: "Corporate website",
    year: "2023",
    imageUrl: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F8F8F8] py-24"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      <div className="max-w-[1600px] mx-auto px-[290px]">
        <h2 className="text-[#2F2F2F] font-semibold text-[36px] tracking-[-0.04em] mb-14">
          Selected work
        </h2>

        <div className="space-y-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border-t border-[#2F2F2F]/10 py-6 flex items-center gap-8 cursor-pointer hover:bg-black/[0.02] transition-colors px-0"
            >
              {/* Thumbnail */}
              <div className="w-[200px] h-[130px] rounded-lg overflow-hidden flex-shrink-0 bg-[#E0E0E0]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <p className="text-[#2F2F2F] opacity-40 text-[13px] font-semibold tracking-[-0.03em] mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-[#2F2F2F] font-semibold text-[22px] tracking-[-0.04em]">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-[#2F2F2F] opacity-40 text-[15px] font-semibold">
                    {project.year}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#2F2F2F]/20 flex items-center justify-center group-hover:bg-[#82FF1F] group-hover:border-[#82FF1F] transition-all">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7H12M12 7L7 2M12 7L7 12"
                        stroke="#2F2F2F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[#2F2F2F]/10" />
        </div>
      </div>
    </section>
  );
}
