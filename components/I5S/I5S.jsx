import Image from 'next/image'
import React from 'react'
import imgLeft from "@/assets/xe-dap-dien-I5s/xe-dap-dien-yadea-i5s.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const I5S = () => {
    return (
        <div className='custom_container pt-[100px] flex lg:flex-row flex-col-reverse justify-around items-center'>

            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[50%] w-[70%]">
                <div className=''>
                    <Image src={imgLeft} />
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__zoomIn" className="lg:w-[45%] w-[100%]">
                <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] lg:font-bold font-semibold'>Xe Đạp Điện Yadea I5S</h1>
                <p className=' xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-medium'>
                    Mẫu xe đạp thân thiện với học sinh công suất tiêu chuẩn 210W.
                    Động cơ vận hành ổn định và có khả năng chống nước, yên tâm di chuyển trong thời tiết mưa lớn.
                    Vận tốc tối đa của i5 nằm trong khoảng an toàn, không vượt quá 30km/h
                </p>
            </AnimationOnScroll>


        </div>
    )
}

export default I5S