import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Globals } from "@/utils/globals";
import React from "react";
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoYoutube } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";

export default function PricingCalculatorPage() {
  return (
    <>
      <Header />
      <BreadCrump
        page={"Pricing Calculations"}
        title={"Pricing calculations"}
        summary={""}
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
                <div className="content1">
                  <h4>Let's Calculate Your Project Price!</h4>
                  <div className="span-fa-outer-con">
                    <i className="fa-solid fa-user" />
                    <span className="text-size-14 text-mr">
                      By : OpenChains Team
                    </span>
                    <i className="mb-0 calendar fa-solid fa-calendar-days" />
                    <span className="mb-0 text-size-14">
                      Pricing Department
                    </span>
                  </div>
                  <p className="text-size-14">
                    At OpenChains, we offer transparent and competitive pricing
                    for our custom web, mobile app, and chatbot development
                    services. Our pricing model is designed to be flexible,
                    accommodating projects of all sizes and complexities, and
                    always includes considerations for robust cloud hosting to
                    ensure scalability and reliability.
                  </p>
                </div>
                <p className="text text-size-14">
                  To give you an idea of potential costs, here's a general
                  breakdown. Please note that these are estimates, and a
                  detailed quote will be provided after understanding your
                  specific requirements.
                </p>
                <div className="content3">
                  <h5>Website Development (Approximate Costs)</h5>
                  <ul>
                    <li>
                      <strong>Basic Website (Static, 5-10 pages):</strong> $100
                      - $200
                    </li>
                    <li>
                      <strong>
                        Dynamic Website (CMS, Blog, E-commerce Lite):
                      </strong>{" "}
                      $150 - $520
                    </li>
                    <li>
                      <strong>
                        Complex Web Application (Custom features, Integrations):
                      </strong>{" "}
                      $700+
                    </li>
                  </ul>
                  <p className="text-size-14">
                    <em>
                      Includes: Responsive design, basic SEO, content
                      integration, and initial cloud hosting setup (e.g., shared
                      hosting or basic VPS).
                    </em>
                  </p>

                  <h5>Mobile App Development (Approximate Costs)</h5>
                  <ul>
                    <li>
                      <strong>
                        Simple App (Basic functionality, single platform):
                      </strong>{" "}
                      $150 - $800
                    </li>
                    <li>
                      <strong>
                        Medium Complexity App (Multiple features, API
                        integration, cross-platform):
                      </strong>{" "}
                      $300 - $1200
                    </li>
                    <li>
                      <strong>
                        Complex App (Advanced features, real-time data, custom
                        backend):
                      </strong>{" "}
                      $600+
                    </li>
                  </ul>
                  <p className="text-size-14">
                    <em>
                      Includes: UI/UX design, development for iOS/Android,
                      backend development, and cloud hosting for backend
                      services (e.g., AWS, Azure, Google Cloud).
                    </em>
                  </p>

                  <h5>Chatbot Development (Approximate Costs)</h5>
                  <ul>
                    <li>
                      <strong>
                        Basic Rule-Based Chatbot (FAQ, simple interactions):
                      </strong>{" "}
                      $90 - $180
                    </li>
                    <li>
                      <strong>
                        AI-Powered Chatbot (NLP, intent recognition,
                        integrations):
                      </strong>{" "}
                      $450 - $900
                    </li>
                    <li>
                      <strong>
                        Advanced Conversational AI (Complex flows, multiple
                        integrations, learning capabilities):
                      </strong>{" "}
                      $900+
                    </li>
                  </ul>
                  <p className="text-size-14">
                    <em>
                      Includes: Bot design, natural language understanding
                      setup, integration with platforms (website, social media),
                      and cloud hosting for AI models and services.
                    </em>
                  </p>

                  <h5>Cloud Hosting Considerations (Monthly Estimates)</h5>
                  <ul>
                    <li>
                      <strong>Shared Hosting (Basic Websites):</strong> $4 - $30
                    </li>
                    <li>
                      <strong>
                        VPS/Dedicated Server (Dynamic Websites, Medium Apps):
                      </strong>{" "}
                      $30 - $200
                    </li>
                    <li>
                      <strong>
                        Cloud Platforms (AWS, Azure, Google Cloud - for complex
                        apps/AI):
                      </strong>{" "}
                      $50 - $500+ (Scales with usage)
                    </li>
                  </ul>
                  <p className="text-size-14">
                    <em>
                      These are general estimates for hosting infrastructure.
                      Actual costs depend on traffic, data storage, and specific
                      services utilized. We help you choose the most
                      cost-effective and scalable solution.
                    </em>
                  </p>

                  <p className="text-size-14 mt-4">
                    <strong>Ready for a precise quote?</strong> Contact us today
                    with your project details, and our team will provide a
                    tailored proposal that fits your budget and requirements,
                    ensuring your digital solution is robust, scalable, and
                    hosted efficiently. <br />
                  </p>
                  <a
                    href="/contact"
                    className="btn-1 btn-sm tw:p-3! tw:bg-gray-200! tw:mt-4!"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 column">
              <div className="box1">
                <h5>Our Core Services</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-size-16">Custom Website Development</li>
                  <li className="text-size-16">
                    Mobile App Development (iOS/Android)
                  </li>
                  <li className="text-size-16">AI-Powered Chatbot Solutions</li>
                  <li className="text-size-16">UI/UX Design & Prototyping</li>
                  <li className="text-size-16">
                    Cloud Hosting & Infrastructure
                  </li>
                  <li className="text-size-16">
                    API Development & Integration
                  </li>
                  <li className="mb-0 text-size-16">Maintenance & Support</li>
                </ul>
              </div>
              <div className="box1 box2">
                <h5>Key Project Phases</h5>
                <ul className="list-unstyled mb-0">
                  <li className="text-size-16">Discovery & Planning</li>
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
