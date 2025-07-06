import BreadCrump from "@/components/breadcrump";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { baseUrl, Globals } from "@/utils/globals";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with OpenChains for inquiries, support, and collaboration opportunities.",
  alternates: {
    canonical: baseUrl + "/contact", // Self-referencing canonical
  },
};
export default function ContactPage() {
  return (
    <>
      <Head>
        <title>
          OpenChains - World Of Technologies | Webdesign, Development and more
        </title>
        <meta
          name="description"
          content="Contact Us Today | For webservices and consultation"
        />
      </Head>
      <Header />
      <BreadCrump
        page={"contact"}
        title={"Contact Us"}
        summary={
          "Reach out to OpenChains for expert web development, design, and technology solutions. We're here to answer your questions, discuss your project needs, and explore collaboration opportunities."
        }
      />
      <section className="float-left w-100 position-relative contact-help-con padding-top padding-bottom main-box text-center">
        <figure>
          <img
            src="assets/images/elipse3.png"
            alt="ellipse"
            className="position-absolute ellipse3"
          />
        </figure>
        <figure>
          <img
            src="assets/images/elipse.png"
            alt="ellipse"
            className="position-absolute ellipse"
          />
        </figure>
        <div
          className="container wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="heading-title-con text-center">
            <span className="special-text orange-text d-block">
              Customer Support{" "}
            </span>
            <h2 className="">
              Have A Technical Issue Or Need Help <br />
              about an existing project
            </h2>
            {/* heading title con */}
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 d-flex">
              <div className="white-box background-fff position-relative w-100">
                <figure>
                  <img
                    src="/assets/images/location-img.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </figure>
                <h4 className="font-weight-bold">Contact Details</h4>
                <ul className="list-unstyled p-0">
                  <li>
                    {Globals.Address} <br />
                    {Globals.City}
                  </li>
                </ul>
                {/* white box */}
              </div>
              {/* col */}
            </div>
            <div className="col-lg-4 col-md-4 d-flex">
              <div className="white-box background-fff position-relative w-100">
                <figure>
                  <img
                    src="assets/images/email-img.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </figure>
                <h4 className="font-weight-bold">Email</h4>
                <ul className="list-unstyled p-0">
                  <li>
                    <a href={`mailto:${Globals.Email}`}>{Globals.Email}</a>
                  </li>
                </ul>
                {/* white box */}
              </div>
              {/* col */}
            </div>
            <div className="col-lg-4 col-md-4 d-flex">
              <div className="white-box background-fff position-relative w-100">
                <figure>
                  <img
                    src="/assets/images/phone-img.png"
                    alt="icon"
                    className="img-fluid"
                  />
                </figure>
                <h4 className="font-weight-bold">Phone</h4>
                <ul className="list-unstyled p-0">
                  <li>
                    <a href={`tel:${Globals.Phone}`}>{Globals.Phone}</a>
                  </li>
                </ul>
                {/* white box */}
              </div>
              {/* col */}
            </div>
            {/* row */}
          </div>
          {/* container */}
        </div>
        {/* why choose us con  */}
      </section>
      <Contact />
      <Footer />
    </>
  );
}
