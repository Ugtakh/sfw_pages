import React from "react";
import Image from "next/image";
import EmployeeCard from "@/components/EmployeeCard";

interface IAboutProps {
  title: string;
  content: string;
  imgUrl: string;
  align: string;
}

const employees = [
  { name: "Бат-эрдэнэ", avatarUrl: "/assets/avatar/A1.jpg" },
  { name: "Ууганбаатар", avatarUrl: "/assets/avatar/A2.jpg" },
  { name: "Батбаатар", avatarUrl: "/assets/avatar/A3.jpg" },
  { name: "Эрдэнэцэцэг", avatarUrl: "/assets/avatar/A4.jpg" },
];

const AboutCard = ({ title, content, imgUrl, align }: IAboutProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 py-9">
      {align === "l" ? (
        <>
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-3xl font-bold leading-9 text-primary pb-4 uppercase">
              {title}
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 text-justify text-primary">
              {content}
            </p>
          </div>
          <div className="w-full lg:w-1/2 ">
            <Image
              width={150}
              height={150}
              className="w-full h-full object-cover"
              src={imgUrl}
              alt="A group of People"
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-full lg:w-1/2 ">
            <Image
              width={150}
              height={150}
              className="w-full h-full object-cover"
              src={imgUrl}
              alt="A group of People"
            />
          </div>
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-3xl font-bold leading-9  pb-4 uppercase text-primary">
              {title}
            </h1>
            <p className="font-normal text-base leading-6  text-justify text-primary">
              {content}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

const StoryCard = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-8 pt-2">
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-primary pb-4">
          Mанай хамт олон
        </h1>
        <p className="font-normal text-base leading-6 text-primary text-justify">
          Бид ажилтнуудынхаа тогтвортой ажиллах боломжийг бүрдүүлэх, сэтгэл
          ханамж, бүтээмжийг нэмэгдүүлэх хүний нөөцийн уян хатан, оновчтой
          бодлогыг хэрэгжүүлэх замаар ажилтнуудын ажиллах таатай орчинг
          бүрдүүлж, хөгжин дэвших боломж бололцоогоор ханган ажилладаг.
        </p>
      </div>
      <div className="w-full lg:w-8/12 lg:pt-8">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
          {/* Card */}
          {employees.map((employee, index) => (
            <EmployeeCard
              key={index}
              name={employee.name}
              avatarUrl={employee.avatarUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="">
      <div className="2xl:container 2xl:mx-auto lg:py-4 lg:px-20 md:py-4 md:px-6 py-4 px-4">
        <AboutCard
          title="Бидний тухай"
          content="Манай банк бус санхүүгийн байгууллага нь 2016 оны 5 дугаар сарын
              17-ны өдрийн Санхүүгийн Зохицуулах Хорооны 162 тоот тогтоолоор
              Санхүүгийн зээлийн үйл ажиллагаа эрхлэх тусгай зөвшөөрлөө авч банк
              санхүүгийн салбарт тогтвортой үйл ажиллагаагаа явуулж байна. Манай
              улсын санхүүгийн зах зээл хурдацтай хөгжиж байгаа боловч ард
              иргэдэд амьдралаа дээшлүүлэх, богино хугацаанд санхүүгийн
              хэрэгцээгээ хангах зорилгоор уян хатан нөхцөлтэй зээлийн
              санхүүжилтийн хангагдаагүй хэрэгцээ байсаар байна. Иймээс бид
              харилцагчдадаа байнга сонсож тэдгээрийн санхүүгийн хэрэгцээг
              хангаж чадахуйц уян хатан нөхцөл бүхий зээлийн үйлчилгээг санал
              болгон ажиллахыг зорьж байна."
          imgUrl="/assets/banner/slider-3.png"
          align="l"
        />
        <AboutCard
          title="Алсын хараа"
          content="Дэлхийн жишигт нийцсэн санхүүгийн үйлчилгээг үзүүлэгч манлайлагч байгууллага байна."
          imgUrl="/assets/banner/slider-6.png"
          align="r"
        />
        <AboutCard
          title="ЭРХЭМ ЗОРИЛГО"
          content="Шилдэг боловсон хүчин, менежментийн багийг бүрдүүлэн харилцагчаа дээдлэн тэдгээрийн санхүүгийн сайн зөвлөгч, найдвартай түнш нь байж харилцан итгэлцэлд тулгуурласан хөрөнгийн үр ашигтай хуваарилалтаар хамтдаа хөгжин дэвшихэд бидний эрхэм зорилго оршино."
          imgUrl="/assets/banner/slider-4.png"
          align="l"
        />
      </div>
      <div className="2xl:container 2xl:mx-auto lg:py-10 lg:px-20 md:py-10 md:px-6 py-9 px-4 ">
        <StoryCard />
      </div>
    </section>
  );
};

export default About;

// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap');
