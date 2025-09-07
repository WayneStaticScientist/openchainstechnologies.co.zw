
import BreadCrump from "@/components/breadcrump";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { baseUrl, Globals } from "@/utils/globals";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: "RelationShip",
  description:
    ".",
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
      <BreadCrump
        page={"contact"}
        title={"Our Relationship"}
        summary={
          "What have we decide"
        }
      />
      <section className="float-left w-100 position-relative contact-help-con padding-top padding-bottom main-box text-center">
          I want a relationship with you , i love you at Liliota , You mean so much to me , Hope you will be there for me
     </section>  
      <Footer />
    </>
  );
}
