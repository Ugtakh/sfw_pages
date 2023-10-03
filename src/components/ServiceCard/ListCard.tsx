import React from "react";
import Image from "next/image";

const ListCard = ({ content }: { content: string }) => {
  return (
    <div className=" lg:ml-10 py-4 px-10 flex justify-start items-center">
      <Image
        width={50}
        height={50}
        className="w-7 h-7 mr-3"
        src="/assets/logo/favicon.png"
        alt="list"
      />
      <h4 className="font-bold text-base lg:text-2xl text-primary">
        {content}
      </h4>
    </div>
  );
};

export default ListCard;
