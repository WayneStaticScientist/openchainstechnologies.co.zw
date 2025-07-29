"use client";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { SiLivechat } from "react-icons/si";

export default function Header() {
  return (
    <>
      <header className="w-100 float-left header-con main-box position-relative">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" href="/">
              <figure className="mb-0">
                <img src="/assets/images/logo.png" alt="logo-icon" />
              </figure>
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FaBars />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link p-0" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link p-0" href="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle p-0"
                    href="#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown2"
                  >
                    <Link className="dropdown-item" href="/web">
                      Websites
                    </Link>
                    <Link className="dropdown-item" href="/electronics">
                      Electronics
                    </Link>
                    <Link className="dropdown-item" href="/app">
                      Application Development
                    </Link>
                    <Link className="dropdown-item" href="/ai">
                      Robotics And AI
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle p-0"
                    href="#"
                    id="navbarDropdown5"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Lessons
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown5"
                  >
                    <Link
                      className="dropdown-item"
                      href="/lessons/html/introduction"
                    >
                      Html and Css
                    </Link>
                    <Link
                      className="dropdown-item"
                      href="/lessons/javascript/introduction"
                    >
                      Javascript
                    </Link>
                    <Link className="dropdown-item" href="/lessons/python">
                      Python
                    </Link>
                    <Link className="dropdown-item" href="/lessons/react">
                      React
                    </Link>
                    <Link className="dropdown-item" href="/lessons/java">
                      Java
                    </Link>
                    <Link className="dropdown-item" href="/lessons/golang">
                      Golang
                    </Link>
                    <Link className="dropdown-item" href="/lessons/php">
                      PHP
                    </Link>
                    <Link className="dropdown-item" href="/lessons/big">
                      Build Something Big
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle p-0"
                    href="#"
                    id="navbarDropdown4"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Openchains
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown4"
                  >
                    <Link
                      className="dropdown-item"
                      href={`/editor/html?refer=${encodeURIComponent(
                        window.location.pathname
                      )}`}
                    >
                      Live Html Editor
                    </Link>
                    <Link className="dropdown-item" href="/founder">
                      Founder
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Openchains News
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Openchains Business
                    </Link>
                    <Link className="dropdown-item" href="/apis/email">
                      Openchains Email Api
                    </Link>
                    <Link className="dropdown-item" href="/apis/libraries">
                      Openchains Libraries
                    </Link>
                  </div>
                </li>
              </ul>
              {/*  */}
            </div>
            <div className="header-contact">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    href="/chat"
                    className="live-chat tw:flex tw:items-center tw:justify-center tw:gap-2"
                  >
                    <SiLivechat />
                    Live Chat
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
