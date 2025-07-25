import React from "react";
import { Globals } from "@/utils/globals";
export default function Footer() {
  return (
    <>
      <section className="float-left w-100 position-relative footer-con main-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-inner-links var1">
                <h4 className="text-white">Our Services</h4>
                <ul className="list-unstyled p-0 m-0">
                  <li>
                    <i className="fa-solid fa-circle" />
                    <a href="#" className="d-inline-block">
                      Lessons
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <a href="#" className="d-inline-block">
                      Electrical Engineering
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <a href="#" className="d-inline-block">
                      Web development
                    </a>
                  </li>
                  <li className="mb-0">
                    <i className="fa-solid fa-circle" />
                    <a href="#" className="d-inline-block">
                      Game Development
                    </a>
                  </li>
                </ul>
              </div>
              {/* col */}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-inner-links var2">
                <h4 className="text-white">Quick Links</h4>
                <ul className="list-unstyled p-0 m-0">
                  <li>
                    <i className="fa-solid fa-circle" />
                    <a href="/about" className="d-inline-block">
                      About Us
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <a href="/services" className="d-inline-block">
                      Services
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <a href="/pricing-calculator" className="d-inline-block">
                      Pricing calculator
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <a href="/contact" className="d-inline-block">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-inner-links var3">
                <h4 className="text-white">Resources</h4>
                <ul className="list-unstyled p-0 m-0">
                  <li>
                    <i className="fa-solid fa-circle" />
                    <a href="/editor/html" className="d-inline-block">
                      Html Live Editor
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <a href="/apis/libraries" className="d-inline-block">
                      Apis
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <a href="/lessons/big" className="d-inline-block">
                      Building Big Apps
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <a href="/hosting/others" className="d-inline-block">
                      Cart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-inner-links var4">
                <h4 className="text-white">Mailing Address</h4>
                <ul className="list-unstyled p-0 mb-0">
                  <li className="position-relative">
                    <img
                      src="assets/images/location-icon.png"
                      alt="icon"
                      className="img-fluid"
                    />{" "}
                    <a href="https://maps.app.goo.gl/x2i4YdHeDkndHuTD6">
                      {Globals.Address} <br />
                      {Globals.City}
                    </a>
                  </li>
                  <li className="position-relative">
                    <img
                      src="/assets/images/phone-icon.png"
                      alt="icon"
                      className="img-fluid"
                    />
                    <a href={`tel:${Globals.Phone}`}>{Globals.Phone}</a>
                  </li>
                  <li className="position-relative mb-0">
                    <img
                      src="/assets/images/email-icon.png"
                      alt="icon"
                      className="img-fluid"
                    />
                    <a href={`mailto:${Globals.Email}`}>{Globals.Email}</a>
                  </li>
                </ul>
                {/* footer inner links */}
              </div>
              {/* col */}
            </div>
            {/* row */}
          </div>
          <div className="copyright-con float-left w-100 position-relative d-flex align-items-center justify-content-between">
            <div className="copyright-content">
              <p className="mb-0 text-white">
                Copyright {new Date().getFullYear()}
                <a className="d-inline-block orange-text tw:mx-3!" href="/">
                  {" "}
                  Openchains Technologies
                </a>
                All Rights Reserved
              </p>
              {/* copyright content */}
            </div>
            <ul className="list-unstyled p-0 m-0 d-flex align-items-center social-icon">
              <li>
                <a href={Globals.Facebook}>
                  <i className="fa-brands fa-facebook-f ml-0" />
                </a>
              </li>
              <li>
                <a href={Globals.LinkedIn}>
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </li>
              <li>
                <a href={Globals.Facebook} className="mr-0">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
