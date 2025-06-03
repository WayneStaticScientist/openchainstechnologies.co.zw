"use client";
import { Globals } from "@/utils/globals";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCircleInfo, CiHome } from "react-icons/ci";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { MdOutlinePersonOutline } from "react-icons/md";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className="fix-area">
        <div
          className={`tw:p-6 tw:fixed tw:left-0 tw:top-0 tw:bottom-0 tw:w-3/4 tw:bg-white tw:h-screen tw:z-40 offcanvas__menu tw:transform tw:transition-transform tw:duration-300 ${
            navbarOpen ? "tw:translate-x-0" : "tw:-translate-x-full"
          }`}
          id="offcanvas"
        >
          <div className="offcanvas__menu-wrapper">
            <div className="offcanvas__menu-inner">
              <div className="offcanvas__menu-content">
                <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                  <div className="offcanvas__logo">
                    <Link href="/" className="header-logo">
                      <Image
                        src="/assets/img/logo/black-logo.png"
                        alt="logo-img"
                        width={200}
                        height={64}
                      />
                    </Link>
                  </div>

                  <button onClick={() => setNavbarOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <nav id="mobile-menu-2">
                  <ul>
                    <li className="flex items-center gap-x-3">
                      <CiHome />
                      <Link href="/">Home</Link>
                    </li>
                    <li className="flex items-center gap-x-3">
                      <CiCircleInfo />
                      <Link href="/about">About</Link>
                    </li>
                    <li className="flex items-center gap-x-3">
                      <LiaProjectDiagramSolid />
                      <Link href="/projects">Projects</Link>
                    </li>
                    <li className="flex items-center gap-x-3">
                      <MdOutlinePersonOutline />
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-section header-inner">
        <div className="header-top-section">
          <div className="container-fluid">
            <div className="header-top-wrapper">
              <ul className="top-left">
                <li>
                  <i className="far fa-envelope"></i>
                  <a href={`mailto:${Globals.Email}`}>{Globals.Email}</a>
                </li>
                <li>
                  <i className="far fa-map-marker-alt"></i>
                  132, Prospect, Harare
                </li>
              </ul>
              <div className="social-icon">
                <a href={Globals.Facebook}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={Globals.Instagram}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={Globals.LinkedIn}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="header-1 header-4">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <Image
                        src="/assets/img/logo/black-logo.png"
                        alt="logo-img"
                        width={200}
                        height={64}
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end ">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu align-items-center xl:flex hidden">
                      <nav id="mobile-menu">
                        <ul>
                          <li>
                            <Link href="/">Home</Link>
                          </li>
                          <li>
                            <Link href="/about">About</Link>
                          </li>
                          <li>
                            <a>
                              Services
                              <i className="fas fa-chevron-down"></i>
                            </a>
                            <ul className="submenu">
                              <li>
                                <Link href="/web">Web Design</Link>
                              </li>
                              <li>
                                <Link href="/app">App Design</Link>
                              </li>
                              <li>
                                <Link href="/systems">Systems</Link>
                              </li>
                              <li>
                                <Link href="/graphic">Graphic Design</Link>
                              </li>
                              <li>
                                <Link href="/simulations">Simulations</Link>
                              </li>
                              <li>
                                <Link href="/electronics">Electronics</Link>
                              </li>
                              <li>
                                <Link href="/ai">Ai</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              Courses
                              <i className="fas fa-chevron-down"></i>
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="#">Programming</a>
                              </li>
                              <li>
                                <a href="#">Simulations</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="/projects">Projects</Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon tw:flex! tw:items-center! tw:justify-center!">
                      <img src="/assets/img/call.png" alt="img" />
                    </div>
                    <div className="content">
                      <span>Call Us</span>
                      <h6>
                        <a href={`tel:{Globals.Phone}`}>{Globals.Phone}</a>
                      </h6>
                    </div>
                  </div>
                  <div className="header-search">
                    <button className="d-flex align-items-center search-toggle">
                      <i className="far fa-search"></i>
                    </button>
                  </div>
                  <a href="#" className="theme-btn">
                    <span>Explore More</span>{" "}
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                  <div
                    className="header__hamburger d-xl-none my-auto"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <div className="sidebar__toggle">
                      <div className="header-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
