import BreadCrump from "@/components/breadcrump";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: "Projects",
  description:
    "Explore our diverse range of projects showcasing our expertise in web design, development, and more.",
  keywords:
    "projects, web design, web development, graphic design, video editing, photo editing",
  author: "OpenChains",
};
export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>OpenChains - Projects</title>
        <meta
          name="description"
          content="Explore our diverse range of projects showcasing our expertise in web design, development, and more."
        />
        <meta
          name="keywords"
          content="projects, web design, web development, graphic design, video editing, photo editing"
        />
        <meta name="author" content="OpenChains" />
      </Head>
      <Header />
      <BreadCrump page={"projects"} title={"Projects"} />

      <Projects />
      <Footer />
    </>
  );
}
