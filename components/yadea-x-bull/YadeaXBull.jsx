import Image from 'next/image'
import React from 'react'
import imgRight from "@/assets/yadea-x-bull/XBull.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const YadeaXBull = () => {
    return (
        <div className='custom_container pt-[100px] flex lg:flex-row flex-col-reverse justify-between items-center'>

            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[50%] w-[100%]">
                <div className=''>
                    <Image src={imgRight} />
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[45%] w-[100%]">
                <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] lg:font-bold font-semibold'>Xe Đạp Điện Yadea X-Bull</h1>
                <p className=' xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-medium'>Đẳng cấp dẫn đầu dòng "xe điện bò".
                    chất lượng vận hành ổn định, độ an toàn và tuổi thọ sử dụng cao.
                    X-bull phù hợp với các bạn học sinh nhỏ tuổi đi học,
                    hoặc người nội trợ di chuyển nhẹ nhàng hàng ngày.
                </p>
            </AnimationOnScroll>
        </div>
    )
}
