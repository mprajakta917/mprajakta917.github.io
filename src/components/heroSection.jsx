import heroImage from "../assets/heroImage.png";
import { StatsSection } from "./statsCards.jsx";

export function HeroSection() {
  return (
    <section id="home" className="w-full min-h-screen bg-white py-12">
      <div className="w-full p-8 grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* ================= HERO (80%) ================= */}
        <div className="lg:col-span-8">
          <div className="bg-[#24324A] rounded-3xl px-10 pt-10 pb-18 relative text-white overflow-hidden">
            {/* Subtitle */}
            <p className="text-center text-md mb-2 text-white/80">I, am</p>

            {/* HERO TITLE */}
            <h1 className="text-center text-[72px] md:text-[92px] lg:text-[110px] font-extrabold mb-28 leading-[0.95] tracking-tight">
              Digital Marketer
            </h1>

            {/* CONTENT GRID */}
            <div className="grid grid-cols-12 items-start gap-6">
              {/* LEFT */}
              <div className="col-span-12 lg:col-span-4 space-y-6">
                <p className="text-md leading-relaxed text-gray-200">
                  Certainly, I can help you create a description for your next
                  project.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Digital Marketer",
                    "Freelance Photographer",
                    "Content Writer",
                    "Social Media Marketer",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/95 text-black px-4 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* IMAGE */}
              <div className="col-span-12 lg:col-span-4 flex justify-center relative -mt-20 lg:-mt-44 z-20">
                <div className="absolute -z-10 w-72 h-72 bg-gray-400/20 blur-3xl rounded-full top-24"></div>

                <img
                  src={heroImage}
                  alt="Profile"
                  className="w-[400px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)]"
                />
              </div>

              {/* RIGHT */}
              <div className="col-span-12 lg:col-span-4">
                <p className="text-md leading-relaxed text-gray-200">
                  Certainly, I can help you create a description for your next
                  project.
                </p>
              </div>
            </div>

            {/* ================= CTA (OVERLAPPING IMAGE) ================= */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[62%] lg:top-[70%] z-30 flex flex-col items-center gap-4">
              <div className="bg-white rounded-full w-max p-2 flex gap-4 shadow-2xl">
                {["Portfolio", "Hire Me"].map((btn) => (
                  <button
                    key={btn}
                    className="px-8 py-2 rounded-full text-sm font-medium
                               bg-black text-white border border-black
                               hover:bg-white hover:text-black
                               transition-colors duration-200"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>

            {/* FOOTER BAR */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex flex-col items-center gap-3 text-center">
              <div className="flex items-center gap-2 text-md text-gray-200">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Available for freelance
              </div>

              <div className="flex gap-6 text-md text-white/80">
                <span className="cursor-pointer hover:text-white transition">
                  LinkedIn
                </span>
                <span className="cursor-pointer hover:text-white transition">
                  Instagram
                </span>
                <span className="cursor-pointer hover:text-white transition">
                  WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATS (20%) ================= */}
        <div className="lg:col-span-2 mt-10">
          <StatsSection />
        </div>
      </div>
    </section>
  );
}
