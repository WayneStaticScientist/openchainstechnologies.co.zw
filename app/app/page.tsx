import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PassedDetails from "@/components/sub/passed-details";
import { Globals, ServicesList } from "@/utils/globals";
import React from "react";
export const metadata = {
  title: "App Services",
  description:
    "Explore our app services designed to meet your business needs and drive innovation.",
};
export default function AppServices() {
  return (
    <>
      <Header />
      <BreadCrump page={"appservices"} title={"App Services"} />
      <PassedDetails
        img={"/assets/img/app.jpg"}
        title={"App Design"}
        description={ServicesList[3].desc}
        list={ServicesList[3].list}
        faqs={[
          {
            title: "How do i pay for App",
            summary: `Contact ${Globals.Phone} for payments`,
          },
          {
            title: "Do i pay before the final App",
            summary: `YYou pay a deposit first and we continue app building , deposit is negotiable`,
          },
        ]}
        min={90}
        normal={220}
        nop={14}
      />
      <Footer />
    </>
  );
}
