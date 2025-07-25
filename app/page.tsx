import React from "react";
import { Metadata } from "next";
import Header from "@/components/header";
import Pricing from "@/components/pricing";
import Experience from "@/components/experience";
import FieldInput from "@/components/field-input";
import HeroSection from "@/components/hero-section";
import SecurityFeatures from "@/components/securitty-features";
import OtherThings from "@/components/other-things";
import Testimonial from "@/components/testimonial";
import Partners from "@/components/partner";
import Footer from "@/components/footer";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://openchains.shop";
export const metadata: Metadata = {
  alternates: {
    canonical: baseUrl, // Self-referencing canonical
  },
  metadataBase: new URL(baseUrl),
};
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
