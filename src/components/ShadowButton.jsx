import React from "react";
const ShadowButton = ({ content, link }) => (
  <a href={link} target="_blank">
    <div className="shadowbox">
      <p className="p-2 text-sm font-bold">{content}</p>
    </div>
  </a>
);

export default ShadowButton;
