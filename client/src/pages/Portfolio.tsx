import React from "react";
import NavComponent from "../components/Nav";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export interface IPortfolioPageProps {}

const PortfolioPage: React.FunctionComponent<IPortfolioPageProps> = (props) => {
  type Project = {
    name: string;
    image: string;
    description: string;
    github: string;
    site: string;
  };

  let projects: Project[];

  projects = [
    {
      name: "Sole Intentions v2",
      image: "sole-intentions2.png",
      description: "Mongoose, React.js, etc",
      github: "https://github.com/marissann11/sole-REACTions",
      site: "https://sole-intentions.herokuapp.com/",
    },
    {
      name: "Sole Intentions",
      image: "sole-intentions.png",
      description: "SQL, Handlebars, etc",
      github: "https://github.com/marissann11/sole-intentions-TMT",
      site: "https://soleintentions.herokuapp.com/",
    },
    {
      name: "Weather Dashboard",
      image: "weather.png",
      description: "technologies, etc",
      github: "https://github.com/marissann11/weather-dashboard-week6",
      site: "https://marissann11.github.io/weather-dashboard-week6/",
    },
    {
      name: "Password Generator",
      image: "password.png",
      description: "technologies, etc",
      github: "https://github.com/marissann11/password-generator",
      site: "https://marissann11.github.io/password-generator/",
    },
    {
      name: "Code Quiz",
      image: "quiz.png",
      description: "technologies, etc",
      github: "https://github.com/marissann11/code-quiz-week4-challenge",
      site: "https://marissann11.github.io/code-quiz-week4-challenge/",
    },
    {
      name: "Work Day Scheduler",
      image: "workday.png",
      description: "technologies, etc",
      github: "https://github.com/marissann11/work-day-scheduler-week5",
      site: "https://marissann11.github.io/work-day-scheduler-week5/",
    },
  ];

  return (
    <div>
      <NavComponent />
      <Carousel>
        {projects.map((project, i) => (
          <Paper key={i}>
            <p>{project.name}</p>
            <p>{project.description}</p>
            <Button>{project.github}</Button>
            <Button>{project.site}</Button>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default PortfolioPage;
