import { StatsSection } from "./statsCards.jsx";
import { site } from "../site.js";

const tags = [
  "Digital Strategy",
  "Performance Marketing",
  "SEO",
  "Social Media",
  "Lead Generation",
];

export function HeroSection() {
  return (
    <section id="home" className="px-5 pb-8 pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8431f]">
              {site.name} ({site.also})
            </p>
            <h1 className="font-heading mt-4 text-5xl font-semibold leading-[0.95] text-[#1e3d36] sm:text-6xl lg:text-7xl">
              Digital
              <span className="block italic text-[#d24b24]">marketing</span>
              strategist
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5c564c] sm:text-lg">
              I turn business goals into digital growth strategies through SEO,
              performance marketing, social media, and data-driven campaigns.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#portfolio"
                className="rounded-full bg-[#1e3d36] px-6 py-3 text-center text-sm text-white transition hover:bg-[#d24b24]"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[#1e3d36] px-6 py-3 text-center text-sm transition hover:border-[#e07a3d] hover:bg-white"
              >
                Let&apos;s Work Together
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[#e6d9c8] bg-white px-3 py-1 text-xs text-[#3f3a33]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] bg-[#1e3d36] p-8 text-white lg:col-span-5">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#d24b24]/50 blur-2xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2b56b]">
              Available for freelance
            </p>
            <p className="font-heading relative mt-6 text-3xl font-bold leading-snug">
              Every business is different. Your marketing strategy should be,
              too.
            </p>
            <p className="relative mt-6 text-sm text-white/70">{site.location}</p>
            <div className="relative mt-8 flex flex-wrap gap-4 text-sm">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-[#e07a3d] underline-offset-4"
              >
                LinkedIn
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-[#e07a3d] underline-offset-4"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-[#e07a3d] underline-offset-4"
              >
                Email
              </a>
            </div>
          </aside>
        </div>
        <StatsSection />
      </div>
    </section>
  );
}
