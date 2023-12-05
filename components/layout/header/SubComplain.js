import React from "react";
import Link from "next/link";

const SubComplain = () => {
  return (
    <li className="dropdown-parrent">
      <Link href="#">КОМПЛАЕНС</Link>
      <ul className="theme-dropdown">
        <li>
          <Link href="#">Компанийн засаглал</Link>
          <ul
            style={{
              paddingLeft: 25,
            }}
          >
            <li>
              <Link href="/complain/boarding-procedure">
                ТУЗ-ийн дэргэдэх хороодын журам
              </Link>
            </li>
            <li>
              <Link href="/complain/inner-audit-policy">
                Дотоод аудитын бодлого
              </Link>
            </li>
            <li>
              <Link href="/complain/inherince-policy">
                Залгамж халааны бодлого
              </Link>
            </li>
            <li>
              <Link href="/complain/risk-policy">
                Эрсдэлийн удирдлагын бодлого
              </Link>
            </li>
            <li>
              <Link href="/complain/share-policy">Ногдол ашгийн бодлого</Link>
            </li>
            <li>
              <Link href="/complain/ethic-policy">Ёс зүйн дүрэм</Link>
            </li>
            <li>
              <Link href="/complain/social-policy">
                Нийгмийн хариуцлагын бодлого
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">Бодлого дүрэм</Link>
          <ul
            style={{
              paddingLeft: 25,
            }}
          >
            <li>
              <Link href="/complain/mab-policy">
                Мэдээллийн Аюулгүй Байдлын Бодлого
              </Link>
            </li>
            <li>
              <Link href="/complain/hr-policy">Хүний Нөөцийн Бодлого</Link>
            </li>
            <li>
              <Link href="/complain/complain-report">Комплаенс</Link>
            </li>
          </ul>
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
