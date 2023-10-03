// import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
// import Signdialog from "./Signdialog";
// import Registerdialog from "./Registerdialog";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import Link from "next/link";

const logo = "/assets/logo/sf_logo.png";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Нүүр", href: "/", current: true },
  { name: "Бидний тухай", href: "/about", current: false },
  { name: "Бүтээгдэхүүн Үйлчилгээ", href: "/services", current: false },
  { name: "Холбоо барих", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isActive = usePathname();

  return (
    <>
      <div className="sticky top-0 z-50 shadow-lg mb-8 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-between">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <Image
                    width={150}
                    height={150}
                    className="block h-10 w-60"
                    src={logo}
                    alt="sf-logo"
                  />
                </Link>
              </div>

              {/* LINKS */}

              <div className="hidden lg:block ">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <MenuItem
                      key={item.name}
                      item={item}
                      currentMenu={isActive}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* SIGNIN DIALOG */}

            {/* <Signdialog /> */}

            {/* REGISTER DIALOG */}

            {/* <Registerdialog /> */}

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata navigation={navigation} isActive={isActive} />
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
