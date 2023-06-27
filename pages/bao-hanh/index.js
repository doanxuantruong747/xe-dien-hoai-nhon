import ScrollTop from '@/components/ScrollTop';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import '../../i18next';
import HotLine from '@/components/HotLine';

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

        <HotLine />
        {/* <ScrollTop /> */}
      </LayoutWrapper>
    </React.Suspense>
  );
};

export default About;
