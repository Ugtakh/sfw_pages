import React from "react";
import Link from "next/link";

const SubContact = () => {
  return (
    <li className="dropdown-parrent">
      <Link href="/contact">ХОЛБОО БАРИХ</Link>
      {/* <ul className="theme-dropdown">
        <li>
          <Link href="/contact-1">Contact 1</Link>
        </li>
        <li>
          <Link href="/contact-2">Contact 2</Link>
        </li>
      </ul> */}
    </li>
  );
};

export default SubContact;
