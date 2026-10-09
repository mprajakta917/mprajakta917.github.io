import { useState } from "react";

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

    const whatsappNumber = "9975724850";

    const text = `
Hello, I want to contact you.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Subject: ${form.subject}

Message:
${form.message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ================= LEFT: MAP ================= */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden h-[520px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d232.62039920195227!2d79.04869649559262!3d21.115500772740535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1767093882371!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* ================= RIGHT: FORM ================= */}
          <div className="lg:col-span-5 bg-[#F3F3F3] rounded-3xl p-8">
            <h2 className="text-3xl font-extrabold mb-3">Let’s Talk with me</h2>

            <p className="text-gray-600 mb-6 text-sm">
              Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi
              mi at ornare tempor.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="phone"
                  placeholder="Enter Your Number"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  name="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-black resize-none"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl
                           hover:bg-gray-800 transition font-medium"
              >
                Submit via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
