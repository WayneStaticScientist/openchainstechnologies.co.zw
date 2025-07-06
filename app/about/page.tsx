import About from "@/components/about";
import AboutExtend from "@/components/about-extend";
import BreadCrump from "@/components/breadcrump";
import Experience2 from "@/components/experience2";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Partners from "@/components/partner";
import Testimonial from "@/components/testimonial";
import WhyChooseUs from "@/components/why-choose-us";
import { baseUrl, Globals } from "@/utils/globals";
import React from "react";

export const metadata = {
  title: "About",
  keywords: [
    "OpenChains Technologies",
    "About OpenChains",
    "Software Solutions Zimbabwe",
    "Electronics Solutions",
    "Innovative Technology",
    "Tech Team Zimbabwe",
    "Business Success",
    "Mission and Vision",
  ],
  description:
    "Learn about OpenChains, our mission, vision, and the team behind our innovative software solutions.",
  alternates: {
    canonical: baseUrl + "/about", // Self-referencing canonical
  },
};
export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OpenChains Technologies",
    url: baseUrl + "/about",
    logo: "/favicon.ico",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: Globals.Phone,
      contactType: "customer service",
      areaServed: ["ZW"],
      availableLanguage: ["en"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: Globals.Address,
      addressLocality: Globals.City,
      addressRegion: "ZW",
      postalCode: "0009",
      addressCountry: "ZW",
    },
    description:
      "OpenChains Technologies is a leading technology company specializing in electronics, software, robotics, and future technologies.",
  };

  return (
    <>
      <script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />

      <BreadCrump
        page={"about"}
        title={"About"}
        summary={
          "OpenChains is dedicated to delivering innovative software and electronics solutions, driven by a passionate team focused on your success."
        }
      />
      <About />
      <Experience2 />
      <WhyChooseUs />
      <Testimonial />
      <Faqs />
      <Partners />
      <Footer />
    </>
  );
}
