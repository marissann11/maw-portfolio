import React, { useState } from "react";
import NavComponent from "../components/Nav";
import { useSpring, animated } from "react-spring";
import { ImageMap } from "@qiuz/react-image-map";
import { AreaType } from "./AreaType";

import portfolioImg from "../assets/portfolio.png";

import HomeComponent from "../components/HomeLink";
import "./styles/portfolio.scss";

export interface IPortfolioPageProps {}

const mapArea: any[] = [
  {
    width: "5.284644194756544%",
    height: "9.85867237687366%",
    left: "15.730337078651685%",
    top: "12.505353319057816%",
  },
  {
    width: "5.2434456928838955%",
    height: "8.351177730192722%",
    left: "26.669787765293385%",
    top: "25.053533190578158%",
  },
  {
    width: "5.742821473158552%",
    height: "8.993576017130621%",
    left: "42.2752808988764%",
    top: "8.993576017130621%",
  },
  {
    width: "5.617977528089887%",
    height: "8.56531049250535%",
    left: "73.73595505617976%",
    top: "7.922912205567452%",
  },
  {
    width: "6.242197253433209%",
    height: "8.993576017130621%",
    left: "9.691011235955056%",
    top: "82.65524625267666%",
  },
  {
    width: "5.2434456928838955%",
    height: "8.35117773019272%",
    left: "21.426342072409486%",
    top: "71.94860813704497%",
  },
  {
    width: "4.868913857677903%",
    height: "9.850107066381156%",
    left: "32.03807740324594%",
    top: "82.01284796573876%",
  },
  {
    width: "5.493133583021224%",
    height: "8.779443254817988%",
    left: "79.35393258426966%",
    top: "66.3811563169165%",
  },
  {
    width: "5.867665418227216%",
    height: "10.492505353319057%",
    left: "63.74843945068665%",
    top: "82.44111349036403%",
  },
];

const onMapClick = (area: AreaType, index: number) => {
  const tip = `click map${area.href || index + 1}`;
  alert(tip);
};

const PortfolioPage: React.FunctionComponent<IPortfolioPageProps> = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setActive((current) => !current);
  };

  const ImageMapComponent = React.useMemo(
    () => (
      <ImageMap
        className="usage-map"
        src={portfolioImg}
        map={mapArea}
        onMapClick={onMapClick}
      />
    ),
    [portfolioImg]
  );

  const mainSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

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
    <animated.main style={mainSpring}>
      <NavComponent />
      <div className="port">{ImageMapComponent}</div>
      <div className="sole1" onClick={handleClick}></div>
      <div className="sole2" onClick={handleClick}></div>
      <div className="weather" onClick={handleClick}></div>
      <div className="work" onClick={handleClick}></div>
      <div className="quiz" onClick={handleClick}></div>

      <HomeComponent />
    </animated.main>
  );
};

export default PortfolioPage;
