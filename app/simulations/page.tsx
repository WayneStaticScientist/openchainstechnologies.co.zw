import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PassedDetails from "@/components/sub/passed-details";
import { baseUrl, ServicesList } from "@/utils/globals";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: "Simulation Services",
  description:
    "We provide top-notch simulation services to help you create stunning visuals for your brand.",
  keywords:
    "simulation, 3D modeling, engineering simulations, electronics process simulations",
  author: "OpenChains",
  alternates: {
    canonical: baseUrl + "/simulations", // Self-referencing canonical
  },
};
export default function SimulationServices() {
  return (
    <>
      <Head>
        <title>OpenChains - Simulation Services</title>
        <meta
          name="description"
          content="We provide top-notch simulation services to help you create stunning visuals for your brand."
        />
        <meta
          name="keywords"
          content="simulation, 3D modeling, engineering simulations, electronics process simulations"
        />
        <meta name="author" content="OpenChains" />
      </Head>
      <Header />
      <BreadCrump page={"simulationservices"} title={"Simulation Services"} />
      <PassedDetails
        img={"/assets/img/sim.jpg"}
        title={"Simulation Services"}
        description={ServicesList[2].desc}
        list={ServicesList[2].list}
        faqs={[
          {
            title: "What types of simulations do you offer?",
            summary:
              "We offer a wide range of simulations including 3d modeling, engineering simulations, and electronics process simulations.",
          },
          {
            title: "How long does it take to complete a simulation project?",
            summary:
              "The duration depends on the complexity of the project, but typically it ranges from 2 to 6 days.",
          },
          {
            title: "Can I customize the simulation to fit my specific needs?",
            summary:
              "Yes, we provide fully customizable simulations tailored to your requirements.",
          },
          {
            title: "What is the cost of a simulation service?",
            summary:
              "The cost varies based on the scope and complexity of the project. Contact us for a detailed quote.",
          },
          {
            title: "Do you provide support after the simulation is delivered?",
            summary:
              "Yes, we offer post-delivery support to ensure the simulation meets your expectations and functions as intended.",
          },
        ]}
        min={10}
        normal={60}
        nop={16}
      />
      <Footer />
    </>
  );
}
