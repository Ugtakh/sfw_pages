import React from "react";

interface IServiceProps {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, content, icon }: IServiceProps) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-2 gap-3">
      <div
        className="
               p-7
               md:px-6
               xl:px-10
               rounded-[20px]
               shadow-md   
               hover:shadow-lg
               mb-8
               "
      >
        <div
          className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                bg-primary
                  rounded-2xl
                  mb-8
                  "
        >
          {icon}
        </div>
        <h4 className="font-extrabold text-base text-primary mb-3 uppercase">
          {title}
        </h4>
        <p className="font-semibold text-sm text-primary">{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
