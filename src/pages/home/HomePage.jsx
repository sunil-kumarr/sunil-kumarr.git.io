import React from "react";
import Footer from "./sections/Footer";
import BlogSection from "./sections/BlogSection";
import IntroSection from "./sections/IntroSection";
import WorkTimeline from "./sections/WorkTimeline";
import ProjectSection from "./sections/ProjectSection";

const HomePage = () => (
  <main>
    <IntroSection />
    <WorkTimeline />
    <ProjectSection />
    <BlogSection />
    <Footer />
  </main>
);

export default HomePage;
