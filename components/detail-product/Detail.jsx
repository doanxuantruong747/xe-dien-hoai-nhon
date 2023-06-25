import Image from 'next/image'


export const Detail = ({ product }) => {
  const imgDetails = product?.imgDetails
  return (
    <div className=' custom_container pt-[100px]'>
      {imgDetails.map((item, index) => (
        <div className='lg:w-[80%] w-full flex flex-col justify-center items-center pt-[50px]' key={index}>
          <div className=' lg:w-[80%] w-full flex justify-center items-center'> <Image src={item?.src} /> </div>
          <p className='lg:text-[16px] md:text-[14px] text-[13px] font-semibold text-center w-[80%]'>{item?.title}</p>
        </div>

      ))}
    </div>
  )
}
