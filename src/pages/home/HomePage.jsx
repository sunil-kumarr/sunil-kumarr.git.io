import React from "react";
import Footer from "./sections/Footer";
import BlogSection from "./sections/BlogSection";
import IntroSection from "./sections/IntroSection";
import WorkTimeline from "./sections/WorkTimeline";
import ProjectSection from "./sections/ProjectSection";
import PageFooter from "../../components/PageFooter";
import TechnologyStack from "./sections/TechnologyStack";

const HomePage = () => (
  <main>
    <IntroSection />
    <TechnologyStack />
    <WorkTimeline />
    <ProjectSection />
    <BlogSection />
    <Footer />
    <PageFooter />
  </main>
);

export default HomePage;
