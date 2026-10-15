import { useState } from "react";
import { site } from "../site.js";

const fieldClass =
  "mt-1.5 w-full rounded-2xl border border-[#e6d9c8] bg-[#f3ecdf] px-4 py-3 text-sm outline-none transition focus:border-[#d24b24] focus:bg-white";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Hello, I want to contact you.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Subject: ${form.subject}

Message:
${form.message}
    `;

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
        <div className="rounded-[2rem] bg-[#1e3d36] p-8 text-white sm:p-10 lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f2b56b]">
            Contact
          </p>
          <h2 className="font-heading mt-3 text-4xl font-semibold leading-tight">
            Let&apos;s discuss your next project
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Looking for a digital marketing professional who understands both
            strategy and execution? Let&apos;s discuss your business goals,
            identify growth opportunities, and build a marketing approach
            tailored to your needs.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-white/50">Name</dt>
              <dd className="mt-1">
                {site.name} ({site.also})
                <span className="block text-white/70">{site.role}</span>
              </dd>
            </div>
            <div>
              <dt className="text-white/50">Location</dt>
              <dd className="mt-1">{site.location}</dd>
            </div>
            <div>
              <dt className="text-white/50">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="hover:text-[#f2b56b]">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/50">Phone / WhatsApp</dt>
              <dd className="mt-1">
                <a href={`tel:${site.phoneTel}`} className="hover:text-[#f2b56b]">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/50">LinkedIn</dt>
              <dd className="mt-1">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#f2b56b]"
                >
                  prajakta-meshram-digitalmarketer
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={site.resume}
            className="mt-8 inline-flex rounded-full bg-white px-5 py-2.5 text-sm text-[#1e3d36]"
          >
            Download Resume
          </a>
        </div>

        <div className="rounded-[2rem] bg-white p-8 ring-1 ring-[#e6d9c8] sm:p-10 lg:col-span-7">
          <h3 className="font-heading text-2xl font-bold">Contact me</h3>
          <p className="mt-2 text-sm text-[#5f574e]">
            Send a note and it will open in WhatsApp so we can continue the
            conversation there.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Name
                <input
                  name="name"
                  required
                  onChange={handleChange}
                  className={fieldClass}
                />
              </label>
              <label className="text-sm font-medium">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  onChange={handleChange}
                  className={fieldClass}
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Phone
                <input name="phone" onChange={handleChange} className={fieldClass} />
              </label>
              <label className="text-sm font-medium">
                Subject
                <input name="subject" onChange={handleChange} className={fieldClass} />
              </label>
            </div>
            <label className="block text-sm font-medium">
              Message
              <textarea
                name="message"
                rows="5"
                required
                onChange={handleChange}
                className={`${fieldClass} resize-none`}
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-[#1e3d36] py-3 text-sm text-white transition hover:bg-[#d24b24] sm:w-auto sm:px-8"
            >
              Submit via WhatsApp
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-[2rem] ring-1 ring-[#e6d9c8]">
        <iframe
          title="Map of Nagpur"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d232.62039920195227!2d79.04869649559262!3d21.115500772740535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1767093882371!5m2!1sen!2sin"
          className="h-72 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
