

import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import { TopDetail } from "./TopDetail";
import { Detail } from "./Detail";
import { ProductDetails } from "mockData/ProductDetails";
import DetailSection from './DetailSection';
import { SimilarProduct } from './SimilarProduct';


export const DetailProduct = () => {
  const [product, setProduct] = useState(null)
  const router = useRouter()

  useEffect(() => {
    ProductDetails.find((item) => {
      if (item.name === router.query.id) {
        setProduct(item)
      }
    })
  }, [router.query])

  const render = useMemo(() => {
    return (<><div className=" flex flex-col w-full">
      <div className=""></div>
      <div></div>
      <TopDetail product={product} />
      <div className="mt-[50px] ">
        <h1 className='md:text-[25px] text-[20px] font-bold'>ĐẶC ĐIỂM NỔI BẬT</h1>
        <DetailSection slideData={product?.imgDetails} />
      </div>
      {/* <div className="mt-[50px] ">
  <Detail product={product} />
</div> */}

    </div>
      <div>
        <SimilarProduct />
      </div></>)
  })


  return (
    <div className=' custom_container pt-[125px]'>
      {render}

    </div>
  )
}
