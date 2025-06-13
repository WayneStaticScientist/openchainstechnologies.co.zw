import { Globals } from "@/utils/globals";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="footer-section fix section-bg bg-cover"
        style={{
          backgroundImage: "url('/assets/img/footer/bg-image.jpg')",
        }}
      >
        <div className="container">
          <div className="footer-newsletter-items">
            <h2>Get Updated the Our Latest Newsletter</h2>
            <div className="footer-input">
              <input type="email" id="email2" placeholder="Enter your email" />
              <button className="newsletter-btn" type="submit">
                Subscribe <i className="far fa-search"></i>
              </button>
            </div>
          </div>
          <div className="footer-wrapper">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-12">
                <div className="footer-widget-items">
                  <div className="widget-title">
                    <Link href="/" className="footer-logo">
                      <img src="/assets/img/logo/black-logo.png" alt="img" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <div className="contact-info-items">
                      <div className="contact-items">
                        <div className="icon tw:items-center tw:justify-center tw:flex">
                          <img src="/assets/img/call.png" alt="img" />
                        </div>
                        <div className="content">
                          <span>Call Us</span>
                          <h6>
                            <a href={`tel:${Globals.Phone}`}>{Globals.Phone}</a>
                          </h6>
                        </div>
                      </div>
                      <div className="contact-items">
                        <div className="icon tw:items-center tw:justify-center tw:flex">
                          <img src="/assets/img/mail.png" alt="img" />
                        </div>
                        <div className="content">
                          <span>Mail Us</span>
                          <h6>
                            <a href={`mailto:${Globals.Email}`}>
                              {Globals.Email}
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <h6 className="app-text">Openchains TechKNOW</h6>
                    <div className="apps-items">
                      <a href="#">
                        <img src="/assets/img/apply-store.png" alt="img" />
                      </a>
                      <a href="#">
                        <img src="/assets/img/play-store.jpg" alt="img" />
                      </a>
                    </div>
                    <div className="social-icon">
                      <a href={Globals.Facebook}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href={Globals.Instagram}>
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href={Globals.LinkedIn}>
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-5 col-md-4 col-sm-6">
                <div className="footer-widget-items">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <ul className="list-items">
                    <li>
                      <Link href="/electronics">Electronics</Link>
                    </li>
                    <li>
                      <Link href="/contact">24/7 Support</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <div className="footer-widget-items">
                  <div className="widget-title">
                    <h3>About OpenChains</h3>
                  </div>
                  <ul className="list-items">
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Legal Notice</Link>
                    </li>
                    <li>
                      <a href="#">Courses</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4">
                <div className="footer-widget-items">
                  <div className="widget-title">
                    <h3>Gallery</h3>
                  </div>
                  <div className="footer-gallery">
                    <div className="gallery-wrap">
                      <div className="gallery-item">
                        <div className="thumb">
                          <a
                            href="/assets/img/footer/gallery-1.jpg"
                            className="img-popup"
                          >
                            <img
                              src="/assets/img/footer/gallery-1.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus"></i>
                            </div>
                          </a>
                        </div>
                        <div className="thumb">
                          <a
                            href="/assets/img/footer/gallery-2.jpg"
                            className="img-popup"
                          >
                            <img
                              src="/assets/img/footer/gallery-2.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus"></i>
                            </div>
                          </a>
                        </div>
                        <div className="thumb">
                          <a
                            href="/assets/img/footer/gallery-3.jpg"
                            className="img-popup"
                          >
                            <img
                              src="/assets/img/footer/gallery-3.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="gallery-item">
                        <div className="thumb">
                          <a
                            href="/assets/img/footer/gallery-4.jpg"
                            className="img-popup"
                          >
                            <img
                              src="/assets/img/footer/gallery-4.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus"></i>
                            </div>
                          </a>
                        </div>
                        <div className="thumb">
                          <a
                            href="/assets/img/footer/gallery-5.jpg"
                            className="img-popup"
                          >
                            <img
                              src="/assets/img/footer/gallery-5.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus"></i>
                            </div>
                          </a>
                        </div>
                        <div className="thumb">
                          <a
                            href="/assets/img/footer/gallery-6.jpg"
                            className="img-popup"
                          >
                            <img
                              src="/assets/img/footer/gallery-6.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="gallery-item">
                        <div className="thumb">
                          <a
                            href="/assets/img/footer/gallery-7.jpg"
                            className="img-popup"
                          >
                            <img
                              src="/assets/img/footer/gallery-7.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus"></i>
                            </div>
                          </a>
                        </div>
                        <div className="thumb">
                          <a
                            href="/assets/img/footer/gallery-8.jpg"
                            className="img-popup"
                          >
                            <img
                              src="/assets/img/footer/gallery-8.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus"></i>
                            </div>
                          </a>
                        </div>
                        <div className="thumb">
                          <a
                            href="/assets/img/footer/gallery-9.jpg"
                            className="img-popup"
                          >
                            <img
                              src="/assets/img/footer/gallery-9.jpg"
                              alt="gallery-img"
                            />
                            <div className="icon">
                              <i className="far fa-plus"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-1">
          <div className="container">
            <div className="footer-bottom-wrapper">
              <p className="wow fadeInUp" data-wow-delay=".3s">
                © {new Date().getFullYear()} Openchains All rights reserved.
              </p>
              <ul className="footer-menu wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="/terms">Terms</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
