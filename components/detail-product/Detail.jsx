import Image from 'next/image'


export const Detail = ({ product }) => {
  const imgDetails = product?.imgDetails
  return (
    <div className=' custom_container pt-[50px] '>
      {imgDetails?.map((item, index) => (
        <div className=' w-full flex flex-col justify-center items-center pt-[50px]' key={index}>

          <div className=' lg:w-[55%] w-full flex justify-center items-center'>
            <Image src={item?.src} className=' rounded-[25px]' filllayout="fill" style={{ objectFit: "contain" }} />
          </div>

          <p className='w-[55%] lg:text-[16px] md:text-[14px] text-[13px] font-semibold text-center '>{item?.title}</p>
        </div>

      ))}
    </div>
  )
}
