import React from "react";
import BrowserCard from "../components/BrowserCard";
import ShadowButton from "../components/ShadowButton";
import ShadowCard from "../components/ShadowCard";
import SeverSVG from "../assets/svg/server-diagram.svg";
import Timeline from "../components/Timeline";
import Book1 from "../assets/img/book1.jpeg";
import Book2 from "../assets/img/book2.jpeg";
import Tech1 from "../assets/img/tech2.jpg";
import Tech2 from "../assets/img/hacka.jpg";
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
  <main>
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

    <section>
      <div
        className="justify-center align-center flex flex-col p-10"
        style={{ backgroundColor: "#E3F4F4" }}
      >
        <h1 className=" m-20 customFont"> Other Stuff </h1>
        <div className="grid grid-cols-3 grid-flow-row">
          <div
            className="shadowbox flex flex-col align-center"
            style={{ width: "fit-content" }}
          >
            <div className="flex flex-row align-center border border-black">
              <div class="relative max-w-sm overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={Book1}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="Tech Talk"
                />
              </div>
            </div>
            <div>
              <p className="p-4">
                <a
                  className="no-underline hover:underline"
                  href="https://www.packtpub.com/product/a-blueprint-for-production-ready-web-applications/9781803248509"
                  target="_blank"
                >
                  Quart Async Framework | Book Reviewer
                </a>{" "}
              </p>
            </div>
          </div>
          <div
            className="shadowbox flex flex-col align-center"
            style={{ width: "fit-content" }}
          >
            <div className="flex flex-row align-center border border-black">
              <div class="relative max-w-sm overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={Tech1}
                  class="max-w-xl transition duration-300 ease-in-out hover:scale-150"
                  alt="Tech Talk"
                />
              </div>
            </div>
            <div>
              <p className="p-4">
                <a
                  className="no-underline hover:underline"
                  href="https://docs.google.com/presentation/d/10zHL72s9JVvrioXTJWKVb7N-P_k6mPSUtVIoGeLbfUU/edit?usp=sharing
"
                  target="_blank"
                >
                  Tech Talk On CDC using Kafka by @ME
                </a>
              </p>
            </div>
          </div>
          <div
            className="shadowbox flex flex-col align-center"
            style={{ width: "fit-content" }}
          >
            <div className="flex flex-row align-center border border-black">
              <div class="relative max-w-sm overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={Tech2}
                  class="max-w-lg transition duration-300 ease-in-out hover:scale-150"
                  alt="hackathon"
                />
              </div>
            </div>
            <div>
              <p className="p-4">Credgenics Hackathon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default HomePage;
