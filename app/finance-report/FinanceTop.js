"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import YearList from "./YearList";
const ViewDocs = dynamic(() => import("@/components/pdf/ViewDoc"), {
  ssr: false,
});

const years = [
  {
    year: "2022",
    isSelected: true,
  },
  {
    year: "2023",
    isSelected: true,
  },
  {
    year: "2024",
    isSelected: true,
  },
  {
    year: "2025",
    isSelected: true,
  },
];

const FinanceTop = () => {
  const [isSelectYear, setIsSelectYear] = useState("2022");

  const onSelectYear = (year) => {
    setIsSelectYear(year);
  };

  return (
    <div className="about-inner bg-28 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="heading2 no-margin-heading">
              <small
                className="heading-top inner-heading-top"
                style={{ marginLeft: 10, marginRight: 10 }}
              >
                <img src="/assets/images/logo/favicon.png" alt="" />
                Санхүүгийн Тайлан
              </small>

              <h2>Санхүүгийн Тайлан</h2>
              <div className="row">
                <YearList
                  years={years}
                  onSelectYear={onSelectYear}
                  z
                  isSelectYear={isSelectYear}
                />

                <div className="col-lg-10">
                  <ViewDocs pdfUrl="/assets/pdfs/audit-report.pdf" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceTop;
