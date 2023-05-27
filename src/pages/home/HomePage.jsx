import React from "react";
import Footer from "./sections/Footer";
import BlogSection from "./sections/BlogSection";
import IntroSection from "./sections/IntroSection";
import WorkTimeline from "./sections/WorkTimeline";
import ProjectSection from "./sections/ProjectSection";
import PageFooter from "../../components/PageFooter";

const HomePage = () => (
  <main>
    <IntroSection />
    <WorkTimeline />
    <ProjectSection />
    <BlogSection />
    <Footer />
    <PageFooter />
  </main>
);

export default HomePage;
