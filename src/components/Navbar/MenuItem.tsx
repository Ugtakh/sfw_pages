import React from "react";
import Link from "next/link";

const MenuItem = ({ item, currentMenu }: any) => {
  return (
    <Link
      key={item.name}
      href={item.href}
      className={`transition-all duration-150 px-3 py-3 uppercase text-sm font-[600] rounded-lg hover:text-white hover:bg-primary ${
        item.href === currentMenu
          ? "text-primary"
          : "hover:text-white hover:bg-primary"
      }`}
    >
      {item.name}
    </Link>
  );
};

export default MenuItem;
