import React from "react";
import BrowserCard from "../components/BrowserCard";
import ShadowButton from "../components/ShadowButton";
import ShadowCard from "../components/ShadowCard";
import SeverSVG from "../assets/svg/server-diagram.svg";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import { DiJava, DiDocker } from "react-icons/di";
import {
  SiKubernetes,
  SiJavascript,
  SiSpringboot,
  SiReact,
  SiApachekafka,
  SiGradle,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiAndroidstudio,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

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
    {/* <section class="col-span-10">
      <div
        className="justify-center align-center flex p-10"
        style={{ backgroundColor: "#E3F4F4" }}
      >
        <img src={SkillImg} height={200} width={400} />
        <Skills />
      </div>
    </section> */}
    <section>
      <div
        className="justify-center align-center flex flex-col p-10"
        style={{ backgroundColor: "#FBFFDC" }}
      >
        <h1 className="col-start-2 m-20 customFont"> Projects </h1>
        <div className="grid grid-cols-3 grid-rows-2 grid-flow-row gap-12 auto-rows-max">
          <ShadowCard
            icons={[
              <DiJava />,
              <SiSpringboot />,
              <SiApachekafka />,
              <SiKubernetes />,
              <DiDocker />,
              <SiGradle />,
              <SiMongodb />,
              <SiPostgresql />,
            ]}
            date="Nov, 2022 - May, 2023"
            title="Workflow Automation"
            description={
              <p>
                Automation of entire platform using a UI. Where company features
                are available as action blocks of graph to the user.
                <ol className="desc_style">
                  <li>
                    <strong>Tech:</strong> Java, SpringBoot, Apache Kafka,
                    Netflix Conductor, K8s, Docker, Gradle
                  </li>
                </ol>
              </p>
            }
          />
          <ShadowCard
            icons={[
              <SiPython />,
              <SiFastapi />,
              <TbApi />,
              <SiJavascript />,
              <SiReact />,
              <SiPostgresql />,
              <DiDocker />,
              <SiKubernetes />,
            ]}
            date="April, 2021 - Oct, 2021"
            title="Telecalling Service"
            description={
              <p>
                Wrapper Service for vendor API integrations. Integrated more
                than 50+ API from telecalling vendor SAAS paltform and
                contributed to the frontend of the same.
                <ol className="desc_style">
                  <li>
                    <strong>Tech:</strong> Javascript, ReactJs, React Native,
                    Android, Java
                  </li>
                </ol>
              </p>
            }
          />
          <ShadowCard
            icons={[
              <SiJavascript />,
              <SiReact />,
              <DiJava />,
              <SiAndroidstudio />,
            ]}
            date="May, 2021 - Sept, 2021"
            title="CG Collect (Feet On Street) "
            description={
              <p>
                On Field Collection application for agent to track and recovery
                collections amount from defaulters.
                <ol className="desc_style">
                  <li>
                    <strong>Tech:</strong> Javascript, ReactJs, React Native,
                    Android, Java
                  </li>
                </ol>
              </p>
            }
          />
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
