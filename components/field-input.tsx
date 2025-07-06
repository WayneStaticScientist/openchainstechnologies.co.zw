import React from "react";
import { IoMdAppstore } from "react-icons/io";
import { LuBellElectric } from "react-icons/lu";
import { MdOutlineWeb } from "react-icons/md";

export default function FieldInput() {
  return (
    <section className="float-left w-100 position-relative domain-registration-con padding-top padding-bottom main-box">
      <div
        className="container wow fadeInUp"
        data-wow-duration="2s"
        data-wow-delay="0.3s"
      >
        <div className="row">
          <div className="col-12">
            <div className="domain-box position-relative">
              <figure className="">
                <img
                  src="assets/images/domain-element1.png"
                  alt="element"
                  className="img-fluid position-absolute element1"
                />
              </figure>
              <figure className="">
                <img
                  src="assets/images/domain-element2.png"
                  alt="element"
                  className="img-fluid position-absolute element2"
                />
              </figure>
              <h5 className="orange-text text-center font-weight-normal">
                Website Development
              </h5>
              <h2 className="text-white text-center">
                Electronics &amp; Software Solutions for Your Business
              </h2>
              <form action="javascript:;">
                <div className="form-group position-relative mb-0">
                  <img
                    src="assets/images/domain-searchicon.png"
                    alt="image"
                    className="search img-fluid"
                  />
                  <input
                    type="text"
                    className="form_style"
                    placeholder="Describe your project needs..."
                    name="project"
                  />
                  <button>
                    Get Started
                    <i className="fa-solid fa-arrow-right" />
                  </button>
                  {/* form group */}
                </div>
              </form>
              <div className="domain_logo_links d-flex align-items-center justify-content-between">
                <ul className="list-unstyled mb-0 tw:grid! tw:grid-cols-1 tw:lg:grid-cols-3 tw:gap-2">
                  <li className=" tw:m-0!">
                    <figure className="mb-0 tw:flex! tw:gap-4 tw:items-center tw:text-white">
                      <MdOutlineWeb /> WebSites
                    </figure>
                  </li>
                  <li className=" tw:m-0!">
                    <figure className="mb-0 tw:flex! tw:gap-4 tw:items-center tw:text-white">
                      <LuBellElectric /> Electronics
                    </figure>
                  </li>
                  <li className=" tw:m-0!">
                    <figure className="mb-0 tw:flex! tw:gap-4 tw:items-center tw:text-white">
                      <IoMdAppstore /> Software
                    </figure>
                  </li>
                </ul>
                <div className="button_links d-flex align-items-center position-relative">
                  <a href="/contact" className="register">
                    Request a Quote
                  </a>
                  <a href="/services" className="transfer">
                    View Services
                  </a>
                  {/* button links */}
                </div>
                {/* domain logo links */}
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        {/* container */}
      </div>
      {/* main section */}
    </section>
  );
}
