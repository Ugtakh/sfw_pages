import React from "react";
import Image from "next/image";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { it } from "node:test";
import Link from "next/link";

interface ICardDataType {
  imgSrc: string;
  heading: string;
  percent: string;
  subheading: string;
  icon?: any;
  href: string;
}

const Card = ({ item }: { item: ICardDataType }) => {
  return (
    <div className="flex flex-col justify-start items-center">
      <Link href={item.href}>
        <div className="w-24 h-24 flex items-center justify-center border border-primary  p-2 rounded-lg hover:opacity-60 hover:cursor-pointer">
          {/* <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} /> */}
          {item.icon}
        </div>
      </Link>
      {/* <h2 className="text-4xl lg:text-6xl text-black font-semibold text-center mt-5">
        {item.percent}
      </h2> */}
      <h3 className="text-2xl text-black font-semibold text-center lg:mt-6">
        {item.heading}
      </h3>
      <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
        {item.subheading}
      </p>
    </div>
  );
};

export default Card;
