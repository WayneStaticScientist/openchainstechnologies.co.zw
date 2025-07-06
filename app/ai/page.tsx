import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PassedDetails from "@/components/sub/passed-details";
import { baseUrl, Globals, ServicesList } from "@/utils/globals";
import React from "react";
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoYoutube } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
export const metadata = {
  title: "AI Services",
  description:
    "Explore our AI services that leverage cutting-edge technology to enhance your business operations and drive innovation.",
  alternates: {
    canonical: baseUrl + "/ai", // Self-referencing canonical
  },
};
export default function AiServices() {
  return (
    <>
      <Header />
      <BreadCrump page={"ai_sservices"} title={"Ai Services"} summary={""} />
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
                    src="/assets/img/ai.jpg"
                    alt="Artificial Intelligence Development"
                    className="img-fluid"
                    loading="lazy"
                  />
                </figure>
                <div className="content1">
                  <h4>
                    Artificial Intelligence Development: Building and Training
                    AI Models for Web, Apps, and Electronics
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
                    At OpenChains, we specialize in artificial intelligence
                    development, delivering custom AI solutions that empower
                    your business across web, mobile apps, and electronic
                    devices. Our team leverages advanced machine learning
                    techniques to design, train, and deploy intelligent models
                    tailored to your unique requirements.
                  </p>
                </div>
                <p className="text text-size-14">
                  Whether you need AI-powered web applications, smart mobile
                  apps, or embedded AI for electronics and IoT devices, we
                  provide end-to-end services. From data collection and
                  preprocessing to model training, optimization, and
                  integration, we ensure seamless AI adoption for your products
                  and services.
                </p>
                <div className="content3">
                  <p className="text text-size-14">
                    Our expertise covers computer vision, natural language
                    processing, predictive analytics, and automation. We help
                    you unlock new possibilities—such as intelligent chatbots,
                    recommendation engines, image recognition, and smart
                    sensors—enabling your business to innovate and stay ahead in
                    the digital era.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 column">
              <div className="box1">
                <h5>Our AI Services</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-size-16">Custom AI Model Development</li>
                  <li className="text-size-16">Machine Learning Solutions</li>
                  <li className="text-size-16">AI for Web Applications</li>
                  <li className="text-size-16">AI for Mobile Apps</li>
                  <li className="text-size-16">Embedded AI for Electronics</li>
                  <li className="text-size-16">Data Collection & Training</li>
                  <li className="mb-0 text-size-16">
                    AI Consulting & Integration
                  </li>
                </ul>
              </div>
              <div className="box1 box2">
                <h5>Popular AI Applications</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-size-16">
                    Chatbots & Virtual Assistants
                  </li>
                  <li className="text-size-16">Image & Speech Recognition</li>
                  <li className="text-size-16">Predictive Analytics</li>
                  <li className="mb-0 text-size-16">Smart IoT Devices</li>
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
