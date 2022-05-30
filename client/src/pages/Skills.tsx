import React from "react";
import NavComponent from "../components/Nav";
import resumeImg from "../assets/resumeImg.png";
import "./styles/skills.scss";
import nodeImg from "../assets/backend/nodejs.png";
import graphqlImg from "../assets/backend/graphql.png";
import expressImg from "../assets/backend/express.png";
import prismaImg from "../assets/backend/prisma.png";
import reactImg from "../assets/frontend/react.png";
import jsImg from "../assets/frontend/javascript.png";
import typeImg from "../assets/frontend/typescript.png";
import htmlImg from "../assets/frontend/html.png";
import cssImg from "../assets/frontend/css.png";
import jqueryImg from "../assets/frontend/jquery.png";
import mysqlImg from "../assets/databases/mysql.png";
import postImg from "../assets/databases/postgresql.png";
import mongoImg from "../assets/databases/mongo.png";

export interface ISkillsPageProps {}

const SkillsPage: React.FunctionComponent<ISkillsPageProps> = (props) => {
  type Skill = {
    src: string;
    name: string;
    backend: boolean;
    frontend: boolean;
    database: boolean;
  };

  let skills: Skill[];

  skills = [
    {
      src: nodeImg,
      name: "Node js",
      backend: true,
      frontend: false,
      database: false,
    },
    {
      src: graphqlImg,
      name: "GraphQL",
      backend: true,
      frontend: false,
      database: false,
    },
    {
      src: expressImg,
      name: "Express js",
      backend: true,
      frontend: false,
      database: false,
    },
    {
      src: prismaImg,
      name: "Prisma ORM",
      backend: true,
      frontend: false,
      database: false,
    },

    {
      src: reactImg,
      name: "React js",
      backend: false,
      frontend: true,
      database: false,
    },
    {
      src: jsImg,
      name: "Javascript",
      backend: false,
      frontend: true,
      database: false,
    },
    {
      src: typeImg,
      name: "Typescript",
      backend: false,
      frontend: true,
      database: false,
    },
    {
      src: jqueryImg,
      name: "JQuery",
      backend: false,
      frontend: true,
      database: false,
    },
    {
      src: htmlImg,
      name: "HTML 5",
      backend: false,
      frontend: true,
      database: false,
    },
    {
      src: cssImg,
      name: "CSS",
      backend: false,
      frontend: true,
      database: false,
    },
    {
      src: mysqlImg,
      name: "MySQL",
      backend: false,
      frontend: false,
      database: true,
    },
    {
      src: postImg,
      name: "PostgreSQL",
      backend: false,
      frontend: false,
      database: true,
    },
    {
      src: mongoImg,
      name: "MongoDB",
      backend: false,
      frontend: false,
      database: true,
    },
  ];

  return (
    <>
      <NavComponent />
      <div className="skillsPage">
        <div className="skills">
          <h1>Backend Technologies</h1>
          {skills.map(
            (skill, i) =>
              skill.backend && (
                <img
                  src={skill.src}
                  alt={skill.name}
                  key={i}
                  className="skillsimg"
                ></img>
              )
          )}
          <h2>Databases</h2>
          {skills.map(
            (skill, i) =>
              skill.database && (
                <img
                  src={skill.src}
                  alt={skill.name}
                  key={i}
                  className="skillsimg"
                ></img>
              )
          )}
          <h2>Frontend Technologies</h2>
          {skills.map(
            (skill, i) =>
              skill.frontend && (
                <img
                  src={skill.src}
                  alt={skill.name}
                  key={i}
                  className="skillsimg"
                ></img>
              )
          )}
          <h2>Deployment & Version Control</h2>
          <h4>Heroku, GitHub Pages, MongoDB Atlas, Git, BitBucket, GitHub</h4>
          <h2>Additional Skills</h2>
          <h4>
            ESLint, Prettier, TDD, Jira, Data Visualization, Stripe API, Redux
          </h4>
          <h3>What I'm learning ... </h3>
          <p>C#, .NET, AWS</p>{" "}
        </div>
        <div className="resume">
          <h3>Download My Resume</h3>
          <img src={resumeImg} alt="screenshot of resume"></img>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
