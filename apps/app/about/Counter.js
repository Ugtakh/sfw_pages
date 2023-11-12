import CounterUp from "@/components/elements/CounterUp";
import React from "react";

const Counter = () => {
  return (
    <div
      className="counter-4 inner-counter-4 inner-font-1 section-padding"
      style={{
        background: "url(assets/images/about/about2.jpg) no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div
              className="heading2 white-heading text-center "
              style={{ visibility: "hidden" }}
            >
              <small className="heading-top inner-heading-top">
                <img src="/assets/img/icons/hands.svg" alt="" />
                Our Success in Numbers
              </small>
              <h2>Why Consultia advisor is the best?</h2>
            </div>
          </div>
        </div>
        <div className="row counters-3">
          <div className="col-lg-3 col-6">
            <div className="single-couter-3">
              <h3>
                <CounterUp count={100} />+
              </h3>
              <p>Ажилтантай</p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="single-couter-3">
              <h3>
                ₮<CounterUp count={10} />
                тэрбум
              </h3>
              <p>Нийт хөрөнгө оруулт</p>
            </div>
          </div>
          {/* <div className="col-lg-3 col-6">
                  <div className="single-couter-3">
                    <h3>
                      <CounterUp count={40} />+
                    </h3>
                    <p>Full Time Advisors</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="single-couter-3">
                    <h3>
                      <CounterUp count={30} />+
                    </h3>
                    <p>Employess</p>
                  </div>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Counter;
