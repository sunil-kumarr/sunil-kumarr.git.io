import React from "react";
import Draggable from "react-draggable";

const BrowserCard = ({ title, content, link, tags }) => (
  <Draggable>
    <div className=" border border-2 border-[#404040] bg-white p-2 rounded-3xl min-w-min max-w-md bottom-200">
      <div className="m-2">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <div className="border border-black "></div>
      <div className="p-4 relative customFont">
        <h1 className="text-lg lg:text-2xl font-bold">{title}</h1>
        <p className="text-sm lg:text-lg">{content}</p>
        <div className="flex justify-between mt-4">
          <span>{tags}</span>
          {link && (
            <a href={link} target="_blank" className="hover:underline">
              Read post →
            </a>
          )}
        </div>
      </div>
    </div>
  </Draggable>
);

export default BrowserCard;
