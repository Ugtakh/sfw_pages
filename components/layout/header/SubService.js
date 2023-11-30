import Link from "next/link";
import React from "react";

const SubService = () => {
  return (
    <li className="dropdown-parrent">
      <Link href="/services">БҮТЭЭГДЭХҮҮН ҮЙЛЧИЛГЭЭ</Link>
      <ul className="theme-dropdown">
        <li>
          <Link href="/services/loan-1">ШУУРХАЙ ЗЭЭЛ</Link>
        </li>
        <li>
          <Link href="/services/loan-2">БИЗНЕСИЙН ЗЭЭЛ</Link>
        </li>
        <li>
          <Link href="/services/loan-3">АВТОМАШИНЫ ЗЭЭЛ</Link>
        </li>
        <li>
          <Link href="/services/loan-5">ХЭРЭГЛЭЭНИЙ ЗЭЭЛ</Link>
        </li>
        <li>
          <Link href="/services/loan-4">НОГООН ЗЭЭЛ</Link>
        </li>
      </ul>
    </li>
  );
};

export default SubService;
