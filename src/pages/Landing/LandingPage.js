/*
   Landing Page
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import AvatarsSection from "./components/AvatarsSection";
import ContactSection from "./components/ContactSection";
import LandingFooter from "./components/LandingFooter";
import DemoSection from "./components/DemoSection";

const LandingPage = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Hero />
      <FeaturesSection />
      <AvatarsSection />
      <DemoSection />
      <ContactSection />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
