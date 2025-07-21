"use client";
import { HeroDisplay } from "@/utils/constants";
import React from "react";
export default function HeroSection() {
  return (
    <>
      <section className="float-left w-100 position-relative banner-con main-box">
        <figure>
          <img
            src="/assets/images/banner-element.png"
            alt="element"
            className="img-fluid position-absolute banner-element"
          />
        </figure>
        <div className="container">
          <div className="">
            {HeroDisplay.map((hero, index) => (
              <div className="item" key={index}>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 pl-0">
                    <div className="banner-content-con">
                      <span className="d-block magento-text inter-font font-weight-normal">
                        <i className="fa-solid fa-link" />
                        {hero.title}
                      </span>
                      <h1>
                        {hero.moto1} <br /> {hero.moto2}
                        <span className="d-inline-block orange-text web-text">
                          {hero.moto3}
                        </span>{" "}
                        {hero.moto4}
                      </h1>
                      <div className="secondary-button d-inline-block">
                        <a href={hero.link} className="d-inline-block">
                          Get Started <i className="fas fa-arrow-right ml-2" />{" "}
                        </a>
                      </div>
                      <a
                        href="/services"
                        className="d-inline-block magento-text our-features-link inter-font font-weight-normal"
                      >
                        Our Features
                      </a>
                    </div>
                    {/* col */}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="banner-image-con position-relative text-right">
                      <figure className="banner-img1 text-right">
                        <img
                          src={hero.src1}
                          alt="image"
                          className="d-inline-block"
                        />
                      </figure>
                      <figure className="banner-img2">
                        <img
                          src={hero.sr2}
                          alt="image"
                          className="position-absolute z-index-1"
                        />
                      </figure>
                      {/* banner image con */}
                    </div>
                    {/* col */}
                  </div>
                  {/* row */}
                </div>
                {/* item */}
              </div>
            ))}
            {/* owl carousel */}
          </div>
          {/* container */}
        </div>
        {/* banner con */}
      </section>
    </>
  );
}
