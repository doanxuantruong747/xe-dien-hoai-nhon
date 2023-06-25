import VoltGuard from "@/assets/Volt-Guard/img-right-w300.png";
import VoltGuardDo from "@/assets/Volt-Guard/Voltguard-do.png";
import VoltGuardXanhNham from "@/assets/Volt-Guard/Voltguard-xanh.png";
import VoltGuardTrang from "@/assets/Volt-Guard/Voltguard-trang.png";
import VoltGuardDen from "@/assets/Volt-Guard/Voltguard-den.png";
import VoltGuardXam from "@/assets/Volt-Guard/Voltguard-xam.jpg";
import VoltGuardDetail1 from "@/assets/Volt-Guard/detail1.jpg";
import VoltGuardDetail2 from "@/assets/Volt-Guard/detail2.jpg";
import VoltGuardDetail3 from "@/assets/Volt-Guard/detail3.jpg";
import VoltGuardDetail4 from "@/assets/Volt-Guard/detail4.jpg";
import VoltGuardDetail5 from "@/assets/Volt-Guard/detail5.jpg";

import Odora from "@/assets/odora/Odora-S1-w300.png";
import E3 from "@/assets/yadea-e3/e3-banner-product-w300.png";
import M61 from "@/assets/M6i/m6i-w300.png";
import ulike from "@/assets/ulike/ulike-w3.png";
import vigor from "@/assets/vigor/yadea-virgo-w300.png";
import xmen from "@/assets/xmen/xmen-red-w300.png";
import xBull from "@/assets/yadea-x-bull/XBull-w300.png";
import iGo from "@/assets/Igo/iGo-w300.png";
import i5s from "@/assets/xe-dap-dien-I5s/xe-dap-dien-yadea-i5s-w300.png";
import s3 from "@/assets/yadea-s3/yadeaS3-w300.png";
import icute from "@/assets/icute/icute-w300.png";
import nishiki from "@/assets/nishiki/xe-dap-dien-nishiki-w300.png";

import { useRouter } from 'next/router'
import React from 'react'
import { TopDetail } from "./TopDetail";
import { Detail } from "./Detail";


const products = [
  {
    id: "",
    name: "Xe Máy Điện Yadea VoltGuard VFV",
    describe: {
      kichThuot: { daiXrongXcao: "1930×710×1130 mm", khoangSangGamXe: "135 mm", chieuCaoYen: "780 mm", dungTichCopXe: "20L" },
      dongCo: { congSuatDinhDanh: "1500W", congSuatToiDa: "w", tocDoToiDa: "55km/h" },
      acQuy: { loaiAcquy: "Ắc quy Graphene TTFAR III", dungLuongAcQuy: "72V38Ah", doDaiQuangDuong: "85km" },
      thongSoKhac: { heThongPhanh: "Trước đĩa sau đĩa", thongSoLop: "Lốp không săm, 90/90-14, 100/90-14", heThongDen: "LED", heThongThongMinh: "Khoá Cơ" },
    },
    img:
      { do: VoltGuardDo, xanh: VoltGuardXanhNham, trang: VoltGuardTrang, den: VoltGuardDen, xam: VoltGuardXam },
    imgDetails: [
      { title: "Kích thước tổng thể đạt 1.924 x 660 x1.138 mm (dài x rộng x cao), thông số này không quá chênh lệch với đối thủ Feliz S (1.912 x 693 x 1.128 mm). Voltguard mang thiết kế tương tự các dòng xe tay ga phổ thông.", src: VoltGuardDetail1 },
      { title: "Màn hình tốc độ là loại điện tử hoàn toàn. Mẫu xe này được trang bị tính năng cài đặt tốc độ, cách hoạt động tương tự hệ thống ga tự động.", src: VoltGuardDetail2 },
      { title: "Phiên bản tiêu chuẩn và giữa dùng chìa khóa cơ, phiên bản cao cấp nhất có thêm tính năng ổ khóa NFC.", src: VoltGuardDetail3 },
      { title: "Sức mạnh của xe đến từ động cơ 1.500 W hoặc 3.000 W tùy theo phiên bản. Tốc độ tối đa xe có thể đạt được là 80 km/h trên bản cao nhất và 55 km/h trên 2 phiên bản còn lại. Mức 50 km/h trên 2 phiên bản thấp tương đối kém khi đặt cạnh Evo 200 (70 km/h) lẫn Feliz S (80 km/h).", src: VoltGuardDetail4 },
      { title: "Yadea không công bố phạm vi di chuyển của Voltguard. Phiên bản cao nhất đạt mô-men xoắn cực đại 189 Nm, tăng tốc 0-50 km/h trong 4 giây.", src: VoltGuardDetail5 }
    ]
  },


]

export const DetailProduct = () => {
  let product
  const router = useRouter()

  products?.find((item) => {
    if (item?.name === router?.query?.id)
      return product = item
  })

  return (
    <div className=' custom_container pt-[125px]'>

      <div className=" flex flex-col w-full">
        <div className=""></div>
        <div></div>
        <TopDetail product={product} />
        <Detail product={product} />
      </div>
    </div>
  )
}
