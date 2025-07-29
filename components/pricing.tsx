import Link from "next/link";
import React from "react";

export default function Pricing() {
  return (
    <section className="float-left w-100 position-relative hosting-plans-con padding-top main-box">
      <figure>
        <img
          src="/assets/images/element-line.png"
          alt="element"
          className="position-absolute element-line"
        />
      </figure>
      <div
        className="container wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.3s"
      >
        <div className="heading-title-con text-center">
          <span className="special-text orange-text d-block">
            WebHosting Services
          </span>
          <h2>
            Choose Your Perfact Web <br />
            Hosting Plan
          </h2>
          {/* heading title con */}
        </div>
        <div className="row">
          <figure>
            <img
              src="/assets/images/elipse3.png"
              alt="ellipse"
              className="position-absolute ellipse3"
            />
          </figure>
          <figure>
            <img
              src="/assets/images/elipse.png"
              alt="ellipse"
              className="position-absolute ellipse"
            />
          </figure>
          <div className="col-lg-4 col-md-6">
            <div className="plan-box background-fff position-relative">
              <figure className="tw:flex! tw:items-center! tw:justify-center!">
                <img
                  src="/assets/images/hosting-icon1.png"
                  alt="icon"
                  className="img-fluid"
                />
              </figure>
              <h4 className="special">Email Hosting</h4>
              <p>
                Professional email solutions with secure, ad-free inboxes,
                custom domains, and easy management for businesses of any size.
              </p>
              <div className="price magento-text">
                <span className="d-inline-block magento-text font-weight-bold dollar">
                  $
                </span>
                20
                <span className="d-inline-block magento-text font-weight-bold per-month font-size-14">
                  / 3 month
                </span>
                {/* price */}
              </div>
              <ul className="list-unstyled p-0">
                <li className="position-relative">Single Domain</li>
                <li className="position-relative">
                  <strong>One</strong> Click Registration
                </li>
                <li className="position-relative">
                  {" "}
                  <strong>Unlimited </strong>
                  Bandwidth
                </li>
                <li className="position-relative">
                  {" "}
                  <strong>SSL</strong>
                  Certificate
                </li>
              </ul>
              <div className="primary-button d-inline-block">
                <Link href="/hosting/email" className="d-inline-block">
                  Order Now <i className="fas fa-arrow-right ml-2" />
                </Link>
              </div>
              {/* plan box */}
            </div>
            {/* col */}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="plan-box background-fff position-relative orange-box">
              <figure className="tw:flex! tw:items-center! tw:justify-center!">
                <img
                  src="/assets/images/hosting-icon2.png"
                  alt="icon"
                  className="img-fluid"
                />
              </figure>
              <h4 className="special">Website Development</h4>
              <p>
                Custom website development tailored to your business needs,
                including responsive design, e-commerce integration, content
                management systems, and ongoing support to help your brand grow
                online.
              </p>
              <div className="price magento-text">
                <span className="d-inline-block magento-text font-weight-bold dollar">
                  $
                </span>
                100
                <span className="d-inline-block magento-text font-weight-bold per-month font-size-14">
                  starting price
                </span>
                {/* price */}
              </div>
              <ul className="list-unstyled p-0">
                <li className="position-relative">
                  <strong>1</strong> Website
                </li>
                <li className="position-relative">
                  <strong>5</strong> Email Accounts
                </li>
                <li className="position-relative">
                  {" "}
                  <strong>Free </strong> .co.zw domain
                </li>
                <li className="position-relative">
                  <strong>Free</strong> SSL Certificate
                </li>
              </ul>
              <div className="primary-button d-inline-block">
                <Link href="/hosting/web100" className="d-inline-block">
                  Order Now <i className="fas fa-arrow-right ml-2" />
                </Link>
              </div>
              {/* plan box */}
            </div>
            {/* col */}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="plan-box background-fff position-relative">
              <figure className="tw:flex! tw:items-center! tw:justify-center!">
                <img
                  src="/assets/images/hosting-icon3.png"
                  alt="icon"
                  className="img-fluid"
                />
              </figure>
              <h4 className="special">E-Commerce Website</h4>
              <p>
                Robust e-commerce solutions with secure payment integration,
                product management, inventory tracking, and scalable
                infrastructure to support growing online stores.
              </p>
              <div className="price magento-text">
                <span className="d-inline-block magento-text font-weight-bold dollar">
                  $
                </span>
                820
                <span className="d-inline-block magento-text font-weight-bold per-month font-size-14">
                  startup
                </span>
                {/* price */}
              </div>
              <ul className="list-unstyled p-0">
                <li className="position-relative">
                  {" "}
                  <strong>$30-$160</strong> Monthly Bills
                </li>
                <li className="position-relative">
                  <strong>20+</strong> Email Accounts
                </li>
                <li className="position-relative">
                  <strong>Free</strong> .org or .com domains
                </li>
                <li className="position-relative">
                  <strong>Advanced</strong> Security Incooperated
                </li>
              </ul>
              <div className="primary-button d-inline-block">
                <Link href="/hosting/ecommerce" className="d-inline-block">
                  Order Now <i className="fas fa-arrow-right ml-2" />
                </Link>
              </div>
              {/* plan box */}
            </div>
            {/* col */}
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/* hosting plan con */}
    </section>
  );
}
