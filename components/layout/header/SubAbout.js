import React from "react";
import Link from "next/link";

const SubAbout = () => {
  return (
    <li className="dropdown-parrent">
      <Link href="/about">БИДНИЙ ТУХАЙ</Link>
      <ul className="theme-dropdown">
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
          <Link href="/galleries">ЗУРГИЙН ЦОМОГ</Link>
        </li> */}
      </ul>
    </li>
  );
};

export default SubAbout;
