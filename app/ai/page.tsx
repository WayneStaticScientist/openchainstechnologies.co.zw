import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PassedDetails from "@/components/sub/passed-details";
import { ServicesList } from "@/utils/globals";
import React from "react";
export const metadata = {
  title: "AI Services",
  description:
    "Explore our AI services that leverage cutting-edge technology to enhance your business operations and drive innovation.",
};
export default function AiServices() {
  return (
    <>
      <Header />
      <BreadCrump page={"ai_sservices"} title={"Ai Services"} />
      <PassedDetails
        img={"/assets/img/ai.jpg"}
        title={"Ai Services"}
        description={ServicesList[5].desc}
        list={ServicesList[5].list}
        faqs={[
          {
            title: "What are AI services?",
            summary:
              "AI services involve the use of artificial intelligence technologies to solve problems, automate tasks, and improve efficiency in various industries.",
          },
          {
            title: "How can AI services benefit my business?",
            summary:
              "AI services can help your business by automating repetitive tasks, providing data-driven insights, enhancing customer experiences, and improving decision-making processes.",
          },
          {
            title: "What types of AI services do you offer?",
            summary:
              "We offer services such as natural language processing, computer vision, predictive analytics, chatbot development, and custom AI model development.",
          },
          {
            title: "Do I need technical expertise to use AI services?",
            summary:
              "No, our team will guide you through the process and provide solutions tailored to your needs, regardless of your technical expertise.",
          },
          {
            title: "How long does it take to implement AI services?",
            summary:
              "The implementation time depends on the complexity of the project, but we work closely with you to ensure timely delivery.",
          },
        ]}
        min={80}
        normal={250}
        nop={35}
      />
      <Footer />
    </>
  );
}
