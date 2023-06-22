
import slide1 from "@/assets/hero/banner1.jpg";
import slide1Mobi from "@/assets/hero/banner1-mobi.jpg";
import slide2 from "@/assets/hero/banner2.jpg";
import slide2Mobi from "@/assets/hero/banner2-mobi.jpg";
import slide3 from "@/assets/hero/banner3.jpg";
import slide3Mobi from "@/assets/hero/banner3-mobi.jpg";
import slide4 from "@/assets/hero/banner4.jpg";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import Image from "next/image";

const dataSlider = [
    { src: slide1, srcMobi: slide1Mobi },
    { src: slide2, srcMobi: slide2Mobi },
    { src: slide3, srcMobi: slide3Mobi },
    { src: slide4, srcMobi: slide4 },
]



export const Hero = () => {
    const [screenMode, setScreenMode] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const mode = screenWidth < 768 ? 'mobile' : 'desktop';
            setScreenMode(mode);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [screenMode]);
    console.log(screenMode)
    return (
        <div className='  pt-[100px] w-full 2xl:h-[93vh] xl:h-[80vh] lg:h-[75vh] md:h-[65vh] h-[80vh] cursor-pointer '>

            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-[100%] w-full"
            >
                {dataSlider.map((slide, index) => (
                    <SwiperSlide>
                        <div className="">
                            <Image src={screenMode === 'desktop' ? slide.src : slide.srcMobi} fill layout="fill" style={{ objectFit: "contain" }} />
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}
