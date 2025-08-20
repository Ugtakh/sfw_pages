"use client";
import Link from "next/link";
// import anket from "../../../public/assets/images/anket.docx";

export default function Footer1() {
  return (
    <>
      <footer className="footer-area padding-top footer-2 bg9">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-footer mr50">
                <Link href="/" className="footer-logo">
                  {" "}
                  <img src="/assets/images/logo/sf_logo.png" alt="" />
                </Link>
                <div className="space20" />
                <p>БАНК БУС САНХҮҮГИЙН БАЙГУУЛЛАГА</p>
              </div>
            </div>
            {/* <div className="col-lg col-md-6">
              <div className="single-footer">
                <h3>Learn</h3>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="#">Product</Link>
                    </li>
                    <li>
                      <Link href="#">Pricing</Link>
                    </li>
                    <li>
                      <Link href="#">Schedule a demo</Link>
                    </li>
                    <li>
                      <Link href="#">Our Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="col-lg col-md-6">
              <div className="single-footer">
                <h3>Манай компани</h3>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link href="/">Нүүр</Link>
                    </li>
                    <li>
                      <Link href="/about">Бидний тухай</Link>
                    </li>
                    <li>
                      <Link href="/services">Бүтээгдэхүүн</Link>
                    </li>
                    <li>
                      <Link href="/contact">Холбоо барих</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h3>Холбоо барих</h3>
                <div className="footer-contact">
                  <div
                    className="single-contact"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="contact-icon">
                      <img src="/assets/img/icons/contact-phone2.svg" alt="" />
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <Link href="#">+976 75778085</Link>
                    </div>
                    {/* <Link href="#">+976 9010-8085</Link> */}
                  </div>
                </div>
                <div className="footer-contact">
                  <div
                    className="single-contact"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="contact-icon">
                      <img src="/assets/img/icons/contact-email2.svg" alt="" />
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <Link href="#">info@securefinance.mn</Link>
                    </div>
                    {/* <Link href="#">secure.support@gmail.com</Link> */}
                  </div>
                </div>
                <div className="footer-contact">
                  <div
                    className="single-contact"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="contact-icon">
                      <img src="/assets/img/icons/contact-email2.svg" alt="" />
                    </div>
                    <div>
                      <Link href="#">Хүний нөөц</Link>
                      <a download="Anket" href={"/assets/images/anket.docx"}>
                        Анкет татах
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center copyright2">
            <div className="col-lg-6">
              <p>© {new Date().getFullYear()} БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН.</p>
            </div>
            <div className="col-lg-6 text-right">
              <div className="social social2">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="tooltip"
                      title="Facebook"
                      target="_blank"
                      href="https://www.facebook.com/SecureFinanceNBFI?mibextid=LQQJ4d"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
