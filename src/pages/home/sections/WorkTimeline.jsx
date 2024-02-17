import React from "react";
import Timeline from "../../../components/Timeline";

const WorkTimeline = () => (
  <section>
    <div className="flex flex-col lg:flex-row justify-center align-center p-10 bg-lime-100">
      <div className="m-10 customFont">
        <h1> Work Timeline </h1>
        <h1 className="grunge-underline"></h1>
      </div>

      <Timeline />
    </div>
  </section>
);

export default WorkTimeline;
