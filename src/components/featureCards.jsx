import { motion } from "framer-motion";

export default function FeatureCards() {
  const features = [
    {
      title: "Marketing",
      desc: "Lorem ipsum dolor sit amet consectetur. Vivamus nullam fermentum consequat.",
      bg: "bg-[#FFF4DB]",
      icon: (
        <svg
          className="w-12 h-12 stroke-gray-700"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 11v2a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1z" />
          <path d="M16 9a5 5 0 010 6" />
          <path d="M19 7a9 9 0 010 10" />
        </svg>
      ),
    },
    {
      title: "Personal Growth",
      desc: "Lorem ipsum dolor sit amet consectetur. Vivamus nullam fermentum consequat.",
      bg: "bg-[#E6FFD5]",
      icon: (
        <svg
          className="w-12 h-12 stroke-gray-700"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 3 3 5-5" />
        </svg>
      ),
    },
    {
      title: "Business Startup",
      desc: "Lorem ipsum dolor sit amet consectetur. Vivamus nullam fermentum consequat.",
      bg: "bg-[#D6DDEB]",
      icon: (
        <svg
          className="w-12 h-12 stroke-gray-700"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2v20" />
          <path d="M5 9c3-3 11-3 14 0" />
          <path d="M7 22h10" />
        </svg>
      ),
    },
    {
      title: "Award Winner",
      desc: "Lorem ipsum dolor sit amet consectetur. Vivamus nullam fermentum consequat.",
      bg: "bg-[#F1F5F9]",
      icon: (
        <svg
          className="w-12 h-12 stroke-gray-700"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M9 14l-1 7 4-2 4 2-1-7" />
        </svg>
      ),
    },
  ];

  return (
    <section  className="w-full pb-5 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}      // ⬇️ from bottom
              whileInView={{ opacity: 1, y: 0 }}  // ⬆️ to position
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className={`${item.bg} rounded-3xl p-8 text-center`}
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
