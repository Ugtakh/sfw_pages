import Layout from "@/components/layout/Layout";

const loanTypes = [
  {
    title: "Сургалтын төлбөрийн зээл",
    value: "2.9%",
    duration: "12 сар",
    amount: "нэхэмжлэхийн дагуу",
    bare: "	үл хөдлөх, автомашин",
  },
  {
    title: "Цахилгаан барааны лизингийн зээл",
    value: "3.0%",
    duration: "30 сар",
    amount: "5 сая хүртэл",
    bare: "цахилгаан бараа",
  },
  {
    title: "Гар утасны лизингийн зээл",
    value: "3.0%",
    duration: "18 сар",
    amount: "3 сая хүртэл",
    bare: "гар утас",
  },
  {
    title: "Хялбар зээл",
    value: "3.0%",
    duration: "12 сар",
    amount: "10 сая хүртэл",
    bare: "барьцаагүй",
  },
];

export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Service">
        <div>
          <div className="section-padding bg-28">
            <div className="container" style={{ marginTop: 30 }}>
              <div className="col-md-12">
                <div className="single-inner-service single-inner-service-2 trans-1">
                  <div className="service-icon bg-24">
                    <img src="/assets/images/logo/favicon.png" alt="" />
                  </div>
                  <div className="service-content">
                    <h3 className="font-f-3">ХЭРЭГЛЭЭНИЙ ЗЭЭЛ</h3>
                    <p className="font-f-1" style={{ fontSize: "20px" }}>
                      Өрхийн хэрэглээний цахилгаан бараа, гар утас худалдан авах
                      болон сургалтын төлбөрийн зээлийг шуурхай шийдвэрлэж
                      байна.
                    </p>
                  </div>
                  <LoanCard
                    loan={"Хэрэглээний зээлийн төрлүүд"}
                    data={loanTypes}
                  />
                  <LoanRequirement />
                  <LoanMaterial />
                </div>
              </div>
            </div>
          </div>
          {/*=====Service end=======*/}

          {/* <div className="space30" /> */}
          {/*=====Subscribe start=======*/}
          {/* <BannerSection /> */}
        </div>
      </Layout>
    </>
  );
}

const BannerSection = () => {
  return (
    <div className="container">
      <div className="subscribe-4 bg12 inner-font-1 inner-subscribe">
        <img
          style={{ width: "100%" }}
          src="assets/images/about/banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

const LoanCard = ({ loan, data }) => {
  return (
    <div style={{ marginTop: 30 }}>
      <h4>{loan}</h4>
      <table
        style={{ borderCollapse: "collapse", width: "100%", fontSize: "16px" }}
      >
        <tr>
          <th
            className="font-f-1"
            style={{ border: "1px solid #ddd", padding: "8px", width: "30%" }}
          ></th>
          <th
            className="font-f-1"
            style={{ border: "1px solid #ddd", padding: "8px" }}
          >
            ХҮҮ
          </th>
          <th
            className="font-f-1"
            style={{ border: "1px solid #ddd", padding: "8px" }}
          >
            ХУГАЦАА
          </th>
          <th
            className="font-f-1"
            style={{ border: "1px solid #ddd", padding: "8px" }}
          >
            ЗЭЭЛИЙН ХЭМЖЭЭ
          </th>
          <th
            className="font-f-1"
            style={{ border: "1px solid #ddd", padding: "8px" }}
          >
            БАРЬЦАА
          </th>
        </tr>
        {data.map((d) => (
          <tr>
            <td
              className="font-f-1"
              style={{ border: "1px solid #ddd", padding: "8px", width: "30%" }}
            >
              {d.title}
            </td>
            <td
              className="font-f-1"
              style={{ border: "1px solid #ddd", padding: "8px" }}
            >
              {d.value}
            </td>
            <td
              className="font-f-1"
              style={{ border: "1px solid #ddd", padding: "8px" }}
            >
              {d.duration}
            </td>
            <td
              className="font-f-1"
              style={{ border: "1px solid #ddd", padding: "8px" }}
            >
              {d.amount}
            </td>
            <td
              className="font-f-1"
              style={{ border: "1px solid #ddd", padding: "8px" }}
            >
              {d.bare}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
const LoanRequirement = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <h4>Тавигдах шаардлага</h4>
      <ul style={{ listStyle: "inherit", paddingLeft: 40, fontSize: "16px" }}>
        <li>МУ-ын иргэн, 18 нас хүрсэн, эрх зүйн бүрэн чадамжтай байх</li>
        <li>Зээлийг эргэн төлөх тогтмол орлоготой байх</li>
        <li>
          Банк, ББСБ-д зээл, батлан даалтын хугацаа хэтэрсэн, чанаргүй зээлийн
          өрийн үлдэгдэлгүй байх /Анхаарал хандуулах болон Чанаргүй зээлийн
          түүхтэй бол тухайн зээлийг хэрхэн төлснөөс хамаарч судалж болно/х
        </li>
        <li>
          Улаанбаатар хотын харьяалалтай байх. / Багануур, Багахангай дүүрэг
          орохгүй/
        </li>
      </ul>
    </div>
  );
};
const LoanMaterial = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <h4>Бүрдүүлэх материал</h4>
      <ul style={{ listStyle: "inherit", paddingLeft: 40, fontSize: "16px" }}>
        <li>Хүчин төгөлдөр иргэний үнэмлэх х</li>
        <li>
          Үл хөдлөх хөрөнгө болон автомашины гэрчилгээ, сургалтын төлбөрийн
          нэхэмжлэх, барааны нэхэмжлэх
        </li>
        <li>Орлого орж гардаг дансны хуулга /сүүлийн 1 жилээр/</li>
        <li>
          Банк, ББСБ болон бусад этгээдээс авсан зээлтэй бол зээлийн гэрээ,
          дансны хуулга /харилцах дансны хуулгаар нотлогдож байвал шаардлагагүй/
        </li>
        <li>
          Оршин суугаа хаягийн лавлагаа, ҮХХ-н бүх төрлийн лавлагаа, НД лавлагаа
          зэргийг манай байгууллага ХУР системээр дамжуулан авдаг болно.
        </li>
      </ul>
    </div>
  );
};
