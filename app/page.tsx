import React from "react";
import { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Pricing from "@/components/pricing";
import { Globals } from "@/utils/globals";
import Partners from "@/components/partner";
import Experience from "@/components/experience";
import FieldInput from "@/components/field-input";
import Testimonial from "@/components/testimonial";
import HeroSection from "@/components/hero-section";
import OtherThings from "@/components/other-things";
import SecurityFeatures from "@/components/securitty-features";
export const metadata: Metadata = Globals.getMetaData({
  title: "Home",
  description:
    "Openchains Technologies provides comprehensive digital solutions, specializing in software development, including blockchain integration, web and mobile applications, interactive game design, and embedded systems.",
  path: "",
});
export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Pricing />
      <FieldInput />
      <SecurityFeatures />
      <Experience />
      <OtherThings />
      <Testimonial />
      <Partners />
      <Footer />
    </>
  );
}
