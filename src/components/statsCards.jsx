import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * end);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function StatsSection() {
  const stats = [
    {
      value: 251,
      suffix: "+",
      label: "Completed Projects",
      bg: "#FFD86A",
      text: "text-black",
    },
    {
      value: 12,
      suffix: "+",
      label: "Years of Experience",
      bg: "#9BE870",
      text: "text-black",
    },
    {
      value: 370,
      suffix: "+",
      label: "Happy Clients",
      bg: "#24324A",
      text: "text-white",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-1">
        <div className="grid grid-cols-1 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className={`rounded-3xl p-10 text-center ${stat.text}`}
              style={{ backgroundColor: stat.bg }}
            >
              {/* 🔢 COUNTING NUMBER */}
              <h3 className="text-5xl font-extrabold mb-3">
                <CountUp end={stat.value} />
                {stat.suffix}
              </h3>

              <p className="text-sm opacity-80 mb-3">
                {stat.label}
              </p>

              {/* ⭐ STARS FOR HAPPY CLIENTS */}
              {stat.label === "Happy Clients" && (
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-yellow-400"
                      viewBox="0 0 1000 1000"
                    >
                      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                    </svg>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
