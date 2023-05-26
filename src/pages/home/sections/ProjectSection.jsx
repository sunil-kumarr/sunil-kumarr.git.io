import React from "react";
import ShadowCard from "../../../components/ShadowCard";
import { DiJava, DiDocker } from "react-icons/di";
import { TbApi } from "react-icons/tb";
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

const ProjectSection = () => (
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
                  <strong>Tech:</strong> Java, SpringBoot, Apache Kafka, Netflix
                  Conductor, K8s, Docker, Gradle
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
              Wrapper Service for vendor API integrations. Integrated more than
              50+ API from telecalling vendor SAAS paltform and contributed to
              the frontend of the same.
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
);

export default ProjectSection;
