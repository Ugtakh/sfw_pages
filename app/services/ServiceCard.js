import React from "react";
import Link from "next/link";

const services = [
  {
    name: "ШУУРХАЙ ЗЭЭЛ",
    icon: "",
    content:
      "Өрхийн хэрэглээнд зориулсан үл хөдлөх хөрөнгө болон автомашин барьцаалсан зээл",
    link: "/services/loan-1",
  },
  {
    name: "БИЗНЕСИЙН ЗЭЭЛ",
    icon: "",
    content:
      "Бүх төрлийн бизнес эрхлэгчдийг дэмжих, эргэлтийн хөрөнгө, хөрөнгө оруулалтын урт хугацаатай бизнесийн зээл",
    link: "/services/loan-2",
  },
  {
    name: "АВТОМАШИНЫ ЗЭЭЛ",
    icon: "",
    content:
      "Өрхийн хэрэглээндээ зориулан автомашин худалдан авахад зориулсан зээл",
    link: "/services/loan-3",
  },

  {
    name: "ХЭРЭГЛЭЭНИЙ ЗЭЭЛ",
    icon: "",
    content:
      "Өрхийн хэрэглээний цахилгаан бараа болон гар утас худалдан авахад зориулсан зээл",
    link: "/services/loan-5",
  },
  {
    name: "НОГООН ЗЭЭЛ",
    icon: "",
    content:
      "Байгальд ээлтэй, эрчим хүчний хэмнэлттэй, агаарын болон хөрсний бохирдлыг бууруулахад чиглэсэн үйл ажиллагааг дэмжих зорилготой зээл",
    link: "/services/loan-4",
  },
];

const ServiceCard = () => {
  return services.map((service, i) => {
    if (i === services.length - 1) {
      return (
        <div key={i} className="col-md-12">
          <Link href={service.link}>
            <div className="single-inner-service single-inner-service-2 trans-1">
              <div className="service-icon bg-24">
                <img src="/assets/images/logo/favicon.png" alt="" />
              </div>
              <div className="service-content">
                <h3 className="font-f-3">{service.name}</h3>
                <p className="font-f-3">{service.content}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    }

    return (
      <div key={i} className="col-md-6">
        <Link href={service.link}>
          <div className="single-inner-service single-inner-service-2 trans-1">
            <div className="service-icon bg-24">
              <img src="/assets/images/logo/favicon.png" alt="" />
            </div>
            <div className="service-content">
              <h3 className="font-f-3">{service.name}</h3>
              <p className="font-f-3">{service.content}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
};

export default ServiceCard;
