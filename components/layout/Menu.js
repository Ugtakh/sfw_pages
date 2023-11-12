"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import SubHome from "./header/SubHome";
import SubAbout from "./header/SubAbout";
import SubService from "./header/SubService";
import SubComplain from "./header/SubComplain";
import SubContact from "./header/SubContact";

export default function Menu() {
  // const routerPath = usePathname()
  // useEffect(() => {
  //     if (routerPath == "/index-rtl-1") {
  //         document.documentElement.lang = "ar"
  //         document.documentElement.dir = "rtl"
  //         document.body.classList.add("rtl-version")
  //     } else {
  //         document.documentElement.lang = "en"
  //         document.documentElement.dir = ""
  //         document.body.classList.remove("rtl-version")
  //     }
  // })
  return (
    <>
      <ul className="menu_list scroll">
        {/* Home-1 */}
        <SubHome />
        {/* About-1 */}
        <SubAbout />
        {/* Service-1 */}
        <SubService />
        {/* Complains-1 */}
        <SubComplain />
        {/* Shop-1 */}
        {/* Contact-1 */}
        <SubContact />
      </ul>
    </>
  );
}
