import Image from 'next/image'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const CardListProduct = ({ title, subtitle, src, index }) => {

    return (
        <div className={` pt-[100px] flex justify-between items-center ${index % 2 === 0
            ? " lg:flex-row flex-col "
            : "card-reverse"} `}>

            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[45%] w-[100%]">
                <h1 className='  xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] lg:font-bold font-semibold'>{title}</h1>
                <p className=' xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-medium'>{subtitle}</p>
                <button
                    type="button"
                    class=" button_rotate_animation text-center shadow-box w-[110px] h-[40px] mt-[20px] mb-[20px] text-[16px] font-semibold leading-normal text-[#ffffff] rounded-[40.0783px] hover:bg-success-600 border-gray-950 bg-[#000080]  shadow-md"
                >
                    Xem Thêm
                </button>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[55%] w-[100%]">
                <div className=''>
                    <Image src={src} />
                </div>
            </AnimationOnScroll>
        </div>
    )
}

