import VoltGuardXanhNham from "@/assets/Volt-Guard/Voltguard-xanh.png";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tab from './Tab'


export const TopDetail = ({ product }) => {
  const [color, setColor] = useState("")

  const kichThuot = product?.describe?.kichThuot
  const dongCo = product?.describe?.dongCo
  const acQuy = product?.describe?.acQuy
  const thongSoKhac = product?.describe?.thongSoKhac

  useEffect(() => {
    if (product?.img?.Xanh) {
      setColor(product?.img?.Xanh)
    } else if (product?.img?.do) {
      setColor(product?.img?.do)
    } else if (product?.img?.cam) {
      setColor(product?.img?.cam)
    }
  }, [product?.img])


  const tabs = [
    {
      title: (<h1 className='text-[15px] font-bold'>KÍCH THƯỚT</h1>), content: (<><h3 className=' font-bold'>Dài x rộng x cao (mm) : <span className=' font-medium'>{kichThuot?.daiXrongXcao}</span></h3>
        <h3 className=' font-bold'>Khoảng sáng gầm xe : <span className=' font-medium'>{kichThuot?.khoangSangGamXe}</span></h3>
        <h3 className=' font-bold'>Chiều cao yên xe : <span className=' font-medium'>{kichThuot?.chieuCaoYen}</span></h3>
        <h3 className=' font-bold'>Dung tích cốp xe : <span className=' font-medium'>{kichThuot?.dungTichCopXe}</span></h3>
        <div className='h-[1px] w-full bg-[#2b6cfe] my-[15px]' /></>)
    },
    {
      title: (<h1 className='text-[15px] font-bold'>ĐỘNG CƠ</h1>), content: (<><h3 className=' font-bold'>Công suất định danh : <span className=' font-medium'>{dongCo?.congSuatDinhDanh}</span></h3>
        <h3 className=' font-bold'>Công suất tối đa : <span className=' font-medium'>{dongCo?.congSuatToiDa}</span></h3>
        <h3 className=' font-bold'>Tốc độ tối đa : <span className=' font-medium'>{dongCo?.tocDoToiDa}</span></h3>
        <div className='h-[1px] w-full bg-[#2b6cfe] my-[15px]' /></>)
    },
    {
      title: (<h1 className='text-[15px] font-bold'>ẮC QUY</h1>), content: (<><h3 className=' font-bold'>Loại ắc quy : <span className=' font-medium'>{acQuy?.loaiAcquy}</span></h3>
        <h3 className=' font-bold'>Dung lượng ắc quy : <span className=' font-medium'>{acQuy?.dungLuongAcQuy}</span></h3>
        <h3 className=' font-bold'>Độ dài quảng đường : <span className=' font-medium'>{acQuy?.doDaiQuangDuong}</span></h3>
        <div className='h-[1px] w-full bg-[#2b6cfe] my-[15px]' /></>)
    },
    {
      title: (<h1 className='text-[15px] font-bold'>THÔNG SỐ KHÁC</h1>), content: (<><h3 className=' font-bold'>Hệ thống phanh : <span className=' font-medium'>{thongSoKhac?.heThongPhanh}</span></h3>
        <h3 className=' font-bold'>Thông số lốp : <span className=' font-medium'>{thongSoKhac?.thongSoLop}</span></h3>
        <h3 className=' font-bold'>Hệ thống đèn : <span className=' font-medium'>{thongSoKhac?.heThongDen}</span></h3>
        <h3 className=' font-bold'>Hệ thống thông minh : <span className=' font-medium'>{thongSoKhac?.heThongThongMinh}</span></h3>
        <div className='h-[1px] w-full bg-[#2b6cfe] my-[15px]' /></>)
    }
  ];

  const handleClickColor = (color) => {
    setColor(color)
  }
  return (
    <div className=' flex lg:flex-row flex-col lg:justify-around justify-center w-full pt-[50px]'>
      <div className='md:w-[450px] w-full md:h-[350px] h-full flex items-center justify-center'>
        <div className='w-[82%] lg:mb-[20px] md:mb-[10px] mb-0 '>
          <Image src={color} />
        </div>
      </div>
      <div className='w-auto lg-mt-0 mt-5 '>
        <h1 className=' text-[25px] font-bold'>{product?.name.toUpperCase()}</h1>

        <div>
          <h2 className=' text-[18px] font-bold pt-[10px]'> Chọn màu :</h2>
          <div className=' flex pt-[15px]'>
            {product?.img?.do
              ? (<div className={`w-4 h-4 bg-[#bb0303] rounded-[50%] cursor-pointer mr-3 ${color === product?.img?.do
                ? "outline outline-offset-2 outline-[#2b6cfe] " : ""} `} onClick={() => { handleClickColor(product?.img?.do) }} />)
              : ""
            }

            {product?.img?.cam
              ? (<div className={`w-4 h-4 bg-[#f37227] rounded-[50%] cursor-pointer mr-3 ${color === product?.img?.cam
                ? "outline outline-offset-2 outline-[#2b6cfe] " : ""} `} onClick={() => { handleClickColor(product?.img?.cam) }} />)
              : ""
            }

            {product?.img?.vang
              ? (<div className={`w-4 h-4 bg-[#f3ce27] rounded-[50%] cursor-pointer mx-3 ${color === product?.img?.vang
                ? "outline outline-offset-2 outline-[#2b6cfe] " : ""} `} onClick={() => { handleClickColor(product?.img?.vang) }} />)
              : ""
            }

            {product?.img?.xanhNhat
              ? (<div className={`w-4 h-4 bg-[#05c5c5] rounded-[50%] cursor-pointer mx-3 ${color === product?.img?.xanhNhat
                ? "outline outline-offset-2 outline-[#2b6cfe] " : ""} `} onClick={() => { handleClickColor(product?.img?.xanhNhat) }} />)
              : ""
            }

            {product?.img?.hong
              ? (<div className={`w-4 h-4 bg-[#d443cd] rounded-[50%] cursor-pointer mx-3 ${color === product?.img?.hong
                ? "outline outline-offset-2 outline-[#2b6cfe] " : ""} `} onClick={() => { handleClickColor(product?.img?.hong) }} />)
              : ""
            }

            {product?.img?.xanh
              ? (<div className={`w-4 h-4 bg-[#03278a] rounded-[50%] cursor-pointer mx-3 ${color === product?.img?.xanh
                ? "outline outline-offset-2 outline-[#2b6cfe] " : ""} `} onClick={() => { handleClickColor(product?.img?.xanh) }} />)
              : ""
            }

            {product?.img?.xanhLa
              ? (<div className={`w-4 h-4 bg-[#038a68] rounded-[50%] cursor-pointer mx-3 ${color === product?.img?.xanhLa
                ? "outline outline-offset-2 outline-[#2b6cfe] " : ""} `} onClick={() => { handleClickColor(product?.img?.xanhLa) }} />)
              : ""
            }

            {product?.img?.trang
              ? (<div className={`w-4 h-4 bg-[#ebe8e8] rounded-[50%] cursor-pointer mx-3 ${color === product?.img?.trang
                ? "outline outline-offset-2 outline-[#2b6cfe] " : ""} `} onClick={() => { handleClickColor(product?.img?.trang) }} />)
              : ""
            }

            {product?.img?.den
              ? (<div className={`w-4 h-4 bg-[#000] rounded-[50%] cursor-pointer mx-3 ${color === product?.img?.den
                ? "outline outline-offset-2 outline-[#2b6cfe] " : ""} `} onClick={() => { handleClickColor(product?.img?.den) }} />)
              : ""
            }

            {product?.img?.denNham
              ? (<div className={`w-4 h-4 bg-[#222020] rounded-[50%] cursor-pointer mx-3 ${color === product?.img?.denNham
                ? "outline outline-offset-2 outline-[#2b6cfe] " : ""} `} onClick={() => { handleClickColor(product?.img?.denNham) }} />)
              : ""
            }

            {product?.img?.xam
              ? (<div className={`w-4 h-4 bg-[#a09d9d] rounded-[50%] cursor-pointer mx-3 ${color === product?.img?.xam
                ? "outline outline-offset-2 outline-[#2b6cfe] " : ""} `} onClick={() => { handleClickColor(product?.img?.xam) }} />)
              : ""
            }

            {product?.img?.nau
              ? (<div className={`w-4 h-4 bg-[#4e3a29] rounded-[50%] cursor-pointer mx-3 ${color === product?.img?.nau
                ? "outline outline-offset-2 outline-[#2b6cfe] " : ""} `} onClick={() => { handleClickColor(product?.img?.nau) }} />)
              : ""
            }
          </div>
        </div>
        <div className='pt-5'>
          <h1 className=' text-[17px] font-bold pt-[30px]'>THÔNG SỐ KỸ THUẬT:</h1>
          <Tab tabs={tabs} />

        </div>
      </div>
    </div>
  )
}
