"use client";

import AboutSection from "./homepage/about";
import ContactSection from "./homepage/contact";
import Education from "./homepage/education";
import Experience from "./homepage/experience";
import HeroSection from "./homepage/hero-section";
import Projects from "./homepage/projects";
import Skills from "./homepage/skills";

export default function HomePage({ blogs }) {
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
