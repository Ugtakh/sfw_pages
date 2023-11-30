import Layout from "@/components/layout/Layout";

const loan1 = [
  {
    title: "Зээлийн хүү",
    value: "2.7 – 3%",
  },
  {
    title: "Зээлийн хугацаа",
    value: "24-48 сар",
  },
  {
    title: "Үйлчилгээний шимтгэл",
    value: "0.5%",
  },
  {
    title: "Барьцаа хөрөнгө",
    value: "Үл хөдлөх, автомашин",
  },
  {
    title: "Барьцаа хөрөнгөтэй холбоотой зардал",
    value: "Барьцаа хөрөнгөөс хамаарч зардал өөр өөр байна.",
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
                    <h3 className="font-f-3">БИЗНЕСИЙН ЗЭЭЛ</h3>
                    <p className="font-f-1" style={{ fontSize: "20px" }}>
                      Бизнес эрхлэгч иргэн, аж ахуйн нэгж байгууллагын үйл
                      ажиллагааг өргөтгөх, эргэлтийн хөрөнгө нэмэгдүүлэх, тоног
                      төхөөрөмж худалдан авах, бүтээгдэхүүн үйлчилгээний чанарыг
                      сайжруулах зэрэг үйл ажиллагаануудыг санхүүжүүлэхэд
                      зориулан олгох зээл юм.
                    </p>
                  </div>
                  <LoanCard loan={""} data={loan1} />
                </div>
              </div>
            </div>
          </div>
          {/*=====Service end=======*/}

          <div className="space30" />
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
        {data.map((d) => (
          <tr>
            <td
              className="font-f-1"
              style={{ border: "1px solid #ddd", padding: "8px", width: "40%" }}
            >
              {d.title}
            </td>
            <td
              className="font-f-1"
              style={{ border: "1px solid #ddd", padding: "8px" }}
            >
              {d.value}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
