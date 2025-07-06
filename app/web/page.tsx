import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { baseUrl, Globals, ServicesList } from "@/utils/globals";
import React from "react";
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoYoutube } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
export const metadata = {
  title: "Web Services",
  description:
    "We build websites , webservices , microservices , graphic design , video editing , photoediting , simulations , electronics and more . Visit us today",
  keywords:
    "web design, web development, microservices, graphic design, video editing, photo editing, simulations, electronics",
  author: "OpenChains",
  alternates: {
    canonical: baseUrl + "/web", // Self-referencing canonical
  },
};
export default function WebServices() {
  return (
    <>
      <Header />
      <BreadCrump
        page={"webservices"}
        title={"Web Services"}
        summary={
          "At OpenChains, we offer a comprehensive range of web services tailored to meet your business and personal needs. From modern portfolio and business websites to robust e-commerce platforms, our team delivers high-quality, scalable, and secure solutions. We also provide microservices, graphic design, video editing, photo editing, simulations, and electronics integration. Let us help you establish a strong online presence and achieve your digital goals."
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
                    src="assets/images/singleblog-image1.jpg"
                    alt="OpenChains Web Services"
                    className="img-fluid"
                    loading="lazy"
                  />
                </figure>
                <div className="content1">
                  <h4>
                    OpenChains Web Services: Empowering Your Digital Presence
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
                    At OpenChains, we specialize in delivering a wide range of
                    digital solutions to help your business thrive online. Our
                    offerings include modern websites, robust web applications,
                    scalable microservices, and secure e-commerce platforms. Led
                    by Wayne Scientist, our senior engineer, we also develop
                    engaging web games, innovative betting websites, and much
                    more. Partner with us to unlock the full potential of your
                    digital strategy.
                  </p>
                </div>
                <div className="content2">
                  <figure className="singleblog-quoteimage">
                    <img
                      src="assets/images/singleblog-quoteimage.png"
                      alt="OpenChains Quote"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </figure>
                  <p className="mb-0 text-white text-size-18">
                    “Our expertise in web technologies ensures your business
                    stands out in the digital world.”
                  </p>
                </div>
                <p className="text text-size-14">
                  Whether you need a professional website, a custom web app, or
                  a complex microservices architecture, OpenChains has the
                  skills and experience to deliver. We also offer tailored
                  solutions for e-commerce, web-based games, and betting
                  platforms, ensuring security, scalability, and a seamless user
                  experience.
                </p>
                <div className="content3">
                  <figure className="image1 mb-3">
                    <img
                      src="assets/images/singleblog-image2.jpg"
                      alt="Web Apps and E-commerce"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </figure>
                  <p className="text text-size-14">
                    Our team leverages the latest technologies to build
                    solutions that grow with your business. From concept to
                    launch, we work closely with you to ensure your vision
                    becomes reality. Explore our portfolio to see how we've
                    helped clients succeed online.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 column">
              <div className="box1">
                <h5>Our Services</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-size-16">Websites</li>
                  <li className="text-size-16">Web Apps</li>
                  <li className="text-size-16">Microservices</li>
                  <li className="text-size-16">E-commerce Platforms</li>
                  <li className="text-size-16">Web Games</li>
                  <li className="text-size-16">Betting Websites</li>
                  <li className="mb-0 text-size-16">And More...</li>
                </ul>
              </div>
              <div className="box1 box2">
                <h5>Popular Categories</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-size-16">Business Websites</li>
                  <li className="text-size-16">E-commerce</li>
                  <li className="text-size-16">Gaming</li>
                  <li className="mb-0 text-size-16">Betting Platforms</li>
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
