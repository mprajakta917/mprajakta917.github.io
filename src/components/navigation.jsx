import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e6d9c8] bg-[#f7f4ee]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#home" className="font-heading text-lg font-bold tracking-tight">
          Prajakta
          <span className="text-[#b8431f]">.</span>
        </a>

        <ul className="hidden items-center gap-5 xl:flex">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-[#3f3a33] transition hover:text-[#d24b24]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#1e3d36] px-4 py-2 text-sm text-white transition hover:bg-[#d24b24] xl:inline-flex"
        >
          Let&apos;s Work Together
        </a>

        <button
          type="button"
          className="rounded-full border border-[#e6d9c8] p-2 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#e6d9c8] bg-[#f7f4ee] px-5 py-4 xl:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-[#1e3d36] hover:bg-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-[#1e3d36] px-4 py-3 text-center text-sm text-white"
          >
            Let&apos;s Work Together
          </a>
        </div>
      )}
    </header>
  );
};

export default Navigation;
