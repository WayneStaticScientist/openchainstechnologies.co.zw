import BreadCrump from "@/components/breadcrump";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { baseUrl } from "@/utils/globals";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with OpenChains for inquiries, support, and collaboration opportunities.",
  alternates: {
    canonical: baseUrl + "/contact", // Self-referencing canonical
  },
};
export default function ContactPage() {
  return (
    <>
      <Head>
        <title>
          OpenChains - World Of Technologies | Webdesign, Development and more
        </title>
        <meta
          name="description"
          content="Contact Us Today | For webservices and consultation"
        />
      </Head>
      <Header />
      <BreadCrump page={"contact"} title={"Contact Us"} />
      <Contact />
      <Footer />
    </>
  );
}
