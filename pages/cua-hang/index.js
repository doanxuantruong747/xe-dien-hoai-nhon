import ScrollTop from '@/components/ScrollTop';
import 'animate.css';
import 'animate.css/animate.min.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import '../../i18next';
import HotLine from '@/components/HotLine';
import { Guarantee } from '@/components/guarantee/Guarantee';

const LayoutWrapper = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: false,
});

export default function business() {
  return (
    <React.Suspense>
      <Head>
        <title>Xe Máy Điện Hoài Nhơn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWrapper>

        <Guarantee />
        <HotLine />
        {/* <ScrollTop /> */}
      </LayoutWrapper>
    </React.Suspense>
  );
}
