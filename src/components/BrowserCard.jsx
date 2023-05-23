import React from "react";
import Draggable from "react-draggable";

const BrowserCard = ({ title, content, link, tags }) => (
  <Draggable>
    <div className="dragbox">
      <div className="ml-4">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <div className=" border border-black "></div>
      <div className="p-4 relative">
        <h1 className="customFont p-4 text-2xl font-bold h2">{title}</h1>
        <p>{content}</p>
        <div className="flex justify-between mt-4">
          <span>{tags}</span>
          {link && (
            <a href={link} target="_blank">
              Read post →
            </a>
          )}
        </div>
      </div>
    </div>
  </Draggable>
);

export default BrowserCard;
