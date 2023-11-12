import Link from "next/link";
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
                  <div className="single-contact">
                    <div className="contact-icon">
                      <img src="/assets/img/icons/contact-phone2.svg" alt="" />
                    </div>
                    <Link href="#">+976 9098-8085</Link>
                    <Link href="#">+976 9010-8085</Link>
                  </div>
                </div>
                <div className="footer-contact">
                  <div className="single-contact">
                    <div className="contact-icon">
                      <img src="/assets/img/icons/contact-email2.svg" alt="" />
                    </div>
                    <Link href="#">hr.securefinance@gmail.com</Link>
                    <Link href="#">secure.support@gmail.com</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center copyright2">
            <div className="col-lg-6">
              <p>© 2023 БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН.</p>
            </div>
            <div className="col-lg-6 text-right">
              <div className="social social2">
                <ul>
                  <li>
                    <a data-bs-toggle="tooltip" title="Linked in" href="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="tooltip" title="Facebook" href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="tooltip" title="Instagram" href="#">
                      <i className="fa-brands fa-instagram" />
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
