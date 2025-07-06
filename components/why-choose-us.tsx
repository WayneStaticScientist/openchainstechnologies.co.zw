import React from "react";

export default function WhyChooseUs() {
  return (
    <>
      <section className="float-left w-100 builder-con position-relative padding-top padding-bottom main-box">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 order-xl-0 order-lg-0 order-md-0 order-1">
              <div className="builder_content">
                <span className="special-text d-block purple-text">
                  Innovation & Discovery
                </span>
                <h2>
                  Why Choose{" "}
                  <span className="d-inline-block orange-text font-weight-bold">
                    Openchains Technologies
                  </span>
                  ?
                </h2>
                <p className="text-size-18">
                  We are passionate about building the future—through
                  electronics, websites, games, and groundbreaking inventions.
                  Our team is driven by discovery and research to deliver
                  innovative solutions for your needs.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="position-relative">
                    <i className="fa fa-check" />
                    <p className="mb-0 text-size-16">
                      Custom Electronics Design & Prototyping
                    </p>
                  </li>
                  <li className="position-relative">
                    <i className="fa fa-check" />
                    <p className="mb-0 text-size-16">
                      Modern, Responsive Websites & Web Apps
                    </p>
                  </li>
                  <li className="position-relative">
                    <i className="fa fa-check" />
                    <p className="mb-0 text-size-16">
                      Engaging Game Development
                    </p>
                  </li>
                  <li className="position-relative">
                    <i className="fa fa-check" />
                    <p className="mb-0 text-size-16">
                      Research, Discovery & Innovative Solutions
                    </p>
                  </li>
                  <li className="position-relative">
                    <i className="fa fa-check" />
                    <p className="mb-0 text-size-16">
                      Inventing New Technologies for Tomorrow
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 text-lg-left text-center">
              <div className="builder_wrapper position-relative">
                <figure className="builder-image mb-0 position-relative">
                  <img
                    src="assets/images/builder-image.png"
                    alt="image"
                    className="img-fluid"
                  />
                </figure>
                <figure className="builder-flowerimage mb-0 position-absolute">
                  <img
                    src="assets/images/builder-flowerimage.png"
                    alt="image"
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
