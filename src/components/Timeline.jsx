import React from "react";
import ParkplusIcon from "../assets/img/parkplus-icon.png";
import CregenicsIcon from "../assets/img/credgenics-icon.png";
import PlaystoreIcon from "../assets/img/playstore.png";
import JuspayIcon from "../assets/img/juspay-icon.png";
import RetailpluseIcon from "../assets/img/retailpluse-icon.png";
const MarkerSVG = () => (
  <svg
    aria-hidden="true"
    class="w-3 h-3 text-blue-800 dark:text-blue-300"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clip-rule="evenodd"
    ></path>
  </svg>
);

const BoltSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z" />
  </svg>
);

const TimelineEvent = ({ icon, title, time, description, position, pLink }) => (
  <li className={`mb-10 ml-6 ${position}`}>
    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white  ">
      {icon}
    </span>
    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
      {title}
    </h3>
    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {time}
    </time>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      {description}
    </p>
    {pLink && (
      <a
        target="_blank"
        href={pLink}
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 "
      >
        <img src={PlaystoreIcon} className="mr-2 w-4 h-4" />
        Download From Playstore
      </a>
    )}
  </li>
);

const Timeline = () => (
  <ol class="relative border-l border-gray-400 dark:border-gray-700 m-4">
    <TimelineEvent
      title={"Park+ | Senior Software Developer"}
      icon={<img src={ParkplusIcon} />}
      time={"July 2023 - Current"}
      pLink={
        "https://play.google.com/store/apps/details?id=com.ovunque.parkwheels&pcampaignid=web_share"
      }
    />
    <TimelineEvent
      title={"Credgenics | Senior Software Developer"}
      icon={<img src={CregenicsIcon} />}
      time={"April 2023 - June 2023"}
    />
    <TimelineEvent
      title={"Credgenics | Software Developer"}
      icon={<img src={CregenicsIcon} />}
      time={"Jan 2021 - April 2023"}
      pLink={
        "https://play.google.com/store/apps/details?id=com.credgenics.fos&hl=en_US&gl=US&pli=1"
      }
    />
    <TimelineEvent
      title={"Retail Pulse Technologies | Software developer"}
      icon={<img src={RetailpluseIcon} />}
      time={"June 2020 - December 2020"}
      pLink={
        "https://play.google.com/store/apps/details?id=ai.retailpulse&hl=en_US&gl=US"
      }
    />
    <TimelineEvent
      title={"Juspay Technologies Pvt Ltd | Software Intern"}
      icon={<img src={JuspayIcon} />}
      time={"April 2019 - Sept 2019"}
    />
  </ol>
);

export default Timeline;
