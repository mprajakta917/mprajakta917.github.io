export default function TestimonialsSlider() {
  return (
    <section id="testimonials" className="px-5 py-20">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-[#1e3d36] text-white md:grid-cols-12">
        <div className="border-b border-white/10 p-8 sm:p-10 md:col-span-4 md:border-b-0 md:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f2b56b]">
            Testimonials
          </p>
          <h2 className="font-heading mt-4 text-4xl font-semibold leading-tight">
            What people say
          </h2>
          <p className="mt-6 text-xs leading-relaxed text-white/55">
            Sample layout only. Replace this with verified feedback before
            treating it as a published testimonial.
          </p>
        </div>

        <blockquote className="relative p-8 sm:p-12 md:col-span-8">
          <span
            aria-hidden="true"
            className="font-heading absolute left-6 top-2 text-8xl leading-none text-[#d24b24] sm:left-10"
          >
            “
          </span>
          <p className="font-heading relative mt-10 text-2xl font-medium italic leading-snug sm:text-3xl">
            Working together helped us bring more structure and clarity to our
            digital marketing activities. Prajakta approaches projects with
            creativity, ownership, and a focus on business objectives.
          </p>
          <footer className="relative mt-8 text-sm text-[#f2b56b]">
            [Client / Manager Name] · [Role / Company]
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
