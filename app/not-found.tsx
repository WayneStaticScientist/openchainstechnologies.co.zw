import React from "react";

export default function NotFould() {
  return (
    <>
      <section className="error-section w-100 float-left position-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-12 mr-auto ml-auto">
              <div
                className="error-con wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <h2 className="purple-text">
                  4{" "}
                  <i
                    className="fa-solid fa-face-sad-tear orange-text wow bounceIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.3s"
                  />{" "}
                  4
                </h2>
                <h4 className="font-weight-700">
                  We Could Not Find The Page You're Looking For
                </h4>
                <p className="">
                  The link you're trying to access is probably broken, or the
                  page <br /> has been removed , or its under construction ?
                  Ah!!! Now what.And if there is no zero bouncing there to make
                  404 , it means it might be broken also
                </p>
                <div className="secondary-button d-inline-block">
                  <a href="/" className="d-inline-block">
                    <i className="fas fa-arrow-left mr-2" /> Back to Homepage{" "}
                  </a>
                </div>
              </div>
              {/* col */}
            </div>
            {/* row */}
          </div>
        </div>
      </section>
    </>
  );
}
