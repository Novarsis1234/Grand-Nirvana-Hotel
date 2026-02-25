import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const FoodAutoSlider = () => {
  const images = [
    "/food1.webp",
    "/food5.avif",
    "/food6.avif",
    "/food8.avif",
    "/food9.avif",
    "/food4.jpg",
    "/food7.webp",
    "/food11.avif",
    "/food12.avif",
    "/food10.avif",
  ];

  return (
    <section className="py-28 bg-[#FBF7F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-sm text-[#DC2626] mb-3">
            Our Special Dishes
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F4C3A]">
            Fresh & Delicious <span className="text-black">Food Gallery</span>
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-full overflow-hidden shadow-xl border-8 border-white mx-auto w-[230px] h-[230px]">
                <img
                  src={`/Images/${img}`}
                  alt={`Food ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default FoodAutoSlider;
