import React from "react";
import Image from "next/image";

const EmployeeCard = ({ title, image }: any) => {
  return (
    <div className="p-4 pb-6 flex justify-center flex-col items-center">
      <img
        width={150}
        height={150}
        className="md:block hidden rounded-lg w-[135.84px] h-[135.84px]"
        src={image}
        alt={title}
      />
      <img
        width={150}
        height={150}
        className="md:hidden block rounded-lg  w-[135.84px] h-[135.84px]"
        src={image}
        alt={title}
      />
      <p className="font-medium text-base leading-5 text-primary mt-4">
        {title}
      </p>
    </div>
  );
};

export default EmployeeCard;
