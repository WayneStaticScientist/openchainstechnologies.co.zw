import React from "react";

export default function ComingSoon() {
  return (
    <section className="float-left w-100 coming-soon-con d-flex flex-column justify-content-center position-relative main-box gradient">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 mr-auto ml-auto">
            <div className="sub-content-con position-relative tw:flex tw:flex-col tw:justify-center tw:items-center">
              <img
                src="/assets/images/large-logo.png"
                alt="logo-icon"
                className="img-fluid new-logo"
              />
              <div className="position-relative coming-content-con">
                <h3 className="font-weight-500">
                  Our Website is under construction
                </h3>
                <h1 className="purple-text">Coming Soon</h1>
                <div id="compaign_countdown2" className="compaign_countdown">
                  <ul className="p-0 d-flex justify-content-center align-items-center">
                    <li>
                      <span id="days" className="days" /> Days
                    </li>
                    <li>
                      <span id="hours" className="hours" />
                      Hours
                    </li>
                    <li>
                      <span id="minutes" className="minutes" />
                      Mints
                    </li>
                    <li>
                      <span id="seconds" className="seconds" />
                      Sec
                    </li>
                  </ul>
                </div>
                {/* coming-content-con */}
              </div>
              {/* sub content con*/}
            </div>
            {/* col */}
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/* coming soon con */}
    </section>
  );
}
