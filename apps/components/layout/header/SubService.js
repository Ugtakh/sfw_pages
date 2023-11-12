import Link from "next/link";
import React from "react";

const SubService = () => {
  return (
    <li className="dropdown-parrent">
      <Link href="/services">БҮТЭЭГДЭХҮҮН ҮЙЛЧИЛГЭЭ</Link>
      <ul className="theme-dropdown">
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

export default SubService;
