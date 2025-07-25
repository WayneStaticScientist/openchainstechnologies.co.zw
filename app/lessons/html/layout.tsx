"use client";
import React from "react";
import { Globals } from "@/utils/globals";
import { IoLogoInstagram } from "react-icons/io";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoYoutube } from "react-icons/bi";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentPath, setCurrentPath] = React.useState("");
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, [window.location.pathname]);
  return (
    <>
      {children}
      <div className="col-lg-4 col-md-12 col-sm-12 col-12 column">
        <div className="box1">
          <h5>Chapter Sections</h5>
          <ul className="list-unstyled mb-0">
            {HtmlChapterFootMap.map((e, i) => (
              <li key={i} className="text-size-16">
                {currentPath === e.path ? (
                  <span className="text-decoration-underline">
                    <span>{i + 1}</span> {e.title}
                  </span>
                ) : (
                  <a href={e.path} className="tw:flex tw:gap-3">
                    <span>{i + 1}</span>
                    {e.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="box1 box3">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <ul className="mb-0 list-unstyled ">
              <li>
                <a href={Globals.Facebook} className="text-decoration-none">
                  <BiLogoFacebook className="social-networks" />
                </a>
              </li>
              <li>
                <a
                  href={Globals.getWhatappFormat("hie openchains")}
                  className="text-decoration-none"
                >
                  <BiLogoWhatsapp className="social-networks" />
                </a>
              </li>
              <li>
                <a href={Globals.Instagram} className="text-decoration-none">
                  <IoLogoInstagram className="social-networks" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/openchains"
                  className="text-decoration-none"
                >
                  <BiLogoYoutube className="social-networks" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
