import Image from 'next/image'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const CardProduct = ({ title, subtitle, src, index }) => {

    return (
        <div className="pt-[60px] w-[300px] width-card ">

            <AnimationOnScroll animateIn="animate__zoomIn" className=" w-[100%]">
                <div className=''>
                    <Image src={src} />
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__zoomIn" className="w-[100%]">
                <h1 className='  xl:text-[20px] lg:text-[19px] md:text-[18px] text-[17px] lg:font-bold font-semibold'>{title}</h1>
                <p className=' xl:text-[16px] lg:text-[15px] md:text-[14px] text-[13px] font-medium pr-[15px]'>{subtitle}</p>
                <button
                    type="button"
                    class=" button_rotate_animation text-center shadow-box w-[100px] h-[37px] mt-[15px] mb-[20px] text-[14px] font-semibold leading-normal text-[#ffffff] rounded-[40.0783px] hover:bg-success-600 border-gray-950 bg-[#2b6cfe]  shadow-md"
                >
                    Xem Thêm
                </button>
            </AnimationOnScroll>

        </div>
    )
}

