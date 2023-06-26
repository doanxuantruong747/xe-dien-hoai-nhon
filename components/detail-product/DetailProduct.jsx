

import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { TopDetail } from "./TopDetail";
import { Detail } from "./Detail";
import { ProductDetails } from "mockData/productDetails";
import DetailSection from './DetailSection';


export const DetailProduct = () => {
  const [product, setProduct] = useState(null)
  const router = useRouter()

  useEffect(() => {
    ProductDetails.find((item) => {
      if (item.name === router.query.id) {
        setProduct(item)
      }
    })
  }, [router.query]);

  return (
    <div className=' custom_container pt-[125px]'>

      <div className=" flex flex-col w-full">
        <div className=""></div>
        <div></div>
        <TopDetail product={product} />
        <div className="mt-[50px] ">
          <DetailSection slideData={product?.imgDetails} />
        </div>
        {/* <div className="mt-[50px] ">
          <Detail product={product} />
        </div> */}

      </div>
    </div>
  )
}
