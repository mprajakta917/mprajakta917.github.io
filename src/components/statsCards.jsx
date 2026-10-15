const highlights = [
  { title: "5+", label: "Years of professional experience" },
  { title: "Strategy + Execution", label: "End-to-end marketing" },
  { title: "Multi-Industry", label: "EdTech, technology, events, and brands" },
  { title: "Growth-Focused", label: "Decisions tied to business goals" },
];

export function StatsSection() {
  return (
    <section aria-label="Professional highlights" className="mt-14">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl bg-white p-6 ring-1 ring-[#e6d9c8]"
          >
            <h3 className="font-heading text-2xl font-bold leading-tight text-[#1e3d36]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5f574e]">
              {item.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
