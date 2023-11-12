import React from "react";
import Link from "next/link";

const SubComplain = () => {
  return (
    <li className="dropdown-parrent">
      <Link href="/complain">КОМПЛАЙНС</Link>
      <ul className="theme-dropdown">
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

export default SubComplain;

{
  /* <li className="dropdown-parrent">
      <Link href="#">КОМПЛАЙНС</Link>
      <ul className="theme-dropdown">
        <li className="multi-dropdown-parrent">
          <Link href="#">
            Blog{" "}
            <span className="multi-drop-icon">
              <i className="fa-solid fa-angle-right" />
            </span>
          </Link>
          <ul className="multi-dropdown theme-dropdown">
            <li>
              <Link href="/blog-1">Classic</Link>
            </li>
            <li>
              <Link href="/blog-2">Blog Right</Link>
            </li>
            <li>
              <Link href="/blog-3">Blog Left</Link>
            </li>
            <li>
              <Link href="/blog-mesonry-1">Mesonry 1</Link>
            </li>
            <li>
              <Link href="/blog-mesonry-2">Mesonry 2</Link>
            </li>
            <li>
              <Link href="/blog-mesonry-3">Mesonry 3</Link>
            </li>
          </ul>
        </li>
        <li className="multi-dropdown-parrent">
          <Link href="#">
            Blog Detail{" "}
            <span className="multi-drop-icon">
              <i className="fa-solid fa-angle-right" />
            </span>
          </Link>
          <ul className="multi-dropdown theme-dropdown">
            <li>
              <Link href="/single-2">Single Default</Link>
            </li>
            <li>
              <Link href="/single-1">Right Sidebar</Link>
            </li>
            <li>
              <Link href="/single-3">Left Sidebar</Link>
            </li>
            <li>
              <Link href="/single-4">Single Fuild</Link>
            </li>
          </ul>
        </li>
      </ul>
    </li> */
}
