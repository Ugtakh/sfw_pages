import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { TfiLocationPin } from "react-icons/tfi";
import { BsTelephoneOutbound } from "react-icons/bs";

const contacts = [
  {
    name: "Төв Салбар",
    address:
      "СБД, 11-р хороо, 7-р хороолол, ногоон нуур гудамж, Прован оффис 604 тоот",
    icon: <TfiLocationPin color="white" size={30} />,
    phone: "9198-8085, 9197-8085, 9098-8085",
    location: "/assets/images/branch/branchCen.jpg",
  },
  {
    name: "Баянзүрх салбар",
    address: "БЗД, 16-р хороо, Дандарбаатарын гудамж, Соёмбо төв, 301 тоот",
    icon: <TfiLocationPin color="white" size={30} />,
    phone: "9097-8085, 9095-8085",
    location: "/assets/images/branch/branchBzd1.jpg",
  },
  {
    name: "Сонгинохайрхан салбар",
    address:
      "СХД, 29-р хороо, Драгон төвийн баруун талын “Call center” гар утас худалдааны төвийн 1 давхар",
    icon: <TfiLocationPin color="white" size={30} />,
    phone: "9005-8085, 9196-8085, 9105-8085",
    location: "/assets/images/branch/branchShd.jpg",
  },
];

export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          {/*=====Office-area end=======*/}
          <div className="office-area section-padding2 bg-13 inner-font-1 _relative">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div className="heading2 text-center">
                    {/* <small className="heading-top inner-heading-top">
                      <img src="/assets/img/icons/hands.svg" alt="" />
                      Our Success in Numbers
                    </small> */}
                    <h2>Манай салбарууд</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-12"
                  style={{ marginBottom: 20, height: "400px" }}
                >
                  <div style={{ width: "100%", height: "100%" }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1668.520752390321!2d106.91567212583473!3d47.93244192031956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969265a4a0689b%3A0x171662203aeea344!2sSecure%20finance%20NBFI!5e0!3m2!1sen!2smn!4v1689580631796!5m2!1sen!2smn"
                      style={{ width: "100%", height: "100%" }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="row">
                {contacts.map((contact, id) => (
                  <ContactCard key={id} contact={contact} />
                ))}
              </div>
            </div>
            <div className="shape-007">
              <img src="/assets/images/logo/shape007.svg" alt="" />
            </div>
          </div>
          {/*=====Office-area end=======*/}
        </div>
      </Layout>
    </>
  );
}

const ContactCard = ({ contact }) => {
  return (
    <>
      <div
        className="col-lg-3"
        style={{
          borderRadius: "20px",
          padding: "10px 12px",
          height: "250px",
          marginBottom: 10,
        }}
      >
        <img
          style={{ borderRadius: "20px", width: "100%" }}
          src={contact.location}
          alt="location"
        />
      </div>
      <div className="col-lg-9">
        <div className="single-office">
          <div className="office-icon" style={{ background: "#007C48" }}>
            {contact.icon}
          </div>
          <h3>
            <Link href="#">{contact.name}</Link>
          </h3>
          <p>{contact.address}</p>

          <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <BsTelephoneOutbound color="#007c48" size={30} />
            <div className="contact-box-content" style={{ paddingLeft: 10 }}>
              {contact.phone}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
