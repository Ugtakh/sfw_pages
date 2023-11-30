import Link from "next/link";
import { useState } from "react";
import SubMobAbout from "./SubMobile/SubMobAbout";
import SubMobService from "./SubMobile/SubMobService";
import SubMobComplain from "./SubMobile/SubMobComplain";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="mobile-header mobile-header-4 d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link href="/">
                  <img src="/assets/images/logo/sf_logo.png" alt="" />
                </Link>
              </div>
              <div className="mobile-nav-icon" onClick={handleMobileMenu}>
                <i className="fa-solid fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}
      >
        <div className="menu-close" onClick={handleMobileMenu}>
          <i className="fa-solid fa-xmark" />
        </div>
        <div className="mobile-nav">
          <ul className="mobile-nav-list">
            <li>
              <Link href="/">Нүүр</Link>
            </li>
            <SubMobAbout isActive={isActive} handleToggle={handleToggle} />
            <SubMobService isActive={isActive} handleToggle={handleToggle} />
            <SubMobComplain isActive={isActive} handleToggle={handleToggle} />
            <li>
              <Link href="/contact">ХОЛБОО БАРИХ</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
