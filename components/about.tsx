import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <>
      <section className="float-left w-100 position-relative about-our-company-con padding-top padding-bottom main-box background-f3f0fb">
        <div
          className="container wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="heading-title-con text-center">
            <span className="special-text orange-text d-block">
              About OpenChains
            </span>
            <h2>Innovative Electronic & Software Solutions</h2>
            <p className="mb-0">
              OpenChains is dedicated to pioneering new inventions and
              delivering modern software solutions. We specialize in electronic
              systems and cutting-edge software that empower businesses and
              individuals to stay ahead in a rapidly evolving digital landscape.
              Our commitment is to innovation, quality, and providing technology
              that transforms ideas into reality.
            </p>
            {/* heading title con */}
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex">
              <div className="white-box background-fff position-relative w-100">
                <figure>
                  <img
                    src="assets/images/mission-icon1.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </figure>
                <h4 className="font-weight-bold">Our Mission</h4>
                <p className="mb-0">
                  Our mission is to drive innovation by developing advanced
                  electronic systems and software solutions that solve
                  real-world challenges. We are committed to delivering
                  reliable, secure, and scalable technology that empowers our
                  clients to excel in a digital-first world.
                </p>
                {/* white box */}
              </div>
              {/* col */}
            </div>
            <div className="col-lg-6 col-md-6 d-flex">
              <div className="white-box background-fff position-relative w-100">
                <figure>
                  <img
                    src="assets/images/vision-icon2.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </figure>
                <h4 className="font-weight-bold">Our Vision</h4>
                <p className="mb-0">
                  Our vision is to compete with the world's leading technology
                  companies by excelling in electronics, robotics, and software
                  engineering. We strive to deliver innovative solutions that
                  set new industry standards, empower our clients globally, and
                  drive progress through advanced technology and creative
                  problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
