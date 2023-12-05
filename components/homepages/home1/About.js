import Link from "next/link";

const lists = [
  {
    name: "Түргэн шуурхай",
    icon: "",
  },
  {
    name: "Чанартай үйлчилгээ",
    icon: "",
  },
  {
    name: "Найрсаг хамт олон",
    icon: "",
  },
];

export default function About() {
  return (
    <>
      <div className="about-area section-padding bg5-left">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-bg-21 mr50"
                data-aos="zoom-out"
                data-aos-duration={800}
              >
                <div className="about-bg-main-img position-relative top-left-polygon-1">
                  <img src="/assets/images/about/welcome2.jpg" alt="" />
                  <div className="corner-right-bottom-shape2 position-absolute">
                    <img
                      src="/assets/img/shapes/shape-right-bottom2.png"
                      alt=""
                    />
                  </div>
                  <div className="corner-shape2-left position-absolute">
                    <img src="/assets/img/shapes/tax-shape2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading2 no-margin-heading ml50">
                <small
                  data-aos="fade-left"
                  data-aos-duration={600}
                  className="heading-top"
                >
                  <img src="/assets/images/logo/favicon.png" alt="" />
                  СЭКЮР ФИНАНС ББСБ
                </small>
                <h2 data-aos="fade-left" data-aos-duration={800}>
                  Яагаад бид гэж
                </h2>
                {lists.map((list) => (
                  <ListItem list={list} />
                ))}
                <div className="space50" />
                {/* <div
                  className="button-group"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
                  <Link className="theme-btn-2" href="#">
                    More About Us{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ListItem = ({ list }) => {
  return (
    <div
      className="col-md-6"
      data-aos="fade-up"
      data-aos-duration={1200}
      style={{ width: "100%" }}
    >
      <div
        className="single-business trans-1"
        style={{
          paddingLeft: 15,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="business-icon" style={{ position: "static" }}>
          <img src="/assets/img/icons/tax-business4.png" alt="" />
        </div>
        <h3 style={{ color: "black", paddingLeft: 20 }}>{list.name}</h3>
      </div>
    </div>
  );
};
