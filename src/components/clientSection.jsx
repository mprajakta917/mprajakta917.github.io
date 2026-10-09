import { motion } from "framer-motion";

export default function ClientsSection() {
  const logos = Array.from({ length: 18 });

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* ================= LEFT: LOGO GRID (FROM LEFT) ================= */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {logos.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="bg-gray-100 rounded-xl h-24 flex items-center justify-center
                           hover:bg-gray-200 transition"
              >
                <img
                  src="https://dummyimage.com/120x40/000/fff&text=Logo"
                  alt="Client logo"
                  className="max-h-10 opacity-70"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT: CONTENT (FROM RIGHT) ================= */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">
            Clients I've <br /> worked with
          </h2>

          <p className="text-gray-600 mb-6 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi mi
            at ornare tempor. Urna ut quam massa eu tellus adipiscing quis.
            Tincidunt facilisis purus enim posuere gravida. Pellentesque est
            consequat risus viverra amet.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-8 py-3 bg-black text-white rounded-full
                       hover:bg-gray-800 transition"
          >
            Contact Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
