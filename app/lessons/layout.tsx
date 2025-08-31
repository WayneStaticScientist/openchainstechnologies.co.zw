"use client";
import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TutorialsTopBar from "@/components/tutorials-topbar";

export default function LayoutLessons({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
    </>
  );
}
