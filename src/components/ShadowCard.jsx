import React from "react";
const ShadowCard = ({ content }) => (
  <div className="shadowbox h-2/6 w-2/6 md:flex">
    <h1 className="p-4 text-lg font-bold">{content}</h1>
  </div>
);

export default ShadowCard;
