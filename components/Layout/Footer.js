import logo from "@/assets/footer/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link as LinkScroll } from "react-scroll";

import fb from "@/assets/footer/snsIcons/fb.png";
import tw from "@/assets/footer/snsIcons/tw.png";
import lk from "@/assets/footer/snsIcons/lk.png";
import ins from "@/assets/footer/snsIcons/ins.png";
import yt from "@/assets/footer/snsIcons/yt.png";
import ds from "@/assets/footer/snsIcons/ds.png";
import tele from "@/assets/footer/snsIcons/tele.png";
const snsData = [
  {
    icon: fb,
    to: "https://www.facebook.com/xedienduyduc",
  },



];

const xeData = [
  {
    title: "YADEA VOLTGUARD",
    to: "/",
  },
  {
    title: "YADEA ODORA PRO",
    to: "/",
  },
  {
    title: "YADEA X-Bull",
    to: "/",
  },
  {
    title: "YADEA VIGOR",
    to: "/",
  },
  {
    title: "YADEA IGO",
    to: "/",
  },
];
const hoTroData = [
  {
    title: "Hỗ trợ",
    to: "/",
  },
  {
    title: "Chính sách bảo hành",
    to: "/",
  },

];


const Footer = () => {
  const { i18n, t } = useTranslation();

  const [activeLink, setActiveLink] = useState(null);
  return (
    <div className=" bg-[#e3e9ee] h-[auto] ">
      <div className="custom_container flex justify-center flex-col">
        <div className="pt-[50px] flex flex-wrap justify-between">
          <div>
            <h1 className=" text-[17px] font-semibold">XE MÁY ĐIỆN THÔNG MINH</h1>
            <div className="pt-[10px]">
              {xeData.map((item, index) => (
                <a href={item.to} key={index}>
                  <h3 className=" text-[15px] font-medium text-[#798086] hover:text-[#000080]">{item.title}</h3>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h1 className=" text-[17px] font-semibold ">Hỗ Trợ</h1>
            <div className="pt-[10px]">
              {hoTroData.map((item, index) => (
                <a href={item.to} key={index}>
                  <h3 className=" text-[15px] font-medium text-[#798086] hover:text-[#000080]">{item.title}</h3>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h1 className=" text-[17px] font-semibold lg:pt-0 pt-[10px]">Theo Dõi Xe Điện Hoài Nhơn</h1>
            <div className="pt-[10px] flex ">
              {snsData.map((item, index) => (
                <a href={item.to} key={index} target="_blank">
                  <div className="p-2">
                    <Image src={item.icon} width={40} height={40} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h1 className=" text-[17px] font-semibold lg:pt-0 pt-[10px]">Liên Hệ</h1>
            <div className="pt-[10px] text-[15px] font-medium text-[#798086] ">
              <p className="">
                Hotline: 093 571 46 89
              </p>
              <p className=" ">
                Đ/c: 215A Trần Hưng Đạo, Hoài Nhon, Vietnam
              </p>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.49735421957973!2d109.01029706456117!3d14.429603216967086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3168c559e502e0f1%3A0xdb2caa48ed40a6fe!2zMjE1IFRy4bqnbiBIxrBuZyDEkOG6oW8sIFAuIELhu5NuZyBTxqFuLCBIb8OgaSBOaMahbiwgQsOsbmggxJDhu4tuaA!5e0!3m2!1svi!2s!4v1687597812402!5m2!1svi!2s"
                width="250" height="150" ></iframe>


            </div>
          </div>

        </div>
        <div className="h-[1px] bg-[#fff] w-full mt-[50px] " />
        <span className="text-center text-[15px] font-medium text-[#798086] pt-[15px] pb-[15px] ">
          Copyright © 2023 XeDienHoaiNhon </span>
      </div>

    </div>
  );
};

export default Footer;

