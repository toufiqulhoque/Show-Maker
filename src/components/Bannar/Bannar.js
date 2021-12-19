// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// import './swiper.css'
import React from 'react';
import { Carousel } from "react-bootstrap";
import './swiper.css'
// import SwiperCore, { Navigation } from "swiper";
// import useFetch from "../hooks/useFetch";
// import { Carousel } from "bootstrap";
// SwiperCore.use([Navigation]);

const Bannar = () => {
    // const { service } = useFetch();
    // console.log(service)

    return (
        <div>

            {/* <Swiper className="mySwiper ban">
                <SwiperSlide><img className="img-fluid" src="https://img.wallpapersafari.com/desktop/1920/1080/68/36/q36M2E.jpg" alt="" /> </SwiperSlide><SwiperSlide><img src="https://images5.alphacoders.com/329/thumb-1920-329544.jpg" alt="" /></SwiperSlide><SwiperSlide><img src="https://images6.alphacoders.com/423/423147.jpg" alt="" /></SwiperSlide>
            </Swiper> */}
            <Carousel fade className='box' >
                <Carousel.Item >
                    <img
                        height='965px'
                        className="d-block w-100 bannar"
                        src="https://img.wallpapersafari.com/desktop/1920/1080/68/36/q36M2E.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='m-auto'>Marvel</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height='965px'
                        className="d-block w-100 bannar"
                        src="https://wallpapercave.com/wp/wp2751453.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>DC</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height='965px'
                        className="d-block w-100 bannar"
                        src="https://wallpapercave.com/wp/wp3212730.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Deadpool</h1>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Bannar;