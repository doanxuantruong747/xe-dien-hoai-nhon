import Logo from "@/assets/logo/LOGO.png";
import menubar from "@/assets/nav/menubar-black.png";
import { Header_Height } from "constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

export const NavData = [
  // {
  //   title: "SẢN PHẨM",
  //   to: "/san-pham",
  // },
  // {
  //   title: "CỬA HÀNG",
  //   to: "/cua-hang",
  // },
  // {
  //   title: "BẢO HÀNH",
  //   to: "/bao-hanh",
  // },

];

const Header = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 200 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  const onClose = () => {
    if (open) {
      setOpen(false);
    }
  };

  const menuRef = useRef(null);
  const menuBarRef = useRef(null);

  useClickOutSide(onClose, menuRef, menuBarRef);

  useEffect(() => {
    const pathName = "/" + router.pathname?.split("/")[1];
    setActiveLink(pathName);
  }, [router.pathname]);
  return (
    <>
      <header

        style={{
          background: `${navBg ? "white" : ""} `,
        }}
        className={
          ` h-[${Header_Height}] fixed top-0 w-full bg-white text-[#000]  z-[99999] ` +
          (scrollActive ? "shadow-md pt-0  bg-white" : " ")
        }
      >
        <nav className="h-full custom_container flex justify-between items-center mx-auto py-3 sm:py-4 w-full ">
          <a href="/" className="">
            <div className="relative col-start-1 col-end-2 flex items-center w-[90px] h-[75px] cursor-pointer">
              <Image src={Logo} fill layout="fill" style={{ objectFit: "contain" }} />
            </div>
          </a>

          <ul className="hidden lg:flex text-[#000] items-center justify-between">
            {NavData?.map((item, index) => {
              return (
                <div
                  key={`link-${index}`}
                  onClick={() => router.push(item.to)}
                  className={` mx-3 cursor-pointer animation-hover inline-block relative text-[#000] text-[16px] font-medium  hover:text-[#000080] ${activeLink === item.to
                    ? "text-[#000080]"
                    : ""
                    }`}
                >
                  {item.title}
                </div>
              );
            })}
          </ul>

          <div
            ref={menuRef}
            className="  relative flex lg:hidden  justify-end items-center"
          >

            <Image
              onClick={() => {
                setOpen((prev) => true);
              }}
              className="cursor-pointer"
              src={menubar}
              width={25} height={25}

            />
            <nav
              className={`${open ? "navbar-open" : "navbar-close"
                } lg:hidden navbar w-64 fixed z-[9999999999] bg-[#fff] top-0 right-0 h-screen shadow `}
            >
              <ul className="list-none text-[#000] text-center flex flex-col">
                {NavData?.map((item, index) => {
                  return (
                    <a key={`link-responsive-${index}`} href={item.to}>
                      <p
                        className={
                          "text-md px-4 mx-2 mt-4  cursor-pointer  inline-block relative font-bold text-[#000] hover:text-[#000080]"
                        }
                      >
                        {item.title}
                      </p>
                    </a>
                  );
                })}
              </ul>
              <div className=" lg:col-start-10 lg:col-end-12 flex justify-center items-center font-medium relative">
                <a href="https://app.friendify.ai/login" target="_blank">
                </a>
              </div>
            </nav>
          </div>
        </nav>
      </header>
      <div></div>
    </>
  );
};

export default Header;
