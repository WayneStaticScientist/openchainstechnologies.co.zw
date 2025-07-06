import React from "react";

export default function Experience() {
  return (
    <section className="float-left w-100 real-time-support-con position-relative main-box">
      <figure>
        <img
          src="/assets/images/elipse.png"
          alt="ellipse"
          className="position-absolute ellipse1"
        />
      </figure>
      <figure>
        <img
          src="/assets/images/element.png"
          alt="ellipse"
          className="position-absolute element"
        />
      </figure>
      <div
        className="container wow fadeInUp"
        data-wow-duration="2s"
        data-wow-delay="0.3s"
      >
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="real-time-img-con position-relative">
              <figure>
                <img
                  src="/assets/images/vector1.png"
                  alt="image"
                  className="position-absolute vector1"
                />
              </figure>
              <figure className="text-center">
                <img
                  src="/assets/images/real-time-support-img.png"
                  alt="image"
                  className="real-time-img img-fluid"
                />
              </figure>
              <figure>
                <img
                  src="/assets/images/vector2.png"
                  alt="image"
                  className="position-absolute vector2"
                />
              </figure>
              {/* real time img con */}
            </div>
            {/* col */}
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="real-time-content-con">
              <div className="data-centers-con">
                <span className="data-count d-inline-block counter align-middle text-white">
                  {new Date().getFullYear() - 2015}
                </span>
                <sup className="d-inline-block align-middle text-white">+</sup>
                <span className="data-text d-block text-white">Experience</span>
                {/* data centers con */}
              </div>
              <div className="heading-title-con mb-0">
                <span className="special-text orange-text d-block">
                  Innovative &amp; Reliable
                </span>
                <h2>Openchains Technologies</h2>
                <p className="">
                  Openchains Technologies specializes in cutting-edge software
                  and electronics solutions. Our expertise drives digital
                  transformation, delivering robust applications and smart
                  devices tailored to your business needs.
                </p>
                <div className="elementary-button d-inline-block">
                  <a href="/contact" className="d-inline-block">
                    Contact Us <i className="fas fa-arrow-right ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
