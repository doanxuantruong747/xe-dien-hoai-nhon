import React from 'react'
import Image from "next/image";
import baoHanh from "@/assets/contact/maintain-banner.jpg";
import { Top } from './Top';
import { DetailBaoHanh } from './DetailBaoHanh';

export const BaoHanh = () => {
 return (
  <div className='custom_container pt-[125px]'>
   <Top />
   <DetailBaoHanh />

  </div>
 )
}
