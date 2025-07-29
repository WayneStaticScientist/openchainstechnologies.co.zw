import Link from "next/link";
import React from "react";

export default function BreadCrump({
  page,
  title,
  summary,
}: {
  page: string;
  title: string;
  summary: string;
}) {
  return (
    <>
      <section className="float-left w-100 position-relative sub-banner-con main-box about-banner">
        <div className="container">
          <div className="breadcrumb-con d-inline-block">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {page}
              </li>
            </ol>
            {/* breadcrumb */}
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="sub-banner-content-con position-relative">
                <h1 className="text-white">{title}</h1>
                <p className="mb-0 text-white">
                  {summary} <br />
                  #The only Technologies
                </p>
                {/* sub banner content con */}
              </div>
              {/* col */}
            </div>
            {/* row */}
          </div>
          {/* container */}
        </div>
        {/* sub banner con */}
      </section>
    </>
  );
}
