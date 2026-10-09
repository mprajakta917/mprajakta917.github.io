import {
  Facebook,
  Linkedin,
  Instagram,
  Dribbble,
  Home,
  Mail,
  Phone,
} from "lucide-react";

import heroImage from "../assets/heroImage.png"; // replace with your image

export default function ContactHeroSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center relative">

        {/* ================= IMAGE WITH ICONS ================= */}
        <div className="relative w-[300px] h-[520px] mx-auto mb-10">

          {/* Oval background */}
          <div className="absolute inset-0 bg-[#24324A] rounded-[999px]" />

          {/* Image */}
          <img
            src={heroImage}
            alt="Profile"
            className="relative z-10 w-full h-full object-cover rounded-[999px]"
          />

          {/* LEFT ICONS */}
          <div className="absolute left-[-48px] top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            {[Linkedin, Dribbble, Instagram].map((Icon, i) => (
              <span
                key={i}
                className="w-9 h-9 rounded-lg border bg-white flex items-center justify-center
                           hover:bg-black hover:text-white transition cursor-pointer"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>

          {/* RIGHT ICONS */}
          <div className="absolute right-[-48px] top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
              <span
                key={i}
                className="w-9 h-9 rounded-lg border bg-white flex items-center justify-center
                           hover:bg-black hover:text-white transition cursor-pointer"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>

        {/* ================= HEADING ================= */}
        <h2 className="text-4xl font-extrabold mb-10">
          Let&apos;s Discuss Your Project Now
        </h2>

        {/* ================= CONTACT INFO ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-10 rounded-full border flex items-center justify-center">
              <Home size={18} />
            </span>
            <div className="text-left">
              <p className="font-medium">Location</p>
              <p className="text-sm text-gray-600">Plaza XYZ Street, XYZ</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-10 rounded-full border flex items-center justify-center">
              <Mail size={18} />
            </span>
            <div className="text-left">
              <p className="font-medium">Email Address</p>
              <p className="text-sm text-gray-600">yourname@email.com</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-10 rounded-full border flex items-center justify-center">
              <Phone size={18} />
            </span>
            <div className="text-left">
              <p className="font-medium">Phone Number</p>
              <p className="text-sm text-gray-600">123-4567-890</p>
            </div>
          </div>

        </div>

        {/* ================= CTA BUTTONS ================= */}
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
            Contact Now
          </button>
          <button className="px-8 py-3 border rounded-full hover:bg-black hover:text-white transition">
            Hire Me
          </button>
        </div>

      </div>
    </section>
  );
}
