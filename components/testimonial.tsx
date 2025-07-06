import { TestimonialsList } from "@/utils/globals";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Testimonial() {
  return (
    <>
      <section className="float-left w-100 position-relative customers-reviews-con padding-top main-box text-center">
        <div
          className="container wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="heading-title-con text-center">
            <span className="special-text d-block">Testimonials</span>
            <h2 className="">
              What Our Customers Say <br />
              About Us{" "}
            </h2>
          </div>
          <div className="owl-carousel">
            <div className="item">
              <div className="white-box">
                <p>
                  OpenChains transformed our online presence with a stunning,
                  responsive website. Their attention to detail and
                  professionalism exceeded our expectations!
                </p>
                <figure className="text-center">
                  <img
                    src="/assets/images/customer-review1.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </figure>
                <h4>Rizwan Joseph</h4>
                <span className="d-block">Business Owner</span>
              </div>
            </div>
            <div className="item">
              <div className="white-box">
                <p>
                  The web development lessons from OpenChains were clear and
                  practical. I quickly gained the skills to build and manage my
                  own website. Highly recommended!
                </p>
                <figure className="text-center">
                  <img
                    src="/assets/images/customer-review2.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </figure>
                <h4>Alexandra Jorden</h4>
                <span className="d-block">Student</span>
              </div>
            </div>
            <div className="item">
              <div className="white-box">
                <p>
                  Thank you, OpenChains, for designing and installing our
                  automated alarm systems at home. The setup works perfectly and
                  gives us peace of mind. Your team's expertise and support made
                  the whole process seamless!
                </p>
                <figure className="text-center">
                  <img
                    src="/assets/images/customer-review3.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </figure>
                <h4>Anthony Clark</h4>
                <span className="d-block">Tech Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
