import Image from 'next/image'
import React from 'react'
import imgLeft from "@/assets/Igo/iGo.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Igo = () => {
    return (
        <div className='custom_container pt-[100px] flex lg:flex-row flex-col justify-around items-center'>

            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[45%] w-[100%]">
                <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] lg:font-bold font-semibold'>Xe Đạp Điện Yadea IGO</h1>
                <p className=' xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-medium'>Mẫu xe đạp thân thiện với học sinh và người nội trợ.
                    Được đánh giá là mẫu xe đạp điện ưu việt, đem đến trải nghiệm hoàn hảo hơn với người dùng nhờ tích hợp công nghệ cao và các trang bị xịn sò</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[55%] w-[70%]">
                <div className=''>
                    <Image src={imgLeft} />
                </div>
            </AnimationOnScroll>

        </div>
    )
}

export default Igo