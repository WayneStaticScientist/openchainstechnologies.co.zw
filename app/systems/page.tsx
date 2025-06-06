import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PassedDetails from "@/components/sub/passed-details";
import { baseUrl, ServicesList } from "@/utils/globals";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: "System Design",
  description:
    "We provide top-notch system services to help you create stunning visuals for your brand.",
  keywords:
    "system design, system architecture, software development, system integration",
  author: "OpenChains",
  alternates: {
    canonical: baseUrl + "/systems", // Self-referencing canonical
  },
};
export default function SystemServices() {
  return (
    <>
      <Head>
        <title>OpenChains - System Services</title>
        <meta
          name="description"
          content="We provide top-notch system services to help you create stunning visuals for your brand."
        />
        <meta
          name="keywords"
          content="system design, system architecture, software development, system integration"
        />
        <meta name="author" content="OpenChains" />
      </Head>
      <Header />
      <BreadCrump page={"systems"} title={"System Services"} />
      <PassedDetails
        img={"/assets/img/system.jpg"}
        title={"System Design"}
        description={ServicesList[3].desc}
        list={[
          "E-commerce Platform: Designing scalable platforms for online shopping.",
          "Healthcare System: Creating systems for patient management and medical records.",
          "Banking System: Developing secure systems for transactions and account management.",
          "Social Media Platform: Designing systems for user interaction and content sharing.",
          "IoT Systems: Creating architectures for connected devices and data processing.",
        ]}
        faqs={[
          {
            title: "Examples of System Design",
            summary: `System design is a complex process that involves creating a blueprint for a system that meets specific requirements. Here are some examples of system design projects:
            1. **E-commerce Platform**: Designing a scalable e-commerce platform that can handle high traffic, manage inventory, and process payments securely. This includes designing the architecture, database schema, and user interface.
            2. **Healthcare System**: Developing a system for managing patient records, appointments, and medical histories while ensuring data privacy and compliance with regulations.
            3. **Banking System**: Creating a secure and efficient system for handling financial transactions, account management, and fraud detection.
            4. **Social Media Platform**: Designing a platform that supports user interaction, content sharing, and real-time communication.
            5. **IoT Systems**: Building systems that connect and manage Internet of Things (IoT) devices, enabling data collection and analysis.`,
          },
        ]}
        min={150}
        normal={300}
        nop={4}
      />
      <Footer />
    </>
  );
}
