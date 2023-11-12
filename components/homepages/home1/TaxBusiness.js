import Link from "next/link";

const services = [
  {
    name: "ШУУРХАЙ ЗЭЭЛ",
    icon: "/assets/images/logo/favicon.png",
    content:
      "Өрхийн хэрэглээнд зориулсан үл хөдлөх хөрөнгө болон автомашин барьцаалсан зээл",
  },
  {
    name: "БИЗНЕСИЙН ЗЭЭЛ",
    icon: "/assets/images/logo/favicon.png",
    content:
      "Бүх төрлийн бизнес эрхлэгчдийг дэмжих, эргэлтийн хөрөнгө, хөрөнгө оруулалтын урт хугацаатай бизнесийн зээл",
  },
  {
    name: "АВТОМАШИНЫ ЗЭЭЛ",
    icon: "/assets/images/logo/favicon.png",
    content:
      "Өрхийн хэрэглээндээ зориулан автомашин худалдан авахад зориулсан зээл",
  },

  {
    name: "ХЭРЭГЛЭЭНИЙ ЗЭЭЛ",
    icon: "/assets/images/logo/favicon.png",
    content:
      "Өрхийн хэрэглээний цахилгаан бараа болон гар утас худалдан авахад зориулсан зээл",
  },
  {
    name: "НОГООН ЗЭЭЛ",
    icon: "/assets/images/logo/favicon.png",
    content:
      "Байгальд ээлтэй, эрчим хүчний хэмнэлттэй, агаарын болон хөрсний бохирдлыг бууруулахад чиглэсэн үйл ажиллагааг дэмжих зорилготой зээл",
  },
];

export default function TaxBusiness() {
  return (
    <>
      <div className="tax-business section-padding2 bg6" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="heading2 white-heading text-center">
                <small
                  data-aos="fade-up"
                  data-aos-duration={600}
                  className="heading-top"
                >
                  <img src="/assets/img/icons/hands.svg" alt="" />
                  СЭКЮР ФИНАНС ББСБ
                </small>
                <h2 data-aos="fade-up" data-aos-duration={800}>
                  <span className="heilight-left">Дэлхийн </span> жишигт нийцсэн
                  үйлчилгээ
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Card */}
            {services.map((service, i) => (
              <Card key={i} service={service} />
            ))}
            <div className="space20" />
            <div
              className="col-12 text-center"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <Link className="theme-btn-3" href="#">
                илүү дэлгэрэнгүй
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Card = ({ service }) => {
  return (
    <div className="col-md-6" data-aos="fade-up" data-aos-duration={600}>
      <div className="single-business trans-1">
        <div className="business-icon">
          <img src={service.icon} alt={service.name} />
        </div>
        <h3>{service.name}</h3>
        <p>{service.content}</p>
        <Link href="/services" className="theme-btn-7">
          цааш үзэх
          <span>
            <i className="fa-solid fa-arrow-right" />
          </span>
        </Link>
      </div>
    </div>
  );
};
