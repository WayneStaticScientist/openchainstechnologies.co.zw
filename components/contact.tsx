"use client";
import { Globals } from "@/utils/globals";
import { SendEmail } from "@/utils/net";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
export default function Contact() {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [sent, isSent] = useState(false);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {}, []);
  const sendEmail = async () => {
    if (message.trim().length < 5) return toast.error("message too short");
    setIsLoading(true);
    try {
      await SendEmail({
        name: name + " " + lastName,
        email,
        phone,
        message,
      });
      isSent(true);
    } catch (e) {
      toast.error("There was error sending email");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <>
        {!sent && (
          <section className="float-left w-100 position-relative contact-form-con padding-top padding-bottom main-box background-primary">
            <figure>
              <img
                src="assets/images/contact-form-element1.png"
                alt="element"
                className="position-absolute element1"
              />
            </figure>
            <figure>
              <img
                src="assets/images/contact-form-element2.png"
                alt="element"
                className="position-absolute element2"
              />
            </figure>
            <div
              className="container wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="heading-title-con text-center">
                <span className="special-text sea-green-text d-block">
                  Contact Form{" "}
                </span>
                <h2 className="text-white">Get in Touch With Us </h2>
                {/* heading title con */}
              </div>
              <div className="row">
                <div className="col-xl-10 col-lg-10 mr-auto ml-auto">
                  <form
                    className="main-form text-center"
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendEmail();
                    }}
                    id="contactpage"
                  >
                    <ul className="list-unstyled p-0 float-left w-100 mb-0">
                      <li>
                        <input
                          type="text"
                          placeholder="First Name"
                          name="fname"
                          id="fname"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="lname"
                          id="lname"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </li>
                      <li>
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </li>
                      <li>
                        <input
                          type="tel"
                          placeholder="Phone"
                          name="phone"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </li>
                      <li>
                        <textarea
                          placeholder="Message"
                          rows={6}
                          name="msg"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </li>
                    </ul>
                    <div className="secondary-button d-inline-block">
                      <button type="submit" id="submit">
                        {loading && (
                          <CgSpinner className=" tw:animate-spin tw:text-center tw:w-full" />
                        )}
                        {!loading && (
                          <>
                            Send Message
                            <i className="fas fa-arrow-right ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                  {/* col */}
                </div>
                {/* row */}
              </div>
              {/* container */}
            </div>
            {/* contact form con */}
          </section>
        )}
        {sent && (
          <section className="float-left w-100 position-relative contact-form-con padding-top padding-bottom main-box background-primary text-center">
            <div className="container">
              <div className="heading-title-con">
                <span className="special-text sea-green-text d-block">
                  Thank You!
                </span>
                <h2 className="text-white">
                  Your message has been successfully sent.
                </h2>
                <p className="text-white">
                  We appreciate you contacting us. One of our colleagues will
                  get back in touch with you soon!
                </p>
              </div>
            </div>
          </section>
        )}
      </>
    </>
  );
}
