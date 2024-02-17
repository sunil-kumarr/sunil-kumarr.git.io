import React from "react";
import BlogCard from "../../../components/BlogCard";

const BlogSection = () => (
  <section>
    <div className="flex flex-col justify-center items-center p-4 bg-[#ae8fdb] max-h-fit  lg:justify-between">
      <div className="">
        <h1>Read My Bloogs </h1>
        <h1 className="grunge-underline"></h1>
      </div>

      <div className="flex flex-col flex-wrap justify-evenly items-center lg:flex-row">
        <BlogCard
          title="Building a Scalable Data Segmentation System with Change Data Capture"
          content="The content highlights the critical role of data segmentation for competitive edge and provides insights into implementing an efficient system utilizing Change Data Capture (CDC) technology."
          tags="Microservices | Kafka"
          link={
            "https://medium.com/@sunil-kumarr/building-a-scalable-data-segmentation-system-with-change-data-capture-c48c563334a8"
          }
        />
        <BlogCard
          title="Creating Custom Middleware"
          content="The blog delves into crafting custom middleware for logging, emphasizing its importance in application development for tasks like debugging and error management. It guides through the creation process, aiming to enhance application functionality and resilience."
          tags="ASGI | FastAPI"
          link={
            "https://medium.com/@sunindus.sk/creating-custom-middleware-6b7ec5a8edd4"
          }
        />
        <BlogCard
          title="Change Data Capture: Unleashing the Power of Real-Time Data Integration"
          content="The blog explores Change Data Capture (CDC), a method for capturing and delivering individual data changes in real-time, shedding light on its importance in data management and application development."
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
