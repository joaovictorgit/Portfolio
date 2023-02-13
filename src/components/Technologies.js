import {
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiJava,
} from "react-icons/di";
import {
  SiTypescript,
  SiGraphql,
  SiPrisma,
  SiFirebase,
  SiSequelize,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import "../styles/components/technologies.sass";

const technologiesType = [
  {
    id: "html",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    icon: <DiCss3 />,
  },
  {
    id: "js",
    icon: <IoLogoJavascript />,
  },
  {
    id: "node",
    icon: <DiNodejsSmall />,
  },
  {
    id: "mysql",
    icon: <DiMysql />,
  },
  {
    id: "react",
    icon: <DiReact />,
  },
  {
    id: "java",
    icon: <DiJava />,
  },
  {
    id: "typescript",
    icon: <SiTypescript />,
  },
  {
    id: "graphql",
    icon: <SiGraphql />,
  },
  {
    id: "prisma",
    icon: <SiPrisma />,
  },
  {
    id: "firebase",
    icon: <SiFirebase />,
  },
  {
    id: "sequelize",
    icon: <SiSequelize />,
  },
];

function Technologies() {
  return (
    <section className="technologies-container">
      <h2>Skills</h2>
      <div className="technologies-grid">
        {technologiesType.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
