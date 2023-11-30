import React from "react";
import { CultureCard } from "./CultureCard";
import { BsEmojiSmile } from "react-icons/bs";
import { BiHappyHeartEyes } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { FaGratipay } from "react-icons/fa";

const cards = [
  {
    title: "Хамт олон",
    content:
      "Бид үргэлж хамтын хүчээр аливаа ажилын ард гардаг бөгөөд манай байгууллагууллагын нэгээхэн чухал хэсэг юм",
    imgUrl: "/assets/images/about/team1.jpg",
    icon: <RiTeamFill color="green" fontSize={120} />,
  },
  {
    title: "Аз жаргал",
    content:
      "Бид үргэлж аз жаргалтайгаар ажлыг хийдэг бөгөөд та бүхнийасуудлыг хамтдаа шийдэж өгнө",
    imgUrl: "/assets/images/about/team.jpg",
    icon: <BiHappyHeartEyes color="green" fontSize={120} />,
  },
  {
    title: "Инээмсэглэл",
    content:
      "Бид халуун дотно мэдрэмжийг таньд өгөхдөө баяртай байдаг. Үргэлж эерэг, үргэлж хамтдаа, үргэлж шинэлэг байна.",
    imgUrl: "/assets/images/about/Welcome.jpg",
    icon: <BsEmojiSmile color="green" fontSize={120} />,
  },
  {
    title: "Талархал",
    content:
      "Бид нөхцөл байдал, цаг агаар, салхины чигийг өөрчилж чадахгүй ч өөрийгөө өөрчилж чадна. Үргэлж эерэг, үргэлж хамтдаа, үргэлж шинэлэг байна",
    imgUrl: "/assets/images/about/culture1.jpg",
    icon: <FaGratipay color="green" fontSize={120} />,
  },
];

const CultureMain = () => {
  return (
    <div className="team-2 padding-bottom2 inner-font-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading2 text-center">
              {/* <small className="heading-top inner-heading-top">
                <img src="/assets/img/icons/hands.svg" alt="" />
                СЭКЮР ФИНАНС ББСБ
              </small> */}
              <h2>БИДНИЙ СОЁЛ</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* cards */}
          {cards.map((card) => (
            <CultureCard card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CultureMain;
