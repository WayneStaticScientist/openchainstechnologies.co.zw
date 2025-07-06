import React from "react";

export default function Faqs() {
  return (
    <section className="float-left w-100 position-relative faq-con padding-top padding-bottom main-box">
      <figure>
        <img
          src="assets/images/element2.png"
          alt="element"
          className="position-absolute element"
        />
      </figure>
      <div
        className="container wow fadeInUp"
        data-wow-duration="2s"
        data-wow-delay="0.3s"
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="faq_content position-relative">
              <span className="special-text purple-text d-block">
                Question, Answer
              </span>
              <h2>Frequently Asked Questions</h2>
              <figure className="faq-image mb-0">
                <img
                  src="/assets/images/faq-image.png"
                  alt="image"
                  className="img-fluid"
                />
              </figure>
              <figure className="position-relative">
                <img
                  src="/assets/images/elipse.png"
                  alt="ellipse"
                  className="position-absolute ellipse"
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="faq_wrapper">
              <div className="accordian-section-inner position-relative">
                <div className="accordian-inner">
                  <div id="home1_accordion1">
                    <div className="accordion-card">
                      <div className="card-header" id="headingOne">
                        <a
                          href="#"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          <h5>
                            What services does Openchains Technologies offer?
                          </h5>
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#home1_accordion1"
                      >
                        <div className="card-body">
                          <p className="text-size-16 text-left mb-0">
                            We develop websites, mobile apps, and games, as well
                            as provide custom electronics design, automation
                            solutions, and more for businesses and individuals.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card">
                      <div className="card-header" id="headingTwo">
                        <a
                          href="#"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <h5>
                            Can you create custom electronics for my project?
                          </h5>
                        </a>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#home1_accordion1"
                      >
                        <div className="card-body">
                          <p className="text-size-16 text-left mb-0">
                            Yes, we specialize in custom electronics design and
                            can help you with prototyping, PCB design, firmware
                            development, and automation of electronic systems.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card">
                      <div className="card-header" id="headingThree">
                        <a
                          href="#"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <h5>Do you build both websites and mobile apps?</h5>
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#home1_accordion1"
                      >
                        <div className="card-body">
                          <p className="text-size-16 text-left mb-0">
                            Absolutely. We develop responsive websites and
                            cross-platform mobile applications tailored to your
                            requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card">
                      <div className="card-header" id="headingFour">
                        <a
                          href="#"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <h5>
                            Can you automate my existing electronic systems?
                          </h5>
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#home1_accordion1"
                      >
                        <div className="card-body">
                          <p className="text-size-16 text-left mb-0">
                            Yes, we offer automation solutions for new and
                            existing electronic systems, including IoT
                            integration and remote monitoring.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card">
                      <div className="card-header" id="headingFive">
                        <a
                          href="#"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          <h5>
                            How do I get started with Openchains Technologies?
                          </h5>
                        </a>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse"
                        aria-labelledby="headingFive"
                        data-parent="#home1_accordion1"
                      >
                        <div className="card-body">
                          <p className="text-size-16 text-left mb-0">
                            Contact us with your project idea or requirements.
                            Our team will discuss your needs and provide a
                            tailored solution for your business or personal
                            project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* container */}
      </div>
      {/* question answer con */}
    </section>
  );
}
