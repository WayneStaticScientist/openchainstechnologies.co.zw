import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";

export default function OtherThings() {
  return (
    <section className="float-left w-100 our-guarantees-con position-relative padding-top padding-bottom main-box background-primary text-center">
      <div
        className="container wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.3s"
      >
        <div className="heading-title-con text-center">
          <span className="special-text d-block">What We Build</span>
          <h2 className="text-white">
            Empowering Innovation <br />
            Through Technology Solutions
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="gunrntee-box w-100 position-relative">
              <figure>
                <HiLightBulb size={30} />
              </figure>
              <h5>
                Interactive Lessons <br />
                &amp; E-Learning
              </h5>
              <p className="mb-0">
                We design and deliver engaging online lessons and e-learning
                platforms for diverse subjects and audiences.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="gunrntee-box w-100 position-relative">
              <figure>
                <HiLightBulb size={30} />
              </figure>
              <h5>
                Robust APIs <br />
                &amp; Integrations
              </h5>
              <p className="mb-0">
                We build scalable APIs and seamless integrations to power your
                apps, services, and business workflows.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="gunrntee-box w-100 position-relative">
              <figure>
                <HiLightBulb size={30} />
              </figure>
              <h5>
                Business Platforms <br />
                &amp; SaaS Solutions
              </h5>
              <p className="mb-0">
                From CRMs to custom SaaS, we create platforms that streamline
                operations and drive growth.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="gunrntee-box w-100 position-relative">
              <figure>
                <HiLightBulb size={30} />
              </figure>
              <h5>
                Electronics Engineering <br />
                &amp; IoT Devices
              </h5>
              <p className="mb-0">
                We design, prototype, and build electronics and IoT devices for
                smart solutions and automation.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="gunrntee-box w-100 position-relative">
              <figure>
                <HiLightBulb size={30} />
              </figure>
              <h5>
                Automation <br />
                &amp; Process Control
              </h5>
              <p className="mb-0">
                Automate your business and industrial processes with our custom
                automation and control systems.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="gunrntee-box w-100 position-relative">
              <figure>
                <HiLightBulb size={30} />
              </figure>
              <h5>
                Robotics <br />
                &amp; AI Solutions
              </h5>
              <p className="mb-0">
                We develop robotics and AI-powered systems for education,
                industry, and research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
