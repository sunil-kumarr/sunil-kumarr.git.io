import React from "react";
import BrowserCard from "../components/BrowserCard";
import ShadowButton from "../components/ShadowButton";
import ShadowCard from "../components/ShadowCard";
import SeverSVG from "../assets/svg/server-diagram.svg";
import Timeline from "../components/Timeline";
import Book1 from "../assets/img/book1.jpeg";
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
    <section class="grid grid-cols-1 grid-rows-2 grid-flow-col md:grid-cols-6 md:grid-rows-1 md:grid-flow-row">
      <div class="col-span-2 h-96 lg:h-screen   bg-[#f6f4f6] flex flex-col justify-center items-center p-12 md:p-10 lg:p-8">
        <img src={SeverSVG} />
      </div>

      <div class="col-span-6 md:col-span-4 h-96 lg:h-screen bg-[#6fdcbf] flex flex-col justify-center items-center">
        <div class="customFont p-10 md:p-12 lg:p-24">
          <p class="text-lg md:text-xl lg:text-2xl ">
            <span>{">_"}</span> Hi, I'm sunil kumar
          </p>
          <h1 class="text-lg md:text-4xl lg:text-6xl">
            I Like to create, build and connect things on server side 🔨. I also
            write and talk about tech stuff.
          </h1>
        </div>
      </div>
    </section>

    <section>
      <div className="flex flex-col lg:flex-row justify-center align-center p-10 bg-lime-100">
        <h1 className="m-10 customFont"> Work Timeline </h1>
        <Timeline />
      </div>
    </section>

    <section>
      <div className="flex flex-col justify-center align-center p-10 bg-[#FBFFDC]">
        <h1 className="m-20 customFont"> Projects </h1>
        <div className="grid grid-cols-1 grid-rows-3 grid-flow-col gap-4 lg:grid-cols-3 lg:grid-rows-1 lg:grid-flow-row">
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
      <div className="flex flex-col justify-center align-center p-10 bg-[#ae8fdb] max-h-fit lg:flex-row lg:justify-between">
        <h1 className="customFont m-10 lg:m-20 "> Bloogs </h1>
        <div className="grid grid-cols-1 grid-rows-1 grid-flow-row lg:relative p-4">
          <BrowserCard
            title="Creating Custom Middleware"
            content="Today we will create a custom middleware for logging. we all have applications that need logging for multiple purposes like debugging, errors, etc…"
            tags="ASGI"
            link={
              "https://medium.com/@sunindus.sk/creating-custom-middleware-6b7ec5a8edd4"
            }
          />
        </div>
        <div></div>
      </div>
    </section>

    <section>
      <div className="flex flex-col justify-center align-center p-10 bg-[#E3F4F4]">
        <h1 className="customFont m-10 text-xl lg:m-20 lg:text-2xl">
          Other Stuff
        </h1>
        <div className="grid grid-cols-1 grid-rows-3 grid-flow-col gap-y-8 gap-x-4 lg:grid-cols-3 lg:grid-rows-1 lg:grid-flow-row">
          <div className="shadowbox flex flex-col align-center w-fit h-fit">
            <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat border border-black border-b-2">
              <img
                src={Book1}
                class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                alt="Tech Talk"
              />
            </div>
            <hr />
            <div>
              <p className="p-4">
                <a
                  className="no-underline hover:underline"
                  href="https://www.packtpub.com/product/a-blueprint-for-production-ready-web-applications/9781803248509"
                  target="_blank"
                >
                  Quart Async Framework | Book Reviewer
                </a>
              </p>
            </div>
          </div>
          <div className="shadowbox flex flex-col align-center w-fit h-fit">
            <div className="flex flex-row align-center border border-black">
              <div class="relative max-w-xs lg:max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={Tech1}
                  class="max-w-xs lg:max-w-xl transition duration-300 ease-in-out hover:scale-150"
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
          <div className="shadowbox flex flex-col align-center w-fit h-fit">
            <div className="flex flex-row align-center border border-black ">
              <div class="relative max-w-xs  lg:max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={Tech2}
                  class=" max-w-sm lg:max-w-lg transition duration-300 ease-in-out hover:scale-150"
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
