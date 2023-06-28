
import React from 'react'
import { CardListProduct } from "./CardListProduct";
import { CardProduct } from "./CardProduct";
import { useRouter } from "next/router";
import { Products } from "mockData/Products";

export const ListProduct = () => {

    const router = useRouter()
    const handleClickProduct = (id, name) => {
        typeof window !== "undefined" && localStorage.setItem("productId", id);
        const nameReplace = name
        router.push(`/${nameReplace}`);
    }
    return (
        <div className='pt-[100px] custom_container w-full flex flex-wrap sm:justify-between justify-center'>
            {
                Products?.map((item, index) => (
                    <div onClick={() => { handleClickProduct(index, item?.title) }} key={index}>
                        <CardProduct title={item.title} subtitle={item.subtitle} src={item.src} index={index} />
                    </div>
                ))
            }

        </div>
    )
}
{/* <CardListProduct title={item.title} subtitle={item.subtitle} src={item.src} index={index} /> */ }