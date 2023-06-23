import Image from 'next/image'
import React from 'react'
import imgRight from "@/assets/nishiki/xe-dap-dien-nishiki.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Nishiki = () => {
    return (
        <div className='custom_container pt-[100px] flex lg:flex-row flex-col-reverse justify-between items-center'>

            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[50%] w-[100%]">
                <div className=''>
                    <Image src={imgRight} />
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[45%] w-[100%]">
                <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] lg:font-bold font-semibold'>Xe Đạp Điện 133 Nishiki</h1>
                <p className=' xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-medium'>Nishiki Nhật Bản với thương hiệu hơn 50 năm của Nhật Bản.màu sắc đa dạng kết hợp với màu đen chủ đạo tạo cùng bô tem mác mang dấu ấn riêng nên hình ảnh “chất lừ” mà nhiều bạn trẻ đang tìm kiếm.</p>
            </AnimationOnScroll>
        </div>
    )
}
