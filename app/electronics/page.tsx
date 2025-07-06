import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { baseUrl, Globals } from "@/utils/globals";
import Head from "next/head";
import React from "react";
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoYoutube } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
export const metadata = {
  title: "Electronics Services",
  description:
    "Explore our comprehensive electronics services including PCB design, circuit simulation, hardware prototyping, and more. Tailored solutions to meet your needs.",
  keywords:
    "electronics services, PCB design, circuit simulation, hardware prototyping, custom electronics solutions",
  author: "OpenChains",
  alternates: {
    canonical: baseUrl + "/electronics", // Self-referencing canonical
  },
};
export default function ElectronicsServices() {
  return (
    <>
      <Header />
      <BreadCrump
        page={"electronicsservices"}
        title={"Electronics Services"}
        summary={
          "Explore our electronics and electrical engineering solutions, including PCB design, automation, robotics, and custom prototyping for innovative projects."
        }
      />
      <section
        className="singleblog-section blogpage-section gradient"
        id="single"
      >
        <div
          className="container wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="main-box">
                <figure className="image1 mb-3">
                  <img
                    src="/assets/img/electronics.jpg"
                    alt="OpenChains Electronics Services"
                    className="img-fluid"
                    loading="lazy"
                  />
                </figure>
                <div className="content1">
                  <h4>
                    OpenChains Electronics & Electrical Engineering Solutions
                  </h4>
                  <div className="span-fa-outer-con">
                    <i className="fa-solid fa-user" />
                    <span className="text-size-14 text-mr">
                      By : Wayne Scientist
                    </span>
                    <i className="mb-0 calendar fa-solid fa-calendar-days" />
                    <span className="mb-0 text-size-14">Senior Engineer</span>
                  </div>
                  <p className="text-size-14">
                    At OpenChains, we specialize in electronics and electrical
                    engineering, offering innovative solutions for building
                    automated systems, robotics, and much more. Our team is
                    dedicated to designing, prototyping, and implementing
                    advanced electronic circuits and automation technologies
                    tailored to your needs.
                  </p>
                </div>
                <p className="text text-size-14">
                  Whether you require custom PCB design, embedded systems,
                  industrial automation, or robotics development, OpenChains
                  delivers reliable and scalable solutions. We combine deep
                  technical expertise with creativity to solve complex
                  engineering challenges across various industries.
                </p>
                <div className="content3">
                  <p className="text text-size-14">
                    From concept to deployment, we work closely with you to
                    ensure your project’s success. Explore our services to
                    discover how we can help you innovate with electronics,
                    automation, and robotics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 column">
              <div className="box1">
                <h5>Our Services</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-size-16">Electronics Design</li>
                  <li className="text-size-16">Electrical Engineering</li>
                  <li className="text-size-16">Automated Systems</li>
                  <li className="text-size-16">Robotics Development</li>
                  <li className="text-size-16">PCB Design & Prototyping</li>
                  <li className="text-size-16">Embedded Systems</li>
                  <li className="mb-0 text-size-16">And Many More...</li>
                </ul>
              </div>
              <div className="box1 box2">
                <h5>Popular Categories</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-size-16">Automation</li>
                  <li className="text-size-16">Industrial Robotics</li>
                  <li className="text-size-16">IoT Solutions</li>
                  <li className="mb-0 text-size-16">Custom Electronics</li>
                </ul>
              </div>
              <div className="box1 box3">
                <h5>Follow Us</h5>
                <div className="social-icons">
                  <ul className="mb-0 list-unstyled ">
                    <li>
                      <a
                        href={Globals.Facebook}
                        className="text-decoration-none"
                      >
                        <BiLogoFacebook className="social-networks" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={Globals.getWhatappFormat("hie openchains")}
                        className="text-decoration-none"
                      >
                        <BiLogoWhatsapp className="social-networks" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={Globals.Instagram}
                        className="text-decoration-none"
                      >
                        <IoLogoInstagram className="social-networks" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/openchains"
                        className="text-decoration-none"
                      >
                        <BiLogoYoutube className="social-networks" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
