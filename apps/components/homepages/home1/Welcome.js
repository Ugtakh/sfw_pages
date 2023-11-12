import LogoSlider2 from "@/components/slider/LogoSlider2";
import Link from "next/link";

export default function Welcome() {
  return (
    <>
      <div className="welcome-area welcome-2 bg5 position-relative" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="title title2 ">
                <small
                  data-aos="fade-right"
                  data-aos-duration={600}
                  className="heading-top2"
                >
                  <img src="/assets/img/icons/money.png" alt="" />
                  СЭКЮР ФИНАНС ББСБ
                </small>
                <h1 data-aos="fade-right" data-aos-duration={800}>
                  Таны санхүүгийн асуудлыг бид шийднэ.
                </h1>
                <p data-aos="fade-right" data-aos-duration={1000}>
                  бид орон сууц, хашаа байшин барьцаалсан 24 сарын хугацаатай,
                  3,9%-ийн хүүтэй, 5 сая төгрөг хүрлх зээлийг орлого
                  нотлохгүйгээр өдөрт нь шийдвэрлэн олгож байна.
                </p>
                <div className="space30" />
                <div
                  className="btn-group"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  <Link className="theme-btn-2" href="#">
                    Илүү дэлгэрэнгүй
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                  <Link className="theme-btn-3" href="#">
                    Хүсэлт илгээх
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
                <div className="space80" />
                <div
                  className="logo-area2"
                  data-aos="fade-right"
                  data-aos-duration={1400}
                >
                  <p>Итгэлт хамтран ажиллагсад</p>
                  <LogoSlider2 />
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div
                className="hero-img-elements"
                data-aos="zoom-out"
                data-aos-duration={800}
              >
                <div className="hero-main-img position-relative top-right-polygon-1">
                  <img
                    className="border-radius"
                    src="/assets/img/bg/main2.jpg"
                    alt=""
                  />
                  <div className="corner-shape2 position-absolute">
                    <img src="/assets/img/shapes/tax-shape1.png" alt="" />
                  </div>
                  <div className="corner-right-bottom-shape2 position-absolute">
                    <img
                      src="/assets/img/shapes/shape-right-bottom2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="down-arrow2"
          data-aos="fade-down"
          data-aos-duration={400}
        >
          <Link href="/#about">
            <img src="/assets/img/icons/down-arrow-black.svg" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
