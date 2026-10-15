const steps = [
  {
    number: "01",
    title: "Research & Discover",
    desc: "Understand the business, audience, competitors, market position, and current marketing performance.",
  },
  {
    number: "02",
    title: "Strategize & Plan",
    desc: "Define objectives, select suitable channels, map the customer journey, and create a practical marketing roadmap.",
  },
  {
    number: "03",
    title: "Execute & Create",
    desc: "Turn the strategy into campaigns, content, advertisements, SEO activities, and lead-generation initiatives.",
  },
  {
    number: "04",
    title: "Measure & Optimize",
    desc: "Review relevant KPIs, identify gaps, test improvements, and refine the strategy based on performance data.",
  },
];

export default function WorkProcessSection() {
  return (
    <section id="approach" className="px-5 py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-white px-6 py-10 ring-1 ring-[#e6d9c8] sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8431f]">
          Approach
        </p>
        <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            How I approach
            <br /> digital growth
          </h2>
          <a
            href="#contact"
            className="w-fit rounded-full bg-[#1e3d36] px-6 py-3 text-sm text-white transition hover:bg-[#d24b24]"
          >
            Let&apos;s Work Together
          </a>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number}>
              <p className="font-heading text-4xl font-semibold text-[#e37a4a]">
                {step.number}
              </p>
              <h3 className="font-heading mt-3 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f574e]">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
