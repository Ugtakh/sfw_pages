import Image from "next/image";
import Card from "./Card";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiNewspaper } from "react-icons/gi";
import { BiCalculator } from "react-icons/bi";

interface cardDataType {
  imgSrc: string;
  heading: string;
  percent: string;
  subheading: string;
  icon?: any;
  href: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: "/assets/buyers/ourbuyers.svg",
    percent: "80k",
    heading: "Зээлийн Бүтээгдэхүүн",
    subheading:
      "Санхүүгийн үйлчилгээнд хамрагдаж чаддахгүй иргэдэд зориулсан бичил зээлийн үйлчилгээг хурдан шуурхай үзүүлж байна.",
    icon: <BsFillPersonLinesFill size={60} color="#007C48" />,
    href: "/services",
  },
  {
    imgSrc: "/assets/buyers/projectcompleted.svg",
    percent: "90k",
    heading: "Зээлийн хүсэлт",
    subheading: "Та зээлийн хүсэлт манайхруу илгээх боломжтой",
    icon: <GiNewspaper size={60} color="#007C48" />,
    href: "/loan/request",
  },
  {
    imgSrc: "/assets/buyers/happybuyers.svg",
    percent: "80%",
    heading: "Зээлийн Тооцоолуур",
    subheading: "Та зээлийн төлөлт болон хувиараа мэдэх боломжтой",
    icon: <BiCalculator size={60} color="#007C48" />,
    href: "/loan/calculator",
  },
  //   {
  //     imgSrc: "/assets/buyers/teammembers.svg",
  //     percent: "50+",
  //     heading: "Team members",
  //     subheading: "Follow a hashtag growth total posts, videos and images.",
  //   },
];

const Buyers = () => {
  return (
    <div className="mx-auto py-7 px-6">
      <div className="grid align-top  lg:grid-cols-3 gap-y-20 gap-x-5">
        {cardData.map((card, i) => (
          <Card key={i} item={card} />
        ))}
      </div>
    </div>
  );
};

export default Buyers;

{
  /* <div className="flex flex-col justify-center items-center" key={i}>
            <div className="flex justify-center border border-border  p-2 w-10 rounded-lg">
              <Image
                src={items.imgSrc}
                alt={items.imgSrc}
                width={30}
                height={30}
              />
            </div>
            <h2 className="text-4xl lg:text-6xl text-black font-semibold text-center mt-5">
              {items.percent}
            </h2>
            <h3 className="text-2xl text-black font-semibold text-center lg:mt-6">
              {items.heading}
            </h3>
            <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
              {items.subheading}
            </p>
          </div> */
}
