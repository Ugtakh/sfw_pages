import React, { useState } from "react";
import MemberCard from "./MemberCard";
import Top from "./Top";
import dynamic from "next/dynamic";

const ViewDocs = dynamic(() => import("@/components/pdf/ViewDoc"), {
  ssr: false,
});

const members = [
  {
    position: "ТУЗ-ийн ДАРГА",
    name: "Тагарваа Түвшинбаяр",
    positionTitle: "“Сэкюр Финанс ББСБ”-ын Хувьцаа эзэмшигч",
  },
  {
    position: "Хараат бус ГИШҮҮН",
    name: "Алтаншагай Даваабилэг",
    positionTitle: "Үндэсний ба Олон улсын Арилжааны Арбитрт Арбитч",
  },
  {
    position: "ТУЗ-ийн ГИШҮҮН",
    name: "Тагарваа Тэгшжаргал",
    positionTitle: "“Сэкюр Финанс ББСБ”-ын Гүйцэтгэх захирал",
  },
  {
    position: "ТУЗ-ийн ГИШҮҮН",
    name: "Тагарваа Тэгшбаяр",
    positionTitle: "“Сэкюр Финанс ББСБ”-ын Төв салбарын захирал",
  },
  {
    position: "ТУЗ-ийн ГИШҮҮН",
    name: "Түвшинбаяр Алтанзул",
    positionTitle: "",
  },
];

const Services = () => {
  const [isView, setIsView] = useState(false);

  const handleView = () => {
    setIsView(!isView);
  };
  return (
    <div className="service-inner-1 section-padding2 inner-font-1">
      <div className="container">
        <Top />
        <div className="row">
          <h4 style={{ textAlign: "center", paddingBottom: 10 }}>
            ТУЗ-ын гишүүд
          </h4>
          {members.map((member) => (
            <MemberCard member={member} />
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* <small className="heading-top inner-heading-top">
                  <img src="/assets/images/logo/favicon.png" alt="" />
                  СЭКЮР ФИНАНС ББСБ
                </small> */}
            <h2>ТУЗ-ийн Журам</h2>
            <div style={{ margin: 10 }}>
              <div className="theme-btn-2" onClick={handleView}>
                {isView ? "НУУХ" : "ХАРАХ"}
              </div>
            </div>
            {isView && <ViewDocs pdfUrl="/assets/pdfs/boarding-policy.pdf" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
