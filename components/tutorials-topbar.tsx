import { Globals } from "@/utils/globals";
import React from "react";

export default function TutorialsTopBar() {
  return (
    <>
      <div className="w-100 float-left top-bar-con main-box">
        <div className="container">
          <div className="top-bar-inner-con d-flex align-items-center justify-content-between position-relative">
            <div className="left-con d-flex">
              <a href={`mailto:${Globals.Email}`} className="text-white ml-0">
                <figure>
                  <img
                    src="/assets/images/mail-icon.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </figure>
                {Globals.Email}
              </a>
              <a href={`tel:${Globals.Phone}`} className="text-white mr-0">
                <figure>
                  <img
                    src="/assets/images/fon-icon.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </figure>
                {Globals.Phone}
              </a>
            </div>
            <div className="right-con">
              <ul className="list-unstyled p-0 m-0 d-flex align-items-center social-icon mb-0">
                <li>
                  <a href="https://www.facebook.com/login/" className="ml-0">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/i/flow/login">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" className="mr-0">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
