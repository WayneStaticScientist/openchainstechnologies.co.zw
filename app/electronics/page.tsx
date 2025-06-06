import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PassedDetails from "@/components/sub/passed-details";
import { baseUrl, ServicesList } from "@/utils/globals";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: "Electronics Services",
  description:
    "Explore our comprehensive electronics services including PCB design, circuit simulation, hardware prototyping, and more. Tailored solutions to meet your needs.",
  keywords:
    "electronics services, PCB design, circuit simulation, hardware prototyping, custom electronics solutions",
  author: "OpenChains",
  alternates: {
    canonical: baseUrl + "/electronics", // Self-referencing canonical
  },
};
export default function ElectronicsServices() {
  return (
    <>
      <Head>
        <title>Electronics Services - OpenChains</title>
        <meta
          name="description"
          content="Explore our comprehensive electronics services including PCB design, circuit simulation, hardware prototyping, and more. Tailored solutions to meet your needs."
        />
        <meta
          name="keywords"
          content="electronics services, PCB design, circuit simulation, hardware prototyping, custom electronics solutions"
        />
        <meta name="author" content="OpenChains" />
      </Head>
      <Header />
      <BreadCrump page={"electronicsservices"} title={"Electronics Services"} />
      <PassedDetails
        img={"/assets/img/electronics.jpg"}
        title={"Electronics Services"}
        description={ServicesList[4].desc}
        list={ServicesList[4].list}
        faqs={[
          {
            title: "What types of electronics services do you offer?",
            summary:
              "We offer a wide range of electronics services including PCB design, circuit simulation, and hardware prototyping.",
          },
          {
            title: "How long does it take to complete an electronics project?",
            summary:
              "The duration depends on the complexity of the project, but typically it ranges from 2 to 6 days.",
          },
          {
            title:
              "Can I customize the electronics service to fit my specific needs?",
            summary:
              "Yes, we provide fully customizable electronics services tailored to your requirements.",
          },
          {
            title: "What is the cost of an electronics service?",
            summary:
              "The cost varies based on the scope and complexity of the project. Contact us for a detailed quote.",
          },
          {
            title:
              "Do you provide support after the electronics service is delivered?",
            summary:
              "Yes, we offer post-delivery support to ensure the service meets your expectations and functions as intended.",
          },
        ]}
        min={5}
        normal={50}
        nop={20}
      />
      <Footer />
    </>
  );
}
