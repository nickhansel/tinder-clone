/*
   Landing Page
 */

import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturesSection from './FeaturesSection';
import AvatarsSection from './AvatarsSection';
import ContactSection from './ContactSection';
import LandingFooter from './LandingFooter';
import DemoSection from './DemoSection';

const LandingPage = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
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
