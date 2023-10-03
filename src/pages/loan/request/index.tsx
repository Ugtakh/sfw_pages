import TextField from "@/components/Calculator/TextField";
import React, { ChangeEvent, useState } from "react";

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
  errors: {};
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
  //   <div className="">
  //     <h2 className="text-center text-sm font-bold">
  //       ТАНД ЯАРАЛТАЙ МӨНГӨ ХЭРЭГТЭЙ БАЙНА УУ
  //     </h2>

  //     <h2 className="text-center text-sm font-bold">
  //       ТЭГВЭЛ АНХААРЛАА НААШ НЬ ХАНДУУЛААРАЙ
  //     </h2>

  //     <p>
  //       Бид орон сууц, хашаа байшин барьцаалан 24 сарын хугацаатай, 3.9%-н
  //       хүүтэй, 5 сая төгрөг хүртэлх зээлийг орлого нотлохгүйгээр өдөрт нь
  //       шийдвэрлэн олгож байна. Газар барьцаалсан зээл 3 сая төгрөг хүртэл
  //       орлого нотлохгүй шууд олгоно. Хашаа байшин барьцаалсан зээл 5 сая төгрөг
  //       хүртэл орлого нотлохгүй шууд олгоно. Орон сууц барьцаалсан зээл 5 сая
  //       төгрөг хүртэл орлого нотлохгүй шууд олгоно.
  //     </p>
  //     <p>
  //       Хэрэв та барьцаа хөрөнгөн дээрээ амьдардаг, тогтсон ажил, хөдөлмөр
  //       эрхэлдэг бол бидэнд хандана уу. Бид таны санхүүгийн асуудлыг шуурхай
  //       шийдвэрлэнэ.
  //     </p>
  //     <p>Утас: 9097-8085, 9098-8085, 9105-8085, 9010-8085</p>
  //     <div>
  //       <p>
  //         Төв салбар: Улаанбаатар хот , Сүхбаатар дүүрэг, 11-р хороо, 7-р
  //         хороолол, Ногоон нуурын гудамж 25, Прован оффис 309 тоот
  //       </p>
  //       <p>9098-8085, 90108085</p>
  //     </div>
  //     <div>
  //       <p>
  //         БЗД салбар: Улаанбаатар хот , Баянзүрх дүүрэг, 16-р хороо,
  //         Дандарбаатар, Соёмбо төв, 304 тоот
  //       </p>
  //       <p>9097-8085, 91058085</p>
  //     </div>

  //     <div className="relative px-6 lg:px-8">
  //       <h1>ЗЭЭЛ ХҮСЭГЧИЙН БӨГЛӨХ ХЭСЭГ</h1>
  //       <div className="mx-auto max-w-2xl py-4 ">
  //         <div className="py-6 px-6 lg:px-8">
  //           <form className="mx-auto max-w-xl" autoComplete="off">
  //             <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
  //               <TextField
  //                 name="firstName"
  //                 type="text"
  //                 label="Таны овог"
  //                 placeholder="50,00,000"
  //                 unit={CURRENCY_SYMBOL}
  //                 value={"909090"}
  //                 error={state.errors}
  //                 onChange={onInputChange}
  //               />
  //             </div>

  //             <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
  //               <button
  //                 type="button"
  //                 onClick={() => {
  //                   sendRequest();
  //                 }}
  //                 className="uppercase text-sm border border-primary rounded-lg p-2 hover:bg-primary hover:text-white"
  //               >
  //                 Бодох
  //               </button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Request;
