import React from 'react'
import SlideSimilarProduct from './SlideSimilarProduct'
import { Products } from 'mockData/Products'

export const SimilarProduct = () => {

    return (
        <div className='custom_container '>
            <h1 className='m:text-[25px] text-[20px] font-bold'> SẢN PHẨM TƯƠNG TỰ </h1>
            <SlideSimilarProduct slideData={Products} />
        </div>
    )
}
