import React from 'react'
import { Classify } from './classify/Classify'
import nishiki2 from "@/assets/gia-re/nishiki2.jpg";

export const GiaHapDan = () => {
 const title = " Giá Hấp Dẫn"
 const subTitle = ""
 const dataGiaHapDan = [
  { src: nishiki2, name: " Giá Hấp Dẫn", des: "" }
 ]

 return (
  <div className='custom_container pt-[100px] h-[100vh]'>
   <Classify title={title} subTitle={subTitle} data={dataGiaHapDan} />
  </div>
 )
}
