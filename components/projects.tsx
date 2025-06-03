"use client";
import { Globals } from "@/utils/globals";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Projects() {
  return (
    <>
      <section
        className="tour-descover-section section-padding fix bg-cover"
        style={{
          backgroundImage: "url(/assets/img/tour/bg2.jpg)",
        }}
      >
        <div className="container">
          <div className="tour-discover-wrapper">
            <div className="row g-4">
              <div className="col-xl-5">
                <div className="tour-content lg-center">
                  <div className="section-title">
                    <span className="wow fadeInUp">Discover Our Projects</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Check our
                      <br /> Previous Works
                    </h2>
                    <p
                      className="mt-3 mt-mb-0 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      OpenChains has successfully delivered numerous projects in
                      web designing and development. From creating visually
                      stunning and user-friendly websites to developing robust
                      and scalable web applications, our team has consistently
                      exceeded client expectations.
                      <br /> essence of location, ensuring you experience. Our{" "}
                      <br /> attraction pass save you more.
                    </p>
                  </div>
                  <div className="tour-button mt-3">
                    <Link
                      href="/projects"
                      className="theme-btn wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <span>Explore More</span>{" "}
                      <i className="far fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="swiper tour-slider">
                  <Carousel
                    className="swiper-wrapper"
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={1000}
                  >
                    {Globals.Projects.map((e, i) => {
                      return (
                        <div className="swiper-slide" key={i}>
                          <div className="tour-card-item">
                            <div className="tour-image">
                              <img src={e.img} alt="img" />
                            </div>
                            <div className="tour-content">
                              <h6>
                                {" "}
                                <span>{e.tag}</span>
                              </h6>
                              <h4>
                                <a href={e.path} target="_blank">
                                  {e.title}
                                </a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="far fa-map-marker-alt"></i>
                                  {e.path}
                                </li>
                              </ul>
                              <div className="list">
                                <ul>
                                  <li>
                                    <i className="far fa-calendar"></i>
                                    {e.days} days
                                  </li>
                                </ul>
                                <div className="star">
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                  <span>(30)</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
                <div className="swiper-dot4 mt-5">
                  <div className="dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
