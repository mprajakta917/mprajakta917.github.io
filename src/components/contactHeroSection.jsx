import { site } from "../site.js";

export default function ContactHeroSection() {
  return (
    <footer className="bg-[#1e3d36] px-5 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-heading text-2xl font-bold">
            {site.name}
            <span className="text-[#f2b56b]">.</span>
          </p>
          <p className="mt-1 text-sm text-white/65">
            {site.role} · {site.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a href={`mailto:${site.email}`} className="text-white/80 hover:text-white">
            Email
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white"
          >
            WhatsApp
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
