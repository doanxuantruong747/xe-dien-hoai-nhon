import Image from 'next/image'
import React from 'react'
import imgLeft from "@/assets/odora/Odora-S1.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Odora = () => {
    return (
        <div className='custom_container pt-[100px] flex lg:flex-row flex-col-reverse justify-around items-center'>
            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[55%] w-[70%]">
                <div className=''>
                    <Image src={imgLeft} />
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[45%] w-[100%]">
                <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] lg:font-bold font-semibold'>Xe Máy Điện Yadea ODORA S1</h1>
                <p className=' xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-medium'>Thiết kế phong cách Ý hiện đại, thời trang, toát lên sự cá tính và năng động hơn. Các chi tiết trên toàn bộ thân vỏ đều làm chỉn chu, sắc nét.</p>
            </AnimationOnScroll>

        </div>
    )
}

export default Odora