import Image from 'next/image'
import React from 'react'
import imgLeft from "@/assets/yadea-e3/e3-banner-product.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const YadeaE3 = () => {
    return (
        <div className='custom_container pt-[100px] flex lg:flex-row flex-col justify-around items-center'>

            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[45%] w-[100%]">
                <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] lg:font-bold font-semibold'>Xe Máy Điện Yadea E3</h1>
                <p className=' xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-medium'>Thiết kế
                    Tối giản mà không đơn giản.Cùng bạn xuyên qua mọi ngõ ngách, vượt qua mọi con đường đông đúc.</p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[30%] w-[60%]">
                <div className=''>
                    <Image src={imgLeft} />
                </div>
            </AnimationOnScroll>

        </div>
    )
}
