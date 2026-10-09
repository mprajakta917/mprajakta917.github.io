export default function WorkProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Strategy",
      bg: "bg-[#FFF4DB]",
      desc: "Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi mi at ornare tempor.",
    },
    {
      number: "02",
      title: "Design",
      bg: "bg-[#E6FFD5]",
      desc: "Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi mi at ornare tempor.",
    },
    {
      number: "03",
      title: "Development",
      bg: "bg-[#E9EEF6]",
      desc: "Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi mi at ornare tempor.",
    },
    {
      number: "04",
      title: "Quality check",
      bg: "bg-[#F5F5F5]",
      desc: "Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi mi at ornare tempor.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 ">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-12 rounded-3xl border">
        {/* ================= LEFT (STICKY CONTENT) ================= */}
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">
              How I work on <br /> projects
            </h2>

            <p className="text-gray-600 mb-8 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi
              mi at ornare tempor. Urna ut quam massa eu tellus adipiscing quis.
              Tincidunt facilisis purus enim posuere gravida.
            </p>

            <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Contact Now
            </button>
          </div>
        </div>

        {/* ================= RIGHT (SCROLLING CARDS) ================= */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${step.bg} rounded-3xl p-8 relative`}
              >
                {/* Step number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-black/10">
                  {step.number}
                </span>

                {/* Icon placeholder */}
                <div className="mb-6">
                  <div className="w-12 h-12 border rounded-full flex items-center justify-center">
                    ●
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
