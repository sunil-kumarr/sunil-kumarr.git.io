import React from "react";
import Timeline from "../../../components/Timeline";

const WorkTimeline = () => (
  <section>
    <div className="flex flex-col lg:flex-row justify-center align-center p-10 bg-lime-100">
      <h1 className="m-10 customFont"> Work Timeline </h1>
      <Timeline />
    </div>
  </section>
);

export default WorkTimeline;
