import React from "react";
import dynamic from "next/dynamic";
const ViewDocs = dynamic(() => import("@/components/pdf/ViewDoc"), {
  ssr: false,
});

const ShareTop = () => {
  return (
    <div className="about-inner bg-28 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="mr50">
              <div className="heading2 no-margin-heading">
                <small className="heading-top inner-heading-top">
                  <img src="/assets/images/logo/favicon.png" alt="" />
                  СЭКЮР ФИНАНС ББСБ
                </small>
                <h3>НОГДОЛ АШГИЙН БОДЛОГО</h3>
                <ViewDocs pdfUrl="/assets/pdfs/share-policy.pdf" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareTop;
