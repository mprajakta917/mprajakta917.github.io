import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Cloud Sales Executive",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing accumsan nunc faucibus nibh at nisi nulla amet. Donec at facilisis diam ac enim nam ut.",
    },
    {
      name: "John Smith",
      role: "Cloud Sales Manager",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing accumsan nunc faucibus nibh at nisi nulla amet. Donec at facilisis diam ac enim nam ut.",
    },
    {
      name: "Olivia Wang",
      role: "Cloud Sales Executive",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing accumsan nunc faucibus nibh at nisi nulla amet. Donec at facilisis diam ac enim nam ut.",
    },
      {
      name: "Jane Doe",
      role: "Cloud Sales Executive",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing accumsan nunc faucibus nibh at nisi nulla amet. Donec at facilisis diam ac enim nam ut.",
    },  {
      name: "Jane Doe",
      role: "Cloud Sales Executive",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing accumsan nunc faucibus nibh at nisi nulla amet. Donec at facilisis diam ac enim nam ut.",
    },  {
      name: "Jane Doe",
      role: "Cloud Sales Executive",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing accumsan nunc faucibus nibh at nisi nulla amet. Donec at facilisis diam ac enim nam ut.",
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-14">
          What did my client says
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#E9EEF6] rounded-3xl p-8 h-full mb-8">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < item.rating ? "text-black" : "text-gray-400"}>
                      ★
                    </span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
