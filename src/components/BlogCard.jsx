import React from "react";
import Draggable from "react-draggable";

const Dots = () => (
  <div className="px-4 py-2">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
);

const BlogCard = ({ title, content, link, tags }) => (
  <Draggable>
    <div className=" border border-2 border-[#404040] bg-white rounded-3xl min-w-min max-w-md bottom-200 hover:cursor-grab">
      <Dots />

      <div className="bg-black h-0.5 rounded-r-sm" />
      <div className="p-4">
        <h1 className="text-lg lg:text-2xl font-bold">{title}</h1>
        <p className="text-sm lg:text-lg pt-2 ">{content}</p>
        <div className="flex justify-between mt-4 as">
          <span>{tags}</span>
          {link && (
            <a href={link} target="_blank" className="clickLink">
              Read post →
            </a>
          )}
        </div>
      </div>
    </div>
  </Draggable>
);

export default BlogCard;
