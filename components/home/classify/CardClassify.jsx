import React from 'react'
import { CardSlider } from './CardSlider'

export const CardClassify = ({ title, subTitle, data }) => {
 return (
  <div>
   <h1>{title}</h1>
   {data.map((product, index) => (
    <div key={index}>
     <CardSlider product={product} />
    </div>
   ))

   }


  </div>
 )
}
