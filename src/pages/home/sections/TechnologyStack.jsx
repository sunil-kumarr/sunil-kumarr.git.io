import React from "react";
import { DiJava, DiMysql } from "react-icons/di";
import {
  SiKubernetes,
  SiJavascript,
  SiReact,
  SiApachekafka,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiAmazonec2,
  SiAmazons3,
  SiDjango,
  SiFlask,
  SiNodedotjs,
  SiGo,
  SiAndroid,
  SiFlutter,
  SiDocker,
  SiJenkins,
  SiGithub,
  SiHelm,
  SiKong,
  SiRoundcube,
  SiAmazonsqs,
  SiAmazonapigateway,
  SiAwslambda,
} from "react-icons/si";
import { TechStackCard } from "../../../components/TechStackCard";

const backendSkills = [
  { skill: "Django", icon: <SiDjango />, rate: "4.5/5.0" },
  { skill: "Flask", icon: <SiFlask />, rate: "4.5/5.0" },
  { skill: "FastAPI", icon: <SiFastapi />, rate: "4.5/5.0" },
  { skill: "Python", icon: <SiPython />, rate: "4.5/5.0" },
  { skill: "Java", icon: <DiJava />, rate: "4.0/5.0" },
  { skill: "NodeJS", icon: <SiNodedotjs />, rate: "3/5.0" },
  { skill: "Go Lang", icon: <SiGo />, rate: "2.5/5.0" },
];
const frontendSkills = [
  { skill: "Android", icon: <SiAndroid />, rate: "4.5/5.0" },
  { skill: "React", icon: <SiReact />, rate: "4.0/5.0" },
  { skill: "React Native", icon: <SiReact />, rate: "4.0/5.0" },
  { skill: "Javascript", icon: <SiJavascript />, rate: "3.5/5.0" },
  { skill: "Flutter", icon: <SiFlutter />, rate: "2.5/5.0" },
];
const databaseSkills = [
  { skill: "PostgreSQL", icon: <SiPostgresql />, rate: "4.0/5.0" },
  { skill: "MySQL", icon: <DiMysql />, rate: "4.0/5.0" },
  { skill: "MongoDB", icon: <SiMongodb />, rate: "4.0/5.0" },
  { skill: "Kafka", icon: <SiApachekafka />, rate: "4.5/5.0" },
  { skill: "ElasticSearch", icon: <SiPostgresql />, rate: "4.0/5.0" },
  { skill: "Redis", icon: <SiRedis />, rate: "4.0/5.0" },
];
const devopsSkills = [
  { skill: "Docker", icon: <SiDocker />, rate: "4.0/5.0" },
  { skill: "Kubernetes", icon: <SiKubernetes />, rate: "4.0/5.0" },
  { skill: "Jenkins", icon: <SiJenkins />, rate: "4.0/5.0" },
  { skill: "Github", icon: <SiGithub />, rate: "4.5/5.0" },
  { skill: "Helm", icon: <SiHelm />, rate: "4.0/5.0" },
  { skill: "Kong", icon: <SiKong />, rate: "4.0/5.0" },
];
const aiSkills = [
  { skill: "LLM", icon: <SiRoundcube />, rate: "" },
  { skill: "LangChain", icon: <SiRoundcube />, rate: "" },
  { skill: "OpenAI", icon: <SiRoundcube />, rate: "" },
];

const cloudSkills = [
  { skill: "AWS S3", icon: <SiAmazons3 />, rate: "4.0/5.0" },
  { skill: "AWS EC2", icon: <SiAmazonec2 />, rate: "4.0/5.0" },
  { skill: "AWS SQS", icon: <SiAmazonsqs />, rate: "4.0/5.0" },
  { skill: "AWS Lamda", icon: <SiAwslambda />, rate: "4.0/5.0" },
  { skill: "Others", icon: <SiAmazonapigateway />, rate: "4.0/5.0" },
];

const TechnologyStack = () => (
  <section>
    <div className="flex justify-center items-center lg:flex-col  p-10 bg-green-100 customFont">
      <div>
        <h1>Technology Stack</h1>
        <h1 className="grunge-underline"></h1>
      </div>

      <div className="flex flex-col justify-evenly align-center lg:flex-wrap lg:flex-row  p-10 bg-green-100">
        <TechStackCard
          title="Backend Skills"
          subtitle="4 years Experience"
          skills={backendSkills}
        />
        <TechStackCard
          title="Aritifical Intelligence Stack"
          subtitle="6 Month Experience"
          skills={aiSkills}
        />
        <TechStackCard
          title="Frontend Skills"
          subtitle="3 years Experience"
          skills={frontendSkills}
        />
        <TechStackCard
          title="Database Stack"
          subtitle="4 years Experience"
          skills={databaseSkills}
        />
        <TechStackCard
          title="CI / CD Stack"
          subtitle="1 year Experience"
          skills={devopsSkills}
        />
        <TechStackCard
          title="Cloud Skills"
          subtitle="4 year Experience"
          skills={cloudSkills}
        />
      </div>
    </div>
  </section>
);

export default TechnologyStack;
