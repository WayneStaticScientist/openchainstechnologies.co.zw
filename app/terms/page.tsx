import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Terms from "@/components/terms-and-conditions";
import React from "react";

export default function TermsAndConditions() {
  return (
    <>
      {" "}
      <Header />
      <BreadCrump
        page={"Terms And Conditions"}
        title={"Terms And Conditions"}
      />
      <Terms />
      <Footer />
    </>
  );
}
