import Link from "next/link";
import React from "react";

const SubMobComplain = ({ isActive, handleToggle }) => {
  return (
    <li>
      <Link href="/complain">КОМПЛАЕНС</Link>
      <span
        className={
          isActive.key == 4 ? "submenu-button submenu-opened" : "submenu-button"
        }
        onClick={() => handleToggle(4)}
      >
        <em />
      </span>
      <ul
        className="sub-menu"
        style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}
      >
        <li>
          <Link href="#">КОМПАНИЙН ЗАСАГЛАЛ</Link>
          <ul
            style={{
              paddingLeft: 25,
            }}
          >
            <li>
              <Link href="/complain/inner-audit-policy">
                ДОТООД ХЯНАЛТЫН БОДЛОГО
              </Link>
            </li>
            <li>
              <Link href="/complain/inherince-policy">
                ЗАЛГАМЖ ХАЛААНЫ БОДЛОГО
              </Link>
            </li>
            <li>
              <Link href="/complain/risk-policy">
                ЭРСДЭЛИЙН УДИРДЛАГЫН БОДЛОГО
              </Link>
            </li>
            <li>
              <Link href="/complain/share-policy">НОГДОЛ АШГИЙН БОДЛОГО</Link>
            </li>
            <li>
              <Link href="/complain">ЭРСДЭЛИЙН БОДЛОГО</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">БОДЛОГО ДҮРЭМ</Link>
          <ul
            style={{
              paddingLeft: 25,
            }}
          >
            <li>
              <Link href="/complain/ethic-policy">ЁС ЗҮЙН ДҮРЭМ</Link>
            </li>
            <li>
              <Link href="/complain/social-policy">
                НИЙГМИЙН ХАРИУЦЛАГЫН БОДЛОГО
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/complain/audit-report">AУДИТ ТАЙЛАН</Link>
        </li>
      </ul>
    </li>
  );
};

export default SubMobComplain;
