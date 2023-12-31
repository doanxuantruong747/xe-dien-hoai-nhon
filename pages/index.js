import ScrollTop from '@/components/ScrollTop';
import { Hero } from '@/components/home/Hero';
import { ListProduct } from '@/components/list-product/ListProduct';
import 'animate.css';
import 'animate.css/animate.min.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import '../i18next';
import HotLine from '@/components/HotLine';

const LayoutWrapper = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: false,
});

export default function Home() {

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const isPopupShown = localStorage.getItem("isPopupShown");
    if (isPopupShown === null) {
      setIsShow(true);
      localStorage.setItem("isPopupShown", "true");
    }
  }, [])

  function removeKeyFromLocalStorage(key) {
    localStorage.removeItem(key);
  }

  useEffect(() => {
    window.addEventListener('beforeunload', function () {
      removeKeyFromLocalStorage('isPopupShown');
    });
  }, []);


  return (
    <React.Suspense>
      <Head>
        <title>Xe Điện Hoài Nhơn </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWrapper>
        {/* {isShow && 
        <Popup setIsShow={setIsShow}/>
        } */}
        <Hero />
        <ListProduct />
        <HotLine />

        {/* <ScrollTop /> */}
      </LayoutWrapper>
    </React.Suspense>
  );
}
