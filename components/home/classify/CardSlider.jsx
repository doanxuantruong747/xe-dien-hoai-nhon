import Image from 'next/image'
import React from 'react'

export const CardSlider = ({ product }) => {
 console.log(product);
 return (


  <div className=' w-full '>
   <div className="">
    <Image src={product.src} width="377px" height="266px" />
    {/* <Image src={item.src} fill layout="fill" style={{ objectFit: "contain" }} width="50px" height="50px" /> */}
   </div>
   <h1>{product.name}</h1>
  </div>



 )
}
