import React from "react";

export default function Partners() {
  return (
    <>
      <div className="float-left w-100 partner-con position-relative main-box background-f3f0fb">
        <div
          className="container wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <ul className="list-unstyled p-0 m-0 d-flex align-items-center justify-content-between">
            <li className="position-relative">
              <img src="/assets/images/partner-icon1.png" alt="googlecloud" />
            </li>
            <li className="position-relative">
              <img src="/assets/images/partner-icon2.png" alt="digitalocean" />
            </li>
            <li className="position-relative">
              <img src="/assets/images/partner-icon3.png" alt="vultr" />
            </li>
            <li className="position-relative">
              <img src="/assets/images/partner-icon4.png" alt="malcare" />
            </li>
            <li className="position-relative">
              <img src="/assets/images/partner-icon5.png" alt="cloudflare" />
            </li>
            {/* list unstyled */}
          </ul>
          {/* container */}
        </div>
        {/* partner-con */}
      </div>
    </>
  );
}
