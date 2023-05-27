import React, { useEffect, useState } from "react";
import { GiThorHammer } from "react-icons/gi";
import SeverSVG from "../../../assets/svg/gameroom.svg";
import HeadLamp from "../../../assets/img/hang-lamp.png";

const IntroSection = () => {
  const roles = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Super Developer",
  ];
  const [role, setRole] = useState(roles[0]);
  const [index, setIndex] = useState(0);
  let nIntervId;
  function changeRole() {
    if (!nIntervId) {
      nIntervId = setInterval(updateRole, 5002);
    }
  }

  function updateRole() {
    setRole(roles[index]);
    console.log(role, index);
    setIndex(Math.ceil((index + 1) % roles.length));
  }

  useEffect(() => {
    changeRole();
    return () => {
      clearInterval(nIntervId);
    };
  }, [index]);

  return (
    <section class="grid grid-cols-1 grid-rows-2 grid-flow-col md:grid-cols-6 md:grid-rows-1 md:grid-flow-row">
      <div class="col-span-2 h-96 none lg:h-screen bg-[#f6f4f6] flex flex-col justify-end pt-10 ">
        <img
          src={HeadLamp}
          className="relative top-20 right-6 w-16 h-16 self-center lg:w-40 lg:h-40 lg:self-end "
        />
        <img src={SeverSVG} className="h-96 lg:w-fit lg:h-fit" />
      </div>

      <div class="col-span-6 md:col-span-4 h-96 lg:h-screen bg-[#6fdcbf] flex flex-col justify-center items-center">
        <div class="customFont p-10 md:p-12 lg:p-24">
          <div class="pb-4 pr-4 text-lg md:text-xl lg:text-2xl flex w-fit">
            <span class="pr-4 inline-block text-justify text-sm md:text-2xl">
              {"> Hi,I am a"}
            </span>
            <span class="typewriter text-white font-bold text-sm md:text-2xl text-center">
              {role}
            </span>
          </div>

          <h1 class="text-2xl md:text-4xl lg:text-6xl">
            I Like to create, build and connect things on server side. I also
            write and talk about tech stuff.
            <GiThorHammer className="inline hammer" />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
