import React from "react";
import BrowserCard from "../../../components/BrowserCard";

const BlogSection = () => (
  <section>
    <div className="flex flex-col justify-center align-center p-10 bg-[#ae8fdb] max-h-fit lg:flex-row lg:justify-between">
      <h1 className="customFont m-10 lg:m-20 "> Bloogs </h1>
      <div className="grid grid-cols-1 grid-rows-1 grid-flow-row lg:relative p-4">
        <BrowserCard
          title="Creating Custom Middleware"
          content="Today we will create a custom middleware for logging. we all have applications that need logging for multiple purposes like debugging, errors, etc…"
          tags="ASGI"
          link={
            "https://medium.com/@sunindus.sk/creating-custom-middleware-6b7ec5a8edd4"
          }
        />
      </div>
      <div></div>
    </div>
  </section>
);

export default BlogSection;
