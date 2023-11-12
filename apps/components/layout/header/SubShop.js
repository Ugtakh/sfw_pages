import React from "react";
import Link from "next/link";

const SubShop = () => {
  return (
    <li className="dropdown-parrent">
      <Link href="#">Shop</Link>
      <ul className="theme-dropdown">
        <li className="multi-dropdown-parrent">
          <Link href="#">
            Shop{" "}
            <span className="multi-drop-icon">
              <i className="fa-solid fa-angle-right" />
            </span>
          </Link>
          <ul className="multi-dropdown theme-dropdown">
            <li>
              <Link href="/shop-1">Shop Default</Link>
            </li>
            <li>
              <Link href="/shop-2">Right Sidebar</Link>
            </li>
            <li>
              <Link href="/shop-3">Left Sidebar</Link>
            </li>
          </ul>
        </li>
        <li className="multi-dropdown-parrent">
          <Link href="#">
            Others{" "}
            <span className="multi-drop-icon">
              <i className="fa-solid fa-angle-right" />
            </span>
          </Link>
          <ul className="multi-dropdown theme-dropdown">
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/cart-empty">Cart Empty</Link>
            </li>
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/signup">SignUp</Link>
            </li>
            <li>
              <Link href="/signin">SignIn</Link>
            </li>
            <li>
              <Link href="/forgot">Forgot</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/shop-inner-1">Shop Details</Link>
        </li>
      </ul>
    </li>
  );
};

export default SubShop;
