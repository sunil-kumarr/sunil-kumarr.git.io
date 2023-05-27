import React from "react";
import BlogCard from "../../../components/BlogCard";

const BlogSection = () => (
  <section>
    <div className="flex flex-col justify-center align-center p-10 bg-[#ae8fdb] max-h-fit  lg:justify-between">
      <h1 className="customFont m-10 lg:m-20 "> Bloogs </h1>
      <div className="grid grid-cols-1 grid-rows-2 grid-flow-col lg:grid-flow-row lg:grid-cols-2 lg:grid-rows-1 gap-4 m-4">
        <BlogCard
          title="Creating Custom Middleware"
          content="Today we will create a custom middleware for logging. we all have applications that need logging for multiple purposes like debugging, errors, etc…"
          tags="ASGI | FastAPI"
          link={
            "https://medium.com/@sunindus.sk/creating-custom-middleware-6b7ec5a8edd4"
          }
        />
        <BlogCard
          title="Change Data Capture: Unleashing the Power of Real-Time Data Integration"
          content="Change Data Capture, commonly referred to as CDC, is a method for capturing and delivering individual data changes in real-time."
          tags="CDC | Kafka"
          link={
            "https://sunil-kumarr.medium.com/change-data-capture-unleashing-the-power-of-real-time-data-integration-a0c7ad400be6"
          }
        />
      </div>
      <div></div>
    </div>
  </section>
);

export default BlogSection;
