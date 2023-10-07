import { CURRENCY_SYMBOL } from "@/utils/constants";
import React, { ChangeEvent, useState } from "react";
import TextField from "@/components/Calculator/TextField";

interface IRequestForm {
  req: {};
  fname: String;
  name: String;
  regFirst: String;
  regSecond: String;
  regiter: String;
  address: String;
  mobile: number;
  loanPropose: String;
  loanAmount: number;
  loanMonth: String;
  asset: String;
  assetAddress: String;
  apartM2: String;
  landM2: String;
  fReven: String;
  fExpend: String;
  otherLoanPayment: String;
  errors: {
    loanAmount?: string;
    interestRate?: string;
    loanTenure?: string;
  };
}

const assets = [
  { num: 0, name: "Дан газар /өмчлөхийн гэрчилгээтэй/" },
  { num: 1, name: "Хашаа байшин /тус тусдаа гэрчилгээтэй/" },
  { num: 2, name: "Орон сууц" },
  { num: 3, name: "Авто зогсоол" },
];

const loanProposes = [
  { num: 0, name: "Барьцааг сайжруулах буюу хашаа, байшингийн засварт" },
  { num: 1, name: "Сургалтын төлбөр болон гэр бүлийн гишүүний боловсролд" },
  { num: 2, name: "Орлогоо нэмэгдүүлэх зорилгоор буюу хувийн бизнестээ" },
  { num: 3, name: "Хөрөнгөө нэмэгдүүлэх /газар, автомашин худалдан авах/" },
  { num: 4, name: "Гэр бүлийн гишүүдийн эрүүл мэндэд" },
  { num: 5, name: "Өрхийн бусад ойр зуурын хэрэглээнд" },
  { num: 6, name: "Яаралтай бусдаас авсан өр зээлээ төлөхөд" },
  { num: 7, name: "Гадагшаа явахад /хэн нэгэн ойр дотно хүн, солонгос гм/" },
];

const abcs = [
  { num: "А", name: "А" },
  { num: "Б", name: "Б" },
  { num: "В", name: "В" },
  { num: "Г", name: "Г" },
  { num: "Д", name: "Д" },
  { num: "Е", name: "Е" },
  { num: "Ё", name: "Ё" },
  { num: "Ж", name: "Ж" },
  { num: "З", name: "З" },
  { num: "И", name: "И" },
  { num: "Й", name: "Й" },
  { num: "К", name: "К" },
  { num: "Л", name: "Л" },
  { num: "М", name: "М" },
  { num: "Н", name: "Н" },
  { num: "О", name: "О" },
  { num: "Ө", name: "Ө" },
  { num: "П", name: "П" },
  { num: "Р", name: "Р" },
  { num: "С", name: "С" },
  { num: "Т", name: "Т" },
  { num: "У", name: "У" },
  { num: "Ү", name: "Ү" },
  { num: "Ф", name: "Ф" },
  { num: "Х", name: "Х" },
  { num: "Ц", name: "Ц" },
  { num: "Ч", name: "Ч" },
  { num: "Ш", name: "Ш" },
  { num: "Щ", name: "Щ" },
  { num: "Ъ", name: "Ъ" },
  { num: "Ы", name: "Ы" },
  { num: "Ь", name: "Ь" },
  { num: "Э", name: "Э" },
  { num: "Ю", name: "Ю" },
  { num: "Я", name: "Я" },
];

const Request = () => {
  const [state, setState] = useState<IRequestForm>({
    req: {},
    fname: "",
    name: "",
    regFirst: "",
    regSecond: "",
    regiter: "",
    address: "",
    mobile: 0,
    loanPropose: "",
    loanAmount: 0,
    loanMonth: "",
    asset: "",
    assetAddress: "",
    apartM2: "",
    landM2: "",
    fReven: "",
    fExpend: "",
    otherLoanPayment: "",
    errors: {},
  });

  const sendRequest = () => {
    // state.req.register = state.req.regFirst + state.req.regSecond + state.req.reg;
    // let request = state.req;
    // this.apiService.sendRequest(request).subscribe(
    //   (response) => {
    //     var nowDt = new Date();
    //     var strDt = new Date();
    //     var endDt = new Date();
    //     strDt.setHours(8, 30, 0, 0);
    //     endDt.setHours(17, 30, 0, 0);
    //     if (strDt > nowDt || nowDt > endDt) {
    //       alert(
    //         "Уучлаарай манай ажлын цаг дууссан байна. Ажлын цаг эхлэнгүүт бид таны хүсэлтийг хүлээн аваад илгээх болно. Бидэнд хандсан танд баярлалаа. Цагийн хуваарь: Даваа - Баасан 08: 30 - 17: 30 / Бямба, Нямд амарна /"
    //       );
    //       // this.req = {};
    //     } else {
    //       alert("Таны хүсэлт амжилттэй илгээгдлээ.");
    //       // this.req = {};
    //     }
    //   },
    //   (err: any) => {
    //     alert("Таны хүсэлт илгээгдсэнгүй дахин илгээнэ үү.");
    //   }
    // );
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      <h1 className="text-center text-3xl font-bold text-primary">
        ТУН УДАХГҮЙ
      </h1>
    </div>
  );

  // return (
  //   <div className="container m-auto">
  //     <ReduestInfo />
  //     <div className="relative mx-6 my-8">
  //       <h1 className="text-lg font-bold">ЗЭЭЛ ХҮСЭГЧИЙН БӨГЛӨХ ХЭСЭГ</h1>
  //       <div className="mx-auto max-w-2xl py-4 ">
  //         <div className="py-6">
  //           <form className="mx-auto max-w-xl" autoComplete="off">
  //             <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 my-5">
  //               <TextField
  //                 name="lastName"
  //                 type="text"
  //                 label="Таны овог"
  //                 placeholder="Таны овог"
  //                 value={"Naraa"}
  //                 onChange={onInputChange}
  //               />
  //               <TextField
  //                 name="firstName"
  //                 type="text"
  //                 label="Таны нэр"
  //                 placeholder="Таны нэр"
  //                 value={"Naraa"}
  //                 onChange={onInputChange}
  //               />
  //             </div>
  //             <div>
  //               <h5>
  //                 ТА ХОЛБОГДОХ МАТЕРИАЛЫН ЗУРГАА МАНАЙ FACEBOOK ХУУДСЫН ЧАТААР
  //                 ЯВУУЛААРАЙ.{" "}
  //                 <a
  //                   className="text-primary font-semibold"
  //                   href="https://www.facebook.com"
  //                   target="_blank"
  //                 >
  //                   ЗУРАГ ЯВУУЛАХ
  //                 </a>
  //               </h5>
  //             </div>

  //             <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
  //               <button
  //                 type="button"
  //                 onClick={() => {
  //                   sendRequest();
  //                 }}
  //                 className="uppercase text-sm border border-primary rounded-lg p-2 hover:bg-primary hover:text-white"
  //               >
  //                 илгээх
  //               </button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

const ReduestInfo = () => {
  return (
    <div className="mx-6">
      <h2 className="my-3 text-lg  font-bold">
        ТАНД ЯАРАЛТАЙ МӨНГӨ ХЭРЭГТЭЙ БАЙНА УУ
      </h2>

      <h2 className="my-3 text-lg font-bold">
        ТЭГВЭЛ АНХААРЛАА НААШ НЬ ХАНДУУЛААРАЙ
      </h2>

      <p className="text-base my-3">
        Бид орон сууц, хашаа байшин барьцаалан 24 сарын хугацаатай, 3.9%-н
        хүүтэй, 5 сая төгрөг хүртэлх зээлийг орлого нотлохгүйгээр өдөрт нь
        шийдвэрлэн олгож байна. Газар барьцаалсан зээл 3 сая төгрөг хүртэл
        орлого нотлохгүй шууд олгоно. Хашаа байшин барьцаалсан зээл 5 сая төгрөг
        хүртэл орлого нотлохгүй шууд олгоно. Орон сууц барьцаалсан зээл 5 сая
        төгрөг хүртэл орлого нотлохгүй шууд олгоно.
      </p>
      <p className="text-base my-3">
        Хэрэв та барьцаа хөрөнгөн дээрээ амьдардаг, тогтсон ажил, хөдөлмөр
        эрхэлдэг бол бидэнд хандана уу. Бид таны санхүүгийн асуудлыг шуурхай
        шийдвэрлэнэ.
      </p>
      <p className="text-base my-3 ml-10">
        Утас: 9097-8085, 9098-8085, 9105-8085, 9010-8085
      </p>
      <div className="ml-10">
        <p className="text-base my-3">
          Төв салбар: Улаанбаатар хот , Сүхбаатар дүүрэг, 11-р хороо, 7-р
          хороолол, Ногоон нуурын гудамж 25, Прован оффис 309 тоот
        </p>
        <p className="text-base my-3 ml-10">9098-8085, 90108085</p>
      </div>
      <div className="ml-10">
        <p className="text-base my-3">
          БЗД салбар: Улаанбаатар хот , Баянзүрх дүүрэг, 16-р хороо,
          Дандарбаатар, Соёмбо төв, 304 тоот
        </p>
        <p className=" text-base  my-3 ml-10">9097-8085, 91058085</p>
      </div>
    </div>
  );
};

export default Request;
