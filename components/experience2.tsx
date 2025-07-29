import Link from "next/link";
import React from "react";

export default function Experience2() {
  return (
    <section className="float-left w-100 real-time-support-con position-relative main-box magento-bg pt-0">
      <div
        className="container wow fadeInUp"
        data-wow-duration="2s"
        data-wow-delay="0.3s"
      >
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <figure>
              <img
                src="assets/images/real-time-support-img1.png"
                alt="Openchains Technologies Experience"
                className=""
              />
            </figure>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="real-time-content-con">
              <div className="data-centers-con">
                <span className="data-count d-inline-block counter align-middle text-white">
                  {new Date().getFullYear() - 2015}
                </span>
                <sup className="d-inline-block align-middle text-white">
                  yrs
                </sup>
                <span className="data-text d-block text-white">
                  Industry Experience
                </span>
              </div>
              <div className="heading-title-con mb-0">
                <span className="special-text orange-text d-block">
                  Electronics &amp; Software
                </span>
                <h2 className="text-white">A Decade of Innovation</h2>
                <p className="text-white">
                  Openchains Technologies has over{" "}
                  {new Date().getFullYear() - 2015} years of proven expertise in
                  the electronics and software industry.
                  <br />
                  We deliver reliable solutions, drive innovation, and empower
                  businesses with cutting-edge technology.
                </p>
                <div className="secondary-button d-inline-block">
                  <Link href="/contact" className="d-inline-block">
                    Contact Us <i className="fas fa-arrow-right ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
