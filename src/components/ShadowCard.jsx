import React from "react";
import { IconContext } from "react-icons";

const ShadowCard = ({ icons, title, description, date }) => (
  <div className="card shadowbox flex flex-col align-center">
    <div className="bg-white h-50 grid grid-cols-4 grid-rows-2 grid-flow-row p-10 gap-y-8 gap-x-4">
      <IconContext.Provider value={{ size: "50px" }}>
        {icons.map((Icon, index) => (
          <div key={index}>{Icon}</div>
        ))}
      </IconContext.Provider>
    </div>
    <hr />
    <div className="p-4 ">
      <a href={`/projects/${title}`}>
        <h1 className="text-2xl font-bold customFont hover:underline">
          {title}
        </h1>
      </a>

      <p className="text-gray-400">{date}</p>
      <br />
      <p>{description}</p>
    </div>
  </div>
);

export default ShadowCard;
