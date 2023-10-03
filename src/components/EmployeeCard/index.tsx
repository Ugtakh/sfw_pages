import React from "react";
import Image from "next/image";

const EmployeeCard = ({ name, avatarUrl }: any) => {
  return (
    <div className="p-4 pb-6 flex justify-center flex-col items-center">
      <Image
        width={150}
        height={150}
        className="md:block hidden rounded-lg"
        src={avatarUrl}
        alt={name}
      />
      <Image
        width={150}
        height={150}
        className="md:hidden block rounded-lg"
        src={avatarUrl}
        alt={name}
      />
      <p className="font-medium text-base leading-5 text-primary mt-4">
        {name}
      </p>
    </div>
  );
};

export default EmployeeCard;
