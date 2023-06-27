
import React from 'react'
import Collapse from '../common/Collapse'

const dataCollapse = [
 {
  title: "Thời hạn và phạm vi bảo hành xe",
  content: "Thời hạn bảo hành bắt đầu từ lúc mua sản phẩm là 1 năm (lưu ý chỉ bảo hành khi xe bị lỗi kỹ thuật)"
 },
 {
  title: "Thời hạn bảo hành Ắc Quy",
  content: "Thời hạn bảo hành ắc quy là 1 năm tính từ bắc đầu mua sản phẩm"
 },
 {
  title: "Các lưu ý quan trọng",
  content: ""
 },
 {
  title: "Bảo dưỡng xe",
  content: ""
 },
]

export const DetailBaoHanh = () => {
 return (
  <div className=' mb-[100px] bg-[#dee9ee] py-7'>
   <div>
    <p className='px-3 lg:text-[25px] md:text-[20px] text-[18px] font-medium'>Xe Máy Điện Duy Đức chân thành cảm ơn quý khách hàng đã tin tưởng và sử dụng Xe Máy Điện .</p>
    <p className='px-3 lg:text-[25px] md:text-[20px] text-[18px] font-medium pt-[15px]'>Vì quyền lợi của người tiêu dùng,
     trân trọng thông báo đến người tiêu dùng chính sách và điều kiện bảo hành của Xe Máy Điện Duy Đức,
     Chính sách này chỉ áp dụng cho việc sửa chữa bảo hành đối với các sản phẩm Xe Máy Điện Duy Đức được phân phối chính thức tại Việt Nam.</p>
   </div>
   <div className='pt-[50px]'>
    {dataCollapse.map((item, index) => (
     <Collapse title={item.title} content={item.content} id={index} />
    ))}

   </div>
  </div>
 )
}
