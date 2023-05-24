import React from "react";
import Java from "../assets/img/java.png";
import Python from "../assets/img/python.png";
import Javascript from "../assets/img/javascript.png";

const Skills = () => (
  <section>
    <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
      <h2 class="customFont mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
        Skill Market 😜
      </h2>
      <div class="grid grid-cols-2 gap-8 text-white-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
        <a href="#" class="flex justify-center items-center">
          <img src={Java} />
        </a>
        <a href="#" class="flex justify-center items-center">
          <img src={Python} />
        </a>
        <a href="#" class="flex justify-center items-center">
          <img src={Javascript} />
        </a>
        <a href="#" class="flex justify-center items-center"></a>
        <a href="#" class="flex justify-center items-center"></a>
        <a href="#" class="flex justify-center items-center"></a>
        <a href="#" class="flex justify-center items-center"></a>
      </div>
    </div>
  </section>
);

export default Skills;
