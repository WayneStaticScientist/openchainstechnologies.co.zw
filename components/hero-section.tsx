"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaArrowRightLong } from "react-icons/fa6";
import { Globals } from "@/utils/globals";
export default function HeroSection() {
  const [product, setProduct] = React.useState("");
  const [forWhat, setForWhat] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [category] = React.useState("");
  return (
    <>
      <section className="hero-section hero-4">
        <div className="array-button">
          <button className="array-prev">
            <i className="far fa-long-arrow-left"></i>
          </button>
          <button className="array-next">
            <i className="far fa-long-arrow-right"></i>
          </button>
        </div>
        <div className="swiper hero-slider">
          <Carousel
            showArrows={false}
            animationHandler={"fade"}
            showStatus={false}
            showIndicators={false}
            swipeable={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            transitionTime={2000}
            className="fade-carousel"
          >
            <div className="swiper-slide fade-in">
              <div className="hero-items">
                <div className="plane-shape">
                  <img src="/assets/img/hero/new/plane-2.png" alt="img" />
                </div>
                <div className="plane-shape-2">
                  <img src="/assets/img/hero/new/plane-3.png" alt="img" />
                </div>
                <div
                  className="hero-bg bg-cover"
                  style={{
                    backgroundImage: "url('/assets/img/hero/04.jpg')",
                  }}
                ></div>
                <div className="container">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="hero-content">
                        <h6 data-animation="fadeInUp" data-delay="1.3s">
                          Software & Electronics Company
                        </h6>
                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                          <span className="shape-text">Openchains</span>
                          <span>The</span> <br /> Software Industry
                        </h1>
                        <p data-animation="fadeInUp" data-delay="1.7s">
                          Innovation Software & Electronics Solutions Website
                          development , Electronics Manufacturing and Digital
                          advertising Services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide fade-in">
              <div className="hero-items">
                <div className="plane-shape">
                  <img src="assets/img/hero/new/plane-2.png" alt="img" />
                </div>
                <div className="plane-shape-2">
                  <img src="assets/img/hero/new/plane-3.png" alt="img" />
                </div>
                <div
                  className="hero-bg bg-cover"
                  style={{
                    backgroundImage: "url('/assets/img/hero/05.jpg')",
                  }}
                ></div>
                <div className="container">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="hero-content">
                        <h6 data-animation="fadeInUp" data-delay="1.3s">
                          Software & Electronics Company
                        </h6>
                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                          <span className="shape-text">Openchains</span>
                          <span>The</span> <br /> Electronics Industry
                        </h1>
                        <p data-animation="fadeInUp" data-delay="1.7s">
                          {" "}
                          Innovation Software & Electronics Solutions Website
                          development , Electronics Manufacturing and Digital
                          advertising Services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="container">
          <div className="booking-list-area-1">
            <form className="row g-3 align-items-end col-12">
              <div className="col-md-3">
                <div className="booking-list">
                  <div className="content">
                    <h5 className="mb-2">Product</h5>
                    <select
                      className="form-select"
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                    >
                      <option>Your Desired Project</option>
                      <option>Website</option>
                      <option>Mobile App</option>
                      <option>Desktop App</option>
                      <option>System Service</option>
                      <option>Electronics</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="booking-list">
                  <div className="content">
                    <h5 className="mb-2">For</h5>
                    <select
                      className="form-select"
                      value={forWhat}
                      onChange={(e) => setForWhat(e.target.value)}
                    >
                      <option>Choose For What</option>
                      <option>Business</option>
                      <option>Personal</option>
                      <option>Organization</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="booking-list">
                  <div className="content">
                    <h5 className="mb-2">Due Date</h5>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="dd/mm/yyyy"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-3">
                <a
                  href={Globals.decodeToBooking(
                    product,
                    forWhat,
                    dueDate,
                    category
                  )}
                  target="_blank"
                  className="text-decoration-none"
                >
                  <button
                    type="submit"
                    className="btn btn-primary d-flex align-items-center gap-2"
                  >
                    <span>book</span>
                    <FaArrowRightLong />
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
