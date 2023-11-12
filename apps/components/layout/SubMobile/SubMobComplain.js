import Link from "next/link";
import React from "react";

const SubMobComplain = ({ isActive, handleToggle }) => {
  return (
    <li>
      <Link href="/complain">КОМПЛАЙНС</Link>
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
          <Link href="/complain">ДОТООД ХЯНАЛТЫН БОДЛОГО</Link>
        </li>
        <li>
          <Link href="/complain">ДОТООД АУДИТЫН БОДЛОГО</Link>
        </li>
        <li>
          <Link href="/complain">ЗАЛГАМЖ ХАЛААНЫ БОДЛОГО</Link>
        </li>
        <li>
          <Link href="/complain">ЦАЛИН УРАМШУУЛАЛ БОДЛОГО</Link>
        </li>
        <li>
          <Link href="/complain">ЁС ЗҮЙН ДҮРЭМ</Link>
        </li>
        <li>
          <Link href="/complain">ЭРСДЭЛИЙН БОДЛОГО</Link>
        </li>
      </ul>
    </li>
  );
};

export default SubMobComplain;
