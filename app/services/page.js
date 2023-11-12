import Layout from "@/components/layout/Layout";
import ServiceCard from "./ServiceCard";

export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Service">
        <div>
          <div className="section-padding bg-28">
            <div className="container">
              <div className="row">
                <ServiceCard />
              </div>
              <div className="row">
                <div className="col-12" style={{ margin: "auto" }}>
                  <div className="single-inner-service single-inner-service-2 trans-1">
                    <div className="service-icon bg-24">
                      <img src="/assets/images/logo/favicon.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="font-f-3">Итгэлцлийн үйлчилгээ</h3>
                      <p className="font-f-3">
                        Итгэлцлийн үйлчилгээ” гэж итгэмжлэгчийн бэлэн мөнгө,
                        зээл, бусад активыг үнэгүйдлээс хамгаалж, ашиг /үр шим/
                        олж өгөх зорилгоор тэдгээртэй харилцан тохиролцож
                        байгуулсан хөрөнгө итгэмжлэн удирдах гэрээний үндсэн
                        дээр итгэмжлэгдэгчээс гэрээнд заасан хугацаанд хянах,
                        ашиглах, захиран зарцуулах үйл ажиллагаа юм.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====Service end=======*/}

          <div className="space30" />
          {/*=====Subscribe start=======*/}
          <BannerSection />
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
