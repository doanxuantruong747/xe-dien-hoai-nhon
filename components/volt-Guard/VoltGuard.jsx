import Image from 'next/image'
import React from 'react'
import imgRight from "@/assets/Volt-Guard/img-right1.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const VoltGuard = () => {
    return (
        <div className='custom_container pt-[100px] flex lg:flex-row flex-col justify-between items-center'>

            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[45%] w-[100%]">
                <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] lg:font-bold font-semibold'>Xe Máy Điện Yadea VoltGuard VFV</h1>
                <p className=' xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-medium'>Nổi bật với thiết kế cực “nịnh mắt” nhìn.
                    Phù hợp với thị hiếu của người Việt Nam.
                    Phong cách sang trọng của Châu Âu</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[55%] w-[100%]">
                <div className=''>
                    <Image src={imgRight} />
                </div>
            </AnimationOnScroll>
        </div>
    )
}
