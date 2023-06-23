import Image from 'next/image'
import React from 'react'
import imgLeft from "@/assets/M6i/m6i.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const YadeaM6i = () => {
    return (
        <div className='custom_container pt-[100px] flex lg:flex-row flex-col-reverse justify-around items-center'>

            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[50%] w-[80%]">
                <div className=''>
                    <Image src={imgLeft} />
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[45%] w-[100%]">
                <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] lg:font-bold font-semibold'>Xe Máy Điện Yadea M61</h1>
                <p className=' xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-medium'>
                    Phong cách dẫn đầu xu hướng giới trẻ. đáp ứng nhu cầu di chuyển của GenZ hiện nay.
                    Thiết kế mới lạ, ấn tượng cùng khả năng đi xa trên 100km vượt trội,
                    M6i đang dần trở thành mẫu xe được nhiều học sinh tin dùng.
                </p>
            </AnimationOnScroll>

        </div>
    )
}
