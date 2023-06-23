import ScrollTop from '@/components/ScrollTop';
import 'animate.css';
import 'animate.css/animate.min.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import '../i18next';
import { Hero } from '@/components/home/Hero';
import { Classify } from '@/components/home/classify/Classify';
import { GiaHapDan } from '@/components/home/GiaHapDan';
import { VoltGuard } from '@/components/volt-Guard/VoltGuard';
import { YadeaE3 } from '@/components/yadea-e3/YadeaE3';
import { Nishiki } from '@/components/nishiki/Nishiki';
import Odora from '@/components/odora/Odora';
import { YadeaXBull } from '@/components/yadea-x-bull/YadeaXBull';
import Igo from '@/components/Igo/Igo';
import I5S from '@/components/I5S/I5S';
import { YadeaM6i } from '@/components/yadea-M6i/YadeaM6i';
import { Ulike } from '@/components/ulike/Ulike';

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
        <VoltGuard />
        <Odora />
        <YadeaE3 />
        <YadeaM6i />
        <Ulike />

        <YadeaXBull />
        <Igo />
        <I5S />


        <Nishiki />
        {/* <GiaHapDan /> */}

        <ScrollTop />
      </LayoutWrapper>
    </React.Suspense>
  );
}
