"use client";

import AboutSection from "./about";
import Blog from "./blog";
import ContactSection from "./contact";
import Education from "./education";
import Experience from "./experience";
import HeroSection from "./hero-section";
import Projects from "./projects";
import Skills from "./skills";

export default function HomePage({ blogs }) {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  );
}
