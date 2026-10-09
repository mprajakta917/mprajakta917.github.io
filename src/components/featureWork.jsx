export default function FeaturedWork() {
  return (
    <section id="portfolio" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ================= LEFT FEATURE CARD ================= */}
        <div className="lg:col-span-5">
          <div className="lg:col-span-5 bg-[#F3F3F3] rounded-3xl p-4">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
                alt="Featured work"
                className="w-full h-[380px] object-cover"
              />

              {/* Category pill */}
              <span className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm">
                Photography
              </span>
            </div>

            <div className="mt-5 flex justify-between items-end">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Digital Marketing
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Vivamus nullam
                  fermentum consequat.
                </p>
              </div>

              <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
               <svg
                    className="w-6 h-6" // 👈 increase size here
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
              </button>
            </div>
          </div>
          {/* ================= CTA + PROJECT MANAGEMENT ROW ================= */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* CTA */}
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="w-40 h-40 border rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-black hover:text-white transition">
                <span>
                  <svg
                    className="w-10 h-10" // 👈 increase size here
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
                <span className="text-lg">Hire Me</span>
              </div>
            </div>

            {/* PROJECT MANAGEMENT CARD */}
            <div className="lg:col-span-3">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                  alt="Project Management"
                  className="w-full h-[200px] object-cover"
                />
                <span className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm">
                  Project Management
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ================= RIGHT CONTENT ================= */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Heading */}
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Featured Work</h2>
            <p className="text-gray-600 max-w-xl">
              Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi
              mi at ornare tempor. Una ut quam massa eu tellus adipiscing quis.
              Tincidunt facilisis purus enim posuere gravida.
            </p>
          </div>

          {/* Top small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
                alt=""
                className="w-full h-[180px] object-cover"
              />
              <span className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm">
                Digital Marketing
              </span>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b"
                alt=""
                className="w-full h-[180px] object-cover"
              />
              <span className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm">
                Photography
              </span>
            </div>
          </div>

          {/* Bottom large card */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt=""
              className="w-full h-[260px] object-cover"
            />
            <span className="absolute top-4 left-4 bg-yellow-400 px-4 py-1 rounded-full text-sm">
              SEO / SMM
            </span>
          </div>

          {/* Bottom info row */}
          <div className="flex justify-between items-end bg-[#F3F3F3] rounded-3xl p-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-sm text-gray-600 max-w-md">
                Lorem ipsum dolor sit amet consectetur. Vivamus nullam fermentum
                consequat.
              </p>
            </div>

            <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
             <svg
                    className="w-6 h-6" // 👈 increase size here
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
