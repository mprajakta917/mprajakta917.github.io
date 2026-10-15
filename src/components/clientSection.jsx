const roles = [
  {
    title: "Digital Marketing Strategist",
    type: "Freelance",
    company: "Cosmical Event Planners Pvt. Ltd.",
    dates: "Jul 2025 – Present",
    desc: "End-to-end marketing, content planning, paid lead generation, and digital campaign strategy.",
    current: true,
  },
  {
    title: "Digital Marketing & Operations Strategist",
    type: "Full-time",
    company: "VK Softech Solutions LLP",
    dates: "Apr 2023 – May 2025",
    desc: "Digital marketing strategy, operations, campaign coordination, and service delivery.",
  },
  {
    title: "Digital Marketing & Operations Executive",
    type: "Full-time",
    company: "Boffin's Data Science Academy",
    dates: "Feb 2021 – Mar 2023",
    desc: "Education marketing, course promotion, admissions support, and digital content.",
  },
];

export default function ClientsSection() {
  return (
    <section id="experience" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8431f]">
          Experience
        </p>
        <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-heading max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
            Professional experience
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-[#5f574e]">
            A progression from education marketing into technology operations
            and independent strategy work.
          </p>
        </div>

        <ol className="relative mt-14 space-y-6">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-2 top-6 w-px bg-[#dccdb8]"
          />
          {roles.map((role) => (
            <li key={role.company} className="relative pl-12">
              <span
                aria-hidden="true"
                className={`absolute left-2 top-8 h-4 w-4 -translate-x-1/2 rounded-full ring-4 ring-[#f3ecdf] ${
                  role.current ? "bg-[#d24b24]" : "bg-[#1e3d36]"
                }`}
              />
              <article
                className={`rounded-[1.75rem] p-6 sm:p-8 ${
                  role.current
                    ? "bg-[#1e3d36] text-white"
                    : "bg-white text-[#1c1915] ring-1 ring-[#e6d9c8]"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p
                    className={`text-sm font-medium ${
                      role.current ? "text-[#f2b56b]" : "text-[#b8431f]"
                    }`}
                  >
                    {role.dates}
                  </p>
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      role.current
                        ? "bg-white/10 text-white"
                        : "bg-[#f8e6da] text-[#b8431f]"
                    }`}
                  >
                    {role.current ? "Now · Freelance" : role.type}
                  </span>
                </div>
                <h3 className="font-heading mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                  {role.title}
                </h3>
                <p
                  className={`font-heading mt-1 text-lg italic ${
                    role.current ? "text-white/80" : "text-[#3f3a33]"
                  }`}
                >
                  {role.company}
                </p>
                <p
                  className={`mt-4 max-w-2xl text-sm leading-relaxed ${
                    role.current ? "text-white/75" : "text-[#5f574e]"
                  }`}
                >
                  {role.desc}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
