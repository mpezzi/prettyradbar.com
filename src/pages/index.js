import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Intro from "../components/Intro";
import EventSection from "../components/EventSection";
import FoodSection from "../components/FoodSection";
import DrinkSection from "../components/DrinkSection";
import BeerSection from "../components/BeerSection";
import ContactSection from "../components/ContactSection";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Your friends are already here" />
      <Header />
      <Intro />
      <EventSection />
      <FoodSection />
      <DrinkSection />
      <BeerSection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
