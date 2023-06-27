import React from 'react'
import Image from "next/image";
import cuaHang from "@/assets/contact/cua-hang.jpg";

export const Guarantee = () => {
    return (
        <div className='custom_container pt-[125px] h-auto '>
            <div className="relative p-0 md:aspect-[16/7] aspect-[16/10] w-[full] mb-10">
                <Image
                    alt="content img"
                    className="rounded-[15px]"
                    src={cuaHang}
                    fill
                    layout="fill"
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className=' flex md:justify-between justify-evenly md:flex-row flex-col '>
                <div className='md:w-[35%] w-full bg-[#eeeff1] rounded-[10px] mb-10'>
                    <h1 className='lg:text-[25px] text-[20px] font-bold text-[#2b6cfe] px-5 pt-5 text-center'> XE ĐẠP ĐIỆN DUY ĐỨC</h1>
                    <div className='h-[1px] mx-5 bg-[#2b6cfe] mt-3' />
                    <p className='pl-5 pt-5 lg:text-[16px] text-[14px]'>Giờ đóng cửa - mở cửa: 8:00 - 21:00 </p>
                    <p className='pl-5 pt-5 lg:text-[16px] text-[14px]'>Hotline: 093 571 46 89 </p>
                    <p className='pl-5 pt-5 pb-3 lg:text-[16px] text-[14px]'>Địa chỉ: 215A Trần Hưng Đạo, Hoài Nhơn, Vietnam </p>
                </div>
                <div className=' md:w-[63%] w-full md:aspect-[16/7] aspect-[16/10] '>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d965.9895696535867!2d109.010516!3d14.429568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3168c559e502e0f1%3A0xdb2caa48ed40a6fe!2zMjE1IFRy4bqnbiBIxrBuZyDEkOG6oW8sIFAuIELhu5NuZyBTxqFuLCBIb8OgaSBOaMahbiwgQsOsbmggxJDhu4tuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1687652621339!5m2!1svi!2sus"
                        width="100%" height="92%" className='rounded-[10px] w' ></iframe>
                </div>
            </div>


        </div>
    )
}
