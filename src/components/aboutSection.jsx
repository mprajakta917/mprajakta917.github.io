import { site } from "../site.js";

const skills = [
  "Digital Strategy",
  "Performance Marketing",
  "SEO",
  "Social Media",
  "Content Strategy",
  "Lead Generation",
  "Paid Ads",
  "Campaign Analytics",
];

export default function AboutSection() {
  return (
    <section id="about" className="px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8431f]">
              About
            </p>
            <div className="mt-6 rounded-[2rem] bg-[#1e3d36] p-8 text-white">
              <p className="font-heading text-5xl font-semibold text-[#f2b56b]">
                PM
              </p>
              <h2 className="font-heading mt-6 text-3xl font-bold leading-tight">
                {site.name}
              </h2>
              <p className="mt-1 text-white/70">{site.also}</p>
              <p className="mt-4 text-sm text-white/80">{site.role}</p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={site.resume}
                  className="rounded-full bg-white px-5 py-2.5 text-center text-sm text-[#1e3d36]"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/30 px-5 py-2.5 text-center text-sm"
                >
                  Let&apos;s Work Together
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h2 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            More about {site.name} ({site.also})
          </h2>
          <div className="mt-6 space-y-4 text-[#5c564c] leading-relaxed">
            <p>
              I&apos;m a Digital Marketing Strategist with 5+ years of
              professional experience across digital marketing, business
              operations, content strategy, SEO, social media marketing, and
              paid advertising.
            </p>
            <p>
              My approach combines creative thinking with strategic planning
              and performance analysis. I work to understand each
              business&apos;s goals, identify its target audience, and build
              marketing strategies that improve online visibility, generate
              qualified leads, and support sustainable growth.
            </p>
            <p>
              From managing digital marketing for an EdTech academy to
              overseeing marketing and service delivery in the technology
              sector and developing freelance strategies for brands, I&apos;ve
              gained experience across diverse industries.
            </p>
          </div>

          <blockquote className="font-heading mt-8 border-l-4 border-[#e07a3d] pl-5 text-2xl italic leading-snug text-[#1e3d36]">
            Every business is different. Your marketing strategy should be, too.
          </blockquote>

          <h3 className="font-heading mt-12 text-2xl font-bold">Skills</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-white px-4 py-2 text-sm text-[#3f3a33] ring-1 ring-[#e6d9c8]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
