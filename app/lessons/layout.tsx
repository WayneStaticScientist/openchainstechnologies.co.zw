"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SplashLoader from "@/components/loader";
import TutorialsTopBar from "@/components/tutorials-topbar";
import { HtmlChapterFootMap } from "@/utils/chapters-html";
import { Globals } from "@/utils/globals";
import { getUserFromStore } from "@/utils/user-store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoYoutube } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";

export default function LayoutLessons({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const user = getUserFromStore();
    if (user) {
      setLoading(false);
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <>
      {loading ? (
        <SplashLoader />
      ) : (
        <>
          <TutorialsTopBar />
          <Header />
          <section
            className="singleblog-section blogpage-section gradient"
            id="single"
          >
            <div
              className="container wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="row">
                {children}
                <div className="col-lg-4 col-md-12 col-sm-12 col-12 column">
                  <div className="box1">
                    <h5>Chapter Sections</h5>
                    <ul className="list-unstyled mb-0">
                      {HtmlChapterFootMap.map((e, i) => (
                        <li key={i} className="text-size-16">
                          <a href={e.path} className="tw:flex tw:gap-3">
                            <span>{i + 1}</span>
                            {e.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="box1 box3">
                    <h5>Follow Us</h5>
                    <div className="social-icons">
                      <ul className="mb-0 list-unstyled ">
                        <li>
                          <a
                            href={Globals.Facebook}
                            className="text-decoration-none"
                          >
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
                          <a
                            href={Globals.Instagram}
                            className="text-decoration-none"
                          >
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
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}
