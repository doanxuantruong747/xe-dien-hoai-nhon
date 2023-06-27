import React from 'react'
import Image from "next/image";
import baoHanh from "@/assets/contact/maintain-banner.jpg";

export const Top = () => {
 return (
  <div className=''>
   <div className="relative p-0 md:aspect-[16/6] aspect-[16/10] w-[full] mb-10 flex justify-center">
    <Image
     alt="content img"
     className="rounded-[15px]"
     src={baoHanh}
     fill
     layout="fill"
     style={{ objectFit: "contain" }}
    />
    <div className=' absolute lg:top-[80px] md:top-[60px] top-[45px]'>
     <p className=' xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] font-bold'>Chính sách bảo hành xe máy điện Duy Đức</p>
     <p className=' xl:text-[30px] lg:text-[25px] font-semibold w-[60%]'>chính sách bảo hành hấp dẫn
      với những điều kiện chặt chẽ, đảm báo quyền
      lợi tối đa của khách hàng</p>
    </div>
   </div>
  </div>
 )
}
