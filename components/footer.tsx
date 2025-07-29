import React from "react";
import { Globals } from "@/utils/globals";
import Link from "next/link";
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
                    <Link href="#" className="d-inline-block">
                      Lessons
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <Link href="#" className="d-inline-block">
                      Electrical Engineering
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <Link href="#" className="d-inline-block">
                      Web development
                    </Link>
                  </li>
                  <li className="mb-0">
                    <i className="fa-solid fa-circle" />
                    <Link href="#" className="d-inline-block">
                      Game Development
                    </Link>
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
                    <Link href="/about" className="d-inline-block">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <Link href="/services" className="d-inline-block">
                      Services
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <Link href="/pricing-calculator" className="d-inline-block">
                      Pricing calculator
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <Link href="/contact" className="d-inline-block">
                      Contact Us
                    </Link>
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
                    <Link href="/editor/html" className="d-inline-block">
                      Html Live Editor
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <Link href="/apis/libraries" className="d-inline-block">
                      Apis
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <Link href="/lessons/big" className="d-inline-block">
                      Building Big Apps
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle" />
                    <Link href="/hosting/others" className="d-inline-block">
                      Cart
                    </Link>
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
                    <Link href="https://maps.app.goo.gl/x2i4YdHeDkndHuTD6">
                      {Globals.Address} <br />
                      {Globals.City}
                    </Link>
                  </li>
                  <li className="position-relative">
                    <img
                      src="/assets/images/phone-icon.png"
                      alt="icon"
                      className="img-fluid"
                    />
                    <Link href={`tel:${Globals.Phone}`}>{Globals.Phone}</Link>
                  </li>
                  <li className="position-relative mb-0">
                    <img
                      src="/assets/images/email-icon.png"
                      alt="icon"
                      className="img-fluid"
                    />
                    <Link href={`mailto:${Globals.Email}`}>
                      {Globals.Email}
                    </Link>
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
                <Link className="d-inline-block orange-text tw:mx-3!" href="/">
                  {" "}
                  Openchains Technologies
                </Link>
                All Rights Reserved
              </p>
              {/* copyright content */}
            </div>
            <ul className="list-unstyled p-0 m-0 d-flex align-items-center social-icon">
              <li>
                <Link href={Globals.Facebook}>
                  <i className="fa-brands fa-facebook-f ml-0" />
                </Link>
              </li>
              <li>
                <Link href={Globals.LinkedIn}>
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-x-twitter" />
                </Link>
              </li>
              <li>
                <Link href={Globals.Facebook} className="mr-0">
                  <i className="fa-brands fa-facebook" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
