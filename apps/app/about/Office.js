import React from "react";
import Faq1 from "@/components/elements/Faq1";

const Office = () => {
  return (
    (
      <div className="office-area section-padding2 bg-13 inner-font-1 _relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="heading2 text-center">
                <small className="heading-top inner-heading-top">
                  <img src="/assets/img/icons/hands.svg" alt="" />
                  Our Success in Numbers
                </small>
                <h2>Our Offices Around the World</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-office">
                <div className="office-icon">
                  <img src="/assets/img/icons/telegram.png" alt="" />
                </div>
                <h3>
                  <Link href="#">New York Office</Link>
                </h3>
                <p>
                  90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                  States
                </p>
                <Link href="#" className="theme-btn-13">
                  Get Direction
                  <img
                    src="/assets/img/icons/arrow-up-right-inner-1.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-office">
                <div className="office-icon">
                  <img src="/assets/img/icons/telegram.png" alt="" />
                </div>
                <h3>San Francisco Office</h3>
                <p>
                  90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                  States
                </p>
                <Link href="#" className="theme-btn-13">
                  Get Direction
                  <img
                    src="/assets/img/icons/arrow-up-right-inner-1.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-office">
                <div className="office-icon">
                  <img src="/assets/img/icons/telegram.png" alt="" />
                </div>
                <h3>Dublin Office</h3>
                <p>
                  90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                  States
                </p>
                <Link href="#" className="theme-btn-13">
                  Get Direction
                  <img
                    src="/assets/img/icons/arrow-up-right-inner-1.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-office">
                <div className="office-icon">
                  <img src="/assets/img/icons/telegram.png" alt="" />
                </div>
                <h3>Boston Office</h3>
                <p>
                  90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                  States
                </p>
                <Link href="#" className="theme-btn-13">
                  Get Direction
                  <img
                    src="/assets/img/icons/arrow-up-right-inner-1.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-office">
                <div className="office-icon">
                  <img src="/assets/img/icons/telegram.png" alt="" />
                </div>
                <h3>Los Angeles Office</h3>
                <p>
                  90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                  States
                </p>
                <Link href="#" className="theme-btn-13">
                  Get Direction
                  <img
                    src="/assets/img/icons/arrow-up-right-inner-1.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-office">
                <div className="office-icon">
                  <img src="/assets/img/icons/telegram.png" alt="" />
                </div>
                <h3>Nashville Office</h3>
                <p>
                  90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                  States
                </p>
                <Link href="#" className="theme-btn-13">
                  Get Direction
                  <img
                    src="/assets/img/icons/arrow-up-right-inner-1.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-007">
          <img src="/assets/img/shapes/shape007.svg" alt="" />
        </div>
      </div>
    ) *
    (
      <div className="faqs-area section-padding inner-font-1 inner-faq-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading2 mr50">
                <small className="heading-top inner-heading-top">
                  <img src="/assets/img/icons/hands.svg" alt="" />
                  Our Success in Numbers
                </small>
                <h2>
                  We Handle The Most Tedious Bookkeeping Tasks of Your Business
                  Operations.
                </h2>
                <p>
                  Experienced, knowledgeable professionals in Property Tax
                  Consulting. Our team of Property Tax Consultants is committed
                  to saving you money by obtaining the lowest possible assessed
                  value for your commercial or residential properties.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ml50">
                <div className="faqs">
                  <Faq1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Office;
