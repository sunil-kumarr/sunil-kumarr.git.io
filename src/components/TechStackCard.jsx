import React from "react";
import { DiDjango } from "react-icons/di";

const SkillTab = ({ icon, link, skill, rate }) => {
  return (
    <li>
      <a
        href={link}
        class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow "
      >
        {icon}
        <span class="flex-1 ms-3 whitespace-nowrap">{skill}</span>
        <span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded ">
          {rate}
        </span>
      </a>
    </li>
  );
};
export const TechStackCard = ({ title, subtitle, skills }) => {
  return (
    <div class="w-full max-w-sm p-4 m-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 ">
      <h5 class="mb-3 text-center text-base font-semibold text-gray-900 md:text-xl ">
        {title}
      </h5>
      <p class="text-center text-sm font-normal text-gray-500 ">{subtitle}</p>
      <ul class="my-4 space-y-3">
        {skills.map((item) => (
          <SkillTab icon={item.icon} skill={item.skill} rate={item.rate} />
        ))}
      </ul>
    </div>
  );
};
