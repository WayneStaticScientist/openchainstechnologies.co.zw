"use client";
import emailjs from "@emailjs/browser";
import { CgSpinner } from "react-icons/cg";
import toast, { Toaster } from "react-hot-toast";
import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = React.useState("");
  const [time, setTime] = React.useState(new Date().toDateString());
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [sent, isSent] = useState(false);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_PUBLIC_KEY) {
      emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      });
    } else {
      console.error(
        "EmailJS Public Key is not defined. Make sure NEXT_PUBLIC_EMAILJS_PUBLIC_KEY is set in your .env.local file."
      );
    }
  }, []);
  const sendEmail = async (f: React.FormEvent<HTMLFormElement>) => {
    f.preventDefault();
    if (name.trim().length < 3) return toast.error("name too short");
    if (message.trim().length < 5) return toast.error("message too short");
    if (!form.current) return;
    if (form.current) {
      setIsLoading(true);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          form.current
        )
        .then(
          () => {
            toast.success("Your message has been sent successfully!");
            setName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setMessage("");
            isSent(true);
          },
          (e) => {
            console.log(e);
            toast.error("Failed to send message. Please try again.");
          }
        )
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      console.error("Form reference is not available.");
      toast.error("An internal error occurred. Please try again later.");
    }
    await new Promise((resolve) => setTimeout(resolve, 30000)); // Wait for 30 seconds
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
                    ref={form}
                    onSubmit={sendEmail}
                    id="contactpage"
                    className="main-form text-center"
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
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </li>
                    </ul>
                    <input type="hidden" value={time} name="time" />
                    <div className="secondary-button d-inline-block">
                      <button id="submit">
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
