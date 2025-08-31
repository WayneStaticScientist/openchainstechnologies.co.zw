import React from "react";
import { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Globals } from "@/utils/globals";
import { IoLogoInstagram } from "react-icons/io";
import BreadCrump from "@/components/breadcrump";
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoYoutube } from "react-icons/bi";
export const metadata: Metadata = Globals.getMetaData({
  title: "App Services",
  description:
    "Explore our app services designed to meet your business needs and drive innovation.",
  path: "/app",
});

export default function AppServices() {
  return (
    <>
      <Header />
      <BreadCrump
        page={"appservices"}
        title={"App Development"}
        summary={
          "Discover our comprehensive app development services for mobile, desktop, and more."
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
                    src="/assets/img/app.jpg"
                    alt="OpenChains App Development"
                    className="img-fluid"
                    loading="lazy"
                  />
                </figure>
                <div className="content1">
                  <h4>
                    OpenChains App Development: Powering Your Ideas Across
                    Platforms
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
                    At OpenChains, we specialize in developing a wide range of
                    applications for both mobile and desktop platforms. Our
                    expertise covers professional business apps, engaging games
                    for kids, challenging puzzles, and innovative streaming
                    apps. Whether you need a custom solution for your business
                    or a creative game for entertainment, our team is ready to
                    bring your vision to life.
                  </p>
                </div>
                <p className="text text-size-14">
                  We deliver high-quality apps tailored to your needs, including
                  mobile games, educational apps, streaming platforms, and more.
                  Our solutions are designed for performance, scalability, and a
                  seamless user experience across devices.
                </p>
                <div className="content3">
                  <p className="text text-size-14">
                    From concept to deployment, we work closely with you to
                    ensure your app stands out in the market. Explore our
                    portfolio to see how we've helped clients launch successful
                    apps for various industries and audiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 column">
              <div className="box1">
                <h5>Our App Services</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-size-16">Professional Apps</li>
                  <li className="text-size-16">Mobile Games</li>
                  <li className="text-size-16">Kids Games</li>
                  <li className="text-size-16">Puzzles</li>
                  <li className="text-size-16">Streaming Apps</li>
                  <li className="text-size-16">Desktop Apps</li>
                  <li className="mb-0 text-size-16">And Many More...</li>
                </ul>
              </div>
              <div className="box1 box2">
                <h5>Popular Categories</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-size-16">Business Apps</li>
                  <li className="text-size-16">Educational Apps</li>
                  <li className="text-size-16">Entertainment & Games</li>
                  <li className="mb-0 text-size-16">Streaming Platforms</li>
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
