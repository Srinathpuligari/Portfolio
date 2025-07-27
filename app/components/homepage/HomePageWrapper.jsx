"use client";

import AboutSection from "./about";
import ContactSection from "./contact";
import Education from "./education";
import Experience from "./experience";
import HeroSection from "./hero-section";
import Projects from "./projects";
import Skills from "./skills";

export default function HomePageWrapper({ blogs }) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  );
}
