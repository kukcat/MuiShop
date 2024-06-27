import { SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { ThemedSwiper } from '../ThemedSwiper';

export const Banner = () => {

  return (
    <ThemedSwiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop
      pagination
      navigation
      autoplay={{delay: 5000}}
    >
      <SwiperSlide>
        <img style={{width: "100%"}} src={require('./swiperImg/1.jpg')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width: "100%"}} src={require('./swiperImg/2.jpg')} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img style={{width: "100%"}} src={require('./swiperImg/3.jpg')} alt="" />
      </SwiperSlide>
    </ThemedSwiper>
  )
}
