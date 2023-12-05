import Link from "next/link";

export default function Blog() {
  return (
    <>
      <div className="blog-area blog2 section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto">
              <div className="heading2 text-center">
                <small
                  data-aos="fade-up"
                  data-aos-duration={600}
                  className="heading-top"
                >
                  <img src="/assets/images/logo/favicon.png" alt="" />
                  СЭКЮР ФИНАНС ББСБ
                </small>
                <h2 data-aos="fade-up" data-aos-duration={800}>
                  <span className="heilight-left">Нийгмийн </span> хариуцлагын
                  ажлууд
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="single-blog blog-md ">
                <div className="blog-img">
                  <img
                    src="/assets/images/responsible/responsible2.jpg"
                    alt=""
                  />
                </div>
                <div className="blog-contents">
                  <h3>
                    <Link href="/social-responsible">
                      Бүх нийтээр мод тарих үндэсний өдрийг тохиолдуулан
                      харилцагч нартаа ...
                    </Link>
                  </h3>
                  <Link href="/social-responsible" className="theme-btn-4">
                    цааш унших
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="single-blog blog-md">
                <div className="blog-img">
                  <img
                    src="/assets/images/responsible/responsible3.jpg"
                    alt=""
                  />
                </div>
                <div className="blog-contents">
                  <h3>
                    <Link href="/social-responsible">
                      Шинэ коронавирусын халдвар (COVID-19) гарч МББСБХ-с
                      зээлийн шимтгэлийг 0 болгох ...
                    </Link>
                  </h3>
                  <Link href="/social-responsible" className="theme-btn-4">
                    цааш унших
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div className="single-blog blog-md">
                <div className="blog-img">
                  <img
                    src="/assets/images/responsible/responsible1.jpg"
                    alt=""
                  />
                </div>
                <div className="blog-contents">
                  <h3>
                    <Link href="/social-responsible">
                      “Тэрбум мод тарих” хөтөлбөрийн хүрээнд Хашаандаа сайхан
                      амьдаръя ...
                    </Link>
                  </h3>
                  <Link href="/social-responsible" className="theme-btn-4">
                    цааш унших
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
