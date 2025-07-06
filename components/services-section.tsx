import React from "react";
import {
  FcElectronics,
  FcFlowChart,
  FcGlobe,
  FcGraduationCap,
  FcParallelTasks,
  FcTabletAndroid,
} from "react-icons/fc";

export default function ServicesSection() {
  return (
    <section className="float-left w-100 position-relative padding-top padding-bottom hosting-features-con main-box background-f3f0fb shared-hosting-features-con">
      <figure>
        <img
          src="/assets/images/element2.png"
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
          <h2>Innovative Solutions for a Modern World</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="feature-box background-fff d-flex">
              <figure className="tw:flex! tw:items-center! tw:justify-center!">
                <FcElectronics size={40} />
              </figure>
              <div className="feature-content">
                <h5>Electronics Design & Development</h5>
                <p className="mb-0">
                  We design and build custom electronic devices and embedded
                  systems for a wide range of applications, from consumer
                  products to industrial automation.
                </p>
              </div>
            </div>
            <div className="feature-box background-fff d-flex">
              <figure className="tw:flex! tw:items-center! tw:justify-center!">
                <FcGlobe size={40} />
              </figure>
              <div className="feature-content">
                <h5>Website Development</h5>
                <p className="mb-0">
                  Professional website design and development services,
                  including e-commerce, business, and portfolio sites, tailored
                  to your brand and goals.
                </p>
              </div>
            </div>
            <div className="feature-box background-fff d-flex mb-0">
              <figure className="tw:flex! tw:items-center! tw:justify-center!">
                <FcTabletAndroid size={40} />
              </figure>
              <div className="feature-content">
                <h5>Application Development</h5>
                <p className="mb-0">
                  Custom software and mobile app development for Android, iOS,
                  and desktop platforms to streamline your business processes
                  and engage your customers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="feature-box background-fff d-flex">
              <figure className="tw:flex! tw:items-center! tw:justify-center!">
                <FcParallelTasks size={40} />
              </figure>
              <div className="feature-content">
                <h5>Modern Inventions & Prototyping</h5>
                <p className="mb-0">
                  We turn ideas into reality by prototyping and developing
                  innovative products, IoT solutions, and smart devices for the
                  modern world.
                </p>
              </div>
            </div>
            <div className="feature-box background-fff d-flex">
              <figure className="tw:flex! tw:items-center! tw:justify-center!">
                <FcFlowChart size={40} />
              </figure>
              <div className="feature-content">
                <h5>Technical Support & Consulting</h5>
                <p className="mb-0">
                  Expert advice and ongoing support for all your technology
                  needs, ensuring your solutions run smoothly and efficiently.
                </p>
              </div>
            </div>
            <div className="feature-box background-fff d-flex mb-0">
              <figure className="tw:flex! tw:items-center! tw:justify-center!">
                <FcGraduationCap size={40} />
              </figure>
              <div className="feature-content">
                <h5>Training & Workshops</h5>
                <p className="mb-0">
                  Empower your team with hands-on training in electronics,
                  programming, and modern technology trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
