"use client";
import React from "react";
import { SiLivechat } from "react-icons/si";

export default function Header() {
  return (
    <>
      <header className="w-100 float-left header-con main-box position-relative">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index-2.html">
              <figure className="mb-0">
                <img src="/assets/images/logo.png" alt="logo-icon" />
              </figure>
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link p-0" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle p-0"
                    href="#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown2"
                  >
                    <a className="dropdown-item" href="/web">
                      Websites
                    </a>
                    <a className="dropdown-item" href="/electronics">
                      Electronics
                    </a>
                    <a className="dropdown-item" href="/app">
                      Application Development
                    </a>
                    <a className="dropdown-item" href="/ai">
                      Robotics And AI
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle p-0"
                    href="#"
                    id="navbarDropdown5"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Lessons
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown5"
                  >
                    <a className="dropdown-item" href="/lessons/html">
                      Html and Css
                    </a>
                    <a className="dropdown-item" href="/lessons/javascript">
                      Javascript
                    </a>
                    <a className="dropdown-item" href="/lessons/python">
                      Python
                    </a>
                    <a className="dropdown-item" href="/lessons/react">
                      React
                    </a>
                    <a className="dropdown-item" href="/lessons/java">
                      Java
                    </a>
                    <a className="dropdown-item" href="/lessons/golang">
                      Golang
                    </a>
                    <a className="dropdown-item" href="/lessons/php">
                      PHP
                    </a>
                    <a className="dropdown-item" href="/lessons/big">
                      Build Something Big
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle p-0"
                    href="#"
                    id="navbarDropdown4"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Openchains
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown4"
                  >
                    <a className="dropdown-item" href="#">
                      Openchains News
                    </a>
                    <a className="dropdown-item" href="#">
                      Openchains Business
                    </a>
                    <a className="dropdown-item" href="/apis/email">
                      Openchains Email Api
                    </a>
                    <a className="dropdown-item" href="/apis/libraries">
                      Openchains Libraries
                    </a>
                  </div>
                </li>
              </ul>
              {/*  */}
            </div>
            <div className="header-contact">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="/chat"
                    className="live-chat tw:flex tw:items-center tw:justify-center tw:gap-2"
                  >
                    {" "}
                    <SiLivechat />
                    Live Chat
                  </a>
                </li>
                {/* list unstyled */}
              </ul>
              {/* header contact */}
            </div>
          </nav>
          {/* container */}
        </div>
        {/* header-con */}
      </header>
    </>
  );
}
