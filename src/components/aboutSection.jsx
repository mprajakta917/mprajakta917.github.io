import { useState } from "react";
import { Linkedin, Instagram, MessageCircle } from "lucide-react";

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      title: "Creative Content Writing",
      desc: "Tristique magna enim turpis commodo donec. Nam molestie quam id nisl aliquam. Pulvinar rhoncus praesent consequat pretium malesuada sed suscipit aliquet.",
    },
    {
      title: "Digital Marketing",
      desc: "Performance-driven digital marketing strategies.",
    },
    {
      title: "Social Media Marketing",
      desc: "Brand growth through social platforms.",
    },
    { title: "Project Management", desc: "Planning, execution, and delivery." },
    { title: "SEO/SM Management", desc: "Search visibility and optimization." },
  ];

  const skills = [
    "Content Writing",
    "Digital Marketing",
    "SEO",
    "Social Media",
    "Brand Strategy",
    "Project Management",
    "Analytics",
  ];

  return (
    <section id="about" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* ================= LEFT STICKY PROFILE ================= */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 bg-gray-100 rounded-3xl p-8 text-center">
            <div className="relative w-56 h-56 mx-auto rounded-full bg-[#24324A] overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-center items-center gap-5 mb-6 text-gray-600">
              <p className="text-md font-medium mb-4">Follow me :</p>
              <a
                href="#"
                className="w-10 h-10 rounded-full border flex items-center justify-center
               hover:bg-black hover:text-white transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border flex items-center justify-center
               hover:bg-black hover:text-white transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border flex items-center justify-center
               hover:bg-black hover:text-white transition"
              >
                <MessageCircle size={18} />
              </a>
            </div>

            <div className="flex justify-center gap-4">
              <button className="px-5 py-2 bg-black text-white rounded-full text-sm">
                Download Resume
              </button>
              <button className="px-5 py-2 border rounded-full text-sm">
                Hire Me
              </button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SCROLL CONTENT ================= */}
        <div className="lg:col-span-7 space-y-16">
          {/* ABOUT */}
          <div>
            <h2 className="text-6xl font-extrabold mb-4">
              More about <br /> Prajakta Meshram
            </h2>

            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi
              mi at ornare tempor. Urna ut quam massa eu tellus adipiscing quis.
            
              Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi
              mi at ornare tempor. Urna ut quam massa eu tellus adipiscing quis.
            </p>
          </div>

          {/* WHAT I DO */}
          <div>
            <h3 className="text-4xl font-bold mb-6">What I do</h3>

            <div className="space-y-4">
              {services.map((item, index) => (
                <div
                  key={item.title}
                  className="border-b pb-4 cursor-pointer"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-xl">{item.title}</h3>

                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition
            ${
              openIndex === index
                ? "bg-black text-white rotate-45"
                : "bg-yellow-400"
            }`}
                    >
                      <svg
                        className="w-6 h-6 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </span>
                  </div>

                  {openIndex === index && (
                    <p className="text-sm text-gray-600 mt-3 max-w-xl">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Skills</h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
