import Link from "next/link";
import React from "react";

export default function SecurityFeatures() {
  return (
    <section className="float-left w-100 position-relative padding-top padding-bottom hosting-features-con main-box background-f3f0fb">
      <figure>
        <img
          src="assets/images/elipse.png"
          alt="ellipse"
          className="position-absolute ellipse1"
        />
      </figure>
      <figure>
        <img
          src="assets/images/element2.png"
          alt="ellipse"
          className="position-absolute element2"
        />
      </figure>
      <div
        className="container wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.3s"
      >
        <div className="heading-title-con text-center">
          <span className="special-text orange-text d-block">Our Services</span>
          <h2>
            Innovative Web & Electronics Solutions <br />
            by Openchains Technologies
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="feature-box background-fff d-flex">
              <figure>
                <img
                  src="assets/images/feature-icon1.png"
                  alt="icon"
                  data-hover-image="assets/images/feature-icon1-hover.png"
                />
              </figure>
              <div className="feature-content ">
                <h5>Custom Website Development</h5>
                <p className="mb-0">
                  From simple landing pages to advanced, high-performance web
                  applications, we deliver tailored solutions to match your
                  business needs.
                </p>
              </div>
            </div>
            <div className="feature-box background-fff d-flex mb-0">
              <figure>
                <img
                  src="assets/images/feature-icon2.png"
                  alt="icon"
                  data-hover-image="assets/images/feature-icon2-hover.png"
                />
              </figure>
              <div className="feature-content">
                <h5>Electronics Design & Integration</h5>
                <p className="mb-0">
                  We design, build, and integrate electronic systems for
                  automation, IoT, and smart solutions, supporting your digital
                  transformation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="feature-box background-fff d-flex">
              <figure>
                <img
                  src="assets/images/feature-icon3.png"
                  alt="icon"
                  data-hover-image="assets/images/feature-icon3-hover.png"
                />
              </figure>
              <div className="feature-content">
                <h5>Performance & Speed Optimization</h5>
                <p className="mb-0">
                  We ensure your websites and systems run at top speed, using
                  the latest technologies for fast, reliable user experiences.
                </p>
              </div>
            </div>
            <div className="feature-box background-fff d-flex mb-0">
              <figure>
                <img
                  src="assets/images/feature-icon4.png"
                  alt="icon"
                  data-hover-image="assets/images/feature-icon4-hover.png"
                />
              </figure>
              <div className="feature-content">
                <h5>Support & Maintenance</h5>
                <p className="mb-0">
                  Our team provides ongoing support, updates, and
                  troubleshooting for both web and electronic solutions,
                  ensuring your business stays online and efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="float-left w-100 position-relative text-center view-all-features-con">
          <div className="elementary-button d-inline-block">
            <Link href="/services" className="d-inline-block">
              View All Services <i className="fas fa-arrow-right ml-2" />{" "}
            </Link>
          </div>
        </div>
      </div>
      {/* hosting features con */}
    </section>
  );
}
