import Link from "next/link";
import React from "react";

const SubMobService = ({ isActive, handleToggle }) => {
  return (
    <li>
      <Link href="/about">БҮТЭЭГДЭХҮҮН ҮЙЛЧИЛГЭЭ</Link>
      <span
        className={
          isActive.key == 3 ? "submenu-button submenu-opened" : "submenu-button"
        }
        onClick={() => handleToggle(3)}
      >
        <em />
      </span>
      <ul
        className="sub-menu"
        style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}
      >
        <li>
          <Link href="/services">ЗЭЭЛИЙН ТӨРӨЛ ХҮҮ, ХУГАЦАА</Link>
        </li>
        <li>
          <Link href="/services">ИТГЭЛЦЭЛИЙН ҮЙЛЧИЛГЭЭ</Link>
        </li>
      </ul>
    </li>
  );
};

export default SubMobService;
