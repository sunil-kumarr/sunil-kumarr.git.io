import React, { useState } from "react";
import ShadowCard from "../../../components/ShadowCard";
import { DiJava, DiDocker } from "react-icons/di";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { HiOutlineCubeTransparent } from "react-icons/hi";
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
  SiAmazonec2,
  SiAmazons3,
  SiRedis,
} from "react-icons/si";

const ProjectSection = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(true);
  const [buttonText, setButtonText] = useState("Just show me less");
  return (
    <section>
      <div className="flex flex-col justify-center align-center p-10 bg-[#FBFFDC]">
        <h1 className="m-20 customFont"> Projects </h1>
        <div
          className={`grid grid-cols-1 grid-rows-${
            showMoreProjects ? 7 : 3
          } grid-flow-row gap-8 lg:grid-cols-3 lg:grid-rows-1`}
        >
          <ShadowCard
            icons={[
              <SiApachekafka />,
              <DiJava />,
              <SiSpringboot />,
              <SiKubernetes />,
              <DiDocker />,
              <SiGradle />,
              <SiMongodb />,
              <SiPostgresql />,
            ]}
            date="2023"
            title="Workflow Automation"
            description={
              <p>
                Designed and developed backend for a workflow creation tool for
                automating different platform actions using DAG's and User
                Interface. Highly customizable and modular design for addition
                of new actions in less than hour.
              </p>
            }
          />

          <ShadowCard
            icons={[
              <SiApachekafka />,
              <SiPython />,
              <SiFastapi />,
              <TbApi />,
              <SiPostgresql />,
              <DiDocker />,
              <SiKubernetes />,
              <HiOutlineCubeTransparent />,
            ]}
            date="2022"
            title="Webhook Data Ingestion Pipeline"
            description={
              <p>
                Designed and developed a webhook ingestion pipeline to process
                and store webhooks in Postgresql using kafka as buffer and kafka
                consumer for batching and chaining multiple queries to reduce
                load on database.
              </p>
            }
          />

          <ShadowCard
            icons={[
              <SiApachekafka />,
              <SiPostgresql />,
              <SiAmazonec2 />,
              <SiAmazons3 />,
              <SiRedis />,
              <SiMongodb />,
            ]}
            date="2022"
            title="Change Data Capture Pipeline"
            description={
              <p>
                Configured and Setup entire CDC pipeline components for
                capturing changes in data from multiple sources into kafka. This
                pipeline now powers use cases like table auditing, cumulative
                dashboard and reports, etc...
              </p>
            }
          />

          {showMoreProjects && (
            <>
              {" "}
              <ShadowCard
                icons={[
                  <SiPython />,
                  <SiFastapi />,
                  <SiPostgresql />,
                  <DiDocker />,
                  <SiKubernetes />,
                  <HiOutlineCubeTransparent />,
                ]}
                date="2022"
                title="Communication Microservice"
                description={
                  <p>
                    Redesigned and optimised entire service data flow for
                    performance improvement gains in API calls of upto 10x
                    times.
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
                date="2021"
                title="CG Collect (Feet On Street) "
                description={
                  <p>
                    On Field Collection application for agent to track and
                    recovery collections amount from defaulters.
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
                  <HiOutlineCubeTransparent />,
                  <SiKubernetes />,
                ]}
                date="2021"
                title="Telecalling Microservice"
                description={
                  <p>
                    Wrapper Service for vendor API integrations. Integrated more
                    than 50+ API from telecalling vendor SAAS paltform and
                    contributed to the frontend of the same.
                  </p>
                }
              />
              <ShadowCard
                icons={[
                  <SiApachekafka />,
                  <SiPython />,
                  <SiFastapi />,
                  <TbApi />,
                  <SiPostgresql />,
                  <DiDocker />,
                  <SiKubernetes />,
                  <HiOutlineCubeTransparent />,
                ]}
                date="2022"
                title="Export Microservice"
                description={
                  <p>
                    A API orchestrator microservice for extract huge amount of
                    data from different microservices in chunks and then combine
                    them into one file to be uploaded to AWS3 and sent in email
                    to clients.
                  </p>
                }
              />
            </>
          )}
        </div>
        <button
          className="shadowbox m-10 w-fit px-10 py-2 self-center"
          onClick={(event) => {
            setShowMoreProjects(!showMoreProjects);
            if (showMoreProjects) {
              setButtonText("Show me more of this");
            } else {
              setButtonText("Just show me less");
            }
          }}
        >
          {buttonText}
          <MdKeyboardDoubleArrowRight className="inline" />
        </button>
      </div>
    </section>
  );
};

export default ProjectSection;
