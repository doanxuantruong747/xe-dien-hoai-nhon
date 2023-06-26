import React, { useEffect, useState } from 'react'
import SlideSimilarProduct from './SlideSimilarProduct'
import { Products } from 'mockData/Products'
import { useRouter } from 'next/router'

export const SimilarProduct = () => {
    const [listProduct, setListProduct] = useState([])
    let data = []

    const router = useRouter()

    useEffect(() => {
        Products.map((product) => {
            if (router.query.id !== product?.title)
                data = [...data, product]
            setListProduct(data)
        })
    }, [router.query])


    return (
        <div className='custom_container '>
            <h1 className='m:text-[25px] text-[20px] font-bold'> SẢN PHẨM TƯƠNG TỰ </h1>
            <SlideSimilarProduct slideData={listProduct} />
        </div>
    )
}
