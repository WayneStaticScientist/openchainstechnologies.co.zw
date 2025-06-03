import About from "@/components/about";
import CatalogueGroup from "@/components/catalog-group";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Inspirational from "@/components/inspirational";
import Marqueee from "@/components/marquee";
import News from "@/components/news";
import Photos from "@/components/photos";
import Projects from "@/components/projects";
import SearchSection from "@/components/search-section";
import Testimonial from "@/components/testimonial";
import React from "react";

export default function App() {
  return (
    <>
      <Header />
      <SearchSection />
      <HeroSection />
      <CatalogueGroup />
      <About />
      <Feature />
      <Projects />
      <Marqueee />
      <Inspirational />
      <Testimonial />
      <News />
      <Photos />
      <Footer />
    </>
  );
}
