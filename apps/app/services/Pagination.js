import React from "react";

const Pagination = () => {
  return (
    <div className="row">
      <div className="col-12 m-auto">
        <div className="theme-pagination text-center">
          <ul>
            <li>
              <Link href="#">
                <i className="fa-solid fa-angle-left" />
              </Link>
            </li>
            <li>
              <Link className="active" href="#">
                01
              </Link>
            </li>
            <li>
              <Link href="#">02</Link>
            </li>
            <li>...</li>
            <li>
              <Link href="#">99</Link>
            </li>
            <li>
              <Link href="#">
                <i className="fa-solid fa-angle-right" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
