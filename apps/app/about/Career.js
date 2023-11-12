import React from "react";

const Career = () => {
  return (
    <div className="subscribe-4 bg12 padding-90 inner-font-1 inner-subscribe">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading4 white-heading inner-heading no-margin-heading">
              <h2>Want to join our team?</h2>
              <p>
                We are always looking for talented people, We here to help you
                to open your bright future.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 offset-lg-1">
            <div className="sunscribe-form">
              <div className="subscribe-from-wrap">
                <form action="#">
                  <input type="email" placeholder="Email Address" />
                  <button type="submit" name="button">
                    Subscribe Now
                    <img src="/assets/img/icons/arrow-up-right.svg" alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
