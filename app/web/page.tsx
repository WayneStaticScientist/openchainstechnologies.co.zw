import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PassedDetails from "@/components/sub/passed-details";
import { baseUrl, Globals, ServicesList } from "@/utils/globals";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: "Web Services",
  description:
    "We build websites , webservices , microservices , graphic design , video editing , photoediting , simulations , electronics and more . Visit us today",
  keywords:
    "web design, web development, microservices, graphic design, video editing, photo editing, simulations, electronics",
  author: "OpenChains",
  alternates: {
    canonical: baseUrl + "/web", // Self-referencing canonical
  },
};
export default function WebServices() {
  return (
    <>
      <Head>
        <title>OpenChains - Web Services</title>
        <meta
          name="description"
          content="We build websites , webservices , microservices , graphic design , video editing , photoediting , simulations , electronics and more . Visit us today"
        />
        <link rel="canonical" href={`${Globals.BaseUrl}/webservices`} />
        <meta property="og:title" content="OpenChains - Web Services" />
        <meta
          property="og:description"
          content="We build websites , webservices , microservices , graphic design , video editing , photoediting , simulations , electronics and more . Visit us today"
        />
        <meta property="og:url" content={`${Globals.BaseUrl}/webservices`} />
      </Head>
      <Header />
      <BreadCrump page={"webservices"} title={"Web Services"} />
      <PassedDetails
        img={"/assets/img/web.jpg"}
        title={"Web Design"}
        description={ServicesList[0].desc}
        list={[
          "Portifolio websites",
          "Business websites",
          "School Portals",
          "Ecommerce Websites",
          "Live Streaming",
          "Ai Driven",
          "Customable Sites",
        ]}
        faqs={[
          {
            title: "How do i pay for website",
            summary: `Contact ${Globals.Phone} for payments`,
          },
          {
            title: "Do i pay before the final website",
            summary: `For portfolios and light websites you dont need to pay to see the final product but on heavy sites you need to pay deposit 35% of the price`,
          },
        ]}
        min={35}
        normal={120}
        nop={8}
      />
      <Footer />
    </>
  );
}
