import { TestimonialsList } from "@/utils/globals";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Testimonial() {
  return <></>;
  return (
    <>
      <section className="testimonial-section-4 section-padding">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="wow fadeInUp">Our Testimonial</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Real Feedback from Our Happy <br /> Clients
              </h2>
            </div>
            <p className="wow fadeInUp" data-wow-delay=".5">
              check what our clients says to us
              <br />
            </p>
          </div>
          <div className="swiper testimonial-slider-4">
            <div className="swiper-wrapper">
              {TestimonialsList.map((e, i) => {
                return (
                  <div className="swiper-slide" key={i}>
                    <div className="testimonial-box-items-4">
                      <div className="testi-img">
                        <img
                          src="/assets/img/testimonial/client-03.png"
                          alt="img"
                        />
                      </div>
                      <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="icon">
                        <img
                          src="/assets/img/testimonial/quote-01.png"
                          alt="icon"
                        />
                      </div>
                      <h3>&quot;{e.message}&quot;</h3>
                      <div className="client-info">
                        <h4>{e.name}</h4>
                        <span>{e.place}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
