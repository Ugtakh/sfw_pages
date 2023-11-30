"use client";
import Layout from "@/components/layout/Layout";
import About from "@/components/homepages/home1/About";
import Blog from "@/components/homepages/home1/Blog";
import TaxBusiness from "@/components/homepages/home1/TaxBusiness";
import Welcome from "@/components/homepages/home1/Welcome";
import { useEffect, useState } from "react";
import Loading from "@/components/elements/Loading";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timerId);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Welcome />
        <TaxBusiness />
        <About />
        <Blog />
      </Layout>
    </>
  );
}
