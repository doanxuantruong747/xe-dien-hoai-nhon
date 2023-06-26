
import ScrollTop from "@/components/ScrollTop";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";



const LayoutWrapper = dynamic(() => import("@/components/Layout/Layout"), {
  ssr: false,
});

const SanPham = () => {


  return (
    <React.Suspense>
      <Head>
        <title>Xe Điện Hoài Nhơn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWrapper>

        <ScrollTop />
      </LayoutWrapper>
    </React.Suspense>
  );
};

export default SanPham;
