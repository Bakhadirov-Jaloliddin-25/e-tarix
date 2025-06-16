import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import hero from "../assets/images/uzbekistan.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    // title: "Birlik va taraqqiyot",
    // desc: "Bizning kuchimiz – birlikda!",
    img: hero,
  },
  {
    // title: "Zamonaviy O‘zbekiston",
    // desc: "Yangi imkoniyatlar davri boshlandi.",
    img: hero,
  },
  {
    // title: "Kelajak biz bilan",
    // desc: "Har bir qadam muvaffaqiyat sari.",
    img: hero,
  },
];

function HeroSwiper() {
  return (
    <div className="w-full max-w-[1368.14px] mx-auto h-[250px] sm:h-[300px] md:h-[357px] px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white rounded-xl transition-opacity duration-500"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* <div className="bg-black bg-opacity-50 p-4 sm:p-6 md:p-8 rounded-xl text-center max-w-2xl">
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg">{slide.desc}</p>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSwiper;
