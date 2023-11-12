import Layout from "@/components/layout/Layout";

export default function NotFound() {
  return (
    <>
      <Layout>
        <div>
          <div className="error-page section-padding bg-13">
            <div className="space100" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div className="404 text-center">
                    <img src="/assets/img/error/404.svg" alt />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 m-auto">
                  <div className="space50" />
                  <div className="text-center">
                    <div className="heading2 no-margin-heading">
                      <h2>Хуудас олдсонгүй</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
