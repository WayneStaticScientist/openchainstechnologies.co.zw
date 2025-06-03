import About from "@/components/about";
import AboutExtend from "@/components/about-extend";
import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Marqueee from "@/components/marquee";
import WhyChooseUs from "@/components/why-choose-us";
import React from "react";

export const metadata = {
  title: "About",
  description:
    "Learn about OpenChains, our mission, vision, and the team behind our innovative software solutions.",
};
export default function AboutPage() {
  return (
    <>
      <Header />
      <BreadCrump page={"about"} title={"About OpenChains"} />
      <WhyChooseUs />
      <Marqueee />
      <AboutExtend />
      <About />
      <Footer />
    </>
  );
}
