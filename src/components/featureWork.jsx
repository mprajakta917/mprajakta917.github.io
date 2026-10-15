import { useState } from "react";

const projects = [
  {
    name: "Sahara Computer & Laptop",
    tag: "Social Media Strategy",
    desc: "Social media strategy, content planning, brand communication, promotional content, and creative direction for a computer and laptop business.",
  },
  {
    name: "Cosmical Event Planners",
    tag: "Freelance Marketing",
    desc: "End-to-end digital marketing, wedding and event content strategy, promotional campaigns, social media planning, and paid lead-generation activities.",
  },
  {
    name: "Boffin's Data Science Academy",
    tag: "EdTech Marketing",
    desc: "Digital marketing, course promotions, admissions-focused content, audience targeting, and lead-generation support for an education business.",
  },
  {
    name: "VK Softech Solutions LLP",
    tag: "Marketing & Operations",
    desc: "Digital marketing and service-delivery coordination across website development, app development, game development, graphic design, and digital marketing services.",
  },
  {
    name: "Travel Mage",
    tag: "Travel Marketing",
    desc: "Digital marketing and content strategy tailored to travel audiences, destination promotion, and brand communication.",
  },
  {
    name: "Commerce Ki Pathshala",
    tag: "Education",
    desc: "Client project for a commerce-education brand.",
  },
  {
    name: "Hoora Car Wash",
    tag: "Local Service",
    desc: "Client project for a car-wash business.",
  },
  {
    name: "S. R. Trading Company",
    tag: "Trading",
    desc: "Client project for a trading company.",
  },
  {
    name: "Dilli Delicacies",
    tag: "Food Brand",
    desc: "Client project for a food brand.",
  },
];

export default function FeaturedWork() {
  const [active, setActive] = useState(0);
  const project = projects[active];
  const number = String(active + 1).padStart(2, "0");

  return (
    <section id="portfolio" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8431f]">
              Portfolio
            </p>
            <h2 className="font-heading mt-3 text-4xl font-semibold sm:text-5xl">
              Featured work
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#5f574e]">
            Pick a project. All nine stay in the index, and the one you choose
            opens beside it.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-12">
          <article className="relative order-1 flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#1e3d36] p-8 text-white sm:p-10 lg:order-2 lg:col-span-7">
            <span
              aria-hidden="true"
              className="font-heading pointer-events-none absolute -right-2 -top-6 text-[7.5rem] leading-none text-white/10 sm:text-[9rem]"
            >
              {number}
            </span>
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[#f2b56b]">
              {project.tag}
            </p>
            <div className="relative mt-8">
              <h3 className="font-heading text-4xl font-semibold leading-[1.05] sm:text-5xl">
                {project.name}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                {project.desc}
              </p>
            </div>
            <p className="relative mt-10 font-heading text-lg text-[#f2b56b]">
              {number}
              <span className="text-white/40"> / 09</span>
            </p>
          </article>

          <ol className="order-2 lg:order-1 lg:col-span-5">
            {projects.map((item, index) => {
              const selected = index === active;
              return (
                <li key={item.name}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActive(index)}
                    className={`flex w-full items-baseline gap-4 border-b border-[#e6d9c8] py-3.5 text-left transition ${
                      selected ? "text-[#1c1915]" : "text-[#3f3a33] hover:text-[#1c1915]"
                    }`}
                  >
                    <span
                      className={`font-heading w-8 shrink-0 text-sm ${
                        selected ? "text-[#d24b24]" : ""
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-heading text-lg leading-tight sm:text-xl ${
                        selected ? "italic" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
