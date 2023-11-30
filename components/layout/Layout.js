"use client";

import AOS from "aos";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";

import MobileMenu from "./MobileMenu";
import PageHead from "./PageHead";
import Footer1 from "./footer/Footer1";

import Header1 from "./header/Header1";

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
}) {
  const [scroll, setScroll] = useState(0);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    AOS.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      <PageHead headTitle={headTitle} />

      {!headerStyle && (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
        />
      )}
      {headerStyle == 1 ? (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
        />
      ) : null}

      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      {children}

      {!footerStyle && <Footer1 />}
      {footerStyle == 1 ? <Footer1 /> : null}

      <BackToTop scroll={scroll} />
    </>
  );
}
