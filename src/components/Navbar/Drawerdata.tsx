import React from "react";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

// const navigation: NavigationItem[] = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'Services', href: '#services', current: false },
//   { name: 'About', href: '#about', current: false },
//   { name: 'Project', href: '#project', current: false },
//   { name: 'Help', href: '/', current: false },
// ]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = ({ navigation = [], isActive }: any) => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item: any) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block transition-all duration-180 px-3 py-4 uppercase text-sm font-[600] rounded-lg hover:text-white hover:bg-primary ${
                  item.href === isActive ? "text-primary" : "hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* <div className="mt-4"></div>
            <button className="bg-white w-full text-blue border border-lightblue font-medium py-2 px-4 rounded">
              Sign In
            </button>
            <button className="bg-lightblue w-full hover:bg-blue hover:text-white text-blue font-medium my-2 py-2 px-4 rounded">
              Sign up
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
