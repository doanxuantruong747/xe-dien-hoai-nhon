import { CardClassify } from './CardClassify'


export const Classify = ({ title, subTitle, data }) => {

 return (
  <div className='  '>
   <h1>{title}</h1>
   <CardClassify data={data} />
  </div>
 )
}
