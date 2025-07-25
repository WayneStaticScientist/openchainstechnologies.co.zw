"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useRouter } from "next/navigation";
import SplashLoader from "@/components/loader";
import React, { useEffect, useState } from "react";
import { getUserFromStore } from "@/utils/user-store";
import TutorialsTopBar from "@/components/tutorials-topbar";
import { HtmlChapterFootMap } from "@/utils/chapters-html";

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
            className="singleblog-section blogpage-section gradient "
            id="single"
          >
            <div
              className="container wow fadeIn  tw:px-0! tw:max-w-[1200px]! tw:mx-auto! "
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="row tw:xl:w-[1200px]!">{children}</div>
            </div>
          </section>

          <Footer />
        </>
      )}
    </>
  );
}
