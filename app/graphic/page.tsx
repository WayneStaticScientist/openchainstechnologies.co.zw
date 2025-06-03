import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PassedDetails from "@/components/sub/passed-details";
import { ServicesList } from "@/utils/globals";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: "Graphic Design Services",
  description:
    "We provide top-notch graphic design services to help you create stunning visuals for your brand.",
  keywords:
    "graphic design, logo design, branding, marketing materials, web design",
  author: "OpenChains",
};
export default function GraphicDesign() {
  return (
    <>
      <Head>
        <title>OpenChains - Graphic Design</title>
        <meta
          name="description"
          content="We provide top-notch graphic design services to help you create stunning visuals for your brand."
        />
        <meta
          name="keywords"
          content="graphic design, logo design, branding, marketing materials, web design"
        />
        <meta name="author" content="OpenChains" />
      </Head>
      <Header />
      <BreadCrump page={"graphic"} title={"Graphic Desing"} />
      <PassedDetails
        img={"/assets/img/graphic.jpg"}
        title={"Graphic Desing"}
        description={ServicesList[1].desc}
        list={ServicesList[1].list}
        faqs={[
          {
            title: "Why do I need graphic design services?",
            summary:
              "Graphic design services help create visually appealing and professional designs that effectively communicate your brand's message and attract your target audience.",
          },
          {
            title: "What types of graphic design services do you offer?",
            summary:
              "We offer a wide range of services including logo design, branding, marketing materials, social media graphics, website design, and more.",
          },
          {
            title:
              "How long does it take to complete a graphic design project?",
            summary:
              "The timeline depends on the complexity of the project. Simple designs may take a few days, while more complex projects can take several weeks.",
          },
          {
            title: "Can I request revisions to the designs?",
            summary:
              "Yes, we offer revisions to ensure the final design meets your expectations and aligns with your vision.",
          },
          {
            title:
              "What information do you need to start a graphic design project?",
            summary:
              "We need details about your brand, target audience, design preferences, and any specific requirements or ideas you have for the project.",
          },
        ]}
        min={5}
        normal={10}
        nop={48}
      />
      <Footer />
    </>
  );
}
