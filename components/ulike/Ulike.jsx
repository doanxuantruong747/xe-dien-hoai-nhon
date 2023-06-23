import Image from 'next/image'
import React from 'react'
import imgRight from "@/assets/ulike/ulike.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Ulike = () => {
    return (
        <div className='custom_container pt-[100px] flex lg:flex-row flex-col justify-between items-center'>

            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[45%] w-[100%]">
                <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] lg:font-bold font-semibold'>Xe Máy Điện Yadea Ulike</h1>
                <p className=' xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-medium'>
                    YADEA ULike A1 thu hút sự chú ý của bạn ngay từ ánh nhìn đầu tiên,
                    mang cảm hứng mới lạ cho người lái,
                    đặc biệt phù hợp với những người có nhu cầu di chuyển nhiều,
                    bởi quãng đường hơn 90 km/ 1 lần sạc.</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[55%] w-[100%]">
                <div className=''>
                    <Image src={imgRight} />
                </div>
            </AnimationOnScroll>
        </div>
    )
}
