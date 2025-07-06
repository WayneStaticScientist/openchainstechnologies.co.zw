import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { baseUrl } from "@/utils/globals";
import BreadCrump from "@/components/breadcrump";
import ServicesSection from "@/components/services-section";
import SecurityFeatures from "@/components/securitty-features";

export const metadata = {
  title: "Services | OpenChains Technologies Zimbabwe",
  description:
    "Explore the range of services offered by OpenChains Technologies Zimbabwe, including custom software development, electronics solutions, IT consulting, and more to drive your business forward.",
  keywords: [
    "OpenChains Technologies",
    "Services",
    "Software Development Zimbabwe",
    "Electronics Solutions",
    "IT Consulting",
    "Business Solutions",
    "Custom Software",
    "Technology Services",
  ],
  alternates: {
    canonical: baseUrl + "/services",
  },
  openGraph: {
    title: "Services | OpenChains Technologies Zimbabwe",
    description:
      "Discover our professional services at OpenChains Technologies Zimbabwe: software development, electronics, IT consulting, and tailored technology solutions for your business.",
    url: baseUrl + "/services",
    siteName: "OpenChains Technologies Zimbabwe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | OpenChains Technologies Zimbabwe",
    description:
      "See the full suite of services from OpenChains Technologies Zimbabwe: software, electronics, consulting, and more for your business success.",
  },
};
export default function ServicesPage() {
  return (
    <>
      <Header />

      <BreadCrump
        page={"services"}
        title={"Services"}
        summary={
          "OpenChains Technologies offers a wide range of services including electronics solutions, technology tutorials, robust APIs, innovative inventions, modern website development, and cutting-edge technology integration."
        }
      />
      <ServicesSection />
      <SecurityFeatures />
      <Footer />
    </>
  );
}
