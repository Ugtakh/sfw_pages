import Link from "next/link";
import React from "react";

const SubHome = ({ isActive, handleToggle }) => {
  return (
    <li>
      <Link href="/about">БИДНИЙ ТУХАЙ</Link>
      <span
        className={
          isActive.key == 2 ? "submenu-button submenu-opened" : "submenu-button"
        }
        onClick={() => handleToggle(2)}
      >
        <em />
      </span>
      <ul
        className="sub-menu"
        style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
      >
        <li>
          <Link href="/about">КОМПАНИЙН ТАНИЛЦУУЛГА</Link>
        </li>
        <li>
          <Link href="/boarding">ТУЗ</Link>
        </li>
        <li>
          <Link href="/social-responsible">НИЙГМИЙН ХАРИУЦЛАГА</Link>
        </li>
        <li>
          <Link href="/finance-report">САНХҮҮГИЙН ТАЙЛАН</Link>
        </li>
        {/* <li>
          <Link href="/about">ЗУРГИЙН ЦОМОГ</Link>
        </li> */}
      </ul>
    </li>
  );
};

export default SubHome;
