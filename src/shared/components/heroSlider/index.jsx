import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import slider from '../../../assets/slider.webp'
import slider2 from '../../../assets/book-2.png'
const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log("slide change")}
    >
  
    <SwiperSlide >
<div >
<img src={slider} alt=""  />
</div>
        </SwiperSlide>
      <div className="prev" />
      <div className="next" />
    </Swiper>
  );
};

export default HeroSlider;
