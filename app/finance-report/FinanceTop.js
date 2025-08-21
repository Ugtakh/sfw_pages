"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import YearList from "./YearList";
import { report } from "process";

const ViewDocs = dynamic(() => import("@/components/pdf/ViewDoc"), {
  ssr: false,
});

const pdfUrl2022 = "/assets/pdfs/finance-reports/audit-report-2022.pdf";
const pdfUrl2023 = "/assets/pdfs/finance-reports/audit-report-2023.pdf";
const pdfUrl2024 = "/assets/pdfs/finance-reports/audit-report-2024.pdf";

const years = [
  {
    year: "2022",
    isSelected: true,
    report: pdfUrl2022,
  },
  {
    year: "2023",
    isSelected: true,
    report: pdfUrl2023,
  },
  {
    year: "2024",
    isSelected: true,
    report: pdfUrl2024,
  },
];

const FinanceTop = () => {
  const [isSelectYear, setIsSelectYear] = useState({
    year: `${(new Date().getFullYear() - 1).toString()}`,
    isSelected: true,
    report: pdfUrl2022,
  });

  console.log("lastYear", isSelectYear);

  const onSelectYear = (selectedObj) => {
    setIsSelectYear(selectedObj);
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
                  isSelectYear={isSelectYear.year}
                />

                <div className="col-lg-10">
                  <ViewDocs pdfUrl={isSelectYear.report} />
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
