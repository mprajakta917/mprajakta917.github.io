const features = [
  {
    number: "01",
    title: "Digital Marketing Strategy",
    desc: "Develop marketing roadmaps aligned with business objectives, audience needs, competitor insights, channel selection, and measurable KPIs.",
  },
  {
    number: "02",
    title: "Social Media & Content Strategy",
    desc: "Plan content calendars, campaign concepts, creative direction, reels, captions, and platform-specific content to strengthen brand presence.",
  },
  {
    number: "03",
    title: "Performance Marketing & Paid Ads",
    desc: "Plan and manage Google Ads and Meta Ads campaigns, including audience research, creative testing, budget optimization, and lead-generation strategy.",
  },
  {
    number: "04",
    title: "SEO & Local SEO",
    desc: "Improve search visibility through keyword research, on-page optimization, content planning, competitor analysis, and Google Business Profile optimization.",
  },
];

const additional = [
  "Lead generation and conversion funnel planning",
  "Email and WhatsApp marketing",
  "Competitor and market research",
  "Website and landing-page marketing strategy",
  "E-commerce marketing",
  "Campaign analytics and reporting",
];

export default function FeatureCards() {
  return (
    <section id="services" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8431f]">
          Services
        </p>
        <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-heading text-4xl font-semibold sm:text-5xl">
            What I do
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-[#5f574e]">
            Strategy and execution across the channels that help a business get
            found, earn attention, and generate qualified leads.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-white p-7 ring-1 ring-[#e6d9c8] transition hover:-translate-y-0.5 hover:ring-[#d24b24]"
            >
              <p className="font-heading text-sm font-bold text-[#b8431f]">
                {item.number}
              </p>
              <h3 className="font-heading mt-4 text-2xl font-bold">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5f574e]">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-[#1e3d36] p-7 text-white sm:p-8">
          <h3 className="font-heading text-xl font-bold">Additional services</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {additional.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-white/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e07a3d]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
