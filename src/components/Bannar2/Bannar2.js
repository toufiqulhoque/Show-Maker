import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import React from 'react';
import './Bannar2.css'



const Bannar2 = () => {
    return (
        <>
            <Swiper slidesPerView={4} centeredSlides={true} spaceBetween={30} grabCursor={true} pagination={{
                "clickable": true
            }} className="mySwiper">
                <SwiperSlide><img src="https://img.wallpapersafari.com/desktop/1920/1080/68/36/q36M2E.jpg" alt="" /></SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Bannar2;