import React from "react";
import BrowserCard from "../components/BrowserCard";
import ShadowButton from "../components/ShadowButton";
import ShadowCard from "../components/ShadowButton";
import SeverSVG from "../assets/svg/server-diagram.svg";
import Timeline from "../components/Timeline";

const HomePage = () => (
  <div>
    <section class="grid grid-cols-10 grid-rows-10 grid-flow-row">
      <div
        className="col-span-3 h-screen relative"
        style={{ backgroundColor: "#f6f4f6" }}
      >
        <div className="server">
          <img src={SeverSVG} />
        </div>
      </div>

      <div
        className="col-span-7 h-screen justify-center align-center"
        style={{ backgroundColor: "#6fdcbf" }}
      >
        <div className="intro-position">
          <p className="customFont text-2xl pb-4">
            <span className="customFont"> {">_"} </span> Hi, I'm sunil kumar
          </p>
          <h1 className="intro-font customFont">
            I Like to create, build and connect things on server side 🔨. I also
            write and talk about tech stuff.
          </h1>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-10 grid-flow-row">
      <div
        className="col-span-10 h-screen relative"
        style={{ backgroundColor: "#ae8fdb" }}
      >
        <div className="grid grid-cols-10 grid-rows-10 grid-flow-row">
          <h1 className="col-start-2 m-20 customFont"> Bloogs </h1>
          <div className="col-start-2 ">
            <BrowserCard
              title="Creating Custom Middleware"
              content="Today we will create a custom middleware for logging. we all have applications that need logging for multiple purposes like debugging, errors, etc…"
              tags="ASGI"
              link={
                "https://medium.com/@sunindus.sk/creating-custom-middleware-6b7ec5a8edd4"
              }
            />
          </div>
          <div className="col-start-5 row-start-2 ">
            <BrowserCard title="More Comming Sonn" content="..." />
          </div>

          <div className="col-start-8 button-read-blogs ">
            <ShadowButton content="Read Bloogs >>" />
          </div>
        </div>
      </div>
    </section>
    <section class="col-span-10">
      <div
        className="justify-center align-center flex p-10"
        style={{ backgroundColor: "#F9F5F6" }}
      >
        <h1 className="m-10 customFont"> Work Timeline </h1>
        <Timeline />
      </div>
    </section>
    <section class="col-span-10">
      <div
        className="justify-center align-center flex flex-col p-10"
        style={{ backgroundColor: "#FBFFDC" }}
      >
        <h1 className="col-start-2 m-20 customFont"> Projects </h1>
        <div className="grid grid-cols-3 grid-rows-3 grid-flow-row gap-16">
          <ShadowCard />
          <ShadowCard />
          <ShadowCard />
          <ShadowCard />
          <ShadowCard />
          <ShadowCard />
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
