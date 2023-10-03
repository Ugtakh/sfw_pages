"use client";
import React, { useEffect } from "react";
import ServiceCard from "@/components/ServiceCard";
import { BsFillCarFrontFill, BsBuildings } from "react-icons/bs";
import { PiWarehouse } from "react-icons/pi";
import { GiHouse } from "react-icons/gi";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { SiPointy } from "react-icons/si";
import ListCard from "@/components/ServiceCard/ListCard";

const services = [
  {
    title: "Газар барьцаалсан зээл",
    content: "3 сая ₮",
    icon: <SiPointy color="white" fontSize={36} />,
  },
  {
    title: "Хашаа байшин барьцаалсан зээл",
    content: "5 сая ₮ хүртэл",
    icon: <GiHouse color="white" fontSize={36} />,
  },
  {
    title: "Орон сууц барьцаалсан зээл",
    content: "50 сая ₮ хүртэл",
    icon: <BsBuildings color="white" fontSize={36} />,
  },
  {
    title: "Авто зогсоол барьцаалсан зээл",
    content: "5 сая ₮ хүртэл",
    icon: <PiWarehouse color="white" fontSize={36} />,
  },
  {
    title: "Авто машины лизингийн зээл",
    content: "Хүү-3,5%, Хугацаа - 24сар",
    icon: <BsFillCarFrontFill color="white" fontSize={36} />,
  },
  {
    title: "Авто машин барьцаалсан зээл",
    content: "Хүү-4,5%, Хугацаа - 9сар",
    icon: <LiaTruckPickupSolid color="white" fontSize={36} />,
  },
];

const lists = [
  "Газар барьцаалсан зээл 3 сая төгрөг орлого нотлохгүй шууд олгоно.",
  "Хашаа байшин барьцаалсан зээл 5 сая төгрөг орлого нотлохгүй шууд олгоно.",
  "Орон сууц барьцаалсан зээл 3 сая төгрөг орлого нотлохгүй шууд олгоно.",
];

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="container m-auto pt-9 lg:pt-9">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 lg:mb-20">
            <h2
              className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  text-primary
                  uppercase
                  "
            >
              Бидний бүтээгдэхүүн
            </h2>
            <p className="text-lg text-primary">
              Бид үл хөдлөх хөрөнгө барьцаалан 24 сарын хугацаатай 3.9%-н хүүтэй
              5 сая төгрөг хүртэлх зээлийг орлого нотлохгүйгээр өдөрт нь
              шийдвэрлэн олгож байна.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mb-6">
        {/* CARDS */}
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            content={service.content}
            icon={service.icon}
          />
        ))}
      </div>
      {/* list */}
      <div className="px-4 mx-auto mb-10">
        {lists.map((list, index) => (
          <ListCard content={list} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
