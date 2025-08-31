import About from "@/components/about";
import BreadCrump from "@/components/breadcrump";
import Experience2 from "@/components/experience2";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Partners from "@/components/partner";
import Testimonial from "@/components/testimonial";
import WhyChooseUs from "@/components/why-choose-us";
import { baseUrl, Globals } from "@/utils/globals";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = Globals.getMetaData({
  title: "About",
  description:
    "Learn about OpenChains, our mission, vision, and the team behind our innovative software solutions.",
  path: "/about",
});
export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OpenChains Technologies",
    url: baseUrl,
    logo: `${baseUrl}/assets/img/logo/web.png`, // Use a proper image file for the logo
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
    sameAs: [
      Globals.Facebook, // Add links to your social media profiles
      // Add other social media links
    ],
  };

  const StructuredData = ({
    schema,
  }: {
    schema: typeof organizationSchema;
  }) => (
    <script
      id="schema-organization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
  return (
    <>
      <StructuredData schema={organizationSchema} />
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
