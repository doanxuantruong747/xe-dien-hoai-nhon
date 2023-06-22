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
    icon: tw,
    to: "https://twitter.com/FriendifyGPT",
  },
  {
    icon: fb,
    to: "https://www.facebook.com/FriendifyGPT",
  },
  {
    icon: ins,
    to: "https://www.instagram.com/friendify.gpt",
  },
  {
    icon: yt,
    to: "https://www.youtube.com/@friendifygpt/about",
  },
  {
    icon: ds,
    to: "https://discord.com/invite/HjFMtwX7nb",
  },
  {
    icon: tele,
    to: "https://t.me/Friendify_GPT",
  },
];
import { NavData } from "./Header";

const Footer = () => {
  const { i18n, t } = useTranslation();

  const [activeLink, setActiveLink] = useState(null);
  return (
    <div className="bg-transparenttext-white ">
      <div className="text-black custom_container  ">
        <hr className="" />
        <div className=" overflow-y-hidden py-[10px] flex  justify-end items-center lg:flex-col  ">
          <div className="gap-[0px] md:gap-[50px] w-full flex flex-col lg:flex-row lg:justify-between pt-4  max-[900px]:justify-center max-[900px]:items-center ">
            <div className=" row-span-2 sm:col-span-7 col-start-1 col-end-4 sm:col-end-5 hidden lg:flex flex-col items-start ">
              <a
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className=""
              >
                <div className="relative h-[50px] w-[180px]">
                  <Image
                    fill
                    layout="fill"
                    style={{ objectFit: "contain" }}
                    src={logo}
                  />
                </div>
              </a>
            </div>

            <div className=" text-center lg:text-left w-[15%] row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 hidden lg:flex flex-col max-[900px]:mb-4">
              <p className=" text-[24px] text-[#FFFFFF]  mb-[20px] text-white">
                {/* {t("footer.about")} */}
                MENU
              </p>
              <ul className="flex flex-col">
                {NavData?.map((item, index) => {
                  return (
                    <li className="h-[30px]" key={`nav-item-${index}`}>
                      <a key={`link-${index}`} href={item.to}>
                        <p
                          className={`text-md text-[#C5E5C5] text-[20px] cursor-pointer animation-hover inline-block relative  hover:text-[#06C270] ${activeLink === item.to ? "text-[#06C270]" : ""
                            }`}
                        >
                          {item.title}
                        </p>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="text-center lg:text-left w-full lg:w-[20%] row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col max-[900px]:mb-4">
              <p className="text-center lg:text-left  text-[24px]  mb-[20px] text-white">
                {/* {t("footer.support")} */}
                LEGAL
              </p>
              <ul className="text-xs leading-normal sm:text-base sm:leading-10  font-normal sm:font-medium flex flex-row lg:flex-col justify-between">
                <li className="h-[30px] text-left ">
                  <a
                    href="static/media/policy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C5E5C5] text-[15px] sm:text-[20px] hover:text-[#06C270]"
                  >
                    Privacy Policy
                  </a>
                </li>

                {/* </LinkScroll> */}
                <li className="h-[30px] text-left ">
                  <a
                    href="static/media/term.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C5E5C5] text-[15px] sm:text-[20px] hover:text-[#06C270]"
                  >
                    Terms and services
                  </a>
                </li>

                {/* <li className="h-[30px] text-left ">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C5E5C5] text-[15px] sm:text-[20px] hover:text-[#06C270]"
                  >
                    Audit
                  </a>
                </li> */}
              </ul>
            </div>

            <div className="w-[] flex-1 row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col max-[900px]:text-center max-[900px]:mt-[34px] max-[500px]:text-[10px] ">
              <p className="  text-[24px] mb-[20px] text-center text-white">
                {/* {t("footer.support")} */}
                Follow us
              </p>
              <ul className=" font-normal sm:font-medium flex flex-wrap justify-center gap-x-[20px]">
                {snsData.map((item, index) => {
                  return (
                    <li key={`sns-${index}`}>
                      <div className="cursor-pointer items-center justify-center flex">
                        <div className="flex">
                          <a
                            href={item.to}
                            target="_blank"
                            className="flex items-center break-all"
                          >
                            <div className="w-[30px] sm:w-[40px] h-[30px] hover:scale-[1.3] transition-all duration-300">
                              <Image src={item.icon} />
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <hr className="mb-[30px]" />
        <div className="flex flex-col w-full mb-[20px] ">
          <span className="text-center text-[#808080] text-[12px] sm:text-[16px] ">
            Copyright © 2023 Friendify GPT All Right Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
