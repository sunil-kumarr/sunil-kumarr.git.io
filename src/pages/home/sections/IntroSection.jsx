import React from "react";
import SeverSVG from "../../../assets/svg/server-diagram.svg";

const IntroSection = () => (
  <section class="grid grid-cols-1 grid-rows-2 grid-flow-col md:grid-cols-6 md:grid-rows-1 md:grid-flow-row">
    <div class=" col-span-2 h-96 lg:h-screen bg-[#f6f4f6] flex flex-col justify-center items-center p-12 md:p-10 lg:p-8">
      <img src={SeverSVG} />
    </div>

    <div class="col-span-6 md:col-span-4 h-96 lg:h-screen bg-[#6fdcbf] flex flex-col justify-center items-center">
      <div class="customFont p-10 md:p-12 lg:p-24">
        <div class="pb-4 pr-4 text-lg md:text-xl lg:text-2xl flex w-fit">
          <span class="pr-4 inline-block text-justify">{"> Hi, I am a"}</span>
          <span class="typewriter text-white font-bold text-xl md:text-2xl text-center">
            Backend Developer
          </span>
        </div>

        <h1 class="text-3xl md:text-4xl lg:text-6xl">
          I Like to create, build and connect things on server side. I also
          write and talk about tech stuff.
          <span id="hammer">🔨</span>
        </h1>
      </div>
    </div>
  </section>
);

export default IntroSection;
