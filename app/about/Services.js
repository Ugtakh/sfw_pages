import React from "react";

const Services = () => {
  return (
    <div className="service-inner-1 section-padding2 inner-font-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading2 text-center">
              <small className="heading-top inner-heading-top">
                <img src="/assets/images/logo/favicon.png" alt="" />
                СЭКЮР ФИНАНС ББСБ
              </small>
              <h3 style={{ paddingTop: 30 }}>БИДНИЙ АЛСЫН ХАРАА</h3>
              <h5>
                Бид илүү сайн ирээдүйг бүтээхийн тулд хүртээмжтэй, санхүүгийн
                цогц үйлчилгээг үзүүлэгч байгууллага байна.
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading2 text-center">
              <h3>ЭРХЭМ ЗОРИЛГО</h3>
              <h5>
                Харилцагчдынхаа амьдралын чухал үеүдэд, санхүүгийн шийдвэр
                гаргах агшин бүрд хамт байж, хэрэгцээ шаардлагад нийцсэн
                санхүүгийн цогц үйлчилгээг эрх тэгш, ёс зүйтэйгээр түргэн
                шуурхай үзүүлнэ.
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <h2 style={{ textAlign: "center", paddingBottom: 10 }}>
            БИДНИЙ ҮНЭТ ЗҮЙЛС
          </h2>
          <div className="col-md-6 col-lg-4">
            <div className="single-service text-center">
              <div className="service-icon bg-24">
                <img src="/assets/img/icons/service-11.png" alt="" />
              </div>
              <h3>Хурдан шуурхай найрсаг</h3>
              {/* <p>
                      See whether your time-off schedule overlaps with a
                      teammate’s while applying for or reviewing a time-off
                      request.
                    </p> */}
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service text-center">
              <div className="service-icon bg-24">
                <img src="/assets/img/icons/service-12.png" alt="" />
              </div>
              <h3>Үргэлж санаачилгатай </h3>
              {/* <p>
                      Get notified in any Slack channel about who is on break,
                      the next public holiday, and who to wish a happy birthday.
                    </p> */}
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service text-center">
              <div className="service-icon bg-24">
                <img src="/assets/img/icons/service-13.png" alt="" />
              </div>
              <h3>Шинийг эрэлхийлэгч</h3>
              {/* <p>
                      Get notified in any Slack channel about who is on break,
                      the next public holiday, and who to wish a happy birthday.
                    </p> */}
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service text-center">
              <div className="service-icon bg-24">
                <img src="/assets/img/icons/service-14.png" alt="" />
              </div>
              <h3>Тасралтгүй хөгжигч </h3>
              {/* <p>
                      See whether your time-off schedule overlaps with a
                      teammate’s while applying for or reviewing a time-off
                      request.
                    </p> */}
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service text-center">
              <div className="service-icon bg-24">
                <img src="/assets/img/icons/service-15.png" alt="" />
              </div>
              <h3>Нийгмийн хариуцлагатай</h3>
              {/* <p>
                      Get notified in any Slack channel about who is on break,
                      the next public holiday, and who to wish a happy birthday.
                    </p> */}
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service text-center">
              <div className="service-icon bg-24">
                <img src="/assets/img/icons/service-16.png" alt="" />
              </div>
              <h3>Тогтвортой хөгжлийг дэмжигч </h3>
              {/* <p>
                      Get notified in any Slack channel about who is on break,
                      the next public holiday, and who to wish a happy birthday.
                    </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
