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
      router.push(
        `/login?redirect=${encodeURIComponent(window.location.pathname)}`
      );
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
              <div className="row">{children}</div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}
