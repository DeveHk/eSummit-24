// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { A11y, Autoplay, Navigation } from "swiper";
import Slide from "./Slide";

const EventCarosel = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView="auto"
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        speed={2000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Navigation, A11y]}
        className="mySwiper "
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default EventCarosel;
