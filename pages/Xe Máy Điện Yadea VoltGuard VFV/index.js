import ScrollTop from '@/components/ScrollTop';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import '../../i18next';
import HotLine from '@/components/HotLine';
import { BaoHanh } from '@/components/baoHanh/BaoHanh';
import { DetailProduct } from '@/components/detail-product/DetailProduct';
import { DetailProductXe1 } from '@/components/detail-product/DetailProductXe1';

const LayoutWrapper = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: false,
});
const About = () => {
  return (
    <React.Suspense>
      <Head>
        <title>Xe Máy Điện Hoài nhơn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWrapper>
        <DetailProductXe1 />
        <HotLine />
        {/* <ScrollTop /> */}
      </LayoutWrapper>
    </React.Suspense>
  );
};

export default About;
